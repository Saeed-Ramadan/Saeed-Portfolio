import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import bgImg from "../assets/bg.png";
import avatarReadyImg from "../assets/avatar/saeed_avatar_ready.jpg";
import { useClipboard } from "../hooks/useClipboard";
import { useSocialPreview } from "../hooks/useSocialPreview";
import SocialPreviewCard from "./SocialPreviewCard";
import MagneticButton from "./common/MagneticButton";
import CurrentRolesBadge from "./common/CurrentRolesBadge";
import { createPortal } from "react-dom";
import { appleFadeUp, appleScaleReveal } from "../utils/motion";

// RATIONALE: Hero component focused exclusively on UI presentation.
// Interactivity is enriched with tactile MagneticButton wrappers, while entrance animations use Apple-style spring physics.
const Hero: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const { copy, isCopied } = useClipboard();
  const [showAvatar, setShowAvatar] = React.useState<boolean>(false);

  const primaryTechs = [
    { name: "Next.js", icon: "bx-layer", color: "text-slate-900 dark:text-white border-slate-300 dark:border-white/20 bg-slate-100 dark:bg-white/5" },
    { name: "React 19", icon: "bxl-react", color: "text-[#61dafb] border-[#61dafb]/20 bg-[#61dafb]/5" },
    { name: "TypeScript", icon: "bxl-typescript", color: "text-[#3178c6] border-[#3178c6]/20 bg-[#3178c6]/5" },
    { name: "Tailwind v4", icon: "bxl-tailwind-css", color: "text-[#06b6d4] border-[#06b6d4]/20 bg-[#06b6d4]/5" },
    { name: "TanStack Query", icon: "bx-sync", color: "text-[#ff4154] border-[#ff4154]/20 bg-[#ff4154]/5" },
    { name: "Zustand", icon: "bx-box", color: "text-amber-400 border-amber-400/20 bg-amber-400/5" },
  ];

  return (
    <section
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-body"
      id="home"
    >
      {/* Ambient Radial Lights - Subtle & Atmospheric */}
      <div className="ambient-glow-top" />
      <div className="ambient-glow-bottom" />

      <div className="max-w-6xl mx-auto px-6 grid gap-12 lg:grid-cols-12 items-center w-full relative z-10">
        {/* --- LEFT: DETAILS & VALUE PROPOSITION --- */}
        <motion.div
          variants={appleFadeUp}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 text-center md:text-start flex flex-col justify-center order-2 lg:order-1"
        >
          {/* Live Availability Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-500 text-xs font-semibold self-center md:self-start mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{t("hero.availableStatus")}</span>
            <span className="text-emerald-500/40">|</span>
            <span className="text-emerald-600 dark:text-emerald-300 font-medium">
              {t("hero.workMode")}
            </span>
          </div>

          {/* Greeting & Name */}
          <div className="mb-2">
            <span className="text-textLight font-medium text-sm md:text-base tracking-wide block mb-1">
              {t("hero.greeting")}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-title leading-[1.1]">
              {t("hero.name")}
            </h1>
          </div>

          {/* Subheading / Role */}
          <div className="mb-4">
            <span className="inline-block text-lg md:text-2xl font-bold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              {t("hero.role")}
            </span>
          </div>

          {/* Bio Tagline from CV */}
          <p className="text-text text-sm md:text-base max-w-xl mb-6 leading-relaxed font-normal">
            {t("hero.tagline")}
          </p>

          {/* Mobile Profile Photo (Visible only on < lg right after intro text) */}
          <div className="lg:hidden my-6 flex justify-center relative select-none">
            <HeroProfileCard
              showAvatar={showAvatar}
              setShowAvatar={setShowAvatar}
              isAr={isAr}
            />
          </div>

          {/* Core Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-8">
            {primaryTechs.map((tech) => (
              <span
                key={tech.name}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all duration-300 ease-apple hover:-translate-y-0.5 ${tech.color}`}
              >
                {tech.name === "Next.js" ? (
                  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 180 180" fill="none">
                    <mask id="nextjs-pill-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: "alpha" }}>
                      <circle cx="90" cy="90" r="90" fill="black" />
                    </mask>
                    <g mask="url(#nextjs-pill-mask)">
                      <circle cx="90" cy="90" r="90" fill="currentColor" />
                      <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white" />
                      <rect x="115" y="54" width="12" height="72" fill="white" />
                    </g>
                  </svg>
                ) : (
                  <i className={`bx ${tech.icon} text-base`} />
                )}
                <span>{tech.name}</span>
              </span>
            ))}
          </div>

          {/* Primary Action Buttons with Magnetic Pull */}
          <div className="flex flex-wrap gap-3.5 justify-center md:justify-start items-center mb-6">
            <MagneticButton strength={0.3}>
              <Link
                to="work"
                smooth={true}
                offset={-70}
                duration={500}
                className="flex items-center gap-2 px-6 h-12 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ease-apple shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/30 active:scale-95 cursor-pointer"
              >
                <span>{t("hero.exploreWork")}</span>
                <i className={`bx ${isAr ? "bx-left-arrow-alt" : "bx-right-arrow-alt"} text-lg`} />
              </Link>
            </MagneticButton>

            <MagneticButton strength={0.3}>
              <Link
                to="contact"
                smooth={true}
                offset={-70}
                duration={500}
                className="flex items-center gap-2 px-6 h-12 border border-slate-200 dark:border-white/10 hover:border-indigo-500/50 bg-white/50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-title rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ease-apple active:scale-95 cursor-pointer"
              >
                <span>{t("hero.contactMe")}</span>
                <i className="bx bx-paper-plane text-base" />
              </Link>
            </MagneticButton>

            <MagneticButton strength={0.25}>
              <a
                href="/Saeed Ramadan Front End (React JS).pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 h-12 border border-dashed border-indigo-500/30 hover:border-indigo-500 text-indigo-600 dark:text-indigo-400 bg-indigo-500/5 hover:bg-indigo-500/10 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ease-apple"
              >
                <i className="bx bx-download text-base" />
                <span>{t("hero.downloadCV")}</span>
              </a>
            </MagneticButton>
          </div>

          {/* Quick Direct Copy Bar & Social Links */}
          <div className="flex flex-wrap items-center gap-2.5 pt-5 border-t border-slate-200/80 dark:border-white/[0.08] justify-center md:justify-start">
            {/* Direct Calls (01032426483 - Preferred for Calls) */}
            <button
              onClick={() => copy("+201032426483")}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-cyan-500/30 text-xs text-textLight hover:text-title hover:border-cyan-500/60 bg-cyan-500/5 transition-colors cursor-pointer group"
              title="Click to copy 01032426483 (Preferred for Calls)"
            >
              <i className="bx bx-phone-call text-cyan-400 group-hover:scale-110 transition-transform" />
              <span className="font-code text-[11px] font-bold text-title">+201032426483</span>
              <span className="text-[9.5px] px-1.5 py-0.5 rounded bg-cyan-500/15 text-cyan-500 dark:text-cyan-400 font-semibold border border-cyan-500/20">
                {isCopied("+201032426483") ? t("hero.copied") : t("hero.preferredForCalls")}
              </span>
            </button>

            {/* WhatsApp (01126488442 - Preferred for WhatsApp) */}
            <button
              onClick={() => copy("+201126488442")}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-emerald-500/30 text-xs text-textLight hover:text-title hover:border-emerald-500/60 bg-emerald-500/5 transition-colors cursor-pointer group"
              title="Click to copy 01126488442 (Preferred for WhatsApp)"
            >
              <i className="bx bxl-whatsapp text-emerald-400 group-hover:scale-110 transition-transform text-sm" />
              <span className="font-code text-[11px] font-bold text-title">+201126488442</span>
              <span className="text-[9.5px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-500 dark:text-emerald-400 font-semibold border border-emerald-500/20">
                {isCopied("+201126488442") ? t("hero.copied") : t("hero.preferredForWhatsApp")}
              </span>
            </button>

            {/* Quick Copy Email */}
            <button
              onClick={() => copy("saeedramadan82@gmail.com")}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 text-xs text-textLight hover:text-title hover:border-indigo-500/40 bg-white/40 dark:bg-white/[0.03] transition-colors cursor-pointer"
              title="Click to copy email"
            >
              <i className="bx bx-envelope text-indigo-500" />
              <span className="font-code text-[11px]">saeedramadan82@gmail.com</span>
              <span className="text-[10px] text-indigo-400 font-bold ml-1">
                {isCopied("saeedramadan82@gmail.com") ? t("hero.copied") : t("hero.copyEmail")}
              </span>
            </button>

            {/* Social Icons with Magnetic physics */}
            <div className="flex items-center gap-2 ml-auto rtl:ml-0 rtl:mr-auto">
              <MagneticButton strength={0.4}>
                <SocialIcon
                  href="https://wa.me/201126488442"
                  icon="bxl-whatsapp"
                  hoverColor="hover:text-emerald-500 hover:border-emerald-500/40"
                  platform="whatsapp"
                />
              </MagneticButton>
              <MagneticButton strength={0.4}>
                <SocialIcon
                  href="https://www.linkedin.com/in/saeed-ramadan-686186201"
                  icon="bxl-linkedin"
                  hoverColor="hover:text-blue-500 hover:border-blue-500/40"
                  platform="linkedin"
                />
              </MagneticButton>
              <MagneticButton strength={0.4}>
                <SocialIcon
                  href="https://github.com/Saeed-Ramadan"
                  icon="bxl-github"
                  hoverColor="hover:text-title hover:border-title/40"
                  platform="github"
                />
              </MagneticButton>
            </div>
          </div>
        </motion.div>

        {/* --- RIGHT: SLEEK ARCHITECTURAL CARD (Visible only on Desktop lg+) --- */}
        <div className="hidden lg:flex lg:col-span-5 justify-center relative select-none">
          <HeroProfileCard
            showAvatar={showAvatar}
            setShowAvatar={setShowAvatar}
            isAr={isAr}
          />
        </div>
      </div>
    </section>
  );
};

