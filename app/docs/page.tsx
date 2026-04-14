import { DocsLayout } from "@/components/docs-layout";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { fetchDoc, rewriteDocLinks, indexFallback } from "./docs-config";

export default async function DocsPage() {
  const raw = await fetchDoc("index.md");
  const content = raw ? rewriteDocLinks(raw) : indexFallback;
  return (
    <DocsLayout activeSlug="index">
      <MarkdownRenderer content={content} />
    </DocsLayout>
  );
}
