# Run F3 Report — Component → Template Mapping

## Summary of HTML Annotations
- Added non-visual component comments across global navigation, heroes, section wrappers, and footers on all public and admin HTML files.
- Tagged brand-specific structures (e.g., AF stack diagram, AV workflow diagram, AS playground shell, Games concept vault, OIA species panels, SKB track cards, Media pillar cards, Labs experiment grids, Merch teasers) directly in their template sections.
- Ensured AtlasStudio Playground (standalone page) includes explicit annotations for the shell, tab strip, and ghost console without altering visuals.

## Components Mapped
- Global: Nav (top + mobile toggle), Hero primary, Section wrappers and headers, CTA buttons, Product/Tool cards, Game cards, Media cards, Labs cards, Audio/SKB cards, Concept Vault tiles, Feature/Flow lists, Stack diagram blocks, Concept vault grids, Badges/Chips/Pills, Screenshot galleries, Audio/timeline lists, Placeholder skeleton blocks.
- Brand: AF Hero Umbrella & Stack Diagram (index), AV Hero/Workflow Diagram/Safety block (atlasv), AS Hero/Playground Shell/Tabs Strip/Ghost Console (atlasstudio + playground), Games Flagship Hero & Concept Vault Grid (games), OIA Hero/Species panels/Screenshot gallery (oia), SKB Track Cards & Playlist Lists (skb), Media Pillar + Article/Episode cards (media), Labs Experiment Cards + Category Grid (labs), Merch Teaser Cards (index).

## Inconsistencies / Notes
- Section comments cluster multiple components (wrapper + brand-specific) in some sections; final Figma component nesting should confirm hierarchy.
- Placeholder skeleton blocks appear across brands with varied copy; swapping to consistent placeholder tokens will be a Phase 6 task.

## F3 — New Decisions Surfaced
- **P6-F3-001:** Standardize component comment taxonomy for SectionWrapper vs SectionHeader when both occur in the same section.
- **P6-F3-002:** Confirm CTA variant mapping (Primary/Ghost/Secondary/Footer) for decision bars vs hero actions to avoid duplicate button styles.
- **P6-F3-003:** Define whether timeline-style lists (e.g., SKB soundtrack steps) live under AudioLists or a dedicated Timeline component in Figma.
- **P6-F3-004:** Decide if Placeholder skeletons should be brand-tinted or remain neutral across all merch/media/gallery cards.

## Visual Integrity Check
- No CSS, token, or structural changes were made; only HTML comments and documentation were added.
