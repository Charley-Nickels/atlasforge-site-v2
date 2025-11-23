// scripts/playground.js
// AtlasStudio matte workstation interactions — visual only

function qs(sel, ctx = document) {
  return ctx.querySelector(sel);
}

function qsa(sel, ctx = document) {
  return Array.from(ctx.querySelectorAll(sel));
}

class EventBus {
  constructor() {
    this.events = {};
  }
  on(event, handler) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(handler);
  }
  emit(event, payload) {
    (this.events[event] || []).forEach((fn) => fn(payload));
  }
}

const bus = new EventBus();

const storageKey = 'as-prefs';

const appState = {
  currentScreen: 'browser',
  aiMode: true,
  experimental: false,
  workspace: 'Sandbox',
  viewportMode: 'website',
  decisions: { pending: 3, warnings: 1, approvals: 2 },
  compact: false,
  highContrast: false,
  autosave: false,
  ghostOpen: false,
  settingsOpen: false,
};

const screenLabels = {
  browser: 'Gallery Browser',
  uat: 'App Preview / UAT',
  review: 'Website / Policy Review',
  patch: 'Audio / Video Clipper',
  dev: 'Dev Workspace',
};

const viewportModes = {
  game: { title: 'Game viewport (mock)' },
  app: { title: 'App viewport (mock)' },
  website: { title: 'Website preview (mock)' },
  spreadsheet: { title: 'Spreadsheet mock' },
};

let notify = null;

class ScreenManager {
  constructor() {
    this.screens = new Map();
    this.current = null;
  }

  register(id, el) {
    if (!id || !el) return;
    this.screens.set(id, el);
    el.classList.remove('as-screen--active');
    el.style.display = 'none';
  }

  show(id) {
    if (!this.screens.has(id)) return;
    if (this.current === id) return;
    const next = this.screens.get(id);
    const prev = this.current ? this.screens.get(this.current) : null;

    if (prev) {
      prev.classList.remove('as-screen--active');
      prev.style.opacity = '0';
      setTimeout(() => {
        prev.style.display = 'none';
      }, 120);
    }

    next.style.display = 'block';
    requestAnimationFrame(() => {
      next.style.opacity = '1';
      next.classList.add('as-screen--active');
    });

    this.current = id;
    appState.currentScreen = id;
    setActiveRouteTab(id);
    handleScreenMode(id);
    updateStatusBar();
    bus.emit('screen:change', id);
  }
}

function persistState() {
  const payload = {
    aiMode: appState.aiMode,
    experimental: appState.experimental,
    workspace: appState.workspace,
    viewportMode: appState.viewportMode,
    compact: appState.compact,
    highContrast: appState.highContrast,
    autosave: appState.autosave,
  };
  try {
    localStorage.setItem(storageKey, JSON.stringify(payload));
  } catch (err) {
    console.warn('Persist failed', err);
  }
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
    Object.assign(appState, saved);
  } catch (err) {
    console.warn('Load failed', err);
  }
}

function createNotifier() {
  const stack = qs('.as-toast-stack');
  return {
    push(type, text) {
      if (!stack) return;
      const toast = document.createElement('div');
      toast.className = 'as-toast';
      toast.dataset.type = type || 'info';
      toast.textContent = text;
      stack.appendChild(toast);
      requestAnimationFrame(() => toast.classList.add('is-showing'));
      setTimeout(() => {
        toast.classList.remove('is-showing');
        setTimeout(() => toast.remove(), 200);
      }, 2600);
    },
    info(msg) { this.push('info', msg); },
    success(msg) { this.push('success', msg); },
    error(msg) { this.push('error', msg); },
  };
}

const viewport = (() => {
  const frame = qs('.as-preview-placeholder');
  const title = qs('.as-preview-title-mini');
  function setMode(mode) {
    const data = viewportModes[mode] || viewportModes.website;
    Object.keys(viewportModes).forEach((key) => frame?.classList.remove(`is-${key}`));
    frame?.classList.add(`is-${mode}`);
    if (title) title.textContent = data.title;
    appState.viewportMode = mode;
    qs('#statusViewport')?.textContent = data.title;
  }
  return { setMode };
})();

