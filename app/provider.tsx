"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { i18n } from "@/data";

type Lang = "en" | "pt";

type LanguageContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
};

const LanguageContext = React.createContext<LanguageContextType | null>(null);

export const useLanguage = () => {
  const ctx = React.useContext(LanguageContext);
  if (!ctx) throw new Error("LanguageContext not found");
  return ctx;
};

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [lang, setLang] = React.useState<Lang>("en");
  return (
    <NextThemesProvider {...props}>
      <LanguageContext.Provider value={{ lang, setLang }}>
        {children}
      </LanguageContext.Provider>
    </NextThemesProvider>
  );
}
