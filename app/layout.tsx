import type {Metadata} from 'next';
import {Be_Vietnam_Pro} from 'next/font/google';
import {Theme} from '@astryxdesign/core/theme';

// Order matters: reset → component base → theme tokens.
// reset lands in @layer reset, component styles in @layer astryx-base.
import '@astryxdesign/core/reset.css';
import '@astryxdesign/core/astryx.css';
import '../theme/theme.css';

import {neutralTheme} from '../theme/neutral';

// The 'vietnamese' subset is the whole reason this font is here — the stock
// theme-neutral face (Figtree) has no Vietnamese coverage.
const beVietnamPro = Be_Vietnam_Pro({
  variable: '--font-be-vietnam-pro',
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'META ECOM UNI — Nền Tảng Giáo Dục E-Commerce & Marketing',
    template: '%s · META ECOM UNI',
  },
  description:
    'Nền tảng giáo dục E-Commerce & Marketing: khóa học livestream, TikTok, content AI và đào tạo doanh nghiệp.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="vi" className={beVietnamPro.variable} suppressHydrationWarning>
      <body>
        <Theme theme={neutralTheme} mode="system">
          {children}
        </Theme>
      </body>
    </html>
  );
}
