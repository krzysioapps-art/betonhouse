import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ContactProvider } from "./components/ContactContext";

export const metadata: Metadata = {
  title: "Beton House",
  description:
    "Beton House — pracownia architektoniczna Hani i Seweryna Nogalskich.",
  metadataBase: new URL("https://betonhouse.com"),
  openGraph: {
    title: "Beton House",
    description: "Pracownia architektoniczna Hani i Seweryna Nogalskich.",
    url: "https://betonhouse.com",
    siteName: "Beton House",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/images/beton-house/exterior.png",
        width: 1600,
        height: 1000,
        alt: "Beton House",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <body>
        <ContactProvider>
          <Header />
          {children}
          <Footer />
        </ContactProvider>
      </body>
    </html>
  );
}