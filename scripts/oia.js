// ======================================================
// Octopus in Action World Page JS
// - Mailbox/task-item interactions
// - Lightweight DOM-only behavior, no network/storage.
// ======================================================

document.addEventListener("DOMContentLoaded", () => {
  initOiaMailbox();
});

function initOiaMailbox() {
  const items = document.querySelectorAll(".oia-mail-item");
  const details = document.querySelectorAll(".oia-task-detail");

  if (!items.length || !details.length) return;

  items.forEach((item) => {
    item.addEventListener("click", () => {
      const id = item.dataset.id;

      // Toggle active state in list
      items.forEach((it) => it.classList.toggle("oia-mail-item--active", it === item));

      // Show matching detail, hide others
      details.forEach((detail) => {
        const match = detail.dataset.id === id;
        detail.style.display = match ? "block" : "none";
        detail.classList.toggle("oia-task-detail--active", match);
      });
    });
  });

  // Activate first item by default if none are active
  const anyActive = Array.from(items).some((item) =>
    item.classList.contains("oia-mail-item--active")
  );

  if (!anyActive && items[0]) {
    items[0].click();
  }
}
