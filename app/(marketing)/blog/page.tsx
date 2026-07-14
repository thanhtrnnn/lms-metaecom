import Image from 'next/image';
import type {Metadata} from 'next';
import {Section} from '@astryxdesign/core/Section';
import {VStack} from '@astryxdesign/core/VStack';
import {Grid} from '@astryxdesign/core/Grid';
import {Card} from '@astryxdesign/core/Card';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Badge} from '@astryxdesign/core/Badge';
import {AspectRatio} from '@astryxdesign/core/AspectRatio';
import {PageHeader} from '@/components/PageHeader';
import {blog, img} from '@/data/content';

export const metadata: Metadata = {title: 'Blog & Kiến thức'};

type Article = {
  title: string;
  excerpt?: string | null;
  image?: string | null;
  date?: string | null;
  category?: string | null;
};

export default function Page() {
  const articles = (blog.articles ?? []) as Article[];
  return (
    <Section padding={6}>
      <VStack gap={6}>
        <PageHeader
          title={blog.hero?.heading ?? 'Blog & Kiến thức'}
          subcopy={blog.hero?.subcopy}
          current="Blog"
        />
        <Grid columns={{minWidth: 300}} gap={4}>
          {articles.map((a) => {
            const src = img(a.image);
            return (
              <Card key={a.title} padding={0}>
                <VStack gap={0}>
                  {src ? (
                    <AspectRatio ratio={16 / 9}>
                      <Image
                        src={src}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 360px"
                        style={{objectFit: 'cover'}}
                      />
                    </AspectRatio>
                  ) : null}
                  <VStack gap={2} padding={4}>
                    {a.category ? (
                      <Badge label={a.category} variant="teal" />
                    ) : null}
                    <Heading level={3} maxLines={2}>
                      {a.title}
                    </Heading>
                    {a.excerpt ? (
                      <Text type="supporting" color="secondary" maxLines={3}>
                        {a.excerpt}
                      </Text>
                    ) : null}
                    {a.date ? (
                      <Text type="supporting" color="secondary">
                        {a.date}
                      </Text>
                    ) : null}
                  </VStack>
                </VStack>
              </Card>
            );
          })}
        </Grid>
      </VStack>
    </Section>
  );
}
