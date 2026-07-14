import type {Metadata} from 'next';
import {Section} from '@astryxdesign/core/Section';
import {AdminStudents} from '@/components/AdminStudents';

export const metadata: Metadata = {title: 'Học viên'};

export default function AdminStudentsPage() {
  return (
    <Section padding={5} variant="transparent">
      <AdminStudents />
    </Section>
  );
}
