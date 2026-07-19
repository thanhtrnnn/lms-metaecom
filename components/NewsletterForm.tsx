'use client';

import {useState} from 'react';
import {HStack} from '@astryxdesign/core/HStack';
import {TextInput} from '@astryxdesign/core/TextInput';
import {Button} from '@astryxdesign/core/Button';
import {useToast} from '@astryxdesign/core/Toast';

import {newsletter} from '@/data/content';

/**
 * Newsletter signup, copy synced from production. There is no backend in this
 * prototype, so a valid submit gets an honest demo notice instead of a fake
 * success message.
 */
export function NewsletterForm() {
  const showToast = useToast();
  const [email, setEmail] = useState('');

  const submit = () => {
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      showToast({body: 'Email không hợp lệ.', type: 'error'});
      return;
    }
    showToast({
      body: 'Đây là bản demo — đăng ký nhận tin chưa được kết nối máy chủ.',
    });
    setEmail('');
  };

  return (
    <HStack gap={1} wrap="wrap" vAlign="center">
      <TextInput
        label={newsletter.heading}
        isLabelHidden
        type="email"
        value={email}
        onChange={setEmail}
        placeholder={newsletter.placeholder}
      />
      <Button label={newsletter.cta} variant="primary" onClick={submit} />
    </HStack>
  );
}
