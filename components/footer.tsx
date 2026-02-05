import Link from "next/link";
import Image from "next/image";
import { Github, Download, BookOpen } from "lucide-react";

export function Footer() {
  return (
    <footer id="community" className="border-t border-border bg-card/20">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link
              href="/"
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
              Mobile-first visual novel engine with NovelML and SeedScript.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:justify-end md:gap-16">
            <div>
              <h3 className="mb-4 text-sm font-semibold text-foreground">
                Resources
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="#download"
                    className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </Link>
                </li>
                <li>
                  <Link
                    href="#docs"
                    className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <BookOpen className="h-4 w-4" />
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold text-foreground">
                Community
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="#github"
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
            &copy; {new Date().getFullYear()} The Suika3 Community. Licensed
            under Zlib License.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="#github"
              className="transition-colors hover:text-foreground"
            >
              GitHub
            </Link>
            <Link
              href="#download"
              className="transition-colors hover:text-foreground"
            >
              Download
            </Link>
            <Link
              href="#docs"
              className="transition-colors hover:text-foreground"
            >
              Docs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
