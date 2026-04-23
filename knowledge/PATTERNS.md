# Medi-Dent — wzorce, konwencje, pułapki

---

## Praca z plikami — pułapki

### `edit_file` wymaga dokładnego dopasowania tekstu
Zawsze re-read plik tuż przed edycją. Jeśli plik był edytowany wcześniej
w tej sesji, stary odczyt jest nieaktualny i edit się nie uda.

Przy dużych zmianach: `write_file` jest bezpieczniejszy.

### Nie scalać do single-file
Architektura jest wieloplikowa (osobne CSS i JS) — analogicznie do Verami.Studio.
Nie scalać wszystkiego do jednego `index.html` nawet jeśli ktoś sugeruje
że to „prostsze". To byłoby cofnięcie architektury.

### Deploy — PowerShell caveat
```powershell
# Komendy OSOBNO — && nie działa w PowerShell
git add .
git commit -m "opis"
git push
```

---

## Styl komunikacji — zasady

**Ton:** ciepły, rodzinny, budujący zaufanie. Jak rozmowa z dobrym lekarzem
którego znasz od lat — nie jak wizyta w korporacyjnej klinice.

**Zakazane słowa:** „profesjonalny", „kompleksowy", „najwyższa jakość", „pasja", „zaangażowanie"

**Fokus:** estetyka stomatologiczna + endodoncja — nie rozmywać oferty
na inne specjalizacje nawet jeśli klinika je oferuje.

**Kontakt:** wyłącznie przez telefon. Nie dodawać formularza kontaktowego —
to jest świadoma decyzja klienta, nie zaniedbanie.

---

## Zasady budowania zaufania w treściach

W branży medycznej zaufanie buduje się inaczej niż w design — pacjent
szuka pewności i bezpieczeństwa, nie efektu wizualnego.

Elementy które powinny być na stronie (gdy dane będą dostępne):
- Imiona i zdjęcia dentystów — twarz gabinetu
- Informacja o sterylizacji narzędzi — pacjenci pytają o to
- Konkretne liczby doświadczenia (lat praktyki, zabiegów)
- Opinie pacjentów z imieniem — nie anonimowe gwiazdki

Elementy których unikać:
- Stockowe zdjęcia uśmiechniętych pacjentów
- Ogólnikowe frazy o „kompleksowej opiece"
- Zbyt formalny język — to ma być „nasz gabinet", nie „placówka medyczna"
