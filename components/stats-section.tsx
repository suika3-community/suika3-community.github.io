"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "60",   unit: "FPS",          label: "on Raspberry Pi" },
  { value: "4.5",  unit: "×",            label: "faster than interpreter (JIT)" },
  { value: "25+",  unit: "years",        label: "of R&D heritage" },
  { value: "10",   unit: "yr LTS",       label: "minimum support guarantee" },
  { value: "1%",   unit: "CPU",          label: "on Core Ultra 5 at 60 fps" },
  { value: "2",    unit: "MB",           label: "binary footprint" },
];

export function StatsSection() {
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
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
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
