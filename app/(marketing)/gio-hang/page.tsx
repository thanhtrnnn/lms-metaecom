import type {Metadata} from 'next';
import {Section} from '@astryxdesign/core/Section';
import {VStack} from '@astryxdesign/core/VStack';
import {Heading} from '@astryxdesign/core/Heading';
import {Breadcrumbs, BreadcrumbItem} from '@astryxdesign/core/Breadcrumbs';

import {CartCheckout} from '@/components/CartCheckout';

export const metadata: Metadata = {title: 'Giỏ hàng'};

export default function Page() {
  return (
    <Section padding={6}>
      <VStack gap={4}>
        <Breadcrumbs label="Đường dẫn">
          <BreadcrumbItem href="/">Trang chủ</BreadcrumbItem>
          <BreadcrumbItem isCurrent>Giỏ hàng</BreadcrumbItem>
        </Breadcrumbs>
        <Heading level={1}>Giỏ hàng</Heading>
        <CartCheckout />
      </VStack>
    </Section>
  );
}
