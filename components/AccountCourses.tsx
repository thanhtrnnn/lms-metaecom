'use client';

import Image from 'next/image';
import {useRouter} from 'next/navigation';
import {VStack} from '@astryxdesign/core/VStack';
import {Card} from '@astryxdesign/core/Card';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Button} from '@astryxdesign/core/Button';
import {AspectRatio} from '@astryxdesign/core/AspectRatio';
import {ProgressBar} from '@astryxdesign/core/ProgressBar';
import {EmptyState} from '@astryxdesign/core/EmptyState';
import {GraduationCap} from 'lucide-react';

import {formatDate} from '@/lib/format';
import {useAuth, useCourses, useHasMounted, usePurchases} from '@/lib/stores';
import type {Course} from '@/lib/types';
import {CardGrid} from '@/components/layout/CardGrid';
import {AccountLoginPrompt} from './AccountLoginPrompt';

/**
 * Where "Vào học" goes. If the course has a curriculum we open its first
 * lesson; the seed catalogue has none, so in practice this lands on the course
 * page rather than a player with nothing to play.
 */
function learnHref(course: Course | undefined): string {
  if (!course) return '/khoa-hoc';
  const firstLesson = course.curriculum?.[0]?.lessons?.[0];
  return firstLesson
    ? `/hoc/${course.slug}/${firstLesson.id}`
    : `/khoa-hoc/${course.slug}`;
}

export function AccountCourses() {
  const router = useRouter();
  const {isLoggedIn} = useAuth();
  const {purchased} = usePurchases();
  const {courses} = useCourses();
  const mounted = useHasMounted();

  if (!mounted) return null;
  if (!isLoggedIn)
    return <AccountLoginPrompt next="/tai-khoan/khoa-hoc-cua-toi" />;

  if (purchased.length === 0) {
    return (
      <EmptyState
        icon={<GraduationCap aria-hidden />}
        title="Bạn chưa có khóa học nào"
        description="Sau khi thanh toán, khóa học sẽ xuất hiện ở đây."
        actions={
          <Button
            label="Xem khóa học"
            variant="primary"
            onClick={() => router.push('/khoa-hoc')}
          />
        }
      />
    );
  }

  return (
    <CardGrid>
      {purchased.map((item) => {
        const course = courses.find((c) => c.id === item.courseId);
        return (
          <Card key={item.courseId} padding={0}>
            <VStack gap={0}>
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  style={{objectFit: 'cover'}}
                />
              </AspectRatio>

              <VStack gap={2} padding={4}>
                <Heading level={3} maxLines={2}>
                  {item.title}
                </Heading>
                <Text type="supporting" color="secondary">
                  Mua ngày {formatDate(item.purchasedAt)}
                </Text>

                {/* Tiến độ học không được ghi nhận ở bất kỳ đâu trong ứng dụng
                    này — không có sự kiện "hoàn thành bài học" nào được lưu.
                    Vì vậy luôn hiển thị 0%, không bịa ra con số. */}
                <ProgressBar
                  label="Chưa bắt đầu học"
                  value={0}
                  max={100}
                  hasValueLabel
                />

                <Button
                  label="Vào học"
                  variant="secondary"
                  onClick={() => router.push(learnHref(course))}
                />
              </VStack>
            </VStack>
          </Card>
        );
      })}
    </CardGrid>
  );
}
