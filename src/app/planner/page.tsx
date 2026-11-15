import type { Metadata } from "next";
import { PlannerClientPage } from "@/components/dashboard/planner-client-page";

export const metadata: Metadata = {
  title: "Planificador de Rotaciones · Interactive Planner",
  description:
    "Simulador interactivo de rotaciones de cultivos a 18 meses con datos reales NASA POWER, demanda hídrica FAO-56 y prueba de estrés El Niño para La Libertad, Perú.",
  alternates: {
    canonical: "/planner",
  },
};

export default function PlannerPage() {
  return <PlannerClientPage />;
}
