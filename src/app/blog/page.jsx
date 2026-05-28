"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  BookOpen,
  Briefcase,
  Newspaper,
  BarChart2,
} from "lucide-react";
import LeadForm from "@/components/LeadForm";

const CATEGORIES = [
  {
    slug: "analitika",
    icon: BarChart2,
    label: "Аналитика",
    description:
      "Глубокий анализ рынка инвестиционной недвижимости, тренды и прогнозы на 2026 год",
    color: "from-blue-500/20 to-blue-700/10",
    border: "border-blue-500/30",
    iconColor: "text-blue-400",
    count: 0,
    soon: true,
  },
  {
    slug: "ekspertnye-stati",
    icon: BookOpen,
    label: "Экспертные статьи",
    description:
      "Авторские материалы о стратегиях инвестирования, выборе объектов и управлении капиталом",
    color: "from-[#00CED1]/20 to-[#0A2466]/20",
    border: "border-[#00CED1]/40",
    iconColor: "text-[#00CED1]",
    count: 1,
    soon: false,
  },
  {
    slug: "keysy",
    icon: Briefcase,
    label: "Кейсы",
    description:
      "Реальные истории наших инвесторов с цифрами: сколько вложили, сколько заработали",
    color: "from-green-500/20 to-green-700/10",
    border: "border-green-500/30",
    iconColor: "text-green-400",
    count: 0,
    soon: true,
  },
  {
    slug: "novosti",
    icon: Newspaper,
    label: "Новости",
    description:
      "Актуальные новости рынка недвижимости, изменения в законодательстве, события отрасли",
    color: "from-purple-500/20 to-purple-700/10",
    border: "border-purple-500/30",
    iconColor: "text-purple-400",
    count: 0,
    soon: true,
  },
];

// Последние статьи для превью на главной странице блога
const LATEST_ARTICLES = [
  {
    slug: "/blog/ekspertnye-stati/investitsii-v-kurortnuyu-nedvizhimost-2026",
    category: "Экспертные статьи",
    categorySlug: "ekspertnye-stati",
    title:
      "Инвестиции в курортную недвижимость: 5 причин почему это выгодно в 2026",
    excerpt:
      "Пока деньги «лежат» на вкладе под 16%, инфляция и скрытые налоги съедают реальную доходность. Узнайте, почему 1000 опытных инвесторов уже сделали ставку на апартаменты у моря — и как это работает.",
    image:
      "https://raw.createusercontent.com/f5901e8f-a176-4162-be18-9ee7dccde1a9/",
    imageAlt:
      "Инвестиции в курортную недвижимость на Черноморском побережье — апартаменты у моря 2026",
    date: "28 апреля 2026",
    readTime: "8 мин",
    tag: "Стратегия",
  },
];

