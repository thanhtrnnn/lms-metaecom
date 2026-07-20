'use client';

import Image from 'next/image';
import {Carousel} from '@astryxdesign/core/Carousel';
import {Center} from '@astryxdesign/core/Center';

import {partners} from '@/data/content';

type PartnerLogo = {src: string; alt: string};

/**
 * The production "70+ doanh nghiệp hàng đầu đã hợp tác" partner grid, as a
 * scroll-snap carousel of black-and-white logos. The logos are mixed
 * white-background JPEGs and transparent PNGs, so each sits on a white chip
 * (consistent in light and dark) and is desaturated via .partner-chip; the
 * chip lets colored/JPEG logos read as one quiet monochrome band. User-paced,
 * no autoplay — astryx Carousel adds hover arrows and edge fades.
 */
export function PartnerCarousel() {
  const logos = (partners?.logos ?? []) as PartnerLogo[];
  if (!logos.length) return null;

  return (
    <Carousel aria-label="Doanh nghiệp đối tác" gap={3} hasSnap>
      {logos.map((l) => (
        <Center
          key={l.src}
          width={160}
          height={96}
          className="partner-chip"
          style={{flexShrink: 0}}
        >
          <Image
            src={l.src}
            alt={l.alt}
            width={128}
            height={64}
            sizes="128px"
            style={{
              width: 'auto',
              height: 'auto',
              maxWidth: '100%',
              maxHeight: 64,
              objectFit: 'contain',
            }}
          />
        </Center>
      ))}
    </Carousel>
  );
}
