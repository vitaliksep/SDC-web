import { TrendingUp, Briefcase, Star, Wallet, CheckCircle } from "lucide-react";

export default function ForWhomSection({ openForm }) {
  const audiences = [
    {
      icon: TrendingUp,
      title: "Профессиональный инвестор в недвижимость",
      description:
        "Вы получаете доступ к эксклюзивным объектам премиум-сегмента с доказанной доходностью 29-40% годовых. Наши объекты на этапе строительства дают возможность войти по минимальной цене и зафиксировать рост стоимости до 150% за 5 лет.",
      benefits: [
        "Диверсификация портфеля проверенными активами",
        "Доступ к закрытым продажам от застройщиков",
        "Готовые стратегии выхода с максимальной прибылью",
      ],
    },
    {
      icon: Wallet,
      title:
        "Есть вложения в другие активы и хотите диверсифицировать портфель",
      description:
        "Банковские вклады приносят 8-12% при инфляции 5-7% — ваши деньги теряют покупательную способность. Курортная недвижимость премиум-класса — это реальный актив с растущим спросом, стабильным денежным потоком от аренды и гарантированным ростом стоимости.",
      benefits: [
        "Защита от инфляции и девальвации",
        "Стабильный пассивный доход от аренды",
        "Материальный актив, который нельзя заблокировать",
      ],
    },
    {
      icon: Star,
      title: "Медийная личность, публичная персона, руководитель бизнеса",
      description:
        "Владение элитной недвижимостью в знаковых курортных комплексах — это не только инвестиция, но и маркер статуса. Вы получаете авторитет среди коллег и партнеров, возможность принимать гостей в эксклюзивной локации, наследство детям и внукам.",
      benefits: [
        "Повышение статуса и деловой репутации",
        "Дополнительный доход без участия в управлении",
        "Капитал для будущих поколений семьи",
      ],
    },
    {
      icon: Briefcase,
      title: "Накопили капитал, но не знаете, как его заставить работать",
      description:
        "У вас есть свободные средства от 20 млн рублей, которые лежат на счетах или в низкодоходных инструментах. Курортная недвижимость премиум-класса — идеальное решение: минимальные риски благодаря высокому спросу на отдых в России, понятная модель дохода.",
      benefits: [
        "Простая и понятная модель заработка",
        "Минимальные риски благодаря высокому спросу",
        "Поддержка эксперта на каждом этапе 24/7",
      ],
    },
  ];

  return (
    <section
      id="for-whom"
      className="relative py-24 bg-gradient-to-br from-[#2C2C2C] to-[#0A2466]"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-helvetica">
            Идеальное решение для вложений,
            <br />
            <span className="text-[#00CED1]">если Вы...</span>
          </h2>
          <p className="text-xl text-gray-300 font-inter">
            Узнайте, подходит ли вам инвестирование в премиальную курортную
            недвижимость
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-[#00CED1]/20 rounded-2xl p-8 hover:bg-white/10 hover:border-[#00CED1] transition-all duration-300 hover:shadow-2xl hover:shadow-[#00CED1]/20"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#00CED1] to-[#0A2466] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white leading-tight font-helvetica">
                    {audience.title}
                  </h3>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed font-inter">
                  {audience.description}
                </p>

                <div className="space-y-3">
                  {audience.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle
                        className="text-[#00CED1] mt-1 flex-shrink-0"
                        size={20}
                      />
                      <span className="text-white text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="bg-gradient-to-r from-[#0A2466]/50 to-[#00CED1]/20 border-2 border-[#00CED1] rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-3 font-helvetica">
                Увидели себя?
              </h3>
              <p className="text-gray-300 mb-4">
                Подберем оптимальный актив под ваши инвестиционные цели
              </p>
              <button
                onClick={() => openForm("Подбор актива")}
                className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-[#00CED1] to-[#0A2466] rounded-lg font-bold hover:shadow-lg hover:shadow-[#00CED1]/50 transition-all"
              >
                Подобрать актив под Ваши задачи
              </button>
            </div>

            <div className="text-center md:text-left border-t md:border-t-0 md:border-l border-[#00CED1]/30 pt-6 md:pt-0 md:pl-6">
              <h3 className="text-2xl font-bold mb-3 font-helvetica">
                Не увидели себя?
              </h3>
              <p className="text-gray-300 mb-4">
                Опишите вашу ситуацию — найдем индивидуальное решение
              </p>
              <button
                onClick={() => openForm("Индивидуальная консультация")}
                className="w-full md:w-auto px-8 py-4 border-2 border-[#00CED1] rounded-lg font-bold hover:bg-[#00CED1]/10 transition-all"
              >
                Получить консультацию
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
