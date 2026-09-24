import type { Metadata } from "next";
import { LegalDocument } from "@/app/components/LegalDocument";
import { readLegalDocument } from "@/app/lib/legal-content";
import { markdownToHtml } from "@/app/lib/markdown";

export const metadata: Metadata = { title: "Política de privacidad", description: "Política de privacidad de la aplicación móvil ATONI." };

export default function PrivacyPage() {
  return <LegalDocument title="Política de privacidad" html={markdownToHtml(readLegalDocument("privacy.es.md"))} locale="es" homePath="/es" backLabel="Volver al sitio" documentLabel="DOCUMENTO LEGAL" privacyLabel="Política de privacidad" termsLabel="Condiciones de uso" />;
}
