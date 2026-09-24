import type { Metadata } from "next";
import { LegalDocument } from "@/app/components/LegalDocument";
import { readLegalDocument } from "@/app/lib/legal-content";
import { markdownToHtml } from "@/app/lib/markdown";

export const metadata: Metadata = { title: "Regulamin", description: "Regulamin korzystania z aplikacji mobilnej ATONI." };

export default function TermsPage() {
  return <LegalDocument title="Regulamin" html={markdownToHtml(readLegalDocument("terms.md"))} locale="pl" homePath="/" backLabel="Wróć do strony" documentLabel="DOKUMENT PRAWNY" privacyLabel="Polityka prywatności" termsLabel="Regulamin" />;
}
