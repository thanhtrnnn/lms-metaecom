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
import { Badge } from "@astryxdesign/core/Badge";
import { Button } from "@astryxdesign/core/Button";
import { TabList, Tab } from "@astryxdesign/core/TabList";
import { Collapsible } from "@astryxdesign/core/Collapsible";
import { List, ListItem } from "@astryxdesign/core/List";
import { EmptyState } from "@astryxdesign/core/EmptyState";
import { AspectRatio } from "@astryxdesign/core/AspectRatio";
import { Divider } from "@astryxdesign/core/Divider";
import { useToast } from "@astryxdesign/core/Toast";
import { Lock, PlayCircle, BookOpen, Star, Users } from "lucide-react";

import type { Course } from "@/lib/types";
import { discountPercent, formatVnd } from "@/lib/format";
import {
  useCart,
  useCourses,
  useHasMounted,
  usePurchases,
} from "@/lib/stores";

export function CourseDetail({ course: seeded }: { course: Course }) {
  const router = useRouter();
  const cart = useCart();
  const { owns } = usePurchases();
  const { courses } = useCourses();
  const showToast = useToast();
  const mounted = useHasMounted();
  const [tab, setTab] = useState("curriculum");

  // The server renders the static seed (good for SEO and first paint), but the
  // admin authors courses into localStorage — including the curriculum, which
  // NO seed course has. Prefer the live store copy once mounted, or nothing the
  // admin writes would ever reach the storefront.
  const course = (mounted && courses.find((c) => c.id === seeded.id)) || seeded;

  const off = discountPercent(course.price, course.oldPrice);
  const purchased = mounted && owns(course.id);
  const inCart = mounted && cart.has(course.id);
  const sections = course.curriculum ?? [];
  const lessonCount = sections.reduce((n, s) => n + s.lessons.length, 0);

  const addToCart = () => {
    cart.add(course);
    // Replaces the legacy `alert()` / 1.8s "✓ Đã thêm" button hack.
    showToast({ body: `Đã thêm "${course.title}" vào giỏ hàng.` });
  };

  return (
    <VStack gap={5}>
      <HStack gap={5} vAlign="start" wrap="wrap">
        <StackItem size="fill">
          <VStack gap={4}>
            <AspectRatio ratio={16 / 9}>
              <Image
                src={course.image}
                alt={course.title}
                fill
                sizes="(max-width: 900px) 100vw, 700px"
                style={{
                  objectFit: "cover",
                  borderRadius: "var(--radius-container)",
                }}
                priority
              />
            </AspectRatio>

            <VStack gap={2}>
              <HStack gap={1} wrap="wrap">
                <Badge label={course.category} variant="teal" />
                {course.level ? (
                  <Badge
                    label={course.level === "basic" ? "Cơ bản" : "Chuyên sâu"}
                    variant="neutral"
                  />
                ) : null}
              </HStack>

              <Heading level={1}>{course.title}</Heading>

              <HStack gap={4} wrap="wrap" vAlign="center">
                {course.rating ? (
                  <HStack gap={1} vAlign="center">
                    <Star size={16} aria-hidden />
                    <Text type="supporting">{course.rating}</Text>
                  </HStack>
                ) : (
                  <Text type="supporting" color="secondary">
                    Chưa có đánh giá
                  </Text>
                )}
                {course.purchases > 0 ? (
                  <HStack gap={1} vAlign="center">
                    <Users size={16} aria-hidden />
                    <Text type="supporting">{course.purchases} học viên</Text>
                  </HStack>
                ) : null}
                {course.instructor ? (
                  <Text type="supporting" color="secondary">
                    Giảng viên: {course.instructor}
                  </Text>
                ) : null}
              </HStack>
            </VStack>

            <TabList value={tab} onChange={setTab} hasDivider>
              <Tab value="curriculum" label="Nội dung khóa học" />
              <Tab value="description" label="Mô tả" />
              <Tab value="instructor" label="Giảng viên" />
            </TabList>

            {tab === "curriculum" ? (
              sections.length === 0 ? (
                /* Not a placeholder for missing UI — the legacy data genuinely
                   has no curriculum for any course. Lessons are authored in
                   /admin/khoa-hoc; say so rather than fake a syllabus. */
                <EmptyState
                  icon={<BookOpen aria-hidden />}
                  title="Nội dung đang được cập nhật"
                  description="Khóa học này chưa có bài giảng nào. Giảng viên sẽ cập nhật lộ trình học sớm."
                />
              ) : (
                <VStack gap={2}>
                  {sections.map((s) => (
                    <Collapsible
                      key={s.id}
                      trigger={
                        <HStack gap={2} vAlign="center">
                          <Text type="label">{s.title}</Text>
                          <Text type="supporting" color="secondary">
                            {s.lessons.length} bài
                          </Text>
                        </HStack>
                      }
                    >
                      <List hasDividers>
                        {s.lessons.map((l) => {
                          const unlocked = purchased || l.isPreview;
                          return (
                            <ListItem
                              key={l.id}
                              label={l.title}
                              description={l.duration}
                              startContent={
                                unlocked ? (
                                  <PlayCircle size={16} aria-hidden />
                                ) : (
                                  <Lock size={16} aria-hidden />
                                )
                              }
                              endContent={
                                l.isPreview && !purchased ? (
                                  <Badge label="Học thử" variant="success" />
                                ) : undefined
                              }
                              onClick={
                                unlocked
                                  ? () =>
                                      router.push(`/hoc/${course.slug}/${l.id}`)
                                  : undefined
                              }
                            />
                          );
                        })}
                      </List>
                    </Collapsible>
                  ))}
                </VStack>
              )
            ) : null}

            {tab === "description" ? (
              <Text>
                {course.description ?? "Khóa học chưa có mô tả chi tiết."}
              </Text>
            ) : null}

            {tab === "instructor" ? (
              <Text>
                {course.instructor
                  ? `Giảng viên phụ trách: ${course.instructor}.`
                  : "Chưa có thông tin giảng viên."}
              </Text>
            ) : null}
          </VStack>
        </StackItem>

        {/* Purchase panel */}
        <Card padding={4} width={320}>
          <VStack gap={3}>
            <HStack gap={2} vAlign="center" wrap="wrap">
              <Heading level={2}>{formatVnd(course.price)}</Heading>
              {course.oldPrice ? (
                <Text type="supporting" color="secondary">
                  <s>{formatVnd(course.oldPrice)}</s>
                </Text>
              ) : null}
              {off ? <Badge label={`-${off}%`} variant="error" /> : null}
            </HStack>

            <Divider />

            <VStack gap={1}>
              <Text type="supporting" color="secondary">
                {lessonCount > 0
                  ? `${sections.length} phần • ${lessonCount} bài học`
                  : course.lessonsLabel
                    ? `${course.lessonsLabel}`
                    : "Nội dung đang cập nhật"}
              </Text>
              <Text type="supporting" color="secondary">
                Truy cập trọn đời
              </Text>
            </VStack>

            {purchased ? (
              <Button
                label="Vào học ngay"
                variant="primary"
                onClick={() => router.push("/tai-khoan/khoa-hoc-cua-toi")}
              />
            ) : inCart ? (
              <Button
                label="Xem giỏ hàng"
                variant="primary"
                onClick={() => router.push("/gio-hang")}
              />
            ) : (
              <Button
                label="Thêm vào giỏ hàng"
                variant="primary"
                onClick={addToCart}
              />
            )}
          </VStack>
        </Card>
      </HStack>
    </VStack>
  );
}