function updateStatusBar() {
  const screenEl = qs('#statusScreen');
  const aiEl = qs('#statusAI');
  const expEl = qs('#statusExperimental');
  const wsEl = qs('#statusWorkspace');
  const vpEl = qs('#statusViewport');
  if (screenEl) screenEl.textContent = screenLabels[appState.currentScreen] || appState.currentScreen;
  if (aiEl) aiEl.textContent = appState.aiMode ? 'On' : 'Off';
  if (expEl) expEl.textContent = appState.experimental ? 'On' : 'Off';
  if (wsEl) wsEl.textContent = appState.workspace;
  if (vpEl) vpEl.textContent = viewportModes[appState.viewportMode]?.title || appState.viewportMode;
  qs('#decisionPending')?.textContent = String(appState.decisions.pending);
  qs('#decisionWarnings')?.textContent = String(appState.decisions.warnings);
  qs('#decisionApprovals')?.textContent = String(appState.decisions.approvals);
}

  function setActiveRouteTab(screen) {
    qsa('.as-route-tab').forEach((tab) => {
      tab.classList.toggle('is-active', tab.getAttribute('data-screen') === screen);
      const isActive = tab.classList.contains('is-active');
      tab.setAttribute('aria-selected', isActive);
      tab.setAttribute('tabindex', isActive ? '0' : '-1');
    });
  }

function handleScreenMode(screen) {
  const modeMap = {
    browser: 'website',
    uat: 'app',
    review: 'website',
    patch: 'game',
    dev: 'spreadsheet',
  };
  const workspaceMap = {
    browser: 'Visual Preview',
    uat: 'Sandbox',
    review: 'Review',
    patch: 'Render',
    dev: 'Dev',
  };
  viewport.setMode(modeMap[screen] || 'website');
  appState.workspace = workspaceMap[screen] || 'Sandbox';
}

function initRouteTabs(manager) {
  qsa('.as-route-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-screen');
      manager.show(target);
      notify?.info(`Switched to ${screenLabels[target] || target}`);
    });
  });
}

function initPillToggleGroups() {
  qsa('.js-pill-group').forEach((group) => {
    group.addEventListener('click', (evt) => {
      const btn = evt.target.closest('.as-pill-toggle');
      if (!btn) return;
      qsa('.as-pill-toggle', group).forEach((b) => b.classList.remove('as-pill-toggle--active'));
      btn.classList.add('as-pill-toggle--active');
      if (group.dataset.pill === 'workspace') {
        appState.workspace = btn.dataset.workspace || appState.workspace;
        persistState();
        updateStatusBar();
      }
      if (group.closest('.as-card-body--preview')) {
        const label = btn.textContent?.trim().toLowerCase();
        if (label === 'run') viewport.setMode('game');
        if (label === 'dry run') viewport.setMode('app');
        if (label === 'inspect') viewport.setMode('website');
      }
    });
  });
}

function initDropdowns() {
  document.addEventListener('click', (evt) => {
    qsa('.as-dropdown-menu').forEach((menu) => menu.classList.remove('is-open'));
    const trigger = evt.target.closest('.as-dropdown-trigger');
    if (!trigger) return;
    const dropdown = trigger.closest('.as-dropdown');
    const menu = qs('.as-dropdown-menu', dropdown);
    if (menu) {
      evt.stopPropagation();
      menu.classList.toggle('is-open');
    }
  });
}

function initCodexGhostPanel() {
  const toggleBtn = qs('.js-ghost-toggle');
  const panel = qs('.as-ghost-panel');
  if (!toggleBtn || !panel) return;
  const apply = () => panel.classList.toggle('is-open', appState.ghostOpen);

  toggleBtn.addEventListener('click', () => {
    appState.ghostOpen = !appState.ghostOpen;
    apply();
  });

  window.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape' && appState.ghostOpen) {
      appState.ghostOpen = false;
      apply();
    }
  });

  const tabs = qsa('.as-ghost-tab', panel);
  const views = qsa('.as-ghost-view', panel);
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-ghost-tab');
      tabs.forEach((t) => t.classList.remove('as-ghost-tab--active'));
      tab.classList.add('as-ghost-tab--active');
      views.forEach((view) => {
        const viewKey = view.getAttribute('data-ghost-view');
        view.classList.toggle('as-ghost-view--active', viewKey === target);
      });
    });
  });

  qs('#simulateDiff')?.addEventListener('click', () => {
    tabs.forEach((t) => t.classList.toggle('as-ghost-tab--active', t.dataset.ghostTab === 'diff'));
    views.forEach((v) => v.classList.toggle('as-ghost-view--active', v.dataset.ghostView === 'diff'));
    notify?.info('Simulated diff preview.');
  });

  qs('#simulateTimeline')?.addEventListener('click', () => {
    tabs.forEach((t) => t.classList.toggle('as-ghost-tab--active', t.dataset.ghostTab === 'timeline'));
    views.forEach((v) => v.classList.toggle('as-ghost-view--active', v.dataset.ghostView === 'timeline'));
    notify?.info('Simulated timeline.');
  });
}

