import Link from "next/link";
import Image from "next/image";
import { Github, Download, BookOpen } from "lucide-react";
import type { Messages } from "@/locales/types";

interface FooterProps {
  lang?: string;
  t?: Messages["footer"];
}

export function Footer({ lang, t }: FooterProps) {
  const base = lang ? `/${lang}` : "";
  return (
    <footer id="community" className="border-t border-border bg-card/20">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link
              href={`${base}/`}
              className="flex items-center gap-2 font-semibold text-foreground"
            >
              <Image
                src="/logo.png"
                alt="Suika3 Logo"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              Suika3
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              {t?.tagline ?? "Mobile-first visual novel engine with NovelML and Ray."}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:justify-end md:gap-16">
            <div>
              <h3 className="mb-4 text-sm font-semibold text-foreground">
                {t?.resources ?? "Resources"}
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="https://github.com/suika3-community/suika3/releases"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Download className="h-4 w-4" />
                    {t?.download ?? "Download"}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${base}/docs/`}
                    className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <BookOpen className="h-4 w-4" />
                    {t?.documentation ?? "Documentation"}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold text-foreground">
                {t?.community ?? "Community"}
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="https://github.com/suika3-community/suika3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} The Suika3 Community. Licensed under Zlib License.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/suika3-community/suika3"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              GitHub
            </Link>
            <Link
              href="https://github.com/suika3-community/suika3/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              {t?.download ?? "Download"}
            </Link>
            <Link
              href={`${base}/docs/`}
              className="transition-colors hover:text-foreground"
            >
              {t?.documentation ?? "Docs"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
