import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
import {Breadcrumbs, BreadcrumbItem} from '@astryxdesign/core/Breadcrumbs';

import {CourseDetail} from '@/components/CourseDetail';
import {PageShell} from '@/components/layout/PageShell';
import {seedCourses} from '@/data/courses';

// Next 16: params is async.
type Props = {params: Promise<{slug: string}>};

export function generateStaticParams() {
  return seedCourses.map((c) => ({slug: c.slug}));
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {slug} = await params;
  const course = seedCourses.find((c) => c.slug === slug);
  if (!course) return {};
  return {
    title: course.title,
    description: course.description ?? course.title,
  };
}

export default async function Page({params}: Props) {
  const {slug} = await params;
  const course = seedCourses.find((c) => c.slug === slug);
  if (!course) notFound();

  // Search engines want the trail even though the visible one is client-side.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.description,
    provider: {'@type': 'Organization', name: 'META ECOM UNI'},
    offers: {
      '@type': 'Offer',
      price: course.price,
      priceCurrency: 'VND',
    },
  };

  return (
    <PageShell>
      <Breadcrumbs label="Đường dẫn">
        <BreadcrumbItem href="/">Trang chủ</BreadcrumbItem>
        <BreadcrumbItem href="/khoa-hoc">Khóa học</BreadcrumbItem>
        <BreadcrumbItem isCurrent>{course.title}</BreadcrumbItem>
      </Breadcrumbs>

      <CourseDetail course={course} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
      />
    </PageShell>
  );
}
