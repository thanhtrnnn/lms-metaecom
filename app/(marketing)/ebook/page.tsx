import type {Metadata} from 'next';
import {VStack} from '@astryxdesign/core/VStack';
import {Card} from '@astryxdesign/core/Card';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Button} from '@astryxdesign/core/Button';
import {FileText} from 'lucide-react';
import {PageShell} from '@/components/layout/PageShell';
import {CardGrid} from '@/components/layout/CardGrid';
import {PageHeader} from '@/components/PageHeader';
import {CARD_PAD, CONTENT_MAXW} from '@/lib/layout';
import {ebooks} from '@/data/content';

export const metadata: Metadata = {title: 'E-book & Template'};

type Item = {title: string; description?: string | null; cta?: string | null};

export default function Page() {
  const items = (ebooks.items ?? []) as Item[];
  return (
    <PageShell maxWidth={CONTENT_MAXW}>
      <PageHeader
        title={ebooks.hero?.heading ?? 'Tài Liệu & Template'}
        subcopy={ebooks.hero?.subcopy}
        current="E-book"
      />
      <CardGrid>
        {items.map((it) => (
          <Card key={it.title} padding={CARD_PAD}>
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
      </CardGrid>
    </PageShell>
  );
}
