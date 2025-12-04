
# Integration Guide – Fake Filesystem v01

## JSON Tree (`project_tree.json`)

- **Location:** `atlasstudio/data/filesystem_v01/project_tree.json`
- **Purpose:** Provides a complete hierarchical description of the fake filesystem. Each node has a `name`, `type` (`file` or `directory`), and, if a directory, a `children` array.
- **Usage:** Parse this JSON in the front‑end to render the sidebar tree. Use indentation based on depth (root=0, etc.). Apply appropriate icons based on file extension.

### Example Parsing (Pseudo‑code)

```js
function buildTree(node, depth) {
  renderRow(node.name, node.type, depth);
  if (node.type === 'directory') {
    node.children.forEach(child => buildTree(child, depth + 1));
  }
}
const tree = await fetch('/atlasstudio/data/filesystem_v01/project_tree.json').then(res => res.json());
buildTree(tree, 0);
```

## Previews

- **Location:** `atlasstudio/data/filesystem_v01/previews/`
- Each preview corresponds to a particular file type and provides sample content to display when the user selects a file. Load these files asynchronously when the associated file is clicked.

## Atlas‑V Logs

- **Location:** `atlasstudio/data/filesystem_v01/logs/`
- Use these logs to populate the log viewer panel. They simulate Atlas‑V operations (boot sequence, patch history, generative output). Timestamps are in the user’s timezone (America/New_York).

## Sidebar Mockup

- **Location:** `atlasstudio/assets/filesystem_v01/filesystem_sidebar_mock_v01.png`
- **Purpose:** Serves as a visual reference for Codex when implementing the actual component. It illustrates indentation, row spacing, and the subtle teal glow accent at the top. Use CSS to replicate the dark background (`#1A1D29`) and highlight colors.

## Implementation Notes

- When integrating, map file extensions to icons from `atlasstudio/assets/ui_icons_v01/` (Run 1). For example, `.proj` may use the project icon; `.atlas` the module icon; `.log` the logs icon.
- Provide hover/active states by adjusting row backgrounds or adding accent lines. The glow accent should be subtle and not overwhelm the content.
- Ensure the layout scales; the mockup is 300×600 px but can be stretched while maintaining proportions.

