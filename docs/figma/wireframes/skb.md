# SKB Wireframe (Lo-Fi)

## Overview
- Page Role: Audio/SKB playlists and tracks hub
- Layout Type: Hero + playlist lists + track cards
- Cross-Brand Connections: Atlas-V guidance for safe audio pipelines

### Layout Flow (ASCII)
```
[Hero]
    ↓
[Playlist Lists]
    ↓
[Track Cards]
    ↓
[Audio List / Waveform Strip]
    ↓
[Crossover / Studio Note]
    ↓
[Footer]
```

## Section Blueprint (Desktop)
--------------------------------
HERO
[Component: Hero.Primary + CTA.Primary]
Content Length: Medium; creative audio intro
Breakpoints: Full width; stacked on mobile
Notes: Include badge chips for vibe tags.
--------------------------------
PLAYLIST LISTS
[Component: SKB.PlaylistList]
Content Length: Medium; 4–6 playlists
Breakpoints: 2-col → 1-col on mobile
Notes: Include CTA.Ghost per playlist.
--------------------------------
TRACK CARDS
[Component: SKB.TrackCards]
Content Length: Long; 6–9 tracks
Breakpoints: 3-col → 2-col → 1-col
Notes: Support play icon placeholder; hover notes for Figma.
--------------------------------
AUDIO LIST / WAVEFORM STRIP
[Component: AudioList]
Content Length: Medium; 5–7 items
Breakpoints: Full width; stacked items
Notes: Include time badges.
--------------------------------
CROSSOVER / STUDIO NOTE
[Component: SectionHeader + AS.GhostConsole (mini)]
Content Length: Short; link to AtlasStudio for edits
Breakpoints: Single column
Notes: Console snippet as teaser only.
--------------------------------
FOOTER
[Component: Footer.Base + Footer.Clusters]
Content Length: Medium
Breakpoints: Standard responsive stack
Notes: Neutral styling.
--------------------------------

## Responsive Notes
- Tablet: Cards shift to two columns; playlists stack with comfortable spacing.
- Mobile: All stacks; ensure audio list tap targets remain 44px+ equivalent.

## Figma Notes
- Use consistent card radii and shadows from token set; avoid new values.
- Keep playlist list as repeatable component instance for rapid layout.
