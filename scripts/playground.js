/* ===========================================================
   ATLASSTUDIO WORKSTATION — LEVEL 2 SIMULATION ENGINE
   Front-end only. No storage, no uploads, no real AI.
   =========================================================== */

/* -----------------------------------------------------------
   GLOBAL STATE
----------------------------------------------------------- */
const AS = {
  workspace: null,       // 'oia', 'atlasv', 'skb'
  queue: null,           // 'brainstorm', 'uat', 'review', 'patch'
  featureIndex: 0,       // index of active feature
  features: [],          // current feature array
  snapshots: {},         // snapshot data
  history: [],           // decision history
  currentTab: "details",
  copilotTimer: null
};

/* ===========================================================
   SAMPLE DATA — FAKE FEATURES & SNAPSHOTS
=========================================================== */

/* OIA: Octopus in Action */
const FEATURES_OIA = {
  brainstorm: [
    {
      title: "Mailbox – Introduce Citizen Tasks",
      category: "Gameplay",
      description:
        "Mailbox system for daily civic tasks: letters, notices, and gentle reminders for the harbor.",
      details: [
        "Triggered by time-of-day cycles",
        "Tasks affect citizen schedules and moods",
        "Gentle stakes: tidy harbor, clean walkways"
      ]
    },
    {
      title: "City Hall Window Hours",
      category: "World",
      description:
        "City Hall has defined open/close hours to create gentle scheduling pressure without harsh fail states.",
      details: [
        "Mayor Octavius' office lights turn on/off",
        "Certain tasks only available during open hours",
        "UI hints if player repeatedly misses a window"
      ]
    }
  ],
  uat: [
    {
      title: "Harbor Pathfinding Adjustments",
      category: "Systems",
      description:
        "Test smoother pathing for otters, crabs, and beavers around the dock ladder and narrow walkways.",
      details: [
        "Reduce path jitter near dock edge",
        "Avoid crab pile-ups during market hours",
        "Respect small collision radius around street lamps"
      ]
    }
  ],
  review: [
    {
      title: "World Map Outline Pass",
      category: "Art",
      description:
        "Review the neon-outline pass for OIA's harbor map: coastline, docks, city hall, and lighthouse.",
      details: [
        "Check coastline accuracy vs. design sketch",
        "Confirm warm orange highlight on key buildings",
        "Ensure zoom-friendly readability"
      ]
    }
  ],
  patch: [
    {
      title: "Day/Night Transition Timing",
      category: "Systems",
      description:
        "Patch final timing for dusk glow, lantern flicker, and harbor ambient audio shift.",
      details: [
        "Shorten dusk fade by ~0.5s",
        "Lanterns stagger flicker instead of all-at-once",
        "Fade in evening harbor loop 1–2 seconds earlier"
      ]
    }
  ]
};

/* Atlas-V Engine */
const FEATURES_ATLASV = {
  brainstorm: [
    {
      title: "Navigator Orbit Definition",
      category: "Engine",
      description:
        "Define the Navigator orbit responsible for intake and pointer routing between workspaces.",
      details: [
        "3-node ring: Intake, Route, Confirm",
        "Rotates based on active constraints",
        "Outputs candidate paths for FlowSim"
      ]
    },
    {
      title: "Memory Layer Sketch",
      category: "Engine",
      description:
        "Sketch a Memory layer that tracks the last 5–7 decisions for context-sensitive hints.",
      details: [
        "Stores recent decisions per workspace",
        "Clears partial history on snapshot switch",
        "Surfaces as 'recap' messages in Copilot"
      ]
    }
  ],
  uat: [
    {
      title: "Guard Condition Simulation",
      category: "Safety",
      description:
        "Simulate Guard checks for contradictory decisions across related features.",
      details: [
        "Flag 'Yes' + 'No' conflicts on linked items",
        "Suggest turning one into 'Later' instead",
        "Write console events when conflicts appear"
      ]
    }
  ],
  review: [
    {
      title: "FlowSim Timeline Sanity",
      category: "Simulation",
      description:
        "Review FlowSim's interpolation logic for patch timelines.",
      details: [
        "Ensure events are ordered by effective time, not decision time",
        "Support small sub-events (e.g., micro-patches)",
        "Avoid 'teleporting' states in the UI"
      ]
    }
  ],
  patch: [
    {
      title: "Orbit Glow Pass",
      category: "Art",
      description:
        "Patch final glow weights for Atlas-V orbit diagrams and diagram legend.",
      details: [
        "Sharper outer ring edge",
        "Soft inner cyan gradient toward center",
        "Dim labels to keep glow dominant"
      ]
    }
  ]
};

