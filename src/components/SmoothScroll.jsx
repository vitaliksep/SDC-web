"use client";

import { useEffect } from "react";

/**
 * SmoothScroll — плавный скролл колесом мыши на десктопе.
 *
 * Алгоритм:
 *   1. Перехватываем wheel-событие, копим delta в targetY
 *   2. В RAF-цикле делаем LERP: currentY → targetY
 *   3. Применяем window.scrollTo(0, currentY) каждый кадр
 *
 * Мобиль (touch) — не трогаем: нативный iOS/Android scroll плавный.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    // Только на десктопе
    if (window.innerWidth < 1024) return;

    let targetY = window.scrollY;
    let currentY = window.scrollY;
    let rafId = null;
    let ticking = false;

    // ── Параметры ──────────────────────────────────────────
    // Скорость «догонялки» (0.1 = быстро-плавно, 0.06 = медленно-масляно)
    const LERP = 0.1;
    // Умножитель колеса мыши (пиксели/дельта)
    const MOUSE_SENSITIVITY = 1.0;
    // Умножитель трекпада — трекпад уже даёт маленькую дельту
    const TRACKPAD_SENSITIVITY = 0.8;
    // ───────────────────────────────────────────────────────

    const maxScroll = () =>
      document.documentElement.scrollHeight - window.innerHeight;

    const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

    // RAF-цикл
    const loop = () => {
      const diff = targetY - currentY;

      if (Math.abs(diff) < 0.4) {
        // Достигли цели — останавливаемся
        currentY = targetY;
        window.scrollTo(0, Math.round(currentY));
        ticking = false;
        return;
      }

      currentY += diff * LERP;
      window.scrollTo(0, Math.round(currentY));
      rafId = requestAnimationFrame(loop);
    };

    const onWheel = (e) => {
      e.preventDefault();

      // Определяем источник: трекпад даёт deltaMode=0 и маленькую дельту,
      // обычное колесо — крупные прыжки
      const isTrackpad =
        e.deltaMode === 0 && Math.abs(e.deltaY) < 60 && !e.ctrlKey;

      const sensitivity = isTrackpad ? TRACKPAD_SENSITIVITY : MOUSE_SENSITIVITY;

      // deltaMode 1 = строки (Firefox), переводим в пиксели
      const raw = e.deltaMode === 1 ? e.deltaY * 32 : e.deltaY;

      targetY = clamp(targetY + raw * sensitivity, 0, maxScroll());

      if (!ticking) {
        ticking = true;
        rafId = requestAnimationFrame(loop);
      }
    };

    // Синхронизация при прыжке через якорную ссылку / Space / PageDown
    const onScrollEnd = () => {
      if (!ticking) {
        targetY = window.scrollY;
        currentY = window.scrollY;
      }
    };

    // passive: false — чтобы можно было делать preventDefault()
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scrollend", onScrollEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scrollend", onScrollEnd);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}
