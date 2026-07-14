import type {Metadata} from 'next';
import {Section} from '@astryxdesign/core/Section';
import {AdminCoursesManager} from '@/components/AdminCoursesManager';

export const metadata: Metadata = {title: 'Khóa học'};

export default function AdminCoursesPage() {
  return (
    <Section padding={5} variant="transparent">
      <AdminCoursesManager />
    </Section>
  );
}
