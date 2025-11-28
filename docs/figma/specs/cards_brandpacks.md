# Brand-Specific Card Families — Phase 7 Core Specs

## 6) Games Catalog Card

### Purpose
- Present individual games in catalog grids on Games and cross-page teasers, enabling quick scan and selection.

### Anatomy
- Cover art/thumbnail
- Title
- Genre/metadata line
- Tag/badge (e.g., status or platform)
- Optional CTA chip ("View"/"Play trailer")

### Variants
- Size: md standard grid, lg featured (spans 2 columns)
- Density: standard vs compact (no description)

### States
- Default, Hover, Focus, Pressed, Selected (featured), Disabled

### Responsive Rules
- Desktop: 3→2→1 grid; featured can span 2 columns
- Tablet: 2 columns; featured full-width
- Mobile: 1 column stacked; CTA chip aligns beneath metadata

### Token Usage
- Colors: game-neutral surface with game accent on border/badge; text neutrals
- Typography: Title Text/H5; metadata Caption/Body-Sm
- Spacing: 12–16 padding; 8 gaps
- Radii/Shadows: radius.md; Elevation.01 hover; Elevation.02 selected
- Borders: accent border on selected/hover

### Interactions
- Hover spotlight on art, raise elevation; focus outline; press sets as featured screenshot; selected persists accent. Aligns with Phase 6 gallery/card behaviors.

### Cross-Brand Notes
- Should accommodate Atlas-V governance badge overlays when required without altering layout.

### Placeholder Upgrade Path
- Swap static art with live GIF/video preview; add inline rating badge when defined.

---

## 7) Games Screenshot/Gallery Card

### Purpose
- Show gallery thumbnails that set the featured screenshot or hero frame in Games and cross-promos.

### Anatomy
- Thumbnail image
- Optional title/caption
- Optional badge (featured)

### Variants
- Size: sm thumbnails; md carousel tile
- Density: standard vs compact (no caption)

### States
- Default, Hover, Focus, Pressed/Set Featured, Selected (active), Disabled

### Responsive Rules
- Desktop: grid/rail 4→2→1 allowed; standard 3→2→1 if space constrained
- Tablet: 2 columns or horizontal rail
- Mobile: 1 column scroll or horizontal swipe (decision P6-F5-001/P6-F8-001)

### Token Usage
- Colors: neutral surface; accent border for active; overlay tint on hover
- Typography: Caption for optional label
- Spacing: minimal padding (4–8) to maximize imagery
- Radii/Shadows: radius.sm/md; Elevation.00 default, Elevation.01 hover/active
- Borders: accent stroke on selected

### Interactions
- Hover/focus highlight; press sets featured image; selected persists accent. Follows Phase 6 gallery flows; mobile tap-to-set.

### Cross-Brand Notes
- Matches Games visual tone but remains compatible if embedded elsewhere.

### Placeholder Upgrade Path
- Add video/animated preview microstate; integrate swipe gestures if approved.

---

## 8) OIA Species Panel

### Purpose
- Present OIA species profiles with art, stats, and lore snippet.

### Anatomy
- Illustration/thumbnail
- Title/species name
- Metadata (origin, tier)
- Stats badges (e.g., alignment, habitat)
- Short description
- Optional CTA chip ("View profile")

### Variants
- Size: md grid tile; lg showcase
- Density: standard vs compact (no description)

### States
- Default, Hover, Focus, Pressed, Selected (expanded), Disabled

### Responsive Rules
- Desktop: 3→2→1 grid; lg may span 2 columns
- Tablet: 2 columns; expanded content full-width
- Mobile: 1 column stack; stats wrap beneath description

### Token Usage
- Colors: warm aquatic palette; badge tokens for stats; surface neutral
- Typography: Title H5; metadata Caption; description Body
- Spacing: 12–16 padding; 8 gaps
- Radii/Shadows: radius.md; Elevation.01 hover; Elevation.02 selected
- Borders: accent stroke on selected/expanded

### Interactions
- Hover/focus elevate and surface stats; press can reveal extended lore; selected maintains expanded view. Mirrors Phase 6 species reveal flows.

### Cross-Brand Notes
- Should coexist with Atlas-V governance badge if cross-linked.

