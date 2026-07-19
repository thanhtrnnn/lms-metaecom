'use client';

import {useRouter} from 'next/navigation';
import {VStack} from '@astryxdesign/core/VStack';
import {Text} from '@astryxdesign/core/Text';
import {Badge} from '@astryxdesign/core/Badge';
import {Button} from '@astryxdesign/core/Button';
import {EmptyState} from '@astryxdesign/core/EmptyState';
import {Table, proportional, pixel} from '@astryxdesign/core/Table';
import type {TableColumn} from '@astryxdesign/core/Table';
import {Receipt} from 'lucide-react';

import {formatDate, formatVnd} from '@/lib/format';
import {useAuth, useBilling, useHasMounted} from '@/lib/stores';
import type {BillingRecord} from '@/lib/types';
import {AccountLoginPrompt} from './AccountLoginPrompt';

const statusLabel: Record<BillingRecord['status'], string> = {
  paid: 'Đã thanh toán',
  pending: 'Chờ thanh toán',
  failed: 'Thất bại',
};

const statusVariant: Record<
  BillingRecord['status'],
  'success' | 'warning' | 'error'
> = {
  paid: 'success',
  pending: 'warning',
  failed: 'error',
};

const columns: TableColumn<BillingRecord>[] = [
  {
    key: 'orderId',
    header: 'Mã đơn hàng',
    width: pixel(160),
    renderCell: (r: BillingRecord) => <Text type="label">{r.orderId}</Text>,
  },
  {
    key: 'date',
    header: 'Ngày',
    width: pixel(120),
    renderCell: (r: BillingRecord) => (
      <Text type="body" color="secondary">
        {formatDate(r.date)}
      </Text>
    ),
  },
  {
    key: 'title',
    header: 'Khóa học',
    width: proportional(2),
    renderCell: (r: BillingRecord) => <Text type="body">{r.title}</Text>,
  },
  {
    key: 'price',
    header: 'Số tiền',
    width: pixel(140),
    align: 'end',
    renderCell: (r: BillingRecord) => (
      <Text type="label">{formatVnd(r.price)}</Text>
    ),
  },
  {
    key: 'status',
    header: 'Trạng thái',
    width: pixel(150),
    renderCell: (r: BillingRecord) => (
      <Badge label={statusLabel[r.status]} variant={statusVariant[r.status]} />
    ),
  },
];

export function AccountBilling() {
  const router = useRouter();
  const {isLoggedIn} = useAuth();
  const {records} = useBilling();
  const mounted = useHasMounted();

  if (!mounted) return null;
  if (!isLoggedIn) return <AccountLoginPrompt next="/tai-khoan/thanh-toan" />;

  if (records.length === 0) {
    return (
      <EmptyState
        icon={<Receipt aria-hidden />}
        title="Chưa có giao dịch nào"
        description="Lịch sử thanh toán sẽ hiển thị sau khi bạn mua khóa học."
        actions={
          <Button
            label="Xem khóa học"
            variant="primary"
            onClick={() => router.push('/khoa-hoc')}
          />
        }
      />
    );
  }

  return (
    <VStack gap={3}>
      <Table<BillingRecord>
        data={records}
        columns={columns}
        idKey={(r) => `${r.orderId}-${r.courseId}`}
        hasHover
      />
      {/* Trang cũ có nút "Tải hóa đơn" chỉ chạy alert('Đang tải hóa đơn PDF...').
          Không có hệ thống hóa đơn nào tồn tại, nên nút đó bị bỏ đi và thay bằng
          một dòng nói thật. */}
      <Text type="supporting" color="secondary">
        Hệ thống chưa hỗ trợ xuất hóa đơn PDF. Vui lòng liên hệ bộ phận hỗ trợ
        nếu bạn cần hóa đơn cho đơn hàng của mình.
      </Text>
    </VStack>
  );
}
