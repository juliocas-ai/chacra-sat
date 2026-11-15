export type Language = "es" | "en";

export type ValleyId = "moche" | "viru" | "chao" | "chicama" | "jeque";
export type CropId =
  | "maize"
  | "rice"
  | "sweetpot"
  | "bean"
  | "pallar"
  | "quinoa"
  | "cotton"
  | "sorghum"
  | "squash"
  | "green"
  | "cane"
  | "aspar"
  | "fallow";
export type SoilId = "sandy" | "loam" | "clay";
export type SaltId = "low" | "med" | "high";
export type WaterId = "canal" | "well" | "limited";
export type PrioId = "soil" | "water" | "inc" | "nino";

export interface ValleyInfo {
  id: ValleyId;
  lat: number;
  lon: number;
  en: string;
  es: string;
}

export interface CropInfo {
  fam: string;
  m: number;
  kc?: number;
  extra?: number;
  salt?: number;
  heat?: number;
  rainSens?: number;
  inc?: number;
  residue?: boolean;
  legume?: boolean;
  cover?: boolean;
  deep?: boolean;
  needClay?: boolean;
  only?: boolean;
  color: string;
  en: string;
  es: string;
}

export interface ClimData {
  T2M: (number | null)[];
  T2M_MAX: (number | null)[];
  T2M_MIN: (number | null)[];
  RAIN: (number | null)[];
  GWETROOT: (number | null)[] | null;
  SOLAR: (number | null)[] | null;
  RH2M?: (number | null)[] | null;
  coords?: number[];
  embedded?: boolean;
}

export interface MonthlyRow {
  k: string;
  y: number;
  m: number;
  t: number | null;
  rain: number | null;
}

export interface MonthlyData {
  rows: MonthlyRow[];
  coords?: number[];
  embedded?: boolean;
}

export interface FieldState {
  valley: ValleyId;
  current: CropId;
  soil: SoilId;
  salt: SaltId;
  water: WaterId;
  start: number;
  prio: PrioId;
}

