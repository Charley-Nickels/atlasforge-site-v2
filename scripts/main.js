// /scripts/main.js
// Global site behaviors for AtlasForge Interactive
// - Mobile navigation toggle
// - Fake data hydration for Atlas-V and Games pages
// - Lightweight UI filters and detail rendering

// Atlas-V data model (editable by humans later)
const atlasVModules = [
  {
    id: "navigator",
    name: "Navigator",
    tagline: "Tells you what to do next.",
    description:
      "Generates clear copy-paste instructions: open Codex, start a new chat, create a pull request, or update a prompt.",
  },
  {
    id: "memory-vault",
    name: "Memory Vault",
    tagline: "Keeps your projects in its head.",
    description:
      "Stores project pillars, constraints, and pinned decisions so every new task starts with the right context.",
  },
  {
    id: "constraint-engine",
    name: "Constraint Engine",
    tagline: "Enforces your own rules.",
    description:
      "Checks ideas and prompts against style, scope, and time constraints, and raises friendly warnings when you drift.",
  },
  {
    id: "flowsim",
    name: "FlowSim",
    tagline: "Runs pretend simulations.",
    description:
      "Maps call flows, pipelines, and game logic as node graphs with fake stats to reason about bottlenecks and routes.",
  },
  {
    id: "autoprompter",
    name: "Auto-Prompter",
    tagline: "Writes prompts for you.",
    description:
      "Assembles prompt templates for GPT/Codex that the human can copy-paste directly into new chats or tasks.",
  },
  {
    id: "branch-overseer",
    name: "Branch Overseer",
    tagline: "Pretends to watch your repos.",
    description:
      "Shows fake branches and pull requests, with imaginary test statuses, to make the studio feel alive.",
  },
];

const atlasVAgents = [
  {
    id: "core-architect",
    name: "Atlas-V Core Architect",
    role: "System-level planner and constraint enforcer.",
    modules: ["navigator", "constraint-engine", "memory-vault"],
    tone: "Calm, direct, thinks in systems and pipelines.",
    status: "Online",
  },
  {
    id: "loreweaver",
    name: "Atlas-V LoreWeaver",
    role: "Worldbuilding and narrative assistant.",
    modules: ["memory-vault", "autoprompter"],
    tone: "Warm, descriptive, focused on mood and setting.",
    status: "Idle",
  },
  {
    id: "flowsim-agent",
    name: "Atlas-V FlowSim Agent",
    role: "Visualizes and simulates routes for games and ops.",
    modules: ["flowsim", "navigator"],
    tone: "Analytical, obsessed with graphs.",
    status: "Online",
  },
  {
    id: "testrunner",
    name: "Atlas-V TestRunner",
    role: "Proposes fake test plans and edge cases.",
    modules: ["navigator", "constraint-engine"],
    tone: "Careful, detail-focused, sometimes annoying.",
    status: "Standby",
  },
  {
    id: "branch-overseer-agent",
    name: "Atlas-V Branch Overseer",
    role: "Pretends to monitor branches and releases.",
    modules: ["branch-overseer", "memory-vault"],
    tone: "Dry humor, acts like a release manager.",
    status: "Online",
  },
];

const atlasVMemory = [
  { project: "Octopus in Action", rules: ["Mailbox-first tasking", "Civic tone: calm, kind", "No real saves"], pin: "TIDEGLASS-01" },
  { project: "Watchtower", rules: ["Community > strictness", "Paperwork scoring", "Calls arrive in batches"], pin: "LAMPLIGHT-02" },
  { project: "OrbitForge", rules: ["Throughput dashboards", "Belts before bots", "FlowSim hooks ready"], pin: "ORBITFORGE-04" },
];

const flowsimNodes = [
  { name: "Entry", meta: "Intent packet", percent: "100%" },
  { name: "Guard", meta: "Policy check", percent: "92%" },
  { name: "Memory", meta: "Context fetch", percent: "88%" },
  { name: "Synthesis", meta: "Prompt build", percent: "86%" },
  { name: "Render", meta: "Output stub", percent: "85%" },
];

