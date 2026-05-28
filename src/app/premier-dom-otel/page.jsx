"use client";

import { useState, useRef } from "react";
import {
  ArrowLeft,
  Phone,
  ChevronDown,
  ChevronUp,
  MapPin,
  TrendingUp,
  Shield,
  Clock,
  CheckCircle2,
  ArrowRight,
  X,
} from "lucide-react";
import LeadForm from "@/components/LeadForm";

// ─── DATA ───────────────────────────────────────────────────────────────────

const HERO_IMAGES = [
  "https://ucarecdn.com/c6e71829-b100-4344-a213-e0574df81f5c/-/format/auto/",
  "https://ucarecdn.com/e851739e-b838-4b62-b4e3-5e57ccb008c3/-/format/auto/",
  "https://ucarecdn.com/cf843d6e-b3e2-471b-a40b-24de1339b4fb/-/format/auto/",
  "https://ucarecdn.com/2b31907c-8b41-46e2-bb8c-721a0b08406a/-/format/auto/",
];

// Один эталонный план на каждый тип
const IMG_STUDIO =
  "https://ucarecdn.com/86f55789-c2af-4dd9-a4d2-445dc29a6ac3/-/format/auto/";
const IMG_1ROOM =
  "https://ucarecdn.com/f1a9d12c-ba23-4f91-9a24-e7ae55e0c339/-/format/auto/";
const IMG_2ROOM =
  "https://ucarecdn.com/8d21638a-a283-4c49-8308-e69960092174/-/format/auto/";
const IMG_3ROOM =
  "https://ucarecdn.com/457ce592-da53-4667-98d2-7d2c43afd6d8/-/format/auto/";
const IMG_SKYVILLE =
  "https://ucarecdn.com/7802e439-7855-4809-8959-c39ab951171a/-/format/auto/";

const LAYOUTS = [
  {
    type: "Студия",
    area: "30,6 м²",
    rooms: "Студия",
    image: IMG_STUDIO,
    tag: "Низкий порог входа",
    tagColor: "from-emerald-500 to-teal-600",
    priceFrom: "от 4,9 млн ₽",
    yield: "до 35%",
  },
  {
    type: "Студия",
    area: "35,0 м²",
    rooms: "Студия",
    image: IMG_STUDIO,
    tag: "Хит продаж",
    tagColor: "from-amber-500 to-orange-600",
    priceFrom: "от 5,6 млн ₽",
    yield: "до 33%",
  },
  {
    type: "1-комнатная",
    area: "38,9 м²",
    rooms: "1 комната",
    image: IMG_1ROOM,
    tag: "Популярный формат",
    tagColor: "from-blue-500 to-indigo-600",
    priceFrom: "от 6,2 млн ₽",
    yield: "до 31%",
  },
  {
    type: "1-комнатная",
    area: "44,5 м²",
    rooms: "1 комната",
    image: IMG_1ROOM,
    tag: "Вид на море",
    tagColor: "from-[#00CED1] to-blue-600",
    priceFrom: "от 7,1 млн ₽",
    yield: "до 30%",
  },
  {
    type: "1-комнатная",
    area: "50,2 м²",
    rooms: "1 комната",
    image: IMG_1ROOM,
    tag: "",
    tagColor: "",
    priceFrom: "от 8,0 млн ₽",
    yield: "до 29%",
  },
  {
    type: "2-комнатная",
    area: "63,0 м²",
    rooms: "2 комнаты",
    image: IMG_2ROOM,
    tag: "Семейный формат",
    tagColor: "from-purple-500 to-violet-600",
    priceFrom: "от 10,1 млн ₽",
    yield: "до 28%",
  },
  {
    type: "2-комнатная",
    area: "72,4 м²",
    rooms: "2 комнаты",
    image: IMG_2ROOM,
    tag: "",
    tagColor: "",
    priceFrom: "от 11,6 млн ₽",
    yield: "до 27%",
  },
  {
    type: "3-комнатная",
    area: "80,7 м²",
    rooms: "3 комнаты",
    image: IMG_3ROOM,
    tag: "Для большой семьи",
    tagColor: "from-rose-500 to-pink-600",
    priceFrom: "от 12,9 млн ₽",
    yield: "до 25%",
  },
  {
    type: "3-комнатная",
    area: "101,7 м²",
    rooms: "3 комнаты",
    image: IMG_3ROOM,
    tag: "Большой формат",
    tagColor: "from-yellow-500 to-amber-600",
    priceFrom: "от 16,3 млн ₽",
    yield: "до 25%",
  },
];

