import { notFound } from "next/navigation";
import { DocsLayout } from "@/components/docs-layout";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { docFiles, fetchDoc } from "../docs-config";

export const dynamicParams = false;

export async function generateStaticParams() {
  return docFiles
    .filter((doc) => doc.slug !== "index")
    .map((doc) => ({ slug: doc.slug }));
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = docFiles.find((d) => d.slug === slug);
  if (!doc) notFound();

  const content = await fetchDoc(doc.path, doc.url);
  return (
    <DocsLayout activeSlug={slug}>
      {content ? <MarkdownRenderer content={content} /> : null}
    </DocsLayout>
  );
}
