"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronRight, BookOpen, FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";
import { docFiles } from "@/app/docs/docs-config";
import { getMessages } from "@/locales";
import type { ReactNode } from "react";

interface DocsLayoutProps {
  activeSlug: string;
  lang?: string;
  children?: ReactNode;
}

export function DocsLayout({ activeSlug, lang = "en", children }: DocsLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const base = `/${lang}`;
  const messages = getMessages(lang);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href={`${base}/`} className="flex items-center gap-2.5 font-semibold tracking-tight text-foreground">
            <Image src="/logo.png" alt="Suika3 Logo" width={28} height={28} className="h-7 w-7" />
            Suika3
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <Link href={`${base}/downloads/`} className="transition-colors hover:text-foreground">{messages.nav.downloads}</Link>
            <Link href={`${base}/docs/`}      className="text-foreground font-medium">{messages.nav.docs}</Link>
            <Link href={`${base}/#features`}  className="transition-colors hover:text-foreground">{messages.nav.features}</Link>
            <Link href={`${base}/#platforms`} className="transition-colors hover:text-foreground">{messages.nav.platforms}</Link>
            <Link href={`${base}/#philosophy`} className="transition-colors hover:text-foreground">{messages.nav.philosophy}</Link>
            <Link href={`${base}/#lineage`}   className="transition-colors hover:text-foreground">{messages.nav.lineage}</Link>
            <LanguageSwitcher lang={lang} t={messages} currentPath={pathname} />
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
              <Link href={`${base}/downloads/`} onClick={() => setSidebarOpen(false)} className="hover:text-foreground">{messages.nav.downloads}</Link>
              <Link href={`${base}/docs/`}      onClick={() => setSidebarOpen(false)} className="text-foreground font-medium">{messages.nav.docs}</Link>
              <Link href={`${base}/#features`}  onClick={() => setSidebarOpen(false)} className="hover:text-foreground">{messages.nav.features}</Link>
              <Link href={`${base}/#platforms`} onClick={() => setSidebarOpen(false)} className="hover:text-foreground">{messages.nav.platforms}</Link>
              <Link href={`${base}/#philosophy`} onClick={() => setSidebarOpen(false)} className="hover:text-foreground">{messages.nav.philosophy}</Link>
              <Link href={`${base}/#lineage`}   onClick={() => setSidebarOpen(false)} className="hover:text-foreground">{messages.nav.lineage}</Link>
              <div className="my-2">
                <LanguageSwitcher lang={lang} t={messages} currentPath={pathname} />
              </div>
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
          {/* Sidebar — plain <a> tags (full-page load, no RSC dependency) */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <nav className="sticky top-24 space-y-0.5">
              <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-foreground">
                <BookOpen className="h-4 w-4" />
                Documentation
              </div>

              {docFiles.map((doc) => {
                const href = doc.slug === "index" ? `${base}/docs/` : `${base}/docs/${doc.slug}/`;
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

          {/* Content — rendered server-side, passed as children */}
          <main className="flex-1 min-w-0">
            {children ?? (
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
