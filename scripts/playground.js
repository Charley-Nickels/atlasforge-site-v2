// scripts/playground.js
// AtlasStudio matte workstation interactions — visual-only prototype

// ---------- Query helpers ----------

function qs(sel, ctx) {
  if (!ctx) ctx = document;
  return ctx.querySelector(sel);
}

function qsa(sel, ctx) {
  if (!ctx) ctx = document;
  return Array.prototype.slice.call(ctx.querySelectorAll(sel));
}

// ---------- Event bus (simple, may be used later) ----------

class EventBus {
  constructor() {
    this.events = {};
  }
  on(event, handler) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(handler);
  }
  emit(event, payload) {
    (this.events[event] || []).forEach(function (fn) {
      fn(payload);
    });
  }
}

var bus = new EventBus();

// ---------- Global app state ----------

var storageKey = "as-prefs";

var appState = {
  currentScreen: "browser",
  aiMode: true,
  experimental: false,
  workspace: "Sandbox",
  viewportMode: "website",
  decisions: { pending: 3, warnings: 1, approvals: 2 },
  compact: false,
  highContrast: false,
  autosave: false,
  ghostOpen: false,
  settingsOpen: false
};

var screenLabels = {
  browser: "Gallery Browser",
  uat: "App Preview / UAT",
  review: "Website / Policy Review",
  patch: "Audio / Video Clipper",
  dev: "Dev Workspace"
};

var viewportModes = {
  game: { title: "Game viewport (mock)" },
  app: { title: "App viewport (mock)" },
  website: { title: "Website preview (mock)" },
  spreadsheet: { title: "Spreadsheet mock" }
};

// ---------- Notification toasts ----------

function createNotifier() {
  var stack = qs(".as-toast-stack");
  return {
    push: function (type, text) {
      if (!stack) return;
      var toast = document.createElement("div");
      toast.className = "as-toast";
      toast.setAttribute("data-type", type || "info");
      toast.textContent = text;
      stack.appendChild(toast);
      requestAnimationFrame(function () {
        toast.classList.add("is-showing");
      });
      setTimeout(function () {
        toast.classList.remove("is-showing");
        setTimeout(function () {
          toast.remove();
        }, 200);
      }, 2600);
    },
    info: function (msg) {
      this.push("info", msg);
    },
    success: function (msg) {
      this.push("success", msg);
    },
    error: function (msg) {
      this.push("error", msg);
    }
  };
}

var notify = null;

// ---------- Persistence ----------

function persistState() {
  var payload = {
    aiMode: appState.aiMode,
    experimental: appState.experimental,
    workspace: appState.workspace,
    viewportMode: appState.viewportMode,
    compact: appState.compact,
    highContrast: appState.highContrast,
    autosave: appState.autosave
  };
  try {
    localStorage.setItem(storageKey, JSON.stringify(payload));
  } catch (err) {
    console.warn("Persist failed", err);
  }
}

function loadState() {
  try {
    var saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
    if (saved && typeof saved === "object") {
      for (var key in saved) {
        if (Object.prototype.hasOwnProperty.call(saved, key)) {
          appState[key] = saved[key];
        }
      }
    }
  } catch (err) {
    console.warn("Load failed", err);
  }
}

// ---------- Viewport control ----------

var viewport = (function () {
  var frame = qs(".as-preview-placeholder");
  var title = qs(".as-preview-title-mini");
  function setMode(mode) {
    var data = viewportModes[mode] || viewportModes.website;
    if (frame) {
      for (var key in viewportModes) {
        frame.classList.remove("is-" + key);
      }
      frame.classList.add("is-" + mode);
    }
    if (title) title.textContent = data.title;
    appState.viewportMode = mode;
    var s = qs("#statusViewport");
    if (s) s.textContent = data.title;
  }
  return { setMode: setMode };
})();

// ---------- Status bar ----------

