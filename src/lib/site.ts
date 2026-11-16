import type { Metadata } from "next";

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
  shortTitle: "ChacraSat — Smart Crop Rotation Planning (NASA POWER)",
  defaultTitle: "ChacraSat — Smart Crop Rotation Planning with NASA Data",
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

export const SHARED_OPEN_GRAPH: NonNullable<Metadata["openGraph"]> = {
  type: "website",
  locale: "en_US",
  alternateLocale: ["es_PE"],
  siteName: SITE_META.name,
};

export function buildPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = `${title} | ${SITE_META.name}`;
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      ...SHARED_OPEN_GRAPH,
      title: fullTitle,
      description,
      url: path,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
