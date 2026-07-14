'use client';

import NextLink from 'next/link';
import {LinkProvider} from '@astryxdesign/core/Link';
import {ToastViewport} from '@astryxdesign/core/Toast';

/**
 * LinkProvider routes every Astryx link (nav items, breadcrumbs, cards…)
 * through next/link, so the whole site gets client-side navigation without
 * threading an `as` prop through each component.
 *
 * ToastViewport hosts the toasts raised by useToast — these replace the
 * legacy site's window.alert() calls on checkout, invoice download, etc.
 */
export function Providers({children}: {children: React.ReactNode}) {
  return (
    <LinkProvider component={NextLink}>
      {children}
      <ToastViewport />
    </LinkProvider>
  );
}
