'use client';

import {useSyncExternalStore} from 'react';
import {createStore, useStore} from './store';
import {seedCourses} from '@/data/courses';
import type {
  BillingRecord,
  CartItem,
  Course,
  PurchasedCourse,
  UserData,
} from './types';

/**
 * Keys are inherited verbatim from the legacy site so returning users keep
 * their cart, purchases and admin-authored courses.
 *
 * Deliberately NOT carried over: selectedCourseId / learningCourseId /
 * learningPreviewLessonId. Those were localStorage smuggling navigation state
 * between pages; they are route params now.
 */
const cartStore = createStore<CartItem[]>('cartItems', []);
const authStore = createStore<boolean>('isLoggedIn', false);
const userStore = createStore<UserData | null>('userData', null);
const usersStore = createStore<UserData[]>('allUsers', []);
const coursesStore = createStore<Course[]>('adminCourses', seedCourses);
const purchasesStore = createStore<PurchasedCourse[]>('purchasedCourses', []);
const billingStore = createStore<BillingRecord[]>('billingHistory', []);

/**
 * Persisted color-mode preference. 'system' (default) lets the OS decide;
 * 'light' / 'dark' force a mode. Fed to <Theme mode=...> in the root layout.
 */
const themeModeStore = createStore<'system' | 'light' | 'dark'>(
  'themeMode',
  'system',
);

/**
 * True only after the first client render. Any UI whose value differs between
 * the server snapshot (seed) and real localStorage — the cart badge, the
 * logged-in avatar — must gate on this, or React will report a hydration
 * mismatch and blow away the markup.
 */
const noopSubscribe = () => () => {};
export function useHasMounted(): boolean {
  return useSyncExternalStore(
    noopSubscribe,
    () => true, // client
    () => false, // server
  );
}

export function useCourses() {
  const [courses, setCourses] = useStore(coursesStore);
  return {courses, setCourses};
}

export function useCart() {
  const [items, setItems] = useStore(cartStore);

  return {
    items,
    count: items.length,
    total: items.reduce((sum, i) => sum + i.price, 0),
    has: (courseId: string) => items.some((i) => i.courseId === courseId),
    add(course: Course) {
      setItems((prev) =>
        prev.some((i) => i.courseId === course.id)
          ? prev
          : [
              ...prev,
              {
                courseId: course.id,
                title: course.title,
                price: course.price,
                image: course.image,
              },
            ],
      );
    },
    remove(courseId: string) {
      setItems((prev) => prev.filter((i) => i.courseId !== courseId));
    },
    clear: () => setItems([]),
  };
}

export function useAuth() {
  const [isLoggedIn, setLoggedIn] = useStore(authStore);
  const [user, setUser] = useStore(userStore);
  const [, setUsers] = useStore(usersStore);

  return {
    isLoggedIn,
    user,
    login(email: string) {
      setLoggedIn(true);
      setUser((prev) => prev ?? {name: email.split('@')[0], email, phone: ''});
    },
    signup(data: UserData) {
      setLoggedIn(true);
      setUser({...data, joinedAt: new Date().toISOString()});
      setUsers((prev) => [
        ...prev,
        {...data, joinedAt: new Date().toISOString()},
      ]);
    },
    logout() {
      setLoggedIn(false);
    },
    updateProfile(patch: Partial<UserData>) {
      setUser((prev) => (prev ? {...prev, ...patch} : prev));
    },
  };
}

export function useUsers() {
  const [users] = useStore(usersStore);
  return users;
}

export function usePurchases() {
  const [purchased, setPurchased] = useStore(purchasesStore);
  return {
    purchased,
    owns: (courseId: string) => purchased.some((p) => p.courseId === courseId),
    setPurchased,
  };
}

export function useBilling() {
  const [records, setRecords] = useStore(billingStore);
  return {records, setRecords};
}

/**
 * Checkout: move the cart into purchases and write a billing record.
 * Mirrors the legacy flow exactly, minus the alert() and the Math.random()
 * order id (which could collide).
 */
export function useCheckout() {
  const cart = useCart();
  const {setPurchased} = usePurchases();
  const {setRecords} = useBilling();

  return function checkout(): string {
    const now = new Date().toISOString();
    const orderId = `ORD-${Date.now().toString(36).toUpperCase()}`;
    const items = cart.items;

    setPurchased((prev) => {
      const owned = new Set(prev.map((p) => p.courseId));
      return [
        ...prev,
        ...items
          .filter((i) => !owned.has(i.courseId))
          .map((i) => ({
            courseId: i.courseId,
            title: i.title,
            price: i.price,
            image: i.image,
            purchasedAt: now,
          })),
      ];
    });

    setRecords((prev) => [
      ...items.map((i) => ({
        orderId,
        date: now,
        courseId: i.courseId,
        title: i.title,
        price: i.price,
        status: 'paid' as const,
      })),
      ...prev,
    ]);

    cart.clear();
    return orderId;
  };
}

export function useThemeMode() {
  const [mode, setMode] = useStore(themeModeStore);
  return {
    mode,
    setMode,
    /** Cycle system → light → dark → system. */
    cycle() {
      setMode((prev) =>
        prev === 'system' ? 'light' : prev === 'light' ? 'dark' : 'system',
      );
    },
  };
}
