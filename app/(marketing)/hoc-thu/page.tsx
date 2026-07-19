import type {Metadata} from 'next';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';
import {StackItem} from '@astryxdesign/core/Stack';
import {Card} from '@astryxdesign/core/Card';
import {Heading} from '@astryxdesign/core/Heading';
import {List, ListItem} from '@astryxdesign/core/List';
import {Check} from 'lucide-react';
import {PageShell} from '@/components/layout/PageShell';
import {PageHeader} from '@/components/PageHeader';
import {ContactForm} from '@/components/ContactForm';
import {ASIDE_WIDTH, CARD_PAD} from '@/lib/layout';
import {trial} from '@/data/content';

export const metadata: Metadata = {title: 'Đăng ký học thử'};

export default function Page() {
  const benefits = (trial.benefits ?? []) as string[];
  return (
    <PageShell>
      <PageHeader
        eyebrow={trial.hero?.badge}
        title={trial.hero?.heading ?? 'Đăng Ký Học Thử'}
        subcopy={trial.hero?.subcopy}
        current="Học thử"
      />
      <HStack gap={5} vAlign="start" wrap="wrap">
        <StackItem size="fill">
          <VStack gap={3}>
            <Heading level={2}>Bạn nhận được gì</Heading>
            <List hasDividers>
              {benefits.map((b) => (
                <ListItem
                  key={b}
                  label={b}
                  startContent={<Check size={16} aria-hidden />}
                />
              ))}
            </List>
          </VStack>
        </StackItem>
        <Card padding={CARD_PAD} width={ASIDE_WIDTH}>
          <VStack gap={4}>
            <Heading level={2}>Đăng ký học thử</Heading>
            <ContactForm />
          </VStack>
        </Card>
      </HStack>
    </PageShell>
  );
}
