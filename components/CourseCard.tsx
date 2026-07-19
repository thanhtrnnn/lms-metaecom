import Image from 'next/image';
import {ClickableCard} from '@astryxdesign/core/ClickableCard';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Badge} from '@astryxdesign/core/Badge';
import {AspectRatio} from '@astryxdesign/core/AspectRatio';
import {Star, Users} from 'lucide-react';

import type {Course} from '@/lib/types';
import {discountPercent, formatVnd} from '@/lib/format';

export function CourseCard({course}: {course: Course}) {
  const off = discountPercent(course.price, course.oldPrice);

  return (
    <ClickableCard
      label={course.title}
      href={`/khoa-hoc/${course.slug}`}
      padding={0}
    >
      <VStack gap={0}>
        <AspectRatio ratio={16 / 9}>
          <Image
            src={course.image}
            alt={course.title}
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            style={{objectFit: 'cover'}}
          />
        </AspectRatio>

        <VStack gap={2} padding={4}>
          <HStack gap={1} wrap="wrap">
            <Badge label={course.category} variant="teal" />
            {course.badge ? (
              <Badge label={course.badge} variant="info" />
            ) : null}
            {off ? <Badge label={`-${off}%`} variant="error" /> : null}
          </HStack>

          {/* Production titles are long ALL-CAPS strings: give them 3 lines
              and reserve that height so the meta/price rows align across
              cards. Astryx shows the full title in a tooltip if it still
              truncates. */}
          <VStack minHeight={88}>
            <Heading level={3} maxLines={3}>
              {course.title}
            </Heading>
          </VStack>

          <HStack gap={3} vAlign="center">
            {course.rating ? (
              <HStack gap={0.5} vAlign="center">
                <Star size={14} aria-hidden />
                <Text type="supporting">{course.rating}</Text>
              </HStack>
            ) : (
              <Text type="supporting" color="secondary">
                Chưa có đánh giá
              </Text>
            )}
            {course.purchases > 0 ? (
              <HStack gap={0.5} vAlign="center">
                <Users size={14} aria-hidden />
                <Text type="supporting">{course.purchases} học viên</Text>
              </HStack>
            ) : null}
          </HStack>

          <HStack gap={2} vAlign="center" wrap="wrap">
            <Text type="label">{formatVnd(course.price)}</Text>
            {course.oldPrice ? (
              <Text type="supporting" color="secondary">
                <s>{formatVnd(course.oldPrice)}</s>
              </Text>
            ) : null}
          </HStack>
        </VStack>
      </VStack>
    </ClickableCard>
  );
}
