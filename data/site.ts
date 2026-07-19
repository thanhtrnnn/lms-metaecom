// Verbatim from the legacy footer / <title>. Do not rewrite the Vietnamese.

export const site = {
  name: 'META ECOM UNI',
  tagline: 'Nền Tảng Giáo Dục E-Commerce & Marketing Hàng Đầu Việt Nam',
  logo: '/images/logo-meu-ngang.png',
  contact: {
    address: 'Tầng 4, Số 111 Cù Chính Lan, Thanh Xuân, Hà Nội',
    phone: '0929 996 699',
    email: 'info@meu.edu.vn',
  },
} as const;

export type NavChild = {label: string; href: string; description?: string};
export type NavItem = {label: string; href: string; children?: NavChild[]};

/**
 * The legacy "Khóa học" dropdown pointed at courses.html?filter=<slug>.
 * The 8 content-free shell pages (course-ai, course-combo, course-custom,
 * course-pro-skills, course-soft-skills, enterprise-ai, enterprise-cases,
 * community) are gone — those entries resolve to the filtered catalogue
 * instead of to a page with a nav and nothing else.
 */
export const nav: NavItem[] = [
  {
    label: 'Khóa học',
    href: '/khoa-hoc',
    children: [
      {label: 'Tất cả khóa học', href: '/khoa-hoc'},
      {
        label: 'Chiến lược Livestream',
        href: '/khoa-hoc?filter=livestream',
        description: 'Livestream A.I, chuyển đổi cao',
      },
      {
        label: 'TikTok',
        href: '/khoa-hoc?filter=tiktok',
        description: 'Xây kênh và bán hàng TikTok Shop',
      },
      {
        label: 'Shopee',
        href: '/khoa-hoc?filter=shopee',
        description: 'Bán hàng sàn thương mại điện tử',
      },
      {
        label: 'Ecom Foundation',
        href: '/khoa-hoc?filter=ecom-foundation',
        description: 'Nền tảng sự nghiệp Ecom',
      },
    ],
  },
  {label: 'Doanh nghiệp', href: '/dao-tao-doanh-nghiep'},
  {
    label: 'Thư viện',
    href: '/blog',
    children: [
      {
        label: 'Blog & Kiến thức',
        href: '/blog',
        description: 'Bài viết chuyên sâu về E-Commerce',
      },
      {
        label: 'Đăng kí học thử',
        href: '/hoc-thu',
        description: 'Trải nghiệm miễn phí',
      },
      {
        label: 'Webinar miễn phí',
        href: '/webinar',
        description: 'Sự kiện trực tuyến hàng tuần',
      },
      {
        label: 'E-book & Template',
        href: '/ebook',
        description: 'Tài liệu tải về miễn phí',
      },
    ],
  },
  {label: 'Liên hệ', href: '/lien-he'},
  {label: 'Về chúng tôi', href: '/ve-chung-toi'},
];

export const footerColumns = [
  {
    heading: 'Khóa học',
    links: [
      {label: 'Chiến lược Livestream', href: '/khoa-hoc?filter=livestream'},
      {label: 'TikTok', href: '/khoa-hoc?filter=tiktok'},
      {label: 'Shopee', href: '/khoa-hoc?filter=shopee'},
      {label: 'Ecom Foundation', href: '/khoa-hoc?filter=ecom-foundation'},
    ],
  },
  {
    heading: 'Tài nguyên',
    links: [
      {label: 'Blog & Kiến thức', href: '/blog'},
      {label: 'Webinar miễn phí', href: '/webinar'},
      {label: 'E-book & Template', href: '/ebook'},
      {label: 'Đăng kí học thử', href: '/hoc-thu'},
    ],
  },
  {
    // These four were dead '#' links on every page of the legacy site.
    heading: 'Chính sách',
    links: [
      {label: 'Điều khoản sử dụng', href: '/dieu-khoan'},
      {label: 'Chính sách bảo mật', href: '/chinh-sach-bao-mat'},
      {label: 'Chính sách hoàn tiền', href: '/chinh-sach-hoan-tien'},
    ],
  },
];
