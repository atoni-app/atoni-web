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
  title: { default: "ATONI | biblijny impostor", template: "%s | ATONI" },
  description: "Biblijna gra towarzyska dla 3–12 osób. Jedna osoba nie zna hasła. Odkryjcie impostora, zanim on odkryje hasło.",
  applicationName: "ATONI",
  icons: { icon: "/icon.png", apple: "/icon.png" },
  openGraph: {
    title: "ATONI | biblijny impostor",
    description: "Jedno biblijne hasło. Jedna osoba bez odpowiedzi. Kto tylko dobrze udaje?",
    url: "https://atoni.app",
    siteName: "ATONI",
    locale: "pl_PL",
    type: "website",
    images: [{ url: "/og.png", width: 1536, height: 887, alt: "ATONI. Kto zna hasło? Biblijny impostor" }],
  },
  twitter: { card: "summary_large_image", title: "ATONI | biblijny impostor", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pl" data-scroll-behavior="smooth"><body className={`${montserrat.variable} ${pangolin.variable}`}>{children}</body></html>;
}
