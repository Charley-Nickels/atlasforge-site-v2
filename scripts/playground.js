// AtlasStudio fake workstation interactions
// All behavior is simulated on the front-end; nothing is persisted or sent anywhere.

// ---------- Static definitions ----------
const FILE_MAP = {
  "/atlasstudio": { type: "folder" },
  "/scripts": { type: "folder" },
  "/styles": { type: "folder" },
  "/docs": { type: "folder" },
  "atlasstudio/playground.html": {
    type: "file",
    content: `<!DOCTYPE html>
<html>
  <head>
    <title>AtlasStudio</title>
  </head>
  <body class="as-body">
    <main id="workspace">pro fake workstation</main>
  </body>
</html>`,
  },
  "atlasstudio/atlasstudio.css": {
    type: "file",
    content: `:root {
  --theme: atlasforge-dark;
}
body {
  background: #05070d;
  color: #e8edf7;
}
.panel {
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
}`,
  },
  "atlasstudio/playground.js": {
    type: "file",
    content: `const workstation = createWorkstation({
  mode: 'sandbox',
  panels: ['left','center','right'],
});
workstation.boot(() => console.log('visual only'));`,
  },
  "scripts/main.js": {
    type: "file",
    content: `import { atlas } from './atlas.js';
const app = atlas.initialize({ theme: 'dark' });
app.mount('#app');
app.router.register('studio', () => 'fake route');`,
  },
  "styles/main.css": {
    type: "file",
    content: `body {
  margin: 0;
  background: #0b0e17;
  color: #eaeef7;
  font-family: system-ui, -apple-system, 'Inter', sans-serif;
}
a {
  color: #7bc4ff;
  text-decoration: none;
}
.panel { border: 1px solid rgba(255,255,255,0.1); }`,
  },
  "docs/atlas-notes.md": {
    type: "file",
    content: `# Atlas Notes
- studio: fake workstation overview
- engine: atlas-v runtime sketch
- oia: octopus in action mock world
- persistence: none (front-end only)`,
  },
  "docs/oia-design.md": {
    type: "file",
    content: `# OIA Design
- hero: mayor octavius
- systems: farming, fishing, trading
- presentation: front-end only
- renderer: atlasforge dark theme`,
  },
};

const EXPLORER_TREE = {
  name: "/atlasforge-site-v2",
  path: "/atlasforge-site-v2",
  type: "folder",
  children: [
    {
      name: "/atlasstudio",
      path: "/atlasstudio",
      type: "folder",
      children: [
        { name: "playground.html", path: "atlasstudio/playground.html", type: "file" },
        { name: "atlasstudio.css", path: "atlasstudio/atlasstudio.css", type: "file" },
        { name: "playground.js", path: "atlasstudio/playground.js", type: "file" },
      ],
    },
    {
      name: "/scripts",
      path: "/scripts",
      type: "folder",
      children: [{ name: "main.js", path: "scripts/main.js", type: "file" }],
    },
    {
      name: "/styles",
      path: "/styles",
      type: "folder",
      children: [{ name: "main.css", path: "styles/main.css", type: "file" }],
    },
    {
      name: "/docs",
      path: "/docs",
      type: "folder",
      children: [
        { name: "atlas-notes.md", path: "docs/atlas-notes.md", type: "file" },
        { name: "oia-design.md", path: "docs/oia-design.md", type: "file" },
      ],
    },
  ],
};

