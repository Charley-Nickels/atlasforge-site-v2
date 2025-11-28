# Audio List System Specification (F16)

## Purpose
Defines the SKB audio list interactions and visuals for track rows and playlist rows in Phase 7 Figma builds, aligning with Phase 6 interaction matrices and token usage.

## Anatomy
- **Track Row Container**
- **Play/Pause Icon** (primary affordance)
- **Title + Artist/Track Metadata**
- **Duration or Progress Indicator (optional)**
- **State Badge** (playing/paused/disabled)
- **CTA/Context Menu (optional)**

## Variants
- **TrackRow**: single track entry, minimal metadata.
- **PlaylistRow**: track entry with playlist/group context and optional order indicator.
- **Density**: compact vs standard spacing.

## States
- **Default**: neutral row with play icon visible.
- **Hover**: row highlight; play icon emphasis.
- **Focus**: outline ring on row or play icon per focus token.
- **Active/Playing**: badge indicates playing; icon swaps to pause; optional progress accent.
- **Disabled**: muted text/icon; no hover/press.
- **Selected (optional)**: persisted highlight if selection is supported.

## Responsive Rules
- **Desktop**: rows in columns or full-width list; icon and metadata inline.
- **Tablet**: slightly increased spacing; metadata wraps; icon remains leading.
- **Mobile**: stacked metadata; icon leading; tap-to-play; generous hit area.

## Interaction Flow Guidance
- Tap/click play icon or row to toggle play/pause.
- Keyboard: focus row/icon; Enter/Space toggles play.
- Only one active row in a list plays at a time; activating a new row deselects previous.

## Token Usage
- **Color**: surface and accent align to SKB brand palette; hover/focus/active from state tokens.
- **Typography**: title uses Text/Body; metadata uses Text/Caption; optional mono for duration.
- **Spacing**: row padding from spacing scale (8/12/16); list gutters consistent with 3→2→1 → 2→1 stacks.
- **Radii**: row corners use radius sm/md; badges may use pill.
- **Shadow**: minimal or none by default; hover may use Elevation.01.
- **Borders**: subtle divider or row outline when focused/selected.

## Notes for Prototype Builds
- Simulate play/pause icon swap and badge change; no real audio.
- Ensure minimum tap targets for mobile; show active row persistence.
- Keep single-active-row rule visible in prototype notes.