### Placeholder Upgrade Path
- Add expandable lore panel; integrate animated portrait when available.

---

## 9) OIA Gallery Tile

### Purpose
- Provide supporting gallery thumbnails for OIA lore/scenes.

### Anatomy
- Thumbnail image
- Optional caption
- Optional badge (featured)

### Variants
- Size: sm thumbnail; md tile
- Density: compact (no caption) or standard

### States
- Default, Hover, Focus, Pressed/Set Featured, Selected, Disabled

### Responsive Rules
- Desktop: 3→2→1 standard; horizontal rail optional
- Tablet: 2 columns or rail
- Mobile: 1 column scroll; swipe optional (decision aligned with P6-F5-001)

### Token Usage
- Colors: neutral surface; accent overlay on hover; selected border
- Typography: Caption text
- Spacing: tight padding 4–8
- Radii/Shadows: radius.sm; Elevation.00 default, Elevation.01 hover
- Borders: accent on selected

### Interactions
- Hover/focus highlight; press sets featured scene; selected persists accent. Aligns with Phase 6 gallery flows.

### Cross-Brand Notes
- Should retain OIA palette cues without conflicting with global chrome.

### Placeholder Upgrade Path
- Add ambient overlay or animated preview when ready.

---

## 10) Media Article Card

### Purpose
- Present editorial articles/posts with thumbnail and metadata.

### Anatomy
- Thumbnail
- Title
- Metadata (date, author, category)
- Optional tag/badge
- Excerpt

### Variants
- Size: md grid tile; sm list row
- Density: compact (no excerpt) or standard

### States
- Default, Hover, Focus, Pressed, Selected (pinned), Disabled

### Responsive Rules
- Desktop: 3→2→1 grid; list variant 1×N
- Tablet: 2 columns
- Mobile: 1 column stacked

### Token Usage
- Colors: neutral/editorial palette; accent for category badge
- Typography: Title H5; metadata Caption; excerpt Body
- Spacing: 12–16 padding; 8 gaps
- Radii/Shadows: radius.md; Elevation.01 hover
- Borders: subtle stroke; accent on selected

### Interactions
- Hover highlights border/thumbnail; focus outline; press sets active; selected shows pin/edge. Matches Phase 6 media card flows.

### Cross-Brand Notes
- Remains neutral; can be tinted when embedded in other brand pages.

### Placeholder Upgrade Path
- Swap thumbnail with video still; add reading time metadata.

---

## 11) Media Pillar Card

### Purpose
- Highlight major media pillars or series within Media and Home teasers.

### Anatomy
- Pillar image
- Title
- Subtitle/metadata
- Optional badge/tag
- Optional CTA chip

### Variants
- Size: lg feature, md standard
- Density: standard (2-line subtitle) or compact (1-line)

### States
- Default, Hover, Focus, Pressed, Selected (featured), Disabled

### Responsive Rules
- Desktop: 3→2→1 or 2→1 depending on hero adjacency
- Tablet: 2 columns
- Mobile: 1 column stacked

### Token Usage
- Colors: neutral surface; accent badge per pillar; text neutrals
- Typography: Title H4/H5; subtitle Body; badges Caption
- Spacing: 16 padding default; 8 gaps
- Radii/Shadows: radius.md/lg; Elevation.01 hover; Elevation.02 selected
- Borders: accent edge on selected

### Interactions
- Hover elevates; focus outline; press sets as featured pillar; selected maintains accent. Follows gallery/card states.

### Cross-Brand Notes
- Neutral but can carry Atlas-V governance badge where applicable.

### Placeholder Upgrade Path
- Add overlay gradient; introduce inline metrics (episodes count) in later passes.

---

## 12) Labs Experiment Card

### Purpose
- Showcase individual Labs experiments with emphasis on status and category.

### Anatomy
- Thumbnail or abstract block
- Title
- Category/metadata
- Status badge
- Short description

### Variants
- Size: md grid tile; lg spotlight
- Density: standard vs compact (no description)

### States
- Default, Hover, Focus, Pressed/Expand, Selected, Disabled

### Responsive Rules
- Desktop: 3→2→1 grid; lg may span 2 columns
- Tablet: 2 columns
- Mobile: 1 column; description below badges

