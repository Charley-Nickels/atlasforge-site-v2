# AtlasStudio Wireframe (Lo-Fi)

## Overview
- Page Role: Showcase conceptual studio playground and cozy support tone
- Layout Type: Hero + playground shell + tabbed previews + cozy workstation
- Cross-Brand Connections: "Powered by Atlas-V" logic core mention

### Layout Flow (ASCII)
```
[Hero]
    ↓
[Playground Shell]
    ↓
[Tab Strip Preview]
    ↓
[Ghost Console]
    ↓
[Task Drawer]
    ↓
[Cozy Workstation Sidebar]
    ↓
[Footer]
```

## Section Blueprint (Desktop)
--------------------------------
HERO
[Component: AS.Hero + CTA.Primary]
Content Length: Medium; cozy headline and welcome copy
Breakpoints: Full width; stack text/CTA on smaller screens
Notes: Keep supportive voice.
--------------------------------
PLAYGROUND SHELL
[Component: AS.PlaygroundShell]
Content Length: Long; multi-block mock workspace
Breakpoints: Shell shrinks; sidebar stacks under main on mobile
Notes: Maintain pseudo window framing.
--------------------------------
TAB STRIP PREVIEW
[Component: AS.TabsStrip (Game/Excel/Policy/Writing/Web)]
Content Length: Medium; tab labels + preview cells
Breakpoints: Tabs wrap or scroll horizontally on mobile
Notes: Link to console feed and task drawer.
--------------------------------
GHOST CONSOLE / SIDE CAR
[Component: AS.GhostConsole]
Content Length: Medium; sample lines and badges
Breakpoints: Paired with tabs on desktop; stacked under tabs on mobile
Notes: Keep ghostly supportive tone.
--------------------------------
TASK DRAWER / WORKFLOW PREVIEW
[Component: AS.TaskDrawer]
Content Length: Medium; checklist/task rows
Breakpoints: Adjacent on desktop; stacked for mobile
Notes: Include CTA.Ghost for "Try a flow".
--------------------------------
COZY WORKSTATION SIDEBAR
[Component: AS.CozyWorkstation]
Content Length: Short; supportive copy + badge chips
Breakpoints: Floats to side on desktop; stacks low on mobile
Notes: Keep nurturing messaging.
--------------------------------
FOOTER
[Component: Footer.Base + Footer.Clusters]
Content Length: Medium
Breakpoints: Standard responsive footer stack
Notes: Neutral styling.
--------------------------------

## Responsive Notes
- Tablet: Tabs compress; console beneath tabs; cards shift to two columns where present.
- Mobile: All stacks vertically; tabs become horizontal scroll; playground shell becomes single column.

## Figma Notes
- Use modular frames for shell, tabs, console, and drawer; keep detachable so states can be prototyped.
- Maintain consistent spacing tokens; avoid introducing new radii/shadows.
