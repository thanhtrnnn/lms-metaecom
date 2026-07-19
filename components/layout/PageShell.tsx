import {Section} from '@astryxdesign/core/Section';
import {VStack} from '@astryxdesign/core/VStack';
import type {SpacingStep} from '@astryxdesign/core/Layout';

import {PAGE_GAP, SECTION_PAD} from '@/lib/layout';

type SectionVariant = 'section' | 'transparent' | 'muted';

/**
 * The standard page/section frame: one Section with the shared padding, wrapping
 * a VStack with the shared gap. Every page's top-level rhythm comes from here so
 * it can't drift. Put a <PageHeader> (or any content) inside as children.
 *
 * `pad`/`gap` default to the shared constants; override only with named
 * constants (e.g. HERO_PAD) for deliberately different bands, never magic numbers.
 */
export function PageShell({
  children,
  pad = SECTION_PAD,
  gap = PAGE_GAP,
  variant,
  dividers,
  maxWidth,
  center = false,
}: {
  children: React.ReactNode;
  pad?: SpacingStep;
  gap?: SpacingStep;
  variant?: SectionVariant;
  dividers?: Array<'top' | 'bottom' | 'start' | 'end'>;
  maxWidth?: number;
  center?: boolean;
}) {
  return (
    <Section padding={pad} variant={variant} dividers={dividers}>
      <VStack
        gap={gap}
        width="100%"
        maxWidth={maxWidth}
        hAlign={center ? 'center' : undefined}
      >
        {children}
      </VStack>
    </Section>
  );
}
