# OIA Wireframe (Lo-Fi)

## Overview
- Page Role: Flagship world intro with species and gallery
- Layout Type: Hero + narrative panels + gallery
- Cross-Brand Connections: Atlas-V governance tag; AtlasForge tooling references

### Layout Flow (ASCII)
```
[Hero]
    ↓
[Species Intro Panels]
    ↓
[Story / Lore Callout]
    ↓
[Screenshot Gallery]
    ↓
[Atlas-V Safety Tag]
    ↓
[Footer]
```

## Section Blueprint (Desktop)
--------------------------------
HERO
[Component: OIA.HeroBlock + CTA.Primary]
Content Length: Medium; narrative intro
Breakpoints: Full width; stack copy/CTA on mobile
Notes: Keep aquatic tone cues.
--------------------------------
SPECIES INTRO PANELS
[Component: OIA.SpeciesPanels]
Content Length: Medium; 3–4 panels
Breakpoints: 3-col → 2-col → 1-col
Notes: Each panel includes badge chip for type.
--------------------------------
STORY / LORE CALLOUT
[Component: SectionHeader + PlaceholderBlock]
Content Length: Long; paragraph stack
Breakpoints: Single column
Notes: Light density.
--------------------------------
SCREENSHOT GALLERY SYSTEM
[Component: ScreenshotGallery]
Content Length: Medium; 6 images
Breakpoints: 3-wide → 2-wide → 1-wide scroll
Notes: Add captions below thumbnails.
--------------------------------
ATLAS-V SAFETY TAG
[Component: AV.SafetyBlock]
Content Length: Short
Breakpoints: Single column
Notes: Position near footer for governance reminder.
--------------------------------
FOOTER
[Component: Footer.Base + Footer.Clusters]
Content Length: Medium
Breakpoints: Standard responsive stack
Notes: Neutral styling.
--------------------------------

## Responsive Notes
- Tablet: Panels drop to two columns; gallery tiles resize with consistent gutters.
- Mobile: Stack all sections; maintain caption readability; CTA block centered.

## Figma Notes
- Use consistent padding tokens; align panels to grid.
- Keep aquatic tone via brand palette tokens (document-only, no visuals here).