function updateStatusBar() {
  var screenEl = qs("#statusScreen");
  var aiEl = qs("#statusAI");
  var expEl = qs("#statusExperimental");
  var wsEl = qs("#statusWorkspace");
  var vpEl = qs("#statusViewport");

  if (screenEl) {
    screenEl.textContent =
      screenLabels[appState.currentScreen] || appState.currentScreen;
  }
  if (aiEl) aiEl.textContent = appState.aiMode ? "On" : "Off";
  if (expEl) expEl.textContent = appState.experimental ? "On" : "Off";
  if (wsEl) wsEl.textContent = appState.workspace;
  if (vpEl) {
    var modeInfo = viewportModes[appState.viewportMode] || {};
    vpEl.textContent = modeInfo.title || appState.viewportMode;
  }

  var p = qs("#decisionPending");
  var w = qs("#decisionWarnings");
  var a = qs("#decisionApprovals");
  if (p) p.textContent = String(appState.decisions.pending);
  if (w) w.textContent = String(appState.decisions.warnings);
  if (a) a.textContent = String(appState.decisions.approvals);
}

function setActiveRouteTab(screen) {
  qsa(".as-route-tab").forEach(function (tab) {
    var isActive = tab.getAttribute("data-screen") === screen;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", isActive ? "true" : "false");
    tab.setAttribute("tabindex", isActive ? "0" : "-1");
  });
}

// ---------- Screen manager ----------

function handleScreenMode(screen) {
  var modeMap = {
    browser: "website",
    uat: "app",
    review: "website",
    patch: "game",
    dev: "spreadsheet"
  };
  var workspaceMap = {
    browser: "Visual Preview",
    uat: "Sandbox",
    review: "Review",
    patch: "Render",
    dev: "Dev"
  };
  viewport.setMode(modeMap[screen] || "website");
  appState.workspace = workspaceMap[screen] || "Sandbox";
}

function ScreenManager() {
  this.screens = new Map();
  this.current = null;
}

ScreenManager.prototype.register = function (id, el) {
  if (!id || !el) return;
  this.screens.set(id, el);
  el.classList.remove("as-screen--active");
  el.style.display = "none";
  el.style.opacity = "0";
};

ScreenManager.prototype.show = function (id) {
  if (!this.screens.has(id)) return;
  if (this.current === id) return;

  var next = this.screens.get(id);
  var prev = this.current ? this.screens.get(this.current) : null;

  if (prev) {
    prev.classList.remove("as-screen--active");
    prev.style.opacity = "0";
    setTimeout(function () {
      prev.style.display = "none";
    }, 140);
  }

  next.style.display = "block";
  requestAnimationFrame(function () {
    next.style.opacity = "1";
    next.classList.add("as-screen--active");
  });

  this.current = id;
  appState.currentScreen = id;

  setActiveRouteTab(id);
  handleScreenMode(id);
  updateStatusBar();
  bus.emit("screen:change", id);
};

// ---------- Controls & UI wiring ----------

function initRouteTabs(manager) {
  qsa(".as-route-tab").forEach(function (tab) {
    tab.addEventListener("click", function () {
      var target = tab.getAttribute("data-screen");
      if (!target) return;
      manager.show(target);
      if (notify)
        notify.info("Switched to " + (screenLabels[target] || target));
    });
  });
}

function initPillToggleGroups() {
  qsa(".js-pill-group").forEach(function (group) {
    group.addEventListener("click", function (evt) {
      var btn = evt.target.closest(".as-pill-toggle");
      if (!btn) return;
      qsa(".as-pill-toggle", group).forEach(function (b) {
        b.classList.remove("as-pill-toggle--active");
      });
      btn.classList.add("as-pill-toggle--active");

      if (group.getAttribute("data-pill") === "workspace") {
        appState.workspace =
          btn.getAttribute("data-workspace") || appState.workspace;
        persistState();
        updateStatusBar();
      }

      if (group.closest(".as-card-body--preview")) {
        var label = (btn.textContent || "").trim().toLowerCase();
        if (label === "run") viewport.setMode("game");
        if (label === "dry run") viewport.setMode("app");
        if (label === "inspect") viewport.setMode("website");
      }
    });
  });
}

function initDropdowns() {
  document.addEventListener("click", function (evt) {
    qsa(".as-dropdown-menu").forEach(function (menu) {
      menu.classList.remove("is-open");
    });
    var trigger = evt.target.closest(".as-dropdown-trigger");
    if (!trigger) return;
    var dropdown = trigger.closest(".as-dropdown");
    if (!dropdown) return;
    var menu = qs(".as-dropdown-menu", dropdown);
    if (!menu) return;
    evt.stopPropagation();
    menu.classList.toggle("is-open");
  });
}

