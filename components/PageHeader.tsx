import { VStack } from "@astryxdesign/core/VStack";
import { Heading } from "@astryxdesign/core/Heading";
import { Text } from "@astryxdesign/core/Text";
import { Badge } from "@astryxdesign/core/Badge";
import { Breadcrumbs, BreadcrumbItem } from "@astryxdesign/core/Breadcrumbs";

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
    <VStack gap={3}>
      <Breadcrumbs label="Đường dẫn">
        <BreadcrumbItem href="/">Trang chủ</BreadcrumbItem>
        <BreadcrumbItem isCurrent>{current}</BreadcrumbItem>
      </Breadcrumbs>
      {eyebrow ? <Badge label={eyebrow} variant="teal" /> : null}
      <Heading level={1} textWrap="balance">
        {title}
      </Heading>
      {subcopy ? <Text color="secondary">{subcopy}</Text> : null}
    </VStack>
  );
}
