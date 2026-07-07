'use strict';

/* ================================================================
   MEDI-DENT · main.js
   Nawigacja, menu mobile, aktywne linki, lazy images, FAQ,
   floating CTA, rok w stopce
   ================================================================ */

/* ── MODUŁ 1: initHeader ────────────────────────────────────────── */

function initHeader() {
  var nav = document.querySelector('.nav');
  if (!nav) return;

  function updateHeader() {
    if (window.scrollY > 40) {
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader(); /* inicjalny stan przy odświeżeniu w połowie strony */
}

/* ── MODUŁ 2: initMobileMenu ────────────────────────────────────── */

function initMobileMenu() {
  var nav        = document.querySelector('.nav');
  var hamburger  = document.querySelector('.nav__hamburger');
  var mobileMenu = document.querySelector('.nav__mobile');

  if (!hamburger || !mobileMenu) return;

  function openMenu() {
    hamburger.classList.add('is-open');
    mobileMenu.classList.add('is-open');
    if (nav) nav.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    hamburger.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    hamburger.classList.remove('is-open');
    mobileMenu.classList.remove('is-open');
    if (nav) nav.classList.remove('is-open');
    document.body.style.overflow = '';
    hamburger.setAttribute('aria-expanded', 'false');
  }

  function toggleMenu() {
    if (hamburger.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  hamburger.addEventListener('click', toggleMenu);

  /* Zamknij po kliknięciu linku w menu */
  var mobileLinks = mobileMenu.querySelectorAll('.nav__mobile-link');
  mobileLinks.forEach(function(link) {
    link.addEventListener('click', closeMenu);
  });

  /* Zamknij klawiszem Escape */
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && hamburger.classList.contains('is-open')) {
      closeMenu();
      hamburger.focus();
    }
  });

  /* Stan początkowy aria-expanded */
  hamburger.setAttribute('aria-expanded', 'false');
}

/* ── MODUŁ 3: initActiveLink ────────────────────────────────────── */

function initActiveLink() {
  var pathname = window.location.pathname;
  var segment  = pathname.split('/').pop();

  /* Strona główna */
  var isHome = (segment === '' || segment === 'index.html');
  var current = isHome ? 'index.html' : segment;

  var navLinks    = document.querySelectorAll('.nav__link');
  var mobileLinks = document.querySelectorAll('.nav__mobile-link');

  function markActive(links) {
    links.forEach(function(link) {
      var href    = link.getAttribute('href') || '';
      var hrefSeg = href.split('/').pop();

      var match = isHome
        ? (hrefSeg === '' || hrefSeg === 'index.html' || href === './' || href === '/')
        : (hrefSeg === current);

      if (match) {
        link.classList.add('is-active');
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  markActive(navLinks);
  markActive(mobileLinks);
}

/* ── MODUŁ 4: initLazyImages ────────────────────────────────────── */

function initLazyImages() {
  var lazyImgs = document.querySelectorAll('img[loading="lazy"]');
  if (!lazyImgs.length) return;

  function markLoaded(img) {
    if (img.complete && img.naturalWidth > 0) {
      img.classList.add('is-loaded');
      return true;
    }
    img.addEventListener('load', function() {
      img.classList.add('is-loaded');
    });
    img.addEventListener('error', function() {
      img.classList.add('is-loaded'); /* nie blokuj layoutu przy błędzie */
    });
    return false;
  }

  /* Fallback bez IntersectionObserver */
  if (!('IntersectionObserver' in window)) {
    lazyImgs.forEach(function(img) { markLoaded(img); });
    return;
  }

  var observer = new IntersectionObserver(
    function(entries) {
      entries.forEach(function(entry) {
        if (!entry.isIntersecting) return;
        var img = entry.target;
        markLoaded(img);
        observer.unobserve(img);
      });
    },
    { rootMargin: '300px 0px' }
  );

  function observeAll() {
    document.querySelectorAll('img[loading="lazy"]:not(.is-loaded)')
      .forEach(function(img) { observer.observe(img); });
  }

  observeAll();

  /* Ponowna obserwacja po dynamicznym wstrzyknięciu elementów */
  window.addEventListener('lazyRefresh', observeAll);
}

/* ── MODUŁ 5: initFaq ───────────────────────────────────────────── */

function initFaq() {
  var questions = document.querySelectorAll('.faq-question');
  if (!questions.length) return;

  questions.forEach(function(question) {
    question.setAttribute('aria-expanded', 'false');

    question.addEventListener('click', function() {
      var item   = question.closest('.faq-item');
      var answer = item ? item.querySelector('.faq-answer') : null;
      if (!answer) return;

      var isOpen = answer.classList.contains('is-open');

      /* Zamknij wszystkie otwarte */
      document.querySelectorAll('.faq-answer.is-open').forEach(function(a) {
        a.classList.remove('is-open');
        var q = a.closest('.faq-item')
          ? a.closest('.faq-item').querySelector('.faq-question')
          : null;
        if (q) {
          q.setAttribute('aria-expanded', 'false');
          a.closest('.faq-item').classList.remove('is-open');
        }
      });

      /* Otwórz kliknięte (jeśli było zamknięte) */
      if (!isOpen) {
        answer.classList.add('is-open');
        question.setAttribute('aria-expanded', 'true');
        if (item) item.classList.add('is-open');
      }
    });
  });
}

/* ── MODUŁ 6: initFloatingCta ───────────────────────────────────── */

function initFloatingCta() {
  var floatingCta = document.querySelector('.floating-cta');
  if (!floatingCta) return;

  function updateFloating() {
    if (window.scrollY > 300) {
      floatingCta.classList.add('is-visible');
    } else {
      floatingCta.classList.remove('is-visible');
    }
  }

  window.addEventListener('scroll', updateFloating, { passive: true });
  updateFloating();
}

/* ── MODUŁ 7: initPhotoCarousel ──────────────────────────────── */

function initPhotoCarousel() {
  var carousels = document.querySelectorAll('.photo-carousel');
  if (!carousels.length) return;

  carousels.forEach(function(carousel) {
    var track  = carousel.querySelector('.photo-carousel__track');
    var slides = carousel.querySelectorAll('.photo-carousel__slide');
    var dots   = carousel.querySelectorAll('.photo-carousel__dot');
    var prevBtn = carousel.querySelector('.photo-carousel__arrow--prev');
    var nextBtn = carousel.querySelector('.photo-carousel__arrow--next');
    if (!track || !slides.length || !dots.length) return;

    var currentIndex = 0;

    function setActive(index) {
      currentIndex = index;
      dots.forEach(function(dot, i) {
        var active = i === index;
        dot.classList.toggle('is-active', active);
        dot.setAttribute('aria-selected', active ? 'true' : 'false');
      });
    }

    /* Wyznacz aktywny slajd na podstawie pozycji scrolla —
       pewniejsze niż IntersectionObserver przy różnych szerokościach */
    function updateActiveFromScroll() {
      var index = Math.round(track.scrollLeft / track.clientWidth);
      if (index < 0) index = 0;
      if (index > slides.length - 1) index = slides.length - 1;
      setActive(index);
    }

    function goTo(index) {
      if (index < 0) index = 0;
      if (index > slides.length - 1) index = slides.length - 1;
      track.scrollTo({ left: track.clientWidth * index, behavior: 'smooth' });
      setActive(index);
    }

    /* Klik w kropkę przewija do odpowiadającego slajdu */
    dots.forEach(function(dot, i) {
      dot.addEventListener('click', function() { goTo(i); });
    });

    /* Strzałki nawigacyjne (klik) */
    if (prevBtn) prevBtn.addEventListener('click', function() { goTo(currentIndex - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function() { goTo(currentIndex + 1); });

    /* Strzałki klawiatury — gdy karuzela ma fokus */
    track.setAttribute('tabindex', '0');
    track.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        goTo(currentIndex + 1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goTo(currentIndex - 1);
      }
    });

    /* Scroll (palcem, trackpadem) aktualizuje aktywną kropkę */
    var scrollTimeout;
    track.addEventListener('scroll', function() {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(updateActiveFromScroll, 60);
    }, { passive: true });

    updateActiveFromScroll();
  });
}

/* ── MODUŁ 8: initFooterYear ────────────────────────────────────── */

function initFooterYear() {
  var el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
}

/* ── INIT ───────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', function() {
  initHeader();
  initMobileMenu();
  initActiveLink();
  initLazyImages();
  initFaq();
  initFloatingCta();
  initPhotoCarousel();
  initFooterYear();
});