const FAQS = [
  {
    q: "Кто управляет объектом и как начисляется доход?",
    a: "Управление осуществляет профессиональная УК в формате доходного дома-отеля. Вы получаете пассивный доход от аренды без личного участия. Ежеквартальные выплаты.",
  },
  {
    q: "Могу ли я жить в квартире сам?",
    a: "Да. Вы можете использовать квартиру для личного проживания по заранее согласованному графику. Остальное время — в аренду.",
  },
  {
    q: "Что будет с ценой к сдаче объекта?",
    a: "По аналогичным проектам на черноморском побережье стоимость квадратного метра к сдаче объекта вырастает на 30–50%. Покупка на старте — это ваш актив с двойным доходом.",
  },
  {
    q: "Какие гарантии у застройщика?",
    a: "Договор долевого участия по ФЗ-214. Разрешение на строительство. Застройщик с подтверждённым опытом на рынке курортной недвижимости.",
  },
  {
    q: "Есть ли рассрочка?",
    a: "Да — рассрочка 0% до сдачи объекта. Без переплат и скрытых комиссий.",
  },
  {
    q: "Когда сдача объекта?",
    a: "2027 год. Чем раньше вы входите — тем ниже цена и выше итоговый доход.",
  },
];

const PLACES = [
  {
    img: "https://ucarecdn.com/c934bd89-8802-4895-85cb-8c3197bb6ed0/-/format/auto/",
    name: "Джубгинский дольмен",
    desc: "Древний мегалит 4 500 лет. Эзотерическая точка притяжения туристов со всей страны",
  },
  {
    img: "https://ucarecdn.com/812c4511-0269-4a2e-94c5-d78dc41deb0f/-/format/auto/",
    name: "Гора Ёжик",
    desc: "Панорама на всё черноморское побережье. Маршрут, который хочется пройти снова",
  },
  {
    img: "https://ucarecdn.com/008d3c53-7f49-45a7-86ba-d78dc5f731d3/-/format/auto/",
    name: "5 водопадов и реликтовые леса",
    desc: "Экотуризм, чистый воздух, природные источники — то, за чем едут в Краснодарский край",
  },
  {
    img: "https://ucarecdn.com/d9408cec-b7eb-4fc9-a75a-b6055883c3de/-/format/auto/",
    name: "Реликтовый дуб Гартвиса",
    desc: "500-летний символ нетронутой природы Джубги. Уникальная точка на туристической карте",
  },
];

const FILTERS = ["Все", "Студии", "1-комнатные", "2-комнатные", "3-комнатные"];

const FILTER_MAP = {
  Все: () => true,
  Студии: (l) => l.type === "Студия",
  "1-комнатные": (l) => l.type === "1-комнатная",
  "2-комнатные": (l) => l.type === "2-комнатная",
  "3-комнатные": (l) => l.type === "3-комнатная",
};

// ─── COMPONENT ──────────────────────────────────────────────────────────────

