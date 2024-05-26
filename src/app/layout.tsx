import type { Metadata } from "next";
import { Inter, Noto_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const noto = Noto_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "DRAIG | Artista, Productor y Escritor",
  description:
    "Draig, artista, productor y escritor, con una pasión desbordante por el arte.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={noto.className}>
        {children} <Footer />
      </body>
    </html>
  );
}
