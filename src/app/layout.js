import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Inter, Raleway } from "next/font/google";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-raleway",
  display: "swap",
});

const jsonLd = {
  // your structured data – unchanged
};

export const metadata = {
  // your existing metadata – unchanged
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${raleway.variable}`}>
      <head />
      <body className="font-raleway font-inter">
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5KX28MLX');
            `,
          }}
        />

        {/* Google Tag Manager (noscript fallback) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5KX28MLX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* Structured Data */}
        <Script
          type="application/ld+json"
          id="jsonld"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Script
          src="https://www.google.com/recaptcha/api.js?render=6LfpeW0rAAAAAIIDBT3O-594U-EvZxT9fcw_sdMY"
          strategy="afterInteractive"
        ></Script>

        {/* Site Components */}
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
