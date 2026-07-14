import type {Metadata} from 'next';
import {AppShell} from '@astryxdesign/core/AppShell';
import {AdminSideNav} from '@/components/AdminSideNav';

export const metadata: Metadata = {
  title: {default: 'Quản trị', template: '%s · Quản trị'},
  robots: {index: false, follow: false},
};

/**
 * Admin chrome: a SideNav and nothing else. contentPadding is 0 because every
 * admin page is a dashboard or a table — each page owns its own Section
 * padding so tables can run edge-to-edge where that reads better.
 */
export default function AdminLayout({children}: {children: React.ReactNode}) {
  return (
    <AppShell sideNav={<AdminSideNav />} contentPadding={0} variant="section">
      {children}
    </AppShell>
  );
}
