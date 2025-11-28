(function () {
  const STORAGE_KEY = 'atlas_decisions_phase5_v2';
  const FREEZE_KEY = 'atlas_decisions_phase5_freeze';
  const EXPORT_FILENAME = 'phase5_decisions_export.json';
  const decisionsContainer = document.getElementById('decisions-container');
  const consoleStatus = document.getElementById('console-status');
  const categoryFilter = document.getElementById('filter-category');
  const priorityFilter = document.getElementById('filter-priority');
  const statusFilter = document.getElementById('filter-status');
  const freezeToggle = document.getElementById('canon-freeze');
  const exportBtn = document.getElementById('export-btn');
  const downloadBtn = document.getElementById('download-btn');
  const exportOutput = document.getElementById('export-output');
  const narrativeList = document.getElementById('narrative-list');
  const prototypeList = document.getElementById('prototype-list');
  const brainstormList = document.getElementById('brainstorm-list');

  const CATEGORY_OPTIONS = [
    'Brand',
    'Visual/UI',
    'Navigation',
    'IA/Structure',
    'Content',
    'Governance',
    'Placeholder Modules',
    'Cross-Brand Logic',
    'Pre-Figma Requirements',
    'Future Suggestions',
  ];

  const seedDecisions = [
    {
      id: 'NAV-001',
      category: 'Navigation',
      priority: 'High',
      dependency: 'Run 1 nav lock',
      question: 'Where should SKB live in the IA so Games stays clear and Media remains grouped?',
      options: ['Footer-only with audio note', 'Secondary nav link', 'Hidden with contextual mentions'],
      recommended: 'Secondary nav link',
      reasoning: 'Keeps SKB discoverable without crowding the top-level nav.',
      status: 'Pending',
      blocked_by_canon: 'No',
      ready_for_phase6: 'No',
      notes: 'Requires council confirmation before Figma nav components.',
      needsNarrative: false,
      needsPrototype: true,
    },
    {
      id: 'GOV-001',
      category: 'Governance',
      priority: 'Medium',
      dependency: 'Homepage/Atlas-V sections',
      question: 'What depth should governance blurbs use on homepage vs Atlas-V vs About?',
      options: ['Single sentence everywhere', 'Expanded note on Atlas-V only', 'Homepage + Atlas-V short, About slightly longer'],
      recommended: 'Homepage + Atlas-V short, About slightly longer',
      reasoning: 'Balances visibility with non-technical tone.',
      status: 'Pending',
      blocked_by_canon: 'No',
      ready_for_phase6: 'No',
      notes: 'Aligns with safety positioning without exposing internals.',
      needsNarrative: true,
      needsPrototype: false,
    },
    {
      id: 'VIS-002',
      category: 'Visual/UI',
      priority: 'High',
      dependency: 'Run 4 token pass',
      question: 'Should hero badges use the darker accent or neutral surface for contrast across brands?',
      options: ['Dark accent badge', 'Neutral soft badge', 'Brand-colored badge per pillar'],
      recommended: 'Neutral soft badge',
      reasoning: 'Prevents clashes across playful vs. serious pages.',
      status: 'Approved',
      blocked_by_canon: 'No',
      ready_for_phase6: 'Yes',
      notes: 'Lock for component library and Figma hero symbols.',
      needsNarrative: false,
      needsPrototype: true,
    },
    {
      id: 'IA-003',
      category: 'IA/Structure',
      priority: 'Medium',
      dependency: 'Labs/Blog shells',
      question: 'How should hidden-but-live Labs and Blog be teased without cluttering navigation?',
      options: ['Footer-only teasers', 'Inline teaser blocks on homepage', 'Contextual mentions on Labs-related pages'],
      recommended: 'Footer-only teasers',
      reasoning: 'Meets canon requirement while keeping nav minimal.',
      status: 'Pending',
      blocked_by_canon: 'No',
      ready_for_phase6: 'No',
      notes: 'Figma must show inactive state for hidden links.',
      needsNarrative: false,
      needsPrototype: true,
    },
    {
      id: 'BRD-004',
      category: 'Brand',
      priority: 'High',
      dependency: 'Tone matrix',
      question: 'How strict should the tone gating be for playful titles like OIA when sharing space with Atlas-V blocks?',
      options: ['Hard separation by sections', 'Light blending with badges', 'Unified neutral tone across page'],
      recommended: 'Hard separation by sections',
      reasoning: 'Protects Atlas-V seriousness while keeping OIA playful.',
      status: 'Approved',
      blocked_by_canon: 'No',
      ready_for_phase6: 'Yes',
      notes: 'Enforce with Figma page-level tone chips.',
      needsNarrative: true,
      needsPrototype: false,
    },
    {
      id: 'PH-005',
      category: 'Placeholder Modules',
      priority: 'Medium',
      dependency: 'Run 5 metadata pass',
      question: 'What metadata set should placeholder cards surface for Media and Labs grids?',
      options: ['Title + tag only', 'Title + tag + status', 'Title + tag + status + runtime/length'],
      recommended: 'Title + tag + status + runtime/length',
      reasoning: 'Gives designers intent without overcommitting content.',
      status: 'Pending',
      blocked_by_canon: 'No',
      ready_for_phase6: 'No',
      notes: 'Needs confirmation for consistent card heights.',
      needsNarrative: false,
      needsPrototype: true,
    },
    {
      id: 'PFG-006',
      category: 'Pre-Figma Requirements',
      priority: 'Medium',
      dependency: 'CTA hierarchy tokens',
      question: 'Which CTA hierarchy should Figma cement for primary/secondary/ghost?',
      options: ['Solid/Outline/Ghost', 'Gradient/Neutral/Ghost', 'Solid/Soft/Ghost'],
      recommended: 'Solid/Soft/Ghost',
      reasoning: 'Matches Phase 5 pre-Figma buttons while keeping flexibility.',
      status: 'Pending',
      blocked_by_canon: 'No',
      ready_for_phase6: 'No',
      notes: 'Phase 6 to apply to nav buttons and hero CTAs.',
      needsNarrative: false,
      needsPrototype: true,
    },
    {
      id: 'FUT-007',
      category: 'Future Suggestions',
      priority: 'Low',
      dependency: 'Phase 6 backlog',
      question: 'Should we expose devlog snippets inside Media or keep them blog-only after Phase 6?',
      options: ['Expose on Media grid', 'Keep in hidden blog', 'Hybrid: single highlight on Media'],
      recommended: 'Hybrid: single highlight on Media',
      reasoning: 'Keeps Media focused while hinting at deeper stories.',
      status: 'Later',
      blocked_by_canon: 'No',
      ready_for_phase6: 'No',
      notes: 'Add to backlog for Figma storytelling templates.',
      needsNarrative: false,
      needsPrototype: false,
      isBrainstorm: true,
    },
    {
      id: 'CRB-008',
      category: 'Cross-Brand Logic',
      priority: 'Medium',
      dependency: 'AtlasStudio + Games blocks',
      question: 'How should Powered by Atlas-V and Audio by SKB badges stack inside Games and OIA heroes?',
      options: ['Single inline row', 'Separate pill row under hero', 'Contextual badges near CTA'],
      recommended: 'Separate pill row under hero',
      reasoning: 'Keeps CTAs clean while preserving cross-brand credits.',
      status: 'Pending',
      blocked_by_canon: 'No',
      ready_for_phase6: 'No',
      notes: 'Need spacing tokens for stacked badges.',
      needsNarrative: false,
      needsPrototype: true,
    },
    {
      id: 'CNT-009',
      category: 'Content',
      priority: 'Medium',
      dependency: 'Run 3 copy lock',
      question: 'How many concept vault entries should appear on Games before Phase 6 to avoid overscope?',
      options: ['Three concepts', 'Five concepts', 'Full vault with filters'],
      recommended: 'Three concepts',
      reasoning: 'Keeps promises manageable ahead of production art.',
      status: 'Pending',
      blocked_by_canon: 'No',
      ready_for_phase6: 'No',
      notes: 'Sync with OIA page to avoid duplication.',
      needsNarrative: false,
      needsPrototype: false,
    },
  ];

  let decisions = [];
  let canonFrozen = false;

  const setStatus = (message, isError = false) => {
    if (!consoleStatus) return;
    consoleStatus.textContent = message;
    consoleStatus.classList.toggle('is-success', !isError);
  };

  const loadState = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const freezeStored = localStorage.getItem(FREEZE_KEY);
      decisions = stored ? JSON.parse(stored) : seedDecisions;
      canonFrozen = freezeStored === 'true';
      if (freezeToggle) {
        freezeToggle.checked = canonFrozen;
      }
    } catch (err) {
      decisions = seedDecisions;
      canonFrozen = false;
    }
  };

  const persistState = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(decisions));
      localStorage.setItem(FREEZE_KEY, canonFrozen ? 'true' : 'false');
    } catch (err) {
      console.warn('Unable to persist decisions', err);
    }
  };

  const populateCategoryFilter = () => {
    if (!categoryFilter) return;
    CATEGORY_OPTIONS.forEach((cat) => {
      const option = document.createElement('option');
      option.value = cat;
      option.textContent = cat;
      categoryFilter.appendChild(option);
    });
  };

  const isLocked = (decision) => canonFrozen && decision.status === 'Approved';

  const applyFilters = () => {
    const categoryValue = categoryFilter ? categoryFilter.value : 'all';
    const priorityValue = priorityFilter ? priorityFilter.value : 'all';
    const statusValue = statusFilter ? statusFilter.value : 'all';

    return decisions.filter((decision) => {
      const categoryMatch = categoryValue === 'all' || decision.category === categoryValue;
      const priorityMatch = priorityValue === 'all' || decision.priority === priorityValue;
      const statusMatch = statusValue === 'all' || decision.status === statusValue;
      return categoryMatch && priorityMatch && statusMatch;
    });
  };

  const createBadge = (text, kind) => {
    const badge = document.createElement('span');
    badge.className = `decision-badge badge-${kind}`;
    badge.textContent = text;
    return badge;
  };

  const handleFieldChange = (id, key, value) => {
    decisions = decisions.map((decision) =>
      decision.id === id ? { ...decision, [key]: value } : decision
    );
    persistState();
    setStatus('Decision updated.', false);
    renderDecisions();
  };

  const renderDecisionCard = (decision) => {
    const card = document.createElement('section');
    card.className = 'card decision-card';

    const header = document.createElement('div');
    header.className = 'decision-header';

    const title = document.createElement('div');
    title.className = 'decision-title';
    title.textContent = `${decision.id} — ${decision.question}`;

    const badgeRow = document.createElement('div');
    badgeRow.className = 'badge-row';
    badgeRow.appendChild(createBadge(decision.category, 'category'));
    badgeRow.appendChild(createBadge(decision.priority, 'priority'));
    badgeRow.appendChild(createBadge(decision.status, 'status'));
    if (decision.blocked_by_canon === 'Yes') {
      badgeRow.appendChild(createBadge('Blocked by Canon', 'warning'));
    }

    header.appendChild(title);
    header.appendChild(badgeRow);
    card.appendChild(header);

    const question = document.createElement('p');
    question.className = 'decision-question';
    question.textContent = decision.question;
    card.appendChild(question);

    const optionsList = document.createElement('ul');
    optionsList.className = 'options-list';
    decision.options.forEach((opt, idx) => {
      const item = document.createElement('li');
      item.textContent = `${String.fromCharCode(65 + idx)}. ${opt}`;
      optionsList.appendChild(item);
    });
    card.appendChild(optionsList);

    const grid = document.createElement('div');
    grid.className = 'decision-grid';

    const fields = [
      {
        label: 'Recommended Option',
        type: 'select',
        key: 'recommended',
        options: decision.options,
      },
      {
        label: 'Status',
        type: 'select',
        key: 'status',
        options: ['Pending', 'Approved', 'Dropped', 'Later'],
      },
      {
        label: 'Priority',
        type: 'select',
        key: 'priority',
        options: ['High', 'Medium', 'Low'],
      },
      {
        label: 'Blocked by Canon?',
        type: 'select',
        key: 'blocked_by_canon',
        options: ['No', 'Yes'],
      },
      {
        label: 'Ready for Phase 6?',
        type: 'select',
        key: 'ready_for_phase6',
        options: ['No', 'Yes'],
      },
    ];

    fields.forEach((field) => {
      const wrapper = document.createElement('label');
      wrapper.className = 'decision-field';
      wrapper.textContent = field.label;
      const select = document.createElement('select');
      field.options.forEach((opt) => {
        const option = document.createElement('option');
        option.value = opt;
        option.textContent = opt;
        select.appendChild(option);
      });
      select.value = decision[field.key];
      select.disabled = isLocked(decision);
      select.addEventListener('change', (event) => {
        handleFieldChange(decision.id, field.key, event.target.value);
      });
      wrapper.appendChild(select);
      grid.appendChild(wrapper);
    });

    const dependency = document.createElement('div');
    dependency.className = 'decision-field';
    const dependencyLabel = document.createElement('label');
    dependencyLabel.textContent = 'Dependency';
    const dependencyInput = document.createElement('input');
    dependencyInput.type = 'text';
    dependencyInput.value = decision.dependency;
    dependencyInput.disabled = isLocked(decision);
    dependencyInput.addEventListener('input', (event) => {
      handleFieldChange(decision.id, 'dependency', event.target.value);
    });
    dependency.appendChild(dependencyLabel);
    dependency.appendChild(dependencyInput);
    grid.appendChild(dependency);

    const reasoning = document.createElement('div');
    reasoning.className = 'decision-field decision-field--wide';
    const reasoningLabel = document.createElement('label');
    reasoningLabel.textContent = 'Reasoning';
    const reasoningInput = document.createElement('textarea');
    reasoningInput.rows = 3;
    reasoningInput.value = decision.reasoning;
    reasoningInput.disabled = isLocked(decision);
    reasoningInput.addEventListener('input', (event) => {
      handleFieldChange(decision.id, 'reasoning', event.target.value);
    });
    reasoning.appendChild(reasoningLabel);
    reasoning.appendChild(reasoningInput);

    const notes = document.createElement('div');
    notes.className = 'decision-field decision-field--wide';
    const notesLabel = document.createElement('label');
    notesLabel.textContent = 'Notes';
    const notesInput = document.createElement('textarea');
    notesInput.rows = 2;
    notesInput.value = decision.notes;
    notesInput.disabled = isLocked(decision);
    notesInput.addEventListener('input', (event) => {
      handleFieldChange(decision.id, 'notes', event.target.value);
    });
    notes.appendChild(notesLabel);
    notes.appendChild(notesInput);

    grid.appendChild(reasoning);
    grid.appendChild(notes);

    card.appendChild(grid);

    return card;
  };

  const renderLists = (filtered) => {
    const addItems = (listEl, predicate) => {
      if (!listEl) return;
      listEl.innerHTML = '';
      const matches = filtered.filter(predicate);
      if (matches.length === 0) {
        const empty = document.createElement('li');
        empty.textContent = 'No items in this track.';
        listEl.appendChild(empty);
        return;
      }
      matches.forEach((decision) => {
        const item = document.createElement('li');
        item.textContent = `${decision.id}: ${decision.question}`;
        listEl.appendChild(item);
      });
    };

    addItems(narrativeList, (d) => d.needsNarrative);
    addItems(prototypeList, (d) => d.needsPrototype);
    addItems(brainstormList, (d) => d.isBrainstorm);
  };

  const renderDecisions = () => {
    if (!decisionsContainer) return;
    const filtered = applyFilters();
    decisionsContainer.innerHTML = '';

    if (filtered.length === 0) {
      const empty = document.createElement('p');
      empty.textContent = 'No decisions match these filters.';
      decisionsContainer.appendChild(empty);
      renderLists(filtered);
      return;
    }

    filtered.forEach((decision) => {
      decisionsContainer.appendChild(renderDecisionCard(decision));
    });

    renderLists(filtered);
    setStatus(`Showing ${filtered.length} decision${filtered.length === 1 ? '' : 's'}.`, false);
  };

  const getExportPayload = (visibleOnly = true) => {
    const data = visibleOnly ? applyFilters() : decisions;
    return {
      meta: {
        phase: 'Phase 5',
        version: 'phase5-decisions-v2',
        exported_at: new Date().toISOString(),
      },
      decisions: data.map((decision) => ({
        id: decision.id,
        category: decision.category,
        priority: decision.priority,
        dependency: decision.dependency,
        question: decision.question,
        options: decision.options,
        recommended: decision.recommended,
        reasoning: decision.reasoning,
        status: decision.status,
        blocked_by_canon: decision.blocked_by_canon,
        ready_for_phase6: decision.ready_for_phase6,
        notes: decision.notes,
      })),
    };
  };

  const exportDecisions = () => {
    const payload = getExportPayload(true);
    const output = JSON.stringify(payload, null, 2);
    if (exportOutput) {
      exportOutput.value = output;
      exportOutput.focus();
      exportOutput.select();
    }
    setStatus('Decisions exported for copy/download.', false);
    return output;
  };

  const downloadDecisions = () => {
    const payload = exportDecisions();
    if (!payload) return;
    const blob = new Blob([payload], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = EXPORT_FILENAME;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  const bindFilters = () => {
    [categoryFilter, priorityFilter, statusFilter].forEach((select) => {
      if (!select) return;
      select.addEventListener('change', renderDecisions);
    });
  };

  const bindFreeze = () => {
    if (!freezeToggle) return;
    freezeToggle.addEventListener('change', () => {
      canonFrozen = freezeToggle.checked;
      persistState();
      renderDecisions();
    });
  };

  const init = () => {
    populateCategoryFilter();
    loadState();
    bindFilters();
    bindFreeze();
    renderDecisions();
    if (exportBtn) exportBtn.addEventListener('click', exportDecisions);
    if (downloadBtn) downloadBtn.addEventListener('click', downloadDecisions);
  };

  init();
})();
