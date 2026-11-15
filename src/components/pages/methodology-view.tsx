"use client";

import {
  ArrowRight,
  BookOpen,
  Droplets,
  Flame,
  Layers,
  MapPin,
  Satellite,
  Sprout,
} from "lucide-react";
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
import { HowItWorksSection } from "@/components/dashboard/how-it-works-section";
import { useLanguage } from "@/context/language-context";
import { CANDIDATES, CROPS, EMBED, VALLEYS } from "@/lib/chacra-data";
import { cn } from "@/lib/utils";

const NASA_PARAMS = [
  {
    code: "T2M / T2M_MAX / T2M_MIN",
    es: "Temperatura media, máxima y mínima a 2 metros (°C) para cálculo de demanda evaporativa ETo y estrés térmico.",
    en: "Mean, maximum and minimum temperature at 2 meters (°C) for ETo water demand and heat-stress evaluation.",
  },
  {
    code: "PRECTOTCORR",
    es: "Precipitación corregida MERRA-2 (mm/día y mm/mes) para medir el aporte pluvial y choques de El Niño costero.",
    en: "MERRA-2 bias-corrected precipitation (mm/day and mm/month) to measure rainfall supply and coastal El Niño shocks.",
  },
  {
    code: "ALLSKY_SFC_SW_DWN",
    es: "Radiación solar de onda corta incidente en superficie CERES (MJ/m²/día).",
    en: "CERES all-sky surface shortwave downward irradiance (MJ/m²/day).",
  },
  {
    code: "GWETROOT",
    es: "Humedad del suelo en la zona radicular (fracción 0–1) derivada del modelo satelital GMAO.",
    en: "Root-zone soil wetness (0–1 fraction) derived from NASA GMAO satellite assimilation.",
  },
] as const;

