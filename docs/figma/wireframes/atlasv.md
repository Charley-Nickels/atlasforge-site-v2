# Atlas-V Wireframe (Lo-Fi)

## Overview
- Page Role: Atlas-V governance and safety lead
- Layout Type: Hero + storyline blocks + diagrams
- Cross-Brand Connections: AtlasForge tools usage and governance overlays

### Layout Flow (ASCII)
```
[Hero: AV.HeroBlock]
    ↓
[Governance Overview]
    ↓
[Workflow Diagram]
    ↓
[AtlasForge Crossover Cards]
    ↓
[Policy / Logs Callout]
    ↓
[Footer]
```

## Section Blueprint (Desktop)
--------------------------------
HERO
[Component: AV.HeroBlock + CTA.Primary]
Content Length: Medium; governance framing
Breakpoints: Full bleed; stack copy/CTA on mobile
Notes: Keep Atlas-V iconography placeholder.
--------------------------------
GOVERNANCE / SAFETY OVERVIEW
[Component: AV.SafetyBlock]
Content Length: Medium; bullet list
Breakpoints: Two-column → single column mobile
Notes: Emphasize safe operations messaging.
--------------------------------
WORKFLOW DIAGRAM
[Component: AV.WorkflowDiagram]
Content Length: Short; diagram labels
Breakpoints: Diagram scales; stack description below on mobile
Notes: Use responsive grid tokens.
--------------------------------
ATLASFORGE CROSSOVER
[Component: Cards.Product/Tool]
Content Length: Medium; 3 cards linking tools
Breakpoints: 3-col → 2-col → 1-col
Notes: Include "Powered by Atlas-V" tag.
--------------------------------
POLICY / LOGS CALLOUT
[Component: SectionHeader + PlaceholderBlock]
Content Length: Short
Breakpoints: Single column
Notes: Placeholder for compliance download CTA.
--------------------------------
FOOTER
[Component: Footer.Base + Footer.Clusters]
Content Length: Medium
Breakpoints: Responsive stack as in home
Notes: Neutral styling.
--------------------------------

## Responsive Notes
- Tablet: Diagram shrinks with legends stacked; cards move to two columns.
- Mobile: All blocks stack; workflow diagram beneath header; maintain generous tap spacing on CTAs.

## Figma Notes
- Align hero to left; maintain 12/8/4 column grid for breakpoints.
- Diagram should align to core layout grid; annotate interactive hotspots for later prototypes.
