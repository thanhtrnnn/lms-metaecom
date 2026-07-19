import type {Metadata} from 'next';
import {AdminDashboard} from '@/components/AdminDashboard';
import {PageShell} from '@/components/layout/PageShell';

export const metadata: Metadata = {title: 'Tổng quan'};

export default function AdminDashboardPage() {
  return (
    <PageShell variant="transparent">
      <AdminDashboard />
    </PageShell>
  );
}
