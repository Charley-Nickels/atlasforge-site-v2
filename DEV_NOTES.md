# AtlasForge Site – Developer Notes

This repository hosts the static AtlasForge marketing shell plus lightweight demos: glow-themed product pages, the AtlasStudio workstation mock, Decision Console storyboard, and the Admin/Governance portal. Everything is front-end only (HTML/CSS/JS) and relies on shared theme tokens and glow utilities for visual consistency.

## Files to Know
- Theme & glow: `styles/theme.css`, `styles/main.css`, `styles/glow-pages.css`, token source `website/theme/theme_tokens_v02.json`.
- Home + product pages: `index.html`, `products/*.html`, styles in `styles/main.css` and `styles/products.css`, logic in `scripts/products.js`.
- AtlasStudio workstation: `atlasstudio.html`, styles in `styles/atlasstudio.css`, logic in `scripts/workstation.js`.
- Decision Console storyboard: `decisions.html`, styles in `styles/decision-console.css`, logic in `scripts/decision-console.js`.
- Admin / governance hub: `admin.html`, styles in `styles/admin.css`, logic in `scripts/admin.js`.
