"use client";

import * as React from "react";
import { AlertTriangle, ArrowLeft, RotateCcw } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLanguage } from "@/context/language-context";
import { cn } from "@/lib/utils";

export default function ErrorPage({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  const { t } = useLanguage();

  React.useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto flex w-full max-w-[1180px] flex-1 items-center justify-center px-4 py-12 sm:px-6 sm:py-20">
      <Card className="w-full max-w-xl rounded-2xl border-line bg-surface p-6 text-center shadow-sm ring-0 sm:p-9">
        <CardHeader className="flex flex-col items-center p-0">
          <div
            className="mb-4 grid size-16 place-items-center rounded-2xl bg-danger/10 text-danger"
            aria-hidden="true"
          >
            <AlertTriangle className="size-8" />
          </div>

          <Badge
            variant="outline"
            className="mb-2.5 rounded-full border-danger/30 bg-danger/10 px-3 py-0.5 text-xs font-bold tracking-wider text-danger uppercase"
          >
            {t("errorBadge")}
          </Badge>

          <CardTitle className="font-heading text-2xl font-bold text-ink">
            {t("errorTitle")}
          </CardTitle>

          <CardDescription className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">
            {t("errorDesc")}
          </CardDescription>
        </CardHeader>

        <CardContent className="mt-6 flex flex-col justify-center gap-3 p-0 sm:flex-row">
          <Button
            type="button"
            size="lg"
            onClick={() => retry()}
            className="h-auto gap-2 rounded-xl bg-navy px-5 py-3 text-[14.5px] font-semibold text-white hover:bg-navy-light"
          >
            <RotateCcw className="size-4 shrink-0" />
            <span>{t("errorRetry")}</span>
          </Button>

          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-auto gap-2 rounded-xl border-line bg-white px-5 py-3 text-[14.5px] font-semibold text-ink hover:bg-muted"
            )}
          >
            <ArrowLeft className="size-4 shrink-0" />
            <span>{t("notFoundBackHome")}</span>
          </Link>
        </CardContent>
      </Card>
    </main>
  );
}
