"use client";

import { ArrowUpRight, Code2, MapPin, Sprout } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/context/language-context";
import { VALLEYS } from "@/lib/chacra-data";

export const GITHUB_REPO_URL = "https://github.com/owixp/chacra-sat";

const EXTERNAL_SOURCES = [
  {
    label: "NASA POWER Project (Agroclimatology)",
    href: "https://power.larc.nasa.gov",
  },
  {
    label: "NASA GMAO MERRA-2 & CERES",
    href: "https://gmao.gsfc.nasa.gov/reanalysis/MERRA-2/",
  },
  {
    label: "FAO Paper 56 — Crop Evapotranspiration (ETo)",
    href: "https://www.fao.org/4/x0490e/x0490e00.htm",
  },
  {
    label: "FAO Paper 29 — Water Quality & Salt Tolerance",
    href: "https://www.fao.org/4/t0234e/t0234e00.htm",
  },
  {
    label: "GitHub Repository (Licensed under Apache 2.0)",
    href: GITHUB_REPO_URL,
  },
] as const;

export function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer className="mt-auto border-t border-line bg-white text-muted-foreground">
      <div className="mx-auto max-w-[1260px] px-4 pt-10 pb-8 sm:px-6 sm:pt-12 sm:pb-9">
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.85fr_1fr_1.15fr]">
          {/* Col 1: Brand & Mission */}
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="inline-flex w-fit items-center gap-2.5 text-ink transition-opacity hover:opacity-90"
            >
              <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-navy p-1">
                <svg viewBox="0 0 64 64" className="size-full" aria-hidden="true">
                  <ellipse
                    cx="32"
                    cy="34"
                    rx="28"
                    ry="10"
                    fill="none"
                    stroke="#3fa7ff"
                    strokeWidth="2"
                    strokeDasharray="3 3"
                    transform="rotate(-18 32 34)"
                  />
                  <path
                    d="M8 50 Q32 40 56 50 L56 58 L8 58Z"
                    fill="#2f9e5b"
                  />
                  <path
                    d="M12 54 Q32 46 52 54"
                    stroke="#a0662f"
                    strokeWidth="2"
                    fill="none"
                  />
                  <g transform="translate(40 14) rotate(25)">
                    <rect
                      x="-4"
                      y="-4"
                      width="8"
                      height="8"
                      rx="1.5"
                      fill="#fff"
                    />
                    <rect x="-15" y="-3" width="9" height="6" fill="#3fa7ff" />
                    <rect x="6" y="-3" width="9" height="6" fill="#3fa7ff" />
                  </g>
                </svg>
              </div>
              <span className="font-heading text-xl font-bold text-navy">
                ChacraSat
              </span>
            </Link>

            <p className="text-[13px] leading-relaxed text-muted-foreground">
              {t("tagline")}
            </p>

            <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
              <Badge
                variant="secondary"
                className="h-auto rounded-md bg-leaf-light px-2.5 py-1 text-[11px] leading-tight font-semibold whitespace-normal text-leaf"
              >
                <Sprout className="mr-1 size-3 shrink-0" />
                <span>{t("hKicker")}</span>
              </Badge>
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div>
            <h3 className="mb-3 font-heading text-xs font-bold tracking-wider text-navy uppercase">
              {t("footerNavTitle")}
            </h3>
            <ul className="space-y-2.5 text-[13px]">
              <li>
                <Link
                  href="/"
                  className="inline-block py-0.5 text-muted-foreground transition-colors hover:text-navy hover:underline"
                >
                  {t("navHome")}
                </Link>
              </li>
              <li>
                <Link
                  href="/planner"
                  className="inline-block py-0.5 font-semibold text-leaf transition-colors hover:text-navy hover:underline"
                >
                  {t("hCta")} →
                </Link>
              </li>
              <li>
                <Link
                  href="/#how"
                  className="inline-block py-0.5 text-muted-foreground transition-colors hover:text-navy hover:underline"
                >
                  {t("hHowT")}
                </Link>
              </li>
              <li>
                <Link
                  href="/metodologia"
                  className="inline-block py-0.5 text-muted-foreground transition-colors hover:text-navy hover:underline"
                >
                  {t("navMethodology")} &amp; FAO-56
                </Link>
              </li>
              <li>
                <Link
                  href="/acerca"
                  className="inline-block py-0.5 text-muted-foreground transition-colors hover:text-navy hover:underline"
                >
                  {t("navAbout")} · Trujillo Orbital
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: La Libertad Valleys */}
          <div>
            <h3 className="mb-3 font-heading text-xs font-bold tracking-wider text-navy uppercase">
              {t("footerValleysTitle")}
            </h3>
            <ul className="space-y-2.5 text-[13px]">
              {VALLEYS.map((v) => (
                <li key={v.id}>
                  <Link
                    href={`/planner?valley=${v.id}`}
                    className="inline-flex items-center gap-1.5 py-0.5 text-muted-foreground transition-colors hover:text-navy hover:underline"
                  >
                    <MapPin className="size-3.5 shrink-0 text-soil" />
                    <span>{v[language]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Scientific References & Open Data */}
          <div>
            <h3 className="mb-3 font-heading text-xs font-bold tracking-wider text-navy uppercase">
              {t("footerSourcesTitle")}
            </h3>
            <ul className="space-y-2.5 text-[13px]">
              {EXTERNAL_SOURCES.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-start gap-1 py-0.5 text-muted-foreground transition-colors hover:text-navy hover:underline"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="mt-0.5 size-3.5 shrink-0 text-sky" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-6 bg-line" />

        <div className="flex flex-col items-start justify-between gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>{t("hFoot")}</p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-navy underline-offset-4 transition-colors hover:text-leaf hover:underline"
            >
              <Code2 className="size-3.5 shrink-0 text-leaf" />
              <span>{t("footerGithubLicense")}</span>
              <ArrowUpRight className="size-3.5 shrink-0 text-sky" />
            </a>
            <span aria-hidden="true" className="hidden text-line sm:inline">
              ·
            </span>
            <p className="font-medium text-navy/80">
              La Libertad, Perú · Open Agroclimatic Data
            </p>
          </div>
        </div>

        <p className="mt-3 rounded-lg border border-line bg-[#f8fafc] px-3 py-2 text-[11px] leading-relaxed text-muted-foreground">
          {t("footerNonEndorsement")}
        </p>
      </div>
    </footer>
  );
}
