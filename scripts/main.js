// /scripts/main.js
// Placeholder for future global site behavior.
// Currently minimal by design for AtlasForge Site V2.

// Example: Mobile nav toggle (future enhancement)
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".af-nav-toggle");
  const navLinks = document.querySelector(".af-nav-links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("is-open");
    });
  }
});
