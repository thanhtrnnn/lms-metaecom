"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { VStack } from "@astryxdesign/core/VStack";
import { HStack } from "@astryxdesign/core/HStack";
import { Card } from "@astryxdesign/core/Card";
import { Heading } from "@astryxdesign/core/Heading";
import { Text } from "@astryxdesign/core/Text";
import { Link } from "@astryxdesign/core/Link";
import { Button } from "@astryxdesign/core/Button";
import { FormLayout } from "@astryxdesign/core/FormLayout";
import { Field } from "@astryxdesign/core/Field";
import { TextInput } from "@astryxdesign/core/TextInput";
import { useToast } from "@astryxdesign/core/Toast";

import { useAuth } from "@/lib/stores";

type Errors = Partial<Record<"email" | "password", string>>;

/**
 * The legacy login.html validated NOTHING — submitting an empty form set
 * isLoggedIn=true. Both fields are checked here before we touch the store.
 *
 * Still a localStorage prototype: there is no password check, because there is
 * no account store to check one against. The form validates shape, not identity.
 */
export function AuthLoginForm({ next }: { next?: string }) {
  const router = useRouter();
  const { login } = useAuth();
  const showToast = useToast();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setSubmitting] = useState(false);

  const validate = (): boolean => {
    const nextErrors: Errors = {};
    if (!/^\S+@\S+\.\S+$/.test(email.trim()))
      nextErrors.email = "Email không hợp lệ.";
    if (password.length < 8)
      nextErrors.password = "Mật khẩu phải có ít nhất 8 ký tự.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const submit = () => {
    if (!validate()) return;

    setSubmitting(true);
    login(email.trim());
    showToast({ body: "Đăng nhập thành công." });

    // Only same-origin paths — never bounce the user to an external URL from a
    // query string.
    const target =
      next && next.startsWith("/") && !next.startsWith("//") ? next : "/";
    router.push(target);
  };

  return (
    <Card padding={6} width="100%" maxWidth={440}>
      <VStack gap={4}>
        <VStack gap={1}>
          <Heading level={1}>Đăng nhập</Heading>
          <Text type="supporting" color="secondary">
            Đăng nhập để vào học và xem lịch sử thanh toán.
          </Text>
        </VStack>

        <FormLayout>
          <TextInput
            label="Email (bắt buộc)"
            type="email"
            value={email}
            onChange={setEmail}
            placeholder="ban@email.com"
            status={
              errors.email
                ? { type: "error", message: errors.email }
                : undefined
            }
          />
          <TextInput
            label="Mật khẩu (bắt buộc)"
            type="password"
            value={password}
            onChange={setPassword}
            placeholder="Ít nhất 8 ký tự"
            status={
              errors.password
                ? { type: "error", message: errors.password }
                : undefined
            }
          />
        </FormLayout>

        <Button
          label="Đăng nhập"
          variant="primary"
          isLoading={isSubmitting}
          onClick={submit}
        />

        <HStack gap={1} hAlign="center" wrap="wrap">
          <Text type="supporting" color="secondary">
            Chưa có tài khoản?
          </Text>
          <Link href="/dang-ky">Đăng ký ngay</Link>
        </HStack>
      </VStack>
    </Card>
  );
}
