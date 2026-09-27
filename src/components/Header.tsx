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
    { to: "home", label: t("nav.home") },
    { to: "about", label: t("nav.about") },
    { to: "qualification", label: t("nav.qualification") },
    { to: "skills", label: t("nav.skills") },
    { to: "work", label: t("nav.portfolio") },
    { to: "leadership", label: t("nav.leadership") },
    { to: "contact", label: t("nav.contact") },
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
                className="fixed inset-0 bg-black/60 z-[99998] md:hidden backdrop-blur-xs transition-opacity"
                onClick={closeMenu}
              />
            )}

            <div
              className={`fixed top-0 bottom-0 h-full w-[280px] max-w-[85vw] shadow-2xl z-[99999] md:hidden flex flex-col justify-between p-6 transition-transform duration-300 ease-out bg-container border-slate-200 dark:border-white/10 ${
                isRtl
                  ? `right-0 border-l ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`
                  : `left-0 border-r ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-slate-200 dark:border-white/10">
                  <div className="flex items-center gap-2.5">
                    <img src="/logo.png" alt="Saeed Ramadan" className="w-7 h-auto" />
                    <span className="text-sm font-bold text-title">
                      {i18n.language === "ar" ? "سعيد رمضان" : "Saeed Ramadan"}
                    </span>
                  </div>
                  <button
                    onClick={closeMenu}
                    className="w-8 h-8 rounded-lg border border-slate-200 dark:border-white/10 flex items-center justify-center text-title"
                  >
                    <i className="bx bx-x text-xl" />
                  </button>
                </div>

                <ul className="py-6 space-y-2">
                  {navLinks.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={closeMenu}
                        className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-text hover:text-indigo-500 hover:bg-slate-100 dark:hover:bg-white/[0.04] transition-all cursor-pointer"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                <Link
                  to="contact"
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closeMenu}
                  className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{t("hero.contactMe")}</span>
                  <i className="bx bx-paper-plane" />
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
