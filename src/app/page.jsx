"use client";

import { useState } from "react";
import { Header, HeaderNav } from "@/components/Header/Header";
import { MobileHeader } from "@/components/MobileHeader/MobileHeader";
import { MobileMenu } from "@/components/MobileMenu/MobileMenu";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { ParallaxBackground } from "@/components/ParallaxBackground/ParallaxBackground";
import { Footer } from "@/components/Footer/Footer";
import { MessengerModal } from "@/components/MessengerModal/MessengerModal";
import LeadForm from "@/components/LeadForm";
import ForWhomSection from "@/components/ForWhomSection";
import ComparisonSection from "@/components/ComparisonSection";
import GuaranteesSection from "@/components/GuaranteesSection";
import FounderSection from "@/components/FounderSection";
import ProjectsOverviewSection from "@/components/ProjectsOverviewSection";
import ReviewsSection from "@/components/ReviewsSection";
import CalculatorSection from "@/components/CalculatorSection";
import { useScrollTracking } from "@/utils/useScrollTracking";
import { useBodyScrollLock } from "@/utils/useBodyScrollLock";
import { projects, messengers } from "@/data/projects";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollReveal from "@/components/ScrollReveal";

// Новый логотип
const LOGO_URL =
  "https://ucarecdn.com/4179998e-fa1b-4f86-9eef-63ff12cc7ba1/-/format/auto/";

export default function HomePage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formType, setFormType] = useState("Консультация");
  const [showMessengerModal, setShowMessengerModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollY = useScrollTracking();
  useBodyScrollLock(isMobileMenuOpen);

  const openForm = (type) => {
    setFormType(type);
    setIsFormOpen(true);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-[#0A2466] via-[#2C2C2C] to-[#0A2466] text-white"
      style={{ overflowX: "clip", position: "relative", zIndex: 1 }}
    >
      {/* ═══ Плавный скролл + reveal-анимации ═══ */}
      <SmoothScroll />
      <ScrollReveal />

      {/* ═══ ГЛОБАЛЬНЫЕ СТИЛИ ═══ */}
      <style jsx global>{`
        *, *::before, *::after {
          box-sizing: border-box;
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* Параллакс-фон */}
      <ParallaxBackground scrollY={scrollY} />

      {/* Мобильное меню — fullscreen overlay */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        projects={projects}
        onOpenForm={openForm}
        onOpenMessenger={() => setShowMessengerModal(true)}
        logoUrl={LOGO_URL}
      />

      {/* ═══ ШАПКА ═══ */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A2466]/95 backdrop-blur-lg border-b border-[#00CED1]/20">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-3 lg:py-4">
          {/* Верхняя строка: логотип + адрес + мобильные/десктоп контролы */}
          <div className="flex items-center justify-between relative">
            {/* Логотип */}
            <a href="#" className="flex items-center flex-shrink-0">
              {/* Мобиль */}
              <img
                src={LOGO_URL}
                alt="Shirokov Deus Capital"
                className="lg:hidden h-[56px] w-auto object-contain"
                style={{ maxWidth: "220px" }}
              />
              {/* Десктоп */}
              <img
                src={LOGO_URL}
                alt="Shirokov Deus Capital"
                className="hidden lg:block h-[72px] w-auto object-contain"
                style={{ maxWidth: "320px" }}
              />
            </a>

            {/* Адрес — только на десктопе, абсолютно по центру */}
            <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-1 pointer-events-none whitespace-nowrap">
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
              <span className="text-[0.78rem] text-white/60 font-inter tracking-wide">
                г. Сочи, ул. Юных Ленинцев, д.10
              </span>
            </div>

            {/* Мобиль: адрес (2 строки) над телефоном + бургером */}
            <div className="flex flex-col items-end gap-0.5 lg:hidden">
              <div className="flex items-center gap-1 pointer-events-none">
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
                <div className="text-[0.52rem] text-white/55 leading-tight text-right">
                  <div>г. Сочи,</div>
                  <div>ул. Юных Ленинцев, 10</div>
                </div>
              </div>
              <MobileHeader
                onOpenMenu={() => setIsMobileMenuOpen(true)}
                onOpenForm={openForm}
              />
            </div>

            {/* Десктоп: контакты + кнопка */}
            <Header
              onOpenForm={openForm}
              onOpenMessenger={() => setShowMessengerModal(true)}
              projects={projects}
            />
          </div>

          {/* Десктоп: навигационная строка */}
          <HeaderNav projects={projects} />
        </div>
      </header>

      {/* ═══ КОНТЕНТ ═══ */}
      <HeroSection projects={projects} onOpenForm={openForm} />

      <ForWhomSection openForm={openForm} />
      <ComparisonSection />
      <GuaranteesSection openForm={openForm} />
      <FounderSection openForm={openForm} />
      <ProjectsOverviewSection openForm={openForm} />
      <ReviewsSection />
      <CalculatorSection openForm={openForm} />

      <Footer projects={projects} messengers={messengers} logoUrl={LOGO_URL} />

      {/* Формы и модалки */}
      <LeadForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        formType={formType}
        showMessenger={formType === "Консультация эксперта"}
        showMessage={formType === "Консультация эксперта"}
      />

      <MessengerModal
        isOpen={showMessengerModal}
        onClose={() => setShowMessengerModal(false)}
        messengers={messengers}
      />
    </div>
  );
}
