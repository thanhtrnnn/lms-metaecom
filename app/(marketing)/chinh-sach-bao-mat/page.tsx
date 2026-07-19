import type {Metadata} from 'next';
import {Markdown} from '@astryxdesign/core/Markdown';
import {Text} from '@astryxdesign/core/Text';
import {PageShell} from '@/components/layout/PageShell';
import {PageHeader} from '@/components/PageHeader';
import {PROSE_MAXW} from '@/lib/layout';
import legal from '@/data/legal.json';

export const metadata: Metadata = {title: legal.privacy.title};

/** Full legal text synced verbatim from production (meu.edu.vn/privacy). */
export default function Page() {
  return (
    <PageShell maxWidth={PROSE_MAXW}>
      <PageHeader title={legal.privacy.title} current={legal.privacy.title} />
      <Markdown headingLevelStart={2}>{legal.privacy.markdown}</Markdown>
      {legal.privacy.updatedAt ? (
        <Text type="supporting" color="secondary">
          Cập nhật:{' '}
          {new Date(legal.privacy.updatedAt).toLocaleDateString('vi-VN')}
        </Text>
      ) : null}
    </PageShell>
  );
}
