"use client";

import { useState } from "react";
import { Dialog, DialogHeader } from "@astryxdesign/core/Dialog";
import { Layout, LayoutContent, LayoutFooter } from "@astryxdesign/core/Layout";
import { VStack } from "@astryxdesign/core/VStack";
import { HStack } from "@astryxdesign/core/HStack";
import { StackItem } from "@astryxdesign/core/Stack";
import { Button } from "@astryxdesign/core/Button";
import { Divider } from "@astryxdesign/core/Divider";
import { FormLayout } from "@astryxdesign/core/FormLayout";
import { Field } from "@astryxdesign/core/Field";
import { TextInput } from "@astryxdesign/core/TextInput";
import { TextArea } from "@astryxdesign/core/TextArea";
import { Selector } from "@astryxdesign/core/Selector";
import { useToast } from "@astryxdesign/core/Toast";

import { AdminCurriculumBuilder } from "@/components/AdminCurriculumBuilder";
import type {
  Course,
  CourseCategory,
  CourseStatus,
  Section as CourseSection,
} from "@/lib/types";

/**
 * Course.category is the authored display label; Course.categorySlug is the
 * machine value the catalogue filters on. Keeping the two in sync by hand is
 * how the legacy data drifted, so the admin picks the slug and the label is
 * derived from it.
 */
const categoryOptions: { value: CourseCategory; label: string }[] = [
  { value: "livestream", label: "Chiến lược Livestream" },
  { value: "tiktok", label: "Xây kênh TikTok" },
  { value: "content-ai", label: "Tối ưu Content AI" },
  { value: "shopee", label: "Shopee & Lazada" },
  { value: "combo", label: "Combo ưu đãi" },
];

const categoryLabel = (slug: CourseCategory): string =>
  categoryOptions.find((o) => o.value === slug)?.label ?? "Khóa học";

const statusOptions: { value: CourseStatus; label: string }[] = [
  { value: "active", label: "Đang bán" },
  { value: "draft", label: "Bản nháp" },
];

