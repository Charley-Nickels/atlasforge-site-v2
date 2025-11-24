// ======================================================
// Atlas-V Engine Page JS
// - Module tab switching (Navigator, Memory, Guard, FlowSim)
// - Lightweight DOM-only behavior, no network/storage.
// ======================================================

document.addEventListener("DOMContentLoaded", () => {
  initAtlasVModuleSwitcher();
});

function initAtlasVModuleSwitcher() {
  const tabs = document.querySelectorAll(".av-module-tab");
  const cards = document.querySelectorAll(".av-module-card");
  const label = document.querySelector(".av-active-label");

  if (!tabs.length || !cards.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.module;

      // Toggle active tab
      tabs.forEach((t) => t.classList.toggle("av-module-tab--active", t === tab));

      // Toggle active card
      cards.forEach((card) => {
        const match = card.dataset.module === target;
        card.classList.toggle("av-module-card--active", match);
      });

      // Update label text
      if (label) {
        label.textContent = tab.dataset.label || tab.textContent.trim();
      }
    });
  });

  // If nothing is active by default, activate the first
  const anyActive = Array.from(tabs).some((tab) =>
    tab.classList.contains("av-module-tab--active")
  );
  if (!anyActive && tabs[0]) {
    tabs[0].click();
  }
}
