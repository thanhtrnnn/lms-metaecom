import Image from 'next/image';
import NextLink from 'next/link';
import type {Metadata} from 'next';
import {Section} from '@astryxdesign/core/Section';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';
import {Grid} from '@astryxdesign/core/Grid';
import {Card} from '@astryxdesign/core/Card';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Button} from '@astryxdesign/core/Button';
import {PageHeader} from '@/components/PageHeader';
import {enterprise, img} from '@/data/content';

export const metadata: Metadata = {title: 'Đào tạo doanh nghiệp'};

type Block = {title: string; desc?: string | null; description?: string | null};
type Logo = {src?: string | null; fallback?: string | null; name?: string | null};
type CaseStudy = {title: string; desc?: string | null; description?: string | null};

export default function Page() {
  const blocks = (enterprise.solutions?.blocks ?? []) as Block[];
  const logos = (enterprise.trustLogos?.logos ?? []) as Logo[];
  const cases = (enterprise.caseStudies?.items ?? []) as CaseStudy[];

  return (
    <Section padding={6}>
      <VStack gap={8}>
        <PageHeader
          title={enterprise.hero?.heading ?? 'Đào tạo doanh nghiệp'}
          subcopy={enterprise.hero?.subcopy}
          current="Doanh nghiệp"
        />

        {logos.length ? (
          <VStack gap={3}>
            <Text type="supporting" color="secondary">
              {enterprise.trustLogos?.title}
            </Text>
            <HStack gap={5} wrap="wrap" vAlign="center">
              {logos.map((l, i) => {
                const src = img(l.src, l.fallback);
                return src ? (
                  <Image
                    key={i}
                    src={src}
                    alt={l.name ?? ''}
                    width={110}
                    height={32}
                    style={{height: 28, width: 'auto', objectFit: 'contain'}}
                  />
                ) : null;
              })}
            </HStack>
          </VStack>
        ) : null}

        <VStack gap={4}>
          <VStack gap={2}>
            <Heading level={2}>{enterprise.solutions?.heading}</Heading>
            <Text color="secondary">{enterprise.solutions?.subcopy}</Text>
          </VStack>
          <Grid columns={{minWidth: 260}} gap={4}>
            {blocks.map((b) => (
              <Card key={b.title} padding={4}>
                <VStack gap={2}>
                  <Heading level={3}>{b.title}</Heading>
                  <Text type="supporting" color="secondary">
                    {b.desc ?? b.description}
                  </Text>
                </VStack>
              </Card>
            ))}
          </Grid>
        </VStack>

        {cases.length ? (
          <VStack gap={4}>
            <VStack gap={2}>
              <Heading level={2}>{enterprise.caseStudies?.heading}</Heading>
              <Text color="secondary">{enterprise.caseStudies?.subcopy}</Text>
            </VStack>
            <Grid columns={{minWidth: 260}} gap={4}>
              {cases.map((c) => (
                <Card key={c.title} padding={4}>
                  <VStack gap={2}>
                    <Heading level={3}>{c.title}</Heading>
                    <Text type="supporting" color="secondary">
                      {c.desc ?? c.description}
                    </Text>
                  </VStack>
                </Card>
              ))}
            </Grid>
          </VStack>
        ) : null}

        <Card padding={6}>
          <VStack gap={3} hAlign="center">
            <Heading level={2} justify="center">
              Cần lộ trình riêng cho đội ngũ của bạn?
            </Heading>
            <NextLink href="/lien-he">
              <Button label="Liên hệ tư vấn" variant="primary" size="lg" />
            </NextLink>
          </VStack>
        </Card>
      </VStack>
    </Section>
  );
}
