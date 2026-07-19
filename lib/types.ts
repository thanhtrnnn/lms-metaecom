export type CourseCategory =
  'livestream' | 'content-ai' | 'tiktok' | 'shopee' | 'combo';

export type CourseLevel = 'basic' | 'advanced';
export type CourseType = 'course' | 'combo' | 'performance';
export type CourseStatus = 'active' | 'draft';

export type Lesson = {
  id: string;
  title: string;
  description?: string;
  duration?: string;
  videoUrl?: string;
  isPreview: boolean;
};

export type Section = {
  id: string;
  title: string;
  description?: string;
  lessons: Lesson[];
};

export type Course = {
  id: string;
  slug: string;
  title: string;
  /** Display label as authored, e.g. "CHIẾN LƯỢC LIVESTREAM". */
  category: string;
  /** Machine value used by the catalog filters. */
  categorySlug: CourseCategory;
  price: number;
  oldPrice?: number;
  purchases: number;
  status: CourseStatus;
  image: string;
  description?: string;
  level?: CourseLevel;
  type?: CourseType;
  rating?: number;
  reviews?: number;
  instructor?: string;
  /** e.g. "Mới" — an authored ribbon, not a derived state. */
  badge?: string;
  /** Authored as free text on the legacy cards, e.g. "23 bài" / "12h". */
  lessonsLabel?: string;
  durationLabel?: string;
  curriculum?: Section[];
};

/** What the cart stores. Legacy stored {name, price, img} and joined back to the
 *  catalog by title string; we store courseId so the join can't silently break. */
export type CartItem = {
  courseId: string;
  title: string;
  price: number;
  image: string;
};

export type PurchasedCourse = {
  courseId: string;
  title: string;
  price: number;
  image: string;
  purchasedAt: string;
};

export type BillingRecord = {
  orderId: string;
  date: string;
  courseId: string;
  title: string;
  price: number;
  status: 'paid' | 'pending' | 'failed';
};

export type UserData = {
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  joinedAt?: string;
};

export type PaymentMethod = 'bank' | 'momo' | 'card';
