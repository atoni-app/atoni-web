import Image from "next/image";
import Link from "next/link";

type LegalDocumentProps = {
  title: string;
  html: string;
  locale: "pl" | "en" | "es";
  homePath: string;
  backLabel: string;
  documentLabel: string;
  privacyLabel: string;
  termsLabel: string;
};

export function LegalDocument({ title, html, locale, homePath, backLabel, documentLabel, privacyLabel, termsLabel }: LegalDocumentProps) {
  const legalPrefix = locale === "pl" ? "" : `/${locale}`;

  return (
    <main className="legal-shell" lang={locale}>
      <header className="legal-header">
        <Link href={homePath} aria-label={`${backLabel}: ATONI`}><Image src="/brand/atoni-logo.png" alt="ATONI" width={720} height={270} /></Link>
        <Link href={homePath} className="back-link">← {backLabel}</Link>
      </header>
      <article className="legal-document">
        <p className="eyebrow dark">{documentLabel}</p>
        <h1>{title}</h1>
        <div className="legal-content" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
      <footer className="legal-footer"><Link href={`${legalPrefix}/privacy`}>{privacyLabel}</Link><Link href={`${legalPrefix}/terms`}>{termsLabel}</Link><a href="mailto:contact@atoni.app">contact@atoni.app</a></footer>
    </main>
  );
}
