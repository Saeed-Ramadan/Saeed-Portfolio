import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { SocialPlatform } from "../hooks/useSocialPreview";

interface SocialPreviewCardProps {
  platform: SocialPlatform;
  chatMessage: string;
  setChatMessage: (msg: string) => void;
  sendWhatsAppMessage: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  coords: { top: number; left: number };
}

const SocialPreviewCard: React.FC<SocialPreviewCardProps> = ({
  platform,
  chatMessage,
  setChatMessage,
  sendWhatsAppMessage,
  onMouseEnter,
  onMouseLeave,
  coords,
}) => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  } as const;

  const renderContent = () => {
    switch (platform) {
      case "whatsapp":
        return (
          <div className="w-72 bg-[#efeae2] dark:bg-[#0b141a] rounded-2xl overflow-hidden shadow-2xl border border-emerald-500/20 text-slate-800 dark:text-slate-100">
            {/* Header */}
            <div className="bg-[#00a884] px-4 py-3 flex items-center gap-3 text-white">
              <div className="relative">
                <img
                  src="/logo.png"
                  alt="Saeed Ramadan"
                  className="w-10 h-10 rounded-full border border-white/20 bg-white"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border border-emerald-600 rounded-full" />
              </div>
              <div className="text-left rtl:text-right">
                <h4 className="text-xs font-bold leading-tight">Saeed Ramadan</h4>
                <span className="text-[10px] opacity-90">
                  {isAr ? "متصل الآن" : "Online"}
                </span>
              </div>
            </div>

            {/* Chat Body */}
            <div className="p-4 space-y-3 min-h-[140px] flex flex-col justify-end bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat bg-[size:180px_auto] bg-opacity-[0.06]">
              <div className="bg-white dark:bg-[#202c33] p-2.5 rounded-xl shadow-xs text-[11px] max-w-[85%] self-start text-left rtl:text-right rounded-tl-none border-l-4 border-emerald-500">
                <p className="font-semibold text-emerald-600 mb-0.5">Saeed Ramadan</p>
                <p className="leading-relaxed">
                  {isAr
                    ? "مرحباً! أهلاً بك في موقعي. أرسل لي رسالة لبدء العمل معاً."
                    : "Hi! Welcome to my site. Send me a message to start working together."}
                </p>
                <span className="text-[8px] text-slate-400 block text-right mt-1">11:11 AM</span>
              </div>
            </div>

            {/* Input Footer */}
            <div className="p-3 bg-[#f0f2f5] dark:bg-[#202c33] border-t border-slate-200 dark:border-white/5 flex gap-2 items-center">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendWhatsAppMessage()}
                placeholder={isAr ? "اكتب رسالة..." : "Type a message..."}
                className="flex-1 bg-white dark:bg-[#2a3942] border-0 text-slate-800 dark:text-slate-100 rounded-xl px-3 py-2 text-xs focus:ring-1 focus:ring-emerald-500 focus:outline-hidden"
              />
              <button
                onClick={sendWhatsAppMessage}
                aria-label="Send WhatsApp"
                className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer shrink-0 border-0"
              >
                <i className="bx bxs-send text-sm rotate-0 rtl:rotate-180" />
              </button>
            </div>
          </div>
        );

      case "github":
        return (
          <div className="w-76 bg-white dark:bg-[#0d1117] rounded-2xl p-4 shadow-2xl border border-slate-200 dark:border-white/5 text-slate-800 dark:text-[#c9d1d9] text-left rtl:text-right font-sans">
            {/* Header info */}
            <div className="flex gap-3 mb-4 items-center">
              <img
                src="/logo.png"
                alt="Saeed Ramadan"
                className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100"
              />
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-[#f0f6fc] leading-tight">
                  Saeed Ramadan
                </h4>
                <p className="text-xs text-slate-400">@Saeed-Ramadan</p>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-2 py-2.5 px-3 rounded-xl bg-slate-50 dark:bg-[#161b22] text-center mb-4 border border-slate-100 dark:border-white/5">
              <div>
                <span className="block text-xs font-black text-slate-900 dark:text-[#f0f6fc]">
                  24
                </span>
                <span className="text-[9px] text-slate-400">
                  {isAr ? "مستودعات" : "Repos"}
                </span>
              </div>
              <div>
                <span className="block text-xs font-black text-slate-900 dark:text-[#f0f6fc]">
                  1.2k+
                </span>
                <span className="text-[9px] text-slate-400">
                  {isAr ? "مساهمات" : "Commits"}
                </span>
              </div>
              <div>
                <span className="block text-xs font-black text-slate-900 dark:text-[#f0f6fc]">
                  85
                </span>
                <span className="text-[9px] text-slate-400">
                  {isAr ? "متابعين" : "Followers"}
                </span>
              </div>
            </div>

            {/* Simulated Contribution Grid */}
            <div className="space-y-1.5 mb-3">
              <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold font-mono">
                {isAr ? "سجل المساهمات المباشر" : "Live Activity Grid"}
              </span>
              <div className="flex gap-1">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    {[...Array(4)].map((_, j) => {
                      const colors = [
                        "bg-slate-100 dark:bg-[#161b22]",
                        "bg-[#9be9a8] dark:bg-[#0e4429]",
                        "bg-[#40c463] dark:bg-[#006d32]",
                        "bg-[#30a14e] dark:bg-[#26a641]",
                        "bg-[#216e39] dark:bg-[#39d353]",
                      ];
                      const randIdx = Math.floor(Math.random() * colors.length);
                      return (
                        <div
                          key={j}
                          className={`w-3.5 h-3.5 rounded-sm ${colors[randIdx]} transition-all duration-500`}
                        />
                      );
                    })}
                  </div>
                ))}
                <div className="flex flex-col justify-between text-[8px] text-slate-400 pl-1 font-mono leading-none">
                  <span>Mon</span>
                  <span>Wed</span>
                  <span>Fri</span>
                </div>
              </div>
            </div>

            <p className="text-[10px] text-slate-400 leading-relaxed font-semibold italic">
              {isAr
                ? "انقر لفتح الملف التعريفي واستعراض الأكواد المصدرية."
                : "Click to open profile and inspect all source codes."}
            </p>
          </div>
        );

      case "linkedin":
        return (
          <div className="w-72 bg-white dark:bg-[#1b1f23] rounded-2xl overflow-hidden shadow-2xl border border-blue-500/20 text-slate-800 dark:text-white text-left rtl:text-right font-sans">
            {/* Blue Banner */}
            <div className="h-12 bg-linear-to-r from-blue-600 to-[#0077b5] relative" />

            {/* Profile Avatar overlay */}
            <div className="px-4 pb-4 relative">
              <img
                src="/logo.png"
                alt="Saeed"
                className="w-14 h-14 rounded-full border-2 border-white dark:border-[#1b1f23] absolute -top-7 left-4 rtl:left-auto rtl:right-4 bg-white shadow-md"
              />
              <div className="pt-8">
                <h4 className="text-sm font-bold text-slate-900 dark:text-[#f3f6f8] flex items-center gap-1">
                  <span>Saeed Ramadan</span>
                  <i className="bx bxs-badge-check text-blue-500 text-sm" />
                </h4>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed mt-0.5">
                  {isAr
                    ? "مهندس برمجيات و واجهات أمامية أول"
                    : "Senior Front-End Architect | React Expert"}
                </p>
                <p className="text-[9px] text-slate-400 mt-1">
                  {isAr ? "جامعة سوهاج • سوهاج، مصر" : "Sohag University • Sohag, Egypt"}
                </p>
              </div>

              {/* Connections/Open badge */}
              <div className="mt-3 flex items-center gap-2">
                <span className="text-[8px] bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full font-bold">
                  Open to Work
                </span>
                <span className="text-[9px] text-slate-400 font-semibold">
                  {isAr ? "+500 اتصال" : "+500 Connections"}
                </span>
              </div>

              {/* Action row */}
              <div className="grid grid-cols-2 gap-2 mt-4">
                <button className="flex items-center justify-center gap-1.5 h-8 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-black uppercase tracking-wider transition-colors border-0 cursor-pointer">
                  <i className="bx bxs-user-plus text-xs" />
                  <span>{isAr ? "متابعة" : "Follow"}</span>
                </button>
                <button className="flex items-center justify-center gap-1.5 h-8 rounded-lg border border-slate-300 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 text-slate-700 dark:text-white text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer bg-transparent">
                  <i className="bx bx-paper-plane text-xs" />
                  <span>{isAr ? "رسالة" : "Message"}</span>
                </button>
              </div>
            </div>
          </div>
        );

      case "youtube":
        return (
          <div className="w-72 bg-white dark:bg-[#0f0f0f] rounded-2xl overflow-hidden shadow-2xl border border-red-500/20 text-slate-900 dark:text-[#f1f1f1] text-left rtl:text-right font-sans">
            {/* Mock Video Banner */}
            <div className="relative aspect-video bg-black flex items-center justify-center group/yt">
              <img
                src="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
                alt="Video Thumbnail"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover/yt:scale-110 transition-transform duration-300 cursor-pointer">
                  <i className="bx bx-play text-3xl ml-0.5" />
                </div>
              </div>
              <span className="absolute bottom-2 right-2 bg-black/80 px-1.5 py-0.5 rounded text-[8px] text-white font-mono">
                04:20
              </span>
            </div>

            {/* Channel metadata */}
            <div className="p-3">
              <div className="flex gap-2.5 items-center">
                <img
                  src="/logo.png"
                  alt="Saeed Channel"
                  className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/5 bg-slate-100"
                />
                <div>
                  <h4 className="text-xs font-bold leading-tight">Saeed Ramadan</h4>
                  <p className="text-[10px] text-slate-400">@saeed-r1</p>
                  <p className="text-[9px] text-slate-500 mt-0.5 font-semibold">
                    {isAr ? "1.5 ألف مشترك • 40 فيديو" : "1.5K Subscribers • 40 Videos"}
                  </p>
                </div>
              </div>

              {/* Red subscribe button */}
              <button className="w-full mt-3 h-8 rounded-full bg-red-600 hover:bg-red-700 text-white text-[10px] font-black uppercase tracking-wider transition-colors border-0 cursor-pointer">
                {isAr ? "اشترك الآن" : "Subscribe"}
              </button>
            </div>
          </div>
        );

      case "facebook":
        return (
          <div className="w-72 bg-white dark:bg-[#18191a] rounded-2xl overflow-hidden shadow-2xl border border-blue-500/10 text-slate-800 dark:text-[#e4e6eb] text-left rtl:text-right font-sans">
            {/* Cover photo */}
            <div className="h-16 bg-linear-to-r from-blue-700 via-indigo-600 to-purple-700" />

            {/* Profile body */}
            <div className="px-4 pb-4 relative">
              <img
                src="/logo.png"
                alt="Saeed Ramadan"
                className="w-16 h-16 rounded-full border-4 border-white dark:border-[#18191a] absolute -top-8 left-4 rtl:left-auto rtl:right-4 bg-white"
              />
              <div className="pt-9">
                <h4 className="text-sm font-bold flex items-center gap-1.5">
                  <span>Saeed Ramadan</span>
                  <i className="bx bxs-check-circle text-blue-500 text-sm" />
                </h4>
                <p className="text-[10px] text-slate-500 dark:text-[#b0b3b8] mt-0.5">
                  {isAr ? "مطور برمجيات و واجهات مستخدم" : "Software & UI/UX Developer"}
                </p>
                <p className="text-[9px] text-slate-400 mt-1 flex items-center gap-1">
                  <i className="bx bx-home-alt text-xs" />
                  <span>{isAr ? "يقيم في سوهاج" : "Lives in Sohag, Egypt"}</span>
                </p>
              </div>

              {/* Action row */}
              <div className="flex gap-2 mt-4">
                <button className="flex-1 flex items-center justify-center gap-1 h-8 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-black uppercase tracking-wider transition-colors border-0 cursor-pointer">
                  <i className="bx bxs-message-rounded text-xs" />
                  <span>{isAr ? "مراسلة" : "Message"}</span>
                </button>
                <button className="w-10 h-8 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-[#3a3b3c] hover:bg-slate-200 dark:hover:bg-[#4e4f50] text-slate-800 dark:text-[#e4e6eb] transition-colors border-0 cursor-pointer">
                  <i className="bx bx-dots-horizontal-rounded text-sm" />
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="fixed z-10005 pointer-events-auto"
      style={{
        transformOrigin: "bottom center",
        top: `${coords.top}px`,
        left: `${coords.left}px`,
        transform: "translate(-50%, -100%)",
      }}
    >
      {renderContent()}
    </motion.div>
  );
};

export default SocialPreviewCard;
