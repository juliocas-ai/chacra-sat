import type { Metadata } from "next";
import { MethodologyView } from "@/components/pages/methodology-view";

export const metadata: Metadata = {
  title: "Scientific Methodology & NASA POWER Data",
  description:
    "How ChacraSat combines NASA POWER satellite data (MERRA-2 and CERES), FAO-56 Hargreaves evapotranspiration, and FAO-29 salt tolerance to recommend crop rotations.",
  alternates: {
    canonical: "/metodologia",
  },
};

export default function MethodologyPage() {
  return <MethodologyView />;
}
