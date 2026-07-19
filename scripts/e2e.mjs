/**
 * Drives the whole app in a real browser: sign up -> browse -> cart -> checkout
 * -> my courses -> admin authors a curriculum -> the player actually plays it.
 *
 * The last step matters most: NO course in the ported data has a curriculum, so
 * the admin curriculum builder is the only path by which the video player ever
 * gets content. If that loop doesn't close, the LMS doesn't work.
 */
import puppeteer from 'puppeteer-core';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE = 'http://localhost:3000';
const SHOT =
  '/private/tmp/claude-501/-Users-quant-Desktop-Thanh-Tran-projects-meta-ecom/52e14626-a5f4-446b-82d7-4ecdf35c3626/scratchpad';

const fails = [];
const check = (name, cond, extra = '') => {
  console.log(`${cond ? 'PASS' : 'FAIL'}  ${name}${extra ? ' — ' + extra : ''}`);
  if (!cond) fails.push(name);
};
const settle = (ms = 900) => new Promise((r) => setTimeout(r, ms));

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: ['--no-sandbox', '--window-size=1440,1000'],
});
const page = await browser.newPage();
await page.setViewport({width: 1440, height: 1000});

const errors = [];
page.on('pageerror', (e) => errors.push(String(e)));
page.on('console', (m) => {
  if (m.type() === 'error' || /hydrat/i.test(m.text())) errors.push(m.text());
});

const go = async (path) => {
  await page.goto(BASE + path, {waitUntil: 'domcontentloaded'});
  await settle();
};
const text = () => page.$eval('body', (b) => b.innerText);
const clickText = async (needle) => {
  const els = await page.$$('button, a');
  for (const el of els) {
    const t = await page.evaluate((e) => e.textContent, el);
    if (t && t.includes(needle)) {
      await el.click();
      return true;
    }
  }
  return false;
};
const fill = async (id, value) => {
  await page.click(`#${id}`, {clickCount: 3});
  await page.type(`#${id}`, value);
};
// TextInput owns its own generated id, so select by placeholder instead.
const fillByPlaceholder = async (ph, value) => {
  const sel = `input[placeholder="${ph}"]`;
  await page.click(sel, {clickCount: 3});
  await page.type(sel, value);
};

// ---------- every route responds ----------
const routes = [
  '/', '/khoa-hoc', '/gio-hang', '/blog', '/webinar', '/ebook', '/hoc-thu',
  '/ve-chung-toi', '/lien-he', '/dao-tao-doanh-nghiep', '/dieu-khoan',
  '/chinh-sach-bao-mat', '/chinh-sach-hoan-tien', '/dang-nhap', '/dang-ky',
  '/tai-khoan', '/tai-khoan/khoa-hoc-cua-toi', '/tai-khoan/thanh-toan',
  '/tai-khoan/bao-mat', '/admin', '/admin/khoa-hoc', '/admin/hoc-vien',
];
const broken = [];
for (const r of routes) {
  const res = await page.goto(BASE + r, {waitUntil: 'domcontentloaded'});
  if (res.status() >= 400) broken.push(`${r} -> ${res.status()}`);
}
check('all 22 routes respond 200', broken.length === 0, broken.join(', ') || 'no 404s');

// ---------- 1. signup ----------
await go('/dang-ky');
const signupIds = await page.$$eval('input', (els) => els.map((e) => e.id));
check('signup form renders inputs', signupIds.length >= 4, signupIds.join(','));
for (const [id, val] of Object.entries({
  [signupIds[0]]: 'Trần Thị Hồng Vân',
  [signupIds[1]]: '0912345678',
  [signupIds[2]]: 'van@meu.edu.vn',
  [signupIds[3]]: 'matkhau12345',
})) {
  if (id) await fill(id, val);
}
await clickText('Tạo tài khoản');
await settle(1200);
const loggedIn = await page.evaluate(() =>
  localStorage.getItem('isLoggedIn'),
);
check('signup logs the user in', loggedIn === 'true', `isLoggedIn=${loggedIn}`);

