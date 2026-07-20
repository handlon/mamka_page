import { createContext, useContext, type ReactNode } from "react";
import { translations, type Locale, type Translation } from "./translations";

interface LanguageContextValue {
  locale: Locale;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

// The site is currently Czech-only. The English translation is kept (commented
// out) in translations.ts. To re-enable language switching, restore the locale
// state + localStorage logic here and the toggle button in Header.tsx.
export function LanguageProvider({ children }: { children: ReactNode }) {
  const value: LanguageContextValue = { locale: "cs", t: translations.cs };
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
