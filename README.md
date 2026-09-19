# FrameByNavin Web

Official website for Navin / FrameByNavin.

This repository is the source of truth for the product strategy, brand system, UX architecture, technical architecture, implementation plan, and production website.

## Product intent

The website is not a link-in-bio page and not a generic creator portfolio. It is a premium creator/studio presence designed to turn attention from social platforms into trust, exploration, collaboration inquiries, and long-term owned-brand value.

Primary funnel:

**Discover elsewhere → arrive here → understand the work → trust the creator → explore proof → collaborate/contact**

## V1 routes

- `/` — creator-system homepage
- `/work` — selected work and project lanes
- `/services` — collaboration formats and principles
- `/about` — creator philosophy and direction
- `/media-kit` — audience proof and commercial fit
- `/contact` — structured project intake

## Stack

- Next.js App Router
- React
- TypeScript (strict)
- Tailwind/PostCSS foundation + authored CSS modules
- GitHub Actions quality and visual verification
- Vercel deployment with Git integration

## Quality gate

Every push to `main` or `feature/**` runs:

1. deterministic `npm ci`
2. TypeScript typecheck
3. ESLint
4. production `next build`
5. production-server startup
6. route smoke tests
7. robots/sitemap/manifest/Open Graph checks
8. contact-intake API contract check
9. security and branded 404 checks
10. desktop and mobile render capture for the primary routes

## Contact intake

V1 uses a zero-cost email-draft workflow so no paid domain or email provider is required for launch.

- Public contact destination: `rayadinaveen98@gmail.com`
- Visitors can fill the structured `/contact` form and open a prefilled email draft addressed to that inbox.
- A direct `mailto:` fallback is also visible on the contact page.
- The private `/api/contact` webhook contract remains in the codebase for a future server-delivered intake upgrade.

When FrameByNavin later gets a custom domain/business mailbox, the public contact destination can be changed centrally without redesigning the form.

## Domain / canonical URL

A custom domain is intentionally deferred for V1 to keep launch cost at zero. Until then, the Vercel production URL is the public/canonical website address. `NEXT_PUBLIC_SITE_URL` remains available for a future custom domain such as `framebynavin.com`.

## SEO / platform readiness

V1 includes:

- centralized canonical site configuration
- explicit route canonicals
- `WebSite` and creator `Person` structured data
- metadata and social-card support
- generated Open Graph image
- favicon and web app manifest
- `robots.txt`
- `sitemap.xml`
- baseline security headers
- branded 404 route

## Product pillars

1. Cinema analysis and visual storytelling
2. Creator portfolio and selected work
3. Commercial collaborations and entertainment promotions
4. About / creative philosophy
5. Media kit and credibility signals
6. Contact and qualified collaboration inquiries

## Future expansion

The architecture allows future filmmaking, stories, products, apps, games, and other creative projects without forcing a rebrand or rewrite of the core site.

## Documentation

- `docs/00-product/PRODUCT_VISION.md`
- `docs/00-product/AUDIENCE_AND_COMMERCIAL_MODEL.md`
- `docs/01-brand/DESIGN_PHILOSOPHY.md`
- `docs/02-ux/INFORMATION_ARCHITECTURE.md`
- `docs/03-architecture/TECHNICAL_ARCHITECTURE.md`
- `docs/04-roadmap/IMPLEMENTATION_ROADMAP.md`

## Local development

```bash
npm ci
npm run dev
```

Quality checks:

```bash
npm run typecheck
npm run lint
npm run build
```

## Current status — 2026-09-19

**V1 is implemented, linked to Vercel, and production-launch capable with a zero-cost configuration.**

Implemented: responsive multi-route UI, desktop/mobile navigation, media kit, structured project intake, zero-cost Gmail contact flow, SEO metadata and structured data, social sharing assets, search metadata endpoints, security headers, branded 404, Vercel Next.js configuration, and automated visual QA.

Current zero-cost launch configuration:

- Hosting: Vercel
- Repository: GitHub
- Domain: Vercel-provided production URL for now
- Contact: `rayadinaveen98@gmail.com`
- Paid services required: none

A custom domain and dedicated business mailbox are optional future upgrades, not V1 launch blockers.
