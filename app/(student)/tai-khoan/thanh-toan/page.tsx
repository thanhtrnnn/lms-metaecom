import type {Metadata} from 'next';
import {Section} from '@astryxdesign/core/Section';
import {VStack} from '@astryxdesign/core/VStack';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Breadcrumbs, BreadcrumbItem} from '@astryxdesign/core/Breadcrumbs';

import {AccountBilling} from '@/components/AccountBilling';

export const metadata: Metadata = {title: 'Lịch sử thanh toán'};

export default function Page() {
  return (
    <Section padding={6}>
      <VStack gap={5}>
        <VStack gap={2}>
          <Breadcrumbs label="Đường dẫn">
            <BreadcrumbItem href="/">Trang chủ</BreadcrumbItem>
            <BreadcrumbItem href="/tai-khoan">Trang cá nhân</BreadcrumbItem>
            <BreadcrumbItem isCurrent>Lịch sử thanh toán</BreadcrumbItem>
          </Breadcrumbs>
          <Heading level={1}>Lịch sử thanh toán</Heading>
          <Text color="secondary">Toàn bộ đơn hàng của bạn.</Text>
        </VStack>

        <AccountBilling />
      </VStack>
    </Section>
  );
}
