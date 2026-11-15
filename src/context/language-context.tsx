"use client";

import * as React from "react";
import {
  i18nFormatters,
  type Language,
  type TranslationKey,
  translations,
} from "@/i18n/translations";

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
  fmt: (typeof i18nFormatters)["es"];
  isNasaData: boolean;
  setIsNasaData: (val: boolean) => void;
}

const LanguageContext = React.createContext<LanguageContextValue | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = React.useState<Language>("es");
  const [isNasaData, setIsNasaData] = React.useState<boolean>(true);

  const setLanguage = React.useCallback((lang: Language) => {
    setLanguageState(lang);
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, []);

  const t = React.useCallback(
    (key: TranslationKey) => {
      return translations[language][key] ?? key;
    },
    [language]
  );

  const fmt = React.useMemo(() => i18nFormatters[language], [language]);

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t, fmt, isNasaData, setIsNasaData }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = React.useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
