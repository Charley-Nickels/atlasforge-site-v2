// scripts/playground.js
// AtlasStudio Workstation Mock Logic
// - Nav mobile toggle
// - Tab switching
// - Fake Atlas-V suggestions
// - Fake build run
// - Preview rotation
// - Simple console logger

(function () {
  function $(selector, root) {
    return (root || document).querySelector(selector);
  }
  function $all(selector, root) {
    return Array.from((root || document).querySelectorAll(selector));
  }

  function logToConsole(type, message) {
    var consoleEl = $("[data-console]");
    if (!consoleEl) return;

    var line = document.createElement("div");
    line.classList.add("as-console-line");
    if (type) {
      line.classList.add("as-console-line--" + type);
    }
    line.textContent = message;

    consoleEl.appendChild(line);
    consoleEl.scrollTop = consoleEl.scrollHeight;
  }

  document.addEventListener("DOMContentLoaded", function () {
    // ----- Nav toggle (mobile) -----
    var toggle = $("#afNavToggle");
    var mobile = $("#afNavMobile");
    if (toggle && mobile) {
      toggle.addEventListener("click", function () {
        mobile.classList.toggle("af-nav-mobile-open");
      });
    }

    // Mark Studio nav active where present
    $all("[data-af-nav]").forEach(function (link) {
      if (link.getAttribute("href") === "../studio-tools.html") {
        link.classList.add("af-nav-active");
      }
    });

    // ----- Tabs -----
    var tabs = $all(".as-tab");
    var panels = $all(".as-panel");

    function activateTab(targetId) {
      tabs.forEach(function (tab) {
        var id = tab.getAttribute("data-tab-target");
        if (id === targetId) {
          tab.classList.add("as-tab--active");
          tab.setAttribute("aria-selected", "true");
        } else {
          tab.classList.remove("as-tab--active");
          tab.setAttribute("aria-selected", "false");
        }
      });

      panels.forEach(function (panel) {
        if (panel.id === targetId) {
          panel.classList.add("as-panel--active");
        } else {
          panel.classList.remove("as-panel--active");
        }
      });

      logToConsole(
        "info",
        "[ui] Switched to tab: " + targetId.replace("tab-", "")
      );
    }

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var target = tab.getAttribute("data-tab-target");
        if (target) activateTab(target);
      });
    });

    // ----- Mode toggle (focus layout) -----
    var focusToggle = $("[data-mode-toggle='focus']");
    if (focusToggle) {
      focusToggle.addEventListener("click", function () {
        document.body.classList.toggle("as-focus-mode");
        var isOn = document.body.classList.contains("as-focus-mode");
        focusToggle.classList.toggle("as-sidebar-chip--active", isOn);
        focusToggle.textContent = isOn ? "Focus layout · On" : "Focus layout";
        logToConsole(
          "meta",
          "[layout] Focus mode " + (isOn ? "enabled" : "disabled") + "."
        );
      });
    }

    // ----- Ask Atlas-V (fake suggestion) -----
    var suggestBtn = $("[data-action='suggest']");
    if (suggestBtn) {
      suggestBtn.addEventListener("click", function () {
        var textArea = $("[data-as-editor='brainstorm']");
        var snippet = textArea ? textArea.value.slice(0, 80) : "";
        logToConsole(
          "info",
          "[atlas-v] Read current brainstorm context" +
            (snippet ? ": \"" + snippet + "...\"" : ".")
        );
        logToConsole(
          "ok",
          "[atlas-v] Suggestion: stagger city hall decisions so each one modifies a different slice of the harbor (schedules, routes, prices, or events) instead of stacking all changes in one place."
        );
        logToConsole(
          "ok",
          "[atlas-v] Suggestion: log every decision in a visible timeline, then let players inspect why the engine picked a given flow."
        );
      });
    }

    // ----- Run fake build -----
    var runBtn = $("[data-action='run-build']");
    if (runBtn) {
      runBtn.addEventListener("click", function () {
        logToConsole("meta", "[build] Starting visual-only build for OIA...");
        setTimeout(function () {
          logToConsole(
            "ok",
            "[build] Completed mock build: harbor slice updated (no real files changed)."
          );
        }, 600);
      });
    }

    // ----- Rotate preview -----
    var rotateBtn = $("[data-action='rotate-preview']");
    var previewFrame = $(".as-preview-frame");
    var rotation = 0;
    if (rotateBtn && previewFrame) {
      rotateBtn.addEventListener("click", function () {
        rotation = (rotation + 90) % 360;
        previewFrame.style.transform = "rotate(" + rotation + "deg)";
        logToConsole("info", "[preview] Rotated view to " + rotation + "°.");
      });
    }

    // ----- Clear console -----
    var clearBtn = $("[data-action='clear-console']");
    if (clearBtn) {
      clearBtn.addEventListener("click", function () {
        var consoleEl = $("[data-console]");
        if (!consoleEl) return;
        consoleEl.innerHTML = "";
        logToConsole("meta", "[console] Cleared.");
      });
    }

    // Initial log
    logToConsole(
      "meta",
      "[session] AtlasStudio workstation mock ready. Interactions here are all simulated."
    );
  });
})();
