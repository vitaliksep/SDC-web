"use client";

import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext({ lang: "ru", setLang: () => {} });

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState("ru");

  // Читаем сохранённый язык из localStorage при монтировании
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("sdc_lang");
      if (saved === "en" || saved === "ru") setLangState(saved);
    }
  }, []);

  const setLang = (l) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("sdc_lang", l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
