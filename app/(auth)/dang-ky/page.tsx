import type {Metadata} from 'next';

import {AuthSignupForm} from '@/components/AuthSignupForm';

export const metadata: Metadata = {
  title: 'Đăng ký',
  description: 'Tạo tài khoản học viên META ECOM UNI.',
};

export default function Page() {
  return <AuthSignupForm />;
}
