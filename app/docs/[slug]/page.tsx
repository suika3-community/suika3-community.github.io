import { notFound } from "next/navigation";
import { DocsLayout } from "@/components/docs-layout";
import { docFiles } from "../docs-config";

// Only pre-rendered slugs are valid; everything else → 404
export const dynamicParams = false;

export async function generateStaticParams() {
  return docFiles
    .filter((doc) => doc.slug !== "index")
    .map((doc) => ({ slug: doc.slug }));
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!docFiles.find((d) => d.slug === slug)) notFound();
  return <DocsLayout activeSlug={slug} />;
}
