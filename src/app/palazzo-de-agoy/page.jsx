"use client";

import { useState } from "react";
import { Phone, CheckCircle2, ArrowLeft, X, Play } from "lucide-react";
import LeadForm from "@/components/LeadForm";

export default function PalazzoDeAgoyPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formType, setFormType] = useState("Получить презентацию");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const images = [
    "https://ucarecdn.com/533e9a05-d4f5-4e15-9db0-a1dacc4ead73/",
    "https://ucarecdn.com/ba266c6d-0c4d-44fe-a819-49f604a6fdb9/",
    "https://ucarecdn.com/913d78cb-fb54-4a58-8596-ef720e083c9c/",
    "https://ucarecdn.com/1a3c597e-119c-42d0-8e5f-35a141c2c2cd/",
  ];

  const brandLogos = [
    "https://ucarecdn.com/5ea4a4bc-2305-4fd6-aaea-7bcf16054e44/-/format/auto/",
    "https://ucarecdn.com/bbabd2e6-d592-4bf3-9263-c44594f150c9/-/format/auto/",
    "https://ucarecdn.com/3f2d5ce9-bc32-422d-8620-8d704891a81d/-/format/auto/",
  ];

  const advantages = [
    {
      title: "Премиальный дизайн",
      description:
        "Совместный проект с ведущими европейскими брендами Versace, Bugatti и Dolce & Gabbana по разработке эксклюзивного дизайна номеров.",
      features: [
        "Эксклюзивные интерьеры Versace",
        "Мебель от Bugatti Home",
        "Элементы декора Dolce & Gabbana",
      ],
    },
    {
      title: "Бассейны с подогревом",
      description:
        "Открытые бассейны с подогревом для круглогодичного отдыха в любую погоду.",
      features: [
        "Несколько зон для плавания",
        "Подогрев воды круглый год",
        "Панорамные виды на море",
      ],
    },
    {
      title: "SPA & медицинский центр",
      description:
        "Ультрасовременный медицинский центр превентивной и интегративной медицины, SPA-зона мирового уровня.",
      features: [
        "Диагностика и профилактика",
        "Программы wellness",
        "Косметология и массаж",
      ],
    },
    {
      title: "Парящий мост",
      description:
        "Визитная карточка комплекса — парящий мост, переходящий в амфитеатр с искусственным водопадом.",
    },
    {
      title: "Первая береговая",
      description:
        "Подлинная первая береговая линия с собственным пляжем и прямым выходом к морю.",
      features: ["Собственный пляж", "Шезлонги и теневые зоны", "Пляжный бар"],
    },
    {
      title: "Премиум-инфраструктура",
      description: "Полный спектр услуг премиум-класса для идеального отдыха.",
      features: [
        "Рестораны высокой кухни",
        "Фитнес-зал",
        "Бизнес-центр",
        "Академия творчества",
      ],
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
              <div className="flex items-center gap-3 mb-2">
                {brandLogos.map((logo, idx) => (
                  <img
                    key={idx}
                    src={logo}
                    alt=""
                    className="h-7 lg:h-10 object-contain opacity-90"
                  />
                ))}
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-helvetica">
                Палаццо Де
                <br />
                <span className="text-[#00CED1]">Агой</span>
              </h1>

              <p className="text-xs text-gray-400 font-inter italic">
                Совместный проект с Versace, Bugatti, Dolce & Gabbana
              </p>

              <p className="text-base lg:text-xl text-gray-300 leading-relaxed font-inter">
                Премиальный гостиничный комплекс на первой береговой линии
                Черноморского побережья. Уникальный проект с эксклюзивным
                дизайном от ведущих европейских брендов.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/5 backdrop-blur-sm border border-[#00CED1]/20 rounded-xl p-3 lg:p-4">
                  <p className="text-xs text-gray-400 mb-1">Локация</p>
                  <p className="font-bold text-sm lg:text-base">
                    п. Агой, Туапсинский район
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-[#00CED1]/20 rounded-xl p-3 lg:p-4">
                  <p className="text-xs text-gray-400 mb-1">Стоимость от</p>
                  <p className="font-bold text-[#00CED1] text-sm lg:text-base">
                    29 664 000 ₽
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-[#00CED1]/20 rounded-xl p-3 lg:p-4">
                  <p className="text-xs text-gray-400 mb-1">Доходность</p>
                  <p className="font-bold text-[#00CED1] text-sm lg:text-base">
                    32-45%
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-[#00CED1]/20 rounded-xl p-3 lg:p-4">
                  <p className="text-xs text-gray-400 mb-1">Финансирование</p>
                  <p className="font-bold text-green-400 text-sm lg:text-base">
                    Рассрочка 0%
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

              <a
                href="/palazzo-de-agoy/planirovki-i-ceny"
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
                alt="Палаццо Де Агой"
                className="w-full h-[220px] sm:h-[360px] lg:h-[500px] object-cover rounded-2xl lg:rounded-3xl shadow-2xl border-2 lg:border-4 border-[#00CED1]/30"
              />
              <div className="grid grid-cols-4 gap-1.5 mt-2 lg:mt-4">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative h-12 sm:h-16 lg:h-20 rounded-lg overflow-hidden border-2 transition-all ${
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
              Премиальный гостиничный комплекс на первой береговой линии
              Черноморского побережья в посёлке Агой Туапсинского района
              реализует уникальный проект — ведётся совместная работа с ведущими
              европейскими брендами Versace, Bugatti и Dolce & Gabbana по
              разработке эксклюзивного дизайна номеров.
            </p>
            <p className="text-sm lg:text-lg text-gray-300 leading-relaxed mt-4 font-inter">
              Этот беспрецедентный коллаборационный процесс призван задать новые
              стандарты премиального гостеприимства, объединив итальянский шик,
              инновационный дизайн и безупречное качество исполнения.
            </p>
            <p className="text-sm lg:text-lg text-gray-300 leading-relaxed mt-4 font-inter">
              Гостей ожидают открытые бассейны с подогревом, подлинная первая
              береговая линия с собственным пляжем, SPA‑зона и ультрасовременный
              медицинский центр превентивной и интегративной медицины. В
              распоряжении отдыхающих — рестораны, фитнес‑зал, бизнес‑центр,
              академия творчества, а также детские и спортивные площадки.
            </p>
            <p className="text-sm lg:text-lg text-gray-300 leading-relaxed mt-4 font-inter">
              Визитная карточка комплекса — парящий мост, переходящий в
              амфитеатр с искусственным водопадом.
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
            src="https://ucarecdn.com/69f75c7c-d214-4e97-a6dd-fe0207d18cf7/-/format/auto/"
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
                src="https://rutube.ru/play/embed/e74397d670c8c4579ba0c35d34f8f870/?autoplay=1&muted=0"
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                allowFullScreen
                frameBorder="0"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
