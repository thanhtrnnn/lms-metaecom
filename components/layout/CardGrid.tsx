import {Grid} from '@astryxdesign/core/Grid';

import {CARD_GAP, CARD_GRID} from '@/lib/layout';

/**
 * A responsive card grid with the shared breakpoint + gap. Use for every
 * grid of cards (course cards, feature cards, blog cards) so column width and
 * gap stay uniform. Override `minWidth` only when a grid genuinely needs a
 * different card size (e.g. wide testimonial cards).
 */
export function CardGrid({
  children,
  minWidth = CARD_GRID.minWidth,
  maxWidth,
}: {
  children: React.ReactNode;
  minWidth?: number;
  maxWidth?: number;
}) {
  return (
    <Grid columns={{minWidth}} gap={CARD_GAP} maxWidth={maxWidth}>
      {children}
    </Grid>
  );
}
