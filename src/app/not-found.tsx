import type { Metadata } from "next";
import { NotFoundContent } from "@/components/layout/not-found-content";

export const metadata: Metadata = {
  title: "404 — Página no encontrada · Page Not Found",
  description:
    "La ruta solicitada no existe en ChacraSat. Regresa al inicio o abre el planificador interactivo de rotaciones.",
};

export default function NotFoundPage() {
  return <NotFoundContent />;
}
