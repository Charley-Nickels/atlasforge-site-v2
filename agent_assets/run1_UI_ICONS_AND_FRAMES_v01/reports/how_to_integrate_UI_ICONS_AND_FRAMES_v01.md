
# Integration Guide – UI Icons and Frames v01

## Icons

- **Location:** All icons reside in `atlasstudio/assets/ui_icons_v01/`.
- **Usage:** Each icon is an independent SVG with a 24×24 viewbox. Front‑end engineers can import them directly as inline SVGs or reference them as image sources. Because they are vector, CSS can override `fill` and `stroke` colors to adapt them to different themes or interactive states (hover, active, disabled).
- **Sizing:** Icons are designed at 24 × 24 px but scale cleanly. When using in buttons or lists, ensure equal padding around the icon (e.g., 4–6 px) to maintain legibility.

### Example (inline usage)

```html
<button class="icon-button">
  <img src="/atlasstudio/assets/ui_icons_v01/file_icon.svg" alt="File" />
</button>
```

Alternatively, embed the SVG directly and apply CSS classes to control colors:

```html
<svg class="icon file-icon">
  <!-- contents of file_icon.svg pasted here -->
</svg>
```

## Panel Frames

- **Location:** Frames live in `atlasstudio/assets/layout_mocks_v01/`.
- **Purpose:** These SVGs serve as visual scaffolding for the prototype. In Codex, you can set them as background images or embed them within the layout to establish panel boundaries.
- **Sizing:** The provided dimensions (e.g., 200×600 px for the sidebar) are suggestions. You may scale the SVGs to fit your responsive layout. Keep the 8 px corner radius and 2 px border stroke for visual consistency.

### Example (background usage)

```css
.sidebar {
  background-image: url('/atlasstudio/assets/layout_mocks_v01/main_sidebar_frame.svg');
  background-size: cover;
  width: 200px;
}
```

### Layering

- The header portion in each panel frame uses a lighter shade to denote titles or toolbars. When layering interactive components inside, ensure there is sufficient contrast.

## Development Notes

- Place the `atlasstudio` folder in your project’s static or public assets directory.
- Maintain the folder structure so that relative paths remain valid.
- When customizing colors, modify the SVGs or apply CSS filters rather than editing the originals. This preserves the master files for reuse in different themes.
