"use client";

import { ArrowLeft, Compass, MapPin, Satellite } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLanguage } from "@/context/language-context";
import { VALLEYS } from "@/lib/chacra-data";
import { cn } from "@/lib/utils";

export function NotFoundContent() {
  const { language, t } = useLanguage();

  return (
    <main className="mx-auto flex w-full max-w-[1180px] flex-1 items-center justify-center px-4 py-12 sm:px-6 sm:py-20">
      <Card className="w-full max-w-2xl rounded-2xl border-line bg-surface p-6 text-center shadow-sm ring-0 sm:p-10">
        <CardHeader className="flex flex-col items-center p-0">
          {/* Orbital 404 Illustration */}
          <div
            className="mb-4 grid size-20 place-items-center rounded-2xl bg-navy text-white shadow-sm"
            aria-hidden="true"
          >
            <Satellite className="size-10 text-sky" />
          </div>

          <Badge
            variant="outline"
            className="mb-3 rounded-full border-warning/40 bg-warning/10 px-3.5 py-1 text-xs font-bold tracking-wider text-[#a85b12] uppercase"
          >
            {t("notFoundBadge")}
          </Badge>

          <CardTitle className="font-heading text-2xl font-bold text-ink sm:text-3xl">
            {t("notFoundTitle")}
          </CardTitle>

          <CardDescription className="mt-2 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
            {t("notFoundDesc")}
          </CardDescription>
        </CardHeader>

        <CardContent className="mt-6 flex flex-col items-center gap-6 p-0">
          {/* Primary Recovery Actions */}
          <div className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/planner"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "h-auto gap-2 rounded-xl border-0 bg-leaf px-5 py-3 text-[15px] font-bold text-white shadow-[0_6px_18px_rgba(47,158,91,0.3)] hover:bg-[#278a4f]"
              )}
            >
              <Compass className="size-4 shrink-0" />
              <span>{t("notFoundGoPlanner")}</span>
            </Link>

            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-auto gap-2 rounded-xl border-line bg-white px-5 py-3 text-[15px] font-semibold text-navy hover:bg-muted"
              )}
            >
              <ArrowLeft className="size-4 shrink-0" />
              <span>{t("notFoundBackHome")}</span>
            </Link>
          </div>

          {/* Valley Quick Links */}
          <div className="w-full border-t border-line pt-5">
            <span className="mb-2.5 block text-xs font-semibold tracking-wider text-muted-foreground uppercase">
              {t("hValleysLabel")}
            </span>
            <div className="flex flex-wrap justify-center gap-1.5">
              {VALLEYS.map((v) => (
                <Link
                  key={v.id}
                  href={`/planner?valley=${v.id}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-[#f8fafc] px-3 py-1 text-xs font-medium text-ink transition-colors hover:border-navy hover:bg-leaf-light"
                >
                  <MapPin className="size-3 text-leaf" />
                  <span>{v[language]}</span>
                </Link>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
