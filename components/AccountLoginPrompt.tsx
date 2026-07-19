'use client';

import {useRouter} from 'next/navigation';
import {EmptyState} from '@astryxdesign/core/EmptyState';
import {Button} from '@astryxdesign/core/Button';
import {LogIn} from 'lucide-react';

/**
 * Every student page needs the same "you are not logged in" state. `next` is
 * the path to come back to after login.
 */
export function AccountLoginPrompt({next}: {next: string}) {
  const router = useRouter();

  return (
    <EmptyState
      icon={<LogIn aria-hidden />}
      title="Bạn chưa đăng nhập"
      description="Đăng nhập để xem thông tin tài khoản của bạn."
      actions={
        <Button
          label="Đăng nhập"
          variant="primary"
          onClick={() =>
            router.push(`/dang-nhap?next=${encodeURIComponent(next)}`)
          }
        />
      }
    />
  );
}
