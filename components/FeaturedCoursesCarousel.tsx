'use client';

import {Carousel} from '@astryxdesign/core/Carousel';
import {VStack} from '@astryxdesign/core/VStack';

import {CourseCard} from '@/components/CourseCard';
import type {Course} from '@/lib/types';

/**
 * "Khóa học nổi bật" as a scroll-snap carousel. A carousel is the right shape
 * here because it shows the catalogue's breadth (all active courses, not a
 * 4-card sample) without adding page height. User-paced only: astryx Carousel
 * has no autoplay, arrows appear on hover, and edge fades signal overflow.
 */
export function FeaturedCoursesCarousel({courses}: {courses: Course[]}) {
  return (
    <Carousel
      aria-label="Khóa học nổi bật"
      gap={3}
      hasSnap
      style={{width: '100%'}}
    >
      {courses.map((c) => (
        <VStack key={c.id} width={300} style={{flexShrink: 0}}>
          <CourseCard course={c} />
        </VStack>
      ))}
    </Carousel>
  );
}
