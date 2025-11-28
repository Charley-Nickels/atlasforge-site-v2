# Phase 7 — Core Component Specifications (Run F14)

This document defines the Phase 7 core component blueprints for Figma construction. All specifications align with Phase 6 canon (tokens, patterns, wireframes, interaction matrices, and flow maps) and Phase 7 Figma-first naming rules (F12–F13). Visual styling is derived from tokens; no new values are introduced here.

## Naming & Token References
- Component names follow the pattern `Category/Subcategory/Variant`, e.g., `AF/Nav/Primary`, `Hero/Label` (SubHero renamed to **Hero.Label**), and `CTA/Ghost`.
- Variants use properties such as `state=default|hover|focus|active|disabled|selected`, `size=sm|md|lg`, and `brand=AF|AV|AS|GAMES|OIA|SKB|MED|LABS` when brand-specific palettes apply.
- Token mapping: `Color/*`, `Text/*`, `Effect/Shadow/*`, `Effect/Focus/*`, `Radius/*`, `Space/*`, and breakpoint tokens (Desktop/Tablet/Mobile) guide all specs.

---

## 1. Navigation
**Component Name:** Global.Navigation (Desktop), Global.Navigation.MobileDrawer, Global.Navigation.Link, Global.Navigation.DrawerToggle

**Purpose:** Provide consistent top-level site navigation across breakpoints, including desktop bar and mobile drawer experiences.

**Anatomy:**
- Desktop: container, brand/logo slot, link group (primary links), auxiliary CTAs (optional), governance badge slot (where applicable).
- Mobile drawer: top bar (logo + drawer toggle), overlay, drawer panel, nav link list, optional CTA row, close affordance (toggle/overlay tap/Escape).
- Nav link: text label, optional icon/indicator, active underline/pill, focus outline.
- Drawer toggle button: hit target, icon (menu/close), focus ring.

**Variants:**
- Link variants: default, active/current, subdued/secondary.
- Drawer toggle: default, hover, focus, active.
- Brand accent overlays when page belongs to a specific brand (palette swap).

**States:** default, hover, focus, active/pressed, selected (current page), disabled (avoid; only for placeholder).

**Responsive Rules:**
- Desktop: horizontal bar with inline links and optional CTA; governance badge aligns to right cluster.
- Tablet: may reduce link count; overflow collapses into drawer toggle if space-constrained.
- Mobile: drawer-first; drawer locks scroll when open; links stack with comfortable spacing; CTA moves into drawer footer.

**Token Usage:**
- Colors: `Color/Core/Surface` for bar/drawer, `Color/Core/Text` for links, `Color/Brand/*` for accents/active states.
- Typography: `Text/Nav/Desktop|Mobile` tokens.
- Radii: `Radius/sm` for pills/active indicators, `Radius/md` for drawer container if needed.
- Spacing: `Space/8-16` for link gaps; `Space/24` for drawer padding.
- Shadow: `Effect/Shadow/Elevated.01-02` for drawer; focus uses `Effect/Focus/Outline`.

**Interaction Notes:**
- Hover tint + underline; focus outline; active uses pressed tint; selected persists indicator.
- Drawer opens via toggle; overlay click or Escape closes; nav selection closes drawer.

**Do / Don’t:**
- Do keep drawer overlay full-screen on mobile; do maintain 44px+ tap targets.
- Don’t mix two active indicators; don’t remove focus outlines.

**Cross-brand Behavior:**
- Accent color swaps to page brand palette; governance badge from Atlas-V appears where mandated (Home, Atlas-V, Media, OIA).

**Phase 6 References:** Interaction matrices (F8–F9), layout blueprints (F4), flow maps (F10) for drawer open/close and governance anchors.

---

## 2. Footer
**Component Name:** Global.Footer.Base, Global.Footer.LinkList, Global.Footer.SocialCluster

**Purpose:** Provide consistent footer navigation, governance touchpoints, and social links across brands.

**Anatomy:**
- Container with background surface, column grid.
- Link lists (stacked on mobile), CTA/footer note slot, social icon cluster.
- Optional governance badge/attribution row.