const moduleSnippets = {
  map: (target, prompt) => {
    const variants = [
      [
        `module: holo-map-${target}`,
        `target: ${target}`,
        `prompt: ${prompt || 'empty prompt (visual only)'}`,
        "layers:",
        "  - tiles: neon",
        "  - fog: simulated",
        "  - portals: decorative",
        "note: generated locally only",
      ],
      [
        `module: nav-grid-${target}`,
        `prompt: ${prompt || 'mock navigation prompt'}`,
        "layers:",
        "  - grid: holo",
        "  - beacons: local only",
        "  - trails: synthetic",
        "note: variations are cosmetic",
      ],
      [
        `module: atlas-map-${target}`,
        `prompt: ${prompt || 'visual sketch'}`,
        "layers:",
        "  - topology: stylized",
        "  - overlays: telemetry ghosts",
        "  - fx: parallax haze",
        "note: exported nowhere",
      ],
    ];
    return randomFrom(variants);
  },
  npc: (target, prompt) => {
    const variants = [
      [
        `module: npc-${target}`,
        `persona: kind guide`,
        `prompt: ${prompt || 'describe npc behavior'}`,
        "behavior: scripted ghosts",
        "voice: text-only",
        "save: disabled",
      ],
      [
        `module: npc-${target}-scout`,
        `prompt: ${prompt || 'fast scout mock'}`,
        "behavior: patrol + ping",
        "dialogue: canned responses",
        "persistence: none",
      ],
      [
        `module: npc-${target}-vendor`,
        `prompt: ${prompt || 'shop loop'}`,
        "inventory: decorative",
        "currency: fake credits",
        "telemetry: muted",
      ],
    ];
    return randomFrom(variants);
  },
  dialogue: (target, prompt) => {
    const variants = [
      [
        `dialogue: branching for ${target}`,
        `prompt: ${prompt || 'short narrative cue'}`,
        "nodes:",
        "  - intro -> choice a/b",
        "  - loopback: humor",
        "telemetry: muted",
      ],
      [
        `dialogue: holo-chat for ${target}`,
        `prompt: ${prompt || 'banter seed'}`,
        "nodes:",
        "  - greet -> joke",
        "  - branch -> lore drop",
        "safety: mock",
      ],
      [
        `dialogue: review bot for ${target}`,
        `prompt: ${prompt || 'review hints'}`,
        "nodes:",
        "  - question -> confirm",
        "  - loop -> annotate",
        "persistence: client memory",
      ],
    ];
    return randomFrom(variants);
  },
  system: (target, prompt) => {
    const variants = [
      [
        `system: ${target}-subsystem`,
        `prompt: ${prompt || 'system goals here'}`,
        "apis: mocked",
        "storage: none",
        "events: ui-only",
      ],
      [
        `system: ${target}-pipeline`,
        `prompt: ${prompt || 'pipeline idea'}`,
        "stages: hydrate -> render -> idle",
        "logging: simulated",
        "saves: blocked",
      ],
      [
        `system: ${target}-monitor`,
        `prompt: ${prompt || 'monitor sketch'}`,
        "streams: visuals + ghost metrics",
        "alerts: cosmetic",
        "storage: ephemeral",
      ],
    ];
    return randomFrom(variants);
  },
  ui: (target, prompt) => {
    const variants = [
      [
        `ui: overlay-${target}`,
        `prompt: ${prompt || 'ui mock'}`,
        "widgets: cards, buttons, toggles",
        "animations: css only",
        "state: ephemeral",
      ],
      [
        `ui: dock-${target}`,
        `prompt: ${prompt || 'dock layout'}`,
        "widgets: tabs + chip rail",
        "effects: glass + glow",
        "runtime: sandbox",
      ],
      [
        `ui: panel-${target}`,
        `prompt: ${prompt || 'panel sketch'}`,
        "widgets: accordion + badges",
        "fx: neon lines",
        "state: local only",
      ],
    ];
    return randomFrom(variants);
  },
};

const previewModes = {
  brainstorm: {
    icon: "💡",
    title: "Brainstorm Canvas",
    body: "Sticky ideas and ghost notes appear here. Visual only.",
    lines: ["• Idea: new module", "• Idea: test pipeline", "• Idea: ghost UX"],
  },
  uat: {
    icon: "🧪",
    title: "UAT Checklist",
    body: "Test Case 01, 02, 03 staged with phantom assertions.",
    lines: ["[ ] Test Case 01", "[ ] Test Case 02", "[ ] Negative Path"],
  },
  review: {
    icon: "📝",
    title: "Review Deck",
    body: "Comment bubbles and inline callouts. Nothing persists.",
    lines: ["// Reviewer: Looks good", "// Reviewer: Check spacing", "// Note: purely visual"],
  },
  patch: {
    icon: "⚙️",
    title: "Patch Runner",
    body: "Progress pulses without writing real files.",
    lines: ["> Validate", "> Bundle", "> Simulate Apply"],
  },
};

