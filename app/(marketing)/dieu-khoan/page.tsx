import type {Metadata} from 'next';
import {Markdown} from '@astryxdesign/core/Markdown';
import {Text} from '@astryxdesign/core/Text';
import {PageShell} from '@/components/layout/PageShell';
import {PageHeader} from '@/components/PageHeader';
import {PROSE_MAXW} from '@/lib/layout';
import legal from '@/data/legal.json';

export const metadata: Metadata = {title: legal.terms.title};

/** Full legal text synced verbatim from production (meu.edu.vn/terms). */
export default function Page() {
  return (
    <PageShell maxWidth={PROSE_MAXW}>
      <PageHeader title={legal.terms.title} current={legal.terms.title} />
      <Markdown headingLevelStart={2}>{legal.terms.markdown}</Markdown>
      {legal.terms.updatedAt ? (
        <Text type="supporting" color="secondary">
          Cập nhật:{' '}
          {new Date(legal.terms.updatedAt).toLocaleDateString('vi-VN')}
        </Text>
      ) : null}
    </PageShell>
  );
}
