import type {Metadata} from 'next';
import {Section} from '@astryxdesign/core/Section';
import {VStack} from '@astryxdesign/core/VStack';
import {Grid} from '@astryxdesign/core/Grid';
import {Card} from '@astryxdesign/core/Card';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Button} from '@astryxdesign/core/Button';
import {FileText} from 'lucide-react';
import {PageHeader} from '@/components/PageHeader';
import {ebooks} from '@/data/content';

export const metadata: Metadata = {title: 'E-book & Template'};

type Item = {title: string; description?: string | null; cta?: string | null};

export default function Page() {
  const items = (ebooks.items ?? []) as Item[];
  return (
    <Section padding={6}>
      <VStack gap={6}>
        <PageHeader
          title={ebooks.hero?.heading ?? 'Tài Liệu & Template'}
          subcopy={ebooks.hero?.subcopy}
          current="E-book"
        />
        <Grid columns={{minWidth: 280}} gap={4}>
          {items.map((it) => (
            <Card key={it.title} padding={4}>
              <VStack gap={3}>
                <FileText aria-hidden />
                <Heading level={3}>{it.title}</Heading>
                {it.description ? (
                  <Text type="supporting" color="secondary">
                    {it.description}
                  </Text>
                ) : null}
                <Button label={it.cta ?? 'Tải xuống'} variant="secondary" />
              </VStack>
            </Card>
          ))}
        </Grid>
      </VStack>
    </Section>
  );
}