const state = {
  currentWorkflow: "brainstorm",
  selectedFile: "atlasstudio/playground.html",
  toggles: {
    aiSuggestions: true,
    experimentalFeatures: false,
    debugOverlay: false,
  },
  consoleLogs: [],
  consoleGroups: {},
  verbose: false,
  consoleAutoClear: false,
  consoleModeCycle: 0,
  currentCodeSnippet: null,
  patchState: "idle",
  patchProgress: 0,
  patchTimer: null,
  explorerTree: EXPLORER_TREE,
  expandedFolders: new Set(["/atlasforge-site-v2", "/atlasstudio", "/scripts", "/styles", "/docs"]),
  searchQuery: "",
  activeLine: null,
  lastPreviewToggles: null,
  previewClass: null,
  lastWorkflow: "brainstorm",
  moduleStatusTimer: null,
  moduleStatusMessage: "Waiting for a mock request…",
  moduleHistory: [],
};

// ---------- Helpers ----------
function qs(selector) {
  return document.querySelector(selector);
}

function qsa(selector) {
  return Array.from(document.querySelectorAll(selector));
}

function snippetToLines(snippet) {
  if (!snippet) return ["// missing snippet"];
  if (Array.isArray(snippet)) return snippet;
  if (typeof snippet === "string") return snippet.split("\n");
  if (snippet.lines) return snippet.lines;
  if (snippet.content) return snippet.content.split("\n");
  return ["// snippet unavailable"];
}

function escapeRegExp(value) {
  return value.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}

function escapeHTML(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function highlightText(text, query) {
  const fragment = document.createDocumentFragment();
  if (!query) {
    fragment.append(document.createTextNode(text));
    return fragment;
  }

  const safe = escapeRegExp(query);
  const regex = new RegExp(`(${safe})`, "ig");
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      fragment.append(document.createTextNode(text.slice(lastIndex, match.index)));
    }
    const mark = document.createElement("span");
    mark.className = "as-highlight";
    mark.textContent = match[0];
    fragment.append(mark);
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    fragment.append(document.createTextNode(text.slice(lastIndex)));
  }

  return fragment;
}

function collectFolderPaths(node, acc = []) {
  if (node.type === "folder") {
    acc.push(node.path);
    (node.children || []).forEach((child) => collectFolderPaths(child, acc));
  }
  return acc;
}

function expandAncestors(filePath) {
  const parts = filePath.split("/");
  state.expandedFolders.add(state.explorerTree.path);
  let current = "";
  for (let i = 0; i < parts.length - 1; i += 1) {
    current += `/${parts[i]}`;
    state.expandedFolders.add(current);
  }
}

function randomFrom(list) {
  if (!Array.isArray(list) || !list.length) return null;
  return list[Math.floor(Math.random() * list.length)];
}

function resolveFileType(filePath) {
  const lower = (filePath || "").toLowerCase();
  if (lower.endsWith(".html")) return { label: "HTML", mode: "html" };
  if (lower.endsWith(".css")) return { label: "CSS", mode: "css" };
  if (lower.endsWith(".js")) return { label: "JS", mode: "js" };
  if (lower.endsWith(".md")) return { label: "Markdown", mode: "md" };
  if (lower.endsWith(".mock")) return { label: "Mock Module", mode: "mock" };
  return { label: "Text", mode: "text" };
}

