import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";

const StatCard = ({ value, label, sub, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="relative group bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-3xl overflow-hidden transition-all duration-500 hover:border-first/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
    >
      <div className="absolute inset-0 bg-linear-to-br from-first/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10 flex flex-col items-center gap-1">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl md:text-5xl font-black text-title group-hover:text-first transition-colors duration-500">
            {value}
          </span>
          {sub && <span className="text-sm font-bold text-text/40">{sub}</span>}
        </div>
        <span className="text-[10px] md:text-xs font-black uppercase tracking-[3px] text-text/60 group-hover:text-text transition-colors duration-500">
          {label}
        </span>
      </div>
    </motion.div>
  );
};

const Education = () => {
  const { t } = useTranslation();
  const containerRef = useRef(null);

  // 3D Perspective Tilt for the Main Card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-400, 400], [5, -5]), {
    damping: 20,
    stiffness: 100,
  });
  const rotateY = useSpring(useTransform(mouseX, [-400, 400], [-5, 5]), {
    damping: 20,
    stiffness: 100,
  });

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - (rect.left + rect.width / 2));
    mouseY.set(e.clientY - (rect.top + rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const stats = [
    { value: "3.1", label: t("education.gpa"), sub: "/ 4.0" },
    { value: "2024", label: t("education.graduated"), sub: "" },
    { value: "A+", label: t("education.project"), sub: "" },
  ];

  const tags = [
    { icon: "bx-code-alt", text: t("education.tag1") },
    { icon: "bx-brain", text: t("education.tag2") },
    { icon: "bx-data", text: t("education.tag3") },
  ];

  return (
    <section
      className="py-6 md:py-10 relative overflow-hidden bg-body"
      id="education"
    >
      {/* --- PROFESSIONAL AMBIENCE --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-125 h-125 bg-first/5 rounded-full blur-[150px] opacity-40 animate-pulse"></div>
        <div className="absolute bottom-1/4 -left-20 w-100 h-100 bg-joy-cyan/5 rounded-full blur-[120px] opacity-30"></div>
        {/* Subtle Geometric Polish */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(var(--color-first),0.03)_0%,transparent_50%)]"></div>
      </div>

      <div className="max-w-310 mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-first/60 font-black uppercase text-[10px] mb-8 block tracking-[15px] md:tracking-[20px] animate-chroma">
            {t("education.subtitle")}
          </span>
          <h2 className="text-5xl md:text-8xl lg:text-[10rem] font-black text-title tracking-tighter italic leading-[0.9] bg-linear-to-b from-title to-first/20 bg-clip-text">
            {t("education.title")}
          </h2>
        </motion.div>

        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
            perspective: 2000,
          }}
          className="group relative"
        >
          {/* Main Card: Professional Glass Fabric */}
          <div className="relative bg-white/2 border border-white/5 rounded-[3rem] md:rounded-4xl p-8 md:p-20 backdrop-blur-4xl shadow-[0_50px_100px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-700 group-hover:border-white/15">
            {/* Dynamic Light Sweep */}
            <div className="absolute inset-0 bg-linear-to-tr from-first/5 via-transparent to-joy-cyan/5 opacity-50"></div>
            <motion.div
              className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay"
              style={{
                background: useTransform(
                  [mouseX, mouseY],
                  ([x, y]) =>
                    `radial-gradient(600px circle at calc(50% + ${x}px) calc(50% + ${y}px), rgba(255,255,255,0.1), transparent 80%)`,
                ),
              }}
            />

            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 md:gap-24 items-center">
              {/* --- ACADEMIC CORE --- */}
              <div className="space-y-6 md:space-y-12 relative pl-8 md:pl-0">
                {/* Mobile Decorative Timeline Line - Continuous */}
                <div className="absolute left-[11px] top-6 bottom-4 w-[1px] bg-title/10 dark:bg-white/20 md:hidden z-0"></div>

                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 relative">
                  {/* Graduation Icon */}
                  <div className="absolute -left-11 top-1 md:relative md:left-auto md:top-auto flex items-center justify-center bg-transparent py-2 md:py-0 z-10">
                    <motion.div
                      initial={{ rotate: -90, opacity: 0 }}
                      whileInView={{ rotate: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      className="w-8 h-20 md:w-24 md:h-24 bg-body md:bg-first/10 border border-title/10 dark:border-white/20 md:border-first/20 rounded-full md:rounded-3xl flex items-center justify-center shadow-lg md:shadow-2xl overflow-hidden group-hover:bg-title/5 dark:group-hover:bg-white/5 md:group-hover:bg-first/20 transition-colors"
                    >
                      <i className="bx bxs-graduation text-xl md:text-5xl text-first md:text-first group-hover:scale-110 transition-transform"></i>
                    </motion.div>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex items-center gap-3 md:gap-4 mb-1 md:mb-1">
                      <span className="text-[11px] md:text-sm text-text/60 dark:text-white/70 md:text-first font-black tracking-[3px] md:tracking-[5px]">
                        2020
                      </span>
                      <span className="w-3 h-[1px] bg-title/20 dark:bg-white/40 md:bg-first/50"></span>
                      <span className="text-[11px] md:text-sm text-text/60 dark:text-white/70 md:text-first font-black tracking-[3px] md:tracking-[5px]">
                        2024
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-black text-title dark:text-white md:text-title leading-[1.15] md:leading-tight tracking-tight max-w-[280px] md:max-w-none">
                      {t("education.degree")}
                    </h3>
                  </div>
                </div>

                <div className="space-y-5 md:space-y-3 relative pt-4 md:pt-0">
                  {/* Decorative line for Faculty (Mobile) - thicker active line */}
                  <div className="absolute -left-8 top-5 h-12 w-[3px] bg-first/40 dark:bg-white/70 md:hidden z-10 rounded-full"></div>

                  <p className="text-xl md:text-3xl font-black text-title/80 dark:text-white/80 italic md:border-l-4 md:border-first md:pl-8 rtl:md:border-l-0 rtl:md:border-r-4 rtl:md:pl-0 rtl:md:pr-8 leading-snug tracking-wide">
                    {t("education.faculty")}
                  </p>

                  <p className="flex items-center gap-5 md:gap-4 text-text/60 dark:text-white/70 md:text-text/60 text-base md:text-xl font-bold relative mt-5 md:mt-2">
                    <div className="absolute -left-10 top-1/2 -translate-y-1/2 bg-body md:bg-transparent py-2 flex justify-center z-10 md:relative md:left-auto md:top-auto md:translate-y-0 md:w-auto md:py-0">
                      <i className="bx bx-buildings text-text/40 dark:text-white/70 text-xl md:text-first md:text-2xl"></i>
                    </div>
                    {t("education.university")}
                  </p>
                </div>

                {/* Tech Tags: Refined Edition */}
                <div className="flex flex-wrap gap-4 pt-4 ml-6 md:ml-0">
                  {tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl text-[10px] md:text-xs font-black uppercase tracking-[2px] text-text/60 hover:text-first hover:bg-white/10 hover:border-first/30 transition-all cursor-default"
                    >
                      <i className={`bx ${tag.icon} text-lg text-first`}></i>
                      {tag.text}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* --- METRIC CLUSTER --- */}
              <div className="grid gap-6">
                {stats.map((stat, i) => (
                  <StatCard key={i} {...stat} index={i} />
                ))}
              </div>
            </div>

            {/* Corner Accents */}
            <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-linear-to-bl from-first/10 to-transparent opacity-30 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-linear-to-tr from-joy-cyan/10 to-transparent opacity-30 pointer-events-none"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
