# Legal Spania – Prosjektguide for Claude Code

Denne filen er det første Claude leser. Alt du trenger for å navigere og videreutvikle nettsiden er dokumentert her.

## Prosjektbeskrivelse

Statisk flerspråklig nettside for **Legal Spania** – norsk-eid eiendomsmegler på La Manga del Mar Menor, Spania. Bygget med **Astro 4** og **Tailwind CSS**, deployet til GitHub Pages.

- Primærspråk: **Norsk** – sekundært engelsk og spansk
- URL: Konfigureres i `astro.config.mjs` (se under)
- Kontaktskjema: Formspree (krever setup av `FORMSPREE_ID` i `src/components/ContactForm.astro`)

---

## Mappestruktur

```
site/
├── CLAUDE.md                     ← DU ER HER – start alltid her
├── astro.config.mjs              ← Site-URL og GitHub Pages base-sti
├── tailwind.config.mjs           ← Fargepalett og typografi
├── package.json                  ← Avhengigheter og scripts
├── .github/
│   └── workflows/
│       └── deploy.yml            ← GitHub Actions: auto-deploy ved push til main
├── public/
│   └── assets/
│       └── images/               ← Alle bilder (se bildeoversikt under)
└── src/
    ├── env.d.ts                  ← TypeScript Astro-typer
    ├── i18n/                     ← Alle tekster for alle tre språk
    │   ├── no.ts                 ← Norsk (primær)
    │   ├── en.ts                 ← Engelsk
    │   ├── es.ts                 ← Spansk
    │   └── index.ts              ← t()-hjelpefunksjon, typer, språkstier
    ├── layouts/
    │   └── Layout.astro          ← Base HTML, Google Fonts, <head>, Header + Footer
    ├── components/               ← Alle seksjoner på siden
    │   ├── Header.astro          ← Navigasjon, logo, språkvelger, mobil-meny
    │   ├── Hero.astro            ← Full-screen hero med bakgrunnsbilde og CTA
    │   ├── PropertySection.astro ← La Manga Beach Club – fremhevet eiendom
    │   ├── TrustSection.astro    ← "25+ år" – tillit og USP-er (mørk seksjon)
    │   ├── ServicesSection.astro ← 4 tjenester i grid
    │   ├── BookingSection.astro  ← LaMangaBooking.com kryssalg
    │   ├── Gallery.astro         ← Bildegalleri
    │   ├── AboutSection.astro    ← Om oss med portretter
    │   ├── ContactForm.astro     ← Kontaktskjema (Formspree) + kostnadsinfo
    │   └── Footer.astro          ← Footer med logo, lenker, copyright
    └── pages/
        ├── index.astro           ← Norsk forside (/)
        ├── en/
        │   └── index.astro       ← Engelsk (/en/)
        └── es/
            └── index.astro       ← Spansk (/es/)
```

---

## Slik fungerer flerspråklighet

Alle tekster ligger i `src/i18n/`. Hver side importerer `t(lang)` som returnerer riktig oversettelse:

```typescript
// I en side:
const tr = t('no'); // eller 'en' / 'es'

// I en komponent mottas tr som prop:
<Hero tr={tr} />
```

**For å endre en tekst:** Åpne riktig `src/i18n/no.ts` (eller `en.ts`/`es.ts`) og rediger verdien. Endringen gjelder umiddelbart på alle steder teksten brukes.

---

## Bilder

Alle bilder ligger i `public/assets/images/`. Referer alltid med absolutt sti fra root:

| Fil | Brukes i |
|---|---|
| `legal-logo.png` | Header, Footer |
| `hero-bakgrunn.jpg` | Hero (norsk/spansk) |
| `engelsk-hero-bakgrunn.jpg` | Backup-bilde |
| `la-manga-beach-club.jpg` | PropertySection |
| `eiendom-eksterior.jpg` | PropertySection (grid) |
| `legal-11b-eiendom.jpg` | PropertySection (grid) |
| `paradise-between-2-seas.jpg` | BookingSection bakgrunn, Gallery |
| `la-manga-strand.jpg` | Gallery (stort bilde) |
| `las-velas-villa.jpg` | Gallery |
| `kontor-bilde.jpg` | Gallery, AboutSection |
| `om-oss-portrett.jpeg` | AboutSection |

**Bytt ut et bilde:** Erstatt filen med samme navn i `public/assets/images/`. Ingen kodeendringer nødvendig.

---

## Fargepalett (Tailwind klasser)

| Navn | Klasse | Hex | Brukes til |
|---|---|---|---|
| Navy (mørk) | `bg-navy` | `#0D1F2D` | Hoveddark-seksjoner, header |
| Navy light | `bg-navy-light` | `#1A3246` | Hover-states |
| Navy dark | `bg-navy-dark` | `#081318` | Footer |
| Sand light | `bg-sand-light` | `#F5F0E8` | Lys bakgrunn |
| Sand | `bg-sand` | `#E8D5B0` | Accenttekst på mørk |
| Gold | `bg-gold` | `#C9923A` | CTAs, badges, accenter |

---

## Typografi

- **Overskrifter:** `font-serif` = Playfair Display (serif)
- **Brødtekst:** `font-sans` = DM Sans (sans-serif)
- **Kursiv serif:** Brukes til undertitler og italic-aksentuering

---

## Vanlige oppgaver

### Endre tekst
→ Rediger `src/i18n/no.ts` (eller `en.ts`/`es.ts`)

### Legge til ny eiendom
→ Utvid `PropertySection.astro` eller lag en ny komponent `PropertyCard.astro`

### Endre Formspree-skjema
→ Opprett konto på [formspree.io](https://formspree.io), kopier form-ID og erstatt `YOUR_FORMSPREE_ID` i `src/components/ContactForm.astro`

### Endre farger
→ Rediger `tailwind.config.mjs`

### Endre fonter
→ Rediger `<link>` i `src/layouts/Layout.astro` og `fontFamily` i `tailwind.config.mjs`

---

## Deploy

### Lokal utvikling
```bash
cd site
npm install
npm run dev       # Starter dev-server på localhost:4321
npm run build     # Bygger til site/dist/
npm run preview   # Forhåndsvis bygget lokalt
```

### GitHub Pages
1. Push kode til `main`-branch
2. GitHub Actions (`.github/workflows/deploy.yml`) bygger og deployer automatisk
3. Aktiver GitHub Pages i repo-innstillinger: **Settings → Pages → Source: GitHub Actions**

### Custom domene (f.eks. legalspania.no)
1. Fjern `base`-property fra `astro.config.mjs` (allerede gjort)
2. Oppdater `site`-URL i `astro.config.mjs`
3. Legg til en `CNAME`-fil i `public/` med innhold: `legalspania.no`
4. Konfigurer DNS hos domeneregistrar med CNAME til `USERNAME.github.io`

---

## Teknisk stack

- **Astro 4** – statisk site-generator
- **Tailwind CSS** – utility-first CSS
- **TypeScript** – type-sikre i18n-oversettelser
- **Formspree** – kontaktskjema-backend (krever registrering)
- **Google Fonts** – Playfair Display + DM Sans (loaded i Layout.astro)
- **GitHub Actions** – CI/CD til GitHub Pages
