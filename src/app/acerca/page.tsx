import type { Metadata } from "next";
import { AboutView } from "@/components/pages/about-view";

export const metadata: Metadata = {
  title: "About ChacraSat & Team Trujillo Orbital",
  description:
    "Meet Team Trujillo Orbital (Flavia Villacorta, Yesica Castillo Olivares, Julio Castillo) and ChacraSat's mission for the NASA Space Apps Challenge 2026.",
  alternates: {
    canonical: "/acerca",
  },
};

export default function AboutPage() {
  return <AboutView />;
}
