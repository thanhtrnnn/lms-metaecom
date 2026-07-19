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
import {Divider} from '@astryxdesign/core/Divider';

import {CourseCard} from '@/components/CourseCard';
import {CardGrid} from '@/components/layout/CardGrid';
import {seedCourses} from '@/data/courses';
import {home, testimonials, blog, img} from '@/data/content';
import {site} from '@/data/site';
import {CARD_PAD, CONTENT_MAXW, HERO_PAD, PAGE_GAP} from '@/lib/layout';

const featured = seedCourses.filter((c) => c.status === 'active').slice(0, 4);

type Stat = {value: string; label: string};
type Solution = {title: string; description?: string | null};
type Testimonial = {
  quote: string;
  name: string;
  role?: string | null;
  avatar?: string | null;
};
type Article = {title: string; excerpt?: string | null};
type Proof = {value: string; label: string};

export default function HomePage() {
  const stats = home.stats;
  const eco = home.ecosystem;
  const solutions = home.solutions;
  const cta = home.bottomCta;

  return (
    <VStack gap={0} className="home-shell">
      {/* Hero — centered editorial. The legacy hero had NO headline and NO
          subcopy (a background image + single CTA). The headline is the
          site's own <title> tagline; the lead is its real "Kiến tạo hệ sinh
          thái" copy. A soft brand aura sits behind everything. */}
      <Section padding={HERO_PAD} variant="transparent">
        <div className="hero-aura" aria-hidden />
        <VStack gap={PAGE_GAP} hAlign="center" vAlign="center">
          <HStack hAlign="center">
            <Badge label="E-Commerce & Marketing" variant="info" />
          </HStack>

          <VStack gap={3} hAlign="center" maxWidth={820}>
            <Heading
              level={1}
              type="display-2"
              textWrap="balance"
              justify="center"
            >
              {site.tagline}
            </Heading>
            <Text color="secondary" justify="center" type="large">
              {eco.paragraphs?.[0]}
            </Text>
          </VStack>

          <HStack gap={2} wrap="wrap" hAlign="center">
            <NextLink href="/khoa-hoc">
              <Button label="Đăng ký ngay" variant="primary" size="lg" />
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

      {/* Proof — static figures exactly as authored (the legacy "animated
          counters" were dead code with no matching DOM). Centered band. */}
      <Section padding={HERO_PAD} variant="muted" dividers={['top']}>
        <VStack gap={PAGE_GAP} hAlign="center">
          <VStack gap={2} hAlign="center" maxWidth={720}>
            <Heading level={2} textWrap="balance" justify="center">
              {stats.titlePlain}
            </Heading>
            <Text color="secondary" justify="center">
              {stats.desc}
            </Text>
          </VStack>
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

      {/* Solutions — what the platform covers. Centered heading + grid. */}
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
          <CardGrid maxWidth={CONTENT_MAXW}>
            {((solutions.cards ?? []) as Solution[]).map((s) => (
              <Card
                key={s.title}
                padding={CARD_PAD}
                className="brand-gradient-surface"
              >
                <VStack gap={2}>
                  <Heading level={3}>{s.title}</Heading>
                  {s.description ? (
                    <Text type="supporting" color="secondary">
                      {s.description}
                    </Text>
                  ) : null}
                </VStack>
              </Card>
            ))}
          </CardGrid>
        </VStack>
      </Section>

      {/* Featured courses — centered wall of course cards. */}
      <Section
        padding={HERO_PAD}
        variant="muted"
        dividers={['top', 'bottom']}
        className="brand-gradient-surface"
      >
        <VStack gap={PAGE_GAP} hAlign="center">
          <HStack gap={2} hAlign="between" vAlign="center" wrap="wrap">
            <Heading level={2}>Khóa học nổi bật</Heading>
            <NextLink href="/khoa-hoc">
              <Button label="Xem tất cả khóa học" variant="secondary" />
            </NextLink>
          </HStack>
          <CardGrid maxWidth={CONTENT_MAXW}>
            {featured.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </CardGrid>
        </VStack>
      </Section>

      {/* Testimonials as a centered quote wall (the legacy 3-card carousel
          with dots had no autoplay to fight and showed one voice at a time). */}
      <Section padding={HERO_PAD}>
        <VStack gap={PAGE_GAP} hAlign="center">
          <Heading level={2} justify="center">
            Học viên nói gì về META ECOM UNI
          </Heading>
          <CardGrid minWidth={300} maxWidth={CONTENT_MAXW}>
            {(testimonials as Testimonial[]).map((t) => (
              <Card key={t.name} padding={CARD_PAD}>
                <VStack gap={3}>
                  <Blockquote>{t.quote}</Blockquote>
                  <Divider />
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
              </Card>
            ))}
          </CardGrid>
        </VStack>
      </Section>

      {/* Blog & knowledge — centered grid. */}
      <Section padding={HERO_PAD} variant="muted" dividers={['top']}>
        <VStack gap={PAGE_GAP} hAlign="center">
          <HStack gap={2} hAlign="between" vAlign="center" wrap="wrap">
            <Heading level={2}>Blog & Kiến thức</Heading>
            <NextLink href="/blog">
              <Button label="Xem tất cả bài viết" variant="secondary" />
            </NextLink>
          </HStack>
          <CardGrid maxWidth={CONTENT_MAXW}>
            {((blog.articles ?? []) as Article[]).slice(0, 3).map((a) => (
              <Card key={a.title} padding={CARD_PAD}>
                <VStack gap={2}>
                  <Heading level={3} maxLines={2}>
                    {a.title}
                  </Heading>
                  {a.excerpt ? (
                    <Text type="supporting" color="secondary" maxLines={3}>
                      {a.excerpt}
                    </Text>
                  ) : null}
                </VStack>
              </Card>
            ))}
          </CardGrid>
        </VStack>
      </Section>

      {/* Bottom CTA — centered, glowing brand surface. */}
      <Section
        padding={HERO_PAD}
        className="brand-gradient-surface"
        dividers={['top']}
      >
        <VStack gap={PAGE_GAP} hAlign="center">
          <Heading level={2} justify="center" textWrap="balance">
            {cta.heading}
          </Heading>
          <HStack gap={5} wrap="wrap" hAlign="center">
            {((cta.proof?.items ?? []) as Proof[]).map((p) => (
              <VStack key={p.label} gap={0} hAlign="center">
                <Heading level={3} className="brand-gradient-text">
                  {p.value}
                </Heading>
                <Text type="supporting" color="secondary" justify="center">
                  {p.label}
                </Text>
              </VStack>
            ))}
          </HStack>
          <NextLink href="/khoa-hoc">
            <Button label="Bắt đầu học ngay" variant="secondary" size="lg" />
          </NextLink>
        </VStack>
      </Section>
    </VStack>
  );
}
