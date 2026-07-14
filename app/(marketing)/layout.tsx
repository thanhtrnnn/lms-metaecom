import {AppShell} from '@astryxdesign/core/AppShell';
import {SiteHeader} from '@/components/SiteHeader';
import {SiteFooter} from '@/components/SiteFooter';

/**
 * The chrome lives here, once. The legacy site copy-pasted this navbar into 23
 * HTML files and kept them in sync by running regex scripts (sync_nav.js,
 * replace_footer.js, fix_mobile_nav.js). AppShell also gives us the mobile
 * drawer and a skip-to-content link for free.
 */
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppShell topNav={<SiteHeader />} height="auto" contentPadding={0}>
      {children}
      <SiteFooter />
    </AppShell>
  );
}