/* SKB: Audio Lab */
const FEATURES_SKB = {
  brainstorm: [
    {
      title: "Stem Categorization by Mood",
      category: "Audio",
      description:
        "Classify base stems into moods (calm, active, playful, eerie) for each world.",
      details: [
        "Minimum 5 base moods",
        "Per-world variants (harbor, engine room, UI lab)",
        "Tag stems so future tools can route them"
      ]
    }
  ],
  uat: [
    {
      title: "Seamless Loop Testing",
      category: "Audio",
      description:
        "Validate that ambient loops play without pops or gaps when repeated.",
      details: [
        "Remove clicks at region boundaries",
        "Use short cross-fades (~10–20ms)",
        "Check playback in at least two engines"
      ]
    }
  ],
  review: [],
  patch: []
};

/* Snapshots */
AS.snapshots = {
  1: {
    diff: [
      { change: "Moved 2 items from Brainstorm → UAT." },
      { change: "Resurfaced 1 'Later' item for reconsideration." }
    ],
    summary: "Early iteration: triage obvious wins and keep one idea warm."
  },
  2: {
    diff: [
      { change: "Expanded 1 complex feature into 3 sub-features." },
      { change: "Marked 1 conflicting item as 'Later' after Guard warnings." }
    ],
    summary: "Increased complexity; Guard begins to earn its keep."
  },
  3: {
    diff: [
      { change: "Patched timing offsets for world transitions." },
      { change: "Updated Atlas-V orbit glow styling for final pass." }
    ],
    summary: "Polish pass with world + engine visuals converging."
  }
};

/* ===========================================================
   COPILOT TEMPLATES & ENGINE
=========================================================== */

const COPILOT_TEMPLATES = {
  yes: {
    default: [
      "Nice. Approved and moved forward in the workflow.",
      "Locked in. This one has clear next steps.",
      "Solid choice — this strengthens the version."
    ],
    oia: [
      "Harbor approved. Mayor Octavius will be pleased.",
      "Good call. The town’s rhythm just got smoother.",
      "Stamped at City Hall — this one moves forward."
    ],
    atlasv: [
      "Navigator confirms this as a stable route.",
      "Guard found no conflicts. Path accepted.",
      "FlowSim integrated the change without drift."
    ],
    skb: [
      "Ear-approved. This stem fits the current palette.",
      "Good. This gives the mix a stronger spine.",
      "Keeping this in rotation — it's a keeper."
    ]
  },
  no: {
    default: [
      "Logged as a rejection. Keeps the queue clean.",
      "Fair — not every idea belongs in this version.",
      "Dropped for now. It can be reborn later."
    ],
    oia: [
      "Harbor committee quietly shelves this one.",
      "The townsfolk shrug and move on.",
      "Better to skip than add noise to the harbor."
    ],
    atlasv: [
      "Guard flags this as non-viable. Route closed.",
      "Navigator discards this branch as inefficient.",
      "FlowSim predicts too much friction from this path."
    ],
    skb: [
      "Cut from the mix — it was muddying the mood.",
      "Some sounds belong on the cutting-room floor.",
      "Leaving more headroom by saying no here."
    ]
  },
  later: {
    default: [
      "Marked as Later. I’ll resurface it in the next iteration.",
      "Stashed for future sessions — nothing lost.",
      "Queued for resurfacing in a later version."
    ],
    oia: [
      "Pinned to the notice board for a future market day.",
      "Town Hall keeps this on file for a quieter season.",
      "Mayor Octavius scribbles 'revisit later' in the margins."
    ],
    atlasv: [
      "Guard moves this into a low-priority orbit.",
      "Navigator parks this route in the backlog ring.",
      "FlowSim will revisit when surrounding routes stabilize."
    ],
    skb: [
      "Leaving this in the ideas crate for another session.",
      "Might shine in a different mood or tempo.",
      "Shelving gently, not deleting."
    ]
  },
  expand: {
    default: [
      "Great call. This needs more detail — I’ll spin out sub-features.",
      "Marked for expansion. We’ll dig into this shortly.",
      "Splitting this into a deeper branch with multiple angles."
    ],
    oia: [
      "Let’s unpack this into smaller harbor tasks.",
      "More letters in the mailbox, more fun for the citizens.",
      "City Hall wants a more detailed breakdown."
    ],
    atlasv: [
      "Breaking this into discrete engine concerns.",
      "Navigator, Memory, Guard, and FlowSim all want a piece of this.",
      "Turning this into a multi-orbit scenario."
    ],
    skb: [
      "Splitting into multiple stems with different textures.",
      "Let’s explore variations on this motif.",
      "Decomposing this into layers: rhythm, texture, space."
    ]
  },
  selectFeature: [
    "Loaded a new feature. Review details, then choose your path.",
    "Feature focused. Decide if it belongs in this version.",
    "Context loaded — tune your decision."
  ],
  workspace: [
    "Workspace loaded. Queues updated to match this domain.",
    "Switched context — let’s see how this world thinks.",
    "New domain selected. I’ll adjust my tone accordingly."
  ],
  snapshot: [
    "Snapshot loaded. Check the Diff tab to see what changed.",
    "Version boundary in view — timeline updated.",
    "Pulled historical changes; good moment to reflect on direction."
  ]
};