export function MethodologyView() {
  const { language, t } = useLanguage();
  const isEs = language === "es";

  const criteria = [
    {
      icon: Sprout,
      color: "#2f9e5b",
      title: t("bSoil"),
      desc: isEs
        ? "Bonifica leguminosas fijadoras de nitrógeno (+15 pts), cultivos de cobertura (+10 pts), cambios de familia botánica (+6 pts por cambio) y raíces profundas; penaliza el monocultivo continuo."
        : "Rewards nitrogen-fixing legumes (+15 pts), cover crops (+10 pts), botanical family changes (+6 pts each) and deep roots; penalizes continuous monocropping.",
    },
    {
      icon: Droplets,
      color: "#3fa7ff",
      title: t("bWater"),
      desc: isEs
        ? "Calcula el requerimiento neto de riego en 18 meses: (Kc × ETo Hargreaves) − 0.8 × Lluvia NASA, contrastado con la disponibilidad hídrica de tu canal o pozo."
        : "Computes 18-month net irrigation need: (Kc × Hargreaves ETo) − 0.8 × NASA Rain, benchmarked against your canal or well water availability.",
    },
    {
      icon: Layers,
      color: "#a0662f",
      title: t("bSalt"),
      desc: isEs
        ? "Compara la conductividad eléctrica del suelo (baja 1.5, media 4.0, alta 7.0 dS/m) con el umbral FAO-29 de cada cultivo (Ayers & Westcot)."
        : "Compares soil electrical conductivity (low 1.5, medium 4.0, high 7.0 dS/m) against each crop's FAO-29 salinity threshold (Ayers & Westcot).",
    },
    {
      icon: Flame,
      color: "#d9822b",
      title: t("bNino"),
      desc: isEs
        ? "Simula el mayor calentamiento mensual registrado por la NASA entre 2010 y 2024 en tu valle (+ΔT °C) y penaliza cultivos sensibles expuestos en floración o cosecha durante feb–abr."
        : "Replays the strongest monthly warming recorded by NASA in 2010–2024 for your valley (+ΔT °C) and penalizes sensitive crops exposed during flowering/harvest in Feb–Apr.",
    },
  ];

  return (
    <main className="mx-auto flex w-full max-w-[1260px] flex-col gap-7 px-4 py-7 sm:gap-8 sm:px-6 sm:py-11">
      {/* Header Banner */}
      <div className="flex flex-col justify-between gap-5 rounded-2xl bg-navy p-5 text-white shadow-sm sm:p-8 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <Badge
            variant="outline"
            className="mb-2.5 h-auto rounded-full border-[#6fd39a]/40 bg-[#2f9e5b]/20 px-3 py-1 text-left text-xs leading-tight font-semibold whitespace-normal text-[#6fd39a]"
          >
            <BookOpen className="mr-1.5 size-3.5 shrink-0" />
            <span>
              {isEs
                ? "Documentación Científica y Abierta"
                : "Open Scientific Documentation"}
            </span>
          </Badge>
          <h1 className="font-heading text-2xl font-bold sm:text-3xl">
            {isEs
              ? "Metodología Agroclimática y Datos NASA POWER"
              : "Agroclimatic Methodology & NASA POWER Data"}
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-[#c9d8ef] sm:text-[15px]">
            {isEs
              ? "Sin cajas negras: cada recomendación de ChacraSat combina observaciones satelitales de la Tierra de la NASA con ecuaciones agronómicas estándar de la FAO."
              : "No black boxes: every ChacraSat recommendation combines NASA Earth observations with standard FAO agronomic equations."}
          </p>
        </div>

        <Link
          href="/planner"
          className={cn(
            buttonVariants({ variant: "default", size: "lg" }),
            "h-auto min-h-11 w-full shrink-0 justify-center gap-2 rounded-xl border-0 bg-leaf px-5 py-3 text-center text-sm font-bold whitespace-normal text-white shadow-md hover:bg-[#278a4f] sm:w-auto sm:py-3.5"
          )}
        >
          <span>{t("hCta")}</span>
          <ArrowRight className="size-4 shrink-0" />
        </Link>
      </div>

      {/* 4-Step Visual Process */}
      <HowItWorksSection className="mt-0 sm:mt-0" />

      {/* NASA POWER Parameters & Scoring Criteria */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="rounded-[14px] border-line bg-surface p-4 shadow-xs sm:p-5">
          <CardHeader className="p-0">
            <CardTitle className="flex items-center gap-2 font-heading text-lg font-bold text-ink">
              <Satellite className="size-5 shrink-0 text-sky" />
              <span>
                {isEs
                  ? "Variables Satelitales NASA POWER (Comunidad AG)"
                  : "NASA POWER Satellite Parameters (AG Community)"}
              </span>
            </CardTitle>
            <CardDescription className="text-[13.5px]">
              {isEs
                ? "Climatología y serie histórica mensual 2010–2024 de MERRA-2 y CERES."
                : "Climatology and 2010–2024 monthly time series from MERRA-2 and CERES."}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-3 p-0">
            {NASA_PARAMS.map((p) => (
              <div
                key={p.code}
                className="rounded-xl border border-line bg-[#f8fafc] p-3"
              >
                <code className="font-mono text-xs font-bold break-all text-navy">
                  {p.code}
                </code>
                <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
                  {isEs ? p.es : p.en}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="rounded-[14px] border-line bg-surface p-4 shadow-xs sm:p-5">
          <CardHeader className="p-0">
            <CardTitle className="font-heading text-lg font-bold text-ink">
              {isEs
                ? "Criterios de Evaluación Transparente (0–100)"
                : "Transparent Scoring Criteria (0–100)"}
            </CardTitle>
            <CardDescription className="text-[13.5px]">
              {isEs
                ? "Los puntajes se ponderan dinámicamente según la prioridad elegida por el agricultor."
                : "Scores are dynamically weighted according to the farmer's chosen priority."}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-3 p-0">
            {criteria.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="flex items-start gap-3 rounded-xl border border-line bg-[#f8fafc] p-3"
                >
                  <div
                    className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg text-white"
                    style={{ backgroundColor: c.color }}
                  >
                    <Icon className="size-4" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-heading text-sm font-bold text-ink">
                      {c.title}
                    </h3>
                    <p className="mt-0.5 text-[12.5px] leading-relaxed text-muted-foreground">
                      {c.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>

      {/* Coastal Crop Knowledge Base (Responsive Cards on Mobile + Table on Tablet/Desktop) */}
      <Card className="overflow-hidden rounded-[14px] border-line bg-surface p-4 shadow-xs sm:p-5">
        <CardHeader className="p-0">
          <CardTitle className="font-heading text-lg font-bold text-ink">
            {isEs
              ? "Base Agronómica de Cultivos de la Costa Norte (FAO-56 / FAO-29)"
              : "Northern Coast Crop Knowledge Base (FAO-56 / FAO-29)"}
          </CardTitle>
          <CardDescription className="text-[13.5px]">
            {isEs
              ? "Parámetros indicativos para valles desérticos irrigados de La Libertad."
              : "Indicative parameters for irrigated coastal-desert valleys in La Libertad."}
          </CardDescription>
        </CardHeader>

        <CardContent className="p-0">
          {/* Mobile Card List (< md) */}
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:hidden">
            {CANDIDATES.map((id) => {
              const c = CROPS[id];
              return (
                <div
                  key={id}
                  className="rounded-xl border border-line bg-[#f8fafc] p-3"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-2 font-heading text-sm font-bold text-ink">
                      <i
                        className="inline-block size-3 shrink-0 rounded-xs"
                        style={{ backgroundColor: c.color }}
                      />
                      <span>{c[language]}</span>
                    </span>
                    <span className="rounded-md bg-white px-2 py-0.5 text-[11px] font-medium text-muted-foreground ring-1 ring-line">
                      {c.fam}
                    </span>
                  </div>
                  <div className="mt-2.5 grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs">
                    <div>
                      <span className="text-muted-foreground">
                        {isEs ? "Duración:" : "Duration:"}{" "}
                      </span>
                      <b className="font-semibold text-ink">
                        {c.m} {isEs ? "meses" : "mo"}
                      </b>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Kc: </span>
                      <b className="font-mono font-semibold text-ink">
                        {c.kc?.toFixed(2)}
                      </b>
                    </div>
                    <div>
                      <span className="text-muted-foreground">ECe: </span>
                      <b className="font-mono font-semibold text-ink">
                        {c.salt} dS/m
                      </b>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Tmax: </span>
                      <b className="font-mono font-semibold text-ink">
                        {c.heat} °C
                      </b>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop/Tablet Table (md+) */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[640px] border-collapse text-left text-[13px]">
              <thead>
                <tr className="border-b border-line bg-[#f8fafc] text-xs font-bold tracking-wider text-navy uppercase">
                  <th className="py-2.5 pr-3 pl-3">
                    {isEs ? "Cultivo" : "Crop"}
                  </th>
                  <th className="px-3 py-2.5">
                    {isEs ? "Familia" : "Botanical Family"}
                  </th>
                  <th className="px-3 py-2.5">
                    {isEs ? "Duración" : "Duration"}
                  </th>
                  <th className="px-3 py-2.5">Kc (FAO-56)</th>
                  <th className="px-3 py-2.5">
                    {isEs ? "Umbral Salinidad (ECe)" : "Salt Threshold (ECe)"}
                  </th>
                  <th className="px-3 py-2.5">
                    {isEs ? "Umbral Calor (Tmax)" : "Heat Limit (Tmax)"}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {CANDIDATES.map((id) => {
                  const c = CROPS[id];
                  return (
                    <tr key={id} className="hover:bg-muted/40">
                      <td className="py-2.5 pr-3 pl-3 font-semibold text-ink">
                        <span className="inline-flex items-center gap-2">
                          <i
                            className="inline-block size-3 rounded-xs"
                            style={{ backgroundColor: c.color }}
                          />
                          {c[language]}
                        </span>
                      </td>
                      <td className="px-3 py-2.5 text-muted-foreground">
                        {c.fam}
                      </td>
                      <td className="px-3 py-2.5">
                        {c.m} {isEs ? "meses" : "months"}
                      </td>
                      <td className="px-3 py-2.5 font-mono">
                        {c.kc?.toFixed(2)}
                      </td>
                      <td className="px-3 py-2.5 font-mono">{c.salt} dS/m</td>
                      <td className="px-3 py-2.5 font-mono">{c.heat} °C</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Covered Valleys Grid */}
      <Card className="rounded-[14px] border-line bg-surface p-4 shadow-xs sm:p-5">
        <CardHeader className="p-0">
          <CardTitle className="font-heading text-lg font-bold text-ink">
            {isEs
              ? "Celdas Satelitales en Valles de La Libertad"
              : "Satellite Grid Cells Across La Libertad Valleys"}
          </CardTitle>
          <CardDescription className="text-[13.5px]">
            {isEs
              ? "Selecciona un valle para abrir directamente su simulación en el planificador."
              : "Select any valley to open its simulation directly in the planner."}
          </CardDescription>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-3 p-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {VALLEYS.map((v) => {
            const elev = EMBED.clim[v.id]?.c?.[2];
            return (
              <Link
                key={v.id}
                href={`/planner?valley=${v.id}`}
                className="group flex flex-col justify-between rounded-xl border border-line bg-[#f8fafc] p-3.5 transition-all hover:border-leaf hover:bg-leaf-light/40"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-leaf">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="size-3.5 shrink-0" />
                      La Libertad
                    </span>
                    <ArrowRight className="size-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" />
                  </div>
                  <h3 className="mt-1.5 font-heading text-sm font-bold text-ink">
                    {v[language]}
                  </h3>
                </div>
                <p className="mt-2 font-mono text-[11.5px] text-muted-foreground">
                  {v.lat}°, {v.lon}°{" "}
                  {elev != null ? `· ${Math.round(elev)} m` : ""}
                </p>
              </Link>
            );
          })}
        </CardContent>
      </Card>
    </main>
  );
}
