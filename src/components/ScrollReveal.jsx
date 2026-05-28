"use client";

import { useEffect } from "react";

/**
 * ScrollReveal — плавное появление секций при скролле.
 *
 * Стили задаются в layout.jsx:
 *   .reveal-hidden  → opacity:0, translateY(48px)
 *   .reveal-visible → opacity:1, translateY(0)
 *   .reveal-hero    → всегда видима (без transition)
 */
export default function ScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Двойной rAF — ждём конец React-гидрации и первого paint
    const setup = () => {
      requestAnimationFrame(() => {
        const sections = Array.from(document.querySelectorAll("section"));

        if (sections.length === 0) return;

        // ── Первая секция (Hero) — всегда видима ─────────────
        sections[0].classList.add("reveal-hero");

        // ── Все остальные — скрываем и подключаем observer ───
        const rest = sections.slice(1);

        rest.forEach((el) => {
          // Если уже была показана (hot-reload, обратная навигация) — не прячем
          if (el.classList.contains("reveal-visible")) return;
          el.classList.add("reveal-hidden");
        });

        const io = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              const el = entry.target;

              // Один кадр паузы → transition успевает захватить изменение
              requestAnimationFrame(() => {
                el.classList.remove("reveal-hidden");
                el.classList.add("reveal-visible");
              });

              io.unobserve(el);
            });
          },
          {
            // Срабатывает когда ≥5% секции вошло в viewport
            threshold: 0.05,
            // Нижний отступ -60px → анимация начинается чуть до края экрана
            rootMargin: "0px 0px -60px 0px",
          },
        );

        rest.forEach((el) => {
          if (!el.classList.contains("reveal-visible")) {
            io.observe(el);
          }
        });

        // Cleanup
        return () => rest.forEach((el) => io.unobserve(el));
      });
    };

    // requestAnimationFrame → ждём первый paint
    const raf = requestAnimationFrame(setup);
    return () => cancelAnimationFrame(raf);
  }, []);

  return null;
}
