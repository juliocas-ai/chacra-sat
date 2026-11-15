import type { MetadataRoute } from "next";
import { SITE_META } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_META.defaultTitle,
    short_name: SITE_META.name,
    description: SITE_META.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f4f6f9",
    theme_color: "#0b1d3a",
    lang: "es",
    categories: ["agriculture", "weather", "education"],
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/favicon.ico",
        sizes: "16x16 32x32 48x48",
        type: "image/x-icon",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
