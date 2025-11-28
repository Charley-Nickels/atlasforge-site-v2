# Global Card Families — Phase 7 Core Specs

## 1) Product Card

### Purpose
- Showcase AtlasForge tools or offerings within product or tools grids on Home and brand pages.

### Anatomy
- Image/Thumbnail
- Title
- Subtitle/Metadata line
- Optional badges/tags (e.g., "Powered by Atlas-V")
- Optional CTA affordance (icon or inline link)
- Optional short description

### Variants
- Size: sm (compact list), md (standard grid), lg (feature tile)
- Density: compact (truncated description) or standard (one-line description)
- Brand accent optional via border/badge

### States
- Default, Hover, Focus, Pressed, Selected (featured), Disabled

### Responsive Rules
- Desktop grid: default 3→2→1; allow 4→2→1 for dense catalog only if paired with short copy
- Tablet: 2 columns
- Mobile: 1 column stacked; image on top, text below; CTA moves under text

### Token Usage
- Colors: surface/base for card, accent/border for brand cues, neutral text for body
- Typography: Title uses heading token (e.g., Text/H4/Desktop), metadata uses caption/body-sm
- Spacing: base 8px grid (space.08/12/16), internal gutters consistent with Section.Wrapper
- Radii/Shadows: radius.md default; shadow Elevation.01–.02 on hover/selected
- Borders/Surfaces: light border for default; accent border for selected/brand variant

### Interactions
- Hover elevates and tints border; focus uses outline per token; press applies slight inset; selected persists accent border/badge; disabled mutes surface and text. Behaviors align with Phase 6 F8–F10 card and gallery flows.

### Cross-Brand Notes
- Accept brand badges without changing base layout; governance badge placement follows Atlas-V rules when present.

### Placeholder Upgrade Path
- Replace optional CTA affordance with standardized CTA micro button once defined; swap thumbnail with live preview blocks in future POCs.

---

## 2) Feature Card (Generic)

### Purpose
- Highlight key features, capabilities, or bulletable benefits within feature grids or lists.

### Anatomy
- Icon/Illustration placeholder
- Title
- Body/description (1–3 lines)
- Optional badge/tag
- Optional inline link/CTA

### Variants
- Size: sm (list row), md (grid tile)
- Density: compact (1-line body) or standard (2–3 lines)

### States
- Default, Hover, Focus, Pressed, Disabled

### Responsive Rules
- Desktop grid: 3→2→1 standard
- Tablet: 2 columns, icons left/top
- Mobile: 1 column; icon above title; spacing tightened to space.08 baseline

### Token Usage
- Colors: neutral surface, accent icon tint per brand, neutral text
- Typography: Title uses Text/H5 or H6; body uses Body/Default
- Spacing: 8/12/16 padding increments; icon-title gap space.08
- Radii/Shadows: radius.sm/md; Elevation.00 default, Elevation.01 hover
- Borders: optional subtle border for definition

### Interactions
- Hover raises and tints icon; focus outline around card; press applies slight inset. Mirrors Phase 6 Feature/List patterns.

### Cross-Brand Notes
- Icon tint swaps per brand palette; layout remains consistent across brands.

### Placeholder Upgrade Path
- Replace icon placeholder with final pictograms; enable inline link → CTA microcomponent.

---

## 3) Concept Vault Card

### Purpose
- Represent concept entries, prototypes, or vault items across Games, Labs, and AtlasStudio previews.

### Anatomy
- Thumbnail/cover
- Title
- Metadata row (tags, status badge)
- Short description (1–2 lines)
- Optional CTA chip ("Open", "Preview")

### Variants
- Size: md (default), lg (featured row)
- Density: standard vs compact (no description)
- Status badge variants (concept, draft, archived)

### States
- Default, Hover, Focus, Pressed, Selected (featured), Disabled

### Responsive Rules
- Desktop grid: 3→2→1; featured row may span 2 columns
- Tablet: 2 columns; featured spans full width
- Mobile: 1 column; badge sits above description

### Token Usage
- Colors: surface base; badge uses status tokens; border accent on selected
- Typography: Title uses Text/H5; metadata uses caption; description uses Body/Default
- Spacing: 12–16 padding; 8 gap between metadata and body
- Radii/Shadows: radius.md; Elevation.01 default; Elevation.02 hover/selected
- Borders: subtle stroke for definition; thicker when selected

### Interactions
- Hover elevates and shows stronger border; focus outline; press insets; selected retains accent; disabled mutes. Aligns with Phase 6 Concept Vault and gallery behaviors.

### Cross-Brand Notes
- Accepts brand-tag overlays (e.g., Atlas-V badge) without altering anatomy.

### Placeholder Upgrade Path
- Swap thumbnail with live preview frame or storyboard; add secondary CTA in future POCs.

---

## 4) Basic Media Card

### Purpose
- Present articles, podcast episodes, videos within Media and cross-page teasers.

### Anatomy
- Media thumbnail
- Title
- Metadata (date, type, duration)
- Optional tag/badge
- Optional description excerpt

### Variants
- Size: sm (list row), md (grid tile)
- Density: compact (no description) or standard (1–2 lines)

### States
- Default, Hover, Focus, Pressed, Selected (pinned), Disabled

### Responsive Rules
- Desktop grid: 3→2→1; list row uses 1×N with thumbnail left
- Tablet: 2 columns or horizontal list with reduced thumbnail
- Mobile: 1 column stacked; thumbnail full-width top

### Token Usage
- Colors: neutral surface; accent on metadata icons; title/body neutrals
- Typography: Title uses Text/H5; metadata uses Caption; excerpt uses Body/Default
- Spacing: 12–16 padding; 8 gap between meta and body
- Radii/Shadows: radius.md; Elevation.01 hover
- Borders: optional subtle stroke; selected accent border

### Interactions
- Hover highlights thumbnail and border; focus outline; press sets active; selected shows accent edge. Follows Media list/gallery flows from Phase 6.

### Cross-Brand Notes
- Neutral by default; can accept brand tint overlays when embedded on other pages.

### Placeholder Upgrade Path
- Upgrade thumbnail to video still/audio waveform; add secondary metadata row for series/season.

---

## 5) List/Row Card (Non-Accordion)

### Purpose
- Lightweight row presentation for lists (features, tasks, decision rows when not tabled).

### Anatomy
- Leading icon/number
- Title
- Optional subtitle/metadata
- Optional trailing affordance (chevron or CTA text)

### Variants
- Size: sm (dense list), md (spacious row)
- Density: compact vs standard

### States
- Default, Hover, Focus, Pressed, Selected, Disabled

### Responsive Rules
- Desktop: full-width rows in 1-column lists; can appear within 2-column layouts
- Tablet: stacked rows with consistent padding
- Mobile: single column; trailing affordance wraps beneath if needed

### Token Usage
- Colors: neutral surface; accent for icon/chevron; text neutrals
- Typography: Title uses Body/Strong; subtitle uses Caption
- Spacing: 8–12 padding; 8 gap icon-to-text
- Radii/Shadows: radius.sm; Elevation.00 default, Elevation.01 hover
- Borders: optional divider between rows

### Interactions
- Hover highlights row; focus outline; press insets; selected shows accent bar/pip; disabled muted. Mirrors Phase 6 list/accordion state matrix without expand behavior.

### Cross-Brand Notes
- Icon tint can change per brand context; layout remains neutral.

### Placeholder Upgrade Path
- Replace trailing affordance with standardized CTA or toggle when defined; enable inline badge for statuses.
