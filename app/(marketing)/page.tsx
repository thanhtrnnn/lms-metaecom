import Image from 'next/image';
import NextLink from 'next/link';
import {Section} from '@astryxdesign/core/Section';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';
import {StackItem} from '@astryxdesign/core/Stack';
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
import {seedCourses} from '@/data/courses';
import {home, testimonials, blog, img} from '@/data/content';
import {site} from '@/data/site';

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
    <VStack gap={0}>
      {/* Hero. The legacy hero had NO headline and NO subcopy — it was a
          background image plus a single CTA. Rather than invent marketing
          claims, the headline is the site's own <title> tagline and the lead
          paragraph is its real "Kiến tạo hệ sinh thái" copy. */}
      <Section padding={8}>
        {/* Grid, not HStack: StackItem size="fill" takes a 100% flex-basis, so
            the image kept wrapping onto its own row instead of sitting beside
            the copy. Two tracks that collapse to one under 420px each. */}
        <Grid columns={{minWidth: 420}} gap={6}>
          <VStack gap={4} vAlign="center">
            <HStack hAlign="start">
              <Badge label="E-Commerce & Marketing" variant="teal" />
            </HStack>
            <Heading level={1} type="display-2" textWrap="balance">
              {site.tagline}
            </Heading>
            <Text color="secondary">{eco.paragraphs?.[0]}</Text>
            <HStack gap={2} wrap="wrap">
              <NextLink href="/khoa-hoc">
                <Button label="Đăng ký ngay" variant="primary" size="lg" />
              </NextLink>
              <NextLink href="/hoc-thu">
                <Button
                  label="Học thử miễn phí"
                  variant="secondary"
                  size="lg"
                />
              </NextLink>
            </HStack>
          </VStack>

          <Image
            src="/images/chien-luoc-tiktok.avif"
            alt=""
            width={640}
            height={420}
            priority
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: 'var(--radius-container)',
              objectFit: 'cover',
            }}
          />
        </Grid>
      </Section>

      {/* Proof. Static figures exactly as authored — the "animated counters" in
          main.js were dead code with no matching DOM. */}
      <Section padding={8} variant="muted" dividers={['top']}>
        <VStack gap={5}>
          <VStack gap={2}>
            <Heading level={2} textWrap="balance">
              {stats.titlePlain}
            </Heading>
            <Text color="secondary">{stats.desc}</Text>
          </VStack>
          <Grid columns={{minWidth: 200}} gap={4}>
            {((stats.cards ?? []) as Stat[]).map((s) => (
              <VStack key={s.label} gap={1}>
                <Heading level={2} type="display-3">
                  {s.value}
                </Heading>
                <Text type="supporting" color="secondary">
                  {s.label}
                </Text>
              </VStack>
            ))}
          </Grid>
        </VStack>
      </Section>

      <Section padding={8}>
        <VStack gap={5}>
          <Heading level={2} textWrap="balance">
            {solutions.titlePlain}
          </Heading>
          <Grid columns={{minWidth: 260}} gap={4}>
            {((solutions.cards ?? []) as Solution[]).map((s) => (
              <Card key={s.title} padding={4}>
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
          </Grid>
        </VStack>
      </Section>

      <Section padding={8} variant="muted" dividers={['top', 'bottom']}>
        <VStack gap={5}>
          <HStack gap={2} hAlign="between" vAlign="center" wrap="wrap">
            <Heading level={2}>Khóa học nổi bật</Heading>
            <NextLink href="/khoa-hoc">
              <Button label="Xem tất cả khóa học" variant="secondary" />
            </NextLink>
          </HStack>
          <Grid columns={{minWidth: 260}} gap={4}>
            {featured.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </Grid>
        </VStack>
      </Section>

      {/* Testimonials as a quote wall. The legacy site used the generic
          3-card carousel with dots; a wall shows every voice at once and has
          no autoplay to fight. */}
      <Section padding={8}>
        <VStack gap={5}>
          <Heading level={2}>Học viên nói gì về META ECOM UNI</Heading>
          <Grid columns={{minWidth: 300}} gap={4}>
            {(testimonials as Testimonial[]).map((t) => (
              <Card key={t.name} padding={4}>
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
          </Grid>
        </VStack>
      </Section>

      <Section padding={8} variant="muted" dividers={['top']}>
        <VStack gap={5}>
          <HStack gap={2} hAlign="between" vAlign="center" wrap="wrap">
            <Heading level={2}>Blog & Kiến thức</Heading>
            <NextLink href="/blog">
              <Button label="Xem tất cả bài viết" variant="secondary" />
            </NextLink>
          </HStack>
          <Grid columns={{minWidth: 280}} gap={4}>
            {((blog.articles ?? []) as Article[]).slice(0, 3).map((a) => (
              <Card key={a.title} padding={4}>
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
          </Grid>
        </VStack>
      </Section>

      <Section padding={8}>
        <VStack gap={4} hAlign="center">
          <Heading level={2} justify="center" textWrap="balance">
            {cta.heading}
          </Heading>
          <HStack gap={5} wrap="wrap" hAlign="center">
            {((cta.proof?.items ?? []) as Proof[]).map((p) => (
              <VStack key={p.label} gap={0} hAlign="center">
                <Heading level={3}>{p.value}</Heading>
                <Text type="supporting" color="secondary">
                  {p.label}
                </Text>
              </VStack>
            ))}
          </HStack>
          <NextLink href="/khoa-hoc">
            <Button label="Bắt đầu học ngay" variant="primary" size="lg" />
          </NextLink>
        </VStack>
      </Section>
    </VStack>
  );
}
