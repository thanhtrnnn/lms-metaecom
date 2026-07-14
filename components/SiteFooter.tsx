import NextLink from "next/link";
import Image from "next/image";
import { VStack } from "@astryxdesign/core/VStack";
import { HStack } from "@astryxdesign/core/HStack";
import { Grid } from "@astryxdesign/core/Grid";
import { Text } from "@astryxdesign/core/Text";
import { Heading } from "@astryxdesign/core/Heading";
import { Link } from "@astryxdesign/core/Link";
import { Divider } from "@astryxdesign/core/Divider";
import { Section } from "@astryxdesign/core/Section";
import { MapPin, Phone, Mail } from "lucide-react";

import { footerColumns, site } from "@/data/site";

export function SiteFooter() {
  return (
    <Section padding={8} variant="muted" dividers={["top"]}>
      <VStack gap={6}>
        <Grid minChildWidth={200} gap={6}>
          <VStack gap={2}>
            <NextLink href="/" aria-label={`${site.name} — Trang chủ`}>
              <Image
                src={site.logo}
                alt={site.name}
                width={132}
                height={32}
                className="site-logo"
                style={{ height: 32, width: "auto" }}
              />
            </NextLink>
            <Text type="supporting" color="secondary">
              {site.tagline}
            </Text>
          </VStack>

          {footerColumns.map((col) => (
            <VStack key={col.heading} gap={2}>
              <Heading level={3}>{col.heading}</Heading>
              <VStack gap={1}>
                {col.links.map((l) => (
                  <Link key={l.href} href={l.href}>
                    {l.label}
                  </Link>
                ))}
              </VStack>
            </VStack>
          ))}

          <VStack gap={2}>
            <Heading level={3}>Liên hệ</Heading>
            <VStack gap={1}>
              <HStack gap={1} vAlign="start">
                <MapPin size={16} aria-hidden />
                <Text type="supporting">{site.contact.address}</Text>
              </HStack>
              <HStack gap={1} vAlign="center">
                <Phone size={16} aria-hidden />
                <Link href={`tel:${site.contact.phone.replace(/\s/g, "")}`}>
                  {site.contact.phone}
                </Link>
              </HStack>
              <HStack gap={1} vAlign="center">
                <Mail size={16} aria-hidden />
                <Link href={`mailto:${site.contact.email}`}>
                  {site.contact.email}
                </Link>
              </HStack>
            </VStack>
          </VStack>
        </Grid>

        <Divider />

        <Text type="supporting" color="secondary">
          © {new Date().getFullYear()} {site.name}. Bảo lưu mọi quyền.
        </Text>
      </VStack>
    </Section>
  );
}
