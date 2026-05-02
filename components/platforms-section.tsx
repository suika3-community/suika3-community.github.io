"use client";

import { useEffect, useRef, useState } from "react";
import { Monitor, Smartphone, Globe, Gamepad2, Store, FlaskConical } from "lucide-react";
import type { Messages } from "@/locales/types";

const platformIcons = [Monitor, Smartphone, Globe, Gamepad2, Store, FlaskConical];

const platformItems = [
  ["Windows", "macOS", "Linux", "Chromebook", "Raspberry Pi"],
  ["iOS", "Android", "HarmonyOS NEXT"],
  ["WebAssembly (Emscripten)"],
  ["Steam Deck", "Xbox (GDK)", "Xbox (Unity)", "PS5 (Unity)", "Switch (Unity)"],
  ["App Store", "Google Play", "Steam", "Microsoft Store", "itch.io", "App Gallery"],
  ["FreeBSD", "NetBSD", "OpenBSD", "Solaris", "Haiku"],
];

export function PlatformsSection({ t }: { t: Messages["platforms"] }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="platforms" ref={ref} className="relative border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {t.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {t.subheading}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {t.groupLabels.map((label, i) => {
            const Icon = platformIcons[i] ?? Monitor;
            return (
              <div
                key={i}
                className={`rounded-2xl border border-border bg-card/30 p-5 transition-all duration-500 hover:border-primary/30 hover:bg-card/60 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{label}</span>
                </div>
                <ul className="space-y-1.5">
                  {(platformItems[i] ?? []).map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
