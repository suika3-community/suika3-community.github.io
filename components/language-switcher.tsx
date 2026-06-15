"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SUPPORTED_LANGS, type SupportedLang } from "@/locales";
import type { Messages } from "@/locales/types";

interface LanguageSwitcherProps {
  lang?: string;
  t?: Messages;
  currentPath?: string;
}

export function LanguageSwitcher({ lang = "en", t, currentPath = "/" }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const languages = t?.languages ?? {
    en: "English",
    ja: "日本語",
    "zh-Hans": "简体中文",
    "zh-Hant": "繁體中文",
    es: "Español",
    ru: "Русский",
    fr: "Français",
    de: "Deutsch",
  };

  const getLanguageUrl = (targetLang: string) => {
    // Remove current lang prefix if exists
    let path = currentPath;
    const langPrefix = `/${lang}`;
    if (path.startsWith(langPrefix)) {
      path = path.slice(langPrefix.length) || "/";
    }

    // Add new lang prefix
    return `/${targetLang}${path === "/" ? "/" : path}`;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="gap-2"
        aria-label={t?.nav.language ?? "Language"}
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline text-sm uppercase">{lang}</span>
      </Button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 rounded-lg border border-border bg-background/95 backdrop-blur-sm shadow-lg z-50">
          <div className="p-2">
            {SUPPORTED_LANGS.map((supportedLang) => (
              <Link
                key={supportedLang}
                href={getLanguageUrl(supportedLang)}
                className={`block px-4 py-2 rounded-md text-sm transition-colors ${
                  lang === supportedLang
                    ? "bg-primary text-primary-foreground font-semibold"
                    : "text-foreground hover:bg-muted"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {languages[supportedLang as SupportedLang]}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