function applySyntaxHighlight(line, mode) {
  const escaped = escapeHTML(line);
  if (!escaped.trim()) return "";

  if (mode === "html") {
    let htmlLine = escaped;
    htmlLine = htmlLine.replace(/(&lt;!--.*?--&gt;)/g, '<span class="as-code-token as-code-comment">$1</span>');
    htmlLine = htmlLine.replace(
      /(&lt;\/?)([a-z0-9-]+)([^&]*?&gt;)/gi,
      (match, p1, p2, p3) => `${p1}<span class="as-code-token as-code-tag">${p2}</span>${p3}`
    );
    htmlLine = htmlLine.replace(
      /([a-z-:]+)=(&quot;[^&]*?&quot;|&#39;[^&]*?&#39;)/gi,
      '<span class="as-code-token as-code-attr">$1</span>=<span class="as-code-token as-code-string">$2</span>'
    );
    return htmlLine;
  }

  if (mode === "css") {
    let cssLine = escaped;
    cssLine = cssLine.replace(/(\/\*.*?\*\/)/g, '<span class="as-code-token as-code-comment">$1</span>');
    cssLine = cssLine.replace(
      /([a-z-]+)(\s*:\s*)([^;{}]+)/gi,
      '<span class="as-code-token as-code-attr">$1</span>$2<span class="as-code-token as-code-string">$3</span>'
    );
    return cssLine;
  }

  if (mode === "js" || mode === "mock") {
    let jsLine = escaped;
    jsLine = jsLine.replace(/(\/\/.*)/g, '<span class="as-code-token as-code-comment">$1</span>');
    jsLine = jsLine.replace(
      /(&quot;.*?&quot;|&#39;.*?&#39;)/g,
      '<span class="as-code-token as-code-string">$1</span>'
    );
    jsLine = jsLine.replace(
      /\b(const|let|function|return|import|export|if|else)\b/g,
      '<span class="as-code-token as-code-keyword">$1</span>'
    );
    return jsLine;
  }

  if (mode === "md") {
    return escaped.replace(/`([^`]*)`/g, '<span class="as-code-token as-code-string">`$1`</span>');
  }

  return escaped;
}

// ---------- Rendering ----------
function formatTimestamp() {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");
  return `${hh}:${mm}:${ss}`;
}

function logMessage(message, { verboseOnly = false, level, group = null } = {}) {
  const resolvedLevel = verboseOnly ? "VERBOSE" : level || "INFO";
  state.consoleLogs.push({
    text: message,
    verboseOnly,
    timestamp: formatTimestamp(),
    level: resolvedLevel,
    group,
  });
  renderConsole();
}

function renderModuleStatus(message) {
  const moduleStatus = qs("#moduleStatus");
  if (!moduleStatus) return;
  if (typeof message === "string") {
    state.moduleStatusMessage = message;
  }
  const statusLine = document.createElement("div");
  statusLine.className = "as-module-status-line";
  statusLine.textContent = state.moduleStatusMessage || "Waiting for a mock request…";

  moduleStatus.innerHTML = "";
  moduleStatus.appendChild(statusLine);

  if (state.moduleHistory.length) {
    state.moduleHistory.forEach((item, index) => {
      const historyLine = document.createElement("div");
      historyLine.className = "as-module-history-line";
      historyLine.textContent = `#${index + 1} [${item.timestamp}] ${item.type.toUpperCase()} · ${item.target}`;
      moduleStatus.appendChild(historyLine);
    });
  }
}

function startModuleStatusAnimation() {
  if (state.moduleStatusTimer) {
    clearInterval(state.moduleStatusTimer);
  }
  let tick = 0;
  renderModuleStatus("Generating... (visual only)");
  state.moduleStatusTimer = setInterval(() => {
    tick = (tick + 1) % 3;
    const dots = ".".repeat(tick + 1);
    renderModuleStatus(`Generating${dots} (visual only)`);
  }, 320);
}

function stopModuleStatusAnimation(finalMessage) {
  if (state.moduleStatusTimer) {
    clearInterval(state.moduleStatusTimer);
    state.moduleStatusTimer = null;
  }
  renderModuleStatus(finalMessage);
}

function renderConsole() {
  const consoleEl = qs("#buildConsole");
  if (!consoleEl) return;
  const shouldStick = consoleEl.scrollTop + consoleEl.clientHeight >= consoleEl.scrollHeight - 5;
  consoleEl.innerHTML = "";

  const createLine = (entry) => {
    const line = document.createElement("div");
    line.className = "as-console-line enter";
    line.dataset.level = entry.level || "INFO";
    line.textContent = `[${entry.timestamp || formatTimestamp()}] [${entry.level || "INFO"}] ${entry.text}`;
    setTimeout(() => line.classList.remove("enter"), 400);
    return line;
  };

  let currentGroup = null;
  let groupBody = null;

  state.consoleLogs.forEach((entry) => {
    if (entry.verboseOnly && !state.verbose) return;

    if (entry.group) {
      if (entry.group !== currentGroup) {
        currentGroup = entry.group;
        const groupWrapper = document.createElement("div");
        groupWrapper.className = "as-console-group";

        const header = document.createElement("div");
        header.className = "as-console-group-header";
        const caret = document.createElement("span");
        caret.className = "as-console-group-caret";
        const title = document.createElement("span");
        title.className = "as-console-group-title";
        title.textContent = entry.group;
        header.append(caret, title);

        const body = document.createElement("div");
        body.className = "as-console-group-body";

        const isCollapsed = Boolean(state.consoleGroups[entry.group]);
        if (isCollapsed) {
          groupWrapper.classList.add("is-collapsed");
          body.style.display = "none";
        }

        header.addEventListener("click", () => {
          const next = !state.consoleGroups[entry.group];
          state.consoleGroups[entry.group] = next;
          groupWrapper.classList.toggle("is-collapsed", next);
          body.style.display = next ? "none" : "";
        });

        groupWrapper.append(header, body);
        consoleEl.appendChild(groupWrapper);
        groupBody = body;
      }

      groupBody.appendChild(createLine(entry));
    } else {
      currentGroup = null;
      groupBody = null;
      consoleEl.appendChild(createLine(entry));
    }
  });

  if (shouldStick) {
    consoleEl.scrollTop = consoleEl.scrollHeight;
  }
}

