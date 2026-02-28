import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down
      if (window.scrollY >= 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.5, rotate: -15 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, y: 50, scale: 0.5, rotate: 15 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[5000]"
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={800}
            className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-container/40 backdrop-blur-xl border border-title/10 shadow-xl cursor-pointer overflow-hidden transition-all hover:border-first/50 hover:shadow-[0_0_30px_rgba(var(--first-color-rgb),0.3)] hover:-translate-y-1"
          >
            {/* Animated Glow Background */}
            <div className="absolute inset-0 bg-linear-to-tr from-first/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Icon inner container with scale effect */}
            <div className="relative z-10 flex items-center justify-center w-full h-full transform group-hover:scale-110 transition-transform duration-300">
              <i className="bx bx-up-arrow-alt text-2xl md:text-3xl text-title/80 group-hover:text-first transition-colors"></i>
            </div>

            {/* Sweep effect on hover */}
            <div className="absolute top-0 left-[-100%] w-full h-full bg-linear-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] group-hover:animate-sweep"></div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-1/4 right-1/4 h-[2px] bg-linear-to-r from-transparent via-first to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollUp;
