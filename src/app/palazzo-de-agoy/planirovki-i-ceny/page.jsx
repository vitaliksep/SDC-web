"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Phone,
  LayoutGrid,
  AlertCircle,
  Loader,
} from "lucide-react";
import LeadForm from "@/components/LeadForm";

const BLOCKS = [
  {
    label: "Корпус 1, Секция 2",
    url: "https://ru.lstd.pro/08e3635f-0778-4c10-a363-360e89c63c23/dcd3f7c6-ff04-4798-a4e0-f844b110eb8f/clusters/dc4015b5-8693-4fed-977d-d3958065f964",
  },
  {
    label: "Корпус 1, Секция 3",
    url: "https://ru.lstd.pro/08e3635f-0778-4c10-a363-360e89c63c23/dcd3f7c6-ff04-4798-a4e0-f844b110eb8f/clusters/8dfbf1b7-e5cd-454b-bb63-4e7c57c63a42",
  },
  {
    label: "Корпус 1, Секция 4",
    url: "https://ru.lstd.pro/08e3635f-0778-4c10-a363-360e89c63c23/dcd3f7c6-ff04-4798-a4e0-f844b110eb8f/clusters/664e3ef5-3302-480e-94c8-aa95fbc47fbf",
  },
  {
    label: "Корпус 1, Секция 5",
    url: "https://ru.lstd.pro/08e3635f-0778-4c10-a363-360e89c63c23/dcd3f7c6-ff04-4798-a4e0-f844b110eb8f/clusters/9997f2c9-6cca-4c19-8a20-b3d1d1c9bfca",
  },
  {
    label: "Корпус 2, Секция 1",
    url: "https://ru.lstd.pro/08e3635f-0778-4c10-a363-360e89c63c23/dcd3f7c6-ff04-4798-a4e0-f844b110eb8f/clusters/9736c077-5265-44c3-9035-ca280e428561",
  },
  {
    label: "Корпус 2, Секция 2",
    url: "https://ru.lstd.pro/08e3635f-0778-4c10-a363-360e89c63c23/dcd3f7c6-ff04-4798-a4e0-f844b110eb8f/clusters/7f8d086a-a244-48c6-adbc-491c6eb28166",
  },
  {
    label: "Корпус 2, Секция 3",
    url: "https://ru.lstd.pro/08e3635f-0778-4c10-a363-360e89c63c23/dcd3f7c6-ff04-4798-a4e0-f844b110eb8f/clusters/611d9288-55c0-4e50-b53d-6e0e7063c6dc",
  },
  {
    label: "Корпус 2, Секция 4",
    url: "https://ru.lstd.pro/08e3635f-0778-4c10-a363-360e89c63c23/dcd3f7c6-ff04-4798-a4e0-f844b110eb8f/clusters/419dd2e5-4cec-46fc-9589-6dadcede0f6e",
  },
  {
    label: "Корпус 2, Секция 5",
    url: "https://ru.lstd.pro/08e3635f-0778-4c10-a363-360e89c63c23/dcd3f7c6-ff04-4798-a4e0-f844b110eb8f/clusters/3ee6cb40-3384-4636-b51e-70e972dd1daf",
  },
];

