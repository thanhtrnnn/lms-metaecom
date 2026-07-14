// GENERATED from the legacy static site — Vietnamese copy is verbatim.
// Do not "improve" the strings; they are the client's real marketing content.
import type {Course} from '@/lib/types';

/**
 * The catalogue, ported 1:1 from the legacy site:
 *   - c1–c3: the `defaultCourses` seed in admin-courses.html (the de-facto DB
 *     every storefront page read from localStorage).
 *   - c4–c9: the hardcoded .sb-course-card blocks in courses.html.
 *
 * Honest notes, carried over rather than papered over:
 *   - NO course has a curriculum. The legacy accordion was rendered from
 *     adminCourses[].curriculum, which the seed never populated — so the player
 *     had nothing to play. Curricula are authored in /admin/khoa-hoc.
 *   - 4 of the 6 catalogue cards are literal [COMING SOON] placeholders.
 *   - Site copy claims "50+ khóa học"; there are 9.
 */
export const seedCourses: Course[] = [
  {
    "id": "c1",
    "slug": "khoa-hoc-livestream-ai-chot-don-tu-dong-khong-can-setup-phuc",
    "title": "Khóa học Livestream AI: Chốt Đơn Tự Động Không Cần Setup Phức Tạp",
    "category": "CHIẾN LƯỢC LIVESTREAM",
    "categorySlug": "livestream",
    "price": 1990000,
    "oldPrice": 3500000,
    "purchases": 1204,
    "status": "active",
    "image": "/images/livestream.avif",
    "curriculum": []
  },
  {
    "id": "c2",
    "slug": "chien-luoc-xay-kenh-tiktok-van-don-tu-con-so-0",
    "title": "Chiến Lược Xây Kênh TikTok Vạn Đơn Từ Con Số 0",
    "category": "XÂY KÊNH TIKTOK",
    "categorySlug": "tiktok",
    "price": 2500000,
    "oldPrice": 4200000,
    "purchases": 856,
    "status": "active",
    "image": "/images/tiktok-channel.avif",
    "curriculum": []
  },
  {
    "id": "c3",
    "slug": "bi-quyet-xay-dung-thuong-hieu-ca-nhan-tren-da-nen-tang",
    "title": "Bí Quyết Xây Dựng Thương Hiệu Cá Nhân Trên Đa Nền Tảng",
    "category": "TỐI ƯU CONTENT AI",
    "categorySlug": "content-ai",
    "price": 1290000,
    "oldPrice": 2500000,
    "purchases": 0,
    "status": "draft",
    "image": "/images/livestream-ai.avif",
    "curriculum": []
  },
  {
    "id": "c4",
    "slug": "tiktok-livestream-strategy-chien-luoc-livestream-chuyen-doi-",
    "title": "[COMING SOON] TIKTOK LIVESTREAM STRATEGY - CHIẾN LƯỢC LIVESTREAM CHUYỂN ĐỔI CAO",
    "category": "Chiến lược Livestream",
    "categorySlug": "livestream",
    "price": 8000000,
    "oldPrice": 10000000,
    "purchases": 0,
    "status": "active",
    "image": "/images/chien-luoc-livestream.avif",
    "description": "Khóa học giúp học viên hiểu toàn diện về xu hướng Livestream TikTok 2026, xây dựng chiến lược livestream...",
    "level": "basic",
    "type": "course",
    "instructor": "Admin Meta Ecom",
    "badge": "Mới",
    "lessonsLabel": "23 bài",
    "durationLabel": "0m",
    "curriculum": []
  },
  {
    "id": "c5",
    "slug": "chien-luoc-xay-kenh-tiktok-duong-toi-top-kol-koc-tu-con-so-0",
    "title": "[COMING SOON] CHIẾN LƯỢC XÂY KÊNH TIKTOK - ĐƯỜNG TỚI TOP KOL/KOC TỪ CON SỐ 0",
    "category": "Xây kênh TikTok",
    "categorySlug": "tiktok",
    "price": 8000000,
    "oldPrice": 10000000,
    "purchases": 0,
    "status": "active",
    "image": "/images/xay-kenh.avif",
    "description": "Khóa học giúp bạn hiểu rõ thuật toán TikTok để tiếp cận người xem miễn phí, xây dựng hồ sơ kênh chuẩn thương hiệu...",
    "level": "advanced",
    "type": "course",
    "instructor": "Admin Meta Ecom",
    "badge": "Mới",
    "lessonsLabel": "32 bài",
    "durationLabel": "0m",
    "curriculum": []
  },
  {
    "id": "c6",
    "slug": "bi-kip-ban-hang-tren-shopee-tu-a-den-z",
    "title": "[COMING SOON] BÍ KÍP BÁN HÀNG TRÊN SHOPEE TỪ A ĐẾN Z",
    "category": "Shopee & Lazada",
    "categorySlug": "shopee",
    "price": 8000000,
    "oldPrice": 10000000,
    "purchases": 0,
    "status": "active",
    "image": "/images/shopee.avif",
    "description": "Trang bị toàn bộ kỹ năng từ nghiên cứu sản phẩm, thiết lập gian hàng chuẩn SEO, chạy quảng cáo Shopee Ads đến quy trình đóng gói...",
    "level": "basic",
    "type": "course",
    "instructor": "Admin Meta Ecom",
    "lessonsLabel": "15 bài",
    "durationLabel": "0m",
    "curriculum": []
  },
  {
    "id": "c7",
    "slug": "lam-chu-livestream-tu-dong-voi-cong-nghe-ai",
    "title": "[COMING SOON] LÀM CHỦ LIVESTREAM TỰ ĐỘNG VỚI CÔNG NGHỆ AI",
    "category": "Chiến lược Livestream",
    "categorySlug": "livestream",
    "price": 8000000,
    "oldPrice": 10000000,
    "purchases": 0,
    "status": "active",
    "image": "/images/livestream-ai.avif",
    "description": "Ứng dụng trí tuệ nhân tạo để livestream tự động 24/7, tối ưu chi phí nhân sự và nhân bản hàng loạt phiên live hiệu quả.",
    "level": "advanced",
    "type": "course",
    "instructor": "Admin Meta Ecom",
    "badge": "Mới",
    "lessonsLabel": "15 bài",
    "durationLabel": "0m",
    "curriculum": []
  },
  {
    "id": "c8",
    "slug": "gen-ai-studio-ung-dung-ai-vao-marketing-thuc-chien",
    "title": "Gen AI Studio: Ứng dụng AI vào Marketing thực chiến",
    "category": "Tối ưu Content AI",
    "categorySlug": "content-ai",
    "price": 4500000,
    "purchases": 128,
    "status": "active",
    "image": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
    "description": "Khóa học độc quyền hướng dẫn bạn sử dụng Midjourney, ChatGPT, và các công cụ AI khác để tạo nội dung Marketing chất lượng cao.",
    "level": "advanced",
    "type": "combo",
    "rating": 4.9,
    "instructor": "Mentor Đội Ngũ",
    "lessonsLabel": "40 bài",
    "durationLabel": "12h",
    "curriculum": []
  },
  {
    "id": "c9",
    "slug": "toi-uu-performance-marketing-da-nen-tang",
    "title": "Tối ưu Performance Marketing Đa Nền Tảng",
    "category": "Combo ưu đãi",
    "categorySlug": "combo",
    "price": 5200000,
    "oldPrice": 6500000,
    "purchases": 245,
    "status": "active",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    "description": "Khóa học nâng cao giúp bạn làm chủ các kỹ năng đọc chỉ số, tối ưu quảng cáo Facebook Ads, TikTok Ads và Google Ads để mang về ROI cao nhất.",
    "level": "basic",
    "type": "performance",
    "rating": 4.8,
    "instructor": "Thanh Tùng",
    "lessonsLabel": "55 bài",
    "durationLabel": "16h",
    "curriculum": []
  }
];

