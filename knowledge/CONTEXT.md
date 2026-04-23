# Medi-Dent — kontekst projektu

> Przeczytaj ten plik na początku każdej sesji nad stroną Medi-Dent.
> Więcej szczegółów: `ARCHITECTURE.md` (struktura plików), `PATTERNS.md` (pułapki, styl).

---

## Czym jest projekt

**Medi-Dent** — strona internetowa dla kliniki stomatologicznej w Białymstoku.

Fokus usług: **estetyka stomatologiczna + endodoncja** — nie rozmywać na inne specjalizacje.
Ton: ciepły, rodzinny, budujący zaufanie. Bez korporacyjnego języka.
Kontakt: wyłącznie telefon — bez formularza kontaktowego (decyzja klienta, nie zmieniać).

Projekt aktualnie **zamrożony** — czeka na dane od klienta (telefon, adres, cennik).
Bez tych danych nie ma sensu dalej rozwijać strony — byłoby to budowanie na placeholderach.

---

## Status projektu (stan na kwiecień 2026)

**Live:** `https://mickymau.github.io/medi-dent/index.html` — strona dostępna.

**Co blokuje:** brak danych kontaktowych (telefon, adres gabinetu) i cennika usług.
Zebrane dane przekazać przed kolejną sesją — patrz OPEN-ITEMS.

**Następny krok po odblokowaniu:** dopracować i przekształcić w case study
dla portfolio Verami.Studio.

---

## Dane techniczne

| Co | Wartość |
|---|---|
| GitHub | `Mickymau/medi-dent` |
| Hosting | GitHub Pages |
| URL | `https://mickymau.github.io/medi-dent/index.html` |
| Folder lokalny | `C:\Users\Admin\Desktop\strona internetowa medi dent\` — **TBD: zweryfikować** |
| Dev lokalnie | VS Code Live Server |

---

## Deploy flow

```powershell
# PowerShell — komendy OSOBNO, nie łączyć &&
git add .
git commit -m "opis zmian"
git push
```

GitHub Pages serwuje z brancha `main`. Zmiany widoczne po ~1–2 minutach.

---

## Gdzie szukać więcej

- Struktura plików, Codebase Map → `knowledge/ARCHITECTURE.md`
- Pułapki, styl komunikacji, zasady edycji → `knowledge/PATTERNS.md`
- Blokujące dane, TODO → `knowledge/OPEN-ITEMS.md`
