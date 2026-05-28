import { useState, useEffect, useRef } from "react";
import {
  MapPin,
  TrendingUp,
  Home,
  Calendar,
  DollarSign,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function ProjectsOverviewSection({ openForm }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndexes, setCurrentImageIndexes] = useState({});
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  // ── НОВЫЙ STATE: активный таб для десктопа ──
  const [activeTab, setActiveTab] = useState(0);

  // Обновленные данные проектов с правильными значениями
  const projects = [
    {
      id: "premier-dom-otel",
      name: "ПРЕМЬЕР Дом-Отель",
      location: "пгт. Джубга, Туапсинский район",
      minPrice: 4900000,
      pricePerSqm: 160000,
      areaFrom: 30.6,
      areaTo: 101.7,
      entryThreshold: 4900000,
      yield: "до 35%",
      strategies: ["Аренда", "Перепродажа", "Аренда+Перепродажа"],
      financing: "Рассрочка 0%",
      deliveryDate: "2027",
      legal: ["ФЗ-214", "ДДУ"],
      salesStart: "Старт продаж",
      images: [
        "https://ucarecdn.com/c6e71829-b100-4344-a213-e0574df81f5c/-/format/auto/",
        "https://ucarecdn.com/e851739e-b838-4b62-b4e3-5e57ccb008c3/-/format/auto/",
        "https://ucarecdn.com/cf843d6e-b3e2-471b-a40b-24de1339b4fb/-/format/auto/",
        "https://ucarecdn.com/2b31907c-8b41-46e2-bb8c-721a0b08406a/-/format/auto/",
      ],
      description:
        "ПРЕМЬЕР — дом-отель нового поколения в пгт. Джубга на черноморском побережье. 46 уникальных планировок от 30,6 до 101,7 м², потолки до 4,5 м, 60% квартир с прямым видом на море. Профессиональная управляющая компания обеспечивает пассивный доход без вашего участия. Рассрочка 0% до сдачи объекта. Вход на старте — максимальная доходность.",
    },
    {
      id: "alean-select-agoy",
      name: "ГК Alean Select Agoy",
      location: "п. Агой, Туапсинский район",
      minPrice: 20705800,
      pricePerSqm: 535011,
      areaFrom: 33.4,
      areaTo: 88.3,
      entryThreshold: 4776000,
      yield: "29-40%",
      strategies: ["Аренда", "Перепродажа", "Аренда+Перепродажа"],
      financing: "Ипотека, Рассрочка 0%",
      deliveryDate: "1/2029",
      legal: ["ФЗ-212", "ДДУ"],
      salesStart: "Доступны сейчас",
      video: "https://rutube.ru/play/embed/261fc765118ef821c76a74f932b7facb/",
      images: [
        "https://ucarecdn.com/68df33eb-507c-413c-8c76-fe7274d80aec/",
        "https://ucarecdn.com/7d7c60cd-c507-47e9-9f8c-3118f46db3fe/",
        "https://ucarecdn.com/59b42721-7057-4e9e-af56-fa3453335e83/",
        "https://ucarecdn.com/4d0f254b-9c88-415c-98dc-7695b21d19e4/",
        "https://ucarecdn.com/7e9a2375-d21c-4481-abae-adf6effd11c3/",
        "https://ucarecdn.com/5dc2b6b5-6483-42c7-b855-3ecbebebd4f3/",
        "https://ucarecdn.com/83fb0dcd-fb0f-4575-8507-ea00e3a65bc7/",
      ],
      description:
        "Комплекс находится на первой береговой линии и является частью курортного комплекса под управлением Alean Collection. Это благоустроенная территория с собственным пляжем, рестораном шведской линии и баром. Открытые бассейны, акватермальный комплекс, салон красоты, фитнес-зал с современным оборудованием. В отеле функционирует детский клуб, детская площадка, для отдыха взрослых гостей - парковая территория и лаунж-зоны. В шаговой доступности расположен собственный пляж с зоной для загара, теневыми навесами, летним баром и душевыми кабинками. Комплекс расположен на территории площадью 5 гектар на высоте 150 метров над уровнем моря, в окружении хвойного леса, в котором представлено более 50 видов деревьев. Объект обладает самодостаточной внутренней инфраструктурой.",
      detailsImage:
        "https://ucarecdn.com/dcfd8cf2-09a6-49d8-8b4b-57d93655081c/-/format/auto/",
    },
    {
      id: "palazzo-de-agoy",
      name: "Палаццо Де Агой",
      subtitle: "Совместный проект с Versace, Bugatti, Dolce & Gabbana",
      brandLogos: [
        "https://ucarecdn.com/5ea4a4bc-2305-4fd6-aaea-7bcf16054e44/-/format/auto/",
        "https://ucarecdn.com/bbabd2e6-d592-4bf3-9263-c44594f150c9/-/format/auto/",
        "https://ucarecdn.com/3f2d5ce9-bc32-422d-8620-8d704891a81d/-/format/auto/",
      ],
      location: "п. Агой, Туапсинский район",
      minPrice: 29664000,
      pricePerSqm: 950000,
      areaFrom: 26.6,
      areaTo: 82.2,
      entryThreshold: 5900000,
      yield: "32-45%",
      strategies: ["Аренда", "Перепродажа", "Аренда+Перепродажа"],
      financing: "Рассрочка 0%",
      deliveryDate: "2/2027",
      legal: ["ФЗ-212", "ДДУ"],
      salesStart: "Старт закрытых продаж",
      video: "https://rutube.ru/play/embed/e74397d670c8c4579ba0c35d34f8f870/",
      images: [
        "https://ucarecdn.com/533e9a05-d4f5-4e15-9db0-a1dacc4ead73/",
        "https://ucarecdn.com/ba266c6d-0c4d-44fe-a819-49f604a6fdb9/",
        "https://ucarecdn.com/913d78cb-fb54-4a58-8596-ef720e083c9c/",
        "https://ucarecdn.com/1a3c597e-119c-42d0-8e5f-35a141c2c2cd/",
      ],
      description:
        "Премиальный гостиничный комплекс на первой береговой линии Черноморского побережья в посёлке Агой Туапсинского района реализует уникальный проект — ведётся совместная работа с ведущими европейскими брендами Versace, Bugatti и Dolce & Gabbana по разработке эксклюзивного дизайна номеров. Этот беспрецедентный коллаборационный процесс призван задать новые стандарты премиального гостеприимства, объединив итальянский шик, инновационный дизайн и безупречное качество исполнения. Гостей ожидают открытые бассейны с подогревом, подлинная первая береговая линия с собственным пляжем, SPA‑зона и ультрасовременный медицинский центр превентивной и интегративной медицины. В распоряжении отдыхающих — рестораны, фитнес‑зал, бизнес‑центр, академия творчества, а также детские и спортивные площадки. Визитная карточка комплекса — парящий мост, переходящий в амфитеатр с искусственным водопадом.",
      detailsImage:
        "https://ucarecdn.com/69f75c7c-d214-4e97-a6dd-fe0207d18cf7/-/format/auto/",
    },
    {
      id: "gk-belye-nochi",
      name: "ГК Белые Ночи",
      location: "Сочи, п. Уч-Дере",
      minPrice: 21172800,
      pricePerSqm: 778000,
      areaFrom: 24.06,
      areaTo: 69.71,
      entryThreshold: 8282000,
      yield: "30-42%",
      strategies: ["Аренда", "Перепродажа", "Аренда+Перепродажа"],
      financing: "Рассрочка 0%",
      deliveryDate: "3/2027",
      legal: ["ФЗ-212", "ДДУ"],
      salesStart: "Доступны сейчас",
      images: [
        "https://ucarecdn.com/e14e5838-dd3e-4e05-a0e6-51c902e421a3/",
        "https://ucarecdn.com/2dd81fb7-3d08-4a17-99d6-b09412dd0c60/",
        "https://ucarecdn.com/b04f1440-6364-4158-b356-24426984a6e0/",
        "https://ucarecdn.com/f4f0cd4e-20bf-409c-a329-6f72f504dddb/",
        "https://ucarecdn.com/9affbb6e-5de2-40e7-aed7-225daec78c67/",
      ],
      description:
        "Проект предлагает человеку образ жизни, в котором сама окружающая среда поддерживает долголетие. Всё устроено так, чтобы телу было легко включаться в ритм: мягкий климат, чистый воздух, маршруты терренкуров, архитектура без перегруженности, сбалансированное питание и световой режим. Внутреннее пространство комплекса - Wellness-пространств - Клинико-диагностический центр LeePrime Medical - Продуктивная среда - Пространство для детского счастья - Ресторан - Собственный пляж с причалом - Паркинг. Воплощение изысканного вкуса и безупречного комфорта. Пространство было создано по эксклюзивному авторскому дизайн-проекту, где каждая деталь интерьера и тщательно подобранная мебель подчеркивают уникальную эстетику. Для вашего удобства номера оснащены премиальной бытовой техникой, а также передовыми системами безопасности и климат-контроля, создающими атмосферу полного спокойствия и уюта.",
      detailsImage:
        "https://ucarecdn.com/d59b6ccb-f0f8-4338-9590-ea417c2f6449/-/format/auto/",
    },
    {
      id: "gk-mandarin-garden",
      name: "ГК Mandarin Garden",
      location: "Адлер",
      minPrice: 72410000,
      pricePerSqm: 1300000,
      areaFrom: 55.6,
      areaTo: 142.2,
      entryThreshold: 18700000,
      yield: "28-38%",
      strategies: ["Аренда", "Перепродажа", "Аренда+Перепродажа"],
      financing: "Рассрочка и ипотека",
      deliveryDate: "1/2030",
      legal: ["ФЗ-212", "ДДУ"],
      salesStart: "Старт закрытых продаж",
      video: "https://rutube.ru/play/embed/931b5063b7f344ed398050e072c50cab/",
      images: [
        "https://ucarecdn.com/196f5446-85be-48b3-9b93-97ad2757da72/",
        "https://ucarecdn.com/7ecc520d-3ee5-4d81-8ac5-8f6d21c9ea3d/",
        "https://ucarecdn.com/9fe6800a-e9a0-4410-ac42-cbe0199d6d39/",
        "https://ucarecdn.com/157148ec-3eb1-41db-b90f-6ca1377a3546/",
        "https://ucarecdn.com/4c2aa0dc-1494-42e4-a02e-ea007ec92c8a/",
        "https://ucarecdn.com/4b72f79f-b1a1-425c-bba7-b0c9e9722695/",
        "https://ucarecdn.com/b6179b83-ed34-4f0a-b167-53f2f6219b46/",
        "https://ucarecdn.com/f4214be7-f505-46ee-9838-d7e47d210cfe/",
      ],
      description:
        "Проект расположен в уникальной локации: в самом центре Адлера, рядом с ТРЦ Мандарин, прогулочной набережной реки Мзымта и морем. Это пространство, где сочетаются комфорт, статус и курортный образ жизни на круглый год. Объединяет преимущества центрального расположения и атмосферу элитного курорта. Море, набережная, рестораны, магазины и ключевые городские объекты находятся в пешей доступности, формируя удобную и насыщенную среду для жизни и отдыха.",
      detailsImage:
        "https://ucarecdn.com/83d855c3-aaa9-4779-8132-b646b3711164/-/format/auto/",
    },
  ];

  const openVideo = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setShowVideoModal(true);
  };

  const nextImage = (projectId, totalImages) => {
    setCurrentImageIndexes((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalImages,
    }));
  };

  const prevImage = (projectId, totalImages) => {
    setCurrentImageIndexes((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages,
    }));
  };

  const setImageIndex = (projectId, index) => {
    setCurrentImageIndexes((prev) => ({
      ...prev,
      [projectId]: index,
    }));
  };

  const getCurrentImageIndex = (projectId) => {
    return currentImageIndexes[projectId] || 0;
  };

  return (
    <section
      id="projects"
      className="relative py-16 lg:py-20 bg-gradient-to-br from-[#0A2466] to-[#2C2C2C]"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Заголовок секции */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="inline-block mb-3">
            <div className="px-5 py-1.5 bg-[#00CED1]/20 border border-[#00CED1] rounded-full">
              <p className="text-[#00CED1] font-bold text-xs lg:text-sm font-helvetica">
                ПРЕМИАЛЬНЫЕ ОБЪЕКТЫ
              </p>
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-helvetica">
            Обзор <span className="text-[#00CED1]">инвестиционных решений</span>
          </h2>
          <p className="text-base lg:text-lg text-gray-300 max-w-3xl mx-auto font-inter">
            5 эксклюзивных объектов с доказанной доходностью от 29% годовых
          </p>

          {/* ── Подсказка свайпа — только на мобиле ────────── */}
          <div className="lg:hidden flex items-center justify-center gap-3 mt-4">
            <span className="text-sm text-gray-400 font-inter">
              Листайте карточки
            </span>
            <img
              src="https://ucarecdn.com/4d8d67c4-7d31-45b5-b247-a936ff12f709/"
              alt="свайп"
              className="swipe-hint-img"
              style={{ width: "36px", height: "36px", objectFit: "contain" }}
            />
            <span className="text-sm text-[#00CED1] font-bold">→</span>
          </div>
        </div>

        {/* ══ ДЕСКТОП: Tabs + Компактная карточка ══════════════════════ */}
        <div className="hidden lg:block">
          {/* Табы-навигация */}
          <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setActiveTab(index)}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                  activeTab === index
                    ? "bg-gradient-to-r from-[#00CED1] to-[#0A2466] text-white shadow-lg shadow-[#00CED1]/30 scale-105"
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {project.name}
              </button>
            ))}
          </div>

          {/* Активная карточка проекта — КОМПАКТНАЯ */}
          {projects.map((project, index) => {
            if (index !== activeTab) return null;
            const currentIdx = getCurrentImageIndex(project.id);

            return (
              <div
                key={project.id}
                className="bg-white/5 backdrop-blur-sm border border-[#00CED1]/20 rounded-2xl overflow-hidden hover:border-[#00CED1] transition-all duration-500 tab-card-enter"
              >
                <div className="grid lg:grid-cols-[45%_55%] gap-6 p-6">
                  {/* Левый блок: фото */}
                  <div className="space-y-3">
                    <div className="relative h-72 rounded-xl overflow-hidden">
                      <img
                        src={project.images[currentIdx]}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      {project.images.length > 1 && (
                        <>
                          <button
                            onClick={() =>
                              prevImage(project.id, project.images.length)
                            }
                            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-all"
                          >
                            <ChevronLeft className="text-white" size={20} />
                          </button>
                          <button
                            onClick={() =>
                              nextImage(project.id, project.images.length)
                            }
                            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-all"
                          >
                            <ChevronRight className="text-white" size={20} />
                          </button>
                        </>
                      )}
                    </div>

                    {/* Миниатюры */}
                    <div className="grid grid-cols-5 gap-2">
                      {project.images.slice(0, 4).map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setImageIndex(project.id, idx)}
                          className={`relative h-14 rounded-lg overflow-hidden border-2 transition-all ${
                            currentIdx === idx
                              ? "border-[#00CED1] shadow-md shadow-[#00CED1]/40"
                              : "border-transparent hover:border-white/40"
                          }`}
                        >
                          <img
                            src={img}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                      {project.video && (
                        <button
                          onClick={() => openVideo(project.video)}
                          className="relative h-14 rounded-lg overflow-hidden bg-gradient-to-br from-[#00CED1] to-[#0A2466] flex items-center justify-center hover:shadow-md hover:shadow-[#00CED1]/40 transition-all"
                        >
                          <Play className="text-white fill-white" size={20} />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Правый блок: инфо — КОМПАКТНЫЙ формат */}
                  <div className="space-y-4">
                    {/* Заголовок проекта */}
                    <div>
                      <h3 className="text-2xl font-bold mb-1 font-helvetica">
                        {project.name}
                      </h3>
                      {project.subtitle && (
                        <p className="text-xs text-gray-300 mb-2 font-inter">
                          {project.subtitle}
                        </p>
                      )}
                      {project.brandLogos && (
                        <div className="flex items-center gap-3 mb-2">
                          {project.brandLogos.map((logo, idx) => (
                            <img
                              key={idx}
                              src={logo}
                              alt=""
                              className="h-6 object-contain opacity-80"
                            />
                          ))}
                        </div>
                      )}
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="px-3 py-1 bg-[#00CED1]/20 border border-[#00CED1] rounded-full text-sm font-bold text-[#00CED1]">
                          {project.deliveryDate}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-bold ${
                            project.salesStart.includes("Старт")
                              ? "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500 text-yellow-300"
                              : "bg-green-500/20 border border-green-500 text-green-300"
                          }`}
                        >
                          {project.salesStart}
                        </span>
                      </div>
                    </div>

                    {/* Grid характеристик — 3 колонки */}
                    <div className="grid grid-cols-3 gap-2.5">
                      <div className="bg-white/5 rounded-lg p-2.5">
                        <p className="text-[0.6rem] text-gray-400 mb-0.5">
                          Цена за м²
                        </p>
                        <p className="text-xs font-bold">
                          {project.pricePerSqm.toLocaleString("ru")} ₽
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-2.5">
                        <p className="text-[0.6rem] text-gray-400 mb-0.5">
                          Площадь
                        </p>
                        <p className="text-xs font-bold text-[#00CED1]">
                          {project.areaFrom}–{project.areaTo} м²
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-2.5">
                        <p className="text-[0.6rem] text-gray-400 mb-0.5">
                          Локация
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {project.strategies
                            .slice(0, 2)
                            .map((strategy, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-0.5 bg-[#00CED1]/10 text-[#00CED1] rounded text-[0.6rem] font-medium"
                              >
                                {strategy}
                              </span>
                            ))}
                        </div>
                      </div>
                    </div>

                    {/* Стоимость + Порог входа — в 2 колонки */}
                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="bg-gradient-to-r from-[#0A2466] to-[#0A2466]/50 border border-[#00CED1] rounded-lg p-3">
                        <p className="text-[0.6rem] text-gray-300 mb-1">
                          Стоимость
                        </p>
                        <p className="text-sm font-bold text-white font-helvetica">
                          {project.minPrice.toLocaleString("ru")} ₽
                        </p>
                      </div>
                      <div className="bg-gradient-to-r from-purple-600/20 to-purple-800/10 border border-purple-400/30 rounded-lg p-3">
                        <p className="text-[0.6rem] text-gray-300 mb-1">
                          Порог входа
                        </p>
                        <p className="text-sm font-bold text-purple-300 font-helvetica">
                          {project.entryThreshold.toLocaleString("ru")} ₽
                        </p>
                      </div>
                    </div>

                    {/* Доходность — акцентный блок */}
                    <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/10 border border-green-500/30 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-300">
                          Доходность
                        </span>
                        <TrendingUp className="text-green-400" size={16} />
                      </div>
                      <p className="font-bold text-green-300 text-xl text-center font-helvetica">
                        {project.yield}
                      </p>
                    </div>

                    {/* Стратегии + Финансирование — компактно */}
                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="bg-white/5 rounded-lg p-2.5">
                        <p className="text-[0.6rem] text-gray-400 mb-1.5">
                          Стратегии:
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {project.strategies
                            .slice(0, 2)
                            .map((strategy, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-0.5 bg-[#00CED1]/10 text-[#00CED1] rounded text-[0.6rem] font-medium"
                              >
                                {strategy}
                              </span>
                            ))}
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-orange-500/20 to-orange-700/10 border border-orange-500/30 rounded-lg p-2.5 flex items-center justify-center">
                        <p className="font-bold text-orange-300 text-xs text-center">
                          {project.financing}
                        </p>
                      </div>
                    </div>

                    {/* CTA кнопки */}
                    <div className="grid grid-cols-2 gap-2.5 pt-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="px-4 py-2.5 border-2 border-[#00CED1] rounded-xl text-sm font-bold hover:bg-[#00CED1]/10 transition-all"
                      >
                        Характеристики
                      </button>
                      <a
                        href={`/${project.id}`}
                        className="px-4 py-2.5 bg-gradient-to-r from-[#00CED1] to-[#0A2466] rounded-xl text-sm font-bold text-center hover:shadow-lg hover:shadow-[#00CED1]/50 transition-all"
                      >
                        Узнать больше
                      </a>
                    </div>

                    <button
                      onClick={() =>
                        openForm("Получить презентацию и планировки")
                      }
                      className="w-full px-4 py-2.5 border-2 border-white/30 rounded-xl text-sm font-bold hover:border-white hover:bg-white/5 transition-all"
                    >
                      Презентация и планировки
                    </button>

                    {/* Кнопка шахматки — Alean, Палаццо, Белые Ночи */}
                    {project.id === "alean-select-agoy" && (
                      <a
                        href="/alean-select-agoy/planirovki-i-ceny"
                        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#00CED1]/20 to-[#0A2466]/20 border-2 border-[#00CED1] rounded-xl text-sm font-bold hover:shadow-lg hover:shadow-[#00CED1]/40 transition-all text-[#00CED1]"
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
                    )}
                    {project.id === "palazzo-de-agoy" && (
                      <a
                        href="/palazzo-de-agoy/planirovki-i-ceny"
                        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#00CED1]/20 to-[#0A2466]/20 border-2 border-[#00CED1] rounded-xl text-sm font-bold hover:shadow-lg hover:shadow-[#00CED1]/40 transition-all text-[#00CED1]"
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
                    )}
                    {project.id === "gk-belye-nochi" && (
                      <a
                        href="/gk-belye-nochi/planirovki-i-ceny"
                        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#00CED1]/20 to-[#0A2466]/20 border-2 border-[#00CED1] rounded-xl text-sm font-bold hover:shadow-lg hover:shadow-[#00CED1]/40 transition-all text-[#00CED1]"
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
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ══ МОБИЛЬ: Horizontal scroll with snap ═══════════════════════ */}
        <div className="lg:hidden overflow-x-auto snap-x snap-mandatory pb-4 mobile-scroll">
          <div className="flex gap-5 px-1" style={{ width: "max-content" }}>
            {projects.map((project, index) => {
              const currentIdx = getCurrentImageIndex(project.id);

              return (
                <div
                  key={project.id}
                  className="snap-center shrink-0 w-[82vw] max-w-[420px] bg-white/5 backdrop-blur-sm border border-[#00CED1]/20 rounded-2xl overflow-hidden hover:border-[#00CED1] transition-all duration-500"
                >
                  <div className="p-6 space-y-4">
                    {/* Mobile card content - same structure as desktop */}
                    <div className="space-y-4">
                      {/* Main Image */}
                      <div className="relative h-64 rounded-2xl overflow-hidden">
                        <img
                          src={project.images[currentIdx]}
                          alt={project.name}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />

                        {/* Navigation Arrows */}
                        {project.images.length > 1 && (
                          <>
                            <button
                              onClick={() =>
                                prevImage(project.id, project.images.length)
                              }
                              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-all"
                            >
                              <ChevronLeft className="text-white" size={24} />
                            </button>
                            <button
                              onClick={() =>
                                nextImage(project.id, project.images.length)
                              }
                              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-all"
                            >
                              <ChevronRight className="text-white" size={24} />
                            </button>
                          </>
                        )}
                      </div>

                      {/* Thumbnails */}
                      <div className="grid grid-cols-5 gap-2">
                        {project.images.slice(0, 4).map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => setImageIndex(project.id, idx)}
                            className={`relative h-16 rounded-lg overflow-hidden border-2 transition-all ${
                              currentIdx === idx
                                ? "border-[#00CED1] shadow-lg shadow-[#00CED1]/50"
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

                        {/* Video Button */}
                        {project.video && (
                          <button
                            onClick={() => openVideo(project.video)}
                            className="relative h-16 rounded-lg overflow-hidden bg-gradient-to-br from-[#00CED1] to-[#0A2466] flex items-center justify-center hover:shadow-lg hover:shadow-[#00CED1]/50 transition-all"
                          >
                            <Play className="text-white fill-white" size={24} />
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Info section */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2 font-helvetica">
                          {project.name}
                        </h3>
                        {project.subtitle && (
                          <p className="text-xs text-gray-300 mb-3 font-inter">
                            {project.subtitle}
                          </p>
                        )}
                        {project.brandLogos && (
                          <div className="flex items-center gap-3 mb-3">
                            {project.brandLogos.map((logo, idx) => (
                              <img
                                key={idx}
                                src={logo}
                                alt=""
                                className="h-6 object-contain opacity-80"
                              />
                            ))}
                          </div>
                        )}

                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-4 py-2 bg-[#00CED1]/20 border border-[#00CED1] rounded-full text-sm font-bold text-[#00CED1]">
                            {project.deliveryDate}
                          </span>
                          <span
                            className={`px-4 py-2 rounded-full text-sm font-bold ${
                              project.salesStart.includes("Старт")
                                ? "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500 text-yellow-300 animate-pulse"
                                : "bg-green-500/20 border border-green-500 text-green-300"
                            }`}
                          >
                            {project.salesStart}
                          </span>
                        </div>
                      </div>

                      {/* Price block */}
                      <div className="bg-gradient-to-r from-[#0A2466] to-[#0A2466]/50 border-2 border-[#00CED1] rounded-2xl p-4 shadow-lg shadow-[#00CED1]/20">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-300 font-inter">
                            Стоимость объекта
                          </span>
                          <DollarSign className="text-[#00CED1]" size={20} />
                        </div>
                        <p className="text-2xl font-bold text-white text-center font-helvetica">
                          от {project.minPrice.toLocaleString("ru")} ₽
                        </p>
                      </div>

                      {/* Характеристики Grid */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/5 rounded-xl p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <MapPin className="text-[#00CED1]" size={20} />
                            <span className="text-sm text-gray-400">
                              Локация
                            </span>
                          </div>
                          <p className="font-bold text-sm">
                            {project.location}
                          </p>
                        </div>

                        <div className="bg-white/5 rounded-xl p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <DollarSign className="text-[#00CED1]" size={20} />
                            <span className="text-sm text-gray-400">
                              Порог входа
                            </span>
                          </div>
                          <p className="font-bold text-[#00CED1] text-sm">
                            {project.entryThreshold.toLocaleString("ru")} ₽
                          </p>
                        </div>

                        <div className="bg-white/5 rounded-xl p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-[#00CED1] text-sm font-bold">
                              ₽/м²
                            </span>
                            <span className="text-sm text-gray-400">
                              Цена за м²
                            </span>
                          </div>
                          <p className="font-bold text-sm">
                            от {project.pricePerSqm.toLocaleString("ru")} ₽
                          </p>
                        </div>

                        <div className="bg-white/5 rounded-xl p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <Home className="text-[#00CED1]" size={20} />
                            <span className="text-sm text-gray-400">
                              Площадь
                            </span>
                          </div>
                          <p className="font-bold text-sm">
                            {project.areaFrom}-{project.areaTo} м²
                          </p>
                        </div>

                        <div className="col-span-2 bg-gradient-to-r from-green-500/20 to-emerald-500/10 border border-green-500/30 rounded-xl p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <TrendingUp className="text-green-400" size={20} />
                            <span className="text-sm text-gray-300">
                              Доходность
                            </span>
                          </div>
                          <p className="font-bold text-green-300 text-2xl text-center font-helvetica">
                            {project.yield}
                          </p>
                        </div>
                      </div>

                      {/* Стратегии */}
                      <div className="bg-white/5 rounded-xl p-4">
                        <p className="text-sm text-gray-400 mb-2">
                          Доступные стратегии:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.strategies.map((strategy, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-[#00CED1]/10 text-[#00CED1] rounded-full text-sm font-medium"
                            >
                              {strategy}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Финансирование */}
                      <div className="bg-gradient-to-r from-orange-500/20 to-orange-700/10 border border-orange-500/30 rounded-xl p-4">
                        <p className="font-bold text-orange-300 text-center">
                          {project.financing}
                        </p>
                      </div>

                      {/* CTA Buttons */}
                      <div className="grid grid-cols-2 gap-4 pt-4">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="px-6 py-3 border-2 border-[#00CED1] rounded-xl font-bold hover:bg-[#00CED1]/10 transition-all"
                        >
                          Все характеристики
                        </button>
                        <a
                          href={`/${project.id}`}
                          className="px-6 py-3 bg-gradient-to-r from-[#00CED1] to-[#0A2466] rounded-xl font-bold text-center hover:shadow-lg hover:shadow-[#00CED1]/50 transition-all"
                        >
                          Узнать больше
                        </a>
                      </div>

                      <button
                        onClick={() =>
                          openForm("Получить презентацию и планировки")
                        }
                        className="w-full px-6 py-3 border-2 border-white/30 rounded-xl font-bold hover:border-white hover:bg-white/5 transition-all"
                      >
                        Получить презентацию и планировки
                      </button>

                      {/* Кнопка шахматки — только для Alean Select Agoy */}
                      {project.id === "alean-select-agoy" && (
                        <a
                          href="/alean-select-agoy/planirovki-i-ceny"
                          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00CED1]/20 to-[#0A2466]/20 border-2 border-[#00CED1] rounded-xl font-bold hover:shadow-lg hover:shadow-[#00CED1]/40 transition-all text-[#00CED1]"
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
                      )}
                      {project.id === "palazzo-de-agoy" && (
                        <a
                          href="/palazzo-de-agoy/planirovki-i-ceny"
                          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00CED1]/20 to-[#0A2466]/20 border-2 border-[#00CED1] rounded-xl font-bold hover:shadow-lg hover:shadow-[#00CED1]/40 transition-all text-[#00CED1]"
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
                      )}
                      {project.id === "gk-belye-nochi" && (
                        <a
                          href="/gk-belye-nochi/planirovki-i-ceny"
                          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00CED1]/20 to-[#0A2466]/20 border-2 border-[#00CED1] rounded-xl font-bold hover:shadow-lg hover:shadow-[#00CED1]/40 transition-all text-[#00CED1]"
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
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm overflow-y-auto">
            <div className="relative w-full max-w-4xl my-8">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm"
              >
                <X size={28} className="text-white" />
              </button>
              <div className="bg-gradient-to-br from-[#0A2466] to-[#2C2C2C] rounded-2xl p-8 border-2 border-[#00CED1]">
                <h3 className="text-3xl font-bold mb-4 font-helvetica">
                  {selectedProject.name}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed font-inter">
                  {selectedProject.description}
                </p>
                {selectedProject.detailsImage && (
                  <img
                    src={selectedProject.detailsImage}
                    alt="Характеристики"
                    className="w-full rounded-xl"
                  />
                )}
              </div>
            </div>
          </div>
        )}

        {/* Video Modal с автовоспроизведением */}
        {showVideoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
            <div className="relative w-full max-w-5xl">
              <button
                onClick={() => setShowVideoModal(false)}
                className="absolute top-4 right-4 z-10 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm"
              >
                <X size={28} className="text-white" />
              </button>
              <div
                className="relative bg-black rounded-2xl overflow-hidden"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  src={`${currentVideo}?autoplay=1&muted=0`}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                  allowFullScreen
                  frameBorder="0"
                />
              </div>
            </div>
          </div>
        )}

        {/* ═══ СТИЛИ ═══ */}
        <style jsx>{`
          /* ── Плавный горизонтальный скролл на мобиле ────── */
          .mobile-scroll {
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
            scroll-snap-type: x mandatory;
          }
          .mobile-scroll::-webkit-scrollbar {
            display: none;
          }

          /* ── Анимация свайп-подсказки ────────────────────── */
          @keyframes swipeHint {
            0%   { transform: translateX(0px) rotate(-5deg); opacity: 1; }
            40%  { transform: translateX(10px) rotate(5deg); opacity: 0.8; }
            60%  { transform: translateX(-4px) rotate(-3deg); opacity: 1; }
            100% { transform: translateX(0px) rotate(-5deg); opacity: 1; }
          }
          .swipe-hint-img {
            animation: swipeHint 1.8s ease-in-out infinite;
            filter: drop-shadow(0 0 6px rgba(0,206,209,0.4));
          }

          /* ── Анимация появления карточки при смене таба ──── */
          @keyframes tabCardEnter {
            from { opacity: 0; transform: translateY(12px) scale(0.98); }
            to   { opacity: 1; transform: translateY(0) scale(1); }
          }
          .tab-card-enter {
            animation: tabCardEnter 0.4s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
          }
        `}</style>
      </div>
    </section>
  );
}
