# Medi-Dent — kontekst dla AI

Pełny kontekst projektu: [`knowledge/CONTEXT.md`](knowledge/CONTEXT.md)

---

## Najważniejsze zasady pracy

**Stack:** HTML/CSS/JS vanilla, wieloplikowa architektura, GitHub Pages.

**Projekt jest zamrożony** — czeka na dane kontaktowe i cennik od klienta.
Nie budować dalej na placeholderach. Patrz `knowledge/OPEN-ITEMS.md`.

**Zanim napiszesz cokolwiek:**
- Re-read każdy plik tuż przed edycją
- Nie scalać CSS/JS do single-file — architektura wieloplikowa jest celowa

**Kolejność ładowania CSS jest krytyczna:**
```
tokens.css → base.css → layout.css → components.css → animations.css → responsive.css
```

**Ton strony:** ciepły, rodzinny, zaufanie. Fokus: estetyka + endodoncja.
Bez formularza kontaktowego — tylko telefon (decyzja klienta).

**Zakazane słowa:** „profesjonalny", „kompleksowy", „najwyższa jakość".

**Deploy w PowerShell — komendy osobno, nigdy z `&&`.**

---

## Gdzie szukać

| Pytanie | Plik |
|---|---|
| Cel projektu, status, dane | `knowledge/CONTEXT.md` |
| Struktura plików, Codebase Map | `knowledge/ARCHITECTURE.md` |
| Pułapki, styl komunikacji | `knowledge/PATTERNS.md` |
| Co blokuje, co do zrobienia | `knowledge/OPEN-ITEMS.md` |
