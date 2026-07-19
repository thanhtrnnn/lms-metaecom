import type {Metadata} from 'next';
import {Banner} from '@astryxdesign/core/Banner';
import {Text} from '@astryxdesign/core/Text';
import {PageShell} from '@/components/layout/PageShell';
import {PageHeader} from '@/components/PageHeader';
import {PROSE_MAXW} from '@/lib/layout';
import {site} from '@/data/site';
import legal from '@/data/legal.json';

export const metadata: Metadata = {title: legal.refund.title};

/**
 * Synced from production (meu.edu.vn/refund), whose entire body is the single
 * sentence below — the refund policy is genuinely still being written. Shown
 * with a warning banner rather than pretending a policy exists.
 */
export default function Page() {
  return (
    <PageShell maxWidth={PROSE_MAXW}>
      <PageHeader title={legal.refund.title} current={legal.refund.title} />
      <Banner
        status="warning"
        title={legal.refund.markdown}
        description="Vui lòng liên hệ trước khi dựa vào nội dung trang này."
      />
      <Text color="secondary">
        Mọi thắc mắc xin liên hệ {site.contact.email} hoặc {site.contact.phone}.
      </Text>
    </PageShell>
  );
}
