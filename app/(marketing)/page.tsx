import {VStack} from '@astryxdesign/core/VStack';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Button} from '@astryxdesign/core/Button';
import {Card} from '@astryxdesign/core/Card';

export default function Page() {
  return (
    <VStack gap={4} padding={6}>
      <Heading level={1}>META ECOM UNI</Heading>
      <Heading level={2}>Kiến tạo hệ sinh thái thương mại điện tử</Heading>
      <Card padding={4}>
        <VStack gap={2}>
          <Text>
            Kiểm tra dấu tiếng Việt: ế ộ ữ ị ằ ẩ ợ ườ đ — Nền Tảng Giáo Dục
            E-Commerce &amp; Marketing Hàng Đầu Việt Nam
          </Text>
          <Text type="supporting">
            Khóa học Livestream AI · Chiến Lược Xây Kênh TikTok · Tối ưu Content AI
          </Text>
        </VStack>
      </Card>
      <Button label="Đăng ký khóa học" variant="primary" />
    </VStack>
  );
}