// Real NASA POWER data (Agroclimatology community), retrieved 2026-11-15 via power.larc.nasa.gov — used by default.
export const EMBED = {
  retrieved: "2026-11-15",
  clim: {
    moche: {
      c: [-79.1, -8.11, 147.69],
      T2M: [22.41, 23.69, 23.52, 21.97, 20.72, 19.68, 18.99, 18.58, 18.44, 18.61, 19.36, 20.79],
      T2M_MAX: [27.54, 30.01, 29.26, 27.04, 25.6, 25.59, 24.23, 23.67, 23.01, 23.68, 24.03, 25.71],
      T2M_MIN: [18.75, 19.98, 19.48, 17.88, 16.06, 15.57, 15.28, 14.64, 14.5, 14.65, 15.08, 16.51],
      PRECTOTCORR: [0.38, 0.47, 0.68, 0.34, 0.15, 0.04, 0.08, 0.02, 0.08, 0.24, 0.26, 0.3],
      ALLSKY_SFC_SW_DWN: [23.22, 23.22, 22.19, 21.2, 16.97, 12.64, 12.17, 12.72, 14.36, 17.24, 20.08, 21.72],
      RH2M: [84.35, 82.91, 82.55, 83.07, 84.23, 84.44, 84.09, 83.2, 83.27, 83.68, 84.3, 84.72],
      GWETROOT: [0.2, 0.2, 0.2, 0.21, 0.2, 0.2, 0.19, 0.19, 0.18, 0.19, 0.19, 0.19],
    },
    viru: {
      c: [-78.76, -8.41, 630.86],
      T2M: [21.22, 22.26, 22.31, 21.35, 20.2, 19.54, 19.16, 19.21, 19.18, 18.94, 19.17, 20.19],
      T2M_MAX: [29.69, 29.72, 30.65, 29.21, 29.13, 30.44, 29.66, 29.18, 28.57, 27.9, 27.91, 28.29],
      T2M_MIN: [16.24, 17.66, 17.6, 16.22, 13.41, 13.78, 12.67, 12.43, 13.05, 11.76, 13.06, 13.55],
      PRECTOTCORR: [0.34, 0.39, 0.58, 0.36, 0.17, 0.04, 0.12, 0.02, 0.09, 0.24, 0.28, 0.35],
      ALLSKY_SFC_SW_DWN: [20.92, 19.93, 19.41, 20.02, 18.89, 17.52, 18.1, 19.75, 21.07, 22.2, 22.55, 21.2],
      RH2M: [79.12, 77.59, 76.73, 75.23, 75.51, 73.2, 71.42, 68.89, 69.72, 72.58, 74.82, 77.26],
      GWETROOT: [0.38, 0.38, 0.39, 0.39, 0.38, 0.38, 0.38, 0.37, 0.37, 0.38, 0.38, 0.38],
    },
    chao: {
      c: [-78.68, -8.53, 630.86],
      T2M: [21.22, 22.26, 22.31, 21.35, 20.2, 19.54, 19.16, 19.21, 19.18, 18.94, 19.17, 20.19],
      T2M_MAX: [29.69, 29.72, 30.65, 29.21, 29.13, 30.44, 29.66, 29.18, 28.57, 27.9, 27.91, 28.29],
      T2M_MIN: [16.24, 17.66, 17.6, 16.22, 13.41, 13.78, 12.67, 12.43, 13.05, 11.76, 13.06, 13.55],
      PRECTOTCORR: [0.34, 0.39, 0.58, 0.36, 0.17, 0.04, 0.12, 0.02, 0.09, 0.24, 0.28, 0.35],
      ALLSKY_SFC_SW_DWN: [20.92, 19.93, 19.41, 20.02, 18.89, 17.52, 18.1, 19.75, 21.07, 22.2, 22.55, 21.2],
      RH2M: [79.12, 77.59, 76.73, 75.23, 75.51, 73.2, 71.42, 68.89, 69.72, 72.58, 74.82, 77.26],
      GWETROOT: [0.38, 0.38, 0.39, 0.39, 0.38, 0.38, 0.38, 0.37, 0.37, 0.38, 0.38, 0.38],
    },
    chicama: {
      c: [-79.15, -7.84, 147.69],
      T2M: [22.41, 23.69, 23.52, 21.97, 20.72, 19.68, 18.99, 18.58, 18.44, 18.61, 19.36, 20.79],
      T2M_MAX: [27.54, 30.01, 29.26, 27.04, 25.6, 25.59, 24.23, 23.67, 23.01, 23.68, 24.03, 25.71],
      T2M_MIN: [18.75, 19.98, 19.48, 17.88, 16.06, 15.57, 15.28, 14.64, 14.5, 14.65, 15.08, 16.51],
      PRECTOTCORR: [0.38, 0.47, 0.68, 0.34, 0.15, 0.04, 0.08, 0.02, 0.08, 0.24, 0.26, 0.3],
      ALLSKY_SFC_SW_DWN: [21.7, 21.12, 20.68, 20.56, 18.28, 15.64, 15.85, 17.02, 19.3, 21.14, 22.1, 21.85],
      RH2M: [84.35, 82.91, 82.55, 83.07, 84.23, 84.44, 84.09, 83.2, 83.27, 83.68, 84.3, 84.72],
      GWETROOT: [0.2, 0.2, 0.2, 0.21, 0.2, 0.2, 0.19, 0.19, 0.18, 0.19, 0.19, 0.19],
    },
    jeque: {
      c: [-79.5, -7.32, 489.72],
      T2M: [21.9, 22.95, 22.94, 22.05, 21.16, 20.53, 20.04, 19.88, 19.66, 19.27, 19.53, 20.7],
      T2M_MAX: [29.31, 30.14, 29.97, 29.42, 29.62, 29.43, 29.04, 28.4, 27.52, 28.42, 27.22, 28.38],
      T2M_MIN: [17.24, 18.65, 18.61, 17.25, 15.29, 14.95, 13.9, 13.51, 13.98, 13.3, 13.93, 14.74],
      PRECTOTCORR: [0.62, 0.65, 1, 0.61, 0.24, 0.06, 0.11, 0.04, 0.12, 0.44, 0.51, 0.47],
      ALLSKY_SFC_SW_DWN: [21.7, 21.12, 20.68, 20.56, 18.28, 15.64, 15.85, 17.02, 19.3, 21.14, 22.1, 21.85],
      RH2M: [79.06, 78.15, 77.89, 76.37, 75.64, 73.32, 72.11, 70.47, 71.83, 75.02, 76.64, 78.11],
      GWETROOT: [0.36, 0.37, 0.37, 0.37, 0.36, 0.36, 0.35, 0.35, 0.35, 0.35, 0.36, 0.36],
    },
  },
  monthlyCells: {
    coast: {
      c: [-79.1, -8.11, 147.69],
      first: "201001",
      T: [
        23.41, 24.32, 23.45, 22.14, 20.67, 19.07, 18, 17.53, 17.64, 17.74, 18.54, 19.81, 21.46, 23.08, 22.6, 21.31,
        20.86, 20.08, 18.9, 18.18, 17.94, 18.06, 19.12, 20.37, 21.84, 23.29, 23.36, 23.15, 21.87, 21.1, 19.84, 18.99,
        18.96, 18.9, 19.66, 20.48, 22, 23.12, 22.83, 20.61, 19.7, 18.7, 18.21, 17.89, 18.14, 18.19, 18.76, 20.61, 22.85,
        23, 23.14, 21.72, 22.1, 21.32, 19.74, 19.11, 18.56, 19.03, 19.59, 20.56, 21.96, 23.5, 23.82, 22.73, 22.76,
        22.12, 20.6, 19.99, 20.05, 20.36, 20.52, 22.52, 23.38, 24.72, 24.36, 22.77, 21.31, 20.1, 19.32, 19.4, 19.13,
        19.29, 19.58, 20.91, 23.17, 25.93, 26.12, 23.33, 21.57, 19.96, 19.3, 18.71, 18.49, 18.59, 18.59, 20.32, 21.53,
        22.46, 22.23, 21.58, 19.93, 19.13, 19.07, 18.91, 18.65, 18.82, 20.03, 21.59, 22.84, 24.83, 23.62, 22.28, 21.07,
        19.85, 18.88, 18.34, 18.32, 18.59, 19.69, 21.63, 22.83, 23.55, 23.73, 22.06, 21.24, 19.01, 17.86, 17.57, 17.63,
        18.54, 18.67, 20.35, 21.86, 22.83, 23.53, 20.74, 19.8, 19.58, 19.44, 18.83, 18.16, 17.88, 18.76, 19.71, 21.31,
        21.79, 22.29, 20.13, 18.79, 18.06, 17.91, 17.87, 17.69, 17.48, 18.86, 20.47, 21.24, 23.55, 24.98, 25.29, 23.74,
        22.98, 22.28, 21.85, 21.09, 20.5, 20.64, 21.49, 23.43, 24.78, 23.76, 22.13, 20.11, 19.29, 18.99, 18.59, 18.38,
        19.16, 19.72, 20.35,
      ],
      PR: [
        0.22, 0.44, 0.2, 0.37, 0.23, 0.07, 0.03, 0, 0.06, 0.22, 0.15, 0.37, 0.13, 0.22, 0.76, 0.59, 0.03, 0.02, 0.02, 0,
        0.06, 0.41, 0.2, 0.26, 0.58, 1, 0.39, 0.37, 0.18, 0.01, 0, 0, 0.21, 0.25, 0.33, 0.21, 0.21, 0.28, 0.7, 0.13,
        0.2, 0.09, 0.02, 0.15, 0.01, 0.44, 0.1, 0.21, 0.21, 0.26, 0.66, 0.37, 0.17, 0.02, 0, 0.01, 0.33, 0.14, 0.27,
        0.5, 0.5, 0.64, 0.95, 0.42, 0.65, 0.01, 0.01, 0, 0.07, 0.05, 0.27, 0.25, 0.57, 1.02, 0.77, 0.28, 0.03, 0.03, 0,
        0, 0.04, 0.27, 0.07, 0.48, 0.47, 0.72, 2.43, 0.24, 0.29, 0.04, 0, 0.1, 0.06, 0.55, 0.8, 0.56, 0.58, 0.99, 0.75,
        1.21, 0.3, 0.07, 0.01, 0.01, 0.06, 0.19, 0.48, 0.62, 0.24, 0.99, 0.94, 0.19, 0.21, 0.05, 0.05, 0.01, 0.13, 0.39,
        0.22, 0.52, 0.13, 0.16, 0.21, 0.48, 0.07, 0.02, 0.84, 0.02, 0.07, 0.22, 0.3, 0.53, 0.36, 0.11, 0.44, 0.21, 0.08,
        0.04, 0.03, 0.08, 0.08, 0.44, 0.29, 0.38, 0.44, 0.89, 0.93, 0.55, 0.25, 0.1, 0.05, 0.06, 0.19, 0.08, 0.07, 0.24,
        2.01, 0.85, 1.03, 0.59, 0.16, 0.01, 0.03, 0.02, 0.04, 0.32, 0.29, 0.89, 0.25, 0.35, 0.39, 0.31, 0.09, 0.03,
        0.01, 0.01, 0.18, 0.18, 0.2, 0.75,
      ],
    },
  },
  monthlyFor: { moche: "coast", chicama: "coast" } as Record<string, "coast">,
};

