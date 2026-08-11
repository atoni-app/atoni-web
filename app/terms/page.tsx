import type { Metadata } from "next";
import termsMarkdown from "@/content/terms.md?raw";
import { LegalDocument } from "@/app/components/LegalDocument";
import { markdownToHtml } from "@/app/lib/markdown";

export const metadata: Metadata = { title: "Regulamin", description: "Regulamin korzystania z aplikacji mobilnej ATONI." };

export default function TermsPage() {
  return <LegalDocument title="Regulamin" html={markdownToHtml(termsMarkdown)} />;
}
