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
  shortTitle: "ChacraSat — From orbit to the chacra",
  defaultTitle: "ChacraSat — Smart Crop Rotation Planning",
  description:
    "Agricultural decision-support platform powered by NASA POWER satellite data, FAO-56 water demand, and El Niño stress testing for Peru's northern coast (La Libertad).",
  keywords: [
    "ChacraSat",
    "NASA Space Apps Challenge",
    "NASA POWER",
    "crop rotation",
    "precision agriculture",
    "northern Peru coast",
    "La Libertad",
    "Trujillo",
    "FAO-56",
    "El Niño",
    "rotación de cultivos",
    "Peru",
  ],
  authors: [
    { name: "Team Trujillo Orbital" },
    { name: "Flavia Villacorta" },
    { name: "Yesica Castillo Olivares" },
    { name: "Julio Castillo" },
  ],
  creator: "Team Trujillo Orbital",
  publisher: "Team Trujillo Orbital — NASA Space Apps Challenge 2026",
} as const;
