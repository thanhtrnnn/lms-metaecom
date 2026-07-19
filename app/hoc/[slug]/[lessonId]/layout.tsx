import {Theme} from '@astryxdesign/core/theme';
import {metaecomTheme} from '@/theme/metaecom';

/**
 * The player is dark-locked, matching the legacy learning.html (which hand-
 * rolled a dark <style> block). It uses the same brand theme as the rest of
 * the site, just pinned to dark mode, so its CSS (metaecom.css) is already
 * loaded and controls/colors stay on-brand.
 */
export default function PlayerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Theme theme={metaecomTheme} mode="dark">
      {children}
    </Theme>
  );
}