export const VALLEYS: ValleyInfo[] = [
  { id: "moche", lat: -8.11, lon: -79.1, en: "Moche valley (Trujillo)", es: "Valle de Moche (Trujillo)" },
  { id: "viru", lat: -8.41, lon: -78.76, en: "Virú valley", es: "Valle de Virú" },
  { id: "chao", lat: -8.53, lon: -78.68, en: "Chao valley", es: "Valle de Chao" },
  { id: "chicama", lat: -7.84, lon: -79.15, en: "Chicama valley", es: "Valle de Chicama" },
  { id: "jeque", lat: -7.32, lon: -79.5, en: "Jequetepeque valley", es: "Valle de Jequetepeque" },
];

export const REF = {
  T2M: [22.5, 23.5, 23.3, 21.8, 20.2, 18.9, 18.2, 17.9, 18.0, 18.6, 19.6, 21.0],
  T2M_MAX: [27.0, 28.0, 28.0, 26.5, 24.5, 22.5, 21.5, 21.0, 21.2, 22.0, 23.5, 25.5],
  T2M_MIN: [18.5, 19.5, 19.2, 17.5, 16.2, 15.5, 15.0, 14.8, 14.8, 15.2, 16.0, 17.2],
  RAIN: [1.0, 3.0, 3.0, 1.0, 0.5, 0.3, 0.2, 0.2, 0.3, 0.5, 0.5, 0.8],
  GWETROOT: null as (number | null)[] | null,
  SOLAR: null as (number | null)[] | null,
};

