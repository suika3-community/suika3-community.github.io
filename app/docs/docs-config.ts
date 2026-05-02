const DOCS_REPO_BASE =
  "https://raw.githubusercontent.com/suika3-community/suika3/main/docs";

const LANG_TO_MKDOCS: Record<string, string> = {
  en:       "mkdocs-en",
  ja:       "mkdocs-ja",
  "zh-Hans": "mkdocs-zh-Hans",
  "zh-Hant": "mkdocs-zh-Hant",
  es:       "mkdocs-es",
};

export function getDocsBaseUrl(lang = "en"): string {
  const folder = LANG_TO_MKDOCS[lang] ?? "mkdocs-en";
  return `${DOCS_REPO_BASE}/${folder}/docs`;
}

/** @deprecated Use getDocsBaseUrl(lang) instead */
export const DOCS_BASE_URL = `${DOCS_REPO_BASE}/mkdocs-en/docs`;

export interface DocFile {
  name: string;
  slug: string;
  path: string;
  section?: string;
  /** Override the full fetch URL (used for files outside DOCS_BASE_URL) */
  url?: string;
}

export const docFiles: DocFile[] = [
  // Overview
  { section: "Overview",      name: "Introduction",     slug: "index",          path: "index.md" },
  // Basic Usage
  { section: "Basic Usage",   name: "Getting Started",  slug: "getting-started", path: "getting-started.md" },
  { name: "NovelML Syntax",   slug: "novelml-syntax",   path: "novelml-syntax.md" },
  { name: "NovelML Tags",     slug: "novelml-tags",     path: "novelml-tags.md" },
  { name: "Animation",        slug: "anime",             path: "anime.md" },
  { name: "GUI",              slug: "gui",               path: "gui.md" },
  { name: "System Menu",      slug: "sysmenu",           path: "sysmenu.md" },
  { name: "Config",           slug: "config",            path: "config.md" },
  { name: "Lip Sync",         slug: "lip-sync",          path: "lip-sync.md" },
  { name: "Eye Blink",        slug: "eye-blink",         path: "eye-blink.md" },
  // Advanced Usage
  { section: "Advanced Usage", name: "Ray Syntax",      slug: "ray-syntax",    path: "ray-syntax.md" },
  { name: "Ray 2D API",       slug: "ray-2d-api",        path: "ray-2d-api.md" },
  { name: "Ray VN API",       slug: "ray-vn-api",        path: "ray-vn-api.md" },
  { name: "Plugin Dev",       slug: "plugin",             path: "plugin.md" },
  { name: "AOT Deployment",   slug: "aot",                path: "aot.md" },
  // Reference
  { section: "Reference",     name: "System Req. Spec", slug: "srs",           path: "srs.md" },
  // Build
  { section: "Build",         name: "Build Instructions", slug: "build",       path: "build.md" },
  // About
  { section: "About",         name: "README (GitHub)",    slug: "readme",      path: "README.md",
    url: "https://raw.githubusercontent.com/awemorris/suika3/main/README.md" },
];

// Rewrite doc-relative links in fetched markdown to local /docs/[slug] routes.
const linkMap: Record<string, string> = {
  "index.md":          "/docs",
  "getting-started.md": "/docs/getting-started",
  "novelml-syntax.md": "/docs/novelml-syntax",
  "novelml-tags.md":   "/docs/novelml-tags",
  "tag.md":            "/docs/novelml-tags",
  "anime.md":          "/docs/anime",
  "gui.md":            "/docs/gui",
  "sysmenu.md":        "/docs/sysmenu",
  "config.md":         "/docs/config",
  "lip-sync.md":       "/docs/lip-sync",
  "eye-blink.md":      "/docs/eye-blink",
  "eye-bink.md":       "/docs/eye-blink",
  "ray-syntax.md":     "/docs/ray-syntax",
  "ray-2d-api.md":     "/docs/ray-2d-api",
  "ray-vn-api.md":     "/docs/ray-vn-api",
  "plugin.md":         "/docs/plugin",
  "aot.md":            "/docs/aot",
  "srs.md":            "/docs/srs",
  "build.md":          "/docs/build",
};

export function rewriteDocLinks(content: string, lang?: string): string {
  const prefix = lang ? `/${lang}` : "";
  return content.replace(/\]\(([^)]+)\)/g, (match, href: string) => {
    const filename = href.split("/").pop() ?? "";
    return linkMap[filename] ? `](${prefix}${linkMap[filename]})` : match;
  });
}

export function getIndexFallback(lang?: string): string {
  const base = lang ? `/${lang}` : "";
  return `# Suika3 Documentation

Welcome to the \`Suika3\` documentation.

## Basic Usage

- [Getting Started Guide](${base}/docs/getting-started)
- [NovelML Syntax Reference](${base}/docs/novelml-syntax)
- [NovelML Tag Reference](${base}/docs/novelml-tags)
- [Animation](${base}/docs/anime)
- [GUI](${base}/docs/gui)
- [Lip Sync](${base}/docs/lip-sync)
- [Eye Blink](${base}/docs/eye-blink)

## Advanced Usage

- [Ray Syntax Reference](${base}/docs/ray-syntax)
- [Ray Low Level API Reference](${base}/docs/ray-2d-api)
- [Ray High Level API Reference](${base}/docs/ray-vn-api)
- [Ray Plugin Development](${base}/docs/plugin)
- [AOT Deployment Instructions](${base}/docs/aot)

## For Community Developers

- [Build Instructions](${base}/docs/build)
`;
}

// Fallback content when index.md cannot be fetched from the repository.
export const indexFallback = `# Suika3 Documentation

Welcome to the \`Suika3\` documentation.

## Basic Usage

- [Getting Started Guide](/docs/getting-started)
- [NovelML Syntax Reference](/docs/novelml-syntax)
- [NovelML Tag Reference](/docs/novelml-tags)
- [Animation](/docs/anime)
- [GUI](/docs/gui)
- [Lip Sync](/docs/lip-sync)
- [Eye Blink](/docs/eye-blink)

## Advanced Usage

- [Ray Syntax Reference](/docs/ray-syntax)
- [Ray Low Level API Reference](/docs/ray-2d-api)
- [Ray High Level API Reference](/docs/ray-vn-api)
- [Ray Plugin Development](/docs/plugin)
- [AOT Deployment Instructions](/docs/aot)

## For Community Developers

- [Build Instructions](/docs/build)
`;

export async function fetchDoc(path: string, url?: string, lang = "en"): Promise<string> {
  try {
    const target = url ?? `${getDocsBaseUrl(lang)}/${path}`;
    const res = await fetch(target, { cache: "force-cache" });
    if (!res.ok) return "";
    return await res.text();
  } catch {
    return "";
  }
}
