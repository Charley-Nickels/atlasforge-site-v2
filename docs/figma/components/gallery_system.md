# Gallery System Specification (F16)

## Purpose
Defines the shared gallery patterns across Games, OIA, and Media for Phase 7 Figma builds, aligning interaction states and responsive behavior with Phase 6 canon and Phase 7 token/style naming.

## Anatomy
- **Featured Frame**: primary preview area (image/video/visual frame) with optional caption.
- **Thumbnail Strip/Grid**: ordered thumbnails with labels or metadata.
- **Metadata Rail**: title, category/tag, optional description or stats.
- **Controls (Optional)**: previous/next affordance, play/pause for media, swipe hint.
- **Governance Hook (Optional)**: "Powered by Atlas-V" badge where required.

## Variants
- **Games.Gallery**: game cards feed thumbnails; featured frame shows screenshot; metadata includes title, genre, platform tags.
- **OIA.SpeciesGallery**: species thumbnails/panels; featured frame shows species art; metadata includes species name, habitat, lore stats.
- **Media.ArticleGallery**: article/episode thumbnails; featured frame shows cover art; metadata includes title, author, date/category.

## States
- **Default**: featured frame set; thumbnails unhighlighted except selected.
- **Hover**: thumbnail elevation/border emphasis; featured frame unchanged until selection.
- **Focus**: outline on thumbnail/control; respects focus tokens.
- **Active/Pressed**: tap/click applies thumbnail as featured; control press advances.
- **Selected**: persisted accent on active thumbnail; featured frame updated.
- **Disabled (if used)**: muted thumbnail/control; no state changes.

## Responsive Behavior
- **Desktop**: featured frame left or top; thumbnails as grid/rail (3–4 per row). Controls visible.
- **Tablet**: featured frame above; thumbnails 3→2 columns; controls sized up for touch.
- **Mobile**: vertical stack; thumbnails 2→1 column or horizontal scroll strip; tap-to-set featured; optional swipe gesture noted.

## Interaction Behavior
- Tap/click thumbnail sets featured frame; selected state persists.
- Optional swipe/drag for mobile carousels (decision hooks P6-F5-001/P6-F8-001/P6-F10-001).
- Keyboard: arrow/Tab to move focus; Enter/Space to set featured.
- Governance badge click navigates to Atlas-V safety detail when present.

## Token Usage
- **Color**: surface/background from Color/Core; brand accents per variant (Games vivid, OIA aquatic, Media neutral). State tokens for hover/focus/pressed.
- **Typography**: headings for titles (Text/Hx), body/caption for metadata (Text/Body/Text/Caption). 
- **Spacing**: grid gutters via spacing scale (8/12/16/24) matching 3→2→1, 2→1 behavior.
- **Radii**: thumb and frame corners use radius scale (sm/md); selected accent may use pill for badges.
- **Shadow**: Elevation tiers for featured frame and hover states (Effect/Shadow/Elevated.01–.03). 
- **Borders**: subtle border on thumbnails; accent border for selected.

## Notes for Prototype Builds
- Keep interactions non-functional but visually show state transitions.
- Include swipe hint overlays for mobile variants if gesture chosen.
- Support governance badge placement for cross-brand compliance where applicable.