// Games data with cipher names
const atlasGames = [
  {
    id: "oia",
    cipherName: "TIDEGLASS-01",
    workingTitle: "Octopus in Action",
    oneLiner: "Cozy harbor-town civic sim run by animal neighbors.",
    concept: "Mailbox-driven tasks, city hall decisions, and gentle civic management in a seaside town of animal citizens.",
    status: "Flagship",
    phase: "Now",
    tags: ["Sim", "Cozy", "Flagship"],
    atlasVAgents: ["core-architect", "loreweaver", "flowsim-agent"],
    atlasStudioUsage: ["Workstation", "Sprite Lab", "Dialogue Board"],
    timelineNote:
      "Focuses on mailbox tasks, day-night cycles, and civic events, with later milestones for elections and festivals.",
  },
  {
    id: "watchtower",
    cipherName: "LAMPLIGHT-02",
    workingTitle: "Neighborhood Watch Sim",
    oneLiner: "Small-town calls, reports, and choices with consequences.",
    concept:
      "Balance community trust and strict enforcement as you respond to calls, file reports, and manage limited resources.",
    status: "Prototype",
    phase: "Next",
    tags: ["Sim", "Narrative"],
    atlasVAgents: ["core-architect", "testrunner", "loreweaver"],
    atlasStudioUsage: ["Workstation", "Story Map"],
    timelineNote:
      "Starts with incident generation and paperwork scoring, then layers in reputation, recurring NPCs, and branching case arcs.",
  },
  {
    id: "dysonspring",
    cipherName: "ORBITFORGE-04",
    workingTitle: "Off-world Automation Sim",
    oneLiner: "Logistics webs and factory loops rebuilding an off-world colony.",
    concept: "Design belts, power grids, and multi-layer factories while chasing elegant throughput and resource efficiency.",
    status: "Concept",
    phase: "Horizon",
    tags: ["Sim", "Automation"],
    atlasVAgents: ["flowsim-agent", "core-architect"],
    atlasStudioUsage: ["Systems Sheet"],
    timelineNote:
      "Begins with core resource loops and belts, then expands into multi-floor factories and FlowSim-based load visualizations.",
  },
  {
    id: "feudline",
    cipherName: "EMBERLINE-05",
    workingTitle: "Feud Strategy Sim",
    oneLiner: "Manage families, grudges, and alliances across generations.",
    concept: "Track who owes who, who betrayed who, and which promises were kept in a human-scale strategy experience.",
    status: "Backlog",
    phase: "Horizon",
    tags: ["Strategy", "Narrative"],
    atlasVAgents: ["loreweaver"],
    atlasStudioUsage: ["Narrative Board"],
    timelineNote:
      "Starts with simple relationship graphs and events, later adding full family trees and lore-driven feud events.",
  },
  {
    id: "skybridge",
    cipherName: "SKYBRIDGE-06",
    workingTitle: "Airline Management Sim",
    oneLiner: "Route passengers like a Now Boarding-style control puzzle.",
    concept: "Juggle airports, queues, and time windows to keep flights on time and passengers mostly happy.",
    status: "Concept",
    phase: "Next",
    tags: ["Sim", "Management"],
    atlasVAgents: ["flowsim-agent", "navigator"],
    atlasStudioUsage: ["Workstation", "Playtest Board"],
    timelineNote:
      "Initial focus on basic routing and queues, with later phases adding weather, VIPs, and route performance dashboards.",
  },
  {
    id: "dicewraith",
    cipherName: "DICEWRAITH-07",
    workingTitle: "GM / Tabletop Simulator",
    oneLiner: "A D&D-style simulator where the GM or the party can be simulated.",
    concept:
      "Scenes, encounters, and dice rolls framed by an AI-style GM helper that suggests beats and records session history.",
    status: "Backlog",
    phase: "Horizon",
    tags: ["Narrative", "RPG"],
    atlasVAgents: ["loreweaver", "testrunner", "core-architect"],
    atlasStudioUsage: ["Dialogue Board", "Session Log"],
    timelineNote:
      "Starts with encounter scaffolds and dice resolution, then explores simulated GMs running short adventures with Atlas-V support.",
  },
  {
    id: "ironbound",
    cipherName: "IRONBOUND-08",
    workingTitle: "RTS Prototype",
    oneLiner: "Command & Conquer-style base building and faction warfare.",
    concept: "Harvest resources, build bases, and deploy asymmetrical armies in compact skirmish maps.",
    status: "Backlog",
    phase: "Horizon",
    tags: ["RTS", "Strategy"],
    atlasVAgents: ["core-architect", "testrunner"],
    atlasStudioUsage: ["Map Editor"],
    timelineNote:
      "Starts as skirmish sandbox, then adds tech trees, commanders, mission scripting, and AI commanders advised by Atlas-V.",
  },
  {
    id: "skyward",
    cipherName: "SKYWARD-09",
    workingTitle: "God Sim / World Builder",
    oneLiner: "Sculpt continents, biomes, and cultures as a distant god.",
    concept:
      "Paint terrain, influence populations, and watch emergent culture stats shift as you meddle with the world.",
    status: "Backlog",
    phase: "Horizon",
    tags: ["Sim", "Sandbox", "God Game"],
    atlasVAgents: ["loreweaver", "flowsim-agent", "memory-vault"],
    atlasStudioUsage: ["Map Editor", "World Bible"],
    timelineNote:
      "Begins with map painting and basic populations, then evolves into belief systems, miracles, and history-aware lore events.",
  },
];

