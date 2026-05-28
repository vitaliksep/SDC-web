"use client";

import { useLang } from "@/contexts/LanguageContext";

/**
 * Compact animated RU / EN toggle
 * Variants: "header" (default, dark bg) | "mobile" (slightly larger)
 */
export function LanguageSwitcher({ variant = "header" }) {
  const { lang, setLang } = useLang();

  const isMobile = variant === "mobile";

  return (
    <div
      className="relative flex items-center rounded-full p-[3px]"
      style={{
        background: "rgba(255,255,255,0.07)",
        border: "1px solid rgba(0,206,209,0.25)",
        gap: 0,
      }}
      aria-label="Language switcher"
      role="group"
    >
      {["ru", "en"].map((l) => {
        const active = lang === l;
        return (
          <button
            key={l}
            onClick={() => setLang(l)}
            aria-pressed={active}
            className="relative z-10 rounded-full font-bold uppercase transition-colors duration-200 select-none"
            style={{
              fontSize: isMobile ? "0.72rem" : "0.65rem",
              letterSpacing: "0.12em",
              padding: isMobile ? "5px 11px" : "4px 9px",
              color: active ? "#0A2466" : "rgba(255,255,255,0.45)",
              background: active
                ? "linear-gradient(135deg,#00CED1 0%,#00b8bc 100%)"
                : "transparent",
              boxShadow: active ? "0 2px 8px rgba(0,206,209,0.35)" : "none",
              transition:
                "background 0.22s ease, color 0.22s ease, box-shadow 0.22s ease",
            }}
          >
            {l.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
