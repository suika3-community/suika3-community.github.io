"use client";

import { useEffect, useRef, useState } from "react";
import {
  Code2,
  Cpu,
  Globe,
  Smartphone,
  Palette,
  Rocket,
} from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Mobile First",
    description:
      "With its core written in C, Suika3 is lightweight and performs well even on low-end devices. Its design prioritizes mobile platforms without compromising on features.",
  },
  {
    icon: Code2,
    title: "NovelML",
    description:
      "Streamline your workflow with NovelML, a DSL for visual novels.",
  },
  {
    icon: Cpu,
    title: "Ray",
    description:
      "Extend only what you need. Execute a JS-like custom language on the fly. Compile it into a native binary for production build.",
  },
  {
    icon: Globe,
    title: "Portable",
    description:
      "Ship literally anywhere: Windows, macOS, Linux, Steam Deck, iOS, Android, WebAssembly, Xbox, PS5, Switch, and more.",
  },
  {
    icon: Palette,
    title: "GUI DSL",
    description: "Design your UI/UX easily with our dedicated DSL.",
  }
];

export function FeaturesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            if (!visibleCards.includes(index)) {
              setVisibleCards((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    const cards = sectionRef.current?.querySelectorAll("[data-index]");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [visibleCards]);

  return (
    <section id="features" ref={sectionRef} className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            What you get
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Time to market, portability, and extensibility. A design that takes it all.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isVisible = visibleCards.includes(index);

            return (
              <div
                key={feature.title}
                data-index={index}
                className={`group relative rounded-2xl border border-border bg-card/30 p-6 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-card/50 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>

                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -inset-1 rounded-2xl bg-primary/5 blur-xl" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
