"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/data/translations";

export default function LeadForm({
  isOpen,
  onClose,
  formType = "Консультация",
  showMessenger = false,
  showMessage = false,
}) {
  const { lang } = useLang();
  const tr = t[lang].form;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    messenger: "WhatsApp",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [clientId, setClientId] = useState("");

  useEffect(() => {
    if (!isOpen) return;
    if (typeof window === "undefined") return;

    const tryGetClientId = () => {
      if (typeof window.ym === "function") {
        window.ym(108452415, "getClientID", (id) => {
          if (id) setClientId(String(id));
        });
      }
    };

    tryGetClientId();
    const timer = setTimeout(tryGetClientId, 1500);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const getUTMParams = () => {
    if (typeof window === "undefined") return {};
    const params = new URLSearchParams(window.location.search);
    return {
      utmSource: params.get("utm_source"),
      utmMedium: params.get("utm_medium"),
      utmCampaign: params.get("utm_campaign"),
      utmContent: params.get("utm_content"),
      utmTerm: params.get("utm_term"),
    };
  };

  const formatPhone = (value) => {
    let digits = value.replace(/\D/g, "");
    if (digits === "") return "";
    if (digits.startsWith("8")) digits = "7" + digits.slice(1);
    if (digits.startsWith("789")) digits = "7" + digits.slice(2);
    if (!digits.startsWith("7")) digits = "7" + digits;
    digits = digits.slice(0, 11);
    let formatted = "+7";
    if (digits.length > 1) formatted += "(" + digits.substring(1, 4);
    if (digits.length >= 5) formatted += ")-" + digits.substring(4, 7);
    if (digits.length >= 8) formatted += "-" + digits.substring(7, 9);
    if (digits.length >= 10) formatted += "-" + digits.substring(9, 11);
    return formatted;
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (value === "" || value === "+") {
      setFormData({ ...formData, phone: "" });
      return;
    }
    setFormData({ ...formData, phone: formatPhone(value) });
  };

  const handlePhoneFocus = () => {
    if (!formData.phone) setFormData({ ...formData, phone: "+7" });
  };

  const handlePhoneBlur = () => {
    if (formData.phone === "+7" || formData.phone === "+7(")
      setFormData({ ...formData, phone: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const utmParams = getUTMParams();
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, formType, clientId, ...utmParams }),
      });
      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          messenger: "WhatsApp",
          message: "",
        });
        setTimeout(() => {
          onClose();
          setSubmitStatus(null);
        }, 2000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        style={{ maxHeight: "calc(100vh - 2rem)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0A2466] via-[#00CED1] to-[#0A2466] z-10 flex-shrink-0" />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <X size={20} className="text-[#2C2C2C]" />
        </button>

        <div className="overflow-y-auto flex-1 p-8 pt-9">
          <h3 className="text-2xl font-bold text-[#0A2466] mb-2 font-helvetica">
            {formType}
          </h3>
          <p className="text-[#2C2C2C] mb-6 font-inter">{tr.subtitle}</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                {tr.nameLabel}
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CED1] focus:border-transparent text-[#2C2C2C] placeholder:text-[#2C2C2C]/50"
                placeholder={tr.namePlaceholder}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                {tr.phoneLabel}
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={handlePhoneChange}
                onFocus={handlePhoneFocus}
                onBlur={handlePhoneBlur}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CED1] focus:border-transparent text-[#2C2C2C] placeholder:text-[#2C2C2C]/50"
                placeholder={tr.phonePlaceholder}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                {tr.emailLabel}
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CED1] focus:border-transparent text-[#2C2C2C] placeholder:text-[#2C2C2C]/50"
                placeholder={tr.emailPlaceholder}
              />
            </div>

            {showMessenger && (
              <div>
                <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                  {tr.messengerLabel}
                </label>
                <select
                  value={formData.messenger}
                  onChange={(e) =>
                    setFormData({ ...formData, messenger: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CED1] focus:border-transparent text-[#2C2C2C]"
                >
                  <option value="WhatsApp">WhatsApp</option>
                  <option value="Telegram">Telegram</option>
                  <option value="MAX">MAX</option>
                </select>
              </div>
            )}

            {showMessage && (
              <div>
                <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                  {tr.messageLabel}
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CED1] focus:border-transparent resize-none text-[#2C2C2C] placeholder:text-[#2C2C2C]/50"
                  placeholder={tr.messagePlaceholder}
                />
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-[#00CED1] to-[#0A2466] text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 font-helvetica"
            >
              {isSubmitting ? tr.submitting : tr.submit}
            </button>

            {submitStatus === "success" && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center">
                {tr.successMsg}
              </div>
            )}
            {submitStatus === "error" && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-center">
                {tr.errorMsg}
              </div>
            )}

            <p className="text-xs text-gray-500 text-center">{tr.privacy}</p>

            <button
              type="button"
              onClick={onClose}
              className="w-full py-3 border-2 border-gray-200 rounded-lg text-sm font-medium text-gray-500 hover:border-gray-400 hover:text-gray-700 transition-all duration-200"
            >
              {tr.close}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
