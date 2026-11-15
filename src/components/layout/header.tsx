"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";
import type { Language } from "@/i18n/translations";
import { cn } from "@/lib/utils";

const LANGUAGES: { code: Language; label: string }[] = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
];

export function Header() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header
      className="relative overflow-hidden px-4 pt-[18px] pb-[22px] text-white sm:px-6 sm:pt-[22px] sm:pb-[26px]"
      style={{
        background:
          "radial-gradient(1200px 400px at 85% -40%, #2b5ea8 0%, var(--navy) 60%)",
      }}
    >
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center gap-3 sm:gap-[18px]">
        {/* Logo SVG */}
        <div
          className="grid size-[46px] shrink-0 place-items-center sm:size-[58px]"
          aria-hidden="true"
        >
          <svg viewBox="0 0 64 64" fill="none" className="size-full">
            <path
              d="M8 47C19 42 27 34 32 16C37 34 45 42 56 47"
              stroke="#5fd18f"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M32 16V52"
              stroke="#ffffff"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M14 54H50"
              stroke="#d6b58d"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M32 29C24 20 17 23 16 31C23 34 28 34 32 29Z"
              fill="#5fd18f"
            />
            <path
              d="M32 38C40 29 47 32 48 40C41 43 36 43 32 38Z"
              fill="#5fd18f"
            />
          </svg>
        </div>

        {/* Brand */}
        <div className="min-w-0">
          <h1 className="font-heading text-[clamp(24px,4vw,30px)] font-bold tracking-[0.3px]">
            ChacraSat
          </h1>
          <p className="mt-0.5 text-xs text-[#c9d8ef] sm:text-sm">
            {t("subtitle")}
          </p>
        </div>

        {/* Actions: Status Badges + Language Switcher (using shadcn) */}
        <div className="ml-0 flex w-full flex-wrap items-center gap-2.5 sm:ml-auto sm:w-auto">
          <Badge
            variant="outline"
            className="h-auto gap-1.5 rounded-full border-[#5fd18f] bg-[#2f9e5b]/25 px-2.5 py-1.5 text-[12.5px] font-medium text-white"
          >
            <span aria-hidden="true">●</span>
            <span>{t("system_status")}</span>
          </Badge>

          <Badge
            variant="outline"
            className="h-auto gap-1.5 rounded-full border-[#f0a95c] bg-[#d9822b]/22 px-2.5 py-1.5 text-[12.5px] font-medium text-white"
          >
            <span aria-hidden="true">◷</span>
            <span>{t("data_status")}</span>
          </Badge>

          <nav
            aria-label="Language selector"
            className="flex overflow-hidden rounded-full border border-white/35"
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
    </header>
  );
}
