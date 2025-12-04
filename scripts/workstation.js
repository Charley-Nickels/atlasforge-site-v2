// AtlasStudio workstation demo wired to interaction/state model v01.
// Fetches UI config JSON (panel layout, file type views, Atlas-V actions) and simulates the panel behaviour described in the statepack.
(function () {
  const CONFIG_PATHS = {
    layout: '/atlasstudio/data/ui_config_v01/panel_layout.json',
    views: '/atlasstudio/data/ui_config_v01/file_type_views.json',
    actions: '/atlasstudio/data/ui_config_v01/atlas_v_actions.json'
  };

  const defaultConfig = {
    layout: {
      regions: {
        toolbar: { position: 'top', height: 60 },
        sidebar: { position: 'left', width: 260 },
        editor: { position: 'center' },
        chat: { position: 'right', width: 280 }
      },
      responsive: {
        compact: {
          toolbar: { height: 52 },
          sidebar: { width: 200 },
          chat: { width: 220 }
        }
      }
    },
    views: {
      md: 'markdown_preview',
      proj: 'project_overview',
      atlas: 'module_view',
      json: 'json_viewer',
      cfg: 'json_viewer',
      log: 'log_viewer',
      png: 'image_preview',
      jpg: 'image_preview',
      txt: 'plain_text'
    },
    actions: {
      actions: [
        {
          id: 'generate_ideas',
          label: 'Generate ideas',
          description: 'Brainstorm creative variations based on the selected project or module.',
          affects: ['chat'],
          sideEffects: ['Creates notes entry']
        },
        {
          id: 'patch_now',
          label: 'Patch now',
          description: 'Analyzes the selected module and produces a patch diff.',
          affects: ['editor', 'logs'],
          sideEffects: ['Opens Diff View']
        },
        {
          id: 'organize',
          label: 'Organize',
          description: 'Scans the project directory and cleans up misfiled assets (simulated).',
          affects: ['sidebar', 'logs'],
          sideEffects: ['Updates file tree']
        },
        {
          id: 'summarize',
          label: 'Summarize',
          description: 'Provides a concise summary of the selected file or project.',
          affects: ['chat', 'editor'],
          sideEffects: ['Adds summary to chat']
        }
      ]
    }
  };

  const fileTree = [
    {
      id: 'projects',
      name: 'projects/',
      type: 'directory',
      children: [
        {
          id: 'creative_labs_proj',
          name: 'creative_labs.proj',
          type: 'proj',
          path: '/projects/creative_labs.proj',
          summary:
            'High-level overview of the creative labs initiative; links to modules and assets across the stack.',
          modules: ['modules/network_manager.atlas', 'modules/audio_processor.atlas'],
          assets: ['assets/glow_render.png', 'assets/harbor_layout.png']
        }
      ]
    },
    {
      id: 'modules',
      name: 'modules/',
      type: 'directory',
      children: [
        {
          id: 'network_module',
          name: 'network_manager.atlas',
          type: 'atlas',
          path: '/modules/network_manager.atlas',
          description: 'Module orchestrating routing and sync between Atlas-V clients.',
          parameters: ['heartbeat_interval=30', 'retry=3'],
          notes: 'Pending Atlas-V patch to tighten latency windows.'
        },
        {
          id: 'audio_module',
          name: 'audio_processor.atlas',
          type: 'atlas',
          path: '/modules/audio_processor.atlas',
          description: 'Signal chain for AtlasWave hooks and ambient layering.',
          parameters: ['channels=4', 'ducking=enabled'],
          notes: 'AtlasWave integration ready once pilots begin.'
        }
      ]
    },
    {
      id: 'assets',
      name: 'assets/',
      type: 'directory',
      children: [
        { id: 'glow_render', name: 'glow_render.png', type: 'png', path: '/assets/glow_render.png' },
        { id: 'harbor_layout', name: 'harbor_layout.png', type: 'png', path: '/assets/harbor_layout.png' }
      ]
    },
    {
      id: 'logs',
      name: 'logs/',
      type: 'directory',
      children: [
        {
          id: 'patch_history',
          name: 'patch_history.log',
          type: 'log',
          path: '/logs/patch_history.log',
          entries: [
            '[09:15] Atlas-V: Flagged lore drift in scene 3.',
            '[09:18] Producer: Requesting patch guidance.',
            '[09:22] Atlas-V: Patch suggestion applied.'
          ]
        }
      ]
    },
    {
      id: 'atlas_v',
      name: 'atlas_v/',
      type: 'directory',
      children: [
        {
          id: 'actions_cfg',
          name: 'actions.cfg',
          type: 'cfg',
          path: '/atlas_v/actions.cfg',
          content: '{\n  "autoPatch": true,\n  "safeMode": false\n}'
        }
      ]
    }
  ];

  const transcripts = {
    default: [
      { role: 'Atlas-V', text: 'I can review any file for canon drift.' },
      { role: 'Producer', text: 'Select a file to see guidance.' }
    ],
    network_module: [
      { role: 'Producer', text: 'Atlas-V, tighten the harbor latency window.' },
      { role: 'Atlas-V', text: 'Recommend reducing guard_timeout and enabling flow simulation.' }
    ],
    audio_module: [
      { role: 'Composer', text: 'Does this audio processor stay canon-safe with AtlasWave?' },
      { role: 'Atlas-V', text: 'Yes. AtlasWave hooks are clean; consider ducking when AtlasWave streams are live.' }
    ]
  };

  const state = {
    viewMode: 'markdown_preview',
    stateName: 'Idle',
    selectedFile: null,
    activeModule: null,
    pendingAction: null,
    diffContent: null,
    layout: defaultConfig.layout,
    views: defaultConfig.views,
    actions: defaultConfig.actions.actions
  };

  const fileTreeEl = document.getElementById('file-tree');
  const previewEl = document.getElementById('preview');
  const chatEl = document.getElementById('atlasv-chat');

  function loadJson(path, fallback) {
    return fetch(path)
      .then((resp) => (resp.ok ? resp.json() : fallback))
      .catch(() => fallback);
  }

  function getExtension(name = '') {
    const parts = name.split('.');
    return parts.length > 1 ? parts.pop().toLowerCase() : '';
  }

  function findFileById(id, nodes = fileTree) {
    for (const node of nodes) {
      if (node.id === id) return node;
      if (node.children) {
        const found = findFileById(id, node.children);
        if (found) return found;
      }
    }
    return null;
  }

  function findFirstFile(nodes = fileTree) {
    for (const node of nodes) {
      if (node.type !== 'directory') return node;
      if (node.children) {
        const found = findFirstFile(node.children);
        if (found) return found;
      }
    }
    return null;
  }

  function setState(updates) {
    Object.assign(state, updates);
  }

  function renderFileTree(nodes = fileTree, container) {
    const list = document.createElement('ul');
    list.className = 'ws-file-tree';

    nodes.forEach((node) => {
      const item = document.createElement('li');
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = node.name;
      button.dataset.type = node.type;
      button.dataset.fileId = node.id;

      if (node.type === 'directory') {
        button.classList.add('ws-dir');
        const childContainer = document.createElement('div');
        childContainer.className = 'ws-children';
        let expanded = true;
        button.addEventListener('click', () => {
          expanded = !expanded;
          childContainer.style.display = expanded ? 'block' : 'none';
        });
        item.appendChild(button);
        renderFileTree(node.children, childContainer);
        item.appendChild(childContainer);
      } else {
        button.addEventListener('click', () => {
          const viewMode = state.views[getExtension(node.name)] || 'plain_text';
          setState({
            selectedFile: node,
            activeModule: node.type === 'atlas' ? node.name.replace('.atlas', '') : null,
            viewMode,
            stateName: 'FileSelected',
            diffContent: null
          });
          renderPreview(node, viewMode);
          renderChatTranscript(node);
        });
        item.appendChild(button);
      }

      list.appendChild(item);
    });

    if (container) {
      container.appendChild(list);
    } else if (fileTreeEl) {
      fileTreeEl.innerHTML = '';
      fileTreeEl.appendChild(list);
    }
  }

  function renderMarkdown(content = '') {
    const frag = document.createDocumentFragment();
    const lines = content.split(/\n+/);
    lines.forEach((line) => {
      if (line.trim().startsWith('#')) {
        const heading = document.createElement('h2');
        heading.textContent = line.replace(/^#+\s*/, '');
        frag.appendChild(heading);
      } else if (line.trim()) {
        const paragraph = document.createElement('p');
        paragraph.textContent = line;
        frag.appendChild(paragraph);
      }
    });
    return frag;
  }

  function renderProjectOverview(file) {
    const container = document.createElement('div');
    container.className = 'ws-project-overview';
    const modules = (file.modules || []).map((m) => `<li>${m}</li>`).join('');
    const assets = (file.assets || []).map((a) => `<li>${a}</li>`).join('');
    container.innerHTML = `
      <h2>${file.name}</h2>
      <p>${file.summary || ''}</p>
      <div class="ws-overview-grid">
        <div>
          <h3>Modules</h3>
          <ul>${modules}</ul>
        </div>
        <div>
          <h3>Assets</h3>
          <ul>${assets}</ul>
        </div>
      </div>
    `;
    return container;
  }

  function renderModule(file) {
    const container = document.createElement('div');
    container.className = 'ws-module';
    const params = (file.parameters || []).map((p) => `<li>${p}</li>`).join('');
    container.innerHTML = `
      <h2>${file.name}</h2>
      <p>${file.description || ''}</p>
      <h3>Parameters</h3>
      <ul>${params}</ul>
      <p class="ws-note">${file.notes || ''}</p>
    `;
    return container;
  }

  function renderJson(content = '{}') {
    const pre = document.createElement('pre');
    try {
      const parsed = JSON.parse(content);
      pre.textContent = JSON.stringify(parsed, null, 2);
    } catch (e) {
      pre.textContent = content;
    }
    return pre;
  }

  function renderLog(entries = []) {
    const pre = document.createElement('pre');
    pre.textContent = entries.join('\n');
    return pre;
  }

  function renderPlaceholder(message) {
    const p = document.createElement('p');
    p.className = 'ws-placeholder';
    p.textContent = message;
    return p;
  }

  function runAction(actionId) {
    const action = state.actions.find((item) => item.id === actionId);
    if (!action) return;

    setState({ stateName: 'AtlasVResponding', pendingAction: action.id });
    renderChatTranscript(state.selectedFile, `${action.label} in progress...`);

    setTimeout(() => {
      if (action.id === 'patch_now') {
        setState({
          stateName: 'DiffView',
          diffContent: '--- old\n+++ new\n- guard_timeout=10\n+ guard_timeout=6\n+ enable_flow_sim=true'
        });
        renderPreview(state.selectedFile, state.viewMode);
      } else if (action.id === 'organize') {
        renderFileTree();
      }
      setState({ stateName: 'FileSelected', pendingAction: null });
      renderChatTranscript(state.selectedFile, `${action.label} completed.`);
    }, 600);
  }

  function renderPreview(file, viewMode) {
    if (!previewEl) return;
    if (!file) {
      previewEl.innerHTML = '';
      previewEl.appendChild(renderPlaceholder('Select a file to preview.'));
      return;
    }

    previewEl.innerHTML = '';
    if (state.stateName === 'DiffView' && state.diffContent) {
      const pre = document.createElement('pre');
      pre.textContent = state.diffContent;
      previewEl.appendChild(pre);
      return;
    }

    if (viewMode === 'markdown_preview' && file.content) {
      previewEl.appendChild(renderMarkdown(file.content));
      return;
    }

    if (viewMode === 'project_overview') {
      previewEl.appendChild(renderProjectOverview(file));
      return;
    }

    if (viewMode === 'module_view') {
      previewEl.appendChild(renderModule(file));
      return;
    }

    if (viewMode === 'json_viewer' && file.content) {
      previewEl.appendChild(renderJson(file.content));
      return;
    }

    if (viewMode === 'log_viewer') {
      previewEl.appendChild(renderLog(file.entries));
      return;
    }

    if (viewMode === 'image_preview') {
      previewEl.appendChild(renderPlaceholder('Image preview placeholder (binary assets are read-only).'));
      return;
    }

    previewEl.appendChild(renderPlaceholder(file.content || 'Plain text preview.'));
  }

  function renderActions() {
    if (!chatEl) return;
    const actionsBar = document.createElement('div');
    actionsBar.className = 'ws-actions';
    actionsBar.innerHTML = '<h4>Atlas-V Actions</h4>';

    state.actions.forEach((action) => {
      const btn = document.createElement('button');
      btn.className = 'af-button af-button--ghost';
      btn.type = 'button';
      btn.textContent = action.label;
      btn.title = `${action.description}\nAffects: ${action.affects.join(', ')}.`;
      btn.addEventListener('click', () => runAction(action.id));
      actionsBar.appendChild(btn);
    });

    return actionsBar;
  }

  function renderChatTranscript(file, transientMessage) {
    if (!chatEl) return;
    const transcriptKey = file ? file.id : 'default';
    const messages = transcripts[transcriptKey] || transcripts.default;

    const container = document.createElement('div');
    container.className = 'ws-chat';

    const stateLabel = document.createElement('p');
    stateLabel.className = 'ws-state';
    stateLabel.textContent = `State: ${state.stateName}`;
    container.appendChild(stateLabel);

    messages.forEach((msg) => {
      const bubble = document.createElement('div');
      bubble.className = 'ws-chat__message';
      bubble.innerHTML = `<strong>${msg.role}:</strong> ${msg.text}`;
      container.appendChild(bubble);
    });

    if (transientMessage) {
      const bubble = document.createElement('div');
      bubble.className = 'ws-chat__message';
      bubble.innerHTML = `<strong>Atlas-V:</strong> ${transientMessage}`;
      container.appendChild(bubble);
    }

    const actionsBar = renderActions();
    if (actionsBar) {
      container.appendChild(actionsBar);
    }

    chatEl.innerHTML = '';
    chatEl.appendChild(container);
  }

  function boot(configs) {
    setState({ layout: configs.layout, views: configs.views, actions: configs.actions.actions });
    const initialFile = findFirstFile();
    if (initialFile) {
      const initialView = state.views[getExtension(initialFile.name)] || 'plain_text';
      setState({ selectedFile: initialFile, activeModule: null, viewMode: initialView, stateName: 'FileSelected' });
    }
    renderFileTree();
    renderPreview(state.selectedFile, state.viewMode);
    renderChatTranscript(state.selectedFile);
    bindToolbar();
  }

  function bindToolbar() {
    const toolbar = document.querySelector('.af-workstation__toolbar');
    if (!toolbar) return;
    toolbar.querySelectorAll('[data-action]').forEach((button) => {
      button.addEventListener('click', () => {
        const actionId = button.getAttribute('data-action');
        runAction(actionId);
      });
    });
  }

  function init() {
    Promise.all([
      loadJson(CONFIG_PATHS.layout, defaultConfig.layout),
      loadJson(CONFIG_PATHS.views, defaultConfig.views),
      loadJson(CONFIG_PATHS.actions, defaultConfig.actions)
    ]).then(([layout, views, actions]) => {
      boot({ layout, views, actions });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
