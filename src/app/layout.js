import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Inter, Raleway } from "next/font/google";

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
    <html lang="en" className={`${inter.variable} ${raleway.variable}`}>
      <body className="font-raleway font-inter">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
