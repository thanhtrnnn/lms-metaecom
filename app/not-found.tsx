import {Center} from '@astryxdesign/core/Center';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';
import {EmptyState} from '@astryxdesign/core/EmptyState';
import {Button} from '@astryxdesign/core/Button';
import NextLink from 'next/link';
import {Compass} from 'lucide-react';

// The legacy site had no 404 at all — a bad URL just fell through to the server.
export default function NotFound() {
  return (
    <Center minHeight="70dvh">
      <VStack gap={4} hAlign="center">
        <EmptyState
          icon={<Compass aria-hidden />}
          title="Không tìm thấy trang"
          description="Trang bạn tìm không tồn tại hoặc đã được chuyển sang địa chỉ khác."
        />
        <HStack gap={2}>
          <NextLink href="/">
            <Button label="Về trang chủ" variant="primary" />
          </NextLink>
          <NextLink href="/khoa-hoc">
            <Button label="Xem khóa học" variant="secondary" />
          </NextLink>
        </HStack>
      </VStack>
    </Center>
  );
}
