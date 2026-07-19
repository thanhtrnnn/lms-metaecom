'use client';

import {useMemo, useState} from 'react';
import {useRouter, useSearchParams} from 'next/navigation';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';
import {StackItem} from '@astryxdesign/core/Stack';
import {Grid} from '@astryxdesign/core/Grid';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Card} from '@astryxdesign/core/Card';
import {Slider} from '@astryxdesign/core/Slider';
import {Collapsible} from '@astryxdesign/core/Collapsible';
import {
  SegmentedControl,
  SegmentedControlItem,
} from '@astryxdesign/core/SegmentedControl';
import {EmptyState} from '@astryxdesign/core/EmptyState';
import {Button} from '@astryxdesign/core/Button';
import {SearchX} from 'lucide-react';

import {CourseCard} from './CourseCard';
import {useCourses} from '@/lib/stores';
import {courseCategories, priceRange} from '@/data/courses';
import {formatVnd} from '@/lib/format';
import {ASIDE_WIDTH, CARD_PAD} from '@/lib/layout';

export function CourseCatalog() {
  const router = useRouter();
  const params = useSearchParams();
  const {courses} = useCourses();

  // ?filter= is how the nav mega-menu deep-links into a category.
  const category = params.get('filter') ?? 'all';

  const [price, setPrice] = useState<[number, number]>([
    priceRange.min,
    priceRange.max,
  ]);

  const visible = useMemo(
    () =>
      courses.filter((c) => {
        if (c.status !== 'active') return false;
        if (category !== 'all' && c.categorySlug !== category) return false;
        if (c.price < price[0] || c.price > price[1]) return false;
        return true;
      }),
    [courses, category, price],
  );

  const setCategory = (next: string) => {
    router.push(next === 'all' ? '/khoa-hoc' : `/khoa-hoc?filter=${next}`, {
      scroll: false,
    });
  };

  const reset = () => {
    setPrice([priceRange.min, priceRange.max]);
    router.push('/khoa-hoc', {scroll: false});
  };

  const isFiltered =
    category !== 'all' ||
    price[0] !== priceRange.min ||
    price[1] !== priceRange.max;

  return (
    <VStack gap={5}>
      <SegmentedControl
        label="Danh mục khóa học"
        value={category}
        onChange={setCategory}
      >
        {courseCategories.map((c) => (
          <SegmentedControlItem key={c.slug} value={c.slug} label={c.label} />
        ))}
      </SegmentedControl>

      <HStack gap={5} vAlign="start" wrap="wrap">
        {/* Filter rail */}
        <Card padding={CARD_PAD} width={ASIDE_WIDTH}>
          <VStack gap={4}>
            <HStack gap={2} hAlign="between" vAlign="center">
              <Heading level={3}>Bộ lọc</Heading>
              {isFiltered ? (
                <Button
                  label="Xóa lọc"
                  variant="ghost"
                  size="sm"
                  onClick={reset}
                />
              ) : null}
            </HStack>

            <Collapsible trigger={<Text type="label">Khoảng giá</Text>}>
              <VStack gap={2}>
                <Slider
                  label="Khoảng giá"
                  isLabelHidden
                  value={price}
                  onChange={(v: number | [number, number]) =>
                    setPrice(v as [number, number])
                  }
                  min={priceRange.min}
                  max={priceRange.max}
                  step={priceRange.step}
                />
                <Text type="supporting" color="secondary">
                  {formatVnd(price[0])} – {formatVnd(price[1])}
                </Text>
              </VStack>
            </Collapsible>
          </VStack>
        </Card>

        {/* Results */}
        <StackItem size="fill">
          <VStack gap={3}>
            <Text type="supporting" color="secondary">
              {visible.length} khóa học
            </Text>

            {visible.length === 0 ? (
              <EmptyState
                icon={<SearchX aria-hidden />}
                title="Không tìm thấy khóa học"
                description="Thử nới rộng khoảng giá hoặc bỏ bớt bộ lọc."
                actions={
                  <Button label="Xóa lọc" variant="secondary" onClick={reset} />
                }
              />
            ) : (
              <Grid gap={4} columns={{minWidth: 260}}>
                {visible.map((c) => (
                  <CourseCard key={c.id} course={c} />
                ))}
              </Grid>
            )}
          </VStack>
        </StackItem>
      </HStack>
    </VStack>
  );
}
