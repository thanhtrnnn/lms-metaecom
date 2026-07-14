const vnd = new Intl.NumberFormat('vi-VN');

/** 1990000 -> "1.990.000₫" */
export function formatVnd(amount: number): string {
  return `${vnd.format(amount)}₫`;
}

/** 1990000 -> "1.990.000" (no symbol, for inputs) */
export function formatNumber(amount: number): string {
  return vnd.format(amount);
}

/** 3500000 -> 1990000 => 43 (percent off, rounded) */
export function discountPercent(price: number, oldPrice?: number): number | null {
  if (!oldPrice || oldPrice <= price) return null;
  return Math.round(((oldPrice - price) / oldPrice) * 100);
}

const dateFmt = new Intl.DateTimeFormat('vi-VN', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
});

export function formatDate(iso: string): string {
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? iso : dateFmt.format(d);
}