function renderCodeViewer() {
  const codeLines = qs("#codeLines");
  const codeViewer = qs("#codeViewer");
  const activeFilePath = qs("#activeFilePath");
  if (!codeLines) return;
  const mapEntry = FILE_MAP[state.selectedFile];
  const snippet = mapEntry?.content ? snippetToLines(mapEntry.content) : snippetToLines(state.currentCodeSnippet);
  const { label: fileTypeLabel, mode: syntaxMode } = resolveFileType(state.selectedFile);
  codeLines.innerHTML = "";

  snippet.forEach((line, idx) => {
    const lineEl = document.createElement("div");
    lineEl.className = "as-code-line";

    const numberEl = document.createElement("div");
    numberEl.className = "as-code-number";
    numberEl.textContent = String(idx + 1).padStart(2, "0");

    const textEl = document.createElement("div");
    textEl.className = "as-code-text";

    if (!line || line.trim().length === 0) {
      textEl.textContent = " ";
      lineEl.classList.add("as-code-line--empty");
    } else {
      textEl.innerHTML = applySyntaxHighlight(line, syntaxMode);
    }

    if (state.activeLine === idx) {
      lineEl.classList.add("as-code-line--active");
    }

    lineEl.appendChild(numberEl);
    lineEl.appendChild(textEl);
    lineEl.addEventListener("click", () => {
      const current = codeLines.querySelector(".as-code-line--active");
      if (current && current !== lineEl) current.classList.remove("as-code-line--active");
      lineEl.classList.add("as-code-line--active");
      state.activeLine = idx;
    });

    codeLines.appendChild(lineEl);
  });

  if (activeFilePath) {
    activeFilePath.textContent = state.selectedFile;
  }

  const typeChip = codeLines.closest(".as-section")?.querySelector(".as-section-header .as-chip");
  if (typeChip) {
    typeChip.textContent = `VIEW · ${fileTypeLabel}`;
  }

  if (codeViewer) {
    codeViewer.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function updatePreview() {
  const chipWorkflow = qs("#chipWorkflow");
  const chipSelectedFile = qs("#chipSelectedFile");
  const chipPatch = qs("#chipPatch");
  const flagAI = qs("#flagAI");
  const flagExperimental = qs("#flagExperimental");
  const flagDebug = qs("#flagDebug");
  const previewTitle = qs("#previewTitle");
  const previewBody = qs("#previewBody");
  const patchStatus = qs("#patchStatus");
  const previewShell = qs(".as-preview");
  const previewWindow = qs(".as-preview-window");
  const patchControls = qs(".as-patch-controls");

  const previousToggles = state.lastPreviewToggles || { ...state.toggles };

  if (chipWorkflow) chipWorkflow.textContent = `Workflow: ${state.currentWorkflow}`;
  if (chipSelectedFile) chipSelectedFile.textContent = `File: ${state.selectedFile}`;
  if (chipPatch) chipPatch.textContent = `Patch: ${state.patchState}`;

  if (flagAI) flagAI.textContent = `AI Suggestions: ${state.toggles.aiSuggestions ? "ON" : "OFF"}`;
  if (flagExperimental)
    flagExperimental.textContent = `Experimental: ${state.toggles.experimentalFeatures ? "ON" : "OFF"}`;
  if (flagDebug) flagDebug.textContent = `Debug: ${state.toggles.debugOverlay ? "ON" : "OFF"}`;

  const modeCopy = previewModes[state.currentWorkflow];
  if (modeCopy) {
    if (previewTitle) previewTitle.textContent = `${modeCopy.icon} ${modeCopy.title}`;
    if (previewBody) {
      previewBody.innerHTML = "";
      const lines = modeCopy.lines && modeCopy.lines.length ? modeCopy.lines : [modeCopy.body];
      lines.forEach((line) => {
        const lineEl = document.createElement("div");
        lineEl.className = `as-preview-body-line as-preview-body-line--${state.currentWorkflow}`;
        lineEl.textContent = line;
        previewBody.appendChild(lineEl);
      });
    }
  }

  if (previewShell) {
    if (state.previewClass) previewShell.classList.remove(state.previewClass);
    const nextClass = `as-preview--${state.currentWorkflow}`;
    previewShell.classList.add(nextClass);
    state.previewClass = nextClass;
  }

  if (patchStatus) {
    if (state.patchState === "running") {
      patchStatus.textContent = `Patch runner: Running (${state.patchProgress}%)`;
    } else if (state.patchState === "complete") {
      patchStatus.textContent = "Patch runner: Complete (visual only)";
    } else {
      patchStatus.textContent = "Patch runner: Idle";
    }
  }

  if (patchControls) {
    let progressWidth = 0;
    if (state.patchState === "running") progressWidth = state.patchProgress;
    if (state.patchState === "complete") progressWidth = 100;
    patchControls.style.setProperty("--patch-progress", `${progressWidth}%`);
  }

  const flagMap = [
    [flagAI, "aiSuggestions"],
    [flagExperimental, "experimentalFeatures"],
    [flagDebug, "debugOverlay"],
  ];
  flagMap.forEach(([el, key]) => {
    if (!el) return;
    if (previousToggles[key] !== state.toggles[key]) {
      el.classList.add("changed");
      setTimeout(() => el.classList.remove("changed"), 450);
    }
  });
  state.lastPreviewToggles = { ...state.toggles };

  if (previewWindow && state.lastWorkflow !== state.currentWorkflow) {
    previewWindow.classList.add("as-preview-window--swap");
    setTimeout(() => previewWindow.classList.remove("as-preview-window--swap"), 380);
  }
  state.lastWorkflow = state.currentWorkflow;
}

function renderExplorer() {
  const explorerRoot = qs("#fileExplorer");
  if (!explorerRoot) return;
  explorerRoot.innerHTML = "";

  const query = state.searchQuery.trim().toLowerCase();

  const nodeMatches = (node) => {
    if (!query) return true;
    const nameMatches = node.name.toLowerCase().includes(query);
    if (nameMatches) return true;
    if (node.type === "folder") {
      return (node.children || []).some((child) => nodeMatches(child));
    }
    return false;
  };

  const createNode = (node) => {
    const visible = nodeMatches(node);
    if (node.type === "folder") {
      const wrapper = document.createElement("div");
      wrapper.className = "as-folder";
      if (state.expandedFolders.has(node.path)) wrapper.classList.add("expanded");
      if (!visible) wrapper.classList.add("is-hidden");

      const label = document.createElement("div");
      label.className = "as-folder-label";
      const caret = document.createElement("span");
      caret.className = "as-caret";
      label.appendChild(caret);
      const title = document.createElement("span");
      title.appendChild(highlightText(node.name, query));
      label.appendChild(title);

      const childrenContainer = document.createElement("div");
      childrenContainer.className = "as-folder-children";
      if (!state.expandedFolders.has(node.path)) {
        childrenContainer.style.display = "none";
      }
      (node.children || []).forEach((child) => {
        childrenContainer.appendChild(createNode(child));
      });

      label.addEventListener("click", () => {
        if (state.expandedFolders.has(node.path)) {
          state.expandedFolders.delete(node.path);
          wrapper.classList.remove("expanded");
          childrenContainer.style.display = "none";
        } else {
          state.expandedFolders.add(node.path);
          wrapper.classList.add("expanded");
          childrenContainer.style.display = "";
        }
      });

      wrapper.appendChild(label);
      wrapper.appendChild(childrenContainer);
      return wrapper;
    }

    // file node
    const fileEl = document.createElement("div");
    fileEl.className = "as-file";
    fileEl.setAttribute("data-file", node.path);
    if (!visible) fileEl.classList.add("is-hidden");
    const fileLabel = document.createElement("span");
    fileLabel.appendChild(highlightText(node.name, query));
    fileEl.appendChild(fileLabel);
    if (state.selectedFile === node.path) {
      fileEl.classList.add("selected");
    }

    fileEl.addEventListener("click", () => {
      expandAncestors(node.path);
      state.selectedFile = node.path;
      state.activeLine = null;
      state.currentCodeSnippet = FILE_MAP[node.path]?.content || null;
      renderExplorer();
      renderCodeViewer();
      updatePreview();
      logMessage(`[Explorer] Selected file: ${node.path} (simulated)`, { group: "explorer" });
    });

    return fileEl;
  };

  explorerRoot.appendChild(createNode(state.explorerTree));
}

// ---------- Bindings ----------
function bindWorkflowTabs() {
  qsa("#workflowTabs .as-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      const workflow = tab.getAttribute("data-workflow") || "brainstorm";
      state.currentWorkflow = workflow;
      qsa("#workflowTabs .as-tab").forEach((btn) => {
        btn.classList.toggle("as-tab--active", btn === tab);
      });
      if (state.consoleAutoClear) {
        state.consoleLogs = [];
        state.consoleGroups = {};
        renderConsole();
        logMessage(`[Console] Auto-cleared logs on workflow switch to ${workflow}.`, { group: "workflow" });
      }
      updatePreview();
      logMessage(`[Workflow] Switched to ${workflow.toUpperCase()} (simulated).`, { group: "workflow" });
    });
  });

  qsa("#workflowTabs .as-tab").forEach((tab) => {
    const workflow = tab.getAttribute("data-workflow");
    if (workflow === state.currentWorkflow) {
      tab.classList.add("as-tab--active");
    }
  });
}

