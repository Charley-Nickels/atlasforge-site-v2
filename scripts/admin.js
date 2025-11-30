(() => {
  const STORAGE_PREFIX = 'atlasforge_decision_';
  const SECTION_STORAGE_PREFIX = 'atlasforge_admin_section_';
  const CARDS_SELECTOR = '.admin-decision-card';
  const OPTION_SELECTOR = '.admin-decision-option';
  const PASS_SELECTOR = '.admin-option--pass';
  const STATUS_PILL_SELECTOR = '.admin-status-pill';
  const NOTES_SELECTOR = '.admin-notes textarea';
  const FILTER_SELECTOR = '.admin-filter';
  const SEARCH_INPUT_SELECTOR = '#admin-search';
  const SECTION_SELECTOR = '.admin-section';
  const SECTION_TOGGLE_SELECTOR = '[data-section-toggle]';
  const SECTION_LINK_SELECTOR = '[data-section-link]';
  const EXPAND_ALL_SELECTOR = '[data-expand-all]';
  const COLLAPSE_ALL_SELECTOR = '[data-collapse-all]';
  const EXPORT_MODAL_SELECTOR = '.admin-export-modal';
  const EXPORT_TRIGGER_SELECTOR = '[data-export-open]';
  const EXPORT_CLOSE_SELECTOR = '[data-export-close]';
  const EXPORT_SCOPE_SELECTOR = 'input[name="admin-export-scope"]';
  const EXPORT_DOWNLOAD_SELECTOR = '[data-export-download]';
  const EXPORT_COPY_SELECTOR = '[data-export-copy]';
  const HISTORY_DRAWER_SELECTOR = '.admin-history';
  const HISTORY_OPEN_SELECTOR = '[data-history-open]';
  const HISTORY_CLOSE_SELECTOR = '[data-history-close]';
  const HISTORY_LIST_SELECTOR = '[data-history-list]';
  const HISTORY_FILTER_SELECTOR = '[data-history-filter]';
  const HISTORY_CLEAR_SELECTOR = '[data-history-clear]';
  const STICKY_NAV_SELECTOR = '.admin-sticky-nav';
  const SCROLL_SHADOW_SELECTOR = '[data-scroll-shadow]';
  const ACTIVATION_PHRASE = 'initiate goblin mode'; // changeable phrase for lore-only gate

  let adminInitialized = false;

  if (document.body) {
    document.body.classList.add('admin-locked');
  }

  let activeFilter = 'all';
  let searchTerm = '';
  let cards = [];
  let sections = [];
  let sectionLinks = [];
  let historyFilter = 'all';

  const summaryEls = {
    total: document.querySelector('[data-summary-total]'),
    pending: document.querySelector('[data-summary-pending]'),
    accepted: document.querySelector('[data-summary-accepted]'),
    rejected: document.querySelector('[data-summary-rejected]'),
    backlog: document.querySelector('[data-summary-backlog]'),
    passed: document.querySelector('[data-summary-passed]')
  };

  const metricEls = {
    changed: document.querySelector('[data-metric-changed]'),
    notes: document.querySelector('[data-metric-notes]'),
    review: document.querySelector('[data-metric-review]')
  };

  const logEvent = (eventType, payload) => {
    if (window.AtlasLogger && typeof window.AtlasLogger.log === 'function') {
      window.AtlasLogger.log(eventType, payload);
    }
  };

  const getSelectedScope = () => {
    const checked = document.querySelector(`${EXPORT_SCOPE_SELECTOR}:checked`);
    return checked ? checked.value : 'all';
  };

  const getSectionKey = (sectionEl) => sectionEl?.dataset?.sectionKey || sectionEl?.id || '';

  const formatTime = (timestamp) => {
    if (!timestamp) return '';
    try {
      return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    } catch (err) {
      return '';
    }
  };

  const throttle = (fn, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn(...args), delay);
    };
  };

  const clearGroup = (groupEl) => {
    groupEl.querySelectorAll(OPTION_SELECTOR).forEach((opt) => {
      opt.classList.remove('admin-decision-option--active');
      const input = opt.querySelector('input');
      if (input) input.checked = false;
    });
  };

  const deactivateAllGroups = (cardEl) => {
    cardEl.querySelectorAll(OPTION_SELECTOR).forEach((opt) => {
      opt.classList.remove('admin-decision-option--active');
      const input = opt.querySelector('input');
      if (input) input.checked = false;
    });
    cardEl.classList.remove('admin-decision-pass--active');
  };

  const applyHeatmap = (cardEl, { changed, hasNotes, requiresReview }) => {
    cardEl.classList.remove('admin-decision--heat-review', 'admin-decision--heat-changed', 'admin-decision--heat-notes');
    if (requiresReview) {
      cardEl.classList.add('admin-decision--heat-review');
      return;
    }
    if (changed) {
      cardEl.classList.add('admin-decision--heat-changed');
      return;
    }
    if (hasNotes) {
      cardEl.classList.add('admin-decision--heat-notes');
    }
  };

  const setStatus = (cardEl, value) => {
    const statusDisplay = cardEl.querySelector('.admin-status');
    const statusPills = cardEl.querySelectorAll(STATUS_PILL_SELECTOR);
    const normalized = value || 'pending';

    if (statusDisplay) {
      statusDisplay.textContent = normalized.charAt(0).toUpperCase() + normalized.slice(1);
      statusDisplay.className = `admin-status admin-status--${normalized}`;
      cardEl.dataset.status = normalized;
    }

    statusPills.forEach((pill) => {
      const active = pill.dataset.statusValue === normalized;
      pill.classList.toggle('is-active', active);
    });

    cardEl.classList.add('admin-decision-status--active');
  };

  const updateSummary = () => {
    const counts = {
      total: cards.length,
      pending: 0,
      accepted: 0,
      rejected: 0,
      backlog: 0,
      passed: 0,
      changed: 0,
      notes: 0,
      review: 0
    };

    cards.forEach((card) => {
      const status = card.dataset.status || 'pending';
      const notesField = card.querySelector(NOTES_SELECTOR);
      const hasNotes = notesField && notesField.value.trim().length > 0;
      const changed = isCardChanged(card);
      const passActive = card.classList.contains('admin-decision-pass--active');
      const requiresReview = status === 'pending' || status === 'backlog' || passActive;

      if (status in counts) {
        counts[status] += 1;
      }
      if (passActive) counts.passed += 1;
      if (changed) counts.changed += 1;
      if (hasNotes) counts.notes += 1;
      if (requiresReview) counts.review += 1;

      applyHeatmap(card, { changed, hasNotes, requiresReview });
    });

    Object.entries(summaryEls).forEach(([key, el]) => {
      if (el && typeof counts[key] !== 'undefined') {
        el.textContent = counts[key];
      }
    });

    Object.entries(metricEls).forEach(([key, el]) => {
      if (el && typeof counts[key] !== 'undefined') {
        el.textContent = counts[key];
      }
    });
  };

  const applyFilters = () => {
    cards.forEach((card) => {
      const status = (card.dataset.status || 'pending').toLowerCase();
      const passActive = card.classList.contains('admin-decision-pass--active');
      const matchesFilter =
        activeFilter === 'all' ||
        (activeFilter === 'passed' ? passActive : status === activeFilter);

      const title = card.querySelector('h4')?.textContent || '';
      const notes = card.querySelector(NOTES_SELECTOR)?.value || '';
      const tags = card.dataset.tags || '';
      const haystack = `${title} ${status} ${notes} ${tags}`.toLowerCase();
      const matchesSearch = haystack.includes(searchTerm);

      const visible = matchesFilter && matchesSearch;
      card.classList.toggle('is-hidden', !visible);
    });
  };

  const isCardChanged = (cardEl) => {
    try {
      const stored = localStorage.getItem(getStorageKey(cardEl));
      if (stored) return true;
    } catch (err) {
      console.warn('Admin change detection failed', err);
    }

    const notesField = cardEl.querySelector(NOTES_SELECTOR);
    const hasNotes = notesField && notesField.value.trim().length > 0;
    const active =
      cardEl.classList.contains('admin-decision--active') ||
      cardEl.classList.contains('admin-decision-pass--active');
    return active || hasNotes;
  };

  const serializeCard = (cardEl) => {
    const state = captureState(cardEl);
    return {
      decisionId: cardEl.dataset.decisionId || '',
      group: cardEl.dataset.group || '',
      status: state.status || 'pending',
      pass: !!state.pass,
      option: state.option,
      binary: state.binary,
      approval: state.approval,
      notes: state.notes || '',
      title: (cardEl.querySelector('h4')?.textContent || '').trim(),
      tags: cardEl.dataset.tags || ''
    };
  };

  const getCardsForScope = (scope) => {
    if (scope === 'filtered') {
      return cards.filter((card) => !card.classList.contains('is-hidden'));
    }
    if (scope === 'changed') {
      return cards.filter((card) => isCardChanged(card));
    }
    return cards;
  };

  const toCSV = (rows) => {
    if (!rows.length) return '';
    const headers = ['decisionId', 'group', 'status', 'pass', 'option', 'binary', 'approval', 'notes', 'title', 'tags'];
    const escape = (val) => {
      if (val === null || typeof val === 'undefined') return '';
      const str = String(val).replace(/"/g, '""');
      return `"${str}"`;
    };
    const lines = [headers.join(',')];
    rows.forEach((row) => {
      lines.push(headers.map((key) => escape(row[key])).join(','));
    });
    return lines.join('\n');
  };

  const downloadFile = (content, type, filename) => {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const copyToClipboard = async (text) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    return true;
  };

  const getStorageKey = (cardEl) => `${STORAGE_PREFIX}${cardEl.dataset.decisionId}`;

  const getSectionStorageKey = (sectionEl) => {
    const key = getSectionKey(sectionEl);
    return key ? `${SECTION_STORAGE_PREFIX}${key}` : '';
  };

  const persistSectionState = (sectionEl, expanded) => {
    const key = getSectionStorageKey(sectionEl);
    if (!key) return;
    try {
      localStorage.setItem(key, expanded ? 'open' : 'closed');
    } catch (err) {
      console.warn('Admin section storage failed', err);
    }
  };

  const setSectionExpanded = (sectionEl, expanded, persist = true) => {
    sectionEl.classList.toggle('admin-section--collapsed', !expanded);
    const toggle = sectionEl.querySelector(SECTION_TOGGLE_SELECTOR);
    if (toggle) {
      toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
      const label = toggle.querySelector('.admin-toggle__label');
      if (label) {
        label.textContent = expanded ? 'Collapse' : 'Expand';
      }
    }

    if (persist) {
      persistSectionState(sectionEl, expanded);
    }
  };

  const restoreSectionState = (sectionEl) => {
    let expanded = true;
    const key = getSectionStorageKey(sectionEl);
    if (key) {
      try {
        const stored = localStorage.getItem(key);
        if (stored === 'closed') {
          expanded = false;
        }
      } catch (err) {
        console.warn('Admin section restore failed', err);
      }
    }
    setSectionExpanded(sectionEl, expanded, false);
    return expanded;
  };

  const captureState = (cardEl) => {
    const optionPick = cardEl.querySelector('.admin-options:not(.admin-options--binary):not(.admin-options--approve) .admin-decision-option--active');
    const binaryPick = cardEl.querySelector('.admin-options--binary .admin-decision-option--active');
    const approvalPick = cardEl.querySelector('.admin-options--approve .admin-decision-option--active');
    const passActive = cardEl.classList.contains('admin-decision-pass--active');
    const status = cardEl.dataset.status || 'pending';
    const notesField = cardEl.querySelector(NOTES_SELECTOR);

    return {
      option: optionPick?.dataset.choice || null,
      binary: binaryPick?.dataset.choice || null,
      approval: approvalPick?.dataset.choice || null,
      pass: passActive,
      status,
      notes: notesField ? notesField.value : ''
    };
  };

  const persistState = (cardEl) => {
    const key = getStorageKey(cardEl);
    const payload = captureState(cardEl);
    try {
      localStorage.setItem(key, JSON.stringify(payload));
    } catch (err) {
      console.warn('Admin decision storage failed', err);
    }
    return payload;
  };

  const restoreOption = (cardEl, choice) => {
    if (!choice) return;
    const target = cardEl.querySelector(`${OPTION_SELECTOR}[data-choice='${choice}']`);
    if (target) {
      const group = target.closest('.admin-options');
      if (group) {
        clearGroup(group);
      }
      target.classList.add('admin-decision-option--active');
      const input = target.querySelector('input');
      if (input) input.checked = true;
      cardEl.classList.add('admin-decision--active');
    }
  };

  const restorePass = (cardEl) => {
    const passOption = cardEl.querySelector(PASS_SELECTOR);
    if (passOption) {
      deactivateAllGroups(cardEl);
      passOption.classList.add('admin-decision-option--active');
      const input = passOption.querySelector('input');
      if (input) input.checked = true;
      cardEl.classList.add('admin-decision-pass--active', 'admin-decision--active');
    }
  };

  const restoreFromStorage = (cardEl) => {
    const key = getStorageKey(cardEl);
    let stored = null;
    try {
      const raw = localStorage.getItem(key);
      stored = raw ? JSON.parse(raw) : null;
    } catch (err) {
      console.warn('Admin decision restore failed', err);
    }

    if (!stored) return;

    if (stored.pass) {
      restorePass(cardEl);
    } else {
      restoreOption(cardEl, stored.option);
      restoreOption(cardEl, stored.binary);
      restoreOption(cardEl, stored.approval);
    }

    if (stored.status) {
      setStatus(cardEl, stored.status);
    }

    if (typeof stored.notes === 'string') {
      const notesField = cardEl.querySelector(NOTES_SELECTOR);
      if (notesField) {
        notesField.value = stored.notes;
      }
    }

    cardEl.classList.add('admin-decision--restored');
  };

  const registerCard = (cardEl) => {
    const options = cardEl.querySelectorAll(OPTION_SELECTOR);
    const statusPills = cardEl.querySelectorAll(STATUS_PILL_SELECTOR);
    const notesField = cardEl.querySelector(NOTES_SELECTOR);

    options.forEach((opt) => {
      opt.addEventListener('click', (event) => {
        event.preventDefault();
        const isPass = opt.classList.contains('admin-option--pass');
        const optionGroup = opt.closest('.admin-options');

        if (!optionGroup) return;

        cardEl.classList.add('admin-decision--active');

        if (isPass) {
          deactivateAllGroups(cardEl);
          opt.classList.add('admin-decision-option--active');
          const input = opt.querySelector('input');
          if (input) input.checked = true;
          cardEl.classList.add('admin-decision-pass--active');
          const state = persistState(cardEl);
          logEvent('pass', { decisionId: cardEl.dataset.decisionId, value: true, timestamp: Date.now() });
          updateSummary();
          applyFilters();
          return state;
        }

        clearGroup(optionGroup);
        opt.classList.add('admin-decision-option--active');
        const input = opt.querySelector('input');
        if (input) input.checked = true;
        cardEl.classList.remove('admin-decision-pass--active');
        const state = persistState(cardEl);
        const groupType = optionGroup.classList.contains('admin-options--binary')
          ? 'binary'
          : optionGroup.classList.contains('admin-options--approve')
          ? 'approval'
          : 'option';
        logEvent(groupType, {
          decisionId: cardEl.dataset.decisionId,
          value: opt.dataset.choice || null,
          timestamp: Date.now()
        });
        updateSummary();
        applyFilters();
        return state;
      });
    });

    statusPills.forEach((pill) => {
      pill.addEventListener('click', () => {
        const value = pill.dataset.statusValue;
        setStatus(cardEl, value);
        persistState(cardEl);
        logEvent('status', { decisionId: cardEl.dataset.decisionId, value, timestamp: Date.now() });
        updateSummary();
        applyFilters();
      });
    });

    if (notesField) {
      notesField.addEventListener('blur', () => {
        const state = persistState(cardEl);
        logEvent('notes', { decisionId: cardEl.dataset.decisionId, value: state.notes, timestamp: Date.now() });
        applyFilters();
      });
    }

    // Initialize status pills based on data-status
    if (cardEl.dataset.status) {
      setStatus(cardEl, cardEl.dataset.status);
    }

    restoreFromStorage(cardEl);
  };

  const setActiveNavLink = (sectionKey) => {
    sectionLinks.forEach((link) => {
      link.classList.toggle('is-active', link.dataset.sectionLink === sectionKey);
    });
  };

  const initSectionControls = () => {
    sections = Array.from(document.querySelectorAll(SECTION_SELECTOR));
    sectionLinks = Array.from(document.querySelectorAll(SECTION_LINK_SELECTOR));
    const expandAllBtn = document.querySelector(EXPAND_ALL_SELECTOR);
    const collapseAllBtn = document.querySelector(COLLAPSE_ALL_SELECTOR);
    const stickyNav = document.querySelector(STICKY_NAV_SELECTOR);

    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisible = null;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const key = getSectionKey(entry.target);
            if (!mostVisible || entry.intersectionRatio > mostVisible.ratio) {
              mostVisible = { key, ratio: entry.intersectionRatio };
            }
          }
        });
        if (mostVisible) {
          setActiveNavLink(mostVisible.key);
        }
      },
      { threshold: [0.1, 0.25, 0.5, 0.75], rootMargin: '-30% 0px -50% 0px' }
    );

    sections.forEach((section) => {
      restoreSectionState(section);
      const toggle = section.querySelector(SECTION_TOGGLE_SELECTOR);
      if (toggle) {
        toggle.addEventListener('click', () => {
          const isCollapsed = section.classList.contains('admin-section--collapsed');
          setSectionExpanded(section, isCollapsed, true);
        });
      }
      observer.observe(section);
    });

    if (expandAllBtn) {
      expandAllBtn.addEventListener('click', () => {
        sections.forEach((section) => setSectionExpanded(section, true, true));
      });
    }

    if (collapseAllBtn) {
      collapseAllBtn.addEventListener('click', () => {
        sections.forEach((section) => setSectionExpanded(section, false, true));
      });
    }

    sectionLinks.forEach((link) => {
      link.addEventListener('click', () => setActiveNavLink(link.dataset.sectionLink));
    });

    if (sections.length) {
      setActiveNavLink(getSectionKey(sections[0]));
    }

    if (stickyNav) {
      const updateShadow = () => {
        stickyNav.classList.toggle('is-scrolled', window.scrollY > 8);
      };
      updateShadow();
      document.addEventListener('scroll', updateShadow, { passive: true });
    }
  };

  const initFilters = () => {
    const filterButtons = document.querySelectorAll(FILTER_SELECTOR);
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        activeFilter = btn.dataset.filter || 'all';
        filterButtons.forEach((other) => {
          const isActive = other === btn;
          other.classList.toggle('admin-filter--active', isActive);
          other.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });
        applyFilters();
      });
      btn.setAttribute('aria-pressed', btn.classList.contains('admin-filter--active') ? 'true' : 'false');
    });

    const searchInput = document.querySelector(SEARCH_INPUT_SELECTOR);
    if (searchInput) {
      const handleSearch = throttle((value) => {
        searchTerm = value.trim().toLowerCase();
        applyFilters();
      }, 120);
      searchInput.addEventListener('input', (event) => handleSearch(event.target.value));
    }
  };

  const initExportControls = () => {
    const modal = document.querySelector(EXPORT_MODAL_SELECTOR);
    const openButtons = document.querySelectorAll(EXPORT_TRIGGER_SELECTOR);
    if (!modal || !openButtons.length) return;

    const closeButtons = modal.querySelectorAll(EXPORT_CLOSE_SELECTOR);
    const downloadButtons = modal.querySelectorAll(EXPORT_DOWNLOAD_SELECTOR);
    const copyButton = modal.querySelector(EXPORT_COPY_SELECTOR);

    const openModal = () => {
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      const firstFocus = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (firstFocus) firstFocus.focus();
    };

    const closeModal = () => {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
    };

    const buildDataset = () => {
      const scope = getSelectedScope();
      return getCardsForScope(scope).map(serializeCard);
    };

    const download = (format) => {
      const data = buildDataset();
      if (!data.length) {
        window.alert('No decisions available for export.');
        return;
      }
      if (format === 'csv') {
        downloadFile(toCSV(data), 'text/csv', 'atlasforge-decisions.csv');
      } else {
        downloadFile(JSON.stringify(data, null, 2), 'application/json', 'atlasforge-decisions.json');
      }
      logEvent('export', { scope: getSelectedScope(), format, timestamp: Date.now() });
    };

    const copyJSON = async () => {
      const data = buildDataset();
      if (!data.length) {
        window.alert('No decisions available for export.');
        return;
      }
      const payload = JSON.stringify(data, null, 2);
      await copyToClipboard(payload);
      logEvent('export', { scope: getSelectedScope(), format: 'clipboard-json', timestamp: Date.now() });
    };

    openButtons.forEach((btn) => btn.addEventListener('click', openModal));
    closeButtons.forEach((btn) => btn.addEventListener('click', closeModal));
    modal.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeModal();
    });
    downloadButtons.forEach((btn) => {
      btn.addEventListener('click', () => download(btn.dataset.exportDownload));
    });
    if (copyButton) {
      copyButton.addEventListener('click', copyJSON);
    }
  };

  const renderHistoryList = (entries = []) => {
    const list = document.querySelector(HISTORY_LIST_SELECTOR);
    if (!list) return;

    list.innerHTML = '';

    if (!entries.length) {
      const empty = document.createElement('div');
      empty.className = 'admin-history__empty';
      empty.textContent = 'No log entries yet.';
      list.appendChild(empty);
      return;
    }

    entries
      .slice()
      .reverse()
      .forEach((entry) => {
        const item = document.createElement('article');
        item.className = 'admin-history__item af-card-frame';

        const meta = document.createElement('div');
        meta.className = 'admin-history__meta';

        const type = document.createElement('span');
        type.className = 'admin-pill admin-pill--ghost';
        type.textContent = entry.eventType || 'event';

        const time = document.createElement('time');
        time.className = 'admin-history__time';
        time.dateTime = entry.timestamp ? new Date(entry.timestamp).toISOString() : '';
        time.textContent = formatTime(entry.timestamp);

        meta.append(type, time);

        const title = document.createElement('div');
        title.className = 'admin-history__title-row';
        title.textContent = entry.decisionId || 'General log';

        const detail = document.createElement('div');
        detail.className = 'admin-history__detail';
        const detailText =
          entry.value ?? entry.status ?? entry.notes ?? entry.scope ?? entry.format ?? JSON.stringify(entry.payload || entry);
        detail.textContent = detailText;

        item.append(meta, title, detail);
        list.appendChild(item);
      });
  };

  const initHistoryDrawer = () => {
    const drawer = document.querySelector(HISTORY_DRAWER_SELECTOR);
    const openers = document.querySelectorAll(HISTORY_OPEN_SELECTOR);
    const closers = document.querySelectorAll(HISTORY_CLOSE_SELECTOR);
    const filters = document.querySelectorAll(HISTORY_FILTER_SELECTOR);
    const clearBtn = document.querySelector(HISTORY_CLEAR_SELECTOR);

    if (!drawer || !openers.length || !window.AtlasLogger) return;

    const applyHistoryFilter = (filterValue) => {
      historyFilter = filterValue;
      filters.forEach((btn) => {
        const isActive = btn.dataset.historyFilter === historyFilter;
        btn.classList.toggle('admin-filter--active', isActive);
        btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      });
      const entries = window.AtlasLogger.getHistory ? window.AtlasLogger.getHistory(historyFilter) : [];
      renderHistoryList(entries);
    };

    const openDrawer = () => {
      drawer.classList.add('is-open');
      drawer.setAttribute('aria-hidden', 'false');
      const firstFocus = drawer.querySelector('button, [href]');
      if (firstFocus) firstFocus.focus();
      renderHistoryList(window.AtlasLogger.getHistory ? window.AtlasLogger.getHistory(historyFilter) : []);
    };

    const closeDrawer = () => {
      drawer.classList.remove('is-open');
      drawer.setAttribute('aria-hidden', 'true');
    };

    openers.forEach((btn) => btn.addEventListener('click', openDrawer));
    closers.forEach((btn) => btn.addEventListener('click', closeDrawer));

    drawer.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeDrawer();
    });

    filters.forEach((btn) => {
      btn.addEventListener('click', () => applyHistoryFilter(btn.dataset.historyFilter || 'all'));
    });

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (window.AtlasLogger && typeof window.AtlasLogger.clearHistory === 'function') {
          window.AtlasLogger.clearHistory();
          applyHistoryFilter(historyFilter);
        }
      });
    }

    if (window.AtlasLogger && typeof window.AtlasLogger.subscribe === 'function') {
      window.AtlasLogger.subscribe(() => {
        const entries = window.AtlasLogger.getHistory ? window.AtlasLogger.getHistory(historyFilter) : [];
        renderHistoryList(entries);
      });
    }

    applyHistoryFilter(historyFilter);
  };

  const updateScrollShadows = (el) => {
    const tolerance = 4;
    const atTop = el.scrollTop <= tolerance;
    const atBottom = el.scrollHeight - el.clientHeight - el.scrollTop <= tolerance;
    el.classList.toggle('is-scroll-top', atTop);
    el.classList.toggle('is-scroll-bottom', atBottom);
  };

  const initScrollShadows = () => {
    const shadowTargets = Array.from(document.querySelectorAll(SCROLL_SHADOW_SELECTOR));
    shadowTargets.forEach((el) => {
      updateScrollShadows(el);
      el.addEventListener('scroll', () => updateScrollShadows(el), { passive: true });
    });
    window.addEventListener('resize', () => shadowTargets.forEach(updateScrollShadows), { passive: true });
  };

  const ensureGateStyles = () => {
    if (document.getElementById('admin-gate-style')) return;
    const style = document.createElement('style');
    style.id = 'admin-gate-style';
    style.textContent = `
      .admin-gate { display: none; }
      .admin-locked .admin-gate { display: block; }
      .admin-locked main > :not(.admin-gate) { display: none !important; }
      .admin-locked .mf-header { position: static; }
      .admin-error { color: var(--color-brand-accent); font-weight: 600; margin-top: var(--space-8); }
    `;
    document.head.appendChild(style);
  };

  const setLocked = () => {
    document.body.classList.add('admin-locked');
    document.body.classList.remove('admin-unlocked');
  };

  const bootAdmin = () => {
    if (adminInitialized) return;
    adminInitialized = true;
    cards = Array.from(document.querySelectorAll(CARDS_SELECTOR));
    cards.forEach(registerCard);
    initFilters();
    initSectionControls();
    initExportControls();
    initHistoryDrawer();
    initScrollShadows();
    updateSummary();
    applyFilters();
  };

  const setupGate = () => {
    ensureGateStyles();
    setLocked();

    const gate = document.querySelector('.admin-gate');
    const input = document.getElementById('admin-password');
    const button = gate ? gate.querySelector('.admin-btn--primary') : null;
    let errorEl = gate ? gate.querySelector('[data-admin-error]') : null;

    if (!errorEl && gate) {
      errorEl = document.createElement('p');
      errorEl.className = 'admin-error';
      errorEl.dataset.adminError = 'true';
      errorEl.setAttribute('aria-live', 'polite');
      gate.querySelector('.admin-card')?.appendChild(errorEl);
    }

    const unlock = () => {
      document.body.classList.remove('admin-locked');
      document.body.classList.add('admin-unlocked');
      if (errorEl) errorEl.textContent = '';
      bootAdmin();
    };

    const validate = () => {
      const value = (input?.value || '').trim().toLowerCase();
      if (value === ACTIVATION_PHRASE) {
        unlock();
      } else if (errorEl) {
        errorEl.textContent = 'Incorrect activation phrase. The gate stays closed.';
      }
    };

    if (button) {
      button.addEventListener('click', validate);
    }

    if (input) {
      input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          validate();
        }
      });
    }

    if (!gate || !input || !button) {
      document.body.classList.add('admin-unlocked');
      document.body.classList.remove('admin-locked');
      bootAdmin();
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    setupGate();
  });
})();
