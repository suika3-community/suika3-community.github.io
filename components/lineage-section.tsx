"use client";

import { useEffect, useRef, useState } from "react";

const timeline = [
  {
    period: "2001–2004",
    title: "Suika Studio",
    description:
      "The origin of our codebase, featuring our first GUI-based editors.",
    highlight: false,
  },
  {
    period: "2005–2015",
    title: "Unfruitful",
    description:
      "A decade of R&D focused on establishing a robust portability layer for cross-platform support.",
    highlight: false,
  },
  {
    period: "2016–2024",
    title: "Suika2",
    description:
      "The cornerstone of our current architecture and the fruit of a decade of dedicated R&D. It delivers a full visual novel experience with extensive platform compatibility.",
    highlight: false,
  },
  {
    period: "2025–",
    title: "Playfield Engine",
    description:
      "A versatile 2D engine derived from the core portability layer of the Suika series.",
    highlight: false,
  },
  {
    period: "2026–",
    title: "Suika3",
    description:
      "By synthesizing these legacies and introducing NovelML 3.0 / SeedScript 3.0, Suika3 delivers the rock-solid stability of its predecessors alongside the cutting-edge flexibility of modern technology.",
    highlight: true,
  },
];

export function LineageSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            if (!visibleItems.includes(index)) {
              setVisibleItems((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -100px 0px" }
    );

    const items = sectionRef.current?.querySelectorAll("[data-index]");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [visibleItems]);

  return (
    <section
      id="lineage"
      ref={sectionRef}
      className="relative border-t border-border bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Lineage: The Grand Journey
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Suika3 represents the culmination of over two decades of relentless
            innovation and development.
          </p>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-6 top-0 w-px bg-border md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const isVisible = visibleItems.includes(index);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.title}
                  data-index={index}
                  className={`relative transition-all duration-700 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div
                    className={`absolute left-6 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center md:left-1/2 ${
                      item.highlight ? "scale-125" : ""
                    }`}
                  >
                    <div
                      className={`h-4 w-4 rounded-full border-2 transition-all duration-500 ${
                        item.highlight
                          ? "border-primary bg-primary"
                          : "border-border bg-background"
                      } ${isVisible && item.highlight ? "animate-pulse" : ""}`}
                    />
                    {item.highlight && (
                      <div className="absolute h-8 w-8 animate-ping rounded-full bg-primary/30" />
                    )}
                  </div>

                  <div
                    className={`ml-16 md:ml-0 md:w-[45%] ${
                      isEven ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                    }`}
                  >
                    <div
                      className={`rounded-2xl border p-6 transition-all duration-300 hover:shadow-lg ${
                        item.highlight
                          ? "border-primary/50 bg-primary/5 hover:border-primary hover:shadow-primary/10"
                          : "border-border bg-card/30 hover:border-primary/30 hover:shadow-primary/5"
                      }`}
                    >
                      <div className="mb-2 flex items-center gap-3">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium ${
                            item.highlight
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary text-muted-foreground"
                          }`}
                        >
                          {item.period}
                        </span>
                      </div>
                      <h3
                        className={`text-xl font-semibold ${
                          item.highlight ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
