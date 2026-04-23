# Medi-Dent — kontekst projektu

> Przeczytaj ten plik na początku każdej sesji nad stroną Medi-Dent.
> Więcej szczegółów: `ARCHITECTURE.md` (struktura plików), `PATTERNS.md` (pułapki, styl).

---

## Czym jest projekt

**Medi-Dent** — strona internetowa dla kliniki stomatologicznej w Białymstoku.

Fokus usług: **estetyka stomatologiczna + endodoncja** — nie rozmywać na inne specjalizacje.
Ton: ciepły, rodzinny, budujący zaufanie. Bez korporacyjnego języka.
Kontakt: wyłącznie telefon — bez formularza kontaktowego (decyzja klienta, nie zmieniać).

Projekt aktywny — dane klienta zebrane i wgrane na stronę.

---

## Dane klienta (wgrane na stronę)

| Co | Wartość |
|---|---|
| Telefon | 85 744 65 93 |
| Adres | Al. Piłsudskiego 15/16, 15-444 Białystok |
| Godziny | wt–śr 11:00–18:00, czw–sob 08:00–14:00, pon i nd nieczynne |
| Cennik | pełny (badanie, zachowawcza, endodoncja, protetyka, higiena, chirurgia, RTG) |

---

## Status projektu (stan na kwiecień 2026)

**Live:** `https://mickymau.github.io/medi-dent/index.html` — strona dostępna z danymi.

**Co dalej:** zweryfikować treści, przekształcić w case study dla Verami.Studio.
Patrz OPEN-ITEMS.md.

---

## Dane techniczne

| Co | Wartość |
|---|---|
| GitHub | `Mickymau/medi-dent` |
| Hosting | GitHub Pages |
| URL | `https://mickymau.github.io/medi-dent/index.html` |
| Folder lokalny | `C:\\Users\\Michał\\Desktop\\PROJEKTY\\strona internetowa medi dent\\` |
| Uwaga | folder `knowledge/` istnieje tylko w repo, nie lokalnie |
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