/** "Chiến Lược Livestream" -> "chien-luoc-livestream". */
function slugify(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

/** Accepts "1.990.000", "1990000 đ" etc. Returns NaN when there is no number. */
function parseVnd(input: string): number {
  const digits = input.replace(/[^\d]/g, "");
  return digits === "" ? NaN : Number(digits);
}

type Errors = Partial<Record<"title" | "price" | "oldPrice" | "image", string>>;

export function AdminCourseDialog({
  isOpen,
  course,
  onOpenChange,
  onSave,
}: {
  isOpen: boolean;
  /** null = creating a new course. */
  course: Course | null;
  onOpenChange: (isOpen: boolean) => void;
  onSave: (course: Course) => void;
}) {
  const showToast = useToast();

  const [title, setTitle] = useState("");
  const [categorySlug, setCategorySlug] =
    useState<CourseCategory>("livestream");
  const [price, setPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [status, setStatus] = useState<CourseStatus>("draft");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [curriculum, setCurriculum] = useState<CourseSection[]>([]);
  const [errors, setErrors] = useState<Errors>({});

  // Re-seed the form whenever the dialog is opened for a different course.
  // Keyed remount from the parent would also work; this keeps the parent thin.
  const [loadedFor, setLoadedFor] = useState<string | null>(null);
  const formKey = isOpen ? (course?.id ?? "__new__") : null;

  if (isOpen && loadedFor !== formKey) {
    setLoadedFor(formKey);
    setTitle(course?.title ?? "");
    setCategorySlug(course?.categorySlug ?? "livestream");
    setPrice(course ? String(course.price) : "");
    setOldPrice(course?.oldPrice ? String(course.oldPrice) : "");
    setStatus(course?.status ?? "draft");
    setImage(course?.image ?? "");
    setDescription(course?.description ?? "");
    setCurriculum(course?.curriculum ?? []);
    setErrors({});
  }
  if (!isOpen && loadedFor !== null) setLoadedFor(null);

  const validate = (): boolean => {
    const next: Errors = {};
    const priceValue = parseVnd(price);
    const oldPriceValue = oldPrice.trim() === "" ? null : parseVnd(oldPrice);

    if (!title.trim()) next.title = "Vui lòng nhập tên khóa học.";
    if (Number.isNaN(priceValue) || priceValue <= 0)
      next.price = "Giá phải là một số lớn hơn 0.";
    if (oldPriceValue !== null) {
      if (Number.isNaN(oldPriceValue) || oldPriceValue <= 0)
        next.oldPrice = "Giá gốc phải là một số lớn hơn 0.";
      else if (!Number.isNaN(priceValue) && oldPriceValue <= priceValue)
        next.oldPrice = "Giá gốc phải lớn hơn giá bán.";
    }
    if (!image.trim()) next.image = "Vui lòng nhập đường dẫn ảnh.";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = () => {
    if (!validate()) return;

    const priceValue = parseVnd(price);
    const oldPriceValue =
      oldPrice.trim() === "" ? undefined : parseVnd(oldPrice);

    const next: Course = {
      // Editing keeps the id AND the slug: the storefront URL
      // /khoa-hoc/[slug] is already public, renaming would 404 it.
      id: course?.id ?? crypto.randomUUID(),
      slug: course?.slug ?? (slugify(title) || crypto.randomUUID()),
      title: title.trim(),
      category: categoryLabel(categorySlug),
      categorySlug,
      price: priceValue,
      oldPrice: oldPriceValue,
      purchases: course?.purchases ?? 0,
      status,
      image: image.trim(),
      description: description.trim() || undefined,
      // Fields the legacy seed authored but this form does not expose are
      // preserved rather than silently dropped on edit.
      level: course?.level,
      type: course?.type,
      rating: course?.rating,
      reviews: course?.reviews,
      instructor: course?.instructor,
      badge: course?.badge,
      lessonsLabel: course?.lessonsLabel,
      durationLabel: course?.durationLabel,
      curriculum,
    };

    onSave(next);
    showToast({
      body: course
        ? `Đã cập nhật "${next.title}".`
        : `Đã thêm khóa học "${next.title}".`,
    });
    onOpenChange(false);
  };

  return (
    <Dialog
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      purpose="form"
      width={760}
      maxHeight="85vh"
    >
      <Layout
        header={
          <DialogHeader
            title={course ? "Sửa khóa học" : "Thêm khóa học"}
            subtitle={
              course
                ? "Cập nhật thông tin và chương trình học."
                : "Tạo khóa học mới cho trang bán hàng."
            }
            onOpenChange={onOpenChange}
          />
        }
        content={
          <LayoutContent>
            <VStack gap={5}>
              <FormLayout>
                <TextInput
                  label="Tên khóa học (bắt buộc)"
                  value={title}
                  onChange={setTitle}
                  placeholder="Khóa học Livestream AI"
                  status={
                    errors.title
                      ? { type: "error", message: errors.title }
                      : undefined
                  }
                />

                <Selector
                  label="Danh mục (bắt buộc)"
                  options={categoryOptions}
                  value={categorySlug}
                  onChange={(v) => setCategorySlug(v as CourseCategory)}
                />

                <Selector
                  label="Trạng thái (bắt buộc)"
                  options={statusOptions}
                  value={status}
                  onChange={(v) => setStatus(v as CourseStatus)}
                  description="Bản nháp không hiển thị trên trang bán hàng."
                />

                <TextInput
                  label="Giá bán (bắt buộc)"
                  value={price}
                  onChange={setPrice}
                  placeholder="1990000"
                  status={
                    errors.price
                      ? { type: "error", message: errors.price }
                      : undefined
                  }
                />

                <TextInput
                  label="Giá gốc (để trống nếu không giảm giá)"
                  value={oldPrice}
                  onChange={setOldPrice}
                  placeholder="3500000"
                  status={
                    errors.oldPrice
                      ? { type: "error", message: errors.oldPrice }
                      : undefined
                  }
                />

                <TextInput
                  label="Ảnh khóa học (bắt buộc)"
                  description="Dùng đường dẫn nội bộ, ví dụ /images/livestream.avif. Ảnh từ tên miền ngoài sẽ không hiển thị."
                  value={image}
                  onChange={setImage}
                  placeholder="/images/livestream.avif"
                  status={
                    errors.image
                      ? { type: "error", message: errors.image }
                      : undefined
                  }
                />

                <TextArea
                  label="Mô tả khóa học"
                  value={description}
                  onChange={setDescription}
                  rows={3}
                  placeholder="Học viên sẽ đạt được gì sau khóa học này?"
                />
              </FormLayout>

              <Divider />

              <AdminCurriculumBuilder
                sections={curriculum}
                onChange={setCurriculum}
              />
            </VStack>
          </LayoutContent>
        }
        footer={
          <LayoutFooter>
            <HStack gap={2} hAlign="end">
              <StackItem>
                <Button
                  label="Hủy"
                  variant="secondary"
                  onClick={() => onOpenChange(false)}
                />
              </StackItem>
              <StackItem>
                <Button
                  label={course ? "Lưu thay đổi" : "Thêm khóa học"}
                  variant="primary"
                  onClick={submit}
                />
              </StackItem>
            </HStack>
          </LayoutFooter>
        }
      />
    </Dialog>
  );
}
