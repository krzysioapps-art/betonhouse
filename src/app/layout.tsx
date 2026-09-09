import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ContactProvider } from "./components/ContactContext";

export const metadata: Metadata = {
  title: "Studio Forma",
  description:
    "Studio Forma — pracownia architektoniczna zajmująca się projektowaniem przestrzeni mieszkalnych i użytkowych.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Studio Forma",
    description:
      "Studio Forma — pracownia architektoniczna zajmująca się projektowaniem przestrzeni mieszkalnych i użytkowych.",
    url: "https://example.com",
    siteName: "Studio Forma",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/images/beton-house/exterior.webp",
        width: 1600,
        height: 1000,
        alt: "Dom Monolityczny",
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