export default function PremierPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formType, setFormType] = useState("Получить расчёт доходности");
  const [heroImg, setHeroImg] = useState(0);
  const [activeFilter, setActiveFilter] = useState("Все");
  const [openFaq, setOpenFaq] = useState(null);
  const [enlargedLayout, setEnlargedLayout] = useState(null);
  const layoutsRef = useRef(null);

  const openForm = (type) => {
    setFormType(type);
    setIsFormOpen(true);
  };

  const filtered = LAYOUTS.filter(FILTER_MAP[activeFilter] || (() => true));

  const scrollToLayouts = () => {
    layoutsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-[#0A2466] via-[#0e1f4a] to-[#0A2466] text-white"
      style={{ overflowX: "clip", position: "relative", zIndex: 1 }}
    >
      {/* ── HEADER ── */}
      <header className="sticky top-0 z-40 bg-[#0A2466]/95 backdrop-blur-lg border-b border-[#00CED1]/20">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-3 lg:py-4">
          <div className="flex items-center justify-between gap-2">
            <a
              href="/"
              className="flex items-center space-x-2 hover:text-[#00CED1] transition-colors flex-shrink-0"
            >
              <ArrowLeft size={20} />
              <span className="hidden sm:inline text-sm">Назад к каталогу</span>
            </a>
            <div className="flex-1 flex justify-center pointer-events-none">
              <div className="flex items-center gap-1">
                <MapPin size={10} className="text-[#00CED1] flex-shrink-0" />
                <span className="text-[0.65rem] lg:text-[0.78rem] text-white/60 leading-tight text-center whitespace-nowrap">
                  пгт. Джубга, ул. Строителей
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-3 flex-shrink-0">
              <a
                href="tel:+70000000000"
                className="hidden sm:flex items-center space-x-2 hover:text-[#00CED1] transition-colors text-sm"
              >
                <Phone size={15} className="text-[#00CED1]" />
                <span>8(000)-000-00-00</span>
              </a>
              <button
                onClick={() => openForm("Консультация")}
                className="px-4 py-2 lg:px-6 text-xs lg:text-sm bg-gradient-to-r from-[#00CED1] to-[#0A2466] rounded-lg font-medium hover:shadow-lg hover:shadow-[#00CED1]/50 transition-all"
              >
                Заказать звонок
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative py-10 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,206,209,0.07)_0%,_transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            <div className="space-y-5 lg:space-y-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#00CED1]/15 border border-[#00CED1]/40 rounded-full text-xs text-[#00CED1] font-medium tracking-wider uppercase">
                🏖 Туапсинский район · пгт. Джубга
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-helvetica leading-none">
                ПРЕМЬЕР
                <br />
                <span className="text-[#00CED1]">Дом-Отель</span>
              </h1>
              <p className="text-lg lg:text-2xl font-bold text-white/90 leading-snug">
                Вы умеете зарабатывать.
                <br />
                <span className="text-[#00CED1]">Мы знаем, куда вложить.</span>
              </p>
              <p className="text-sm lg:text-base text-gray-400 leading-relaxed max-w-lg">
                Квартира у моря — не мечта, а работающий актив. Пока вы
                занимаетесь своим делом, УК сдаёт её туристам и ежеквартально
                перечисляет вам доход.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/5 border border-[#00CED1]/20 rounded-xl p-3 lg:p-4">
                  <p className="text-[10px] text-gray-400 mb-1 uppercase tracking-wider">
                    Доходность
                  </p>
                  <p className="text-xl lg:text-2xl font-black text-[#00CED1]">
                    до 35%
                  </p>
                  <p className="text-[10px] text-gray-500">годовых от аренды</p>
                </div>
                <div className="bg-white/5 border border-[#00CED1]/20 rounded-xl p-3 lg:p-4">
                  <p className="text-[10px] text-gray-400 mb-1 uppercase tracking-wider">
                    Порог входа
                  </p>
                  <p className="text-xl lg:text-2xl font-black text-white">
                    от 4,9 млн
                  </p>
                  <p className="text-[10px] text-gray-500">студия 30,6 м²</p>
                </div>
                <div className="bg-white/5 border border-[#00CED1]/20 rounded-xl p-3 lg:p-4">
                  <p className="text-[10px] text-gray-400 mb-1 uppercase tracking-wider">
                    Рост стоимости
                  </p>
                  <p className="text-xl lg:text-2xl font-black text-green-400">
                    +30–50%
                  </p>
                  <p className="text-[10px] text-gray-500">
                    к сдаче объекта в 2027
                  </p>
                </div>
                <div className="bg-white/5 border border-[#00CED1]/20 rounded-xl p-3 lg:p-4">
                  <p className="text-[10px] text-gray-400 mb-1 uppercase tracking-wider">
                    Рассрочка
                  </p>
                  <p className="text-xl lg:text-2xl font-black text-white">
                    0%
                  </p>
                  <p className="text-[10px] text-gray-500">
                    без переплат до сдачи
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <button
                  onClick={() => openForm("Получить расчёт доходности")}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#00CED1] to-[#0886c8] rounded-xl font-bold text-sm lg:text-base hover:shadow-2xl hover:shadow-[#00CED1]/40 transition-all"
                >
                  Получить расчёт доходности
                  <ArrowRight size={16} />
                </button>
                <button
                  onClick={scrollToLayouts}
                  className="flex items-center justify-center gap-2 px-6 py-4 border-2 border-[#00CED1]/50 rounded-xl font-bold text-sm hover:border-[#00CED1] hover:bg-[#00CED1]/10 transition-all"
                >
                  Выбрать планировку
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border-2 border-[#00CED1]/20">
                <img
                  src={HERO_IMAGES[heroImg]}
                  alt="ПРЕМЬЕР Дом-Отель"
                  className="w-full h-[240px] sm:h-[380px] lg:h-[520px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/50 backdrop-blur-md rounded-xl px-4 py-2 border border-white/10">
                    <p className="text-[11px] text-white/70 uppercase tracking-wider">
                      {heroImg === 0
                        ? "Фасад комплекса"
                        : heroImg === 1
                          ? "Интерьер"
                          : heroImg === 2
                            ? "Вид с высоты · Джубга"
                            : "3D-концепция"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2 mt-2">
                {HERO_IMAGES.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setHeroImg(i)}
                    className={`h-14 lg:h-16 rounded-xl overflow-hidden border-2 transition-all ${
                      heroImg === i
                        ? "border-[#00CED1]"
                        : "border-transparent opacity-60 hover:opacity-100"
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

      {/* ── PAIN ── */}
      <section className="py-12 lg:py-20 bg-gradient-to-r from-[#081d45] to-[#0e2a5a]">
        <div className="max-w-5xl mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-2xl lg:text-4xl font-black font-helvetica mb-4">
            Ваши деньги сейчас работают на вас?
          </h2>
          <p className="text-gray-400 text-sm lg:text-lg max-w-3xl mx-auto mb-10">
            Депозиты теряют в инфляции. Акции — качели. Крипта — лотерея. А
            недвижимость у моря растёт в цене и приносит арендный доход
            одновременно.
          </p>
          <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
            {[
              {
                icon: "🏦",
                label: "Банковский депозит",
                yield: "8–11%",
                note: "Инфляция съедает реальный доход",
                good: false,
              },
              {
                icon: "📈",
                label: "Акции и ПИФы",
                yield: "нестабильно",
                note: "Риск потери капитала в любой момент",
                good: false,
              },
              {
                icon: "🏖",
                label: "ПРЕМЬЕР Дом-Отель",
                yield: "до 35% + рост",
                note: "Аренда + рост стоимости + свой актив",
                good: true,
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`rounded-2xl p-5 lg:p-6 border-2 transition-all ${
                  item.good
                    ? "bg-[#00CED1]/10 border-[#00CED1] scale-105"
                    : "bg-white/3 border-white/10"
                }`}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <p className="font-bold text-sm mb-1 text-white/80">
                  {item.label}
                </p>
                <p
                  className={`text-2xl font-black mb-2 ${
                    item.good ? "text-[#00CED1]" : "text-white/50"
                  }`}
                >
                  {item.yield}
                </p>
                <p
                  className={`text-xs ${
                    item.good ? "text-green-300" : "text-gray-500"
                  }`}
                >
                  {item.note}
                </p>
                {item.good && (
                  <div className="mt-3 inline-flex items-center gap-1 px-2 py-1 bg-[#00CED1]/20 rounded-full text-[10px] text-[#00CED1] font-medium">
                    ✓ Оптимальный выбор
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY NUMBERS ── */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <h2 className="text-2xl lg:text-4xl font-black font-helvetica text-center mb-10">
            Цифры, которые говорят сами за себя
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                num: "46",
                label: "уникальных планировок",
                sub: "от 30,6 до 101,7 м²",
              },
              {
                num: "60%",
                label: "квартир с видом на море",
                sub: "выше арендный потенциал",
              },
              {
                num: "4,5 м",
                label: "максимальная высота потолков",
                sub: "ощущение лофта",
              },
              {
                num: "2027",
                label: "год сдачи объекта",
                sub: "покупай сейчас — расти вместе",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-[#00CED1]/20 rounded-2xl p-5 lg:p-6 text-center hover:border-[#00CED1]/60 transition-all"
              >
                <p className="text-3xl lg:text-4xl font-black text-[#00CED1] mb-1">
                  {item.num}
                </p>
                <p className="text-xs lg:text-sm font-semibold text-white mb-1 leading-tight">
                  {item.label}
                </p>
                <p className="text-[10px] text-gray-500">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOR WHOM ── */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-[#081d45] to-[#0e2a5a]">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <h2 className="text-2xl lg:text-4xl font-black font-helvetica text-center mb-3">
            Для кого этот проект?
          </h2>
          <p className="text-center text-gray-400 text-sm mb-10">
            Разные задачи — одно решение
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                emoji: "💼",
                title: "Инвестор",
                pain: "«Где хранить деньги, чтобы они росли быстрее инфляции?»",
                gain: "Пассивный доход до 35% годовых + рост актива на 30–50% к сдаче. Никаких нервов, управление берёт УК.",
              },
              {
                emoji: "🌊",
                title: "Семья у моря",
                pain: "«Хочу своё жильё на черноморском курорте, но не знаю как»",
                gain: "Студия или 1-комнатная от 4,9 млн в рассрочку 0%. Живите сами в отпуск — сдавайте остальное время.",
              },
              {
                emoji: "🌿",
                title: "Переезжающий",
                pain: "«Устал от мегаполиса. Хочу экологию, море и доход»",
                gain: "Джубга — экология, чистый воздух, природа. До Краснодара 87 км. Жизнь у моря круглый год с доходом от аренды.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#00CED1]/50 transition-all"
              >
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="text-lg font-black text-[#00CED1] mb-3">
                  {item.title}
                </h3>
                <div className="bg-black/30 rounded-xl p-3 mb-4 border-l-2 border-white/20">
                  <p className="text-xs text-gray-400 italic">{item.pain}</p>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {item.gain}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATION ── */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00CED1]/15 border border-[#00CED1]/30 rounded-full text-xs text-[#00CED1] uppercase tracking-wider">
                📍 Локация
              </div>
              <h2 className="text-2xl lg:text-4xl font-black font-helvetica">
                Джубга — курорт,
                <br />о котором говорит рынок
              </h2>
              <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                Туристический поток растёт каждый год. Черноморское побережье
                вне Сочи недооценено — а значит, ваш актив ещё будет расти.
                Джубга — это экология, тишина и море без сочинских цен.
              </p>
              <div className="space-y-3">
                {[
                  {
                    label: "Автостанция Джубга",
                    time: "5 мин",
                    dist: "1,1 км",
                  },
                  {
                    label: "Аэропорт Геленджик",
                    time: "50 мин",
                    dist: "62 км",
                  },
                  {
                    label: "Аэропорт Краснодар",
                    time: "1 ч 10 мин",
                    dist: "87 км",
                  },
                  { label: "ЖД Туапсе", time: "1 ч", dist: "77 км" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                  >
                    <div className="flex items-center gap-2">
                      <MapPin
                        size={14}
                        className="text-[#00CED1] flex-shrink-0"
                      />
                      <span className="text-sm text-white/90">
                        {item.label}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-bold text-[#00CED1]">
                        {item.time}
                      </span>
                      <span className="text-xs text-gray-500 ml-2">
                        {item.dist}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => openForm("Хочу узнать больше о локации")}
                className="w-full py-4 border-2 border-[#00CED1]/50 rounded-xl font-bold text-sm hover:bg-[#00CED1]/10 hover:border-[#00CED1] transition-all"
              >
                Получить подробную карту локации
              </button>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#00CED1]/20">
              <img
                src="https://ucarecdn.com/cf843d6e-b3e2-471b-a40b-24de1339b4fb/-/format/auto/"
                alt="Джубга с высоты птичьего полёта"
                className="w-full h-[280px] lg:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/50 backdrop-blur-md rounded-xl px-4 py-3 border border-white/10">
                  <p className="text-xs text-white/60 mb-1">
                    Джубга, Туапсинский район
                  </p>
                  <p className="text-sm font-bold">
                    Черноморское побережье России
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── UNIQUE PLACES ── */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-[#081d45] to-[#0e2a5a]">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-4xl font-black font-helvetica mb-3">
              Здесь каждый день — как отпуск
            </h2>
            <p className="text-gray-400 text-sm lg:text-base max-w-2xl mx-auto">
              Туристы едут сюда не только за морем. Джубга — это природа,
              история и энергетика. Ваши гости будут возвращаться снова.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {PLACES.map((place, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  src={place.img}
                  alt={place.name}
                  className="w-full h-48 lg:h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-bold text-sm text-white mb-1">
                    {place.name}
                  </h3>
                  <p className="text-[11px] text-gray-300 leading-snug">
                    {place.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LAYOUTS ── */}
      <section ref={layoutsRef} className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-4xl font-black font-helvetica mb-3">
              46 планировок — выберите свой актив
            </h2>
            <p className="text-gray-400 text-sm">
              Нажмите на планировку — увидите её крупнее
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full text-xs lg:text-sm font-medium transition-all border ${
                  activeFilter === f
                    ? "bg-[#00CED1] text-[#0A2466] border-[#00CED1] font-bold"
                    : "bg-white/5 text-white/70 border-white/20 hover:border-[#00CED1]/50 hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* ── DESKTOP: grid ── */}
          <div className="hidden md:grid grid-cols-3 gap-5">
            {filtered.map((layout, i) => (
              <LayoutCard
                key={i}
                layout={layout}
                onClick={() => setEnlargedLayout(layout)}
                onForm={openForm}
              />
            ))}
          </div>

          {/* ── MOBILE: horizontal slider with swipe hint ── */}
          <div className="md:hidden">
            {/* Swipe hint */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-sm text-gray-400">Листайте планировки</span>
              <img
                src="https://ucarecdn.com/4d8d67c4-7d31-45b5-b247-a936ff12f709/"
                alt="свайп"
                className="layouts-swipe-img"
                style={{ width: "32px", height: "32px", objectFit: "contain" }}
              />
              <span className="text-sm text-[#00CED1] font-bold">→</span>
            </div>

            <div className="overflow-x-auto snap-x snap-mandatory pb-4 layouts-mobile-scroll">
              <div className="flex gap-4 px-1" style={{ width: "max-content" }}>
                {filtered.map((layout, i) => (
                  <div
                    key={i}
                    className="snap-center shrink-0 w-[72vw] max-w-[280px]"
                  >
                    <LayoutCard
                      layout={layout}
                      onClick={() => setEnlargedLayout(layout)}
                      onForm={openForm}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── SKYVILLE — full width (desktop), in slider (mobile) ── */}

          {/* Desktop skyville banner */}
          <div className="hidden md:block mt-6">
            <div
              className="relative rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() =>
                setEnlargedLayout({
                  type: "Скайвилла",
                  area: "Skyville",
                  rooms: "Скайвилла",
                  image: IMG_SKYVILLE,
                  priceFrom: "Уточняйте",
                  yield: "до 25%",
                })
              }
            >
              <img
                src={IMG_SKYVILLE}
                alt="Скайвилла ПРЕМЬЕР"
                className="w-full object-contain bg-white max-h-[420px] group-hover:scale-[1.01] transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full text-sm font-black text-white shadow-lg">
                  ⭐ Скайвиллы — эксклюзивный формат
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A2466] to-transparent p-6 flex items-end justify-between">
                <div>
                  <p className="text-white/60 text-xs mb-1 uppercase tracking-wider">
                    Скайвилла
                  </p>
                  <p className="font-black text-xl text-white">
                    Панорамный этаж · виды 360°
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openForm("Узнать цену: Скайвилла");
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-[#00CED1] to-[#0886c8] rounded-xl font-bold text-sm hover:shadow-lg transition-all whitespace-nowrap"
                >
                  Узнать цену
                </button>
              </div>
            </div>
          </div>

          {/* Mobile skyville card — appended after filtered slider */}
          <div className="md:hidden mt-4">
            <div
              className="relative rounded-2xl overflow-hidden cursor-pointer"
              onClick={() =>
                setEnlargedLayout({
                  type: "Скайвилла",
                  area: "Skyville",
                  rooms: "Скайвилла",
                  image: IMG_SKYVILLE,
                  priceFrom: "Уточняйте",
                  yield: "до 25%",
                })
              }
            >
              <img
                src={IMG_SKYVILLE}
                alt="Скайвилла"
                className="w-full object-contain bg-white max-h-[240px]"
              />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full text-[11px] font-black text-white">
                  ⭐ Скайвиллы
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A2466] to-transparent p-4 flex items-end justify-between">
                <p className="font-black text-sm text-white">Панорамный этаж</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openForm("Узнать цену: Скайвилла");
                  }}
                  className="px-4 py-2 bg-gradient-to-r from-[#00CED1] to-[#0886c8] rounded-lg font-bold text-xs"
                >
                  Цена
                </button>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <button
              onClick={() => openForm("Получить каталог всех планировок")}
              className="px-8 py-4 bg-gradient-to-r from-[#00CED1] to-[#0886c8] rounded-xl font-bold text-sm hover:shadow-2xl hover:shadow-[#00CED1]/40 transition-all inline-flex items-center gap-2"
            >
              Получить полный каталог планировок
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ── HIGH CEILINGS FEATURE ── */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-[#081d45] to-[#0e2a5a]">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#00CED1]/20">
              <img
                src="https://ucarecdn.com/e851739e-b838-4b62-b4e3-5e57ccb008c3/-/format/auto/"
                alt="Интерьер ПРЕМЬЕР"
                className="w-full h-[280px] lg:h-[450px] object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#00CED1] text-[#0A2466] rounded-xl px-4 py-2 font-black text-lg">
                до 4,5 м
              </div>
            </div>
            <div className="space-y-5">
              <h2 className="text-2xl lg:text-4xl font-black font-helvetica">
                Потолки до 4,5 м —<br />
                <span className="text-[#00CED1]">
                  это премиум, который виден
                </span>
              </h2>
              <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                В стандартных новостройках — 2,7–2,8 м. В ПРЕМЬЕР — до 4,5 м.
                Это не просто цифра. Это то, что гость чувствует сразу и за что
                платит выше среднего.
              </p>
              <div className="space-y-3">
                {[
                  {
                    icon: "✦",
                    text: "Квартира выглядит на 40% просторнее за ту же площадь",
                  },
                  {
                    icon: "✦",
                    text: "Больше естественного света — лучше фотографии, выше рейтинг на Авито",
                  },
                  {
                    icon: "✦",
                    text: "Стоимость аренды видовых квартир на 25–40% выше аналогов",
                  },
                  {
                    icon: "✦",
                    text: "60% квартир с прямым видом на море — редкость на рынке",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-[#00CED1] font-black text-lg leading-none mt-0.5">
                      {item.icon}
                    </span>
                    <p className="text-sm text-gray-300">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INVESTMENT ── */}
      <section className="py-12 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-4xl font-black font-helvetica mb-3">
              Двойная выгода с одного актива
            </h2>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              ПРЕМЬЕР — это не просто аренда. Это рост стоимости + арендный
              доход одновременно.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5 mb-8">
            <div className="bg-gradient-to-br from-[#00CED1]/15 to-[#0886c8]/10 border border-[#00CED1]/40 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#00CED1]/20 flex items-center justify-center">
                  <TrendingUp size={20} className="text-[#00CED1]" />
                </div>
                <h3 className="font-black text-[#00CED1]">Рост стоимости</h3>
              </div>
              <p className="text-3xl font-black text-white mb-2">+30–50%</p>
              <p className="text-sm text-gray-400">
                По аналогичным черноморским проектам стоимость квадратного метра
                от старта продаж до сдачи вырастает на 30–50%. Вход сейчас —
                максимальная выгода.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-500/15 to-emerald-500/10 border border-green-500/40 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                  <Clock size={20} className="text-green-400" />
                </div>
                <h3 className="font-black text-green-400">Пассивный доход</h3>
              </div>
              <p className="text-3xl font-black text-white mb-2">до 35%/год</p>
              <p className="text-sm text-gray-400">
                Профессиональная УК берёт на себя всё: размещение объявлений,
                заселение, уборку. Вы получаете ежеквартальные выплаты — без
                вашего участия.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#00CED1]/10 to-[#0886c8]/10 border-2 border-[#00CED1]/50 rounded-2xl p-6 text-center">
            <p className="text-gray-400 text-sm mb-1">
              Пример: студия 30,6 м² за 4,9 млн ₽
            </p>
            <p className="text-white text-sm lg:text-base">
              <span className="text-[#00CED1] font-black">+1 470 000 ₽</span>{" "}
              доход от аренды за 3 года
              <span className="text-gray-400"> + </span>
              <span className="text-green-400 font-black">
                +1 470 000–2 450 000 ₽
              </span>{" "}
              рост стоимости к 2027
            </p>
            <p className="text-xs text-gray-500 mt-2">
              *расчёт ориентировочный, на основе рыночных аналогов
            </p>
          </div>
        </div>
      </section>

      {/* ── CONDITIONS ── */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-[#081d45] to-[#0e2a5a]">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <h2 className="text-2xl lg:text-4xl font-black font-helvetica text-center mb-10">
            Условия входа — просто и прозрачно
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: <Shield size={24} className="text-[#00CED1]" />,
                title: "ДДУ по ФЗ-214",
                desc: "Законная защита ваших вложений. Никаких серых схем.",
              },
              {
                icon: <CheckCircle2 size={24} className="text-green-400" />,
                title: "Рассрочка 0%",
                desc: "До сдачи объекта в 2027 году. Без банков, переплат и одобрений.",
              },
              {
                icon: <TrendingUp size={24} className="text-[#00CED1]" />,
                title: "Трейд-ин",
                desc: "Обменяйте действующую недвижимость в зачёт ПРЕМЬЕР.",
              },
              {
                icon: <Clock size={24} className="text-amber-400" />,
                title: "Старт продаж",
                desc: "Первые покупатели получают минимальные цены. Цена повышается по мере строительства.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#00CED1]/40 transition-all"
              >
                <div className="mb-3">{item.icon}</div>
                <h3 className="font-black text-white mb-2 text-sm lg:text-base">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-12 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 lg:px-6">
          <h2 className="text-2xl lg:text-4xl font-black font-helvetica text-center mb-10">
            Вопросы — отвечаем честно
          </h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#00CED1]/30 transition-all"
              >
                <button
                  className="w-full flex items-center justify-between p-4 lg:p-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-sm lg:text-base pr-4 text-white">
                    {faq.q}
                  </span>
                  {openFaq === i ? (
                    <ChevronUp
                      size={18}
                      className="text-[#00CED1] flex-shrink-0"
                    />
                  ) : (
                    <ChevronDown
                      size={18}
                      className="text-gray-400 flex-shrink-0"
                    />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-4 lg:px-5 pb-4 lg:pb-5">
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-14 lg:py-24 bg-gradient-to-br from-[#00CED1]/15 via-[#081d45] to-[#0A2466] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,206,209,0.12)_0%,_transparent_70%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 lg:px-6 text-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-500/20 border border-red-500/50 rounded-full text-xs text-red-300 font-medium mb-6">
            🔥 Старт продаж — цены растут с каждым этапом
          </div>
          <h2 className="text-3xl lg:text-5xl font-black font-helvetica mb-4">
            Зафиксируйте цену сегодня
          </h2>
          <p className="text-gray-400 text-sm lg:text-base mb-8 max-w-xl mx-auto">
            Чем позже вы входите — тем дороже. Напишите или позвоните: разберём
            ваш кейс, подберём планировку и покажем расчёт реального дохода.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <button
              onClick={() => openForm("Получить расчёт доходности ПРЕМЬЕР")}
              className="flex-1 sm:flex-none px-8 py-4 lg:py-5 bg-gradient-to-r from-[#00CED1] to-[#0886c8] rounded-xl font-black text-base hover:shadow-2xl hover:shadow-[#00CED1]/50 transition-all inline-flex items-center justify-center gap-2"
            >
              Получить расчёт доходности
              <ArrowRight size={18} />
            </button>
            <a
              href="tel:+70000000000"
              className="flex-1 sm:flex-none px-8 py-4 lg:py-5 border-2 border-white/30 rounded-xl font-bold text-base hover:border-[#00CED1] hover:bg-[#00CED1]/10 transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone size={16} />
              Позвонить
            </a>
          </div>
          <p className="text-xs text-gray-500">
            Без давления и навязывания. Просто честный разговор об инвестиции.
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gradient-to-br from-[#0A2466] to-[#2C2C2C] border-t border-[#00CED1]/20 py-10">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2026 Shirokov Deus Capital. Все права защищены.
            <br />
            <span className="text-gray-600 text-xs">
              Туапсинский муниципальный округ, пгт. Джубга, ул. Строителей
            </span>
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

      {/* ── LIGHTBOX ── */}
      {enlargedLayout && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setEnlargedLayout(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setEnlargedLayout(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
            >
              <X size={20} className="text-white" />
            </button>
            <img
              src={enlargedLayout.image}
              alt={`${enlargedLayout.type} ${enlargedLayout.area}`}
              className="w-full object-contain max-h-[70vh]"
            />
            <div className="bg-[#0A2466] p-5 flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">
                  {enlargedLayout.rooms}
                </p>
                <p className="font-black text-xl text-white">
                  {enlargedLayout.area}
                </p>
                <p className="text-sm text-gray-400">
                  {enlargedLayout.priceFrom}
                </p>
              </div>
              <button
                onClick={() => {
                  setEnlargedLayout(null);
                  openForm(
                    `Узнать цену: ${enlargedLayout.type} ${enlargedLayout.area}`,
                  );
                }}
                className="px-6 py-3 bg-gradient-to-r from-[#00CED1] to-[#0886c8] rounded-xl font-bold text-sm hover:shadow-lg transition-all"
              >
                Узнать точную цену
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes layoutsSwipeHint {
          0%   { transform: translateX(0px) rotate(-5deg); opacity: 1; }
          40%  { transform: translateX(10px) rotate(5deg); opacity: 0.8; }
          60%  { transform: translateX(-4px) rotate(-3deg); opacity: 1; }
          100% { transform: translateX(0px) rotate(-5deg); opacity: 1; }
        }
        .layouts-swipe-img {
          animation: layoutsSwipeHint 1.8s ease-in-out infinite;
          filter: drop-shadow(0 0 6px rgba(0,206,209,0.4));
        }
        .layouts-mobile-scroll {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          scroll-snap-type: x mandatory;
        }
        .layouts-mobile-scroll::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}

// ─── LAYOUT CARD (extracted for reuse) ──────────────────────────────────────
function LayoutCard({ layout, onClick, onForm }) {
  return (
    <div
      onClick={onClick}
      className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#00CED1]/60 hover:bg-white/8 transition-all cursor-pointer"
    >
      <div className="relative h-36 sm:h-44 lg:h-52 bg-white overflow-hidden">
        <img
          src={layout.image}
          alt={`${layout.type} ${layout.area}`}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
        {layout.tag && (
          <div
            className={`absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-bold text-white bg-gradient-to-r ${layout.tagColor}`}
          >
            {layout.tag}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2466]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-3">
          <span className="text-[11px] text-white bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
            Нажмите для просмотра
          </span>
        </div>
      </div>
      <div className="p-3 lg:p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider">
              {layout.rooms}
            </p>
            <p className="font-black text-base lg:text-lg text-white">
              {layout.area}
            </p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-gray-400">доход</p>
            <p className="text-sm font-bold text-[#00CED1]">{layout.yield}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-300 font-medium">
            {layout.priceFrom}
          </p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onForm(`Узнать цену: ${layout.type} ${layout.area}`);
            }}
            className="text-[10px] px-3 py-1.5 bg-gradient-to-r from-[#00CED1] to-[#0886c8] rounded-lg font-bold hover:shadow-lg hover:shadow-[#00CED1]/30 transition-all"
          >
            Узнать цену
          </button>
        </div>
      </div>
    </div>
  );
}