function getWorkspaceKey() {
  if (!AS.workspace) return "default";
  return AS.workspace;
}

function pickTemplate(category, workspaceAware = true) {
  const key = getWorkspaceKey();
  const entry = COPILOT_TEMPLATES[category];
  if (!entry) return ["Processing…"];
  if (workspaceAware && typeof entry === "object" && !Array.isArray(entry)) {
    return entry[key] || entry.default;
  }
  if (Array.isArray(entry)) return entry;
  return entry.default || ["Processing…"];
}

function copilotPost(category, workspaceAware = true) {
  const log = document.getElementById("as-copilot-log");
  if (!log) return;

  // thinking bubble
  const thinking = document.createElement("div");
  thinking.className = "as-copilot-msg thinking";
  thinking.innerHTML = `
    <span class="as-thinking-dot"></span>
    <span class="as-thinking-dot"></span>
    <span class="as-thinking-dot"></span>
  `;
  log.appendChild(thinking);
  log.scrollTop = log.scrollHeight;

  if (AS.copilotTimer) clearTimeout(AS.copilotTimer);

  AS.copilotTimer = setTimeout(() => {
    thinking.remove();

    const msg = document.createElement("div");
    const workspaceKey = getWorkspaceKey();
    let extraClass = "";

    if (workspaceKey === "oia") extraClass = "oia";
    else if (workspaceKey === "atlasv") extraClass = "engine";
    else if (workspaceKey === "skb") extraClass = "skb";

    msg.className = `as-copilot-msg ${extraClass || "engine"}`;

    const pool = pickTemplate(category, workspaceAware);
    msg.textContent = pool[Math.floor(Math.random() * pool.length)];
    log.appendChild(msg);
    log.scrollTop = log.scrollHeight;
  }, 600 + Math.random() * 400);
}

/* ===========================================================
   FEATURE / QUEUE LOADING
=========================================================== */

function getWorkspaceFeatures() {
  if (AS.workspace === "oia") return FEATURES_OIA;
  if (AS.workspace === "atlasv") return FEATURES_ATLASV;
  if (AS.workspace === "skb") return FEATURES_SKB;
  return null;
}

function highlightActiveButtons() {
  document.querySelectorAll(".as-nav-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.workspace === AS.workspace);
  });
  document.querySelectorAll(".as-queue-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.queue === AS.queue);
  });
}

