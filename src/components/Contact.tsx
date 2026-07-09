import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useContactForm } from "../hooks/useContactForm";
import contactAsset from "../assets/contact_3d.png";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    isSuccess,
    isError,
    resetMutation,
  } = useContactForm();

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsFormOpen(false);
      resetMutation();
    }
  };

  const handleClose = () => {
    setIsFormOpen(false);
    resetMutation();
  };

  return (
    <section className="py-20 relative overflow-hidden bg-body" id="contact">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-first/5 rounded-full blur-[140px] pointer-events-none opacity-30"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-first/5 rounded-full blur-[140px] pointer-events-none opacity-30"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Horizontal Container Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 border border-slate-200/60 dark:bg-[#090d15]/60 dark:border-white/5 rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden"
        >
          {/* Card Ambient Glows */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-purple-500/10 to-transparent opacity-30 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-linear-to-tr from-blue-500/10 to-transparent opacity-30 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Column 1 (lg:col-span-5): Main Header & Action Buttons */}
            <div className="lg:col-span-5 space-y-6 text-center md:text-start">
              {/* Subtitle with triple line indicator */}
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <div className="flex flex-col gap-0.5">
                  <div className="w-3.5 h-[2px] bg-first"></div>
                  <div className="w-5 h-[2px] bg-first"></div>
                  <div className="w-4 h-[2px] bg-first"></div>
                </div>
                <span className="text-[10px] md:text-xs font-black uppercase tracking-wider text-textLight">
                  {t("contact.subtitle")}
                </span>
              </div>

              {/* Gradient Title */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-title leading-tight">
                {t("contact.title")}
              </h2>

              {/* Subtext description */}
              <p className="text-xs md:text-sm text-textLight leading-relaxed max-w-sm mx-auto md:mx-0 font-medium">
                {t("contact.description")}
              </p>

              {/* Dual Action Buttons */}
              <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
                {/* Primary Contact Button (Triggers Popup Modal) */}
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="flex items-center gap-2 px-6 h-12 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl text-xs font-black uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 cursor-pointer justify-center"
                >
                  <span>{t("contact.talkNow")}</span>
                  <i className="bx bx-paper-plane text-base"></i>
                </button>

                {/* Secondary CV Button */}
                <a
                  href="/Saeed Ramadan Front End (React JS).pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 h-12 border border-slate-200/60 dark:border-white/10 hover:border-first bg-transparent hover:bg-slate-100 dark:hover:bg-white/5 text-title rounded-2xl text-xs font-black uppercase tracking-wider transition-all hover:-translate-y-0.5 active:scale-95 cursor-pointer justify-center"
                >
                  <span>{t("contact.downloadCV")}</span>
                  <i className="bx bx-download text-base"></i>
                </a>
              </div>
            </div>

            {/* Column 2 (lg:col-span-4): Contact Info Stack */}
            <div className="lg:col-span-4 flex flex-col gap-5 pt-6 lg:pt-0 border-t lg:border-t-0 border-slate-200/60 dark:border-white/5 lg:border-l rtl:lg:border-l-0 rtl:lg:border-r lg:border-slate-200/60 lg:dark:border-white/5 lg:pl-8 rtl:lg:pl-0 rtl:lg:pr-8">
              {/* Email Address */}
              <div className="flex items-center gap-3 text-textLight hover:text-first transition-colors font-bold text-xs md:text-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 text-lg shadow-sm">
                  <i className="bx bx-envelope"></i>
                </div>
                <a href="mailto:saeedramadan82@gmail.com" className="select-all">
                  saeedramadan82@gmail.com
                </a>
              </div>

              {/* Phone / Whatsapp */}
              <div className="flex items-center gap-3 text-textLight hover:text-first transition-colors font-bold text-xs md:text-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 text-lg shadow-sm">
                  <i className="bx bxl-whatsapp"></i>
                </div>
                <a href="https://wa.me/201126488442" target="_blank" rel="noreferrer" className="select-all inline-block" dir="ltr">
                  +20 112 648 8442
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 text-textLight font-bold text-xs md:text-sm">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-500 text-lg shadow-sm">
                  <i className="bx bx-map"></i>
                </div>
                <span>{t("contact.locationData")}</span>
              </div>

              {/* Availability Status */}
              <div className="flex items-center gap-3 font-bold text-xs md:text-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 text-lg shadow-sm">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></div>
                </div>
                <span className="text-emerald-600 dark:text-emerald-400">
                  {t("contact.availableForRemote")}
                </span>
              </div>
            </div>

            {/* Column 3 (lg:col-span-3): Floating 3D Artwork */}
            <div className="lg:col-span-3 relative flex justify-center lg:justify-end select-none pt-6 lg:pt-0 border-t lg:border-t-0 border-slate-200/60 dark:border-white/5">
              <img
                src={contactAsset}
                alt="Contact 3D Envelope Artwork"
                className="w-36 md:w-44 object-contain relative z-10 filter drop-shadow-[0_15px_30px_rgba(59,130,246,0.25)] animate-pulse"
                style={{ animationDuration: "5s" }}
              />
              <div className="absolute inset-0 m-auto w-24 h-24 bg-blue-500/10 rounded-full blur-[40px] pointer-events-none"></div>
            </div>

          </div>
        </motion.div>
      </div>

      {/* POPUP EMAIL FORM MODAL */}
      <AnimatePresence>
        {isFormOpen && (
          <div
            onClick={handleOverlayClick}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
          >
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white/95 border border-slate-200/80 dark:bg-[#0c1220]/95 dark:border-white/10 p-6 md:p-8 rounded-3xl shadow-2xl relative overflow-hidden w-full max-w-md"
            >
              {/* Decorative Accent Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-purple-500/10 to-transparent pointer-events-none"></div>

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 rtl:right-auto rtl:left-4 w-8 h-8 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 flex items-center justify-center text-textLight hover:text-first transition-colors cursor-pointer"
              >
                <i className="bx bx-x text-xl"></i>
              </button>

              {isSuccess ? (
                /* Success Message State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6 flex flex-col items-center justify-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-3xl text-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                    <i className="bx bx-check-circle"></i>
                  </div>
                  <h4 className="text-xl font-black text-title">
                    {t("contact.success_title")}
                  </h4>
                  <p className="text-xs md:text-sm text-textLight max-w-xs font-semibold leading-relaxed">
                    {t("contact.success_desc")}
                  </p>
                  <button
                    onClick={handleClose}
                    className="mt-4 px-8 h-11 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl text-xs font-black uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 cursor-pointer flex items-center justify-center"
                  >
                    {t("footer.rights").includes("Saeed") ? "Done" : "موافق"}
                  </button>
                </motion.div>
              ) : (
                /* Form Inputs State */
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-title flex items-center gap-2">
                      <i className="bx bx-envelope text-indigo-500"></i>
                      <span>{t("contact.talkNow")}</span>
                    </h3>
                    <p className="text-xs text-textLight font-medium mt-1">
                      {t("contact.description")}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {isError && (
                      <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold">
                        {t("contact.error_submit")}
                      </div>
                    )}

                    {/* Name Input */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-wider text-textLight">
                        {t("contact.name")}
                      </label>
                      <input
                        type="text"
                        {...register("name")}
                        className={`w-full bg-slate-50 dark:bg-white/5 border px-4 py-3 rounded-2xl text-xs font-semibold text-title outline-none transition-all focus:border-first ${
                          errors.name ? "border-red-500" : "border-slate-200 dark:border-white/5"
                        }`}
                      />
                      {errors.name && (
                        <span className="text-[10px] text-red-400 font-semibold block pt-0.5">
                          {t(errors.name.message || "")}
                        </span>
                      )}
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-wider text-textLight">
                        {t("contact.mail")}
                      </label>
                      <input
                        type="text"
                        {...register("email")}
                        className={`w-full bg-slate-50 dark:bg-white/5 border px-4 py-3 rounded-2xl text-xs font-semibold text-title outline-none transition-all focus:border-first ${
                          errors.email ? "border-red-500" : "border-slate-200 dark:border-white/5"
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[10px] text-red-400 font-semibold block pt-0.5">
                          {t(errors.email.message || "")}
                        </span>
                      )}
                    </div>

                    {/* Message TextArea */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-wider text-textLight">
                        {t("contact.project")}
                      </label>
                      <textarea
                        {...register("project")}
                        rows={4}
                        className={`w-full bg-slate-50 dark:bg-white/5 border px-4 py-3 rounded-2xl text-xs font-semibold text-title outline-none transition-all focus:border-first resize-none ${
                          errors.project ? "border-red-500" : "border-slate-200 dark:border-white/5"
                        }`}
                      ></textarea>
                      {errors.project && (
                        <span className="text-[10px] text-red-400 font-semibold block pt-0.5">
                          {t(errors.project.message || "")}
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 px-6 h-12 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl text-xs font-black uppercase tracking-wider transition-all shadow-md disabled:opacity-50 disabled:scale-100 disabled:pointer-events-none cursor-pointer"
                      >
                        {isSubmitting ? (
                          <span>{t("contact.sending")}</span>
                        ) : (
                          <>
                            <span>{t("contact.send")}</span>
                            <i className="bx bx-paper-plane text-sm"></i>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
