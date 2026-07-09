import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const ScrollUp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
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
            className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-slate-900/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200/20 dark:border-white/10 shadow-2xl cursor-pointer overflow-hidden transition-all hover:border-first/50 hover:shadow-[0_0_25px_rgba(155,137,245,0.4)] hover:-translate-y-1"
          >
            {/* Animated Glow Background */}
            <div className="absolute inset-0 bg-linear-to-tr from-first/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Icon inner container with slide transition */}
            <div className="relative z-10 flex items-center justify-center w-full h-full overflow-hidden">
              <i className="bx bx-chevron-up text-3xl text-title/80 group-hover:text-first transition-all duration-300 transform group-hover:-translate-y-7"></i>
              <i className="bx bx-chevron-up text-3xl text-first absolute translate-y-7 group-hover:translate-y-0 transition-all duration-300"></i>
            </div>

            {/* Sweep effect on hover */}
            <div className="absolute top-0 left-[-100%] w-full h-full bg-linear-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] group-hover:animate-sweep"></div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollUp;
