"use client";

import { useState } from "react";
import { Phone, CheckCircle2, ArrowLeft } from "lucide-react";
import LeadForm from "@/components/LeadForm";

export default function GKBelyeNochiPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formType, setFormType] = useState("Получить презентацию");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://ucarecdn.com/e14e5838-dd3e-4e05-a0e6-51c902e421a3/",
    "https://ucarecdn.com/2dd81fb7-3d08-4a17-99d6-b09412dd0c60/",
    "https://ucarecdn.com/b04f1440-6364-4158-b356-24426984a6e0/",
    "https://ucarecdn.com/f4f0cd4e-20bf-409c-a329-6f72f504dddb/",
    "https://ucarecdn.com/9affbb6e-5de2-40e7-aed7-225daec78c67/",
  ];

  const advantages = [
    {
      title: "Wellness-пространство",
      description:
        "Проект предлагает образ жизни, в котором сама окружающая среда поддерживает долголетие. Мягкий климат, чистый воздух, маршруты терренкуров.",
      features: [
        "Маршруты для оздоровительных прогулок",
        "Сбалансированное питание",
        "Световой режим для здоровья",
      ],
    },
    {
      title: "LeePrime Medical",
      description:
        "Клинико-диагностический центр мирового уровня с современным оборудованием и квалифицированными специалистами.",
      features: [
        "Диагностика и профилактика",
        "Превентивная медицина",
        "Персональные программы здоровья",
      ],
    },
    {
      title: "Премиальные номера",
      description:
        "Воплощение изысканного вкуса и безупречного комфорта. Эксклюзивный авторский дизайн-проект.",
      features: [
        "Авторский дизайн",
        "Премиальная бытовая техника",
        "Системы безопасности и климат-контроля",
      ],
    },
    {
      title: "Продуктивная среда",
      description:
        "Пространства для работы, творчества и саморазвития. Бизнес-центр, коворкинги, конференц-залы.",
    },
    {
      title: "Детское счастье",
      description:
        "Специальные зоны для детей разного возраста с профессиональными аниматорами и безопасными игровыми площадками.",
      features: ["Детский клуб", "Игровые площадки", "Развивающие программы"],
    },
    {
      title: "Собственный пляж",
      description:
        "Собственный пляж с причалом, теневыми зонами и пляжным баром для максимального комфорта.",
      features: ["Причал для яхт", "Шезлонги и зонты", "Пляжный бар"],
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
                ГК Белые
                <br />
                <span className="text-[#00CED1]">Ночи</span>
              </h1>

              <p className="text-base lg:text-xl text-gray-300 leading-relaxed font-inter">
                Wellness-проект в Сочи, где сама окружающая среда поддерживает
                долголетие. Всё устроено так, чтобы телу было легко включаться в
                ритм здоровья.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/5 backdrop-blur-sm border border-[#00CED1]/20 rounded-xl p-3 lg:p-4">
                  <p className="text-xs text-gray-400 mb-1">Локация</p>
                  <p className="font-bold text-sm lg:text-base">
                    Сочи, п. Уч-Дере
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-[#00CED1]/20 rounded-xl p-3 lg:p-4">
                  <p className="text-xs text-gray-400 mb-1">Стоимость от</p>
                  <p className="font-bold text-[#00CED1] text-sm lg:text-base">
                    21 172 800 ₽
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-[#00CED1]/20 rounded-xl p-3 lg:p-4">
                  <p className="text-xs text-gray-400 mb-1">Доходность</p>
                  <p className="font-bold text-[#00CED1] text-sm lg:text-base">
                    30-42%
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-[#00CED1]/20 rounded-xl p-3 lg:p-4">
                  <p className="text-xs text-gray-400 mb-1">Финансирование</p>
                  <p className="font-bold text-green-400 text-sm lg:text-base">
                    Рассрочка 0%
                  </p>
                </div>
              </div>

              <button
                onClick={() => openForm("Получить презентацию")}
                className="w-full px-6 py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-[#00CED1] to-[#0A2466] rounded-lg font-bold hover:shadow-2xl hover:shadow-[#00CED1]/50 transition-all"
              >
                Получить презентацию
              </button>

              <a
                href="/gk-belye-nochi/planirovki-i-ceny"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-[#00CED1]/20 to-[#0A2466]/20 border-2 border-[#00CED1] rounded-lg font-bold text-[#00CED1] hover:shadow-xl hover:shadow-[#00CED1]/40 transition-all text-sm lg:text-base"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                </svg>
                Посмотреть планировки и цены
              </a>
            </div>

            <div className="relative">
              <img
                src={images[currentImageIndex]}
                alt="ГК Белые Ночи"
                className="w-full h-[220px] sm:h-[360px] lg:h-[500px] object-cover rounded-2xl lg:rounded-3xl shadow-2xl border-2 lg:border-4 border-[#00CED1]/30"
              />
              <div className="grid grid-cols-5 gap-1.5 mt-2 lg:mt-4">
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
              Проект предлагает человеку образ жизни, в котором сама окружающая
              среда поддерживает долголетие. Всё устроено так, чтобы телу было
              легко включаться в ритм: мягкий климат, чистый воздух, маршруты
              терренкуров, архитектура без перегруженности, сбалансированное
              питание и световой режим.
            </p>
            <p className="text-sm lg:text-lg text-gray-300 leading-relaxed mt-4 font-inter">
              Внутреннее пространство комплекса включает Wellness-пространство,
              Клинико-диагностический центр LeePrime Medical, продуктивную среду
              для работы и творчества, пространство для детского счастья,
              рестораны, собственный пляж с причалом и паркинг.
            </p>
            <p className="text-sm lg:text-lg text-gray-300 leading-relaxed mt-4 font-inter">
              Воплощение изысканного вкуса и безупречного комфорта. Пространство
              было создано по эксклюзивному авторскому дизайн-проекту, где
              каждая деталь интерьера и тщательно подобранная мебель
              подчеркивают уникальную эстетику.
            </p>
            <p className="text-sm lg:text-lg text-gray-300 leading-relaxed mt-4 font-inter">
              Для вашего удобства номера оснащены премиальной бытовой техникой,
              а также передовыми системами безопасности и климат-контроля,
              создающими атмосферу полного спокойствия и уюта.
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
            src="https://ucarecdn.com/d59b6ccb-f0f8-4338-9590-ea417c2f6449/-/format/auto/"
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
    </div>
  );
}
