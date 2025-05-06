import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Inter, Raleway } from "next/font/google";
import Head from "next/head";

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

export const metadata = {
  title: "Spokane Home Remodeling Experts | Renovations & Repair for Spokane",
  description:
    "Top-rated remodeling contractors in Spokane WA specializing in bathroom renovation, kitchen remodeling, and flooring installation. Trusted home improvement services.",
  openGraph: {
    type: "website",
    url: "https://spokanehomepros.com",
    title:
      "Spokane Home Remodeling Experts |  Kitchen Remodels, Exteriors, Bathroom, Flooring and Home Repair",
    description:
      "Trusted remodeling contractors in Spokane WA for kitchens, bathrooms, flooring, and home improvement.",
    images: [
      {
        url: "https://spokanehomepros.com/logo.jpg",
        width: 800,
        height: 600,
        alt: "Spokane Home Pros Logo",
      },
    ],
    siteName: "Spokane Home Pros",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Spokane Home Remodeling Experts |  Kitchen Remodels, Exteriors, Bathroom, Flooring and Home Repair",
    description:
      "Expert Spokane remodeling contractors for kitchen, bath, flooring & more. Rated 4.8 stars.",
    images: ["https://spokanehomepros.com/logo.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Spokane Home Pros",
  image: "https://spokanehomepros.com/logo.jpg",
  "@id": "https://spokanehomepros.com",
  url: "https://spokanehomepros.com",
  telephone: "+1-509-862-7934",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3015 E 32nd Ave",
    addressLocality: "Spokane",
    addressRegion: "WA",
    postalCode: "99223",
    addressCountry: "US",
  },
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "26",
  },
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Home Repairs",
        description:
          "General home repair services including minor fixes and maintenance tasks.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Kitchen & Bathroom Remodeling",
        description:
          "Comprehensive remodeling services for kitchens and bathrooms.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Flooring & Tile Installation",
        description: "Installation of various flooring types and tile work.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Exterior Improvements",
        description:
          "Enhancements to the exterior of homes, including siding and painting.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Custom Projects",
        description: "Home improvement projects to meet unique client needs.",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${raleway.variable}`}>
      <Head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-5KX28MLX');
    `,
          }}
        />
        {/* End Google Tag Manager */}
      </Head>
      <body className="font-raleway font-inter">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5KX28MLX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
