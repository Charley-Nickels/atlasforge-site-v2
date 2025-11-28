# Labs Wireframe (Lo-Fi)

## Overview
- Page Role: Experimental concepts and experiments grid
- Layout Type: Hero + experiment cards + category grids
- Cross-Brand Connections: Atlas-V safety cues; AtlasForge/Labs co-branding

### Layout Flow (ASCII)
```
[Hero]
    ↓
[Experiment Cards]
    ↓
[Labs Category Grid]
    ↓
[Crossover Tools]
    ↓
[Footer]
```

## Section Blueprint (Desktop)
--------------------------------
HERO
[Component: Hero.Primary + CTA.Primary/Ghost]
Content Length: Medium; experimental intro
Breakpoints: Full width; stack on mobile
Notes: Include badge chip for "Labs".
--------------------------------
EXPERIMENT CARDS
[Component: Labs.ExperimentCards]
Content Length: Long; 6–9 cards
Breakpoints: 3-col → 2-col → 1-col
Notes: Each card can show status chip.
--------------------------------
LABS CATEGORY GRID
[Component: Labs.CategoryGrid]
Content Length: Medium; 4–6 tiles
Breakpoints: 3-col → 2-col → 1-col
Notes: Provide CTA.Ghost under grid for submissions.
--------------------------------
CROSSOVER TOOLS
[Component: Cards.Product/Tool]
Content Length: Short; 3 cards
Breakpoints: 3-col → 2-col → 1-col
Notes: Reference AtlasForge tools.
--------------------------------
FOOTER
[Component: Footer.Base + Footer.Clusters]
Content Length: Medium
Breakpoints: Standard responsive stack
Notes: Neutral styling.
--------------------------------

## Responsive Notes
- Tablet: Grids reduce to two columns; spacing remains airy.
- Mobile: Full stack; chips stay aligned left; CTA groups vertical.

## Figma Notes
- Keep experiment cards as variants with badges; maintain shadow/radius tokens from global set.
- Category grid should reuse card component with category variant.
