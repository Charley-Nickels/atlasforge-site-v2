# Interaction States — Phase 6 Run F5

## Global Components

### Buttons
#### Primary CTA
- **States**: Default (solid fill), Hover (mild lift + brighter tint), Focus (outline emphasis using focus token), Active/Pressed (compressed elevation with stronger tint), Disabled (lower contrast, no hover/press response).
- **Behavior**: Hover from pointer; focus from keyboard/tab; press on mousedown/touchstart with quick rebound; disabled ignores pointer/keyboard. Keep hit area generous.
- **Token Hooks**: Color (action/primary + focus ring), Spacing (button padding), Radii (core radius scale), Shadows (elevation steps), Typography (CTA text weight/size).

#### Secondary CTA
- **States**: Default (outline or soft fill), Hover (border/label emphasis), Focus (focus ring), Active (subtle fill shift), Disabled (muted border/text).
- **Behavior**: Same triggers as Primary; ensures contrast between hover vs focus.
- **Token Hooks**: Color (secondary stroke/fill + focus), Spacing, Radii, Shadows (lighter), Typography.

#### Ghost / Minimal
- **States**: Default (transparent background), Hover (light surface tint), Focus (ring/underline), Active (slightly darker tint), Disabled (reduced text contrast).
- **Behavior**: Preserve low visual weight; avoid strong elevation.
- **Token Hooks**: Color (surface tint + text), Radii (match buttons), Spacing, Shadows (none or hairline), Typography.

#### Footer CTA
- **States**: Default (footer-friendly contrast), Hover (text/border emphasis), Focus (clear outline), Active (tint), Disabled (muted, non-interactive).
- **Behavior**: Optimized for dark/light footer contexts; spacing matches footer rhythm.
- **Token Hooks**: Color (footer surface + CTA), Spacing, Radii, Shadows (minimal), Typography.

### Navigation
#### Desktop Top Nav Links
- **States**: Default (link color), Hover (underline or tint), Focus (focus outline or underline persistence), Active (current-page indicator), Disabled (rare; treat as inactive text).
- **Behavior**: Hover via pointer; focus visible for keyboard; active state driven by page context.
- **Token Hooks**: Color (nav text/active), Spacing (link padding), Typography (nav weight/size), Motion (optional underline ease), Surface (header background), Shadows (header drop if sticky).

#### Mobile Nav / Drawer Links
- **States**: Default (list items), Hover (tint for pointer devices), Focus (focus ring), Active (current page highlight), Disabled (not typical).
- **Behavior**: Drawer open/close handled by existing scripts; focus order follows list; tap targets generous.
- **Token Hooks**: Color (drawer surface + text), Spacing (vertical padding), Radii (drawer corners if used), Typography, Shadows (drawer overlay/elevation), Motion (slide/fade cues).

#### Active State Indicators
- **States**: Default (inactive), Active (highlighted link/pill), Focus (ring plus active highlight), Disabled (none).
- **Behavior**: Applied to nav links, tabs, or pills to denote current context; should be perceivable without hover.
- **Token Hooks**: Color (active fill/stroke), Radii (pill/underline shapes), Shadows (optional glow), Typography.

### Cards
#### Product/Tool Cards
- **States**: Default (neutral surface), Hover (slight lift + border/halo), Focus (focus ring distinct from hover), Active (press depth), Disabled (dimmed, non-pressable if used).
- **Behavior**: Hover for pointer; keyboard focus moves card; clicking entire card treated as primary action if enabled.
- **Token Hooks**: Surface (card base), Shadows (elevation tiers), Radii (card corners), Color (borders/highlights), Typography (title/eyebrow), Spacing (padding/gaps).

#### Game Cards
- **States**: Default (cover art emphasis), Hover (zoom/tint overlay), Focus (outline that respects art), Active (press depth), Disabled (grayed, no lift).
- **Behavior**: Hover accentuates imagery; maintain legibility of labels/badges.
- **Token Hooks**: Color (overlay), Shadows, Radii, Motion (subtle scale), Typography, Surface.

#### Media Cards
- **States**: Default (thumbnail + text), Hover (overlay or border pop), Focus (clear ring), Active (slight press), Disabled (muted thumbnail/text).
- **Behavior**: Hover reveals affordance; focus ring should not obscure thumbnail.
- **Token Hooks**: Color, Surface, Shadows, Radii, Typography, Motion (fade-in overlay).

#### Labs Cards
- **States**: Default (neutral), Hover (lift + accent stripe), Focus (outline), Active (press), Disabled (muted, inactive).
- **Behavior**: Communicate experimental tone via accent stripe; keep hover playful but light.
- **Token Hooks**: Color (accent stripe), Surface, Shadows, Radii, Typography, Spacing.

