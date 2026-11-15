"use client";

import {
  GitCompareArrows,
  Info,
  type LucideIcon,
  Satellite,
  Scale,
  SlidersHorizontal,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLanguage } from "@/context/language-context";
import type { TranslationKey } from "@/i18n/translations";
import { cn } from "@/lib/utils";

interface ProcessStep {
  step: number;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  icon: LucideIcon;
}

const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    step: 1,
    titleKey: "howStep1Title",
    descriptionKey: "howStep1Desc",
    icon: SlidersHorizontal,
  },
  {
    step: 2,
    titleKey: "howStep2Title",
    descriptionKey: "howStep2Desc",
    icon: Satellite,
  },
  {
    step: 3,
    titleKey: "howStep3Title",
    descriptionKey: "howStep3Desc",
    icon: Scale,
  },
  {
    step: 4,
    titleKey: "howStep4Title",
    descriptionKey: "howStep4Desc",
    icon: GitCompareArrows,
  },
];

/**
 * Four-stage visual overview of how ChacraSat turns field inputs and
 * NASA POWER climate data into transparent crop rotation recommendations.
 */
export function HowItWorksSection({ className }: { className?: string }) {
  const { t } = useLanguage();

  return (
    <section
      id="como-funciona"
      aria-labelledby="how-it-works-heading"
      className={cn("mt-4 min-w-0 sm:mt-[18px]", className)}
    >
      <Card className="min-w-0 rounded-[14px] border-line bg-surface p-4 shadow-xs sm:p-5">
        <CardHeader className="p-0">
          <CardTitle className="font-heading text-lg font-bold text-ink">
            <h2 id="how-it-works-heading">{t("howSectionTitle")}</h2>
          </CardTitle>
          <CardDescription className="max-w-3xl text-[13.5px] leading-relaxed text-muted-foreground">
            {t("howSectionSubtitle")}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex min-w-0 flex-col gap-4 p-0">
          <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3.5">
            {PROCESS_STEPS.map((item) => {
              const Icon = item.icon;

              return (
                <li
                  key={item.step}
                  className="flex min-w-0 flex-col rounded-xl border border-line bg-[#fafbfc] p-3.5 motion-safe:transition-colors hover:border-navy/25"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="grid size-8 shrink-0 place-items-center rounded-lg bg-leaf-light text-leaf"
                        aria-hidden="true"
                      >
                        <Icon className="size-4" />
                      </div>
                      <span className="font-heading text-xs font-bold tracking-wider text-navy uppercase">
                        {t("howStepLabel")} {item.step}
                      </span>
                    </div>

                    <span className="inline-grid size-6 shrink-0 place-items-center rounded-full bg-navy/8 font-heading text-xs font-bold text-navy">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="mt-3 font-heading text-[15px] leading-snug font-bold text-ink">
                    {t(item.titleKey)}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                    {t(item.descriptionKey)}
                  </p>
                </li>
              );
            })}
          </ol>

          {/* Decision-support transparency notice */}
          <div className="flex items-start gap-2.5 rounded-xl border border-soil/15 bg-sand/70 px-3.5 py-2.5 text-[12.5px] leading-relaxed text-ink">
            <Info
              className="mt-0.5 size-4 shrink-0 text-navy"
              aria-hidden="true"
            />
            <p className="min-w-0">
              <strong className="font-semibold text-navy">
                {t("howDisclaimerLabel")}
              </strong>{" "}
              {t("howDisclaimerText")}
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
