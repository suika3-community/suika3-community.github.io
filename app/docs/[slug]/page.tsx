import { notFound } from "next/navigation";
import { DocsLayout } from "@/components/docs-layout";
import { docFiles, fetchDoc } from "../docs-config";

// Only pre-rendered slugs are valid; everything else → 404
export const dynamicParams = false;

// Tell Next.js which slugs to pre-render at build time
export async function generateStaticParams() {
  return docFiles
    .filter((doc) => doc.slug !== "index")
    .map((doc) => ({ slug: doc.slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function DocPage({ params }: Props) {
  const { slug } = await params;
  const doc = docFiles.find((d) => d.slug === slug);
  if (!doc) notFound();

  const content = await fetchDoc(doc.path, doc.url) || null;

  return <DocsLayout content={content} activeSlug={slug} />;
}