function initCodexGhostPanel() {
  var toggleBtn = qs(".js-ghost-toggle");
  var panel = qs(".as-ghost-panel");
  if (!toggleBtn || !panel) return;

  function apply() {
    panel.classList.toggle("is-open", appState.ghostOpen);
  }

  toggleBtn.addEventListener("click", function () {
    appState.ghostOpen = !appState.ghostOpen;
    apply();
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape" && appState.ghostOpen) {
      appState.ghostOpen = false;
      apply();
    }
  });

  var tabs = qsa(".as-ghost-tab", panel);
  var views = qsa(".as-ghost-view", panel);

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var target = tab.getAttribute("data-ghost-tab");
      tabs.forEach(function (t) {
        t.classList.remove("as-ghost-tab--active");
      });
      tab.classList.add("as-ghost-tab--active");
      views.forEach(function (view) {
        var viewKey = view.getAttribute("data-ghost-view");
        view.classList.toggle(
          "as-ghost-view--active",
          viewKey === target
        );
      });
    });
  });

  var simulateDiff = qs("#simulateDiff");
  var simulateTimeline = qs("#simulateTimeline");

  if (simulateDiff) {
    simulateDiff.addEventListener("click", function () {
      tabs.forEach(function (t) {
        t.classList.toggle(
          "as-ghost-tab--active",
          t.getAttribute("data-ghost-tab") === "diff"
        );
      });
      views.forEach(function (v) {
        v.classList.toggle(
          "as-ghost-view--active",
          v.getAttribute("data-ghost-view") === "diff"
        );
      });
      if (notify) notify.info("Simulated diff preview.");
    });
  }

  if (simulateTimeline) {
    simulateTimeline.addEventListener("click", function () {
      tabs.forEach(function (t) {
        t.classList.toggle(
          "as-ghost-tab--active",
          t.getAttribute("data-ghost-tab") === "timeline"
        );
      });
      views.forEach(function (v) {
        v.classList.toggle(
          "as-ghost-view--active",
          v.getAttribute("data-ghost-view") === "timeline"
        );
      });
      if (notify) notify.info("Simulated timeline.");
    });
  }
}

function attachButtonRipples() {
  qsa(".as-btn, .af-btn, .as-btn-icon").forEach(function (btn) {
    btn.addEventListener("click", function (evt) {
      var rect = btn.getBoundingClientRect();
      var ripple = document.createElement("span");
      ripple.className = "as-ripple";
      var size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = evt.clientX - rect.left - size / 2 + "px";
      ripple.style.top = evt.clientY - rect.top - size / 2 + "px";
      btn.appendChild(ripple);
      setTimeout(function () {
        ripple.remove();
      }, 450);
    });
  });
}

function initSwitches() {
  qsa(".as-switch").forEach(function (sw) {
    var flag = sw.getAttribute("data-flag");
    if (!flag) return;

    function apply() {
      var on = !!appState[flag];
      sw.classList.toggle("is-on", on);
    }

    apply();

    sw.addEventListener("click", function () {
      if (flag === "aiMode") appState.aiMode = !appState.aiMode;
      else if (flag === "experimental")
        appState.experimental = !appState.experimental;
      else if (flag === "compact") appState.compact = !appState.compact;
      else if (flag === "highContrast")
        appState.highContrast = !appState.highContrast;
      else if (flag === "autosave") appState.autosave = !appState.autosave;

      apply();
      persistState();
      updateStatusBar();
    });
  });
}

function initCategoryFilter() {
  var categories = qsa(".as-category-item");
  var tiles = qsa(".as-gallery-tile");
  if (!categories.length || !tiles.length) return;

  categories.forEach(function (cat) {
    cat.addEventListener("click", function () {
      categories.forEach(function (c) {
        c.classList.remove("is-active");
      });
      cat.classList.add("is-active");
      var key = cat.getAttribute("data-category");
      tiles.forEach(function (tile) {
        var match = tile.getAttribute("data-category");
        tile.style.display = !key || match === key ? "" : "none";
      });
    });
  });
}

function bindParallax() {
  var shell = qs(".as-app-shell");
  var diagParallax = qs("#diagParallax");
  if (!shell) return;
  shell.addEventListener("mousemove", function (evt) {
    var rect = shell.getBoundingClientRect();
    var cx = rect.left + rect.width / 2;
    var cy = rect.top + rect.height / 2;
    var dx = ((evt.clientX - cx) / rect.width) * 6;
    var dy = ((evt.clientY - cy) / rect.height) * 6;
    document.body.style.setProperty("--as-parallax-x", dx.toFixed(2) + "px");
    document.body.style.setProperty("--as-parallax-y", dy.toFixed(2) + "px");
    if (diagParallax) diagParallax.textContent = "On";
  });
}

