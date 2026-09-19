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

The `/contact` form is fully implemented but activates delivery only when the server has a secure webhook configured.

Required launch configuration is documented in `.env.example`:

- `NEXT_PUBLIC_SITE_URL` — final canonical domain
- `CONTACT_WEBHOOK_URL` — private endpoint that receives validated project briefs
- `CONTACT_WEBHOOK_TOKEN` — optional Bearer token for that endpoint

Without `CONTACT_WEBHOOK_URL`, the public form remains visibly in staging and cannot silently lose submissions.

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

**V1 implementation is production-buildable and the repository is linked to Vercel.**

Implemented: responsive multi-route UI, desktop/mobile navigation, media kit, structured contact intake, SEO metadata and structured data, social sharing assets, search metadata endpoints, security headers, branded 404, and automated visual QA.

Vercel project `framebynavin-web` is connected through Git integration. The initial production import deployed the current `main` foundation commit; this branch is the complete V1 candidate and should receive a preview deployment before merge.

Remaining launch inputs: final production domain, confirmed social profile URLs/content assets, and the private contact-delivery destination. Production promotion should happen only after the V1 preview is verified.
