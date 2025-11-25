(function() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const navToggle = document.querySelector('.mf-nav-toggle');
  const nav = document.querySelector('.mf-nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      if (isOpen) {
        nav.querySelector('a')?.focus();
      }
    });
  }

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

  document.querySelectorAll('.mf-nav a').forEach((link) => {
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
  }

  // Active link based on path
  const path = window.location.pathname.split('/').pop();
  document.querySelectorAll('.mf-nav a').forEach((link) => {
    const href = link.getAttribute('href');
    if (href && href.endsWith(path)) {
      link.classList.add('is-active');
    }
  });
})();
