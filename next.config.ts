import type {NextConfig} from 'next';

/**
 * Every legacy *.html URL is kept alive as a 308 so existing links and search
 * results don't break.
 *
 * The eight content-free shells (course-ai, course-combo, course-custom,
 * course-pro-skills, course-soft-skills, enterprise-ai, enterprise-cases,
 * community) are NOT rebuilt — they contained a navbar, a footer, and nothing
 * else. They resolve to the filtered catalogue instead.
 */
const legacyRoutes: Record<string, string> = {
  '/index.html': '/',
  '/courses.html': '/khoa-hoc',
  '/course-detail.html': '/khoa-hoc',
  '/cart.html': '/gio-hang',
  '/about.html': '/ve-chung-toi',
  '/contact.html': '/lien-he',
  '/blog.html': '/blog',
  '/webinar.html': '/webinar',
  '/ebook.html': '/ebook',
  '/trial.html': '/hoc-thu',
  '/enterprise-training.html': '/dao-tao-doanh-nghiep',
  '/login.html': '/dang-nhap',
  '/signup.html': '/dang-ky',
  '/profile.html': '/tai-khoan',
  '/my-courses.html': '/tai-khoan/khoa-hoc-cua-toi',
  '/billing.html': '/tai-khoan/thanh-toan',
  '/security.html': '/tai-khoan/bao-mat',
  '/learning.html': '/tai-khoan/khoa-hoc-cua-toi',
  '/admin.html': '/admin',
  '/admin-courses.html': '/admin/khoa-hoc',
  '/admin-users.html': '/admin/hoc-vien',

  // The eight empty shells.
  '/course-ai.html': '/khoa-hoc',
  '/course-combo.html': '/khoa-hoc',
  '/course-custom.html': '/khoa-hoc',
  '/course-pro-skills.html': '/khoa-hoc',
  '/course-soft-skills.html': '/khoa-hoc',
  '/enterprise-ai.html': '/dao-tao-doanh-nghiep',
  '/enterprise-cases.html': '/dao-tao-doanh-nghiep',
  '/community.html': '/blog',
};

const nextConfig: NextConfig = {
  images: {
    // The hosts the ported content actually uses.
    //
    // The trailing wildcard is deliberate: admins paste an arbitrary image URL
    // when authoring a course, and next/image throws a hard 500 on any host not
    // listed here — so a whitelist turns a typo into a broken storefront page.
    // This is a localStorage prototype with a single trusted admin; if it ever
    // gets a real backend, drop the wildcard and validate the URL on write.
    remotePatterns: [
      {protocol: 'https', hostname: 'images.unsplash.com'},
      {protocol: 'https', hostname: 'upload.wikimedia.org'},
      {protocol: 'https', hostname: 'ui-avatars.com'},
      {protocol: 'https', hostname: 'i.pravatar.cc'},
      {protocol: 'https', hostname: '**'},
    ],
  },
  async redirects() {
    return Object.entries(legacyRoutes).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
