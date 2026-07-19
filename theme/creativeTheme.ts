/**
 * Creative Theme — "META ECOM UNI" brand skin
 *
 * Extends the neutral grayscale spine (so all the careful OKLCH categorical
 * palette + status/banner/badge logic carries over unchanged) and rebrands it
 * with a vivid violet→indigo brand accent for a modern e-learning feel.
 *
 * Design intent:
 *   - Centered, editorial landing page (max-width column, generous breathing
 *     room) rather than edge-to-edge.
 *   - Whole-website light + dark via the same [light, dark] tuple system the
 *     neutral theme uses — dark mode is a first-class surface, not an
 *     afterthought.
 *   - "Creative" flair: larger radii, softer layered shadows, a brand accent
 *     that doubles as a gradient anchor (--color-accent / --color-accent-2),
 *     and a tinted body canvas so sections feel like cards floating on a
 *     colored mist.
 *
 * Everything below only overrides what we want to change; the neutral theme
 * fills in the rest.
 */

import {defineTheme, defineSyntaxTheme} from '@astryxdesign/core/theme';
import {neutralTheme} from './neutral';
import {neutralIconRegistry} from './icons';

/**
 * Brand accent: a vivid tangerine orange (#EA580C) in light mode that glows to
 * a warm amber (#FB923C) in dark mode. Derives the whole accent scale
 * (hover/pressed/muted/inset rings) via the HCT color engine.
 */
const BRAND = '#EA580C';
const BRAND_DARK = '#FB923C';

/**
 * Creative syntax palette — lift the neutral syntax stops onto the brand hue
 * family (orange keyword/type, rose attribute) so code blocks match.
 */
const creativeSyntax = defineSyntaxTheme({
  name: 'xds-creative',
  tokens: {
    keyword: [BRAND, '#fdba74'],
    string: ['#047857', '#6ee7b7'],
    comment: ['#737373', '#a3a3a3'],
    number: ['#b45309', '#fcd34d'],
    function: [BRAND, '#fdba74'],
    type: [BRAND, '#fdba74'],
    variable: ['#171717', '#e5e5e5'],
    operator: ['#737373', '#a3a3a3'],
    constant: ['#b45309', '#fcd34d'],
    tag: ['#be123c', '#fda4af'],
    attribute: ['#c2410c', '#fdba74'],
    property: ['#0f766e', '#5eead4'],
    punctuation: ['#a3a3a3', '#525252'],
    background: ['#ffffff', '#0a0a0a'],
  },
});

