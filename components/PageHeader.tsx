import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Badge} from '@astryxdesign/core/Badge';
import {Breadcrumbs, BreadcrumbItem} from '@astryxdesign/core/Breadcrumbs';
import {HEADER_GAP} from '@/lib/layout';

export function PageHeader({
  eyebrow,
  title,
  subcopy,
  current,
}: {
  eyebrow?: string | null;
  title: string;
  subcopy?: string | null;
  current: string;
}) {
  return (
    <VStack gap={HEADER_GAP}>
      <Breadcrumbs label="Đường dẫn">
        <BreadcrumbItem href="/">Trang chủ</BreadcrumbItem>
        <BreadcrumbItem isCurrent>{current}</BreadcrumbItem>
      </Breadcrumbs>
      {eyebrow ? (
        <HStack hAlign="start">
          <Badge label={eyebrow} variant="teal" />
        </HStack>
      ) : null}
      <Heading level={1} textWrap="balance">
        {title}
      </Heading>
      {subcopy ? <Text color="secondary">{subcopy}</Text> : null}
    </VStack>
  );
}
