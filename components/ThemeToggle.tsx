'use client';

import {Button} from '@astryxdesign/core/Button';
import {useThemeMode} from '@/lib/stores';
import {Sun, Moon, Monitor} from 'lucide-react';

/**
 * Cycles the persisted color-mode preference: system → light → dark → system.
 * Mirrors the cart/auth gates — reads from localStorage, so it only reflects
 * the real value after mount. The OS-following 'system' state shows the
 * monitor icon until the user picks a forced mode.
 */
export function ThemeToggle() {
  const {mode, cycle} = useThemeMode();

  const icon =
    mode === 'light' ? (
      <Sun aria-hidden />
    ) : mode === 'dark' ? (
      <Moon aria-hidden />
    ) : (
      <Monitor aria-hidden />
    );

  const label =
    mode === 'light'
      ? 'Chế độ sáng'
      : mode === 'dark'
        ? 'Chế độ tối'
        : 'Theo hệ thống';

  return (
    <Button
      label={label}
      variant="ghost"
      icon={icon}
      onClick={cycle}
      aria-label={label}
    />
  );
}
