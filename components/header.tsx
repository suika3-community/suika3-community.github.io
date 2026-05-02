"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Messages } from "@/locales/types";

interface HeaderProps {
  lang?: string;
  t?: Messages["nav"];
}

const defaultNav = {
  downloads: "Downloads",
  docs: "Docs",
  features: "Features",
  platforms: "Platforms",
  philosophy: "Philosophy",
  lineage: "Lineage",
};

export function Header({ lang, t }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const base = lang ? `/${lang}` : "";
  const nav = t ?? defaultNav;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link
          href={`${base}/`}
          className="flex items-center gap-2.5 font-semibold tracking-tight text-foreground"
        >
          <Image
            src="/logo.png"
            alt="Suika3 Logo"
            width={28}
            height={28}
            className="h-7 w-7"
          />
          Suika3
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <Link href={`${base}/downloads/`} className="transition-colors hover:text-foreground">
            {nav.downloads}
          </Link>
          <Link href={`${base}/docs/`} className="transition-colors hover:text-foreground">
            {nav.docs}
          </Link>
          <Link href={`${base}/#features`} className="transition-colors hover:text-foreground">
            {nav.features}
          </Link>
          <Link href={`${base}/#platforms`} className="transition-colors hover:text-foreground">
            {nav.platforms}
          </Link>
          <Link href={`${base}/#philosophy`} className="transition-colors hover:text-foreground">
            {nav.philosophy}
          </Link>
          <Link href={`${base}/#lineage`} className="transition-colors hover:text-foreground">
            {nav.lineage}
          </Link>
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
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {mobileMenuOpen && (
        <nav className="animate-in slide-in-from-top-2 border-t border-border bg-background px-4 py-4 md:hidden w-full">
          <div className="flex flex-col gap-4 w-full">
            <Link href={`${base}/downloads/`} className="text-muted-foreground transition-colors hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>
              {nav.downloads}
            </Link>
            <Link href={`${base}/docs/`} className="text-muted-foreground transition-colors hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>
              {nav.docs}
            </Link>
            <Link href={`${base}/#features`} className="text-muted-foreground transition-colors hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>
              {nav.features}
            </Link>
            <Link href={`${base}/#platforms`} className="text-muted-foreground transition-colors hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>
              {nav.platforms}
            </Link>
            <Link href={`${base}/#philosophy`} className="text-muted-foreground transition-colors hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>
              {nav.philosophy}
            </Link>
            <Link href={`${base}/#lineage`} className="text-muted-foreground transition-colors hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>
              {nav.lineage}
            </Link>
            <Button variant="outline" size="sm" asChild className="w-fit bg-transparent">
              <Link href="https://github.com/suika3-community/suika3" target="_blank" rel="noopener noreferrer">
                GitHub
              </Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
