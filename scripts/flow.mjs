import puppeteer from 'puppeteer-core';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE = 'http://localhost:3000';
const SHOT =
  '/private/tmp/claude-501/-Users-quant-Desktop-Thanh-Tran-projects-meta-ecom/52e14626-a5f4-446b-82d7-4ecdf35c3626/scratchpad';

const log = (...a) => console.log(...a);
const settle = () => new Promise((r) => setTimeout(r, 900));
const fails = [];
function check(name, cond, extra = '') {
  log(`${cond ? 'PASS' : 'FAIL'}  ${name}${extra ? ' — ' + extra : ''}`);
  if (!cond) fails.push(name);
}

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: ['--no-sandbox', '--window-size=1400,1000'],
});
const page = await browser.newPage();
await page.setViewport({width: 1400, height: 1000});

const errors = [];
page.on('pageerror', (e) => errors.push(String(e)));
page.on('console', (m) => {
  const t = m.text();
  if (m.type() === 'error' || /hydrat|Warning/i.test(t)) errors.push(t);
});

// ---------- 1. Catalog ----------
await page.goto(`${BASE}/khoa-hoc`, {waitUntil: 'domcontentloaded'});
await settle();
const cardCount = await page.$$eval(
  'a[href^="/khoa-hoc/"]',
  (els) => els.length,
);
check('catalog renders course cards', cardCount >= 6, `${cardCount} cards`);

// ---------- 2. Category filter via nav deep-link ----------
await page.goto(`${BASE}/khoa-hoc?filter=tiktok`, {waitUntil: 'domcontentloaded'});
await settle();
const tiktokCards = await page.$$eval('a[href^="/khoa-hoc/"]', (e) => e.length);
await page.goto(`${BASE}/khoa-hoc?filter=shopee`, {waitUntil: 'domcontentloaded'});
await settle();
const shopeeCards = await page.$$eval('a[href^="/khoa-hoc/"]', (e) => e.length);
check(
  'category filter narrows results',
  tiktokCards === 2 && shopeeCards === 1 && cardCount === 8,
  `all=${cardCount} tiktok=${tiktokCards} shopee=${shopeeCards}`,
);

// ---------- 3. Course detail ----------
await page.goto(`${BASE}/khoa-hoc/gen-ai-studio-ung-dung-ai-vao-marketing-thuc-chien`, {
  waitUntil: 'domcontentloaded',
});
let body = await page.$eval('body', (b) => b.innerText);
check('detail page renders title', /Gen AI Studio/.test(body));
check('detail shows VND price', /4\.500\.000₫/.test(body), 'formatted vi-VN');
check(
  'empty curriculum handled honestly',
  /Nội dung đang được cập nhật/.test(body),
  'EmptyState, not a fake syllabus',
);

// ---------- 4. Add to cart ----------
const addBtn = await page.$$('button');
let clicked = false;
for (const b of addBtn) {
  const t = await page.evaluate((el) => el.textContent, b);
  if (t && t.includes('Thêm vào giỏ hàng')) {
    await b.click();
    clicked = true;
    break;
  }
}
check('add-to-cart button exists and clicks', clicked);
await new Promise((r) => setTimeout(r, 700));

body = await page.$eval('body', (b) => b.innerText);
check('toast replaces alert()', /Đã thêm/.test(body), 'astryx Toast shown');

const stored = await page.evaluate(() =>
  JSON.parse(localStorage.getItem('cartItems') || '[]'),
);
check(
  'cart persisted to legacy localStorage key',
  stored.length === 1 && stored[0].courseId,
  `key=cartItems, joins on courseId=${stored[0]?.courseId}`,
);

// ---------- 5. Cart page ----------
await page.goto(`${BASE}/gio-hang`, {waitUntil: 'domcontentloaded'});
await settle();
body = await page.$eval('body', (b) => b.innerText);
check('cart shows the item', /Gen AI Studio/.test(body));
check('cart shows total', /4\.500\.000₫/.test(body));
await page.screenshot({path: `${SHOT}/cart.png`});

// ---------- 6. Checkout validation (legacy validated NOTHING) ----------
const btns = await page.$$('button');
for (const b of btns) {
  const t = await page.evaluate((el) => el.textContent, b);
  if (t && /Thanh toán|Đăng nhập để thanh toán/.test(t)) {
    await b.click();
    break;
  }
}
await new Promise((r) => setTimeout(r, 500));
body = await page.$eval('body', (b) => b.innerText);
check(
  'empty checkout form is REJECTED',
  /Vui lòng nhập họ tên|Email không hợp lệ|Số điện thoại không hợp lệ/.test(
    body,
  ),
  'inline field errors',
);
await page.screenshot({path: `${SHOT}/checkout-validation.png`});

// ---------- 7. Player gating ----------
await page.goto(`${BASE}/hoc/gen-ai-studio-ung-dung-ai-vao-marketing-thuc-chien/nope`, {
  waitUntil: 'domcontentloaded',
});
body = await page.$eval('body', (b) => b.innerText);
check('player handles unknown lesson', /Không tìm thấy bài học/.test(body));

// ---------- 8. Hydration ----------
const hydrationErrors = errors.filter((e) => /hydrat/i.test(e));
check(
  'no hydration mismatch',
  hydrationErrors.length === 0,
  hydrationErrors[0] || 'clean',
);
const realErrors = errors.filter(
  (e) =>
    !/hydrat/i.test(e) &&
    !/Download the React DevTools/i.test(e) &&
    // next/link prefetches routes that don't exist yet (marketing pages land
    // in phase 5). Those 404s are expected until then.
    !/Failed to load resource/i.test(e),
);
check('no page errors', realErrors.length === 0, realErrors[0] || 'clean');

await browser.close();

log('\n' + (fails.length ? `${fails.length} FAILING: ${fails.join(', ')}` : 'ALL CHECKS PASSED'));
process.exit(fails.length ? 1 : 0);
