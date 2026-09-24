import type { Metadata } from "next";
import { LandingPage } from "@/app/components/LandingPage";
import { siteCopy } from "@/app/content/site-copy";

export const metadata: Metadata = {
  title: "ATONI | Juego del impostor bíblico",
  description: "Un juego bíblico de fiesta para 3–12 personas. Una persona no conoce la palabra. Descubrid al impostor antes de que la adivine.",
  alternates: { canonical: "/es", languages: { pl: "/", en: "/en", es: "/es" } },
};

export default function SpanishPage() {
  return <LandingPage copy={siteCopy.es} />;
}
