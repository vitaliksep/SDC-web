"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Phone,
  CheckCircle2,
  TrendingUp,
  Shield,
  Users,
  BarChart2,
  Clock,
  Share2,
} from "lucide-react";
import LeadForm from "@/components/LeadForm";

const ARTICLE = {
  title:
    "Инвестиции в курортную недвижимость: 5 причин почему это выгодно в 2026",
  date: "28 апреля 2026",
  readTime: "8 мин",
  author: "Shirokov Deus Capital",
  tag: "Стратегия",
  heroImage:
    "https://raw.createusercontent.com/f5901e8f-a176-4162-be18-9ee7dccde1a9/",
  heroImageAlt:
    "Курортный комплекс на Черноморском побережье — инвестиции в апартаменты у моря 2026",
};

const REASONS = [
  {
    number: "01",
    icon: TrendingUp,
    title: "Доходность 29–45% — банки отдыхают",
    text: "Банковский вклад в 2026 году даёт 14–16% годовых. Звучит неплохо — пока не учитываешь инфляцию (12% по независимым оценкам), налог на доход по вкладу и реальную покупательную способность рубля. Итоговый «плюс» превращается в символический. Апартаменты в курортном комплексе приносят 29–45% годовых за счёт двух потоков: арендный доход в высокий сезон и прирост стоимости объекта за время строительства (на этапе котлована до ввода — +30–70% к цене).",
    highlight:
      "Реальная доходность vs. инфляция: курортная недвижимость выигрывает в 3–4 раза",
  },
  {
    number: "02",
    icon: Users,
    title: "Туристический поток растёт — и это надолго",
    text: "Внутренний туризм в России вырос на 34% в 2024 году и продолжает расти в 2026-м. После закрытия популярных зарубежных направлений Черноморское побережье стало основным курортом страны. Сочи, Туапсинский район и Адлер ежегодно принимают десятки миллионов туристов. Загрузка премиальных комплексов в высокий сезон достигает 90–95%. Это значит: ваши апартаменты работают, пока вы занимаетесь своими делами.",
    highlight:
      "+34% туристов за 2024 год. В 2026 внутренний туризм бьёт исторические рекорды",
  },
  {
    number: "03",
    icon: Shield,
    title: "Материальный актив — его не заблокируют и не обнулят",
    text: "Акции теряют 40% за месяц. Криптовалюта — за ночь. Банки получают отзывы лицензий. А апартаменты на первой береговой линии в Сочи останутся апартаментами на первой береговой линии в Сочи — независимо от курса доллара, ключевой ставки и геополитики. Недвижимость — единственный класс активов, который одновременно защищает от инфляции, генерирует доход и растёт в цене. Именно поэтому состоятельные люди всегда держат долю капитала в объектах.",
    highlight:
      "Недвижимость нельзя заблокировать, заморозить или обнулить. Это ваш актив навсегда",
  },
  {
    number: "04",
    icon: BarChart2,
    title: "Дефицит качественных объектов — цены будут только расти",
    text: "Береговая линия не резиновая. Участки с первой линией на Черноморском побережье — ограниченный ресурс. Новые комплексы строятся раз в несколько лет, и каждый следующий — дороже предыдущего. Объекты, которые мы предлагаем сегодня по 535 000–1 300 000 ₽ за м², через 3–4 года после ввода будут стоить в 1,5–2 раза дороже. Дефицит + растущий спрос = рост цены. Это базовая экономика.",
    highlight:
      "Участков на первой береговой линии больше не станет. Купить сейчас — значит купить дёшево",
  },
  {
    number: "05",
    icon: Clock,
    title: "Профессиональное управление — доход без вашего участия",
    text: "Главный страх частного инвестора: «Кто будет заниматься квартирой?» В наших проектах этот вопрос снят. Управляющая компания берёт на себя всё: заселение гостей, уборку, техобслуживание, маркетинг на платформах бронирования, документооборот. Вы получаете ежеквартальный отчёт и выплату. Это полностью пассивная модель дохода — как банковский вклад, только в 3 раза выгоднее.",
    highlight:
      "УК делает всё. Вы получаете деньги. Это и есть настоящий пассивный доход",
  },
];

const STATS = [
  { value: "29–45%", label: "Доходность годовых" },
  { value: "от 10 мес.", label: "Срок окупаемости" },
  { value: "4 проекта", label: "Эксклюзивных объекта" },
  { value: "34%", label: "Рост турпотока 2024" },
];

