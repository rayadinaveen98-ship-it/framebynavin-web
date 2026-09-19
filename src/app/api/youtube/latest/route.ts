import { NextResponse } from "next/server";
import { getLatestYoutubeVideos } from "@/lib/youtube";

export const dynamic = "force-dynamic";

export async function GET() {
  const items = await getLatestYoutubeVideos(6);

  return NextResponse.json(
    { items },
    {
      headers: {
        "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=86400",
      },
    },
  );
}
