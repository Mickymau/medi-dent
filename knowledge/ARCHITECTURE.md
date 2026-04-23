# Medi-Dent — architektura techniczna

> Struktura plików i Codebase Map. Czytaj gdy potrzebujesz edytować konkretny plik.

---

## Stack

HTML/CSS/JS vanilla — **architektura wieloplikowa** (analogicznie do Verami.Studio).
Język: polski. Hosting: GitHub Pages.

Ważne: architektura jest wieloplikowa — CSS i JS w osobnych plikach.
Nie scalać do single-file nawet jeśli wydaje się to „prostsze". Ta decyzja
jest świadoma i spójna z podejściem do Verami.Studio.

---

## Struktura plików

```
strona internetowa medi dent/
├── index.html              ← strona główna (hero, usługi, o gabinecie, kontakt)
├── o-gabinecie.html        ← podstrona o gabinecie
├── uslugi.html             ← podstrona usług
├── kontakt.html            ← podstrona kontakt (tylko telefon — bez formularza)
├── cennik.html             ← podstrona cennik
├── css/
│   ├── tokens.css          ← ŁADOWAĆ PIERWSZE: zmienne CSS
│   ├── base.css            ← reset, elementy globalne
│   ├── layout.css          ← siatki, kontenery, sekcje
│   ├── components.css      ← karty, przyciski, nav, footer
│   ├── animations.css      ← reveal, transitions
│   └── responsive.css      ← ŁADOWAĆ OSTATNIE: media queries
├── js/
│   ├── main.js             ← inicjalizacja, header scroll, hamburger
│   └── animations.js       ← IntersectionObserver, animacje wejścia
└── prompty/                ← folder z promptami do pracy nad stroną
```

---

## Codebase Map

| Plik | Co robi |
|---|---|
| `index.html` | Strona główna — sekcje: hero, usługi, o gabinecie, kontakt |
| `o-gabinecie.html` | Podstrona o gabinecie i zespole |
| `uslugi.html` | Podstrona usług (estetyka + endodoncja) |
| `kontakt.html` | Podstrona kontakt — tylko telefon, bez formularza |
| `cennik.html` | Podstrona cennik — **TBD: dane do uzupełnienia przez klienta** |
| `css/tokens.css` | Zmienne CSS (kolory, spacing, typografia) — ładować pierwsze |
| `css/base.css` | Reset, elementy globalne |
| `css/layout.css` | Siatki, kontenery, sekcje |
| `css/components.css` | Karty, przyciski, nav, footer |
| `css/animations.css` | Reveal, transitions |
| `css/responsive.css` | Media queries — ładować ostatnie |
| `js/main.js` | Inicjalizacja, header scroll (`is-scrolled`), hamburger |
| `js/animations.js` | IntersectionObserver, dodaje klasę `is-visible` |
| `prompty/` | Folder z promptami do pracy nad stroną (nie część strony) |

---

## CSS — kolejność ładowania

Analogicznie do Verami.Studio — kolejność jest krytyczna:

```
tokens.css → base.css → layout.css → components.css → animations.css → responsive.css
```

`tokens.css` definiuje zmienne CSS używane przez wszystkie pozostałe pliki.
Nie zmieniać kolejności bez powodu.
