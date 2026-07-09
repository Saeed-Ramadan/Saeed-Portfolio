import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

interface TechTag {
  name: string;
  icon?: string;
  colorClass?: string;
}

interface ExpItem {
  key: string;
  category: "work" | "teaching";
  current: boolean;
  color: string;
  bg: string;
  border: string;
  durationKey: string;
  tagsTitleKey: string;
  tags: TechTag[];
}

const expItems: ExpItem[] = [
  {
    key: "exp1",
    category: "work",
    current: true,
    color: "text-violet-500 dark:text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    durationKey: "current",
    tagsTitleKey: "keyTech",
    tags: [
      { name: "React JS", icon: "bxl-react", colorClass: "text-[#61DAFB]" },
      { name: "Tailwind CSS", icon: "bxl-tailwind-css", colorClass: "text-[#06B6D4]" },
      { name: "Zustand" },
      { name: "React Query" },
      { name: "Firebase", icon: "bxl-firebase", colorClass: "text-[#FFCA28]" },
      { name: "Laravel APIs" },
    ],
  },
  {
    key: "exp2",
    category: "work",
    current: false,
    color: "text-indigo-500 dark:text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    durationKey: "durationAhdaf",
    tagsTitleKey: "keyTech",
    tags: [
      { name: "React 19", icon: "bxl-react", colorClass: "text-[#61DAFB]" },
      { name: "Tailwind CSS v4", icon: "bxl-tailwind-css", colorClass: "text-[#06B6D4]" },
      { name: "Pollinations AI" },
      { name: "E-Commerce" },
      { name: "REST APIs" },
    ],
  },
  {
    key: "exp3",
    category: "teaching",
    current: true,
    color: "text-sky-500 dark:text-sky-400",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
    durationKey: "current",
    tagsTitleKey: "subjects",
    tags: [
      { name: "Programming" },
      { name: "Logic Building" },
      { name: "E-Youth" },
      { name: "MCIT Egypt" },
    ],
  },
  {
    key: "exp4",
    category: "teaching",
    current: true,
    color: "text-cyan-500 dark:text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    durationKey: "current",
    tagsTitleKey: "subjects",
    tags: [
      { name: "React 19", icon: "bxl-react", colorClass: "text-[#61DAFB]" },
      { name: "Component Arch" },
      { name: "State & Hooks" },
      { name: "API Integration" },
    ],
  },
  {
    key: "exp5",
    category: "teaching",
    current: false,
    color: "text-emerald-500 dark:text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    durationKey: "durationTariq",
    tagsTitleKey: "subjects",
    tags: [
      { name: "HTML & CSS", icon: "bxl-html5", colorClass: "text-[#E34F26]" },
      { name: "React JS", icon: "bxl-react", colorClass: "text-[#61DAFB]" },
      { name: "Python", icon: "bxl-python", colorClass: "text-[#3776AB]" },
      { name: "Mentorship" },
    ],
  },
  {
    key: "exp6",
    category: "teaching",
    current: false,
    color: "text-teal-500 dark:text-teal-400",
    bg: "bg-teal-500/10",
    border: "border-teal-500/20",
    durationKey: "yearsMonths",
    tagsTitleKey: "subjects",
    tags: [
      { name: "Web Dev" },
      { name: "Scratch" },
      { name: "Problem Solving" },
      { name: "Debugging" },
    ],
  },
  {
    key: "exp7",
    category: "teaching",
    current: true,
    color: "text-pink-500 dark:text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    durationKey: "current",
    tagsTitleKey: "subjects",
    tags: [
      { name: "Programming" },
      { name: "Logic Building" },
      { name: "Mentorship" },
    ],
  },
  {
    key: "exp8",
    category: "teaching",
    current: false,
    color: "text-rose-500 dark:text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
    durationKey: "durationFekra",
    tagsTitleKey: "subjects",
    tags: [
      { name: "Web Dev" },
      { name: "Logic Building" },
      { name: "Frontend" },
    ],
  },
  {
    key: "exp9",
    category: "teaching",
    current: true,
    color: "text-orange-500 dark:text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    durationKey: "current",
    tagsTitleKey: "subjects",
    tags: [
      { name: "Programming" },
      { name: "Mentorship" },
      { name: "Web Dev" },
    ],
  },
];

