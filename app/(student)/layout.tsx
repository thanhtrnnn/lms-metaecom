import {AppShell} from '@astryxdesign/core/AppShell';

import {SiteHeader} from '@/components/SiteHeader';
import {AccountSideNav} from '@/components/AccountSideNav';

/**
 * Student area: the site header stays (cart, account menu) and a SideNav lists
 * the four account destinations. Pages bring their own Section padding, so the
 * shell adds none.
 */
export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppShell
      topNav={<SiteHeader />}
      sideNav={<AccountSideNav />}
      height="auto"
      contentPadding={0}
    >
      {children}
    </AppShell>
  );
}
