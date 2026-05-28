import { useState } from "react";
import { Play, X, TrendingUp, Users, Award } from "lucide-react";

export default function FounderSection({ openForm }) {
  const [showVideo, setShowVideo] = useState(false);

  const achievements = [
    {
      icon: TrendingUp,
      number: ">10",
      label: "лет практического опыта",
      description: "инвестирования в премиальную недвижимость",
    },
    {
      icon: Award,
      number: ">270",
      label: "стратегий разработано",
      description: "для клиентов с различными инвестиционными целями",
    },
    {
      icon: Users,
      number: ">40",
      label: "доходных активов",
      description: "в портфелях клиентов под управлением",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#0A2466] to-[#2C2C2C]">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-helvetica">
            Знакомьтесь,
            <br />
            <span className="text-[#00CED1]">Широков Алексей Владимирович</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Block - Photo and Video */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#00CED1]/30">
              <img
                src="https://ucarecdn.com/c7a1093e-fdde-4eb4-8aad-775779c9387b/-/format/auto/"
                alt="Широков Алексей Владимирович"
                className="w-full h-auto"
              />

              {/* Overlay with title */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8">
                <p className="text-white text-lg font-bold mb-2 font-helvetica">
                  Основатель и генеральный директор
                </p>
                <p className="text-[#00CED1] text-2xl font-bold font-helvetica">
                  Shirokov Deus Capital
                </p>
              </div>
            </div>

            {/* Video Play Button */}
            <div className="mt-6 flex gap-4">
              <button
                onClick={() => setShowVideo(true)}
                className="flex-1 group relative overflow-hidden px-8 py-6 bg-gradient-to-r from-[#00CED1] to-[#0A2466] rounded-2xl hover:shadow-2xl hover:shadow-[#00CED1]/50 transition-all transform hover:scale-105"
              >
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all">
                    <Play className="text-white fill-white" size={24} />
                  </div>
                  <span className="text-white font-bold text-lg font-helvetica">
                    Смотреть видеопрезентацию
                  </span>
                </div>
              </button>
            </div>

            <button
              onClick={() => openForm("Индивидуальная консультация")}
              className="w-full mt-4 px-8 py-4 border-2 border-[#00CED1] rounded-xl font-bold hover:bg-[#00CED1]/10 transition-all"
            >
              Получить индивидуальную консультацию
            </button>
          </div>

          {/* Right Block - Biography and Stats */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm border border-[#00CED1]/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-[#00CED1] font-helvetica">
                Краткая биография
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed font-inter">
                <p className="text-lg">
                  <span className="font-bold text-white">Алексей Широков</span>{" "}
                  — эксперт по элитной недвижимости на Черноморском побережье с
                  опытом работы более 10 лет.
                </p>
                <p>
                  Помогает клиентам безопасно и выгодно инвестировать в
                  недвижимость Сочи, подбирая лучшие объекты для жизни, отдыха и
                  бизнеса.
                </p>
                <p>
                  Практикующий инвестор с опытом более 10 лет. Разработал более
                  270 персональных стратегий для клиентов с различными
                  инвестиционными целями.
                </p>
                <p className="text-[#00CED1] font-medium">
                  Под управлением находится более 40 доходных активов в
                  портфелях клиентов, демонстрирующих стабильную доходность
                  29-40% годовых.
                </p>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid md:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-[#00CED1]/20 to-[#0A2466]/20 border border-[#00CED1]/30 rounded-xl p-6 text-center hover:border-[#00CED1] hover:shadow-lg hover:shadow-[#00CED1]/20 transition-all"
                  >
                    <Icon className="mx-auto mb-3 text-[#00CED1]" size={32} />
                    <div className="text-4xl font-bold text-[#00CED1] mb-2 font-helvetica">
                      {achievement.number}
                    </div>
                    <div className="text-sm font-bold text-white mb-1">
                      {achievement.label}
                    </div>
                    <div className="text-xs text-gray-400">
                      {achievement.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X size={24} className="text-white" />
            </button>
            <div
              className="relative bg-black rounded-2xl overflow-hidden"
              style={{ paddingBottom: "56.25%" }}
            >
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <p className="text-xl">Здесь будет видеопрезентация</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
