import type {Metadata} from 'next';
import {Section} from '@astryxdesign/core/Section';
import {VStack} from '@astryxdesign/core/VStack';
import {Text} from '@astryxdesign/core/Text';
import {Banner} from '@astryxdesign/core/Banner';
import {PageHeader} from '@/components/PageHeader';
import {site} from '@/data/site';

export const metadata: Metadata = {title: 'Chính sách bảo mật'};

export default function Page() {
  return (
    <Section padding={6}>
      <VStack gap={5} maxWidth={760}>
        <PageHeader title="Chính sách bảo mật" current="Chính sách bảo mật" />
        {/* The legacy footer linked to this page but no such page ever existed
            (href="#"). Rather than fabricate legal terms — which would be
            actively harmful — this states plainly that the text is pending. */}
        <Banner
          status="warning"
          title="Nội dung đang được hoàn thiện"
          description="Văn bản pháp lý chính thức chưa được cung cấp. Vui lòng liên hệ trước khi dựa vào nội dung trang này."
        />
        <Text color="secondary">
          Trang này sẽ trình bày cách META ECOM UNI thu thập và xử lý dữ liệu cá nhân của học viên.
        </Text>
        <Text color="secondary">
          Mọi thắc mắc xin liên hệ {site.contact.email} hoặc {site.contact.phone}.
        </Text>
      </VStack>
    </Section>
  );
}
