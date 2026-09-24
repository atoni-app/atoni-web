import type { Metadata } from "next";
import { LegalDocument } from "@/app/components/LegalDocument";
import { readLegalDocument } from "@/app/lib/legal-content";
import { markdownToHtml } from "@/app/lib/markdown";

export const metadata: Metadata = { title: "Polityka prywatności", description: "Polityka prywatności aplikacji mobilnej ATONI." };

export default function PrivacyPage() {
  return <LegalDocument title="Polityka prywatności" html={markdownToHtml(readLegalDocument("privacy.md"))} locale="pl" homePath="/" backLabel="Wróć do strony" documentLabel="DOKUMENT PRAWNY" privacyLabel="Polityka prywatności" termsLabel="Regulamin" />;
}