function bindToggles() {
  qsa(".as-toggle").forEach((toggle) => {
    const key = toggle.getAttribute("data-toggle");
    const switchEl = toggle.querySelector(".as-toggle-switch");
    if (!key || !switchEl) return;

    const applyVisual = () => {
      toggle.classList.toggle("is-on", Boolean(state.toggles[key]));
    };

    applyVisual();

    switchEl.addEventListener("click", () => {
      state.toggles[key] = !state.toggles[key];
      applyVisual();
      updatePreview();
      logMessage(`[Flags] ${key} turned ${state.toggles[key] ? "ON" : "OFF"}.`, { group: "toggles" });
    });
    });
}

function bindConsoleControls() {
  const clearBtn = qs("#clearLog");
  const verboseToggle = qs("#verboseToggle");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      state.consoleLogs = [];
      state.consoleGroups = {};
      renderConsole();
    });
  }
  if (verboseToggle) {
    verboseToggle.checked = false;
    verboseToggle.indeterminate = false;
    verboseToggle.addEventListener("change", () => {
      state.consoleModeCycle = (state.consoleModeCycle + 1) % 3;
      if (state.consoleModeCycle === 1) {
        state.verbose = true;
        state.consoleAutoClear = false;
        verboseToggle.checked = true;
        verboseToggle.indeterminate = false;
        logMessage("[Console] Verbose ON", { group: "console" });
      } else if (state.consoleModeCycle === 2) {
        state.verbose = false;
        state.consoleAutoClear = true;
        verboseToggle.checked = true;
        verboseToggle.indeterminate = true;
        logMessage("[Console] Auto-Clear ON", { group: "console" });
      } else {
        state.verbose = false;
        state.consoleAutoClear = false;
        verboseToggle.checked = false;
        verboseToggle.indeterminate = false;
        logMessage("[Console] Verbose OFF, Auto-Clear OFF", { group: "console" });
      }
      renderConsole();
    });
  }
}

