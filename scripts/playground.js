// /scripts/playground.js
// AtlasStudio dashboard mock interactions.
// All behavior is visual-only; no real data is saved or sent anywhere.

document.addEventListener("DOMContentLoaded", () => {
  const tabElements = document.querySelectorAll(".as-tab");
  const previewViewport = document.getElementById("previewViewport");

  const switches = document.querySelectorAll(".as-switch[data-switch]");
  const runPatchBtn = document.getElementById("runPatchBtn");
  const resetPatchBtn = document.getElementById("resetPatchBtn");

  const progressShell = document.getElementById("progressShell");
  const progressFill = document.getElementById("progressFill");
  const progressPercent = document.getElementById("progressPercent");

  let patchInterval = null;
  let currentPercent = 0;

  // Helper: update preview text based on the active tab
  function updatePreviewForTab(tabId) {
    if (!previewViewport) return;

    let message = "";

    switch (tabId) {
      case "brainstorm":
        message =
          "Brainstorm Mode — collect ideas, notes, and early sketches. Nothing is final here; this is where AtlasStudio helps you shape the concept.";
        break;
      case "uat":
        message =
          "UAT Mode — simulate user acceptance testing checklists, edge cases, and sign-off criteria. In this mock, no data is saved.";
        break;
      case "review":
        message =
          "Review Mode — summarize changes, capture feedback, and prepare a patch plan. This is a visual-only preview.";
        break;
      case "patch":
        message =
          "Patch Mode — define what will change, preview it, and then run a simulated patch. Use the Run Patch button below.";
        break;
      default:
        message =
          "Right-side preview panel — shows the current workflow mode and patch status.";
    }

    previewViewport.textContent = message;
  }

  // ==========================
  // Tab handling
  // ==========================
  tabElements.forEach((tabEl) => {
    tabEl.addEventListener("click", () => {
      const tabId = tabEl.getAttribute("data-tab");

      // Set active class
      tabElements.forEach((t) => t.classList.remove("is-active"));
      tabEl.classList.add("is-active");

      // Update preview
      updatePreviewForTab(tabId);
    });
  });

  // Initialize preview to brainstorm if present
  const initialActive = document.querySelector(".as-tab.is-active");
  if (initialActive) {
    const tabId = initialActive.getAttribute("data-tab");
    updatePreviewForTab(tabId);
  }

  // ==========================
  // Toggle switches
  // ==========================
  switches.forEach((sw) => {
    sw.addEventListener("click", () => {
      sw.classList.toggle("is-on");
    });
  });

  // ==========================
  // Patch simulation
  // ==========================
  function stopPatchInterval() {
    if (patchInterval !== null) {
      clearInterval(patchInterval);
      patchInterval = null;
    }
  }

  function resetPatch() {
    stopPatchInterval();
    currentPercent = 0;

    if (progressShell) {
      progressShell.style.display = "none";
    }
    if (progressFill) {
      progressFill.style.width = "0%";
    }
    if (progressPercent) {
      progressPercent.textContent = "0%";
    }

    if (previewViewport) {
      // Restore whatever the active tab description is
      const activeTab = document.querySelector(".as-tab.is-active");
      if (activeTab) {
        updatePreviewForTab(activeTab.getAttribute("data-tab"));
      } else {
        previewViewport.textContent =
          "Right-side preview panel — shows the current workflow mode and patch status.";
      }
    }
  }

  function runPatchSimulation() {
    resetPatch();

    if (!progressShell || !progressFill || !progressPercent) return;

    progressShell.style.display = "block";
    previewViewport.textContent =
      "Applying patch… This is a visual-only simulation. No real changes are being deployed.";

    currentPercent = 0;
    progressFill.style.width = "0%";
    progressPercent.textContent = "0%";

    patchInterval = setInterval(() => {
      currentPercent += 4 + Math.random() * 6; // slightly irregular increments

      if (currentPercent >= 100) {
        currentPercent = 100;
        stopPatchInterval();

        previewViewport.textContent =
          "Patch simulation complete. In a real build, this step would correspond to tests, validation, and deployment logs.";
      }

      progressFill.style.width = currentPercent + "%";
      progressPercent.textContent = Math.round(currentPercent) + "%";
    }, 180);
  }

  if (runPatchBtn) {
    runPatchBtn.addEventListener("click", () => {
      runPatchSimulation();
    });
  }

  if (resetPatchBtn) {
    resetPatchBtn.addEventListener("click", () => {
      resetPatch();
    });
  }
});
