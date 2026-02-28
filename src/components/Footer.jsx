import React from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-container border-t border-title/5 pt-20 pb-12 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-first/30 to-transparent"></div>

      <div className="max-w-275 mx-auto px-6 text-center">
        <h1 className="text-3xl font-bold text-first mb-8 tracking-tight">
          {t("hero.name")}
        </h1>

        <ul className="flex flex-wrap justify-center gap-8 mb-12">
          {["home", "about", "work", "Services"].map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                className="text-text font-bold hover:text-first transition-colors cursor-pointer uppercase text-xs tracking-widest"
              >
                {t(`nav.${item.toLowerCase()}`)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex justify-center gap-6 mb-16">
          {[
            {
              href: "https://www.facebook.com/said.aboshanab.92",
              icon: "bxl-facebook",
            },
            { href: "https://www.youtube.com/@saeed-r1", icon: "bxl-youtube" },
            {
              href: "https://www.linkedin.com/in/saeed-ramadan-686186201",
              icon: "bxl-linkedin",
            },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-body border border-title/5 rounded-2xl text-2xl text-text transition-all hover:bg-first hover:text-body hover:-translate-y-2"
            >
              <i className={`bx ${social.icon}`}></i>
            </a>
          ))}
        </div>

        <span className="block text-xs text-textLight font-medium">
          &#169; Saeed Ramadan. All rights reserved 2026.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
