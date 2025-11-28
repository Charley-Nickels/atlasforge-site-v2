# Home / Hub Wireframe (Lo-Fi)

## Overview
- Page Role: Hub-first gateway for AtlasForge ecosystem
- Layout Type: Hero + stacked sections with card grids
- Cross-Brand Connections: Atlas-V safety cue, AtlasStudio playground teaser, Games/Media/Labs feeds

### Layout Flow (ASCII)
```
[Hero: AF.HeroUmbrella]
    ↓
[Ecosystem Intro + Stack Diagram]
    ↓
[Tools Cards]
    ↓
[Games Feed]
    ↓
[Media Feed + Audio List]
    ↓
[Labs Teaser]
    ↓
[Governance Blurb]
    ↓
[Footer]
```

## Section Blueprint (Desktop)
--------------------------------
HERO
[Component: AF.HeroUmbrella + CTA.Primary/Ghost]
Content Length: Medium headline, short subcopy, dual CTAs
Breakpoints: Full-bleed; stack text/buttons on tablet/mobile
Notes: Hero background stays neutral; optional Atlas-V badge tag.
--------------------------------
WHAT WE MAKE / ECOSYSTEM INTRO
[Component: SectionHeader + AF.StackDiagram]
Content Length: Medium; bullets for pillars
Breakpoints: Two-column on desktop → single column stack on mobile
Notes: Align diagram next to intro copy.
--------------------------------
TOOLS / ATLASFORGE PRODUCTS
[Component: Cards.Product/Tool]
Content Length: Medium; 3–6 cards
Breakpoints: 3-col grid → 2-col tablet → 1-col mobile
Notes: CTA footer row with Primary + Ghost.
--------------------------------
GAMES FEED
[Component: Cards.Game + ScreenshotGallery]
Content Length: Medium; 3–4 tiles
Breakpoints: 3-col grid → 2-col → 1-col stack
Notes: Include "Powered by Atlas-V" microcopy.
--------------------------------
MEDIA FEED
[Component: Cards.Media + AudioList]
Content Length: Medium; 3 cards + optional audio list
Breakpoints: 3-col → 2-col → 1-col
Notes: Keep audio list stacked under cards on mobile.
--------------------------------
LABS TEASER
[Component: Cards.Labs]
Content Length: Short; 2–3 experimental previews
Breakpoints: 3-col → 2-col → 1-col
Notes: Highlight experimental tone.
--------------------------------
GOVERNANCE / SAFETY BLURB
[Component: AV.SafetyBlock]
Content Length: Short
Breakpoints: Single column across breakpoints
Notes: Atlas-V framing, light density.
--------------------------------
FOOTER
[Component: Footer.Base + Footer.Clusters]
Content Length: Medium; nav clusters + social
Breakpoints: 4-col desktop → 2-col tablet → accordion-stack mobile
Notes: Maintain brand-neutral styling.
--------------------------------

## Responsive Notes
- Tablet: Nav collapses to drawer; grids shift to two columns; hero stacks text above CTAs.
- Mobile: All sections stack; CTA groups vertical; galleries become single-column scroll; ensure comfortable touch spacing.

## Figma Notes
- Use 12-column desktop frame, 8-column tablet, 4-column mobile as guidance.
- Spacing cadence follows global spacing tokens from F1; no new values.
- Mark Atlas-V badges and cross-brand tags as detachable components.
