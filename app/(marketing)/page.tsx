import Image from 'next/image';
import NextLink from 'next/link';
import {Section} from '@astryxdesign/core/Section';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';
import {Grid} from '@astryxdesign/core/Grid';
import {Card} from '@astryxdesign/core/Card';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Button} from '@astryxdesign/core/Button';
import {Badge} from '@astryxdesign/core/Badge';
import {Avatar} from '@astryxdesign/core/Avatar';
import {Blockquote} from '@astryxdesign/core/Blockquote';
import {List, ListItem} from '@astryxdesign/core/List';

import {Building2, Bot, Megaphone, GraduationCap} from 'lucide-react';

import {CardGrid} from '@/components/layout/CardGrid';
import {FeaturedCoursesCarousel} from '@/components/FeaturedCoursesCarousel';
import {PartnerCarousel} from '@/components/PartnerCarousel';
import {seedCourses} from '@/data/courses';
import {home, testimonials, blog, partners, img} from '@/data/content';
import {CARD_PAD, CONTENT_MAXW, HERO_PAD, PAGE_GAP} from '@/lib/layout';

// The carousel exists to show breadth, so it gets every active course rather
// than the old 4-card sample.
const featured = seedCourses.filter((c) => c.status === 'active');

/** One icon per solutions card, in data order (đào tạo đội ngũ / tự động hóa
 * AI / digital marketing / hệ thống e-learning). */
const SOLUTION_ICONS = [Building2, Bot, Megaphone, GraduationCap];

type Stat = {value: string; label: string};
type Solution = {title: string; description?: string | null};
type Testimonial = {
  quote: string;
  name: string;
  role?: string | null;
  avatar?: string | null;
};
type Article = {
  title: string;
  excerpt?: string | null;
  image?: string | null;
  date?: string | null;
};

/**
 * Landing composition: each band is a different layout family so the page
 * doesn't read as one card grid repeated (hero / logo strip / number band /
 * card grid / carousel / quote columns / row list / CTA band).
 */