export const CROPS: Record<CropId, CropInfo> = {
  maize: {
    fam: "Poaceae",
    m: 5,
    kc: 0.85,
    salt: 1.7,
    heat: 35,
    rainSens: 1,
    inc: 2,
    residue: true,
    color: "#e3b23c",
    en: "Yellow maize",
    es: "Maíz amarillo duro",
  },
  rice: {
    fam: "Poaceae",
    m: 5,
    kc: 1.1,
    extra: 150,
    salt: 3.0,
    heat: 35,
    rainSens: 0,
    inc: 3,
    color: "#7fb3d5",
    en: "Rice",
    es: "Arroz",
    needClay: true,
  },
  sweetpot: {
    fam: "Convolvulaceae",
    m: 5,
    kc: 0.8,
    salt: 1.5,
    heat: 34,
    rainSens: 1,
    inc: 2,
    color: "#b5651d",
    en: "Sweet potato",
    es: "Camote",
  },
  bean: {
    fam: "Fabaceae",
    m: 4,
    kc: 0.8,
    salt: 1.0,
    heat: 30,
    rainSens: 2,
    inc: 2,
    legume: true,
    color: "#8e5ea2",
    en: "Common bean",
    es: "Frijol",
  },
  pallar: {
    fam: "Fabaceae",
    m: 5,
    kc: 0.8,
    salt: 1.5,
    heat: 32,
    rainSens: 2,
    inc: 3,
    legume: true,
    color: "#3cba9f",
    en: "Lima bean (pallar)",
    es: "Pallar",
  },
  quinoa: {
    fam: "Amaranthaceae",
    m: 5,
    kc: 0.75,
    salt: 8.0,
    heat: 30,
    rainSens: 2,
    inc: 2,
    deep: true,
    color: "#c45850",
    en: "Quinoa",
    es: "Quinua",
  },
  cotton: {
    fam: "Malvaceae",
    m: 6,
    kc: 0.85,
    salt: 7.7,
    heat: 38,
    rainSens: 2,
    inc: 2,
    deep: true,
    color: "#9aa5b1",
    en: "Cotton",
    es: "Algodón",
  },
  sorghum: {
    fam: "Poaceae",
    m: 4,
    kc: 0.75,
    salt: 6.8,
    heat: 38,
    rainSens: 1,
    inc: 1,
    residue: true,
    deep: true,
    color: "#d2a679",
    en: "Sorghum",
    es: "Sorgo",
  },
  squash: {
    fam: "Cucurbitaceae",
    m: 4,
    kc: 0.75,
    salt: 3.2,
    heat: 33,
    rainSens: 1,
    inc: 2,
    color: "#f28e2b",
    en: "Squash (zapallo)",
    es: "Zapallo",
  },
  green: {
    fam: "Fabaceae",
    m: 3,
    kc: 0.7,
    salt: 2.5,
    heat: 36,
    rainSens: 0,
    inc: 0,
    legume: true,
    cover: true,
    color: "#59a14f",
    en: "Green manure (crotalaria)",
    es: "Abono verde (crotalaria)",
  },
  cane: {
    fam: "Poaceae",
    m: 18,
    kc: 1.0,
    salt: 1.7,
    heat: 40,
    rainSens: 0,
    inc: 2,
    only: true,
    color: "#6b8e23",
    en: "Sugarcane",
    es: "Caña de azúcar",
  },
  aspar: {
    fam: "Asparagaceae",
    m: 18,
    kc: 0.9,
    salt: 4.1,
    heat: 38,
    rainSens: 0,
    inc: 3,
    only: true,
    color: "#4e9a6b",
    en: "Asparagus (end of plantation)",
    es: "Espárrago (fin de plantación)",
  },
  fallow: {
    fam: "none",
    m: 0,
    only: true,
    color: "#cbd5e1",
    en: "Fallow / none",
    es: "Descanso / ninguno",
  },
};

