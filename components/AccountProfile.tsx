"use client";

import { useState } from "react";
import { VStack } from "@astryxdesign/core/VStack";
import { HStack } from "@astryxdesign/core/HStack";
import { Card } from "@astryxdesign/core/Card";
import { Heading } from "@astryxdesign/core/Heading";
import { Text } from "@astryxdesign/core/Text";
import { Avatar } from "@astryxdesign/core/Avatar";
import { Button } from "@astryxdesign/core/Button";
import { Divider } from "@astryxdesign/core/Divider";
import { FormLayout } from "@astryxdesign/core/FormLayout";
import { Field } from "@astryxdesign/core/Field";
import { TextInput } from "@astryxdesign/core/TextInput";
import { useToast } from "@astryxdesign/core/Toast";

import { formatDate } from "@/lib/format";
import { useAuth, useHasMounted } from "@/lib/stores";
import { AccountLoginPrompt } from "./AccountLoginPrompt";

type Errors = Partial<Record<"name" | "phone", string>>;

export function AccountProfile() {
  const { isLoggedIn, user, updateProfile } = useAuth();
  const showToast = useToast();
  const mounted = useHasMounted();

  // The store hands back the server snapshot (null) on the first render and the
  // real user only after mount, so the form reads from the store until the user
  // actually edits something — no effect needed to seed it.
  const [draft, setDraft] = useState<{ name: string; phone: string } | null>(
    null,
  );
  const [errors, setErrors] = useState<Errors>({});

  if (!mounted) return null;
  if (!isLoggedIn || !user) return <AccountLoginPrompt next="/tai-khoan" />;

  const name = draft ? draft.name : user.name;
  const phone = draft ? draft.phone : user.phone;
  const setName = (value: string) => setDraft({ name: value, phone });
  const setPhone = (value: string) => setDraft({ name, phone: value });

  const validate = (): boolean => {
    const nextErrors: Errors = {};
    if (!name.trim()) nextErrors.name = "Vui lòng nhập họ tên.";
    if (!/^0\d{8,10}$/.test(phone.replace(/\s/g, "")))
      nextErrors.phone = "Số điện thoại không hợp lệ (bắt đầu bằng 0).";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const save = () => {
    if (!validate()) return;
    updateProfile({ name: name.trim(), phone: phone.replace(/\s/g, "") });
    showToast({ body: "Đã lưu thông tin cá nhân." });
  };

  return (
    <Card padding={6} width="100%" maxWidth={640}>
      <VStack gap={4}>
        <HStack gap={3} vAlign="center">
          <Avatar name={user.name} src={user.avatar} size="large" />
          <VStack gap={0.5}>
            <Heading level={2}>{user.name}</Heading>
            <Text type="supporting" color="secondary">
              {user.joinedAt
                ? `Tham gia ngày ${formatDate(user.joinedAt)}`
                : user.email}
            </Text>
          </VStack>
        </HStack>

        <Divider />

        <FormLayout>
          <TextInput
            label="Họ và tên (bắt buộc)"
            value={name}
            onChange={setName}
            placeholder="Nguyễn Văn A"
            status={
              errors.name ? { type: "error", message: errors.name } : undefined
            }
          />
          <TextInput
            label="Số điện thoại (bắt buộc)"
            value={phone}
            onChange={setPhone}
            placeholder="0912345678"
            status={
              errors.phone
                ? { type: "error", message: errors.phone }
                : undefined
            }
          />
          <TextInput
            label="Email"
            type="email"
            value={user.email}
            isDisabled
            disabledMessage="Email là định danh tài khoản và không thể thay đổi."
            onChange={() => {}}
          />
        </FormLayout>

        <HStack gap={2}>
          <Button label="Lưu thay đổi" variant="primary" onClick={save} />
        </HStack>
      </VStack>
    </Card>
  );
}
