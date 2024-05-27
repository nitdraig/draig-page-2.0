import Image from "next/image";
import IndexView from "./views/IndexView";
import Script from "next/script";

export default function Home() {
  return (
    <main>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALITYCS}`}
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', ${process.env.GOOGLE_ANALITYCS});
                  `}
      </Script>
      <IndexView />
    </main>
  );
}