const actItems = [
  {
    num: 1,
    icon: "bx-crown",
    color: "text-amber-500 dark:text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  {
    num: 2,
    icon: "bx-trophy",
    color: "text-orange-500 dark:text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
  },
  {
    num: 3,
    icon: "bx-group",
    color: "text-cyan-500 dark:text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
  {
    num: 4,
    icon: "bx-calendar-event",
    color: "text-rose-500 dark:text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
  },
];

const Qualification: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [toggleState, setToggleState] = useState<number>(1);
  const isAr = i18n.language === "ar";

  const workItems = expItems.filter((item) => item.category === "work");
  const teachingItems = expItems.filter((item) => item.category === "teaching");

  return (
    <section
      className="py-20 relative overflow-hidden bg-body"
      id="qualification"
    >
      {/* Decorative Background Glows */}
      <div className="absolute top-1/3 -left-20 w-96 h-96 bg-first/5 rounded-full blur-[140px] pointer-events-none opacity-30"></div>
      <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-first/5 rounded-full blur-[140px] pointer-events-none opacity-30"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-first font-black tracking-widest uppercase text-xs mb-3 block">
            {t("qualification.subtitle")}
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-title leading-tight">
            {t("qualification.title")}
          </h2>
          <p className="text-xs md:text-sm text-textLight max-w-lg mx-auto mt-3 font-medium leading-relaxed">
            {t("qualification.desc")}
          </p>
        </motion.div>

        {/* Tab Toggle Bar */}
        <div className="flex justify-center gap-2 mb-16 bg-slate-100/50 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 p-1.5 rounded-2xl w-fit mx-auto backdrop-blur-md">
          {[
            {
              id: 1,
              icon: "bx-briefcase",
              label: t("qualification.experience"),
            },
            {
              id: 3,
              icon: "bx-star",
              label: t("qualification.activities"),
            },
          ].map((tab) => {
            const isActive = toggleState === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setToggleState(tab.id)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-linear-to-r from-blue-600/20 to-purple-600/20 border border-purple-500/20 text-first shadow-md"
                    : "text-textLight hover:text-first border border-transparent"
                }`}
              >
                <i className={`bx ${tab.icon} text-base`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Panels */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            
            {/* ── PANEL 1: EXPERIENCE ── */}
            {toggleState === 1 && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                {/* Continuous Timeline Vertical Line */}
                <div className="absolute left-[19px] rtl:left-auto rtl:right-[19px] top-6 bottom-6 w-[2px] bg-linear-to-b from-purple-500 via-blue-500 to-transparent pointer-events-none" />

                {/* Group 1: Professional Experience */}
                <div className="relative pl-12 rtl:pl-0 rtl:pr-12 pb-12">
                  {/* Timeline Header Circle Icon */}
                  <div className="absolute -left-5 rtl:-left-auto rtl:-right-5 top-0 w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-500 z-10 shadow-sm">
                    <i className="bx bx-code-alt text-lg"></i>
                  </div>
                  
                  {/* Group Title */}
                  <div className="mb-6 text-start">
                    <span className="text-[10px] font-black uppercase tracking-wider text-purple-500">
                      {t("qualification.group_work_sub")}
                    </span>
                    <h3 className="text-lg md:text-xl font-black text-title mt-1">
                      {t("qualification.group_work_title")}
                    </h3>
                  </div>

                  {/* Cards Stack */}
                  <div className="space-y-6">
                    {workItems.map((item, idx) => (
                      <motion.div
                        key={item.key}
                        initial={{ opacity: 0, x: isAr ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="bg-white/80 border border-slate-200/60 dark:bg-[#090d15]/60 dark:border-white/5 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300 group"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                          {/* Col 1: Date & Duration */}
                          <div className="md:col-span-3 flex flex-col text-start">
                            <span className="text-xs md:text-sm font-black text-purple-600 dark:text-purple-400">
                              {t(`qualification.${item.key}.date`)}
                            </span>
                            <span className="mt-2 px-2.5 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-[9px] font-black text-purple-600 dark:text-purple-400 uppercase tracking-widest w-fit">
                              {t(`qualification.${item.durationKey}`)}
                            </span>
                          </div>

                          {/* Col 2: Info (Title, Company, Desc) */}
                          <div className="md:col-span-5 flex flex-col text-start">
                            <h4 className="text-base md:text-lg font-black text-title leading-snug">
                              {t(`qualification.${item.key}.title`)}
                            </h4>
                            <span className="text-xs md:text-sm font-bold text-purple-500 mt-1">
                              {t(`qualification.${item.key}.company`)}
                            </span>
                            <p className="text-xs md:text-sm text-textLight font-medium mt-3 leading-relaxed">
                              {t(`qualification.${item.key}.desc`)}
                            </p>
                          </div>

                          {/* Col 3: Tech Tags */}
                          <div className="md:col-span-4 flex flex-col text-start border-t md:border-t-0 border-slate-100 dark:border-white/5 pt-4 md:pt-0">
                            <span className="text-[10px] font-black uppercase tracking-wider text-purple-500 mb-3 block">
                              {t(`qualification.${item.tagsTitleKey}`)}
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {item.tags.map((tag, tIdx) => (
                                <div
                                  key={tIdx}
                                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 text-[10px] font-black text-textLight select-none transition-colors group-hover:border-purple-500/20"
                                >
                                  {tag.icon && (
                                    <i className={`bx ${tag.icon} ${tag.colorClass} text-sm`} />
                                  )}
                                  <span>{tag.name}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Group 2: Teaching Experience */}
                <div className="relative pl-12 rtl:pl-0 rtl:pr-12">
                  {/* Timeline Header Circle Icon */}
                  <div className="absolute -left-5 rtl:-left-auto rtl:-right-5 top-0 w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 z-10 shadow-sm">
                    <i className="bx bx-tv text-lg"></i>
                  </div>
                  
                  {/* Group Title */}
                  <div className="mb-6 text-start">
                    <span className="text-[10px] font-black uppercase tracking-wider text-blue-500">
                      {t("qualification.group_teach_sub")}
                    </span>
                    <h3 className="text-lg md:text-xl font-black text-title mt-1">
                      {t("qualification.group_teach_title")}
                    </h3>
                  </div>

                  {/* Cards Stack */}
                  <div className="space-y-6">
                    {teachingItems.map((item, idx) => (
                      <motion.div
                        key={item.key}
                        initial={{ opacity: 0, x: isAr ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="bg-white/80 border border-slate-200/60 dark:bg-[#090d15]/60 dark:border-white/5 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300 group"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                          {/* Col 1: Date & Duration */}
                          <div className="md:col-span-3 flex flex-col text-start">
                            <span className="text-xs md:text-sm font-black text-blue-600 dark:text-blue-400">
                              {t(`qualification.${item.key}.date`)}
                            </span>
                            <span className="mt-2 px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-[9px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest w-fit">
                              {t(`qualification.${item.durationKey}`)}
                            </span>
                          </div>

                          {/* Col 2: Info */}
                          <div className="md:col-span-5 flex flex-col text-start">
                            <h4 className="text-base md:text-lg font-black text-title leading-snug">
                              {t(`qualification.${item.key}.title`)}
                            </h4>
                            <span className="text-xs md:text-sm font-bold text-blue-500 mt-1">
                              {t(`qualification.${item.key}.company`)}
                            </span>
                            <p className="text-xs md:text-sm text-textLight font-medium mt-3 leading-relaxed">
                              {t(`qualification.${item.key}.desc`)}
                            </p>
                          </div>

                          {/* Col 3: Subjects Tags */}
                          <div className="md:col-span-4 flex flex-col text-start border-t md:border-t-0 border-slate-100 dark:border-white/5 pt-4 md:pt-0">
                            <span className="text-[10px] font-black uppercase tracking-wider text-blue-500 mb-3 block">
                              {t(`qualification.${item.tagsTitleKey}`)}
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {item.tags.map((tag, tIdx) => (
                                <div
                                  key={tIdx}
                                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 text-[10px] font-black text-textLight select-none transition-colors group-hover:border-blue-500/20"
                                >
                                  {tag.icon && (
                                    <i className={`bx ${tag.icon} ${tag.colorClass} text-sm`} />
                                  )}
                                  <span>{tag.name}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

              </motion.div>
            )}

            {/* ── PANEL 2: ACTIVITIES ── */}
            {toggleState === 3 && (
              <motion.div
                key="activities"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid sm:grid-cols-2 gap-6"
              >
                {actItems.map((item, idx) => (
                  <motion.div
                    key={item.num}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="bg-white/80 border border-slate-200/60 dark:bg-[#090d15]/60 dark:border-white/5 rounded-3xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group text-start flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Row: Icon & Date Badge */}
                      <div className="flex items-start justify-between mb-5">
                        <div
                          className={`w-10 h-10 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center group-hover:scale-110 transition-transform`}
                        >
                          <i className={`bx ${item.icon} text-xl ${item.color}`} />
                        </div>
                        <span
                          className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-lg ${item.bg} ${item.color} border ${item.border}`}
                        >
                          {t(`qualification.act${item.num}.date`)}
                        </span>
                      </div>

                      {/* Title & Organization */}
                      <h4 className="text-base font-black text-title leading-snug group-hover:text-first transition-colors">
                        {t(`qualification.act${item.num}.title`)}
                      </h4>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center gap-1.5 text-xs font-semibold text-textLight">
                      <i className="bx bx-buildings text-sm text-first" />
                      <span>{t(`qualification.act${item.num}.org`)}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Qualification;
