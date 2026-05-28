"use client";
import { useEffect } from "react";

export default function Metrika() {
  useEffect(() => {
    // Инициализация Яндекс Метрики
    const initMetrika = () => {
      // Проверяем, что мы на клиенте
      if (typeof window === "undefined") return;

      // Если скрипт уже загружен, не загружаем повторно
      if (window.ym) {
        console.log("✅ Яндекс Метрика уже загружена");
        return;
      }

      // Оригинальный код инициализации от Яндекс Метрики
      (function (m, e, t, r, i, k, a) {
        m[i] =
          m[i] ||
          function () {
            (m[i].a = m[i].a || []).push(arguments);
          };
        m[i].l = 1 * new Date();
        for (var j = 0; j < document.scripts.length; j++) {
          if (document.scripts[j].src === r) {
            return;
          }
        }
        k = e.createElement(t);
        a = e.getElementsByTagName(t)[0];
        k.async = 1;
        k.src = r;
        a.parentNode.insertBefore(k, a);
      })(
        window,
        document,
        "script",
        "https://mc.yandex.ru/metrika/tag.js?id=108452415",
        "ym",
      );

      // Инициализация счетчика с оригинальными параметрами
      window.ym(108452415, "init", {
        ssr: true,
        webvisor: true,
        clickmap: true,
        referrer: document.referrer,
        url: location.href,
        accurateTrackBounce: true,
        trackLinks: true,
      });

      // Helper функция для получения Client ID (использовать в консоли)
      window.getYmClientID = function () {
        if (typeof window.ym === "function") {
          window.ym(108452415, "getClientID", function (clientID) {
            console.log("📊 Yandex Metrika Client ID:", clientID);
          });
        } else {
          console.log(
            "⚠️ Яндекс Метрика еще не загружена. Подождите несколько секунд.",
          );
        }
      };

      console.log("✅ Яндекс Метрика инициализирована");
      console.log(
        "💡 Для получения Client ID введите в консоли: getYmClientID()",
      );
    };

    // Инициализируем при первой загрузке
    initMetrika();

    // Отслеживаем переходы между страницами
    const sendHit = () => {
      const url = window.location.pathname + window.location.search;
      if (typeof window !== "undefined" && window.ym) {
        window.ym(108452415, "hit", url, {
          referer: document.referrer,
        });
        console.log("📊 Яндекс Метрика: переход на", url);
      }
    };

    // Отслеживаем изменения URL через popstate (кнопки назад/вперед)
    const handlePopState = () => {
      sendHit();
    };

    // Отслеживаем клики по ссылкам
    const handleLinkClick = (e) => {
      const target = e.target.closest("a");
      if (
        target &&
        target.href &&
        target.href.startsWith(window.location.origin)
      ) {
        // Небольшая задержка, чтобы дать время на переход
        setTimeout(() => {
          sendHit();
        }, 100);
      }
    };

    window.addEventListener("popstate", handlePopState);
    document.addEventListener("click", handleLinkClick);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      document.removeEventListener("click", handleLinkClick);
    };
  }, []);

  return null;
}
