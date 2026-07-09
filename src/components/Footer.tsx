import React from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { AnimatePresence } from "framer-motion";
import { useSocialPreview } from "../hooks/useSocialPreview";
import SocialPreviewCard from "./SocialPreviewCard";
import { createPortal } from "react-dom";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const socialLinks: {
    href: string;
    icon: string;
    hoverColor: string;
    platform: "whatsapp" | "github" | "linkedin" | "youtube" | "facebook";
  }[] = [
    {
      href: "https://wa.me/201126488442",
      icon: "bxl-whatsapp",
      hoverColor: "hover:text-[#25d366] hover:border-[#25d366]",
      platform: "whatsapp",
    },
    {
      href: "https://github.com/Saeed-Ramadan",
      icon: "bxl-github",
      hoverColor: "hover:text-[#24292e] hover:border-[#24292e] dark:hover:text-white dark:hover:border-white",
      platform: "github",
    },
    {
      href: "https://www.linkedin.com/in/saeed-ramadan-686186201",
      icon: "bxl-linkedin",
      hoverColor: "hover:text-[#0077b5] hover:border-[#0077b5]",
      platform: "linkedin",
    },
    {
      href: "https://www.youtube.com/@saeed-r1",
      icon: "bxl-youtube",
      hoverColor: "hover:text-[#ff0000] hover:border-[#ff0000]",
      platform: "youtube",
    },
    {
      href: "https://www.facebook.com/said.aboshanab.92",
      icon: "bxl-facebook",
      hoverColor: "hover:text-[#1877f2] hover:border-[#1877f2]",
      platform: "facebook",
    },
  ];

  const quickNav = [
    { id: "home", label: t("nav.home") },
    { id: "about", label: t("nav.about") },
    { id: "work", label: t("nav.work") },
    { id: "skills", label: t("nav.skills") },
    { id: "contact", label: t("nav.contact") },
  ];

  const services = [
    t("footer.s1"),
    t("footer.s2"),
    t("footer.s3"),
    t("footer.s4"),
  ];

  return (
    <footer className="bg-body border-t border-slate-200/60 dark:border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-linear-to-r from-transparent via-purple-500/30 to-transparent"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Column 1 (lg:col-span-4): Logo, bio, and socials */}
          <div className="lg:col-span-4 space-y-6 flex flex-col items-center md:items-start text-center md:text-start">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Saeed Ramadan Logo"
                className="w-12 h-auto object-contain select-none filter drop-shadow-[0_4px_12px_rgba(99,102,241,0.15)]"
              />
            </div>

            {/* Biography statement */}
            <p className="text-xs md:text-sm text-textLight leading-relaxed max-w-xs font-medium">
              {t("footer.role")}
            </p>

            {/* Social icons row */}
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <FooterSocialIcon key={idx} social={social} />
              ))}
            </div>
          </div>

          {/* Column 2 (lg:col-span-2): Quick Links */}
          <div className="lg:col-span-2 space-y-4 flex flex-col items-center md:items-start">
            <h4 className="text-xs md:text-sm font-black uppercase tracking-wider text-title">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2.5 text-center md:text-start">
              {quickNav.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.id}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-xs text-textLight hover:text-first transition-colors font-semibold cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 (lg:col-span-3): Services */}
          <div className="lg:col-span-3 space-y-4 flex flex-col items-center md:items-start">
            <h4 className="text-xs md:text-sm font-black uppercase tracking-wider text-title">
              {t("footer.services")}
            </h4>
            <ul className="space-y-2.5 text-center md:text-start">
              {services.map((service, idx) => (
                <li key={idx} className="text-xs text-textLight font-semibold">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 (lg:col-span-3): Call-to-action text */}
          <div className="lg:col-span-3 space-y-4 flex flex-col items-center md:items-start text-center md:text-start">
            <h4 className="text-xs md:text-sm font-black uppercase tracking-wider text-title">
              {t("footer.startProject")}
            </h4>
            <p className="text-xs text-textLight leading-relaxed font-semibold max-w-[240px]">
              {t("footer.projectDesc")}
            </p>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 mt-12 border-t border-slate-200/60 dark:border-white/5 text-center sm:text-start">
          <span className="text-[10px] md:text-xs text-textLight font-semibold">
            {t("footer.rights")}
          </span>
          <span className="text-[10px] md:text-xs text-textLight font-semibold flex items-center gap-1">
            <span>{t("footer.madeWith")}</span>
            <i className="bx bxs-heart text-red-500 animate-pulse"></i>
          </span>
        </div>

      </div>
    </footer>
  );
};

interface FooterSocialIconProps {
  social: {
    href: string;
    icon: string;
    hoverColor: string;
    platform: "whatsapp" | "github" | "linkedin" | "youtube" | "facebook";
  };
}

const FooterSocialIcon: React.FC<FooterSocialIconProps> = ({ social }) => {
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

  const showCard = activePlatform === social.platform && coords;

  return (
    <div
      className="relative"
      onMouseEnter={(e) => handleMouseEnter(social.platform, e.currentTarget)}
      onMouseLeave={handleMouseLeave}
    >
      <a
        href={social.href}
        target="_blank"
        rel="noreferrer"
        className={`w-9 h-9 rounded-full bg-slate-100/50 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 flex items-center justify-center text-lg text-textLight hover:bg-transparent ${social.hoverColor} transition-all duration-300 hover:-translate-y-0.5`}
      >
        <i className={`bx ${social.icon}`}></i>
      </a>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {showCard && (
              <SocialPreviewCard
                platform={social.platform}
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

export default Footer;
