// RATIONALE: Zero-dependency Web Audio API synthesizer for tactile mechanical mouse click and warp sound effects.
// Avoids external audio asset loading delays, network failures, or CORS limitations.

class AudioSynthesizer {
  private ctx: AudioContext | null = null;

  private getContext(): AudioContext | null {
    if (typeof window === "undefined") return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  /**
   * Synthesizes a tactile, crisp mechanical mouse click sound (similar to high-end Omron/Kailh switch).
   */
  public playMouseClick(): void {
    try {
      const ctx = this.getContext();
      if (!ctx) return;

      const now = ctx.currentTime;

      // Click transient (sharp pop)
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(120, now + 0.04);

      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.04);

      // High frequency snap
      const snapOsc = ctx.createOscillator();
      const snapGain = ctx.createGain();

      snapOsc.type = "triangle";
      snapOsc.frequency.setValueAtTime(2400, now);
      snapOsc.frequency.exponentialRampToValueAtTime(300, now + 0.02);

      snapGain.gain.setValueAtTime(0.25, now);
      snapGain.gain.exponentialRampToValueAtTime(0.001, now + 0.02);

      snapOsc.connect(snapGain);
      snapGain.connect(ctx.destination);

      snapOsc.start(now);
      snapOsc.stop(now + 0.02);
    } catch {
      // Audio playback fails silently if user has not interacted or browser restricts audio
    }
  }

  /**
   * Synthesizes a futuristic portal whoosh / holographic energy surge.
   */
  public playWarpSurge(): void {
    try {
      const ctx = this.getContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.35);
      osc.frequency.exponentialRampToValueAtTime(220, now + 0.7);

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.2, now + 0.25);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);

      // Lowpass filter for smooth energy feel
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(400, now);
      filter.frequency.linearRampToValueAtTime(3200, now + 0.3);
      filter.frequency.exponentialRampToValueAtTime(600, now + 0.7);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.7);
    } catch {
      // Audio playback fails silently if restricted
    }
  }
}

export const audioSynth = new AudioSynthesizer();
