(function() {
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const NAV_PRIMARY = [
    { label: 'AtlasForge', href: 'index.html' },
    { label: 'Studio / About', href: 'about.html' },
    { label: 'Atlas Studio', href: 'atlasstudio.html' },
    { label: 'Atlas V', href: 'atlasv.html' },
    { label: 'Games', href: 'games.html' },
    { label: 'Labs', href: 'labs.html' }
  ];

  const NAV_SECONDARY = [
    { label: 'Atlas Wave', href: 'wave.html' },
    { label: 'AMN', href: 'amn.html' },
    { label: 'Store', href: 'store.html' },
    { label: 'Publishing & Licensing', href: 'publishing.html' }
  ];

  function isActive(href, current) {
    if (current === '' || current === '/') return href === 'index.html';
    return current === href;
  }

  function buildNav() {
    const primaryNav = document.querySelector('.mf-nav--primary');
    const secondaryNav = document.querySelector('.mf-nav--secondary');
    const current = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();

    if (primaryNav) {
      primaryNav.innerHTML = NAV_PRIMARY.map((item) => {
        const active = isActive(item.href.toLowerCase(), current) ? 'is-active' : '';
        return `<a href="${item.href}" class="${active}">${item.label}</a>`;
      }).join('');
    }

    if (secondaryNav) {
      secondaryNav.innerHTML = NAV_SECONDARY.map((item) => {
        const active = isActive(item.href.toLowerCase(), current) ? 'is-active' : '';
        return `<a href="${item.href}" class="${active}">${item.label}</a>`;
      }).join('');
    }
  }

  const ADMIN_CODE_HASH = "a6506adb72c5f516e711856247a0757eeaac80d827a525ad1ca644ed6383b82c";

  function sha256Hex(str) {
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    return crypto.subtle.digest("SHA-256", data).then((hashBuffer) => {
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    buildNav();

    const adminLink = document.getElementById("mf-footer-admin-link");
    const modal = document.getElementById("mf-admin-modal");
    const form = document.getElementById("mf-admin-form");
    const codeInput = document.getElementById("mf-admin-code");
    const errorEl = document.getElementById("mf-admin-error");
    const cancelBtn = modal ? modal.querySelector(".mf-admin-cancel") : null;

    if (!adminLink || !modal || !form || !codeInput || !errorEl) {
      return;
    }

    function showModal() {
      modal.setAttribute("aria-hidden", "false");
      errorEl.textContent = "";
      codeInput.value = "";
      codeInput.focus();
    }

    function hideModal() {
      modal.setAttribute("aria-hidden", "true");
      errorEl.textContent = "";
      codeInput.value = "";
    }

    adminLink.addEventListener("click", (event) => {
      event.preventDefault();
      showModal();
    });

    if (cancelBtn) {
      cancelBtn.addEventListener("click", () => {
        hideModal();
      });
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const value = codeInput.value || "";

      sha256Hex(value)
        .then((hashHex) => {
          if (hashHex === ADMIN_CODE_HASH) {
            window.location.href = "/admin/atlas-decisions.html";
          } else {
            errorEl.textContent = "Incorrect admin code.";
          }
        })
        .catch(() => {
          errorEl.textContent = "Unable to verify code in this browser.";
        });
    });
  });
})();
