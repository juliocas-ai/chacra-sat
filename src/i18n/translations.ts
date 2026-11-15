export type Language = "es" | "en";

export const translations = {
  es: {
    subtitle: "Rotaciones inteligentes para la agricultura peruana",
    system_status: "Sistema activo",
    data_status: "Datos de referencia",
    welcome: "Bienvenido a ChacraSat",
    intro:
      "Plataforma de apoyo para la planificación de rotaciones de cultivos en la costa norte del Perú.",
    dashboard: "Panel agrícola",
    dashboard_description:
      "Los módulos de planificación, indicadores y gráficos se integrarán aquí conservando la lógica original de ChacraSat.",
  },
  en: {
    subtitle: "Smart crop rotations for Peruvian agriculture",
    system_status: "System online",
    data_status: "Reference data",
    welcome: "Welcome to ChacraSat",
    intro:
      "A decision-support platform for crop rotation planning on Peru's northern coast.",
    dashboard: "Agricultural dashboard",
    dashboard_description:
      "Planning, indicators and chart modules will be integrated here while preserving ChacraSat's original logic.",
  },
} as const;

export type TranslationKey = keyof typeof translations.es;
