# About Wireframe (Lo-Fi)

## Overview
- Page Role: Team story, mission, and governance
- Layout Type: Hero + narrative stack + team grid + governance note
- Cross-Brand Connections: Atlas-V governance badge; AtlasForge mission

### Layout Flow (ASCII)
```
[Hero]
    ↓
[Mission Story]
    ↓
[Team Grid]
    ↓
[Timeline]
    ↓
[Governance/Safety]
    ↓
[Footer]
```

## Section Blueprint (Desktop)
--------------------------------
HERO
[Component: Hero.Primary + CTA.Primary]
Content Length: Medium; mission intro
Breakpoints: Full width; stack on mobile
Notes: Include badge chips for values.
--------------------------------
MISSION STORY
[Component: SectionHeader + PlaceholderBlock]
Content Length: Long; paragraphs
Breakpoints: Single column
Notes: Light density.
--------------------------------
TEAM GRID
[Component: Cards.PlaceholderBlock or TeamCards]
Content Length: Medium; 6–9 tiles
Breakpoints: 3-col → 2-col → 1-col
Notes: Include social/link buttons as ghost CTAs.
--------------------------------
TIMELINE / MILESTONES
[Component: Lists.Feature or PlaceholderBlock]
Content Length: Medium; bullet timeline
Breakpoints: Single column; spaced items
Notes: Maintain clear chronology.
--------------------------------
GOVERNANCE / SAFETY
[Component: AV.SafetyBlock]
Content Length: Short
Breakpoints: Single column
Notes: Position near footer.
--------------------------------
FOOTER
[Component: Footer.Base + Footer.Clusters]
Content Length: Medium
Breakpoints: Standard responsive stack
Notes: Neutral styling.
--------------------------------

## Responsive Notes
- Tablet: Team grid to two columns; timeline items with generous spacing.
- Mobile: Full stack; CTA buttons vertical; ensure headings remain H1/H2 semantics in final build.

## Figma Notes
- Maintain consistent card sizing and spacing; no new shadows or radii.
- Use global typography scale per tokens.
