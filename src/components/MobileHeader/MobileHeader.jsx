"use client";

import { Phone } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher/LanguageSwitcher";

export function MobileHeader({ onOpenMenu, onOpenForm }) {
  return (
    <div className="flex items-center gap-2 lg:hidden">
      {/* Language switcher — compact on mobile */}
      <LanguageSwitcher variant="header" />

      <a
        href="tel:+70000000000"
        className="flex items-center gap-1.5 text-white hover:text-[#00CED1] transition-colors"
      >
        <Phone size={13} className="text-[#00CED1]" />
        <span className="text-[0.68rem] font-medium">8(000)-000-00-00</span>
      </a>
      {/* Бургер */}
      <button
        onClick={onOpenMenu}
        className="flex flex-col items-end gap-[5px] p-2 rounded-xl border border-[#00CED1]/30 hover:border-[#00CED1]/60 hover:bg-[#00CED1]/10 transition-all duration-200"
        aria-label="Открыть меню"
      >
        <span className="block w-5 h-[1.5px] bg-white rounded-full" />
        <span className="block w-5 h-[1.5px] bg-[#00CED1] rounded-full" />
        <span className="block w-3 h-[1.5px] bg-white/50 rounded-full" />
      </button>
    </div>
  );
}
