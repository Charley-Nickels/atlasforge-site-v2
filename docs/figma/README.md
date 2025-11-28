# AtlasForge Figma Workspace Overview (Phase 7)

Phase 7 is **Figma-first, POC-second**. The Figma environment becomes the primary source of truth for tokens, components, templates, and interactions before any repo-based POC work begins. POCs (AtlasStudio, Atlas-V, Atlas Engine, AtlasForge umbrella) are assembled after the design system is stable.

## What Lives in Figma
- **Foundations**: color/typography/spacing/radius/shadow/breakpoint/surface styles derived from Phase 6 tokens.
- **Core Components**: navigation, footers, heroes, CTA systems, card families, lists/grids, badges, galleries, audio lists, placeholder blocks.
- **Brand Kits**: AtlasForge, Atlas-V, AtlasStudio, Games, OIA, SKB, Media, Labs palettes and component variants.
- **Page Templates**: Home, Atlas-V, AtlasStudio, Games, OIA, SKB, Media, Labs, About, Admin templates built with auto-layout.
- **Interactions**: stateful variants, prototypes for navigation, galleries, audio, governance badges, admin flows, and playground shells.
- **POC Frames**: dedicated files/pages for AtlasStudio playground shell, Atlas-V safety/governance POC, Atlas Engine routing concept, and AtlasForge umbrella UX demos.

## Glossary
- **Foundations**: Token-derived Figma styles (color, type, effects, spacing guidance, breakpoints, surfaces).
- **Components**: Reusable UI parts with variants (state, size, density, brand), tied to token styles.
- **Brands**: Per-brand component skins and palettes aligned to Phase 6 canon.
- **Templates**: Page-level assemblies using components and auto-layout rules for desktop/tablet/mobile.
- **Interactions**: Prototyped behaviors (hover/focus/press/disabled/selected, drawer flows, galleries, console shells).
- **POC Frames**: Visual-only simulations of product behaviors (AtlasStudio, Atlas-V, Atlas Engine, AtlasForge nav) built after the core system is in place.

## Operating Principles
- Figma captures **all visual and interaction intent** before repo visuals change.
- Component and style names mirror the Phase 6 dictionaries to keep continuity.
- Breakpoints follow the documented 3→2→1 or 2→1 degradations; mobile uses nav drawer and stacked CTAs.
- POC builds remain non-functional and derive from approved components/styles.