#### Audio/SKB Cards
- **States**: Default (track info), Hover (background tint + icon emphasis), Focus (ring), Active (pressed + icon change), Disabled (dimmed text/icons).
- **Behavior**: Hover/focus should reveal play intent; pressing could swap icon in prototypes.
- **Token Hooks**: Color (audio accent), Surface, Radii, Typography, Shadows (minimal), Motion (icon nudge).

#### Concept Vault Entries
- **States**: Default (stacked content), Hover (lift + border glow), Focus (ring), Active (press depth), Disabled (muted if used).
- **Behavior**: Highlight selection potential; maintain clarity for dense content.
- **Token Hooks**: Surface, Shadows, Radii, Color (glow/border), Typography, Spacing.

### Lists and Grids
#### Feature Lists
- **States**: Default (bulleted items), Hover (text tint or icon accent), Focus (outline on interactive row), Active (pressed row if clickable), Disabled (grayed if non-active).
- **Behavior**: Most list items are static; clickable rows need focus/hover parity.
- **Token Hooks**: Color (text + icons), Spacing (row padding), Typography, Radii (if pill-like), Shadows (minimal).

#### Stack Diagram Blocks
- **States**: Default (stack card), Hover (subtle lift), Focus (outline), Active (press), Disabled (muted overlay if used).
- **Behavior**: Emphasize layered stack metaphor without heavy motion.
- **Token Hooks**: Surface, Color (lines/borders), Shadows, Radii, Typography.

#### Concept Vault Lists
- **States**: Default (list rows), Hover (row tint), Focus (ring on row), Active (press depth), Disabled (muted text).
- **Behavior**: Rows may link to vault entries; preserve generous spacing for tap targets.
- **Token Hooks**: Surface, Color, Spacing, Typography, Radii.

### Badges / Status Chips
- **States**: Default (solid or outline), Hover (slight tint), Focus (ring), Active (pressed if clickable), Disabled (low contrast).
- **Behavior**: Primarily informational; if interactive, treat as filter pills with clear focus.
- **Token Hooks**: Color (fill/stroke/text), Radii (pill shape), Spacing (padding), Typography (label), Shadows (optional tiny).

### Tags / Pills
- **States**: Default, Hover (tint), Focus (ring), Active (pressed), Disabled (muted).
- **Behavior**: Similar to badges; if selectable, include active style distinct from hover.
- **Token Hooks**: Color, Radii, Spacing, Typography, Shadows.

### Screenshot Galleries
- **States**: Default (thumb), Hover (overlay + zoom hint), Focus (ring), Active (pressed), Disabled (not typical).
- **Behavior**: Hover/focus reveals view intent; maintain aspect integrity.
- **Token Hooks**: Color (overlay), Motion (scale), Shadows, Radii, Surface.

### Audio Lists
- **States**: Default (track row), Hover (row tint + icon emphasis), Focus (ring), Active (pressed + icon change), Disabled (dimmed text/icons).
- **Behavior**: Keep play icon focusable; avoid over-animation.
- **Token Hooks**: Color (audio accent), Typography, Spacing, Surface, Radii, Motion (icon nudge).

### Placeholder Blocks
- **States**: Default (neutral), Hover (light tint), Focus (ring), Active (pressed if interactive), Disabled (static/ghosted).
- **Behavior**: Communicate placeholder status without overpowering page.
- **Token Hooks**: Surface, Color (tint), Radii, Shadows (minimal), Spacing.

## Per-Page Interaction Highlights

- **Home**: Hero CTAs follow primary/secondary patterns; feature lists and stack diagram blocks use hover lift; screenshot/gallery tiles use overlay hover; badges for brand strips; footer CTA uses footer rules.
- **Atlas-V**: Navigation/CTA standard; workflow diagram blocks get hover emphasis; governance/safety blocks use badge/tag focus; cards remain selectable with glow emphasis.
- **AtlasStudio**: Playground shell includes tab rail (hover/active pill), ghost console output (non-editable but scrollable feel), task drawer buttons (secondary/ghost), Cozy sidebar cards with hover lift; keep focus sequencing from tab rail → console → sidebar controls.
- **Games**: Game cards emphasize cover hover; concept vault tiles lift with border glow; CTA buttons follow primary/secondary; gallery tiles support overlay hover.
- **OIA**: Hero CTA standard; species intro panels lift on hover; screenshot gallery uses overlay hover; status/badge chips highlight on hover/focus.
- **SKB**: Track cards respond with tint/lift; playlist lists offer row hover; audio controls follow audio card states; CTAs standard.
- **Media**: Media pillar cards and article/episode cards highlight with overlay or border pop; tag pills interactive if filters are added; CTAs follow defaults.
- **Labs**: Experiment cards playful lift with accent stripe; category grids tint on hover; concept chips/badges minimal hover.
- **About**: Mostly informational; CTA buttons standard; navigation guide list may use row hover tints; minimal motion.
- **Admin / Decisions Console**: Export/controls cards keep focus clarity; decision grid rows highlight on hover; badges indicate status; maintain strong focus outlines for keyboard.
