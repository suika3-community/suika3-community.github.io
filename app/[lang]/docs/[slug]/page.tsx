import { notFound } from "next/navigation";
import { DocsLayout } from "@/components/docs-layout";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { docFiles, fetchDoc, rewriteDocLinks } from "@/app/docs/docs-config";

export const dynamicParams = false;

export async function generateStaticParams() {
  return docFiles
    .filter((doc) => doc.slug !== "index")
    .map((doc) => ({ slug: doc.slug }));
}

export default async function DocPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const doc = docFiles.find((d) => d.slug === slug);
  if (!doc) notFound();

  const raw = await fetchDoc(doc.path, doc.url, lang);
  const content = raw ? rewriteDocLinks(raw, lang) : null;

  return (
    <DocsLayout activeSlug={slug} lang={lang}>
      {content ? <MarkdownRenderer content={content} /> : null}
    </DocsLayout>
  );
}
