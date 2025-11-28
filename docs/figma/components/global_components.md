# Global Component Inventory (Phase 6 – Run F2)

Documented components are extracted from the current AtlasForge Site V2 HTML/CSS without changing visuals. Each entry includes structure, behaviors, token hooks, and Figma expectations for later systemization.

## Top Nav (Desktop)
- **Description**: Sticky header bar with logo, primary and secondary link rails.
- **Purpose**: Provides brand anchor and cross-site navigation on large screens.
- **Where it appears**: All brand landing pages using `.mf-header` and `.mf-nav` in `marketing.css`.
- **Content slots**: Logo mark/text, primary link group, secondary link group, optional action (menu toggle hidden on desktop).
- **Variants**: Standard (default), compact (scroll-aware future), emphasis (current page highlighted via `.is-active`).
- **States**: Default, hover/focus on links, active state on current page link.
- **Token mapping**: Uses surface layers (`--surface-900`, overlay gradients), spacing scale (`--space-8` to `--space-16`), radii (`--radius-8`, `--radius-12`), border token (`--border-strong`), text tokens (`--text-100`, `--text-300`).
- **Figma expectations**: Build as auto-layout with pinned logo/links, include interaction styles for hover/active, and sticky behavior note.

## Mobile Nav / Drawer
- **Description**: Navigation toggle button with collapsible link stack on narrow viewports.
- **Purpose**: Preserve navigation access on mobile without crowding the header.
- **Where it appears**: All pages via `.mf-nav-toggle` and responsive `.mf-nav` behavior.
- **Content slots**: Menu icon/label, stacked primary links, stacked secondary links.
- **Variants**: Collapsed (default), expanded drawer.
- **States**: Default, hover/focus on toggle, pressed/expanded state.
- **Token mapping**: Shares header tokens; spacing (`--space-12`), radii (`--radius-8`), overlay backgrounds for drawer, text tokens.
- **Figma expectations**: Provide component set with on/off state and auto-layout column for links.

## Footer Base & Clusters
- **Description**: Footer wrapper with multiple link clusters and brand note.
- **Purpose**: Concludes pages with navigation and status messaging.
- **Where it appears**: All marketing pages using `.mf-footer` and child clusters.
- **Content slots**: Brand badge/text, link columns, microcopy/legal line.
- **Variants**: Standard multi-column; compact single-column for mobile.
- **States**: Default, hover/focus on links.
- **Token mapping**: Surface tokens (`--surface-900`, `--overlay-weak`), spacing (`--space-12`, `--space-16`), typography small text tokens, border/line tokens for separators.
- **Figma expectations**: Auto-layout grid that collapses to single column at mobile breakpoint.

## Hero (Primary Hero)
- **Description**: Top-of-page marketing hero with badge, headline, body, CTA row, and supporting visual/aside.
- **Purpose**: Establishes brand story and directs to key actions.
- **Where it appears**: Home, Atlas-V, AtlasStudio, OIA, SKB, Games, Media, Labs pages using `.mf-hero` variants.
- **Content slots**: Eyebrow/hero badge, headline, description, CTA stack, supporting visual/aside text.
- **Variants**: Brand background variants (`mf-hero--forge`, `--atlasv`, `--studio`, `--oia`, `--skb`), two-column vs single-column on mobile.
- **States**: CTA states (default/hover/active) inherit button styles; hero itself static.
- **Token mapping**: Brand accent gradients, container width (`--layout-max-width`), spacing (`--space-12`–`--space-32`), radii for badge (`--radius-12`), text tokens for headings/body.
- **Figma expectations**: Frame with left content/right visual, responsive stack to column; badge as nested component.

## Sub-hero (Secondary Hero)
- **Description**: Secondary introductory band beneath primary hero, often used on inner pages.
- **Purpose**: Reinforces context and routes to key sections.
- **Where it appears**: Section-intro blocks beneath heroes on brand pages.
- **Content slots**: Eyebrow, headline, supporting paragraph, optional CTA.
- **Variants**: Light overlay vs neutral surface; single-column.
- **States**: CTA states only.
- **Token mapping**: Surface overlays, spacing scale mid-range, heading/body typography tokens.
- **Figma expectations**: Auto-layout stack with optional CTA row; responsive width guard.

## Section Headers
- **Description**: Reusable header block with eyebrow, h2, and paragraph.
- **Purpose**: Introduce sections and standardize typography rhythm.
- **Where it appears**: Throughout marketing sections using `.mf-section-header` and `.mf-eyebrow`.
- **Content slots**: Eyebrow label, title, descriptive copy.
- **Variants**: Standard; compact (title + brief eyebrow), elevated (with notes).
- **States**: Static.
- **Token mapping**: Text tokens for eyebrow/body, spacing between elements (`--space-8`, `--space-12`), alignment constraints.
- **Figma expectations**: Component with nested text styles; drop-in for any section.

## Section Wrappers
- **Description**: `.mf-section` blocks providing vertical rhythm and max-width container `.mf-container`.
- **Purpose**: Maintain consistent padding and layout width.
- **Where it appears**: All pages around major bands.
- **Content slots**: Freeform interior (grids, cards, lists).
- **Variants**: Standard; parallax/backdrop wrappers (`mf-parallax`, `mf-layer-*`).
- **States**: Static.
- **Token mapping**: Spacing tokens for padding (`--space-24`–`--space-56`), layout width token (`--layout-max-width`), background surfaces.
- **Figma expectations**: Frame templates with padding styles and container width notes.

