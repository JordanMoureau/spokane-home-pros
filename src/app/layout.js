import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Spokane Home Pros",
  description: "Your Trusted Home Renovation & Repair Professionals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="raleway">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
