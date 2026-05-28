"use client";

import { useState } from "react";
import { Phone, CheckCircle2, ArrowLeft, X, Play } from "lucide-react";
import LeadForm from "@/components/LeadForm";

export default function AleanSelectAgoyPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formType, setFormType] = useState("Получить презентацию");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const images = [
    "https://ucarecdn.com/68df33eb-507c-413c-8c76-fe7274d80aec/",
    "https://ucarecdn.com/7d7c60cd-c507-47e9-9f8c-3118f46db3fe/",
    "https://ucarecdn.com/59b42721-7057-4e9e-af56-fa3453335e83/",
    "https://ucarecdn.com/4d0f254b-9c88-415c-98dc-7695b21d19e4/",
    "https://ucarecdn.com/7e9a2375-d21c-4481-abae-adf6effd11c3/",
    "https://ucarecdn.com/5dc2b6b5-6483-42c7-b855-3ecbebebd4f3/",
    "https://ucarecdn.com/83fb0dcd-fb0f-4575-8507-ea00e3a65bc7/",
  ];

  const advantages = [
    {
      title: "СПА-комплекс",
      description:
        "Гармония релаксации и безупречный сервис для вашего идеального отдыха",
      features: [
        "Spa lounge с фитобаром",
        "Акватермальный комплекс 1750 м²",
        "27 кабинетов для процедур",
      ],
    },
    {
      title: "ДЕТСКИЕ ЗОНЫ",
      description:
        "В АЛЕАН СЕЛЕКТ АГОЙ дети всегда найдут чем заняться вне зависимости от сезона и погоды",
      features: [
        "Три открытых бассейна по 100 м²",
        "Плейхаб на открытом воздухе",
        "Развлекательный центр",
      ],
    },
    {
      title: "Фитнес клуб",
      description:
        "Современный фитнес клуб создан для тех, кто хочет оставаться в форме даже в путешествии. Просторный зал с профессиональными тренажерами и кардио-зоной поможет провести эффективную тренировку.",
    },
    {
      title: "Ресторан",
      description:
        "Уютная атмосфера, изысканная кухня и сервис без лишних хлопот. Разнообразное меню со свежими локальными продуктами. Идеально для гурманов и ценителей атмосферного отдыха.",
    },
    {
      title: "БАССЕЙНЫ",
      description:
        "Три открытых бассейна площадью по 400 м² расположенные между корпусами отеля, создают отдельные аквазоны. А крытый бассейн с панорамным остеклением позволяет гостям в любую погоду наслаждаться плаванием и живописной природой отеля.",
    },
    {
      title: "ЛИФТ НА ПЛЯЖ",
      description:
        "Лифт на пляж – ваш комфортный и быстрый спуск к морю без лестниц и подъемов. Панорамные кабины с видом на побережье добавят отдыху приятные моменты, а современная система гарантирует безопасность.",
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
                ГК Alean Select
                <br />
                <span className="text-[#00CED1]">Agoy</span>
              </h1>

              <p className="text-base lg:text-xl text-gray-300 leading-relaxed font-inter">
                Курортный отель для семейного отдыха с продуманной до мелочей
                инфраструктурой. Создаёт идеальное пространство для отдыха, где
                каждый гость найдёт свой источник вдохновения.
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
                    20 705 800 ₽
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-[#00CED1]/20 rounded-xl p-3 lg:p-4">
                  <p className="text-xs text-gray-400 mb-1">Доходность</p>
                  <p className="font-bold text-[#00CED1] text-sm lg:text-base">
                    29-40%
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-[#00CED1]/20 rounded-xl p-3 lg:p-4">
                  <p className="text-xs text-gray-400 mb-1">Финансирование</p>
                  <p className="font-bold text-green-400 text-sm lg:text-base">
                    Рассрочка 0%
                  </p>
                </div>
              </div>

              {/* Кнопки — вертикально на мобиле */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
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

              {/* Кнопка шахматки */}
              <a
                href="/alean-select-agoy/planirovki-i-ceny"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 lg:px-8 lg:py-4 border-2 border-white/30 rounded-lg font-bold hover:border-[#00CED1] hover:bg-[#00CED1]/10 transition-all text-white text-sm lg:text-base"
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
                  className="text-[#00CED1]"
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
                alt="ГК Alean Select Agoy"
                className="w-full h-[220px] sm:h-[360px] lg:h-[500px] object-cover rounded-2xl lg:rounded-3xl shadow-2xl border-2 lg:border-4 border-[#00CED1]/30"
              />
              {/* 7 изображений — по 4 в строку на мобиле, все 7 на десктопе */}
              <div className="grid grid-cols-4 lg:grid-cols-7 gap-1.5 mt-2 lg:mt-4">
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
              Комплекс находится на первой береговой линии и является частью
              курортного комплекса под управлением Alean Collection. Это
              благоустроенная территория с собственным пляжем, рестораном
              шведской линии и баром. Открытые бассейны, акватермальный
              комплекс, салон красоты, фитнес-зал с современным оборудованием.
            </p>
            <p className="text-sm lg:text-lg text-gray-300 leading-relaxed mt-4 font-inter">
              В отеле функционирует детский клуб, детская площадка, для отдыха
              взрослых гостей - парковая территория и лаунж-зоны. В шаговой
              доступности расположен собственный пляж с зоной для загара,
              теневыми навесами, летним баром и душевыми кабинками.
            </p>
            <p className="text-sm lg:text-lg text-gray-300 leading-relaxed mt-4 font-inter">
              Комплекс расположен на территории площадью 5 гектар на высоте 150
              метров над уровнем моря, в окружении хвойного леса, в котором
              представлено более 50 видов деревьев. Объект обладает
              самодостаточной внутренней инфраструктурой.
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
            src="https://ucarecdn.com/dcfd8cf2-09a6-49d8-8b4b-57d93655081c/-/format/auto/"
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
                src="https://rutube.ru/play/embed/261fc765118ef821c76a74f932b7facb/"
                className="absolute inset-0 w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