## CTA Buttons
- **Description**: Anchor-based buttons for actions.
- **Purpose**: Route users to key flows across pages.
- **Where it appears**: Heroes, section CTAs, footers.
- **Content slots**: Label, optional icon (future).
- **Variants**: Primary (`.mf-button--primary`), Secondary (default style), Ghost (`.mf-button--ghost`), Footer CTA (in footer clusters).
- **States**: Default, hover, focus, active.
- **Token mapping**: Button fills/lines tied to brand accent and overlay tokens, text tokens for contrast, radii (`--radius-12`), spacing (`--space-12`/`--space-16` padding), shadow where applied.
- **Figma expectations**: Component set with interactive variants and slot for optional icon.

## Cards
- **Description**: Panel-style blocks used for content grids across categories.
- **Purpose**: Present succinct descriptions for tools, games, media, labs, audio, and concept vault items.
- **Where it appears**: Case grids, capability grids, game catalog, media lists, labs, SKB tracks, concept vault lists.
- **Content slots**: Title, body copy, optional badge/note, media/skeleton placeholder.
- **Variants**: Product/Tool card, Game card, Media card, Labs card, Audio/SKB card, Concept Vault tile; clickable vs static.
- **States**: Default, hover (lift/outline), focus (outline), active (pressed transform).
- **Token mapping**: Surface tokens (`--surface-800`/`--overlay-weak`), radii (`--radius-12`), spacing (`--space-12`–`--space-20`), shadows (`--shadow-soft`), text tokens for title/body.
- **Figma expectations**: Base card component with property for category; nested text styles and optional media placeholder.

## Lists and Grids
- **Description**: Structured lists and grid layouts for features, stack diagrams, and concept vault items.
- **Purpose**: Align repeating items with consistent rhythm.
- **Where it appears**: `.mf-grid`, `.mf-layer-list`, `.mf-storyboard-item`, concept vault lists.
- **Content slots**: Item title, description, optional icon/badge.
- **Variants**: Two-column grid, multi-column responsive grid, vertical list.
- **States**: Static (except when items are cards inheriting states).
- **Token mapping**: Layout spacing (`--space-12`–`--space-24`), grid gaps, text tokens; surface tokens if wrapped in cards.
- **Figma expectations**: Auto-layout lists with responsive column switching at breakpoints.

## Badges / Status Chips
- **Description**: Small pill-like labels such as hero badges and chips.
- **Purpose**: Provide context tags or status highlights.
- **Where it appears**: Hero badges (`.mf-hero-badge`), inline chips (`.mf-chip`).
- **Content slots**: Icon/logo, label text.
- **Variants**: Brand badge (logo + text), neutral chip, accent chip.
- **States**: Default; hover/focus optional for clickable chips.
- **Token mapping**: Radii (`--radius-pill`/`--radius-12`), padding tokens, background overlays, text tokens.
- **Figma expectations**: Component with pill shape and optional media slot.

## Tags / Pills
- **Description**: Simple inline tags used in inline lists (e.g., stack chip list).
- **Purpose**: Compact identifiers for brands or categories.
- **Where it appears**: Hero inline lists, stack callouts.
- **Content slots**: Text label.
- **Variants**: Neutral vs accent fill; small vs medium sizing.
- **States**: Default, hover (if interactive).
- **Token mapping**: Border/overlay tokens, pill radius, small text tokens, compact spacing.
- **Figma expectations**: Pill component with adjustable padding and color styles.

## Screenshot Galleries
- **Description**: Grid of cards with screenshot placeholders.
- **Purpose**: Showcase visual previews in a consistent grid.
- **Where it appears**: Home sample projects gallery, OIA gallery, media/game previews.
- **Content slots**: Image or skeleton block, caption.
- **Variants**: Static skeleton placeholder, future image slot, responsive column counts.
- **States**: Default; hover lift for linked items.
- **Token mapping**: Card surface tokens, radii, spacing for grid gaps, caption typography.
- **Figma expectations**: Gallery frame with slot for media; variant for placeholder vs filled image.

## Audio Lists
- **Description**: List or grid representing SKB tracks or audio-related entries.
- **Purpose**: Present track metadata and sequencing cues.
- **Where it appears**: SKB page sections and track callouts.
- **Content slots**: Track title, description, optional status badge, CTA.
- **Variants**: List row vs card tile; featured vs standard.
- **States**: Default, hover/focus on CTA.
- **Token mapping**: Card/list tokens, spacing for list rows, text tokens for small metadata.
- **Figma expectations**: Component set for row and tile with slot-based text.

## Placeholder Blocks
- **Description**: Skeleton or block placeholders indicating future imagery or diagrams.
- **Purpose**: Reserve space without finalized assets.
- **Where it appears**: Sample project gallery, diagram placeholders, sandbox tiles.
- **Content slots**: Skeleton block, optional caption.
- **Variants**: Light block, grid tile placeholder, diagram frame.
- **States**: Static.
- **Token mapping**: Overlay tokens for skeleton fill, radii, spacing, subtle border/shadow tokens.
- **Figma expectations**: Placeholder component with swap capability when assets arrive.
