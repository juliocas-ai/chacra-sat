export function getSiteUrl(): URL {
  const rawUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000");

  return new URL(rawUrl);
}

export const SITE_META = {
  name: "ChacraSat",
  shortTitle: "ChacraSat — De la órbita a la chacra",
  defaultTitle:
    "ChacraSat — Planificación inteligente de rotaciones de cultivos",
  description:
    "Plataforma de apoyo agrícola con datos satelitales NASA POWER, método FAO-56 y prueba de estrés El Niño para planificar rotaciones de cultivos en la costa norte del Perú (La Libertad).",
  keywords: [
    "ChacraSat",
    "NASA Space Apps Challenge",
    "NASA POWER",
    "rotación de cultivos",
    "agricultura de precisión",
    "costa norte del Perú",
    "La Libertad",
    "Trujillo",
    "FAO-56",
    "El Niño",
    "crop rotation",
    "Peru",
  ],
  authors: [
    { name: "Equipo Trujillo Orbital" },
    { name: "Flavia Villacorta" },
    { name: "Yesica Castillo Olivares" },
    { name: "Julio Castillo" },
  ],
  creator: "Equipo Trujillo Orbital",
  publisher: "Equipo Trujillo Orbital — NASA Space Apps Challenge 2026",
} as const;
