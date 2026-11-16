import type { Metadata } from "next";
import { NotFoundContent } from "@/components/layout/not-found-content";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description:
    "The requested route does not exist in ChacraSat. Return home or open the interactive rotation planner.",
};

export default function NotFoundPage() {
  return <NotFoundContent />;
}
