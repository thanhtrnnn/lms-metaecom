import raw from './content.json';

/**
 * All marketing copy, lifted verbatim from the legacy HTML. The strings are the
 * client's real Vietnamese content — never rewrite, translate or "improve" them.
 *
 * The extraction is deliberately honest about what the old site did NOT have,
 * so pages can render the truth instead of inventing filler:
 *   - home.hero has no heading and no subcopy (the section was a background
 *     image plus a single CTA button).
 *   - the "animated stat counters" were dead code; the four stats are static.
 *   - blog has 6 articles; there is exactly 1 webinar; ebooks have no images.
 */
export const content = raw;

export const home = raw.home;
export const testimonials = raw.testimonials;
export const blog = raw.blog;
export const webinars = raw.webinars;
export const ebooks = raw.ebooks;
export const trial = raw.trial;
export const about = raw.about;
export const enterprise = raw.enterprise;
export const contact = raw.contact;
export const newsletter = raw.newsletter;
export const socials = raw.socials;

/**
 * Images the legacy markup pointed at that 404 on the asset host resolve to
 * their remote fallbacks instead of shipping a broken <img>.
 *
 * The four partner logos (logo-fpt/shopee/tiktok/viettel.png) used to be in
 * this set, but their legacy Wikimedia fallback URLs rotted (HTTP 400), so
 * they are now vendored into public/images/ under the exact filenames the
 * legacy site expected — fetched via Wikimedia's stable Special:FilePath
 * endpoint. Local paths resolve normally again.
 */
const MISSING = new Set([
  'images/avt1.jpg',
  'images/avt2.jpg',
  'images/avt3.jpg',
  'images/default-course.avif',
]);

export function img(
  src: string | null | undefined,
  fallback?: string | null,
): string | null {
  if (!src) return fallback ?? null;
  if (src.startsWith('http')) return src;
  if (MISSING.has(src)) return fallback ?? null;
  return `/${src.replace(/^\/+/, '')}`;
}
