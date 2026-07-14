"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { VStack } from "@astryxdesign/core/VStack";
import { HStack } from "@astryxdesign/core/HStack";
import { StackItem } from "@astryxdesign/core/Stack";
import { Card } from "@astryxdesign/core/Card";
import { Heading } from "@astryxdesign/core/Heading";
import { Text } from "@astryxdesign/core/Text";
import { Button } from "@astryxdesign/core/Button";
import { IconButton } from "@astryxdesign/core/IconButton";
import { Divider } from "@astryxdesign/core/Divider";
import { EmptyState } from "@astryxdesign/core/EmptyState";
import { FormLayout } from "@astryxdesign/core/FormLayout";
import { Field } from "@astryxdesign/core/Field";
import { TextInput } from "@astryxdesign/core/TextInput";
import { RadioList, RadioListItem } from "@astryxdesign/core/RadioList";
import { useToast } from "@astryxdesign/core/Toast";
import { ShoppingCart, Trash2 } from "lucide-react";

import { formatVnd } from "@/lib/format";
import { useAuth, useCart, useCheckout, useHasMounted } from "@/lib/stores";
import type { PaymentMethod } from "@/lib/types";

type Errors = Partial<Record<"name" | "email" | "phone", string>>;

export function CartCheckout() {
  const router = useRouter();
  const cart = useCart();
  const checkout = useCheckout();
  const { isLoggedIn, user } = useAuth();
  const showToast = useToast();
  const mounted = useHasMounted();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [method, setMethod] = useState<PaymentMethod>("bank");
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setSubmitting] = useState(false);

  // Until mounted, the cart is the server snapshot (empty) — don't flash the
  // empty state at a user who actually has items.
  if (!mounted) return null;

  if (cart.items.length === 0) {
    return (
      <EmptyState
        icon={<ShoppingCart aria-hidden />}
        title="Giỏ hàng trống"
        description="Bạn chưa chọn khóa học nào."
        actions={
          <Button
            label="Xem khóa học"
            variant="primary"
            onClick={() => router.push("/khoa-hoc")}
          />
        }
      />
    );
  }

  /** The legacy checkout validated nothing at all. */
  const validate = (): boolean => {
    const next: Errors = {};
    if (!name.trim()) next.name = "Vui lòng nhập họ tên.";
    if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Email không hợp lệ.";
    if (!/^0\d{8,10}$/.test(phone.replace(/\s/g, "")))
      next.phone = "Số điện thoại không hợp lệ (bắt đầu bằng 0).";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = () => {
    if (!validate()) return;

    if (!isLoggedIn) {
      showToast({
        body: "Vui lòng đăng nhập để hoàn tất thanh toán.",
        type: "error",
      });
      router.push("/dang-nhap?next=/gio-hang");
      return;
    }

    setSubmitting(true);
    const orderId = checkout();
    showToast({ body: `Thanh toán thành công. Mã đơn ${orderId}.` });
    router.push("/tai-khoan/khoa-hoc-cua-toi");
  };

  return (
    <HStack gap={5} vAlign="start" wrap="wrap">
      <StackItem size="fill">
        <VStack gap={4}>
          <Heading level={2}>Đơn hàng</Heading>

          <VStack gap={2}>
            {cart.items.map((item) => (
              <Card key={item.courseId} padding={3}>
                <HStack gap={3} vAlign="center">
                  <Image
                    src={item.image}
                    alt=""
                    width={96}
                    height={54}
                    style={{
                      objectFit: "cover",
                      borderRadius: "var(--radius-container)",
                    }}
                  />
                  <StackItem size="fill">
                    <VStack gap={0.5}>
                      <Text type="label">{item.title}</Text>
                      <Text type="supporting" color="secondary">
                        {formatVnd(item.price)}
                      </Text>
                    </VStack>
                  </StackItem>
                  <IconButton
                    icon={<Trash2 aria-hidden />}
                    label={`Xóa ${item.title} khỏi giỏ hàng`}
                    variant="ghost"
                    onClick={() => cart.remove(item.courseId)}
                  />
                </HStack>
              </Card>
            ))}
          </VStack>

          <Heading level={2}>Thông tin thanh toán</Heading>

          <FormLayout>
            <TextInput
              label="Họ và tên (bắt buộc)"
              value={name}
              onChange={setName}
              placeholder="Nguyễn Văn A"
              status={
                errors.name
                  ? { type: "error", message: errors.name }
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
          </FormLayout>

          <RadioList
            label="Phương thức thanh toán"
            value={method}
            onChange={(v) => setMethod(v as PaymentMethod)}
          >
            <RadioListItem
              value="bank"
              label="Chuyển khoản ngân hàng (VietQR)"
            />
            <RadioListItem value="momo" label="Ví MoMo" />
            <RadioListItem value="card" label="Thẻ Visa / Mastercard" />
          </RadioList>
        </VStack>
      </StackItem>

      <Card padding={4} width={320}>
        <VStack gap={3}>
          <Heading level={3}>Tổng cộng</Heading>
          <Divider />
          <HStack gap={2} hAlign="between">
            <Text type="supporting" color="secondary">
              {cart.items.length} khóa học
            </Text>
            <Heading level={3}>{formatVnd(cart.total)}</Heading>
          </HStack>
          <Button
            label={isLoggedIn ? "Thanh toán" : "Đăng nhập để thanh toán"}
            variant="primary"
            isLoading={isSubmitting}
            onClick={submit}
          />
          {user ? (
            <Text type="supporting" color="secondary">
              Đăng nhập với {user.email}
            </Text>
          ) : null}
        </VStack>
      </Card>
    </HStack>
  );
}
