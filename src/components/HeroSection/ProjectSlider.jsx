import { useState, useEffect, useRef } from "react";
import { ProjectCard } from "./ProjectCard";

export function ProjectSlider({ projects }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        changeSlide((currentSlide + 1) % projects.length);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide, isTransitioning, projects.length]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sliderRef.current) return;
      const rect = sliderRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = (e.clientX - centerX) / (rect.width / 2);
      const y = (e.clientY - centerY) / (rect.height / 2);
      setMousePos({ x, y });
    };
    const handleMouseLeave = () => setMousePos({ x: 0, y: 0 });
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("mousemove", handleMouseMove);
      slider.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        slider.removeEventListener("mousemove", handleMouseMove);
        slider.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  const changeSlide = (index) => {
    if (index === currentSlide || isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const getCardStyle = (index) => {
    const offset = index - currentSlide;
    const tiltX = mousePos.y * (offset === 0 ? -10 : 0);
    const tiltY = mousePos.x * (offset === 0 ? 10 : 0);

    if (offset === 0) {
      return {
        transform: `translateX(0) translateZ(0) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1)`,
        opacity: 1,
        zIndex: 30,
        filter: "brightness(1) drop-shadow(0 30px 60px rgba(0,206,209,0.35))",
        pointerEvents: "auto",
        transition:
          mousePos.x === 0 && mousePos.y === 0
            ? "all 0.75s cubic-bezier(0.34, 1.4, 0.64, 1)"
            : "transform 0.12s ease-out, opacity 0.75s cubic-bezier(0.34, 1.4, 0.64, 1), filter 0.75s",
      };
    }
    if (offset === 1 || (offset < 0 && offset === -(projects.length - 1))) {
      return {
        transform:
          "translateX(62%) translateZ(-200px) rotateY(-26deg) scale(0.82)",
        opacity: 0.35,
        zIndex: 20,
        filter: "brightness(0.38) blur(1.5px)",
        pointerEvents: "auto",
        transition: "all 0.75s cubic-bezier(0.34, 1.4, 0.64, 1)",
      };
    }
    if (offset === -1 || (offset > 0 && offset === projects.length - 1)) {
      return {
        transform:
          "translateX(-62%) translateZ(-200px) rotateY(26deg) scale(0.82)",
        opacity: 0.35,
        zIndex: 20,
        filter: "brightness(0.38) blur(1.5px)",
        pointerEvents: "auto",
        transition: "all 0.75s cubic-bezier(0.34, 1.4, 0.64, 1)",
      };
    }
    return {
      transform:
        offset > 0
          ? "translateX(130%) translateZ(-400px) rotateY(-42deg) scale(0.68)"
          : "translateX(-130%) translateZ(-400px) rotateY(42deg) scale(0.68)",
      opacity: 0,
      zIndex: 10,
      filter: "brightness(0.2) blur(2.5px)",
      pointerEvents: "none",
      transition: "all 0.75s cubic-bezier(0.34, 1.4, 0.64, 1)",
    };
  };

  return (
    <div className="relative mt-4 lg:mt-0">
      {/* ═══════════════════════════════════════════════════════
          МОБИЛЬНАЯ ВЕРСИЯ — полный контент без обрезки
      ═══════════════════════════════════════════════════════ */}
      <div className="lg:hidden">
        {/* Карточки с полным контентом */}
        <div className="relative">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="rounded-3xl overflow-hidden shadow-2xl border-2 border-[#00CED1]/30 transition-opacity duration-500"
              style={{ display: index === currentSlide ? "block" : "none" }}
            >
              {/* Полная карточка — те же блоки, что и на десктопе */}
              <div className="bg-gradient-to-br from-white to-gray-50 text-[#2C2C2C]">
                {/* Фото */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {project.legal.map((badge, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-green-500 text-white text-[0.6rem] font-bold rounded-md shadow"
                      >
                        {badge}
                      </span>
                    ))}
                    <span className="px-2 py-0.5 bg-blue-500 text-white text-[0.6rem] font-bold rounded-md shadow">
                      {project.deliveryDate}
                    </span>
                  </div>
                  {project.brandLogos && (
                    <div className="absolute top-10 left-3 right-3 flex justify-center items-center gap-2 bg-white/95 rounded-xl p-1.5 shadow-lg">
                      {project.brandLogos.map((logo, idx) => (
                        <img
                          key={idx}
                          src={logo}
                          alt=""
                          className="h-5 object-contain"
                        />
                      ))}
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-base font-bold text-white font-helvetica drop-shadow">
                      {project.name}
                    </h3>
                    {project.subtitle && (
                      <p className="text-[0.6rem] text-white/85 font-inter">
                        {project.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                {/* Инфо-блоки — полный набор */}
                <div className="p-4 space-y-3 bg-white">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-gradient-to-br from-[#0A2466]/5 to-[#00CED1]/5 rounded-xl p-3 border border-[#00CED1]/20">
                      <p className="text-[0.6rem] text-gray-600 mb-0.5">
                        Цена за&nbsp;м²
                      </p>
                      <p className="text-sm font-bold text-[#0A2466] font-helvetica">
                        от&nbsp;{project.pricePerSqm}&nbsp;₽
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-[#00CED1]/10 to-[#00CED1]/5 rounded-xl p-3 border border-[#00CED1]/30">
                      <p className="text-[0.6rem] text-gray-600 mb-0.5">
                        Площадь, м²
                      </p>
                      <p className="text-sm font-bold text-[#00CED1] font-helvetica">
                        {project.areaFrom}–{project.areaTo}
                      </p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-3 border border-purple-200">
                    <p className="text-[0.6rem] text-gray-600 mb-0.5">
                      Порог входа
                    </p>
                    <p className="text-base font-bold text-purple-700 text-center font-helvetica">
                      {project.entryThreshold}&nbsp;₽
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-3 border border-green-200">
                    <p className="text-[0.6rem] text-gray-600 mb-0.5">
                      Доходность
                    </p>
                    <p className="text-base font-bold text-green-700 text-center font-helvetica">
                      {project.yield}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {project.financing.map((type, idx) => (
                      <div
                        key={idx}
                        className="flex-1 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-2 border border-orange-200"
                      >
                        <p className="text-xs font-bold text-orange-700 text-center">
                          {type}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Мобильные кнопки навигации — стилизованные, хорошо видны */}
        <div className="flex items-center justify-between mt-4 gap-2">
          <button
            onClick={() =>
              changeSlide(
                (currentSlide - 1 + projects.length) % projects.length,
              )
            }
            disabled={isTransitioning}
            className="mobile-nav-btn flex items-center gap-2 px-4 py-3 rounded-2xl font-bold text-sm text-white transition-all active:scale-95 disabled:opacity-40"
          >
            <svg
              className="w-4 h-4 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Назад
          </button>

          {/* Точки */}
          <div className="flex gap-2 flex-shrink-0">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => changeSlide(index)}
                className="h-2.5 rounded-full transition-all duration-500"
                style={{
                  width: index === currentSlide ? "1.8rem" : "0.6rem",
                  background:
                    index === currentSlide
                      ? "#00CED1"
                      : "rgba(255,255,255,0.3)",
                  boxShadow:
                    index === currentSlide
                      ? "0 0 8px rgba(0,206,209,0.7)"
                      : "none",
                }}
                aria-label={`Слайд ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => changeSlide((currentSlide + 1) % projects.length)}
            disabled={isTransitioning}
            className="mobile-nav-btn flex items-center gap-2 px-4 py-3 rounded-2xl font-bold text-sm text-white transition-all active:scale-95 disabled:opacity-40"
          >
            Вперёд
            <svg
              className="w-4 h-4 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          ДЕСКТОП ВЕРСИЯ — 3D Tilt Slider
      ═══════════════════════════════════════════════════════ */}
      <div className="hidden lg:block relative">
        <div
          ref={sliderRef}
          className="relative overflow-hidden rounded-3xl slider-wrapper"
          style={{ height: "clamp(360px, 52vw, 600px)" }}
        >
          <div className="absolute inset-0 slider-3d-container">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="absolute inset-0 slider-card cursor-pointer"
                style={getCardStyle(index)}
                onClick={() => changeSlide(index)}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        {/* Стрелки — десктоп */}
        <button
          onClick={() =>
            changeSlide((currentSlide - 1 + projects.length) % projects.length)
          }
          className="absolute left-2 lg:-left-12 top-[calc(clamp(360px,52vw,600px)/2)] -translate-y-1/2 z-10 p-2.5 lg:p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all group"
          disabled={isTransitioning}
        >
          <svg
            className="w-4 h-4 lg:w-6 lg:h-6 text-white group-hover:-translate-x-0.5 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={() => changeSlide((currentSlide + 1) % projects.length)}
          className="absolute right-2 lg:-right-12 top-[calc(clamp(360px,52vw,600px)/2)] -translate-y-1/2 z-10 p-2.5 lg:p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all group"
          disabled={isTransitioning}
        >
          <svg
            className="w-4 h-4 lg:w-6 lg:h-6 text-white group-hover:translate-x-0.5 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Точки — десктоп */}
        <div className="flex justify-center gap-2.5 mt-4">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => changeSlide(index)}
              className="h-2.5 rounded-full transition-all duration-500"
              style={{
                width: index === currentSlide ? "2.5rem" : "0.625rem",
                background:
                  index === currentSlide ? "#00CED1" : "rgba(255,255,255,0.3)",
                boxShadow:
                  index === currentSlide
                    ? "0 0 8px rgba(0,206,209,0.7)"
                    : "none",
              }}
              aria-label={`Слайд ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        /* ── Мобильные кнопки навигации ────────────────────── */
        .mobile-nav-btn {
          background: linear-gradient(135deg, rgba(0,206,209,0.22) 0%, rgba(10,36,102,0.65) 100%);
          border: 1.5px solid rgba(0,206,209,0.55);
          backdrop-filter: blur(8px);
          box-shadow: 0 4px 18px rgba(0,206,209,0.18);
        }
        .mobile-nav-btn:not(:disabled):hover {
          background: linear-gradient(135deg, rgba(0,206,209,0.38) 0%, rgba(10,36,102,0.85) 100%);
          box-shadow: 0 6px 24px rgba(0,206,209,0.32);
          transform: scale(1.03);
        }
        .mobile-nav-btn:not(:disabled):active {
          transform: scale(0.97);
        }

        /* ── Desktop 3D Slider ─────────────────────────────── */
        .slider-wrapper {
          -webkit-mask-image: -webkit-radial-gradient(white, black);
        }
        .slider-3d-container {
          perspective: 2200px;
          perspective-origin: 50% 42%;
        }
        .slider-card {
          transform-style: preserve-3d;
          backface-visibility: hidden;
          will-change: transform;
        }
        @keyframes cardFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        .slider-card:nth-child(1) {
          animation: cardFloat 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
