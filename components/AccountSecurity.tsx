'use client';

import {useState} from 'react';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';
import {Card} from '@astryxdesign/core/Card';
import {Banner} from '@astryxdesign/core/Banner';
import {Button} from '@astryxdesign/core/Button';
import {FormLayout} from '@astryxdesign/core/FormLayout';
import {Field} from '@astryxdesign/core/Field';
import {TextInput} from '@astryxdesign/core/TextInput';
import {useToast} from '@astryxdesign/core/Toast';

import {useAuth, useHasMounted} from '@/lib/stores';
import {CARD_PAD, FORM_GAP} from '@/lib/layout';
import {AccountLoginPrompt} from './AccountLoginPrompt';

type Errors = Partial<Record<'current' | 'next' | 'confirm', string>>;

export function AccountSecurity() {
  const {isLoggedIn} = useAuth();
  const showToast = useToast();
  const mounted = useHasMounted();

  const [current, setCurrent] = useState('');
  const [next, setNext] = useState('');
  const [confirm, setConfirm] = useState('');
  const [errors, setErrors] = useState<Errors>({});

  if (!mounted) return null;
  if (!isLoggedIn) return <AccountLoginPrompt next="/tai-khoan/bao-mat" />;

  const validate = (): boolean => {
    const nextErrors: Errors = {};
    if (!current) nextErrors.current = 'Vui lòng nhập mật khẩu hiện tại.';
    if (next.length < 8)
      nextErrors.next = 'Mật khẩu mới phải có ít nhất 8 ký tự.';
    if (next && current && next === current)
      nextErrors.next = 'Mật khẩu mới phải khác mật khẩu hiện tại.';
    if (confirm !== next) nextErrors.confirm = 'Mật khẩu xác nhận không khớp.';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const submit = () => {
    if (!validate()) return;

    // Không có backend xác thực: không có mật khẩu nào được lưu, nên cũng không
    // có gì để đổi. Nói thẳng thay vì giả vờ đã đổi thành công.
    showToast({
      body: 'Bản demo chưa có hệ thống xác thực — mật khẩu không được lưu và không thể đổi.',
      type: 'error',
    });
    setCurrent('');
    setNext('');
    setConfirm('');
  };

  return (
    <VStack gap={4} width="100%">
      <Banner
        status="info"
        title="Đây là bản mẫu (prototype)"
        description="Toàn bộ dữ liệu chỉ nằm trong trình duyệt của bạn. Không có máy chủ, không có mật khẩu nào được lưu, nên chức năng đổi mật khẩu chưa hoạt động thật."
      />

      <Card padding={CARD_PAD} width="100%" maxWidth={640}>
        <VStack gap={FORM_GAP}>
          <FormLayout>
            <TextInput
              label="Mật khẩu hiện tại (bắt buộc)"
              type="password"
              value={current}
              onChange={setCurrent}
              status={
                errors.current
                  ? {type: 'error', message: errors.current}
                  : undefined
              }
            />
            <TextInput
              label="Mật khẩu mới (bắt buộc)"
              type="password"
              value={next}
              onChange={setNext}
              placeholder="Ít nhất 8 ký tự"
              status={
                errors.next ? {type: 'error', message: errors.next} : undefined
              }
            />
            <TextInput
              label="Xác nhận mật khẩu mới (bắt buộc)"
              type="password"
              value={confirm}
              onChange={setConfirm}
              status={
                errors.confirm
                  ? {type: 'error', message: errors.confirm}
                  : undefined
              }
            />
          </FormLayout>

          <HStack gap={2}>
            <Button label="Đổi mật khẩu" variant="primary" onClick={submit} />
          </HStack>
        </VStack>
      </Card>
    </VStack>
  );
}
