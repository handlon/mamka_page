import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { translations, type Locale, type Translation } from "./translations";

interface LanguageContextValue {
  locale: Locale;
  t: Translation;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "lh-locale";

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "cs";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "cs" || stored === "en") return stored;
  return "cs";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const setLocale = (next: Locale) => setLocaleState(next);
  const toggleLocale = () => setLocaleState((prev) => (prev === "cs" ? "en" : "cs"));

  const value = useMemo(
    () => ({ locale, t: translations[locale], setLocale, toggleLocale }),
    [locale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
