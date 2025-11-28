# Phase 7 — AtlasStudio Component Specifications (Run F17)

This document defines the AtlasStudio-specific component set for Figma construction. All specs align with Phase 6 canon (tokens, wireframes, interaction matrices, flow maps) and Phase 7 Figma rules (F12–F16 token/style schemas). Visual styling must derive from tokens only; no new values are introduced.

## Naming & Token References
- Component names follow `AS/<Component>/<Variant>` (e.g., `AS/Tab/Primary`, `AS/Drawer/FullHeight`).
- Variants use properties such as `state=default|hover|focus|active|selected|disabled`, `size=sm|md|lg`, and `mode=desktop|tablet|mobile` where applicable.
- Token mapping: `Color/*`, `Text/*` (including mono for console), `Effect/Shadow/*`, `Effect/Focus/*`, `Radius/*`, `Space/*`, and breakpoint tokens (Desktop/Tablet/Mobile) guide all specs.

---

## 1. Tab System — `AS/Tab`
**Purpose:** Let users switch playground contexts (Game/Excel/Policy/Writing/Web) and anchor the main AtlasStudio shell.

**Anatomy:**
- Tab container (rail/background surface)
- Label (text)
- State indicator strip (accent underline/pill)
- Optional icon slot

**Variants:** default, hover, focus, active/selected, disabled; scrollable rail variant for mobile when tabs overflow.

**States:** default (muted), hover (tint/elevation), focus (outline), active/selected (accent + indicator), disabled (muted, no hover).

**Responsive Rules:**
- Desktop/Tablet: full-width tab rail; indicator sized to label width with padding.
- Mobile: horizontal scrollable rail; ensure 44px+ tap targets; indicator scales to label.

**Token Usage:**
- Color: core surface for rail; brand accent for active indicator; neutral text for default; brand text accent for selected.
- Typography: `Text/Nav` or `Text/Label` tokens; consistent weight across breakpoints.
- Spacing: `Space/8-16` horizontal padding; `Space/8` between tabs.
- Radius: `Radius/sm` for indicator pill (if pill style); `Radius/md` for rail edges when floating.
- Shadow/Focus: `Effect/Shadow/Elevated.01` for raised hover (optional); `Effect/Focus/Outline` for focus state.

**Interaction Notes:** Click/tap selects panel; focus follows keyboard tab order; indicator persists on selected tab. Hover not expected on mobile.

**Do / Don’t:**
- Do keep rail scrollable on mobile; do maintain visible selected indicator.
- Don’t mix two active indicators; don’t remove focus outlines.

**Cross-brand Behavior:** Palette remains AtlasStudio ember/amber; governance badges do not appear here.

**References:** Phase 6 interaction matrix (F8–F9), flows (F10), wireframes (F5), and pattern naming from F6.

---

## 2. Panel System — `AS/Panel`
**Purpose:** Provide content surfaces aligned to tab context (main, settings, help/FAQ).

**Anatomy:**
- Panel container (surface)
- Content region (flexible slots for text, cards, or diagrams)

**Variants:** Main panel, Settings panel, Help/FAQ panel; density options (standard/compact) when embedded in shell.

**States:** default (visible), focus (when keyboard navigated), hidden (unmounted) when not selected.

**Responsive Rules:**
- Desktop/Tablet: retains padding scale; can align side-by-side with console depending on template.
- Mobile: stacked panels; reduced padding; avoid side-by-side placements.

**Token Usage:**
- Color: surface tokens for container; text/body tokens for content.
- Typography: `Text/Body` and `Text/Caption` for secondary notes.
- Spacing: `Space/16-24` padding (desktop), `Space/12-16` (tablet), `Space/8-12` (mobile).
- Radius/Shadow: `Radius/md` container; `Effect/Shadow/Elevated.01` optional for floating panels.
- Focus: `Effect/Focus/Outline` for keyboard focus.

