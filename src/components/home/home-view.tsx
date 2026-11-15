"use client";

import * as React from "react";
import {
  ArrowDown,
  ArrowRight,
  CloudRainWind,
  Droplets,
  Flame,
  GraduationCap,
  MapPin,
  Satellite,
  Sprout,
  Tractor,
  Waves,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
import {
  computeClimate,
  computeNinoDelta,
  initEmbeddedStores,
  VALLEYS,
} from "@/lib/chacra-data";
import { cn } from "@/lib/utils";

export function HomeView() {
  const { language, t, fmt } = useLanguage();
  const router = useRouter();

  // Support #planner hash from original prototype bookmarks
  React.useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#planner") {
      router.replace("/planner");
    }
  }, [router]);

  // Compute real NASA POWER metrics for Trujillo (Moche Valley)
  const trujilloStats = React.useMemo(() => {
    const { clim, monthly } = initEmbeddedStores();
    const C = computeClimate("moche", clim);
    const nino = computeNinoDelta("moche", monthly);

    const rainY = C.RAIN.reduce((s, x) => s + (x || 0), 0);
    const etoY = C.ETO.reduce((s, x) => s + x, 0);
    const rainSharePct = Math.max(1, Math.round((100 * rainY) / Math.max(etoY, 1)));

    return {
      rainShare: `~${rainSharePct}%`,
      mar17Rain: nino.real && nino.r17 != null ? `${Math.round(nino.r17)} mm` : "75 mm",
      normalMarRain: nino.real && nino.marN != null ? Math.round(nino.marN) : 21,
      maxWarming: `+${nino.d} °C`,
    };
  }, []);

  const howSteps = [
    {
      num: 1,
      title: t("hW1t"),
      desc: t("hW1p"),
    },
    {
      num: 2,
      title: t("hW2t"),
      desc: t("hW2p"),
    },
    {
      num: 3,
      title: t("hW3t"),
      desc: t("hW3p"),
    },
  ];

  const audiences = [
    {
      icon: Tractor,
      title: t("hU1t"),
      desc: t("hU1p"),
    },
    {
      icon: GraduationCap,
      title: t("hU2t"),
      desc: t("hU2p"),
    },
    {
      icon: Waves,
      title: t("hU3t"),
      desc: t("hU3p"),
    },
  ];

  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section
        className="relative overflow-hidden px-4 py-12 text-white sm:px-6 sm:py-16 lg:py-[60px]"
        style={{
          background:
            "radial-gradient(900px 420px at 80% 0%, #2b5ea8 0%, var(--navy) 65%)",
        }}
      >
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-9">
          {/* Left Hero Copy + Quick Actions */}
          <div className="flex flex-col items-start">
            <Badge
              variant="outline"
              className="mb-3.5 rounded-full border-[#6fd39a]/40 bg-[#2f9e5b]/20 px-3.5 py-1 text-xs font-bold tracking-[1.8px] text-[#6fd39a] uppercase"
            >
              <Satellite className="mr-1.5 size-3.5 shrink-0" />
              {t("hKicker")}
            </Badge>

            <h1 className="font-heading text-3xl leading-[1.08] font-bold tracking-tight text-white sm:text-4xl lg:text-[46px]">
              {t("hTitle")}
            </h1>

            <p className="mt-3.5 max-w-[620px] text-base leading-relaxed text-[#c9d8ef] sm:mt-4 sm:text-[18px]">
              {t("hLead")}
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="mt-6 flex w-full flex-col gap-3 sm:mt-7 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/planner"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "h-auto w-full justify-center gap-2.5 rounded-xl border-0 bg-leaf px-6 py-4 text-base font-bold text-white shadow-[0_8px_24px_rgba(47,158,91,0.38)] transition-all hover:bg-[#278a4f] sm:w-auto sm:text-[17px]"
                )}
              >
                <Sprout className="size-5 shrink-0" />
                <span>{t("hCta")}</span>
                <ArrowRight className="size-5 shrink-0" />
              </Link>

              <a
                href="#how"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-auto w-full justify-center gap-2 rounded-xl border-white/40 bg-transparent px-5 py-3.5 text-[15px] font-semibold text-white hover:bg-white/12 hover:text-white sm:w-auto"
                )}
              >
                <span>{t("hHow").replace(" ↓", "")}</span>
                <ArrowDown className="size-4 shrink-0" />
              </a>
            </div>

            {/* Quick Valley Shortcuts */}
            <div className="mt-7 w-full border-t border-white/15 pt-4">
              <span className="mb-2 block text-xs font-semibold tracking-wide text-[#c9d8ef] uppercase">
                {t("hValleysLabel")}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {VALLEYS.map((v) => (
                  <Link
                    key={v.id}
                    href={`/planner?valley=${v.id}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/8 px-3 py-1 text-xs font-medium text-white transition-colors hover:border-[#6fd39a] hover:bg-white/18"
                  >
                    <MapPin className="size-3 text-[#6fd39a]" />
                    <span>{v[language]}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Orbital Satellite & Chacra SVG Illustration */}
          <div className="flex justify-center lg:justify-end">
            <svg
              viewBox="0 0 620 620"
              aria-hidden="true"
              className="w-full max-w-[290px] drop-shadow-[0_16px_40px_rgba(0,0,0,0.28)] sm:max-w-[350px] lg:max-w-[380px]"
            >
              <circle cx="310" cy="310" r="300" fill="#13305c" />
              <ellipse
                cx="310"
                cy="330"
                rx="270"
                ry="96"
                fill="none"
                stroke="#3fa7ff"
                strokeWidth="4"
                strokeDasharray="10 10"
                transform="rotate(-16 310 330)"
              />
              <path
                d="M40 440 Q310 360 580 440 L580 560 Q310 640 40 560Z"
                fill="#2f9e5b"
              />
              <path
                d="M70 470 Q310 400 550 470"
                stroke="#a0662f"
                strokeWidth="6"
                fill="none"
              />
              <path
                d="M80 505 Q310 438 540 505"
                stroke="#a0662f"
                strokeWidth="6"
                fill="none"
              />
              <path
                d="M95 540 Q310 476 525 540"
                stroke="#a0662f"
                strokeWidth="6"
                fill="none"
              />
              <g transform="translate(420 150) rotate(24)">
                <rect
                  x="-26"
                  y="-26"
                  width="52"
                  height="52"
                  rx="8"
                  fill="#eef2f8"
                />
                <rect x="-110" y="-20" width="70" height="40" fill="#3fa7ff" />
                <rect x="40" y="-20" width="70" height="40" fill="#3fa7ff" />
              </g>
              <path
                d="M400 190 L300 430"
                stroke="#ffd166"
                strokeWidth="5"
                strokeDasharray="12 10"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT SECTIONS */}
      <main className="mx-auto flex w-full max-w-[1180px] flex-col gap-11 px-4 pt-10 pb-14 sm:px-6 sm:pt-12 sm:pb-16">
        {/* SECTION 1: WHAT NASA DATA SHOWS AROUND TRUJILLO */}
        <section aria-labelledby="nasa-trujillo-heading">
          <div className="mb-4 sm:mb-5">
            <h2
              id="nasa-trujillo-heading"
              className="font-heading text-2xl font-bold text-ink sm:text-[26px]"
            >
              {t("hProbT")}
            </h2>
            <p className="mt-1 text-[14.5px] text-muted-foreground">
              {t("hProbS")}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Stat 1: Almost no rain */}
            <Card className="rounded-[14px] border-line bg-surface p-5 shadow-xs ring-0">
              <CardHeader className="p-0">
                <div className="mb-2 flex items-center justify-between">
                  <span
                    className="font-heading text-4xl leading-none font-bold sm:text-[38px]"
                    style={{ color: "#1f6fbf" }}
                  >
                    {trujilloStats.rainShare}
                  </span>
                  <div className="grid size-10 place-items-center rounded-xl bg-sky/12 text-[#1f6fbf]">
                    <Droplets className="size-5" />
                  </div>
                </div>
                <CardTitle className="font-heading text-lg font-bold text-ink">
                  {t("hS1t")}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-[14.5px] leading-relaxed text-[#3a4553]">
                  {t("hS1p")}
                </p>
              </CardContent>
            </Card>

            {/* Stat 2: El Niño shocks */}
            <Card className="rounded-[14px] border-line bg-surface p-5 shadow-xs ring-0">
              <CardHeader className="p-0">
                <div className="mb-2 flex items-center justify-between">
                  <span
                    className="font-heading text-4xl leading-none font-bold sm:text-[38px]"
                    style={{ color: "#a85b12" }}
                  >
                    {trujilloStats.mar17Rain}
                  </span>
                  <div className="grid size-10 place-items-center rounded-xl bg-warning/15 text-[#a85b12]">
                    <CloudRainWind className="size-5" />
                  </div>
                </div>
                <CardTitle className="font-heading text-lg font-bold text-ink">
                  {t("hS2t")}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-[14.5px] leading-relaxed text-[#3a4553]">
                  {fmt.hS2p(trujilloStats.normalMarRain)}
                </p>
              </CardContent>
            </Card>

            {/* Stat 3: Heat waves */}
            <Card className="rounded-[14px] border-line bg-surface p-5 shadow-xs ring-0">
              <CardHeader className="p-0">
                <div className="mb-2 flex items-center justify-between">
                  <span
                    className="font-heading text-4xl leading-none font-bold sm:text-[38px]"
                    style={{ color: "#c94a3c" }}
                  >
                    {trujilloStats.maxWarming}
                  </span>
                  <div className="grid size-10 place-items-center rounded-xl bg-danger/12 text-danger">
                    <Flame className="size-5" />
                  </div>
                </div>
                <CardTitle className="font-heading text-lg font-bold text-ink">
                  {t("hS3t")}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-[14.5px] leading-relaxed text-[#3a4553]">
                  {t("hS3p")}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* SECTION 2: HOW IT WORKS (#how) */}
        <section id="how" className="scroll-mt-6" aria-labelledby="how-heading">
          <div className="mb-4 sm:mb-5">
            <h2
              id="how-heading"
              className="font-heading text-2xl font-bold text-ink sm:text-[26px]"
            >
              {t("hHowT")}
            </h2>
            <p className="mt-1 text-[14.5px] text-muted-foreground">
              {t("hHowS")}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {howSteps.map((step) => (
              <Card
                key={step.num}
                className="rounded-[14px] border-line bg-surface p-5 shadow-xs ring-0"
              >
                <CardHeader className="p-0">
                  <span className="mb-2.5 inline-grid size-[30px] place-items-center rounded-full bg-leaf font-sans text-sm font-bold text-white">
                    {step.num}
                  </span>
                  <CardTitle className="font-heading text-lg font-bold text-ink">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-[14.5px] leading-relaxed text-[#3a4553]">
                    {step.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* SECTION 3: WHO IT IS FOR */}
        <section aria-labelledby="who-heading">
          <div className="mb-4 sm:mb-5">
            <h2
              id="who-heading"
              className="font-heading text-2xl font-bold text-ink sm:text-[26px]"
            >
              {t("hWhoT")}
            </h2>
            <p className="mt-1 text-[14.5px] text-muted-foreground">
              {t("hWhoS")}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {audiences.map((aud) => {
              const Icon = aud.icon;
              return (
                <Card
                  key={aud.title}
                  className="rounded-[14px] border-line bg-surface p-5 shadow-xs ring-0"
                >
                  <CardHeader className="p-0">
                    <div className="mb-2.5 inline-grid size-9 place-items-center rounded-lg bg-sand text-soil">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle className="font-heading text-lg font-bold text-ink">
                      {aud.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-[14.5px] leading-relaxed text-[#3a4553]">
                      {aud.desc}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* SECTION 4: BOTTOM QUICK-ACTION CTA BANNER */}
        <Card className="overflow-hidden rounded-2xl border-leaf/30 bg-gradient-to-br from-navy via-navy-light to-navy p-6 text-center text-white shadow-md ring-0 sm:p-10">
          <CardHeader className="mx-auto max-w-2xl p-0">
            <CardTitle className="font-heading text-2xl font-bold text-white sm:text-3xl">
              {t("hCtaCardTitle")}
            </CardTitle>
            <CardDescription className="mt-2 text-[15px] leading-relaxed text-[#c9d8ef]">
              {t("hCtaCardSub")}
            </CardDescription>
          </CardHeader>

          <CardContent className="mt-4 flex flex-col items-center gap-3 p-0">
            <Link
              href="/planner"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "h-auto gap-2.5 rounded-xl border-0 bg-leaf px-7 py-4 text-base font-bold text-white shadow-[0_8px_24px_rgba(47,158,91,0.38)] transition-all hover:bg-[#278a4f] sm:text-[17px]"
              )}
            >
              <Sprout className="size-5 shrink-0" />
              <span>{t("hCta")}</span>
              <ArrowRight className="size-5 shrink-0" />
            </Link>

            <p className="mt-1 text-xs text-[#c9d8ef]/90 sm:text-[13px]">
              {t("hFoot")}
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
