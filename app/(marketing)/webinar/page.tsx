import type {Metadata} from 'next';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';
import {StackItem} from '@astryxdesign/core/Stack';
import {Card} from '@astryxdesign/core/Card';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Button} from '@astryxdesign/core/Button';
import {Badge} from '@astryxdesign/core/Badge';
import {EmptyState} from '@astryxdesign/core/EmptyState';
import {CalendarClock} from 'lucide-react';
import {PageShell} from '@/components/layout/PageShell';
import {PageHeader} from '@/components/PageHeader';
import {CARD_PAD} from '@/lib/layout';
import {webinars} from '@/data/content';

export const metadata: Metadata = {title: 'Webinar miễn phí'};

type Event = {
  title: string;
  description?: string | null;
  date?: string | null;
};

export default function Page() {
  // The legacy site had exactly ONE event. Not padded out with invented ones.
  const events = (webinars.events ?? []) as Event[];
  return (
    <PageShell>
      <PageHeader
        title={webinars.hero?.heading ?? 'Webinar miễn phí'}
        subcopy={webinars.hero?.subcopy}
        current="Webinar"
      />
      <Heading level={2}>
        {webinars.sectionTitle ?? 'Sự Kiện Sắp Diễn Ra'}
      </Heading>
      {events.length === 0 ? (
        <EmptyState
          icon={<CalendarClock aria-hidden />}
          title="Chưa có sự kiện nào"
          description="Hiện chưa có webinar nào được lên lịch. Vui lòng quay lại sau."
        />
      ) : (
        <VStack gap={3}>
          {events.map((e) => (
            <Card key={e.title} padding={CARD_PAD}>
              <HStack gap={4} vAlign="center" wrap="wrap">
                <StackItem size="fill">
                  <VStack gap={2}>
                    {e.date ? <Badge label={e.date} variant="info" /> : null}
                    <Heading level={3}>{e.title}</Heading>
                    {e.description ? (
                      <Text type="supporting" color="secondary">
                        {e.description}
                      </Text>
                    ) : null}
                  </VStack>
                </StackItem>
                <Button label="Đăng ký tham dự" variant="primary" />
              </HStack>
            </Card>
          ))}
        </VStack>
      )}
    </PageShell>
  );
}