**Interaction Notes:** Panel visibility tied to selected tab; may host CTA buttons using CTA specs; ensure focus order enters panel content after tab selection.

**Do / Don’t:**
- Do keep padding consistent with token scales; do allow panel swapping without layout shift.
- Don’t animate panel swaps beyond basic fade/instant; avoid nested scrollbars where possible.

**Cross-brand Behavior:** Uses AtlasStudio palette; neutral surfaces acceptable for embedded governance references.

**References:** Phase 6 layouts (F4), wireframes (F5), and template mapping (F6).

---

## 3. Console Viewport — `AS/Console`
**Purpose:** Present pseudo-code/system output with scrollable viewport for the playground.

**Anatomy:**
- Container (surface/background)
- Scroll region
- Text region (monospace)
- Optional header/status bar (optional, tokenized)

**Variants:** Full code view, System output view, Lesson/step view.

**States:** default; focus (outline); optional "typing" pseudo-state (pending decision); active scroll.

**Responsive Rules:**
- Desktop: multi-line view; generous padding.
- Tablet: reduced padding and font size if needed.
- Mobile: condensed padding and font size; may cap max-height with scroll.

**Token Usage:**
- Color: dark or neutral surface; text uses `Text/Mono` tokens; highlights use accent brand tokens sparingly.
- Typography: `Text/Mono/Body` scales per breakpoint.
- Spacing: `Space/16-24` padding desktop, `Space/12-16` tablet, `Space/8-12` mobile.
- Radius/Shadow: `Radius/md` container; `Effect/Shadow/Elevated.01-02` optional for depth.
- Focus: `Effect/Focus/Outline` on container.

**Interaction Notes:** Scrollable region; focus is keyboard accessible; optional caret blink/typing animation remains pending (see P6-F17-002).

**Do / Don’t:**
- Do ensure contrast for monospace text; do maintain scroll affordance.
- Don’t simulate actual code execution; don’t remove focus outline.

**Cross-brand Behavior:** AtlasStudio palette; can reference Atlas-V accents when showing governance snippets.

**References:** Interaction blueprints (F8), state matrix (F9), flow maps (F10), Figma style mapping (F13).

---

## 4. Drawer System — `AS/Drawer`
**Purpose:** Host task lists, metadata, and supporting controls alongside the playground.

**Anatomy:**
- Drawer container
- Handle/toggle
- Overlay (tablet/mobile)
- Task list (items with title, metadata, status)
- Optional CTA/filters row

**Variants:** Full height; Minimized/peek (pending decision P6-F17-001); Right-side default, can flip side if required by layout.

**States:** default closed; hover on toggle; focus outline on toggle; active/open; selected task; disabled (avoid).

**Responsive Rules:**
- Desktop: docked side drawer; non-blocking.
- Tablet: narrower drawer; overlay optional.
- Mobile: overlay slide-in; closes on overlay tap or Escape; tasks stack vertically.

**Token Usage:**
- Color: surface tokens for container; accent for selected task; muted text for metadata.
- Typography: `Text/Body` and `Text/Label` for items; `Text/Caption` for metadata.
- Spacing: `Space/16-20` padding; `Space/12` between tasks.
- Radius/Shadow: `Radius/md` container; `Effect/Shadow/Elevated.02-03` for overlayed drawer; focus outline on toggle using `Effect/Focus/Outline`.

**Interaction Notes:** Toggle opens/closes; drawer closes on overlay tap or Escape; task selection uses card/list states; minimized variant requires explicit decision before build.

**Do / Don’t:**
- Do ensure 44px+ tap targets; do lock scroll when overlayed on mobile.
- Don’t overlap console content; don’t hide close control.

**Cross-brand Behavior:** AtlasStudio palette; may show Atlas-V governance references if tasks involve governance flows.

**References:** Wireframes (F5), layouts (F4), interaction matrix (F9), flows (F10), decisions P6-F5-004 and P6-F17-001.

---

