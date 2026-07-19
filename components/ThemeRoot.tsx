'use client';

import {Theme} from '@astryxdesign/core/theme';
import {creativeTheme} from '@/theme/creative';
import {useThemeMode} from '@/lib/stores';

/**
 * Client theme root. Reads the persisted color-mode preference from the
 * store and forwards it to Astryx's <Theme>, which syncs data-theme /
 * data-astryx-theme onto <html> so browser chrome and @scope'd CSS match.
 *
 * server snapshot default ('system') keeps SSR markup stable; the real value
 * arrives after hydration, same as the other localStorage-backed stores.
 */
export function ThemeRoot({children}: {children: React.ReactNode}) {
  const {mode} = useThemeMode();
  return (
    <Theme theme={creativeTheme} mode={mode}>
      {children}
    </Theme>
  );
}
