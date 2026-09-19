# Information Architecture

Status: **Foundation candidate**

## 1. V1 sitemap

```text
/
├── /work
│   └── /work/[slug]
├── /services
├── /about
├── /media-kit
├── /contact
├── /privacy
└── /terms
```

Future-compatible routes:

```text
/projects/[slug]
/stories/[slug]
/products/[slug]
/games/[slug]
/films/[slug]
```

These future sections should not appear in navigation until real content exists.

## 2. Homepage job

The homepage must answer, in sequence:

1. **Who is this?**
2. **What does he make?**
3. **Is the work worth my attention?**
4. **What should I explore first?**
5. **Can I work with him?**
6. **How do I contact him?**

## 3. Homepage content architecture

### 01 — Hero
Purpose: identity + immediate positioning.

Content candidates:
- NAVIN / FrameByNavin identity
- concise positioning line
- creator / film analyst / visual storyteller descriptor
- `Explore Work`
- `Work With Me`
- restrained supporting media

### 02 — Proof strip / credibility moment
Purpose: establish real-world traction without brag-wall behavior.

Potential content:
- selected 1M+ Instagram reel milestone
- selected YouTube performance milestone
- current community/subscriber metric
- `as of` date where appropriate

### 03 — Selected Work
Purpose: make the work itself the primary evidence.

Use 3–6 deliberately selected projects, not an endless feed.

Each item can expose:
- title
- format/category
- platform
- outcome/metric when meaningful
- strong visual
- case-study/detail route

### 04 — FrameByNavin
Purpose: explain the flagship cinema identity and content philosophy.

Potential elements:
- concise manifesto
- recent/selected analysis
- YouTube and Instagram destinations
- content pillars

### 05 — Collaboration / Services
Purpose: commercial discovery.

Show a compact set of collaboration types and route serious visitors to the service page or inquiry flow.

### 06 — About / philosophy teaser
Purpose: human identity without a long autobiography.

### 07 — Media Kit CTA
Purpose: give agencies/brands a fast professional route.

### 08 — Contact / footer
Purpose: conversion + social destinations + legal links.

## 4. Work index

`/work`

This is curated work, not a chronological social feed.

Initial filter taxonomy can include:
- Film Analysis
- Cinematic Moments
- Short-form
- Collaborations
- Experiments

Avoid filters until there are enough projects to justify them.

## 5. Project / case-study page

`/work/[slug]`

Recommended structure:

1. Project title / hero media
2. Context
3. What was created
4. Creative approach
5. Selected frames / clips
6. Outcome / performance
7. What made it work / learning (when useful)
8. Relevant platform link
9. Related work
10. Collaboration CTA

Case studies should be concise when the project does not warrant a deep breakdown.

## 6. Services page

`/services`

Sections:

- collaboration positioning
- service/campaign formats
- who the work is suitable for
- selected relevant proof
- commercial/editorial distinction
- process: brief → fit → scope → delivery
- FAQ
- `Start a Project` CTA

No public guaranteed outcomes.

## 7. About page

`/about`

Avoid biography filler.

Structure:

- strong visual/portrait
- short identity statement
- creative philosophy
- why FrameByNavin exists
- how Navin approaches cinema/content
- selected timeline/milestones only if meaningful
- `Beyond the Frame` future-interest section
- social/contact CTA

## 8. Media Kit page

`/media-kit`

Designed for fast scanning by professional visitors.

Structure:

- creator positioning
- platform metrics + `asOf`
- content categories
- selected top work
- audience data when available/reliable
- collaboration formats
- case studies / past partners when applicable
- contact CTA
- future PDF download

## 9. Contact / inquiry flow

`/contact`

Two modes may coexist:

### General
Minimal message/contact route.

### Collaboration
Structured lead form with:
- name
- company/project
- work email
- collaboration type
- platforms
- deliverables
- budget range
- timeline
- brief
- optional link

After success, show clear confirmation and expected next step without promising an exact reply time.

## 10. Primary journeys

### Viewer journey
Instagram/YouTube → Home → Selected Work → Project → social platform / more work

### Brand journey
Instagram/search/referral → Home → proof → Services → Media Kit → Inquiry

### Film team journey
Shared link/search → relevant work → Services → film/entertainment collaboration → Inquiry

### Collaborator journey
Home/About → broader creative interests → Work → Contact

## 11. Navigation

Desktop candidate:

```text
FrameByNavin     Work   Services   About   Media Kit     [Work With Me]
```

Mobile:
- brand/home
- menu trigger
- focused full-screen or sheet navigation
- CTA remains obvious

## 12. Content hierarchy rule

At every major page, prioritize in this order:

**Work → proof → explanation → CTA**

Do not lead with long self-description before visitors see what Navin creates.