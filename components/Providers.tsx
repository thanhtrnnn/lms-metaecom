"use client";

import { useEffect, useState } from "react";
import NextLink from "next/link";
import { LinkProvider } from "@astryxdesign/core/Link";
import { ToastViewport } from "@astryxdesign/core/Toast";

import { migrateLegacyStorage } from "@/lib/migrate";

/**
 * LinkProvider routes every Astryx link (nav items, breadcrumbs, cards…)
 * through next/link, so the whole site gets client-side navigation without
 * threading an `as` prop through each component.
 *
 * ToastViewport hosts the toasts raised by useToast — these replace the
 * legacy site's window.alert() calls on checkout, invoice download, etc.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  // Reconcile localStorage left behind by the old site before anything reads
  // it: merge in the courses they've never seen, and re-key cart/purchases
  // from title-matching onto courseId. Runs once per browser.
  const [migrated, setMigrated] = useState(false);
  useEffect(() => {
    migrateLegacyStorage();
    setMigrated(true);
  }, []);
  void migrated;

  return (
    <LinkProvider component={NextLink}>
      {children}
      <ToastViewport />
    </LinkProvider>
  );
}
