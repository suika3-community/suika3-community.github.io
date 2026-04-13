"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronRight, BookOpen, FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import type { DocFile } from "./page";

interface DocsContentProps {
  docFiles: DocFile[];
  docsData: Record<string, string>;
  defaultDoc: string;
}

export function DocsContent({ docFiles, docsData, defaultDoc }: DocsContentProps) {
  const [activeSlug, setActiveSlug] = useState(defaultDoc);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const content = docsData[activeSlug] ?? null;

  const handleSelect = (slug: string) => {
    setActiveSlug(slug);
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link
            href="/"
            className="flex items-center gap-2.5 font-semibold tracking-tight text-foreground"
          >
            <Image src="/logo.png" alt="Suika3 Logo" width={28} height={28} className="h-7 w-7" />
            Suika3
          </Link>

          <div className="flex items-center gap-4">
            <Link href="/" className="hidden text-sm text-muted-foreground hover:text-foreground transition-colors md:block">
              Home
            </Link>
            <Link href="/downloads" className="hidden text-sm text-muted-foreground hover:text-foreground transition-colors md:block">
              Downloads
            </Link>
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
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside
            className={`${
              sidebarOpen ? "block" : "hidden"
            } md:block fixed md:relative inset-0 top-[73px] md:top-0 z-40 w-full md:w-56 flex-shrink-0 bg-background md:bg-transparent p-4 md:p-0 overflow-y-auto`}
          >
            <nav className="md:sticky md:top-24 space-y-0.5">
              <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-foreground">
                <BookOpen className="h-4 w-4" />
                Documentation
              </div>

              {docFiles.map((doc) => (
                <div key={doc.slug}>
                  {doc.section && (
                    <p className="mt-5 mb-1 px-2 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/50">
                      {doc.section}
                    </p>
                  )}
                  <button
                    onClick={() => handleSelect(doc.slug)}
                    className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors text-left ${
                      activeSlug === doc.slug
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    }`}
                  >
                    <ChevronRight
                      className={`h-3.5 w-3.5 flex-shrink-0 transition-transform ${
                        activeSlug === doc.slug ? "rotate-90 text-primary" : ""
                      }`}
                    />
                    {doc.name}
                  </button>
                </div>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0">
            {content ? (
              <MarkdownRenderer content={content} />
            ) : (
              <div className="flex flex-col items-center justify-center py-32 gap-4 text-muted-foreground">
                <FileQuestion className="h-10 w-10 opacity-40" />
                <p className="text-sm">No content available.</p>
                <p className="text-xs text-muted-foreground/60">
                  This document may not yet exist in the repository.
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
