"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLanguage } from "@/context/language-context";

export function DashboardView() {
  const { t } = useLanguage();

  return (
    <main className="mx-auto my-[22px] w-[min(calc(100%-32px),1180px)] sm:my-8">
      {/* Welcome Section */}
      <section className="mb-7">
        <h2 className="mb-2 font-heading text-[22px] font-bold text-ink">
          {t("welcome")}
        </h2>
        <p className="text-muted-foreground">{t("intro")}</p>
      </section>

      {/* Aquí se integrarán los módulos originales del dashboard usando shadcn */}
      <section className="mb-7">
        <Card className="rounded-[14px] border-line bg-surface p-4 shadow-[0_2px_8px_rgb(11_29_58/6%)] ring-0 sm:p-5">
          <CardHeader className="p-0">
            <CardTitle className="mb-2 font-heading text-[22px] font-bold text-ink">
              {t("dashboard")}
            </CardTitle>
            <CardDescription className="text-[14px] text-muted-foreground">
              {t("dashboard_description")}
            </CardDescription>
          </CardHeader>
        </Card>
      </section>
    </main>
  );
}
