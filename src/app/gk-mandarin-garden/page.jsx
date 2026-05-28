"use client";

import { useState } from "react";
import { Phone, CheckCircle2, ArrowLeft, X, Play } from "lucide-react";
import LeadForm from "@/components/LeadForm";

export default function GKMandarinGardenPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formType, setFormType] = useState("Получить презентацию");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const images = [
    "https://ucarecdn.com/196f5446-85be-48b3-9b93-97ad2757da72/",
    "https://ucarecdn.com/7ecc520d-3ee5-4d81-8ac5-8f6d21c9ea3d/",
    "https://ucarecdn.com/9fe6800a-e9a0-4410-ac42-cbe0199d6d39/",
    "https://ucarecdn.com/157148ec-3eb1-41db-b90f-6ca1377a3546/",
    "https://ucarecdn.com/4c2aa0dc-1494-42e4-a02e-ea007ec92c8a/",
    "https://ucarecdn.com/4b72f79f-b1a1-425c-bba7-b0c9e9722695/",
    "https://ucarecdn.com/b6179b83-ed34-4f0a-b167-53f2f6219b46/",
    "https://ucarecdn.com/f4214be7-f505-46ee-9838-d7e47d210cfe/",
  ];

  const advantages = [
    {
      title: "Центр Адлера",
      description:
        "Уникальное расположение в самом центре Адлера, рядом с ТРЦ Мандарин и прогулочной набережной реки Мзымта.",
      features: [
        "Море в пешей доступности",
        "ТРЦ Мандарин рядом",
        "Набережная реки Мзымта",
      ],
    },
    {
      title: "Премиум-класс",
      description:
        "Пространство, где сочетаются комфорт, статус и курортный образ жизни на круглый год.",
      features: [
        "Элитный курорт",
        "Премиальные интерьеры",
        "Высокий уровень сервиса",
      ],
    },
    {
      title: "Развитая инфраструктура",
      description:
        "Море, набережная, рестораны, магазины и ключевые городские объекты находятся в пешей доступности.",
      features: [
        "Рестораны и кафе",
        "Торговые центры",
        "Развлекательные объекты",
      ],
    },
    {
      title: "Курортная жизнь",
      description:
        "Удобная и насыщенная среда для жизни и отдыха, объединяющая преимущества центрального расположения и атмосферу элитного курорта.",
    },
    {
      title: "Статус и комфорт",
      description:
        "Проект создан для тех, кто ценит качество, статус и круглогодичный курортный образ жизни.",
      features: [
        "Престижный адрес",
        "Высокий уровень комфорта",
        "Круглогодичный отдых",
      ],
    },
    {
      title: "Инвестиционный потенциал",
      description:
        "Одна из самых перспективных локаций Сочи для инвестиций в недвижимость премиум-класса.",
      features: ["Высокая доходность", "Рост стоимости", "Стабильный спрос"],
    },
  ];

  const openForm = (type) => {
    setFormType(type);
    setIsFormOpen(true);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-[#0A2466] via-[#2C2C2C] to-[#0A2466] text-white"
      style={{ overflowX: "clip", position: "relative", zIndex: 1 }}
    >
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#0A2466]/95 backdrop-blur-lg border-b border-[#00CED1]/20">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-3 lg:py-4">
          <div className="flex items-center justify-between gap-2">
            <a
              href="/"
              className="flex items-center space-x-2 hover:text-[#00CED1] transition-colors flex-shrink-0"
            >
              <ArrowLeft size={20} />
              <span className="hidden sm:inline">Назад к каталогу</span>
            </a>

            <div className="flex-1 flex justify-center pointer-events-none">
              <div className="flex items-center gap-1 lg:hidden">
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#00CED1"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div className="text-[0.52rem] text-white/60 leading-tight text-center">
                  <div>г. Сочи,</div>
                  <div>ул. Юных Ленинцев, 10</div>
                </div>
              </div>
              <div className="hidden lg:flex items-center gap-1">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#00CED1"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-[0.78rem] text-white/60 font-inter tracking-wide whitespace-nowrap">
                  г. Сочи, ул. Юных Ленинцев, д.10
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-3 flex-shrink-0">
              <a
                href="tel:+70000000000"
                className="hidden sm:flex items-center space-x-2 hover:text-[#00CED1] transition-colors"
              >
                <Phone size={16} className="text-[#00CED1]" />
                <span>8(000)-000-00-00</span>
              </a>
              <button
                onClick={() => openForm("Консультация")}
                className="px-4 py-2 lg:px-6 text-sm bg-gradient-to-r from-[#00CED1] to-[#0A2466] rounded-lg font-medium hover:shadow-lg hover:shadow-[#00CED1]/50 transition-all"
              >
                Заказать звонок
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-10 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-helvetica">
                ГК Mandarin
                <br />
                <span className="text-[#00CED1]">Garden</span>
              </h1>

              <p className="text-base lg:text-xl text-gray-300 leading-relaxed font-inter">
                Премиум-проект в самом центре Адлера. Уникальная локация рядом с
                ТРЦ Мандарин, прогулочной набережной реки Мзымта и морем.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/5 backdrop-blur-sm border border-[#00CED1]/20 rounded-xl p-3 lg:p-4">
                  <p className="text-xs text-gray-400 mb-1">Локация</p>
                  <p className="font-bold text-sm lg:text-base">Адлер</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-[#00CED1]/20 rounded-xl p-3 lg:p-4">
                  <p className="text-xs text-gray-400 mb-1">Стоимость от</p>
                  <p className="font-bold text-[#00CED1] text-sm lg:text-base">
                    72 410 000 ₽
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-[#00CED1]/20 rounded-xl p-3 lg:p-4">
                  <p className="text-xs text-gray-400 mb-1">Доходность</p>
                  <p className="font-bold text-[#00CED1] text-sm lg:text-base">
                    28-38%
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-[#00CED1]/20 rounded-xl p-3 lg:p-4">
                  <p className="text-xs text-gray-400 mb-1">Финансирование</p>
                  <p className="font-bold text-green-400 text-sm lg:text-base">
                    Рассрочка и ипотека
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500 rounded-xl p-3">
                <p className="font-bold text-yellow-300 text-center text-sm">
                  ⚡ Старт закрытых продаж
                </p>
              </div>

              {/* Кнопки — вертикально на мобиле */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <button
                  onClick={() => openForm("Получить презентацию")}
                  className="flex-1 px-6 py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-[#00CED1] to-[#0A2466] rounded-lg font-bold hover:shadow-2xl hover:shadow-[#00CED1]/50 transition-all"
                >
                  Получить презентацию
                </button>
                <button
                  onClick={() => setShowVideo(true)}
                  className="flex items-center justify-center gap-2 px-6 py-3 lg:px-8 lg:py-4 border-2 border-[#00CED1] rounded-lg font-bold hover:bg-[#00CED1]/10 transition-all"
                >
                  <Play size={18} />
                  Видеообзор
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src={images[currentImageIndex]}
                alt="ГК Mandarin Garden"
                className="w-full h-[220px] sm:h-[360px] lg:h-[500px] object-cover rounded-2xl lg:rounded-3xl shadow-2xl border-2 lg:border-4 border-[#00CED1]/30"
              />
              {/* 8 изображений — по 4 в строку */}
              <div className="grid grid-cols-4 gap-1.5 mt-2 lg:mt-4">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative h-10 sm:h-14 lg:h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      currentImageIndex === idx
                        ? "border-[#00CED1]"
                        : "border-transparent hover:border-white/50"
                    }`}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="relative py-10 lg:py-20 bg-gradient-to-br from-[#2C2C2C] to-[#0A2466]">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <h2 className="text-2xl lg:text-4xl font-bold mb-6 lg:mb-8 font-helvetica text-center">
            О проекте
          </h2>
          <div className="bg-white/5 backdrop-blur-sm border border-[#00CED1]/20 rounded-2xl p-5 lg:p-8">
            <p className="text-sm lg:text-lg text-gray-300 leading-relaxed font-inter">
              Проект расположен в уникальной локации: в самом центре Адлера,
              рядом с ТРЦ Мандарин, прогулочной набережной реки Мзымта и морем.
              Это пространство, где сочетаются комфорт, статус и курортный образ
              жизни на круглый год.
            </p>
            <p className="text-sm lg:text-lg text-gray-300 leading-relaxed mt-4 font-inter">
              Объединяет преимущества центрального расположения и атмосферу
              элитного курорта. Море, набережная, рестораны, магазины и ключевые
              городские объекты находятся в пешей доступности, формируя удобную
              и насыщенную среду для жизни и отдыха.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="relative py-10 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <h2 className="text-2xl lg:text-4xl font-bold mb-8 lg:mb-12 font-helvetica text-center">
            Преимущества комплекса
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-[#00CED1]/20 rounded-2xl p-5 hover:border-[#00CED1] hover:bg-white/10 transition-all"
              >
                <h3 className="text-base lg:text-xl font-bold mb-2 text-[#00CED1] font-helvetica">
                  {advantage.title}
                </h3>
                <p className="text-sm text-gray-300 mb-3 font-inter">
                  {advantage.description}
                </p>
                {advantage.features && (
                  <ul className="space-y-1.5">
                    {advantage.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle2
                          className="text-[#00CED1] mt-0.5 flex-shrink-0"
                          size={14}
                        />
                        <span className="text-xs text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details Image */}
      <section className="relative py-10 lg:py-20 bg-gradient-to-br from-[#2C2C2C] to-[#0A2466]">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <h2 className="text-2xl lg:text-4xl font-bold mb-8 lg:mb-12 font-helvetica text-center">
            Детальные характеристики
          </h2>
          <img
            src="https://ucarecdn.com/83d855c3-aaa9-4779-8132-b646b3711164/-/format/auto/"
            alt="Характеристики"
            className="w-full rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-10 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <div className="bg-gradient-to-r from-[#00CED1]/20 to-[#0A2466]/20 border-2 border-[#00CED1] rounded-2xl lg:rounded-3xl p-6 lg:p-12 text-center">
            <h2 className="text-2xl lg:text-4xl font-bold mb-3 font-helvetica">
              Заинтересовал проект?
            </h2>
            <p className="text-sm lg:text-xl text-gray-300 mb-6 font-inter">
              Получите персональную консультацию и презентацию с планировками
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => openForm("Получить презентацию и планировки")}
                className="px-6 py-4 lg:px-10 lg:py-5 bg-gradient-to-r from-[#00CED1] to-[#0A2466] rounded-xl font-bold hover:shadow-2xl hover:shadow-[#00CED1]/50 transition-all"
              >
                Получить презентацию
              </button>
              <button
                onClick={() => openForm("Консультация эксперта")}
                className="px-6 py-4 lg:px-10 lg:py-5 border-2 border-[#00CED1] rounded-xl font-bold hover:bg-[#00CED1]/10 transition-all"
              >
                Консультация эксперта
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-[#0A2466] to-[#2C2C2C] border-t border-[#00CED1]/20 py-10">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2025 Shirokov Deus Capital. Все права защищены.
          </p>
        </div>
      </footer>

      <LeadForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        formType={formType}
        showMessenger={true}
        showMessage={true}
      />

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 z-10 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm"
            >
              <X size={28} className="text-white" />
            </button>
            <div
              className="relative bg-black rounded-2xl overflow-hidden"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src="https://rutube.ru/play/embed/931b5063b7f344ed398050e072c50cab/?autoplay=1"
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                allowFullScreen
                frameBorder="0"
                title="Видеообзор ГК Mandarin Garden"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
