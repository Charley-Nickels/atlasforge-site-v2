# Admin / Decisions Console Wireframe (Lo-Fi)

## Overview
- Page Role: Internal decisions console reference
- Layout Type: Hero-lite + control bar + decision grid + export block
- Cross-Brand Connections: Atlas-V governance framing; AtlasForge admin utility

### Layout Flow (ASCII)
```
[Header / Hero-Lite]
    ↓
[Control Bar / Filters]
    ↓
[Decision Grid / List]
    ↓
[Export / Admin Actions]
    ↓
[Footer]
```

## Section Blueprint (Desktop)
--------------------------------
HEADER / HERO-LITE
[Component: Hero.SubHero + CTA.Primary/Ghost]
Content Length: Short; console intro
Breakpoints: Full width; stack on mobile
Notes: Keep subdued tone.
--------------------------------
CONTROL BAR / FILTERS
[Component: PlaceholderBlock + BadgeChips]
Content Length: Short; filter chips and buttons
Breakpoints: Two-column layout → stacked filters on mobile
Notes: Emphasize focus order for accessibility.
--------------------------------
DECISION GRID / LIST
[Component: PlaceholderBlock (table) or Lists.Feature]
Content Length: Long; rows of decisions
Breakpoints: Table scrolls horizontally on mobile; consider cards alternative
Notes: Include status chips.
--------------------------------
EXPORT / ADMIN ACTIONS
[Component: CTA.Primary + CTA.Secondary]
Content Length: Short
Breakpoints: Buttons stack on mobile
Notes: Add "Export" emphasis.
--------------------------------
FOOTER
[Component: Footer.Base + Footer.Clusters]
Content Length: Medium
Breakpoints: Standard responsive stack
Notes: Neutral styling.
--------------------------------

## Responsive Notes
- Tablet: Filters above grid with clear spacing; grid may show fewer columns.
- Mobile: Stack filters, grid becomes card list; ensure focusable elements order matches visual order.

## Figma Notes
- Annotate table vs card variant for decision list; maintain token-aligned spacing.
- Keep control bar as detachable component for prototypes.
