# ChacraSat

**From orbit to the chacra: smarter crop-rotations for Peru's northern coast.**  
*De la órbita a la chacra: rotaciones de cultivo más inteligentes para la costa norte del Perú.*

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](./LICENSE)
[![NASA Space Apps 2026](https://img.shields.io/badge/NASA_Space_Apps-2026_Field_Shift-0b1d3a.svg)](https://www.spaceappschallenge.org/)
[![Next.js](https://img.shields.io/badge/Next.js-16.4.6-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Deployed on Vercel](https://img.shields.io/badge/Vercel-Live_Demo-2f9e5b?logo=vercel)](https://chacra-sat.vercel.app/)

---

> **Resumen Ejecutivo (Español):** **ChacraSat** es una plataforma web abierta y bilingüe (`ES`/`EN`) de apoyo a la decisión agrícola desarrollada por el equipo **Trujillo Orbital** (Flavia Villacorta, Yesica Castillo Olivares y Julio Castillo) para el **NASA Space Apps Challenge 2026** (sede local Trujillo, Perú — desafío *Field Shift*). Combina datos agroclimáticos reales de **NASA POWER** (**MERRA-2** y **CERES**) con los modelos científicos **FAO-56** (evapotranspiración de referencia $ET_o$ por Hargreaves), **FAO-29** (tolerancia a la salinidad) y pruebas de estrés histórico de **El Niño Costero** (2017/2023) para comparar las 3 mejores rotaciones de cultivos a 18 meses en cinco valles de La Libertad (Moche, Virú, Chao, Chicama y Jequetepeque). *ChacraSat sugiere, el agricultor decide.*

---

## 1. Project Context

| Field | Details |
| :--- | :--- |
| **Project Name** | **ChacraSat** |
| **Live Demo** | [https://chacra-sat.vercel.app/](https://chacra-sat.vercel.app/) |
| **Event** | **2026 NASA Space Apps Challenge** (November 14–15, 2026) |
| **Local Event** | Trujillo, La Libertad, Peru |
| **Challenge** | **Field Shift** |
| **Team Name** | **Trujillo Orbital** |
| **Team Members** | Flavia Villacorta · Yesica Castillo Olivares · Julio Castillo |
| **Target Geography** | Coastal valleys of La Libertad, Peru: **Moche (Trujillo)**, **Virú**, **Chao**, **Chicama**, and **Jequetepeque** (Chavimochic & Jequetepeque irrigation influence zones) |
| **Languages** | Bilingual UI (`EN` / `ES` instant toggle) |

---

## 2. The Problem & Our Solution

### The Challenge on Peru's Northern Coast
Across the arid coastal valleys of La Libertad, **local rainfall covers only ~6% of annual crop water demand** — agricultural production depends almost entirely on regulated canal irrigation (Chavimochic and Jequetepeque) and groundwater turns. At the same time:
- **Extreme El Niño Costero shocks** bring sudden thermal anomalies (up to **+3.2 °C** above climatology) and intense rainfall bursts (such as **~75 mm in March 2017** versus **~19 mm** in a normal March), damaging flowering and harvest stages.
- **Repeated monocultures** (e.g., continuous rice, sugarcane, or yellow maize) deplete soil organic structure, intensify pest pressure, and accelerate **secondary soil salinization**.

### Solution: 3 Simple Steps — *"ChacraSat suggests, the farmer decides"*
ChacraSat translates orbital Earth observations into actionable, plain-language crop rotation recommendations in three steps:

1. **Farm Profile Input:** The user selects their coastal valley, current crop (or fallow), soil texture (`sandy`, `loam`, `clay`), soil salinity level (`low`, `medium`, `high`), irrigation water availability (`reliable canal`, `well / shared turns`, `limited`), planting start month, and primary goal (`rebuild soil`, `save water`, `better income`, or `resist El Niño`).
2. **NASA Agroclimatic Telemetry:** ChacraSat queries real historical (2010–2024 monthly series) and climatological observations from the **NASA POWER API** (`power.larc.nasa.gov`), backed by **NASA GMAO MERRA-2** and **CERES** datasets (temperature, precipitation, solar irradiance, relative humidity, and root-zone soil wetness).
3. **18-Month Crop Rotation Planner:** An agronomic scoring engine evaluates every valid 2- and 3-crop sequence across **10 northern-coast candidate crops** (yellow maize, rice, sweet potato, common bean, Lima bean/*pallar*, quinoa, cotton, sorghum, squash/*zapallo*, and crotalaria green manure) and compares the **Top 3 diversified rotations** against a **keep-the-same-crop monoculture baseline** across five transparent 0–100 scores:
   - **Soil Health** (legume nitrogen fixation, botanical family changes, cover crops, deep roots, residue, monoculture penalty)
   - **Water Efficiency** (monthly crop demand vs. valley $ET_o$, effective rainfall, and canal/well capacity cap)
   - **Salinity Tolerance** (FAO-29 crop $EC_e$ thresholds vs. field salinity)
   - **El Niño Resilience** (flowering/harvest-stage heat and excess-rain vulnerability under historical 2017/2023 anomalies)
   - **Estimated Income** (indicative relative commercial return weighted over the 18-month horizon)

Every recommendation includes plain-language explanations tailored for farmers, field agronomists, and irrigation boards (*Juntas de Riego*).

---

## 3. How We Use NASA Data (Scientific Traceability)

ChacraSat maintains direct, verifiable traceability from raw NASA satellite/reanalysis feeds to farm-level decisions:

```text
NASA POWER API (power.larc.nasa.gov/api/temporal, community=AG)
   ├── Climatology: T2M, T2M_MAX, T2M_MIN, PRECTOTCORR, ALLSKY_SFC_SW_DWN, RH2M, GWETROOT
   └── Monthly Series (2010–2024): T2M, PRECTOTCORR, GWETROOT
         │
         ▼
Resilient Client Cache & Fallback (src/lib/nasa-power-cache.ts)
   ├── Tier 1: Live NASA POWER fetch (strict <= 2,000 ms AbortController timeout)
   ├── Tier 2: Browser localStorage cache (24-hour TTL)
   └── Tier 3: Precalculated embedded NASA POWER dataset (retrieved 2026-11-15 in src/lib/chacra-data.ts)
         │
         ▼
Agroclimatic & Agronomic Engine (src/lib/chacra-data.ts)
   ├── Ra(lat, month) & computeClimate(): FAO-56 Hargreaves ETo (mm/month)
   ├── computeNinoDelta(): Historical 2017 & 2023 JFM thermal/rain anomaly extraction
   ├── evaluateRotation(): 18-month water balance (Kc * ETo - 0.8 * Rain), FAO-29 ECe fit,
   │                       family diversification & El Niño late-stage stress test
   └── computeRotations(): Priority-weighted ranking -> Top 3 diversified plans vs. Monoculture
```

### Valley Grid Cell Selection Note
In the NASA POWER grid, the inland coordinate over Trujillo city sits at ~1,872 m elevation (Andean foothills). To faithfully represent the coastal agricultural plains, ChacraSat targets the **coastal cell (`-79.10, -8.11`, 147.69 m)** for Moche and Chicama, alongside valley-specific coordinates for Virú (`-78.76, -8.41`), Chao (`-78.68, -8.53`), and Jequetepeque (`-79.50, -7.32`).

---

## 4. Codebase Architecture

```text
chacra-sat/
├── src/
│   ├── app/
│   │   ├── page.tsx                  # "/" — Bilingual hero, northern coast context & NASA telemetry overview
│   │   ├── planner/page.tsx          # "/planner" — Interactive 18-month crop rotation planner & charts
│   │   ├── metodologia/page.tsx      # "/metodologia" — NASA POWER parameters, FAO-56/FAO-29 formulas & crop table
│   │   ├── acerca/page.tsx           # "/acerca" — Team Trujillo Orbital, mission & open-science principles
│   │   ├── layout.tsx                # Root App Router layout, Space Grotesk & Inter fonts, LanguageProvider
│   │   ├── globals.css               # Tailwind CSS v4 theme & ChacraSat brand tokens
│   │   ├── manifest.ts               # Web app manifest
│   │   ├── robots.ts                 # Search crawler configuration
│   │   ├── sitemap.ts                # Dynamic XML sitemap
│   │   ├── opengraph-image.tsx       # Dynamic Open Graph preview image
│   │   ├── twitter-image.tsx         # Dynamic Twitter/X preview image
│   │   ├── error.tsx / global-error.tsx / not-found.tsx
│   ├── components/
│   │   ├── home/home-view.tsx        # Landing view with live NASA POWER valley sync
│   │   ├── dashboard/
│   │   │   ├── planner-client-page.tsx
│   │   │   ├── dashboard-view.tsx    # Farm profile form, Top 3 rotation cards & Chart.js visualizations
│   │   │   └── how-it-works-section.tsx
│   │   ├── pages/
│   │   │   ├── methodology-view.tsx  # Methodology & scientific reference breakdown
│   │   │   └── about-view.tsx        # Team & project governance view
│   │   ├── layout/
│   │   │   ├── header.tsx            # Sticky navigation, live NASA/Reference status badge & EN/ES toggle
│   │   │   ├── footer.tsx            # Valley links, NASA/FAO references & non-endorsement notice
│   │   │   └── not-found-content.tsx
│   │   └── ui/                       # shadcn/ui (base-nova) primitives: badge, button, card, label, select, separator, tabs, textarea
│   ├── context/
│   │   └── language-context.tsx      # Client-side EN/ES language state & NASA data source status
│   ├── i18n/
│   │   └── translations.ts           # Bilingual EN/ES UI dictionary
│   └── lib/
│       ├── chacra-data.ts            # Embedded NASA POWER store, FAO-56 Hargreaves ETo, FAO-29 & rotation engine
│       ├── nasa-power-cache.ts       # 2s timeout NASA POWER fetcher + 24h localStorage cache + fallback
│       ├── site.ts                   # Canonical URL resolution & page SEO metadata
│       ├── og-image.tsx              # Shared OG image renderer
│       └── utils.ts                  # cn() class-merging helper
├── data-src/                         # Original standalone HTML prototype & project brief
├── package.json                      # Dependencies, scripts & Apache-2.0 metadata
├── components.json                   # shadcn/ui configuration (base-nova, Lucide icons)
├── next.config.ts                    # Next.js 16 config (React Compiler, cacheComponents, Turbopack)
├── CITATION.cff                      # GitHub Open Science citation metadata
├── LICENSE                           # Apache License 2.0
└── .env.example                      # Optional environment variable template
```

---

## 5. Tech Stack

| Layer | Technology & Version | Purpose |
| :--- | :--- | :--- |
| **Framework** | **Next.js `16.4.6`** (App Router, Turbopack, `cacheComponents`, `reactCompiler`) | Full-stack React framework & static/dynamic route optimization |
| **UI Runtime** | **React `19.3.0`** & **React DOM `19.3.0`** | Component rendering with React Compiler |
| **Language** | **TypeScript `^5`** | Static type safety across scientific models and UI |
| **Styling** | **Tailwind CSS `4.3.3`** (`@tailwindcss/turbopack`, `tw-animate-css`) | Utility-first styling with CSS design tokens |
| **UI Components** | **shadcn/ui `^4.23.0`** (`base-nova`) on **`@base-ui/react` `^1.9.0`** | Accessible UI primitives (`Card`, `Select`, `Tabs`, `Badge`, `Button`) |
| **Icons & Charts** | **Lucide React `^1.73.0`** & **Chart.js `^4.6.1`** | Agroclimatic iconography & monthly $ET_o$/water-balance charts |
| **Package Manager** | **pnpm `12.21.0`** | Fast, deterministic dependency management |
| **Hosting** | **Vercel** | Edge-cached production hosting at [chacra-sat.vercel.app](https://chacra-sat.vercel.app/) |

---

## 6. Local Installation & Development

### Prerequisites
- **Node.js** `20.x` or later (LTS recommended)
- **pnpm** `12.x` (`corepack enable` or `npm install -g pnpm`)

### Step-by-Step Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/juliocas-ai/chacra-sat.git
   cd chacra-sat
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Configure optional environment variables (optional)**  
   ChacraSat requires **no API keys** to fetch public NASA POWER data. If you self-host outside Vercel and want custom canonical metadata URLs, copy the template:
   ```bash
   cp .env.example .env.local
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Production build & lint verification**
   ```bash
   pnpm lint
   pnpm build
   pnpm start
   ```

---

## 7. NASA Open Data & Scientific References

All agroclimatic datasets and agronomic equations used in ChacraSat are grounded in open public science:

1. **NASA POWER Project (Prediction Of Worldwide Energy Resources) — Agroclimatology Archive:**  
   [https://power.larc.nasa.gov/](https://power.larc.nasa.gov/)  
   Used for point-level climatology and 2010–2024 monthly series (`T2M`, `T2M_MAX`, `T2M_MIN`, `PRECTOTCORR`, `ALLSKY_SFC_SW_DWN`, `RH2M`, `GWETROOT`).
2. **NASA Global Modeling and Assimilation Office (GMAO) MERRA-2 & CERES Radiative Fluxes:**  
   [https://gmao.gsfc.nasa.gov/reanalysis/MERRA-2/](https://gmao.gsfc.nasa.gov/reanalysis/MERRA-2/)  
   Underlying meteorological assimilation and surface solar irradiance products distributed via NASA POWER.
3. **FAO Irrigation and Drainage Paper No. 56:**  
   Allen, R. G., Pereira, L. S., Raes, D., & Smith, M. (1998). *Crop Evapotranspiration — Guidelines for Computing Crop Water Requirements*. Food and Agriculture Organization of the United Nations (FAO), Rome.  
   [https://www.fao.org/4/x0490e/x0490e00.htm](https://www.fao.org/4/x0490e/x0490e00.htm)  
   Used for extraterrestrial radiation ($R_a$), Hargreaves reference evapotranspiration ($ET_o$), and crop water coefficients ($K_c$).
4. **FAO Irrigation and Drainage Paper No. 29:**  
   Ayers, R. S., & Westcot, D. W. (1985). *Water Quality for Agriculture*. Food and Agriculture Organization of the United Nations (FAO), Rome.  
   [https://www.fao.org/4/t0234e/t0234e00.htm](https://www.fao.org/4/t0234e/t0234e00.htm)  
   Used for crop root-zone electrical conductivity salinity tolerance thresholds ($EC_e$, dS/m).

---

## 8. Third-Party Materials & Open Source Licenses

In compliance with the **2026 NASA Space Apps Participant Terms & Conditions ("Use of Third-Party Materials")**, every third-party software library and typography asset used in this project (from `package.json` and `src/app/layout.tsx`) is documented below with its respective license:

| Package / Asset | Version (in `package.json`) | License | Role |
| :--- | :--- | :--- | :--- |
| `next` | `16.4.6` | MIT | React App Router framework & build toolchain |
| `react` / `react-dom` | `19.3.0` | MIT | UI rendering runtime |
| `@base-ui/react` | `^1.9.0` | MIT | Accessible headless UI primitives |
| `shadcn` | `^4.23.0` | MIT | UI component scaffolding (`base-nova` style) |
| `class-variance-authority` | `^0.7.1` | Apache-2.0 | Variant styling utilities |
| `cn` | `^0.5.2` | MIT | Conditional Tailwind class utility |
| `tailwindcss` / `@tailwindcss/turbopack` | `4.3.3` | MIT | Utility-first CSS framework & Turbopack loader |
| `tw-animate-css` | `^1.4.0` | MIT | CSS animation utilities |
| `lucide-react` | `^1.73.0` | ISC | Open-source SVG icon library |
| `chart.js` | `^4.6.1` | MIT | Interactive monthly climate & $ET_o$ charting |
| `typescript` | `^5` | Apache-2.0 | Static type checker |
| `eslint` / `eslint-config-next` | `^9` / `16.4.6` | MIT | Code quality & Next.js linting rules |
| `babel-plugin-react-compiler` | `1.0.0` | MIT | React Compiler build optimization |
| `@types/node`, `@types/react`, `@types/react-dom` | `^20`, `^19`, `^19` | MIT | TypeScript type definitions |
| Google Fonts (`Space Grotesk`, `Inter`) | Loaded via `next/font/google` | SIL OFL 1.1 | Open-source heading and body typography |

---

## 9. Super Intelligence (SI) Disclosure

In accordance with the **2026 NASA Space Apps Challenge FAQ** and the **September 29, 2026 U.S. Executive Order** terminology regarding **Super Intelligence (SI)** tools:

- **How SI tools were used:** Large Language Models (LLMs) and AI coding assistants were used strictly as productivity aids for Next.js/TypeScript code scaffolding, responsive `shadcn/ui` component refinement, and bilingual (`EN`/`ES`) documentation drafting and translation.
- **Human authorship & scientific verification:** All problem framing for La Libertad's coastal valleys, agronomic domain modeling, FAO-56 Hargreaves $ET_o$ and FAO-29 salinity scoring logic, NASA POWER coordinate/cell verification, El Niño Costero historical stress parameterization, and final solution architecture were conceived, implemented, reviewed, and verified by **Team Trujillo Orbital** (Flavia Villacorta, Yesica Castillo Olivares, and Julio Castillo).

---

## 10. License & Legal Disclaimers

### Open Source License
All original source code, documentation, and creative materials created by Team Trujillo Orbital in this repository are licensed under the **[Apache License, Version 2.0](./LICENSE)** (an Open Source Initiative-approved license).

### NASA Non-Endorsement Disclaimer
> **NASA does not endorse this non-U.S. Government product or service.**  
> Reference to any specific commercial product, process, or service by trade name, trademark, manufacturer, or otherwise does not constitute or imply its endorsement, recommendation, or favoring by the National Aeronautics and Space Administration (NASA) or the United States Government.

### Agronomic Decision-Support Disclaimer
ChacraSat is an open-source educational and agronomic decision-support prototype developed for the 2026 NASA Space Apps Challenge. All water demand ($ET_o$), soil salinity fit, El Niño resilience, and relative income metrics are **indicative planning estimates** derived from gridded satellite/reanalysis data and standard FAO guidelines — they do **not** constitute commercial financial advice, yield guarantees, or binding agronomic prescriptions. Farmers and irrigation boards (*Juntas de Riego*) should validate final planting decisions with local field measurements and certified agronomists.
