import { useState, useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import { scroller } from "react-scroll";

export interface TerminalEntry {
  id: string;
  command: string;
  output: React.ReactNode;
}

// RATIONALE: Extracts terminal command interpreter, execution engine, and history stack away from the presentation layer.
export const useDevTerminal = () => {
  const { t } = useTranslation();
  const [history, setHistory] = useState<TerminalEntry[]>([
    {
      id: "initial",
      command: "welcome",
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-emerald-400 font-bold">
            Saeed Ramadan [Front-End Developer] Terminal v2.4
          </p>
          <p className="text-xs text-slate-400">
            Type <span className="text-indigo-400 font-bold">help</span> or click the pills below to explore.
          </p>
        </div>
      ),
    },
  ]);
  const [input, setInput] = useState("");
  const [commandStack, setCommandStack] = useState<string[]>([]);
  const [stackPointer, setStackPointer] = useState<number>(-1);
  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const executeCommand = useCallback(
    (rawCmd: string) => {
      const cmd = rawCmd.trim().toLowerCase();
      if (!cmd) return;

      setCommandStack((prev) => [...prev, cmd]);
      setStackPointer(-1);

      let output: React.ReactNode;

      switch (cmd) {
        case "help":
          output = (
            <div className="space-y-1 text-xs text-slate-300">
              <p className="text-indigo-400 font-semibold mb-1">Available Commands:</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 max-w-md">
                <div><span className="text-emerald-400 font-code font-bold">skills</span>: Core tech stack</div>
                <div><span className="text-emerald-400 font-code font-bold">projects</span>: Active platforms</div>
                <div><span className="text-emerald-400 font-code font-bold">whoami</span>: Professional bio</div>
                <div><span className="text-emerald-400 font-code font-bold">contact</span>: Direct communication</div>
                <div><span className="text-emerald-400 font-code font-bold">cv</span>: Download PDF resume</div>
                <div><span className="text-emerald-400 font-code font-bold">clear</span>: Flush console</div>
              </div>
            </div>
          );
          break;

        case "skills":
          output = (
            <pre className="text-xs font-code text-amber-300 overflow-x-auto leading-relaxed">
{`{
  "core": ["React 19", "TypeScript", "Tailwind CSS v4"],
  "state": ["Zustand", "TanStack React Query v5", "Redux Toolkit"],
  "realtime": ["Firebase FCM", "Laravel Echo", "Pusher WebSockets"],
  "quality": ["Google Lighthouse 90+", "Zod Validation", "SDD Protocol"]
}`}
            </pre>
          );
          break;

        case "projects":
          output = (
            <div className="space-y-2 text-xs">
              <div className="border-l-2 border-amber-400 pl-2">
                <p className="font-bold text-amber-400">1. Bynona Platform (E-Commerce)</p>
                <p className="text-slate-400">Retail & Wholesale price modes • Zustand • React Query • FCM</p>
              </div>
              <div className="border-l-2 border-blue-400 pl-2">
                <p className="font-bold text-blue-400">2. Propix8 Platform (Real Estate)</p>
                <p className="text-slate-400">Interactive Google Maps • High-performance filtering • Lighthouse 90+</p>
              </div>
              <div className="border-l-2 border-emerald-400 pl-2">
                <p className="font-bold text-emerald-400">3. HOPE (Graduation Project)</p>
                <p className="text-slate-400">Social Service AI Platform • Grade: Excellent • Project Leader</p>
              </div>
            </div>
          );
          break;

        case "whoami":
          output = (
            <div className="text-xs text-slate-300 space-y-1">
              <p className="text-indigo-400 font-bold">Saeed Ramadan — Front-End Developer (React.js & Next.js)</p>
              <p>Current: Front-End Developer at <span className="text-white font-semibold">Modern Digital Solutions</span> & Leading platforms at <span className="text-white font-semibold">The 4th Pyramid</span>.</p>
              <p>Recent: Front-End Developer at <span className="text-white font-semibold">Ahdaf Web Company</span> (Block Star & AI Design Studio).</p>
              <p>Instructor: <span className="text-white font-semibold">DECI</span> (Egyptian MCIT Initiative via E-Youth), <span className="text-white font-semibold">Coody Academy</span> (React JS), Tariq E Shewy Academy & AlphaProg.</p>
              <p>Alma Mater: Sohag University, Computer Science & AI (GPA: 3.1/4.0).</p>
            </div>
          );
          break;

        case "contact":
          output = (
            <div className="text-xs space-y-1">
              <p className="text-emerald-400 font-semibold">Direct Communication Channels:</p>
              <p className="text-slate-300">Email: <a href="mailto:saeedramadan82@gmail.com" className="text-indigo-400 hover:underline">saeedramadan82@gmail.com</a></p>
              <p className="text-slate-300">Direct Calls (Preferred): <a href="tel:+201032426483" className="text-cyan-400 font-bold hover:underline">+201032426483</a></p>
              <p className="text-slate-300">WhatsApp (Preferred): <a href="https://wa.me/201126488442" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">+201126488442</a></p>
              <p className="text-slate-400 italic">Scrolling to contact section...</p>
            </div>
          );
          scroller.scrollTo("contact", { smooth: true, duration: 600, offset: -70 });
          break;

        case "cv":
          output = (
            <div className="text-xs text-slate-300">
              <p className="text-emerald-400 font-bold">Initiating CV download...</p>
              <p className="text-slate-400">Opening: Saeed Ramadan Front End (React JS).pdf</p>
            </div>
          );
          window.open("/Saeed Ramadan Front End (React JS).pdf", "_blank");
          break;

        case "clear":
          setHistory([]);
          setInput("");
          return;

        default:
          output = (
            <p className="text-xs text-rose-400">
              Command not found: <span className="font-bold">{cmd}</span>. Type <span className="text-indigo-400 font-bold">help</span> for valid commands.
            </p>
          );
      }

      setHistory((prev) => [
        ...prev,
        {
          id: Math.random().toString(36).substring(7),
          command: rawCmd,
          output,
        },
      ]);
      setInput("");
      scrollToBottom();
    },
    [t]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandStack.length === 0) return;
      const nextIndex = stackPointer === -1 ? commandStack.length - 1 : Math.max(0, stackPointer - 1);
      setStackPointer(nextIndex);
      setInput(commandStack[nextIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (stackPointer === -1) return;
      const nextIndex = stackPointer + 1;
      if (nextIndex >= commandStack.length) {
        setStackPointer(-1);
        setInput("");
      } else {
        setStackPointer(nextIndex);
        setInput(commandStack[nextIndex]);
      }
    }
  };

  return {
    history,
    input,
    setInput,
    executeCommand,
    handleKeyDown,
    bottomRef,
  };
};