**Variants:** standard, dense (condensed spacing), brand-accent background.

**States:** links/icons follow nav link states (default, hover, focus, active); no disabled expected.

**Responsive Rules:**
- Desktop: multi-column lists; social cluster aligned right or bottom.
- Tablet: 2-column reduction.
- Mobile: single column stacked lists; social icons center aligned; padding increases for tap targets.

**Token Usage:**
- Colors: `Color/Core/Surface`, `Color/Core/Text.Muted`, `Color/Brand/*` accents.
- Typography: `Text/Body/Desktop|Mobile`, `Text/Caption` for fine print.
- Spacing: `Space/16-24` vertical rhythm; `Space/12` list gaps.
- Radius: `Radius/none-sm` if surface panels used.
- Shadow: optional `Effect/Shadow/Elevated.00-01` if lifted card variant is used.

**Interaction Notes:**
- Link hover/underline; focus outline on links and icons; social icons get tint.

**Do / Don’t:**
- Do keep contrast high for accessibility; do keep governance badge visible if present.
- Don’t reduce tap spacing on mobile; don’t hide social cluster on small screens.

**Cross-brand Behavior:**
- Palette accents shift per brand; Atlas-V governance badge consistent with nav usage.

**Phase 6 References:** Footer patterns in layout blueprints (F4) and mapping (F3); interaction specs in F8–F9.

---

## 3. Heroes
**Component Name:** Hero.Primary, Hero.BrandHero, Hero.Label (formerly SubHero)

**Purpose:** Lead page sections with headline, supporting copy, CTA cluster, and optional media or governance badge.

**Anatomy:**
- Container with background surface/image slot.
- Title (H1/Hero), Subtitle/Lead, Label (for Hero.Label), CTA cluster (primary/secondary/ghost), media/illustration slot, optional governance badge.

**Variants:** Primary (neutral/global), BrandHero (brand-accented), Label (compact secondary hero for subsections or pages).

**States:** CTAs follow CTA states; badge follows governance states; media is static for this spec.

**Responsive Rules:**
- Desktop: split layout (text + media) or full-bleed with content alignment per template; CTA cluster inline.
- Tablet: stack media below text; CTA cluster may wrap to two lines.
- Mobile: stacked text and CTAs; media shrinks to full width; maintain generous spacing.

**Token Usage:**
- Colors: `Color/Core/Surface` base, `Color/Brand/*` accents for BrandHero and labels; governance badge uses Atlas-V palette.
- Typography: `Text/Hero`, `Text/H1`, `Text/Body` tokens per breakpoint.
- Spacing: `Space/24-48` vertical rhythm; `Space/16-24` between title/subtitle/CTAs.
- Radius: `Radius/md-lg` for media or pill labels; `Radius/pill` for label chips.
- Shadow: optional `Effect/Shadow/Elevated.01-02` for media cards; focus uses `Effect/Focus/Outline` on CTAs.

**Interaction Notes:**
- CTA hover/focus/press per CTA component; badge tooltip on hover/focus; optional anchor scroll for governance link.

**Do / Don’t:**
- Do keep hierarchy clear (label → title → subtitle → CTAs); do align to grids from templates.
- Don’t overload with multiple competing CTAs; don’t omit focus styles.

**Cross-brand Behavior:**
- BrandHero adopts brand palette; governance badge appears on Home, Atlas-V, Media, OIA heroes per Phase 6 flows.

**Phase 6 References:** Layout blueprints (F4), wireframes (F5), template patterns (F6), interaction rules (F8–F9), flow maps (F10).

---

## 4. Headers & Section Wrappers
**Component Name:** Section.Header, Section.Wrapper

**Purpose:** Provide consistent section titles and container spacing to align with grid patterns and responsive behaviors.

**Anatomy:**
- Section.Header: label/chip (optional), title, subtitle/eyebrow, divider line (optional), action link (optional).
- Section.Wrapper: container frame with padding, max-width constraints, grid/stack layout slots.

**Variants:**
- Header sizes: default, compact, dense (for cards), and hero-aligned.
- Wrapper variants: standard grid (3→2→1), media-rich grid (4→2→1), list stack (2→1), full-bleed.

