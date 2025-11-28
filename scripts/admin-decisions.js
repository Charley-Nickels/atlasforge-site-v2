(function () {
  const ADMIN_CODE = 'INITIATE GOBLIN MODE';
  const STORAGE_KEY = 'atlas_decisions_v1';
  const UNLOCK_KEY = 'atlas_decisions_unlocked';
  const GOBLIN_PARAM = 'goblin';
  const GOBLIN_VALUE = 'unleashed';
  const gateStatus = document.getElementById('gate-status');
  const consoleStatus = document.getElementById('console-status');
  const adminGate = document.getElementById('admin-gate');
  const consoleSection = document.getElementById('console');
  const consoleBody = document.getElementById('console-body');
  const goblinSequence = document.getElementById('goblin-sequence');
  const goblinLog = document.getElementById('goblin-log');
  const blocksContainer = document.getElementById('blocks-container');
  const exportBtn = document.getElementById('export-btn');
  const downloadBtn = document.getElementById('download-btn');
  const exportOutput = document.getElementById('export-output');
  const metaPhase = document.getElementById('meta-phase');
  const metaDescription = document.getElementById('meta-description');

  let decisions = {};
  let dataCache = null;
  const blockState = {};

  const goblinMessages = [
    'Verifying incantation: INITIATE GOBLIN MODE',
    'Enabling Goblin Mode core routines…',
    'Attempting to go ham wild…',
    'Negotiating with internal gremlins…',
    'Encrypting snacks with triple-silly AES…',
    'Calibrating chaos sliders…',
    'Goblin Mode initialization complete.'
  ];

  const loadStoredDecisions = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        decisions = JSON.parse(stored) || {};
      }
    } catch (err) {
      console.warn('Unable to parse stored decisions', err);
      decisions = {};
    }
  };

  const persistDecisions = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(decisions));
    } catch (err) {
      console.warn('Unable to persist decisions', err);
    }
  };

  const setGateStatus = (message, isError = true) => {
    if (!gateStatus) return;
    gateStatus.textContent = message;
    gateStatus.classList.toggle('is-success', !isError);
  };

  const setConsoleStatus = (message, isError = false) => {
    if (!consoleStatus) return;
    consoleStatus.textContent = message;
    consoleStatus.classList.toggle('is-success', !isError);
  };

  const handleInputChange = (itemId, input) => {
    let value;
    if (input.type === 'checkbox') {
      value = input.checked;
    } else {
      value = input.value;
    }
    decisions[itemId] = value;
    persistDecisions();
  };

  const createControl = (item) => {
    const storedValue = decisions[item.id];
    let control;

    if (item.type === 'select') {
      control = document.createElement('select');
      item.options.forEach((opt) => {
        const option = document.createElement('option');
        option.value = opt;
        option.textContent = opt;
        control.appendChild(option);
      });
      control.value = storedValue !== undefined ? storedValue : item.default || '';
    } else if (item.type === 'checkbox') {
      control = document.createElement('input');
      control.type = 'checkbox';
      control.checked = storedValue !== undefined ? Boolean(storedValue) : Boolean(item.default);
    } else {
      control = document.createElement('textarea');
      control.rows = 3;
      control.value = storedValue !== undefined ? storedValue : (item.default || '');
    }

    control.id = item.id;
    control.addEventListener('change', () => handleInputChange(item.id, control));
    return control;
  };

  const renderBlocks = (data) => {
    blocksContainer.innerHTML = '';
    if (!data || !Array.isArray(data.blocks)) {
      const error = document.createElement('p');
      error.textContent = 'No decision blocks available.';
      blocksContainer.appendChild(error);
      return;
    }

    metaPhase.textContent = data.meta?.phase ? `Phase: ${data.meta.phase}` : '';
    metaDescription.textContent = data.meta?.description || '';

    data.blocks.forEach((block, index) => {
      const section = document.createElement('section');
      section.className = 'card block-card';

      const header = document.createElement('div');
      header.className = 'block-header';

      const toggleButton = document.createElement('button');
      toggleButton.type = 'button';
      toggleButton.setAttribute('aria-expanded', 'true');
      toggleButton.setAttribute('aria-controls', `${block.id}-body`);

      const toggleIcon = document.createElement('span');
      toggleIcon.className = 'block-toggle';
      toggleIcon.textContent = '▼';
      toggleButton.appendChild(toggleIcon);

      const headerText = document.createElement('div');

      const title = document.createElement('h2');
      title.textContent = block.title || 'Untitled Block';
      headerText.appendChild(title);

      if (block.description) {
        const desc = document.createElement('p');
        desc.className = 'block-description';
        desc.textContent = block.description;
        headerText.appendChild(desc);
      }

      toggleButton.appendChild(headerText);
      header.appendChild(toggleButton);
      section.appendChild(header);

      const body = document.createElement('div');
      body.className = 'block-body';
      body.id = `${block.id}-body`;

      const defaultCollapsed = index > 2;
      blockState[block.id] = defaultCollapsed;
      body.classList.toggle('is-collapsed', defaultCollapsed);
      toggleIcon.textContent = defaultCollapsed ? '▶' : '▼';
      toggleButton.setAttribute('aria-expanded', defaultCollapsed ? 'false' : 'true');

      toggleButton.addEventListener('click', () => {
        const isCollapsed = body.classList.contains('is-collapsed');
        body.classList.toggle('is-collapsed');
        toggleIcon.textContent = isCollapsed ? '▼' : '▶';
        toggleButton.setAttribute('aria-expanded', isCollapsed ? 'true' : 'false');
        blockState[block.id] = !isCollapsed;
      });

      if (Array.isArray(block.items)) {
        block.items.forEach((item) => {
          const itemRow = document.createElement('div');
          itemRow.className = 'block-item';

          const label = document.createElement('label');
          label.setAttribute('for', item.id);
          label.textContent = item.label || item.id;
          itemRow.appendChild(label);

          if (item.description) {
            const itemDesc = document.createElement('p');
            itemDesc.className = 'item-description';
            itemDesc.textContent = item.description;
            itemRow.appendChild(itemDesc);
          }

          const control = createControl(item);
          itemRow.appendChild(control);

          if (decisions[item.id] === undefined && item.default !== undefined) {
            decisions[item.id] = item.type === 'checkbox' ? Boolean(item.default) : item.default;
            persistDecisions();
          }

          body.appendChild(itemRow);
        });
      }

      section.appendChild(body);
      blocksContainer.appendChild(section);
    });
  };

  const exportDecisions = () => {
    if (!dataCache) {
      setConsoleStatus('Load decision blocks before exporting.', true);
      return;
    }
    const exportPayload = {
      meta: {
        phase: dataCache.meta?.phase || 'Unknown Phase',
        version: dataCache.meta?.version || 'unknown',
        exported_at: new Date().toISOString(),
      },
      decisions,
    };
    const output = JSON.stringify(exportPayload, null, 2);
    exportOutput.value = output;
    exportOutput.focus();
    exportOutput.select();
    setConsoleStatus('Decisions exported. You can copy or download the JSON below.', false);
    return output;
  };

  const downloadDecisions = () => {
    const payload = exportDecisions();
    if (!payload) return;
    const blob = new Blob([payload], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'atlasforge_decisions_export.json';
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  const showConsoleBody = () => {
    if (consoleBody) {
      consoleBody.classList.remove('hidden');
    }
    loadStoredDecisions();
    loadData();
  };

  const runGoblinInitSequence = (callback) => {
    if (!goblinSequence || !goblinLog) {
      callback();
      return;
    }
    goblinLog.innerHTML = '';
    goblinSequence.classList.remove('hidden');
    let delay = 0;

    goblinMessages.forEach((message, index) => {
      setTimeout(() => {
        const line = document.createElement('div');
        line.className = 'goblin-line';
        line.textContent = message;
        goblinLog.appendChild(line);
        goblinLog.scrollTop = goblinLog.scrollHeight;

        if (index === goblinMessages.length - 1) {
          setTimeout(() => {
            goblinSequence.classList.add('hidden');
            callback();
          }, 350);
        }
      }, delay);

      delay += 450 + (index % 2 === 0 ? 120 : 0);
    });
  };

  const unlockConsole = (withAnimation = true) => {
    if (adminGate) {
      adminGate.classList.add('hidden');
    }
    if (consoleSection) {
      consoleSection.classList.remove('hidden');
    }

    if (withAnimation) {
      runGoblinInitSequence(showConsoleBody);
    } else {
      showConsoleBody();
    }

    try {
      localStorage.setItem(UNLOCK_KEY, 'true');
    } catch (err) {
      console.warn('Unable to persist unlock state', err);
    }
  };

  const handleUnlockAttempt = () => {
    const codeInput = document.getElementById('admin-code');
    const code = codeInput ? codeInput.value.trim() : '';
    if (code === ADMIN_CODE) {
      setGateStatus('Goblin Mode unlocked.', false);
      unlockConsole(true);
    } else {
      setGateStatus('Incorrect code.');
    }
  };

  const checkQueryUnlock = () => {
    const params = new URLSearchParams(window.location.search);
    if (params.get(GOBLIN_PARAM) === GOBLIN_VALUE) {
      unlockConsole(true);
      return true;
    }
    return false;
  };

  const checkStoredUnlock = () => {
    try {
      const stored = localStorage.getItem(UNLOCK_KEY);
      if (stored === 'true') {
        unlockConsole(false);
        return true;
      }
    } catch (err) {
      console.warn('Unable to read unlock state', err);
    }
    return false;
  };

  const loadData = () => {
    fetch('/data/decision_blocks.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load decision blocks: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        dataCache = data;
        renderBlocks(data);
        setConsoleStatus('Decision blocks loaded.', false);
      })
      .catch((err) => {
        console.error(err);
        setConsoleStatus('Unable to load decision blocks. Please try again later.', true);
      });
  };

  const unlockBtn = document.getElementById('unlock-btn');
  if (unlockBtn) {
    unlockBtn.addEventListener('click', handleUnlockAttempt);
  }

  if (exportBtn) {
    exportBtn.addEventListener('click', exportDecisions);
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', downloadDecisions);
  }

  if (!checkQueryUnlock()) {
    checkStoredUnlock();
  }
})();
