(function() {
  const tasks = [
    { id: 't1', title: 'Harbor flow orchestration', tags: ['OIA', 'routing'], priority: 'High', state: 'Yes', notes: 'Route cargo events to Lighthouse ops', history: [] },
    { id: 't2', title: 'Audio stem prep', tags: ['SKB', 'audio'], priority: 'Medium', state: 'Later', notes: 'Assign cues to release timeline', history: [] },
    { id: 't3', title: 'Decision snapshot links', tags: ['Atlas-V', 'logic'], priority: 'High', state: 'Expand', notes: 'Map guard checks to FlowSim preview', history: [] },
    { id: 't4', title: 'Entity map polish', tags: ['Studio'], priority: 'Low', state: 'No', notes: 'Collapse clusters on mobile', history: [] }
  ];

  const snapshots = [];
  const assistantPool = {
    Yes: ['Progress captured. Guardrails aligned with Navigator routes.', 'FlowSim updated with favorable timing.'],
    No: ['Entry parked. Memory ledger flagged a follow-up.', 'Guard notes: reconsider constraints before reactivating.'],
    Later: ['Queued for later. Timeline reminder set.', 'Navigator holding slot in backlog view.'],
    Expand: ['Branch created. Add entities and routes to proceed.', 'Atlas-V ready to validate new branch consistency.'],
    default: ['Atlas-V listening. Select a task to review details.']
  };

  const listEl = document.querySelector('[data-task-list]');
  const detailTitle = document.querySelector('[data-task-title]');
  const detailTags = document.querySelector('[data-task-tags]');
  const detailNotes = document.querySelector('[data-task-notes]');
  const snapshotList = document.querySelector('[data-snapshot-list]');
  const assistantFeed = document.querySelector('[data-assistant-feed]');

  function renderTasks() {
    if (!listEl) return;
    listEl.innerHTML = '';
    tasks.forEach((task) => {
      const article = document.createElement('article');
      article.className = 'mf-task';
      article.dataset.id = task.id;
      article.tabIndex = 0;
      article.innerHTML = `
        <div class="mf-chip">${task.priority}</div>
        <h4>${task.title}</h4>
        <p>${task.notes}</p>
        <div>${task.tags.map((tag) => `<span class="mf-chip">${tag}</span>`).join(' ')}</div>
      `;
      article.addEventListener('click', () => selectTask(task.id));
      article.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectTask(task.id);
        }
      });
      listEl.appendChild(article);
    });
  }

  let currentTask = tasks[0];

  function selectTask(id) {
    currentTask = tasks.find((t) => t.id === id) || currentTask;
    updateDetails();
    document.querySelectorAll('.mf-task').forEach((el) => el.classList.toggle('is-active', el.dataset.id === currentTask.id));
    assistantMessage('default');
  }

  function updateDetails() {
    if (!currentTask) return;
    if (detailTitle) detailTitle.textContent = currentTask.title;
    if (detailTags) detailTags.innerHTML = currentTask.tags.map((t) => `<span class="mf-chip">${t}</span>`).join(' ');
    if (detailNotes) detailNotes.textContent = currentTask.notes;
  }

  function assistantMessage(key) {
    const pool = assistantPool[key] || assistantPool.default;
    const messages = Array.isArray(pool) ? pool : [pool];
    if (assistantFeed) {
      assistantFeed.innerHTML = messages.map((msg) => `<div class="mf-card">${msg}</div>`).join('');
    }
  }

  function snapshot() {
    const stamp = new Date();
    snapshots.unshift({ timestamp: stamp.toLocaleTimeString(), summary: currentTask.title, states: tasks.map((t) => ({ id: t.id, state: t.state })) });
    renderSnapshots();
  }

  function renderSnapshots() {
    if (!snapshotList) return;
    snapshotList.innerHTML = '';
    snapshots.slice(0, 6).forEach((snap) => {
      const card = document.createElement('div');
      card.className = 'mf-snapshot';
      card.innerHTML = `<strong>${snap.timestamp}</strong><p>${snap.summary}</p><small>${snap.states.length} items tracked</small>`;
      snapshotList.appendChild(card);
    });
  }

  function updateState(state) {
    if (!currentTask) return;
    currentTask.state = state;
    currentTask.history.push({ state, timestamp: Date.now() });
    assistantMessage(state);
    renderTasks();
    selectTask(currentTask.id);
  }

  document.querySelectorAll('[data-decision]').forEach((btn) => {
    btn.addEventListener('click', () => updateState(btn.dataset.decision));
  });

  const snapBtn = document.querySelector('[data-snapshot]');
  if (snapBtn) snapBtn.addEventListener('click', snapshot);

  renderTasks();
  selectTask(tasks[0].id);
  renderSnapshots();
})();
