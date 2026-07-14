import type {Metadata} from 'next';
import {Section} from '@astryxdesign/core/Section';
import {VStack} from '@astryxdesign/core/VStack';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Breadcrumbs, BreadcrumbItem} from '@astryxdesign/core/Breadcrumbs';

import {AccountSecurity} from '@/components/AccountSecurity';

export const metadata: Metadata = {title: 'Mật khẩu & Bảo mật'};

export default function Page() {
  return (
    <Section padding={6}>
      <VStack gap={5}>
        <VStack gap={2}>
          <Breadcrumbs label="Đường dẫn">
            <BreadcrumbItem href="/">Trang chủ</BreadcrumbItem>
            <BreadcrumbItem href="/tai-khoan">Trang cá nhân</BreadcrumbItem>
            <BreadcrumbItem isCurrent>Mật khẩu & Bảo mật</BreadcrumbItem>
          </Breadcrumbs>
          <Heading level={1}>Mật khẩu & Bảo mật</Heading>
          <Text color="secondary">Đổi mật khẩu đăng nhập của bạn.</Text>
        </VStack>

        <AccountSecurity />
      </VStack>
    </Section>
  );
}
