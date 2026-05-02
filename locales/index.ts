import { en } from "./en";
import { ja } from "./ja";
import { zhHans } from "./zh-Hans";
import { zhHant } from "./zh-Hant";
import { es } from "./es";
import type { Messages } from "./types";

export type { Messages };

export const SUPPORTED_LANGS = ["en", "ja", "zh-Hans", "zh-Hant", "es"] as const;
export type SupportedLang = typeof SUPPORTED_LANGS[number];

const messages: Record<SupportedLang, Messages> = {
  en,
  ja,
  "zh-Hans": zhHans,
  "zh-Hant": zhHant,
  es,
};

export function getMessages(lang: string): Messages {
  return messages[lang as SupportedLang] ?? en;
}

/**
 * Render a translation string that contains {FullZIP}, {Xcode}, {AndroidStudio}
 * placeholders. Returns an array of strings/JSX elements for React rendering.
 * Usage: renderBold(t.downloads.platformText1).map((part, i) => <span key={i}>{part}</span>)
 */
const BOLD_TERMS: Record<string, string> = {
  FullZIP: "Full ZIP",
  Xcode: "Xcode",
  AndroidStudio: "Android Studio",
};

export function splitBoldTerms(text: string): Array<{ text: string; bold: boolean }> {
  const pattern = /\{(FullZIP|Xcode|AndroidStudio)\}/g;
  const result: Array<{ text: string; bold: boolean }> = [];
  let last = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) {
      result.push({ text: text.slice(last, match.index), bold: false });
    }
    result.push({ text: BOLD_TERMS[match[1]], bold: true });
    last = match.index + match[0].length;
  }
  if (last < text.length) {
    result.push({ text: text.slice(last), bold: false });
  }
  return result;
}
