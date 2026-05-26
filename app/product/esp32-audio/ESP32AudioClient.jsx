"use client";
import Image from "next/image";
import Link from "next/link";
import ProductSidebar from "../../components/ProductSidebar";
import { useLanguage } from "../../context/LanguageContext";

export default function ESP32AudioClient() {
  const { t } = useLanguage();
  const c = t.esp32Audio;

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
            <span className="font-medium text-white">ESP32 Audio</span>
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
              {/* Architecture */}
              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-6">
                {c.architectureTitle}
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden mb-10">
                <div className="flex flex-col sm:flex-row">
                  <div
                    className="relative sm:w-56 shrink-0 bg-gray-50 dark:bg-gray-900"
                    style={{ minHeight: "220px" }}
                  >
                    <Image
                      src="/images/products/audio/audio.jpeg"
                      alt="ESP32 Audio"
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <div className="flex-1 p-6 flex items-center">
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {c.introCardDesc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Requirements */}
              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-4">
                {c.requirementsTitle}
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
                {c.requirementsDesc}
              </p>

              {/* Reference Design */}
              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-4">
                {c.refDesignTitle}
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {c.refDesignDesc}
              </p>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 mb-10">
                <ul className="space-y-3">
                  {c.refDesignLinks.map((link) => (
                    <li key={link.url}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary dark:text-green-400 hover:underline"
                      >
                        {link.label}
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Concept */}
              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-4">
                {c.conceptTitle}
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                {c.conceptDesc}
              </p>
              <a
                href="https://solutions.carenuity.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary dark:text-green-400 hover:underline mb-10"
              >
                {c.conceptSolutionBuilderLabel}
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>

              {/* Functional Modules */}
              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-6">
                {c.modulesTitle}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                {[c.sensorBlock, c.mcuBlock, c.actuatorBlock].map(
                  (block, idx) => (
                    <div
                      key={block.title}
                      className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-5"
                    >
                      <div className="text-5xl font-black text-primary/10 dark:text-primary/20 mb-3 leading-none">
                        {["S", "M", "A"][idx]}
                      </div>
                      <h3 className="text-sm font-bold text-[#0d2137] dark:text-white mb-2">
                        {block.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {block.desc}
                      </p>
                    </div>
                  ),
                )}
              </div>

              {/* Storage Module */}
              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-4">
                {c.storageTitle}
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                {c.storageDesc}
              </p>
              <a
                href="https://www.chipglobe.shop/p/micro-sd-speicher-erweiterungsboard-fuer-d1-mini-tf-kartenmodul-mit-spi-mit-ohne-geloetete-pins"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary dark:text-green-400 hover:underline mb-10"
              >
                {c.storageProductLabel}
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>

              {/* Advantages */}
              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-6">
                {c.advantagesTitle}
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 mb-12">
                <ul className="space-y-3">
                  {c.advantages.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                        <svg
                          className="w-3 h-3 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Design Options */}
              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-4">
                {c.designTitle}
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
                {c.designDesc}
              </p>

              {/* Get Started */}
              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-4">
                {c.getStartedTitle}
              </h2>
              <div className="space-y-4 mb-12">
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {c.getStartedDesc}
                </p>
                <a
                  href="https://www.instagram.com/solutions.carenuity/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary dark:text-green-400 hover:underline"
                >
                  {c.instagramLabel}
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>

              {/* Wishlist */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 flex flex-col items-center text-center">
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
