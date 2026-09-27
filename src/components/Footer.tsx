import React from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

// RATIONALE: Clean minimalist footer with navigation, verified credentials, and copyright information.
const Footer: React.FC = () => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      href: "https://wa.me/201126488442",
      icon: "bxl-whatsapp",
      label: "WhatsApp",
    },
    {
      href: "https://github.com/Saeed-Ramadan",
      icon: "bxl-github",
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/saeed-ramadan-686186201",
      icon: "bxl-linkedin",
      label: "LinkedIn",
    },
  ];

  const quickNav = [
    { id: "home", label: t("nav.home") },
    { id: "about", label: t("nav.about") },
    { id: "qualification", label: t("nav.qualification") },
    { id: "skills", label: t("nav.skills") },
    { id: "work", label: t("nav.portfolio") },
    { id: "leadership", label: t("nav.leadership") },
    { id: "contact", label: t("nav.contact") },
  ];

  return (
    <footer className="bg-body border-t border-slate-200/80 dark:border-white/[0.08] pt-14 pb-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-10">
          {/* Col 1: Brand & Identity (md:col-span-6) */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <img src="/logo.png" alt="Saeed Ramadan" className="w-8 h-auto" />
              <span className="text-base font-extrabold text-title font-code">
                Saeed Ramadan
              </span>
            </div>
            <p className="text-xs md:text-sm text-textLight leading-relaxed max-w-md">
              {t("footer.tagline")}
            </p>
            <div className="flex items-center gap-2 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="w-8 h-8 rounded-lg border border-slate-200/80 dark:border-white/[0.08] flex items-center justify-center text-textLight hover:text-indigo-500 hover:border-indigo-500/40 bg-slate-100/60 dark:bg-white/[0.02] transition-colors"
                >
                  <i className={`bx ${social.icon} text-base`} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links (md:col-span-6) */}
          <div className="md:col-span-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-title mb-3">
              {t("footer.quickLinks")}
            </h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {quickNav.map((link) => (
                <Link
                  key={link.id}
                  to={link.id}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-xs text-textLight hover:text-indigo-500 transition-colors cursor-pointer"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-200/60 dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-textLight">
          <p>© {new Date().getFullYear()} Saeed Ramadan. {t("footer.rights")}</p>
          <p className="font-code text-[11px] text-textLight/70">
            {t("footer.designedBy")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
