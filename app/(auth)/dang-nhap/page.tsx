import type {Metadata} from 'next';

import {AuthLoginForm} from '@/components/AuthLoginForm';

export const metadata: Metadata = {
  title: 'Đăng nhập',
  description: 'Đăng nhập vào tài khoản học viên META ECOM UNI.',
};

/**
 * `?next=` is read on the server and handed to the form as a prop, so the
 * client component never needs useSearchParams (and therefore no Suspense
 * boundary just to read one query param).
 */
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{next?: string}>;
}) {
  const {next} = await searchParams;
  return <AuthLoginForm next={next} />;
}
