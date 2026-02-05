"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MarkdownRenderer } from "@/components/markdown-renderer";

interface DocFile {
  name: string;
  slug: string;
  path: string;
}

interface DocsContentProps {
  docFiles: DocFile[];
  docsData: Record<string, string>;
  defaultDoc: string;
}

export function DocsContent({
  docFiles,
  docsData,
  defaultDoc,
}: DocsContentProps) {
  const [activeDoc, setActiveDoc] = useState(defaultDoc);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentContent = docsData[activeDoc] || "# Documentation\n\nSelect a topic from the sidebar.";

  return (
    <div className="min-h-screen bg-background">
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

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label={sidebarOpen ? "Close menu" : "Open menu"}
            >
              {sidebarOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex gap-8">
          <aside
            className={`${
              sidebarOpen ? "block" : "hidden"
            } md:block fixed md:relative inset-0 top-[73px] md:top-0 z-40 w-full md:w-64 flex-shrink-0 bg-background md:bg-transparent p-4 md:p-0`}
          >
            <nav className="space-y-1 md:sticky md:top-24">
              <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-foreground">
                <BookOpen className="h-4 w-4" />
                Documentation
              </div>
              {docFiles.map((doc) => (
                <button
                  key={doc.slug}
                  onClick={() => {
                    setActiveDoc(doc.slug);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${
                    activeDoc === doc.slug
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  <ChevronRight
                    className={`h-4 w-4 transition-transform ${
                      activeDoc === doc.slug ? "rotate-90" : ""
                    }`}
                  />
                  {doc.name}
                </button>
              ))}
            </nav>
          </aside>

          <main className="flex-1 min-w-0">
            <MarkdownRenderer content={currentContent} />
          </main>
        </div>
      </div>
    </div>
  );
}