const gameFilters = {
  phase: "All",
  tag: "All",
};

function toggleMobileNav() {
  const toggle = document.querySelector(".af-nav-toggle");
  const navLinks = document.querySelector(".af-nav-links");
  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }
}

function renderAtlasV() {
  const moduleWrap = document.getElementById("atlasv-modules");
  const agentWrap = document.getElementById("atlasv-agents");
  const memoryWrap = document.getElementById("atlasv-memory");
  const flowWrap = document.getElementById("atlasv-flowsim");

  if (moduleWrap) {
    moduleWrap.innerHTML = atlasVModules
      .map(
        (m) => `
          <article class="av-card">
            <div class="af-badge af-badge-cyan">Module</div>
            <h3>${m.name}</h3>
            <p>${m.tagline}</p>
            <p>${m.description}</p>
          </article>
        `
      )
      .join("");
  }

  if (agentWrap) {
    const moduleLookup = Object.fromEntries(atlasVModules.map((m) => [m.id, m.name]));
    agentWrap.innerHTML = atlasVAgents
      .map((a) => {
        const modList = a.modules.map((id) => moduleLookup[id] || id).join(", ");
        return `
          <article class="av-card">
            <div class="af-badge af-badge-cyan">${a.status}</div>
            <h3>${a.name}</h3>
            <p>${a.role}</p>
            <p style="color: var(--af-text-muted);">${a.tone}</p>
            <div class="av-meta"><span>${modList}</span></div>
          </article>
        `;
      })
      .join("");
  }

  if (memoryWrap) {
    memoryWrap.innerHTML = atlasVMemory
      .map(
        (mem) => `
          <li class="af-timeline-item">
            <div class="af-timeline-title">${mem.project} · ${mem.pin}</div>
            <div class="af-timeline-meta">${mem.rules.join(" · ")}</div>
          </li>
        `
      )
      .join("");
  }

  if (flowWrap) {
    flowWrap.innerHTML = `
      <div class="af-grid" style="grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 10px;">
        ${flowsimNodes
          .map(
            (node) => `
              <div class="af-card" style="padding:12px;">
                <div class="af-kicker">${node.name}</div>
                <h3 style="margin:4px 0;">${node.percent}</h3>
                <p style="margin:0;">${node.meta}</p>
              </div>
            `
          )
          .join("")}
      </div>
    `;
  }
}