export const CURRENT_LIST: CropId[] = [
  "maize",
  "rice",
  "cane",
  "aspar",
  "sweetpot",
  "bean",
  "cotton",
  "fallow",
];

export const CANDIDATES: CropId[] = [
  "maize",
  "rice",
  "sweetpot",
  "bean",
  "pallar",
  "quinoa",
  "cotton",
  "sorghum",
  "squash",
  "green",
];

export const SOILS: Record<SoilId, { en: string; es: string }> = {
  sandy: { en: "Sandy", es: "Arenoso" },
  loam: { en: "Loam", es: "Franco" },
  clay: { en: "Clay", es: "Arcilloso" },
};

export const SALTS: Record<SaltId, { ec: number; en: string; es: string }> = {
  low: { ec: 1.5, en: "Low", es: "Baja" },
  med: { ec: 4, en: "Medium", es: "Media" },
  high: { ec: 7, en: "High", es: "Alta" },
};

export const WATERS: Record<WaterId, { cap: number; en: string; es: string }> = {
  canal: { cap: 1800, en: "Reliable canal (Chavimochic)", es: "Canal seguro (Chavimochic)" },
  well: { cap: 1200, en: "Well / shared turns", es: "Pozo / turnos" },
  limited: { cap: 750, en: "Limited", es: "Escasa" },
};

export const PRIOS: Record<
  PrioId,
  {
    w: { soil: number; water: number; salt: number; nino: number; inc: number };
    en: string;
    es: string;
  }
> = {
  soil: { w: { soil: 0.4, water: 0.2, salt: 0.15, nino: 0.1, inc: 0.15 }, en: "Rebuild my soil", es: "Recuperar mi suelo" },
  water: { w: { soil: 0.2, water: 0.4, salt: 0.15, nino: 0.1, inc: 0.15 }, en: "Save water", es: "Ahorrar agua" },
  inc: { w: { soil: 0.15, water: 0.2, salt: 0.15, nino: 0.1, inc: 0.4 }, en: "Better income", es: "Ganar más" },
  nino: { w: { soil: 0.15, water: 0.2, salt: 0.15, nino: 0.4, inc: 0.1 }, en: "Resist El Niño", es: "Resistir El Niño" },
};

export const MONTHS: Record<Language, string[]> = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  es: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
};

export const MKEYS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
export const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export function initEmbeddedStores(): {
  clim: Record<string, ClimData>;
  monthly: Record<string, MonthlyData>;
} {
  const clim: Record<string, ClimData> = {};
  const monthly: Record<string, MonthlyData> = {};

  for (const [vid, d] of Object.entries(EMBED.clim)) {
    clim[vid] = {
      T2M: d.T2M,
      T2M_MAX: d.T2M_MAX,
      T2M_MIN: d.T2M_MIN,
      RAIN: d.PRECTOTCORR.map((r, i) => r * DAYS[i]),
      GWETROOT: d.GWETROOT,
      SOLAR: d.ALLSKY_SFC_SW_DWN,
      RH2M: d.RH2M,
      coords: d.c,
      embedded: true,
    };
  }

  for (const [vid, cell] of Object.entries(EMBED.monthlyFor)) {
    const m = EMBED.monthlyCells[cell];
    const y0 = +m.first.slice(0, 4);
    const rows: MonthlyRow[] = m.T.map((tt, i) => {
      const y = y0 + Math.floor(i / 12);
      const mi = i % 12;
      const d = mi === 1 && y % 4 === 0 ? 29 : DAYS[mi];
      return {
        k: `${y}${String(mi + 1).padStart(2, "0")}`,
        y,
        m: mi,
        t: tt,
        rain: m.PR[i] * d,
      };
    });
    monthly[vid] = { rows, coords: m.c, embedded: true };
  }

  return { clim, monthly };
}

