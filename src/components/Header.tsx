import React from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { createPortal } from "react-dom";
import { useTheme } from "../hooks/useTheme";
import { useHeaderNav } from "../hooks/useHeaderNav";

// RATIONALE: Header component provides sticky glass navigation with bilingual RTL/LTR switching and smooth section scrolling.
const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const { isScrolled, isMenuOpen, isRtl, toggleMenu, closeMenu } = useHeaderNav();

  const toggleLanguage = () => {
    const nextLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(nextLang);
  };

  const navLinks = [
    { to: "home", label: t("nav.home"), icon: "bx-home-alt" },
    { to: "about", label: t("nav.about"), icon: "bx-user" },
    { to: "qualification", label: t("nav.qualification"), icon: "bx-briefcase-alt-2" },
    { to: "skills", label: t("nav.skills"), icon: "bx-code-alt" },
    { to: "work", label: t("nav.portfolio"), icon: "bx-folder" },
    { to: "leadership", label: t("nav.leadership"), icon: "bx-award" },
    { to: "contact", label: t("nav.contact"), icon: "bx-envelope" },
  ];

  const isDark = theme === "dark";

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[10000] transition-all duration-300 ${
          isScrolled
            ? "bg-body/85 backdrop-blur-md border-b border-slate-200/80 dark:border-white/[0.06] py-3.5 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 relative z-[10003]">
          {/* Logo / Brand Name */}
          <Link
            to="home"
            smooth={true}
            offset={-70}
            className="flex items-center gap-3 cursor-pointer hover:opacity-90 transition-opacity"
          >
            <img
              src="/logo.png"
              alt="Saeed Ramadan"
              className="w-8 h-auto object-contain"
            />
            <span className="font-extrabold text-sm tracking-tight text-title font-code hidden sm:inline-block">
              saeed.dev
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    activeClass="text-indigo-500 font-bold"
                    className="text-xs font-semibold text-text hover:text-indigo-500 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Language & Theme Controls */}
            <div className="flex items-center gap-3 border-l border-slate-200 dark:border-white/10 pl-5 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-5">
              <button
                onClick={toggleLanguage}
                aria-label="Toggle language"
                className="text-xs font-bold text-title hover:text-indigo-500 transition-colors px-2.5 py-1 rounded-md border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.04] cursor-pointer"
              >
                {i18n.language === "en" ? "العربية" : "EN"}
              </button>
              <button
                onClick={toggleTheme}
                aria-label="Toggle dark/light theme"
                className="w-8 h-8 flex items-center justify-center rounded-md border border-slate-200 dark:border-white/10 text-title hover:text-indigo-500 bg-slate-100 dark:bg-white/[0.04] transition-colors cursor-pointer text-base"
              >
                <i className={`bx ${isDark ? "bx-sun" : "bx-moon"}`} />
              </button>
            </div>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="flex items-center gap-2.5 md:hidden">
            <button
              onClick={toggleLanguage}
              aria-label="Toggle language"
              className="text-xs font-bold text-title px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.04] cursor-pointer"
            >
              {i18n.language === "en" ? "AR" : "EN"}
            </button>
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark/light theme"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 text-title cursor-pointer text-lg"
            >
              <i className={`bx ${isDark ? "bx-sun" : "bx-moon"}`} />
            </button>
            <button
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-indigo-600 text-white cursor-pointer active:scale-95 transition-all"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              <i className={`bx ${isMenuOpen ? "bx-x" : "bx-menu"} text-xl`} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {typeof document !== "undefined" &&
        createPortal(
          <>
            {isMenuOpen && (
              <div
                className="fixed inset-0 bg-slate-950/80 z-[99998] md:hidden backdrop-blur-sm transition-opacity duration-300"
                onClick={closeMenu}
              />
            )}

            <div
              className={`fixed top-0 bottom-0 h-full w-[300px] max-w-[85vw] shadow-2xl z-[99999] md:hidden flex flex-col justify-between p-6 transition-transform duration-300 ease-out bg-white dark:bg-[#0c101b] border-slate-200 dark:border-white/10 overflow-y-auto ${
                isRtl
                  ? `right-0 border-l ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`
                  : `left-0 border-r ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-slate-200 dark:border-white/10">
                  <div className="flex items-center gap-3 min-w-0">
                    <img src="/logo.png" alt="Saeed Ramadan" className="w-8 h-8 object-contain shrink-0" />
                    <div className="min-w-0">
                      <span className="text-sm font-bold text-slate-900 dark:text-white block leading-tight truncate">
                        {i18n.language === "ar" ? "سعيد رمضان" : "Saeed Ramadan"}
                      </span>
                      <span className="text-[10.5px] text-slate-500 dark:text-slate-400 font-code block mt-0.5">
                        Front-End Developer
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={closeMenu}
                    aria-label="Close menu"
                    className="w-9 h-9 rounded-xl border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/[0.08] transition-colors cursor-pointer shrink-0"
                  >
                    <i className="bx bx-x text-2xl" />
                  </button>
                </div>

                <ul className="py-5 space-y-1.5">
                  {navLinks.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={closeMenu}
                        activeClass="!text-indigo-600 dark:!text-indigo-400 !bg-indigo-500/10 dark:!bg-indigo-500/15 font-bold"
                        className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-white/[0.05] transition-all cursor-pointer"
                      >
                        <i className={`bx ${link.icon} text-lg text-indigo-500/80`} />
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-white/10 space-y-3">
                <div className="flex items-center justify-between p-2 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.06]">
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                    {isRtl ? "المظهر واللغة" : "Theme & Language"}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={toggleLanguage}
                      aria-label="Toggle language"
                      className="px-2.5 py-1 text-xs font-bold rounded-lg border border-slate-300 dark:border-white/10 text-slate-800 dark:text-white bg-white dark:bg-white/[0.08] cursor-pointer"
                    >
                      {i18n.language === "en" ? "العربية" : "EN"}
                    </button>
                    <button
                      onClick={toggleTheme}
                      aria-label="Toggle dark/light theme"
                      className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-300 dark:border-white/10 text-slate-800 dark:text-white bg-white dark:bg-white/[0.08] cursor-pointer text-base"
                    >
                      <i className={`bx ${isDark ? "bx-sun" : "bx-moon"}`} />
                    </button>
                  </div>
                </div>

                <Link
                  to="contact"
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closeMenu}
                  className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-indigo-600/30 active:scale-[0.98] transition-all"
                >
                  <span>{t("hero.contactMe")}</span>
                  <i className="bx bx-paper-plane text-sm" />
                </Link>
              </div>
            </div>
          </>,
          document.body
        )}
    </>
  );
};

export default Header;