function attachButtonRipples() {
  qsa('.as-btn, .af-btn, .as-btn-icon').forEach((btn) => {
    btn.addEventListener('click', (evt) => {
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'as-ripple';
      ripple.style.left = `${evt.clientX - rect.left}px`;
      ripple.style.top = `${evt.clientY - rect.top}px`;
      ripple.style.width = ripple.style.height = `${Math.max(rect.width, rect.height)}px`;
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 450);
    });
  });
}

function initSwitches() {
  const switches = qsa('.as-switch');
  switches.forEach((sw) => {
    const flag = sw.dataset.flag;
    const apply = () => {
      const on = appState[flag];
      sw.classList.toggle('is-on', Boolean(on));
    };
    apply();
    sw.addEventListener('click', () => {
      if (flag === 'aiMode') appState.aiMode = !appState.aiMode;
      if (flag === 'experimental') appState.experimental = !appState.experimental;
      if (flag === 'compact') appState.compact = !appState.compact;
      if (flag === 'highContrast') appState.highContrast = !appState.highContrast;
      if (flag === 'autosave') appState.autosave = !appState.autosave;
      apply();
      persistState();
      updateStatusBar();
    });
  });
}

function initCategoryFilter() {
  const categories = qsa('.as-category-item');
  const tiles = qsa('.as-gallery-tile');
  if (!categories.length) return;
  categories.forEach((cat) => {
    cat.addEventListener('click', () => {
      categories.forEach((c) => c.classList.remove('is-active'));
      cat.classList.add('is-active');
      const key = cat.getAttribute('data-category');
      tiles.forEach((tile) => {
        const match = tile.getAttribute('data-category');
        tile.style.display = !key || match === key ? '' : 'none';
      });
    });
  });
}

function bindParallax() {
  const shell = qs('.as-app-shell');
  if (!shell) return;
  shell.addEventListener('mousemove', (evt) => {
    const rect = shell.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = ((evt.clientX - cx) / rect.width) * 6;
    const dy = ((evt.clientY - cy) / rect.height) * 6;
    document.body.style.setProperty('--as-parallax-x', `${dx.toFixed(2)}px`);
    document.body.style.setProperty('--as-parallax-y', `${dy.toFixed(2)}px`);
    qs('#diagParallax')?.textContent = 'On';
  });
}

function bootReady() {
  requestAnimationFrame(() => {
    document.body.classList.add('as-boot-ready');
  });
}

function openInspector(data) {
  const panel = qs('#fileInspector');
  if (!panel) return;
  qs('#inspectorTitle').textContent = data.title || 'File Inspector';
  qs('#inspectorMeta').textContent = data.meta || 'Visual only';
  qs('#inspectorPreview').textContent = data.preview || 'No thumbnail';
  qs('#inspectorType').textContent = data.type || '—';
  qs('#inspectorSize').textContent = data.size || '—';
  qs('#inspectorModified').textContent = data.modified || '—';
  const suggestions = qs('#inspectorSuggestions ul');
  if (suggestions) {
    suggestions.innerHTML = '';
    (data.suggestions || ['Surface preview variants.', 'Link to module graph.', 'Flag for human approval.']).forEach((line) => {
      const li = document.createElement('li');
      li.textContent = line;
      suggestions.appendChild(li);
    });
  }
  panel.classList.add('is-open');
}

function closeInspector() {
  qs('#fileInspector')?.classList.remove('is-open');
}

