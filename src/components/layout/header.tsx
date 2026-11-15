"use client";

import * as React from "react";
import { ArrowRight, Compass, Menu, X } from "lucide-react";
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
  const [openForPath, setOpenForPath] = React.useState<string | null>(null);
  const mobileMenuOpen = openForPath === pathname;

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

  const dataStatusBadge = (
    <Badge
      variant="outline"
      className={cn(
        "h-auto min-h-7 max-w-full rounded-full px-3 py-1 text-left text-xs leading-tight font-medium whitespace-normal text-white",
        isNasaData
          ? "border-[#5fd18f] bg-[#2f9e5b]/25"
          : "border-[#f0a95c] bg-[#d9822b]/22"
      )}
    >
      {isNasaData ? t("badgeNasa") : t("badgeRef")}
    </Badge>
  );

  const languageSwitcher = (
    <nav
      aria-label="Language selector"
      className="flex shrink-0 overflow-hidden rounded-full border border-white/30 bg-white/5"
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
              "h-8 rounded-none border-0 px-2.5 text-xs font-semibold transition-colors",
              isSelected
                ? "bg-white text-navy hover:bg-white hover:text-navy"
                : "bg-transparent text-white hover:bg-white/15 hover:text-white"
            )}
          >
            {label}
          </Button>
        );
      })}
    </nav>
  );

  return (
    <header
      className="sticky top-0 z-40 border-b border-white/12 text-white backdrop-blur-md"
      style={{
        background:
          "radial-gradient(1200px 400px at 85% -40%, #2b5ea8 0%, var(--navy) 65%)",
      }}
    >
      <div className="mx-auto max-w-[1260px] px-4 py-3 sm:px-6">
        {/* Main Header Bar */}
        <div className="flex items-center justify-between gap-3">
          {/* Brand Logo + Title */}
          <Link
            href="/"
            className="group flex min-w-0 items-center gap-2.5 rounded-lg transition-opacity hover:opacity-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky sm:gap-3"
          >
            <div
              className="grid size-10 shrink-0 place-items-center transition-transform group-hover:scale-[1.03] sm:size-11"
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

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-heading text-xl font-bold tracking-tight text-white sm:text-2xl">
                  ChacraSat
                </span>
                <Badge
                  variant="outline"
                  className="hidden border-white/25 bg-white/10 px-2 py-0.5 text-[10px] font-semibold tracking-wider text-[#9ce2b8] uppercase xl:inline-flex"
                >
                  NASA POWER · FAO-56
                </Badge>
              </div>
              <p className="hidden truncate text-xs text-[#c9d8ef] xl:block xl:max-w-[340px]">
                {t("tagline")}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation & Actions (md+) */}
          <div className="hidden items-center gap-2 md:flex lg:gap-3">
            <nav
              aria-label="Main navigation"
              className="flex items-center gap-1 rounded-full bg-white/6 p-1"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={item.active ? "page" : undefined}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-[13px] font-semibold whitespace-nowrap transition-colors",
                    item.active
                      ? "bg-white text-navy shadow-xs"
                      : "text-[#d7e4f8] hover:bg-white/12 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {isPlanner ? (
              <div className="hidden lg:flex">{dataStatusBadge}</div>
            ) : (
              <Link
                href="/planner"
                className={cn(
                  buttonVariants({ variant: "default", size: "sm" }),
                  "h-9 gap-1.5 rounded-full border border-[#5fd18f]/50 bg-leaf px-3.5 text-[13px] font-bold text-white shadow-[0_4px_14px_rgba(47,158,91,0.38)] hover:bg-[#278a4f]"
                )}
              >
                <Compass className="size-3.5 shrink-0" />
                <span>{t("quickActionPlanner")}</span>
                <ArrowRight className="size-3.5 shrink-0" />
              </Link>
            )}

            {languageSwitcher}
          </div>

          {/* Mobile Controls (< md) */}
          <div className="flex items-center gap-2 md:hidden">
            {languageSwitcher}
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-panel"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() =>
                setOpenForPath((prev) => (prev === pathname ? null : pathname))
              }
              className="size-9 rounded-lg border border-white/25 bg-white/8 text-white hover:bg-white/15 hover:text-white"
            >
              {mobileMenuOpen ? (
                <X className="size-4.5" />
              ) : (
                <Menu className="size-4.5" />
              )}
            </Button>
          </div>
        </div>

        {/* Planner Status Sub-row on Tablet/Mobile (< lg) */}
        {isPlanner && (
          <div className="mt-2.5 flex items-center justify-between border-t border-white/10 pt-2 lg:hidden">
            {dataStatusBadge}
          </div>
        )}

        {/* Collapsible Mobile Menu Drawer (< md) */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation-panel"
            className="mt-3 flex flex-col gap-2 border-t border-white/12 pt-3 md:hidden"
          >
            <nav
              aria-label="Mobile navigation"
              className="grid grid-cols-2 gap-1.5"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={item.active ? "page" : undefined}
                  onClick={() => setOpenForPath(null)}
                  className={cn(
                    "flex min-h-10 items-center justify-center rounded-xl px-3 py-2 text-center text-sm font-semibold transition-colors",
                    item.active
                      ? "bg-white text-navy shadow-xs"
                      : "bg-white/8 text-[#e2ecfb] hover:bg-white/15 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {!isPlanner && (
              <Link
                href="/planner"
                onClick={() => setOpenForPath(null)}
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "h-auto min-h-10 w-full justify-center gap-2 rounded-xl border border-[#5fd18f]/50 bg-leaf px-4 py-2.5 text-sm font-bold whitespace-normal text-white shadow-[0_4px_14px_rgba(47,158,91,0.35)] hover:bg-[#278a4f]"
                )}
              >
                <Compass className="size-4 shrink-0" />
                <span>{t("quickActionPlanner")}</span>
                <ArrowRight className="size-4 shrink-0" />
              </Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
