import Image from 'next/image';
import NextLink from 'next/link';
import type {Metadata} from 'next';
import {Section} from '@astryxdesign/core/Section';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';
import {Card} from '@astryxdesign/core/Card';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Button} from '@astryxdesign/core/Button';
import {Badge} from '@astryxdesign/core/Badge';
import {Breadcrumbs, BreadcrumbItem} from '@astryxdesign/core/Breadcrumbs';
import {CardGrid} from '@/components/layout/CardGrid';
import {CONTENT_MAXW, CARD_PAD, HERO_PAD, PAGE_GAP} from '@/lib/layout';
import {enterprise, img} from '@/data/content';

export const metadata: Metadata = {title: 'Đào tạo doanh nghiệp'};

type Block = {
  title: string;
  desc?: string | null;
  description?: string | null;
};
type Logo = {
  src?: string | null;
  fallback?: string | null;
  name?: string | null;
};
type CaseStudy = {
  client?: string | null;
  title: string;
  desc?: string | null;
  description?: string | null;
};

/**
 * Content is the Vercel legacy page verbatim (the user's chosen reference —
 * verified byte-identical to the extraction source). This page previously
 * rendered `hero.heading` RAW — which contains literal <br/><span> markup —
 * so the H1 showed HTML as text; headingPlain is the correct field. Layout
 * recomposed onto the site's centered band rhythm.
 */
export default function Page() {
  const blocks = (enterprise.solutions?.blocks ?? []) as Block[];
  const logos = (enterprise.trustLogos?.logos ?? []) as Logo[];
  const cases = (enterprise.caseStudies?.items ?? []) as CaseStudy[];

  return (
    <VStack gap={0}>
      {/* Hero — centered, like the landing. */}
      <Section padding={HERO_PAD} variant="transparent">
        <VStack gap={PAGE_GAP} hAlign="center">
          <VStack gap={2} hAlign="center">
            <Breadcrumbs label="Đường dẫn">
              <BreadcrumbItem href="/">Trang chủ</BreadcrumbItem>
              <BreadcrumbItem isCurrent>Doanh nghiệp</BreadcrumbItem>
            </Breadcrumbs>
          </VStack>
          <VStack gap={3} hAlign="center" maxWidth={820}>
            <Heading level={1} type="display-3" textWrap="balance" justify="center">
              {enterprise.hero?.headingPlain ?? 'Đào tạo doanh nghiệp'}
            </Heading>
            <Text color="secondary" justify="center" type="large">
              {enterprise.hero?.subcopy}
            </Text>
          </VStack>
          <NextLink href="/lien-he">
            <Button label="Liên hệ tư vấn" variant="primary" size="lg" />
          </NextLink>
        </VStack>
      </Section>

      {/* Trust strip — same quiet treatment as the landing. */}
      {logos.length ? (
        <Section padding={4} variant="transparent">
          <VStack gap={3} hAlign="center">
            <Text type="supporting" color="secondary" justify="center">
              {enterprise.trustLogos?.title}
            </Text>
            <HStack gap={6} wrap="wrap" hAlign="center" vAlign="center">
              {logos.map((l, i) => {
                const src = img(l.src, l.fallback);
                return src ? (
                  <Image
                    key={i}
                    src={src}
                    alt={l.name ?? ''}
                    width={110}
                    height={28}
                    className="partner-logo"
                    style={{height: 24, width: 'auto', objectFit: 'contain'}}
                  />
                ) : null;
              })}
            </HStack>
          </VStack>
        </Section>
      ) : null}

      {/* Service packages */}
      <Section padding={HERO_PAD} variant="muted" dividers={['top']}>
        <VStack gap={PAGE_GAP} hAlign="center">
          <VStack gap={2} hAlign="center" maxWidth={720}>
            <Heading level={2} textWrap="balance" justify="center">
              {enterprise.solutions?.heading}
            </Heading>
            <Text color="secondary" justify="center">
              {enterprise.solutions?.subcopy}
            </Text>
          </VStack>
          <CardGrid minWidth={300} maxWidth={CONTENT_MAXW}>
            {blocks.map((b) => (
              <Card key={b.title} padding={CARD_PAD} className="brand-gradient-surface">
                <VStack gap={2}>
                  <Heading level={3}>{b.title}</Heading>
                  <Text type="supporting" color="secondary">
                    {b.desc ?? b.description}
                  </Text>
                </VStack>
              </Card>
            ))}
          </CardGrid>
        </VStack>
      </Section>

      {/* Case studies */}
      {cases.length ? (
        <Section padding={HERO_PAD}>
          <VStack gap={PAGE_GAP} hAlign="center">
            <VStack gap={2} hAlign="center" maxWidth={720}>
              <Heading level={2} textWrap="balance" justify="center">
                {enterprise.caseStudies?.heading}
              </Heading>
              <Text color="secondary" justify="center">
                {enterprise.caseStudies?.subcopy}
              </Text>
            </VStack>
            <CardGrid minWidth={300} maxWidth={CONTENT_MAXW}>
              {cases.map((c) => (
                <Card key={c.title} padding={CARD_PAD}>
                  <VStack gap={2}>
                    {c.client ? <Badge label={c.client} variant="teal" /> : null}
                    <Heading level={3}>{c.title}</Heading>
                    <Text type="supporting" color="secondary">
                      {c.desc ?? c.description}
                    </Text>
                  </VStack>
                </Card>
              ))}
            </CardGrid>
          </VStack>
        </Section>
      ) : null}

      {/* Closing CTA band */}
      <Section padding={HERO_PAD} className="brand-gradient-surface" dividers={['top']}>
        <VStack gap={3} hAlign="center">
          <Heading level={2} justify="center" textWrap="balance">
            Cần lộ trình riêng cho đội ngũ của bạn?
          </Heading>
          <NextLink href="/lien-he">
            <Button label="Liên hệ tư vấn" variant="primary" size="lg" />
          </NextLink>
        </VStack>
      </Section>
    </VStack>
  );
}
