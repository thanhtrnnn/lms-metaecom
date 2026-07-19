import type {Metadata} from 'next';
import {AdminCoursesManager} from '@/components/AdminCoursesManager';
import {PageShell} from '@/components/layout/PageShell';

export const metadata: Metadata = {title: 'Khóa học'};

export default function AdminCoursesPage() {
  return (
    <PageShell variant="transparent">
      <AdminCoursesManager />
    </PageShell>
  );
}
