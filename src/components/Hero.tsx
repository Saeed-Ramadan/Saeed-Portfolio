import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import bgImg from "../assets/bg.png";
import { useSocialPreview } from "../hooks/useSocialPreview";
import SocialPreviewCard from "./SocialPreviewCard";
import { createPortal } from "react-dom";

const Hero: React.FC = () => {
  const { t } = useTranslation();

  // Main skills list
  const techBadges = [
    { name: "HTML", icon: "bxl-html5", color: "text-[#e34f26] border-[#e34f26]/20 bg-[#e34f26]/5" },
    { name: "CSS", icon: "bxl-css3", color: "text-[#1572b6] border-[#1572b6]/20 bg-[#1572b6]/5" },
    { name: "JavaScript", icon: "bxl-javascript", color: "text-[#f7df1e] border-[#f7df1e]/20 bg-[#f7df1e]/5" },
    { name: "React", icon: "bxl-react", color: "text-[#61dafb] border-[#61dafb]/20 bg-[#61dafb]/5" },
  ];

  return (
    <section
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-body selection:bg-first selection:text-body"
      id="home"
    >
      {/* --- STATIC GRADIENT GLOW BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute top-[-40%] left-[-20%] w-[140%] h-[140%] blur-[120px] opacity-40"
          style={{
            background: "radial-gradient(circle at center,rgba(59,130,246,0.12),rgba(168,85,247,0.08),transparent 70%)"
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 grid gap-12 lg:grid-cols-12 items-center w-full relative z-10">
        
        {/* --- LEFT: DETAILS --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 text-center md:text-start flex flex-col justify-center order-2 lg:order-1"
        >
          {/* Greeting */}
          <span className="text-text font-medium text-lg md:text-xl mb-3 block">
            {t("hero.greeting")}
          </span>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight leading-[1.1] bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent italic">
            {t("hero.name")}
          </h1>

          {/* Role */}
          <h2 className="text-xl md:text-2xl font-bold text-title mb-4 tracking-wide">
            {t("hero.role")}
          </h2>

          {/* Tagline */}
          <p className="text-text/80 text-sm md:text-base max-w-lg mb-8 leading-relaxed font-medium">
            {t("hero.tagline")}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start mb-8">
            {techBadges.map((badge, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-2 px-4 py-2 border rounded-xl text-xs font-bold transition-transform hover:-translate-y-1 ${badge.color}`}
              >
                <i className={`bx ${badge.icon} text-lg`}></i>
                <span>{badge.name}</span>
              </div>
            ))}
          </div>

          {/* Call To Actions */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start items-center mb-8">
            {/* Primary Button */}
            <Link
              to="work"
              smooth={true}
              offset={-70}
              duration={500}
              className="flex items-center gap-2 px-8 h-14 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl text-xs font-black uppercase tracking-wider transition-all shadow-lg shadow-blue-500/20 hover:shadow-purple-500/40 hover:-translate-y-1 active:scale-95 cursor-pointer"
            >
              <span>{t("hero.exploreWork")}</span>
              <i className="bx bx-plus text-base font-bold"></i>
            </Link>

            {/* Contact Button */}
            <Link
              to="contact"
              smooth={true}
              offset={-70}
              duration={500}
              className="flex items-center gap-2 px-8 h-14 border border-title/20 hover:border-first bg-transparent hover:bg-title/5 text-title rounded-2xl text-xs font-black uppercase tracking-wider transition-all hover:-translate-y-1 active:scale-95 cursor-pointer"
            >
              <span>{t("hero.contactMe")}</span>
              <i className="bx bx-paper-plane text-base"></i>
            </Link>
          </div>

          {/* Social Cluster & CV Downloads */}
          <div className="flex flex-col gap-4 border-t border-title/10 pt-6 mt-2">
            {/* Social Icons row */}
            <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
              <span className="text-[11px] font-black uppercase tracking-widest text-textLight">
                {t("hero.followMe")}
              </span>
              <div className="flex gap-3">
                <SocialIcon
                  href="https://wa.me/201126488442"
                  icon="bxl-whatsapp"
                  hoverColor="hover:text-emerald-500 hover:border-emerald-500"
                  platform="whatsapp"
                />
                <SocialIcon
                  href="https://www.linkedin.com/in/saeed-ramadan-686186201"
                  icon="bxl-linkedin"
                  hoverColor="hover:text-blue-500 hover:border-blue-500"
                  platform="linkedin"
                />
                <SocialIcon
                  href="https://github.com/Saeed-Ramadan"
                  icon="bxl-github"
                  hoverColor="hover:text-title hover:border-title"
                  platform="github"
                />
                <SocialIcon
                  href="https://www.youtube.com/@saeed-r1"
                  icon="bxl-youtube"
                  hoverColor="hover:text-red-500 hover:border-red-500"
                  platform="youtube"
                />
                <SocialIcon
                  href="https://www.facebook.com/said.aboshanab.92"
                  icon="bxl-facebook"
                  hoverColor="hover:text-blue-600 hover:border-blue-600"
                  platform="facebook"
                />
              </div>
            </div>

            {/* CV Downloads Link Row */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start items-center text-xs">
              <a
                href="/Saeed Ramadan Front End (React JS).pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-textLight hover:text-first transition-colors font-bold"
              >
                <i className="bx bx-download"></i>
                <span>{t("hero.devCV")}</span>
              </a>
              <span className="text-title/20">|</span>
              <a
                href="/Saeed Ramadan - Programming Instructor.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-textLight hover:text-first transition-colors font-bold"
              >
                <i className="bx bx-download"></i>
                <span>{t("hero.instCV")}</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* --- RIGHT: PREMIUM DEVICE CONTAINER --- */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2 relative select-none">
          {/* Subtle Grid Dots Decoration */}
          <div className="absolute right-[-20px] bottom-[-20px] w-36 h-36 bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:12px_12px] opacity-70 pointer-events-none -z-10"></div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-[280px] xs:w-[320px] md:w-[360px]"
          >
            {/* Prismatic Vessel Border Container */}
            <div className="relative aspect-[4/5] rounded-[2.5rem] p-3 bg-white/5 dark:bg-title/3 border border-white/10 dark:border-white/5 backdrop-blur-3xl shadow-[0_50px_100px_rgba(0,0,0,0.6)] overflow-visible">
              
              {/* Profile Image Wrap */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-body">
                <img
                  src={bgImg}
                  alt="Saeed Ramadan"
                  className="w-full h-full object-cover saturate-[1.1] brightness-[0.95] contrast-[1.05]"
                />
                {/* Purple to blue overlay glow on image bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-body via-body/20 to-transparent opacity-80"></div>
              </div>

              {/* Pulsing Availability Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-container/80 dark:bg-container/70 backdrop-blur-xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)] z-30">
                <div className="flex items-center gap-3">
                  {/* Pulsing Dot */}
                  <span className="relative flex h-3.5 w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-title leading-tight">
                      {t("hero.availableForWork")}
                    </h4>
                    <p className="text-[10px] text-textLight leading-none mt-0.5">
                      {t("hero.openToProjects")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Tech Icons */}
              {/* Floating React */}
              <FloatingIcon
                icon="bxl-react text-[#61dafb]"
                className="absolute -top-4 -left-4 shadow-[#61dafb]/20"
                delay={0}
              />

              {/* Floating JavaScript */}
              <FloatingIcon
                icon="bxl-javascript text-[#f7df1e]"
                className="absolute top-24 -right-6 shadow-[#f7df1e]/20"
                delay={1}
              />

              {/* Floating CSS3 */}
              <FloatingIcon
                icon="bxl-css3 text-[#1572b6]"
                className="absolute -top-6 right-12 shadow-[#1572b6]/20"
                delay={1.5}
              />

              {/* Floating Code Brackets */}
              <FloatingIcon
                icon="bx-code-curly text-[#a855f7]"
                className="absolute bottom-36 -right-6 shadow-[#a855f7]/20"
                delay={2}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- SUB-COMPONENTS ---

interface SocialIconProps {
  href: string;
  icon: string;
  hoverColor: string;
  platform: "whatsapp" | "linkedin" | "github" | "youtube" | "facebook";
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon, hoverColor, platform }) => {
  const {
    activePlatform,
    chatMessage,
    coords,
    setChatMessage,
    handleMouseEnter,
    handleMouseLeave,
    handleCardMouseEnter,
    handleCardMouseLeave,
    sendWhatsAppMessage,
  } = useSocialPreview();

  const showCard = activePlatform === platform && coords;

  return (
    <div
      className="relative"
      onMouseEnter={(e) => handleMouseEnter(platform, e.currentTarget)}
      onMouseLeave={handleMouseLeave}
    >
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`w-10 h-10 flex items-center justify-center bg-title/5 border border-title/10 rounded-xl text-lg text-textLight transition-all active:scale-95 ${hoverColor}`}
      >
        <i className={`bx ${icon}`}></i>
      </a>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {showCard && (
              <SocialPreviewCard
                platform={platform}
                chatMessage={chatMessage}
                setChatMessage={setChatMessage}
                sendWhatsAppMessage={sendWhatsAppMessage}
                onMouseEnter={handleCardMouseEnter}
                onMouseLeave={handleCardMouseLeave}
                coords={coords}
              />
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
};

interface FloatingIconProps {
  icon: string;
  className?: string;
  delay?: number;
}

const FloatingIcon: React.FC<FloatingIconProps> = ({ icon, className = "", delay = 0 }) => {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={`w-12 h-12 rounded-2xl bg-container/90 dark:bg-container/85 border border-white/10 flex items-center justify-center text-2xl shadow-xl z-20 hover:scale-110 transition-transform ${className}`}
    >
      <i className={`bx ${icon}`}></i>
    </motion.div>
  );
};

export default Hero;
