"use client";

import { useState, useRef, useEffect } from "react";
import {
  Phone,
  MessageCircle,
  ChevronDown,
  LayoutGrid,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Users,
  Newspaper,
  Calculator,
  MapPin,
} from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/data/translations";
import { LanguageSwitcher } from "@/components/LanguageSwitcher/LanguageSwitcher";

// ─── MEGA-DROPDOWN для "Объекты" ──────────────────────────────────────────────
function ProjectsMegaMenu({ projects, isOpen, onMouseEnter, onMouseLeave }) {
  const { lang } = useLang();
  const tr = t[lang].megaMenu;

  const hasChessboard = (id) =>
    ["alean-select-agoy", "palazzo-de-agoy", "gk-belye-nochi"].includes(id);

  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[720px] max-w-[95vw] transition-all duration-200 ease-out ${
        isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
      style={{ zIndex: 100 }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="h-3 bg-transparent" />
      {/* Полностью непрозрачный фон */}
      <div className="bg-[#060e24] border border-[#00CED1]/20 rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.85),0_0_0_1px_rgba(0,206,209,0.08)] overflow-hidden">
        <div className="px-6 py-4 border-b border-white/5">
          <p className="text-[0.65rem] font-bold tracking-[0.2em] text-[#00CED1] uppercase">
            {tr.label}
          </p>
        </div>
        <div className="p-4 grid grid-cols-2 gap-2">
          {projects.map((project) => (
            <div key={project.id} className="group/proj">
              <a
                href={`/${project.id}`}
                className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all duration-150"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#00CED1] mt-2 flex-shrink-0 group-hover/proj:shadow-[0_0_6px_#00CED1] transition-all" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white group-hover/proj:text-[#00CED1] transition-colors leading-tight">
                    {project.name}
                  </p>
                  {project.subtitle && (
                    <p className="text-[0.65rem] text-gray-500 mt-0.5 leading-tight truncate">
                      {project.subtitle}
                    </p>
                  )}
                  <p className="text-[0.65rem] text-gray-500 mt-0.5 flex items-center gap-1">
                    <MapPin size={9} />
                    {project.location}
                  </p>
                </div>
                <ArrowRight
                  size={12}
                  className="ml-auto text-gray-600 group-hover/proj:text-[#00CED1] group-hover/proj:translate-x-0.5 transition-all mt-1 flex-shrink-0"
                />
              </a>
              {hasChessboard(project.id) && (
                <a
                  href={`/${project.id}/planirovki-i-ceny`}
                  className="flex items-center gap-2 px-4 py-2 mx-1 rounded-lg hover:bg-[#00CED1]/8 transition-all duration-150 border border-transparent hover:border-[#00CED1]/20"
                >
                  <LayoutGrid
                    size={11}
                    className="text-[#00CED1] flex-shrink-0"
                  />
                  <span className="text-[0.7rem] text-[#00CED1] font-medium">
                    {tr.floorPlans}
                  </span>
                </a>
              )}
            </div>
          ))}
        </div>
        <div className="px-6 py-3 bg-white/[0.02] border-t border-white/5 flex items-center justify-between">
          <p className="text-[0.65rem] text-gray-600">{tr.footer}</p>
          <a
            href="/#projects"
            className="flex items-center gap-1.5 text-[0.7rem] text-[#00CED1] hover:text-white transition-colors font-medium"
          >
            {tr.allProjects} <ArrowRight size={11} />
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── МИНИ-DROPDOWN для "Блог" ─────────────────────────────────────────────────
function BlogMiniMenu({ isOpen, onMouseEnter, onMouseLeave }) {
  const { lang } = useLang();
  const tr = t[lang].blogMenu;

  const sections = [
    { href: "/blog/ekspertnye-stati", icon: BookOpen, label: tr.expert },
    { href: "/blog", icon: TrendingUp, label: tr.analytics },
    { href: "/blog", icon: Users, label: tr.cases },
    { href: "/blog", icon: Newspaper, label: tr.news },
  ];

  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 mt-0 w-60 transition-all duration-200 ease-out ${
        isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
      style={{ zIndex: 100 }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="h-3 bg-transparent" />
      {/* Полностью непрозрачный фон */}
      <div className="bg-[#060e24] border border-[#00CED1]/20 rounded-xl shadow-[0_24px_80px_rgba(0,0,0,0.85)] overflow-hidden">
        <div className="px-4 py-3 border-b border-white/5">
          <p className="text-[0.65rem] font-bold tracking-[0.2em] text-[#00CED1] uppercase">
            {tr.title}
          </p>
        </div>
        <div className="p-2">
          {sections.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-all group"
            >
              <Icon size={13} className="text-[#00CED1] flex-shrink-0" />
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                {label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── ОСНОВНОЙ ХЕДЕР ───────────────────────────────────────────────────────────
export function Header({ onOpenForm, onOpenMessenger, projects }) {
  const { lang } = useLang();
  const tr = t[lang].header;

  return (
    <div className="hidden lg:flex items-center gap-3">
      {/* Language Switcher */}
      <LanguageSwitcher variant="header" />

      <a
        href="tel:+70000000000"
        className="flex items-center gap-2 text-sm text-white/70 hover:text-[#00CED1] transition-colors group"
      >
        <span className="w-7 h-7 rounded-full border border-white/10 group-hover:border-[#00CED1]/40 flex items-center justify-center transition-colors">
          <Phone size={13} className="text-[#00CED1]" />
        </span>
        <span className="text-[0.8rem] tracking-wide">8(000)-000-00-00</span>
      </a>
      <button
        onClick={onOpenMessenger}
        className="w-8 h-8 rounded-full border border-white/10 hover:border-[#00CED1]/40 flex items-center justify-center transition-all hover:bg-[#00CED1]/10"
        title={tr.messenger}
      >
        <MessageCircle size={14} className="text-[#00CED1]" />
      </button>
      <button
        onClick={() => onOpenForm("Заказ звонка")}
        className="relative overflow-hidden px-5 py-2 rounded-lg text-[0.8rem] font-semibold tracking-wide transition-all duration-300 group"
        style={{
          background: "linear-gradient(135deg, #00CED1 0%, #0A2466 100%)",
          boxShadow: "0 0 0 1px rgba(0,206,209,0.3)",
        }}
      >
        <span className="relative z-10">{tr.callOrder}</span>
        <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
      </button>
    </div>
  );
}

// ─── НАВИГАЦИОННАЯ СТРОКА ─────────────────────────────────────────────────────
export function HeaderNav({ projects }) {
  const { lang } = useLang();
  const tr = t[lang].nav;

  const [activeMenu, setActiveMenu] = useState(null);
  const timeoutRef = useRef(null);

  const openMenu = (name) => {
    clearTimeout(timeoutRef.current);
    setActiveMenu(name);
  };
  const closeMenu = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 130);
  };
  const keepOpen = () => clearTimeout(timeoutRef.current);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  // Пункты навигации: simple | dropdown
  const navItems = [
    { label: tr.home, href: "/", type: "link" },
    {
      label: tr.objects,
      href: "/#projects",
      type: "dropdown",
      key: "projects",
    },
    { label: tr.blog, href: "/blog", type: "dropdown", key: "blog" },
    { label: tr.forWhom, href: "/#for-whom", type: "link" },
    { label: tr.about, href: "/#guarantees", type: "link" },
    { label: tr.reviews, href: "/#reviews", type: "link" },
    { label: tr.contacts, href: "/#footer", type: "link" },
  ];

  return (
    <nav className="hidden lg:block border-t border-white/[0.06] mt-3 pt-2.5">
      <ul className="flex items-center justify-center gap-0.5 xl:gap-1">
        {navItems.map((item) => {
          const isDropdown = item.type === "dropdown";
          const isActive = activeMenu === item.key;

          return (
            <li
              key={item.label}
              className="relative"
              /* hover на весь <li> открывает дропдаун */
              onMouseEnter={() => isDropdown && openMenu(item.key)}
              onMouseLeave={() => isDropdown && closeMenu()}
            >
              {isDropdown ? (
                /* ── SPLIT: ссылка-лейбл + кнопка-стрелка ── */
                <div
                  className={`flex items-center rounded-lg transition-all duration-150 ${isActive ? "bg-white/8" : "hover:bg-white/5"}`}
                >
                  {/* Лейбл — кликабельная ссылка */}
                  <a
                    href={item.href}
                    className={`pl-3 pr-1.5 py-1.5 text-[0.78rem] font-medium tracking-wide whitespace-nowrap transition-colors duration-150 ${
                      isActive ? "text-white" : "text-white/60 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>

                  {/* Стрелка — отдельная кнопка, открывает/закрывает дропдаун */}
                  <button
                    onClick={() => setActiveMenu(isActive ? null : item.key)}
                    aria-expanded={isActive}
                    aria-label={`Открыть подменю ${item.label}`}
                    className={`
                      p-1 mr-1 rounded-md transition-all duration-150
                      ${
                        isActive
                          ? "text-[#00CED1] bg-[#00CED1]/15"
                          : "text-white/30 hover:text-[#00CED1] hover:bg-[#00CED1]/12"
                      }
                    `}
                  >
                    <ChevronDown
                      size={11}
                      className={`transition-transform duration-200 ${isActive ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>
              ) : (
                /* ── Обычная ссылка ── */
                <a
                  href={item.href}
                  className="block px-3 py-1.5 rounded-lg text-[0.78rem] font-medium tracking-wide whitespace-nowrap text-white/60 hover:text-white hover:bg-white/5 transition-all duration-150"
                >
                  {item.label}
                </a>
              )}

              {/* Дропдауны */}
              {item.key === "projects" && (
                <ProjectsMegaMenu
                  projects={projects}
                  isOpen={isActive}
                  onMouseEnter={keepOpen}
                  onMouseLeave={closeMenu}
                />
              )}
              {item.key === "blog" && (
                <BlogMiniMenu
                  isOpen={isActive}
                  onMouseEnter={keepOpen}
                  onMouseLeave={closeMenu}
                />
              )}
            </li>
          );
        })}

        {/* Акцентный CTA */}
        <li className="ml-2 pl-3 border-l border-white/10">
          <a
            href="/#calculator"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[0.78rem] font-semibold text-[#00CED1] whitespace-nowrap hover:bg-[#00CED1]/10 transition-all duration-150 border border-[#00CED1]/20 hover:border-[#00CED1]/50"
          >
            <Calculator size={12} />
            {tr.calcIncome}
          </a>
        </li>
      </ul>
    </nav>
  );
}
