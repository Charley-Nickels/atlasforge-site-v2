# Decision Console State Descriptions (v01)

This document outlines the key UI states for the Decision Console.  Each state corresponds to one of the mockups produced in **statepack v01** and describes its purpose, main components, and expected user interactions.  Codex can use this as a blueprint when implementing the console UI.

## 1. Queue View (`queue_view.png`)

**Purpose:** Displays the list of pending (and optionally answered) decisions awaiting the Creative Director’s input.

**Components:**

- **Header Bar:** A dark bar at the top showing the title “Decision Queue”.  Includes a search bar on the right and a settings/filter icon.
- **Search Bar:** Users can type keywords to filter the list of decisions by question text, project or category.  The placeholder text reads “Search decisions…”.
- **Filter Icon:** Opens the search & filter panel where users can refine the queue by project, category, status, etc.
- **Decision Cards:** Each decision appears as a rounded card containing:
  - **Project Tag:** A coloured pill indicating the project (e.g., OIA, Website).
  - **Question Text:** The prompt or decision to be answered.  Secondary text below lists the category (e.g., Map Design).
  - **Status:** A right-aligned label (e.g., “Pending”, “Answered”).  Colour can change based on status.

**Interactions:**

- Clicking a decision card opens the **Decision Detail** state for that item.
- Typing in the search bar filters the list in real time.
- Clicking the filter icon opens the **Search & Filter Panel**.

## 2. Decision Detail (`decision_detail.png`)

**Purpose:** Provides detailed information about a selected decision and allows the Creative Director to respond.

**Components:**

- **Header Bar:** Displays “Decision Detail”.
- **Tags:** At the top of the detail panel, coloured pills indicate the project and category.
- **Question Text:** Prominently displayed; the full prompt of the decision.
- **Response Type:** A subtle label indicating how the user should respond (e.g., “Yes / No”, “Multiple choice”).
- **Response Buttons:** For yes/no decisions, three buttons (“Yes”, “No”, “Skip”) allow the user to respond.  For other response types, replace these with appropriate controls (e.g., radio buttons, dropdowns, text field).

**Interactions:**

- Selecting a response button records the answer and returns the user to the **Queue View**.
- Skipping leaves the decision unanswered but may change its status or hide it depending on workflow rules.

## 3. Revision Flow (`revision_flow.png`)

**Purpose:** Guides the user through reviewing a flagged canon record and creating or viewing a new decision generated to address the flag.

**Components:**

- **Header Bar:** Displays “Revision Flow”.
- **Two Columns:**
  - **Current Canon:** Shows details of the existing canon record (record ID, project, category, original answer, revision notes).
  - **New Decision:** Shows the question and status of the newly created decision meant to revise the canon.  Indicates response type and whether the decision is pending or answered.
- **Reason for Revision Panel:** A bar at the bottom summarising why the flag was raised (e.g., performance issues) and a **Resolve** button to close the flag once the new decision is processed.

**Interactions:**

- Users can inspect the current canon record and the new decision side by side.
- Clicking **Resolve** closes the flag and returns to the **Flags View**; new revisions are handled via the decision queue.

## 4. Flags View (`flags_view.png`)

**Purpose:** Lists all revision flags raised against canon records, allowing users to monitor outstanding revisions.

**Components:**

- **Header Bar:** Displays “Flags”.
- **Flag Rows:** Each row contains:
  - **Record ID:** Reference to the canon entry being flagged.
  - **Project / Category:** The context of the record.
  - **Reason:** A brief description of why the flag was raised.
  - **Status Badge:** Indicates whether the flag is “Open” or “Resolved”.  Colour-coded for quick recognition.

**Interactions:**

- Clicking a flag row opens the **Revision Flow** state for that record.
- Flags may be filtered or sorted via the search & filter panel (not shown in this mockup).

## 5. Search & Filter Panel (`search_filter_panel.png`)

**Purpose:** Provides controls to refine the decision queue or flag lists by various criteria.

**Components:**

- **Search Field:** Allows users to enter free text to match against decision questions, IDs, or other metadata.
- **Filter Groups:** Sections for **Project**, **Category**, and **Status**, each containing pill-like buttons for available options (e.g., OIA, Website, Pending, Canon).  Selecting a pill toggles the filter.
- **Apply / Reset Buttons:** Apply commits the selected filters and updates the view; Reset clears all filters and search terms.

**Interactions:**

- Users can open this panel from the queue header.  After selecting filters and clicking **Apply**, the queue or flags view updates accordingly.
- **Reset** returns the view to its unfiltered state.

---

These state descriptions align with the visual mockups provided in the accompanying PNG files.  Codex should reproduce these layouts and behaviours in the Decision Console application, adhering to the dark theme, glow accents, and clean typography used throughout.