import {Theme} from '@astryxdesign/core/theme';
import {neutralTheme} from '@/theme/neutral';

/**
 * The player is dark-locked, matching the legacy learning.html (which hand-
 * rolled a dark <style> block). Nesting Theme re-scopes tokens for this
 * subtree only — the rest of the site still follows the user's system mode.
 */
export default function PlayerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Theme theme={neutralTheme} mode="dark">
      {children}
    </Theme>
  );
}
