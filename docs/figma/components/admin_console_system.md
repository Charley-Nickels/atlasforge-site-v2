# Admin Console System (Phase 7 — F18)

## Purpose
Defines the Figma-ready specifications for the Admin Console data UI stack, covering tables, stacked cards, filters, freeze toggle, and export controls. This system supports the internal governance/decisions console with responsive, token-driven variants aligned to Phase 6 canon and Phase 7 tokens/styles.

## Component Families
- **Admin.Table** – structured data presentation for desktop/tablet, with horizontal scroll fallback.
- **Admin.Cards** – stacked card presentation, primarily for mobile or density-sensitive contexts.
- **Admin.Filters** – filter chips/buttons with panels/overlays for refining results.
- **Admin.Freeze** – toggle control for freezing columns/rows.
- **Admin.Export** – CTA for exporting data with optional preparing/success feedback.

---

## A) Admin.Table
### Purpose
Present decisions/logs in a structured grid optimized for desktop/tablet while retaining accessibility and responsive fallback.

### Anatomy
- Header row (labels, sort affordances optional)
- Data rows (text cells, tag/status icon cells)
- Cells with padding and borders
- Scroll container (horizontal on narrow widths)
- Optional sticky header section

### Variants
- `Table.Default`
- `Table.Striped` (alternating surface rows)
- `Table.Dense` (reduced padding)
- `Table.Spacious` (increased padding)
- `Table.MobileScroll` (locked horizontal scroll)

### States
- Row hover (elevation or tint)
- Row focus (tokenized outline)
- Row active/selected (accent border/badge)
- Disabled row (muted text/surfaces; rare)

### Responsive Rules
- Desktop: full table; optional sticky header; visible borders.
- Tablet: compressed padding; horizontal scroll if columns exceed width.
- Mobile: **decision-dependent** → Option A horizontal scroll table, Option B swap to stacked cards.

### Token Usage
- Color: surface/border neutrals; status accents from governance tokens when present.
- Typography: body/label tokens for header/data cells; mono allowed for IDs.
- Spacing: padding scale aligned to spacing tokens; dense/spacious map to adjacent token steps.
- Radii: subtle (xs/sm) on table container; cells typically square.
- Shadow: light elevation for sticky header or hover; focus outline uses focus effect token.
- Borders: divider tokens for row/column separators.

### Interaction Notes
- Hover/focus/active follow global interaction matrix (F8/F9).
- Row selection persists accent; keyboard focus travels cell-to-cell or row-based.
- Sorting/filter affordances optional; link to Admin.Filters when present.

### Do / Don’t
- **Do** maintain consistent column order across breakpoints.
- **Do** provide sufficient tap targets for filter/sort controls near the table.
- **Don’t** hide governance or status badges in selected state.
- **Don’t** collapse headers away; use sticky header instead.

### Cross-Brand Behavior
Admin is neutral; only governance badges use Atlas-V accent tokens where applicable.

### References
- Phase 6 layout blueprints (Admin), interaction blueprints (F8), state matrix (F9), flow maps (F10), decisions P6-F5-002, P6-F9-003, P6-F18-001.

---

## B) Admin.Cards (Stacked Card Mode)
### Purpose
Provide a mobile-first representation of admin data when tables are impractical; also optional on tablet/desktop for focus views.

### Anatomy
- Card container with surface and border
- Row metadata block (title/ID, timestamp)
- Key/value pairs grouped
- Status tags/badges
- Action row (filters/freeze/export shortcuts optional)

### Variants
- `Card.Default`
- `Card.Condensed`
- `Card.Highlighted` (selected/priority)

### States
- Default
- Hover (desktop/tablet)
- Focus (outline)
- Active/Selected (accent border/shadow)
- Disabled (muted)

### Responsive Rules
- Mobile: primary representation when selected by decision; full-width stack.
- Tablet: optional card mode; spacing slightly increased vs mobile.
- Desktop: rarely used; reserved for detail or comparison views.

### Token Usage
- Color: surface levels, accent borders for selection, neutral text.
- Typography: heading/body tokens; small label tokens for metadata.
- Spacing: card padding uses base spacing; condensed reduces one step.
- Radii: sm/md radii; highlight may add stronger shadow.
- Shadow: elevation tiers for hover/selected.
- Borders: divider tokens between key/value groups if needed.

### Interaction Notes
- Tap/hover highlights; selection persists accent.
- Works in tandem with Admin.Filters and Admin.Freeze controls placed above or within action row.

### Do / Don’t
- **Do** keep key metadata near top for quick scan.
- **Do** retain badges for governance/status.
- **Don’t** over-compress padding beyond condensed variant.

### Cross-Brand Behavior
Neutral styling; governance badges retain Atlas-V accent.

### References
- Phase 6 Admin mobile blueprint; decisions P6-F5-002, P6-F18-002.

---

## C) Admin.Filters
### Purpose
Provide filtering controls for table or card views, supporting multi-select and clear/reset patterns.

### Anatomy
- Filter chip/button trigger
- Dropdown/panel or overlay container
- Option list (checkbox/radio)
- Apply/Clear buttons
- Active filter count badge

### Variants
- `Filter.Button`
- `Filter.Chip`
- `Filter.Panel`
- `Filter.Overlay` (mobile)

