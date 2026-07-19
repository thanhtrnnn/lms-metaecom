'use client';

import {seedCourses} from '@/data/courses';
import type {Course} from './types';

/**
 * One-time reconciliation of localStorage written by the OLD site.
 *
 * Two things would otherwise break for a returning user:
 *
 * 1. `adminCourses` already exists in their browser, holding only the legacy
 *    3-course seed (numeric ids, no slug, no categorySlug). Because a stored
 *    value always wins over our in-memory seed, the 6 courses we ported from
 *    the hardcoded catalogue markup would silently never appear — the catalogue
 *    would shrink from 9 to 3. So: merge in any seed course they don't have.
 *
 * 2. `cartItems` and `purchasedCourses` used to be joined back to the catalogue
 *    by matching the course TITLE string. We join on courseId now, so old
 *    entries carry no id and would be orphaned. Re-key them by title once.
 *
 * Runs at most once per browser; guarded by SCHEMA_KEY.
 */
const SCHEMA_KEY = 'meuSchemaVersion';
const SCHEMA_VERSION = '3'; // v3: production catalog sync (meu.edu.vn, 2026-07-20)

type LegacyCourse = {
  id?: string | number;
  title?: string;
  category?: string;
  price?: number;
  oldPrice?: number;
  purchases?: number;
  status?: string;
  image?: string;
  curriculum?: Course['curriculum'];
};

type LegacyItem = {
  courseId?: string;
  name?: string;
  title?: string;
  price?: number;
  img?: string;
  image?: string;
};

function read<T>(key: string): T | null {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

function write(key: string, value: unknown) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage disabled — nothing we can do, and nothing we should break */
  }
}

export function migrateLegacyStorage(): void {
  if (typeof window === 'undefined') return;
  if (window.localStorage.getItem(SCHEMA_KEY) === SCHEMA_VERSION) return;

  // --- 1. courses -------------------------------------------------------
  const stored = read<LegacyCourse[]>('adminCourses');
  if (stored?.length) {
    const byTitle = new Map(
      stored.map((c) => [String(c.title ?? '').trim(), c]),
    );

    // Keep everything the admin authored, upgrading legacy rows so they carry
    // the fields the new app needs (slug / categorySlug).
    const upgraded: Course[] = stored.map((c) => {
      const match = seedCourses.find(
        (s) => s.title.trim() === String(c.title ?? '').trim(),
      );
      return {
        ...(match ?? ({} as Course)),
        ...(c as Partial<Course>),
        id:
          match?.id ?? `legacy-${c.id ?? Math.random().toString(36).slice(2)}`,
        slug: match?.slug ?? `khoa-hoc-${c.id ?? 'cu'}`,
        categorySlug: match?.categorySlug ?? 'ecom-foundation',
        status: (c.status === 'draft' ? 'draft' : 'active') as Course['status'],
        purchases: c.purchases ?? 0,
        image: c.image || match?.image || '/images/livestream-ai.avif',
      } as Course;
    });

    // ...then add the seed courses they've never seen (the 6 ported from the
    // hardcoded catalogue markup).
    for (const s of seedCourses) {
      if (!byTitle.has(s.title.trim())) upgraded.push(s);
    }

    write('adminCourses', upgraded);
  }

  // --- 2. re-key cart + purchases from title to courseId -----------------
  const courses = read<Course[]>('adminCourses') ?? seedCourses;
  const idFor = (item: LegacyItem): string | undefined => {
    if (item.courseId) return item.courseId;
    const title = String(item.name ?? item.title ?? '').trim();
    return courses.find((c) => c.title.trim() === title)?.id;
  };

  const cart = read<LegacyItem[]>('cartItems');
  if (cart?.length) {
    write(
      'cartItems',
      cart
        .map((i) => {
          const courseId = idFor(i);
          if (!courseId) return null;
          return {
            courseId,
            title: i.title ?? i.name ?? '',
            price: i.price ?? 0,
            image: i.image ?? i.img ?? '/images/livestream-ai.avif',
          };
        })
        .filter(Boolean),
    );
  }

  const purchased = read<LegacyItem[]>('purchasedCourses');
  if (purchased?.length) {
    write(
      'purchasedCourses',
      purchased
        .map((i) => {
          const courseId = idFor(i);
          if (!courseId) return null;
          return {
            courseId,
            title: i.title ?? i.name ?? '',
            price: i.price ?? 0,
            image: i.image ?? i.img ?? '/images/livestream-ai.avif',
            purchasedAt: new Date().toISOString(),
          };
        })
        .filter(Boolean),
    );
  }

  window.localStorage.setItem(SCHEMA_KEY, SCHEMA_VERSION);
}
