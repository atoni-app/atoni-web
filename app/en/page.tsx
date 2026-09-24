import type { Metadata } from "next";
import { LandingPage } from "@/app/components/LandingPage";
import { siteCopy } from "@/app/content/site-copy";

export const metadata: Metadata = {
  title: "ATONI | Bible impostor party game",
  description: "A Bible-themed party game for 3–12 players. One person does not know the word. Expose the impostor before they discover it.",
  alternates: { canonical: "/en", languages: { pl: "/", en: "/en", es: "/es" } },
};

export default function EnglishPage() {
  return <LandingPage copy={siteCopy.en} />;
}
