(function() {
  document.querySelectorAll('[data-map-layer]').forEach((layer) => {
    layer.addEventListener('mouseenter', () => layer.classList.add('is-active'));
    layer.addEventListener('mouseleave', () => layer.classList.remove('is-active'));
  });
})();
