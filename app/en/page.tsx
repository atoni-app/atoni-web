import type { Metadata } from "next";
import { LandingPage } from "@/app/components/LandingPage";
import { siteCopy } from "@/app/content/site-copy";

export const metadata: Metadata = {
  title: { absolute: "ATONI – Bible party game" },
  description: "A Bible-themed party game for 3–12 players. One person does not know the word. Expose the impostor before they discover it.",
  alternates: { canonical: "/en", languages: { "x-default": "/", pl: "/", en: "/en", es: "/es" } },
  openGraph: {
    title: "ATONI – Bible party game",
    description: "A Bible-themed party game for 3–12 players. One person does not know the word. Who is only pretending?",
    url: "/en",
    locale: "en_US",
  },
  twitter: {
    title: "ATONI – Bible party game",
    description: "One Bible word. One player without the answer. Expose the impostor.",
  },
};

export default function EnglishPage() {
  return <LandingPage copy={siteCopy.en} />;
}
