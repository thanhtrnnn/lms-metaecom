import Image from 'next/image';
import NextLink from 'next/link';
import {Section} from '@astryxdesign/core/Section';
import {Grid} from '@astryxdesign/core/Grid';
import {Center} from '@astryxdesign/core/Center';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Link} from '@astryxdesign/core/Link';

import {home} from '@/data/content';
import {site} from '@/data/site';
import {LOGO_HEIGHT} from '@/lib/layout';

type StatPill = {value: string; label: string};

/**
 * Auth pages: split-screen. Left is a brand panel (logo, tagline, the
 * production stat pills) on the warm gradient; right is the form. No site
 * chrome — the only ways out are the logo and the explicit home link. The
 * two panels stack on narrow screens (Grid collapses below ~420px tracks).
 */
export default function AuthLayout({children}: {children: React.ReactNode}) {
  const pills = (home.hero?.statPills ?? []) as StatPill[];

  return (
    <Section padding={0} variant="muted">
      <Grid columns={{minWidth: 420, max: 2}} gap={0} className="auth-split">
        {/* Brand panel */}
        <VStack
          className="brand-gradient-surface"
          padding={8}
          vAlign="center"
          gap={5}
        >
          <NextLink href="/" aria-label={`${site.name} — Trang chủ`}>
            <Image
              src={site.logo}
              alt={site.name}
              width={165}
              height={40}
              priority
              className="site-logo"
              style={{height: LOGO_HEIGHT + 8, width: 'auto'}}
            />
          </NextLink>

          <VStack gap={2} maxWidth={440}>
            <Heading level={2} textWrap="balance">
              {site.tagline}
            </Heading>
            {home.hero?.subcopy ? (
              <Text color="secondary">{home.hero.subcopy}</Text>
            ) : null}
          </VStack>

          {pills.length ? (
            <HStack gap={5} wrap="wrap">
              {pills.map((p) => (
                <VStack key={p.label} gap={0}>
                  <Heading level={3} className="brand-gradient-text">
                    {p.value}
                  </Heading>
                  <Text type="supporting" color="secondary">
                    {p.label}
                  </Text>
                </VStack>
              ))}
            </HStack>
          ) : null}
        </VStack>

        {/* Form panel */}
        <Center>
          <VStack gap={3} padding={6} hAlign="center" width="100%">
            {children}
            <Link href="/">Về trang chủ</Link>
          </VStack>
        </Center>
      </Grid>
    </Section>
  );
}
