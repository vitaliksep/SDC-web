"use client";

import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";

const ARTICLES = [
  {
    slug: "/blog/ekspertnye-stati/investitsii-v-kurortnuyu-nedvizhimost-2026",
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

export default function ExpertArticlesPage() {
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
              href="/blog"
              className="flex items-center gap-2 hover:text-[#00CED1] transition-colors shrink-0"
            >
              <ArrowLeft size={20} />
              <span className="hidden sm:inline text-sm">Назад к блогу</span>
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

            <div className="w-24 sm:w-auto shrink-0" />
          </div>
        </div>
      </header>

      {/* Breadcrumb + Title */}
      <section className="px-4 lg:px-6 pt-12 pb-8">
        <div className="max-w-7xl mx-auto">
          <nav className="text-xs text-gray-500 mb-4 flex items-center gap-2 flex-wrap">
            <a href="/" className="hover:text-[#00CED1] transition-colors">
              Главная
            </a>
            <span>/</span>
            <a href="/blog" className="hover:text-[#00CED1] transition-colors">
              Блог
            </a>
            <span>/</span>
            <span className="text-gray-300">Экспертные статьи</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-bold font-helvetica mb-3">
            Экспертные <span className="text-[#00CED1]">статьи</span>
          </h1>
          <p className="text-gray-400 font-inter max-w-2xl">
            Авторские материалы о стратегиях инвестирования, выборе объектов и
            управлении доходной недвижимостью
          </p>
          <p className="text-sm text-gray-600 mt-2">
            {ARTICLES.length} {ARTICLES.length === 1 ? "статья" : "статьи"}
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-4 lg:px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARTICLES.map((article) => (
              <a
                key={article.slug}
                href={article.slug}
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#00CED1]/50 hover:shadow-xl hover:shadow-[#00CED1]/10 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-52 overflow-hidden">
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
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime} чтения</span>
                  </div>
                  <h2 className="text-base font-bold font-helvetica mb-3 leading-snug group-hover:text-[#00CED1] transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-sm text-gray-400 font-inter leading-relaxed flex-1 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-[#00CED1] font-medium">
                    Читать статью <ArrowRight size={14} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
