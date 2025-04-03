import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Inter, Raleway } from "next/font/google";
import { Html, Head, Main, NextScript } from "next/document";

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
  title: "Spokane Home Pros",
  description: "Your Trusted Home Renovation & Repair Professionals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Raleway:wght@400;700;900&display=swap"
        />
      </Head>
      <body className="raleway">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