## 5. Ghost Sidecar — `AS/GhostSidecar`
**Purpose:** Provide a supportive ghost/coach output panel that cycles snippets alongside console output.

**Anatomy:**
- Container (surface)
- Text snippet region
- State indicator dot or strip

**Variants:** Collapsed (default), Expanded, Multi-snippet.

**States:** default; hover/focus; active (next snippet displayed); disabled (avoid).

**Responsive Rules:**
- Desktop: floats beside console/drawer; can be narrow column.
- Tablet: collapses width; may stack under console.
- Mobile: appears as a collapsible block below console; tap to expand.

**Token Usage:**
- Color: surface neutral; indicator uses accent; text uses body tokens.
- Typography: `Text/Body`/`Text/Caption` for small notes.
- Spacing: `Space/12-16` padding; `Space/8-12` between snippets.
- Radius/Shadow: `Radius/md` container; `Effect/Shadow/Elevated.01` optional.
- Focus: `Effect/Focus/Outline` on container when interactive.

**Interaction Notes:** Tap/hover cycles snippet; no free typing; automatic cycling decision pending (P6-F17-003).

**Do / Don’t:**
- Do keep copy concise; do allow quick dismiss/close if expanded.
- Don’t animate heavily; don’t compete visually with console.

**Cross-brand Behavior:** Stays AtlasStudio; can nod to Atlas-V when referencing governance guidance.

**References:** Interaction blueprints (F8), state matrix (F9), flows (F10), decision hooks (P6-F17-003).

---

## 6. Playground Shell — `AS/PlaygroundShell`
**Purpose:** System-level composition combining tabs, panels, console, drawer, and ghost sidecar into a master component for AtlasStudio playground POC.

**Anatomy:**
- Shell container (auto-layout frame)
- Tab System
- Panel System (content slot)
- Console Viewport
- Drawer System
- Ghost Sidecar

**Variants:**
- Layout modes: Desktop, Tablet, Mobile.
- Drawer mode: open/closed; minimized (pending decision P6-F17-001).
- Console mode: typing pseudo-state optional (P6-F17-002).
- Sidecar mode: collapsed/expanded.

**States:** Inherits from child components; shell itself has arrangement states (drawer open vs closed, sidecar collapsed vs expanded).

**Responsive Rules:**
- Desktop: full shell; tab rail top; console + sidecar visible; drawer docked.
- Tablet: compressed shell; tab rail smaller; drawer narrower with overlay option; sidecar condensed.
- Mobile: stacked layout; scroll through tab rail, panels, console; drawer becomes overlay; sidecar collapses below console.

**Token Usage:**
- All colors/typography/radii/spacing/shadows derived from AtlasStudio tokens; governance accents from Atlas-V only when surfaced intentionally.
- Apply spacing tokens to frame gutters; maintain consistent radii across nested components; shadows limited to drawers/overlays.

**Interaction Notes:**
- Tab selection swaps panels; console scrolls; drawer toggle affects overlay; sidecar cycles on tap; shell must preserve focus order top→bottom.
- Pseudo-typing optional; minimized drawer state pending; automatic sidecar cycling pending.

**Do / Don’t:**
- Do keep shell fully auto-layouted and detach-friendly for POC prototypes.
- Don’t hardcode pixel values; don’t diverge from token palette.

**Cross-brand Behavior:** AtlasStudio primary; cross-brand callouts (Atlas-V) allowed in content, not in component chrome.

**References:** Phase 6 wireframes (F5), layouts (F4), interaction blueprints (F8), state matrix (F9), flow maps (F10), pattern templates (F6), and run plan (F12–F16).

---

## Decision Hooks (F17)
- **P6-F17-001:** Confirm minimized/peek drawer variant is required; otherwise use full-height only.
- **P6-F17-002:** Decide whether console includes typing cursor/animation in Figma prototypes.
- **P6-F17-003:** Determine if ghost sidecar cycles snippets automatically or only via tap/hover.

