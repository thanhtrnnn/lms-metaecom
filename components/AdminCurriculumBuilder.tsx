'use client';

import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';
import {StackItem} from '@astryxdesign/core/Stack';
import {Section} from '@astryxdesign/core/Section';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Badge} from '@astryxdesign/core/Badge';
import {Button} from '@astryxdesign/core/Button';
import {IconButton} from '@astryxdesign/core/IconButton';
import {Collapsible} from '@astryxdesign/core/Collapsible';
import {Field} from '@astryxdesign/core/Field';
import {TextInput} from '@astryxdesign/core/TextInput';
import {TextArea} from '@astryxdesign/core/TextArea';
import {Switch} from '@astryxdesign/core/Switch';
import {EmptyState} from '@astryxdesign/core/EmptyState';
import {ListVideo, Plus, Trash2} from 'lucide-react';

import type {Lesson, Section as CourseSection} from '@/lib/types';

/**
 * NO course in the seed has a curriculum — the legacy accordion read
 * adminCourses[].curriculum, which was never populated, so the player had
 * nothing to play. This builder is the only way lessons ever get authored.
 *
 * State is lifted: the parent dialog owns `sections` and persists them to the
 * course's `curriculum` field on save, so closing the dialog discards edits.
 */
export function AdminCurriculumBuilder({
  sections,
  onChange,
}: {
  sections: CourseSection[];
  onChange: (next: CourseSection[]) => void;
}) {
  const addSection = () => {
    onChange([
      ...sections,
      {
        id: crypto.randomUUID(),
        title: `Chương ${sections.length + 1}`,
        lessons: [],
      },
    ]);
  };

  const removeSection = (sectionId: string) => {
    onChange(sections.filter((s) => s.id !== sectionId));
  };

  const patchSection = (sectionId: string, patch: Partial<CourseSection>) => {
    onChange(sections.map((s) => (s.id === sectionId ? {...s, ...patch} : s)));
  };

  const addLesson = (sectionId: string) => {
    onChange(
      sections.map((s) =>
        s.id === sectionId
          ? {
              ...s,
              lessons: [
                ...s.lessons,
                {
                  id: crypto.randomUUID(),
                  title: `Bài ${s.lessons.length + 1}`,
                  isPreview: false,
                },
              ],
            }
          : s,
      ),
    );
  };

  const removeLesson = (sectionId: string, lessonId: string) => {
    onChange(
      sections.map((s) =>
        s.id === sectionId
          ? {...s, lessons: s.lessons.filter((l) => l.id !== lessonId)}
          : s,
      ),
    );
  };

  const patchLesson = (
    sectionId: string,
    lessonId: string,
    patch: Partial<Lesson>,
  ) => {
    onChange(
      sections.map((s) =>
        s.id === sectionId
          ? {
              ...s,
              lessons: s.lessons.map((l) =>
                l.id === lessonId ? {...l, ...patch} : l,
              ),
            }
          : s,
      ),
    );
  };

  return (
    <VStack gap={3}>
      <HStack gap={2} hAlign="between" vAlign="center">
        <VStack gap={0.5}>
          <Heading level={3}>Chương trình học</Heading>
          <Text type="supporting" color="secondary">
            Học viên chỉ xem được video của những bài đã có trong danh sách này.
          </Text>
        </VStack>
        <Button
          label="Thêm chương"
          variant="secondary"
          icon={<Plus aria-hidden />}
          onClick={addSection}
        />
      </HStack>

      {sections.length === 0 ? (
        <EmptyState
          icon={<ListVideo aria-hidden />}
          title="Chưa có chương nào"
          description="Khóa học chưa có nội dung. Thêm chương đầu tiên để bắt đầu."
          actions={
            <Button
              label="Thêm chương"
              variant="primary"
              icon={<Plus aria-hidden />}
              onClick={addSection}
            />
          }
        />
      ) : (
        <VStack gap={2}>
          {sections.map((section, sectionIndex) => (
            <Section
              key={section.id}
              variant="muted"
              padding={3}
              dividers={['top']}
            >
              <Collapsible
                defaultIsOpen
                trigger={
                  <HStack gap={2} vAlign="center">
                    <Text type="label">
                      {`Chương ${sectionIndex + 1}. ${section.title || 'Chưa đặt tên'}`}
                    </Text>
                    <Badge
                      label={`${section.lessons.length} bài`}
                      variant="neutral"
                    />
                  </HStack>
                }
              >
                <VStack gap={3} padding={2}>
                  <TextInput
                    label="Tên chương (bắt buộc)"
                    value={section.title}
                    onChange={(v) => patchSection(section.id, {title: v})}
                    placeholder="Ví dụ: Khởi động với Livestream"
                  />

                  {section.lessons.map((lesson, lessonIndex) => (
                    <Section key={lesson.id} variant="section" padding={3}>
                      <VStack gap={3}>
                        <HStack gap={2} hAlign="between" vAlign="center">
                          <Text type="label" color="secondary">
                            {`Bài ${lessonIndex + 1}`}
                          </Text>
                          <IconButton
                            icon={<Trash2 aria-hidden />}
                            label={`Xóa bài ${lessonIndex + 1}`}
                            variant="ghost"
                            size="sm"
                            onClick={() => removeLesson(section.id, lesson.id)}
                          />
                        </HStack>

                        <TextInput
                          label="Tiêu đề bài học (bắt buộc)"
                          value={lesson.title}
                          onChange={(v) =>
                            patchLesson(section.id, lesson.id, {title: v})
                          }
                          placeholder="Ví dụ: Cách lên kịch bản livestream"
                        />

                        <HStack gap={3} wrap="wrap">
                          <StackItem size="fill">
                            <TextInput
                              label="Thời lượng"
                              value={lesson.duration ?? ''}
                              onChange={(v) =>
                                patchLesson(section.id, lesson.id, {
                                  duration: v,
                                })
                              }
                              placeholder="12:30"
                            />
                          </StackItem>
                          <StackItem size="fill">
                            <TextInput
                              label="Link video (YouTube)"
                              value={lesson.videoUrl ?? ''}
                              onChange={(v) =>
                                patchLesson(section.id, lesson.id, {
                                  videoUrl: v,
                                })
                              }
                              placeholder="https://www.youtube.com/watch?v=..."
                            />
                          </StackItem>
                        </HStack>

                        <TextArea
                          label="Mô tả bài học"
                          value={lesson.description ?? ''}
                          onChange={(v) =>
                            patchLesson(section.id, lesson.id, {
                              description: v,
                            })
                          }
                          rows={2}
                          placeholder="Học viên sẽ học được gì trong bài này?"
                        />

                        <Switch
                          label="Cho phép học thử miễn phí"
                          description="Bài học xem được mà không cần mua khóa học."
                          value={lesson.isPreview}
                          onChange={(checked) =>
                            patchLesson(section.id, lesson.id, {
                              isPreview: checked,
                            })
                          }
                        />
                      </VStack>
                    </Section>
                  ))}

                  <HStack gap={2} hAlign="between" wrap="wrap">
                    <Button
                      label="Thêm bài học"
                      variant="secondary"
                      icon={<Plus aria-hidden />}
                      onClick={() => addLesson(section.id)}
                    />
                    <Button
                      label="Xóa chương"
                      variant="ghost"
                      icon={<Trash2 aria-hidden />}
                      onClick={() => removeSection(section.id)}
                    />
                  </HStack>
                </VStack>
              </Collapsible>
            </Section>
          ))}
        </VStack>
      )}
    </VStack>
  );
}
