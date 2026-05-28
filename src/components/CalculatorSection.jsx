import { useState, useEffect } from "react";
import { Calculator, TrendingUp, DollarSign, Calendar } from "lucide-react";

export default function CalculatorSection({ openForm }) {
  const [investmentAmount, setInvestmentAmount] = useState(5000000);
  const [strategy, setStrategy] = useState("rent+resale");
  const [period, setPeriod] = useState(3);
  const [results, setResults] = useState(null);

  const strategies = {
    rent: { name: "Аренда", yieldMin: 29, yieldMax: 35 },
    resale: { name: "Перепродажа", yieldMin: 35, yieldMax: 40 },
    "rent+resale": { name: "Аренда + Перепродажа", yieldMin: 38, yieldMax: 45 },
  };

  const calculateReturns = () => {
    const selectedStrategy = strategies[strategy];
    const avgYield =
      (selectedStrategy.yieldMin + selectedStrategy.yieldMax) / 2;

    // Простой расчет
    const yearlyIncome = investmentAmount * (avgYield / 100);
    const totalIncome = yearlyIncome * period;
    const totalValue = investmentAmount + totalIncome;
    const roi = (totalIncome / investmentAmount) * 100;

    // Рост стоимости актива (примерно +30% за год для перепродажи)
    let assetGrowth = 0;
    if (strategy === "resale" || strategy === "rent+resale") {
      assetGrowth = investmentAmount * Math.pow(1.3, period) - investmentAmount;
    }

    setResults({
      yearlyIncome: Math.round(yearlyIncome),
      totalIncome: Math.round(totalIncome + assetGrowth),
      totalValue: Math.round(totalValue + assetGrowth),
      roi: Math.round(roi + (assetGrowth / investmentAmount) * 100),
      avgYield,
    });
  };

  useEffect(() => {
    calculateReturns();
  }, [investmentAmount, strategy, period]);

  return (
    <section
      id="calculator"
      className="relative py-24 bg-gradient-to-br from-[#0A2466] to-[#2C2C2C]"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="px-6 py-2 bg-[#00CED1]/20 border border-[#00CED1] rounded-full">
              <p className="text-[#00CED1] font-bold text-sm font-helvetica">
                РАСЧЕТ ДОХОДНОСТИ
              </p>
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-helvetica">
            Рассчитайте доходность
            <br />
            <span className="text-[#00CED1]">по Вашим параметрам</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            Персональный расчет прибыли от инвестиций в курортную недвижимость
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-[#00CED1]/20 rounded-3xl p-8 space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00CED1] to-[#0A2466] rounded-xl flex items-center justify-center">
                <Calculator className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold font-helvetica">
                Параметры расчета
              </h3>
            </div>

            {/* Investment Amount */}
            <div>
              <label className="block text-sm font-medium mb-3">
                Сумма инвестиций
              </label>
              <input
                type="range"
                min="1000000"
                max="50000000"
                step="500000"
                value={investmentAmount}
                onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#00CED1]"
              />
              <div className="flex justify-between mt-2 text-sm text-gray-400">
                <span>1 млн ₽</span>
                <span className="text-[#00CED1] font-bold text-xl">
                  {(investmentAmount / 1000000).toFixed(1)} млн ₽
                </span>
                <span>50 млн ₽</span>
              </div>
            </div>

            {/* Strategy Selection */}
            <div>
              <label className="block text-sm font-medium mb-3">
                Стратегия инвестирования
              </label>
              <div className="space-y-2">
                {Object.entries(strategies).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => setStrategy(key)}
                    className={`w-full p-4 rounded-xl text-left transition-all ${
                      strategy === key
                        ? "bg-gradient-to-r from-[#00CED1] to-[#0A2466] border-2 border-[#00CED1]"
                        : "bg-white/5 border-2 border-white/10 hover:border-white/30"
                    }`}
                  >
                    <div className="font-bold mb-1">{value.name}</div>
                    <div className="text-sm text-gray-300">
                      Доходность: {value.yieldMin}-{value.yieldMax}% годовых
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Investment Period */}
            <div>
              <label className="block text-sm font-medium mb-3">
                Срок инвестирования
              </label>
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                value={period}
                onChange={(e) => setPeriod(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#00CED1]"
              />
              <div className="flex justify-between mt-2 text-sm text-gray-400">
                <span>1 год</span>
                <span className="text-[#00CED1] font-bold text-xl">
                  {period} {period === 1 ? "год" : period < 5 ? "года" : "лет"}
                </span>
                <span>10 лет</span>
              </div>
            </div>
          </div>

          {/* Results */}
          {results && (
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#00CED1]/20 to-[#0A2466]/20 border-2 border-[#00CED1] rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6 font-helvetica">
                  Прогнозируемый результат
                </h3>

                <div className="space-y-6">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <DollarSign className="text-[#00CED1]" size={24} />
                      <span className="text-sm text-gray-400">
                        Годовой доход
                      </span>
                    </div>
                    <p className="text-3xl font-bold text-[#00CED1] font-helvetica">
                      {results.yearlyIncome.toLocaleString("ru")} ₽
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                      {results.avgYield}% среднегодовая доходность
                    </p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <TrendingUp className="text-green-400" size={24} />
                      <span className="text-sm text-gray-400">
                        Общая прибыль
                      </span>
                    </div>
                    <p className="text-3xl font-bold text-green-400 font-helvetica">
                      +{results.totalIncome.toLocaleString("ru")} ₽
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                      За {period}{" "}
                      {period === 1 ? "год" : period < 5 ? "года" : "лет"}
                    </p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <Calendar className="text-yellow-400" size={24} />
                      <span className="text-sm text-gray-400">
                        Итоговая стоимость
                      </span>
                    </div>
                    <p className="text-3xl font-bold text-yellow-400 font-helvetica">
                      {results.totalValue.toLocaleString("ru")} ₽
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                      ROI: +{results.roi}%
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/10 border border-yellow-500/30 rounded-2xl p-6">
                <p className="text-sm text-yellow-200 mb-2">
                  ⚡ Важно: это предварительный расчет
                </p>
                <p className="text-sm text-gray-300">
                  Точный расчет доходности зависит от выбранного объекта,
                  сезонности, стратегии управления и текущей рыночной ситуации.
                </p>
              </div>

              <button
                onClick={() => openForm("Получить индивидуальный расчет")}
                className="w-full px-8 py-5 bg-gradient-to-r from-[#00CED1] to-[#0A2466] rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-[#00CED1]/50 transition-all transform hover:scale-105"
              >
                Получить персональный расчет от эксперта
              </button>
            </div>
          )}
        </div>

        <div className="mt-12 text-center bg-white/5 backdrop-blur-sm border border-[#00CED1]/20 rounded-2xl p-8">
          <p className="text-gray-300 font-inter">
            <span className="text-[#00CED1] font-bold">
              Профессиональный совет:
            </span>{" "}
            Диверсификация портфеля между несколькими объектами позволяет
            снизить риски и увеличить общую доходность. Наши эксперты помогут
            составить оптимальную стратегию под ваши цели.
          </p>
        </div>
      </div>
    </section>
  );
}
