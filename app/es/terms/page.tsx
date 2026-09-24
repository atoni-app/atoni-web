import type { Metadata } from "next";
import { LegalDocument } from "@/app/components/LegalDocument";
import { readLegalDocument } from "@/app/lib/legal-content";
import { markdownToHtml } from "@/app/lib/markdown";

export const metadata: Metadata = { title: "Condiciones de uso", description: "Condiciones de uso de la aplicación móvil ATONI." };

export default function TermsPage() {
  return <LegalDocument title="Condiciones de uso" html={markdownToHtml(readLegalDocument("terms.es.md"))} locale="es" homePath="/es" backLabel="Volver al sitio" documentLabel="DOCUMENTO LEGAL" privacyLabel="Política de privacidad" termsLabel="Condiciones de uso" />;
}
