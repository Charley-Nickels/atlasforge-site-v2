# Phase 6 — Run F1 Report: Token Extraction & Harmonization

## Overview
This report catalogs all visual tokens currently present in AtlasForge Site V2, organizes them into a Figma-ready schema, and flags conflicts or gaps requiring Phase 6 decisions. No appearance changes were made.

## Token Inventory (by category)
### Colors & Surfaces
- **Brand palettes (tokens.css):**
  - AtlasForge `forge-100/300/500/700` (#f7e6ff, #d79cff, #b032f0, #7c1ea6)
  - AtlasStudio `studio-100/300/500/700` (#ffe8da, #ffb78a, #f16a1b, #b84a10)
  - Atlas-V `atlasv-100/300/500/700` (#dff6ff, #8ed7f7, #1fb6ff, #0f7db2)
  - OIA `oia-100/300/500/700` (#ffe8d1, #ffb88a, #f07f3c, #b45a25)
  - SKB `skb-100/300/500/700` (#f2e6ff, #c7a6ff, #8c4dff, #5a2caa)
- **Neutral surfaces (tokens.css):** `surface-900/850/800/750/700/600/500` (#0c0d12 → #262c3a) plus `border-strong` (1px solid rgba(255,255,255,0.14)) and text ramp `text-100/300/500/700` (#f5f7fb → #5d6371).
- **Admin shell palette:** Light neutrals and badges (`--bg-light #f6f8fb`, `--border-color #e0e4ea`, `--text-muted #4a5568`, `--accent #111827`, badge hues for brand/content/etc.).
- **Overlays & transparency:** `overlay-strong/mid/weak/faint` rgba whites, surface gradients using rgba white overlays in atlasstudio and marketing CSS.
- **Gradients & specialty surfaces:** Multiple rgba overlays for hero backgrounds, tab shells, diagrams, badges (e.g., atlasstudio amber glows, marketing parallax/background gradients).
- **Mapping:** Brand accents mapped via `body.brand-*` to `--brand-accent`, `--brand-accent-strong`, `--brand-accent-soft`.

### Typography
- Font families: `--font-sans` Inter stack; `--font-mono` JetBrains Mono stack.
- Sizes: `text-xs/sm/md/lg/xl/2xl/3xl/4xl` (0.75rem → 3rem) plus raw pixel sizes in admin (12–28px).
- Line heights: 1.6 global, headings 1.2–1.25, admin topbar 1.0.
- Weights implied from Google import (400/500/600/700) and admin button/title usage (600–700).

### Spacing & Layout
- Spacing scale: `space-2` (0.125rem) through `space-88` (5.5rem).
- Layout widths: `layout-max-width 1200px`, `layout-content-width 1100px`, admin `page-shell max-width 1160px` with paddings.
- Section padding: `section-padding-y 3rem`, compact 2rem.
- Grid gaps: frequent use of space-8/12/16 and raw pixel gaps (e.g., admin grid minmax 200px/260px).

### Radii
- Core radii: `radius-4/8/12/16/24/pill`.
- Additional usage: `radius-10` in atlasstudio shell panes, admin buttons; 8–12px radii across cards; occasional `999px` pills and chip shapes.

### Shadows
- Tokenized shadows: `shadow-soft (0 8px 24px rgba(0,0,0,0.18))`, `shadow-card (0 10px 30px rgba(0,0,0,0.22))`, `shadow-strong`, `shadow-ambient`.
- Additional shadows: marketing badge `0 8px 22px rgba(0,0,0,0.16)` + drop-shadow; admin buttons `0 6px 14px rgba(17,24,39,0.12)` hover `0 10px 20px rgba(17,24,39,0.16)`; card shadow `0 8px 20px rgba(17,24,39,0.06)`.

### Breakpoints & Responsiveness
- Breakpoints in use: 600px (marketing grids/parallax), 640px (admin shell), 768px (main nav/hero, atlasstudio shell), 1024px (atlasstudio workstation), plus reduced-motion media queries.

### Motion (placeholders)
- Animations: shimmer keyframe; transitions 80–200ms ease on buttons/cards; reduced-motion fallbacks already present.

### Surface Tokens & Layers
- Layered backgrounds: multiple linear/radial gradients combining brand accent tints with neutral surfaces across marketing and atlasstudio shells.
- Transparency layers: badges and chips use rgba white tints (0.02–0.16) and brand accent glows (amber/cyan/magenta).

### Component variants (structural mapping)
- Buttons: primary (gradient dark) + secondary ghost in admin; pill chips and tab chips in atlasstudio; CTA link styles in main/marketing.
- Cards/panels: consistent border + gradient backgrounds with shadow-card; terminal/shell panes with darker overlays.

## Harmonized Token Schema (proposed buckets)
- `color.tokens`: neutrals (`surface-xxx`, `text-xxx`, overlays), gradient presets, badge hues, admin light mode values.
- `brand.palette`: per-brand ramps for AtlasForge, Atlas-V, AtlasStudio, OIA, SKB; slots reserved for Media, Labs (currently absent) and cross-system accents.
- `typography.tokens`: font families, size scale (xs–4xl), weight scale (400/500/600/700), line-height presets (body 1.6, heading 1.2–1.25, tight 1.0).
- `spacing.tokens`: rem-based scale (2–88) plus mapping guidance for pixel-only gaps in admin to closest rem tokens.
- `radii.tokens`: 4/8/10/12/16/24/pill with recommendation to align custom 10px usage to a named token.
- `shadows.tokens`: soft/card/strong/ambient + admin light-mode set and marketing badge shadow; define intensity tiers.
- `breakpoints.tokens`: sm 600px, md 640px, lg 768px, xl 1024px; align reduced-motion flag.
- `layout.tokens`: max/content widths, section paddings, grid minmax patterns (200–320px) and common gaps.
- `motion.tokens`: placeholder durations (80/120/160/200ms) and easing (ease/linear) for future consolidation.
- `surface.tokens`: gradient recipes for shell/panel, badge tints, terminal overlays; align missing `surface-775/825` references into the neutral ramp.

## Conflicts & Ambiguities (Phase 6 Decisions)
- **P6-F1-DEC-01 — Neutral ramp gap:** atlasstudio references `--surface-775` and `--surface-825` not defined in tokens; choose whether to add these steps or remap to existing surfaces.
- **P6-F1-DEC-02 — Light vs dark mode:** admin.css introduces light neutrals and badge colors outside the dark-theme tokens; decide on dual light/dark palettes or convert admin to shared tokens.
- **P6-F1-DEC-03 — Radius alignment:** custom `radius-10` usage (atlasstudio shell panes, admin buttons) sits between existing 8 and 12; pick a canonical `radius-10` token or snap to nearest existing value.
- **P6-F1-DEC-04 — Shadow intensity split:** marketing/admin define lighter shadows than global `shadow-card`; decide tier naming for light-mode vs dark-mode shadows.
- **P6-F1-DEC-05 — Breakpoint naming:** current mix of 600/640/768/1024; standardize breakpoint tokens and map each media query to `sm/md/lg/xl` for Figma exports.
- **P6-F1-DEC-06 — Spacing consistency:** admin uses pixel paddings (e.g., 10–20px) outside the rem scale; choose whether to add px aliases or refactor to rem tokens later.
- **P6-F1-DEC-07 — Brand coverage:** Media and Labs lack explicit palette tokens; decide placeholder ramps or adopt shared neutrals until defined.

## Figma Export Structure (planned)
- `00_Global_Tokens/` — core neutrals, overlays, typography, spacing, radii, shadows, motion placeholders, layout, breakpoints.
- `01_Brand_Systems/<brand>/palette.tokens` — AtlasForge, AtlasStudio, Atlas-V, OIA, SKB, Media, Labs, Merch/Docs as needed.
- `02_Component_Library/` — button, card, panel, chip, badge token references mapped to global/brand tokens.
- `Responsive/` — breakpoint tokens (sm/md/lg/xl) with layout grid presets aligned to current media queries.

## Notes
- No UI visuals changed. Tokens are inventoried only and ready for Figma ingestion and future refactor mapping.