### Token Usage
- Colors: experimental accent palette; status badge tokens; neutral surface
- Typography: Title H5; metadata Caption; description Body
- Spacing: 12–16 padding; 8 gaps
- Radii/Shadows: radius.md; Elevation.01 hover; Elevation.02 expanded/selected
- Borders: accent stroke when selected/expanded

### Interactions
- Hover raises and highlights badge; focus outline; press may flip/expand; selected keeps expanded state. Aligns with Phase 6 Labs patterns.

### Cross-Brand Notes
- Should support Atlas-V governance badge if required for safety context.

### Placeholder Upgrade Path
- Add animation for experiment status; integrate live preview block later.

---

## 13) Labs Category Grid Card

### Purpose
- Represent categories/filters in Labs grids for discovery.

### Anatomy
- Category icon/shape
- Title
- Optional description
- Optional badge (new/popular)

### Variants
- Size: sm filter chip-like tile; md standard card
- Density: compact (title only) or standard (title + short description)

### States
- Default, Hover, Focus, Pressed, Selected, Disabled

### Responsive Rules
- Desktop: grid 3→2→1 or chip rows
- Tablet: 2 columns
- Mobile: 1 column or chip row scroll

### Token Usage
- Colors: neutral surface; accent tint per category; text neutrals
- Typography: Title Body/Strong; description Body/Default
- Spacing: 8–12 padding; 8 gaps
- Radii/Shadows: radius.sm/md; Elevation.00 default, Elevation.01 hover
- Borders: accent edge on selected

### Interactions
- Hover tint; focus outline; press selects; selected shows persistent accent; disabled muted. Matches Labs category grid behaviors.

### Cross-Brand Notes
- Keep palette experimental but readable; compatible with governance overlays if needed.

### Placeholder Upgrade Path
- Convert to filter chips with icons or counts; add active filter summary later.

---

## 14) SKB Audio Track Card

### Purpose
- Display individual audio tracks within SKB playlists.

### Anatomy
- Track title
- Artist/metadata line
- Play icon/affordance
- Optional duration
- Optional badge (status)

### Variants
- Size: md row; sm dense list
- Density: compact vs standard

### States
- Default, Hover, Focus, Pressed/Play, Selected (playing), Disabled

### Responsive Rules
- Desktop: list rows 1-column; can sit inside 2-column layout
- Tablet: stacked rows with consistent padding
- Mobile: single column; controls remain right-aligned or wrap below

### Token Usage
- Colors: neutral surface; accent for play icon and playing state; text neutrals
- Typography: Title Body/Strong; metadata Caption; duration Caption
- Spacing: 8–12 padding; 8 gaps between title/meta and controls
- Radii/Shadows: radius.sm; Elevation.00 default, Elevation.01 hover
- Borders: optional divider; selected accent bar

### Interactions
- Hover highlights row and play icon; focus outline; press toggles play state; selected shows "playing" badge. Follows Phase 6 audio list interactions.

### Cross-Brand Notes
- Keep audio accent consistent with SKB palette; governance badges not typical.

### Placeholder Upgrade Path
- Add waveform preview bar; integrate queue controls later.

---

## 15) SKB Playlist Row

### Purpose
- Represent playlist summaries with cover art and key metadata.

### Anatomy
- Playlist cover thumbnail
- Title
- Metadata (tracks, duration)
- Optional status badge
- Optional CTA chip ("Play playlist")

### Variants
- Size: md row; lg feature tile
- Density: compact vs standard

### States
- Default, Hover, Focus, Pressed, Selected (active playlist), Disabled

### Responsive Rules
- Desktop: rows in list or 3→2→1 tiles
- Tablet: 2 columns or rows
- Mobile: 1 column stacked; cover above text

### Token Usage
- Colors: SKB accent for badge/icon; neutral surface
- Typography: Title H5/Body-Strong; metadata Caption
- Spacing: 12–16 padding; 8 gaps
- Radii/Shadows: radius.md; Elevation.01 hover; Elevation.02 selected
- Borders: accent edge on selected

### Interactions
- Hover raises and highlights cover; focus outline; press sets active playlist; selected persists accent. Mirrors audio list behaviors.

### Cross-Brand Notes
- Remain SKB-focused; keep neutral enough for cross-page embeds.

### Placeholder Upgrade Path
- Add inline controls (shuffle, save) in future passes.

