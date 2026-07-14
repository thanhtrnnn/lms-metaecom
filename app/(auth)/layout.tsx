import {Section} from '@astryxdesign/core/Section';
import {Center} from '@astryxdesign/core/Center';
import {VStack} from '@astryxdesign/core/VStack';
import {Link} from '@astryxdesign/core/Link';

/**
 * Auth pages get no site chrome — no TopNav, no footer, nothing to click away
 * from the form except an explicit way back to the home page.
 *
 * Section carries the wash; Center owns the viewport height so the card sits in
 * the middle of the screen (padding lives on the inner stack so 100dvh doesn't
 * overflow).
 */
export default function AuthLayout({children}: {children: React.ReactNode}) {
  return (
    <Section padding={0} variant="muted">
      <Center minHeight="100dvh">
        <VStack gap={3} padding={6} hAlign="center" width="100%">
          {children}
          <Link href="/">Về trang chủ</Link>
        </VStack>
      </Center>
    </Section>
  );
}
