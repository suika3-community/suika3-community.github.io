import type { ReactNode } from "react";
import { SUPPORTED_LANGS } from "@/locales";

export async function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }));
}

export default function LangLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
