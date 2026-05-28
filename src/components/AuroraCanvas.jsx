"use client";

import { useEffect, useRef } from "react";

/**
 * AuroraCanvas — реальная Canvas-анимация aurora borealis
 * position: fixed, z-index: 0, pointer-events: none
 * Blends with "screen" composite — даёт живой органичный свет
 */
export default function AuroraCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animId;
    let t = 0;

    // 7 независимых блобов — каждый со своей траекторией и цветом
    const blobs = [
      // [нормализованная позиция x, y, радиус, цвет RGB, альфа, скорость, амплитуда X, амплитуда Y]
      {
        x: 0.1,
        y: 0.15,
        r: 0.5,
        rgb: "0,206,209",
        a: 0.2,
        spd: 0.00001,
        ax: 0.12,
        ay: 0.18,
      },
      {
        x: 0.82,
        y: 0.1,
        r: 0.45,
        rgb: "8,80,200",
        a: 0.28,
        spd: 0.00001,
        ax: 0.1,
        ay: 0.12,
      },
      {
        x: 0.55,
        y: 0.5,
        r: 0.38,
        rgb: "0,180,200",
        a: 0.16,
        spd: 0.00001,
        ax: 0.18,
        ay: 0.14,
      },
      {
        x: 0.88,
        y: 0.78,
        r: 0.48,
        rgb: "15,5,130",
        a: 0.3,
        spd: 0.00001,
        ax: 0.08,
        ay: 0.1,
      },
      {
        x: 0.18,
        y: 0.75,
        r: 0.36,
        rgb: "0,206,209",
        a: 0.14,
        spd: 0.00001,
        ax: 0.14,
        ay: 0.12,
      },
      {
        x: 0.5,
        y: 0.25,
        r: 0.3,
        rgb: "40,10,180",
        a: 0.22,
        spd: 0.00001,
        ax: 0.1,
        ay: 0.08,
      },
      {
        x: 0.35,
        y: 0.85,
        r: 0.28,
        rgb: "0,150,180",
        a: 0.12,
        spd: 0.00001,
        ax: 0.16,
        ay: 0.1,
      },
    ];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      t++;

      // Тёмная основа
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "#060d1f";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Рисуем каждый блоб
      blobs.forEach((b, i) => {
        // Плавное синусоидальное движение
        const cx =
          (b.x + Math.sin(t * b.spd * 1000 + i * 1.7) * b.ax) * canvas.width;
        const cy =
          (b.y + Math.cos(t * b.spd * 900 + i * 2.1) * b.ay) * canvas.height;

        // Пульсация радиуса
        const pulse = 1 + Math.sin(t * b.spd * 600 + i) * 0.12;
        const r = b.r * Math.max(canvas.width, canvas.height) * pulse;

        // Радиальный градиент — от яркого центра к прозрачному краю
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        grad.addColorStop(0, `rgba(${b.rgb}, ${b.a})`);
        grad.addColorStop(0.35, `rgba(${b.rgb}, ${b.a * 0.55})`);
        grad.addColorStop(0.7, `rgba(${b.rgb}, ${b.a * 0.18})`);
        grad.addColorStop(1, `rgba(${b.rgb}, 0)`);

        // "screen" даёт красивое аддитивное свечение как настоящая аврора
        ctx.globalCompositeOperation = "screen";
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Лёгкое затемнение сверху — чтобы текст лучше читался
      ctx.globalCompositeOperation = "source-over";
      const topVignette = ctx.createLinearGradient(
        0,
        0,
        0,
        canvas.height * 0.3
      );
      topVignette.addColorStop(0, "rgba(4, 8, 22, 0.30)");
      topVignette.addColorStop(1, "rgba(4, 8, 22, 0)");
      ctx.fillStyle = topVignette;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        display: "block",
      }}
    />
  );
}