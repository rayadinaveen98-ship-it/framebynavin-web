function resolveSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  if (configured) return configured.replace(/\/$/, "");

  const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
  if (vercelUrl) return `https://${vercelUrl}`.replace(/\/$/, "");

  return "http://localhost:3000";
}

export const siteConfig = {
  name: "FrameByNavin",
  title: "FrameByNavin — Cinema, Stories, Ideas",
  description:
    "FrameByNavin is Navin's creator studio for cinema analysis, visual storytelling, original ideas, digital products, games and selected collaborations.",
  shortDescription:
    "Cinema analysis, visual storytelling and a growing creator system for stories, products and games.",
  url: resolveSiteUrl(),
  locale: "en_IN",
  creator: "Navin",
  keywords: [
    "FrameByNavin",
    "cinema analysis",
    "film analysis",
    "visual storytelling",
    "cinematography",
    "scene breakdown",
    "Indian cinema",
    "Telugu cinema",
    "creator studio",
  ],
} as const;