function setFeature(feature) {
  const titleEl = document.getElementById("as-active-title");
  const catEl = document.getElementById("as-active-category");
  const descEl = document.getElementById("as-active-description");
  const detailsPanel = document.getElementById("as-tab-details");

  if (!titleEl || !catEl || !descEl || !detailsPanel) return;

  titleEl.textContent = feature.title || "Untitled";
  catEl.textContent = feature.category || "";
  descEl.textContent = feature.description || "";

  if (Array.isArray(feature.details)) {
    detailsPanel.innerHTML = `
      <p>Details:</p>
      <ul>${feature.details.map((d) => `<li>${d}</li>`).join("")}</ul>
    `;
  } else {
    detailsPanel.innerHTML = `<p>No additional details.</p>`;
  }

  // reset sub-features drawer on feature change
  const sub = document.getElementById("as-subfeatures");
  const list = document.getElementById("as-subfeatures-list");
  if (sub && list) {
    sub.classList.add("hidden");
    list.innerHTML = "";
  }

  // reset diff & timeline content for new feature
  const diffPanel = document.getElementById("as-tab-diff");
  const timelinePanel = document.getElementById("as-tab-timeline");
  if (diffPanel) {
    diffPanel.innerHTML = `<p>Select a snapshot or version to show diff between builds.</p>`;
  }
  if (timelinePanel && !timelinePanel.querySelector("#as-console-log")) {
    // in case initial markup changed, ensure console exists
    timelinePanel.innerHTML = `
      <p class="as-console-intro">
        Console-style events from the engine perspective appear here as you make decisions and load snapshots.
      </p>
      <div id="as-console-log" class="as-console-log">
        <p class="as-console-line as-console-muted">No events yet. Make a decision to start logging.</p>
      </div>
    `;
  }
}

function loadQueue(queueName) {
  const data = getWorkspaceFeatures();
  AS.queue = queueName;
  AS.featureIndex = 0;
  AS.features = data && data[queueName] ? data[queueName] : [];
  highlightActiveButtons();

  if (!AS.features.length) {
    setFeature({
      title: "No items in queue",
      category: queueName,
      description: "This queue is currently empty. Try another queue or workspace."
    });
    return;
  }

  setFeature(AS.features[0]);
  copilotPost("selectFeature", false);
  logConsole(`[Navigator] Loaded queue: ${queueName} (${AS.features.length} items).`);
}

/* ===========================================================
   DECISION HANDLING
=========================================================== */

function makeDecision(type) {
  if (!AS.features.length) return;
  const current = AS.features[AS.featureIndex];
  if (!current) return;

  // log in console
  logConsole(
    `[Decision] ${type.toUpperCase()} on "${current.title}" in ${AS.queue.toUpperCase()} (${AS.workspace || "no workspace"}).`
  );

  // history
  addDecisionHistory(current.title, type);

  // handle special Expand behavior
  if (type === "expand") {
    generateSubfeatures(current.title);
  }

  // update timeline text
  const timelinePanel = document.getElementById("as-tab-timeline");
  if (timelinePanel) {
    const logEl = document.getElementById("as-console-log");
    if (logEl && logEl.children.length > 0) {
      // keep existing console log, just re-affirm it
    } else {
      timelinePanel.innerHTML = `
        <p class="as-console-intro">
          Console-style events from the engine perspective appear here as you make decisions and load snapshots.
        </p>
        <div id="as-console-log" class="as-console-log">
          <p class="as-console-line as-console-muted">Events will appear here as you work.</p>
        </div>
      `;
    }
  }

  // copilot commentary based on workspace
  copilotPost(type, true);

  // auto-advance
  advanceFeature();
}

function advanceFeature() {
  if (!AS.features.length) return;
  if (AS.featureIndex < AS.features.length - 1) {
    AS.featureIndex += 1;
    const next = AS.features[AS.featureIndex];
    setFeature(next);
    logConsole(`[Navigator] Auto-advanced to next feature: "${next.title}".`);
  } else {
    logConsole("[Navigator] End of queue reached. No further items to auto-advance.");
  }
}

/* ===========================================================
   SUB-FEATURE GENERATION (EXPAND)
=========================================================== */