export const creativeTheme = defineTheme({
  name: 'creative',
  extends: neutralTheme,

  // Keep Be Vietnam Pro (Vietnamese coverage) — inherited from neutral via
  // `extends`, but re-stated so the scale/weight stays explicit and the body
  // reads a touch larger for the airier editorial layout.
  typography: {
    scale: {base: 14.5, ratio: 1.22},
    body: {
      family: 'var(--font-be-vietnam-pro)',
      fallbacks:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    },
    heading: {
      family: 'var(--font-be-vietnam-pro)',
      fallbacks:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      weights: {1: 'bold', 2: 'bold', 3: 'bold', 4: 'bold'},
    },
    code: {
      family: 'ui-monospace',
      fallbacks:
        '"SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
  },

  // Slightly more languid motion to match the softer, floaty creative feel.
  motion: {fast: 150, medium: 360, slow: 820, ratio: 0.72},

  syntax: creativeSyntax,

  tokens: {
    // =========================================================================
    // Accent — brand orange, derived scale via HCT from `color.accent` below.
    // Explicit tuples keep light/dark symmetric and on-brand.
    // =========================================================================
    '--color-accent': [BRAND, BRAND_DARK],
    '--color-accent-muted': ['#FFF5ED', '#3A2415'],
    '--color-text-accent': [BRAND, BRAND_DARK],
    '--color-icon-accent': [BRAND, BRAND_DARK],
    // on-accent = white in both modes (orange is dark enough at both stops
    // for AA contrast on the gradient fill).
    '--color-on-accent': '#ffffff',

    // =========================================================================
    // Backgrounds — tinted brand canvas so the centered column reads as
    // content floating on a soft warm mist. Surfaces stay near-white /
    // near-black for contrast; the *body* gets the tint.
    //
    //   surface  T100 / T14  — interactive foreground
    //   body     warm-tinted wash
    //   card     T100 / T14  — lifts via shadow
    //   popover  T100 / T14
    //   muted    lighter wash
    // =========================================================================
    '--color-background-surface': ['#ffffff', '#2A2118'],
    '--color-background-body': ['#FFFAF5', '#1A140E'],
    '--color-background-card': ['#ffffff', '#241B12'],
    '--color-background-popover': ['#ffffff', '#2A2118'],
    '--color-background-muted': ['#FFF5ED', '#241B12'],

    '--color-neutral': ['#EA580C0F', '#FB923C1A'],

    // Overlays tinted toward brand for scrims.
    '--color-overlay': ['#3D1E0A80', '#0C0702CC'],
    '--color-overlay-hover': ['#EA580C0D', '#FB923C0D'],
    '--color-overlay-pressed': ['#EA580C1A', '#FB923C1A'],

    // Text — keep warm-neutral legibility, accent the links.
    '--color-text-primary': ['#2A1A0E', '#FBF4EC'],
    '--color-text-secondary': ['#7A6A5C', '#C4B4A4'],
    '--color-text-disabled': ['#B0A294', '#5E5346'],
    '--color-icon-primary': ['#2A1A0E', '#FBF4EC'],
    '--color-icon-secondary': ['#7A6A5C', '#C4B4A4'],
    '--color-icon-disabled': ['#B0A294', '#5E5346'],

    // Border — faint warm-gray instead of pure neutral.
    '--color-border': ['#F2E9DE', '#473A2C'],
    '--color-border-emphasized': ['#E2D4C3', '#6B5840'],

    // Effects — colored shadow so the "float" reads on-brand.
    '--color-skeleton': ['#F2E9DE', '#473A2C'],
    '--color-shadow': ['#EA580C22', '#0000004D'],
    '--color-tint-hover': ['#EA580C', '#FB923C'],

    // =========================================================================
    // Spacing — "matcha" airier ladder. The default scale is a tight 4px step
    // (0→48px). We widen every step so sections, cards and stacks breathe like
    // an editorial/matcha default theme, while keeping the curated radius /
    // border / palette below intact. Steps roughly ×1.5 over default.
    // =========================================================================
    '--spacing-0': '0px',
    '--spacing-0-5': '3px',
    '--spacing-1': '6px',
    '--spacing-1-5': '9px',
    '--spacing-2': '12px',
    '--spacing-3': '18px',
    '--spacing-4': '24px',
    '--spacing-5': '30px',
    '--spacing-6': '36px',
    '--spacing-7': '42px',
    '--spacing-8': '48px',
    '--spacing-9': '54px',
    '--spacing-10': '60px',
    '--spacing-11': '72px',
    '--spacing-12': '84px',

    // =========================================================================
    // Radius — friendlier, larger radii for the creative, soft "matcha" feel.
    // =========================================================================
    '--radius-none': '0.25rem',
    '--radius-inner': '0.625rem',
    '--radius-element': '1rem',
    '--radius-container': '1.5rem',
    '--radius-page': '2.5rem',
    '--radius-full': '9999px',

    // =========================================================================
    // Shadows — softer, more layered, brand-tinted drops. The inset rim in
    // dark mode warms to a warm-white so cards glow against the canvas.
    // =========================================================================
    '--shadow-low':
      '0 2px 6px light-dark(#EA580C1A, #00000030), ' +
      '0 6px 16px light-dark(#EA580C1F, #0000004D), ' +
      'inset 0 0 0 1px light-dark(transparent, #ffffff12)',
    '--shadow-med':
      '0 4px 10px light-dark(#EA580C1F, #0000003D), ' +
      '0 12px 28px light-dark(#EA580C26, #00000059), ' +
      'inset 0 0 0 1px light-dark(transparent, #ffffff16)',
    '--shadow-high':
      '0 8px 16px light-dark(#EA580C26, #0000004D), ' +
      '0 24px 48px light-dark(#EA580C2E, #00000073), ' +
      'inset 0 0 0 1px light-dark(transparent, #ffffff1F)',
    '--shadow-inset-hover': 'inset 0px 0px 0px 2px #EA580C4D',
    '--shadow-inset-selected': 'inset 0px 0px 0px 2px #EA580C80',
    '--shadow-inset-success': 'inset 0px 0px 0px 2px #1981004D',
    '--shadow-inset-warning': 'inset 0px 0px 0px 2px #ffce2f4D',
    '--shadow-inset-error': 'inset 0px 0px 0px 2px #e33f4a4D',
  },

  components: {
    // =========================================================================
    // Button — fully rounded pill, gradient-friendly surface, bolder.
    // =========================================================================
    button: {
      base: {
        borderRadius: 'var(--radius-full)',
        fontWeight: '600',
      },
      'variant:primary': {
        background: 'linear-gradient(135deg, var(--color-accent), var(--brand-2))',
        color: 'var(--color-on-accent)',
        border: 'none',
        ':hover': {
          filter: 'brightness(1.06)',
          boxShadow: '0 8px 20px #EA580C4D',
        },
      },
      'variant:secondary': {
        backgroundColor: 'var(--color-accent-muted)',
        color: 'var(--color-text-accent)',
        borderColor: 'transparent',
        ':hover': {
          backgroundColor: 'var(--color-overlay-hover)',
        },
      },
      'variant:destructive': {
        backgroundColor: 'var(--color-error-muted)',
        color: 'var(--color-error)',
      },
    },

    // =========================================================================
    // Badge — rounded chips; brand variants get the gradient treatment too.
    // =========================================================================
    badge: {
      base: {
        borderRadius: 'var(--radius-full)',
      },
      'variant:info': {
        background: 'linear-gradient(135deg, var(--color-accent), var(--brand-2))',
        color: 'var(--color-on-accent)',
      },
      'variant:neutral': {
        backgroundColor: 'var(--color-background-muted)',
        color: 'var(--color-text-secondary)',
      },
      'variant:success': {
        backgroundColor: 'light-dark(#198100, #64af4c)',
        color: 'light-dark(#ffffff, #171717)',
      },
      'variant:warning': {
        backgroundColor: '#ffce2f',
        color: '#171717',
      },
      'variant:error': {
        backgroundColor: 'light-dark(#e33f4a, #ff705d)',
        color: 'light-dark(#ffffff, #171717)',
      },
      'variant:purple': {
        backgroundColor: 'var(--color-background-purple)',
        color: 'var(--color-text-purple)',
      },
    },

    // =========================================================================
    // Card — bigger radius, soft lift, optional brand hairline.
    // =========================================================================
    card: {
      base: {
        borderRadius: 'var(--radius-container)',
        borderColor: 'var(--color-border)',
        boxShadow: 'var(--shadow-low)',
        padding: 'var(--spacing-5)',
      },
    },

    // =========================================================================
    // Section — keep generous padding; muted sections get a faint brand wash.
    // =========================================================================
    section: {
      base: {
        padding: 'var(--spacing-8)',
      },
      'variant:muted': {
        backgroundColor: 'var(--color-background-muted)',
      },
    },

    // =========================================================================
    // ProgressBar — accent stop uses the brand gradient anchor colors.
    // =========================================================================
    progressbar: {
      'variant:accent': {
        '--color-accent': BRAND,
      },
    },

    // Heading weights handled by typography.heading.weights above.
  },

  icons: neutralIconRegistry,
});
