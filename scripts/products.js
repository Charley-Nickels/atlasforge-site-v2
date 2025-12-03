// Product page helper: injects status chips and blurbs for products/*.html using inline data or JSON fallbacks.
// Depends on a data-product-slug attribute on the page body and containers with .product-status, #product-description, #product-bullets.
// Styling lives in styles/products.css alongside shared hero treatments.
(function () {
  const defaultStatus = {
    atlasv: { label: 'Available', tone: 'live' },
    atlasstudio: { label: 'In Beta', tone: 'beta' },
    oia: { label: 'Prototype', tone: 'beta' },
    atlaswave: { label: 'Coming Soon', tone: 'future' }
  };

  const defaultBlurbs = {
    atlasv: {
      title: 'Atlas-V',
      description: 'Core governance engine for orchestrating AtlasForge decisions.',
      bullets: [
        'Routes requests through vetted decision blocks',
        'Captures approvals, flags, and revisions',
        'Keeps AtlasForge canon aligned across products'
      ]
    },
    atlasstudio: {
      title: 'AtlasStudio',
      description: 'Workstation for crafting experiences with Atlas-V assistance.',
      bullets: [
        'Unified file tree, previews, and Atlas-V chat',
        'Lightweight authoring with glow-first UI',
        'Ready for future live data wiring'
      ]
    },
    oia: {
      title: 'Octopus in Action',
      description: 'Playable playground for AtlasForge characters and loops.',
      bullets: [
        'Showcases narrative experiments',
        'Tests moment-to-moment feel with quick patches',
        'Feeds insights back into Atlas-V governance'
      ]
    },
    atlaswave: {
      title: 'AtlasWave',
      description: 'Signal layer for streaming AtlasForge intelligence.',
      bullets: [
        'Push updates across worlds and consoles',
        'Monitor live statepack decisions',
        'Designed for upcoming real-time pilots'
      ]
    }
  };

  const loadJson = (path, fallback) =>
    fetch(path)
      .then((resp) => (resp.ok ? resp.json() : Promise.reject()))
      .catch(() => fallback);

  const renderStatus = (slug, statusMap) => {
    const container = document.querySelector('.product-status');
    const status = statusMap?.[slug];
    if (!container || !status) return;
    const chip = document.createElement('span');
    chip.className = `product-status__chip status-${status.tone || 'live'}`;
    chip.textContent = status.label || '';
    container.innerHTML = '';
    container.appendChild(chip);
  };

  const renderContent = (slug, blurbsMap) => {
    const descriptionEl = document.getElementById('product-description');
    const bulletsEl = document.getElementById('product-bullets');
    const blurb = blurbsMap?.[slug];

    if (descriptionEl && blurb) {
      descriptionEl.textContent = blurb.description || '';
    }

    if (bulletsEl && blurb?.bullets?.length) {
      bulletsEl.innerHTML = '';
      blurb.bullets.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        bulletsEl.appendChild(li);
      });
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('[data-product-slug]');
    const slug = root?.dataset?.productSlug;
    if (!slug) return;

    loadJson('../data/product_status.json', defaultStatus).then((statusMap) =>
      renderStatus(slug, statusMap)
    );

    loadJson('../data/product_blurbs.json', defaultBlurbs).then((blurbsMap) =>
      renderContent(slug, blurbsMap)
    );
  });
})();
