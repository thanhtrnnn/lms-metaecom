import {notFound} from 'next/navigation';
import {LessonPlayer} from '@/components/LessonPlayer';
import {seedCourses} from '@/data/courses';

type Props = {params: Promise<{slug: string; lessonId: string}>};

export default async function Page({params}: Props) {
  const {slug, lessonId} = await params;
  const course = seedCourses.find((c) => c.slug === slug);
  if (!course) notFound();

  return <LessonPlayer course={course} lessonId={lessonId} />;
}
