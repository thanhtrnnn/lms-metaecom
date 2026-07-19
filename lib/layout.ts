/**
 * Layout rhythm — the single source of spacing/sizing CONSTANTS applied across
 * pages. The theme (theme/metaecomTheme.ts) sets the spacing *scale*; these set
 * the consistent *application* of it, so section padding / stack gaps / card
 * padding / aside widths can't drift page-to-page again.
 *
 * Values are Astryx spacing steps (0.5,1,2,3,4,5,6,8,…) except the raw-px
 * widths, which are layout dimensions with no spacing-step equivalent.
 *
 * Build pages with `PageShell` + `CardGrid` (components/layout) and these
 * constants rather than hand-picking padding=/gap= numbers. See docs/THEME.md.
 */

/** Standard page/section padding. */
export const SECTION_PAD = 6;
/** Landing hero / CTA bands want a touch more air. */
export const HERO_PAD = 8;

/** Vertical gap between a page's major blocks (the stack inside a Section). */
export const PAGE_GAP = 5;
/** Gap inside a page header group (breadcrumb / title / subcopy). */
export const HEADER_GAP = 2;

/** Content / feature card inner padding. */
export const CARD_PAD = 4;
/** Gap between form fields. */
export const FORM_GAP = 4;

/** Responsive card grid. */
export const CARD_GRID = {minWidth: 280} as const;
/** Gap between cards in a grid. */
export const CARD_GAP = 4;

/** Side panels: filter rail, order summary, purchase panel. */
export const ASIDE_WIDTH = 340;
/** Legal / prose reading column. */
export const PROSE_MAXW = 760;
/** Centered content column on wide viewports. */
export const CONTENT_MAXW = 1040;

/** Site logo rendered height (px). */
export const LOGO_HEIGHT = 32;
