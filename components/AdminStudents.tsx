'use client';

import {useState} from 'react';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';
import {StackItem} from '@astryxdesign/core/Stack';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {TextInput} from '@astryxdesign/core/TextInput';
import {EmptyState} from '@astryxdesign/core/EmptyState';
import {Table, proportional, pixel} from '@astryxdesign/core/Table';
import type {TableColumn} from '@astryxdesign/core/Table';
import {Search, SearchX, Users} from 'lucide-react';

import {formatDate} from '@/lib/format';
import {useHasMounted, useUsers} from '@/lib/stores';
import {PAGE_GAP} from '@/lib/layout';

interface StudentRow extends Record<string, unknown> {
  rowId: string;
  name: string;
  phone: string;
  email: string;
  joinedAt?: string;
}

const columns: TableColumn<StudentRow>[] = [
  {key: 'name', header: 'Họ và tên', width: proportional(2)},
  {
    key: 'phone',
    header: 'Số điện thoại',
    width: pixel(160),
    renderCell: (item) =>
      item.phone ? (
        item.phone
      ) : (
        <Text type="supporting" color="secondary">
          Chưa có
        </Text>
      ),
  },
  {key: 'email', header: 'Email', width: proportional(2)},
  {
    key: 'joinedAt',
    header: 'Ngày tham gia',
    width: pixel(150),
    renderCell: (item) =>
      item.joinedAt ? (
        formatDate(item.joinedAt)
      ) : (
        <Text type="supporting" color="secondary">
          Chưa rõ
        </Text>
      ),
  },
];

export function AdminStudents() {
  const users = useUsers();
  const mounted = useHasMounted();
  const [query, setQuery] = useState('');

  // The user list is localStorage-only; the server snapshot is always empty.
  if (!mounted) return null;

  const q = query.trim().toLowerCase();
  const rows: StudentRow[] = users
    .map((user, index) => ({
      rowId: `${user.email}-${index}`,
      name: user.name,
      phone: user.phone,
      email: user.email,
      joinedAt: user.joinedAt,
    }))
    .filter((row) =>
      q === ''
        ? true
        : [row.name, row.email, row.phone].join(' ').toLowerCase().includes(q),
    );

  return (
    <VStack gap={PAGE_GAP}>
      <VStack gap={1}>
        <Heading level={1}>Học viên</Heading>
        <Text type="supporting" color="secondary">
          {`${users.length} học viên đã đăng ký tài khoản.`}
        </Text>
      </VStack>

      {users.length === 0 ? (
        // Correct and intentional: the list stays empty until someone signs up.
        // Nothing is seeded here.
        <EmptyState
          icon={<Users aria-hidden />}
          title="Chưa có học viên"
          description="Danh sách sẽ hiển thị ngay khi có người đăng ký tài khoản trên trang."
        />
      ) : (
        <VStack gap={3}>
          <HStack gap={2}>
            <StackItem size="fill">
              <TextInput
                label="Tìm học viên"
                isLabelHidden
                value={query}
                onChange={setQuery}
                startIcon={<Search aria-hidden />}
                placeholder="Tìm theo tên, email hoặc số điện thoại"
                hasClear
              />
            </StackItem>
          </HStack>

          {rows.length === 0 ? (
            <EmptyState
              icon={<SearchX aria-hidden />}
              title="Không tìm thấy học viên"
              description={`Không có học viên nào khớp với "${query}".`}
            />
          ) : (
            <Table
              data={rows}
              columns={columns}
              idKey="rowId"
              hasHover
              density="compact"
            />
          )}
        </VStack>
      )}
    </VStack>
  );
}
