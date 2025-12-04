
# Notes – Interaction Flows v01

## Assumptions & Decisions

- **Mock Environment:** The flows are designed for a non‑persistent, fake environment. File operations (patches, re‑organisations) simulate changes by updating in-memory state and logs but do not write to disk.
- **View Modes:** Only preview/render modes are included. Editing capabilities and live code execution are out of scope for the prototype.
- **Atlas‑V Integration:** Actions like `Generate ideas` and `Patch now` assume an underlying AI system. In the prototype, these will trigger placeholder responses drawn from the fake logs and chat transcripts.
- **Navigation:** The file tree uses simple expand/collapse behaviour. We assume only two levels of depth (root → files). Deep nesting can be added later.
- **Diff View:** The diff panel is described conceptually but not implemented; actual diff generation is beyond the scope of this run.
- **Figma:** We continued without Figma access, crafting docs manually. Once Figma is available, interaction states should be modelled with variant frames.

## Open Questions for the Master Architect

1. **Additional Actions:** Are there other Atlas‑V commands (e.g., `Refactor`, `Explain code`) that should be modelled?
2. **Editing Workflow:** Will later runs include editing capabilities or integration with external code editors? This impacts state transitions and view modes.
3. **Persistent Storage:** Should simulated file operations persist across sessions for demo purposes? If so, a lightweight local storage mechanism may be needed.

