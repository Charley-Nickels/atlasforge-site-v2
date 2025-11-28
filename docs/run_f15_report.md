# Phase 7 — Run F15 Report (Global Card Family Specifications)

## Summary
- Documented five global card families (Product, Feature, Concept Vault, Basic Media, List/Row) with anatomy, variants, states, responsive rules, token usage, interactions, cross-brand notes, and upgrade paths for Figma construction.
- Captured thirteen brand-specific card families across Games, OIA, Media, Labs, SKB, Atlas-V, AtlasStudio, and Admin to standardize patterns and prepare for Phase 7 component builds without altering site visuals.

## Files Created/Updated
- docs/figma/specs/cards_global.md
- docs/figma/specs/cards_brandpacks.md

## Pattern Cohesion & Alignment
- Responsive behavior consistently follows 3→2→1 (or optional 4→2→1 for heavy galleries) with mobile stacks and tablet 2-column patterns.
- Interaction states align with Phase 6 F8–F10 matrices (hover elevation, focus outlines, press insets, selected accents, disabled muting) to ensure Figma variants match existing canon.
- Token mapping references Phase 7 style schemas (colors, typography, spacing, radii, shadows) with brand accents applied as overlays rather than structural changes.

## Cross-Brand Notes
- Governance badge placement and Atlas-V overlays remain consistent across applicable cards (Games, Media, OIA, AtlasStudio scenarios, Admin) without altering core anatomy.
- Brand palettes apply through accents/badges while preserving shared layouts to keep the library cohesive.

## Ambiguities / Decision Hooks
- **P6-F15-001 (Gallery Gestures):** Confirm swipe/drag support for mobile gallery cards (Games/OIA) vs tap-only to finalize interaction variants.
- **P6-F15-002 (Admin Export State):** Decide on intermediate "preparing" state for Admin decision cards’ export actions to lock CTA variants.
- **P6-F15-003 (Labs Experiment Expand Mode):** Choose between flip vs accordion expand as the default interaction for Labs Experiment cards in Figma prototypes.
- **P6-F15-004 (AtlasStudio Scenario Density):** Determine default density (compact vs standard) for drawer task cards to set baseline padding/typography styles.

## Integrity Check
- No HTML, CSS, JS, tokens, or visual assets were modified.
- Work is documentation-only as required.
