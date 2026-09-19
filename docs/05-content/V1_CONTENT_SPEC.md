# V1 Content Specification

Status: **Working specification**

Last content baseline: **2026-09-19**

This file defines the initial content needed to design and build V1. Performance numbers are snapshots, not permanent copy.

## 1. Brand naming

Primary site identity:

**FrameByNavin**

Creator identity:

**Navin**

The site may visually lead with `NAVIN` in selected layouts, but FrameByNavin remains the strongest current public brand and primary cinema/content identity.

## 2. Positioning territory

The homepage positioning should communicate a combination of:

- cinema
- visual storytelling
- analysis
- creator work
- future creative direction

Candidate territory, not final copy:

**Cinema. Stories. Ideas.**

Supporting descriptor territory:

**Creator · Film Analyst · Visual Storyteller**

Final copy is selected during visual/content design and should remain concise.

## 3. Current proof inventory

Snapshot only; validate/update before launch.

```yaml
asOf: 2026-09-19
instagram:
  followers: ~2000
  selectedReelViews: 1000000+
youtube:
  subscribers: 1000+
  monetization: active/in progress after eligibility
selectedWork:
  theyCallHimOGCinematicMomentsViews: 130000+
```

Presentation rules:

- Never imply every Reel reaches 1M.
- Prefer copy such as `Selected Reel — 1M+ views`.
- Avoid showing monetization status as public social proof; it is operational context, not a visitor metric.
- Use `asOf` metadata for platform totals.
- Round public metrics intentionally rather than showing fake real-time precision.

## 4. Homepage V1 content blocks

### Hero
Needs:
- identity
- one-line positioning
- primary CTA: `Explore Work`
- commercial CTA: `Work With Me`
- hero visual/media selection

### Proof
Initial candidates:
- `1M+` — Selected Instagram Reel Views
- `130K+` — Selected YouTube Video Views
- `1K+` — YouTube Community

Do not overload with follower count if it weakens the composition; proof selection is editorial.

### Selected Work
Initial required project slots:

1. **Every Cinematic Moment from They Call Him OG**
   - platform: YouTube
   - category: Cinematic Moments
   - known milestone: 130K+ views at current baseline
   - strong proof candidate

2. **One flagship deep-dive / film-analysis project**
   - choose based on quality of final analysis, imagery, and presentation rather than only views

3. **One short-form project**
   - use a Reel/Short that represents the desired future brand, not only the highest raw metric

4. Optional fourth item:
   - creator experiment / distinctive visual format

The 1M music-clip Reel can appear as a metric/proof point, but should not automatically be the site's creative centerpiece if it does not represent the work Navin wants to sell long-term.

## 5. FrameByNavin section

Must explain the channel in a compact way.

Content themes:
- cinema beyond surface-level review
- scenes, craft, visual choices, storytelling
- cinematic moments
- shot/framing/editing/lighting observations
- multilingual Indian cinema coverage

Needs:
- YouTube destination
- Instagram destination
- selected representative visuals

## 6. Services content

Initial service configuration:

```yaml
- id: instagram-collaboration
  label: Instagram Collaborations
- id: youtube-integration
  label: YouTube Integrations
- id: short-form
  label: Short-form Content
- id: entertainment-promotion
  label: Film & Entertainment Promotions
- id: brand-partnership
  label: Brand Partnerships
- id: custom
  label: Custom Creative Projects
```

Each service should explain:
- what it is
- typical output formats
- suitable campaign/project types
- inquiry CTA

Do not promise guaranteed reach, positive editorial coverage, or fixed turnaround before scope review.

## 7. Commercial/editorial disclosure

The services experience must make the distinction understandable:

- paid promotional content can be commissioned
- independent reviews/analysis are not positive opinions for sale
- sponsored/paid work should be disclosed appropriately on the publishing platform

Copy should be clear and calm, not legalistic or defensive.

## 8. About content requirements

Gather/select:
- strong creator portrait or editorial image
- concise personal introduction
- why FrameByNavin exists
- how Navin watches/analyzes cinema
- current creator journey
- future interests: filmmaking, stories, products/apps, games

Avoid:
- long childhood-origin story unless genuinely relevant
- inflated titles
- generic statements such as `passionate content creator` without evidence

## 9. Media Kit data requirements

Before launch gather/update:

- Instagram follower count
- Instagram recent reach/views from Insights if available
- YouTube subscriber count
- YouTube recent views/watch data useful to brands
- top-performing relevant content
- audience geography
- age/gender breakdown only if reliable and worth publishing
- content categories
- available collaboration formats
- business contact

Do not publish private dashboard screenshots unless intentionally designed/redacted.

## 10. Inquiry form content

Required:

```yaml
name: required
organizationOrProject: required
email: required
collaborationType: required
platforms: optional
requestedDeliverables: optional
timeline: optional
budgetRange: optional
brief: required
referenceUrl: optional
```

Budget options are configuration and may change as commercial demand grows.

## 11. Footer content

Required:
- compact FrameByNavin identity
- Instagram
- YouTube
- business/contact route
- privacy
- terms
- copyright year generated dynamically

Potential future:
- X
- LinkedIn
- additional project brands

Only expose accounts that are intentionally part of the professional identity.

## 12. Assets needed before final production design

- current FrameByNavin logo files
- transparent logo/mark variants
- creator portrait(s)
- 6–12 high-quality stills/thumbnails from representative work
- optional short silent preview loops for selected projects
- original links for selected work
- final social URLs
- domain choice once purchased

## 13. Content update rule

All changing values must be stored as content/data, never embedded in component markup.

When platform growth changes:

```text
Update content data → build → preview → production
```

No visual redesign should be required.