interface HeroProfileCardProps {
  showAvatar: boolean;
  setShowAvatar: React.Dispatch<React.SetStateAction<boolean>>;
  isAr: boolean;
}

const HeroProfileCard: React.FC<HeroProfileCardProps> = ({
  showAvatar,
  setShowAvatar,
  isAr,
}) => {
  return (
    <motion.div
      variants={appleScaleReveal}
      initial="hidden"
      animate="visible"
      className="relative w-[280px] xs:w-[320px] sm:w-[350px]"
    >
      {/* Elegant Framed Container */}
      <div className="relative aspect-[4/5] rounded-3xl p-2.5 bg-gradient-to-b from-white/10 via-white/5 to-transparent dark:from-white/[0.08] dark:to-transparent border border-slate-200/80 dark:border-white/[0.1] shadow-2xl backdrop-blur-xl">
        {/* Profile Image Wrap */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-container">
          <AnimatePresence mode="wait">
            <motion.img
              key={showAvatar ? "avatar" : "real"}
              src={showAvatar ? avatarReadyImg : bgImg}
              alt="Saeed Ramadan"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full h-full object-cover saturate-[1.05] brightness-[0.98] contrast-[1.02]"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/20 to-transparent opacity-80 pointer-events-none" />

          {/* Dynamic 3D Avatar Toggle Pill */}
          <div className="absolute top-3 right-3 z-30">
            <button
              type="button"
              onClick={() => setShowAvatar((prev) => !prev)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/80 hover:bg-slate-900 border border-white/20 text-[11px] font-semibold text-white shadow-xl backdrop-blur-md cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 group"
              title={showAvatar ? "Switch to Real Photo" : "Switch to 3D Avatar"}
            >
              <i
                className={`bx ${
                  showAvatar ? "bx-user text-emerald-400" : "bx-bot text-cyan-400"
                } text-xs transition-transform group-hover:rotate-12`}
              />
              <span className="font-sans">
                {showAvatar
                  ? isAr
                    ? "الصورة الحقيقية"
                    : "Real Photo"
                  : isAr
                  ? "الأفاتار 3D"
                  : "3D Avatar"}
              </span>
            </button>
          </div>
        </div>

        {/* Floating Engineering Badge: Dynamic Current Roles Rotator */}
        <div className="absolute bottom-4 left-4 right-4 z-20">
          <CurrentRolesBadge />
        </div>
      </div>
    </motion.div>
  );
};

interface SocialIconProps {
  href: string;
  icon: string;
  hoverColor: string;
  platform: "whatsapp" | "linkedin" | "github" | "youtube" | "facebook";
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon, hoverColor, platform }) => {
  const {
    isHovered,
    coords,
    handleMouseEnter,
    handleMouseLeave,
    previewData,
  } = useSocialPreview(platform);

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200/80 dark:border-white/[0.08] bg-white/40 dark:bg-white/[0.02] text-textLight transition-all duration-300 ease-apple ${hoverColor}`}
        aria-label={platform}
      >
        <i className={`bx ${icon} text-lg`} />
      </a>

      {createPortal(
        <AnimatePresence>
          {isHovered && coords && (
            <SocialPreviewCard platform={platform} coords={coords} data={previewData} />
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
};

export default Hero;
