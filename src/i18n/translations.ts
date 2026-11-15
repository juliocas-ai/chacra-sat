export type Language = "es" | "en";

export const translations = {
  es: {
    subtitle:
      "De la órbita a la chacra: rotaciones de cultivo más inteligentes para la costa norte del Perú",
    tagline:
      "De la órbita a la chacra: rotaciones de cultivo más inteligentes para la costa norte del Perú",
    system_status: "Sistema activo",
    data_status: "Datos reales NASA POWER",
    badgeNasa: "✅ Datos reales NASA POWER",
    badgeRef: "⚠️ Valores de referencia — carga datos NASA",
    welcome: "Bienvenido a ChacraSat",
    intro:
      "Plataforma de apoyo para la planificación de rotaciones de cultivos en la costa norte del Perú.",
    dashboard: "Panel agrícola",
    dashboard_description:
      "Planificación de rotaciones, indicadores satelitales NASA POWER y prueba de estrés El Niño.",
    s1: "Tu chacra",
    s1sub: "Cuéntanos de tu campo. Todo se queda en tu navegador.",
    valley: "Valle (La Libertad, Perú)",
    current: "Cultivo actual o anterior",
    soil: "Textura del suelo",
    salt: "Salinidad del suelo",
    water: "Agua de riego",
    start: "Próximo mes de siembra",
    priority: "¿Qué es lo más importante para ti?",
    decide_prefix: "🌱 ChacraSat sugiere — ",
    decide_bold: "tú decides",
    decide_suffix:
      ". Compara estas opciones con tu experiencia y con tu agencia agraria.",
    s2: "Lo que ven los satélites de la NASA sobre tu chacra",
    stRain: "Lluvia al año",
    stEto: "Demanda de agua del cultivo al año (ETo)",
    stTmax: "Mes más caluroso (máx. prom.)",
    stWet: "Humedad del suelo (raíces)",
    s3: "Opciones de rotación para los próximos 18 meses",
    s3sub:
      "Ordenadas según tu prioridad. Cada puntaje se explica — sin cajas negras.",
    nino: "Prueba de estrés El Niño",
    ninosub:
      "El Niño costero (como en 2017 y 2023) trae calor y lluvias fuertes a Trujillo. Repasamos el registro mensual de la NASA para medir esos golpes.",
    load: "Datos NASA",
    fetch: "Descargar datos NASA ahora",
    openClim: "Abrir link de clima NASA POWER",
    openMon: "Abrir link de historia mensual NASA POWER",
    pasteHelp:
      "Si la descarga automática está bloqueada, abre los links, copia todo el texto (o guárdalo como archivo) y pégalo o súbelo aquí:",
    usePaste: "Usar datos pegados",
    uploadJson: "Subir archivo JSON",
    howTitle: "Cómo funciona ChacraSat",
    srcTitle: "Datos y referencias",
    team_prefix: "Hecho durante el hackatón por el equipo ",
    team_name: "Trujillo Orbital",
    team_suffix:
      " (Flavia Villacorta, Yesica Castillo Olivares, Julio Castillo — Trujillo, Perú) para el NASA Space Apps Challenge 2026 — “Field Shift: Adapting Farms with NASA Data”.",
    tmax: "Temp. máx (°C)",
    tmin: "Temp. mín (°C)",
    rain: "Lluvia (mm/mes)",
    eto: "Demanda de agua ETo (mm/mes)",
    wet: "Humedad del suelo (0–1)",
    best: "Mejor opción",
    opt: "Opción",
    score: "puntaje",
    irrig: "Riego necesario",
    bSoil: "Salud del suelo",
    bWater: "Agua",
    bSalt: "Tolera salinidad",
    bNino: "Resiste El Niño",
    bInc: "Ingresos",
    baselineTitle: "Si sigues con el mismo cultivo:",
    baselineScore: "puntaje",
    vs: "vs. la mejor opción",
    fallowM: "desc.",
    noOpt:
      "Ninguna rotación encaja con estas condiciones. Prueba otro suelo u otra opción de agua.",
    ninoNoData:
      "Carga la historia mensual NASA (botón abajo) para repasar 2010–2024 y medir El Niño con datos reales. Mientras tanto, la prueba usa un escenario de +2 °C.",
    rainSeries: "Lluvia mensual (mm)",
    tAnom: "Anomalía de temperatura (°C)",
    loadNone:
      "Aún no hay datos NASA cargados. Pulsa “Descargar datos NASA ahora”. Si tu navegador lo bloquea, usa los links y pega el texto abajo.",
    loadClimOk:
      "Climatología NASA cargada (incluida, descargada el 15 nov 2026)",
    loadMonOk: "Historia mensual NASA 2010–2024 cargada",
    fetchFail:
      "Aquí se bloqueó la descarga automática. Usa los links y pega el texto, o sube el archivo guardado.",
    fetching: "Descargando de NASA POWER…",
    pasteErr:
      "Eso no parece JSON de NASA POWER. Copia todo el texto de la página e inténtalo de nuevo.",
    how: "1) Describes tu chacra y tus prioridades. 2) ChacraSat lee los datos climáticos NASA POWER de tu valle (temperatura, lluvia, radiación solar y humedad del suelo en la zona de raíces) y calcula la demanda mensual de agua con el método Hargreaves de la FAO-56. 3) Arma todas las secuencias posibles de 3 cultivos con 10 cultivos de la costa norte y puntúa cada una con cinco criterios transparentes: salud del suelo (leguminosas, abonos verdes, cambio de familia, raíces), agua de riego (coeficiente del cultivo × demanda NASA menos lluvia NASA), tolerancia a sales (umbrales FAO), resistencia a El Niño (calor y lluvia fuerte con el mayor calentamiento del registro NASA) e ingreso relativo. 4) Los puntajes se ponderan según tu prioridad y se muestran las 3 mejores junto a “seguir con el mismo cultivo”. Los valores de cultivos son indicativos y deben validarse con agrónomos locales.",
    src: "NASA POWER (Prediction Of Worldwide Energy Resources) API — parámetros T2M, T2M_MAX, T2M_MIN, PRECTOTCORR, ALLSKY_SFC_SW_DWN, RH2M, GWETROOT (derivados de productos NASA GMAO MERRA-2/GEOS y CERES), https://power.larc.nasa.gov · FAO Riego y Drenaje 56 (Allen et al., 1998) — coeficientes de cultivo y ETo Hargreaves · FAO Riego y Drenaje 29 (Ayers y Westcot, 1985) — tolerancia a sales · Los valores de referencia mostrados antes de cargar datos NASA son aproximados y no son datos NASA.",
  },
  en: {
    subtitle:
      "From orbit to the chacra: smarter crop rotations for Peru's northern coast",
    tagline:
      "From orbit to the chacra: smarter crop rotations for Peru's northern coast",
    system_status: "System online",
    data_status: "Real NASA POWER data",
    badgeNasa: "✅ Real NASA POWER data",
    badgeRef: "⚠️ Reference values — load NASA data",
    welcome: "Welcome to ChacraSat",
    intro:
      "A decision-support platform for crop rotation planning on Peru's northern coast.",
    dashboard: "Agricultural dashboard",
    dashboard_description:
      "Rotation planning, NASA POWER satellite indicators and El Niño stress test.",
    s1: "Your field",
    s1sub: "Tell us about your farm. Everything stays in your browser.",
    valley: "Valley (La Libertad, Peru)",
    current: "Current or last crop",
    soil: "Soil texture",
    salt: "Soil salinity",
    water: "Irrigation water",
    start: "Next planting month",
    priority: "What matters most to you?",
    decide_prefix: "🌱 ChacraSat suggests — ",
    decide_bold: "you decide",
    decide_suffix:
      ". Compare these options with your own experience and your local agricultural agency.",
    s2: "What NASA satellites see over your field",
    stRain: "Rain per year",
    stEto: "Crop water demand per year (ETo)",
    stTmax: "Hottest month (avg. max)",
    stWet: "Root-zone soil wetness",
    s3: "Rotation options for the next 18 months",
    s3sub:
      "Ranked by your priority. Each score is explained — no black boxes.",
    nino: "El Niño stress test",
    ninosub:
      "Coastal El Niño events (like 2017 and 2023) bring heat and heavy rain to Trujillo. We replay NASA's monthly record to see how big those shocks were.",
    load: "NASA data",
    fetch: "Download NASA data now",
    openClim: "Open NASA POWER climate link",
    openMon: "Open NASA POWER monthly history link",
    pasteHelp:
      "If automatic download is blocked, open the links above, copy all the text (or save it as a file) and paste or upload it here:",
    usePaste: "Use pasted data",
    uploadJson: "Upload JSON file",
    howTitle: "How ChacraSat works",
    srcTitle: "Data & references",
    team_prefix: "Built during the hackathon by team ",
    team_name: "Trujillo Orbital",
    team_suffix:
      " (Flavia Villacorta, Yesica Castillo Olivares, Julio Castillo — Trujillo, Peru) for the 2026 NASA Space Apps Challenge — “Field Shift: Adapting Farms with NASA Data”.",
    tmax: "Max temp (°C)",
    tmin: "Min temp (°C)",
    rain: "Rain (mm/month)",
    eto: "Crop water demand ETo (mm/month)",
    wet: "Soil wetness (0–1)",
    best: "Best match",
    opt: "Option",
    score: "score",
    irrig: "Irrigation need",
    bSoil: "Soil health",
    bWater: "Water",
    bSalt: "Salinity fit",
    bNino: "El Niño resilience",
    bInc: "Income",
    baselineTitle: "If you keep the same crop:",
    baselineScore: "score",
    vs: "vs. best option",
    fallowM: "rest",
    noOpt:
      "No rotation fits these conditions. Try a different soil or water option.",
    ninoNoData:
      "Load the NASA monthly history (button below) to replay 2010–2024 and measure El Niño shocks with real NASA data. Until then the stress test uses a +2 °C scenario.",
    rainSeries: "Monthly rain (mm)",
    tAnom: "Temperature anomaly (°C)",
    loadNone:
      "No NASA data loaded yet. Click “Download NASA data now”. If your browser blocks it, use the links and paste the text below.",
    loadClimOk:
      "NASA climatology loaded (built in, retrieved Nov 15, 2026)",
    loadMonOk: "NASA monthly history 2010–2024 loaded",
    fetchFail:
      "Automatic download was blocked here. Use the links above and paste the text, or upload the saved file.",
    fetching: "Downloading from NASA POWER…",
    pasteErr:
      "That doesn't look like NASA POWER JSON. Copy the whole page text and try again.",
    how: "1) You describe your field and priorities. 2) ChacraSat reads NASA POWER satellite-based climate data for your valley (temperature, rain, solar radiation and root-zone soil wetness) and computes monthly crop water demand with the FAO-56 Hargreaves method. 3) It builds every possible 3-crop sequence from 10 crops grown on the northern coast and scores each one on five transparent criteria: soil health (legumes, cover crops, plant-family changes, roots), irrigation water need (crop coefficient × NASA-based demand minus NASA rain), salinity fit (FAO salt-tolerance thresholds), El Niño resilience (heat and heavy-rain exposure under the strongest warming seen in NASA's record) and relative income. 4) Scores are weighted by your priority, and the top 3 are shown next to “keep the same crop”. Crop values are indicative and should be validated with local agronomists.",
    src: "NASA POWER (Prediction Of Worldwide Energy Resources) API — parameters T2M, T2M_MAX, T2M_MIN, PRECTOTCORR, ALLSKY_SFC_SW_DWN, RH2M, GWETROOT (derived from NASA GMAO MERRA-2/GEOS and CERES satellite products), https://power.larc.nasa.gov · FAO Irrigation & Drainage Paper 56 (Allen et al., 1998) — crop coefficients and Hargreaves ETo · FAO Irrigation & Drainage Paper 29 (Ayers & Westcot, 1985) — salt tolerance · Reference values shown before loading NASA data are approximate and are not NASA data.",
  },
} as const;