export default function BlogPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-[#0A2466] via-[#2C2C2C] to-[#0A2466] text-white"
      style={{ position: "relative", zIndex: 1 }}
    >
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#0A2466]/95 backdrop-blur-lg border-b border-[#00CED1]/20">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-3 lg:py-4">
          <div className="flex items-center justify-between gap-4 relative">
            <a
              href="/"
              className="flex items-center gap-2 hover:text-[#00CED1] transition-colors shrink-0"
            >
              <ArrowLeft size={20} />
              <span className="hidden sm:inline text-sm">На главную</span>
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

            <div className="w-24 sm:w-auto flex-shrink-0" />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-16 pb-12 px-4 lg:px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://raw.createusercontent.com/d7e5f69a-8c91-49a8-97e0-a236258ae198/"
            alt="Инвестиции в курортную недвижимость — блог Shirokov Deus Capital"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A2466]/60 via-transparent to-[#0A2466]/80" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#00CED1]/20 border border-[#00CED1] rounded-full mb-6">
            <span className="text-[#00CED1] text-xs font-bold tracking-wider">
              ЭКСПЕРТНЫЙ КОНТЕНТ
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold font-helvetica mb-4 leading-tight">
            Блог об <span className="text-[#00CED1]">инвестициях</span>
            <br />в недвижимость
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 font-inter max-w-2xl mx-auto leading-relaxed">
            Аналитика, кейсы и стратегии от практиков рынка. Только полезный
            контент — без воды и маркетингового шума.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="px-4 lg:px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold font-helvetica mb-6 text-center">
            Разделы блога
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <a
                  key={cat.slug}
                  href={cat.soon ? "#" : `/blog/${cat.slug}`}
                  className={`relative group bg-gradient-to-br ${cat.color} border ${cat.border} rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${cat.soon ? "cursor-default opacity-70" : ""}`}
                >
                  {cat.soon && (
                    <span className="absolute top-3 right-3 px-2 py-0.5 bg-white/10 border border-white/20 rounded-full text-[10px] text-white/60 font-medium">
                      Скоро
                    </span>
                  )}
                  <Icon size={32} className={`${cat.iconColor} mb-4`} />
                  <h3 className="text-lg font-bold font-helvetica mb-2">
                    {cat.label}
                  </h3>
                  <p className="text-sm text-gray-400 font-inter leading-relaxed">
                    {cat.description}
                  </p>
                  {!cat.soon && (
                    <div className="mt-4 flex items-center gap-2 text-xs text-[#00CED1] font-medium">
                      <span>
                        {cat.count} {cat.count === 1 ? "статья" : "статьи"}
                      </span>
                      <ArrowRight size={12} />
                    </div>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="px-4 lg:px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold font-helvetica">
              Свежие <span className="text-[#00CED1]">публикации</span>
            </h2>
            <a
              href="/blog/ekspertnye-stati"
              className="text-sm text-[#00CED1] hover:underline flex items-center gap-1"
            >
              Все статьи <ArrowRight size={14} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LATEST_ARTICLES.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}

            {/* Placeholder cards */}
            <div className="bg-white/3 border border-white/10 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-3 min-h-[340px]">
              <TrendingUp size={36} className="text-white/20" />
              <p className="text-white/30 text-sm font-inter">
                Новые статьи появятся в ближайшее время
              </p>
            </div>
            <div className="bg-white/3 border border-white/10 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-3 min-h-[340px] hidden lg:flex">
              <BookOpen size={36} className="text-white/20" />
              <p className="text-white/30 text-sm font-inter">
                Следите за обновлениями блога
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <div className="border-t border-[#00CED1]/20 bg-[#0A2466]/60 py-10 px-4 lg:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl font-bold font-helvetica mb-2">
            Хотите инвестировать, но не знаете с чего начать?
          </p>
          <p className="text-gray-400 font-inter mb-6">
            Наш эксперт проведёт бесплатную консультацию и подберёт объект под
            ваш бюджет
          </p>
          <button
            onClick={() => setIsFormOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00CED1] to-[#0A2466] rounded-xl font-bold hover:shadow-2xl hover:shadow-[#00CED1]/40 transition-all"
          >
            Получить консультацию
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <LeadForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        formType="Консультация по инвестициям в недвижимость"
        showMessenger={true}
        showMessage={true}
      />
    </div>
  );
}

function ArticleCard({ article }) {
  return (
    <a
      href={article.slug}
      className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#00CED1]/50 hover:shadow-xl hover:shadow-[#00CED1]/10 transition-all duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={article.image}
          alt={article.imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2466]/60 to-transparent" />
        <span className="absolute top-3 left-3 px-3 py-1 bg-[#00CED1]/90 text-white text-xs font-bold rounded-full">
          {article.tag}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readTime} чтения</span>
          <span>•</span>
          <span className="text-[#00CED1]">{article.category}</span>
        </div>

        <h3 className="text-base font-bold font-helvetica mb-3 leading-snug group-hover:text-[#00CED1] transition-colors line-clamp-2">
          {article.title}
        </h3>

        <p className="text-sm text-gray-400 font-inter leading-relaxed flex-1 line-clamp-3">
          {article.excerpt}
        </p>

        <div className="mt-4 flex items-center gap-2 text-sm text-[#00CED1] font-medium">
          Читать статью <ArrowRight size={14} />
        </div>
      </div>
    </a>
  );
}
