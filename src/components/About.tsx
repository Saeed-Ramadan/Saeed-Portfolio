import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionTitle from "./common/SectionTitle";
import SpotlightCard from "./common/SpotlightCard";
import DevTerminal from "./common/DevTerminal";
import { appleFadeUp, appleScaleReveal } from "../utils/motion";

// RATIONALE: About section implemented as a high-density Bento Grid with Apple-style orchestrated spring reveals.
const About: React.FC = () => {
  const { t } = useTranslation();

  const stats = [
    {
      value: t("about.stats.expValue"),
      label: t("about.stats.expLabel"),
      icon: "bx-time-five",
      color: "from-blue-500 to-indigo-500",
    },
    {
      value: t("about.stats.projectsValue"),
      label: t("about.stats.projectsLabel"),
      icon: "bx-briefcase-alt-2",
      color: "from-indigo-500 to-purple-500",
    },
    {
      value: t("about.stats.satisfactionValue"),
      label: t("about.stats.satisfactionLabel"),
      icon: "bx-check-double",
      color: "from-emerald-500 to-teal-500",
    },
    {
      value: t("about.stats.gradeValue"),
      label: t("about.stats.gradeLabel"),
      icon: "bxs-graduation",
      color: "from-amber-500 to-orange-500",
    },
  ];

  const pillars = [
    {
      title: t("about.pillars.p1_title"),
      desc: t("about.pillars.p1_desc"),
      icon: "bx-layer",
      accent: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    },
    {
      title: t("about.pillars.p2_title"),
      desc: t("about.pillars.p2_desc"),
      icon: "bx-tachometer",
      accent: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      title: t("about.pillars.p3_title"),
      desc: t("about.pillars.p3_desc"),
      icon: "bx-broadcast",
      accent: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-body" id="about">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionTitle
          badge={t("about.subtitle")}
          title={t("about.title")}
          subtitle={t("about.role")}
        />

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-10">
          {/* Main Narrative Card (lg:col-span-7) */}
          <motion.div
            variants={appleFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-7"
          >
            <SpotlightCard className="p-8 h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-5">
                  <i className="bx bx-terminal text-sm" />
                  <span>Front-End Architecture</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-title mb-4 leading-snug">
                  {t("about.title")}
                </h3>

                <p className="text-text text-sm md:text-base leading-relaxed mb-6 font-normal">
                  {t("about.description")}
                </p>
              </div>

              {/* Core Philosophy Footnote */}
              <div className="pt-6 border-t border-slate-200/80 dark:border-white/[0.08] flex items-center gap-3 text-xs text-textLight">
                <i className="bx bx-check-shield text-indigo-500 text-lg shrink-0" />
                <span>
                  Adheres strictly to Spec-Driven Development (SDD), Type Safety, and Responsive Design.
                </span>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Stats Grid (lg:col-span-5) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                variants={appleScaleReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.06 }}
              >
                <SpotlightCard className="p-5 h-full flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-title text-base">
                      <i className={`bx ${stat.icon}`} />
                    </span>
                  </div>
                  <div>
                    <span
                      className={`block text-2xl md:text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                      dir="ltr"
                    >
                      {stat.value}
                    </span>
                    <span className="text-xs font-medium text-textLight mt-1 block leading-tight">
                      {stat.label}
                    </span>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>

          {/* 3 Engineering Pillars (Full width 3 columns) */}
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              variants={appleFadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 + idx * 0.08 }}
              className="lg:col-span-4"
            >
              <SpotlightCard className="p-6 h-full flex flex-col justify-between">
                <div>
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center text-xl mb-4 ${pillar.accent}`}
                  >
                    <i className={`bx ${pillar.icon}`} />
                  </div>
                  <h4 className="text-base font-bold text-title mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs md:text-sm text-textLight leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Interactive Dev Terminal Showcase */}
        <motion.div
          variants={appleFadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-6"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-textLight">
              Interactive Dev Console
            </h4>
          </div>
          <DevTerminal />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
