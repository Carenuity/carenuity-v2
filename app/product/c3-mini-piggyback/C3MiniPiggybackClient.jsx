"use client";
import Image from "next/image";
import Link from "next/link";
import ProductSidebar from "../../components/ProductSidebar";
import { useLanguage } from "../../context/LanguageContext";
import { sensors } from "./sensorsData";

const labels = {
  en: {
    features: "Key Features",
    applications: "Applications",
    summary: "Summary",
  },
  de: {
    features: "Wichtigste Merkmale",
    applications: "Anwendungen",
    summary: "Zusammenfassung",
  },
};

export default function C3MiniPiggybackClient() {
  const { t, lang } = useLanguage();
  const c = t.c3MiniPiggyback;
  const l = labels[lang] ?? labels.en;

  return (
    <main>
      {/* Hero */}
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
              {t.breadcrumb.home}
            </Link>
            <span className="text-green-300/40">/</span>
            <Link
              href="/products"
              className="text-green-300/70 hover:text-green-300 transition-colors"
            >
              {c.breadcrumbProducts}
            </Link>
            <span className="text-green-300/40">/</span>
            <span className="font-medium text-white">C3 Mini PiggyBack</span>
          </nav>
          <div className="pb-12 pt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
              <span className="text-xs font-semibold text-white tracking-wide uppercase">
                {c.badge}
              </span>
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              {c.heroTitle}
              <br />
              <span className="text-green-300">{c.heroHighlight}</span>
            </h1>
            <p className="text-lg leading-relaxed text-white/80 max-w-2xl">
              {c.heroDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Main layout */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <ProductSidebar />

            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-10">
                {c.sensorsTitle}
              </h2>

              {/* Sensor sections — single column sequential */}
              <div className="space-y-16">
                {sensors.map((sensor, i) => {
                  const data = sensor[lang] ?? sensor.en;
                  return (
                    <div key={sensor.name}>
                      {/* Numbered heading */}
                      <h2 className="text-xl font-bold text-[#0d2137] dark:text-white mb-4">
                        {i + 1}. {sensor.name}
                      </h2>

                      {/* Explanation card with image */}
                      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden mb-5">
                        <div className="flex flex-col sm:flex-row">
                          <div
                            className="relative sm:w-52 shrink-0 bg-gray-50 dark:bg-gray-900"
                            style={{ minHeight: "200px" }}
                          >
                            <Image
                              src={sensor.image}
                              alt={sensor.name}
                              fill
                              className="object-contain p-4"
                            />
                          </div>
                          <div className="flex-1 p-6 flex items-center">
                            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                              {data.explanation}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Key Features + Applications — two columns */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-5">
                          <h3 className="text-sm font-bold text-[#0d2137] dark:text-white mb-3">
                            {l.features}
                          </h3>
                          <ul className="space-y-1.5 list-disc list-inside text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                            {data.features.map((f) => (
                              <li key={f}>{f}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-5">
                          <h3 className="text-sm font-bold text-[#0d2137] dark:text-white mb-3">
                            {l.applications}
                          </h3>
                          <ul className="space-y-1.5 list-disc list-inside text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                            {data.apps.map((app) => (
                              <li key={app}>{app}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Summary */}
                      <h3 className="text-sm font-bold text-[#0d2137] dark:text-white mb-2">
                        {l.summary}
                      </h3>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        {data.summary}
                      </p>

                      {/* Shop with us widget — sensor 1 only */}
                      {i === 0 && (
                        <>
                          <h3 className="text-sm font-bold text-[#0d2137] dark:text-white mb-2 mt-4">
                            Shop with us
                          </h3>
                          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                            <div className="flex flex-col sm:flex-row">
                              <div
                                className="relative sm:w-48 shrink-0 bg-gray-50 dark:bg-gray-900"
                                style={{ minHeight: "160px" }}
                              >
                                <Image
                                  src="/images/products/piggybacks/piggy.jpeg"
                                  alt="C3-Mini Sensor Module with AHT20 & BMP280"
                                  fill
                                  className="object-contain p-4"
                                />
                              </div>
                              <div className="flex-1 p-6">
                                <h4 className="text-base font-bold text-[#0d2137] dark:text-white mb-2">
                                  C3-Mini Sensor Module with AHT20 &amp; BMP280
                                  – Temperature, Humidity, Pressure
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                  The C3-Mini Sensor Piggyback combines two
                                  high-precision sensors: the AHT20 for
                                  temperature and humidity, and the BMP280 for
                                  air pressure and temperature. Ideal for IoT
                                  applications.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                  <a
                                    href="https://www.chipglobe.shop/en/p/c3-mini-sensor-module-with-aht20-and-bmp280-temperature-humidity-pressure"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="shadow-btn bg-primary hover:bg-primary-light inline-block rounded-full px-7 py-2.5 text-sm font-semibold text-white transition duration-300"
                                  >
                                    Buy Now
                                  </a>
                                  <Link
                                    href="/install-for-free"
                                    className="inline-block rounded-full border border-primary px-7 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition duration-300"
                                  >
                                    Install for free
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      {/* Shop link for other sensors */}
                      {sensor.shopLink && i !== 0 && (
                        <a
                          href={sensor.shopLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shadow-btn bg-primary hover:bg-primary-light inline-block rounded-full px-7 py-2.5 text-sm font-semibold text-white transition duration-300"
                        >
                          {c.shopBtn}
                        </a>
                      )}

                      {/* Divider */}
                      {i < sensors.length - 1 && (
                        <hr className="mt-10 border-gray-200 dark:border-gray-700" />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Wishlist */}
              <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 flex flex-col items-center text-center">
                <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-4">
                  {c.wishlistTitle}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 max-w-md">
                  {c.wishlistDesc}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md mb-4">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white px-5 py-3 text-sm outline-none focus:border-primary dark:focus:border-green-400 transition-colors"
                  />
                  <button className="shadow-btn bg-primary hover:bg-primary-light rounded-full px-7 py-3 text-sm font-semibold text-white transition duration-300 whitespace-nowrap">
                    {c.wishlistBtn}
                  </button>
                </div>
                <p className="text-sm text-gray-400 dark:text-gray-500 italic">
                  {c.wishlistNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
