/* ===========================================================
   ATLASSTUDIO WORKSTATION — FRONT-END SIMULATION ENGINE
   =========================================================== */

/* -----------------------------------------------------------
   GLOBAL STATE CONTAINER
----------------------------------------------------------- */
const AS = {
  workspace: null,        // 'oia', 'atlasv', 'skb'
  queue: null,            // 'brainstorm', 'uat', 'review', 'patch'
  featureIndex: 0,        // index of active feature card
  features: [],           // loaded feature set
  snapshots: {},          // diff data
  copilotTimer: null,     // fake thinking timer
  currentTab: 'details'
};

/* ===========================================================
   SAMPLE DATA (FAKE FEATURES + SNAPSHOTS)
   =========================================================== */

/* -------------------------
   OIA WORKSPACE FEATURES
------------------------- */
const FEATURES_OIA = {
  brainstorm: [
    {
      title: "Mailbox – Introduce Citizen Tasks",
      category: "Gameplay",
      description: "Basic mailbox system for daily civic tasks: letters, notices, and gentle reminders.",
      details: [
        "Triggered by time-of-day cycles",
        "Tasks affect citizen schedules",
        "Gentle stakes: tidy harbor, clean walkways"
      ]
    },
    {
      title: "City Hall Window Hours",
      category: "World",
      description: "City Hall has defined open/close hours to create gentle scheduling pressure.",
      details: [
        "Mayor Octavius' office lights turn on/off",
        "Certain tasks only available during open hours"
      ]
    }
  ],
  uat: [
    {
      title: "Harbor Pathfinding Adjustments",
      category: "Systems",
      description: "Test smoother pathing for otters, crabs, and beavers near the dock ladder.",
      details: ["Fewer loops", "Avoids crab pile-ups"]
    }
  ],
  review: [
    {
      title: "World Map Outline Pass",
      category: "Art",
      description: "Review the neon-outline art pass for OIA's harbor map.",
      details: ["Check coastline accuracy", "Confirm color palette"]
    }
  ],
  patch: [
    {
      title: "Day/Night Transition Timing",
      category: "Systems",
      description: "Patch final timing for dusk glow & street lantern flicker.",
      details: ["Shorten dusk fade by 0.5s", "Extend lantern flicker"]
    }
  ]
};

/* -------------------------
   ATLAS-V WORKSPACE FEATURES
------------------------- */
const FEATURES_ATLASV = {
  brainstorm: [
    {
      title: "Navigator Orbit",
      category: "Engine",
      description: "Define the navigator orbit responsible for pointer routing.",
      details: ["3-node ring", "Shifts based on constraints"]
    },
    {
      title: "Memory Layer",
      category: "Engine",
      description: "Tracks recent user actions for context-sensitive hints.",
      details: ["Stores 5–7 recent decisions", "Clears on snapshot switch"]
    }
  ],
  uat: [
    {
      title: "Guard Conditions",
      category: "Safety",
      description: "Simulate risk checks for contradictory decisions.",
      details: ["Flags conflicts", "Suggests alternatives"]
    }
  ],
  review: [
    {
      title: "FlowSim Timing",
      category: "Simulation",
      description: "Review FlowSim's interpolation logic for timeline displays.",
      details: ["Easing curves", "Sub-event placement"]
    }
  ],
  patch: [
    {
      title: "Orbit Glow Pass",
      category: "Art",
      description: "Patch glow polish across orbit diagrams.",
      details: ["Sharper edge", "Soft inner gradient"]
    }
  ]
};

/* -------------------------
   SKB WORKSPACE FEATURES
------------------------- */
const FEATURES_SKB = {
  brainstorm: [
    {
      title: "Stem Categorization",
      category: "Audio",
      description: "Sort stems by mood: calm, active, playful, eerie.",
      details: ["5 base moods", "Per-world variants"]
    }
  ],
  uat: [
    {
      title: "Loop Smoothing",
      category: "Audio",
      description: "Test seamless looping of ambient tracks.",
      details: ["Remove clicks", "Cross-fade 12ms"]
    }
  ],
  review: [],
  patch: []
};

/* -------------------------
   SNAPSHOT EXAMPLES
------------------------- */
AS.snapshots = {
  1: {
    diff: [
      { change: "Moved 2 items from Brainstorm → UAT" },
      { change: "Resurfaced 1 'Later' item" }
    ],
    summary: "Early iteration: task triage and advancing stable ideas."
  },
  2: {
    diff: [
      { change: "Expanded 1 feature into 3 sub-features" },
      { change: "Flagged 1 conflict during Review" }
    ],
    summary: "More complexity introduced; conflicts appear."
  },
  3: {
    diff: [
      { change: "Patched world timing offsets" },
      { change: "Updated map glow rendering" }
    ],
    summary: "Polish phase: tightening visuals and timings."
  }
};

/* ===========================================================
   COPILOT MESSAGE ENGINE
=========================================================== */

const COPILOT_TEMPLATES = {
  yes: [
    "Nice. Approved and moved forward in the workflow.",
    "Locked in. This one has clear next steps.",
    "Solid choice — this strengthens the version."
  ],
  no: [
    "Logged as a rejection. Keeps the queue clean.",
    "Fair — some ideas belong elsewhere.",
    "Removed from the current version path."
  ],
  later: [
    "Marked as Later. I'll resurface it in the next iteration.",
    "Stashed for future sessions — nothing lost.",
    "Queued for resurfacing."
  ],
  expand: [
    "Great call. This needs more detail — I'll prep sub-features.",
    "Marked for expansion. We’ll dig into this shortly.",
    "Splitting this into a deeper branch."
  ],
  selectFeature: [
    "Here’s the active feature. What feels right?",
    "Loaded. Review details, then choose a decision.",
    "Take your time — this one has multiple angles."
  ],
  workspace: [
    "Workspace loaded. Queues updated.",
    "Switched context — features refreshed.",
    "New domain selected. Exploring now."
  ],
  snapshot: [
    "Snapshot loaded. Showing diff and summary.",
    "Version boundaries highlighted.",
    "Pulled historical changes — check the Diff tab."
  ]
};

