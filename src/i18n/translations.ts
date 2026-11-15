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

    // Navigation
    home: "← Inicio",
    navHome: "Inicio",
    navPlanner: "Planificador",
    navMethodology: "Metodología",
    navAbout: "Proyecto",
    quickActionPlanner: "Abrir planificador",

    // Home Landing UI (from index22.html & MD spec)
    hKicker: "NASA Space Apps Challenge 2026 · Field Shift",
    hTitle: "Datos satelitales para decidir qué sembrar después",
    hLead:
      "ChacraSat ayuda a los agricultores de la costa norte del Perú a elegir rotaciones de cultivo que ahorran agua, recuperan el suelo y resisten El Niño — con datos reales de observación de la Tierra de la NASA.",
    hCta: "Abrir el planificador de rotaciones",
    hHow: "Cómo funciona ↓",
    hValleysLabel: "Acceso rápido por valle (La Libertad):",
    hProbT: "Lo que muestran los datos NASA en Trujillo",
    hProbS:
      "Valores reales del registro NASA POWER para los valles costeros de La Libertad.",
    hS1t: "Casi no llueve",
    hS1p: "Parte de la demanda anual de agua de los cultivos que cubre la lluvia. Todo depende del riego.",
    hS2t: "Golpes de El Niño",
    hS3t: "Olas de calor",
    hS3p: "Mayor anomalía mensual de temperatura en 2010–2024, usada para poner a prueba cada rotación.",
    hHowT: "Cómo funciona",
    hHowS: "Tres pasos simples. ChacraSat sugiere — el agricultor decide.",
    hW1t: "Describe tu chacra",
    hW1p: "Valle, cultivo actual, suelo, salinidad, agua de riego y lo que más te importa.",
    hW2t: "Mira lo que ve la NASA",
    hW2p: "Temperatura, lluvia y humedad del suelo de NASA POWER, convertidas en demanda mensual de agua (FAO-56).",
    hW3t: "Compara 3 rotaciones",
    hW3p: "Los mejores planes de 18 meses con cinco puntajes — suelo, agua, salinidad, El Niño, ingresos — y razones simples.",
    hWhoT: "Para quién es",
    hWhoS:
      "Diseñado para la realidad hídrica y edáfica de los valles costeros del norte peruano.",
    hU1t: "Agricultores",
    hU1p: "Pequeños y medianos productores de los valles de Moche, Virú, Chao, Chicama y Jequetepeque.",
    hU2t: "Agrónomos",
    hU2p: "Técnicos y agencias agrarias que asesoran a los agricultores cada campaña.",
    hU3t: "Juntas de riego",
    hU3p: "Juntas de usuarios que planifican cómo repartir el agua escasa del canal.",
    hFoot:
      "Equipo Trujillo Orbital · Flavia Villacorta, Yesica Castillo Olivares, Julio Castillo · Datos: NASA POWER",
    hCtaCardTitle: "¿Listo para planificar los próximos 18 meses de tu chacra?",
    hCtaCardSub:
      "Compara secuencias de cultivos con datos climáticos reales de la NASA para tu valle en menos de un minuto.",

    // Planner Steps
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

    // NASA Data Loader Card
    load: "Datos NASA",
    loadClimOk: "Climatología NASA cargada (incluida, descargada el 15 nov 2026)",
    loadMonOk: "Historia mensual NASA 2010–2024 cargada",
    loadNone:
      "Usando valores de referencia. Abre los enlaces para consultar el registro NASA POWER.",
    openClim: "Ver datos crudos de clima NASA POWER ↗",
    openMon: "Ver registro mensual crudo NASA POWER ↗",

    // How ChacraSat Works Section
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

    // Footer & References
    howTitle: "Cómo funciona ChacraSat",
    how: "1) Describes tu chacra y tus prioridades. 2) ChacraSat lee los datos climáticos NASA POWER de tu valle (temperatura, lluvia, radiación solar y humedad del suelo en la zona de raíces) y calcula la demanda mensual de agua con el método Hargreaves de la FAO-56. 3) Arma todas las secuencias posibles de 3 cultivos con 10 cultivos de la costa norte y puntúa cada una con cinco criterios transparentes: salud del suelo (leguminosas, abonos verdes, cambio de familia, raíces), agua de riego (coeficiente del cultivo × demanda NASA menos lluvia NASA), tolerancia a sales (umbrales FAO), resistencia a El Niño (calor y lluvia fuerte con el mayor calentamiento del registro NASA) e ingreso relativo. 4) Los puntajes se ponderan según tu prioridad y se muestran las 3 mejores junto a “seguir con el mismo cultivo”. Los valores de cultivos son indicativos y deben validarse con agrónomos locales.",
    srcTitle: "Datos y referencias",
    src: "NASA POWER (Prediction Of Worldwide Energy Resources) API — parámetros T2M, T2M_MAX, T2M_MIN, PRECTOTCORR, ALLSKY_SFC_SW_DWN, RH2M, GWETROOT (derivados de productos NASA GMAO MERRA-2/GEOS y CERES), https://power.larc.nasa.gov · FAO Riego y Drenaje 56 (Allen et al., 1998) — coeficientes de cultivo y ETo Hargreaves · FAO Riego y Drenaje 29 (Ayers y Westcot, 1985) — tolerancia a sales · Los valores de referencia mostrados antes de cargar datos NASA son aproximados y no son datos NASA.",
    team_prefix: "Hecho durante el hackatón por el equipo ",
    team_name: "Trujillo Orbital",
    team_suffix:
      " (Flavia Villacorta, Yesica Castillo Olivares, Julio Castillo — Trujillo, Perú) para el NASA Space Apps Challenge 2026 — “Field Shift: Adapting Farms with NASA Data”.",
    footerNavTitle: "Explorar plataforma",
    footerValleysTitle: "Valles de La Libertad",
    footerSourcesTitle: "Fuentes científicas y APIs",
    footerPrivacy:
      "100% procesamiento local en tu navegador · Sin rastreo · Datos abiertos NASA POWER",

    // Chart & Score Labels
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

    // 404 Not Found & Error Boundaries
    notFoundBadge: "Error 404 · Fuera de órbita",
    notFoundTitle: "No encontramos esta parcela ni esta ruta",
    notFoundDesc:
      "La página que buscas no existe o fue movida. Regresa al inicio o abre directamente el planificador interactivo de rotaciones.",
    notFoundBackHome: "Volver al inicio",
    notFoundGoPlanner: "Ir al planificador de rotaciones",
    errorBadge: "Alerta del sistema",
    errorTitle: "Ocurrió un problema al cargar esta vista",
    errorDesc:
      "No pudimos procesar la solicitud en este momento. Tus datos agrícolas siguen seguros en tu navegador.",
    errorRetry: "Intentar de nuevo",
    loadingText: "Sincronizando telemetría agroclimática NASA POWER…",
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

    // Navigation
    home: "← Home",
    navHome: "Home",
    navPlanner: "Planner",
    navMethodology: "Methodology",
    navAbout: "About",
    quickActionPlanner: "Open planner",

    // Home Landing UI (from index22.html & MD spec)
    hKicker: "NASA Space Apps Challenge 2026 · Field Shift",
    hTitle: "Satellite data to decide what to plant next",
    hLead:
      "ChacraSat helps farmers on Peru's desert northern coast choose crop rotations that save water, rebuild soil and resist El Niño — using real NASA Earth observations.",
    hCta: "Open the rotation planner",
    hHow: "How it works ↓",
    hValleysLabel: "Quick jump by valley (La Libertad):",
    hProbT: "What NASA data shows around Trujillo",
    hProbS:
      "Real values from the NASA POWER record for the coastal valleys of La Libertad.",
    hS1t: "Almost no rain",
    hS1p: "Share of yearly crop water demand covered by rain. Every crop depends on irrigation.",
    hS2t: "El Niño shocks",
    hS3t: "Heat waves",
    hS3p: "Warmest monthly temperature anomaly in 2010–2024, used to stress-test every rotation.",
    hHowT: "How it works",
    hHowS: "Three simple steps. ChacraSat suggests — the farmer decides.",
    hW1t: "Describe your field",
    hW1p: "Valley, current crop, soil, salinity, irrigation water and what matters most to you.",
    hW2t: "See what NASA sees",
    hW2p: "Temperature, rain and soil wetness from NASA POWER, turned into monthly crop water demand (FAO-56).",
    hW3t: "Compare 3 rotations",
    hW3p: "The best 18-month plans with five scores — soil, water, salinity, El Niño, income — and plain reasons.",
    hWhoT: "Who it is for",
    hWhoS:
      "Built for the water and soil reality of Peru's northern coastal valleys.",
    hU1t: "Farmers",
    hU1p: "Small and medium growers in the Moche, Virú, Chao, Chicama and Jequetepeque valleys.",
    hU2t: "Agronomists",
    hU2p: "Technicians and local agricultural agencies who advise farmers each season.",
    hU3t: "Irrigation boards",
    hU3p: "Water user associations planning how to share scarce canal water.",
    hFoot:
      "Team Trujillo Orbital · Flavia Villacorta, Yesica Castillo Olivares, Julio Castillo · Data: NASA POWER",
    hCtaCardTitle: "Ready to plan the next 18 months for your farm?",
    hCtaCardSub:
      "Compare crop sequences backed by real NASA climate records for your valley in under a minute.",

    // Planner Steps
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

    // NASA Data Loader Card
    load: "NASA data",
    loadClimOk: "NASA climatology loaded (built in, retrieved Nov 15, 2026)",
    loadMonOk: "NASA monthly history 2010–2024 loaded",
    loadNone:
      "Showing reference values. Open the links to inspect raw NASA POWER records.",
    openClim: "View raw NASA POWER climate data ↗",
    openMon: "View raw NASA POWER monthly record ↗",

    // How ChacraSat Works Section
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

    // Footer & References
    howTitle: "How ChacraSat works",
    how: "1) You describe your field and priorities. 2) ChacraSat reads NASA POWER satellite-based climate data for your valley (temperature, rain, solar radiation and root-zone soil wetness) and computes monthly crop water demand with the FAO-56 Hargreaves method. 3) It builds every possible 3-crop sequence from 10 crops grown on the northern coast and scores each one on five transparent criteria: soil health (legumes, cover crops, plant-family changes, roots), irrigation water need (crop coefficient × NASA-based demand minus NASA rain), salinity fit (FAO salt-tolerance thresholds), El Niño resilience (heat and heavy-rain exposure under the strongest warming seen in NASA's record) and relative income. 4) Scores are weighted by your priority, and the top 3 are shown next to “keep the same crop”. Crop values are indicative and should be validated with local agronomists.",
    srcTitle: "Data & references",
    src: "NASA POWER (Prediction Of Worldwide Energy Resources) API — parameters T2M, T2M_MAX, T2M_MIN, PRECTOTCORR, ALLSKY_SFC_SW_DWN, RH2M, GWETROOT (derived from NASA GMAO MERRA-2/GEOS and CERES satellite products), https://power.larc.nasa.gov · FAO Irrigation & Drainage Paper 56 (Allen et al., 1998) — crop coefficients and Hargreaves ETo · FAO Irrigation & Drainage Paper 29 (Ayers & Westcot, 1985) — salt tolerance · Reference values shown before loading NASA data are approximate and are not NASA data.",
    team_prefix: "Built during the hackathon by team ",
    team_name: "Trujillo Orbital",
    team_suffix:
      " (Flavia Villacorta, Yesica Castillo Olivares, Julio Castillo — Trujillo, Peru) for the 2026 NASA Space Apps Challenge — “Field Shift: Adapting Farms with NASA Data”.",
    footerNavTitle: "Explore platform",
    footerValleysTitle: "La Libertad Valleys",
    footerSourcesTitle: "Scientific sources & APIs",
    footerPrivacy:
      "100% local in-browser processing · Zero tracking · NASA POWER Open Data",

    // Chart & Score Labels
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

    // 404 Not Found & Error Boundaries
    notFoundBadge: "Error 404 · Out of orbit",
    notFoundTitle: "We couldn't find this field or route",
    notFoundDesc:
      "The page you are looking for doesn't exist or has moved. Return home or jump straight into the interactive rotation planner.",
    notFoundBackHome: "Back to home",
    notFoundGoPlanner: "Open rotation planner",
    errorBadge: "System alert",
    errorTitle: "Something went wrong loading this view",
    errorDesc:
      "We couldn't complete this request right now. Your farm settings remain safe in your browser.",
    errorRetry: "Try again",
    loadingText: "Syncing NASA POWER agroclimatic telemetry…",
  },
} as const;

export type TranslationKey = keyof typeof translations.es;

export const i18nFormatters = {
  es: {
    hS2p: (n: number) =>
      `Lluvia de marzo 2017, con El Niño costero, frente a unos ${n} mm en un marzo normal.`,
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
    hS2p: (n: number) =>
      `Rain in March 2017, during the coastal El Niño, vs. about ${n} mm in a normal March.`,
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
