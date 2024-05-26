import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        {children} <Footer />
      </body>
    </html>
  );
}
