import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const noto = Noto_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "DRAIG | Artista, Productor y Escritor",
  description:
    "Draig, artista, productor y escritor, con una pasión desbordante por el arte. ",
  keywords: [
    "DRAIG compositor",
    "música independiente Spotify",
    "producciones audiovisuales",
    "libros de artistas en Amazon",
    "estudio creativo Tinta Negra",
    "contacto profesional Instagram",
    "artista independiente",
  ],

  authors: {
    name: "Agustín Avellaneda | agustin.top",
  },
  publisher: "Agustín Avellaneda | agustin.top",

  twitter: {
    card: "summary_large_image",
    title: "DRAIG | Artista, Productor y Escritor.",
    description:
      "Draig, artista, productor y escritor, con una pasión desbordante por el arte.",
    creator: "Avellaneda Agustín",
    images:
      "https://res.cloudinary.com/draig/image/upload/v1716756378/draig-page/w2mxnh6grba0tcdoqeiu.png",
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
  },

  openGraph: {
    type: "website",
    url: "https://www.draig.art",

    title: "DRAIG | Artista, Productor y Escritor.",
    description:
      "Draig, artista, productor y escritor, con una pasión desbordante por el arte.",
    siteName: "DRAIG | Artista, Productor y Escritor.",
    images: [
      {
        url: "https://res.cloudinary.com/draig/image/upload/v1716756378/draig-page/w2mxnh6grba0tcdoqeiu.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={noto.className}>
        <link rel="canonical" href="https://draig.art" />
        {children} <Footer />
      </body>
    </html>
  );
}
