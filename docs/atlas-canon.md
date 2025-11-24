# AtlasForge Canon Specification  
### Unified Identity · Geometry · Interaction Model  
_Last updated: v1.0_

AtlasForge is a simulation-first ecosystem for designing workflows, worlds, and
interfaces in a unified visual and decision language. This document defines the
canonical rules for logos, palettes, interactions, and surface-level behavior
across the entire stack.

---

# 1. Brand Family Overview

AtlasForge uses a shared geometry language: rings, shards, and lattices.
Individual brands differ only by palette and tone.

| Brand | Canon Logo | Identity | Palette |
|-------|-------------|----------|---------|
| **AtlasForge (AF)** | `AF_CANON2.png` | Umbrella / Navigation layer | Magenta energy core |
| **AtlasStudio (AS)** | `TRANSPAS.png` | Workstation · 3-panel layout | Orange ember |
| **Atlas-V Engine (AV)** | `TRANSPAV.png` | Routing + Constraints Engine | Cyan lattice |
| **Octopus in Action (OIA)** | `transpOIA3.png` | Harbor-city world | Warm orange |
| **S/K/B Audio Lab (SKB)** | `SKBCANON.png` | Sound workshop | Violet nebula |

---

# 2. Geometry Rules

- **AF** uses concentric rings + internal magenta glow  
- **AS** uses triangular shards + ember interior  
- **AV** uses thin lattice lines + orbit grids  
- **OIA** uses soft mascot illustration + warm shading  
- **SKB** uses nebula grain + circular wave energy  

Shared rules:
- white/cold-white strokes for structure  
- shadows always fall away from center glow  
- no rainbow gradients  
- glow should be internal, never bloom outward excessively

---

# 3. Interaction Language (Stack-wide)

AtlasForge uses a shared interaction model across all worlds and tools.

### 3.1 Decision Quadrant
Every feature or task supports:

- **Yes** → moves forward, generates next step  
- **No** → removes from active flow  
- **Later** → defers and reappears in future sessions  
- **Expand** → generates follow-up questions/subtasks  

### 3.2 Snapshots
A snapshot is a pass-level record of:
- what moved  
- what stalled  
- what changed state  
- which chains or tasks were affected  

Corresponds to `_SNAPSHOT_*` sheets in BuildLogs.

### 3.3 Queues
Queues represent prioritized sets of work:
- By category  
- By tag  
- By world / district / module  
- By shift or time-block  

---

# 4. AtlasStudio Canon

AtlasStudio is the primary surface for flows.  
Its 3-column layout is canonical:

- **Left:** Navigation (queues, tags, worlds)  
- **Center:** Active card (feature/task)  
- **Right:** Session context (notes, snapshots, flags)  

Rules:
- decisions always appear attached to the card  
- transitions must be soft fades or slides  
- center column is always the “spotlight”  

---

# 5. Atlas-V Engine Canon

The engine model has four modules:

### 5.1 Navigator
Determines what appears next based on:
- queues  
- tags  
- world context  
- urgency  

### 5.2 Memory
Tracks:
- approvals  
- rejections  
- deferrals  
- expansions  
- notes and timestamps  

### 5.3 Guard
Imposes constraints:
- limits  
- caps  
- safety conditions  
- block/allow rules  

### 5.4 FlowSim
Simulates:
- durations  
- arrival times  
- scenario stress tests  
- shift-by-shift impacts  

---

# 6. OIA World Canon

Octopus in Action is the flagship world.

### Core loops:
- mailbox → task → route  
- district mood  
- shift timing  
- event chains  
- risks from weather or congestion  

### Districts:
- **Harbor & docks**  
- **Old Town**  
- **Hills**  

World identities must use warm-orange palette.

---

# 7. S/K/B Audio Lab Canon

The audio lab provides:
- ambient beds  
- loops  
- stems  
- alternate cuts  

Rules:
- palette is violet/nebula  
- waveform tiles use subtle glow  
- “play” buttons are visual only  

Audio packs must reflect world/time contexts:
- harbor night pads  
- hill winds  
- festival chatter  

---

# 8. Future Extensions

This canon supports future:
- worlds  
- tools  
- decision surfaces  
- diagrams  
- build pipelines  

All must respect the interaction language defined here.

---

# 9. Versioning

This canon follows site versions:

- `v1.0` – Marketing + Workstation + Engine + Worlds + Audio  
- `v1.1+` – Diagrams, extended worlds, runtime simulations  
- `v2.0` – Real engine integration  
