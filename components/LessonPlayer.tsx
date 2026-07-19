'use client';

import {useState} from 'react';
import {useRouter} from 'next/navigation';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';
import {StackItem} from '@astryxdesign/core/Stack';
import {Card} from '@astryxdesign/core/Card';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Button} from '@astryxdesign/core/Button';
import {Badge} from '@astryxdesign/core/Badge';
import {List, ListItem} from '@astryxdesign/core/List';
import {TabList, Tab} from '@astryxdesign/core/TabList';
import {AspectRatio} from '@astryxdesign/core/AspectRatio';
import {EmptyState} from '@astryxdesign/core/EmptyState';
import {ProgressBar} from '@astryxdesign/core/ProgressBar';
import {Divider} from '@astryxdesign/core/Divider';
import {Lock, PlayCircle, ArrowLeft, VideoOff} from 'lucide-react';

import type {Course} from '@/lib/types';
import {resolveVideo} from '@/lib/youtube';
import {usePurchases, useCourses, useHasMounted} from '@/lib/stores';
import {ASIDE_WIDTH} from '@/lib/layout';

export function LessonPlayer({
  course: seeded,
  lessonId,
}: {
  course: Course;
  lessonId: string;
}) {
  const router = useRouter();
  const {owns} = usePurchases();
  const {courses} = useCourses();
  const mounted = useHasMounted();
  const [tab, setTab] = useState('description');

  // Lessons only ever exist in the store — no seed course has a curriculum —
  // so the player MUST read the live copy, not the statically-rendered seed.
  const course = (mounted && courses.find((c) => c.id === seeded.id)) || seeded;

  const purchased = mounted && owns(course.id);
  const sections = course.curriculum ?? [];
  const flat = sections.flatMap((s) => s.lessons);
  const index = flat.findIndex((l) => l.id === lessonId);
  const lesson = index >= 0 ? flat[index] : undefined;
  const next = index >= 0 ? flat[index + 1] : undefined;

  if (!lesson) {
    return (
      <EmptyState
        icon={<VideoOff aria-hidden />}
        title="Không tìm thấy bài học"
        description="Bài học này không tồn tại hoặc đã bị gỡ."
        actions={
          <Button
            label="Quay lại khóa học"
            variant="primary"
            onClick={() => router.push(`/khoa-hoc/${course.slug}`)}
          />
        }
      />
    );
  }

  // Preview lessons are open to everyone; the rest need a purchase. Same rule
  // as the legacy player, but the gate is derived from purchases rather than
  // from a localStorage flag smuggled across pages.
  const unlocked = purchased || lesson.isPreview;
  const video = resolveVideo(lesson.videoUrl);

  return (
    <VStack gap={4} padding={4}>
      <HStack gap={2} vAlign="center">
        <Button
          label="Quay lại"
          variant="ghost"
          icon={<ArrowLeft aria-hidden />}
          onClick={() => router.push(`/khoa-hoc/${course.slug}`)}
        />
        <Text type="supporting" color="secondary">
          {course.title}
        </Text>
      </HStack>

      <HStack gap={4} vAlign="start" wrap="wrap">
        <StackItem size="fill" style={{flexBasis: 0, minWidth: 320}}>
          <VStack gap={3}>
            {!unlocked ? (
              <EmptyState
                icon={<Lock aria-hidden />}
                title="Bài học đã bị khóa"
                description="Mua khóa học để mở toàn bộ bài giảng."
                actions={
                  <Button
                    label="Mua khóa học"
                    variant="primary"
                    onClick={() => router.push(`/khoa-hoc/${course.slug}`)}
                  />
                }
              />
            ) : video.kind === 'youtube' ? (
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src={video.embedUrl}
                  title={lesson.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 0,
                    borderRadius: 'var(--radius-container)',
                  }}
                />
              </AspectRatio>
            ) : video.kind === 'file' ? (
              <AspectRatio ratio={16 / 9}>
                {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                <video
                  src={video.src}
                  controls
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 'var(--radius-container)',
                  }}
                />
              </AspectRatio>
            ) : (
              <EmptyState
                icon={<VideoOff aria-hidden />}
                title="Chưa có video"
                description="Bài học này chưa được gắn video."
              />
            )}

            <Heading level={1}>{lesson.title}</Heading>

            <TabList value={tab} onChange={setTab} hasDivider>
              <Tab value="description" label="Mô tả bài học" />
              <Tab value="resources" label="Tài liệu đính kèm" />
            </TabList>

            {tab === 'description' ? (
              <Text>{lesson.description ?? 'Bài học chưa có mô tả.'}</Text>
            ) : (
              <Text color="secondary">Chưa có tài liệu đính kèm.</Text>
            )}

            {next ? (
              <HStack hAlign="end">
                <Button
                  label="Bài tiếp theo"
                  variant="primary"
                  onClick={() => router.push(`/hoc/${course.slug}/${next.id}`)}
                />
              </HStack>
            ) : null}
          </VStack>
        </StackItem>

        {/* Sticky: the 33-lesson list outlives the viewport, so it pins and
            scrolls internally while the video column scrolls the page. */}
        <Card
          padding={0}
          width={ASIDE_WIDTH}
          style={{
            position: 'sticky',
            top: 'var(--spacing-3)',
            alignSelf: 'flex-start',
            maxHeight: 'calc(100dvh - var(--spacing-6))',
            overflowY: 'auto',
          }}
        >
          <VStack gap={0}>
            <VStack gap={2} padding={4}>
              <Heading level={3}>Nội dung khóa học</Heading>
              <Text type="supporting" color="secondary">
                {flat.length} bài học
              </Text>
              <ProgressBar
                label="Tiến độ"
                value={index + 1}
                max={flat.length}
              />
            </VStack>
            <Divider />
            {sections.map((s) => (
              <VStack key={s.id} gap={0}>
                <VStack padding={3}>
                  <Text type="label">{s.title}</Text>
                </VStack>
                <List hasDividers>
                  {s.lessons.map((l) => {
                    const open = purchased || l.isPreview;
                    return (
                      <ListItem
                        key={l.id}
                        label={l.title}
                        description={l.duration}
                        isSelected={l.id === lessonId}
                        startContent={
                          open ? (
                            <PlayCircle size={16} aria-hidden />
                          ) : (
                            <Lock size={16} aria-hidden />
                          )
                        }
                        endContent={
                          l.isPreview && !purchased ? (
                            <Badge label="Học thử" variant="success" />
                          ) : undefined
                        }
                        onClick={
                          open
                            ? () => router.push(`/hoc/${course.slug}/${l.id}`)
                            : undefined
                        }
                      />
                    );
                  })}
                </List>
              </VStack>
            ))}
          </VStack>
        </Card>
      </HStack>
    </VStack>
  );
}
