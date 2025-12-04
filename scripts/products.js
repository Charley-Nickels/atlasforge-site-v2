// Product helper: injects status chips and blurbs for product pages and home cards.
// Depends on JSON data in /data and containers with product-specific hooks on both
// product detail pages (data-product-slug, .product-status, #product-description,
// #product-bullets) and the home product grid ([data-product-grid]).
(function () {
  const STATUS_PATH = '/data/product_status.json';
  const BLURBS_PATH = '/data/product_blurbs.json';
  const HOME_ORDER = ['atlasv', 'atlasstudio', 'oia', 'decision-console', 'atlaswave'];

  const defaultStatus = {
    atlasv: { label: 'Active', tone: 'live' },
    atlasstudio: { label: 'In Beta', tone: 'beta' },
    oia: { label: 'Prototype', tone: 'beta' },
    'decision-console': { label: 'Reviewing', tone: 'beta' },
    atlaswave: { label: 'Coming Soon', tone: 'future' }
  };

  const defaultBlurbs = {
    atlasv: {
      name: 'Atlas-V',
      title: 'Atlas-V',
      shortDescription: 'Governance engine for orchestrating AtlasForge decisions.',
      description: 'Core governance engine for orchestrating AtlasForge decisions.',
      category: 'Core',
      link: '/products/atlasv.html',
      bullets: [
        'Routes requests through vetted decision blocks',
        'Captures approvals, flags, and revisions',
        'Keeps AtlasForge canon aligned across products'
      ]
    },
    atlasstudio: {
      name: 'AtlasStudio',
      title: 'AtlasStudio',
      shortDescription: 'Workstation for crafting experiences with Atlas-V assistance.',
      description: 'Workstation for crafting experiences with Atlas-V assistance.',
      category: 'Creation',
      link: '/products/atlasstudio.html',
      bullets: [
        'Unified file tree, previews, and Atlas-V chat',
        'Lightweight authoring with glow-first UI',
        'Ready for future live data wiring'
      ]
    },
    oia: {
      name: 'Octopus in Action',
      title: 'Octopus in Action',
      shortDescription: 'Playable playground for AtlasForge characters and loops.',
      description: 'Playable playground for AtlasForge characters and loops.',
      category: 'Experiments',
      link: '/products/oia.html',
      bullets: [
        'Showcases narrative experiments',
        'Tests moment-to-moment feel with quick patches',
        'Feeds insights back into Atlas-V governance'
      ]
    },
    'decision-console': {
      name: 'Decision Console',
      title: 'Decision Console',
      shortDescription: 'Console for answering pending decisions and feeding canon.',
      description: 'Console for answering pending decisions and feeding canon.',
      category: 'Governance',
      link: '/decisions.html',
      bullets: [
        'Queue, detail, and flags views for governance',
        'Keeps editors aligned with AtlasForge canon',
        'Storyboards ready for future live data'
      ]
    },
    atlaswave: {
      name: 'AtlasWave',
      title: 'AtlasWave',
      shortDescription: 'Signal layer for streaming AtlasForge intelligence.',
      description: 'Signal layer for streaming AtlasForge intelligence.',
      category: 'Signals',
      link: '/products/atlaswave.html',
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
    const titleEl = document.querySelector('.product-title');
    const blurb = blurbsMap?.[slug];

    if (descriptionEl && blurb) {
      descriptionEl.textContent = blurb.description || blurb.shortDescription || '';
    }

    if (titleEl && blurb?.title) {
      titleEl.textContent = blurb.title;
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

  const buildStatusChip = (status) => {
    const chip = document.createElement('span');
    chip.className = `product-status__chip status-${status?.tone || 'live'}`;
    chip.textContent = status?.label || '';
    chip.setAttribute('aria-label', `Status: ${status?.label || ''}`);
    return chip;
  };

  const renderHomeProducts = (blurbsMap, statusMap) => {
    const grid = document.querySelector('[data-product-grid]');
    if (!grid) return;

    grid.innerHTML = '';
    HOME_ORDER.forEach((slug) => {
      const blurb = blurbsMap?.[slug];
      if (!blurb) return;
      const status = statusMap?.[slug];

      const card = document.createElement('article');
      card.className = 'af-product-card glow-card';
      card.setAttribute('data-brand', slug);

      const eyebrow = document.createElement('p');
      eyebrow.className = 'af-hero-badge';
      eyebrow.textContent = blurb.category || 'Product';
      card.appendChild(eyebrow);

      const title = document.createElement('h3');
      title.textContent = blurb.name || blurb.title || slug;
      card.appendChild(title);

      const description = document.createElement('p');
      description.textContent = blurb.shortDescription || blurb.description || '';
      card.appendChild(description);

      const statusSlot = document.createElement('div');
      statusSlot.className = 'product-status';
      if (status) {
        statusSlot.appendChild(buildStatusChip(status));
      }
      card.appendChild(statusSlot);

      if (blurb.link) {
        const cta = document.createElement('a');
        cta.className = 'af-button af-button--ghost';
        cta.href = blurb.link;
        cta.textContent = 'Open';
        card.appendChild(cta);
      }

      grid.appendChild(card);
    });
  };

  document.addEventListener('DOMContentLoaded', () => {
    Promise.all([loadJson(STATUS_PATH, defaultStatus), loadJson(BLURBS_PATH, defaultBlurbs)])
      .then(([statusMap, blurbsMap]) => {
        renderHomeProducts(blurbsMap, statusMap);

        const root = document.querySelector('[data-product-slug]');
        const slug = root?.dataset?.productSlug;
        if (!slug) return;

        renderStatus(slug, statusMap);
        renderContent(slug, blurbsMap);
      })
      .catch(() => {
        const root = document.querySelector('[data-product-slug]');
        const slug = root?.dataset?.productSlug;
        if (slug) {
          renderStatus(slug, defaultStatus);
          renderContent(slug, defaultBlurbs);
        }
        renderHomeProducts(defaultBlurbs, defaultStatus);
      });
  });
})();
