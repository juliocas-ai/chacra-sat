import type { Metadata } from "next";
import { MethodologyView } from "@/components/pages/methodology-view";
import { buildPageMetadata } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Scientific Methodology & NASA POWER Data",
  description:
    "How ChacraSat combines NASA POWER satellite data (MERRA-2 and CERES), FAO-56 Hargreaves evapotranspiration, and FAO-29 salt tolerance to recommend crop rotations.",
  path: "/metodologia",
});

export default function MethodologyPage() {
  return <MethodologyView />;
}
