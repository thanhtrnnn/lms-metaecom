# META ECOM UNI — brand theme

The site's look is one Astryx brand theme, `metaecom`. This is the practical
guide to it, in the spirit of the Astryx brand-theming issue
([facebook/astryx#918](https://github.com/facebook/astryx/issues/918)) — which
documents the `defineTheme` token contract but ships no `theme create` command
in 0.1.4, so the theme is hand-authored `defineTheme` + `astryx theme build`.

## Files

| File                                          | Role                                                                                                                                                                                      |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `theme/neutralTheme.ts`                       | **Thin base.** Stock-neutral grayscale spine + the from-scratch OKLCH categorical/status/badge palette. Rendered by nobody directly — it exists only so the brand theme can `extends` it. |
| `theme/metaecomTheme.ts`                      | **The brand theme.** `extends: neutralTheme` and owns all branding: warm-orange accent, tinted canvas, spacing, radius, control heights, shadows, component skins. **Edit this.**         |
| `theme/metaecom.css`, `metaecom.js`, `*.d.ts` | Build output of `metaecomTheme.ts`. Do not hand-edit — regenerate (see below).                                                                                                            |
| `theme/neutral.js`, `*.d.ts`                  | Build output of the base; `metaecomTheme.ts` imports `neutral.js` at build time for `extends`.                                                                                            |
| `app/site.css`                                | The one hand-written stylesheet. Holds `--brand-2` (the coral gradient partner to the accent) and the `.brand-gradient-*` helpers + the dark-mode logo rule.                              |

## How it's wired

- `app/layout.tsx` imports `theme/metaecom.css` (the `@scope`d token CSS) in order after `@astryxdesign/core/reset.css` + `astryx.css`.
- `components/ThemeRoot.tsx` wraps the app in `<Theme theme={metaecomTheme} mode={mode}>`, which stamps `data-astryx-theme="metaecom"` + `data-theme={light|dark}` on `<html>`. `mode` is the persisted light/dark preference.
- The lesson player (`app/hoc/[slug]/[lessonId]/layout.tsx`) reuses the same theme pinned to `mode="dark"`.
- `package.json` → `astryx.theme: "metaecom"` and the `theme:build` script both point at `metaecomTheme.ts`.

## The token contract (what to change, and where)

Everything below lives in `metaecomTheme.ts`.

- **Brand color** — the `BRAND` / `BRAND_DARK` constants at the top drive
  `--color-accent`, `--color-text-accent`, `--color-icon-accent`, the button
  gradient, and (via `app/site.css`) the `--brand-2` gradient partner. Change
  these two hexes to rebrand. Keep AA contrast: the accent is used as a button
  fill with `--color-on-accent` text, and as link/accent text on the body.
- **Canvas & surfaces** — `--color-background-{body,surface,card,popover,muted}`
  as `[light, dark]` tuples. Body is the warm tinted wash; surfaces stay
  near-white / near-black for contrast.
- **Spacing** — a generous 6px ladder (`--spacing-4 = 24px`, ~1.5× the stock 4px
  step) so the UI breathes. Components consume these via `gap` / `padding`
  steps. Application-level spacing constants live in `lib/layout.ts` (see
  "Layout system" below).
- **Control heights** — `--size-element-sm/md/lg = 36/40/44px`. **This is the
  single token that keeps buttons, inputs, and selects the same height.** Astryx
  controls read their height from it, so changing these three values resizes
  every control at once. (Astryx's default 28/32/36 is too cramped against the
  6px spacing — that mismatch was the original "inconsistent element sizing"
  bug.) Because the token cascades, we deliberately do **not** set per-component
  height overrides — matching the minimal-overrides pattern of the shipped
  matcha brand theme.
- **Radius** — `--radius-{inner,element,container,page}` = 0.625 / 1 / 1.5 /
  2.5rem. Soft, editorial.
- **Shadows** — brand-tinted layered `--shadow-{low,med,high}`.
- **Component skins** — the `components: {}` block styles `button` (pill +
  gradient primary), `badge`, `card`, `section`, `progressbar`. Keep overrides
  minimal and shape/color-focused; let the tokens above do the sizing.

## Rebuilding after an edit

```bash
npm run theme:build        # astryx theme build theme/metaecomTheme.ts --out theme/metaecom.css
```

Then `npx astryx doctor` to sanity-check, and rebuild the app. If you change the
brand color, also update `--brand-2` in `app/site.css` if you want the gradient
partner to move with it.

## Layout system (spacing application)

Token spacing (above) sets the _scale_; consistent _application_ across pages
is enforced by `lib/layout.ts` (the constants — section padding, page gap, card
padding, aside width, grid breakpoints) and `components/layout/PageShell.tsx`
(the page frame). Build new pages with `PageShell` + those constants rather than
hand-picking `padding=`/`gap=` values, or the rhythm drifts.
