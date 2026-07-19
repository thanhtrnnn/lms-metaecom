import {Suspense} from 'react';
import {VStack} from '@astryxdesign/core/VStack';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Breadcrumbs, BreadcrumbItem} from '@astryxdesign/core/Breadcrumbs';
import {Spinner} from '@astryxdesign/core/Spinner';
import type {Metadata} from 'next';

import {CourseCatalog} from '@/components/CourseCatalog';
import {PageShell} from '@/components/layout/PageShell';
import {HEADER_GAP} from '@/lib/layout';

export const metadata: Metadata = {
  title: 'Khóa học',
  description:
    'Danh sách khóa học E-Commerce & Marketing: Livestream, TikTok, Content AI, Shopee.',
};

export default function Page() {
  return (
    <PageShell>
      <VStack gap={HEADER_GAP}>
        <Breadcrumbs label="Đường dẫn">
          <BreadcrumbItem href="/">Trang chủ</BreadcrumbItem>
          <BreadcrumbItem isCurrent>Khóa học</BreadcrumbItem>
        </Breadcrumbs>
        <Heading level={1}>Khóa học</Heading>
        <Text color="secondary">
          Chọn lộ trình phù hợp với mục tiêu kinh doanh của bạn.
        </Text>
      </VStack>

      <Suspense fallback={<Spinner label="Đang tải khóa học" />}>
        <CourseCatalog />
      </Suspense>
    </PageShell>
  );
}
