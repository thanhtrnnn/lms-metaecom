import type {Metadata} from 'next';
import {AdminStudents} from '@/components/AdminStudents';
import {PageShell} from '@/components/layout/PageShell';

export const metadata: Metadata = {title: 'Học viên'};

export default function AdminStudentsPage() {
  return (
    <PageShell variant="transparent">
      <AdminStudents />
    </PageShell>
  );
}