export function powerUrls(v: ValleyInfo) {
  const base = "https://power.larc.nasa.gov/api/temporal";
  return {
    clim: `${base}/climatology/point?parameters=T2M,T2M_MAX,T2M_MIN,PRECTOTCORR,ALLSKY_SFC_SW_DWN,RH2M,GWETROOT&community=AG&longitude=${v.lon}&latitude=${v.lat}&format=JSON`,
    monthly: `${base}/monthly/point?parameters=T2M,PRECTOTCORR,GWETROOT&community=AG&longitude=${v.lon}&latitude=${v.lat}&start=2010&end=2024&format=JSON`,
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function parsePower(json: any):
  | { kind: "clim"; coords?: number[]; data: ClimData }
  | { kind: "monthly"; coords?: number[]; rows: MonthlyRow[] } {
  const p = json?.properties?.parameter;
  if (!p) throw new Error("not power");
  const units = json.parameters || {};
  const anyKey = Object.keys(p)[0];
  const keys = Object.keys(p[anyKey]);
  const coords = json.geometry?.coordinates;

  if (keys.includes("JAN")) {
    const g = (name: string): (number | null)[] | null =>
      p[name] ? MKEYS.map((k) => (p[name][k] <= -990 ? null : p[name][k])) : null;
    let rain = g("PRECTOTCORR");
    const ru = ((units.PRECTOTCORR && units.PRECTOTCORR.units) || "mm/day").toLowerCase();
    if (rain && ru.includes("day")) {
      rain = rain.map((r, i) => (r == null ? null : r * DAYS[i]));
    }
    let solar = g("ALLSKY_SFC_SW_DWN");
    const su = ((units.ALLSKY_SFC_SW_DWN && units.ALLSKY_SFC_SW_DWN.units) || "").toLowerCase();
    if (solar && su.includes("kw")) {
      solar = solar.map((x) => (x == null ? null : x * 3.6));
    }
    return {
      kind: "clim",
      coords,
      data: {
        T2M: g("T2M") || REF.T2M,
        T2M_MAX: g("T2M_MAX") || REF.T2M_MAX,
        T2M_MIN: g("T2M_MIN") || REF.T2M_MIN,
        RAIN: rain || REF.RAIN,
        GWETROOT: g("GWETROOT"),
        SOLAR: solar,
        RH2M: g("RH2M"),
      },
    };
  } else {
    const ru = ((units.PRECTOTCORR && units.PRECTOTCORR.units) || "mm/day").toLowerCase();
    const rows: MonthlyRow[] = keys
      .filter((k) => k.length === 6 && +k.slice(4) >= 1 && +k.slice(4) <= 12)
      .sort()
      .map((k) => {
        const mi = +k.slice(4) - 1;
        const y = +k.slice(0, 4);
        let r = p.PRECTOTCORR ? p.PRECTOTCORR[k] : null;
        if (r != null && r <= -990) r = null;
        if (r != null && ru.includes("day")) {
          r = r * (mi === 1 && y % 4 === 0 ? 29 : DAYS[mi]);
        }
        let tt = p.T2M ? p.T2M[k] : null;
        if (tt != null && tt <= -990) tt = null;
        return { k, y, m: mi, rain: r, t: tt };
      });
    return { kind: "monthly", coords, rows };
  }
}

export function findValleyByCoords(coords: number[] | undefined, fallback: ValleyId): ValleyId {
  if (!coords) return fallback;
  let vid = fallback;
  let best = 1e9;
  VALLEYS.forEach((v) => {
    const d = (v.lat - coords[1]) ** 2 + (v.lon - coords[0]) ** 2;
    if (d < best) {
      best = d;
      vid = v.id;
    }
  });
  return best > 0.5 ? fallback : vid;
}

// FAO-56 extraterrestrial radiation (MJ m-2 day-1) at mid-month
export function Ra(latDeg: number, m: number): number {
  const J = [15, 46, 74, 105, 135, 166, 196, 227, 258, 288, 319, 349][m];
  const phi = (latDeg * Math.PI) / 180;
  const dr = 1 + 0.033 * Math.cos((2 * Math.PI * J) / 365);
  const d = 0.409 * Math.sin((2 * Math.PI * J) / 365 - 1.39);
  const ws = Math.acos(-Math.tan(phi) * Math.tan(d));
  return (
    ((24 * 60) / Math.PI) *
    0.082 *
    dr *
    (ws * Math.sin(phi) * Math.sin(d) + Math.cos(phi) * Math.cos(d) * Math.sin(ws))
  );
}

export interface ComputedClimate {
  nasa: boolean;
  T2M: number[];
  TMAX: number[];
  TMIN: number[];
  RAIN: number[];
  WET: (number | null)[] | null;
  SOLAR: (number | null)[] | null;
  ETO: number[];
  coords?: number[];
}

export function computeClimate(valleyId: ValleyId, climStore: Record<string, ClimData>): ComputedClimate {
  const c = climStore[valleyId];
  const src = c && c.T2M && c.T2M_MAX && c.T2M_MIN ? c : null;
  const D = src || REF;
  const v = VALLEYS.find((x) => x.id === valleyId) || VALLEYS[0];
  const lat = v.lat;

  const t2m = D.T2M.map((x, i) => (x != null ? x : REF.T2M[i]));
  const tmax = D.T2M_MAX.map((x, i) => (x != null ? x : REF.T2M_MAX[i]));
  const tmin = D.T2M_MIN.map((x, i) => (x != null ? x : REF.T2M_MIN[i]));
  const rain = (D.RAIN || REF.RAIN).map((x, i) => (x != null ? x : REF.RAIN[i]));

  const eto = t2m.map((tm, i) => {
    const tx = tmax[i];
    const tn = tmin[i];
    return 0.0023 * (tm + 17.8) * Math.sqrt(Math.max(tx - tn, 0)) * Ra(lat, i) * 0.408 * DAYS[i];
  });

  return {
    nasa: !!src,
    T2M: t2m,
    TMAX: tmax,
    TMIN: tmin,
    RAIN: rain,
    WET: D.GWETROOT,
    SOLAR: D.SOLAR,
    ETO: eto,
    coords: c?.coords,
  };
}

export interface NinoSummary {
  d: number;
  real: boolean;
  a17?: number;
  a23?: number;
  r17?: number;
  r23?: number;
  marN?: number;
  avg?: number[];
  rows?: MonthlyRow[];
}

export function computeNinoDelta(valleyId: ValleyId, monthlyStore: Record<string, MonthlyData>): NinoSummary {
  const mo = monthlyStore[valleyId];
  if (!mo) return { d: 2.0, real: false };
  const rows = mo.rows.filter((r) => r.t != null);
  const avg = Array(12)
    .fill(0)
    .map((_, m) => {
      const a = rows.filter((r) => r.m === m);
      return a.reduce((s, r) => s + (r.t || 0), 0) / Math.max(a.length, 1);
    });
  const anom = (y: number) => {
    const a = rows.filter((r) => r.y === y && r.m >= 1 && r.m <= 3);
    return a.length ? a.reduce((s, r) => s + ((r.t || 0) - avg[r.m]), 0) / a.length : 0;
  };
  const rainOf = (y: number, m: number) => {
    const r = mo.rows.find((x) => x.y === y && x.m === m);
    return r && r.rain != null ? r.rain : 0;
  };
  const a17 = anom(2017);
  const a23 = anom(2023);
  let maxA = 0;
  rows.forEach((r) => {
    maxA = Math.max(maxA, (r.t || 0) - avg[r.m]);
  });
  const mars = mo.rows.filter((r) => r.m === 2 && r.rain != null && r.y !== 2017 && r.y !== 2023);
  const marN = mars.reduce((s, r) => s + (r.rain || 0), 0) / Math.max(mars.length, 1);
  return {
    d: Math.max(1, +maxA.toFixed(1)),
    real: true,
    a17,
    a23,
    r17: rainOf(2017, 2),
    r23: rainOf(2023, 2),
    marN,
    avg,
    rows,
  };
}

const clamp = (x: number) => Math.max(0, Math.min(100, Math.round(x)));
const avg = (a: number[]) => a.reduce((s, x) => s + x, 0) / Math.max(a.length, 1);

export interface EvaluatedRotation {
  seq: CropId[];
  cells: CropId[];
  water: number;
  waterS: number;
  soil: number;
  salt: number;
  inc: number;
  nino: number;
  total: number;
  stress: number;
  changes: number;
  legumes: number;
  cur?: CropId;
}

export function evaluateRotation(
  seq: CropId[],
  C: ComputedClimate,
  nino: NinoSummary,
  state: FieldState,
  opts: { mono?: boolean } = {}
): EvaluatedRotation {
  const ec = SALTS[state.salt].ec;
  let month = state.start;
  let used = 0;
  let water = 0;
  let stress = 0;
  const cells: CropId[] = [];
  const crops = seq.map((id) => CROPS[id]);

  seq.forEach((id) => {
    const c = CROPS[id];
    const len = Math.min(c.m, 18 - used);
    let heatHit = false;
    let rainHit = false;
    for (let k = 0; k < len; k++) {
      const mi = (month + k) % 12;
      const need = (c.kc || 0) * C.ETO[mi] - 0.8 * (C.RAIN[mi] || 0) + (c.extra || 0);
      water += Math.max(need, 0);
      cells.push(id);
      const late = k >= len - 2; // flowering / harvest stage
      if (late && C.TMAX[mi] + nino.d > (c.heat || 40)) heatHit = true;
      if (late && mi >= 1 && mi <= 3 && (c.rainSens || 0) >= 2) rainHit = true;
    }
    stress += (heatHit ? 1 : 0) + (rainHit ? 1 : 0);
    month = (month + len) % 12;
    used += len;
  });

  while (cells.length < 18) cells.push("fallow");

  const fams = seq.map((id) => CROPS[id].fam);
  let soil = 35;
  const legumes = seq.filter((id) => CROPS[id].legume).length;
  soil += Math.min(legumes, 2) * 15;
  if (seq.some((id) => CROPS[id].cover)) soil += 10;
  const prevFam = CROPS[state.current].fam;
  let changes = 0;
  [prevFam, ...fams].forEach((f, i, a) => {
    if (i > 0 && f !== a[i - 1] && a[i - 1] !== "none") changes++;
  });
  soil += changes * 6;
  if ([prevFam, ...fams].some((f, i, a) => i > 0 && f === a[i - 1])) soil -= 15;
  if (seq.some((id) => CROPS[id].deep)) soil += 5;
  if (seq.some((id) => CROPS[id].residue)) soil += 4;
  if (seq.includes("rice")) soil -= 10;
  if (opts.mono) soil = Math.min(soil, 25);
  soil = clamp(soil);

  const salt = clamp(100 * avg(crops.map((c) => Math.max(0, 1 - Math.max(0, ec - (c.salt || 0)) * 0.12))));
  const inc = clamp((100 * crops.reduce((s, c) => s + ((c.inc || 0) * Math.min(c.m, 18)) / 5, 0)) / 9);
  const nino_s = clamp(100 - stress * 18);

  return {
    seq,
    cells,
    water: Math.round(water),
    waterS: 0,
    soil,
    salt,
    inc,
    nino: nino_s,
    total: 0,
    stress,
    changes,
    legumes,
  };
}

export function computeRotations(
  state: FieldState,
  climStore: Record<string, ClimData>,
  monthlyStore: Record<string, MonthlyData>
): {
  C: ComputedClimate;
  nino: NinoSummary;
  top: EvaluatedRotation[];
  base: EvaluatedRotation | null;
} {
  const C = computeClimate(state.valley, climStore);
  const nino = computeNinoDelta(state.valley, monthlyStore);
  const cap = WATERS[state.water].cap;
  const ok = (id: CropId) => {
    const c = CROPS[id];
    if (c.needClay && (state.soil !== "clay" || state.water !== "canal")) return false;
    return true;
  };
  const list: EvaluatedRotation[] = [];
  const cand = CANDIDATES.filter(ok);

  for (const a of cand) {
    for (const b of cand) {
      for (const c of cand) {
        if (a === state.current || a === b || b === c) continue;
        const seq: CropId[] = [a, b, c];
        const months = seq.reduce((s, id) => s + CROPS[id].m, 0);
        if (months > 18 || months < 12) continue;
        list.push(evaluateRotation(seq, C, nino, state));
      }
    }
  }

  for (const a of cand) {
    for (const b of cand) {
      if (a === state.current || a === b) continue;
      const m = CROPS[a].m + CROPS[b].m;
      if (m > 18 || m < 8) continue;
      list.push(evaluateRotation([a, b], C, nino, state));
    }
  }

  if (!list.length) return { C, nino, top: [], base: null };

  const wmin = Math.min(...list.map((r) => r.water));
  const wmax = Math.max(...list.map((r) => r.water));
  const waterScore = (w: number) =>
    clamp(
      0.6 * 100 * (1 - (w - wmin) / Math.max(wmax - wmin, 1)) +
        0.4 * 100 * Math.max(0, Math.min(1, (cap * 1.15 - w) / (cap * 0.5)))
    );

  const W = PRIOS[state.prio].w;
  list.forEach((r) => {
    r.waterS = waterScore(r.water);
    r.total = Math.round(W.soil * r.soil + W.water * r.waterS + W.salt * r.salt + W.nino * r.nino + W.inc * r.inc);
  });
  list.sort((x, y) => y.total - x.total);

  const top: EvaluatedRotation[] = [];
  const seen = new Set<CropId>();
  const overlap = (a: EvaluatedRotation, b: EvaluatedRotation) => a.seq.filter((x) => b.seq.includes(x)).length;

  for (const r of list) {
    if (seen.has(r.seq[0])) continue;
    if (top.some((o) => overlap(o, r) > 1)) continue;
    seen.add(r.seq[0]);
    top.push(r);
    if (top.length === 3) break;
  }

  if (top.length < 3) {
    for (const r of list) {
      if (top.includes(r) || seen.has(r.seq[0])) continue;
      seen.add(r.seq[0]);
      top.push(r);
      if (top.length === 3) break;
    }
  }

  const cur: CropId = state.current === "fallow" ? "maize" : state.current;
  const cc = CROPS[cur];
  const n = Math.max(1, Math.floor(18 / cc.m));
  const base = evaluateRotation(Array(n).fill(cur), C, nino, state, { mono: true });
  base.waterS = waterScore(base.water);
  base.total = Math.round(
    W.soil * base.soil + W.water * base.waterS + W.salt * base.salt + W.nino * base.nino + W.inc * base.inc
  );
  base.cur = cur;

  return { C, nino, top, base };
}
