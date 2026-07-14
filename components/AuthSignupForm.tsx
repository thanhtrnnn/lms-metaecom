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

type Errors = Partial<Record<"name" | "phone" | "email" | "password", string>>;

/** Like login, the legacy signup.html accepted anything. Every field is checked. */
export function AuthSignupForm() {
  const router = useRouter();
  const { signup } = useAuth();
  const showToast = useToast();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setSubmitting] = useState(false);

  const validate = (): boolean => {
    const nextErrors: Errors = {};
    if (!name.trim()) nextErrors.name = "Vui lòng nhập họ tên.";
    if (!/^0\d{8,10}$/.test(phone.replace(/\s/g, "")))
      nextErrors.phone = "Số điện thoại không hợp lệ (bắt đầu bằng 0).";
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
    // The password is deliberately NOT stored: there is no backend, and writing
    // it into localStorage would be worse than not having it.
    signup({
      name: name.trim(),
      email: email.trim(),
      phone: phone.replace(/\s/g, ""),
    });
    showToast({ body: `Chào mừng ${name.trim()} đến với META ECOM UNI.` });
    router.push("/");
  };

  return (
    <Card padding={6} width="100%" maxWidth={440}>
      <VStack gap={4}>
        <VStack gap={1}>
          <Heading level={1}>Đăng ký</Heading>
          <Text type="supporting" color="secondary">
            Tạo tài khoản để mua và theo dõi khóa học của bạn.
          </Text>
        </VStack>

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
          label="Tạo tài khoản"
          variant="primary"
          isLoading={isSubmitting}
          onClick={submit}
        />

        <HStack gap={1} hAlign="center" wrap="wrap">
          <Text type="supporting" color="secondary">
            Đã có tài khoản?
          </Text>
          <Link href="/dang-nhap">Đăng nhập</Link>
        </HStack>
      </VStack>
    </Card>
  );
}
