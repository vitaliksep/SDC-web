import {
  Check,
  X,
  TrendingUp,
  Shield,
  Headphones,
  FileCheck,
  AlertTriangle,
  Clock,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function GuaranteesSection({ openForm }) {
  const [showScrollHint, setShowScrollHint] = useState(true);

  const comparison = [
    {
      aspect: "Анализ рынка и активов",
      independent: {
        text: "Поверхностная информация из рекламы",
        risk: true,
        icon: X,
      },
      withUs: {
        text: "Профессиональная аналитика трендов, сравнение доходности, оценка перспектив роста",
        benefit: true,
        icon: TrendingUp,
      },
    },
    {
      aspect: "Разработка стратегии",
      independent: {
        text: "Решения на эмоциях без расчетов",
        risk: true,
        icon: AlertTriangle,
      },
      withUs: {
        text: "Персональные стратегии дохода на 1-3-5 лет: аренда, перепродажа, комбинированный подход",
        benefit: true,
        icon: FileCheck,
      },
    },
    {
      aspect: "Юридическая поддержка",
      independent: {
        text: "Самостоятельное изучение договоров, риск упустить важные детали",
        risk: true,
        icon: X,
      },
      withUs: {
        text: "Полное юридическое сопровождение 24/7 от консультации до подписания ДКП",
        benefit: true,
        icon: Shield,
      },
    },
    {
      aspect: "Доступ к объектам",
      independent: {
        text: "Публичные предложения по рыночным ценам",
        risk: true,
        icon: Clock,
      },
      withUs: {
        text: 'Эксклюзивные "закрытые продажи" от застройщиков со спецценами для партнеров',
        benefit: true,
        icon: Check,
      },
    },
    {
      aspect: "Управление портфелем",
      independent: {
        text: "Отсутствие контроля, пропуск сигналов для выхода",
        risk: true,
        icon: AlertTriangle,
      },
      withUs: {
        text: "Постоянный мониторинг, корректировка, диверсификация, сигналы для фиксации максимальной прибыли",
        benefit: true,
        icon: TrendingUp,
      },
    },
    {
      aspect: "Экспертная поддержка",
      independent: {
        text: "Решение проблем самостоятельно",
        risk: true,
        icon: X,
      },
      withUs: {
        text: "Консультации эксперта на всех этапах, помощь в нестандартных ситуациях",
        benefit: true,
        icon: Headphones,
      },
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollHint(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="guarantees"
      className="relative py-24 bg-gradient-to-br from-[#2C2C2C] to-[#0A2466]"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="px-6 py-2 bg-[#00CED1]/20 border border-[#00CED1] rounded-full">
              <p className="text-[#00CED1] font-bold text-sm font-helvetica">
                ПРОФЕССИОНАЛЬНЫЙ ПОДХОД
              </p>
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-helvetica">
            Гарантии успешности инвестиций
            <br />
            <span className="text-[#00CED1]">от Shirokov Deus Capital</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            Сравните самостоятельный поиск с профессиональным сопровождением
          </p>
        </div>

        {/* Comparison Table with Fixed First Column */}
        <div className="relative mb-12">
          {/* Header для десктоп */}
          <div className="hidden md:grid grid-cols-3 gap-4 mb-6">
            <div className="col-span-1"></div>
            <div className="bg-red-500/20 border-2 border-red-500/50 rounded-xl p-4 text-center">
              <X className="mx-auto mb-2 text-red-400" size={32} />
              <h3 className="text-xl font-bold font-helvetica">
                Самостоятельный поиск
              </h3>
              <p className="text-sm text-gray-300 mt-1">
                Высокие риски и упущенные возможности
              </p>
            </div>
            <div className="bg-[#00CED1]/20 border-2 border-[#00CED1] rounded-xl p-4 text-center">
              <Check className="mx-auto mb-2 text-[#00CED1]" size={32} />
              <h3 className="text-xl font-bold font-helvetica">
                Shirokov Deus Capital
              </h3>
              <p className="text-sm text-gray-300 mt-1">
                Защита инвестиций и максимальная прибыль
              </p>
            </div>
          </div>

          <div className="overflow-x-auto guarantees-scrollbar rounded-2xl">
            <div className="min-w-[700px]">
              {/* Header для мобильных */}
              <div className="md:hidden grid grid-cols-[140px_1fr_1fr] gap-2 mb-4 sticky top-0 z-20 bg-gradient-to-br from-[#2C2C2C] to-[#0A2466] pb-4">
                <div></div>
                <div className="bg-red-500/20 border-2 border-red-500/50 rounded-lg p-2 text-center">
                  <X className="mx-auto mb-1 text-red-400" size={20} />
                  <h3 className="text-xs font-bold font-helvetica">
                    Самостоятельный
                  </h3>
                </div>
                <div className="bg-[#00CED1]/20 border-2 border-[#00CED1] rounded-lg p-2 text-center">
                  <Check className="mx-auto mb-1 text-[#00CED1]" size={20} />
                  <h3 className="text-xs font-bold font-helvetica">С нами</h3>
                </div>
              </div>

              {/* Rows - адаптивная сетка */}
              <div className="space-y-4">
                {comparison.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-[140px_1fr_1fr] md:grid-cols-3 gap-2 md:gap-4"
                  >
                    <div className="sticky left-0 z-10 flex items-center bg-gradient-to-r from-[#2C2C2C] to-[#0A2466] pr-2 md:pr-4 shadow-xl border-r-2 border-[#00CED1]/30">
                      <h4 className="text-xs md:text-lg font-bold text-white font-helvetica leading-tight">
                        {item.aspect}
                      </h4>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-red-500/30 rounded-xl p-2 md:p-4 hover:border-red-500/60 transition-all">
                      <div className="flex items-start space-x-2 md:space-x-3">
                        <item.independent.icon
                          className="text-red-400 mt-1 flex-shrink-0"
                          size={14}
                        />
                        <p className="text-xs md:text-sm text-gray-300 font-inter">
                          {item.independent.text}
                        </p>
                      </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-[#00CED1]/30 rounded-xl p-2 md:p-4 hover:border-[#00CED1] hover:bg-white/10 transition-all">
                      <div className="flex items-start space-x-2 md:space-x-3">
                        <item.withUs.icon
                          className="text-[#00CED1] mt-1 flex-shrink-0"
                          size={14}
                        />
                        <p className="text-xs md:text-sm text-white font-inter">
                          {item.withUs.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#00CED1]/30 to-[#0A2466]/30 border-2 border-[#00CED1] rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-4 font-helvetica">
            Доверьте инвестиции профессионалам
          </h3>
          <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto font-inter">
            Получите персональную стратегию и сопровождение на всех этапах
            инвестирования
          </p>
          <button
            onClick={() => openForm("Консультация эксперта")}
            className="px-12 py-5 bg-gradient-to-r from-[#00CED1] to-[#0A2466] rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-[#00CED1]/50 transition-all transform hover:scale-105"
          >
            Получить консультацию эксперта
          </button>
        </div>
      </div>

      <style jsx global>{`
        .guarantees-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(0, 206, 209, 0.6) rgba(255, 255, 255, 0.1);
        }
        .guarantees-scrollbar::-webkit-scrollbar {
          height: 10px;
        }
        .guarantees-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .guarantees-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 206, 209, 0.6);
          border-radius: 10px;
          border: 2px solid transparent;
          background-clip: content-box;
        }
        .guarantees-scrollbar::-webkit-scrollbar-thumb:hover {
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
