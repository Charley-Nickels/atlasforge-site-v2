
# Integration Guide – Interaction Flows v01

## Overview

This guide explains how to connect the UI components defined in the composites (Run 4) to the behaviours and state machine described in `workstation_interaction_flows_v01.md` and `workstation_state_model_v01.md`. The JSON configuration files provide the mapping between file types, actions, and view components.

## File & Panel Interaction

1. **Initialization:**
   - Load `panel_layout.json` to determine panel sizes for the current viewport. Set up CSS variables accordingly.
   - Load `file_type_views.json` to determine which view component to render for each file type.
   - Parse `project_tree.json` (from Run 3) to build the file explorer.

2. **File Selection:**
   - On click of a file in the explorer, update the global state:
     ```js
     state.selectedFile = path;
     state.activeModule = path.endsWith('.atlas') ? extractModuleName(path) : null;
     state.state = 'FileSelected';
     ```
   - Look up the file extension in `file_type_views.json` and load the corresponding view component in the editor panel.
   - If the type is `project_overview`, fetch the associated modules and assets from the fake filesystem and render the overview.

3. **Atlas‑V Actions:**
   - Load `atlas_v_actions.json` and render buttons in the chat panel or toolbar.
   - When an action is triggered:
     - Update `state.pendingAction` and set `state.state` to `AtlasVResponding`.
     - Display a “typing…” indicator in the chat.
     - Simulate a delay and then append messages from the fake Atlas‑V transcripts or logs.
     - For `Patch now`, switch the editor panel to `DiffView` and display a hardcoded diff. Provide accept/decline buttons to return to `FileSelected` state.
     - For `Organize`, reorder the file tree according to a predetermined scheme and log the changes.

4. **State Transitions:**
   - Maintain a finite state machine as described in `workstation_state_model_v01.md`. When the state changes, re‑render affected panels accordingly.
   - Use the visibility matrix to hide or show components; for example, if implementing an overlay mode or diff view.

## Skeleton Implementation (Optional)

If using the included HTML/CSS skeleton:

- **index.html:** Provides semantic containers (`<header>`, `<aside>`, `<main>`, `<section>`). Insert dynamic content into these elements using a framework (e.g., React, Vue) or vanilla JS.
- **styles.css:** Defines a CSS grid layout with variables for colors and sizing. Replace placeholder variables (`--as-bg`, `--as-accent`) with actual values from the theme token file once available.

## Testing & Debugging

- Use console logging to trace state transitions and ensure actions update the UI correctly.
- Implement a simple router or event bus to handle actions uniformly across components.

