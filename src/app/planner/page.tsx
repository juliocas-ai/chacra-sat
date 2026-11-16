import type { Metadata } from "next";
import { PlannerClientPage } from "@/components/dashboard/planner-client-page";
import { buildPageMetadata } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Interactive Crop Rotation Planner",
  description:
    "Interactive 18-month crop rotation simulator powered by real NASA POWER data, FAO-56 water demand, and El Niño stress testing for La Libertad, Peru.",
  path: "/planner",
});

export default function PlannerPage() {
  return <PlannerClientPage />;
}