function bindExplorerControls() {
  const search = qs(".as-search");
  const expandAllBtn = qs("#expandAll");
  const collapseAllBtn = qs("#collapseAll");

  if (search) {
    search.addEventListener("input", () => {
      state.searchQuery = search.value || "";
      renderExplorer();
    });
  }

  if (expandAllBtn) {
    expandAllBtn.addEventListener("click", () => {
      state.expandedFolders = new Set(collectFolderPaths(state.explorerTree));
      renderExplorer();
      logMessage("[Explorer] Expanded all folders.", { group: "explorer" });
    });
  }

  if (collapseAllBtn) {
    collapseAllBtn.addEventListener("click", () => {
      state.expandedFolders = new Set([state.explorerTree.path]);
      renderExplorer();
      logMessage("[Explorer] Collapsed all folders.", { group: "explorer" });
    });
  }
}

function bindModuleGenerator() {
  const form = qs("#moduleForm");
  const moduleContainer = form?.closest(".as-module");
  const codeViewer = qs("#codeViewer");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const type = qs("#moduleType")?.value || "map";
    const target = qs("#moduleTarget")?.value || "studio";
    const prompt = qs("#modulePrompt")?.value.trim() || "";

    moduleContainer?.classList.add("as-module-loading");
    codeViewer?.classList.add("as-module-skeleton");
    startModuleStatusAnimation();
    logMessage(`[Generator] Request for ${type.toUpperCase()} targeting ${target}.`, {
      level: "INFO",
      group: "generator",
    });
    logMessage(`[Generator] Simulating Codex module generation (no real code saved).`, {
      verboseOnly: true,
      level: "VERBOSE",
      group: "generator",
    });

    setTimeout(() => {
      const buildSnippet = moduleSnippets[type] || moduleSnippets.map;
      const lines = buildSnippet(target, prompt);
      state.currentCodeSnippet = { lines };
      state.selectedFile = `generated/${type}-${target}.mock`;
      state.activeLine = null;
      renderCodeViewer();
      updatePreview();
      const timestamp = formatTimestamp();
      state.moduleHistory.unshift({ type, target, timestamp, label: `${type}-${target}` });
      if (state.moduleHistory.length > 5) {
        state.moduleHistory.pop();
      }
      stopModuleStatusAnimation("Draft ready (client-side only).");
      moduleContainer?.classList.remove("as-module-loading");
      codeViewer?.classList.remove("as-module-skeleton");
      logMessage(`[Generator] Completed fake module for ${target}.`, { level: "INFO", group: "generator" });
      renderModuleStatus();
    }, 750);
  });
}

