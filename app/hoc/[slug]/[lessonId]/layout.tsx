import {Theme} from '@astryxdesign/core/theme';
import {VStack} from '@astryxdesign/core/VStack';
import {metaecomTheme} from '@/theme/metaecom';

/**
 * The player is dark-locked, matching the legacy learning.html (which hand-
 * rolled a dark <style> block). It uses the same brand theme as the rest of
 * the site, just pinned to dark mode.
 *
 * The VStack painting --color-background-body is load-bearing: the nested
 * Theme swaps the TOKENS to dark, but the page canvas is painted by <body>
 * under the ROOT theme — so in light mode the player would render its light
 * dark-mode text on the site's light background, unreadable. Inside this
 * subtree the token resolves to the dark canvas.
 */
export default function PlayerLayout({children}: {children: React.ReactNode}) {
  return (
    <Theme theme={metaecomTheme} mode="dark">
      <VStack
        width="100%"
        minHeight="100dvh"
        style={{backgroundColor: 'var(--color-background-body)'}}
      >
        {children}
      </VStack>
    </Theme>
  );
}