const SUBFEATURE_PHRASES = [
  "Break this into a visual pass and a systems pass.",
  "Identify dependencies before scheduling.",
  "Add a lightweight tutorial or onboarding moment.",
  "Consider edge cases and failure states.",
  "Define what's 'good enough' for this version.",
  "Mark spots that need real user feedback later."
];

function generateSubfeatures(baseTitle) {
  const subContainer = document.getElementById("as-subfeatures");
  const list = document.getElementById("as-subfeatures-list");
  if (!subContainer || !list) return;

  list.innerHTML = "";
  const count = 2 + Math.floor(Math.random() * 3); // 2–4 items

  for (let i = 0; i < count; i++) {
    const li = document.createElement("li");
    const phrase =
      SUBFEATURE_PHRASES[Math.floor(Math.random() * SUBFEATURE_PHRASES.length)];
    li.textContent = `${baseTitle} — ${phrase}`;
    list.appendChild(li);
  }

  subContainer.classList.remove("hidden");
}

/* ===========================================================
   SNAPSHOTS & VERSION STRIP
=========================================================== */

function loadSnapshot(n) {
  const snap = AS.snapshots[n];
  if (!snap) return;

  const diffPanel = document.getElementById("as-tab-diff");
  if (diffPanel) {
    diffPanel.innerHTML = `
      <p><strong>Changes:</strong></p>
      <ul>${snap.diff.map((d) => `<li>${d.change}</li>`).join("")}</ul>
      <p><strong>Summary:</strong> ${snap.summary}</p>
    `;
  }

  switchTab("diff");
  logConsole(`[FlowSim] Loaded snapshot #${n}.`);
  copilotPost("snapshot", false);
}

function initVersionStrip() {
  const buttons = document.querySelectorAll(".as-version-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const snapId = btn.dataset.snap;
      if (snapId) {
        loadSnapshot(snapId);
      } else {
        // base version: clear diff
        const diffPanel = document.getElementById("as-tab-diff");
        if (diffPanel) {
          diffPanel.innerHTML = `<p>No diff — this is the baseline version.</p>`;
        }
        logConsole(`[Memory] Viewing baseline version: ${btn.dataset.version}.`);
      }
    });
  });
}

/* ===========================================================
   TAB SWITCHING
=========================================================== */

function switchTab(tabName) {
  AS.currentTab = tabName;
  document.querySelectorAll(".as-subtab-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tabName);
  });

  document.querySelectorAll(".as-tab-content").forEach((panel) => {
    panel.classList.add("hidden");
  });

  const target = document.getElementById(`as-tab-${tabName}`);
  if (target) target.classList.remove("hidden");
}

/* ===========================================================
   CONSOLE LOGGING
=========================================================== */

function logConsole(line) {
  const consoleEl = document.getElementById("as-console-log");
  if (!consoleEl) return;

  // remove placeholder if present
  const first = consoleEl.querySelector(".as-console-muted");
  if (first && consoleEl.children.length === 1) {
    consoleEl.innerHTML = "";
  }

  const p = document.createElement("p");
  p.className = "as-console-line";
  p.textContent = line;
  consoleEl.appendChild(p);
  consoleEl.scrollTop = consoleEl.scrollHeight;
}

/* ===========================================================
   DECISION HISTORY
=========================================================== */

function addDecisionHistory(title, type) {
  AS.history.unshift({
    title,
    type,
    workspace: AS.workspace,
    queue: AS.queue,
    at: new Date()
  });

  // Cap history length
  if (AS.history.length > 20) {
    AS.history = AS.history.slice(0, 20);
  }

  renderHistory();
}

function renderHistory() {
  const list = document.getElementById("as-history-list");
  if (!list) return;

  list.innerHTML = "";

  if (!AS.history.length) {
    const li = document.createElement("li");
    li.className = "as-history-empty";
    li.textContent = "No decisions yet.";
    list.appendChild(li);
    return;
  }

  AS.history.forEach((entry) => {
    const li = document.createElement("li");
    const label = entry.type.toUpperCase();
    const workspace = entry.workspace || "–";
    const queue = entry.queue || "–";
    li.textContent = `[${label}] ${entry.title} — ${workspace} / ${queue}`;
    list.appendChild(li);
  });
}

