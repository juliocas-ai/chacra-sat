import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl().origin;

  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-11-15T00:00:00Z"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