function bootReady() {
  requestAnimationFrame(function () {
    document.body.classList.add("as-boot-ready");
  });
}

// ---------- Inspector ----------

function openInspector(data) {
  var panel = qs("#fileInspector");
  if (!panel) return;

  qs("#inspectorTitle").textContent = data.title || "File Inspector";
  qs("#inspectorMeta").textContent =
    data.meta || "Select an item to view details";
  qs("#inspectorPreview").textContent = data.preview || "No thumbnail";
  qs("#inspectorType").textContent = data.type || "—";
  qs("#inspectorSize").textContent = data.size || "—";
  qs("#inspectorModified").textContent = data.modified || "—";

  var suggestionsRoot =
    qs("#inspectorSuggestions ul") || qs("#inspectorSuggestions");
  if (suggestionsRoot) {
    suggestionsRoot.innerHTML = "";
    var suggestions =
      data.suggestions || [
        "Surface preview variants.",
        "Link to module graph.",
        "Flag for human approval."
      ];
    suggestions.forEach(function (line) {
      var li = document.createElement("li");
      li.textContent = line;
      suggestionsRoot.appendChild(li);
    });
  }

  panel.classList.add("is-open");
}

function closeInspector() {
  var panel = qs("#fileInspector");
  if (!panel) return;
  panel.classList.remove("is-open");
}

function bindInspectorTriggers() {
  var triggers = qsa(".as-gallery-tile, .as-clipper-item, .as-file-item");
  if (triggers.length) {
    triggers.forEach(function (el) {
      el.addEventListener("click", function () {
        var captionEl = el.querySelector(
          ".as-file-caption, .as-file-name, span"
        );
        var name = captionEl ? captionEl.textContent.trim() : "Selected file";
        openInspector({
          title: name,
          meta: "Inspection preview · mock",
          preview: el.getAttribute("data-preview") || name,
          type: el.getAttribute("data-type") || "asset",
          size: el.getAttribute("data-size") || "1.2 MB",
          modified: el.getAttribute("data-modified") || "Today"
        });
        if (notify) notify.info("Inspecting " + name);
      });
    });
  }

  var closer = qs("#closeInspector");
  if (closer) {
    closer.addEventListener("click", closeInspector);
  }
}

// ---------- Decision bar ----------

function initDecisionBar() {
  var btn = qs("#openDecisions");
  if (!btn) return;
  btn.addEventListener("click", function () {
    if (notify) notify.success("Human decisions panel opened (mock).");
  });
}

// ---------- Screen manager bootstrap ----------

function initScreenManager() {
  var manager = new ScreenManager();
  qsa(".as-screen").forEach(function (screen) {
    var id = screen.getAttribute("data-screen");
    manager.register(id, screen);
  });
  var diagScreens = qs("#diagScreens");
  if (diagScreens) diagScreens.textContent = String(manager.screens.size);
  return manager;
}

function initViewportDefaults() {
  viewport.setMode(appState.viewportMode || "website");
}

// ---------- Global search ----------

function bindGlobalSearch(manager) {
  var input = qs("#globalSearchInput");
  if (!input) return;
  input.addEventListener("keydown", function (evt) {
    if (evt.key === "Enter") {
      var value = (input.value || "").trim().toLowerCase();
      if (!value) return;
      if (value.indexOf("clip") !== -1) manager.show("patch");
      else if (
        value.indexOf("gallery") !== -1 ||
        value.indexOf("image") !== -1
      )
        manager.show("browser");
      else if (value.indexOf("review") !== -1) manager.show("review");
      else if (value.indexOf("uat") !== -1 || value.indexOf("app") !== -1)
        manager.show("uat");
      else if (value.indexOf("dev") !== -1) manager.show("dev");
      if (notify)
        notify.info(
          "Search routed to " +
            (screenLabels[appState.currentScreen] || appState.currentScreen)
        );
    }
  });
}

// ---------- Quick actions panel ----------