export default function HomePage() {
  const hero = home.hero;
  const stats = home.stats;
  const headings = home.sectionHeadings;
  const solutions = home.solutions;
  const cta = home.bottomCta;

  return (
    <VStack gap={0} className="home-shell">
      {/* Hero — copy synced verbatim from production (meu.edu.vn): its badge,
          three-line headline, subcopy and primary CTA. The secondary CTA keeps
          our trial route (production has no trial page). Soft brand aura
          behind everything. */}
      <Section padding={HERO_PAD} variant="transparent">
        <div className="hero-aura" aria-hidden />
        <VStack gap={PAGE_GAP} hAlign="center" vAlign="center">
          <HStack hAlign="center">
            <Badge
              label={hero.badge ?? 'E-Commerce & Marketing'}
              variant="info"
            />
          </HStack>

          <VStack gap={3} hAlign="center" maxWidth={820}>
            <Heading
              level={1}
              type="display-2"
              justify="center"
              style={{whiteSpace: 'pre-line'}}
            >
              {hero.heading}
            </Heading>
            <Text color="secondary" justify="center" type="large">
              {hero.subcopy}
            </Text>
          </VStack>

          <HStack gap={2} wrap="wrap" hAlign="center">
            <NextLink href="/khoa-hoc">
              <Button
                label={hero.ctas?.[0]?.label ?? 'Khám phá lộ trình ngay'}
                variant="primary"
                size="lg"
              />
            </NextLink>
            <NextLink href="/hoc-thu">
              <Button label="Học thử miễn phí" variant="secondary" size="lg" />
            </NextLink>
          </HStack>

          <Image
            src="/images/chien-luoc-tiktok.avif"
            alt=""
            width={960}
            height={540}
            priority
            style={{
              width: '100%',
              maxWidth: CONTENT_MAXW,
              height: 'auto',
              borderRadius: 'var(--radius-page)',
              objectFit: 'cover',
              boxShadow: 'var(--shadow-high)',
              marginTop: 'var(--spacing-3)',
            }}
          />
        </VStack>
      </Section>

      {/* Partner carousel — the production "70+ doanh nghiệp" wall as a
          black-and-white scroll-snap carousel. */}
      <Section padding={HERO_PAD} variant="transparent">
        <VStack gap={PAGE_GAP} hAlign="center">
          <VStack maxWidth={720} hAlign="center">
            <Heading level={2} textWrap="balance" justify="center">
              {partners.title}
            </Heading>
          </VStack>
          <VStack width="100%" maxWidth={CONTENT_MAXW}>
            <PartnerCarousel />
          </VStack>
        </VStack>
      </Section>

      {/* Proof — the production stats band (20,000+ / 50+ / 15+ / 4.8★),
          numbers only, no heading. */}
      <Section padding={HERO_PAD} variant="muted" dividers={['top']}>
        <VStack gap={PAGE_GAP} hAlign="center">
          <Grid columns={{minWidth: 200}} gap={4} maxWidth={880}>
            {((stats.cards ?? []) as Stat[]).map((s) => (
              <VStack key={s.label} gap={1} hAlign="center">
                <Heading
                  level={2}
                  type="display-3"
                  className="brand-gradient-text"
                >
                  {s.value}
                </Heading>
                <Text type="supporting" color="secondary" justify="center">
                  {s.label}
                </Text>
              </VStack>
            ))}
          </Grid>
        </VStack>
      </Section>

      {/* Solutions — the page's one card grid. minWidth 240 lands the four
          cards on a single row at the content width (no 3+1 orphan). */}
      <Section padding={HERO_PAD}>
        <VStack gap={PAGE_GAP} hAlign="center">
          <VStack gap={2} hAlign="center" maxWidth={720}>
            <Heading level={2} textWrap="balance" justify="center">
              {solutions.titlePlain}
            </Heading>
            {solutions.desc ? (
              <Text color="secondary" justify="center">
                {solutions.desc}
              </Text>
            ) : null}
          </VStack>
          <CardGrid minWidth={240} maxWidth={CONTENT_MAXW}>
            {((solutions.cards ?? []) as Solution[]).map((s, i) => {
              const Icon = SOLUTION_ICONS[i % SOLUTION_ICONS.length];
              return (
                <Card
                  key={s.title}
                  padding={CARD_PAD}
                  className="brand-gradient-surface"
                >
                  <VStack gap={2}>
                    <Icon aria-hidden color="var(--color-icon-accent)" />
                    <Heading level={3}>{s.title}</Heading>
                    {s.description ? (
                      <Text type="supporting" color="secondary">
                        {s.description}
                      </Text>
                    ) : null}
                  </VStack>
                </Card>
              );
            })}
          </CardGrid>
        </VStack>
      </Section>

      {/* Featured courses — scroll-snap carousel over every active course. */}
      <Section padding={HERO_PAD} variant="muted" dividers={['top', 'bottom']}>
        <VStack gap={PAGE_GAP} hAlign="center">
          <HStack
            gap={2}
            hAlign="between"
            vAlign="center"
            wrap="wrap"
            width="100%"
            maxWidth={CONTENT_MAXW}
          >
            <Heading level={2}>{headings.featured}</Heading>
            <NextLink href="/khoa-hoc">
              <Button label="Xem tất cả khóa học" variant="secondary" />
            </NextLink>
          </HStack>
          <VStack width="100%" maxWidth={CONTENT_MAXW}>
            <FeaturedCoursesCarousel courses={featured} />
          </VStack>
        </VStack>
      </Section>

      {/* Testimonials — quote columns with breathing room instead of another
          card grid. Four voices; the rest of the wall lives in the legacy
          data untouched. */}
      <Section padding={HERO_PAD}>
        <VStack gap={PAGE_GAP} hAlign="center">
          <Heading level={2} justify="center">
            {headings.testimonials}
          </Heading>
          <Grid columns={{minWidth: 380}} gap={6} maxWidth={CONTENT_MAXW}>
            {(testimonials as Testimonial[]).slice(0, 4).map((t) => (
              <VStack key={t.name} gap={3}>
                <Blockquote>{t.quote}</Blockquote>
                <HStack gap={2} vAlign="center">
                  <Avatar
                    name={t.name}
                    src={img(t.avatar) ?? undefined}
                    size="medium"
                  />
                  <VStack gap={0}>
                    <Text type="label">{t.name}</Text>
                    {t.role ? (
                      <Text type="supporting" color="secondary">
                        {t.role}
                      </Text>
                    ) : null}
                  </VStack>
                </HStack>
              </VStack>
            ))}
          </Grid>
        </VStack>
      </Section>

      {/* Blog & knowledge — edge-to-edge rows (dense data = rows, not cards). */}
      <Section padding={HERO_PAD} variant="muted" dividers={['top']}>
        <VStack gap={PAGE_GAP} hAlign="center">
          <HStack
            gap={2}
            hAlign="between"
            vAlign="center"
            wrap="wrap"
            width="100%"
            maxWidth={CONTENT_MAXW}
          >
            <Heading level={2}>Blog & Kiến thức</Heading>
            <NextLink href="/blog">
              <Button label="Xem tất cả bài viết" variant="secondary" />
            </NextLink>
          </HStack>
          <VStack width="100%" maxWidth={CONTENT_MAXW}>
            <List hasDividers>
              {((blog.articles ?? []) as Article[]).slice(0, 3).map((a) => {
                const thumb = img(a.image);
                return (
                  <ListItem
                    key={a.title}
                    label={a.title}
                    description={a.excerpt ?? undefined}
                    href="/blog"
                    startContent={
                      thumb ? (
                        <Image
                          src={thumb}
                          alt=""
                          width={96}
                          height={54}
                          style={{
                            objectFit: 'cover',
                            borderRadius: 'var(--radius-inner)',
                          }}
                        />
                      ) : undefined
                    }
                    endContent={
                      a.date ? (
                        <Text type="supporting" color="secondary">
                          {a.date}
                        </Text>
                      ) : undefined
                    }
                  />
                );
              })}
            </List>
          </VStack>
        </VStack>
      </Section>

      {/* Bottom CTA — centered, glowing brand surface. */}
      <Section
        padding={HERO_PAD}
        className="brand-gradient-surface"
        dividers={['top']}
      >
        <VStack gap={PAGE_GAP} hAlign="center">
          <VStack gap={2} maxWidth={820} hAlign="center">
            <Heading level={2} justify="center" textWrap="balance">
              {cta.heading}
            </Heading>
            <Text color="secondary" justify="center">
              {cta.subcopy}
            </Text>
          </VStack>
          <HStack gap={2} wrap="wrap" hAlign="center">
            <NextLink href={cta.primary.href}>
              <Button label={cta.primary.label} variant="primary" size="lg" />
            </NextLink>
            <Button
              label={cta.secondary.label}
              variant="secondary"
              size="lg"
              href={cta.secondary.href}
            />
          </HStack>
        </VStack>
      </Section>
    </VStack>
  );
}
