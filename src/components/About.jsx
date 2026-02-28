import React, { useRef, useState, useMemo } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useTranslation } from "react-i18next";
import aboutImg from "../assets/about.png";

const ExperienceSphere = ({ icon, title, subtitle, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, type: "spring", damping: 15, stiffness: 100 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full max-w-[280px] sm:max-w-none mx-auto aspect-square flex flex-col items-center justify-center text-center p-4 md:p-6 cursor-pointer"
    >
      {/* Orbital Aura */}
      <motion.div
        animate={{
          rotate: 360,
          scale: isHovered ? 1.2 : 1,
          borderColor: isHovered
            ? [
                "rgba(var(--color-joy-pink),0.5)",
                "rgba(var(--color-joy-cyan),0.5)",
                "rgba(var(--color-joy-pink),0.5)",
              ]
            : "rgba(255,255,255,0.1)",
        }}
        transition={{
          rotate: { duration: 10, repeat: Infinity, ease: "linear" },
          scale: { duration: 0.4 },
        }}
        className="absolute inset-0 border-2 border-dashed rounded-full"
      />

      {/* Core Sphere */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          backgroundColor: isHovered
            ? "rgba(255,255,255,0.08)"
            : "rgba(255,255,255,0.03)",
        }}
        transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
        className="relative z-10 w-full h-full rounded-full backdrop-blur-3xl border border-white/10 flex flex-col items-center justify-center shadow-2xl overflow-hidden"
      >
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-tr from-joy-pink/5 via-transparent to-joy-cyan/5`}
        ></div>
        <i
          className={`bx ${icon} text-4xl mb-4 transition-all duration-500 ${isHovered ? "text-joy-pink scale-125" : "text-first"}`}
        ></i>
        <h3 className="text-sm font-black text-title uppercase tracking-[2px] mb-1">
          {title}
        </h3>
        <p className="text-[9px] text-textLight font-black uppercase tracking-[1px] opacity-60 px-4">
          {subtitle}
        </p>

        {/* Particle Glow */}
        {isHovered && (
          <motion.div
            layoutId="glow"
            className="absolute inset-0 bg-radial-gradient from-joy-pink/10 to-transparent blur-xl"
          />
        )}
      </motion.div>
    </motion.div>
  );
};

const About = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const containerRef = useRef(null);

  // 3D Profile Tilt Engine
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]), {
    damping: 25,
    stiffness: 150,
  });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), {
    damping: 25,
    stiffness: 150,
  });

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - (rect.left + rect.width / 2));
    mouseY.set(e.clientY - (rect.top + rect.height / 2));
  };

  const infoCards = [
    {
      icon: "bx-code-alt",
      title: t("about.expertise"),
      subtitle: t("about.expertise_sub"),
    },
    {
      icon: "bx-terminal",
      title: t("about.tech"),
      subtitle: t("about.tech_sub"),
    },
    {
      icon: "bx-check-double",
      title: t("about.quality"),
      subtitle: t("about.quality_sub"),
    },
  ];

  const descWords = useMemo(() => t("about.description").split(" "), [t]);

  return (
    <section
      className="py-6 md:py-10 relative overflow-hidden bg-body"
      id="about"
    >
      {/* --- CELESTIAL BACKDROP SYNC --- */}
      <div className="absolute inset-0 pointer-events-none opacity-30 h-full">
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1],
            background: [
              "radial-gradient(circle_at_center,rgba(var(--color-joy-cyan),0.08),transparent_70%)",
              "radial-gradient(circle_at_center,rgba(var(--color-joy-pink),0.08),transparent_70%)",
              "radial-gradient(circle_at_center,rgba(var(--color-joy-violet),0.08),transparent_70%)",
              "radial-gradient(circle_at_center,rgba(var(--color-joy-cyan),0.08),transparent_70%)",
            ],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] blur-[160px]"
        />
      </div>

      <div className="max-w-310 mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-32">
          <motion.span
            initial={{ opacity: 0, letterSpacing: "1px" }}
            whileInView={{ opacity: 1, letterSpacing: "15px" }}
            viewport={{ once: true }}
            className="text-joy-pink font-black uppercase text-[10px] mb-6 block animate-chroma"
          >
            {t("about.subtitle")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl lg:text-[10rem] font-black text-title tracking-tighter italic leading-[0.9] bg-linear-to-b from-title via-title to-first/20 bg-clip-text"
          >
            {t("about.title")}
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-32 items-center">
          {/* --- QUANTUM PROFILE --- */}
          <motion.div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
              mouseX.set(0);
              mouseY.set(0);
            }}
            style={{
              rotateX,
              rotateY,
              perspective: 2000,
              transformStyle: "preserve-3d",
            }}
            className="relative justify-self-center lg:justify-self-start scale-90 md:scale-100"
          >
            <div className="relative w-[280px] xs:w-[320px] md:w-[440px] aspect-[4/5] rounded-[3rem] md:rounded-[5rem] p-3 md:p-4 bg-white/5 border-2 border-white/10 backdrop-blur-5xl shadow-[0_80px_160px_rgba(0,0,0,0.8)] overflow-hidden group">
              {/* Holographic Glint */}
              <motion.div
                className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: useTransform(
                    [mouseX, mouseY],
                    ([x, y]) =>
                      `radial-gradient(400px circle at calc(50% + ${x}px) calc(50% + ${y}px), rgba(255,255,255,0.4), transparent 80%)`,
                  ),
                }}
              />

              <div className="relative w-full h-full rounded-[4.2rem] overflow-hidden">
                <img
                  src={aboutImg}
                  alt="Saeed"
                  className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-110 saturate-[1.1] brightness-[0.9]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-body via-transparent to-transparent opacity-80"></div>
              </div>

              {/* Float Experience Artifact */}
              <motion.div
                style={{ translateZ: 100 }}
                className="absolute bottom-12 left-12 bg-white/5 backdrop-blur-4xl border border-white/20 p-8 rounded-[2.5rem] shadow-3xl"
              >
                <span className="block text-5xl font-black italic bg-linear-to-r from-joy-pink to-joy-cyan bg-clip-text text-transparent">
                  5+
                </span>
                <span className="text-[8px] text-white/40 uppercase font-black tracking-[4px]">
                  {t("about.yearsCoding")}
                </span>
              </motion.div>
            </div>

            {/* Background Halo Sync */}
            <div className="absolute -inset-10 border border-joy-pink/10 rounded-[6rem] animate-[spin_40s_linear_infinite] opacity-40"></div>
            <div className="absolute -inset-20 border border-joy-cyan/5 rounded-[8rem] animate-[spin_60s_linear_infinite_reverse] opacity-20"></div>
          </motion.div>

          {/* --- NARRATIVE CONTENT --- */}
          <div className="space-y-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {infoCards.map((card, idx) => (
                <ExperienceSphere key={idx} {...card} delay={0.2 * idx} />
              ))}
            </div>

            {/* Narrative Flow Text */}
            <div className="relative">
              <div className="absolute -left-10 top-0 w-2 h-full bg-linear-to-b from-joy-pink via-joy-cyan to-transparent rounded-full hidden lg:block opacity-40"></div>
              <p
                className={`text-text/80 text-xl md:text-2xl leading-[1.8] font-medium italic ${isAr ? "lg:pr-10" : "lg:pl-10"}`}
              >
                {descWords.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.02 * i }}
                    className="inline-block mr-2"
                  >
                    {word}
                  </motion.span>
                ))}
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="flex justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="group relative h-22 px-16 flex items-center justify-center bg-white/5 border-2 border-white/10 rounded-[2.5rem] overflow-hidden transition-all shadow-4xl hover:border-joy-cyan"
              >
                <div className="absolute inset-0 bg-linear-to-r from-joy-cyan/20 to-joy-pink/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="text-sm font-black uppercase tracking-[6px] text-title relative z-10 group-hover:scale-110 transition-transform">
                  {t("about.contact")}
                </span>
                <i className="bx bx-bolt-circle ml-4 text-3xl text-joy-cyan relative z-10 animate-pulse"></i>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
