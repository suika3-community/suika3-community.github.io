"use client";

import { useEffect, useRef, useState } from "react";
import { Sparkles, Zap, Heart } from "lucide-react";

const philosophies = [
  {
    icon: Sparkles,
    title: "App Store / Play Store / Steam Ready",
    description:
      "Our commitment to the commercial success of visual novels is a " +
      "strategic investment in the long-term health of the medium."
  },
  {
    icon: Zap,
    title: "Lightweight, True Native",
    description:
      "Suika3 delivers a smooth 60 fps on devices of all kinds — from " +
      "classroom Raspberry Pis to Chromebooks in UN shelters. By closing the " +
      "hardware gap, we ensure that your ingenuity is the only thing that " +
      "matters."
  },
  {
    icon: Rocket,
    title: "Dream-Fueled Rocket",
    description:
      "We provide the tools. You bring the dream. Suika3 is the " +
      "perfect companion on the journey toward independence as an indie " +
      "developer."
  }
];

export function PhilosophySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="relative border-t border-border bg-card/20"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-1/4 h-px w-full bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        <div className="absolute left-0 top-2/4 h-px w-full bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
        <div className="absolute left-0 top-3/4 h-px w-full bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="space-y-0">
          {philosophies.map((philosophy, index) => {
            const Icon = philosophy.icon;
            const isActive = activeIndex === index;

            return (
              <div
                key={philosophy.title}
                className={`group relative border-b border-border py-12 transition-all duration-500 last:border-b-0 md:py-16 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div className="grid gap-6 md:grid-cols-12 md:items-center">
                  <div className="md:col-span-2">
                    <div
                      className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-500 ${
                        isActive
                          ? "bg-primary text-primary-foreground scale-110"
                          : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                  </div>

                  <div className="md:col-span-4">
                    <h2
                      className={`text-2xl font-bold tracking-tight transition-colors duration-300 md:text-3xl ${
                        isActive ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {philosophy.title}
                    </h2>
                  </div>

                  <div className="md:col-span-6">
                    <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                      {philosophy.description}
                    </p>
                  </div>
                </div>

                <div
                  className={`absolute -left-4 top-1/2 h-12 w-1 -translate-y-1/2 rounded-full bg-primary transition-all duration-300 ${
                    isActive ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
