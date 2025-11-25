(function() {
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

  // Active link based on path
  const path = window.location.pathname.split('/').pop();
  document.querySelectorAll('.mf-nav a').forEach((link) => {
    const href = link.getAttribute('href');
    if (href && href.endsWith(path)) {
      link.classList.add('is-active');
    }
  });

  // Storyboard highlighting on scroll
  const chapters = document.querySelectorAll('.mf-storyboard-item');
  const observer = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-active');
      }
    });
  }, { threshold: 0.4 }) : null;

  chapters.forEach((chap) => observer?.observe(chap));

  // Clear skeletons after load
  window.addEventListener('load', () => {
    document.querySelectorAll('.mf-skeleton').forEach((skel) => {
      skel.classList.add('is-loaded');
      skel.style.display = 'none';
    });
  });
})();
