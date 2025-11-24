// scripts/main.js
// AtlasForge Global Shell Logic
// - Mobile navigation toggle (af-header)
// - Active nav highlighting based on current URL

(function () {
  function $(selector, root) {
    return (root || document).querySelector(selector);
  }
  function $all(selector, root) {
    return Array.from((root || document).querySelectorAll(selector));
  }

  function initMobileNav() {
    var toggle = $("#afNavToggle");
    var mobile = $("#afNavMobile");
    if (!toggle || !mobile) return;

    toggle.addEventListener("click", function () {
      mobile.classList.toggle("af-nav-mobile-open");
    });

    // Close when clicking a link
    mobile.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        mobile.classList.remove("af-nav-mobile-open");
      }
    });
  }

  function initActiveNav() {
    var links = $all("[data-af-nav]");
    if (!links.length) return;

    var path = window.location.pathname || "";
    var lastSegment = path.split("/").filter(Boolean).pop() || "index.html";

    function markActive(matchFn) {
      links.forEach(function (link) {
        if (matchFn(link)) {
          link.classList.add("af-nav-active");
        } else {
          link.classList.remove("af-nav-active");
        }
      });
    }

    // Special case: AtlasStudio playground under /atlasstudio/
    if (path.indexOf("/atlasstudio/") !== -1) {
      markActive(function (link) {
        var href = link.getAttribute("href") || "";
        return href.indexOf("studio-tools") !== -1;
      });
      return;
    }

    // Normal top-level pages
    markActive(function (link) {
      var href = (link.getAttribute("href") || "").replace("./", "");
      if (!href) return false;

      // Home / index
      if (
        (lastSegment === "" || lastSegment === "index.html") &&
        (href === "index.html" || href === "./" || href === "/")
      ) {
        return true;
      }

      // Direct filename match (studio-tools.html, atlasv.html, games.html, etc.)
      return href.indexOf(lastSegment) !== -1;
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initMobileNav();
    initActiveNav();
  });
})();
