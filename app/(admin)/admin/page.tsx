import type {Metadata} from 'next';
import {Section} from '@astryxdesign/core/Section';
import {AdminDashboard} from '@/components/AdminDashboard';

export const metadata: Metadata = {title: 'Tổng quan'};

export default function AdminDashboardPage() {
  return (
    <Section padding={5} variant="transparent">
      <AdminDashboard />
    </Section>
  );
}
