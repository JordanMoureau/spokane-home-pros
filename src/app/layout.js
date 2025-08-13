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
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Spokane Home Pros",
  image: "https://spokanehomepros.com/logo.png",
  url: "https://spokanehomepros.com",
  telephone: "+1-509-701-2711",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2624 N Division St",
    addressLocality: "Spokane",
    addressRegion: "WA",
    postalCode: "99207",
    addressCountry: "US",
  },
  openingHours: "Mo-Fr 08:00-17:00",
  priceRange: "$$",
  sameAs: [
    "https://www.facebook.com/spokanehomepros",
    "https://www.instagram.com/spokanehomepros",
  ],
  description:
    "Spokane Home Pros is a top-rated renovation contractor serving Liberty Lake and the greater Spokane area. We specialize in bathroom remodeling, kitchen updates, and full-service home renovations.",
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

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17056245661"
        ></Script>

        <Script
          nowprocket
          nitro-exclude
          type="text/javascript"
          id="sa-dynamic-optimization"
          data-uuid="07920c55-ad33-4a4c-b405-118339593b2f"
          src="data:text/javascript;base64,dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoInNjcmlwdCIpO3NjcmlwdC5zZXRBdHRyaWJ1dGUoIm5vd3Byb2NrZXQiLCAiIik7c2NyaXB0LnNldEF0dHJpYnV0ZSgibml0cm8tZXhjbHVkZSIsICIiKTtzY3JpcHQuc3JjID0gImh0dHBzOi8vZGFzaGJvYXJkLnNlYXJjaGF0bGFzLmNvbS9zY3JpcHRzL2R5bmFtaWNfb3B0aW1pemF0aW9uLmpzIjtzY3JpcHQuZGF0YXNldC51dWlkID0gIjA3OTIwYzU1LWFkMzMtNGE0Yy1iNDA1LTExODMzOTU5M2IyZiI7c2NyaXB0LmlkID0gInNhLWR5bmFtaWMtb3B0aW1pemF0aW9uLWxvYWRlciI7ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpOw=="
        ></Script>

        {/* Site Components */}
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
