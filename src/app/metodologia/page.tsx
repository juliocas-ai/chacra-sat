import type { Metadata } from "next";
import { MethodologyView } from "@/components/pages/methodology-view";

export const metadata: Metadata = {
  title: "Metodología Científica y Datos NASA POWER · Methodology",
  description:
    "Cómo ChacraSat combina datos satelitales NASA POWER (MERRA-2 y CERES), evapotranspiración FAO-56 Hargreaves y tolerancia salina FAO-29 para recomendar rotaciones de cultivos.",
  alternates: {
    canonical: "/metodologia",
  },
};

export default function MethodologyPage() {
  return <MethodologyView />;
}
