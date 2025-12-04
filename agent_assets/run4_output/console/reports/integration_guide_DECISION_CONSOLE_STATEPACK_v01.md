# Integration Guide – Decision Console Statepack v01

This guide describes how Codex should integrate the **Decision Console Statepack v01** into the Atlasforge application.  The statepack includes UI mockups, microcopy, and references to the underlying schemas and example data.  Use this guide to implement the console without additional creative interpretation.

## 1. Assets Overview

The statepack provides five PNG images that illustrate the desired appearance of key UI states.  These images reside in `console/assets/statepack_v01/`:

| Image | Purpose | Notes |
|------|---------|------|
| `queue_view.png` | Layout for listing decisions, with search and filter controls. | Use as a reference for spacing, colours, and typography.  Cards should be clickable and update dynamically based on filters/search. |
| `decision_detail.png` | Layout for presenting a single decision and capturing the user’s response. | Buttons change depending on response type (e.g., multiple choice uses radio buttons). |
| `revision_flow.png` | Split‑pane view showing a flagged canon record and its corresponding new decision. | Include a resolution button; show reason for revision and link to the new decision in the queue. |
| `flags_view.png` | Layout for listing revision flags with status badges. | Each row links to the revision flow screen; support sorting and filtering via the search & filter panel. |
| `search_filter_panel.png` | Modal/panel for searching and filtering decisions/flags. | Contains pill buttons for options; supports multi‑selection; apply and reset actions update the queue or flags list. |

In addition to the images, the statepack provides:

- `console_state_descriptions.md` – detailed descriptions of each state and their UI components.
- `ui_copy_console.json` – key‑value pairs for all microcopy used in the UI (titles, labels, button text).  Load this JSON to centralize UI text and support future localization.
- `schema_links.md` – pointers to the JSON schemas and example data from previous runs.

## 2. Using the Schemas and Example Data

The Decision Console should be driven by data structures defined in the JSON schemas (`console/schema/*.json`).  Codex must:

1. **Validate Data:** Use JSON schema validation when reading or writing `decision_queue.json`, `canon_records.json`, `flags.json`, `projects.json`, and `categories.json`.  Ensuring data integrity avoids runtime errors.
2. **Populate UI:** Read the example data in `console/example_data_v01/` to seed the development environment.  The UI should gracefully handle empty states when no decisions or flags are present.
3. **Persist Changes:** When users respond to decisions or resolve flags, update the relevant JSON files according to the schema rules (see the integration guide from Run 1 for detailed import/export procedures).

## 3. Implementing the UI

Follow these steps to implement each screen:

### 3.1 Queue View

* Render a scrollable list of decisions.  Each card displays project, category, question text, and status.
* Implement a search field that filters decisions by matching keywords against question text or metadata.
* Add a filter icon/button that opens the search & filter panel.  Maintain filter state across sessions if possible.
* Use colours and typography from `queue_view.png`.  Ensure adequate contrast on the dark background.

### 3.2 Decision Detail

* When a user selects a decision, navigate to the detail view.  Display project and category tags, the full question, and the response type.
* Render input controls based on the response type:
  - **Yes/No / Approve/Deny:** Show yes/no buttons (or approve/deny) plus a skip option.
  - **Multiple Choice:** Present radio buttons or a dropdown for the provided options.
  - **Free Text:** Display a text field for open‑ended answers.
* Save the user’s response and update the decision’s status.  Provide feedback (e.g., toast notification) that the answer was recorded.

### 3.3 Revision Flow

* When a flag is selected from the Flags View, navigate to the revision flow screen.  Load the corresponding canon record and the new decision created to address the flag.
* Display these side by side.  Offer a **Resolve** button that marks the flag as resolved and updates the canon record’s status to `canon` or `rejected` depending on the new decision.
* After resolving, return to the Flags View or Queue View as appropriate.

### 3.4 Flags View

* Render a list of flags sorted by timestamp (most recent first).  Include record ID, project/category, reason, and status badge.
* Colour badges according to status: open (red) and resolved (blue).  Use the same style as in `flags_view.png`.
* Allow sorting and filtering through the search & filter panel.

### 3.5 Search & Filter Panel

* Implement as a modal or slide‑out panel accessible from the queue or flags view.
* Provide a search input and groups of filter options for project, category, and status.  Each option acts as a toggle; multiple options can be selected per group.
* Include **Apply** and **Reset** buttons.  Apply triggers filtering of the current view; reset clears all filters.

## 4. Microcopy

Import `ui_copy_console.json` as a resource for all textual labels in the console.  Refer to keys such as `queue_title`, `yes_button`, `resolve_button`, etc.  Avoid hard‑coding strings in components; this facilitates localization and future revisions.

## 5. Styling and Themes

* Use a dark colour palette with subtle gradients and glow accents, as shown in the mockups.  The primary accent colour is a soft blue (`#5fa2db`); secondary accents include purples and teals for project tags.
* Cards and panels have rounded corners and gentle drop shadows to create depth.
* Use a clean sans‑serif font consistent with the Atlasforge design language.  Ensure adequate contrast for text on dark backgrounds.

## 6. Directory Structure and Assets

Place the UI implementation files (HTML, CSS, JS) under your appropriate project structure.  Store the static images in a public assets directory, e.g., `/console/assets/statepack_v01/`.  Import `ui_copy_console.json` and the schemas from their respective locations.

## 7. Next Steps

Once the UI and functionality are implemented using this guide:

1. **Connect Data Sources:** Hook up the UI to load and save real data via the import/export mechanism described in earlier runs.  The Decision Console should read the JSON files from the user’s environment, validate them against the schemas, and write updates accordingly.
2. **Testing:** Use the example data to test each workflow, including answering decisions, applying filters, flagging canon records, and resolving flags.
3. **Iteration:** Collect feedback from stakeholders (Master Architect, Creative Director) and adjust the UI or microcopy as needed.  Future runs may add additional states (e.g., advanced analytics) or refine existing ones.

---

By following this integration guide, Codex can build a functional Decision Console that reflects the design and user flow envisioned in the provided assets and documentation.