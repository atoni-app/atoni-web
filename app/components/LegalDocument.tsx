import Image from "next/image";
import Link from "next/link";

export function LegalDocument({ title, html }: { title: string; html: string }) {
  return (
    <main className="legal-shell">
      <header className="legal-header">
        <Link href="/" aria-label="Wróć na stronę ATONI"><Image src="/brand/atoni-logo.png" alt="ATONI" width={720} height={270} /></Link>
        <Link href="/" className="back-link">← Wróć do strony</Link>
      </header>
      <article className="legal-document">
        <p className="eyebrow dark">DOKUMENT PRAWNY</p>
        <h1>{title}</h1>
        <div className="legal-content" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
      <footer className="legal-footer"><Link href="/privacy">Polityka prywatności</Link><Link href="/terms">Regulamin</Link><a href="mailto:contact@atoni.app">contact@atoni.app</a></footer>
    </main>
  );
}
