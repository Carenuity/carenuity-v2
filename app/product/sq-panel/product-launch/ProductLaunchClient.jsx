"use client";
import Link from "next/link";
import ProductSidebar from "../../../components/ProductSidebar";
import { useLanguage } from "../../../context/LanguageContext";

export default function ProductLaunchClient() {
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
            <span className="font-medium text-white">
              {en ? "Product Launch" : "Produkteinführung"}
            </span>
          </nav>
          <div className="pb-12 pt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
              <span className="text-xs font-semibold text-white tracking-wide uppercase">
                {en ? "Product Launch" : "Produkteinführung"}
              </span>
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              {en ? "Product Launch" : "Produkteinführung"}
              <br />
              <span className="text-green-300">
                {en
                  ? "Three Configurations for Every Use Case"
                  : "Drei Konfigurationen für jeden Einsatz"}
              </span>
            </h1>
            <p className="text-lg leading-relaxed text-white/80 max-w-2xl">
              {en
                ? "Flexible packaging and deployment options for the Carenuity SQ-Panel."
                : "Flexible Verpackungs- und Einsatzoptionen für das Carenuity SQ-Panel."}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <ProductSidebar />
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-4">
                {en ? "Product Launch" : "Produkteinführung"}
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                {en ? (
                  <>
                    We are excited to announce the upcoming launch of three
                    distinct product configurations developed to meet a variety
                    of use cases and customer needs. These include:{" "}
                    <strong>Table Stand version,</strong> offering a compact,
                    display-friendly format ideal for countertops and kiosks;{" "}
                    <strong>Wall-mountable SQ-Panel,</strong> designed for
                    seamless integration into vertical surfaces in commercial or
                    residential environments; and{" "}
                    <strong>
                      Complete Package with SQ-Power and SQ-TableStand,
                    </strong>{" "}
                    a fully equipped solution that includes both power
                    functionality and a stand for ready-to-use deployment.
                  </>
                ) : (
                  <>
                    Wir freuen uns, die bevorstehende Einführung von drei
                    verschiedenen Produktkonfigurationen bekannt zu geben. Dazu
                    gehören: <strong>Aufstellerversion</strong> — das kompakte
                    Sensordisplay für Arbeitsflächen und Kioske;{" "}
                    <strong>Wandmontierbares SQ-Panel</strong> — für eine
                    nahtlose Wandgestaltung; und{" "}
                    <strong>
                      Komplettpaket mit SQ-Power und SQ-TableStand
                    </strong>{" "}
                    — eine vollständige Lösung für den sofortigen Einsatz an
                    verschiedenen Orten.
                  </>
                )}
              </p>

              {/* Config 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden mb-6">
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-56 shrink-0 bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/products/sq-panel/product-launch/sq-panel.png"
                      alt="Table Stand"
                      className="object-contain w-full"
                      style={{ maxHeight: "200px" }}
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <h2 className="text-base font-bold text-[#0d2137] dark:text-white mb-2">
                      {en
                        ? "1. Table-Stand version with SQ-TableStand"
                        : "1. Table-Stand-Version mit SQ-TableStand"}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                      {en
                        ? "The Table-Stand version offers a complete, ready-to-use setup for desks, counters, and flat surfaces. With integrated cable management and SQ Power support for seamless plug-and-play operation. Ideal for offices, reception areas, conference rooms, and wellness centers."
                        : "Die Table-Stand-Version bietet eine sofort einsatzbereite Lösung für Schreibtische, Theken und ebene Flächen. Mit integriertem Kabelmanagement und SQ Power für nahtlosen Plug-and-Play-Betrieb. Ideal für Büros, Empfangsbereiche, Konferenzräume und Wellnesszentren."}
                    </p>
                    <h3 className="text-xs font-semibold text-[#0d2137] dark:text-white mb-1">
                      {en ? "Packaging" : "Verpackung"}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      {en
                        ? "Packed in a standard paperboard box — lightweight, sturdy, and eco-friendly. Each component is carefully positioned to minimize movement during transport."
                        : "Verpackt in einem Standardkarton — leicht, robust und umweltfreundlich. Jede Komponente ist sorgfältig positioniert, um Bewegungen während des Transports zu minimieren."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Config 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden mb-6">
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-56 shrink-0 bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/products/sq-panel/product-launch/slide2.png"
                      alt="Wall mountable"
                      className="object-contain w-full"
                      style={{ maxHeight: "200px" }}
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <h2 className="text-base font-bold text-[#0d2137] dark:text-white mb-2">
                      {en
                        ? "2. Wall-mountable SQ-Panel with SQ-Power"
                        : "2. Wandmontierbares SQ-Panel mit SQ-Power"}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                      {en
                        ? "A fixed installation for seamless integration in offices, healthcare facilities, schools, and smart buildings. Displays real-time air quality, temperature, humidity, CO₂, TVOC, and presence detection with a clean, professional appearance."
                        : "Eine Festinstallation für die nahtlose Integration in Büros, Gesundheitseinrichtungen, Schulen und intelligente Gebäude. Zeigt Echtzeit-Luftqualität, Temperatur, Luftfeuchtigkeit, CO₂, TVOC und Anwesenheitserkennung."}
                    </p>
                    <h3 className="text-xs font-semibold text-[#0d2137] dark:text-white mb-1">
                      {en ? "Packaging" : "Verpackung"}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      {en
                        ? "Packed in a HEXPAND box with customer's own label for personalized branding. Premium packaging with custom-fit compartments for secure transport. Ideal for OEM partnerships or direct-to-consumer channels."
                        : "Verpackt in einer HEXPAND-Box mit dem eigenen Etikett des Kunden. Hochwertige Verpackung mit passgenauen Fächern für sicheren Transport. Ideal für OEM-Partnerschaften oder Direct-to-Consumer-Kanäle."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Config 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden mb-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/products/sq-panel/product-launch/slide1.png"
                  alt="Complete kit"
                  className="w-full object-contain bg-gray-50 dark:bg-gray-900 p-4"
                  style={{ maxHeight: "300px" }}
                />
                <div className="p-6">
                  <h2 className="text-base font-bold text-[#0d2137] dark:text-white mb-2">
                    {en
                      ? "3. Complete kit with SQ-Panel, SQ-Power and SQ-TableStand"
                      : "3. Komplettes Set mit SQ-Panel, SQ-Power und SQ-TableStand"}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                    {en
                      ? "A flexible, future-proof solution. Start on the table stand to test and monitor conditions, then wall-mount later for a permanent installation — without buying a new setup. Customers can also buy an additional SQ-Panel and reuse the original SQ-TableStand."
                      : "Eine flexible, zukunftssichere Lösung. Zunächst auf dem Tischständer aufstellen, dann bei Bedarf wandmontieren — ohne ein neues Setup kaufen zu müssen. Kunden können auch ein zusätzliches SQ-Panel kaufen und den ursprünglichen SQ-TableStand wiederverwenden."}
                  </p>
                  <h3 className="text-xs font-semibold text-[#0d2137] dark:text-white mb-1">
                    {en ? "Packaging" : "Verpackung"}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    {en
                      ? "Standard paperboard box with dedicated compartments for all components. Recyclable and sustainable — arrives in perfect condition, ready for quick testing and later optional wall installation."
                      : "Standardkarton mit speziellen Fächern für alle Komponenten. Recycelbar und nachhaltig — kommt in einwandfreiem Zustand an, bereit für schnellen Test und spätere Wandmontage."}
                  </p>
                </div>
              </div>

              {/* JUNG frame */}
              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-4">
                {en ? "JUNG Designer Frame" : "JUNG-Designerrahmen"}
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden mb-8">
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-40 shrink-0 bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/products/sq-panel/product-launch/jung.jpeg"
                      alt="JUNG frame"
                      className="object-contain w-full"
                      style={{ maxHeight: "160px" }}
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {en
                        ? "Each product will include one piece of the optional JUNG designer frame, a decorative element that offers an elegant way to integrate the SQ-Panel into the interior design of your space. This frame is designed to match the style of popular switches and power sockets used in modern homes and offices, allowing the panel to blend seamlessly into existing surroundings. While optional, the JUNG frame enhances the overall aesthetic, making the installation look more intentional and cohesive."
                        : "Jedes Produkt enthält optional einen JUNG-Designerrahmen — ein dekoratives Element, das das SQ-Panel elegant in die Inneneinrichtung integriert. Der Rahmen ist auf den Stil moderner Schalter und Steckdosen abgestimmt und fügt sich nahtlos in bestehende Umgebungen ein."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Packaging variants */}
              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-4">
                {en ? "Our Packaging Variants" : "Unsere Verpackungsvarianten"}
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {en
                  ? "Our packaging solutions include different box types designed for protection, presentation, and ease of deployment."
                  : "Unsere Verpackungslösungen umfassen verschiedene Kartontypen, die auf Schutz, Präsentation und einfache Bereitstellung ausgelegt sind."}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                  <div className="p-3 bg-gray-50 dark:bg-gray-900">
                    <h3 className="text-sm font-semibold text-[#0d2137] dark:text-white mb-2">
                      {en
                        ? "1. Papercard standard box"
                        : "1. Standardkarton aus Papier"}
                    </h3>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/products/sq-panel/product-launch/standard.jpeg"
                      alt="Standard box"
                      className="w-full object-contain rounded-xl"
                      style={{ maxHeight: "200px" }}
                    />
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                  <div className="p-3 bg-gray-50 dark:bg-gray-900">
                    <h3 className="text-sm font-semibold text-[#0d2137] dark:text-white mb-2">
                      {en ? "2. Hexpand" : "2. Hexpand"}
                    </h3>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/products/sq-panel/product-launch/hexpand.jpeg"
                      alt="Hexpand box"
                      className="w-full object-contain rounded-xl"
                      style={{ maxHeight: "200px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