function bindQuickPanel(manager) {
  var panel = qs("#quickPanel");
  var openBtn = qs("#openQuickActions");
  var closeBtn = qs("#closeQuickPanel");
  if (openBtn && panel) {
    openBtn.addEventListener("click", function () {
      panel.classList.add("is-open");
    });
  }
  if (closeBtn && panel) {
    closeBtn.addEventListener("click", function () {
      panel.classList.remove("is-open");
    });
  }
  if (panel) {
    qsa("[data-action]", panel).forEach(function (btn) {
      btn.addEventListener("click", function () {
        var action = btn.getAttribute("data-action");
        if (!action) return;
        if (action.indexOf("goto-") === 0) {
          var target = action.replace("goto-", "");
          manager.show(target);
        } else if (action === "open-inspector") {
          openInspector({
            title: "Manual open",
            meta: "Quick action",
            preview: "—"
          });
        } else if (action === "open-ghost") {
          appState.ghostOpen = !appState.ghostOpen;
          var panelEl = qs(".as-ghost-panel");
          if (panelEl)
            panelEl.classList.toggle("is-open", appState.ghostOpen);
        } else if (action === "notify") {
          if (notify) notify.success("Quick action triggered.");
        }
        panel.classList.remove("is-open");
      });
    });
  }
}

// ---------- Command palette ----------

function buildPaletteCommands(manager) {
  return [
    {
      label: "Go to Browser",
      action: function () {
        manager.show("browser");
      }
    },
    {
      label: "Go to UAT",
      action: function () {
        manager.show("uat");
      }
    },
    {
      label: "Go to Review",
      action: function () {
        manager.show("review");
      }
    },
    {
      label: "Go to Patch",
      action: function () {
        manager.show("patch");
      }
    },
    {
      label: "Go to Dev",
      action: function () {
        manager.show("dev");
      }
    },
    {
      label: "Toggle AI Mode",
      action: function () {
        toggleFlag("aiMode");
      }
    },
    {
      label: "Toggle Experimental",
      action: function () {
        toggleFlag("experimental");
      }
    },
    {
      label: "Toggle Ghost",
      action: function () {
        var t = qs(".js-ghost-toggle");
        if (t) t.click();
      }
    },
    {
      label: "Open Inspector",
      action: function () {
        openInspector({
          title: "Palette open",
          meta: "Command palette",
          preview: "—"
        });
      }
    },
    {
      label: "Open Settings",
      action: function () {
        openSettings();
      }
    },
    {
      label: "Show Diagnostics",
      action: function () {
        toggleDiagnostics(true);
      }
    }
  ];
}

function renderCommandPalette(commands) {
  var list = qs("#commandList");
  if (!list) return;
  list.innerHTML = "";
  commands.forEach(function (cmd) {
    var item = document.createElement("div");
    item.className = "as-command-item";
    item.textContent = cmd.label;
    item.addEventListener("click", function () {
      cmd.action();
      closePalette();
    });
    list.appendChild(item);
  });
}

function openPalette() {
  var root = qs("#commandPalette");
  if (!root) return;
  root.classList.add("is-open");
  var input = qs(".as-command-input", root);
  if (input) {
    input.value = "";
    input.focus();
  }
}

function closePalette() {
  var root = qs("#commandPalette");
  if (!root) return;
  root.classList.remove("is-open");
}

function bindPalette(manager) {
  var commands = buildPaletteCommands(manager);
  renderCommandPalette(commands);

  var openBtn1 = qs("#openPalette");
  var openBtn2 = qs("#openCommandPalette");
  var closeBtn = qs("#closePalette");
  var input = qs(".as-command-input");

  if (openBtn1) openBtn1.addEventListener("click", openPalette);
  if (openBtn2) openBtn2.addEventListener("click", openPalette);
  if (closeBtn) closeBtn.addEventListener("click", closePalette);

  if (input) {
    input.addEventListener("input", function (evt) {
      var value = (evt.target.value || "").toLowerCase();
      var filtered = commands.filter(function (cmd) {
        return cmd.label.toLowerCase().indexOf(value) !== -1;
      });
      renderCommandPalette(filtered);
    });
  }

  window.addEventListener("keydown", function (evt) {
    if ((evt.ctrlKey || evt.metaKey) && evt.key.toLowerCase() === "k") {
      evt.preventDefault();
      openPalette();
    }
    if (evt.key === "Escape") {
      closePalette();
    }
  });
}

// ---------- Toggles & diagnostics ----------

function toggleFlag(flag) {
  appState[flag] = !appState[flag];
  persistState();
  updateStatusBar();
  initSwitches();
  if (notify)
    notify.info(
      flag + " " + (appState[flag] ? "enabled" : "disabled")
    );
}

