import React, { useState, useRef, useEffect, useMemo } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useTranslation } from "react-i18next";
import bgImg from "../assets/bg.png";

// --- SUPERNOVA: SOLAR FLARE ENGINE ---
const flareSparks = [...Array(12)].map((_, i) => ({
  id: i,
  delay: i * 0.5,
  duration: 3 + Math.random() * 2,
  color: ["#FF007F", "#00FFFF", "#FFD700", "#7A28FF"][i % 4],
}));

const SolarFlare = ({ x, y }) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10000">
      {flareSparks.map((s) => (
        <motion.div
          key={s.id}
          className="solar-flare-spark shadow-[0_0_10px_currentColor]"
          style={{
            left: x,
            top: y,
            color: s.color,
            backgroundColor: s.color,
          }}
          animate={{
            rotate: [0, 360],
            scale: [0.5, 1.5, 0.5],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            delay: s.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// --- SUPERNOVA: FLOATING GEOMETRIC SHARDS ---
const shardsData = [...Array(6)].map((_, i) => ({
  id: i,
  size: 150 + Math.random() * 100,
  x: Math.random() * 100,
  y: Math.random() * 100,
  rotate: Math.random() * 360,
  duration: 20 + Math.random() * 10,
}));

const FloatingShards = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {shardsData.map((s) => (
        <motion.div
          key={s.id}
          animate={{
            y: ["-10%", "110%"],
            rotate: [s.rotate, s.rotate + 180],
          }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute border border-white/5 bg-white/1 backdrop-blur-3xl"
          style={{
            width: s.size,
            height: s.size,
            left: `${s.x}%`,
            top: `${s.y}%`,
            borderRadius: s.id % 2 === 0 ? "50%" : "20px",
          }}
        />
      ))}
    </div>
  );
};

// --- TRANSCENDENTAL PARTICLES ENGINE ---
const particlesStore = [...Array(40)].map((_, i) => ({
  id: i,
  size: Math.random() * 2 + 1,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 20 + 10,
  delay: Math.random() * 5,
}));

const DigitalDust = ({ mouseX, mouseY }) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-1 opacity-40">
      {particlesStore.map((p) => (
        <motion.div
          key={p.id}
          animate={{
            y: ["-10%", "110%"],
            x: ["-2%", "2%"],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
          className="absolute bg-white/30 rounded-full blur-[1px]"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
        />
      ))}
      <motion.div
        style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
        className="absolute w-150 h-150 bg-first/5 blur-[100px] rounded-full mix-blend-screen"
      />
    </div>
  );
};

const Hero = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  // --- SUPERNOVA CURSOR ---
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { damping: 25, stiffness: 300 });
  const springY = useSpring(cursorY, { damping: 25, stiffness: 300 });
  const cursorSize = useSpring(24, { damping: 15, stiffness: 150 });
  const cursorOpacity = useSpring(0, { damping: 20, stiffness: 200 });

  // --- MOUSE & PARALLAX ENGINE ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 30, stiffness: 100 });
  const smoothMouseY = useSpring(mouseY, { damping: 30, stiffness: 100 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX - innerWidth / 2);
    mouseY.set(clientY - innerHeight / 2);
    cursorX.set(clientX);
    cursorY.set(clientY);
    cursorOpacity.set(1);
  };

  const nameWords = useMemo(() => t("hero.name").split(" "), [t]);
  const personas = useMemo(
    () => [t("skills.react"), t("services.web"), t("skills.instructor")],
    [t],
  );

  const [personaIdx, setPersonaIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPersonaIdx((prev) => (prev + 1) % personas.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [personas]);

  // Magnetic & Volumetric Layers
  const layer1X = useTransform(smoothMouseX, [-500, 500], [-25, 25]);
  const layer1Y = useTransform(smoothMouseY, [-500, 500], [-25, 25]);
  const photoRotateX = useTransform(smoothMouseY, [-500, 500], [12, -12]);
  const photoRotateY = useTransform(smoothMouseX, [-500, 500], [-12, 12]);
  const textSkewX = useTransform(smoothMouseX, [-500, 500], [6, -6]);
  const textSkewY = useTransform(smoothMouseY, [-500, 500], [-3, 3]);

  return (
    <section
      className="relative min-h-screen flex items-center pt-40 pb-20 overflow-hidden bg-body cursor-none selection:bg-first selection:text-body"
      id="home"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => cursorOpacity.set(1)}
      onMouseLeave={() => cursorOpacity.set(0)}
    >
      {/* --- SUPERNOVA CURSOR --- */}
      <motion.div
        className="fixed w-[28px] h-[28px] rounded-[0.5rem] border-2 border-white/50 pointer-events-none z-9999 mix-blend-difference hidden md:block"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: cursorOpacity,
          scale: useTransform(cursorSize, [20, 150], [1, 5]),
        }}
      >
        <div className="absolute inset-[-10px] bg-[radial-gradient(circle,rgba(var(--color-joy-pink),0.2),transparent_70%)] rounded-full blur-md"></div>
      </motion.div>

      <SolarFlare x={springX} y={springY} />
      <DigitalDust mouseX={cursorX} mouseY={cursorY} />
      <FloatingShards />

      {/* --- CHROMA-SHIFT BACKDROP --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            background: [
              "radial-gradient(circle_at_center,rgba(var(--color-joy-pink),0.12),transparent_70%)",
              "radial-gradient(circle_at_center,rgba(var(--color-joy-cyan),0.12),transparent_70%)",
              "radial-gradient(circle_at_center,rgba(var(--color-joy-yellow),0.12),transparent_70%)",
              "radial-gradient(circle_at_center,rgba(var(--color-joy-pink),0.12),transparent_70%)",
            ],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-50%] left-[-25%] w-[150%] h-[150%] blur-[140px]"
        />
        {/* Dynamic Light Streaks */}
        <div className="absolute top-1/2 left-0 w-full h-[4px] bg-linear-to-r from-transparent via-first/10 to-transparent skew-y-12 blur-2xl animate-pulse"></div>
        <div className="absolute top-1/3 left-0 w-full h-[2px] bg-linear-to-r from-transparent via-joy-cyan/10 to-transparent -skew-y-6 blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-310 mx-auto px-6 grid gap-16 md:gap-24 md:grid-cols-[1.35fr_0.65fr] items-center w-full relative z-10">
        {/* --- SUPERNOVA CONTENT --- */}
        <motion.div
          style={{ x: layer1X, y: layer1Y }}
          className="text-center md:text-left rtl:md:text-right"
        >
          {/* Celestial Persona */}
          <div
            className={`h-12 md:h-14 mb-8 md:mb-12 flex items-center justify-center md:justify-start rtl:md:justify-end ${isAr ? "md:pr-4" : "md:pl-4"}`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={personaIdx}
                initial={{ opacity: 0, scale: 0.8, filter: "blur(15px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.2, filter: "blur(15px)" }}
                transition={{ type: "spring", damping: 15, stiffness: 120 }}
                className="flex items-center gap-3 md:gap-5 bg-white/5 backdrop-blur-4xl border border-white/10 py-3 md:py-4 px-6 md:px-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              >
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-first shadow-[0_0_20px_rgba(var(--color-first),1)] animate-glint"></div>
                <span className="text-title text-[10px] md:text-xs font-black uppercase tracking-[6px] md:tracking-[12px] animate-chroma whitespace-nowrap">
                  {personas[personaIdx]}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Supernova Spectral Name */}
          <motion.h1
            style={{ skewX: textSkewX, skewY: textSkewY }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-black text-title mb-8 md:mb-4 leading-[0.8] md:leading-[0.75] tracking-tighter italic"
          >
            {nameWords.map((word, wIdx) => (
              <span key={wIdx} className="block group relative">
                <motion.span
                  initial={{ opacity: 0, y: 50, filter: "blur(30px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    delay: 0.5 * wIdx,
                    duration: 1.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onMouseEnter={() => cursorSize.set(160)}
                  onMouseLeave={() => cursorSize.set(24)}
                  className={`inline-block whitespace-nowrap cursor-none ${wIdx === 1 ? "bg-linear-to-r from-first via-joy-cyan to-first bg-clip-text brightness-200 animate-irid" : "text-title text-shadow-xl"}`}
                >
                  {word}
                </motion.span>
                <div className="absolute inset-0 bg-linear-to-r from-joy-pink/10 to-joy-cyan/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-[1.5s] pointer-events-none"></div>
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-text/70 text-lg md:text-2xl font-semibold max-w-180 mx-auto md:mx-0 mb-12 md:mb-20 leading-relaxed italic border-l-4 border-joy-pink pl-6 md:pl-8 rtl:border-l-0 rtl:border-r-4 rtl:pl-0 rtl:pr-6 md:rtl:pr-8"
          >
            {t("hero.title")}
          </motion.p>

          {/* Celestial Hub */}
          <div className="flex flex-wrap gap-4 md:gap-8 justify-center md:justify-start rtl:md:justify-end items-center">
            <HeroButton
              label={t("hero.devCV")}
              href="/Saeed Ramadan Front End (React JS).pdf"
              isJoy
            />
            <HeroButton
              label={t("hero.instCV")}
              href="/Saeed Ramadan - Programming Instructor.pdf"
              isJoy
            />

            <a
              href="#about"
              className="group flex items-center gap-4 md:gap-6 text-title font-black text-[10px] md:text-[11px] uppercase tracking-[4px] md:tracking-[6px] hover:text-joy-cyan transition-all md:ml-6 rtl:md:ml-0 rtl:md:mr-6"
            >
              <span className="relative overflow-hidden block">
                {t("hero.aboutMe")}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-joy-pink -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
              </span>
              <div className="w-12 h-12 md:w-14 md:h-14 border-2 border-white/10 rounded-[0.5rem] flex items-center justify-center group-hover:border-joy-cyan group-hover:bg-joy-cyan/10 group-hover:text-joy-cyan transition-all rotate-45 group-hover:rotate-0 group-hover:shadow-[0_0_30px_rgba(var(--color-joy-cyan),0.3)]">
                <i className="bx bx-right-arrow-alt text-xl md:text-2xl"></i>
              </div>
            </a>
          </div>

          {/* Social Cluster */}
          <div className="mt-12 flex gap-6 md:gap-8 justify-center md:justify-start rtl:md:justify-end">
            <SocialIcon
              href="https://www.linkedin.com/in/saeed-ramadan-686186201"
              icon="bxl-linkedin"
              hoverColor="group-hover:text-[#0077b5]"
              hoverShadow="hover:shadow-[0_0_20px_rgba(0,119,181,0.4)]"
            />
            <SocialIcon
              href="https://github.com/Saeed-Ramadan"
              icon="bxl-github"
              hoverColor="group-hover:text-title"
              hoverShadow="hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            />
            <SocialIcon
              href="https://www.youtube.com/@saeed-r1"
              icon="bxl-youtube"
              hoverColor="group-hover:text-[#ff0000]"
              hoverShadow="hover:shadow-[0_0_20px_rgba(255,0,0,0.4)]"
            />
            <SocialIcon
              href="https://www.facebook.com/said.aboshanab.92"
              icon="bxl-facebook"
              hoverColor="group-hover:text-[#1877f2]"
              hoverShadow="hover:shadow-[0_0_20px_rgba(24,119,242,0.4)]"
            />
          </div>
        </motion.div>

        {/* --- SUPERNOVA HERO PHOTO --- */}
        <motion.div
          style={{
            rotateX: photoRotateX,
            rotateY: photoRotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative justify-self-center hidden md:block perspective-3000"
        >
          {/* Prismatic Vessel */}
          <div className="relative w-[480px] h-[660px] rounded-[1rem] overflow-hidden bg-white/5 border-2 border-white/10 backdrop-blur-5xl shadow-[0_100px_200px_rgba(0,0,0,0.9)] p-4">
            {/* Holographic Glint Engine */}
            <motion.div
              className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay"
              style={{
                background: useTransform(
                  [smoothMouseX, smoothMouseY],
                  ([x, y]) =>
                    `radial-gradient(400px circle at calc(50% + ${x}px) calc(50% + ${y}px), rgba(255,255,255,0.4), transparent 80%)`,
                ),
              }}
            />

            <div className="relative w-full h-full rounded-[1rem] overflow-hidden group">
              <img
                src={bgImg}
                alt="Saeed"
                className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-105 saturate-[1.2] contrast-[1.1]"
              />
              {/* Joy Gradient Filter */}
              <div className="absolute inset-0 bg-linear-to-tr from-joy-pink/10 via-transparent to-joy-cyan/10 blend-soft-light opacity-60"></div>
              {/* Deep Ambient Shadows */}
              <div className="absolute inset-0 bg-linear-to-t from-body via-transparent to-transparent opacity-95"></div>
            </div>

            {/* Elite Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 2, type: "spring" }}
              style={{ transform: "translateZ(150px)" }}
              className="absolute -top-6 -right-6 bg-linear-to-br from-joy-pink via-joy-violet to-joy-cyan p-1 rounded-[1rem] shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
            >
              <div className="bg-body/90 backdrop-blur-xl rounded-[1rem] px-8 py-4 flex flex-col items-center border border-white/10">
                <span className="text-3xl font-black italic bg-linear-to-r from-joy-pink to-joy-cyan bg-clip-text ">
                  2+
                </span>
                <span className="text-[7px] font-black tracking-[4px]  uppercase">
                  EXPERT
                </span>
              </div>
            </motion.div>
          </div>

          {/* Orbital Rings */}
          <div className="absolute -inset-16 border-2 border-joy-pink/10 rounded-[2rem] animate-[spin_30s_linear_infinite] opacity-30 shadow-[0_0_50px_rgba(var(--color-joy-pink),0.1)]"></div>
          <div className="absolute -inset-40 border border-joy-cyan/10 rounded-[4rem] animate-[spin_50s_linear_infinite_reverse] opacity-20 shadow-[0_0_50px_rgba(var(--color-joy-cyan),0.1)]"></div>
        </motion.div>
      </div>

      {/* --- SUPERNOVA FOOTER --- */}
      <motion.div
        animate={{ opacity: [0.2, 0.8, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-16 right-16 text-white/10 flex flex-col items-end gap-3 pointer-events-none"
      >
        <div className="w-24 h-[2px] bg-linear-to-r from-joy-pink to-joy-cyan"></div>
        <span className="text-[10px] uppercase tracking-[18px] font-black animate-chroma">
          {t("hero.scrollDown")}
        </span>
      </motion.div>
    </section>
  );
};

// --- SUPERNOVA SUB-COMPONENTS ---

const HeroButton = ({ label, href, isJoy }) => {
  const ref = useRef(null);
  const [mPos, setMPos] = useState({ x: 0, y: 0 });

  const handleM = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.25;
    const y = (clientY - (top + height / 2)) * 0.25;
    setMPos({ x, y });
  };

  return (
    <motion.a
      ref={ref}
      onMouseMove={handleM}
      onMouseLeave={() => setMPos({ x: 0, y: 0 })}
      animate={{ x: mPos.x, y: mPos.y }}
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group relative h-16 md:h-20 px-8 md:px-12 flex items-center justify-center rounded-[0.5rem] overflow-hidden transition-all shadow-2xl ${isJoy ? "bg-white/5 border-2 border-white/10 hover:border-joy-pink" : "bg-white/3 border border-white/5"}`}
    >
      <div className="absolute inset-0 bg-linear-to-r from-joy-pink/20 via-joy-cyan/20 to-joy-pink/20 -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s]"></div>
      <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[3px] md:tracking-[4px] text-title relative z-10 group-hover:text-joy-pink transition-colors">
        {label}
      </span>
      <i
        className={`bx bx-download ml-3 md:ml-4 text-xl md:text-2xl relative z-10 transition-all ${isJoy ? "text-joy-pink" : "text-first"} group-hover:scale-125`}
      ></i>
    </motion.a>
  );
};

const SocialIcon = ({ href, icon, hoverColor, hoverShadow }) => (
  <motion.a
    whileHover={{ y: -12, scale: 1.2, rotate: 10 }}
    href={href}
    target="_blank"
    rel="noreferrer"
    className={`group w-14 h-14 md:w-18 md:h-18 flex items-center justify-center bg-white/5 border border-white/10 rounded-[0.5rem] text-2xl md:text-3xl text-text transition-all backdrop-blur-5xl shadow-xl ${hoverShadow} ${hoverColor}`}
  >
    <i className={`bx ${icon} transition-colors duration-300`}></i>
  </motion.a>
);

export default Hero;