function copilotPost(type) {
  const log = document.getElementById("as-copilot-log");

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
    msg.className = "as-copilot-msg engine";
    const options = COPILOT_TEMPLATES[type] || ["Processing…"];
    msg.textContent = options[Math.floor(Math.random() * options.length)];
    log.appendChild(msg);
    log.scrollTop = log.scrollHeight;
  }, 650 + Math.random() * 450);
}

/* ===========================================================
   LOAD QUEUE INTO WORKSTATION
=========================================================== */
function loadQueue(queueName) {
  AS.queue = queueName;
  AS.featureIndex = 0;

  let data;
  if (AS.workspace === "oia") data = FEATURES_OIA;
  else if (AS.workspace === "atlasv") data = FEATURES_ATLASV;
  else if (AS.workspace === "skb") data = FEATURES_SKB;

  AS.features = data ? data[queueName] : [];

  highlightActiveButtons();

  if (AS.features.length === 0) {
    setFeature({ title: "No items", category: queueName, description: "This queue is empty." });
    return;
  }

  setFeature(AS.features[0]);
  copilotPost("selectFeature");
}

/* ===========================================================
   SET FEATURE CONTENT INTO UI
=========================================================== */
function setFeature(f) {
  document.getElementById("as-active-title").textContent = f.title || "Untitled";
  document.getElementById("as-active-category").textContent = f.category || "";
  document.getElementById("as-active-description").textContent = f.description || "";

  const tabDetails = document.getElementById("as-tab-details");
  if (Array.isArray(f.details)) {
    tabDetails.innerHTML = `
      <p>Details:</p>
      <ul>${f.details.map(d => `<li>${d}</li>`).join("")}</ul>
    `;
  } else {
    tabDetails.innerHTML = `<p>No additional details.</p>`;
  }

  // Reset other tabs
  document.getElementById("as-tab-diff").innerHTML = `<p>Select a snapshot to show diff.</p>`;
  document.getElementById("as-tab-timeline").innerHTML = `<p>No timeline events yet.</p>`;
}

/* ===========================================================
   LEFT NAV HIGHLIGHT
=========================================================== */
function highlightActiveButtons() {
  document.querySelectorAll(".as-nav-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.workspace === AS.workspace);
  });
  document.querySelectorAll(".as-queue-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.queue === AS.queue);
  });
}

/* ===========================================================
   DECISION HANDLER
=========================================================== */
function makeDecision(type) {
  copilotPost(type);

  const current = AS.features[AS.featureIndex];
  if (!current) return;

  document.getElementById("as-tab-timeline").innerHTML = `
    <p><strong>Decision Made:</strong> ${type.toUpperCase()}</p>
    <p>This will appear in the next snapshot iteration.</p>
  `;
}

/* ===========================================================
   SNAPSHOT LOADING
=========================================================== */
function loadSnapshot(n) {
  const snap = AS.snapshots[n];
  if (!snap) return;

  // update diff tab
  const diffPanel = document.getElementById("as-tab-diff");
  diffPanel.innerHTML = `
    <p><strong>Changes:</strong></p>
    <ul>${snap.diff.map(d => `<li>${d.change}</li>`).join("")}</ul>
    <p><strong>Summary:</strong> ${snap.summary}</p>
  `;

  // Switch tab to Diff automatically
  switchTab("diff");

  copilotPost("snapshot");
}

/* ===========================================================
   TAB SWITCHING
=========================================================== */
function switchTab(tabName) {
  AS.currentTab = tabName;

  document.querySelectorAll(".as-subtab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === tabName);
  });

  document.querySelectorAll(".as-tab-content").forEach(panel => {
    panel.classList.add("hidden");
  });

  document.getElementById(`as-tab-${tabName}`).classList.remove("hidden");
}

/* ===========================================================
   WORKSPACE SWITCHING
=========================================================== */
function setWorkspace(name) {
  AS.workspace = name;
  AS.queue = null;
  AS.features = [];
  setFeature({ title: "Select a queue", category: "", description: "Choose a queue to load features." });
  highlightActiveButtons();
  copilotPost("workspace");
}

/* ===========================================================
   EVENT LISTENERS
=========================================================== */

document.querySelectorAll(".as-nav-btn").forEach(btn => {
  btn.addEventListener("click", () => setWorkspace(btn.dataset.workspace));
});

document.querySelectorAll(".as-queue-btn").forEach(btn => {
  btn.addEventListener("click", () => loadQueue(btn.dataset.queue));
});

document.querySelectorAll(".as-snap-btn").forEach(btn => {
  btn.addEventListener("click", () => loadSnapshot(btn.dataset.snap));
});

document.querySelectorAll(".as-dec-btn").forEach(btn => {
  btn.addEventListener("click", () => makeDecision(btn.dataset.decision));
});

document.querySelectorAll(".as-subtab-btn").forEach(btn => {
  btn.addEventListener("click", () => switchTab(btn.dataset.tab));
});

/* Initialize UI with blank center */
setFeature({ 
  title: "Select a workspace", 
  category: "", 
  description: "Choose a workspace from the left sidebar to begin." 
});

