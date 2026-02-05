import { DocsContent } from "./docs-content";

const DOCS_BASE_URL =
  "https://raw.githubusercontent.com/suika3-community/suika3/main/docs/mkdocs-en/docs";

interface DocFile {
  name: string;
  slug: string;
  path: string;
}

const docFiles: DocFile[] = [
  { name: "Introduction", slug: "index", path: "index.md" },
  { name: "Building", slug: "build", path: "build.md" },
];

async function fetchDocContent(path: string): Promise<string> {
  try {
    const res = await fetch(`${DOCS_BASE_URL}/${path}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return "";
    return await res.text();
  } catch {
    return "";
  }
}

async function fetchAllDocs(): Promise<Map<string, string>> {
  const docs = new Map<string, string>();
  
  for (const doc of docFiles) {
    const content = await fetchDocContent(doc.path);
    if (content) {
      docs.set(doc.slug, content);
    }
  }
  
  return docs;
}

export default async function DocsPage() {
  const docsContent = await fetchAllDocs();
  const docsData = Object.fromEntries(docsContent);
  const availableDocs = docFiles.filter((doc) => docsContent.has(doc.slug));

  return (
    <DocsContent
      docFiles={availableDocs}
      docsData={docsData}
      defaultDoc={availableDocs[0]?.slug || "index"}
    />
  );
}
