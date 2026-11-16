import type { Metadata } from "next";
import { PlannerClientPage } from "@/components/dashboard/planner-client-page";

export const metadata: Metadata = {
  title: "Interactive Rotation Planner",
  description:
    "Interactive 18-month crop rotation simulator powered by real NASA POWER data, FAO-56 water demand, and El Niño stress testing for La Libertad, Peru.",
  alternates: {
    canonical: "/planner",
  },
};

export default function PlannerPage() {
  return <PlannerClientPage />;
}
