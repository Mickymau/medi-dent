'use strict';

/* ================================================================
   MEDI-DENT · animations.js
   Reveal przy scrollu — IntersectionObserver
   ================================================================ */

(function initReveal() {

  var SELECTOR    = '.reveal';
  var ACTIVE_CLASS = 'is-visible';

  /* Fallback — przeglądarki bez IntersectionObserver */
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll(SELECTOR).forEach(function(el) {
      el.classList.add(ACTIVE_CLASS);
    });
    return;
  }

  var observer = new IntersectionObserver(
    function(entries) {
      entries.forEach(function(entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add(ACTIVE_CLASS);
        observer.unobserve(entry.target); /* obserwuj tylko raz */
      });
    },
    {
      threshold:  0.08,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  function observeAll() {
    document.querySelectorAll(SELECTOR + ':not(.' + ACTIVE_CLASS + ')')
      .forEach(function(el) { observer.observe(el); });
  }

  observeAll();

  /* Odświeżenie po dynamicznym wstrzyknięciu elementów do DOM */
  window.addEventListener('revealRefresh', observeAll);

})();