export const courseCategories = [
  {
    "slug": "all",
    "label": "Tất cả khóa học"
  },
  {
    "slug": "livestream",
    "label": "Chiến lược Livestream"
  },
  {
    "slug": "content-ai",
    "label": "Tối ưu Content AI"
  },
  {
    "slug": "tiktok",
    "label": "Xây kênh TikTok"
  },
  {
    "slug": "shopee",
    "label": "Shopee & Lazada"
  },
  {
    "slug": "combo",
    "label": "Combo ưu đãi"
  }
] as const;

export const courseLevels = [
  {
    "value": "basic",
    "label": "Cơ bản"
  },
  {
    "value": "advanced",
    "label": "Chuyên sâu"
  }
] as const;

/**
 * The legacy type filter offered only combo + performance, so the 4 cards
 * tagged data-type="course" were unreachable through it — a real bug. The
 * missing "Khóa học lẻ" option is restored here.
 */
export const courseTypes = [
  {value: 'course', label: 'Khóa học lẻ'},
  {value: 'combo', label: 'Bộ khóa học'},
  {value: 'performance', label: 'Tối ưu hiệu suất'},
] as const;

export const priceRange = {
  min: 0,
  max: 15000000,
  step: 500000,
};

export function findCourse(courses: Course[], slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
