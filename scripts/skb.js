// ======================================================
// S/K/B Audio Lab Page JS
// - Fake audio preview interactions
// - Highlighting waveform tiles
// - Simple play/pause toggle (visual only)
// ======================================================

document.addEventListener("DOMContentLoaded", () => {
  initSkbWaveforms();
});

function initSkbWaveforms() {
  const tiles = document.querySelectorAll(".skb-wave-tile");

  if (!tiles.length) return;

  tiles.forEach((tile) => {
    const btn = tile.querySelector(".skb-play");
    if (!btn) return;

    btn.addEventListener("click", () => {
      const isActive = tile.classList.toggle("skb-wave-tile--active");
      btn.textContent = isActive ? "⏸" : "▶";
    });

    tile.addEventListener("mouseenter", () => {
      tile.classList.add("skb-wave-tile--hover");
    });

    tile.addEventListener("mouseleave", () => {
      tile.classList.remove("skb-wave-tile--hover");
    });
  });
}
