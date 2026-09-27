import React from "react";
import { useDevTerminal } from "../../hooks/useDevTerminal";

interface DevTerminalProps {
  className?: string;
}

// RATIONALE: Presentation component for the interactive developer console.
// Strictly UI-only; all command parsing and history management live in useDevTerminal.
export const DevTerminal: React.FC<DevTerminalProps> = ({ className = "" }) => {
  const {
    history,
    input,
    setInput,
    executeCommand,
    handleKeyDown,
    bottomRef,
  } = useDevTerminal();

  const quickPills = ["help", "skills", "projects", "whoami", "contact", "cv", "clear"];

  return (
    <div
      dir="ltr"
      className={`rounded-2xl border border-slate-800 bg-[#090d16] text-slate-200 overflow-hidden shadow-2xl font-code ${className}`}
    >
      {/* Terminal Top Bar with macOS Window Dots */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0d131f] border-b border-slate-800 select-none">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block" />
          <span className="text-xs text-slate-400 font-semibold ml-2 font-mono">
            saeed@react-architect:~
          </span>
        </div>
        <div className="text-[11px] text-slate-500 font-mono hidden sm:inline-block">
          bash 5.2
        </div>
      </div>

      {/* Terminal Screen Body */}
      <div className="p-4 sm:p-5 max-h-[320px] overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-slate-800">
        {history.map((entry) => (
          <div key={entry.id} className="space-y-1">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-indigo-400 font-bold">saeed@dev:~$</span>
              <span className="text-white font-medium">{entry.command}</span>
            </div>
            <div className="pl-4 border-l border-slate-800 py-0.5">
              {entry.output}
            </div>
          </div>
        ))}

        {/* Active Input Line */}
        <div className="flex items-center gap-2 text-xs pt-1">
          <span className="text-indigo-400 font-bold shrink-0">saeed@dev:~$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help' and hit enter..."
            className="flex-1 bg-transparent text-white placeholder-slate-600 focus:outline-none text-xs font-code caret-indigo-400"
            autoComplete="off"
            spellCheck="false"
          />
        </div>
        <div ref={bottomRef} />
      </div>

      {/* Quick Shortcut Action Pills (Touch/Mobile Friendly) */}
      <div className="px-4 py-2.5 bg-[#0b101c] border-t border-slate-800 flex flex-wrap items-center gap-1.5 select-none">
        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mr-1">
          Quick Run:
        </span>
        {quickPills.map((pill) => (
          <button
            key={pill}
            onClick={() => executeCommand(pill)}
            className="text-[11px] font-code px-2.5 py-1 rounded bg-slate-800/80 hover:bg-indigo-600 hover:text-white text-slate-300 border border-slate-700/60 transition-colors cursor-pointer active:scale-95"
          >
            {pill}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DevTerminal;
