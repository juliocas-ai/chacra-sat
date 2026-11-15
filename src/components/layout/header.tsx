"use client";

import { ArrowRight, Compass } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";
import type { Language } from "@/i18n/translations";
import { cn } from "@/lib/utils";

const LANGUAGES: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

export function Header() {
  const { language, setLanguage, t, isNasaData } = useLanguage();
  const pathname = usePathname();
  const isPlanner = pathname === "/planner";

  const navItems = [
    { href: "/", label: t("navHome"), active: pathname === "/" },
    {
      href: "/planner",
      label: t("navPlanner"),
      active: pathname === "/planner",
    },
    {
      href: "/metodologia",
      label: t("navMethodology"),
      active: pathname === "/metodologia",
    },
    {
      href: "/acerca",
      label: t("navAbout"),
      active: pathname === "/acerca",
    },
  ];

  return (
    <header
      className="relative overflow-hidden border-b border-white/10 px-4 pt-4 pb-4 text-white sm:px-6 sm:pt-[20px] sm:pb-[22px]"
      style={{
        background:
          "radial-gradient(1200px 400px at 85% -40%, #2b5ea8 0%, var(--navy) 60%)",
      }}
    >
      <div className="mx-auto flex max-w-[1180px] flex-col gap-3.5 lg:flex-row lg:items-center lg:justify-between lg:gap-4">
        {/* Top row: Brand Logo + Title + Tagline */}
        <div className="flex items-start justify-between gap-3 sm:items-center">
          <Link
            href="/"
            className="group flex min-w-0 flex-1 items-start gap-3 rounded-lg transition-opacity hover:opacity-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky sm:items-center sm:gap-[16px]"
          >
            <div
              className="grid size-12 shrink-0 place-items-center transition-transform group-hover:scale-[1.03] sm:size-[56px]"
              aria-hidden="true"
            >
              <svg viewBox="0 0 64 64" className="size-full">
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
                <path
                  d="M14 57 Q32 50 50 57"
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
                <path
                  d="M38 22 L30 44"
                  stroke="#ffd166"
                  strokeWidth="1.5"
                  strokeDasharray="2 2"
                />
              </svg>
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-heading text-2xl font-bold tracking-[0.3px] text-white sm:text-[28px]">
                  ChacraSat
                </span>
                <Badge
                  variant="outline"
                  className="hidden border-white/25 bg-white/10 px-2 py-0.5 text-[10.5px] font-semibold tracking-wide text-[#9ce2b8] uppercase sm:inline-flex"
                >
                  NASA POWER · FAO-56
                </Badge>
              </div>
              <p className="mt-0.5 line-clamp-2 text-[12.5px] leading-snug text-[#c9d8ef] sm:line-clamp-1 sm:text-[14px]">
                {t("tagline")}
              </p>
            </div>
          </Link>

          {/* Language Switcher on Mobile Top-Right */}
          <nav
            aria-label="Language selector"
            className="flex shrink-0 overflow-hidden rounded-full border border-white/35 lg:hidden"
          >
            {LANGUAGES.map(({ code, label }) => {
              const isSelected = language === code;
              return (
                <Button
                  key={code}
                  type="button"
                  variant="ghost"
                  size="sm"
                  aria-pressed={isSelected}
                  onClick={() => setLanguage(code)}
                  className={cn(
                    "h-auto rounded-none border-0 px-2.5 py-1 text-xs font-semibold transition-colors",
                    isSelected
                      ? "bg-white text-navy hover:bg-white hover:text-navy"
                      : "bg-transparent text-white hover:bg-white/12 hover:text-white"
                  )}
                >
                  {label}
                </Button>
              );
            })}
          </nav>
        </div>

        {/* Bottom/Right row: Navigation + Quick Action + Data Badge + Language Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-2.5 lg:justify-end lg:gap-2.5 lg:border-t-0 lg:pt-0">
          {/* Primary Navigation Links */}
          <nav
            aria-label="Main navigation"
            className="flex flex-wrap items-center gap-1"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={item.active ? "page" : undefined}
                className={cn(
                  "rounded-full px-3 py-1.5 text-[12.5px] font-semibold transition-colors sm:text-[13px]",
                  item.active
                    ? "bg-white/18 text-white shadow-2xs"
                    : "text-[#c9d8ef] hover:bg-white/10 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-wrap items-center gap-2">
            {isPlanner ? (
              <>
                <Link
                  href="/"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "h-auto rounded-full border-white/35 bg-transparent px-3 py-1.5 text-[12.5px] font-semibold text-white hover:bg-white/15 hover:text-white"
                  )}
                >
                  {t("home")}
                </Link>

                <Badge
                  variant="outline"
                  className={cn(
                    "h-auto max-w-full shrink whitespace-normal rounded-full px-3 py-1.5 text-left text-xs leading-tight font-medium text-white sm:whitespace-nowrap sm:text-[12.5px]",
                    isNasaData
                      ? "border-[#5fd18f] bg-[#2f9e5b]/25"
                      : "border-[#f0a95c] bg-[#d9822b]/22"
                  )}
                >
                  {isNasaData ? t("badgeNasa") : t("badgeRef")}
                </Badge>
              </>
            ) : (
              <Link
                href="/planner"
                className={cn(
                  buttonVariants({ variant: "default", size: "sm" }),
                  "h-auto gap-1.5 rounded-full border border-[#5fd18f]/50 bg-leaf px-3.5 py-1.5 text-[12.5px] font-bold text-white shadow-[0_4px_14px_rgba(47,158,91,0.4)] hover:bg-[#278a4f] sm:px-4 sm:text-[13px]"
                )}
              >
                <Compass className="size-3.5 shrink-0" />
                <span>{t("quickActionPlanner")}</span>
                <ArrowRight className="size-3.5 shrink-0" />
              </Link>
            )}

            {/* Desktop Language Switcher */}
            <nav
              aria-label="Language selector"
              className="hidden shrink-0 overflow-hidden rounded-full border border-white/35 lg:flex"
            >
              {LANGUAGES.map(({ code, label }) => {
                const isSelected = language === code;
                return (
                  <Button
                    key={code}
                    type="button"
                    variant="ghost"
                    size="sm"
                    aria-pressed={isSelected}
                    onClick={() => setLanguage(code)}
                    className={cn(
                      "h-auto rounded-none border-0 px-3 py-1.5 text-[13px] font-semibold transition-colors",
                      isSelected
                        ? "bg-white text-navy hover:bg-white hover:text-navy"
                        : "bg-transparent text-white hover:bg-white/12 hover:text-white"
                    )}
                  >
                    {label}
                  </Button>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