export default function ArticlePage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleShare = () => {
    if (typeof navigator === "undefined") return;
    if (navigator.share) {
      navigator.share({
        title: ARTICLE.title,
        url: typeof window !== "undefined" ? window.location.href : "",
      });
    } else if (typeof navigator.clipboard !== "undefined") {
      navigator.clipboard.writeText(
        typeof window !== "undefined" ? window.location.href : "",
      );
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-[#0A2466] via-[#2C2C2C] to-[#0A2466] text-white"
      style={{ position: "relative", zIndex: 1 }}
    >
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#0A2466]/95 backdrop-blur-lg border-b border-[#00CED1]/20">
        <div className="max-w-5xl mx-auto px-4 lg:px-6 py-3 lg:py-4">
          <div className="flex items-center justify-between gap-4 relative">
            <a
              href="/blog/ekspertnye-stati"
              className="flex items-center gap-2 hover:text-[#00CED1] transition-colors shrink-0 text-sm"
            >
              <ArrowLeft size={18} />
              <span className="hidden sm:inline">Экспертные статьи</span>
            </a>

            {/* Адрес — по центру, одна строка */}
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1 pointer-events-none whitespace-nowrap">
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#00CED1"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="flex-shrink-0 hidden sm:block"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="text-[0.6rem] sm:text-[0.68rem] lg:text-[0.78rem] text-white/60 font-inter tracking-wide">
                г.&nbsp;Сочи,&nbsp;ул.&nbsp;Юных&nbsp;Ленинцев,&nbsp;д.10
              </span>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="tel:+70000000000"
                className="hidden sm:flex items-center gap-1.5 text-sm hover:text-[#00CED1] transition-colors"
              >
                <Phone size={14} className="text-[#00CED1]" />
                8(000)-000-00-00
              </a>
              <button
                onClick={() => setIsFormOpen(true)}
                className="px-4 py-2 bg-gradient-to-r from-[#00CED1] to-[#0A2466] rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-[#00CED1]/40 transition-all"
              >
                Консультация
              </button>
            </div>
          </div>
        </div>
      </header>

      <article className="max-w-5xl mx-auto px-4 lg:px-6 py-10">
        {/* Breadcrumb */}
        <nav
          className="text-xs text-gray-500 mb-6 flex items-center gap-2 flex-wrap"
          aria-label="Хлебные крошки"
        >
          <a href="/" className="hover:text-[#00CED1] transition-colors">
            Главная
          </a>
          <span>/</span>
          <a href="/blog" className="hover:text-[#00CED1] transition-colors">
            Блог
          </a>
          <span>/</span>
          <a
            href="/blog/ekspertnye-stati"
            className="hover:text-[#00CED1] transition-colors"
          >
            Экспертные статьи
          </a>
          <span>/</span>
          <span className="text-gray-400 line-clamp-1">
            Инвестиции в курортную недвижимость 2026
          </span>
        </nav>

        {/* Tag + Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className="px-3 py-1 bg-[#00CED1]/20 border border-[#00CED1] text-[#00CED1] text-xs font-bold rounded-full">
            {ARTICLE.tag}
          </span>
          <span className="text-sm text-gray-500">{ARTICLE.date}</span>
          <span className="text-gray-600">•</span>
          <span className="text-sm text-gray-500">
            {ARTICLE.readTime} чтения
          </span>
          <span className="text-gray-600">•</span>
          <span className="text-sm text-gray-500">{ARTICLE.author}</span>
        </div>

        {/* ════════════════════════════════════════════
            РЕЗОНАНС — Бить в боль ЦА
        ════════════════════════════════════════════ */}

        {/* H1 — главный SEO-заголовок */}
        <h1 className="text-3xl lg:text-5xl font-bold font-helvetica leading-tight mb-6">
          Инвестиции в курортную недвижимость:{" "}
          <span className="text-[#00CED1]">5 причин</span> почему это выгодно в
          2026
        </h1>

        {/* Hero Image — SEO-оптимизированное */}
        <figure className="mb-8 rounded-2xl overflow-hidden">
          <img
            src={ARTICLE.heroImage}
            alt={ARTICLE.heroImageAlt}
            className="w-full h-64 lg:h-96 object-cover"
            loading="eager"
            fetchpriority="high"
          />
          <figcaption className="text-xs text-gray-600 text-center mt-2 font-inter">
            Курортный комплекс на первой береговой линии Черноморского побережья
            — реальный пример инвестиционного объекта
          </figcaption>
        </figure>

        {/* Лид-абзац — боль ЦА */}
        <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border-l-4 border-red-400 rounded-r-xl p-5 mb-8">
          <p className="text-base lg:text-lg font-inter leading-relaxed text-gray-200">
            <strong className="text-white">
              Вы держите деньги на вкладе под 16% и думаете, что работаете.
            </strong>{" "}
            Но после инфляции 12%, налога 13% на доход сверх лимита и ежегодного
            обесценивания рубля — реальная прибыль стремится к нулю. Или хуже: к
            минусу.
          </p>
          <p className="text-base font-inter leading-relaxed text-gray-300 mt-3">
            При этом те, кто вложился в курортные апартаменты у моря 3 года
            назад, уже заработали 60–90% только на росте стоимости — ещё до
            первой аренды. И сейчас самое подходящее время, чтобы сделать то же
            самое.
          </p>
        </div>

        {/* Intro stats strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="bg-white/5 border border-[#00CED1]/20 rounded-xl p-4 text-center"
            >
              <p className="text-xl lg:text-2xl font-bold text-[#00CED1] font-helvetica">
                {stat.value}
              </p>
              <p className="text-xs text-gray-400 font-inter mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* ════════════════════════════════════════════
            ДИФФЕРЕНЦИАЦИЯ — 5 причин (основное тело)
        ════════════════════════════════════════════ */}

        <h2 className="text-2xl lg:text-3xl font-bold font-helvetica mb-3">
          Почему курортная недвижимость — это не просто «квадратные метры»
        </h2>
        <p className="text-gray-400 font-inter mb-8 leading-relaxed">
          Сервисные апартаменты в премиальном курортном комплексе — это не та же
          «квартира у моря для сдачи через авито». Это институциональный
          инвестиционный продукт с управляющей компанией, гарантированной
          загрузкой и юридической защитой по ФЗ-214/ФЗ-212. Разберём пять
          ключевых причин, почему этот инструмент работает.
        </p>

        {/* 5 причин */}
        <div className="space-y-8 mb-12">
          {REASONS.map((reason) => {
            const Icon = reason.icon;
            return (
              <section
                key={reason.number}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#00CED1]/20 border border-[#00CED1]/30 flex items-center justify-center">
                    <Icon size={22} className="text-[#00CED1]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs text-[#00CED1] font-bold tracking-wider font-inter">
                      ПРИЧИНА {reason.number}
                    </span>
                    <h3 className="text-xl lg:text-2xl font-bold font-helvetica mt-1 leading-snug">
                      {reason.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-300 font-inter leading-relaxed mb-4">
                  {reason.text}
                </p>
                <div className="flex items-start gap-2 bg-[#00CED1]/10 border border-[#00CED1]/30 rounded-xl p-4">
                  <CheckCircle2
                    size={18}
                    className="text-[#00CED1] mt-0.5 flex-shrink-0"
                  />
                  <p className="text-sm font-medium text-[#00CED1] font-inter leading-relaxed">
                    {reason.highlight}
                  </p>
                </div>
              </section>
            );
          })}
        </div>

        {/* ════════════════════════════════════════════
            ВЕРА — доказательная база
        ════════════════════════════════════════════ */}

        <section className="mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold font-helvetica mb-6">
            Кто уже инвестирует в курортную недвижимость — и почему они правы
          </h2>

          <div className="grid md:grid-cols-3 gap-5 mb-8">
            <div className="bg-gradient-to-br from-green-500/15 to-emerald-700/10 border border-green-500/30 rounded-xl p-5">
              <p className="text-3xl font-bold text-green-400 font-helvetica mb-1">
                +34%
              </p>
              <p className="text-sm text-gray-300 font-inter">
                Рост внутреннего туризма в 2024 году
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Источник: Ростуризм, 2025
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#00CED1]/15 to-[#0A2466]/20 border border-[#00CED1]/30 rounded-xl p-5">
              <p className="text-3xl font-bold text-[#00CED1] font-helvetica mb-1">
                90–95%
              </p>
              <p className="text-sm text-gray-300 font-inter">
                Загрузка премиальных комплексов в высокий сезон
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Данные УК по объектам портфеля
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/15 to-purple-700/10 border border-purple-500/30 rounded-xl p-5">
              <p className="text-3xl font-bold text-purple-400 font-helvetica mb-1">
                ×1,7
              </p>
              <p className="text-sm text-gray-300 font-inter">
                Средний рост стоимости объектов за 3 года
              </p>
              <p className="text-xs text-gray-500 mt-2">
                По объектам в портфеле SDC
              </p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 mb-6">
            <h3 className="text-xl font-bold font-helvetica mb-4 text-[#00CED1]">
              Как это работает на практике: простая модель доходности
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm font-inter min-w-[400px]">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-2 pr-4 text-gray-400 font-medium">
                      Параметр
                    </th>
                    <th className="text-right py-2 pr-4 text-gray-400 font-medium">
                      Банковский вклад
                    </th>
                    <th className="text-right py-2 text-[#00CED1] font-bold">
                      Курортные апартаменты
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    ["Номинальная доходность", "16% годовых", "29–45% годовых"],
                    ["Инфляционная защита", "❌ Нет", "✅ Рост цены объекта"],
                    ["Прирост стоимости актива", "❌ 0%", "✅ +30–70% за цикл"],
                    [
                      "Доход без вашего участия",
                      "✅ Да",
                      "✅ Да (УК всё берёт)",
                    ],
                    [
                      "Риск блокировки",
                      "⚠️ Есть (банк)",
                      "✅ Материальный актив",
                    ],
                    ["Реальная доходность", "~2–4%", "29–45%"],
                  ].map(([param, bank, realty], i) => (
                    <tr key={i}>
                      <td className="py-3 pr-4 text-gray-300">{param}</td>
                      <td
                        className={`py-3 pr-4 text-right ${bank.startsWith("❌") ? "text-red-400" : bank.startsWith("⚠️") ? "text-yellow-400" : "text-gray-300"}`}
                      >
                        {bank}
                      </td>
                      <td
                        className={`py-3 text-right font-medium ${realty.startsWith("✅") ? "text-green-400" : "text-[#00CED1]"}`}
                      >
                        {realty}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8">
            <h3 className="text-xl font-bold font-helvetica mb-4">
              Что важно знать перед покупкой: 5 вопросов, которые стоит задать
              себе
            </h3>
            <ol className="space-y-4">
              {[
                {
                  q: "Какой у вас горизонт инвестирования?",
                  a: "Курортная недвижимость оптимальна на 3–7 лет. За это время объект вводится в эксплуатацию, набирает репутацию и вырастает в цене.",
                },
                {
                  q: "Какой порог входа вас устраивает?",
                  a: "В нашем портфеле объекты доступны от 4,7 млн ₽ с рассрочкой 0% — без ипотеки и переплаты банку.",
                },
                {
                  q: "Вы хотите аренду, перепродажу или и то и другое?",
                  a: "Все три стратегии доступны на наших объектах. Эксперт поможет выбрать оптимальную под ваш профиль.",
                },
                {
                  q: "Кто будет управлять объектом?",
                  a: "Брендированная УК входит в проект по умолчанию. Ваше участие сводится к нулю после подписания договора.",
                },
                {
                  q: "Как защищены ваши деньги юридически?",
                  a: "ДДУ по ФЗ-214/ФЗ-212, эскроу-счёт, проектное финансирование через банк. Не «серая» схема, а полная правовая защита.",
                },
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#00CED1]/20 border border-[#00CED1]/40 flex items-center justify-center text-[#00CED1] text-xs font-bold">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-bold text-white mb-1">{item.q}</p>
                    <p className="text-sm text-gray-400 font-inter leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Итог статьи */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold font-helvetica mb-4">
            Итог: когда лучшее время для инвестиции?
          </h2>
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-l-4 border-yellow-400 rounded-r-xl p-5 mb-6">
            <p className="text-base font-inter leading-relaxed text-gray-200">
              <strong className="text-yellow-300">
                Лучшее время — это до ввода объекта.
              </strong>{" "}
              После сдачи цена на те же апартаменты вырастет на 40–70%. Сейчас
              объекты в портфеле Shirokov Deus Capital находятся на стадии
              строительства — это именно то окно, которое закрывается по мере
              приближения к сдаче.
            </p>
          </div>
          <p className="text-gray-300 font-inter leading-relaxed mb-4">
            <strong className="text-white">
              Инвестиции в курортную недвижимость в 2026 году
            </strong>{" "}
            — это не спекуляция и не рискованная авантюра. Это консервативный и
            одновременно высокодоходный инструмент, который сочетает защиту
            капитала, пассивный доход и прирост стоимости актива. Именно поэтому
            состоятельные инвесторы держат 20–40% портфеля в объектах такого
            класса.
          </p>
          <p className="text-gray-300 font-inter leading-relaxed">
            Ключевой вопрос не «стоит ли вкладывать в курортную недвижимость», а
            «в какой именно объект и с какой стратегией». Именно здесь наша
            команда добавляет наибольшую ценность — мы не просто продаём
            квадратные метры, мы структурируем инвестицию под ваш профиль и
            цели.
          </p>
        </section>

        {/* ════════════════════════════════════════════
            ПРИЗЫВ К ДЕЙСТВИЮ
        ════════════════════════════════════════════ */}
        <div className="bg-gradient-to-r from-[#00CED1]/20 to-[#0A2466]/40 border-2 border-[#00CED1] rounded-3xl p-8 lg:p-10 text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-500/20 border border-yellow-500/50 rounded-full mb-4">
            <span className="text-yellow-300 text-xs font-bold">
              ⚡ СТАРТ ЗАКРЫТЫХ ПРОДАЖ
            </span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold font-helvetica mb-3 leading-tight">
            Разберём вашу ситуацию и подберём
            <br className="hidden lg:block" /> объект под ваш бюджет — бесплатно
          </h2>
          <p className="text-gray-300 font-inter mb-3 max-w-xl mx-auto">
            Наш эксперт покажет актуальные объекты, рассчитает доходность для
            вашей суммы инвестиций и ответит на все вопросы. Без давления и
            навязывания.
          </p>
          <p className="text-sm text-gray-500 font-inter mb-8">
            Консультация длится 30–40 минут. Онлайн или по телефону. Это ни к
            чему вас не обязывает.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsFormOpen(true)}
              className="px-8 py-4 bg-gradient-to-r from-[#00CED1] to-[#0A2466] rounded-xl font-bold text-base hover:shadow-2xl hover:shadow-[#00CED1]/50 transition-all"
            >
              Получить бесплатную консультацию
            </button>
            <a
              href="tel:+70000000000"
              className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#00CED1] rounded-xl font-bold text-base hover:bg-[#00CED1]/10 transition-all"
            >
              <Phone size={18} className="text-[#00CED1]" />
              Позвонить сейчас
            </a>
          </div>
        </div>

        {/* Share + related */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
          <div>
            <p className="text-sm text-gray-500 mb-1">Поделитесь статьёй</p>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 text-sm text-[#00CED1] hover:underline"
            >
              <Share2 size={14} />
              Скопировать ссылку
            </button>
          </div>
          <a
            href="/blog/ekspertnye-stati"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#00CED1] transition-colors"
          >
            Все экспертные статьи <ArrowRight size={14} />
          </a>
        </div>
      </article>

      {/* Проекты под статьёй */}
      <section className="bg-[#0A2466]/60 border-t border-[#00CED1]/20 px-4 lg:px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold font-helvetica text-center mb-6">
            Наши инвестиционные объекты
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                name: "Alean Select Agoy",
                yield: "29–40%",
                href: "/alean-select-agoy",
              },
              {
                name: "Палаццо Де Агой",
                yield: "32–45%",
                href: "/palazzo-de-agoy",
              },
              {
                name: "ГК Белые Ночи",
                yield: "30–42%",
                href: "/gk-belye-nochi",
              },
              {
                name: "Mandarin Garden",
                yield: "28–38%",
                href: "/gk-mandarin-garden",
              },
            ].map((p) => (
              <a
                key={p.href}
                href={p.href}
                className="group bg-white/5 border border-white/10 rounded-xl p-4 hover:border-[#00CED1]/40 hover:bg-white/8 transition-all"
              >
                <p className="font-bold text-sm font-helvetica group-hover:text-[#00CED1] transition-colors mb-1">
                  {p.name}
                </p>
                <p className="text-xs text-gray-500">Доходность</p>
                <p className="text-lg font-bold text-green-400">{p.yield}</p>
                <div className="mt-2 text-xs text-[#00CED1] flex items-center gap-1">
                  Подробнее <ArrowRight size={10} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form Modal */}
      <LeadForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        formType="Консультация из блога: инвестиции в курортную недвижимость 2026"
        showMessenger={true}
        showMessage={true}
      />
    </div>
  );
}
