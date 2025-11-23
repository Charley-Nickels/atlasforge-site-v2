# AtlasForge Interactive — Site V2 Canon
Version: 1.0.0  
Status: Canonized

This document defines the official canon for the AtlasForge Interactive website (V2), including brand rules, folder structure, and development guidelines. All future updates to the site should align with this document unless explicitly revised.

---

## 1. PURPOSE
AtlasForge Interactive Site V2 is the public-facing studio website for:

- AtlasForge Interactive (studio)
- Atlas-V (engine)
- AtlasStudio (workstation)
- Octopus in Action (flagship game)
- Future prototypes and internal tools

The site must remain professional, clean, premium, and easy to extend.

---

## 2. BRAND CANON

### 2.1 Official Colors
Deep Navy Base: #0B0E17
Soft Navy Layers: #121826, #1A2334

AtlasStudio Orange: #F29F3A
AtlasForge Pink: #E26BE4
Atlas-V Light Blue: #A7D4FF

Soft White: #F5F7FF
Muted Text: #9AA4C3
Shadow: rgba(0,0,0,0.6)Deep Navy Base: #0B0E17
Soft Navy Layers: #121826, #1A2334

AtlasStudio Orange: #F29F3A
AtlasForge Pink: #E26BE4
Atlas-V Light Blue: #A7D4FF

Soft White: #F5F7FF
Muted Text: #9AA4C3
Shadow: rgba(0,0,0,0.6)
index.html
about.html
atlasv.html
studio-tools.html
octopus.html

/styles/
main.css
atlasstudio.css

/scripts/
main.js
playground.js

/atlasstudio/
index.html
playground.html
gallery.html

/assets/
/logos/
ATLASFORGE_BRAND.png
ATLASSTUDIO_BRAND.png
ATLASSTUDIO_ALTBRAND.png
ATLASV_BRAND.png
OIA_BRAND.png

/docs/
atlas-canon.md
patch-notes.md

This structure is canonical and changes only if explicitly updated.

---

## 4. DESIGN RULES

### Typography
- Use clean, modern system fonts (SF Pro, Inter, system-ui).

### Layout
- Strong spacing  
- Rounded corners (12–20px)  
- Subtle glows only in orange/pink/blue  
- Dark theme only

### UI Elements
- Pill-shaped buttons  
- Subtle animated hovers  
- Card system for all info blocks  
- Grid-based layout

---

## 5. ATLASSTUDIO PROTOTYPE RULES

The prototype at `/atlasstudio/` must be:
- static  
- front-end only  
- safe to click  
- able to simulate toggles, tabs, and patch bars

No data saves, no back-end, no deployment triggers.

---

## 6. DEVELOPMENT RULES

1. Always provide explicit file paths in code blocks.  
2. Always include full file content for any update.  
3. Use GitHub Web (no CLI required).  
4. Maintain canon brand colors + logo silhouettes.  
5. Keep content minimal, readable, professional.  
6. Avoid feature sprawl unless part of roadmap.  

---

## 7. ROADMAP (HIGH LEVEL)

- Add metadata + SEO tags  
- Add animated transitions  
- Create Figma design system  
- Add press kit page  
- Add real Atlas-V documentation  
- Add dynamic content when back-end exists  

---

End of document.
