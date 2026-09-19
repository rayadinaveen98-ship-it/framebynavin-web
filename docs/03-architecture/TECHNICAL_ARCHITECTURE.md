# Technical Architecture

Status: **Foundation candidate — versions are pinned during scaffold**

## 1. Architecture goals

The implementation should optimize for:

- premium visual quality
- excellent mobile performance
- strong SEO and social sharing
- maintainability by a small team
- low/no infrastructure cost at current scale
- simple content updates
- easy preview deployments
- future extensibility without premature backend complexity

## 2. Frontend stack

### Framework
**Next.js — App Router**

Why:
- React-based production framework
- server-first rendering options
- strong metadata/SEO support
- image/font optimization
- route-level composition
- straightforward Vercel deployment

### Language
**TypeScript** with strict settings.

### Styling
**Tailwind CSS** for layout/design tokens/utilities, supplemented by CSS variables and focused component CSS where it improves clarity.

Avoid giant unstructured utility strings for complex reusable components; extract purposeful components and variants.

### Animation
**Motion for React** only where CSS is insufficient.

Principle:
- simple hover/color/opacity transitions → CSS
- coordinated presence/layout/gesture/scroll behavior → Motion

Animation is progressive enhancement, not a dependency for understanding the site.

## 3. Rendering strategy

Default to static/server-rendered content.

Client Components are introduced only for interactions that require browser state or rich motion.

Goal: avoid turning the whole website into a client-side app.

Likely static/server-oriented routes:
- home content
- work index
- project pages
- services
- about
- media kit
- legal pages

Client islands:
- navigation menu state
- selected motion interactions
- media preview behavior
- contact form state
- optional filters once justified

## 4. Content model

V1 content should live in typed local data/MDX rather than a CMS.

Suggested structure:

```text
src/content/
├── profile.ts
├── metrics.ts
├── socials.ts
├── services.ts
├── projects/
│   ├── index.ts
│   └── *.mdx
└── media-kit.ts
```

Benefits:
- zero CMS cost
- content versioned with code
- deterministic builds
- easy schema validation
- migration path remains open

Introduce a CMS only if publishing/update frequency creates real operational pain.

## 5. Project content schema

Conceptual model:

```ts
Project {
  slug
  title
  shortTitle?
  description
  category
  platform
  publishedAt?
  featured
  heroMedia
  gallery[]
  externalUrl?
  metrics[]
  roles[]
  tags[]
  caseStudy?
}
```

Metric model must include context:

```ts
Metric {
  label
  value
  asOf?
  sourceNote?
}
```

Never hard-code performance numbers inside visual components.

## 6. Inquiry architecture

V1:

```text
Contact Form
   ↓
Server-side validation
   ↓
Spam protection / rate limiting
   ↓
Transactional email provider
   ↓
Business inbox
```

Requirements:
- validate and sanitize server-side
- no secret API keys in browser code
- accessible field-level errors
- clear success/failure state
- anti-spam protection before public launch
- do not promise an exact response time unless operationally guaranteed

A database is not required for V1.

Phase 2 option:

```text
Inquiry
  ↓
Database
  ↓
Lead status / notes
  ↓
Notifications
```

Supabase is a reasonable future option if persistent lead management or an admin surface becomes useful.

## 7. Email

Use a transactional email service rather than running mail infrastructure.

The specific provider and limits are verified again at implementation time because service pricing/quotas can change.

Domain email should ultimately support professional addresses such as collaboration/business inboxes.

## 8. Deployment

Target:

**GitHub → Vercel**

Workflow:
- `main` = production
- pull requests = preview deployments
- production deploy only after checks pass

Custom domain is attached after the first production-quality build is verified.

## 9. CI / quality gates

GitHub Actions should run at minimum:

- install with lockfile
- lint
- TypeScript check
- unit/component tests where meaningful
- production build

Add automated browser/E2E checks for critical journeys before launch:

- homepage renders
- navigation works
- project route works
- contact validation works
- successful submission path can be tested safely
- mobile navigation works

## 10. SEO

Required from V1:

- canonical metadata
- title/description system
- Open Graph/Twitter-compatible share images
- robots configuration
- sitemap
- structured data where appropriate
- semantic heading hierarchy
- descriptive alt text
- clean project URLs

Potential structured data:
- Person
- WebSite
- CreativeWork / VideoObject where accurate and useful

Avoid schema markup that claims unsupported ratings, reviews, employment, or organization relationships.

## 11. Analytics

Keep analytics lightweight and privacy-conscious.

Track product questions, not vanity events.

Initial useful events:
- hero work CTA
- work item opened
- external YouTube/Instagram click
- services viewed
- media kit opened/downloaded
- inquiry started
- inquiry submitted

Do not record sensitive form content in analytics.

## 12. Performance budgets

Targets are validated on representative mobile hardware/network conditions.

Principles:
- optimize hero media aggressively
- responsive images
- poster images before optional video playback
- lazy load below-the-fold media
- subset/self-host fonts where licensing permits
- minimize client JavaScript
- avoid large third-party script bundles
- no background video requirement on mobile

Core Web Vitals should be treated as a product requirement, not launch cleanup.

## 13. Accessibility baseline

- semantic HTML
- keyboard usable navigation and forms
- visible focus
- sufficient contrast
- reduced-motion support
- no hover-only information
- labels/help/error text connected correctly
- media captions/transcripts when required

## 14. Security / privacy

- secrets only in server environment variables
- validate all external input
- rate-limit public form endpoints
- minimize collected personal data
- do not expose raw analytics/user data publicly
- privacy policy reflects actual tooling/data collection

## 15. Suggested source structure

```text
src/
├── app/
│   ├── (marketing)/
│   ├── work/
│   │   └── [slug]/
│   ├── api/                 # only if required
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/
│   ├── layout/
│   ├── sections/
│   └── media/
├── content/
├── features/
│   └── inquiry/
├── lib/
├── styles/
└── types/
```

Final structure follows actual needs; folders should not be created empty just to match this diagram.

## 16. Architecture constraint

Do not add a dependency because it is fashionable. Every library must justify itself by removing real complexity or enabling a locked product requirement.