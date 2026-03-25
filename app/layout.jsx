import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export const metadata = {
  title: "Carenuity — Smart Indoor Monitoring",
  description:
    "Modular indoor air quality and presence monitoring. The Carenuity SQ-System tracks CO₂, temperature, humidity, TVOC and more in real time.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/carenuity-icon.png" />
      </head>
      <body className="bg-white dark:bg-gray-dark antialiased">
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <div className="isolate">{children}</div>
            <Footer />
            <ScrollToTop />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
