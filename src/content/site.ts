export const metrics = [
  { value: "1M+", label: "Selected Reel Views", asOf: "Sep 2026" },
  { value: "2K+", label: "Instagram Community", asOf: "Sep 2026" },
  { value: "1K+", label: "YouTube Community", asOf: "Sep 2026" },
] as const;

export const projects = [
  {
    index: "01",
    status: "ACTIVE",
    title: "Cinema",
    name: "FrameByNavin",
    description: "Scene breakdowns, cinematic moments and deeper film analysis published under FrameByNavin.",
    action: "EXPLORE WORK",
  },
  {
    index: "02",
    status: "NOT PUBLISHED YET",
    title: "Stories",
    name: "Stories",
    description: "A future lane for original narrative work. No public project is being claimed here yet.",
    action: "VIEW DIRECTION",
  },
  {
    index: "03",
    status: "IN DEVELOPMENT",
    title: "Apps",
    name: "Apps",
    description: "Digital products are actively being developed; public project details will appear only when ready to share.",
    action: "VIEW DIRECTION",
  },
  {
    index: "04",
    status: "IN DEVELOPMENT",
    title: "Games",
    name: "Games",
    description: "Story-driven game prototypes are in development; public details will appear only when ready to share.",
    action: "VIEW DIRECTION",
  },
] as const;

export const selectedWork = [
  {
    index: "01",
    type: "YOUTUBE / CINEMA",
    title: "Every Cinematic Moment — They Call Him OG",
    metric: "130K+ views",
    asOf: "Sep 2026",
  },
  {
    index: "02",
    type: "INSTAGRAM / SHORT FORM",
    title: "Selected Reel",
    metric: "1M+ views",
    asOf: "Sep 2026",
  },
] as const;

export const services = [
  ["01", "Brand Collaborations", "Creator-led campaigns designed to fit naturally into the audience and content."],
  ["02", "Film & Entertainment Promotions", "Campaign support for films, trailers, music and entertainment releases."],
  ["03", "Short-Form Content", "Instagram and YouTube-first creative built for attention without losing craft."],
  ["04", "Creative Partnerships", "Longer-term work with brands and teams that want more than a one-off post."],
] as const;

export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/framebynavin/" },
  { label: "YouTube", href: "https://www.youtube.com/@framebynavin" },
] as const;