function bindInspectorTriggers() {
  const triggers = qsa('.as-gallery-tile, .as-clipper-item, .as-file-item');
  triggers.forEach((el) => {
    el.addEventListener('click', () => {
      const name = el.querySelector('.as-file-caption, .as-file-name, span')?.textContent?.trim() || 'Selected file';
      openInspector({
        title: name,
        meta: 'Inspection preview · mock',
        preview: el.dataset.preview || name,
        type: el.dataset.type || 'asset',
        size: el.dataset.size || '1.2 MB',
        modified: el.dataset.modified || 'Today',
      });
      notify?.info(`Inspecting ${name}`);
    });
  });
  qs('#closeInspector')?.addEventListener('click', closeInspector);
}

function initDecisionBar() {
  qs('#openDecisions')?.addEventListener('click', () => {
    notify?.success('Human decisions panel opened (mock).');
  });
}

function initScreenManager() {
  const manager = new ScreenManager();
  qsa('.as-screen').forEach((screen) => {
    manager.register(screen.getAttribute('data-screen'), screen);
  });
  qs('#diagScreens')?.textContent = String(manager.screens.size);
  return manager;
}

function initViewportDefaults() {
  viewport.setMode(appState.viewportMode || 'website');
}

function bindGlobalSearch(manager) {
  const input = qs('#globalSearchInput');
  if (!input) return;
  input.addEventListener('keydown', (evt) => {
    if (evt.key === 'Enter') {
      const value = input.value.trim().toLowerCase();
      if (value.includes('clip')) manager.show('patch');
      else if (value.includes('gallery') || value.includes('image')) manager.show('browser');
      else if (value.includes('review')) manager.show('review');
      else if (value.includes('uat') || value.includes('app')) manager.show('uat');
      else if (value.includes('dev')) manager.show('dev');
      notify?.info(`Search routed to ${appState.currentScreen}`);
    }
  });
}

function bindQuickPanel(manager) {
  const panel = qs('#quickPanel');
  qs('#openQuickActions')?.addEventListener('click', () => panel?.classList.add('is-open'));
  qs('#closeQuickPanel')?.addEventListener('click', () => panel?.classList.remove('is-open'));
  qsa('[data-action]', panel).forEach((btn) => {
    btn.addEventListener('click', () => {
      const action = btn.dataset.action;
      if (action?.startsWith('goto-')) {
        const target = action.replace('goto-', '');
        manager.show(target);
      }
      if (action === 'open-inspector') {
        openInspector({ title: 'Manual open', meta: 'Quick action', preview: '—' });
      }
      if (action === 'open-ghost') {
        appState.ghostOpen = !appState.ghostOpen;
        qs('.as-ghost-panel')?.classList.toggle('is-open', appState.ghostOpen);
      }
      if (action === 'notify') {
        notify?.success('Quick action triggered.');
      }
      panel?.classList.remove('is-open');
    });
  });
}

function buildPaletteCommands(manager) {
  return [
    { label: 'Go to Browser', action: () => manager.show('browser') },
    { label: 'Go to UAT', action: () => manager.show('uat') },
    { label: 'Go to Review', action: () => manager.show('review') },
    { label: 'Go to Patch', action: () => manager.show('patch') },
    { label: 'Go to Dev', action: () => manager.show('dev') },
    { label: 'Toggle AI Mode', action: () => toggleFlag('aiMode') },
    { label: 'Toggle Experimental', action: () => toggleFlag('experimental') },
    { label: 'Toggle Ghost', action: () => qs('.js-ghost-toggle')?.click() },
    { label: 'Open Inspector', action: () => openInspector({ title: 'Palette open', preview: '—' }) },
    { label: 'Open Settings', action: () => openSettings() },
    { label: 'Show Diagnostics', action: () => toggleDiagnostics(true) },
  ];
}

function renderCommandPalette(commands) {
  const list = qs('#commandList');
  if (!list) return;
  list.innerHTML = '';
  commands.forEach((cmd) => {
    const item = document.createElement('div');
    item.className = 'as-command-item';
    item.textContent = cmd.label;
    item.addEventListener('click', () => {
      cmd.action();
      closePalette();
    });
    list.appendChild(item);
  });
}

function openPalette() {
  qs('#commandPalette')?.classList.add('is-open');
  qs('.as-command-input')?.focus();
}

function closePalette() {
  qs('#commandPalette')?.classList.remove('is-open');
}

