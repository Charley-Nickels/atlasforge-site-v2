# Media Wireframe (Lo-Fi)

## Overview
- Page Role: Media pillar with articles, episodes, and audio
- Layout Type: Hero + pillar cards + article/episode grid + audio list
- Cross-Brand Connections: Atlas-V safety note; AtlasForge tool links

### Layout Flow (ASCII)
```
[Hero]
    ↓
[Media Pillar Cards]
    ↓
[Article / Episode Grid]
    ↓
[Audio List]
    ↓
[Atlas-V Safety / Credits]
    ↓
[Footer]
```

## Section Blueprint (Desktop)
--------------------------------
HERO
[Component: Hero.Primary + CTA.Primary]
Content Length: Medium; editorial intro
Breakpoints: Full width; stack on mobile
Notes: Include badge chips for categories.
--------------------------------
MEDIA PILLAR CARDS
[Component: Media.PillarCards]
Content Length: Medium; 3–4 cards
Breakpoints: 3-col → 2-col → 1-col
Notes: CTA.Ghost per card optional.
--------------------------------
ARTICLE / EPISODE GRID
[Component: Media.ArticleCards]
Content Length: Long; 6–9 cards
Breakpoints: 3-col → 2-col → 1-col
Notes: Include duration/date metadata.
--------------------------------
AUDIO LIST
[Component: AudioList]
Content Length: Medium; 5–7 items
Breakpoints: Full width stacked items
Notes: Keep consistent spacing.
--------------------------------
ATLAS-V SAFETY / CREDITS
[Component: AV.SafetyBlock]
Content Length: Short
Breakpoints: Single column
Notes: Positioned above footer.
--------------------------------
FOOTER
[Component: Footer.Base + Footer.Clusters]
Content Length: Medium
Breakpoints: Standard responsive stack
Notes: Neutral styling.
--------------------------------

## Responsive Notes
- Tablet: Grids to two columns; pillar cards remain balanced.
- Mobile: Full stack; ensure article cards have clear hierarchy; CTA buttons stack.

## Figma Notes
- Keep cards linked to global variants; allow swapping between article and episode versions.
- Maintain consistent gutter/spacing per token set.
