import React from "react";
import { useTextScramble } from "../../hooks/useTextScramble";

interface ScrambleTextProps {
  text: string;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "h4" | "p";
  triggerOnHover?: boolean;
}

// RATIONALE: Presentation component for cryptographic text reveal animation.
// Pure UI component delegating state and ticker logic to useTextScramble.
export const ScrambleText: React.FC<ScrambleTextProps> = ({
  text,
  className = "",
  as: Component = "span",
  triggerOnHover = true,
}) => {
  const { displayText, trigger, isScrambling } = useTextScramble(text);

  return (
    <Component
      onMouseEnter={triggerOnHover ? trigger : undefined}
      onClick={trigger}
      className={`inline-block select-none transition-colors duration-200 cursor-default ${
        isScrambling ? "text-indigo-400 font-mono tracking-wider" : ""
      } ${className}`}
    >
      {displayText}
    </Component>
  );
};

export default ScrambleText;
