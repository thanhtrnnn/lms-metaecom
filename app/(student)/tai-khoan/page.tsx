import type {Metadata} from 'next';
import {Section} from '@astryxdesign/core/Section';
import {VStack} from '@astryxdesign/core/VStack';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Breadcrumbs, BreadcrumbItem} from '@astryxdesign/core/Breadcrumbs';

import {AccountProfile} from '@/components/AccountProfile';

export const metadata: Metadata = {title: 'Trang cá nhân'};

export default function Page() {
  return (
    <Section padding={6}>
      <VStack gap={5}>
        <VStack gap={2}>
          <Breadcrumbs label="Đường dẫn">
            <BreadcrumbItem href="/">Trang chủ</BreadcrumbItem>
            <BreadcrumbItem isCurrent>Trang cá nhân</BreadcrumbItem>
          </Breadcrumbs>
          <Heading level={1}>Trang cá nhân</Heading>
          <Text color="secondary">
            Cập nhật thông tin liên hệ của bạn.
          </Text>
        </VStack>

        <AccountProfile />
      </VStack>
    </Section>
  );
}
