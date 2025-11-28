# Governance Modules Specification (F16)

## Purpose
Define Atlas-V governance badges and cards for consistent safety messaging across brands, aligning placement rules, interaction states, and token usage for Phase 7 Figma builds.

## Anatomy
- **Badge Core**: label text + icon (optional).
- **Tooltip Layer**: description and link target to safety details.
- **Link Target**: CTA or anchor to Atlas-V governance content.
- **Governance Card** (variant): badge header, title, summary copy, supporting link/CTA.

## Variants
- **Badge.Small**: compact pill for inline use (nav/hero/footer overlays).
- **Badge.Large**: larger pill or chip for section headers/hero overlays.
- **Governance.Card**: block-level card with badge + body copy + CTA.

## States
- **Default**: visible badge; tooltip closed.
- **Hover**: tint/elevation; tooltip may appear on hover (desktop only, pending decision).
- **Focus**: outline ring; tooltip opens on focus when specified.
- **Active/Pressed**: click/tap opens linked governance detail.
- **Tooltip-Open**: tooltip visible with description + CTA.
- **Disabled (rare)**: muted badge; tooltip suppressed.

## Placement Rules
- Appear in hero and footer for Atlas-V; mirrored placements on Home, Media, OIA per Phase 6 patterns.
- Maintain consistent offset/alignment relative to headers/CTA clusters.
- Avoid crowding primary CTAs; keep focus order logical.

## Cross-Brand Usage
- Atlas-V primary; other brands show "Powered by Atlas-V" badge with same states.
- Colors shift to brand-accent outline while badge interior remains governance-neutral for clarity.

## Tooltip Trigger Rules
- Default: focus/tap opens; hover optional (decision P6-F11-002 + prior P6-F8-004/P6-F10-004 alignment).
- Tooltip closes on blur, Escape, or tap outside; mobile uses tap-to-dismiss.

## Token Usage
- **Color**: governance neutral base; Atlas-V accent for outlines; brand accent border when embedded elsewhere.
- **Typography**: label uses Text/Label or Text/Caption; card uses Text/Body for description.
- **Spacing**: pill padding from spacing scale (8/12); card padding standard section spacing (16/24).
- **Radii**: badge pill uses radius=pill; cards use md/lg.
- **Shadow**: subtle Elevation.01 for hover/focus; cards may use Elevation.02.
- **Border**: accent border for default/selected; focus outline per token.

## Notes for Prototype Builds
- Simulate tooltip open/close and link target handoff; no actual navigation required.
- Preserve badge visibility in all breakpoints; avoid hiding on mobile.
- Align with P6-F5-003 for consistent placement across hero/footer contexts.
