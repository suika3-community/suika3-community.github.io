import { DocsLayout } from "@/components/docs-layout";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { fetchDoc, rewriteDocLinks, getIndexFallback } from "@/app/docs/docs-config";

export default async function DocsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const raw = await fetchDoc("index.md", undefined, lang);
  const content = raw ? rewriteDocLinks(raw, lang) : getIndexFallback(lang);
  return (
    <DocsLayout activeSlug="index" lang={lang}>
      <MarkdownRenderer content={content} />
    </DocsLayout>
  );
}