export type TranslationKey = keyof typeof translations.es;

export const i18nFormatters = {
  es: {
    s2subNasa: (v: string, c: string, e: string | number) =>
      `Climatología mensual NASA POWER para ${v} (${c}; celda NASA de ≈50 km, altura media ${e} m). La demanda de agua (ETo) se calcula con temperaturas NASA y la ecuación de Hargreaves (FAO-56).`,
    s2subRef: (v: string) =>
      `Mostrando valores aproximados de referencia para ${v} hasta cargar los datos NASA (ver “Datos NASA” abajo).`,
    climNote: (p: number) =>
      `Según los datos NASA, la lluvia cubre solo cerca del ${p}% de la demanda de agua anual: todo cultivo depende del riego, por eso el agua es lo más importante.`,
    why_legume: (c: string) =>
      `${c} es leguminosa: fija nitrógeno del aire y el siguiente cultivo necesita menos fertilizante.`,
    why_cover: (c: string) =>
      `${c} cubre el suelo desnudo y le devuelve materia orgánica.`,
    why_family: (n: number) =>
      `Cambia de familia de planta ${n} veces y corta el ciclo de plagas y enfermedades.`,
    why_water: (mm: string, p: number, c: string) =>
      p > 0
        ? `Necesita unos ${mm} mm de riego — ${p}% menos agua que seguir con ${c}.`
        : `Necesita unos ${mm} mm de riego en 18 meses.`,
    why_salt: (c: string) =>
      `${c} tolera los suelos salinos comunes en la costa.`,
    why_nino_ok: (d: number) =>
      `Ningún cultivo sensible queda expuesto en un escenario de El Niño fuerte (+${d} °C).`,
    why_nino_bad: (n: number, d: number) =>
      `${n} mes(es) con riesgo de calor o lluvia fuerte en un El Niño fuerte (+${d} °C) — cuida las fechas de siembra.`,
    why_deep: (c: string) =>
      `${c} tiene raíces profundas que aflojan el suelo compactado.`,
  },
  en: {
    s2subNasa: (v: string, c: string, e: string | number) =>
      `NASA POWER monthly climatology for ${v} (${c}; NASA grid cell ≈50 km, mean elevation ${e} m). Crop water demand (ETo) is computed from NASA temperatures with the FAO-56 Hargreaves equation.`,
    s2subRef: (v: string) =>
      `Showing approximate reference values for ${v} until NASA data is loaded (see “NASA data” below).`,
    climNote: (p: number) =>
      `According to NASA data, rain covers only about ${p}% of the yearly crop water demand here — every crop depends on irrigation, so water use matters most.`,
    why_legume: (c: string) =>
      `${c} is a legume: it fixes nitrogen from the air, so the next crop needs less fertilizer.`,
    why_cover: (c: string) =>
      `${c} covers bare soil and returns organic matter.`,
    why_family: (n: number) =>
      `Changes plant family ${n} times, breaking pest and disease cycles.`,
    why_water: (mm: string, p: number, c: string) =>
      p > 0
        ? `Needs about ${mm} mm of irrigation — ${p}% less water than continuing with ${c}.`
        : `Needs about ${mm} mm of irrigation over 18 months.`,
    why_salt: (c: string) =>
      `${c} tolerates the salty soils common on the coast.`,
    why_nino_ok: (d: number) =>
      `No heat-sensitive crop is exposed under a strong El Niño scenario (+${d} °C).`,
    why_nino_bad: (n: number, d: number) =>
      `${n} month(s) of heat or heavy-rain risk under a strong El Niño scenario (+${d} °C) — plan planting dates carefully.`,
    why_deep: (c: string) =>
      `${c} has deep roots that loosen compacted soil.`,
  },
};
