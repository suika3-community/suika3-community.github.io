import Link from "next/link";
import Image from "next/image";
import { Download, Terminal, Package, Github, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getMessages, splitBoldTerms } from "@/locales";

const RELEASES_BASE = "https://github.com/awemorris/suika3/releases/latest/download";

const binaryHrefs = [
  `${RELEASES_BASE}/Suika3-SDK-Full.zip`,
  `${RELEASES_BASE}/suika3.exe`,
  `${RELEASES_BASE}/Suika3.dmg`,
  `${RELEASES_BASE}/Suika3-x86_64.flatpak`,
];

const packageManagerCommands = [
  ["flatpak install --user flathub vn.suika3.engine"],
  ["brew tap awemorris/suika3", "brew install suika3"],
  ["pkg install clean"],
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

export default async function DownloadsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = getMessages(lang).downloads;
  const base = `/${lang}`;

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
            <Link href={`${base}/downloads/`} className="text-foreground font-medium">
              {getMessages(lang).nav.downloads}
            </Link>
            <Link href={`${base}/docs/`} className="transition-colors hover:text-foreground">
              {getMessages(lang).nav.docs}
            </Link>
            <Link href={`${base}/#features`}   className="transition-colors hover:text-foreground">
              {getMessages(lang).nav.features}
            </Link>
            <Link href={`${base}/#platforms`}  className="transition-colors hover:text-foreground">
              {getMessages(lang).nav.platforms}
            </Link>
            <Link href={`${base}/#philosophy`} className="transition-colors hover:text-foreground">
              {getMessages(lang).nav.philosophy}
            </Link>
            <Link href={`${base}/#lineage`}    className="transition-colors hover:text-foreground">
              {getMessages(lang).nav.lineage}
            </Link>
            <Button variant="outline" size="sm" asChild>
              <Link href="https://github.com/suika3-community/suika3" target="_blank" rel="noopener noreferrer">
                <Github className="mr-1.5 h-4 w-4" />
                GitHub
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-16 md:py-24">
        {/* Page title */}
        <div className="mb-12">
          <Link href={`${base}/`} className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-3.5 w-3.5" />
            {t.backToHome}
          </Link>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            {t.pageTitle}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.versionLabel} <span className="font-semibold text-foreground">26.04 (LTS RC1)</span>
            <span className="ml-3 text-sm">· {t.licenseNote}</span>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">{t.ltsNote}</p>
        </div>

        {/* Binary downloads */}
        <section className="mb-16">
          <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold">
            <Download className="h-5 w-5 text-primary" />
            {t.binaryTitle}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.binaryItems.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-card/30 p-6 hover:border-primary/30 hover:bg-card/50 transition-all"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div>
                    <p className="font-semibold text-foreground">{item.os}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Button size="sm" asChild>
                    <a href={binaryHrefs[i]} download>
                      <Download className="mr-1.5 h-3.5 w-3.5" />
                      {item.label}
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            {t.allReleasesPrefix}{" "}
            <Link
              href="https://github.com/awemorris/suika3/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {t.allReleasesLink}
            </Link>
            {t.allReleasesSuffix}
          </p>
        </section>

        {/* Package managers */}
        <section className="mb-16">
          <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold">
            <Package className="h-5 w-5 text-primary" />
            {t.packagesTitle}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.packageManagers.map((pm, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card/30 p-6">
                <p className="mb-4 font-semibold text-foreground">{pm.label}</p>
                <pre className="rounded-lg bg-secondary/50 border border-border p-4 text-sm font-mono overflow-x-auto">
                  {(packageManagerCommands[i] ?? []).map((cmd, j) => (
                    <div key={j} className="text-foreground/90">{cmd}</div>
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
            {t.sourceTitle}
          </h2>
          <div className="rounded-2xl border border-border bg-card/30 p-6">
            <p className="mb-4 text-sm text-muted-foreground">{t.cmakeNote}</p>
            <pre className="rounded-lg bg-secondary/50 border border-border p-4 text-sm font-mono overflow-x-auto">
              {sourceBuild.map((line, i) => (
                <div key={i} className="text-foreground/90">
                  <span className="select-none text-primary/60 mr-2">$</span>
                  {line}
                </div>
              ))}
            </pre>
            <p className="mt-4 text-xs text-muted-foreground">
              {t.buildDocsPrefix}{" "}
              <Link href={`${base}/docs/build/`} className="text-primary hover:underline">
                {t.buildDocsLink}
              </Link>{" "}
              {t.buildDocsSuffix}
            </p>
          </div>
        </section>

        {/* Platform support note */}
        <section>
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 space-y-3">
            <p className="text-sm font-semibold text-foreground">{t.platformTitle}</p>
            <p className="text-sm text-muted-foreground">
              {splitBoldTerms(t.platformText1).map((part, i) =>
                part.bold
                  ? <strong key={i} className="text-foreground">{part.text}</strong>
                  : part.text
              )}
            </p>
            <p className="text-sm text-muted-foreground">
              {t.platformText2Prefix}{" "}
              <Link href={`${base}/docs/build/`} className="text-primary hover:underline">
                {t.platformText2Link}
              </Link>
              {t.platformText2Suffix}
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
