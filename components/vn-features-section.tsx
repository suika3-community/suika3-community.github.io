"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

const vnFeatures = [
  "Message Display",
  "Option Selection",
  "Background & Character Transitions",
  "BGM / SE / Voice Playback",
  "Movie Playback",
  "Layered Raster Image Animation",
  "Save / Load",
  "Skip Mode & Auto Mode",
  "Skip Seen Messages",
  "Message History & Voice Replay",
  "CG Gallery",
  "Localization",
  "Simulation Parameter Display",
  "GUI / UX Construction DSL",
  "Lip Sync",
  "Eye Blink Animation",
];

const engineFeatures = [
  { label: "JIT VM", desc: "2.5–4.5× faster than interpreter on desktop" },
  { label: "AOT Compiler", desc: "Native binary for App Store & console certification" },
  { label: "Generational GC", desc: "Frame-synchronized, sub-0.1ms young-gen collection" },
  { label: "HAL Layer", desc: "DirectX 9/11/12 · Metal · OpenGL · OpenGL ES · WebGL" },
  { label: "Audio Backends", desc: "DirectSound · Audio Unit · ALSA · OpenSL ES · OSS" },
  { label: "ZLib License", desc: "Commercial use, closed-source games — all allowed" },
];

export function VnFeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="vn-features"
      ref={ref}
      className="relative border-t border-border bg-card/20 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Everything a Mobile 2D Game<br className="hidden sm:block" /> &amp; Visual Novel Needs
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Out-of-the-box support for the full visual novel workflow — no plugins, no configuration.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* VN feature checklist */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h3 className="mb-6 text-lg font-semibold text-foreground">Visual Novel Features</h3>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {vnFeatures.map((feat, i) => (
                <div
                  key={feat}
                  className={`flex items-center gap-3 rounded-lg border border-border/50 bg-card/30 px-4 py-2.5 transition-all duration-500 ${
                    isVisible ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <Check className="h-4 w-4 flex-shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Engine technical highlights */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h3 className="mb-6 text-lg font-semibold text-foreground">Engine Highlights</h3>
            <div className="space-y-4">
              {engineFeatures.map((feat, i) => (
                <div
                  key={feat.label}
                  className={`group rounded-2xl border border-border bg-card/30 p-5 transition-all duration-500 hover:border-primary/30 hover:bg-card/50 ${
                    isVisible ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${200 + i * 60}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <span className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary group-hover:bg-primary/20 transition-colors">
                      {feat.label}
                    </span>
                    <p className="text-sm text-muted-foreground">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Roadmap hint */}
            <div className="mt-6 rounded-2xl border border-dashed border-border p-5">
              <p className="text-sm font-semibold text-foreground mb-1">Coming next</p>
              <p className="text-sm text-muted-foreground">
                2D RPG map walk · 3D character models · Network play · 2D shooting games · Sound games
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
