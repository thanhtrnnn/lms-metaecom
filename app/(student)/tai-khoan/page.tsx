import type {Metadata} from 'next';
import {VStack} from '@astryxdesign/core/VStack';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Breadcrumbs, BreadcrumbItem} from '@astryxdesign/core/Breadcrumbs';

import {AccountProfile} from '@/components/AccountProfile';
import {PageShell} from '@/components/layout/PageShell';
import {HEADER_GAP} from '@/lib/layout';

export const metadata: Metadata = {title: 'Trang cá nhân'};

export default function Page() {
  return (
    <PageShell>
      <VStack gap={HEADER_GAP}>
        <Breadcrumbs label="Đường dẫn">
          <BreadcrumbItem href="/">Trang chủ</BreadcrumbItem>
          <BreadcrumbItem isCurrent>Trang cá nhân</BreadcrumbItem>
        </Breadcrumbs>
        <Heading level={1}>Trang cá nhân</Heading>
        <Text color="secondary">Cập nhật thông tin liên hệ của bạn.</Text>
      </VStack>

      <AccountProfile />
    </PageShell>
  );
}
