import { CheckCircle2 } from "lucide-react";

export function HeroContent({ onOpenForm }) {
  return (
    <div className="space-y-4 lg:space-y-5">
      {/* Бейдж */}
      <div className="relative max-w-full">
        <div className="relative inline-block max-w-full">
          {/* Свечение — расширено за границы, больше не обрезается */}
          <div className="absolute -inset-3 bg-gradient-to-r from-[#00CED1] via-[#00CED1]/30 to-transparent rounded-full blur-2xl opacity-40 badge-pulse" />
          <div className="relative">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 420 64"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="gradBg" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop
                    offset="0%"
                    style={{ stopColor: "#00CED1", stopOpacity: 0.28 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#00CED1", stopOpacity: 0.06 }}
                  />
                </linearGradient>
                <filter id="glow" x="-20%" y="-60%" width="140%" height="220%">
                  <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path
                d="M5,32 Q14,10 44,15 L376,15 Q406,10 415,32 Q406,54 376,49 L44,49 Q14,54 5,32Z"
                fill="url(#gradBg)"
                stroke="#00CED1"
                strokeWidth="0.8"
                strokeOpacity="0.5"
                filter="url(#glow)"
              />
            </svg>
            <div className="relative px-5 sm:px-6 py-3 flex items-center justify-center">
              <p className="text-[#00CED1] font-bold text-xs sm:text-sm lg:text-base font-helvetica tracking-wider sm:tracking-widest text-center badge-pulse whitespace-nowrap">
                ⚡ СТАРТ ЗАКРЫТЫХ ПРОДАЖ
              </p>
            </div>
          </div>
        </div>
        <p className="text-[0.7rem] lg:text-sm mt-2 text-gray-400 font-inter leading-relaxed pr-2">
          Эксклюзивные спецпредложения и&nbsp;цены от&nbsp;застройщика
          в&nbsp;раннем доступе — только через Shirokov Deus Capital
        </p>
      </div>

      {/* Заголовок */}
      <h1 className="text-[1.85rem] sm:text-4xl lg:text-[2.7rem] xl:text-5xl font-bold leading-[1.15] font-helvetica">
        Инвестируйте в&nbsp;курортную недвижимость{" "}
        <span className="text-[#00CED1]">премиум&#8209;класса</span>
      </h1>

      {/* Подзаголовок */}
      <p className="text-sm lg:text-lg text-gray-300 leading-relaxed font-inter">
        Апартаменты в&nbsp;гостиничных комплексах 5★ элит&#8209;класса
        на&nbsp;Черноморском побережье
      </p>

      {/* УТП */}
      <div className="space-y-2 lg:space-y-2.5">
        <div className="flex items-start space-x-3">
          <CheckCircle2
            className="text-[#00CED1] mt-0.5 flex-shrink-0"
            size={18}
          />
          <p className="text-sm lg:text-base">
            Доходность <span className="font-bold text-[#00CED1]">29–40%</span>{" "}
            в&nbsp;зависимости от&nbsp;стратегии
          </p>
        </div>
        <div className="flex items-start space-x-3">
          <CheckCircle2
            className="text-[#00CED1] mt-0.5 flex-shrink-0"
            size={18}
          />
          <p className="text-sm lg:text-base">
            Окупаемость от&nbsp;перепродажи всего{" "}
            <span className="font-bold text-[#00CED1]">10&nbsp;месяцев</span>
          </p>
        </div>
        <div className="flex items-start space-x-3">
          <CheckCircle2
            className="text-[#00CED1] mt-0.5 flex-shrink-0"
            size={18}
          />
          <p className="text-sm lg:text-base">
            Рост стоимости актива{" "}
            <span className="font-bold text-[#00CED1]">+150%</span>{" "}
            за&nbsp;5&nbsp;лет
          </p>
        </div>
      </div>

      {/* Кнопки */}
      <div className="flex flex-wrap gap-3 pt-1">
        <button
          onClick={() => onOpenForm("Подбор объекта")}
          className="px-6 lg:px-8 py-3 lg:py-3.5 bg-gradient-to-r from-[#00CED1] to-[#0A2466] rounded-xl font-bold text-sm lg:text-base hover:shadow-xl hover:shadow-[#00CED1]/40 transition-all hover:scale-[1.03]"
        >
          Подобрать объект
        </button>
        <button
          onClick={() => onOpenForm("Консультация")}
          className="px-6 lg:px-8 py-3 lg:py-3.5 border-2 border-[#00CED1] rounded-xl font-bold text-sm lg:text-base hover:bg-[#00CED1]/10 transition-all"
        >
          Получить консультацию
        </button>
      </div>

      <style jsx>{`
        @keyframes badgePulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.5; }
        }
        .badge-pulse { animation: badgePulse 2.2s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
