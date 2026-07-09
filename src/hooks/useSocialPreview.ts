import { useState, useRef, useCallback } from "react";

export type SocialPlatform = "whatsapp" | "linkedin" | "github" | "youtube" | "facebook";

export const useSocialPreview = () => {
  const [activePlatform, setActivePlatform] = useState<SocialPlatform | null>(null);
  const [chatMessage, setChatMessage] = useState("");
  const [coords, setCoords] = useState<{ top: number; left: number } | null>(null);
  const hoverTimeoutRef = useRef<number | null>(null);

  const handleMouseEnter = useCallback((platform: SocialPlatform, element: HTMLElement) => {
    if (hoverTimeoutRef.current) {
      window.clearTimeout(hoverTimeoutRef.current);
    }
    const rect = element.getBoundingClientRect();
    setCoords({
      top: rect.top - 12,
      left: rect.left + rect.width / 2,
    });
    setActivePlatform(platform);
  }, []);

  const handleMouseLeave = useCallback(() => {
    hoverTimeoutRef.current = window.setTimeout(() => {
      setActivePlatform(null);
      setCoords(null);
    }, 300); // Small grace period so users can move their cursor to the card
  }, []);

  const handleCardMouseEnter = useCallback(() => {
    if (hoverTimeoutRef.current) {
      window.clearTimeout(hoverTimeoutRef.current);
    }
  }, []);

  const handleCardMouseLeave = useCallback(() => {
    setActivePlatform(null);
    setCoords(null);
  }, []);

  const sendWhatsAppMessage = useCallback(() => {
    const formattedMsg = encodeURIComponent(chatMessage.trim());
    const url = `https://wa.me/201126488442${formattedMsg ? `?text=${formattedMsg}` : ""}`;
    window.open(url, "_blank", "noreferrer");
    setChatMessage("");
  }, [chatMessage]);

  return {
    activePlatform,
    chatMessage,
    coords,
    setChatMessage,
    handleMouseEnter,
    handleMouseLeave,
    handleCardMouseEnter,
    handleCardMouseLeave,
    sendWhatsAppMessage,
  };
};
