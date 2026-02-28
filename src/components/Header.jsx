import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setIsMenuOpen((prev) => (prev ? false : prev)); // Only close if open
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    const nextLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(nextLang);
  };

  const navLinks = [
    { to: "home", label: t("nav.home"), icon: "bx-home-alt" },
    { to: "about", label: t("nav.about"), icon: "bx-user" },
    {
      to: "qualification",
      label: t("nav.qualification"),
      icon: "bx-graduation",
    },
    { to: "skills", label: t("nav.skills"), icon: "bx-book-alt" },
    { to: "Services", label: t("nav.services"), icon: "bx-check-shield" },
    { to: "work", label: t("nav.portfolio"), icon: "bx-briefcase-alt-2" },
    {
      to: "contact",
      label: t("nav.contact"),
      icon: "bx-message-square-detail",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-10000 transition-all duration-400 ${
        isScrolled || isMenuOpen
          ? "bg-body/90 backdrop-blur-[20px] shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-5xl mx-4 lg:mx-auto flex justify-between items-center px-4 relative z-10003">
        <Link
          to="home"
          smooth={true}
          className="text-first font-bold text-xl cursor-pointer"
        >
          {t("hero.name")}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="text-first"
                  className="text-text font-medium cursor-pointer transition-colors hover:text-first"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 border-l border-textLight/20 pl-4 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-4">
            <button
              onClick={toggleLanguage}
              className="text-sm font-bold text-title hover:text-first transition-colors px-2 py-1 rounded border border-textLight/20"
            >
              {i18n.language === "en" ? "AR" : "EN"}
            </button>
            <button
              onClick={toggleTheme}
              className="text-xl text-title hover:text-first transition-colors"
            >
              <i
                className={`bx ${theme === "dark" ? "bx-sun" : "bx-moon"}`}
              ></i>
            </button>
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleLanguage}
            className="text-[10px] font-black text-title px-3 py-1.5 rounded-lg border border-title/10 bg-container/20 backdrop-blur-sm active:scale-95 transition-all"
          >
            {i18n.language === "en" ? "AR" : "EN"}
          </button>
          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-container/20 border border-title/10 backdrop-blur-sm text-title active:scale-95 transition-all"
          >
            <i className={`bx ${theme === "dark" ? "bx-sun" : "bx-moon"}`}></i>
          </button>
          <div
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-first text-body shadow-lg shadow-first/20 cursor-pointer active:scale-95 transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i
              className={`bx ${isMenuOpen ? "bx-x" : "bx-grid-alt"} text-xl`}
            ></i>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-[20px] z-10001 md:hidden transition-opacity duration-400"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed top-[calc(var(--header-height)+0.5rem)] left-4 right-4 bg-container border border-title/10 py-8 px-6 rounded-2xl shadow-2xl md:hidden z-10002 transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? "translate-y-0 opacity-100 visible backdrop-blur-[20px]"
            : "-translate-y-10 opacity-0 invisible backdrop-blur-0"
        }`}
      >
        <ul className="grid grid-cols-1 gap-3">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="!text-first"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center justify-between bg-body p-4 rounded-lg text-text text-sm font-bold cursor-pointer transition-all group active:scale-[0.98] border border-title/5 ${
                  i18n.language === "en" ? "tracking-[1px]" : "font-arabic"
                }`}
              >
                <span className="opacity-100 group-[.active]:opacity-100 group-[.active]:text-first transition-all">
                  {link.label}
                </span>
                <div className="w-10 h-10 shrink-0 bg-container border border-title/10 rounded-lg flex items-center justify-center text-lg shadow-sm transition-all group-[.active]:bg-first group-[.active]:text-body group-[.active]:border-transparent">
                  <i className={`bx ${link.icon}`}></i>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
