import { DocsContent } from "./docs-content";

const DOCS_BASE_URL =
  "https://raw.githubusercontent.com/suika3-community/suika3/main/docs/mkdocs-en/docs";

export interface DocFile {
  name: string;
  slug: string;
  path: string;
  section?: string;
}

const docFiles: DocFile[] = [
  // Overview
  { section: "Overview",      name: "Introduction",    slug: "index",          path: "index.md" },
  { name: "Intro",            slug: "intro",           path: "intro.md" },
  // Basic Usage
  { section: "Basic Usage",   name: "Getting Started", slug: "getting-started", path: "getting-started.md" },
  { name: "NovelML Syntax",   slug: "novelml-syntax",  path: "novelml-syntax.md" },
  { name: "NovelML Tags",     slug: "novelml-tags",    path: "novelml-tags.md" },
  { name: "Animation",        slug: "anime",            path: "anime.md" },
  { name: "GUI",              slug: "gui",              path: "gui.md" },
  { name: "System Menu",      slug: "sysmenu",          path: "sysmenu.md" },
  { name: "Config",           slug: "config",           path: "config.md" },
  { name: "Lip Sync",         slug: "lip-sync",         path: "lip-sync.md" },
  { name: "Eye Blink",        slug: "eye-blink",        path: "eye-blink.md" },
  // Advanced Usage
  { section: "Advanced Usage", name: "Ray Syntax",     slug: "ray-syntax",    path: "ray-syntax.md" },
  { name: "Ray 2D API",       slug: "ray-2d-api",       path: "ray-2d-api.md" },
  { name: "Ray VN API",       slug: "ray-vn-api",       path: "ray-vn-api.md" },
  { name: "Plugin Dev",       slug: "plugin",            path: "plugin.md" },
  { name: "AOT Deployment",   slug: "aot",               path: "aot.md" },
  // Reference
  { section: "Reference",     name: "System Req. Spec", slug: "srs",           path: "srs.md" },
  // Build
  { section: "Build",         name: "Build Instructions", slug: "build",       path: "build.md" },
];

// Static fallback content used when the remote file cannot be fetched.
// The "index" page is always shown, even before the file exists in the repo.
const staticFallbacks: Record<string, string> = {
  index: `# Suika3 Documentation

Welcome to the \`Suika3\` documentation.

## Basic Usage

- [Getting Started Guide](getting-started)
- [NovelML Syntax Reference](novelml-syntax)
- [NovelML Tag Reference](novelml-tags)
- [Animation](anime)
- [GUI](gui)
- [Lip Sync](lip-sync)
- [Eye Blink](eye-blink)

## Advanced Usage

- [Ray Syntax Reference](ray-syntax)
- [Ray Low Level API Reference](ray-2d-api)
- [Ray High Level API Reference](ray-vn-api)
- [Ray Plugin Development](plugin)
- [AOT Deployment Instructions](aot)

## For Community Developers

- [Build Instructions](build)
`,
};

async function fetchDoc(path: string): Promise<string> {
  try {
    const res = await fetch(`${DOCS_BASE_URL}/${path}`, { cache: "force-cache" });
    if (!res.ok) return "";
    return await res.text();
  } catch {
    return "";
  }
}

export default async function DocsPage() {
  // Fetch all docs in parallel at build time
  const results = await Promise.all(
    docFiles.map(async (doc) => ({
      slug: doc.slug,
      content: await fetchDoc(doc.path),
    }))
  );

  const docsData: Record<string, string> = {};
  results.forEach(({ slug, content }) => {
    // Use remote content if available, otherwise fall back to static content
    const resolved = content || staticFallbacks[slug] || "";
    if (resolved) docsData[slug] = resolved;
  });

  // Show all docs that have content (remote or fallback)
  const availableDocs = docFiles.filter((doc) => docsData[doc.slug]);
  const defaultDoc = availableDocs[0]?.slug ?? "";

  return (
    <DocsContent
      docFiles={availableDocs}
      docsData={docsData}
      defaultDoc={defaultDoc}
    />
  );
}
