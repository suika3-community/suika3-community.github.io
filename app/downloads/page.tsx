import Link from "next/link";
import Image from "next/image";
import { Download, Terminal, Package, Github, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const RELEASES_BASE = "https://github.com/awemorris/suika3/releases/latest/download";

const binaryDownloads = [
  {
    os: "Windows",
    icon: "🪟",
    description: "Windows 7 SP1 and later (64-bit)",
    primary: { label: "Download .exe", href: `${RELEASES_BASE}/suika3.exe` },
    secondary: { label: "32-bit .exe", href: `${RELEASES_BASE}/suika3-32.exe` },
  },
  {
    os: "macOS",
    icon: "🍎",
    description: "macOS 10.11 El Capitan and later",
    primary: { label: "Download .dmg", href: `${RELEASES_BASE}/Suika3.dmg` },
    secondary: null,
  },
  {
    os: "Linux (x86_64)",
    icon: "🐧",
    description: "Ubuntu, Debian, Fedora and more",
    primary: { label: "Download AppImage", href: `${RELEASES_BASE}/suika3-x86_64.AppImage` },
    secondary: null,
  },
  {
    os: "All platforms",
    icon: "📦",
    description: "Full ZIP archive with all binaries and sample game",
    primary: { label: "Download Full ZIP", href: `${RELEASES_BASE}/Suika3.zip` },
    secondary: null,
  },
];

const packageManagers = [
  {
    label: "macOS — Homebrew",
    icon: "🍺",
    commands: [
      "brew tap awemorris/suika3",
      "brew install suika3",
    ],
  },
  {
    label: "FreeBSD — Ports",
    icon: "😈",
    commands: [
      "cd /usr/ports/games/suika3",
      "make install clean",
    ],
  },
];

const sourceBuild = [
  "git clone https://github.com/awemorris/suika3.git",
  "cd suika3",
  "mkdir build && cd build",
  "cmake ..",
  "cmake --build . --parallel",
  "sudo cmake --install .",
  "cd ../game && suika3",
];

export default function DownloadsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-tight text-foreground">
            <Image src="/logo.png" alt="Suika3 Logo" width={28} height={28} className="h-7 w-7" />
            Suika3
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/" className="hidden text-sm text-muted-foreground hover:text-foreground transition-colors md:block">
              Home
            </Link>
            <Link href="/docs" className="hidden text-sm text-muted-foreground hover:text-foreground transition-colors md:block">
              Docs
            </Link>
            <Button variant="outline" size="sm" asChild>
              <Link href="https://github.com/suika3-community/suika3" target="_blank" rel="noopener noreferrer">
                <Github className="mr-1.5 h-4 w-4" />
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-16 md:py-24">
        {/* Page title */}
        <div className="mb-12">
          <Link href="/" className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to home
          </Link>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Download Suika3
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Current version: <span className="font-semibold text-foreground">26.04 (LTS RC1)</span>
            <span className="ml-3 text-sm">· ZLib License · Free &amp; open source</span>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Suika3 26.07 LTS is scheduled for July 1, 2026 with a minimum 10-year support guarantee.
          </p>
        </div>

        {/* Binary downloads */}
        <section className="mb-16">
          <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold">
            <Download className="h-5 w-5 text-primary" />
            Binary Downloads
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {binaryDownloads.map((item) => (
              <div
                key={item.os}
                className="rounded-2xl border border-border bg-card/30 p-6 hover:border-primary/30 hover:bg-card/50 transition-all"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-foreground">{item.os}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Button size="sm" asChild>
                    <a href={item.primary.href} download>
                      <Download className="mr-1.5 h-3.5 w-3.5" />
                      {item.primary.label}
                    </a>
                  </Button>
                  {item.secondary && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={item.secondary.href} download>
                        {item.secondary.label}
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            All releases are available on{" "}
            <Link
              href="https://github.com/awemorris/suika3/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              GitHub Releases
            </Link>
            .
          </p>
        </section>

        {/* Package managers */}
        <section className="mb-16">
          <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold">
            <Package className="h-5 w-5 text-primary" />
            Package Managers
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {packageManagers.map((pm) => (
              <div key={pm.label} className="rounded-2xl border border-border bg-card/30 p-6">
                <div className="mb-4 flex items-center gap-2">
                  <span className="text-xl">{pm.icon}</span>
                  <p className="font-semibold text-foreground">{pm.label}</p>
                </div>
                <pre className="rounded-lg bg-secondary/50 border border-border p-4 text-sm font-mono overflow-x-auto">
                  {pm.commands.map((cmd, i) => (
                    <div key={i} className="text-foreground/90">{cmd}</div>
                  ))}
                </pre>
              </div>
            ))}
          </div>
        </section>

        {/* Build from source */}
        <section className="mb-16">
          <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold">
            <Terminal className="h-5 w-5 text-primary" />
            Build from Source
          </h2>
          <div className="rounded-2xl border border-border bg-card/30 p-6">
            <p className="mb-4 text-sm text-muted-foreground">
              Requires CMake 3.21+ and a C compiler (GCC, Clang, or MSVC).
            </p>
            <pre className="rounded-lg bg-secondary/50 border border-border p-4 text-sm font-mono overflow-x-auto">
              {sourceBuild.map((line, i) => (
                <div key={i} className="text-foreground/90">
                  <span className="select-none text-primary/60 mr-2">$</span>
                  {line}
                </div>
              ))}
            </pre>
            <p className="mt-4 text-xs text-muted-foreground">
              For platform-specific instructions, see the{" "}
              <Link href="/docs" className="text-primary hover:underline">
                Build Instructions
              </Link>{" "}
              in the documentation.
            </p>
          </div>
        </section>

        {/* Platform support note */}
        <section>
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
            <p className="text-sm font-semibold text-foreground mb-2">iOS, Android &amp; Console</p>
            <p className="text-sm text-muted-foreground">
              Mobile and console targets require building from source with the platform SDK.
              See the <Link href="/docs" className="text-primary hover:underline">documentation</Link> for
              iOS (Xcode), Android (NDK), HarmonyOS (OpenHarmony SDK), and Unity Plugin build instructions.
              Xbox Series X|S can be targeted directly with Microsoft GDK.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16 py-8 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} The Suika3 Community. Licensed under Zlib License.</p>
      </footer>
    </div>
  );
}
