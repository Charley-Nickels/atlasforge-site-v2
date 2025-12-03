// AtlasStudio workstation demo: renders static file tree, preview, and Atlas-V chat for atlasstudio.html.
// Depends on layout containers (#file-tree, #preview, #atlasv-chat) styled via styles/atlasstudio.css.
// State is entirely in-memory and meant for front-end preview only.
(function () {
  const files = [
    {
      id: 'pitch',
      name: 'pitch.md',
      type: 'markdown',
      content:
        '# AtlasStudio vision\nAtlasStudio blends Atlas-V governance with a glow-forward workstation.\nIt keeps story, canon, and production flows aligned.',
    },
    {
      id: 'tasks',
      name: 'tasks.log',
      type: 'log',
      content:
        '[09:15] Atlas-V: Flagged lore drift in scene 3.\n[09:18] Producer: Requesting patch guidance.\n[09:22] Atlas-V: Patch suggestion applied.',
    },
    {
      id: 'scene',
      name: 'scene.json',
      type: 'json',
      content: '{\n  "scene": "Harbor skirmish",\n  "risk": "medium",\n  "notes": ["check canon", "add vessel silhouettes"]\n}',
    },
    {
      id: 'summary',
      name: 'summary.txt',
      type: 'text',
      content: 'Atlas-V keeps decision history visible. Producers can accept, flag, or request changes from the same view.',
    },
    {
      id: 'notes',
      name: 'notes.md',
      type: 'markdown',
      content: '# Patch log\n- Added glow cues to hero.\n- Linked canon checklist.\n- Ready for Decision Console handoff.',
    },
  ];

  const transcripts = {
    default: [
      { role: 'Atlas-V', text: 'I can review any file for canon drift.' },
      { role: 'Producer', text: 'Select a file to see guidance.' },
    ],
    pitch: [
      { role: 'Producer', text: 'Generate ideas for the glow hero.' },
      { role: 'Atlas-V', text: 'Suggest adding ambient halo and governance badge.' },
      { role: 'Atlas-V', text: 'Patch now applied to pitch.md.' },
    ],
    tasks: [
      { role: 'Producer', text: 'Summarize the last run.' },
      { role: 'Atlas-V', text: 'Flags cleared; awaiting canon review.' },
    ],
    scene: [
      { role: 'Producer', text: 'Check risks for harbor scene.' },
      { role: 'Atlas-V', text: 'Risk medium due to lore drift; propose silhouette pass.' },
    ],
    summary: [
      { role: 'Producer', text: 'Give me the decision highlights.' },
      { role: 'Atlas-V', text: 'Queue handled; 2 flags open; ready for console export.' },
    ],
    notes: [
      { role: 'Producer', text: 'Did we capture the patch log correctly?' },
      { role: 'Atlas-V', text: 'Notes synced; governance cues stay visible for Decision Console.' },
    ],
  };

  const state = {
    currentState: 'idle',
    currentFile: null,
  }; // two-state tracker used to drive preview/chat updates

  const fileTreeEl = document.getElementById('file-tree');
  const previewEl = document.getElementById('preview');
  const chatEl = document.getElementById('atlasv-chat');

  function setState(newState, file) {
    state.currentState = newState;
    if (file) {
      state.currentFile = file;
    }
  }

  function renderFileTree() {
    if (!fileTreeEl) return;
    const list = document.createElement('ul');
    list.className = 'ws-file-tree';

    files.forEach((file) => {
      const item = document.createElement('li');
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = file.name;
      button.dataset.type = file.type;
      button.dataset.fileId = file.id;
      button.addEventListener('click', () => {
        setState('fileSelected', file);
        renderPreview(file);
        renderChatTranscript(file);
      });
      item.appendChild(button);
      list.appendChild(item);
    });

    fileTreeEl.innerHTML = '';
    fileTreeEl.appendChild(list);
  }

  function renderPreview(file) {
    if (!previewEl) return;
    if (!file) {
      previewEl.innerHTML = '<p class="ws-placeholder">Select a file to preview.</p>';
      return;
    }

    if (file.type === 'markdown') {
      const lines = file.content.split(/\n+/);
      const frag = document.createDocumentFragment();
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
      previewEl.innerHTML = '';
      previewEl.appendChild(frag);
      return;
    }

    const pre = document.createElement('pre');
    pre.textContent = file.content;
    previewEl.innerHTML = '';
    previewEl.appendChild(pre);
  }

  function renderChatTranscript(file) {
    if (!chatEl) return;
    const transcriptKey = file ? file.id : 'default';
    const messages = transcripts[transcriptKey] || transcripts.default;

    const container = document.createElement('div');
    container.className = 'ws-chat';

    const stateLabel = document.createElement('p');
    stateLabel.className = 'ws-state';
    stateLabel.textContent = `State: ${state.currentState}`;
    container.appendChild(stateLabel);

    messages.forEach((msg) => {
      const bubble = document.createElement('div');
      bubble.className = 'ws-chat__message';
      bubble.innerHTML = `<strong>${msg.role}:</strong> ${msg.text}`;
      container.appendChild(bubble);
    });

    chatEl.innerHTML = '';
    chatEl.appendChild(container);
  }

  function init() {
    renderFileTree();
    renderPreview(state.currentFile);
    renderChatTranscript(state.currentFile);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
