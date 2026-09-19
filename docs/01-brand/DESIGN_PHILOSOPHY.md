# Design Philosophy

Status: **Foundation candidate — visual directions will be explored before UI implementation**

## 1. Desired feeling

The website should feel like a premium independent creative studio/editorial experience built around cinema and storytelling.

Target attributes:

- cinematic
- editorial
- confident
- minimal but rich
- modern
- tactile
- intelligent
- personal
- crafted

Avoid:

- generic SaaS aesthetics
- link-in-bio layouts
- influencer template styling
- obvious AI-portfolio visuals
- excessive glassmorphism
- neon cyberpunk by default
- film-reel/clapperboard clichés
- constant red/black "cinema" treatment
- motion overload

## 2. Core visual principle

**Cinema should be felt through framing and rhythm, not represented through props.**

The visual language should borrow from filmmaking concepts:

- framing
- negative space
- pacing
- cuts/transitions
- hierarchy
- focus
- light/dark contrast
- editorial sequencing

without literally decorating the interface with film equipment.

## 3. Composition

Use a strong editorial grid with moments of controlled asymmetry.

Principles:

- large intentional margins
- strong vertical rhythm
- oversized display typography where appropriate
- cinematic image crops
- occasional full-bleed media
- sections that alternate density rather than repeating identical card grids
- visible breathing room around important work

## 4. Color system direction

Initial direction only; exact values are chosen after visual exploration.

### Foundation
- near-black rather than absolute black
- warm off-white rather than sterile white
- restrained neutral greys

### Accent
FrameByNavin recording red should be used sparingly for:

- recording dot / brand motif
- active navigation state
- micro indicators
- selected CTA moments
- hover/progress accents

The accent must not flood the interface.

## 5. Typography direction

Use two roles at most for V1:

1. **Display/editorial face** for identity, major titles, and selected expressive moments.
2. **Highly legible modern sans** for navigation, body copy, metadata, forms, and UI.

Requirements:

- excellent mobile readability
- variable font preferred where appropriate
- strong performance
- clear licensing
- no decorative type for body copy
- typography should create more of the premium feeling than effects do

## 6. Imagery

Real work is the strongest visual asset.

Priority order:

1. Original thumbnails/stills/project imagery
2. Portrait/creator photography
3. Purpose-made brand/editorial graphics
4. Abstract supporting visual treatments

Do not build the identity around generic stock imagery.

## 7. Motion philosophy

Motion should behave like editing: it establishes rhythm and focus.

Allowed patterns:

- restrained section reveals
- cross-fades and masked transitions
- subtle media scale on hover
- project-preview movement
- typography reveals
- navigation transitions
- contextual desktop cursor labels such as `VIEW` or `PLAY`, only if accessibility and performance remain excellent

Avoid:

- every element animating on scroll
- long entrance sequences before content is usable
- forced smooth scrolling that breaks expected browser behavior
- autoplay video with audio
- animations that make mobile feel heavy

Respect `prefers-reduced-motion`.

## 8. Mobile philosophy

Mobile is not a compressed desktop design.

Because social traffic is likely to arrive primarily on phones:

- hero hierarchy must work without relying on hover/video
- tap targets must be generous
- text must stay readable without oversized desktop typography leaking into mobile
- featured work should remain visually strong
- contact conversion must be extremely low friction
- media payload should be adapted for smaller screens/connections

## 9. Navigation philosophy

Navigation should be minimal and persistent enough to orient users without becoming a visual header bar that dominates the work.

Initial information set:

- Work
- Services
- About
- Media Kit
- primary CTA: Work With Me

Mobile uses a deliberate menu experience rather than squeezing desktop links.

## 10. Brand motif opportunities

Explore, do not automatically implement:

- the existing FrameByNavin frame geometry
- recording-dot motif
- crop marks / framing lines used subtly
- chapter or scene numbering
- editorial metadata layouts
- timeline/progress cues inspired by playback without copying player UI

## 11. Accessibility is part of premium design

Minimum expectations:

- WCAG-minded contrast
- semantic document structure
- keyboard navigation
- visible focus states
- reduced-motion handling
- captions/transcripts when hosted video requires them
- form errors announced and understandable
- no interaction that exists only on hover

## 12. Visual exploration requirement

Before production components are built, create **three genuinely distinct visual directions** using the same core content and hierarchy.

They should differ in composition, typography, media treatment, and motion language — not just color palettes.

A direction must be selected and documented before production UI implementation begins.