'use client';

import {useState} from 'react';
import {VStack} from '@astryxdesign/core/VStack';
import {FormLayout} from '@astryxdesign/core/FormLayout';
import {Field} from '@astryxdesign/core/Field';
import {TextInput} from '@astryxdesign/core/TextInput';
import {TextArea} from '@astryxdesign/core/TextArea';
import {Button} from '@astryxdesign/core/Button';
import {useToast} from '@astryxdesign/core/Toast';
import {FORM_GAP} from '@/lib/layout';

type Errors = Partial<Record<'name' | 'email' | 'message', string>>;

export function ContactForm() {
  const showToast = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Errors>({});

  const submit = () => {
    const next: Errors = {};
    if (!name.trim()) next.name = 'Vui lòng nhập họ tên.';
    if (!/^\S+@\S+\.\S+$/.test(email)) next.email = 'Email không hợp lệ.';
    if (message.trim().length < 10)
      next.message = 'Nội dung cần ít nhất 10 ký tự.';
    setErrors(next);
    if (Object.keys(next).length) return;

    // There is no backend and no form endpoint anywhere in this project, so be
    // straight about it rather than pretending the message was sent.
    showToast({
      body: `Cảm ơn ${name}. Đây là bản demo — biểu mẫu chưa được kết nối máy chủ, vui lòng liên hệ qua email hoặc điện thoại bên cạnh.`,
    });
  };

  return (
    <VStack gap={FORM_GAP}>
      <FormLayout>
        <TextInput
          label="Họ và tên (bắt buộc)"
          value={name}
          onChange={setName}
          placeholder="Nguyễn Văn A"
          status={
            errors.name ? {type: 'error', message: errors.name} : undefined
          }
        />
        <TextInput
          label="Email (bắt buộc)"
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="ban@email.com"
          status={
            errors.email ? {type: 'error', message: errors.email} : undefined
          }
        />
        <TextArea
          label="Nội dung (bắt buộc)"
          value={message}
          onChange={setMessage}
          placeholder="Bạn cần hỗ trợ điều gì?"
          status={
            errors.message
              ? {type: 'error', message: errors.message}
              : undefined
          }
        />
      </FormLayout>
      <Button label="Gửi liên hệ" variant="primary" onClick={submit} />
    </VStack>
  );
}
