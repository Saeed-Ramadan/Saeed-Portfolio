import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const expItems = [
  {
    key: "exp1",
    icon: "bx-buildings",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    dot: "border-violet-400",
    current: true,
  },
  {
    key: "exp2",
    icon: "bx-chalkboard",
    color: "text-sky-400",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
    dot: "border-sky-400",
    current: true,
  },
  {
    key: "exp3",
    icon: "bx-laptop",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    dot: "border-emerald-400",
    current: false,
  },
];

const actItems = [
  {
    num: 1,
    icon: "bx-crown",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  {
    num: 2,
    icon: "bx-trophy",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
  },
  {
    num: 3,
    icon: "bx-group",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
  {
    num: 4,
    icon: "bx-calendar-event",
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
  },
];

const Qualification = () => {
  const { t } = useTranslation();
  const [toggleState, setToggleState] = useState(1);

  return (
    <section
      className="py-12 md:py-16 relative overflow-hidden"
      id="qualification"
    >
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-first/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-first/3 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <span className="text-first font-black tracking-[5px] uppercase text-xs mb-4 block">
            {t("qualification.subtitle")}
          </span>
          <h2 className="text-5xl md:text-8xl font-black text-title tracking-tighter bg-linear-to-b from-title to-first bg-clip-text italic leading-[1.1] pb-2">
            {t("qualification.title")}
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-12 bg-container/50 border border-title/5 p-1.5 rounded-2xl w-fit mx-auto backdrop-blur-md">
          {[
            {
              id: 1,
              icon: "bx-briefcase",
              label: t("qualification.experience"),
            },
            { id: 3, icon: "bx-star", label: t("qualification.activities") },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setToggleState(tab.id)}
              className={`flex items-center gap-2 px-7 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                toggleState === tab.id
                  ? "bg-first text-body shadow-lg"
                  : "text-text hover:text-first"
              }`}
            >
              <i className={`bx ${tab.icon} text-lg`} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-[780px] mx-auto">
          <AnimatePresence mode="wait">
            {/* ── EXPERIENCE ── */}
            {toggleState === 1 && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                {/* Vertical line */}
                <div className="absolute left-5 top-6 bottom-6 w-px bg-gradient-to-b from-first/40 via-title/10 to-transparent" />

                <div className="space-y-5">
                  {expItems.map((item, i) => (
                    <motion.div
                      key={item.key}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-5 group"
                    >
                      {/* Icon dot */}
                      <div className="relative flex-shrink-0 mt-1">
                        <div
                          className={`w-10 h-10 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center z-10 relative group-hover:scale-110 transition-transform`}
                        >
                          <i
                            className={`bx ${item.icon} text-xl ${item.color}`}
                          />
                        </div>
                      </div>

                      {/* Card */}
                      <div
                        className={`flex-1 bg-container/40 border border-title/5 rounded-2xl px-6 py-4 backdrop-blur-xl group-hover:border-first/25 group-hover:-translate-y-0.5 transition-all group-hover:shadow-xl ${item.current ? "group-hover:shadow-first/5" : ""}`}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <h3 className="text-base font-bold text-title">
                                {t(`qualification.${item.key}.title`)}
                              </h3>
                              {item.current && (
                                <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                                  Current
                                </span>
                              )}
                            </div>
                            <span
                              className={`text-sm font-bold block mt-0.5 ${item.color}`}
                            >
                              {t(`qualification.${item.key}.company`)}
                            </span>
                          </div>
                          <span
                            className={`flex items-center gap-1.5 px-3 py-1 ${item.bg} ${item.color} text-xs font-black rounded-full border ${item.border} w-fit`}
                          >
                            <i className="bx bx-calendar text-sm" />
                            {t(`qualification.${item.key}.date`)}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ── ACTIVITIES ── */}
            {toggleState === 3 && (
              <motion.div
                key="activities"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid sm:grid-cols-2 gap-4"
              >
                {actItems.map((item, i) => (
                  <motion.div
                    key={item.num}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.08 }}
                    className={`bg-container/40 border border-title/5 rounded-2xl p-5 backdrop-blur-xl hover:border-first/25 hover:-translate-y-1 transition-all hover:shadow-xl group`}
                  >
                    {/* Icon + badge */}
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-10 h-10 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <i
                          className={`bx ${item.icon} text-xl ${item.color}`}
                        />
                      </div>
                      <span
                        className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full ${item.bg} ${item.color} border ${item.border}`}
                      >
                        {t(`qualification.act${item.num}.date`)}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-sm font-bold text-title mb-1 leading-snug">
                      {t(`qualification.act${item.num}.title`)}
                    </h3>
                    <span
                      className={`text-xs font-bold ${item.color} flex items-center gap-1`}
                    >
                      <i className="bx bx-building text-sm" />
                      {t(`qualification.act${item.num}.org`)}
                    </span>
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
