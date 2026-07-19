import NextLink from 'next/link';
import Image from 'next/image';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';
import {Grid} from '@astryxdesign/core/Grid';
import {Text} from '@astryxdesign/core/Text';
import {Heading} from '@astryxdesign/core/Heading';
import {Link} from '@astryxdesign/core/Link';
import {Divider} from '@astryxdesign/core/Divider';
import {Section} from '@astryxdesign/core/Section';
import {MapPin, Phone, Mail} from 'lucide-react';

import {footerColumns, site} from '@/data/site';
import {newsletter, socials} from '@/data/content';
import {NewsletterForm} from '@/components/NewsletterForm';
import {CARD_GAP, LOGO_HEIGHT} from '@/lib/layout';

/** Production social links (synced from meu.edu.vn's footer). The zalo entry
 * ships wrapped in a TikTok bio-link redirect; we link the actual target. */
const SOCIAL_LABEL: Record<string, string> = {
  facebook: 'Facebook',
  tiktok: 'TikTok',
  zalo: 'Zalo',
};
function socialHref(platform: string, href: string): string {
  if (platform === 'zalo') {
    const m = href.match(/target=([^&]+)/);
    if (m) return decodeURIComponent(m[1]);
  }
  return href;
}

export function SiteFooter() {
  return (
    <Section padding={8} variant="muted" dividers={['top']}>
      <VStack gap={6}>
        <Grid columns={{minWidth: 200}} gap={CARD_GAP}>
          <VStack gap={2}>
            <NextLink href="/" aria-label={`${site.name} — Trang chủ`}>
              <Image
                src={site.logo}
                alt={site.name}
                width={132}
                height={32}
                className="site-logo"
                style={{height: LOGO_HEIGHT, width: 'auto'}}
              />
            </NextLink>
            <Text type="supporting" color="secondary">
              {site.tagline}
            </Text>
            <HStack gap={2} wrap="wrap">
              {socials.map((s) => (
                <Link
                  key={s.platform}
                  href={socialHref(s.platform, s.href)}
                  target="_blank"
                >
                  {SOCIAL_LABEL[s.platform] ?? s.platform}
                </Link>
              ))}
            </HStack>
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
                <Link href={`tel:${site.contact.phone.replace(/\s/g, '')}`}>
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

        <HStack gap={4} wrap="wrap" vAlign="center" hAlign="between">
          <VStack gap={1} maxWidth={420}>
            <Heading level={3}>{newsletter.heading}</Heading>
            <Text type="supporting" color="secondary">
              {newsletter.subcopy}
            </Text>
          </VStack>
          <NewsletterForm />
        </HStack>

        <Divider />

        <Text type="supporting" color="secondary">
          © {new Date().getFullYear()} {site.name}. Bảo lưu mọi quyền.
        </Text>
      </VStack>
    </Section>
  );
}
