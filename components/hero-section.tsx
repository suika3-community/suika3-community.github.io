"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, BookOpen } from "lucide-react";
import Link from "next/link";

const codeSnippet = `# NovelML (example)
[bg file="roof.png" time="1.0"]
[ch center="heroine.png" time="1.0"]
[text name="Heroine" text="Welcome to Suika3."]

// SeedScript (optional)
func onChoice(params) {
    return random();
}`;

const tags = [
  "Zlib License",
  "NovelML",
  "SeedScript",
  "JIT VM",
  "One-click Export",
];

export function HeroSection() {
  const [typedCode, setTypedCode] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const codeRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    if (currentIndex < codeSnippet.length) {
      const timer = setTimeout(() => {
        setTypedCode(codeSnippet.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 25);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <section className="relative overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-pulse absolute -left-1/4 -top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div
          className="animate-pulse absolute -bottom-1/4 -right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="mb-6 flex items-center gap-4">
              <Image
                src="/logo.png"
                alt="Suika3 Logo"
                width={80}
                height={80}
                className="h-16 w-16 drop-shadow-lg md:h-20 md:w-20"
              />
              <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Suika3 Engine
              </span>
            </div>
            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Mobile-first
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Visual Novel Engine
              </span>
            </h1>
            <p className="mt-6 text-pretty text-base md:text-lg leading-relaxed text-muted-foreground">
              Write your works in NovelML 3.0 and extend with SeedScript 3.0.
              With a lightweight core written in pure C and custom scripting VM,
              it runs smoothly even on mobile and low-spec devices.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="group" asChild>
                <Link href="https://github.com/suika3-community/suika3/releases" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/docs">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Read the Docs
                </Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-2 overflow-hidden">
              {tags.map((tag, index) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="animate-in fade-in slide-in-from-bottom-4 border-border bg-secondary/50 text-muted-foreground"
                  style={{ animationDelay: `${index * 100 + 500}ms` }}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div
            className="animate-in fade-in slide-in-from-right-8 duration-700"
            style={{ animationDelay: "200ms" }}
          >
            <div className="group relative rounded-2xl border border-border bg-card/50 p-4 md:p-6 shadow-2xl shadow-primary/5 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-primary/10 max-w-full overflow-hidden">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-destructive/60" />
                <div className="h-3 w-3 rounded-full bg-chart-4/60" />
                <div className="h-3 w-3 rounded-full bg-primary/60" />
                <span className="ml-3 text-xs text-muted-foreground">
                  Quick taste
                </span>
              </div>

              <pre
                ref={codeRef}
                className="overflow-x-auto rounded-xl bg-background/80 p-4 text-xs md:text-sm leading-relaxed"
              >
                <code className="font-mono text-foreground/90">
                  {typedCode}
                  <span className="animate-pulse text-primary">|</span>
                </code>
              </pre>

              <div className="absolute -right-3 -top-3 h-16 w-16 rounded-full bg-primary/20 blur-xl transition-all duration-500 group-hover:bg-primary/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
