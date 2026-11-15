"use client";

import { Satellite } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/context/language-context";

export default function Loading() {
  const { t } = useLanguage();

  return (
    <main className="mx-auto w-full max-w-[1180px] px-4 py-8 sm:px-6 sm:py-12">
      <div className="mb-6 flex items-center gap-2.5 text-sm font-medium text-muted-foreground">
        <Satellite className="size-4 animate-pulse text-sky" />
        <span>{t("loadingText")}</span>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[340px_1fr]">
        <Card className="h-[460px] animate-pulse rounded-[14px] border-line bg-surface p-5 ring-0" />
        <div className="flex flex-col gap-4">
          <Card className="h-[260px] animate-pulse rounded-[14px] border-line bg-surface p-5 ring-0" />
          <Card className="h-[280px] animate-pulse rounded-[14px] border-line bg-surface p-5 ring-0" />
        </div>
      </div>
    </main>
  );
}
