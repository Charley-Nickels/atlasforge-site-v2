
# Interaction Flows & Skeleton v01 – Summary

This run defines the behavioural blueprint for the AtlasStudio workstation prototype and wires it to the fake data created in previous runs. It includes high-level interaction flows, a state/panel model, configuration JSON for mapping file types and actions, and a minimal HTML/CSS skeleton.

## Deliverables

| Path | Description |
|---|---|
| **docs/workstation_interaction_flows_v01.md** | Detailed interaction flow specification covering file selection, panel updates, Atlas‑V actions, and special behaviours such as project overviews and log viewers. |
| **docs/workstation_state_model_v01.md** | Defines UI states (Idle, FileSelected, AtlasVResponding, DiffView), panel visibility, and JSON structures for selected files, active modules, and pending actions. |
| **data/ui_config_v01/panel_layout.json** | Configuration for panel placement and sizing, including responsive adjustments for compact layouts. |
| **data/ui_config_v01/file_type_views.json** | Maps file extensions to view modes (markdown preview, project overview, module viewer, JSON viewer, log viewer, image preview). |
| **data/ui_config_v01/atlas_v_actions.json** | Describes available Atlas‑V actions with IDs, labels, descriptions, affected panels, and side effects. |
| **code_skeletons/workstation_layout_v01/index.html** | *(Optional skeleton)* Basic HTML structure with semantic elements for toolbar, sidebar, editor, and chat panels. |
| **code_skeletons/workstation_layout_v01/styles.css** | *(Optional skeleton)* Uses CSS variables for theme colours and lays out the panels using CSS grid. |
| **reports/how_to_integrate_INTERACTION_FLOWS_v01.md** | Instructions for implementing the described behaviours in the front-end. |
| **reports/notes_INTERACTION_FLOWS_v01.md** | Assumptions, design rationale, and open questions. |

The configuration and documentation produced here will guide Codex in building the dynamic behaviour of the prototype using the static composites created previously.