function bindPalette(manager) {
  const commands = buildPaletteCommands(manager);
  renderCommandPalette(commands);
  qs('#openPalette')?.addEventListener('click', openPalette);
  qs('#openCommandPalette')?.addEventListener('click', openPalette);
  qs('#closePalette')?.addEventListener('click', closePalette);
  qs('.as-command-input')?.addEventListener('input', (evt) => {
    const value = evt.target.value.toLowerCase();
    const filtered = commands.filter((cmd) => cmd.label.toLowerCase().includes(value));
    renderCommandPalette(filtered);
  });
  window.addEventListener('keydown', (evt) => {
    if ((evt.ctrlKey || evt.metaKey) && evt.key.toLowerCase() === 'k') {
      evt.preventDefault();
      openPalette();
    }
    if (evt.key === 'Escape') closePalette();
  });
}

function toggleFlag(flag) {
  appState[flag] = !appState[flag];
  persistState();
  updateStatusBar();
  initSwitches();
  notify?.info(`${flag} ${appState[flag] ? 'enabled' : 'disabled'}`);
}

function bindDiagnostics() {
  const diag = qs('#diagnostics');
  const toggleDiagBtn = qs('#toggleDiag');
  toggleDiagBtn?.addEventListener('click', () => diag?.classList.toggle('is-open'));
  qs('#toggleGrid')?.addEventListener('click', () => notify?.info('Grid overlay toggled (mock).'));
}

function toggleDiagnostics(forceOpen) {
  const diag = qs('#diagnostics');
  if (!diag) return;
  const shouldOpen = forceOpen !== undefined ? forceOpen : !diag.classList.contains('is-open');
  diag.classList.toggle('is-open', shouldOpen);
}

function openSettings() {
  qs('#settingsDrawer')?.classList.add('is-open');
  appState.settingsOpen = true;
}

function closeSettings() {
  qs('#settingsDrawer')?.classList.remove('is-open');
  appState.settingsOpen = false;
}

function bindSettings() {
  qs('#closeSettings')?.addEventListener('click', closeSettings);
  qsa('[data-route="settings"]').forEach((btn) => btn.addEventListener('click', openSettings));
}

function bindInspectorHotkeys() {
  window.addEventListener('keydown', (evt) => {
    if ((evt.ctrlKey || evt.metaKey) && evt.key.toLowerCase() === 'i') {
      evt.preventDefault();
      openInspector({ title: 'Hotkey open', meta: 'Ctrl/Cmd+I' });
    }
  });
}

function bindDraggables() {
  qsa('.js-draggable').forEach((el) => {
    let dragging = false;
    let offsetX = 0;
    let offsetY = 0;
    el.addEventListener('dblclick', () => {
      el.classList.toggle('is-floating');
      if (el.classList.contains('is-floating')) {
        el.style.position = 'absolute';
        el.style.left = `${el.offsetLeft}px`;
        el.style.top = `${el.offsetTop}px`;
      } else {
        el.style.position = '';
        el.style.left = '';
        el.style.top = '';
      }
    });
    el.addEventListener('mousedown', (evt) => {
      if (!el.classList.contains('is-floating')) return;
      dragging = true;
      offsetX = evt.clientX - el.offsetLeft;
      offsetY = evt.clientY - el.offsetTop;
      document.body.style.userSelect = 'none';
    });
    window.addEventListener('mousemove', (evt) => {
      if (!dragging) return;
      el.style.left = `${evt.clientX - offsetX}px`;
      el.style.top = `${evt.clientY - offsetY}px`;
    });
    window.addEventListener('mouseup', () => {
      dragging = false;
      document.body.style.userSelect = '';
    });
  });
}

function bindGlobalShortcuts(manager) {
  window.addEventListener('keydown', (evt) => {
    if (evt.key === 'F2') {
      toggleDiagnostics();
    }
    if ((evt.ctrlKey || evt.metaKey) && evt.key.toLowerCase() === 'b') {
      manager.show('browser');
    }
  });
}

function initialize() {
  loadState();
  notify = createNotifier();
  const manager = initScreenManager();
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
  qs('#diagViewport')?.textContent = window.innerWidth < 800 ? 'Mobile' : 'Desktop';
}

document.addEventListener('DOMContentLoaded', initialize);
