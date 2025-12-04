// Decision Console storyboard interactions wired to statepack v01 microcopy and example data.
// Loads microcopy from the statepack, renders queue/detail/flags views, and simulates the revision flow.
(function () {
  const copy = {
    queue_title: 'Decision Queue',
    search_placeholder: 'Search decisions...',
    filter_icon_tooltip: 'Filters & settings',
    decision_detail_title: 'Decision Detail',
    decision_response_type_label: 'Response Type',
    yes_button: 'Yes',
    no_button: 'No',
    skip_button: 'Skip',
    approve_button: 'Approve',
    deny_button: 'Deny',
    answer_submit_button: 'Submit',
    revision_flow_title: 'Revision Flow',
    current_canon_header: 'Current Canon',
    new_decision_header: 'New Decision',
    reason_for_revision_label: 'Reason for Revision:',
    resolve_button: 'Resolve',
    flags_title: 'Flags',
    flag_status_open: 'Open',
    flag_status_resolved: 'Resolved',
    canon_view_title: 'Canon View',
    search_filters_title: 'Search & Filters',
    search_filters_placeholder: 'Search...',
    filter_project_label: 'Project',
    filter_category_label: 'Category',
    filter_status_label: 'Status',
    filter_apply_button: 'Apply',
    filter_reset_button: 'Reset',
    status_pending: 'Pending',
    status_answered: 'Answered',
    status_canon: 'Canon',
    status_flagged: 'Flagged',
    apply_to_canon_button: 'Apply to canon',
    export_button: 'Generate Export',
    export_label: 'Decision export (copy & paste into build tools)',
    modal_confirm_title: 'Confirm Action',
    modal_confirm_message: 'Are you sure you want to proceed?',
    modal_confirm_yes: 'Yes, proceed',
    modal_confirm_no: 'Cancel'
  };

  const data = {
    decisions: [
      {
        id: 'dec-001',
        questionText: 'Should we include a hidden underwater cave in the OIA map?',
        responseType: 'yes_no',
        projectId: 'OIA',
        categoryId: 'map_design',
        status: 'pending',
        timestampCreated: '2025-11-20T10:00:00Z',
        notes: 'Master Architect suggests exploring underwater environment.'
      },
      {
        id: 'dec-002',
        questionText: 'Choose the primary color theme for the AtlasForge website.',
        responseType: 'multiple_choice',
        options: ['Blue', 'Purple', 'Orange'],
        projectId: 'Website',
        categoryId: 'theme',
        status: 'pending',
        timestampCreated: '2025-11-21T09:30:00Z'
      },
      {
        id: 'dec-003',
        questionText: 'Should AtlasStudio enable dark mode by default?',
        responseType: 'yes_no',
        projectId: 'AtlasStudio',
        categoryId: 'ui_appearance',
        status: 'pending',
        timestampCreated: '2025-11-21T14:15:00Z'
      },
      {
        id: 'dec-004',
        questionText: 'Select the default physics engine for Atlas‑V.',
        responseType: 'multiple_choice',
        options: ['Havok', 'Bullet', 'PhysX'],
        projectId: 'Atlas-V',
        categoryId: 'engine_params',
        status: 'pending',
        timestampCreated: '2025-11-22T08:45:00Z'
      },
      {
        id: 'dec-005',
        questionText: 'Should the OIA environment include dynamic weather effects?',
        responseType: 'yes_no',
        projectId: 'OIA',
        categoryId: 'map_design',
        status: 'answered',
        userResponse: 'yes',
        timestampCreated: '2025-11-18T11:00:00Z',
        timestampAnswered: '2025-11-19T16:30:00Z',
        notes: 'Dynamic weather adds immersion.'
      }
    ],
    flags: [
      {
        flagId: 'flag-001',
        recordId: 'can-001',
        flaggedBy: 'user-creative-director',
        reason: 'Dynamic weather implementation causes performance issues; needs reassessment.',
        timestampFlagged: '2025-11-26T08:00:00Z',
        status: 'open'
      },
      {
        flagId: 'flag-002',
        recordId: 'can-002',
        flaggedBy: 'user-marketing',
        reason: 'Marketing requests an updated color palette to align with new branding.',
        timestampFlagged: '2025-11-29T10:15:00Z',
        status: 'resolved',
        resolutionNote: 'New decision created with gradient theme options.'
      }
    ],
    canonRecords: [
      {
        recordId: 'can-001',
        originalDecisionId: 'dec-005',
        questionText: 'Should the OIA environment include dynamic weather effects?',
        responseType: 'yes_no',
        answer: 'yes',
        projectId: 'OIA',
        categoryId: 'map_design',
        status: 'canon'
      },
      {
        recordId: 'can-002',
        originalDecisionId: 'dec-002',
        questionText: 'Choose the primary color theme for the AtlasForge website.',
        responseType: 'multiple_choice',
        answer: 'Purple',
        projectId: 'Website',
        categoryId: 'theme',
        status: 'canon'
      },
      {
        recordId: 'can-003',
        originalDecisionId: 'dec-003',
        questionText: 'Should AtlasStudio enable dark mode by default?',
        responseType: 'yes_no',
        answer: 'no',
        projectId: 'AtlasStudio',
        categoryId: 'ui_appearance',
        status: 'canon'
      },
      {
        recordId: 'can-004',
        originalDecisionId: 'dec-004',
        questionText: 'Select the default physics engine for Atlas‑V.',
        responseType: 'multiple_choice',
        answer: 'PhysX',
        projectId: 'Atlas-V',
        categoryId: 'engine_params',
        status: 'canon'
      }
    ]
  };

  const state = {
    activeTab: 'queue',
    search: '',
    filters: { project: [], category: [], status: [] },
    selectedDecisionId: data.decisions[0]?.id,
    selectedFlagId: data.flags[0]?.flagId,
    exportText: ''
  };

  const stateContainer = document.getElementById('decision-state');
  const tabElements = Array.from(document.querySelectorAll('[data-tab][role="tab"]'));

  function formatStatus(status) {
    switch (status) {
      case 'pending':
        return copy.status_pending;
      case 'answered':
        return copy.status_answered;
      case 'canon':
        return copy.status_canon;
      case 'flagged':
        return copy.status_flagged;
      default:
        return status;
    }
  }

  function badgeTone(status) {
    if (status === 'pending') return 'warning';
    if (status === 'answered') return 'success';
    if (status === 'canon') return 'info';
    if (status === 'flagged' || status === 'open') return 'critical';
    return 'muted';
  }

  function renderPills(list, label) {
    if (!list?.length) return '';
    return `
      <div class="dc-pill-row" aria-label="${label}">
        ${list
          .map((item) => `<span class="dc-pill">${item}</span>`)
          .join('')}
      </div>
    `;
  }

  function renderFilters() {
    const filterPanel = document.createElement('div');
    filterPanel.className = 'dc-filter-panel';
    const projects = Array.from(new Set(data.decisions.map((d) => d.projectId)));
    const categories = Array.from(new Set(data.decisions.map((d) => d.categoryId)));
    const statuses = ['pending', 'answered', 'canon'];

    const createGroup = (title, items, key) => {
      const selected = state.filters[key];
      const options = items
        .map(
          (item) => `
            <label class="dc-filter-option">
              <input type="checkbox" value="${item}" data-filter-key="${key}" ${
                selected.includes(item) ? 'checked' : ''
              } />
              <span>${item}</span>
            </label>
          `
        )
        .join('');
      return `
        <div class="dc-filter-group">
          <h4>${title}</h4>
          ${options}
        </div>
      `;
    };

    filterPanel.innerHTML = `
      <header class="dc-filter-header">
        <div>
          <p class="af-hero-badge">${copy.search_filters_title}</p>
          <h3>${copy.filter_icon_tooltip}</h3>
        </div>
        <button type="button" class="af-button af-button--ghost" data-close-filters>Close</button>
      </header>
      <div class="dc-filter-body">
        ${createGroup(copy.filter_project_label, projects, 'project')}
        ${createGroup(copy.filter_category_label, categories, 'category')}
        ${createGroup(copy.filter_status_label, statuses, 'status')}
      </div>
      <footer class="dc-filter-footer">
        <button type="button" class="af-button" data-apply-filters>${copy.filter_apply_button}</button>
        <button type="button" class="af-button af-button--ghost" data-reset-filters>${copy.filter_reset_button}</button>
      </footer>
    `;

    filterPanel.addEventListener('click', (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      if (target.matches('input[type="checkbox"]')) {
        const key = target.dataset.filterKey;
        if (!key) return;
        const list = state.filters[key];
        if (target.checked) {
          list.push(target.value);
        } else {
          state.filters[key] = list.filter((item) => item !== target.value);
        }
      }
      if (target.dataset.applyFilters !== undefined) {
        render();
      }
      if (target.dataset.resetFilters !== undefined) {
        state.filters = { project: [], category: [], status: [] };
        render();
      }
      if (target.dataset.closeFilters !== undefined) {
        filterPanel.remove();
        const toggle = document.getElementById('dc-filter-toggle');
        toggle?.setAttribute('aria-expanded', 'false');
      }
    });

    return filterPanel;
  }

  function applyDecisionToCanon(decisionId) {
    const decision = data.decisions.find((item) => item.id === decisionId);
    if (!decision) return;
    decision.status = 'canon';
    decision.userResponse = decision.userResponse || 'yes';
    const existing = data.canonRecords.find((record) => record.originalDecisionId === decision.id);
    if (!existing) {
      data.canonRecords.push({
        recordId: `can-${decision.id}`,
        originalDecisionId: decision.id,
        questionText: decision.questionText,
        responseType: decision.responseType,
        answer: decision.userResponse || decision.options?.[0] || 'yes',
        projectId: decision.projectId,
        categoryId: decision.categoryId,
        status: 'canon'
      });
    }
    setActiveTab('canon');
  }

  function generateExport() {
    const payload = {
      generatedAt: new Date().toISOString(),
      decisions: data.decisions,
      flags: data.flags,
      canon: data.canonRecords
    };
    return JSON.stringify(payload, null, 2);
  }

  function applyFilters(decisions) {
    return decisions
      .filter((decision) => {
        const text = `${decision.questionText} ${decision.notes || ''}`.toLowerCase();
        const matchesSearch = !state.search || text.includes(state.search.toLowerCase());
        const projectFilter = !state.filters.project.length || state.filters.project.includes(decision.projectId);
        const categoryFilter = !state.filters.category.length || state.filters.category.includes(decision.categoryId);
        const statusFilter = !state.filters.status.length || state.filters.status.includes(decision.status);
        return matchesSearch && projectFilter && categoryFilter && statusFilter;
      })
      .sort((a, b) => new Date(b.timestampCreated) - new Date(a.timestampCreated));
  }

  function renderQueue() {
    if (!stateContainer) return;
    const filteredDecisions = applyFilters(data.decisions);
    const cards = filteredDecisions
      .map(
        (decision) => `
          <article class="dc-card" data-decision-id="${decision.id}">
            <header>
              <div class="dc-tags">
                <span class="dc-tag">${decision.projectId}</span>
                <span class="dc-tag dc-tag--muted">${decision.categoryId}</span>
              </div>
              <span class="dc-status status-${badgeTone(decision.status)}">${formatStatus(decision.status)}</span>
            </header>
            <p class="dc-question">${decision.questionText}</p>
            ${renderPills(decision.options, 'Options')}
            <div class="dc-card__footer">
              <button class="af-link-inline" data-view-detail="${decision.id}">${copy.decision_detail_title}</button>
              ${
                decision.status === 'canon'
                  ? '<span class="dc-pill">Applied</span>'
                  : `<button class="af-link-inline" data-apply-canon="${decision.id}">${copy.apply_to_canon_button}</button>`
              }
              <span class="dc-timestamp" aria-label="Created">${new Date(decision.timestampCreated).toLocaleDateString()}</span>
            </div>
          </article>
        `
      )
      .join('');

    stateContainer.innerHTML = `
      <div class="dc-panel">
        <div class="dc-panel__header">
          <div>
            <p class="af-hero-badge">${copy.queue_title}</p>
            <h3>${copy.queue_title}</h3>
            <p class="dc-lede">Incoming submissions arrive with Atlas-V summaries, waiting for governance triage.</p>
          </div>
          <div class="dc-search-actions">
            <form id="dc-search-form" role="search" aria-label="${copy.queue_title}">
              <label class="dc-search">
                <span class="sr-only">${copy.search_placeholder}</span>
                <input type="search" id="dc-search" name="dc-search" placeholder="${copy.search_placeholder}" value="${
                  state.search
                }" />
              </label>
            </form>
            <button type="button" class="af-button af-button--ghost" id="dc-filter-toggle" aria-expanded="false" aria-controls="dc-filter-panel" title="${
              copy.filter_icon_tooltip
            }">${copy.filter_icon_tooltip}</button>
          </div>
        </div>
        <div class="dc-grid" aria-live="polite">
          ${cards || '<p class="dc-placeholder">No decisions match the current filters.</p>'}
        </div>
        <div class="dc-export">
          <div>
            <p class="af-hero-badge">${copy.export_label}</p>
            <p class="dc-lede">Generate an in-browser export of the current queue, flags, and canon to copy or paste elsewhere.</p>
          </div>
          <div class="dc-inline-actions">
            <button class="af-button" type="button" id="dc-export-btn">${copy.export_button}</button>
            <button class="af-button af-button--ghost" type="button" id="dc-export-clear">Clear</button>
          </div>
          <label class="sr-only" for="dc-export-output">${copy.export_label}</label>
          <textarea id="dc-export-output" rows="5" readonly>${state.exportText}</textarea>
        </div>
      </div>
    `;

    const searchForm = document.getElementById('dc-search-form');
    const searchInput = document.getElementById('dc-search');
    if (searchForm && searchInput) {
      searchForm.addEventListener('submit', (event) => event.preventDefault());
      searchInput.addEventListener('input', (event) => {
        const target = event.target;
        if (!(target instanceof HTMLInputElement)) return;
        state.search = target.value;
        renderQueue();
      });
    }

    const filterButton = document.getElementById('dc-filter-toggle');
    if (filterButton) {
      filterButton.addEventListener('click', () => {
        const existingPanel = document.querySelector('.dc-filter-panel');
        if (existingPanel) {
          existingPanel.remove();
          filterButton.setAttribute('aria-expanded', 'false');
          return;
        }
        const panel = renderFilters();
        panel.id = 'dc-filter-panel';
        filterButton.setAttribute('aria-expanded', 'true');
        stateContainer.prepend(panel);
      });
    }

    stateContainer.querySelectorAll('[data-view-detail]').forEach((button) => {
      button.addEventListener('click', (event) => {
        const target = event.currentTarget;
        if (!(target instanceof HTMLElement)) return;
        state.selectedDecisionId = target.dataset.viewDetail;
        setActiveTab('detail');
      });
    });

    stateContainer.querySelectorAll('[data-apply-canon]').forEach((button) => {
      button.addEventListener('click', (event) => {
        const target = event.currentTarget;
        if (!(target instanceof HTMLElement)) return;
        const decisionId = target.dataset.applyCanon;
        if (!decisionId) return;
        applyDecisionToCanon(decisionId);
      });
    });

    const exportButton = document.getElementById('dc-export-btn');
    const exportClear = document.getElementById('dc-export-clear');
    if (exportButton) {
      exportButton.addEventListener('click', () => {
        state.exportText = generateExport();
        renderQueue();
      });
    }
    if (exportClear) {
      exportClear.addEventListener('click', () => {
        state.exportText = '';
        renderQueue();
      });
    }
  }

  function renderResponseControls(decision) {
    if (decision.responseType === 'multiple_choice' && decision.options?.length) {
      const radios = decision.options
        .map(
          (option, index) => `
            <label class="dc-option">
              <input type="radio" name="response-${decision.id}" value="${option}" ${index === 0 ? 'checked' : ''} />
              <span>${option}</span>
            </label>
          `
        )
        .join('');
      return `
        <div class="dc-choice-group" role="group" aria-label="${copy.decision_response_type_label}">
          ${radios}
          <button class="af-button" type="button" data-submit-choice="${decision.id}">${copy.answer_submit_button}</button>
        </div>
      `;
    }

    const actionButtons = [
      { key: 'yes', label: copy.yes_button },
      { key: 'no', label: copy.no_button },
      { key: 'skip', label: copy.skip_button }
    ]
      .map(
        (action) => `
          <button class="af-button${action.key === 'skip' ? ' af-button--ghost' : ''}" type="button" data-submit-response="${
          action.key
        }">${action.label}</button>
        `
      )
      .join('');

    return `
      <div class="dc-action-row" role="group" aria-label="${copy.decision_response_type_label}">
        ${actionButtons}
      </div>
    `;
  }

  function renderDetail() {
    const decision = data.decisions.find((item) => item.id === state.selectedDecisionId) || data.decisions[0];
    if (!decision || !stateContainer) return;

    const canonRecord = data.canonRecords.find((record) => record.originalDecisionId === decision.id);
    stateContainer.innerHTML = `
      <div class="dc-panel">
        <div class="dc-panel__header">
          <div>
            <p class="af-hero-badge">${copy.decision_detail_title}</p>
            <h3>${decision.questionText}</h3>
            <p class="dc-lede">${copy.decision_response_type_label}: ${decision.responseType.replace('_', ' ')}</p>
          </div>
          <div class="dc-tags">
            <span class="dc-tag">${decision.projectId}</span>
            <span class="dc-tag dc-tag--muted">${decision.categoryId}</span>
            <span class="dc-status status-${badgeTone(decision.status)}">${formatStatus(decision.status)}</span>
          </div>
        </div>
        <div class="dc-detail-grid">
          <div>
            ${decision.notes ? `<p class="dc-note">${decision.notes}</p>` : ''}
            ${renderResponseControls(decision)}
            <div class="dc-inline-actions">
              <button class="af-button" type="button" data-apply-canon="${decision.id}" ${
                decision.status === 'canon' ? 'disabled' : ''
              }>${copy.apply_to_canon_button}</button>
              <span class="dc-note">Updates this preview only and pushes the record into the Canon View.</span>
            </div>
          </div>
          <aside class="dc-aside" aria-label="${copy.current_canon_header}">
            <h4>${copy.current_canon_header}</h4>
            <p class="dc-aside__question">${canonRecord?.questionText || 'No canon record yet.'}</p>
            <p class="dc-aside__answer"><strong>${copy.status_canon}:</strong> ${canonRecord?.answer || '—'}</p>
            <p class="dc-aside__meta">Project: ${canonRecord?.projectId || decision.projectId} · Category: ${
      canonRecord?.categoryId || decision.categoryId
    }</p>
          </aside>
        </div>
      </div>
    `;

    stateContainer.querySelectorAll('[data-submit-response]').forEach((button) => {
      button.addEventListener('click', () => {
        const status = button.dataset.submitResponse || 'answered';
        decision.status = 'answered';
        decision.userResponse = status;
        renderDetail();
      });
    });

    stateContainer.querySelectorAll('[data-submit-choice]').forEach((button) => {
      button.addEventListener('click', () => {
        const choice = stateContainer.querySelector(`input[name="response-${decision.id}"]:checked`);
        if (choice && choice instanceof HTMLInputElement) {
          decision.status = 'answered';
          decision.userResponse = choice.value;
          renderDetail();
        }
      });
    });

    stateContainer.querySelectorAll('[data-apply-canon]').forEach((button) => {
      button.addEventListener('click', () => applyDecisionToCanon(decision.id));
    });
  }

  function renderRevisionFlow() {
    const flag = data.flags.find((item) => item.flagId === state.selectedFlagId) || data.flags[0];
    const canon = data.canonRecords.find((record) => record.recordId === flag?.recordId);
    const linkedDecision = data.decisions.find((d) => d.id === canon?.originalDecisionId);

    if (!flag || !canon || !stateContainer) return;

    stateContainer.innerHTML = `
      <div class="dc-panel">
        <p class="af-hero-badge">${copy.revision_flow_title}</p>
        <h3>${copy.revision_flow_title}</h3>
        <div class="dc-revision-grid">
          <div class="dc-revision-card">
            <h4>${copy.current_canon_header}</h4>
            <p class="dc-question">${canon.questionText}</p>
            <p class="dc-aside__answer"><strong>${copy.status_canon}:</strong> ${canon.answer}</p>
            <p class="dc-aside__meta">Project: ${canon.projectId} · Category: ${canon.categoryId}</p>
          </div>
          <div class="dc-revision-card">
            <h4>${copy.new_decision_header}</h4>
            <p class="dc-question">${linkedDecision?.questionText || 'Linked decision pending.'}</p>
            <p class="dc-aside__meta">${copy.decision_response_type_label}: ${
      linkedDecision?.responseType || '—'
    }</p>
            ${linkedDecision?.options ? renderPills(linkedDecision.options, 'Options') : ''}
            <div class="dc-revision-note">
              <p class="dc-lede">${copy.reason_for_revision_label}</p>
              <p>${flag.reason}</p>
            </div>
            <button class="af-button" type="button" data-resolve-flag>${copy.resolve_button}</button>
          </div>
        </div>
      </div>
    `;

    const resolveButton = stateContainer.querySelector('[data-resolve-flag]');
    if (resolveButton) {
      resolveButton.addEventListener('click', () => {
        flag.status = 'resolved';
        renderRevisionFlow();
      });
    }
  }

  function renderCanon() {
    if (!stateContainer) return;
    const rows = data.canonRecords
      .map(
        (record) => `
          <article class="dc-card" data-canon-id="${record.recordId}">
            <header>
              <div class="dc-tags">
                <span class="dc-tag">${record.projectId}</span>
                <span class="dc-tag dc-tag--muted">${record.categoryId}</span>
              </div>
              <span class="dc-status status-${badgeTone('canon')}">${copy.status_canon}</span>
            </header>
            <p class="dc-question">${record.questionText}</p>
            <p class="dc-aside__meta"><strong>Answer:</strong> ${record.answer}</p>
            <div class="dc-card__footer">
              <button class="af-link-inline" data-view-detail="${record.originalDecisionId}">${copy.decision_detail_title}</button>
              <span class="dc-timestamp">${record.recordId}</span>
            </div>
          </article>
        `
      )
      .join('');

    stateContainer.innerHTML = `
      <div class="dc-panel">
        <p class="af-hero-badge">${copy.canon_view_title}</p>
        <h3>${copy.canon_view_title}</h3>
        <p class="dc-lede">Applied decisions sit here for quick reference and export.</p>
        <div class="dc-grid dc-canon-grid">${rows || '<p class="dc-placeholder">No applied decisions yet.</p>'}</div>
      </div>
    `;

    stateContainer.querySelectorAll('[data-view-detail]').forEach((button) => {
      button.addEventListener('click', (event) => {
        const target = event.currentTarget;
        if (!(target instanceof HTMLElement)) return;
        state.selectedDecisionId = target.dataset.viewDetail;
        setActiveTab('detail');
      });
    });
  }

  function renderFlags() {
    if (!stateContainer) return;
    const rows = data.flags
      .map(
        (flag) => `
          <article class="dc-card" data-flag-id="${flag.flagId}">
            <header>
              <div>
                <p class="dc-label">${copy.flags_title}</p>
                <p class="dc-question">${flag.reason}</p>
              </div>
              <span class="dc-status status-${badgeTone(flag.status)}">${
          flag.status === 'resolved' ? copy.flag_status_resolved : copy.flag_status_open
        }</span>
            </header>
            <p class="dc-aside__meta">Record: ${flag.recordId} · Flagged by: ${flag.flaggedBy}</p>
            <div class="dc-card__footer">
              <button class="af-link-inline" data-open-revision="${flag.flagId}">${copy.revision_flow_title}</button>
              <span class="dc-timestamp">${new Date(flag.timestampFlagged).toLocaleDateString()}</span>
            </div>
          </article>
        `
      )
      .join('');

    stateContainer.innerHTML = `
      <div class="dc-panel">
        <p class="af-hero-badge">${copy.flags_title}</p>
        <h3>${copy.flags_title}</h3>
        <p class="dc-lede">Flags show severity and let reviewers accept, request changes, or mark for canon.</p>
        <div class="dc-grid">${rows}</div>
      </div>
    `;

    stateContainer.querySelectorAll('[data-open-revision]').forEach((button) => {
      button.addEventListener('click', (event) => {
        const target = event.currentTarget;
        if (!(target instanceof HTMLElement)) return;
        state.selectedFlagId = target.dataset.openRevision;
        setActiveTab('revision');
      });
    });
  }

  function render() {
    if (state.activeTab === 'queue') {
      renderQueue();
    } else if (state.activeTab === 'detail') {
      renderDetail();
    } else if (state.activeTab === 'canon') {
      renderCanon();
    } else if (state.activeTab === 'revision') {
      renderRevisionFlow();
    } else {
      renderFlags();
    }
  }

  function setActiveTab(activeKey) {
    state.activeTab = activeKey;
    let activeTab = null;
    tabElements.forEach((tab) => {
      const isActive = tab.dataset.tab === activeKey;
      tab.classList.toggle('is-active', isActive);
      tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
      tab.setAttribute('tabindex', isActive ? '0' : '-1');
      if (!tab.id) {
        tab.id = `dc-tab-${tab.dataset.tab}`;
      }
      if (isActive) {
        activeTab = tab;
      }
    });
    if (stateContainer && activeTab?.id) {
      stateContainer.setAttribute('role', 'tabpanel');
      stateContainer.setAttribute('aria-labelledby', activeTab.id);
    }
    render();
  }

  function handleTabClick(event) {
    setActiveTab(event.currentTarget.dataset.tab);
  }

  function handleKeydown(event) {
    const key = event.key;
    const currentIndex = tabElements.indexOf(event.currentTarget);

    if (key === 'ArrowRight' || key === 'ArrowLeft') {
      event.preventDefault();
      const direction = key === 'ArrowRight' ? 1 : -1;
      const nextIndex = (currentIndex + direction + tabElements.length) % tabElements.length;
      tabElements[nextIndex].focus();
    }

    if (key === 'Enter' || key === ' ' || key === 'Spacebar') {
      event.preventDefault();
      setActiveTab(event.currentTarget.dataset.tab);
    }
  }

  function init() {
    const firstTab = tabElements[0];
    if (firstTab) {
      setActiveTab(firstTab.dataset.tab);
    }
    tabElements.forEach((tab) => {
      if (stateContainer && !tab.getAttribute('aria-controls')) {
        tab.setAttribute('aria-controls', stateContainer.id);
      }
      tab.addEventListener('click', handleTabClick);
      tab.addEventListener('keydown', handleKeydown);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
