# FrameByNavin Web — Design System V1

Status: FOUNDATION LOCKED
Date: 2026-09-19

## Color system

### Backgrounds
- Canvas / Primary: #08090A
- Surface / Primary: #0D0F11
- Surface / Raised: #16191B
- Surface / Monitor: #101316

### Text
- Text / Primary: #E8ECEF
- Text / Secondary: #AEB5BA
- Text / Muted: #7D868D
- Text / Dim: #697177

### Borders
- Border / Soft: #24272A
- Border / Default: #2A2E31
- Border / Strong: #363B3F

### Accent
- Frame Red: #FF4438
- Positive / Online: #63D177

Red is a signal color, not a background theme. It should appear in recording indicators, active states, links, CTA emphasis and selected details.

## Typography direction

Primary direction: **Space Grotesk for display/technical headings + Inter for body/UI**.

The implementation should use variable web fonts where possible and define fallbacks. Typography can be refined during production QA, but the role split is locked:

- Display: strong geometric grotesk
- Body/UI: neutral, highly readable sans-serif
- Metadata: uppercase, compact, letter-spaced

## Type scale — desktop target

- Hero display: clamp(4rem, 7vw, 7.5rem)
- H1: 64–88px
- H2: 40–56px
- H3: 26–34px
- Lead: 18–22px
- Body: 16–18px
- UI: 12–14px
- Metadata: 10–12px with tracking

All sizes must become fluid on smaller screens.

## Grid

Desktop content max width: 1440px.

Recommended outer gutters:
- Large desktop: 48–64px
- Desktop: 40–48px
- Tablet: 24–32px
- Mobile: 18–20px

The design should use visible structural grids in selected sections, but the entire site must not become a boxed dashboard.

## Radius

Minimal radii are preferred:
- Technical panels/cards: 0–4px
- Buttons: 0–4px
- Media previews may use 4–8px where visually useful

Avoid rounded SaaS-card styling.

## Borders and shadows

Borders are the main separation mechanism. Shadows should be rare. Use subtle ambient depth only when media needs separation from a dark background.

## Components

### Global nav
- Brand left
- Compact navigation right
- Persistent commercial CTA on larger screens
- Mobile menu collapses cleanly

### Button / Primary
- Red fill
- Near-black text
- Strong weight
- Compact rectangular form

### Button / Secondary
- Transparent background
- Neutral border
- Light text

### Metadata label
- Uppercase
- Letter-spaced
- Muted gray
- 10–12px

### Project card
- Border-led card
- Category index at top
- Strong title
- Short descriptor
- Accent link at bottom
- Optional status: Active / In Development / Coming Soon

### Case-study card
- Media-led
- Platform and project type metadata
- Performance metric where verified
- CTA to full case study or external content

### Stat ticker
- Large metric
- Small uppercase label
- Grid dividers
- Values sourced from content/config rather than hardcoded inside components

### Monitor module
- Featured media viewport
- REC/preview metadata
- May support video preview on desktop
- Must gracefully degrade to still image on reduced-motion/mobile contexts

## Motion system

Motion should reference editing language without becoming theatrical.

### Entry
- 250–500ms section reveals
- opacity + 8–24px translation maximum

### Hover
- Media scale: 1.00 → 1.02/1.03
- Border emphasis or red status indicator
- CTA arrow shift: 2–5px

### Monitor
- Optional subtle scan/reveal
- Featured media transitions via crossfade or hard editorial cut

### Page transition
- Prefer quick fade/clip reveal rather than long cinematic sequences

### Accessibility
- Respect prefers-reduced-motion
- No information may exist only in animation

## Responsive principles

- Mobile is not a compressed desktop control room.
- Remove decorative rails before reducing readable content.
- Four project cards stack or become a 2x2 layout depending on viewport.
- Hero monitor moves below primary copy on narrow screens.
- Proof ticker becomes stacked or horizontally scrollable only if accessibility remains clear.
- Minimum touch target: 44px.

## Media

Use real FrameByNavin thumbnails/stills wherever possible. Do not over-process faces. Media should carry most of the color while the interface remains neutral and dark.

## Accessibility baseline

- WCAG AA text contrast target
- Visible focus states
- Keyboard-accessible navigation/forms
- Semantic headings
- Alt text for meaningful media
- Reduced-motion support
- Forms must expose labels and error messages programmatically
