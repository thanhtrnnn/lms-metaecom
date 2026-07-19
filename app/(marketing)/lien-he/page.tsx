import type {Metadata} from 'next';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';
import {StackItem} from '@astryxdesign/core/Stack';
import {Card} from '@astryxdesign/core/Card';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Link} from '@astryxdesign/core/Link';
import {List, ListItem} from '@astryxdesign/core/List';
import {MapPin, Phone, Mail, Check} from 'lucide-react';
import {PageShell} from '@/components/layout/PageShell';
import {PageHeader} from '@/components/PageHeader';
import {ContactForm} from '@/components/ContactForm';
import {ASIDE_WIDTH, CARD_PAD} from '@/lib/layout';
import {contact} from '@/data/content';
import {site} from '@/data/site';

export const metadata: Metadata = {title: 'Liên hệ'};

export default function Page() {
  const bullets = (contact.bullets ?? []) as string[];
  return (
    <PageShell>
      <PageHeader
        eyebrow={contact.hero?.tag}
        title={contact.hero?.heading ?? 'Liên hệ'}
        subcopy={contact.hero?.subcopy}
        current="Liên hệ"
      />

      <HStack gap={5} vAlign="start" wrap="wrap">
        <StackItem size="fill">
          <Card padding={CARD_PAD}>
            <VStack gap={4}>
              <Heading level={2}>Gửi yêu cầu tư vấn</Heading>
              <ContactForm />
            </VStack>
          </Card>
        </StackItem>

        <Card padding={CARD_PAD} width={ASIDE_WIDTH}>
          <VStack gap={4}>
            <Heading level={2}>Thông tin liên hệ</Heading>
            <VStack gap={2}>
              <HStack gap={2} vAlign="start">
                <MapPin size={16} aria-hidden />
                <Text type="supporting">{site.contact.address}</Text>
              </HStack>
              <HStack gap={2} vAlign="center">
                <Phone size={16} aria-hidden />
                <Link href={`tel:${site.contact.phone.replace(/\s/g, '')}`}>
                  {site.contact.phone}
                </Link>
              </HStack>
              <HStack gap={2} vAlign="center">
                <Mail size={16} aria-hidden />
                <Link href={`mailto:${site.contact.email}`}>
                  {site.contact.email}
                </Link>
              </HStack>
            </VStack>

            {bullets.length ? (
              <List hasDividers>
                {bullets.map((b) => (
                  <ListItem
                    key={b}
                    label={b}
                    startContent={<Check size={16} aria-hidden />}
                  />
                ))}
              </List>
            ) : null}
          </VStack>
        </Card>
      </HStack>
    </PageShell>
  );
}
