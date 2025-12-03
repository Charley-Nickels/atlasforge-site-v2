// Decision Console storyboard interactions for decisions.html: handles tab toggles and content swaps.
// Depends on tab buttons with data-tab attributes and the #decision-state panel styled by styles/decision-console.css.
// Purely front-end; image paths reference static assets under assets/decision-console/.
(function () {
  const microcopy = {
    queue: {
      heading: 'Decision Queue',
      copy: 'Incoming submissions arrive with Atlas-V summaries, waiting for governance triage.',
      img: 'assets/decision-console/queue.png',
    },
    detail: {
      heading: 'Canon Detail',
      copy: 'Dive into canon alignment, lore context, risk notes, and proposed actions before acceptance.',
      img: 'assets/decision-console/detail.png',
    },
    flags: {
      heading: 'Flags',
      copy: 'Flags show severity and let reviewers accept, request changes, or mark for canon.',
      img: 'assets/decision-console/flags.png',
    },
  };

  const stateContainer = document.getElementById('decision-state');
  const tabElements = Array.from(document.querySelectorAll('[data-tab][role="tab"]'));

  function renderState(key, tabEl) {
    const data = microcopy[key] || microcopy.queue;
    if (!stateContainer) return;
    stateContainer.dataset.state = key;
    stateContainer.setAttribute('role', 'tabpanel');
    if (tabEl && tabEl.id) {
      stateContainer.setAttribute('aria-labelledby', tabEl.id);
    }
    stateContainer.innerHTML = `
      <div class="dc-panel">
        <h3>${data.heading}</h3>
        <p>${data.copy}</p>
        <img src="${data.img}" alt="${data.heading} storyboard" />
      </div>
    `;
  }

  function setActiveTab(activeKey) {
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
    renderState(activeKey, activeTab || tabElements[0]);
  }

  function activateTab(tabEl) {
    if (!tabEl) return;
    const key = tabEl.dataset.tab;
    setActiveTab(key);
    tabEl.focus();
  }

  function handleTabClick(event) {
    activateTab(event.currentTarget);
  }

  function handleKeydown(event) {
    const key = event.key;
    const currentIndex = tabElements.indexOf(event.currentTarget);

    if (key === 'ArrowRight' || key === 'ArrowLeft') {
      event.preventDefault();
      // Cycle focus through tabs without triggering activation until Enter/Space.
      const direction = key === 'ArrowRight' ? 1 : -1;
      const nextIndex = (currentIndex + direction + tabElements.length) % tabElements.length;
      tabElements[nextIndex].focus();
    }

    if (key === 'Enter' || key === ' ' || key === 'Spacebar') {
      event.preventDefault();
      activateTab(event.currentTarget);
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
