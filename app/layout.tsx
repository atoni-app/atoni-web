import type { Metadata } from "next";
import { Montserrat, Pangolin } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const pangolin = Pangolin({
  variable: "--font-pangolin",
  subsets: ["latin", "latin-ext"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://atoni.app"),
  title: { default: "ATONI – biblijna gra towarzyska", template: "%s | ATONI" },
  description: "Biblijny impostor dla 3–12 osób. Jedno hasło, jedna osoba bez odpowiedzi. Grajcie na jednym telefonie i odkryjcie, kto tylko dobrze udaje.",
  applicationName: "ATONI",
  creator: "ATONI",
  category: "games",
  alternates: {
    canonical: "/",
    languages: { "x-default": "/", pl: "/", en: "/en", es: "/es" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: { icon: "/icon.png", shortcut: "/favicon.ico", apple: "/apple-icon.png" },
  openGraph: {
    title: "ATONI – biblijna gra towarzyska",
    description: "Biblijny impostor dla 3–12 osób. Jedno hasło, jedna osoba bez odpowiedzi. Kto tylko dobrze udaje?",
    url: "https://atoni.app",
    siteName: "ATONI",
    locale: "pl_PL",
    type: "website",
    images: [{ url: "/og.png", width: 1536, height: 887, alt: "ATONI. Kto zna hasło? Biblijny impostor" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ATONI – biblijna gra towarzyska",
    description: "Biblijny impostor dla 3–12 osób. Jedno hasło, jedna osoba bez odpowiedzi.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pl" data-scroll-behavior="smooth"><body className={`${montserrat.variable} ${pangolin.variable}`}>{children}</body></html>;
}
