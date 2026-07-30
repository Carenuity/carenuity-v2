"use client";
import Link from "next/link";
import ProductSidebar from "../../../components/ProductSidebar";
import { useLanguage } from "../../../context/LanguageContext";

export default function SqPanelUserGuideClient() {
  const { lang } = useLanguage();
  const en = lang === "en";

  return (
    <main>
      <section
        className="relative overflow-hidden pt-[120px] md:pt-[100px] xl:pt-[140px]"
        style={{
          background:
            "linear-gradient(135deg, #0f3520 0%, #174f2e 55%, #1e6b3e 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="container relative">
          <nav className="flex items-center gap-2 pt-6 pb-4 text-sm">
            <Link
              href="/"
              className="text-green-300/70 hover:text-green-300 transition-colors"
            >
              {en ? "Home" : "Start"}
            </Link>
            <span className="text-green-300/40">/</span>
            <Link
              href="/products"
              className="text-green-300/70 hover:text-green-300 transition-colors"
            >
              {en ? "Products" : "Produkte"}
            </Link>
            <span className="text-green-300/40">/</span>
            <span className="font-medium text-white">SQ-Panel User Guide</span>
          </nav>
          <div className="pb-12 pt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
              <span className="text-xs font-semibold text-white tracking-wide uppercase">
                {en ? "User Guide" : "Benutzerhandbuch"}
              </span>
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              SQ-Panel User Guide
              <br />
              <span className="text-green-300">
                {en
                  ? "Everything You Need to Get Started"
                  : "Alles, was Sie für den Einstieg benötigen"}
              </span>
            </h1>
            <p className="text-lg leading-relaxed text-white/80 max-w-2xl">
              {en
                ? "Step-by-step visual guide for using your Carenuity SQ-Panel."
                : "Schritt-für-Schritt-Bildanleitung für die Nutzung Ihres Carenuity SQ-Panels."}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <ProductSidebar />
            <div className="flex-1 min-w-0">
              {/* Panel setup */}
              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-2">
                {en ? "Panel Setup" : "Panel-Einrichtung"}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {en
                  ? "Unbox, mount and power on your SQ-Panel by following the steps below."
                  : "Packen Sie Ihr SQ-Panel aus, montieren Sie es und schalten Sie es ein, indem Sie den folgenden Schritten folgen."}
              </p>

              <div className="space-y-6 mb-12">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/products/sq-panel/sq-panel-guide/guide3.png"
                    alt="SQ-Panel setup guide part 1"
                    className="w-full object-contain"
                  />
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/products/sq-panel/sq-panel-guide/guide4.png"
                    alt="SQ-Panel setup guide part 2"
                    className="w-full object-contain"
                  />
                </div>
              </div>

              {/* Mobile app walkthrough */}
              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-2">
                {en ? "Carenuity Mobile App" : "Carenuity Mobile App"}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {en
                  ? "Pair your SQ-Panel with the Carenuity app to monitor temperature, humidity, air quality and presence from anywhere."
                  : "Verbinden Sie Ihr SQ-Panel mit der Carenuity App, um Temperatur, Luftfeuchtigkeit, Luftqualität und Anwesenheit von überall zu überwachen."}
              </p>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden mb-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/user-guide/intro.png"
                  alt="Carenuity mobile app introduction"
                  className="w-full object-contain"
                />
              </div>

              {/* Download */}
              <h3 className="text-xl font-semibold text-[#0d2137] dark:text-white mb-4">
                {en ? "1. Download the app" : "1. App herunterladen"}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 flex flex-col items-center text-center">
                  <a
                    href="https://apps.apple.com/ie/app/carenuity/id6472718918"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-4"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/user-guide/app-store.png"
                      alt="Download on the App Store"
                      className="h-12 w-auto object-contain"
                    />
                  </a>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/user-guide/apple.jpeg"
                    alt="App Store QR code"
                    className="w-32 h-32 object-contain"
                  />
                  <span className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                    {en
                      ? "Scan to install on iPhone"
                      : "Scannen zum Installieren auf dem iPhone"}
                  </span>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 flex flex-col items-center text-center">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.carenuity.home"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-4"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/user-guide/google.png"
                      alt="Get it on Google Play"
                      className="h-12 w-auto object-contain"
                    />
                  </a>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/user-guide/android.jpeg"
                    alt="Google Play QR code"
                    className="w-32 h-32 object-contain"
                  />
                  <span className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                    {en
                      ? "Scan to install on Android"
                      : "Scannen zum Installieren auf Android"}
                  </span>
                </div>
              </div>

              {/* App overview */}
              <h3 className="text-xl font-semibold text-[#0d2137] dark:text-white mb-4">
                {en ? "2. What the app does" : "2. Was die App leistet"}
              </h3>
              <div className="space-y-6 mb-12">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/user-guide/goal.png"
                    alt="Carenuity SQ-Panel app goals and monitoring overview"
                    className="w-full object-contain"
                  />
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/user-guide/guide.png"
                    alt="Carenuity app design language and onboarding overview"
                    className="w-full object-contain"
                  />
                </div>
              </div>

              {/* App usage */}
              <h3 className="text-xl font-semibold text-[#0d2137] dark:text-white mb-4">
                {en
                  ? "3. Sign in, connect your panel & read your rooms"
                  : "3. Anmelden, Panel verbinden & Räume ablesen"}
              </h3>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden mb-12">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/user-guide/ux.png"
                  alt="Carenuity app user experience: login, home, connect SQ-Panel via QR code and view room values"
                  className="w-full object-contain"
                />
              </div>

              <h3 className="text-xl font-semibold text-[#0d2137] dark:text-white mb-4">
                {en
                  ? "4. Notifications, alerts & password reset"
                  : "4. Benachrichtigungen, Warnungen & Passwort zurücksetzen"}
              </h3>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden mb-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/user-guide/ux2.png"
                  alt="Carenuity app notifications, alerts and password reset flow"
                  className="w-full object-contain"
                />
              </div>

              {/* Buy CTA */}
              <div
                className="rounded-2xl p-8 text-center mb-8"
                style={{ backgroundColor: "#174f2e" }}
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  {en ? "Ready to get started?" : "Bereit loszulegen?"}
                </h3>
                <a
                  href="https://www.chipglobe.shop/en/p/carenuity-sq-system-customizable-bundle-with-air-quality-display-and-accessories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-[#174f2e] font-bold text-sm transition-all duration-300 hover:scale-105"
                >
                  {en
                    ? "Buy your first SQ-Panel now"
                    : "Kaufen Sie jetzt Ihr erstes SQ-Panel"}
                </a>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/carenuity-app-guide"
                  className="shadow-btn bg-primary hover:bg-primary-light rounded-full px-6 py-2.5 text-sm font-semibold text-white transition duration-300"
                >
                  {en ? "Mobile App User Guide" : "Mobile App Benutzerhandbuch"}
                </Link>
                <Link
                  href="/product/sq-panel/documentation"
                  className="rounded-full border border-primary px-6 py-2.5 text-sm font-semibold text-primary dark:text-green-400 hover:bg-primary/5 transition duration-300"
                >
                  {en ? "Documentation" : "Dokumentation"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
