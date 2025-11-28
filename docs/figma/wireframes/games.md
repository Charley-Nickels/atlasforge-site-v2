# Games Label Wireframe (Lo-Fi)

## Overview
- Page Role: Showcase games catalog and concept vault
- Layout Type: Hero + grids + gallery
- Cross-Brand Connections: Atlas-V powering gameplay safety; AtlasStudio preview for mod tools

### Layout Flow (ASCII)
```
[Hero]
    ↓
[Game Catalog Grid]
    ↓
[Concept Vault Tiles]
    ↓
[Screenshot Gallery]
    ↓
[AtlasStudio Mod Preview]
    ↓
[Footer]
```

## Section Blueprint (Desktop)
--------------------------------
HERO
[Component: Hero.Primary + CTA.Primary]
Content Length: Medium; playful intro
Breakpoints: Full width; stack on mobile
Notes: Include badge chips for genres.
--------------------------------
GAME CATALOG GRID
[Component: GameCatalogGrid]
Content Length: Long; 6–9 tiles
Breakpoints: 3-col → 2-col → 1-col
Notes: Card hover interactions noted for prototypes.
--------------------------------
CONCEPT VAULT TILES
[Component: ConceptVault.Cards]
Content Length: Medium; 4–6 entries
Breakpoints: 3-col → 2-col → 1-col
Notes: Include status chips.
--------------------------------
SCREENSHOT GALLERY
[Component: ScreenshotGallery]
Content Length: Medium; 6 thumbs
Breakpoints: 3-wide → 2-wide → 1-wide scroll
Notes: Consider carousel option later.
--------------------------------
ATLASSTUDIO MOD PREVIEW
[Component: AS.TabsStrip (subset) + AS.GhostConsole]
Content Length: Short; teaser view
Breakpoints: Stack tabs and console on mobile
Notes: Cross-link to studio page.
--------------------------------
FOOTER
[Component: Footer.Base + Footer.Clusters]
Content Length: Medium
Breakpoints: Standard responsive stack
Notes: Neutral styling.
--------------------------------

## Responsive Notes
- Tablet: Grids reduce to two columns; gallery becomes two-wide mosaic.
- Mobile: All sections stack; tabs scroll horizontally; ensure card tap targets are generous.

## Figma Notes
- Keep card templates linked to global component instances.
- Maintain consistent gutter spacing with global spacing tokens.
