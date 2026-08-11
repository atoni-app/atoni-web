import type { Metadata } from "next";
import privacyMarkdown from "@/content/privacy.md?raw";
import { LegalDocument } from "@/app/components/LegalDocument";
import { markdownToHtml } from "@/app/lib/markdown";

export const metadata: Metadata = { title: "Polityka prywatności", description: "Polityka prywatności aplikacji mobilnej ATONI." };

export default function PrivacyPage() {
  return <LegalDocument title="Polityka prywatności" html={markdownToHtml(privacyMarkdown)} />;
}
