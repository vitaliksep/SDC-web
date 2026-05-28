import { TrendingUp, Shield, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export default function ComparisonSection() {
  const [showScrollHint, setShowScrollHint] = useState(true);

  const comparisonData = [
    {
      type: "Курортная недвижимость премиум",
      yield: "29-40%",
      liquidity: "Высокая",
      risks: "Низкие",
      inflation: "Защита",
      control: "Полный",
      entry: "от 5,9 млн",
      highlight: true,
    },
    {
      type: "Банковский вклад",
      yield: "8-12%",
      liquidity: "Средняя",
      risks: "Низкие",
      inflation: "Зависит",
      control: "Нет",
      entry: "от 1 млн",
      highlight: false,
    },
    {
      type: "Акции и ETF",
      yield: "10-25%",
      liquidity: "Высокая",
      risks: "Высокие",
      inflation: "Зависит",
      control: "Нет",
      entry: "от 100 тыс",
      highlight: false,
    },
    {
      type: "Криптовалюта",
      yield: "-50% до +200%",
      liquidity: "Высокая",
      risks: "Критические",
      inflation: "Неизвестно",
      control: "Условный",
      entry: "от 10 тыс",
      highlight: false,
    },
    {
      type: "Жилая недвижимость",
      yield: "5-10%",
      liquidity: "Низкая",
      risks: "Средние",
      inflation: "Защита",
      control: "Полный",
      entry: "от 5 млн",
      highlight: false,
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollHint(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#0A2466] to-[#2C2C2C]">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="px-6 py-2 bg-[#00CED1]/20 border border-[#00CED1] rounded-full">
              <p className="text-[#00CED1] font-bold text-sm font-helvetica">
                АНАЛИТИКА РЫНКА 2025
              </p>
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-helvetica">
            Почему выгодно вкладывать в<br />
            <span className="text-[#00CED1]">
              сервисную недвижимость сейчас
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            Сравнительный анализ инвестиционных инструментов на 2025-2026 год
          </p>
        </div>

        {/* Comparison Table with Fixed First Column */}
        <div className="relative mb-12">
          <div className="overflow-x-auto comparison-scrollbar">
            <div className="min-w-[1000px] bg-white/5 backdrop-blur-sm rounded-2xl border border-[#00CED1]/20 overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-7 gap-px bg-[#00CED1]/20">
                <div className="sticky left-0 z-20 bg-gradient-to-br from-[#0A2466] to-[#00CED1] p-4 font-bold text-center shadow-xl border-r-2 border-[#00CED1]/40">
                  Инструмент
                </div>
                <div className="bg-[#0A2466] p-4 font-bold text-center">
                  Доходность
                </div>
                <div className="bg-[#0A2466] p-4 font-bold text-center">
                  Ликвидность
                </div>
                <div className="bg-[#0A2466] p-4 font-bold text-center">
                  Риски
                </div>
                <div className="bg-[#0A2466] p-4 font-bold text-center">
                  От инфляции
                </div>
                <div className="bg-[#0A2466] p-4 font-bold text-center">
                  Контроль
                </div>
                <div className="bg-[#0A2466] p-4 font-bold text-center">
                  Порог входа
                </div>
              </div>

              {/* Table Rows */}
              {comparisonData.map((item, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-7 gap-px ${
                    item.highlight ? "bg-[#00CED1]/30" : "bg-[#00CED1]/10"
                  }`}
                >
                  <div
                    className={`sticky left-0 z-10 p-4 font-bold shadow-xl border-r-2 ${
                      item.highlight
                        ? "bg-gradient-to-r from-[#00CED1]/40 to-[#0A2466]/60 border-[#00CED1]/60"
                        : "bg-[#2C2C2C] border-[#00CED1]/20"
                    }`}
                  >
                    {item.type}
                    {item.highlight && (
                      <div className="inline-block ml-2 px-2 py-1 bg-[#00CED1] text-[#0A2466] text-xs rounded-full font-bold">
                        ЛУЧШИЙ
                      </div>
                    )}
                  </div>
                  <div
                    className={`p-4 text-center ${
                      item.highlight ? "bg-[#2C2C2C]/50" : "bg-[#2C2C2C]/70"
                    } ${
                      item.yield.includes("40")
                        ? "text-[#00CED1] font-bold"
                        : ""
                    }`}
                  >
                    {item.yield}
                  </div>
                  <div
                    className={`p-4 text-center ${
                      item.highlight ? "bg-[#2C2C2C]/50" : "bg-[#2C2C2C]/70"
                    }`}
                  >
                    {item.liquidity}
                  </div>
                  <div
                    className={`p-4 text-center ${
                      item.highlight ? "bg-[#2C2C2C]/50" : "bg-[#2C2C2C]/70"
                    } ${
                      item.risks === "Низкие"
                        ? "text-green-400"
                        : item.risks === "Критические"
                          ? "text-red-400"
                          : ""
                    }`}
                  >
                    {item.risks}
                  </div>
                  <div
                    className={`p-4 text-center ${
                      item.highlight ? "bg-[#2C2C2C]/50" : "bg-[#2C2C2C]/70"
                    } ${
                      item.inflation === "Защита"
                        ? "text-green-400"
                        : item.inflation === "Убыток"
                          ? "text-red-400"
                          : ""
                    }`}
                  >
                    {item.inflation}
                  </div>
                  <div
                    className={`p-4 text-center ${
                      item.highlight ? "bg-[#2C2C2C]/50" : "bg-[#2C2C2C]/70"
                    }`}
                  >
                    {item.control}
                  </div>
                  <div
                    className={`p-4 text-center ${
                      item.highlight ? "bg-[#2C2C2C]/50" : "bg-[#2C2C2C]/70"
                    }`}
                  >
                    {item.entry}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Swipe Hint for Mobile (как на референсе) */}
          {showScrollHint && (
            <div className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none z-30">
              <div className="swipe-hint-animation">
                <div className="flex items-center gap-2 bg-[#00CED1] text-white px-4 py-3 rounded-full shadow-2xl">
                  <span className="text-2xl">👉</span>
                  <span className="text-sm font-bold">Листайте</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Key Insights */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-green-500/20 to-green-700/10 border border-green-500/30 rounded-xl p-6">
            <TrendingUp className="text-green-400 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2 font-helvetica">
              Спрос растет
            </h3>
            <p className="text-gray-300 text-sm font-inter">
              Объем инвестиций в курортную недвижимость вырос на 34% в 2024
              году. Внутренний туризм показывает рекордные показатели.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-blue-700/10 border border-blue-500/30 rounded-xl p-6">
            <Clock className="text-blue-400 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2 font-helvetica">
              Окно возможностей
            </h3>
            <p className="text-gray-300 text-sm font-inter">
              Цены на этапе строительства на 60-70% ниже, чем после сдачи.
              Каждый месяц задержки — упущенная прибыль.
            </p>
          </div>

          <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-700/10 border border-yellow-500/30 rounded-xl p-6">
            <Shield className="text-yellow-400 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2 font-helvetica">
              Защита капитала
            </h3>
            <p className="text-gray-300 text-sm font-inter">
              Материальный актив, который нельзя заблокировать. Стабильный спрос
              на отдых в премиум-сегменте независимо от экономики.
            </p>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-gradient-to-r from-[#00CED1]/20 to-[#0A2466]/20 border-2 border-[#00CED1] rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-4 font-helvetica">Вывод</h3>
          <p className="text-xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed font-inter">
            Курортная сервисная недвижимость премиум-класса демонстрирует{" "}
            <span className="text-[#00CED1] font-bold">
              лучшее соотношение доходности и рисков
            </span>{" "}
            среди доступных инвестиционных инструментов в 2026 году.
          </p>
        </div>
      </div>

      <style jsx global>{`
        .comparison-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(0, 206, 209, 0.6) rgba(255, 255, 255, 0.1);
        }
        .comparison-scrollbar::-webkit-scrollbar {
          height: 10px;
        }
        .comparison-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .comparison-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 206, 209, 0.6);
          border-radius: 10px;
          border: 2px solid transparent;
          background-clip: content-box;
        }
        .comparison-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 206, 209, 0.9);
          background-clip: content-box;
        }
        
        @keyframes swipe {
          0%, 100% {
            transform: translateX(0);
            opacity: 1;
          }
          50% {
            transform: translateX(-20px);
            opacity: 0.7;
          }
        }
        
        .swipe-hint-animation {
          animation: swipe 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
