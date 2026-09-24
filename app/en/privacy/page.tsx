import type { Metadata } from "next";
import { LegalDocument } from "@/app/components/LegalDocument";
import { readLegalDocument } from "@/app/lib/legal-content";
import { markdownToHtml } from "@/app/lib/markdown";

export const metadata: Metadata = { title: "Privacy Policy", description: "Privacy Policy for the ATONI mobile application." };

export default function PrivacyPage() {
  return <LegalDocument title="Privacy Policy" html={markdownToHtml(readLegalDocument("privacy.en.md"))} locale="en" homePath="/en" backLabel="Back to website" documentLabel="LEGAL DOCUMENT" privacyLabel="Privacy Policy" termsLabel="Terms of Use" />;
}
