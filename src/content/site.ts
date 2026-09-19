export const metrics = [
  { value: "1M+", label: "Selected Reel Views" },
  { value: "2K+", label: "Instagram Community" },
  { value: "1K+", label: "YouTube Community" },
] as const;

export const projects = [
  {
    index: "01",
    status: "ACTIVE",
    title: "Cinema",
    name: "FrameByNavin",
    description: "Scene breakdowns, cinematic moments and deeper film analysis.",
    action: "OPEN CHANNEL",
  },
  {
    index: "02",
    status: "DEVELOPING",
    title: "Stories",
    name: "Original Worlds",
    description: "Narrative experiments, short stories and ideas built around character and emotion.",
    action: "SEE PROJECTS",
  },
  {
    index: "03",
    status: "BUILDING",
    title: "Apps",
    name: "Digital Products",
    description: "Purposeful products and creator tools built with strong identity and useful systems.",
    action: "VIEW BUILDS",
  },
  {
    index: "04",
    status: "DEVELOPING",
    title: "Games",
    name: "Interactive Worlds",
    description: "Story-driven prototypes where atmosphere, choices and player connection matter.",
    action: "ENTER WORLD",
  },
] as const;

export const selectedWork = [
  {
    index: "01",
    type: "YOUTUBE / CINEMA",
    title: "Every Cinematic Moment — They Call Him OG",
    metric: "130K+ views",
  },
  {
    index: "02",
    type: "INSTAGRAM / SHORT FORM",
    title: "Selected Reel",
    metric: "1M+ views",
  },
  {
    index: "03",
    type: "SERIES / ANALYSIS",
    title: "Why This Scene Works",
    metric: "Ongoing series",
  },
] as const;

export const services = [
  ["01", "Brand Collaborations", "Creator-led campaigns designed to fit naturally into the audience and content."],
  ["02", "Film & Entertainment Promotions", "Campaign support for films, trailers, music and entertainment releases."],
  ["03", "Short-Form Content", "Instagram and YouTube-first creative built for attention without losing craft."],
  ["04", "Creative Partnerships", "Longer-term work with brands and teams that want more than a one-off post."],
] as const;
