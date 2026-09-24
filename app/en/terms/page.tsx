import type { Metadata } from "next";
import { LegalDocument } from "@/app/components/LegalDocument";
import { readLegalDocument } from "@/app/lib/legal-content";
import { markdownToHtml } from "@/app/lib/markdown";

export const metadata: Metadata = { title: "Terms of Use", description: "Terms of Use for the ATONI mobile application." };

export default function TermsPage() {
  return <LegalDocument title="Terms of Use" html={markdownToHtml(readLegalDocument("terms.en.md"))} locale="en" homePath="/en" backLabel="Back to website" documentLabel="LEGAL DOCUMENT" privacyLabel="Privacy Policy" termsLabel="Terms of Use" />;
}