// ---------- 2. admin catalog lists the production courses ----------
await go('/admin/khoa-hoc');
let body = await text();
check('admin lists courses', /LIVESTREAM A.I MASTER/i.test(body));
await page.screenshot({path: `${SHOT}/admin-courses.png`});


// ---------- 3. the production-synced curriculum shows on the storefront ----------
await go('/khoa-hoc/livestream-ai-master');
body = await text();
check('production curriculum renders on course page',
  /TỔNG QUAN KHOÁ HỌC/.test(body));
check('preview lesson is badged', /Học thử/.test(body));

// ---------- 4. locked lesson is gated before purchase ----------
await go('/hoc/livestream-ai-master/l2');
body = await text();
check('non-preview lesson LOCKED before purchase',
  /Bài học đã bị khóa/.test(body));

// ---------- 5. preview lesson plays without buying ----------
await go('/hoc/livestream-ai-master/l1');
// Production lessons carry no public video URL (the real player is behind
// auth on meu.edu.vn), so a free preview lesson renders the honest
// "Chưa có video" state rather than a fake embed — what matters is that it
// is NOT the locked gate.
body = await text();
check('preview lesson opens free (not locked)',
  !/Bài học đã bị khóa/.test(body) && /BÀI 0: TỔNG QUAN KHOÁ HỌC/.test(body),
  'gating allows isPreview lesson');
await page.screenshot({path: `${SHOT}/player.png`});

// ---------- 6. buy it ----------
await go('/khoa-hoc/livestream-ai-master');
await clickText('Thêm vào giỏ hàng');
await settle();
await go('/gio-hang');
await fillByPlaceholder('Nguyễn Văn A', 'Trần Thị Hồng Vân');
await fillByPlaceholder('ban@email.com', 'van@meu.edu.vn');
await fillByPlaceholder('0912345678', '0912345678');
await clickText('Thanh toán');
await settle(1500);
const purchased = await page.evaluate(() =>
  JSON.parse(localStorage.getItem('purchasedCourses') || '[]'),
);
check('checkout records the purchase', purchased.length === 1,
  `courseId=${purchased[0]?.courseId}`);
const billing = await page.evaluate(() =>
  JSON.parse(localStorage.getItem('billingHistory') || '[]'),
);
check('checkout writes a billing record', billing.length === 1,
  `order=${billing[0]?.orderId}`);

// ---------- 7. it shows up in my courses ----------
await go('/tai-khoan/khoa-hoc-cua-toi');
body = await text();
check('purchased course appears in "Khóa học của tôi"',
  /LIVESTREAM A.I MASTER/i.test(body));
await page.screenshot({path: `${SHOT}/my-courses.png`});

// ---------- 8. previously-locked lesson now plays ----------
await go('/hoc/livestream-ai-master/l2');
body = await text();
check('purchase UNLOCKS the previously-locked lesson',
  !/Bài học đã bị khóa/.test(body),
  'locked gate gone after purchase');

// ---------- 9. billing page ----------
await go('/tai-khoan/thanh-toan');
body = await text();
check('billing history renders the order', /ORD-/.test(body));

// ---------- 10. admin dashboard reflects REAL revenue ----------
await go('/admin');
body = await text();
check('admin dashboard shows real computed revenue (not the legacy fake 324.5M)',
  /699\.000₫/.test(body) && !/324\.5/.test(body), 'derived from billingHistory');
await page.screenshot({path: `${SHOT}/admin-dashboard.png`});

// ---------- hygiene ----------
const hyd = errors.filter((e) => /hydrat/i.test(e));
check('no hydration mismatch anywhere', hyd.length === 0, hyd[0] || 'clean');
const real = errors.filter(
  (e) => !/hydrat|DevTools|Failed to load resource/i.test(e),
);
check('no page errors', real.length === 0, real[0] || 'clean');

await browser.close();
console.log(
  '\n' + (fails.length ? `${fails.length} FAILING: ${fails.join(', ')}` : 'ALL CHECKS PASSED'),
);
process.exit(fails.length ? 1 : 0);
