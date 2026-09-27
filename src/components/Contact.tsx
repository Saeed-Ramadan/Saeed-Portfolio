import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionTitle from "./common/SectionTitle";
import SpotlightCard from "./common/SpotlightCard";
import { useContactForm } from "../hooks/useContactForm";
import { useClipboard } from "../hooks/useClipboard";

// RATIONALE: Contact component handles direct contact information and messaging.
// Form validation and state management are extracted into useContactForm and useClipboard.
const Contact: React.FC = () => {
  const { t } = useTranslation();
  const { copy, isCopied } = useClipboard();

  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    isSuccess,
    isError,
    resetMutation,
  } = useContactForm();

  const contactItems = [
    {
      id: "email",
      labelKey: "contact.email",
      value: "saeedramadan82@gmail.com",
      action: "copy",
      icon: "bx-envelope",
      color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    },
    {
      id: "phonePrimary",
      labelKey: "contact.phonePrimary",
      noteKey: "contact.phonePrimaryNote",
      value: "+201032426483",
      telLink: "tel:+201032426483",
      waLink: "https://wa.me/201032426483",
      icon: "bx-phone-call",
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
      isPrimaryCall: true,
    },
    {
      id: "phoneSecondary",
      labelKey: "contact.phoneSecondary",
      noteKey: "contact.phoneSecondaryNote",
      value: "+201126488442",
      telLink: "tel:+201126488442",
      waLink: "https://wa.me/201126488442",
      icon: "bxl-whatsapp",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      isPrimaryCall: false,
    },
    {
      id: "location",
      labelKey: "contact.location",
      value: t("contact.locationVal"),
      action: "none",
      icon: "bx-map-pin",
      color: "text-rose-400 bg-rose-500/10 border-rose-500/20",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-body" id="contact">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionTitle
          badge={t("contact.badge")}
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Communication Cards (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-title mb-4">
              {t("contact.directContact")}
            </h3>

            {contactItems.map((item) => (
              <SpotlightCard key={item.id} className="p-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-start sm:items-center gap-3.5 min-w-0">
                    <div
                      className={`w-11 h-11 rounded-xl border flex items-center justify-center text-xl shrink-0 mt-0.5 sm:mt-0 ${item.color}`}
                    >
                      <i className={`bx ${item.icon}`} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-[11px] font-semibold text-textLight block">
                          {t(item.labelKey)}
                        </span>
                        {item.noteKey && (
                          <span
                            className={`text-[9.5px] font-bold px-1.5 py-0.5 rounded ${
                              item.isPrimaryCall
                                ? "bg-cyan-500/15 text-cyan-500 dark:text-cyan-400 border border-cyan-500/25"
                                : "bg-emerald-500/15 text-emerald-500 dark:text-emerald-400 border border-emerald-500/25"
                            }`}
                          >
                            {t(item.noteKey)}
                          </span>
                        )}
                      </div>
                      <p className="text-xs md:text-sm font-bold text-title truncate mt-0.5 font-code">
                        {item.value}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-auto">
                    {item.telLink && (
                      <a
                        href={item.telLink}
                        className="px-2.5 py-1.5 rounded-lg border border-cyan-500/30 hover:border-cyan-500 text-xs font-semibold text-cyan-500 dark:text-cyan-400 hover:bg-cyan-500/10 transition-all cursor-pointer flex items-center gap-1"
                        title={t("contact.call")}
                      >
                        <i className="bx bx-phone-call text-sm" />
                        <span className="hidden sm:inline">{t("contact.call")}</span>
                      </a>
                    )}
                    {item.waLink && (
                      <a
                        href={item.waLink}
                        target="_blank"
                        rel="noreferrer"
                        className="px-2.5 py-1.5 rounded-lg border border-emerald-500/30 hover:border-emerald-500 text-xs font-semibold text-emerald-500 dark:text-emerald-400 hover:bg-emerald-500/10 transition-all cursor-pointer flex items-center gap-1"
                        title={t("contact.chatWA")}
                      >
                        <i className="bx bxl-whatsapp text-sm" />
                        <span className="hidden sm:inline">{t("contact.chatWA")}</span>
                      </a>
                    )}
                    {item.action === "copy" && (
                      <button
                        onClick={() => copy(item.value)}
                        className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 hover:border-indigo-500/40 text-xs font-semibold text-textLight hover:text-title bg-slate-100 dark:bg-white/[0.04] transition-all cursor-pointer shrink-0"
                      >
                        {isCopied(item.value) ? t("contact.copied") : t("contact.copy")}
                      </button>
                    )}
                    {(item.id === "phonePrimary" || item.id === "phoneSecondary") && (
                      <button
                        onClick={() => copy(item.value)}
                        className="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 hover:border-indigo-500/40 text-xs font-semibold text-textLight hover:text-title bg-slate-100 dark:bg-white/[0.04] transition-all cursor-pointer"
                        title={t("contact.copy")}
                      >
                        {isCopied(item.value) ? t("contact.copied") : t("contact.copy")}
                      </button>
                    )}
                  </div>
                </div>
              </SpotlightCard>
            ))}

            {/* Direct Communication Action Banner */}
            <SpotlightCard className="p-5 bg-gradient-to-r from-cyan-500/10 via-emerald-500/10 to-teal-500/10 border-cyan-500/20">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-xs font-bold text-cyan-400 flex items-center gap-1.5">
                    <i className="bx bx-phone-call text-base" />
                    <span>{t("contact.quickChatBannerTitle")}</span>
                  </h4>
                  <p className="text-[11px] text-textLight mt-0.5">
                    {t("contact.quickChatBannerDesc")}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href="tel:+201032426483"
                    className="px-3.5 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-all shadow-xs inline-flex items-center gap-1.5"
                    title="Call 01032426483"
                  >
                    <i className="bx bx-phone-call text-sm" />
                    <span>01032426483</span>
                  </a>
                  <a
                    href="https://wa.me/201126488442"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-xs inline-flex items-center gap-1.5"
                    title="WhatsApp 01126488442 (Preferred for WhatsApp)"
                  >
                    <i className="bx bxl-whatsapp text-sm" />
                    <span>01126488442</span>
                  </a>
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* Quick Contact Form (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <SpotlightCard className="p-6 md:p-8">
              <h3 className="text-lg font-bold text-title mb-1">
                {t("contact.quickMessage")}
              </h3>
              <p className="text-xs text-textLight mb-6">
                {t("contact.subtitle")}
              </p>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10 space-y-3"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-3xl mx-auto">
                    <i className="bx bx-check-circle" />
                  </div>
                  <h4 className="text-lg font-bold text-title">
                    {t("contact.success_title")}
                  </h4>
                  <p className="text-xs text-textLight max-w-sm mx-auto">
                    {t("contact.success_desc")}
                  </p>
                  <button
                    onClick={() => resetMutation()}
                    className="mt-4 px-4 py-2 rounded-lg bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-500 transition-colors"
                  >
                    {t("contact.send_another")}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-semibold text-textLight mb-1.5">
                      {t("contact.name")}
                    </label>
                    <input
                      type="text"
                      {...register("name")}
                      placeholder={t("contact.name")}
                      className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-white/[0.02] text-sm text-title placeholder-textLight/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 transition-all ${
                        errors.name
                          ? "border-rose-500"
                          : "border-slate-200 dark:border-white/10"
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[11px] text-rose-500 mt-1 block">
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-semibold text-textLight mb-1.5">
                      {t("contact.emailField")}
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      placeholder="you@example.com"
                      className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-white/[0.02] text-sm text-title placeholder-textLight/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 transition-all ${
                        errors.email
                          ? "border-rose-500"
                          : "border-slate-200 dark:border-white/10"
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-rose-500 mt-1 block">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-xs font-semibold text-textLight mb-1.5">
                      {t("contact.project")}
                    </label>
                    <textarea
                      rows={4}
                      {...register("project")}
                      placeholder={t("contact.project")}
                      className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-white/[0.02] text-sm text-title placeholder-textLight/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 transition-all resize-none ${
                        errors.project
                          ? "border-rose-500"
                          : "border-slate-200 dark:border-white/10"
                      }`}
                    />
                    {errors.project && (
                      <span className="text-[11px] text-rose-500 mt-1 block">
                        {errors.project.message}
                      </span>
                    )}
                  </div>

                  {isError && (
                    <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-xs text-rose-400">
                      {t("contact.error_submit")}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-indigo-500/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <i className="bx bx-loader-alt animate-spin text-base" />
                        <span>{t("contact.sending")}</span>
                      </>
                    ) : (
                      <>
                        <span>{t("contact.send")}</span>
                        <i className="bx bx-paper-plane text-base" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