### States
- Default
- Hover (trigger highlight)
- Focus (outline)
- Active/Open (panel visible)
- Option Selected
- Cleared

### Responsive Rules
- Desktop: inline panel/dropdown anchored to trigger.
- Tablet: compact panel; may still anchor.
- Mobile: full overlay; options scroll vertically; Apply/Clear fixed row.

### Token Usage
- Color: neutral surfaces; accent for active/selected; badge uses accent token.
- Typography: body/label tokens for options and buttons.
- Spacing: padding from spacing tokens; overlay uses larger gutters.
- Radii: sm on chips/buttons; panel uses md.
- Shadow: elevation for overlays/panels per effect tokens.
- Borders: subtle divider tokens between options.

### Interaction Notes
- Trigger tap/hover opens panel; Apply commits; Clear resets.
- Overlay dismisses via overlay tap/Escape.

### Do / Don’t
- **Do** expose applied filter count visibly.
- **Do** keep Apply/Clear reachable on mobile.
- **Don’t** hide filter state when panel closes.

### Cross-Brand Behavior
Admin-neutral; if governance filters exist, badge accents may use Atlas-V tokens.

### References
- Interaction flows F8/F9/F10; decisions P6-F18-003.

---

## D) Admin.Freeze
### Purpose
Toggle freezing of columns/rows for scroll-heavy data views.

### Anatomy
- Toggle switch
- Label
- Optional info tooltip

### Variants
- `Toggle.On`
- `Toggle.Off`
- `Toggle.Disabled`

### States
- Default
- Hover
- Focus (outline)
- Active (state change)
- Disabled

### Responsive Rules
- Desktop/Tablet: inline with filters/export row.
- Mobile: stacked row; label wraps; tooltip optional.

### Token Usage
- Color: success/brand for on; neutral for off; muted for disabled.
- Typography: label/body token.
- Spacing: inline padding from spacing scale.
- Radii: pill or md per toggle tokens.
- Shadow: minimal; focus outline effect token.
- Borders: optional subtle border for track.

### Interaction Notes
- Tap/press toggles state; optional tooltip follows governance tooltip rule.

### Do / Don’t
- **Do** reflect state change immediately.
- **Don’t** animate excessively; keep crisp for data UI.

### Cross-Brand Behavior
Neutral; inherits Admin styling; governance tooltip rule ties to global decision.

### References
- Decisions P6-F18-004; prior governance tooltip decisions (P6-F10-004/P6-F11-002).

---

## E) Admin.Export
### Purpose
Provide an export CTA with optional preparing/success feedback for admin data sets.

### Anatomy
- Export CTA button
- Optional status badge
- Optional confirmation toast placeholder

### Variants
- `Export.Default`
- `Export.Disabled`
- `Export.Preparing` (pending decision)
- `Export.Success` (optional acknowledgement)

### States
- Default
- Hover
- Focus
- Active/Pressed
- Disabled

### Responsive Rules
- Desktop/Tablet: inline with filters/freeze row.
- Mobile: stacked under filters; full-width CTA.

### Token Usage
- Color: CTA tokens (primary/secondary) with governance accent optional.
- Typography: CTA text tokens.
- Spacing: button padding per CTA scale.
- Radii: button radii tokens.
- Shadow: elevation tiers for hover/active; focus outline effect.
- Borders: per CTA variant (solid/outline/ghost as needed).

### Interaction Notes
- Press triggers preparing (if approved) then success; disabled blocks interaction.
- Badge can show preparing/success state.

### Do / Don’t
- **Do** keep preparing state short and clear.
- **Don’t** block navigation; provide clear affordance when disabled.

### Cross-Brand Behavior
Neutral CTA styling; governance-related exports may use Atlas-V accent.

### References
- Decisions P6-F18-001, P6-F18-003; interaction flows F8–F10.

---

## System-Level Composition: Admin Console Shell
### Composition
- Header/intro (outside this spec)
- Filters row (Admin.Filters)
- Freeze toggle (Admin.Freeze)
- Data region: Admin.Table **or** Admin.Cards (decision-dependent)
- Export CTA section (Admin.Export)
- Optional governance footnote/badges

### Responsive Logic
- Desktop/Tablet: Table default, filters/freeze/export inline; sticky header optional.
- Mobile: Decision between horizontal-scroll table vs stacked cards (recommended cards). Filters/overlays full-screen; export as primary CTA.

### Token & Interaction Alignment
- Uses Phase 7 token-to-style mapping (F13) for color, typography, spacing, radii, shadow, focus outlines.
- Interactions follow global/state matrices (F8/F9) and flow maps (F10).

### Placeholder/Upgrade Notes
- Preparing state visuals for export pending decision.
- If card mode defaulted, ensure link-back to full table on desktop spec.
- Tooltip usage for freeze/export should follow governance tooltip standard once resolved.

---

## Decision Hooks (F18)
- **P6-F18-001:** Preparing state fidelity for Export (spinner/progress/static text).
- **P6-F18-002:** Whether stacked card mode is default on mobile (recommended) or optional.
- **P6-F18-003:** Filter panel animation choice (fade/slide vs instant).
- **P6-F18-004:** Tooltip inclusion for Freeze toggle and alignment with governance tooltip trigger.
