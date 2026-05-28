"use client";

import { useState } from "react";
import {
  Phone,
  X,
  ChevronRight,
  ChevronDown,
  BookOpen,
  TrendingUp,
  Users,
  Newspaper,
  LayoutGrid,
} from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/data/translations";
import { LanguageSwitcher } from "@/components/LanguageSwitcher/LanguageSwitcher";

const LOGO_URL =
  "https://ucarecdn.com/69133131-b620-4701-b0c0-4bd748d24f2a/-/format/auto/";

export function MobileMenu({
  isOpen,
  onClose,
  projects,
  onOpenForm,
  onOpenMessenger,
  logoUrl,
}) {
  const { lang } = useLang();
  const tr = t[lang].mobileMenu;

  if (!isOpen) return null;

  const src = logoUrl || LOGO_URL;

  return (
    <div
      className="fixed inset-0 z-[200] lg:hidden"
      role="dialog"
      aria-modal="true"
    >
      {/* Подложка */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(2, 8, 20, 0.96)" }}
        onClick={onClose}
      />

      {/* Панель */}
      <div className="relative h-full flex flex-col mobile-menu-panel">
        {/* Шапка меню */}
        <div className="flex items-center justify-between px-5 pt-6 pb-4 mobile-menu-header">
          <a href="/" onClick={onClose}>
            <img
              src={src}
              alt="Shirokov Deus Capital"
              className="h-[56px] w-auto object-contain"
              style={{ maxWidth: "230px" }}
            />
          </a>
          <div className="flex items-center gap-3">
            {/* Language switcher inside mobile menu */}
            <LanguageSwitcher variant="mobile" />
            <button
              onClick={onClose}
              className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-xl border border-white/20 hover:border-[#00CED1]/60 hover:bg-[#00CED1]/10 transition-all duration-200"
              aria-label={tr.close}
            >
              <X size={16} className="text-white" />
            </button>
          </div>
        </div>

        {/* Разделитель */}
        <div
          className="mx-5 mobile-menu-divider"
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(0,206,209,0.4), transparent)",
          }}
        />

        {/* Навигация */}
        <MobileMenuNav projects={projects} onClose={onClose} />

        {/* Нижний CTA-блок */}
        <div className="px-5 pb-10 mobile-menu-cta">
          <div
            className="mb-4"
            style={{
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(0,206,209,0.3), transparent)",
            }}
          />
          <a
            href="tel:+70000000000"
            className="flex items-center justify-center gap-2 mb-3 text-white/50 hover:text-[#00CED1] transition-colors"
          >
            <Phone size={12} className="text-[#00CED1]" />
            <span className="text-xs tracking-wider">8(000)-000-00-00</span>
          </a>
          <button
            onClick={() => {
              onClose();
              onOpenForm("Заказ звонка");
            }}
            className="w-full py-4 rounded-2xl font-bold text-sm text-white mb-2.5 menu-cta-btn"
          >
            {tr.callOrder}
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenMessenger();
            }}
            className="w-full py-3 rounded-2xl text-xs font-medium text-white/60 border border-white/15 hover:border-[#00CED1]/50 hover:text-white transition-all duration-200"
          >
            {tr.writeMessenger}
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes menuFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes panelSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mobile-menu-panel   { animation: menuFadeIn 0.18s ease-out forwards; }
        .mobile-menu-header  { opacity: 0; animation: panelSlideUp 0.28s ease-out 0.05s forwards; }
        .mobile-menu-divider { opacity: 0; animation: panelSlideUp 0.28s ease-out 0.07s forwards; }
        .mobile-menu-cta     { opacity: 0; animation: panelSlideUp 0.32s ease-out 0.44s forwards; }

        .menu-cta-btn {
          background: linear-gradient(135deg, #00CED1 0%, #0A2466 100%);
          box-shadow: 0 4px 20px rgba(0, 206, 209, 0.22);
          transition: box-shadow 0.2s, transform 0.15s;
        }
        .menu-cta-btn:hover  { box-shadow: 0 6px 28px rgba(0,206,209,0.38); transform: translateY(-1px); }
        .menu-cta-btn:active { transform: translateY(0); }
      `}</style>
    </div>
  );
}

// ─── НАВИГАЦИЯ ────────────────────────────────────────────────────────────────
function MobileMenuNav({ projects, onClose }) {
  const { lang } = useLang();
  const tr = t[lang].mobileMenu;

  const navLinks = [
    { href: "/#for-whom", label: tr.forWhom },
    { href: "/#guarantees", label: tr.whyUs },
    { href: "/#reviews", label: tr.investorReviews },
    { href: "/#calculator", label: tr.calcYield },
    { href: "/#footer", label: tr.contacts },
  ];

  return (
    <nav className="flex-1 px-4 py-2 overflow-y-auto">
      <ul>
        {/* Главная */}
        <li className="mobile-nav-item" style={{ "--delay": "0.06s" }}>
          <a
            href="/"
            onClick={onClose}
            className="flex items-center justify-between py-4 border-b border-white/[0.06] group"
          >
            <span className="text-lg font-bold font-helvetica text-white group-hover:text-[#00CED1] transition-colors duration-200">
              {t[lang].nav.home}
            </span>
            <ChevronRight
              size={14}
              className="text-white/25 group-hover:text-[#00CED1] transition-colors"
            />
          </a>
        </li>

        {/* Инвестиционные объекты — split */}
        <MobileMenuProjectsAccordion
          projects={projects}
          onClose={onClose}
          delay="0.11s"
        />

        {/* Блог — split */}
        <MobileMenuBlogAccordion onClose={onClose} delay="0.16s" />

        {/* Остальные ссылки */}
        {navLinks.map((item, i) => (
          <li
            key={item.href}
            className="mobile-nav-item"
            style={{ "--delay": `${0.21 + i * 0.05}s` }}
          >
            <a
              href={item.href}
              onClick={onClose}
              className="flex items-center justify-between py-4 border-b border-white/[0.06] group"
            >
              <span className="text-lg font-bold font-helvetica text-white group-hover:text-[#00CED1] transition-colors duration-200">
                {item.label}
              </span>
              <ChevronRight
                size={14}
                className="text-white/25 group-hover:text-[#00CED1] transition-colors"
              />
            </a>
          </li>
        ))}
      </ul>

      <style jsx>{`
        @keyframes rowSlideIn {
          from { opacity: 0; transform: translateX(22px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .mobile-nav-item {
          opacity: 0;
          animation: rowSlideIn 0.30s ease-out var(--delay, 0.1s) forwards;
        }
      `}</style>
    </nav>
  );
}

// ─── АККОРДЕОН: Инвестиционные объекты (split-паттерн) ───────────────────────
function MobileMenuProjectsAccordion({ projects, onClose, delay }) {
  const [isOpen, setIsOpen] = useState(false);
  const { lang } = useLang();
  const tr = t[lang].mobileMenu;
  const megaTr = t[lang].megaMenu;

  const hasChessboard = (id) =>
    ["alean-select-agoy", "palazzo-de-agoy", "gk-belye-nochi"].includes(id);

  return (
    <li
      className="mobile-nav-item border-b border-white/[0.06]"
      style={{ "--delay": delay }}
    >
      {/* ── SPLIT ROW ── */}
      <div className="flex items-center">
        {/* Лейбл — ссылка на якорь проектов */}
        <a
          href="/#projects"
          onClick={onClose}
          className="flex-1 py-4 text-lg font-bold font-helvetica text-white hover:text-[#00CED1] transition-colors duration-200"
        >
          {tr.objects}
        </a>

        {/* Стрелка — отдельная кнопка-тогл */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          aria-expanded={isOpen}
          className={`
            flex-shrink-0 w-9 h-9 ml-2 flex items-center justify-center rounded-full
            border transition-all duration-200
            ${
              isOpen
                ? "border-[#00CED1]/60 bg-[#00CED1]/15 text-[#00CED1]"
                : "border-white/15 text-white/30 hover:border-[#00CED1]/40 hover:bg-[#00CED1]/10 hover:text-[#00CED1]"
            }
          `}
          aria-label={tr.openObjects}
        >
          <ChevronDown
            size={14}
            className="transition-transform duration-300"
            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </button>
      </div>

      {/* Раскрывающийся список */}
      {isOpen && (
        <ul className="pb-3 accordion-list">
          {projects.map((p) => (
            <li key={p.id}>
              <a
                href={`/${p.id}`}
                onClick={onClose}
                className="flex items-center gap-3 py-2.5 px-2 rounded-lg text-sm text-white/60 hover:text-[#00CED1] hover:bg-[#00CED1]/5 transition-all duration-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#00CED1]/50 flex-shrink-0" />
                {p.name}
              </a>
              {hasChessboard(p.id) && (
                <a
                  href={`/${p.id}/planirovki-i-ceny`}
                  onClick={onClose}
                  className="flex items-center gap-2 py-2 px-5 rounded-lg text-xs text-[#00CED1] hover:bg-[#00CED1]/10 transition-all duration-200"
                >
                  <LayoutGrid size={10} className="flex-shrink-0" />
                  {megaTr.floorPlans}
                </a>
              )}
            </li>
          ))}
        </ul>
      )}

      <style jsx>{`
        @keyframes accordionDrop {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .accordion-list { animation: accordionDrop 0.2s ease-out forwards; }
        @keyframes rowSlideIn {
          from { opacity: 0; transform: translateX(22px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .mobile-nav-item {
          opacity: 0;
          animation: rowSlideIn 0.30s ease-out var(--delay, 0.1s) forwards;
        }
      `}</style>
    </li>
  );
}

// ─── АККОРДЕОН: Блог (split-паттерн) ─────────────────────────────────────────
function MobileMenuBlogAccordion({ onClose, delay }) {
  const [isOpen, setIsOpen] = useState(false);
  const { lang } = useLang();
  const tr = t[lang].blogMenu;
  const mtr = t[lang].mobileMenu;

  const blogSections = [
    {
      href: "/blog/ekspertnye-stati",
      icon: BookOpen,
      label: tr.expert,
    },
    { href: "/blog", icon: TrendingUp, label: tr.analytics },
    { href: "/blog", icon: Users, label: tr.cases },
    { href: "/blog", icon: Newspaper, label: tr.news },
  ];

  return (
    <li
      className="mobile-nav-item border-b border-white/[0.06]"
      style={{ "--delay": delay }}
    >
      {/* ── SPLIT ROW ── */}
      <div className="flex items-center">
        {/* Лейбл — ссылка на главную блога */}
        <a
          href="/blog"
          onClick={onClose}
          className="flex-1 py-4 text-lg font-bold font-helvetica text-white hover:text-[#00CED1] transition-colors duration-200"
        >
          {tr.title}
        </a>

        {/* Стрелка — отдельная кнопка-тогл */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          aria-expanded={isOpen}
          className={`
            flex-shrink-0 w-9 h-9 ml-2 flex items-center justify-center rounded-full
            border transition-all duration-200
            ${
              isOpen
                ? "border-[#00CED1]/60 bg-[#00CED1]/15 text-[#00CED1]"
                : "border-white/15 text-white/30 hover:border-[#00CED1]/40 hover:bg-[#00CED1]/10 hover:text-[#00CED1]"
            }
          `}
          aria-label={mtr.openBlog}
        >
          <ChevronDown
            size={14}
            className="transition-transform duration-300"
            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </button>
      </div>

      {/* Раскрывающийся список */}
      {isOpen && (
        <ul className="pb-3 accordion-list">
          {blogSections.map(({ href, icon: Icon, label }) => (
            <li key={label}>
              <a
                href={href}
                onClick={onClose}
                className="flex items-center gap-3 py-2.5 px-2 rounded-lg text-sm text-white/60 hover:text-[#00CED1] hover:bg-[#00CED1]/5 transition-all duration-200"
              >
                <Icon size={13} className="text-[#00CED1] flex-shrink-0" />
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}

      <style jsx>{`
        @keyframes accordionDrop {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .accordion-list { animation: accordionDrop 0.2s ease-out forwards; }
        @keyframes rowSlideIn {
          from { opacity: 0; transform: translateX(22px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .mobile-nav-item {
          opacity: 0;
          animation: rowSlideIn 0.30s ease-out var(--delay, 0.1s) forwards;
        }
      `}</style>
    </li>
  );
}
