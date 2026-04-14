"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronRight, BookOpen, FileQuestion, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { docFiles, DOCS_BASE_URL, rewriteDocLinks } from "@/app/docs/docs-config";

interface DocsLayoutProps {
  activeSlug: string;
}

export function DocsLayout({ activeSlug }: DocsLayoutProps) {
  const [content, setContent]     = useState<string | null>(null);
  const [loading, setLoading]     = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Fetch content client-side — avoids SSR/hydration mismatch with react-markdown
  useEffect(() => {
    setLoading(true);
    setContent(null);

    const doc = docFiles.find((d) => d.slug === activeSlug);
    if (!doc) {
      setLoading(false);
      return;
    }

    const url = doc.url ?? `${DOCS_BASE_URL}/${doc.path}`;
    fetch(url)
      .then((r) => (r.ok ? r.text() : ""))
      .then((text) => {
        setContent(text ? rewriteDocLinks(text) : null);
        setLoading(false);
      })
      .catch(() => {
        setContent(null);
        setLoading(false);
      });
  }, [activeSlug]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-tight text-foreground">
            <Image src="/logo.png" alt="Suika3 Logo" width={28} height={28} className="h-7 w-7" />
            Suika3
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <Link href="/downloads" className="transition-colors hover:text-foreground">Downloads</Link>
            <Link href="/docs"      className="text-foreground font-medium">Docs</Link>
            <Link href="/#features"  className="transition-colors hover:text-foreground">Features</Link>
            <Link href="/#platforms" className="transition-colors hover:text-foreground">Platforms</Link>
            <Link href="/#philosophy" className="transition-colors hover:text-foreground">Philosophy</Link>
            <Link href="/#lineage"   className="transition-colors hover:text-foreground">Lineage</Link>
            <Button variant="outline" size="sm" asChild>
              <Link href="https://github.com/suika3-community/suika3" target="_blank" rel="noopener noreferrer">
                GitHub
              </Link>
            </Button>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label={sidebarOpen ? "Close menu" : "Open menu"}
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {sidebarOpen && (
          <nav className="border-t border-border bg-background px-4 py-4 md:hidden">
            <div className="flex flex-col gap-4 text-sm text-muted-foreground">
              <Link href="/downloads" onClick={() => setSidebarOpen(false)} className="hover:text-foreground">Downloads</Link>
              <Link href="/docs"      onClick={() => setSidebarOpen(false)} className="text-foreground font-medium">Docs</Link>
              <Link href="/#features"  onClick={() => setSidebarOpen(false)} className="hover:text-foreground">Features</Link>
              <Link href="/#platforms" onClick={() => setSidebarOpen(false)} className="hover:text-foreground">Platforms</Link>
              <Link href="/#philosophy" onClick={() => setSidebarOpen(false)} className="hover:text-foreground">Philosophy</Link>
              <Link href="/#lineage"   onClick={() => setSidebarOpen(false)} className="hover:text-foreground">Lineage</Link>
              <Button variant="outline" size="sm" asChild className="w-fit bg-transparent">
                <Link href="https://github.com/suika3-community/suika3" target="_blank" rel="noopener noreferrer">GitHub</Link>
              </Button>
            </div>
          </nav>
        )}
      </header>

      {/* Body */}
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar — plain <a> to force full-page load */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <nav className="sticky top-24 space-y-0.5">
              <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-foreground">
                <BookOpen className="h-4 w-4" />
                Documentation
              </div>

              {docFiles.map((doc) => {
                const href = doc.slug === "index" ? "/docs/" : `/docs/${doc.slug}/`;
                const isActive = doc.slug === activeSlug;
                return (
                  <div key={doc.slug}>
                    {doc.section && (
                      <p className="mt-5 mb-1 px-2 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/50">
                        {doc.section}
                      </p>
                    )}
                    <a
                      href={href}
                      className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${
                        isActive
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                      }`}
                    >
                      <ChevronRight
                        className={`h-3.5 w-3.5 flex-shrink-0 transition-transform ${
                          isActive ? "rotate-90 text-primary" : ""
                        }`}
                      />
                      {doc.name}
                    </a>
                  </div>
                );
              })}
            </nav>
          </aside>

          {/* Content */}
          <main className="flex-1 min-w-0">
            {loading ? (
              <div className="flex items-center justify-center py-32 text-muted-foreground">
                <Loader2 className="h-6 w-6 animate-spin" />
              </div>
            ) : content ? (
              <MarkdownRenderer content={content} />
            ) : (
              <div className="flex flex-col items-center justify-center py-32 gap-4 text-muted-foreground">
                <FileQuestion className="h-10 w-10 opacity-40" />
                <p className="text-sm">This document is not yet available.</p>
                <p className="text-xs opacity-60">Check back after the next release.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
