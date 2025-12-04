
# AtlasStudio Workstation Interaction Flows v01

This document outlines how users navigate the fake AtlasStudio workstation, from exploring files to invoking Atlas‑V actions. These flows are based on the composite mockups (Run 4) and the fake filesystem (Run 3).

## File Explorer → Editor Interaction

1. **Idle State:** Upon launch, the file explorer displays the root directories (`projects/`, `modules/`, `assets/`, `logs/`, `atlas_v/`). The center panel shows a welcome message or remains empty.
2. **Selecting a File:**
   - When the user clicks a directory name, it expands to reveal its contents. Clicking again collapses it.
   - Clicking a **file** sets it as the *selected file* and triggers the following behaviors:
     - The file path is stored in the application state (`selectedFile` property).
     - The center panel switches to an appropriate **view mode** (see `file_type_views.json`):
       - **Markdown (`.md`):** Rendered as formatted text.
       - **JSON / CFG (`.json`, `.cfg`):** Displayed in a structured viewer with collapsible nodes.
       - **Atlas modules (`.atlas`, `.proj`):** Show a project overview or module summary. `.proj` files open the high‑level overview, listing associated modules and assets; `.atlas` files show module descriptions and metadata.
       - **Logs (`.log`):** Display the log viewer with timestamped entries; color‑code info, warnings, and errors.
       - **Assets (`.png`, `.jpg`, etc.):** Show an image preview.
     - The editor header updates with the file name.
     - A small status indicator reflects that the app is in `FileSelected` state.
3. **Opening Project Overview:** When a `.proj` file is selected, the editor panel displays:
   - A high‑level description (from the fake `*.proj` preview). 
   - A list of related modules (links to `.atlas` files) and assets.
   - Buttons to “Open Module” or “View Assets,” which trigger selection of the appropriate file in the tree.

## Atlas‑V Chat Panel Actions

The right‑hand chat panel connects users with the Atlas‑V assistant. It provides contextual actions that operate on files or projects.

### Available Actions (see `atlas_v_actions.json`)

- **Generate ideas:** Brainstorms creative variations or improvements based on the selected project or module. The output appears as chat messages and may generate new `.md` files in the `notes/` directory or append to an existing `ideas.md` file.
- **Patch now:** Analyzes the selected module (`.atlas`) and produces a patch diff. In the UI, this switches the center panel into a temporary **Diff View** showing the proposed changes. After confirmation, the fake filesystem updates the module file and logs the operation in `patch_history.log`.
- **Organize:** Scans the current project directory, suggests folder cleanup, and automatically moves misfiled assets (simulated). This results in updates to the file tree and a summary message in the chat.
- **Summarize:** Provides a concise summary of the selected file or project. For logs, it might highlight recent errors; for modules, it lists key parameters.

### Typical Atlas‑V Session Flow

1. **Select a project** (`creative_labs.proj`).
2. **Summarize** to get an overview of the project.
3. Inspect individual files (modules, configs, logs) via the file explorer and center panel.
4. Use **Generate ideas** to brainstorm enhancements.
5. Edit files manually (outside the scope of this prototype) or run **Patch now** to apply automated improvements.
6. Review the patch diff, accept changes, and watch the logs update.
7. Use **Organize** to tidy the project once edits are complete.

## Special Behaviors

- **Preview Mode:** All non-code files open in preview mode—read‑only with formatting applied. Editing is not supported in this prototype.
- **Log Viewer:** Selecting a `.log` file opens a viewer with scrollable lines. New entries appear automatically when Atlas‑V performs actions.
- **Project Overview:** `.proj` files show a specialized view that aggregates related modules and assets, including high‑level descriptions and action buttons.
- **Persistence:** Since this is a fake environment, file operations don’t persist across sessions. State resets upon reload.

