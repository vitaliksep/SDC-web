"use client";
import { useEffect } from "react";

// Тестовая страница: намеренно вызывает необработанное отклонение Promise
// Используется для проверки работы error boundary / мониторинга ошибок
export default function UnhandledPromisePage() {
  useEffect(() => {
    // Намеренно не добавляем .catch() — тест для unhandledrejection
    fetch("/unknown");
  }, []);

  return <div>unhandled promise test page</div>;
}
