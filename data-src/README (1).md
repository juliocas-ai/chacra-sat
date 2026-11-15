# ChacraSat — From orbit to the chacra

Smarter crop rotations for Peru's northern coast, powered by NASA Earth observations.

**2026 NASA Space Apps Challenge** · Challenge: *Field Shift: Adapting Farms with NASA Data*
**Team Trujillo Orbital** (Trujillo, Peru): Flavia Villacorta, Yesica Castillo Olivares, Julio Castillo

## What it does
ChacraSat is a free, bilingual (English/Spanish) web decision-support tool. A farmer describes their field (valley, current crop, soil texture, salinity, irrigation water, main priority). ChacraSat combines this with NASA POWER data for that valley, computes monthly crop water demand with the FAO-56 Hargreaves method, tests every 2–3 crop sequence from 10 crops of the northern coast, and shows the 3 best 18-month rotations with five transparent scores (soil health, water, salinity fit, El Niño resilience, income) and plain-language reasons, next to "keep the same crop". ChacraSat suggests; the farmer decides.

## NASA data
NASA POWER API (Agroclimatology): T2M, T2M_MAX, T2M_MIN, PRECTOTCORR, ALLSKY_SFC_SW_DWN, RH2M, GWETROOT (climatology) and monthly T2M and PRECTOTCORR for 2010–2024. Data retrieved on 15 November 2026 and built into `index.html`; the app can also download fresh data live from https://power.larc.nasa.gov.

The POWER cell over Trujillo city has a mean elevation of 1,872 m (Andes foothills), so the coastal cell (148 m) is used for the Moche and Chicama valleys.

## Run it
Open `index.html` in any browser. No installation, no account.

## References
- NASA POWER — https://power.larc.nasa.gov
- Allen et al. (1998). FAO Irrigation and Drainage Paper 56 — crop coefficients, Hargreaves ETo.
- Ayers & Westcot (1985). FAO Irrigation and Drainage Paper 29 — salt tolerance.
- Chart.js (MIT license).

Crop values are indicative and should be validated with local agronomists.

## Use of AI
Built with help from Claude (Anthropic) for coding, data checking and English drafting. All NASA values come directly from the NASA POWER API.
