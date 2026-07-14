"use client";

import { VStack } from "@astryxdesign/core/VStack";
import { HStack } from "@astryxdesign/core/HStack";
import { Grid } from "@astryxdesign/core/Grid";
import { Card } from "@astryxdesign/core/Card";
import { Heading } from "@astryxdesign/core/Heading";
import { Text } from "@astryxdesign/core/Text";
import { Badge } from "@astryxdesign/core/Badge";
import { EmptyState } from "@astryxdesign/core/EmptyState";
import { Table, proportional, pixel } from "@astryxdesign/core/Table";
import type { TableColumn } from "@astryxdesign/core/Table";
import { BookOpen, Receipt, Users, Wallet } from "lucide-react";

import { formatDate, formatVnd } from "@/lib/format";
import { useBilling, useCourses, useHasMounted, useUsers } from "@/lib/stores";
import type { BillingRecord } from "@/lib/types";

/**
 * Every number on this page is derived from the stores. The legacy dashboard
 * hardcoded "324.5M ₫", "1,240 học viên mới" and "4.8/5" — figures that were
 * not computed from anything and were false the moment they shipped. They are
 * gone. Average rating has no real source (no review store exists), so there
 * is no rating tile rather than an invented one.
 */

const statusLabel: Record<BillingRecord["status"], string> = {
  paid: "Đã thanh toán",
  pending: "Chờ xử lý",
  failed: "Thất bại",
};

const statusVariant: Record<
  BillingRecord["status"],
  "success" | "warning" | "error"
> = {
  paid: "success",
  pending: "warning",
  failed: "error",
};

interface OrderRow extends Record<string, unknown> {
  rowId: string;
  orderId: string;
  date: string;
  title: string;
  price: number;
  status: BillingRecord["status"];
}

const orderColumns: TableColumn<OrderRow>[] = [
  { key: "orderId", header: "Mã đơn", width: pixel(140) },
  { key: "title", header: "Khóa học", width: proportional(2) },
  {
    key: "date",
    header: "Ngày",
    width: pixel(120),
    renderCell: (item) => formatDate(item.date),
  },
  {
    key: "price",
    header: "Giá trị",
    width: pixel(140),
    align: "end",
    renderCell: (item) => formatVnd(item.price),
  },
  {
    key: "status",
    header: "Trạng thái",
    width: pixel(150),
    renderCell: (item) => (
      <Badge
        label={statusLabel[item.status]}
        variant={statusVariant[item.status]}
      />
    ),
  },
];

function StatCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <Card padding={4}>
      <VStack gap={2}>
        <HStack gap={2} vAlign="center">
          {icon}
          <Text type="supporting" color="secondary">
            {label}
          </Text>
        </HStack>
        <Heading level={2}>{value}</Heading>
      </VStack>
    </Card>
  );
}

export function AdminDashboard() {
  const { records } = useBilling();
  const { courses } = useCourses();
  const users = useUsers();
  const mounted = useHasMounted();

  // Billing, users and admin-authored courses all live in localStorage, so the
  // server snapshot and the browser disagree until the first effect runs.
  if (!mounted) return null;

  const revenue = records.reduce((sum, r) => sum + r.price, 0);

  const recent: OrderRow[] = [...records]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 8)
    .map((r) => ({
      rowId: `${r.orderId}-${r.courseId}`,
      orderId: r.orderId,
      date: r.date,
      title: r.title,
      price: r.price,
      status: r.status,
    }));

  return (
    <VStack gap={5}>
      <VStack gap={1}>
        <Heading level={1}>Tổng quan</Heading>
        <Text type="supporting" color="secondary">
          Số liệu được tính trực tiếp từ dữ liệu thực tế của hệ thống.
        </Text>
      </VStack>

      <Grid columns={{ minWidth: 220 }} gap={4}>
        <StatCard
          label="Doanh thu"
          value={formatVnd(revenue)}
          icon={<Wallet aria-hidden />}
        />
        <StatCard
          label="Đơn hàng"
          value={String(records.length)}
          icon={<Receipt aria-hidden />}
        />
        <StatCard
          label="Khóa học"
          value={String(courses.length)}
          icon={<BookOpen aria-hidden />}
        />
        <StatCard
          label="Học viên"
          value={String(users.length)}
          icon={<Users aria-hidden />}
        />
      </Grid>

      <VStack gap={3}>
        <Heading level={2}>Đơn hàng gần đây</Heading>
        {recent.length === 0 ? (
          <EmptyState
            icon={<Receipt aria-hidden />}
            title="Chưa có đơn hàng"
            description="Đơn hàng sẽ xuất hiện tại đây ngay khi có học viên thanh toán."
          />
        ) : (
          <Table
            data={recent}
            columns={orderColumns}
            idKey="rowId"
            hasHover
            density="compact"
          />
        )}
      </VStack>
    </VStack>
  );
}
