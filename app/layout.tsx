import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://atoni.app"),
  title: { default: "ATONI — biblijny impostor", template: "%s | ATONI" },
  description: "Biblijna gra towarzyska dla 3–12 osób. Jedna osoba nie zna hasła — odkryjcie impostora, zanim on odkryje hasło.",
  applicationName: "ATONI",
  icons: { icon: "/icon.png", apple: "/icon.png" },
  openGraph: {
    title: "ATONI — biblijny impostor",
    description: "Jedno biblijne hasło. Jedna osoba bez odpowiedzi. Kto tylko dobrze udaje?",
    url: "https://atoni.app",
    siteName: "ATONI",
    locale: "pl_PL",
    type: "website",
    images: [{ url: "/og.png", width: 1536, height: 887, alt: "ATONI — Kto zna hasło? Biblijny impostor" }],
  },
  twitter: { card: "summary_large_image", title: "ATONI — biblijny impostor", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pl"><body>{children}</body></html>;
}
