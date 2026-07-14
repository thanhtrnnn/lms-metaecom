import type {Metadata} from 'next';
import {Section} from '@astryxdesign/core/Section';
import {VStack} from '@astryxdesign/core/VStack';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Breadcrumbs, BreadcrumbItem} from '@astryxdesign/core/Breadcrumbs';

import {AccountCourses} from '@/components/AccountCourses';

export const metadata: Metadata = {title: 'Khóa học của tôi'};

export default function Page() {
  return (
    <Section padding={6}>
      <VStack gap={5}>
        <VStack gap={2}>
          <Breadcrumbs label="Đường dẫn">
            <BreadcrumbItem href="/">Trang chủ</BreadcrumbItem>
            <BreadcrumbItem href="/tai-khoan">Trang cá nhân</BreadcrumbItem>
            <BreadcrumbItem isCurrent>Khóa học của tôi</BreadcrumbItem>
          </Breadcrumbs>
          <Heading level={1}>Khóa học của tôi</Heading>
          <Text color="secondary">
            Các khóa học bạn đã mua. Truy cập trọn đời.
          </Text>
        </VStack>

        <AccountCourses />
      </VStack>
    </Section>
  );
}
