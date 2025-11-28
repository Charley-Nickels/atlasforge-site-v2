# Accessibility Spec — Phase 6 Run F5

## Global Expectations
- **Keyboard Navigability**: Tab order follows document flow (header → main → footer). Skip-link optional for future build. All interactive items reachable without pointer.
- **Focus Visibility**: Every interactive element requires a clear focus indicator distinct from hover; leverage focus tokens (outline/halo) with adequate contrast against backgrounds.
- **Target Size**: Buttons, nav items, cards, pills, and controls should meet minimum comfortable touch target (approx. 44x44px equivalent) even if visually minimal.
- **Contrast**: Text, icons, and focus indicators must meet accessibility contrast targets based on tokenized color pairs; avoid relying solely on color for state changes.
- **ARIA & Semantics**: Real implementations should apply appropriate roles/labels (e.g., `nav`, `header`, `main`, `footer`, `button`, `link`, `list`, `region`). Decorative elements marked presentational.
- **Motion Sensitivity**: Keep motion subtle and honor prefers-reduced-motion; Figma prototypes should note non-essential animations as optional.

## Component-Level Guidance

### Buttons
- **Focus**: Visible ring/outline using focus tokens; should not be suppressed by hover. Maintain shape clarity (radius).
- **Hover vs Focus**: Hover may adjust fill/shadow; focus retains ring even if hover occurs simultaneously.
- **Semantics**: Use `<button>` semantics; label text reflects action. Disabled buttons should be non-focusable.
- **Screen Readers**: Announce action clearly (e.g., “Primary action: Start”). Footer CTAs inherit same rules.

### Navigation
- **Focus**: Each nav link receives focus outline/underline; active page indicated non-color method (underline/shape).
- **Keyboard**: Drawer links follow list order; Escape closes drawer in eventual implementation. Tab index linear.
- **Semantics**: Use `<nav>` landmarks; mobile drawer identified as navigation region; include menu toggle button label.

### Cards (Product, Game, Media, Labs, Audio/SKB, Concept Vault)
- **Focus**: Entire card focusable when acting as a single link; ring should not obscure content. If multiple controls exist inside, card container should be `role="group"` with nested tab stops.
- **Hover vs Focus**: Hover handles lift/overlay; focus emphasizes outline; active compresses. Ensure overlay colors maintain contrast.
- **Semantics**: Title + short description exposed for assistive tech; badges announced as supplementary.

### Lists and Grids (Feature lists, Stack diagrams, Concept vault lists)
- **Focus**: Focus ring on interactive rows/tiles. Non-interactive text remains plain.
- **Semantics**: Use `<ul>/<ol>` with `<li>` for lists; grids may use list semantics unless advanced keyboard navigation is added.

### Badges / Tags / Pills
- **Focus**: Only focusable if interactive (filters). Provide ring/outline and ARIA pressed state when toggled.
- **Semantics**: Use `role="button"` for toggles; non-interactive badges remain `<span>`.

### Screenshot Galleries
- **Focus**: Thumbnail focus rings with unobstructed imagery; overlay labels remain readable.
- **Semantics**: Treat as list of links/buttons. Include alt text for images in implementation.

### Audio Lists
- **Focus**: Row focus ring and distinct focus for play icons. Avoid focus trapping.
- **Semantics**: Rows as list items; play/stop buttons with aria-labels describing track.

### Placeholder Blocks
- **Focus**: Only focusable if they trigger actions; otherwise decorative. If focusable, provide ring and descriptive label (e.g., “Placeholder content coming soon”).

### Console / Playground Elements (AtlasStudio, Admin)
- **Focus**: Tab order must move from tabs → console output region → controls. Console region treated as `role="region"` with descriptive label.
- **Hover vs Focus**: Hover may tint edges; focus shows ring. Active may simulate keypress.
- **Semantics**: Tabs announced with selected state; console output marked as read-only.

## Page-Level Notes

### Home
- **Landmarks**: Header/nav, main, footer. Hero heading is H1. Brand strip badges read as list.
- **Focus Considerations**: Gallery tiles and CTA pairs need consistent rings; ensure brand strip badges are skippable if non-interactive.

### Atlas-V
- **Landmarks**: Header/nav, main, footer. Workflow and governance sections treated as grouped regions for comprehension.
- **Focus Considerations**: Diagram blocks and governance badges must keep contrast on focus outlines over dark/light surfaces.

### AtlasStudio
- **Landmarks**: Header/nav, main, footer. Playground shell includes tablist (tab roles), console region, sidebar controls.
- **Focus Considerations**: Preserve tab order; tab selection state exposed; console scroll area focusable for screen readers; avoid hover-only cues for ghost console text.

### Games
- **Landmarks**: Header/nav, main, footer. Catalog grid as list of games.
- **Focus Considerations**: Game cards keep outline clear over cover art; concept vault tiles provide textual alt summary.

### OIA
- **Landmarks**: Header/nav, main, footer. Species panels and gallery sections grouped as regions.
- **Focus Considerations**: Gallery overlays remain legible; badges maintain focus contrast over imagery.

### SKB
- **Landmarks**: Header/nav, main, footer. Track lists/playlists as ordered content.
- **Focus Considerations**: Audio controls require clear focus indicator and aria-labels for play/pause; playlist rows maintain spacing for touch.

### Media
- **Landmarks**: Header/nav, main, footer. Media pillars/articles/episodes structured as lists.
- **Focus Considerations**: Overlay hovers must not hide focus rings; tag pills announce filter state if interactive.

### Labs
- **Landmarks**: Header/nav, main, footer. Experiment cards + category grids grouped for readability.
- **Focus Considerations**: Accent stripes should not overpower focus rings; hover motion restrained for reduced-motion preference.

### About
- **Landmarks**: Header/nav, main, footer. Navigation guide/values sections as lists/regions.
- **Focus Considerations**: CTA focus ring required; list hover tints must not mask focus.

### Admin / Decisions Console
- **Landmarks**: Header/nav, main, footer. Controls panel and decision grid marked as regions.
- **Focus Considerations**: Export controls clearly focusable; decision rows maintain outline while selected; avoid color-only state cues; announce decision status via text.
