import { DocsLayout } from "@/components/docs-layout";
import { docFiles, fetchDoc, rewriteDocLinks, indexFallback } from "./docs-config";

export default async function DocsPage() {
  const raw = await fetchDoc("index.md");
  const content = raw ? rewriteDocLinks(raw) : indexFallback;

  return (
    <DocsLayout
      docFiles={docFiles}
      content={content}
      activeSlug="index"
    />
  );
}
