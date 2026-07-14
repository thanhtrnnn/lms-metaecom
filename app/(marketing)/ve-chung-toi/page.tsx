import Image from 'next/image';
import type {Metadata} from 'next';
import {Section} from '@astryxdesign/core/Section';
import {VStack} from '@astryxdesign/core/VStack';
import {Grid} from '@astryxdesign/core/Grid';
import {Card} from '@astryxdesign/core/Card';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Avatar} from '@astryxdesign/core/Avatar';
import {AspectRatio} from '@astryxdesign/core/AspectRatio';
import {PageHeader} from '@/components/PageHeader';
import {about, img} from '@/data/content';

export const metadata: Metadata = {title: 'Về chúng tôi'};

type Value = {title: string; desc?: string | null; image?: string | null};
type Member = {
  name: string;
  role?: string | null;
  photo?: string | null;
  photoFallback?: string | null;
};

export default function Page() {
  const vm = about.visionMission;
  const values = (about.coreValues?.cards ?? []) as Value[];
  const members = (about.team?.members ?? []) as Member[];

  return (
    <Section padding={6}>
      <VStack gap={8}>
        <PageHeader
          eyebrow={about.hero?.tag}
          title={about.hero?.headingPlain ?? 'Về chúng tôi'}
          subcopy={about.hero?.description}
          current="Về chúng tôi"
        />

        <Grid columns={{minWidth: 300}} gap={4}>
          {[vm?.vision, vm?.mission].filter(Boolean).map((b) => (
            <Card key={b!.title} padding={5}>
              <VStack gap={2}>
                <Heading level={2}>{b!.title}</Heading>
                <Text color="secondary">{b!.desc}</Text>
              </VStack>
            </Card>
          ))}
        </Grid>

        <VStack gap={4}>
          <VStack gap={2}>
            <Heading level={2}>{about.coreValues?.heading}</Heading>
            <Text color="secondary">{about.coreValues?.subcopy}</Text>
          </VStack>
          <Grid columns={{minWidth: 260}} gap={4}>
            {values.map((v) => {
              const src = img(v.image);
              return (
                <Card key={v.title} padding={0}>
                  <VStack gap={0}>
                    {src ? (
                      <AspectRatio ratio={16 / 9}>
                        <Image
                          src={src}
                          alt=""
                          fill
                          sizes="(max-width: 768px) 100vw, 300px"
                          style={{objectFit: 'cover'}}
                        />
                      </AspectRatio>
                    ) : null}
                    <VStack gap={2} padding={4}>
                      <Heading level={3}>{v.title}</Heading>
                      {v.desc ? (
                        <Text type="supporting" color="secondary">
                          {v.desc}
                        </Text>
                      ) : null}
                    </VStack>
                  </VStack>
                </Card>
              );
            })}
          </Grid>
        </VStack>

        <VStack gap={4}>
          <VStack gap={2}>
            <Heading level={2}>{about.team?.heading}</Heading>
            <Text color="secondary">{about.team?.subcopy}</Text>
          </VStack>
          <Grid columns={{minWidth: 220}} gap={4}>
            {members.map((m) => (
              <Card key={m.name} padding={4}>
                <VStack gap={2} hAlign="center">
                  <Avatar
                    name={m.name}
                    src={img(m.photo, m.photoFallback) ?? undefined}
                    size="large"
                  />
                  <Heading level={3} justify="center">
                    {m.name}
                  </Heading>
                  {m.role ? (
                    <Text type="supporting" color="secondary" justify="center">
                      {m.role}
                    </Text>
                  ) : null}
                </VStack>
              </Card>
            ))}
          </Grid>
        </VStack>
      </VStack>
    </Section>
  );
}
