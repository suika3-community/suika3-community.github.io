"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link
          href="/"
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
          <Link
            href="#features"
            className="transition-colors hover:text-foreground"
          >
            Features
          </Link>
          <Link
            href="#philosophy"
            className="transition-colors hover:text-foreground"
          >
            Philosophy
          </Link>
          <Link
            href="#lineage"
            className="transition-colors hover:text-foreground"
          >
            Lineage
          </Link>
          <Link
            href="#community"
            className="transition-colors hover:text-foreground"
          >
            Community
          </Link>
          <Button variant="outline" size="sm" asChild>
            <Link href="https://github.com/suika3-community/suika3" target="_blank" rel="noopener noreferrer">GitHub</Link>
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
            <Link
              href="#features"
              className="text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#philosophy"
              className="text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Philosophy
            </Link>
            <Link
              href="#lineage"
              className="text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Lineage
            </Link>
            <Link
              href="#community"
              className="text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Community
            </Link>
            <Button variant="outline" size="sm" asChild className="w-fit bg-transparent">
              <Link href="https://github.com/suika3-community/suika3" target="_blank" rel="noopener noreferrer">GitHub</Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