function runPatchSimulation() {
  if (state.patchState === "running") return;
  state.patchState = "running";
  state.patchProgress = 0;
  updatePreview();
  logMessage("[Patch] Starting fake patch run...", { group: "patch" });
  state.patchTimer = setInterval(() => {
    state.patchProgress = Math.min(100, state.patchProgress + 12);
    updatePreview();
    if (state.patchProgress >= 100) {
      clearInterval(state.patchTimer);
      state.patchTimer = null;
      state.patchState = "complete";
      updatePreview();
      logMessage("[Patch] Fake patch completed. No files were modified.", { group: "patch" });
    } else if (state.patchProgress % 24 === 0) {
      logMessage(`[Patch] Progress ${state.patchProgress}%`, { verboseOnly: true, group: "patch" });
    }
  }, 450);
}

function resetPatchSimulation() {
  if (state.patchTimer) {
    clearInterval(state.patchTimer);
    state.patchTimer = null;
  }
  state.patchState = "idle";
  state.patchProgress = 0;
  updatePreview();
  logMessage("[Patch] Reset patch state to idle.", { group: "patch" });
}

function bindPatchButtons() {
  const runBtn = qs("#runPatch");
  const resetBtn = qs("#resetPatch");
  if (runBtn) runBtn.addEventListener("click", runPatchSimulation);
  if (resetBtn) resetBtn.addEventListener("click", resetPatchSimulation);
}

// ---------- Initialization ----------
function initialize() {
  state.currentCodeSnippet = FILE_MAP[state.selectedFile]?.content || "// default snippet";
  renderExplorer();
  renderCodeViewer();
  bindWorkflowTabs();
  bindExplorerControls();
  bindToggles();
  bindConsoleControls();
  bindModuleGenerator();
  bindPatchButtons();
  renderModuleStatus();
  updatePreview();
  logMessage("[System] AtlasStudio fake workstation initialized.", { group: "system" });
  logMessage("[System] Explorer initialized.", { group: "system" });
}

window.addEventListener("DOMContentLoaded", initialize);
