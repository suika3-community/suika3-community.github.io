import { DocsLayout } from "@/components/docs-layout";
import { fetchDoc, rewriteDocLinks, indexFallback } from "./docs-config";

export default async function DocsPage() {
  const raw = await fetchDoc("index.md");
  const content = raw ? rewriteDocLinks(raw) : indexFallback;

  return <DocsLayout content={content} activeSlug="index" />;
}
