"use client";
import Image from "next/image";
import Link from "next/link";
import ProductSidebar from "../../components/ProductSidebar";
import { useLanguage } from "../../context/LanguageContext";

export default function AquaBarClient() {
  const { t } = useLanguage();
  const c = t.aquabar;

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
            <span className="font-medium text-white">AquaBar</span>
          </nav>

          <div className="grid grid-cols-12 min-h-[380px] items-center pb-12 pt-4">
            <div className="col-span-12 md:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
                <span className="text-xs font-semibold text-white tracking-wide uppercase">
                  {c.badge}
                </span>
              </div>
              <h1 className="mb-3 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                {c.heroTitle}
              </h1>
              <p className="mb-4 text-xl font-semibold text-green-300 leading-snug max-w-xl">
                {c.heroHighlight}
              </p>
              <p className="mb-3 text-base text-white/80 italic">
                {c.heroTagline}
              </p>
              <p className="mb-8 text-lg leading-relaxed text-white/70 max-w-xl">
                {c.heroDesc}
              </p>
              <button
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-white text-sm shadow-lg transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "rgba(255,255,255,0.15)",
                  border: "2px solid rgba(134,239,172,0.5)",
                }}
              >
                {c.wishlistBtn}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden md:col-span-5" />
          </div>
        </div>
      </section>

      {/* Main layout */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <ProductSidebar />

            <div className="flex-1 min-w-0 space-y-14">
              {/* AquaBar image */}
              <div className="w-full">
                <Image
                  src="/images/products/aquabar/aquabar.png"
                  alt="Carenuity AquaBar"
                  width={800}
                  height={500}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* The Problem */}
              <div>
                <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-5">
                  {c.problemTitle}
                </h2>
                <ul className="space-y-3">
                  {c.problemItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                        style={{ backgroundColor: "#b91c1c" }}
                      >
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* The Solution */}
              <div>
                <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-4">
                  {c.solutionTitle}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  {c.solutionDesc}
                </p>

                {/* Status indicators */}
                <div className="flex flex-col sm:flex-row gap-3 mb-5">
                  {[
                    { color: "#16a34a", label: c.statusGreen },
                    { color: "#d97706", label: c.statusOrange },
                    { color: "#dc2626", label: c.statusRed },
                  ].map(({ color, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 flex-1 rounded-xl px-4 py-3 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm"
                    >
                      <span
                        className="w-4 h-4 rounded-full shrink-0"
                        style={{ backgroundColor: color }}
                      />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                  <svg
                    className="w-5 h-5 text-green-700 dark:text-green-400 mt-0.5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <p className="text-sm text-green-800 dark:text-green-300">
                    {c.alertDesc}
                  </p>
                </div>
              </div>

              {/* Key Benefits */}
              <div>
                <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-5">
                  {c.benefitsTitle}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {c.benefits.map((b) => (
                    <div
                      key={b.title}
                      className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-700"
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-white mb-3"
                        style={{ backgroundColor: "#174f2e" }}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <h3 className="font-bold text-[#0d2137] dark:text-white mb-1 text-sm">
                        {b.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {b.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* How It Works */}
              <div>
                <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-5">
                  {c.howTitle}
                </h2>
                <ol className="space-y-3">
                  {c.howSteps.map((step, i) => (
                    <li key={step} className="flex items-start gap-4">
                      <span
                        className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5"
                        style={{ backgroundColor: "#174f2e" }}
                      >
                        {i + 1}
                      </span>
                      <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Who Is It For */}
              <div>
                <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-5">
                  {c.audienceTitle}
                </h2>
                <ul className="space-y-3">
                  {c.audienceItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                        style={{ backgroundColor: "#174f2e" }}
                      >
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Product Options */}
              <div>
                <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-5">
                  {c.optionsTitle}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { title: c.diyTitle, items: c.diyItems },
                    { title: c.readyTitle, items: c.readyItems },
                  ].map(({ title, items }) => (
                    <div
                      key={title}
                      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700"
                    >
                      <h3 className="font-bold text-[#0d2137] dark:text-white mb-4">
                        {title}
                      </h3>
                      <ul className="space-y-2">
                        {items.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                          >
                            <span
                              className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                              style={{ backgroundColor: "#174f2e" }}
                            >
                              <svg
                                className="w-2.5 h-2.5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={3}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
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
