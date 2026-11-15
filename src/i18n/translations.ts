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
    howSectionTitle: "¿Cómo funciona ChacraSat?",
    howSectionSubtitle:
      "Del registro de tu parcela al análisis climático con datos NASA POWER, en cuatro etapas transparentes para planificar los próximos 18 meses.",
    howStepLabel: "Paso",
    howStep1Title: "Configura tu chacra",
    howStep1Desc:
      "Indica tu valle de La Libertad, cultivo actual o anterior, textura y salinidad del suelo, agua de riego, mes de siembra y prioridad.",
    howStep2Title: "Analiza clima y agua NASA",
    howStep2Desc:
      "Lee datos mensuales NASA POWER de temperatura, lluvia, radiación y humedad en raíces, calcula la demanda ETo y revisa el historial El Niño.",
    howStep3Title: "Evalúa secuencias de cultivo",
    howStep3Desc:
      "Combina 10 cultivos de la costa norte en rotaciones compatibles con tu suelo y agua, y puntúa cinco criterios según tu prioridad.",
    howStep4Title: "Compara resultados y decide",
    howStep4Desc:
      "Muestra las 3 mejores opciones con su línea de tiempo a 18 meses, barras de puntaje y razones claras frente a seguir con el mismo cultivo.",
    howDisclaimerLabel: "Apoyo a la decisión:",
    howDisclaimerText:
      "Las recomendaciones de ChacraSat se basan en criterios transparentes de evaluación y en los datos ingresados para orientar la planificación agrícola; no garantizan rendimientos ni resultados en campo.",
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
      "Historia mensual 2010–2024 no disponible para este valle; la prueba usa un escenario de +2 °C.",
    rainSeries: "Lluvia mensual (mm)",
    tAnom: "Anomalía de temperatura (°C)",
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
    howSectionTitle: "How does ChacraSat work?",
    howSectionSubtitle:
      "From your field profile to NASA POWER climate analysis, in four transparent stages for planning the next 18 months.",
    howStepLabel: "Step",
    howStep1Title: "Configure your field",
    howStep1Desc:
      "Select your valley in La Libertad, current or previous crop, soil texture and salinity, irrigation water, planting month, and priority.",
    howStep2Title: "Analyze NASA climate & water",
    howStep2Desc:
      "Reads NASA POWER monthly temperature, rain, solar radiation, and root-zone wetness, computes ETo water demand, and checks El Niño history.",
    howStep3Title: "Evaluate crop sequences",
    howStep3Desc:
      "Builds rotations from 10 northern-coast crops compatible with your soil and water, scoring five criteria weighted by your priority.",
    howStep4Title: "Compare results & decide",
    howStep4Desc:
      "Displays the top 3 options with an 18-month timeline, score breakdown bars, and clear reasons compared against keeping your current crop.",
    howDisclaimerLabel: "Decision support:",
    howDisclaimerText:
      "ChacraSat recommendations are based on transparent evaluation criteria and your selected inputs to support agricultural planning; they do not guarantee field yields or outcomes.",
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
      "2010–2024 monthly history is unavailable for this valley; the stress test uses a +2 °C scenario.",
    rainSeries: "Monthly rain (mm)",
    tAnom: "Temperature anomaly (°C)",
    src: "NASA POWER (Prediction Of Worldwide Energy Resources) API — parameters T2M, T2M_MAX, T2M_MIN, PRECTOTCORR, ALLSKY_SFC_SW_DWN, RH2M, GWETROOT (derived from NASA GMAO MERRA-2/GEOS and CERES satellite products), https://power.larc.nasa.gov · FAO Irrigation & Drainage Paper 56 (Allen et al., 1998) — crop coefficients and Hargreaves ETo · FAO Irrigation & Drainage Paper 29 (Ayers & Westcot, 1985) — salt tolerance · Reference values shown before loading NASA data are approximate and are not NASA data.",
  },
} as const;

export type TranslationKey = keyof typeof translations.es;

export const i18nFormatters = {
  es: {
    s2subNasa: (v: string, c: string, e: string | number) =>
      `Climatología mensual NASA POWER para ${v} (${c}; celda NASA de ≈50 km, altura media ${e} m). La demanda de agua (ETo) se calcula con temperaturas NASA y la ecuación de Hargreaves (FAO-56).`,
    s2subRef: (v: string) =>
      `Mostrando valores aproximados de referencia para ${v}.`,
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
      `Showing approximate reference values for ${v}.`,
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
