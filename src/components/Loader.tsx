import React from "react";
import InteractiveAvatarLoader from "./loader/InteractiveAvatarLoader";

interface LoaderProps {
  onComplete: () => void;
}

// RATIONALE: Legacy Loader wrapper pointing directly to the new 3D Avatar Interactive Preloader system,
// maintaining backwards compatibility with App.tsx routing while enforcing clean architecture.
const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  return <InteractiveAvatarLoader onComplete={onComplete} />;
};

export default Loader;