/* ===========================================================
   WORKSPACE SWITCHING + MINI PANEL
=========================================================== */

function setWorkspace(name) {
  AS.workspace = name;
  AS.queue = null;
  AS.features = [];
  AS.featureIndex = 0;
  highlightActiveButtons();

  setFeature({
    title: "Select a queue",
    category: "",
    description: "Choose a queue in this workspace to load features."
  });

  updateMiniPanel(name);
  renderHistory();
  logConsole(`[Navigator] Switched workspace to: ${name.toUpperCase()}.`);
  copilotPost("workspace", false);
}

function updateMiniPanel(name) {
  const titleEl = document.getElementById("as-mini-title");
  const bodyEl = document.getElementById("as-mini-body");
  const visual = document.getElementById("as-mini-visual");

  if (!titleEl || !bodyEl || !visual) return;

  if (name === "oia") {
    titleEl.textContent = "Octopus in Action – Harbor Orbit";
    bodyEl.textContent = "Cozy harbor loops: mailbox, city hall, and daily rhythm.";
    visual.style.boxShadow = "0 0 15px rgba(255,138,38,0.5)";
  } else if (name === "atlasv") {
    titleEl.textContent = "Atlas-V – Engine Orbits";
    bodyEl.textContent =
      "Navigator, Memory, Guard, and FlowSim collaborate to route decisions.";
    visual.style.boxShadow = "0 0 15px rgba(0,232,255,0.5)";
  } else if (name === "skb") {
    titleEl.textContent = "S/K/B – Audio Lab Orbit";
    bodyEl.textContent = "Moods, stems, and variations orbit around each world.";
    visual.style.boxShadow = "0 0 15px rgba(252,95,255,0.5)";
  } else {
    titleEl.textContent = "Workspace view";
    bodyEl.textContent = "Choose a workspace to see its mini diagram and flavor.";
    visual.style.boxShadow = "none";
  }
}

/* ===========================================================
   HOTKEYS
=========================================================== */

function handleHotkeys(e) {
  // ignore if focused in an input/textarea
  const tag = (e.target && e.target.tagName) || "";
  if (tag === "INPUT" || tag === "TEXTAREA") return;

  const key = e.key.toLowerCase();

  if (key === "1") {
    makeDecision("yes");
  } else if (key === "2") {
    makeDecision("no");
  } else if (key === "3") {
    makeDecision("later");
  } else if (key === "4") {
    makeDecision("expand");
  } else if (key === "q") {
    if (AS.workspace) loadQueue("brainstorm");
  } else if (key === "w") {
    if (AS.workspace) loadQueue("uat");
  } else if (key === "e") {
    if (AS.workspace) loadQueue("review");
  } else if (key === "r") {
    if (AS.workspace) loadQueue("patch");
  }
}

/* ===========================================================
   EVENT WIRING
=========================================================== */

function initListeners() {
  // workspace
  document.querySelectorAll(".as-nav-btn").forEach((btn) => {
    btn.addEventListener("click", () => setWorkspace(btn.dataset.workspace));
  });

  // queues
  document.querySelectorAll(".as-queue-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!AS.workspace) return;
      loadQueue(btn.dataset.queue);
    });
  });

  // snapshots
  document.querySelectorAll(".as-snap-btn").forEach((btn) => {
    btn.addEventListener("click", () => loadSnapshot(btn.dataset.snap));
  });

  // decisions
  document.querySelectorAll(".as-dec-btn").forEach((btn) => {
    btn.addEventListener("click", () => makeDecision(btn.dataset.decision));
  });

  // tabs
  document.querySelectorAll(".as-subtab-btn").forEach((btn) => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab));
  });

  // version strip
  initVersionStrip();

  // hotkeys
  document.addEventListener("keydown", handleHotkeys);
}

/* ===========================================================
   INITIALIZATION
=========================================================== */

function initWorkstation() {
  // starting content
  setFeature({
    title: "Select a workspace",
    category: "",
    description:
      "Pick a workspace on the left (OIA, Atlas-V, S/K/B), then choose a queue to load features."
  });
  renderHistory();
  initListeners();
}

// Run immediately (script is at bottom of body)
initWorkstation();
