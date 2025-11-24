// ======================================================
// AtlasForge Marketing JS
// - Mobile nav toggle
// - Section reveal on scroll
// Front-end only; no storage, no network.
// ======================================================

document.addEventListener("DOMContentLoaded", () => {
  initMarketingNav();
  initMarketingSectionReveal();
});

// ------------------------------
// Mobile nav toggle
// ------------------------------
function initMarketingNav() {
  const header = document.querySelector(".mf-header");
  if (!header) return;

  const nav = header.querySelector(".mf-nav");
  const toggle = header.querySelector(".mf-nav-toggle");

  if (!nav || !toggle) return;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("mf-nav--open");
  });

  // Close after clicking a link (on mobile)
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("mf-nav--open");
    });
  });
}

// ------------------------------
// Section reveal on scroll
// ------------------------------
function initMarketingSectionReveal() {
  const sections = document.querySelectorAll(".mf-section");
  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("mf-section--visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  sections.forEach((section) => observer.observe(section));
}
