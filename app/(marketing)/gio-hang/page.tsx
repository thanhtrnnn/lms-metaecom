import type {Metadata} from 'next';
import {Heading} from '@astryxdesign/core/Heading';
import {Breadcrumbs, BreadcrumbItem} from '@astryxdesign/core/Breadcrumbs';

import {CartCheckout} from '@/components/CartCheckout';
import {PageShell} from '@/components/layout/PageShell';

export const metadata: Metadata = {title: 'Giỏ hàng'};

export default function Page() {
  return (
    <PageShell>
      <Breadcrumbs label="Đường dẫn">
        <BreadcrumbItem href="/">Trang chủ</BreadcrumbItem>
        <BreadcrumbItem isCurrent>Giỏ hàng</BreadcrumbItem>
      </Breadcrumbs>
      <Heading level={1}>Giỏ hàng</Heading>
      <CartCheckout />
    </PageShell>
  );
}
