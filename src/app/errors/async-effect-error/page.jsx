"use client";
import { useEffect } from "react";

// Тестовая страница: намеренно бросает ошибку внутри async useEffect
// Используется для проверки обработки асинхронных ошибок
export default function AsyncEffectErrorPage() {
  useEffect(() => {
    const run = async () => {
      throw new Error("async effect exploded");
    };
    run().catch(console.error); // Явно ловим, чтобы не было unhandledrejection
  }, []);

  return <div>async effect error test page</div>;
}