**States:** Headers are static; action links follow link states; wrappers hold child states via components inside.

**Responsive Rules:**
- Desktop: max-width align to template; headers align left or center per pattern.
- Tablet: padding adjusts down; grid columns reduce to 2.
- Mobile: single-column stack; increase vertical spacing for readability; headers center or left per template spec.

**Token Usage:**
- Colors: `Color/Core/Text` for titles; `Color/Core/Text.Muted` for subtitles.
- Typography: `Text/H2-H4` for titles, `Text/Body` for subtitles.
- Spacing: `Space/16-32` padding top/bottom; `Space/12-16` between header elements.
- Radius: align with child card/media radius; wrappers usually `Radius/none` or `Radius/sm` if panelized.
- Shadow: none by default; optional `Effect/Shadow/Elevated.00-01` for panel wrappers.

**Interaction Notes:**
- Action links: hover/underline, focus outline; otherwise static.

**Do / Don’t:**
- Do keep consistent padding per breakpoint; do align headers with grid start.
- Don’t mix multiple header sizes in the same section; don’t float actions without alignment.

**Cross-brand Behavior:**
- Label chips may pick brand palette if the section is brand-owned (e.g., Atlas-V governance block in Home).

**Phase 6 References:** Section patterns (F6), wireframes (F5), layout blueprints (F4).

---

## 5. CTAs
**Component Name:** CTA.Primary, CTA.Secondary, CTA.Ghost, CTA.Footer

**Purpose:** Drive user actions with consistent styling, states, and layout behaviors across all pages and brands.

**Anatomy:**
- Container/button, label text, optional leading/trailing icon, focus outline layer.

**Variants:**
- Size: sm, md (default), lg.
- Layout: single, paired stack, inline cluster.
- Brand accent variant for brand pages.

**States:** default, hover, focus, active/pressed, disabled.

**Responsive Rules:**
- Desktop: inline clusters; paired CTAs can sit side-by-side.
- Tablet: may wrap to two lines; preserve spacing.
- Mobile: stacked vertical CTAs with full-width options; maintain 44px+ height.

**Token Usage:**
- Colors: `Color/Brand/*` or `Color/Core/Action` for primary; `Color/Core/Border` for secondary; `Color/Core/Text` for ghost with hover tint.
- Typography: `Text/Button` tokens.
- Spacing: `Space/12-16` horizontal padding; `Space/8-12` vertical.
- Radius: `Radius/md` standard; `Radius/pill` optional variant.
- Shadow: `Effect/Shadow/Elevated.01` hover; `Effect/Shadow/Elevated.00` default; focus uses `Effect/Focus/Outline`.

**Interaction Notes:**
- Hover lift/tint; focus outline persists through press; disabled removes hover/press and reduces contrast.

**Do / Don’t:**
- Do keep label lengths concise; do preserve primary vs secondary hierarchy.
- Don’t mix more than two CTA weights in a single cluster; don’t remove focus states for icons.

**Cross-brand Behavior:**
- Palette swaps per brand; governance CTAs may use Atlas-V accent on relevant pages.

**Phase 6 References:** Interaction matrices (F8–F9), flow maps (F10), CTA placements in wireframes (F5) and templates (F6).

---

## 6. Lists
**Component Name:** List.Simple, List.Item, List.Accordion

**Purpose:** Present stacked information (features, playlists, admin rows) with optional expand/collapse behaviors.

**Anatomy:**
- Simple List: wrapper, list items, bullets/icons (optional), metadata row (optional).
- List.Item: title, description, meta/badge slot, optional action icon.
- Accordion: header (title, caret), content body, divider.

**Variants:**
- Dense vs relaxed spacing; with/without icons; accordion expanded/collapsed; selectable rows (for admin/audio contexts).

**States:** default, hover, focus, active/pressed, selected (if applicable), disabled (optional), expanded/collapsed (accordion).

**Responsive Rules:**
- Desktop: comfortable spacing; multi-line allowed; accordion content inline.
- Tablet: slight spacing reduction; caret size consistent.
- Mobile: full-width rows; tap targets enlarged; accordion content stacks with increased padding.

