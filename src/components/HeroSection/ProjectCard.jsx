export function ProjectCard({ project }) {
  return (
    <div className="h-full bg-gradient-to-br from-white to-gray-50 text-[#2C2C2C] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#00CED1]/30">
      {/* Фото */}
      <div className="relative h-[52%] overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700"
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
              <img key={idx} src={logo} alt="" className="h-5 object-contain" />
            ))}
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5 bg-gradient-to-t from-black/80 to-transparent">
          <h3 className="text-base lg:text-xl font-bold text-white font-helvetica drop-shadow">
            {project.name}
          </h3>
          {project.subtitle && (
            <p className="text-[0.6rem] text-white/85 font-inter">
              {project.subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Инфо */}
      <div className="h-[48%] p-3 lg:p-4 bg-white space-y-2">
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-gradient-to-br from-[#0A2466]/5 to-[#00CED1]/5 rounded-xl p-2.5 border border-[#00CED1]/20">
            <p className="text-[0.58rem] text-gray-600 mb-0.5">
              Цена за&nbsp;м²
            </p>
            <p className="text-xs lg:text-sm font-bold text-[#0A2466] font-helvetica">
              от&nbsp;{project.pricePerSqm}&nbsp;₽
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#00CED1]/10 to-[#00CED1]/5 rounded-xl p-2.5 border border-[#00CED1]/30">
            <p className="text-[0.58rem] text-gray-600 mb-0.5">Площадь, м²</p>
            <p className="text-xs lg:text-sm font-bold text-[#00CED1] font-helvetica">
              {project.areaFrom}–{project.areaTo}
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-2.5 border border-purple-200">
          <p className="text-[0.58rem] text-gray-600 mb-0.5">Порог входа</p>
          <p className="text-sm lg:text-base font-bold text-purple-700 text-center font-helvetica">
            {project.entryThreshold}&nbsp;₽
          </p>
        </div>
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-2.5 border border-green-200">
          <p className="text-[0.58rem] text-gray-600 mb-0.5">Доходность</p>
          <p className="text-sm lg:text-base font-bold text-green-700 text-center font-helvetica">
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
  );
}