function renderGames() {
  const grid = document.getElementById("games-grid");
  const detail = document.getElementById("game-detail");
  if (!grid) return;

  const filtered = atlasGames.filter((g) => {
    const phaseOk = gameFilters.phase === "All" || g.phase === gameFilters.phase;
    const tagOk = gameFilters.tag === "All" || g.tags.includes(gameFilters.tag);
    return phaseOk && tagOk;
  });

  grid.innerHTML = filtered
    .map(
      (g) => `
        <article class="game-card" data-game="${g.id}">
          <div class="game-tags">
            <span class="af-badge af-badge-cyan">${g.cipherName}</span>
            <span class="af-badge af-badge-orange">${g.phase}</span>
            <span class="af-badge af-badge-red">${g.status}</span>
          </div>
          <h3>${g.workingTitle}</h3>
          <p>${g.oneLiner}</p>
          <div class="game-meta">${g.tags.join(" · ")}</div>
          <button class="af-btn af-btn-ghost" type="button" data-game-detail="${g.id}">View details</button>
        </article>
      `
    )
    .join("");

  grid.querySelectorAll("[data-game-detail]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-game-detail");
      const game = atlasGames.find((g) => g.id === id);
      if (game && detail) {
        detail.style.display = "block";
        detail.innerHTML = `
          <div class="af-kicker">${game.cipherName}</div>
          <h3>${game.workingTitle}</h3>
          <p>${game.concept}</p>
          <div class="af-chip">Atlas-V Agents: ${game.atlasVAgents.join(", ")}</div>
          <div class="af-chip">AtlasStudio: ${game.atlasStudioUsage.join(", ")}</div>
          <p style="color: var(--af-text-muted);">${game.timelineNote}</p>
        `;
        detail.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

function renderRoadmap() {
  const timeline = document.getElementById("games-roadmap");
  if (!timeline) return;

  const phases = ["Now", "Next", "Horizon"];
  timeline.innerHTML = phases
    .map((phase) => {
      const items = atlasGames.filter((g) => g.phase === phase);
      return `
        <div class="game-step">
          <div class="af-timeline-title">${phase}</div>
          <div class="af-timeline-meta">${items.length ? items.map((g) => `${g.cipherName} · ${g.workingTitle}`).join(" | ") : "Pending"}</div>
          ${items
            .map(
              (g) => `
                <div style="margin-top:8px;">
                  <strong>${g.cipherName}</strong> — ${g.timelineNote}
                </div>
              `
            )
            .join("")}
        </div>
      `;
    })
    .join("");
}

function bindGameFilters() {
  const pills = document.querySelectorAll(".af-filter-pill[data-filter]");
  if (!pills.length) return;
  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      const type = pill.getAttribute("data-filter-type") || "phase";
      const value = pill.getAttribute("data-filter") || "All";
      pills.forEach((p) => {
        if (p.getAttribute("data-filter-type") === type) {
          p.classList.remove("is-active");
        }
      });
      pill.classList.add("is-active");
      if (type === "phase") gameFilters.phase = value;
      if (type === "tag") gameFilters.tag = value;
      renderGames();
    });
  });
}

function initAtlasVPage() {
  renderAtlasV();
}

function initGamesPage() {
  renderGames();
  renderRoadmap();
  bindGameFilters();
}

// Page router based on body data-page attribute
function routePages() {
  const page = document.body.getAttribute("data-page");
  switch (page) {
    case "atlasv":
      initAtlasVPage();
      break;
    case "games":
      initGamesPage();
      break;
    default:
      break;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  toggleMobileNav();
  routePages();
});