**Token Usage:**
- Colors: `Color/Core/Text`, `Color/Core/Text.Muted`, `Color/Core/Border` for dividers; brand accent for selected states when brand-owned.
- Typography: `Text/Body`, `Text/Caption` for metadata.
- Spacing: `Space/8-16` vertical item padding; `Space/12` row gaps.
- Radius: `Radius/sm-md` for selectable rows.
- Shadow: optional `Effect/Shadow/Elevated.00` for lifted list blocks.

**Interaction Notes:**
- Hover row highlight; focus outline on row; active press tint; accordion caret rotates on expand; selection persists accent.

**Do / Don’t:**
- Do keep caret touch targets large; do show clear expanded/collapsed affordances.
- Don’t hide focus outlines; don’t collapse content without padding.

**Cross-brand Behavior:**
- Brand accent applies when list is part of a brand section (e.g., SKB playlists, admin grids use neutral/brand tints).

**Phase 6 References:** Lists in wireframes/templates (F5–F6), interaction specs (F8–F9), admin/audio flows (F10).

---

## 7. Badges / Tags
**Component Name:** Status.Badge, Tag.Generic, Governance.Badge

**Purpose:** Convey status, categorization, and governance signals across the ecosystem.

**Anatomy:**
- Container pill, label text, optional icon/indicator, focus ring layer.

**Variants:**
- Status levels (info/success/warning/danger), generic tags, governance (Atlas-V) with tooltip affordance.
- Size: sm, md.

**States:** default, hover, focus, active (for clickable tags), selected (if toggle), disabled (rare), tooltip-open (governance).

**Responsive Rules:**
- Desktop: inline pills; tooltips on hover/focus.
- Tablet/Mobile: inline with increased padding; tooltip triggered by tap/focus; avoid hover reliance.

**Token Usage:**
- Colors: status mapped to `Color/Status/*`; governance uses `Color/Brand/AtlasV/*`; tags use neutral/core text and border tokens.
- Typography: `Text/Label` or `Text/Caption`.
- Spacing: `Space/8-12` horizontal padding; `Space/6-8` vertical.
- Radius: `Radius/pill` default.
- Shadow: none default; optional `Effect/Shadow/Elevated.00` when elevated.

**Interaction Notes:**
- Hover tint; focus outline; tooltip on governance badge triggered by hover/focus/tap per decision; active click may filter or open detail.

**Do / Don’t:**
- Do maintain high contrast for small text; do ensure tooltip is keyboard-triggerable.
- Don’t rely solely on hover for governance info; don’t shrink below legible padding.

**Cross-brand Behavior:**
- Status colors remain global; governance badge locked to Atlas-V palette; generic tags may adopt brand palette when section-owned.

**Phase 6 References:** Governance hooks in templates (F6), interaction matrices (F8–F9), flow maps (F10).

---

## Notes on Responsive & Breakpoint Alignment
- All components respect breakpoint tokens (Desktop, Tablet, Mobile) with grid degradations (3→2→1 or 2→1) inherited from Section.Wrapper usage.
- Tap targets on mobile maintain 44px minimum height; drawer overlays close on tap/Escape per Phase 6 interactions.
- Use F13 style names when instancing: e.g., `Color/Core/Surface.850`, `Text/H1/Desktop`, `Effect/Focus/Outline`, `Radius/md`, `Space/16`.

## Do / Don’t (Global)
- Do keep focus styles visible across all interactive components.
- Do map states to the Interaction State Matrix (F9) and flows (F10) when prototyping.
- Don’t introduce new visual values; defer to tokens and brand palettes from F1/F13.
- Don’t skip governance badges where canon requires them.

## Cross-References
- Phase 6: Tokens (F1), Components (F2), Mappings (F3), Layouts (F4), Wireframes (F5), Templates/Patterns (F6), Interactions (F8–F9), Flows (F10).
- Phase 7: Figma architecture (F12), style mapping (F13). These specs guide component construction in F14+ runs before POC builds.