export default function PlanirovkiPalazzoPage() {
  const [activeBlock, setActiveBlock] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleBlockChange = (index) => {
    if (index === activeBlock) return;
    setActiveBlock(index);
    setLoading(true);
    setError(false);
  };

  const handleIframeLoad = () => {
    setLoading(false);
    setError(false);
  };

  const handleIframeError = () => {
    setLoading(false);
    setError(true);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-[#0A2466] via-[#2C2C2C] to-[#0A2466] text-white flex flex-col"
      style={{ position: "relative", zIndex: 1 }}
    >
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#0A2466]/95 backdrop-blur-lg border-b border-[#00CED1]/20">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-3 lg:py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Back */}
            <a
              href="/palazzo-de-agoy"
              className="flex items-center space-x-2 hover:text-[#00CED1] transition-colors shrink-0"
            >
              <ArrowLeft size={20} />
              <span className="hidden sm:inline text-sm">Назад к проекту</span>
            </a>

            {/* Title */}
            <div className="flex items-center gap-2 min-w-0">
              <LayoutGrid size={18} className="text-[#00CED1] shrink-0" />
              <span className="text-sm lg:text-base font-bold truncate font-helvetica">
                Палаццо Де Агой — Планировки и цены
              </span>
            </div>

            {/* Phone + CTA */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="tel:+70000000000"
                className="hidden sm:flex items-center space-x-2 hover:text-[#00CED1] transition-colors text-sm"
              >
                <Phone size={16} className="text-[#00CED1]" />
                <span>8(000)-000-00-00</span>
              </a>
              <button
                onClick={() => setIsFormOpen(true)}
                className="px-4 py-2 bg-gradient-to-r from-[#00CED1] to-[#0A2466] rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-[#00CED1]/50 transition-all"
              >
                Консультация
              </button>
            </div>
          </div>

          {/* Адрес — по центру, одна строка */}
          <div className="flex justify-center items-center gap-1 mt-1 whitespace-nowrap">
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#00CED1"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="text-[0.58rem] text-white/50 font-inter tracking-wide">
              г.&nbsp;Сочи,&nbsp;ул.&nbsp;Юных&nbsp;Ленинцев,&nbsp;д.10
            </span>
          </div>
        </div>
      </header>

      {/* Block Tabs */}
      <div className="bg-[#0A2466]/80 border-b border-[#00CED1]/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-3">
          <div className="flex gap-2 lg:gap-3 overflow-x-auto pb-1">
            {BLOCKS.map((block, index) => (
              <button
                key={index}
                onClick={() => handleBlockChange(index)}
                className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${
                  activeBlock === index
                    ? "bg-gradient-to-r from-[#00CED1] to-[#0A2466] text-white shadow-lg shadow-[#00CED1]/30 scale-105"
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {block.label}
              </button>
            ))}
          </div>

          <p className="text-xs text-gray-400 mt-2 font-inter">
            Кликайте на квартиру, чтобы увидеть детали. Используйте фильтры для
            поиска по площади, этажу, цене.
          </p>
        </div>
      </div>

      {/* iFrame Area */}
      <div className="flex-1 relative">
        {/* Loading Overlay */}
        {loading && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-gradient-to-br from-[#0A2466] to-[#2C2C2C]">
            <Loader size={40} className="text-[#00CED1] animate-spin mb-4" />
            <p className="text-gray-300 font-inter text-sm">
              Загружаем шахматку {BLOCKS[activeBlock].label}...
            </p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-gradient-to-br from-[#0A2466] to-[#2C2C2C] px-6">
            <AlertCircle size={48} className="text-red-400 mb-4" />
            <h3 className="text-xl font-bold mb-2 font-helvetica">
              Не удалось загрузить шахматку
            </h3>
            <p className="text-gray-400 text-center mb-6 font-inter max-w-md">
              Возможно, сервис временно недоступен. Вы можете открыть шахматку
              напрямую или запросить актуальный прайс у нашего эксперта.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={BLOCKS[activeBlock].url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-[#00CED1] rounded-xl font-bold hover:bg-[#00CED1]/10 transition-all text-center"
              >
                Открыть в новой вкладке
              </a>
              <button
                onClick={() => setIsFormOpen(true)}
                className="px-6 py-3 bg-gradient-to-r from-[#00CED1] to-[#0A2466] rounded-xl font-bold hover:shadow-lg hover:shadow-[#00CED1]/50 transition-all"
              >
                Получить актуальный прайс
              </button>
            </div>
          </div>
        )}

        {/* iFrame */}
        <iframe
          key={activeBlock}
          src={BLOCKS[activeBlock].url}
          className="w-full border-0"
          style={{ height: "calc(100vh - 196px)", minHeight: "500px" }}
          onLoad={handleIframeLoad}
          onError={handleIframeError}
          allow="fullscreen"
          title={`Шахматка Палаццо Де Агой — ${BLOCKS[activeBlock].label}`}
        />
      </div>

      {/* Bottom CTA Strip */}
      <div className="sticky bottom-0 z-30 bg-[#0A2466]/98 backdrop-blur-lg border-t border-[#00CED1]/30 py-3 px-4 lg:px-6 shadow-[0_-4px_24px_rgba(0,206,209,0.12)]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            <p className="text-base lg:text-lg font-bold text-white font-helvetica leading-tight">
              ⚡ Нашли подходящую квартиру?
            </p>
            <p className="text-sm text-[#00CED1] font-inter font-medium mt-0.5">
              Наш эксперт поможет забронировать по лучшей цене — бесплатно
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="tel:+70000000000"
              className="flex items-center gap-2 px-5 py-2.5 border-2 border-[#00CED1] rounded-xl text-sm font-bold hover:bg-[#00CED1]/10 transition-all"
            >
              <Phone size={16} className="text-[#00CED1]" />
              Позвонить
            </a>
            <button
              onClick={() => setIsFormOpen(true)}
              className="px-5 py-2.5 bg-gradient-to-r from-[#00CED1] to-[#0A2466] rounded-xl text-sm font-bold hover:shadow-lg hover:shadow-[#00CED1]/50 transition-all"
            >
              Забронировать квартиру
            </button>
          </div>
        </div>
      </div>

      {/* Lead Form Modal */}
      <LeadForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        formType="Бронирование квартиры Палаццо Де Агой"
        showMessenger={true}
        showMessage={true}
      />

      <style jsx global>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </div>
  );
}
