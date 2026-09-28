// RATIONALE: Strongly typed contracts for the interactive avatar preloader system.
// Covers finite state transitions, progress counters, and telemetry diagnostics.

export type LoaderPhase = "loading" | "ready" | "clicking" | "revealing" | "completed";

export interface LoaderDiagnosticMessage {
  id: string;
  en: string;
  ar: string;
  threshold: number;
}

export interface UseInteractiveLoaderReturn {
  progress: number;
  phase: LoaderPhase;
  handleLaunchTrigger: () => void;
  isReady: boolean;
  isRevealing: boolean;
  statusText: string;
}
