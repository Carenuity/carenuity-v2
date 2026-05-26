"use client";
import Image from "next/image";
import Link from "next/link";
import ProductSidebar from "../../components/ProductSidebar";
import { useLanguage } from "../../context/LanguageContext";

export default function FreshCheckClient() {
  const { t } = useLanguage();
  const c = t.freshCheck;

  const signalColors = {
    Green: "bg-green-500",
    Orange: "bg-orange-400",
    Red: "bg-red-500",
    Grün: "bg-green-500",
  };

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
            <span className="font-medium text-white">FreshCheck</span>
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

              {/* Intro with image */}
              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-6">{c.introTitle}</h2>
              <Image
                src="/images/products/freshcheck/bathroom.jpeg"
                alt="FreshCheck bathroom monitor"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto rounded-2xl mb-6"
              />
              <h3 className="text-lg font-bold text-[#0d2137] dark:text-white mb-2">{c.problemTitle}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{c.problemDesc}</p>
              <h3 className="text-lg font-bold text-[#0d2137] dark:text-white mb-2">{c.solutionTitle}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-10">{c.solutionDesc}</p>

              {/* Traffic light signals */}
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                {c.signals.map((sig) => (
                  <div key={sig.color} className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 px-4 py-3 flex-1">
                    <span className={`w-4 h-4 rounded-full shrink-0 ${signalColors[sig.color] || "bg-gray-400"}`} />
                    <div>
                      <span className="text-sm font-semibold text-[#0d2137] dark:text-white">{sig.color}: </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{sig.meaning}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Benefits */}
              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-6">{c.benefitsTitle}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {c.benefits.map((b) => (
                  <div key={b.title} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-5">
                    <h3 className="text-sm font-bold text-[#0d2137] dark:text-white mb-1">{b.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>

              {/* How It Works */}
              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-6">{c.howTitle}</h2>
              <div className="space-y-3 mb-10">
                {c.howSteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-4">
                    <span className="w-7 h-7 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-xs font-bold text-primary shrink-0">
                      {i + 1}
                    </span>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>

              {/* Who It's For */}
              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-4">{c.forTitle}</h2>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 mb-10">
                <ul className="space-y-3">
                  {c.forItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Get Yours Today */}
              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-2">{c.getTitle}</h2>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{c.getDesc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {c.getOptions.map((opt) => (
                  <div key={opt.name} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-5">
                    <h3 className="text-sm font-bold text-[#0d2137] dark:text-white mb-1">{opt.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{opt.desc}</p>
                  </div>
                ))}
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
