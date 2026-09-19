# Implementation Roadmap

Status: **Active roadmap**

## Rule of execution

Do not jump from idea to code.

Each phase should leave a durable artifact in this repository so the project can resume cleanly across conversations, contributors, or tools.

---

## Phase 0 — Foundation

Goal: lock what the website is and what it must accomplish.

Deliverables:
- [x] Product vision
- [x] Audience model
- [x] Commercial philosophy
- [x] Design philosophy
- [x] Information architecture
- [x] Technical architecture candidate
- [x] Initial implementation roadmap
- [ ] Final Phase 0 review / freeze marker

Exit criteria:
- no major ambiguity about audience, primary journeys, conversion model, or site scope

---

## Phase 1 — Content and UX specification

Goal: define what each page actually says and shows before polishing visuals.

Deliverables:
- [ ] homepage content hierarchy
- [ ] exact initial featured projects
- [ ] service/collaboration taxonomy
- [ ] inquiry form schema and copy
- [ ] media-kit content schema
- [ ] about-page narrative structure
- [ ] navigation and footer content
- [ ] initial metrics inventory with `asOf` dates
- [ ] legal/privacy requirements inventory

Exit criteria:
- every V1 page has a content outline and data requirements

---

## Phase 2 — Visual exploration

Goal: choose a distinctive production direction before coding UI.

Deliverables:
- [ ] Direction A
- [ ] Direction B
- [ ] Direction C
- [ ] desktop homepage key frame for each
- [ ] mobile key frame for each
- [ ] typography direction
- [ ] color/material treatment
- [ ] image/media treatment
- [ ] motion language notes
- [ ] selected direction decision record

The three directions must be compositionally different, not palette swaps.

Exit criteria:
- one direction is explicitly selected

---

## Phase 3 — Design system

Goal: turn the selected direction into reusable production rules.

Deliverables:
- [ ] color tokens
- [ ] typography scale
- [ ] spacing system
- [ ] layout/grid rules
- [ ] breakpoints
- [ ] buttons/links
- [ ] navigation
- [ ] media/project cards
- [ ] metric/proof modules
- [ ] form controls
- [ ] dialogs/menu/sheets if needed
- [ ] motion tokens/patterns
- [ ] focus/accessibility states

Exit criteria:
- enough reusable design language exists to build every V1 page consistently

---

## Phase 4 — Production screen design

Goal: resolve page-level design before implementation.

Deliverables:
- [ ] Home — desktop/mobile
- [ ] Work index — desktop/mobile
- [ ] Project detail — desktop/mobile
- [ ] Services — desktop/mobile
- [ ] About — desktop/mobile
- [ ] Media Kit — desktop/mobile
- [ ] Contact — desktop/mobile
- [ ] legal page template
- [ ] empty/error/success states

Exit criteria:
- no major layout decisions remain for implementation

---

## Phase 5 — Engineering scaffold

Goal: create the production-grade codebase without styling drift.

Deliverables:
- [ ] Next.js App Router scaffold
- [ ] TypeScript strict configuration
- [ ] Tailwind/design token setup
- [ ] lint/format standards
- [ ] test setup
- [ ] GitHub Actions CI
- [ ] Vercel project/preview pipeline
- [ ] typed content schemas
- [ ] metadata/SEO foundation
- [ ] environment variable conventions

Exit criteria:
- clean production build and green CI

---

## Phase 6 — Core implementation

Suggested implementation order:

1. global layout / typography / navigation
2. homepage
3. work index
4. project detail system
5. services
6. about
7. media kit
8. contact
9. legal pages
10. responsive polish
11. motion pass

Rules:
- mobile is verified continuously, not at the end
- animation follows content/layout stability
- use real representative content before final polish

Exit criteria:
- full V1 route set works responsively

---

## Phase 7 — Commercial engine

Deliverables:
- [ ] inquiry validation
- [ ] email delivery
- [ ] anti-spam/rate limiting
- [ ] success/error UX
- [ ] business inbox/domain configuration
- [ ] media-kit download if included at launch
- [ ] analytics events for commercial funnel

Exit criteria:
- a real qualified inquiry can travel end-to-end safely

---

## Phase 8 — Quality and launch readiness

Deliverables:
- [ ] responsive QA
- [ ] browser QA
- [ ] keyboard/accessibility pass
- [ ] reduced-motion QA
- [ ] image/media optimization
- [ ] Lighthouse/Core Web Vitals review
- [ ] metadata/share-card QA
- [ ] sitemap/robots QA
- [ ] 404/error routes
- [ ] analytics verification
- [ ] contact deliverability test
- [ ] production content review

Exit criteria:
- no known launch-blocking defects

---

## Phase 9 — Launch

Deliverables:
- [ ] production domain
- [ ] HTTPS/DNS verification
- [ ] production deploy
- [ ] search indexing setup
- [ ] Instagram bio link
- [ ] YouTube links/About integration where supported
- [ ] final smoke test

---

## Phase 10 — Post-launch learning

Observe real behavior before adding features.

Useful questions:
- Where do social visitors go?
- Are visitors opening selected work?
- Are brands finding the Media Kit?
- Is the inquiry form being started/completed?
- Which case studies drive business interest?
- Is any animation/media hurting mobile performance?

Possible later additions must be driven by evidence:
- CMS
- lead database/dashboard
- newsletter
- project categories beyond cinema
- resources
- product pages
- memberships/community
- richer case studies

Do not add these simply because the architecture permits them.