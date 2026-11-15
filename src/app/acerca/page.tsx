import type { Metadata } from "next";
import { AboutView } from "@/components/pages/about-view";

export const metadata: Metadata = {
  title: "Proyecto y Equipo Trujillo Orbital · About ChacraSat",
  description:
    "Conoce al equipo Trujillo Orbital (Flavia Villacorta, Yesica Castillo Olivares, Julio Castillo) y la misión de ChacraSat para el NASA Space Apps Challenge 2026.",
  alternates: {
    canonical: "/acerca",
  },
};

export default function AboutPage() {
  return <AboutView />;
}
