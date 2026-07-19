import type {Metadata} from 'next';
import {VStack} from '@astryxdesign/core/VStack';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Breadcrumbs, BreadcrumbItem} from '@astryxdesign/core/Breadcrumbs';

import {AccountBilling} from '@/components/AccountBilling';
import {PageShell} from '@/components/layout/PageShell';
import {HEADER_GAP} from '@/lib/layout';

export const metadata: Metadata = {title: 'Lịch sử thanh toán'};

export default function Page() {
  return (
    <PageShell>
      <VStack gap={HEADER_GAP}>
        <Breadcrumbs label="Đường dẫn">
          <BreadcrumbItem href="/">Trang chủ</BreadcrumbItem>
          <BreadcrumbItem href="/tai-khoan">Trang cá nhân</BreadcrumbItem>
          <BreadcrumbItem isCurrent>Lịch sử thanh toán</BreadcrumbItem>
        </Breadcrumbs>
        <Heading level={1}>Lịch sử thanh toán</Heading>
        <Text color="secondary">Toàn bộ đơn hàng của bạn.</Text>
      </VStack>

      <AccountBilling />
    </PageShell>
  );
}
