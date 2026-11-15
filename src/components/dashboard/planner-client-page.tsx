"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { DashboardView } from "@/components/dashboard/dashboard-view";
import { VALLEYS, type ValleyId } from "@/lib/chacra-data";

function PlannerWithParams() {
  const searchParams = useSearchParams();
  const rawValley = searchParams.get("valley");
  const initialValley: ValleyId =
    rawValley && VALLEYS.some((v) => v.id === rawValley)
      ? (rawValley as ValleyId)
      : "moche";

  return <DashboardView key={initialValley} initialValley={initialValley} />;
}

export function PlannerClientPage() {
  return (
    <React.Suspense fallback={<DashboardView initialValley="moche" />}>
      <PlannerWithParams />
    </React.Suspense>
  );
}
