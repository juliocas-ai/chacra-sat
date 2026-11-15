"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";
import type { Language } from "@/i18n/translations";
import { cn } from "@/lib/utils";

const LANGUAGES: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

export function Header() {
  const { language, setLanguage, t, isNasaData } = useLanguage();

  return (
    <header
      className="relative overflow-hidden px-4 pt-4 pb-5 text-white sm:px-6 sm:pt-[22px] sm:pb-[26px]"
      style={{
        background:
          "radial-gradient(1200px 400px at 85% -40%, #2b5ea8 0%, var(--navy) 60%)",
      }}
    >
      <div className="mx-auto flex max-w-[1180px] flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-[18px]">
        {/* Top bar on mobile: Logo + Brand + Language toggle */}
        <div className="flex items-start gap-3 sm:flex-1 sm:items-center sm:gap-[18px]">
          <div
            className="grid size-12 shrink-0 place-items-center sm:size-[58px]"
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
            <h1 className="font-heading text-2xl font-bold tracking-[0.3px] sm:text-[30px]">
              ChacraSat
            </h1>
            <p className="mt-0.5 text-[13px] leading-snug text-[#c9d8ef] sm:text-[14.5px]">
              {t("tagline")}
            </p>
          </div>
        </div>

        {/* Actions: Status Badge + Language Switcher (using shadcn) */}
        <div className="flex w-full flex-wrap items-center justify-between gap-2.5 sm:ml-auto sm:w-auto sm:justify-end">
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

          <nav
            aria-label="Language selector"
            className="flex shrink-0 overflow-hidden rounded-full border border-white/35"
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
