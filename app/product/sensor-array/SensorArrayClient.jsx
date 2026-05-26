"use client";
import Image from "next/image";
import Link from "next/link";
import ProductSidebar from "../../components/ProductSidebar";
import { useLanguage } from "../../context/LanguageContext";

export default function SensorArrayClient() {
  const { t } = useLanguage();
  const c = t.sensorArray;

  return (
    <main>
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-[120px] md:pt-[100px] xl:pt-[140px]"
        style={{ background: "linear-gradient(135deg, #0f3520 0%, #174f2e 55%, #1e6b3e 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="container relative">
          <nav className="flex items-center gap-2 pt-6 pb-4 text-sm">
            <Link href="/" className="text-green-300/70 hover:text-green-300 transition-colors">
              {t.breadcrumb.home}
            </Link>
            <span className="text-green-300/40">/</span>
            <Link href="/products" className="text-green-300/70 hover:text-green-300 transition-colors">
              {c.breadcrumbProducts}
            </Link>
            <span className="text-green-300/40">/</span>
            <span className="font-medium text-white">Sensor Array</span>
          </nav>
          <div className="pb-12 pt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
              <span className="text-xs font-semibold text-white tracking-wide uppercase">{c.badge}</span>
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              {c.heroTitle}
              <br />
              <span className="text-green-300">{c.heroHighlight}</span>
            </h1>
            <p className="text-lg leading-relaxed text-white/80 max-w-2xl">{c.heroDesc}</p>
          </div>
        </div>
      </section>

      {/* Main layout */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <ProductSidebar />

            <div className="flex-1 min-w-0">

              {/* Intro */}
              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-6">{c.introTitle}</h2>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-10">{c.introDesc}</p>

              {/* Kit Contents */}
              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-6">{c.contentsTitle}</h2>
              <div className="space-y-3 mb-10">
                {c.contents.map((item) => (
                  <div key={item.label} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-5">
                    <h3 className="text-sm font-bold text-[#0d2137] dark:text-white mb-1">{item.label}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Development description */}
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-10">{c.devDesc}</p>

              {/* Shop CTA */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden mb-10">
                <div className="flex flex-col sm:flex-row">
                  <div className="relative sm:w-56 shrink-0 bg-gray-50 dark:bg-gray-900" style={{ minHeight: "220px" }}>
                    <Image
                      src="/images/products/sensor-array/sensor1.png"
                      alt="Sensor Array Kit"
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-center gap-3">
                    <h3 className="text-sm font-bold text-[#0d2137] dark:text-white">{c.shopProduct}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{c.shopProductDesc}</p>
                    <div className="flex flex-wrap gap-3 pt-1">
                      <a
                        href="https://www.chipglobe.shop"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shadow-btn bg-primary hover:bg-primary-light rounded-full px-6 py-2.5 text-sm font-semibold text-white transition duration-300"
                      >
                        {c.shopBtn}
                      </a>
                      <a
                        href="https://solutions.carenuity.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-primary px-6 py-2.5 text-sm font-semibold text-primary dark:text-green-400 hover:bg-primary/5 transition duration-300"
                      >
                        {c.installBtn}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Wishlist */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 flex flex-col items-center text-center">
                <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-4">{c.wishlistTitle}</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 max-w-md">{c.wishlistDesc}</p>
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
                <p className="text-sm text-gray-400 dark:text-gray-500 italic">{c.wishlistNote}</p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
