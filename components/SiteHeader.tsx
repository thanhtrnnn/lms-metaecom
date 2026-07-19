'use client';

import NextLink from 'next/link';
import Image from 'next/image';
import {usePathname, useRouter} from 'next/navigation';
import {
  TopNav,
  TopNavItem,
  TopNavMegaMenu,
  TopNavMegaMenuItem,
} from '@astryxdesign/core/TopNav';
import {Button} from '@astryxdesign/core/Button';
import {Badge} from '@astryxdesign/core/Badge';
import {HStack} from '@astryxdesign/core/HStack';
import {DropdownMenu} from '@astryxdesign/core/DropdownMenu';
import {ShoppingCart, LogOut, User, GraduationCap} from 'lucide-react';

import {nav, site} from '@/data/site';
import {useAuth, useCart, useHasMounted} from '@/lib/stores';
import {ThemeToggle} from '@/components/ThemeToggle';
import {LOGO_HEIGHT} from '@/lib/layout';

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const cart = useCart();
  const {isLoggedIn, user, logout} = useAuth();

  // Cart count and auth state come from localStorage, so they differ between
  // the server snapshot and the browser. Hold the neutral state until mounted
  // or React tears the tree down on a hydration mismatch.
  const mounted = useHasMounted();
  const cartCount = mounted ? cart.count : 0;

  return (
    <TopNav
      label="Điều hướng chính"
      heading={
        // Deliberately NOT TopNavHeading: it renders its `logo` only alongside
        // `heading` text, and our PNG is a full lockup that already contains the
        // wordmark — pairing them would print the brand name twice. TopNav's
        // heading slot takes any ReactNode, so hand it the lockup directly.
        <NextLink href="/" aria-label={`${site.name} — Trang chủ`}>
          <Image
            src={site.logo}
            alt={site.name}
            width={132}
            height={32}
            priority
            className="site-logo"
            style={{height: LOGO_HEIGHT, width: 'auto', display: 'block'}}
          />
        </NextLink>
      }
      startContent={nav.map((item) =>
        item.children ? (
          <TopNavMegaMenu
            key={item.label}
            label={item.label}
            items={item.children.map((child) => (
              <TopNavMegaMenuItem
                key={child.href}
                title={child.label}
                description={child.description}
                href={child.href}
              />
            ))}
          />
        ) : (
          <TopNavItem
            key={item.href}
            label={item.label}
            href={item.href}
            isSelected={pathname === item.href}
          />
        ),
      )}
      endContent={
        <HStack gap={1} vAlign="center">
          <ThemeToggle />
          <NextLink href="/gio-hang">
            <Button
              label="Giỏ hàng"
              variant="ghost"
              icon={<ShoppingCart aria-hidden />}
              endContent={
                cartCount > 0 ? (
                  <Badge label={String(cartCount)} variant="info" />
                ) : undefined
              }
            />
          </NextLink>

          {mounted && isLoggedIn ? (
            <DropdownMenu
              button={{
                label: user?.name ?? 'Tài khoản',
                variant: 'ghost',
                icon: <User aria-hidden />,
              }}
              items={[
                {
                  label: 'Trang cá nhân',
                  icon: <User aria-hidden />,
                  onClick: () => router.push('/tai-khoan'),
                },
                {
                  label: 'Khóa học của tôi',
                  icon: <GraduationCap aria-hidden />,
                  onClick: () => router.push('/tai-khoan/khoa-hoc-cua-toi'),
                },
                {type: 'divider'},
                {
                  label: 'Đăng xuất',
                  icon: <LogOut aria-hidden />,
                  onClick: () => {
                    logout();
                    router.push('/');
                  },
                },
              ]}
            />
          ) : (
            <>
              <NextLink href="/dang-nhap">
                <Button label="Đăng nhập" variant="ghost" />
              </NextLink>
              <NextLink href="/khoa-hoc">
                <Button label="Đăng ký khóa học" variant="primary" />
              </NextLink>
            </>
          )}
        </HStack>
      }
    />
  );
}
