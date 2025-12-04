/*
 * AtlasStudio Workstation Logic v01
 *
 * This script turns the static workstation markup into a live, interactive
 * prototype. It reads configuration and data files from the atlasstudio
 * directory, builds a hierarchical file tree, renders previews in the editor
 * panel based on file type, and logs Atlas‑V style messages in the chat panel
 * when actions are triggered. No backend communication occurs – all data
 * remains client‑side.
 */
(function() {
  // Paths to configuration and data. These relative URLs point into the
  // atlasstudio folder included alongside this page. Adjust if the folder
  // structure changes.
  const PROJECT_TREE_URL = 'atlasstudio/data/filesystem_v01/project_tree.json';
  const FILE_TYPE_VIEWS_URL = 'atlasstudio/data/ui_config_v01/file_type_views.json';
  const ACTIONS_URL = 'atlasstudio/data/ui_config_v01/atlas_v_actions.json';

  // Cache DOM elements
  const fileTreeEl = document.getElementById('as-file-tree');
  const editorInfoEl = document.getElementById('as-editor-info');
  const editorContentEl = document.getElementById('as-editor-content');
  const viewModeEl = document.getElementById('as-view-mode');
  const chatMessagesEl = document.getElementById('as-chat-messages');
  const actionsEl = document.getElementById('as-actions');

  // In‑memory state model matching workstation_state_model_v01.md
  let appState = {
    state: 'Idle',           // Idle | FileSelected | AtlasVResponding | DiffView
    selectedFile: null,      // e.g. "/projects/creative_labs.proj"
    selectedFileType: null,  // e.g. "proj"
    activeModule: null,      // only for .atlas files
    pendingAction: null      // id of the action being performed
  };

  let fileTypeViews = {};
  let atlasActions = [];

  // Utility: fetch JSON with graceful error handling
  function fetchJSON(url) {
    return fetch(url).then((resp) => {
      if (!resp.ok) throw new Error('Failed to fetch ' + url);
      return resp.json();
    });
  }

  // Build the nested file tree recursively
  function buildTree(node, parentEl, pathPrefix = '') {
    if (!node || !node.children) return;
    node.children.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item.name;
      if (item.type === 'directory') {
        li.classList.add('as-tree-folder');
        // Nested list for folder contents
        const ul = document.createElement('ul');
        ul.classList.add('hidden');
        li.appendChild(ul);
        li.addEventListener('click', (e) => {
          e.stopPropagation();
          ul.classList.toggle('hidden');
        });
        buildTree(item, ul, pathPrefix + item.name + '/');
      } else {
        li.classList.add('as-tree-file');
        const filePath = pathPrefix + item.name;
        li.dataset.filePath = filePath;
        li.addEventListener('click', (e) => {
          e.stopPropagation();
          onFileSelect(filePath, item.name);
          highlightSelected(li);
        });
      }
      parentEl.appendChild(li);
    });
  }

  // Highlight the selected list item and clear previous selections
  function highlightSelected(targetLi) {
    const selected = fileTreeEl.querySelector('.selected');
    if (selected) selected.classList.remove('selected');
    targetLi.classList.add('selected');
  }

  // Handle selecting a file in the tree
  function onFileSelect(filePath, fileName) {
    appState.state = 'FileSelected';
    appState.selectedFile = '/' + filePath; // store with leading slash
    const ext = (fileName.split('.').pop() || '').toLowerCase();
    appState.selectedFileType = ext;
    appState.activeModule = ext === 'atlas' ? fileName.replace(/\.atlas$/, '') : null;
    editorInfoEl.textContent = fileName;
    // Determine view mode via config
    const viewMode = fileTypeViews[ext] || 'text_viewer';
    viewModeEl.textContent = 'View mode: ' + viewMode.replace(/_/g, ' ');
    // Load preview content from appropriate folder
    loadPreview(filePath, ext, viewMode);
  }

  // Map a data file to a preview path. Returns a URL or null if no preview.
  function resolvePreviewPath(filePath, ext) {
    const fileName = filePath.split('/').pop();
    // Logs are fetched from the logs directory
    if (ext === 'log') {
      return 'atlasstudio/data/filesystem_v01/logs/' + fileName;
    }
    // Attempt to fetch a matching preview file from the previews directory
    const base = fileName.replace(/\.[^/.]+$/, '');
    // Choose extension for preview: JSON previews keep ext, others become .txt or .md
    let previewExt;
    if (ext === 'json' || ext === 'cfg') {
      previewExt = 'json';
    } else if (ext === 'md') {
      previewExt = 'md';
    } else {
      previewExt = 'txt';
    }
    return 'atlasstudio/data/filesystem_v01/previews/' + base + '_preview.' + previewExt;
  }

  // Load and render preview content
  function loadPreview(filePath, ext, viewMode) {
    const url = resolvePreviewPath(filePath, ext);
    if (!url) {
      renderEditorContent('// No preview available for ' + filePath, viewMode);
      return;
    }
    fetch(url)
      .then((resp) => {
        if (!resp.ok) throw new Error('Preview missing');
        return resp.text();
      })
      .then((text) => {
        renderEditorContent(text, viewMode);
      })
      .catch(() => {
        renderEditorContent('// Preview not available for ' + filePath, viewMode);
      });
  }

  // Render the editor content based on view mode. Simple syntax highlighting for JSON.
  function renderEditorContent(content, viewMode) {
    if (viewMode === 'json_viewer') {
      try {
        const obj = JSON.parse(content);
        editorContentEl.textContent = JSON.stringify(obj, null, 2);
      } catch (err) {
        editorContentEl.textContent = content;
      }
    } else if (viewMode === 'markdown_preview') {
      // Basic markdown to text conversion: replace headers and lists with plain text
      editorContentEl.textContent = content;
    } else {
      editorContentEl.textContent = content;
    }
  }

  // Render the action buttons from atlas_v_actions.json
  function renderActions() {
    actionsEl.innerHTML = '';
    atlasActions.forEach((action) => {
      const btn = document.createElement('button');
      btn.textContent = action.label;
      btn.title = action.description;
      btn.addEventListener('click', () => onAction(action));
      actionsEl.appendChild(btn);
    });
  }

  // Handle Atlas‑V action invocation
  function onAction(action) {
    // Only act when a file is selected
    if (appState.state !== 'FileSelected' || !appState.selectedFile) {
      appendChatMessage('System', 'Select a file before running an action.');
      return;
    }
    appState.state = 'AtlasVResponding';
    appState.pendingAction = action.id;
    // Disable all action buttons while responding
    setActionsDisabled(true);
    appendChatMessage('User', 'Invoked action: ' + action.label);
    appendChatMessage('Atlas‑V', 'Processing ' + action.label.toLowerCase() + ' on ' + appState.selectedFile + ' …');
    // Simulate a delayed response using a timeout. In a real system this
    // would call a backend service. We'll also show a simple diff view for
    // patch actions.
    setTimeout(() => {
      // Generate a mock response
      const response = mockActionResponse(action);
      appendChatMessage('Atlas‑V', response);
      appState.state = 'FileSelected';
      appState.pendingAction = null;
      setActionsDisabled(false);
    }, 1000);
  }

  // Simple mock responses per action type
  function mockActionResponse(action) {
    switch (action.id) {
      case 'generate_ideas':
        return 'Here are a few creative ideas for ' + appState.selectedFile + ':\n– Enhance ambient textures\n– Introduce dynamic weather patterns\n– Add interactive NPC dialogue';
      case 'patch_now':
        return 'Patch applied. A diff has been generated and logged to generation_output.log.';
      case 'organize':
        return 'Files reorganized. Check the logs for details.';
      case 'summarize':
        return 'Summary complete: This file defines the core structure and metadata for the project.';
      default:
        return 'Action completed.';
    }
  }

  // Append a message to the chat panel
  function appendChatMessage(sender, message) {
    const p = document.createElement('p');
    p.innerHTML = '<strong>' + sender + ':</strong> ' + message.replace(/\n/g, '<br />');
    chatMessagesEl.appendChild(p);
    // Auto scroll to bottom
    chatMessagesEl.scrollTop = chatMessagesEl.scrollHeight;
  }

  // Enable or disable all action buttons
  function setActionsDisabled(disabled) {
    actionsEl.querySelectorAll('button').forEach((btn) => {
      btn.disabled = disabled;
    });
  }

  // Initialize the application
  function init() {
    Promise.all([
      fetchJSON(FILE_TYPE_VIEWS_URL),
      fetchJSON(PROJECT_TREE_URL),
      fetchJSON(ACTIONS_URL)
    ])
      .then(([typeViews, tree, actions]) => {
        fileTypeViews = typeViews;
        atlasActions = actions.actions || [];
        // Build the file tree
        buildTree(tree, fileTreeEl);
        // Render action buttons
        renderActions();
        // Seed chat with a welcome message
        appendChatMessage('Atlas‑V', 'Welcome to AtlasStudio. Select a file to begin.');
      })
      .catch((err) => {
        console.error(err);
        appendChatMessage('System', 'Error initializing workstation: ' + err.message);
      });
  }

  // Start once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();