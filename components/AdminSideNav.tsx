"use client";

import { usePathname } from "next/navigation";
import {
  SideNav,
  SideNavHeading,
  SideNavItem,
  SideNavSection,
} from "@astryxdesign/core/SideNav";
import {
  BookOpen,
  ExternalLink,
  GraduationCap,
  LayoutDashboard,
  Users,
} from "lucide-react";

/**
 * The admin's own navigation. Deliberately NOT SiteHeader/SiteFooter: the
 * marketing chrome (cart, mega-menu, "Đăng ký khóa học" CTA) is noise once you
 * are behind the admin routes.
 */
const adminNav = [
  { href: "/admin", label: "Tổng quan", icon: LayoutDashboard },
  { href: "/admin/khoa-hoc", label: "Khóa học", icon: BookOpen },
  { href: "/admin/hoc-vien", label: "Học viên", icon: Users },
];

export function AdminSideNav() {
  const pathname = usePathname();

  return (
    <SideNav
      header={
        <SideNavHeading
          icon={<GraduationCap aria-hidden />}
          heading="META ECOM UNI"
          subheading="Trang quản trị"
          headingHref="/admin"
        />
      }
      collapsible
    >
      <SideNavSection title="Quản trị">
        {adminNav.map(({ href, label, icon: Icon }) => (
          <SideNavItem
            key={href}
            label={label}
            icon={<Icon aria-hidden />}
            href={href}
            isSelected={pathname === href}
          />
        ))}
      </SideNavSection>

      <SideNavSection title="Liên kết">
        <SideNavItem
          label="Xem trang bán hàng"
          icon={<ExternalLink aria-hidden />}
          href="/"
        />
      </SideNavSection>
    </SideNav>
  );
}
