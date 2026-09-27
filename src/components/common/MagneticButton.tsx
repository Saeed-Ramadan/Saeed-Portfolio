import React from "react";
import { motion } from "framer-motion";
import { useMagnetic } from "../../hooks/useMagnetic";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

// RATIONALE: High-order interactive wrapper adding magnetic spring attraction to interactive elements.
export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = "",
  strength = 0.28,
}) => {
  const { ref, x, y, handleMouseMove, handleMouseLeave, canHover } = useMagnetic({
    strength,
  });

  if (!canHover) {
    return <div className={`inline-block ${className}`}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default MagneticButton;
