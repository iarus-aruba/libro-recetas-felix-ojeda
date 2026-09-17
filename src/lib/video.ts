const YOUTUBE_ID = /^[A-Za-z0-9_-]{11}$/;

export function youtubeIdFromUrl(value: string | undefined): string | null {
  if (!value) return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  if (YOUTUBE_ID.test(trimmed)) return trimmed;

  try {
    const url = new URL(trimmed);
    if (url.hostname === "youtu.be") {
      const id = url.pathname.replace("/", "");
      return YOUTUBE_ID.test(id) ? id : null;
    }
    const v = url.searchParams.get("v");
    if (v && YOUTUBE_ID.test(v)) return v;
    const embed = url.pathname.match(/\/embed\/([A-Za-z0-9_-]{11})/);
    if (embed) return embed[1];
    const shorts = url.pathname.match(/\/shorts\/([A-Za-z0-9_-]{11})/);
    if (shorts) return shorts[1];
  } catch {
    return null;
  }

  return null;
}

export function hasWatchableVideo(video?: {
  youtube?: string;
  file?: string;
}): boolean {
  if (!video) return false;
  if (video.file?.trim()) return true;
  return Boolean(youtubeIdFromUrl(video.youtube));
}
