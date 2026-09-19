export type YoutubeMediaItem = {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  publishedAt: string;
};

const DEFAULT_HANDLE = "framebynavin";

function decodeXml(value: string) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function extract(tag: string, source: string) {
  const match = source.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return match?.[1]?.trim() ?? "";
}

async function resolveChannelId() {
  const configured = process.env.YOUTUBE_CHANNEL_ID?.trim();
  if (configured?.startsWith("UC")) return configured;

  const handle = (process.env.YOUTUBE_HANDLE || DEFAULT_HANDLE).replace(/^@/, "");

  try {
    const response = await fetch(`https://www.youtube.com/@${encodeURIComponent(handle)}`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; FrameByNavinWebsite/1.0; +https://framebynavin-web.vercel.app)",
      },
      next: { revalidate: 60 * 60 * 24 },
    });

    if (!response.ok) return null;
    const html = await response.text();

    const patterns = [
      /"channelId":"(UC[^"]+)"/,
      /"externalId":"(UC[^"]+)"/,
      /itemprop="channelId" content="(UC[^"]+)"/,
    ];

    for (const pattern of patterns) {
      const match = html.match(pattern);
      if (match?.[1]) return match[1];
    }
  } catch {
    return null;
  }

  return null;
}

function parseFeed(xml: string, limit: number): YoutubeMediaItem[] {
  const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].slice(0, limit);

  return entries
    .map(([, entry]) => {
      const id = extract("yt:videoId", entry);
      const title = decodeXml(extract("title", entry));
      const publishedAt = extract("published", entry);

      if (!id || !title) return null;

      return {
        id,
        title,
        url: `https://www.youtube.com/watch?v=${id}`,
        thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
        publishedAt,
      } satisfies YoutubeMediaItem;
    })
    .filter((item): item is YoutubeMediaItem => Boolean(item));
}

export async function getLatestYoutubeVideos(limit = 6): Promise<YoutubeMediaItem[]> {
  const channelId = await resolveChannelId();
  if (!channelId) return [];

  try {
    const response = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${encodeURIComponent(channelId)}`,
      {
        headers: {
          "User-Agent": "FrameByNavinWebsite/1.0",
        },
        next: { revalidate: 60 * 30 },
      },
    );

    if (!response.ok) return [];
    const xml = await response.text();
    return parseFeed(xml, limit);
  } catch {
    return [];
  }
}
