/**
 * Resolve a lesson's videoUrl to something embeddable.
 * Ported from the legacy learning.html resolver: accepts youtu.be, watch?v=,
 * /embed/ and /shorts/ forms; anything else is treated as a direct video file.
 */
export type ResolvedVideo =
  | {kind: 'youtube'; embedUrl: string}
  | {kind: 'file'; src: string}
  | {kind: 'none'};

const YOUTUBE_ID =
  /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([A-Za-z0-9_-]{11})/;

export function resolveVideo(videoUrl?: string): ResolvedVideo {
  if (!videoUrl) return {kind: 'none'};

  const match = videoUrl.match(YOUTUBE_ID);
  if (match) {
    // nocookie host, matching the legacy behaviour.
    return {
      kind: 'youtube',
      embedUrl: `https://www.youtube-nocookie.com/embed/${match[1]}?rel=0`,
    };
  }

  return {kind: 'file', src: videoUrl};
}
