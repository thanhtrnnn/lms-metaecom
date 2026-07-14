"use client";

import { usePathname } from "next/navigation";
import {
  SideNav,
  SideNavItem,
  SideNavSection,
} from "@astryxdesign/core/SideNav";
import { User, GraduationCap, Receipt, ShieldCheck } from "lucide-react";

/**
 * The four student destinations. SiteHeader already provides app identity in
 * the AppShell topNav, so this SideNav deliberately has no SideNavHeading.
 * Links resolve through next/link via the LinkProvider in Providers.tsx.
 */
const items = [
  { href: "/tai-khoan", label: "Trang cá nhân", icon: <User aria-hidden /> },
  {
    href: "/tai-khoan/khoa-hoc-cua-toi",
    label: "Khóa học của tôi",
    icon: <GraduationCap aria-hidden />,
  },
  {
    href: "/tai-khoan/thanh-toan",
    label: "Lịch sử thanh toán",
    icon: <Receipt aria-hidden />,
  },
  {
    href: "/tai-khoan/bao-mat",
    label: "Mật khẩu & Bảo mật",
    icon: <ShieldCheck aria-hidden />,
  },
];

export function AccountSideNav() {
  const pathname = usePathname();

  return (
    <SideNav>
      <SideNavSection title="Tài khoản">
        {items.map((item) => (
          <SideNavItem
            key={item.href}
            label={item.label}
            href={item.href}
            icon={item.icon}
            isSelected={pathname === item.href}
          />
        ))}
      </SideNavSection>
    </SideNav>
  );
}
