import type { Metadata } from "next";
import { LandingPage } from "@/app/components/LandingPage";
import { siteCopy } from "@/app/content/site-copy";

export const metadata: Metadata = {
  title: { absolute: "ATONI – Juego bíblico de fiesta" },
  description: "Un juego bíblico de fiesta para 3–12 personas. Una persona no conoce la palabra. Descubrid al impostor antes de que la adivine.",
  alternates: { canonical: "/es", languages: { "x-default": "/", pl: "/", en: "/en", es: "/es" } },
  openGraph: {
    title: "ATONI – Juego bíblico de fiesta",
    description: "Un juego bíblico de fiesta para 3–12 personas. Una persona no conoce la palabra. ¿Quién solo finge?",
    url: "/es",
    locale: "es_ES",
  },
  twitter: {
    title: "ATONI – Juego bíblico de fiesta",
    description: "Una palabra bíblica. Una persona sin la respuesta. Descubrid al impostor.",
  },
};

export default function SpanishPage() {
  return <LandingPage copy={siteCopy.es} />;
}
