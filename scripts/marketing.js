(function() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const navToggle = document.querySelector('.mf-nav-toggle');
  const navGroup = document.querySelector('.mf-nav-group');
  const mobileMedia = window.matchMedia('(max-width: 1023px)');

  const closeNav = () => {
    if (!navGroup || !navToggle) return;
    navGroup.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  };

  const isMobileNav = () => {
    if (!navToggle) return false;
    const toggleVisible = navToggle.offsetParent !== null;
    return toggleVisible || mobileMedia.matches;
  };

  if (navToggle && navGroup) {
    navToggle.addEventListener('click', () => {
      const isOpen = navGroup.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      if (isOpen) {
        navGroup.querySelector('a')?.focus();
      }
    });

    navGroup.querySelectorAll('a, button').forEach((link) => {
      link.addEventListener('click', () => {
        if (isMobileNav() && navGroup.classList.contains('is-open')) {
          closeNav();
        }
      });
    });
  }

  const modeButtons = document.querySelectorAll('[data-mode]');
  const modePanels = document.querySelectorAll('[data-mode-panel]');

  const setMode = (key) => {
    modeButtons.forEach((btn) => {
      const isActive = btn.dataset.mode === key;
      btn.setAttribute('aria-pressed', String(isActive));
      btn.classList.toggle('is-active', isActive);
    });
    modePanels.forEach((panel) => {
      const shouldShow = panel.dataset.modePanel === key;
      panel.hidden = !shouldShow;
    });
  };

  if (modeButtons.length) {
    setMode(modeButtons[0].dataset.mode);
    modeButtons.forEach((btn) => {
      btn.addEventListener('click', () => setMode(btn.dataset.mode));
      btn.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          setMode(btn.dataset.mode);
        }
      });
    });
  }

  const constraintButtons = document.querySelectorAll('[data-constraint]');
  const constraintPanels = document.querySelectorAll('[data-constraint-detail]');

  const setConstraint = (key) => {
    constraintButtons.forEach((btn) => {
      const isActive = btn.dataset.constraint === key;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });
    constraintPanels.forEach((panel) => {
      const shouldShow = panel.dataset.constraintDetail === key;
      panel.hidden = !shouldShow;
    });
  };

  if (constraintButtons.length) {
    setConstraint(constraintButtons[0].dataset.constraint);
    constraintButtons.forEach((btn) => {
      btn.addEventListener('click', () => setConstraint(btn.dataset.constraint));
      btn.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          setConstraint(btn.dataset.constraint);
        }
      });
    });
  }

  const hashLinks = Array.from(document.querySelectorAll('a[href^="#"]'));
  hashLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href')?.slice(1);
      const target = targetId ? document.getElementById(targetId) : null;
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
        if (target.focus) {
          target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
        }
      }
    });
  });

  // Active link based on path with alias support
  const fullPath = window.location.pathname;
  const path = fullPath.split('/').pop();
  const defaultedPath = path && path.length ? path : 'index.html';
  const canonical = (() => {
    if (fullPath.includes('atlasstudio/')) return 'atlasstudio.html';
    if (defaultedPath === 'studio-tools.html') return 'atlasstudio.html';
    if (defaultedPath === 'octopus.html') return 'oia.html';
    return defaultedPath;
  })();

  document.querySelectorAll('.mf-nav-group a').forEach((link) => {
    const href = link.getAttribute('href');
    if (href && canonical && href.endsWith(canonical)) {
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
    }
  });

  // Storyboard highlighting on scroll
  const chapters = document.querySelectorAll('.mf-storyboard-item');
  if (!prefersReduced && 'IntersectionObserver' in window && chapters.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-active');
          }
        });
      },
      { threshold: 0.4 }
    );

    chapters.forEach((chap) => observer.observe(chap));
  }

  // Clear skeletons after load
  window.addEventListener('load', () => {
    document.querySelectorAll('.mf-skeleton').forEach((skel) => {
      skel.classList.add('is-loaded');
      skel.style.display = 'none';
    });
  });
})();