---

## 16) Atlas-V Governance/Safety Card

### Purpose
- Convey governance/safety information, workflows, or badges for Atlas-V across pages.

### Anatomy
- Governance badge
- Title
- Summary/description
- Optional link/CTA
- Optional icon/illustration

### Variants
- Size: md standard; lg highlight block
- Density: compact (summary only) or standard (summary + bulleted cues)

### States
- Default, Hover, Focus, Pressed, Selected (pinned), Disabled

### Responsive Rules
- Desktop: 2–3 column grids; can slot into 3→2→1 grids
- Tablet: 2 columns
- Mobile: 1 column; badge above title

### Token Usage
- Colors: Atlas-V cyan palette; neutral surface; badge tokens
- Typography: Title H5; body Body; badge Caption
- Spacing: 12–16 padding; 8 gaps
- Radii/Shadows: radius.md; Elevation.01 hover; Elevation.02 selected
- Borders: accent stroke on selected; optional border default

### Interactions
- Hover reveals more detail/links; focus outline; press opens linked safety detail; selected pins emphasis. Aligned with Phase 6 governance badge flows.

### Cross-Brand Notes
- Must appear consistently on Home, Atlas-V, Media, and OIA as documented in Phase 6/7; placement follows governance hooks.

### Placeholder Upgrade Path
- Add inline checklist or status meter in later passes.

---

## 17) AtlasStudio Scenario/Task Card

### Purpose
- Represent scenarios, tasks, or drafts within AtlasStudio playground/task drawer contexts.

### Anatomy
- Icon or task type marker
- Title
- Short description
- Optional metadata (status, time)
- Optional action chip ("Load", "Preview")

### Variants
- Size: sm drawer row; md grid tile
- Density: compact vs standard

### States
- Default, Hover, Focus, Pressed, Selected (active task), Disabled

### Responsive Rules
- Desktop: appears within playground shell drawers and grids; 3→2→1 grids outside drawer
- Tablet: 2 columns or stacked drawer list
- Mobile: 1 column; drawer overlays and stacks items

### Token Usage
- Colors: AtlasStudio ember palette accents; neutral surface
- Typography: Title Body/Strong; description Body; metadata Caption
- Spacing: 8–12 padding; 8 gap title/description
- Radii/Shadows: radius.sm/md; Elevation.00 default, Elevation.01 hover; selected uses accent edge
- Borders: subtle stroke; accent on selected

### Interactions
- Hover highlight; focus outline; press loads/activates scenario; selected persists accent. Matches Phase 6 playground drawer behaviors.

### Cross-Brand Notes
- May display Atlas-V badge when governance applies to scenario; otherwise AtlasStudio-first tone.

### Placeholder Upgrade Path
- Add inline progress or step chips; connect to console preview frames later.

---

## 18) Admin Decision/Row Card (Table + Card Variant)

### Purpose
- Display decisions/records in Admin console either as table rows (desktop) or stacked cards (mobile).

### Anatomy
- Title/record name
- Metadata (date, owner)
- Status badge
- Optional description or notes
- Optional action icons (export/view)

### Variants
- Table row (desktop)
- Card (mobile/stacked)
- Density: compact vs standard

### States
- Default, Hover, Focus, Pressed, Selected (row/card), Disabled

### Responsive Rules
- Desktop: table layout with hover row highlight and optional horizontal scroll
- Tablet: 2-column cards or condensed table
- Mobile: stacked cards 1 column; action icons wrap below metadata

### Token Usage
- Colors: neutral admin palette; status badges use status tokens; text neutrals
- Typography: Title Body/Strong; metadata Caption; status Caption
- Spacing: 12–16 padding; 8 gaps
- Radii/Shadows: radius.sm/md; Elevation.00 default, Elevation.01 hover; Elevation.02 selected card
- Borders: table dividers; accent edge on selected

### Interactions
- Hover highlights row; focus outline; press selects; selected persists highlight; disabled muted. Export button follows CTA states; freeze toggle behavior from Phase 6 admin flows.

### Cross-Brand Notes
- Admin stays neutral; governance badge appears if safety context needed.

### Placeholder Upgrade Path
- Replace action icons with standardized controls; integrate export/preparing state once decided.
