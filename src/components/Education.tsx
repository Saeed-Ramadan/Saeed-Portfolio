import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import educationAsset from "../assets/education_3d.png";

const Education: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 relative overflow-hidden bg-body" id="education">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-first/5 rounded-full blur-[140px] pointer-events-none opacity-30"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-first/5 rounded-full blur-[140px] pointer-events-none opacity-30"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Header with Side-by-Side Content */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-8 items-center mb-12">
          {/* Left: Titles & Desc */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-start"
          >
            {/* Subtitle with line and dot */}
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <i className="bx bx-radio-circle-marked text-xl text-first"></i>
              <span className="text-[10px] md:text-xs font-black uppercase tracking-wider text-textLight">
                {t("education.subtitle")}
              </span>
              <div className="w-12 h-[2px] bg-linear-to-r from-purple-500 to-indigo-500"></div>
            </div>

            {/* Main Gradient Title */}
            <h2 className="text-3xl md:text-5xl font-black text-title mb-4">
              {t("education.titlePart1")}{" "}
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
                {t("education.titlePart2")}
              </span>
            </h2>

            {/* Subtext description */}
            <p className="text-sm md:text-base text-textLight leading-relaxed max-w-xl mx-auto md:mx-0">
              {t("education.desc")}
            </p>
          </motion.div>

          {/* Right: 3D Graduation Cap Asset */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative flex justify-center md:justify-end select-none"
          >
            <img
              src={educationAsset}
              alt="Education 3D Artwork"
              className="w-44 md:w-56 object-contain relative z-10 filter drop-shadow-[0_15px_30px_rgba(99,102,241,0.2)] animate-pulse"
              style={{ animationDuration: "5s" }}
            />
            <div className="absolute inset-0 m-auto w-32 h-32 bg-purple-500/10 rounded-full blur-[45px] pointer-events-none"></div>
          </motion.div>
        </div>

        {/* Lower Main Container Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 border border-slate-200/60 dark:bg-[#090d15]/60 dark:border-white/5 rounded-3xl p-6 md:p-10 shadow-xl relative overflow-hidden"
        >
          {/* Card Ambient Glows */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-purple-500/10 to-transparent opacity-30 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-linear-to-tr from-cyan-500/10 to-transparent opacity-30 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
            
            {/* Left Column (lg:col-span-8): Timeline & Info */}
            <div className="lg:col-span-8 flex gap-6 items-start">
              {/* Timeline Graphic Indicator */}
              <div className="hidden sm:flex flex-col items-center self-stretch">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-500 shadow-sm">
                  <i className="bx bxs-graduation text-2xl"></i>
                </div>
                <div className="w-[2px] bg-indigo-500/20 flex-1 min-h-[140px] my-2 relative">
                  <div className="absolute top-[25%] -translate-x-1/2 left-1/2 w-2.5 h-2.5 rounded-full bg-indigo-500 border border-body shadow-[0_0_8px_rgba(99,102,241,0.8)]"></div>
                  <div className="absolute top-[58%] -translate-x-1/2 left-1/2 w-2.5 h-2.5 rounded-full bg-indigo-500 border border-body shadow-[0_0_8px_rgba(99,102,241,0.8)]"></div>
                  <div className="absolute top-[90%] -translate-x-1/2 left-1/2 w-2.5 h-2.5 rounded-full bg-indigo-500 border border-body shadow-[0_0_8px_rgba(99,102,241,0.8)]"></div>
                </div>
              </div>

              {/* Academic Details Content */}
              <div className="flex-1 space-y-6">
                <div>
                  <span className="text-xs md:text-sm font-black text-indigo-500 block mb-1">
                    2020 — 2024
                  </span>
                  <h3 className="text-xl md:text-3xl font-black text-title leading-tight mb-4">
                    {t("education.degree")}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm font-black text-indigo-500/90 dark:text-indigo-400">
                      <i className="bx bx-book-open text-lg"></i>
                      <span>{t("education.faculty")}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-textLight">
                      <i className="bx bx-buildings text-lg"></i>
                      <span>{t("education.university")}</span>
                    </div>
                  </div>
                </div>

                {/* Key Skills / Subjects Badges */}
                <div className="flex flex-wrap gap-2 pt-5 border-t border-slate-200/60 dark:border-white/5">
                  {[
                    { icon: "bx-code-alt", text: t("education.tag1") },
                    { icon: "bx-brain", text: t("education.tag2") },
                    { icon: "bx-data", text: t("education.tag3") },
                  ].map((tag, tagIdx) => (
                    <div
                      key={tagIdx}
                      className="flex items-center gap-2 bg-slate-100/50 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 px-4 py-2 rounded-xl text-[10px] md:text-xs font-bold text-textLight select-none"
                    >
                      <i className={`bx ${tag.icon} text-indigo-500 text-sm`}></i>
                      <span>{tag.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column (lg:col-span-4): Stats Metrics Vertical Grid */}
            <div className="lg:col-span-4 lg:border-l rtl:lg:border-l-0 rtl:lg:border-r lg:border-slate-200/60 lg:dark:border-white/5 lg:pl-8 rtl:lg:pl-0 rtl:lg:pr-8 border-t border-slate-200/60 dark:border-white/5 pt-8 lg:pt-0 lg:border-t-0 flex flex-col gap-6 justify-center">
              {/* GPA Metric */}
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-baseline gap-1" dir="ltr">
                  <span className="text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                    3.1
                  </span>
                  <span className="text-xs font-bold text-textLight">/ 4.0</span>
                </div>
                <span className="text-[10px] md:text-xs font-black uppercase tracking-wider text-textLight mt-1">
                  {t("education.gpa")}
                </span>
              </div>

              {/* Graduation Year Metric */}
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  2024
                </span>
                <span className="text-[10px] md:text-xs font-black uppercase tracking-wider text-textLight mt-1 text-center lg:text-start">
                  {t("education.graduated")}
                </span>
              </div>

              {/* Graduation Project Metric */}
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  A+
                </span>
                <span className="text-[10px] md:text-xs font-black uppercase tracking-wider text-textLight mt-1">
                  {t("education.project")}
                </span>
                
                {/* Grade Badge */}
                <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 rounded-lg text-[10px] font-black uppercase mt-2 w-fit select-none">
                  <i className="bx bxs-star text-xs animate-pulse"></i>
                  <span>{t("education.excellent")}</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
