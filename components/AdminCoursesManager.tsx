'use client';

import {useState} from 'react';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Badge} from '@astryxdesign/core/Badge';
import {Button} from '@astryxdesign/core/Button';
import {IconButton} from '@astryxdesign/core/IconButton';
import {EmptyState} from '@astryxdesign/core/EmptyState';
import {AlertDialog} from '@astryxdesign/core/AlertDialog';
import {Table, proportional, pixel} from '@astryxdesign/core/Table';
import type {TableColumn} from '@astryxdesign/core/Table';
import {useToast} from '@astryxdesign/core/Toast';
import {BookOpen, Pencil, Plus, Trash2} from 'lucide-react';

import {AdminCourseDialog} from '@/components/AdminCourseDialog';
import {formatVnd} from '@/lib/format';
import {useCourses, useHasMounted} from '@/lib/stores';
import type {Course} from '@/lib/types';
import {PAGE_GAP} from '@/lib/layout';

interface CourseRow extends Record<string, unknown> {
  id: string;
  title: string;
  category: string;
  price: number;
  status: Course['status'];
  purchases: number;
  lessonCount: number;
  course: Course;
}

export function AdminCoursesManager() {
  const {courses, setCourses} = useCourses();
  const showToast = useToast();
  const mounted = useHasMounted();

  const [isDialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<Course | null>(null);
  const [pendingDelete, setPendingDelete] = useState<Course | null>(null);

  // adminCourses lives in localStorage; the server renders the seed.
  if (!mounted) return null;

  const openCreate = () => {
    setEditing(null);
    setDialogOpen(true);
  };

  const openEdit = (course: Course) => {
    setEditing(course);
    setDialogOpen(true);
  };

  const save = (next: Course) => {
    setCourses((prev) =>
      prev.some((c) => c.id === next.id)
        ? prev.map((c) => (c.id === next.id ? next : c))
        : [next, ...prev],
    );
  };

  const confirmDelete = () => {
    if (!pendingDelete) return;
    const {id, title} = pendingDelete;
    setCourses((prev) => prev.filter((c) => c.id !== id));
    setPendingDelete(null);
    showToast({body: `Đã xóa "${title}".`});
  };

  const rows: CourseRow[] = courses.map((course) => ({
    id: course.id,
    title: course.title,
    category: course.category,
    price: course.price,
    status: course.status,
    purchases: course.purchases,
    lessonCount: (course.curriculum ?? []).reduce(
      (sum, section) => sum + section.lessons.length,
      0,
    ),
    course,
  }));

  const columns: TableColumn<CourseRow>[] = [
    {key: 'title', header: 'Khóa học', width: proportional(3)},
    {key: 'category', header: 'Danh mục', width: proportional(1)},
    {
      key: 'price',
      header: 'Giá',
      width: pixel(130),
      align: 'end',
      renderCell: (item) => formatVnd(item.price),
    },
    {
      key: 'status',
      header: 'Trạng thái',
      width: pixel(120),
      renderCell: (item) => (
        <Badge
          label={item.status === 'active' ? 'Đang bán' : 'Bản nháp'}
          variant={item.status === 'active' ? 'success' : 'neutral'}
        />
      ),
    },
    {
      key: 'lessonCount',
      header: 'Bài học',
      width: pixel(100),
      align: 'end',
      renderCell: (item) =>
        item.lessonCount === 0 ? (
          <Text type="supporting" color="secondary">
            Chưa có
          </Text>
        ) : (
          String(item.lessonCount)
        ),
    },
    {key: 'purchases', header: 'Lượt mua', width: pixel(110), align: 'end'},
    {
      key: 'actions',
      header: '',
      width: pixel(104),
      align: 'end',
      renderCell: (item) => (
        <HStack gap={1} hAlign="end">
          <IconButton
            icon={<Pencil aria-hidden />}
            label={`Sửa ${item.title}`}
            variant="ghost"
            size="sm"
            onClick={() => openEdit(item.course)}
          />
          <IconButton
            icon={<Trash2 aria-hidden />}
            label={`Xóa ${item.title}`}
            variant="ghost"
            size="sm"
            onClick={() => setPendingDelete(item.course)}
          />
        </HStack>
      ),
    },
  ];

  return (
    <VStack gap={PAGE_GAP}>
      <HStack gap={3} hAlign="between" vAlign="center" wrap="wrap">
        <VStack gap={1}>
          <Heading level={1}>Khóa học</Heading>
          <Text type="supporting" color="secondary">
            {`${courses.length} khóa học. Chương trình học được soạn trong phần sửa khóa học.`}
          </Text>
        </VStack>
        <Button
          label="Thêm khóa học"
          variant="primary"
          icon={<Plus aria-hidden />}
          onClick={openCreate}
        />
      </HStack>

      {rows.length === 0 ? (
        <EmptyState
          icon={<BookOpen aria-hidden />}
          title="Chưa có khóa học"
          description="Thêm khóa học đầu tiên để bắt đầu bán hàng."
          actions={
            <Button
              label="Thêm khóa học"
              variant="secondary"
              icon={<Plus aria-hidden />}
              onClick={openCreate}
            />
          }
        />
      ) : (
        <Table
          data={rows}
          columns={columns}
          idKey="id"
          hasHover
          density="compact"
        />
      )}

      <AdminCourseDialog
        isOpen={isDialogOpen}
        course={editing}
        onOpenChange={setDialogOpen}
        onSave={save}
      />

      <AlertDialog
        isOpen={pendingDelete !== null}
        onOpenChange={(open) => {
          if (!open) setPendingDelete(null);
        }}
        title="Xóa khóa học?"
        description={
          pendingDelete
            ? `"${pendingDelete.title}" sẽ bị xóa vĩnh viễn cùng toàn bộ chương trình học. Không thể hoàn tác.`
            : ''
        }
        actionLabel="Xóa khóa học"
        cancelLabel="Hủy"
        onAction={confirmDelete}
      />
    </VStack>
  );
}