function bindDiagnostics() {
  var diag = qs("#diagnostics");
  var toggleBtn = qs("#toggleDiag");
  var gridBtn = qs("#toggleGrid");

  if (toggleBtn && diag) {
    toggleBtn.addEventListener("click", function () {
      diag.classList.toggle("is-open");
    });
  }

  if (gridBtn) {
    gridBtn.addEventListener("click", function () {
      if (notify) notify.info("Grid overlay toggled (mock).");
    });
  }

  var diagViewport = qs("#diagViewport");
  if (diagViewport) {
    diagViewport.textContent =
      window.innerWidth < 800 ? "Mobile" : "Desktop";
  }
}

function toggleDiagnostics(forceOpen) {
  var diag = qs("#diagnostics");
  if (!diag) return;
  var shouldOpen =
    typeof forceOpen === "boolean"
      ? forceOpen
      : !diag.classList.contains("is-open");
  diag.classList.toggle("is-open", shouldOpen);
}

// ---------- Settings drawer ----------

function openSettings() {
  var drawer = qs("#settingsDrawer");
  if (!drawer) return;
  drawer.classList.add("is-open");
  appState.settingsOpen = true;
}

function closeSettings() {
  var drawer = qs("#settingsDrawer");
  if (!drawer) return;
  drawer.classList.remove("is-open");
  appState.settingsOpen = false;
}

function bindSettings() {
  var closeBtn = qs("#closeSettings");
  if (closeBtn) {
    closeBtn.addEventListener("click", closeSettings);
  }
  qsa('[data-route="settings"]').forEach(function (btn) {
    btn.addEventListener("click", openSettings);
  });
}

// ---------- Inspector hotkeys & draggables ----------

function bindInspectorHotkeys() {
  window.addEventListener("keydown", function (evt) {
    if ((evt.ctrlKey || evt.metaKey) && evt.key.toLowerCase() === "i") {
      evt.preventDefault();
      openInspector({
        title: "Hotkey open",
        meta: "Ctrl/Cmd+I",
        preview: "—"
      });
    }
  });
}

function bindDraggables() {
  qsa(".js-draggable").forEach(function (el) {
    var dragging = false;
    var offsetX = 0;
    var offsetY = 0;

    el.addEventListener("dblclick", function () {
      el.classList.toggle("is-floating");
      if (el.classList.contains("is-floating")) {
        el.style.position = "absolute";
        el.style.left = el.offsetLeft + "px";
        el.style.top = el.offsetTop + "px";
      } else {
        el.style.position = "";
        el.style.left = "";
        el.style.top = "";
      }
    });

    el.addEventListener("mousedown", function (evt) {
      if (!el.classList.contains("is-floating")) return;
      dragging = true;
      offsetX = evt.clientX - el.offsetLeft;
      offsetY = evt.clientY - el.offsetTop;
      document.body.style.userSelect = "none";
    });

    window.addEventListener("mousemove", function (evt) {
      if (!dragging) return;
      el.style.left = evt.clientX - offsetX + "px";
      el.style.top = evt.clientY - offsetY + "px";
    });

    window.addEventListener("mouseup", function () {
      dragging = false;
      document.body.style.userSelect = "";
    });
  });
}

// ---------- Global shortcuts ----------

function bindGlobalShortcuts(manager) {
  window.addEventListener("keydown", function (evt) {
    if (evt.key === "F2") {
      toggleDiagnostics();
    }
    if ((evt.ctrlKey || evt.metaKey) && evt.key.toLowerCase() === "b") {
      manager.show("browser");
    }
  });
}

// ---------- Initialization ----------

function initialize() {
  loadState();
  notify = createNotifier();

  var manager = initScreenManager();
  initRouteTabs(manager);
  initPillToggleGroups();
  initDropdowns();
  initCodexGhostPanel();
  initSwitches();
  initCategoryFilter();
  attachButtonRipples();
  bindParallax();
  bindInspectorTriggers();
  initDecisionBar();
  initViewportDefaults();
  bindGlobalSearch(manager);
  bindQuickPanel(manager);
  bindPalette(manager);
  bindDiagnostics();
  bindSettings();
  bindInspectorHotkeys();
  bindDraggables();
  bindGlobalShortcuts(manager);

  manager.show(appState.currentScreen);
  updateStatusBar();
  bootReady();
}

document.addEventListener("DOMContentLoaded", initialize);
