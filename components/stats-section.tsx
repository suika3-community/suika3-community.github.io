"use client";

import { useEffect, useRef, useState } from "react";
import type { Messages } from "@/locales/types";

export function StatsSection({ t }: { t: Messages["stats"] }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-7">
          {t.items.map((stat, i) => (
            <div
              key={i}
              className={`text-center transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-3xl font-bold text-foreground">
                <span className="text-primary">{stat.value}</span>
                <span className="text-lg ml-0.5">{stat.unit}</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
