"use client";

import * as React from "react";
import {
  BarController,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import {
  AlertTriangle,
  ArrowRight,
  Star,
  Waves,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { HowItWorksSection } from "@/components/dashboard/how-it-works-section";
import { useLanguage } from "@/context/language-context";
import {
  CROPS,
  type CropId,
  CURRENT_LIST,
  computeRotations,
  type FieldState,
  initEmbeddedStores,
  MONTHS,
  PRIOS,
  type PrioId,
  SALTS,
  type SaltId,
  SOILS,
  type SoilId,
  VALLEYS,
  type ValleyId,
  WATERS,
  type WaterId,
} from "@/lib/chacra-data";
import { cn } from "@/lib/utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  LineController,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

export function DashboardView() {
  const { language, t, fmt, setIsNasaData } = useLanguage();

  const { clim: climStore, monthly: monthlyStore } = React.useMemo(
    () => initEmbeddedStores(),
    []
  );

  const [field, setField] = React.useState<FieldState>({
    valley: "moche",
    current: "maize",
    soil: "loam",
    salt: "med",
    water: "canal",
    start: 11,
    prio: "soil",
  });

  const climCanvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const ninoCanvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const climChartRef = React.useRef<ChartJS | null>(null);
  const ninoChartRef = React.useRef<ChartJS | null>(null);

  const currentValley = React.useMemo(
    () => VALLEYS.find((v) => v.id === field.valley) || VALLEYS[0],
    [field.valley]
  );

  const R = React.useMemo(
    () => computeRotations(field, climStore, monthlyStore),
    [field, climStore, monthlyStore]
  );

  const C = R.C;

  // Sync NASA data badge status with Header
  React.useEffect(() => {
    setIsNasaData(C.nasa);
  }, [C.nasa, setIsNasaData]);

  const cname = React.useCallback(
    (id: CropId) => CROPS[id][language],
    [language]
  );

  // Climate Chart Effect
  React.useEffect(() => {
    const canvas = climCanvasRef.current;
    if (!canvas) return;

    if (climChartRef.current) {
      climChartRef.current.destroy();
      climChartRef.current = null;
    }

    const isMobile =
      typeof window !== "undefined" && window.innerWidth < 640;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ds: any[] = [
      {
        type: "bar",
        label: t("rain"),
        data: C.RAIN,
        backgroundColor: "rgba(63,167,255,.55)",
        yAxisID: "y1",
        order: 3,
      },
      {
        type: "bar",
        label: t("eto"),
        data: C.ETO.map((x) => +x.toFixed(0)),
        backgroundColor: "rgba(160,102,47,.35)",
        yAxisID: "y1",
        order: 4,
      },
      {
        type: "line",
        label: t("tmax"),
        data: C.TMAX,
        borderColor: "#c94a3c",
        backgroundColor: "#c94a3c",
        tension: 0.35,
        yAxisID: "y",
        order: 1,
      },
      {
        type: "line",
        label: t("tmin"),
        data: C.TMIN,
        borderColor: "#13305c",
        backgroundColor: "#13305c",
        tension: 0.35,
        yAxisID: "y",
        order: 2,
      },
    ];

    if (C.WET) {
      ds.push({
        type: "line",
        label: t("wet"),
        data: C.WET,
        borderColor: "#2f9e5b",
        borderDash: [5, 4],
        yAxisID: "y2",
        tension: 0.35,
        order: 0,
      });
    }

    climChartRef.current = new ChartJS(canvas, {
      type: "bar",
      data: {
        labels: MONTHS[language],
        datasets: ds,
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        interaction: { mode: "index", intersect: false },
        plugins: {
          legend: {
            labels: {
              boxWidth: 10,
              font: { size: isMobile ? 10 : 11 },
              padding: isMobile ? 8 : 12,
            },
          },
        },
        scales: {
          x: {
            ticks: {
              font: { size: isMobile ? 10 : 11 },
              maxRotation: 0,
            },
          },
          y: {
            position: "left",
            title: { display: !isMobile, text: "°C" },
            ticks: { font: { size: isMobile ? 10 : 11 } },
          },
          y1: {
            position: "right",
            grid: { drawOnChartArea: false },
            title: { display: !isMobile, text: "mm" },
            ticks: { font: { size: isMobile ? 10 : 11 } },
          },
          y2: {
            display: !!C.WET && !isMobile,
            min: 0,
            max: 1,
            position: "right",
            grid: { drawOnChartArea: false },
            ticks: { font: { size: 10 } },
          },
        },
      },
    });

    return () => {
      if (climChartRef.current) {
        climChartRef.current.destroy();
        climChartRef.current = null;
      }
    };
  }, [C, language, t]);

  // El Niño Chart Effect
  React.useEffect(() => {
    const canvas = ninoCanvasRef.current;
    if (!canvas) return;

    if (ninoChartRef.current) {
      ninoChartRef.current.destroy();
      ninoChartRef.current = null;
    }

    if (!R.nino.real || !R.nino.rows || !R.nino.avg) return;

    const isMobile =
      typeof window !== "undefined" && window.innerWidth < 640;
    const rows = R.nino.rows;
    const avgArr = R.nino.avg;
    const labels = rows.map(
      (r) => `${MONTHS[language][r.m]} ${String(r.y).slice(2)}`
    );

    ninoChartRef.current = new ChartJS(canvas, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            type: "bar",
            label: t("rainSeries"),
            data: rows.map((r) => r.rain),
            backgroundColor: rows.map((r) =>
              r.y === 2017 || r.y === 2023
                ? "#c94a3c"
                : "rgba(63,167,255,.6)"
            ),
            yAxisID: "y1",
          },
          {
            type: "line",
            label: t("tAnom"),
            data: rows.map((r) => +((r.t || 0) - avgArr[r.m]).toFixed(2)),
            borderColor: "#d9822b",
            pointRadius: 0,
            borderWidth: 1.5,
            yAxisID: "y",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        interaction: { mode: "index", intersect: false },
        plugins: {
          legend: {
            labels: {
              boxWidth: 10,
              font: { size: isMobile ? 10 : 11 },
            },
          },
        },
        scales: {
          x: {
            ticks: {
              maxTicksLimit: isMobile ? 8 : 15,
              font: { size: isMobile ? 9 : 10 },
            },
          },
          y: {
            title: { display: !isMobile, text: "°C" },
            ticks: { font: { size: isMobile ? 10 : 11 } },
          },
          y1: {
            position: "right",
            grid: { drawOnChartArea: false },
            title: { display: !isMobile, text: "mm" },
            ticks: { font: { size: isMobile ? 10 : 11 } },
          },
        },
      },
    });

    return () => {
      if (ninoChartRef.current) {
        ninoChartRef.current.destroy();
        ninoChartRef.current = null;
      }
    };
  }, [R.nino, language, t]);

  // Computed stats for Step 2
  const rainY = C.RAIN.reduce((s, x) => s + (x || 0), 0);
  const etoY = C.ETO.reduce((s, x) => s + x, 0);
  const hottestIdx = C.TMAX.indexOf(Math.max(...C.TMAX));
  const wetValid = C.WET ? C.WET.filter((x): x is number => x != null) : [];
  const wetAvg = wetValid.length
    ? (wetValid.reduce((s, x) => s + x, 0) / wetValid.length).toFixed(2)
    : null;

  const coordsStr = C.coords
    ? `${(+C.coords[1]).toFixed(2)}°, ${(+C.coords[0]).toFixed(2)}°`
    : `${currentValley.lat}°, ${currentValley.lon}°`;
  const elevStr =
    C.coords && C.coords[2] != null ? Math.round(C.coords[2]) : "–";

  const s2Subtitle = C.nasa
    ? fmt.s2subNasa(currentValley[language], coordsStr, elevStr)
    : fmt.s2subRef(currentValley[language]);

  const rainPct = Math.max(1, Math.round((100 * rainY) / Math.max(etoY, 1)));

  // Legend crops used in top rotations
  const usedCrops = React.useMemo(() => {
    const s = new Set<CropId>();
    R.top.forEach((r) => r.seq.forEach((c) => s.add(c)));
    return Array.from(s);
  }, [R.top]);

  return (
    <main className="mx-auto w-full max-w-[1180px] overflow-x-hidden px-3.5 pt-4 pb-10 sm:px-[18px] sm:pt-[22px]">
      {/* STEPS GRID: Left Column (Step 1) + Right Column (Steps 2 & 3) */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[340px_minmax(0,1fr)] sm:gap-[18px]">
        {/* STEP 1: YOUR FIELD */}
        <Card
          id="form"
          className="min-w-0 rounded-[14px] border-line bg-surface p-4 shadow-xs ring-0 sm:p-[18px]"
        >
          <CardHeader className="p-0">
            <CardTitle className="flex items-center gap-2 font-heading text-lg font-bold text-ink">
              <span className="inline-grid size-6 shrink-0 place-items-center rounded-full bg-navy font-sans text-[13px] font-semibold text-white">
                1
              </span>
              <span>{t("s1")}</span>
            </CardTitle>
            <CardDescription className="text-[13.5px] text-muted-foreground">
              {t("s1sub")}
            </CardDescription>
          </CardHeader>

          <CardContent className=" flex flex-col gap-3 p-0">
            {/* Valley */}
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="valley-select" className="text-[13px] font-semibold">
                {t("valley")}
              </Label>
              <Select
                value={field.valley}
                onValueChange={(val) => {
                  if (!val) return;
                  setField((f) => ({ ...f, valley: val as ValleyId }));
                }}
              >
                <SelectTrigger
                  id="valley-select"
                  className="h-10 w-full rounded-[9px] border-line bg-white px-3 text-[13.5px]"
                >
                  <SelectValue>{currentValley[language]}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {VALLEYS.map((v) => (
                    <SelectItem key={v.id} value={v.id}>
                      {v[language]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Current or last crop */}
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="current-select" className="text-[13px] font-semibold">
                {t("current")}
              </Label>
              <Select
                value={field.current}
                onValueChange={(val) => {
                  if (!val) return;
                  setField((f) => ({ ...f, current: val as CropId }));
                }}
              >
                <SelectTrigger
                  id="current-select"
                  className="h-10 w-full rounded-[9px] border-line bg-white px-3 text-[13.5px]"
                >
                  <SelectValue>{cname(field.current)}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {CURRENT_LIST.map((cid) => (
                    <SelectItem key={cid} value={cid}>
                      {cname(cid)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Soil texture */}
            <div className="flex flex-col gap-1.5">
              <Label className="text-[13px] font-semibold">{t("soil")}</Label>
              <div className="flex flex-wrap gap-1.5" role="group" aria-label={t("soil")}>
                {(Object.keys(SOILS) as SoilId[]).map((k) => {
                  const active = field.soil === k;
                  return (
                    <Button
                      key={k}
                      type="button"
                      variant={active ? "default" : "outline"}
                      size="sm"
                      onClick={() => setField((f) => ({ ...f, soil: k }))}
                      className={cn(
                        "h-auto rounded-full px-3 py-1.5 text-[13px] font-medium whitespace-normal",
                        active
                          ? "border-navy bg-navy text-white hover:bg-navy/90"
                          : "border-line bg-white text-ink hover:bg-muted"
                      )}
                    >
                      {SOILS[k][language]}
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Soil salinity */}
            <div className="flex flex-col gap-1.5">
              <Label className="text-[13px] font-semibold">{t("salt")}</Label>
              <div className="flex flex-wrap gap-1.5" role="group" aria-label={t("salt")}>
                {(Object.keys(SALTS) as SaltId[]).map((k) => {
                  const active = field.salt === k;
                  return (
                    <Button
                      key={k}
                      type="button"
                      variant={active ? "default" : "outline"}
                      size="sm"
                      onClick={() => setField((f) => ({ ...f, salt: k }))}
                      className={cn(
                        "h-auto rounded-full px-3 py-1.5 text-[13px] font-medium whitespace-normal",
                        active
                          ? "border-navy bg-navy text-white hover:bg-navy/90"
                          : "border-line bg-white text-ink hover:bg-muted"
                      )}
                    >
                      {SALTS[k][language]}
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Irrigation water */}
            <div className="flex flex-col gap-1.5">
              <Label className="text-[13px] font-semibold">{t("water")}</Label>
              <div className="flex flex-wrap gap-1.5" role="group" aria-label={t("water")}>
                {(Object.keys(WATERS) as WaterId[]).map((k) => {
                  const active = field.water === k;
                  return (
                    <Button
                      key={k}
                      type="button"
                      variant={active ? "default" : "outline"}
                      size="sm"
                      onClick={() => setField((f) => ({ ...f, water: k }))}
                      className={cn(
                        "h-auto rounded-full px-3 py-1.5 text-left text-[13px] font-medium whitespace-normal",
                        active
                          ? "border-navy bg-navy text-white hover:bg-navy/90"
                          : "border-line bg-white text-ink hover:bg-muted"
                      )}
                    >
                      {WATERS[k][language]}
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Next planting month */}
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="start-select" className="text-[13px] font-semibold">
                {t("start")}
              </Label>
              <Select
                value={String(field.start)}
                onValueChange={(val) => {
                  if (val == null) return;
                  setField((f) => ({ ...f, start: Number(val) }));
                }}
              >
                <SelectTrigger
                  id="start-select"
                  className="h-10 w-full rounded-[9px] border-line bg-white px-3 text-[13.5px]"
                >
                  <SelectValue>{MONTHS[language][field.start]}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {MONTHS[language].map((m, i) => (
                    <SelectItem key={m} value={String(i)}>
                      {m}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Priority */}
            <div className="flex flex-col gap-1.5">
              <Label className="text-[13px] font-semibold">{t("priority")}</Label>
              <div className="flex flex-wrap gap-1.5" role="group" aria-label={t("priority")}>
                {(Object.keys(PRIOS) as PrioId[]).map((k) => {
                  const active = field.prio === k;
                  return (
                    <Button
                      key={k}
                      type="button"
                      variant={active ? "default" : "outline"}
                      size="sm"
                      onClick={() => setField((f) => ({ ...f, prio: k }))}
                      className={cn(
                        "h-auto rounded-full px-3 py-1.5 text-left text-[13px] font-medium whitespace-normal",
                        active
                          ? "border-navy bg-navy text-white hover:bg-navy/90"
                          : "border-line bg-white text-ink hover:bg-muted"
                      )}
                    >
                      {PRIOS[k][language]}
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-1 rounded-[10px] bg-leaf-light p-3 text-[13px] leading-snug text-ink">
              {t("decide_prefix")}
              <b className="font-semibold">{t("decide_bold")}</b>
              {t("decide_suffix")}
            </div>
          </CardContent>
        </Card>

        {/* RIGHT COLUMN: STEP 2 + STEP 3 */}
        <div className="flex min-w-0 flex-col gap-4 sm:gap-[18px]">
          {/* STEP 2: WHAT NASA SATELLITES SEE */}
          <Card className="min-w-0 rounded-[14px] border-line bg-surface p-4 shadow-xs ring-0 sm:p-[18px]">
            <CardHeader className="p-0">
              <CardTitle className="flex items-center gap-2 font-heading text-lg font-bold text-ink">
                <span className="inline-grid size-6 shrink-0 place-items-center rounded-full bg-navy font-sans text-[13px] font-semibold text-white">
                  2
                </span>
                <span>{t("s2")}</span>
              </CardTitle>
              <CardDescription className="text-[13.5px] leading-relaxed text-muted-foreground">
                {s2Subtitle}
              </CardDescription>
            </CardHeader>

            <CardContent className="flex min-w-0 flex-col gap-3.5 p-0">
              {/* 4 KPI Stats */}
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                <div className="min-w-0 rounded-[10px] bg-sand p-2.5 sm:px-3 sm:py-2.5">
                  <b className="block font-heading text-lg leading-tight font-bold text-ink sm:text-xl">
                    {rainY.toFixed(rainY < 50 ? 1 : 0)} mm
                  </b>
                  <span className="mt-0.5 block text-xs leading-tight text-muted-foreground">
                    {t("stRain")}
                  </span>
                </div>

                <div className="min-w-0 rounded-[10px] bg-sand p-2.5 sm:px-3 sm:py-2.5">
                  <b className="block font-heading text-lg leading-tight font-bold text-ink sm:text-xl">
                    {Math.round(etoY)} mm
                  </b>
                  <span className="mt-0.5 block text-xs leading-tight text-muted-foreground">
                    {t("stEto")}
                  </span>
                </div>

                <div className="min-w-0 rounded-[10px] bg-sand p-2.5 sm:px-3 sm:py-2.5">
                  <b className="block font-heading text-base leading-tight font-bold text-ink sm:text-xl">
                    {C.TMAX[hottestIdx].toFixed(1)} °C · {MONTHS[language][hottestIdx]}
                  </b>
                  <span className="mt-0.5 block text-xs leading-tight text-muted-foreground">
                    {t("stTmax")}
                  </span>
                </div>

                <div className="min-w-0 rounded-[10px] bg-sand p-2.5 sm:px-3 sm:py-2.5">
                  <b className="block font-heading text-lg leading-tight font-bold text-ink sm:text-xl">
                    {wetAvg ? `${wetAvg} / 1` : "—"}
                  </b>
                  <span className="mt-0.5 block text-xs leading-tight text-muted-foreground">
                    {t("stWet")}
                  </span>
                </div>
              </div>

              {/* Climate Chart */}
              <div className="relative h-[230px] w-full min-w-0 sm:h-[260px]">
                <canvas ref={climCanvasRef} />
              </div>

              <p className="text-[12.5px] leading-relaxed text-muted-foreground">
                {fmt.climNote(rainPct)}
              </p>
            </CardContent>
          </Card>

          {/* STEP 3: ROTATION OPTIONS FOR NEXT 18 MONTHS */}
          <Card className="min-w-0 rounded-[14px] border-line bg-surface p-4 shadow-xs ring-0 sm:p-[18px]">
            <CardHeader className="p-0">
              <CardTitle className="flex items-center gap-2 font-heading text-lg font-bold text-ink">
                <span className="inline-grid size-6 shrink-0 place-items-center rounded-full bg-navy font-sans text-[13px] font-semibold text-white">
                  3
                </span>
                <span>{t("s3")}</span>
              </CardTitle>
              <CardDescription className="text-[13.5px] text-muted-foreground">
                {t("s3sub")}
              </CardDescription>
            </CardHeader>

            <CardContent className="flex min-w-0 flex-col gap-3.5 p-0">
              {R.top.length === 0 ? (
                <div className="flex items-center gap-2 rounded-lg border-l-4 border-warning bg-[#fff3e6] p-3 text-[13px] text-ink">
                  <AlertTriangle className="size-4 shrink-0 text-warning" />
                  <span>{t("noOpt")}</span>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-3.5 xl:grid-cols-3">
                  {R.top.map((r, i) => {
                    const isBest = i === 0;
                    const base = R.base;
                    const why: string[] = [];
                    const leg = r.seq.find(
                      (id) => CROPS[id].legume && !CROPS[id].cover
                    );
                    if (leg) why.push(fmt.why_legume(cname(leg)));
                    const cov = r.seq.find((id) => CROPS[id].cover);
                    if (cov) why.push(fmt.why_cover(cname(cov)));
                    if (r.changes >= 2) why.push(fmt.why_family(r.changes));
                    const pct = base
                      ? Math.round((100 * (base.water - r.water)) / base.water)
                      : 0;
                    why.push(
                      fmt.why_water(
                        r.water.toLocaleString(),
                        pct,
                        cname(base?.cur || "maize")
                      )
                    );
                    const tol = r.seq.find((id) => (CROPS[id].salt || 0) >= 6);
                    if (tol && field.salt !== "low") {
                      why.push(fmt.why_salt(cname(tol)));
                    }
                    const deep = r.seq.find((id) => CROPS[id].deep);
                    if (deep && why.length < 5) {
                      why.push(fmt.why_deep(cname(deep)));
                    }
                    why.push(
                      r.stress === 0
                        ? fmt.why_nino_ok(R.nino.d)
                        : fmt.why_nino_bad(r.stress, R.nino.d)
                    );

                    const scoreBars = [
                      { label: t("bSoil"), val: r.soil, color: "#2f9e5b" },
                      { label: t("bWater"), val: r.waterS, color: "#3fa7ff" },
                      { label: t("bSalt"), val: r.salt, color: "#a0662f" },
                      { label: t("bNino"), val: r.nino, color: "#d9822b" },
                      { label: t("bInc"), val: r.inc, color: "#8e5ea2" },
                    ];

                    return (
                      <div
                        key={r.seq.join("-")}
                        className={cn(
                          "flex min-w-0 flex-col gap-2.5 rounded-xl bg-white p-3.5 transition-shadow",
                          isBest
                            ? "border-2 border-leaf shadow-[0_4px_18px_rgba(47,158,91,0.12)]"
                            : "border border-line"
                        )}
                      >
                        {/* Option Header */}
                        <div className="flex items-start justify-between gap-2">
                          <Badge
                            variant="secondary"
                            className={cn(
                              "h-auto rounded-md px-2 py-0.5 text-[11px] font-bold tracking-wider uppercase",
                              isBest
                                ? "bg-leaf-light text-leaf"
                                : "bg-muted text-muted-foreground"
                            )}
                          >
                            {isBest ? (
                              <span className="inline-flex items-center gap-1">
                                <Star className="size-3 fill-current" />
                                {t("best")}
                              </span>
                            ) : (
                              `${t("opt")} ${i + 1}`
                            )}
                          </Badge>

                          <div className="text-right font-heading text-[24px] leading-none font-bold text-navy sm:text-[26px]">
                            {r.total}
                            <small className="ml-0.5 font-sans text-xs font-medium text-muted-foreground">
                              /100 {t("score")}
                            </small>
                          </div>
                        </div>

                        {/* Crop Sequence */}
                        <div className="flex flex-wrap items-center gap-1 text-[13.5px] font-semibold">
                          {r.seq.map((id, idx) => (
                            <React.Fragment key={`${id}-${idx}`}>
                              {idx > 0 && (
                                <ArrowRight className="size-3.5 shrink-0 text-muted-foreground" />
                              )}
                              <span style={{ color: CROPS[id].color }}>
                                {cname(id)}
                              </span>
                            </React.Fragment>
                          ))}
                        </div>

                        {/* 18-Month Timeline */}
                        <div className="min-w-0">
                          <div
                            className="grid gap-[2px]"
                            style={{
                              gridTemplateColumns: "repeat(18, minmax(0, 1fr))",
                            }}
                          >
                            {r.cells.map((id, idx) => (
                              <div
                                key={idx}
                                title={`${MONTHS[language][(field.start + idx) % 12]}: ${cname(id)}`}
                                className="h-[18px] rounded-[3px]"
                                style={{ backgroundColor: CROPS[id].color }}
                              />
                            ))}
                          </div>
                          <div
                            className="mt-0.5 grid gap-[2px] text-center text-[9px] text-muted-foreground sm:text-[9.5px]"
                            style={{
                              gridTemplateColumns: "repeat(18, minmax(0, 1fr))",
                            }}
                          >
                            {Array.from({ length: 18 }).map((_, k) => (
                              <span key={k} className="truncate">
                                {MONTHS[language][(field.start + k) % 12].slice(
                                  0,
                                  1
                                )}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* 5 Transparent Score Bars */}
                        <div className="grid grid-cols-[95px_minmax(0,1fr)_26px] items-center gap-x-2 gap-y-1 text-xs sm:grid-cols-[110px_minmax(0,1fr)_30px] sm:text-[12.5px]">
                          {scoreBars.map((b) => (
                            <React.Fragment key={b.label}>
                              <span className="truncate text-ink">{b.label}</span>
                              <div className="h-2 overflow-hidden rounded-[5px] bg-[#edf0f4]">
                                <i
                                  className="block h-full rounded-[5px]"
                                  style={{
                                    width: `${b.val}%`,
                                    backgroundColor: b.color,
                                  }}
                                />
                              </div>
                              <b className="text-right font-semibold text-ink">
                                {b.val}
                              </b>
                            </React.Fragment>
                          ))}
                        </div>

                        {/* Plain-language reasons */}
                        <ul className="m-0 list-disc space-y-1 pl-4 text-[12.5px] leading-snug text-[#333] sm:text-[13px]">
                          {why.map((w, idx) => (
                            <li key={idx}>{w}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Baseline comparison ("Keep the same crop") */}
              {R.base && (
                <div className="flex flex-col gap-2 rounded-xl border border-dashed border-[#e7b98a] bg-[#fff7ef] px-3.5 py-3 text-[13px] sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 sm:text-[13.5px]">
                  <span>
                    {t("baselineTitle")}{" "}
                    <b className="font-heading font-bold">
                      {cname(R.base.cur || "maize")}
                    </b>
                  </span>
                  <span>
                    {t("baselineScore")}:{" "}
                    <b className="font-heading font-bold">{R.base.total}</b>/100{" "}
                    {R.top[0] && (
                      <span>
                        ({t("vs")}:{" "}
                        <b className="font-heading font-bold text-leaf">
                          {R.top[0].total}
                        </b>
                        )
                      </span>
                    )}
                  </span>
                  <span>
                    {t("irrig")}:{" "}
                    <b className="font-heading font-bold">
                      {R.base.water.toLocaleString()} mm
                    </b>
                  </span>
                  <span>
                    {t("bSoil")}:{" "}
                    <b className="font-heading font-bold">{R.base.soil}</b>
                  </span>
                </div>
              )}

              {/* Crop Legend */}
              {usedCrops.length > 0 && (
                <div className="flex flex-wrap gap-x-3 gap-y-1.5 pt-0.5 text-xs text-ink">
                  {usedCrops.map((id) => (
                    <span key={id} className="inline-flex items-center gap-1.5">
                      <i
                        className="inline-block size-2.5 shrink-0 rounded-[3px]"
                        style={{ backgroundColor: CROPS[id].color }}
                      />
                      <span>{cname(id)}</span>
                    </span>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* EL NIÑO STRESS TEST */}
      <Card className="mt-4 min-w-0 rounded-[14px] border-line bg-surface p-4 shadow-xs ring-0 sm:mt-[18px] sm:p-[18px]">
        <CardHeader className="p-0">
          <CardTitle className="flex items-center gap-2 font-heading text-lg font-bold text-ink">
            <Waves className="size-5 shrink-0 text-sky" />
            <span>{t("nino")}</span>
          </CardTitle>
          <CardDescription className="text-[13.5px] leading-relaxed text-muted-foreground">
            {t("ninosub")}
          </CardDescription>
        </CardHeader>

        <CardContent className="p-0">
          {!R.nino.real ? (
            <div className="flex items-start gap-2.5 rounded-lg border-l-4 border-warning bg-[#fff3e6] p-3 text-[13px] text-ink">
              <AlertTriangle className="mt-0.5 size-4 shrink-0 text-warning" />
              <span>{t("ninoNoData")}</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-[minmax(0,1fr)_280px]">
              <div className="relative h-[220px] w-full min-w-0 sm:h-[260px]">
                <canvas ref={ninoCanvasRef} />
              </div>

              <div className="rounded-xl bg-sand/70 p-3.5 text-[12.5px] leading-relaxed text-ink">
                <b className="mb-1.5 block font-heading text-[13.5px] text-navy">
                  {language === "es"
                    ? "Registro real de la NASA para este valle:"
                    : "Real NASA record for this valley:"}
                </b>
                <ul className="m-0 list-disc space-y-1 pl-4">
                  <li>
                    {language === "es" ? (
                      <>
                        Lluvia de marzo 2017:{" "}
                        <b>{(R.nino.r17 || 0).toFixed(0)} mm</b> (un marzo
                        normal: ~{(R.nino.marN || 0).toFixed(0)} mm).
                      </>
                    ) : (
                      <>
                        March 2017 rain:{" "}
                        <b>{(R.nino.r17 || 0).toFixed(0)} mm</b> (a normal
                        March: ~{(R.nino.marN || 0).toFixed(0)} mm).
                      </>
                    )}
                  </li>
                  <li>
                    {language === "es" ? (
                      <>
                        Temperatura feb–abr 2017:{" "}
                        <b>+{(R.nino.a17 || 0).toFixed(1)} °C</b> sobre el
                        promedio 2010–2024.
                      </>
                    ) : (
                      <>
                        Feb–Apr 2017 temperature:{" "}
                        <b>+{(R.nino.a17 || 0).toFixed(1)} °C</b> above the
                        2010–2024 average.
                      </>
                    )}
                  </li>
                  <li>
                    {language === "es" ? (
                      <>
                        Temperatura feb–abr 2023:{" "}
                        <b>+{(R.nino.a23 || 0).toFixed(1)} °C</b>; lluvia de
                        marzo 2023 <b>{(R.nino.r23 || 0).toFixed(0)} mm</b>.
                      </>
                    ) : (
                      <>
                        Feb–Apr 2023 temperature:{" "}
                        <b>+{(R.nino.a23 || 0).toFixed(1)} °C</b>; March 2023
                        rain <b>{(R.nino.r23 || 0).toFixed(0)} mm</b>.
                      </>
                    )}
                  </li>
                </ul>
                <p className="mt-2.5 text-xs text-muted-foreground">
                  {language === "es" ? (
                    <>
                      ChacraSat usa el mayor calentamiento observado (
                      <b className="text-ink">+{R.nino.d} °C</b>) para poner a
                      prueba cada rotación.
                    </>
                  ) : (
                    <>
                      ChacraSat uses the strongest warming seen (
                      <b className="text-ink">+{R.nino.d} °C</b>) to stress-test
                      every rotation.
                    </>
                  )}
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* HOW CHACRASAT WORKS */}
      <HowItWorksSection />

      {/* FOOTER */}
      <footer className="mt-7 space-y-3 text-[12.5px] leading-relaxed text-muted-foreground">
        <Separator className="mb-4 bg-line" />
        <div>
          <h3 className="mb-1 font-heading text-sm font-bold text-ink">
            {t("srcTitle")}
          </h3>
          <p>{t("src")}</p>
        </div>

        <p className="pt-1 text-ink/90">
          {t("team_prefix")}
          <b className="font-semibold text-navy">{t("team_name")}</b>
          {t("team_suffix")}
        </p>
      </footer>
    </main>
  );
}
