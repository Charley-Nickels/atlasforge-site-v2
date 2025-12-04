
# Workstation Slicing Guide

The composite images are layered mockups; Codex should slice them into reusable UI components. This guide outlines the key slices and their relationships.

## Panels and Slices

1. **Top Toolbar Component**
   - **Slice:** Entire width × 60 px (desktop) or 50 px (compact).
   - **Contains:**
     - Title text area (left)
     - Action button group (right) with four equal‑sized circular buttons, each 24 px in diameter with labels beside or below.
     - Accent glow strip (height ~6 px) at the very top. This can be implemented with a CSS gradient.
   - **Reuse:** This component should be reusable across pages (e.g., preferences, settings) with different button sets.

2. **Sidebar Component**
   - **Slice:** 240 px × (viewport height – toolbar height). For compact, 180 px width.
   - **Contains:**
     - Sidebar header (40 px height) labeled “File Explorer”.
     - Scrollable tree list beneath. Each row (24 px height) consists of:
       - An icon slot (16 px square) aligned left with a small margin.
       - File/directory name text.
       - Optional expand/collapse arrow for directories (not shown in mockup but should be implemented).
     - Section spacing (~4 px) between root directories.
   - **Style:** Dark panel background, with slightly lighter header bar and teal section titles. Use border radius on the outer corners only.

3. **Editor Panel Component**
   - **Slice:** Flexible width (remaining horizontal space) × (viewport height – toolbar height). 
   - **Contains:**
     - Editor header (40 px height) showing selected file name.
     - Content area with padding (10 px). Text flows downwards; implement scrollbars as needed. Use monospace for code or generative prompts, and proportional fonts for documentation.
     - Accent glow bar at top.
   - **Consider:** Tabbed navigation could be added later; allocate space in the header for tabs.

4. **Atlas‑V Chat Component**
   - **Slice:** 280 px (desktop) or 220 px (compact) × (viewport height – toolbar height).
   - **Contains:**
     - Chat header (40 px height) labeled “Atlas‑V”.
     - Message list with variable height bubbles. Use flex column for stacking.
     - Chat input bar (36 px height) anchored to bottom with padding.
   - **Bubble Specs:**
     - Padding: 8 px inside each bubble.
     - Margins: 10 px vertical spacing between bubbles.
     - Border radius: 4 px.
     - Outline: 1 px accent line for Atlas‑V bubbles; 1 px purple line for user bubbles.

## Extracting Colors and Measurements

From the PNGs, measure the following (approximate values):

- Background color: #0B0E15
- Panel backgrounds: #1A1D29 (toolbar), #111623 (sidebar), #131920 (editor), #141B27 (chat)
- Header color: #2C3245
- Accent color: #50E3C2 (teal)
- Secondary text: #96A0C8
- Primary text: #D0D9FF

Use these values as CSS variables or part of a theme file. Confirm exact values with the design system once available.

## Z‑Index and Shadows

- The toolbar sits on top (z‑index 10).
- Panels sit below it (z‑index 5), with chat panel on the far right. Use subtle box-shadows or glow effects only at the top edges.
- Avoid heavy drop shadows; rely on color contrast instead.

## Responsive Rules

- At widths below ~1024 px, reduce sidebar and chat panel widths and the toolbar height.
- At widths below ~768 px, consider collapsing the chat panel into a slide‑over drawer and overlaying the sidebar when invoked.

