# SESSION_20 — 26. april 2026.

## Kontekst sesije
Nedjelja. Cijeli radni dan. Fokus: Ch07 DQN vizualizacija + Ch08 + nav unifikacija.

---

## Urađeno

### Ch07 — The Function

**DQN live network vizualizacija**
- Implementiran `drawNetworkViz(h, inp, out, frozen)` — SVG vizualizacija input/hidden/output layera
- Input neuroni pokazuju normalizovane koordinate (row/(ROWS-1), col/(COLS-1))
- Hidden layer: 32 neurona, boja po ReLU aktivaciji, veličina po aktivaciji
- Output: 4 akcije (↑↓←→) s Q-vrijednostima i best akcijom istaknutom
- Veze: linije od top-8 aktiviranih hidden neurona, opacity proporcionalno težini
- Live update dok agent hoda (svaki 4. frame)
- Frozen state: klik na ćeliju zamrzava vizualizaciju, klik na SVG odmrzava
- Placeholder tekst u SVG dok nije popunjen

**Pedagoški tekst — novi paragrafi**
- `p7b`: objašnjenje normalizacije (0.50/0.00 umjesto 4/1, unit square [0,1])
- `p7c`: QL rječnik vs DQN funkcija — generalizacija, vidljivost strelica
- `p8b`: DQN overkill za 7×7 lavirint — ne skalira prema dolje (iz Flavijevog iskustva s milijun koraka)
- Pull quote: "The table is honest about what it does not know. The network always has an answer — right or wrong."

**QL strelice — opacity vizualizacija**
- Strelice uvijek prikazane, opacity proporcionalno maxV/maxQ
- Pokazuje Bellmanovu propagaciju od cilja unazad — vidljiva u realnom vremenu
- Pedagogiški: "The table is honest about what it does not know"

**Bugfixes Ch07**
- `innerHTML` vs `textContent` — HTML_IDS set za elemente s HTML tagovima
- Strong tag u i18n stringovima
- Frozen state badge s click-to-unfreeze
- SVG placeholder background uklonjen

---

### Ch08 — Looking Inside (novo poglavlje)

**Tekst — refleksivno zatvaranje knjige**
- 7 X-Ray momentova (po jedan per poglavlje, jedna rečenica)
- Centralna poanta: razlika između sistema koji izgleda u redu i sistema koji jest u redu
- Pull quote: "What looks stable may be trapped. What looks random may be structured."
- Zaključak: "Look inside. Not once. Every time."
- Dvije jezičke verzije: EN + DE

**Layout**
- Čist prose layout bez widgeta
- `main{max-width:680px}` — uži od Ch01–Ch07, namjerno drugačiji
- Ch08 ostaje vizualno drugačiji od Ch01–Ch07 (prose vs widget poglavlje)

---

### Nav unifikacija — dug put

**Problem:** Svako poglavlje nastajalo u zasebnoj sesiji bez shared CSS skeleton-a.
Razlike koje smo otkrili tokom dana:
- `nav-inner` div wrapper u Ch01–Ch05 (ne postoji u Ch08)
- `body{max-width:800px; margin:0 auto}` u Ch01–Ch07 — nav se ograničio na 800px
- `--mono` CSS varijabla nedefinirana u Ch01–Ch07 (browser padao na system default font)
- `position:sticky` vs `position:fixed`
- Različiti font-size, padding, overflow varijante

**Verzije tokom dana:** v1.0 → v1.1 → v1.2 → v1.3 → v1.4 → v1.5 → v1.6 → v1.7 → v1.8

**Rješenje — v1.9: `nav.js`**
- Jedan shared JavaScript fajl (`/docs/nav.js`)
- Injektira identičan CSS i HTML nav u svaku stranicu
- Active stavka detektovana po `window.location.pathname`
- Lang i Display toggle bridgani na `toggleLang()` / `toggleSettings()` per poglavlje
- Svi stari `<nav>` blokovi uklonjeni iz svih fajlova
- Nav CSS uklonjen iz svih `<style>` blokova
- Jedna linija po fajlu: `<script src="nav.js"></script>`

**Zaključak dana:** Strateška greška bila je organski razvoj bez shared komponenti.
Za drugu knjigu: `nav.js` + `shared.css` od prvog poglavlja.

---

### Index.html
- GitHub link uklonjen
- Ch08 dodan kao klikabilan link (bio "coming soon")
- Nav verzija ažurirana kroz sve verzije

---

## Trenutno stanje

- **Live URL:** `https://x-ray.dynu.net`
- **Verzija:** v1.9
- **Zadnji commit:** `4355b49`
- **Poglavlja:** Ch01–Ch08, sva live
- **Nav:** `nav.js` — jedan shared fajl
- **Ch08 layout:** namjerno drugačiji od Ch01–Ch07 (prose vs widget)

---

## Otvoreni zadaci

### Tehnički
- [ ] Ch08 `toggleLang()` i `toggleSettings()` — provjeri da li nav.js toggle gumbi rade
- [ ] Index nav — još uvijek ima stari `nav-inner` skeleton, vizualno drugačiji
- [ ] `padding-top:52px` na body u svim poglavljima — provjeri da ne prekriva sadržaj

### Sadržaj — v2 interaktivne knjige (potencijalno)
- [ ] Ch07: Death spiral demo (lokalni optimum koji se ne vidi iznutra)
- [ ] DE/FR/SR/HR prijevodi za Ch08

### Druga knjiga — "Sandbox bez redosljeda"
**Dogovorena ideja:** Nova interaktivna knjiga bez pedagoškog luka, slobodna kolekcija.
Teme u planu:
- [ ] Pong — RL agent koji uči igrati, live vizualizacija
- [ ] Briscola — karta koju igraju Flavijevi prijatelji od djetinjstva
- [ ] Genetski algoritmi
- [ ] Kolonije mrava
- [ ] Celularni automati
- [ ] Samovozeci auti

**Tehnička odluka za drugu knjigu:**
- `shared.css` od prvog poglavlja
- `nav.js` shared od prvog poglavlja
- Možda lightweight static site generator

---

## Bilješka

> "Kad bih nekom rekao sa kim sam jurio koju grešku, retko ko bi mi vjerovao."
> — Flavio, SESSION_20

Nav greška nije bila greška u kodu — bila je greška u arhitekturi.
Ispravljena je na pravi način: jednim shared fajlom, ne još jednim patchom.

