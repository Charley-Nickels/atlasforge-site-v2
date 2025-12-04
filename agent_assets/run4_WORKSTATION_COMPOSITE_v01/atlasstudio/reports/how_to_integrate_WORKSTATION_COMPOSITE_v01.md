
# Integration Guide – Workstation Composite v01

## Purpose

The composite PNGs serve as visual references. Codex must translate them into responsive HTML/CSS/JS components rather than using them as static images. The layered design informs how to structure the DOM and CSS.

## File Locations

- `atlasstudio/assets/workstation_v01/workstation_composite_desktop.png`
- `atlasstudio/assets/workstation_v01/workstation_composite_compact.png`
- Reports in `atlasstudio/reports/`

## Implementation Steps

1. **Base Layout:**
   - Create a root container with a dark background (#0B0E15).
   - Add a fixed top toolbar with a height of 60 px (50 px on small screens). Include the application title and a flex container for action buttons. Each button should use the actual icons from `ui_icons_v01` inside circular backgrounds with accent borders.

2. **Sidebar (File Tree):**
   - Build a vertical panel with a width of 240 px (or 180 px for compact). Use the header bar at the top (40 px height) labeled “File Explorer.”
   - Populate the list by parsing `project_tree.json` from `atlasstudio/data/filesystem_v01`. Render directories and files with indentation based on depth. Attach click handlers to load previews and update the editor panel.
   - Replace colored squares with the correct icons for each file type (.proj → project icon, .atlas → module icon, .json/.cfg → folder/document icons, .log → log icon, .png → generic asset icon).

3. **Editor Panel:**
   - Occupies remaining horizontal space between sidebar and chat panel. Add a header bar (40 px) to show the active file name. The main content area should scroll if the text exceeds the viewport.
   - When a file is selected, fetch the corresponding preview (or full file content) and display it. Use monospace or sans-serif fonts depending on file type. Highlight headings and lists.

4. **Atlas‑V Chat Panel:**
   - Position on the right with a width of 280 px (220 px in compact). Add a header bar labeled “Atlas‑V.”
   - Implement a scrolling message area with alternating bubble styles for user vs. Atlas‑V messages. Utilize the accent color (#50E3C2) for Atlas‑V messages and a purple tint for user messages.
   - Include an input bar at the bottom with a text field and send button. Connect this to the Atlas‑V backend once available.

5. **Glow Accents:**
   - Add thin glow lines at the top of each panel. Use CSS gradients or box-shadow filters to replicate the blurred teal bars. Keep opacity low.

6. **Responsive Adjustments:**
   - Use media queries to adjust sidebar and chat panel widths and toolbar height for narrow screens. Collapse or toggle panels as needed.

7. **Assets:**
   - Store all assets in `/atlasstudio/assets/workstation_v01/`. Do not embed the PNGs directly; instead, extract measurements and colors. The PNGs are for reference and QA.

## Notes

- Ensure interactive elements (buttons, file rows, chat input) have hover and active states that complement the dark theme and accent colors.
- Use CSS variables or a theme file to centralize colors, enabling easy updates if `theme_tokens_v02.json` becomes available.

