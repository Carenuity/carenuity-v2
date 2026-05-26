"use client";
import Link from "next/link";
import ProductSidebar from "../../../components/ProductSidebar";
import { useLanguage } from "../../../context/LanguageContext";

export default function LaunchPageClient() {
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
            <span className="font-medium text-white">Launch Page</span>
          </nav>
          <div className="pb-12 pt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
              <span className="text-xs font-semibold text-white tracking-wide uppercase">
                {en ? "Newsletter & Launch" : "Newsletter & Markteinführung"}
              </span>
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              {en
                ? "SQ-Panel Newsletter & Launch"
                : "Einführung des Carenuity SQ-Panels"}
              <br />
              <span className="text-green-300">
                {en
                  ? "The World's First Smart Sensor Display"
                  : "Das weltweit erste Smart-Sensor-Display"}
              </span>
            </h1>
            <p className="text-lg leading-relaxed text-white/80 max-w-2xl">
              {en
                ? "With built-in sensors and Matter support."
                : "Mit integrierten Sensoren und Matter-Unterstützung."}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <ProductSidebar />
            <div className="flex-1 min-w-0">
              {/* Newsletter signup */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 mb-10 text-center">
                <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-2">
                  {en
                    ? "Subscribe to our Newsletter"
                    : "Abonnieren Sie unseren Newsletter"}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                  {en
                    ? "Sign up for exclusive product launch discounts!"
                    : "Melden Sie sich für exklusive Produkteinführungsrabatte an!"}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white px-5 py-3 text-sm outline-none focus:border-primary transition-colors"
                  />
                  <button className="shadow-btn bg-primary hover:bg-primary-light rounded-full px-7 py-3 text-sm font-semibold text-white transition duration-300 whitespace-nowrap">
                    {en ? "Subscribe" : "Abonnieren"}
                  </button>
                </div>
              </div>

              {/* Launch info */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden mb-10">
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-56 shrink-0 bg-gray-50 dark:bg-gray-900 p-4 flex items-center justify-center">
                    <img
                      src="/images/products/sq-panel/launch-page/sq-panel.png"
                      alt="SQ-Panel"
                      className="object-contain w-full"
                      style={{ maxHeight: "200px" }}
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <img
                      src="/images/products/sq-panel/launch-page/matter.png"
                      alt="Matter support"
                      className="h-8 mb-4"
                    />
                    <h3 className="text-base font-bold text-[#0d2137] dark:text-white mb-2">
                      {en
                        ? "Carenuity SQ-Panel Launch"
                        : "Einführung des Carenuity SQ-Panels"}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {en
                        ? "The world's first smart sensor display with built-in sensors and Matter support."
                        : "Das weltweit erste Smart-Sensor-Display mit integrierten Sensoren und Matter-Unterstützung."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Perfect for */}
              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-4">
                {en
                  ? "The SQ-Panel is a perfect match for"
                  : "Das SQ-Panel ist das perfekte Werkzeug für"}
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-5 mb-10">
                <ul className="space-y-2">
                  {[
                    {
                      href: "/product/sq-panel/property-managers",
                      en: "Facility managers & property managers",
                      de: "Facility Manager & Immobilienverwalter",
                    },
                    {
                      href: "/product/sq-panel/smart-home-enthusiasts",
                      en: "Smart home enthusiasts",
                      de: "Smart-Home-Enthusiasten",
                    },
                    {
                      href: "/product/sq-panel/commercial-operators",
                      en: "Office/commercial operators",
                      de: "Büro-/Gewerbebetreiber",
                    },
                    {
                      href: "/product/sq-panel/smart-care-providers",
                      en: "Care facilities / smart care providers",
                      de: "Pflegeeinrichtungen / Smart Care Anbieter",
                    },
                    {
                      href: "/product/sq-panel/health-conscious-longevity-enthusiasts",
                      en: "Private households with a focus on health",
                      de: "Privathaushalte mit Fokus auf Gesundheit",
                    },
                    {
                      href: "/product/sq-panel/schools-and-kindergarden",
                      en: "Schools and Kindergarden",
                      de: "Schulen und Kindergärten",
                    },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-primary hover:underline"
                      >
                        {en ? item.en : item.de}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: "/images/products/sq-panel/launch-page/easy.png",
                    en: {
                      title: "Super easy to use",
                      desc: "Just unbox and power it. It automatically comes with proper settings, shows the values and alarms, which you can customise at any time.",
                    },
                    de: {
                      title: "Super einfach zu bedienen",
                      desc: "Einfach auspacken und einschalten. Es kommt automatisch mit richtigen Einstellungen, zeigt die Werte und Alarme an, die Sie anpassen können.",
                    },
                  },
                  {
                    icon: "/images/products/sq-panel/launch-page/acts.png",
                    en: {
                      title: "Option for Home Assistant (HA)",
                      desc: "No extra Hub needed. The SQ-Connector with HA can automate your home based on sunrise/sunset, temperature, event triggering, and more.",
                    },
                    de: {
                      title: "Option für Home Assistant (HA)",
                      desc: "Kein zusätzlicher Hub erforderlich. Der SQ-Connector mit HA kann Ihre automatisieren Zuhause basierend auf Sonnenaufgang/-untergang, Temperatur und mehr.",
                    },
                  },
                  {
                    icon: "/images/products/sq-panel/launch-page/matter3.png",
                    en: {
                      title: "Supports Matter",
                      desc: "Can be used with Google, Samsung, Home Assistant or Apple Home for even more smart home magic.",
                    },
                    de: {
                      title: "Unterstützt Matter",
                      desc: "Kann mit Google, Samsung, Home Assistant oder Apple Home verwendet werden für noch mehr Smart-Home-Zauber.",
                    },
                  },
                  {
                    icon: "/images/products/sq-panel/launch-page/switchbot.png",
                    en: {
                      title: "Part of the Carenuity Platform",
                      desc: "Can be paired with more devices like the planned Particle-Matter Sensor or the C3-Mini Sensors to provide you with more smart home solutions.",
                    },
                    de: {
                      title: "Teil der Carenuity-Plattform",
                      desc: "Kann mit weiteren Geräten wie dem geplanten Particle-Matter Sensor oder die C3-Mini-Sensoren gekoppelt werden.",
                    },
                  },
                ].map((f) => (
                  <div
                    key={f.en.title}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-5 text-center"
                  >
                    <img
                      src={f.icon}
                      alt={f.en.title}
                      className="h-12 mx-auto mb-3 object-contain"
                    />
                    <h3 className="text-sm font-bold text-[#0d2137] dark:text-white mb-2">
                      {en ? f.en.title : f.de.title}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      {en ? f.en.desc : f.de.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
