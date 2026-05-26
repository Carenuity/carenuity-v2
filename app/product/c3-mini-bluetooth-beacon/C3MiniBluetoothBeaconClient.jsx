"use client";
import Link from "next/link";
import ProductSidebar from "../../components/ProductSidebar";
import { useLanguage } from "../../context/LanguageContext";

const SolutionWidget = ({ solutionId }) => {
  const baseUrl = "https://solutions.carenuity.com/widgets/solutions/";
  return (
    <div
      className="relative w-full overflow-hidden dark:ring-2 dark:ring-gray-700 dark:rounded-lg"
      style={{ height: "19rem" }}
    >
      <iframe
        src={baseUrl + solutionId}
        allow="usb *; serial *;"
        loading="lazy"
        className="absolute top-0 left-0 w-full h-full border-0"
      />
    </div>
  );
};

export default function C3MiniBluetoothBeaconClient() {
  const { t } = useLanguage();
  const c = t.c3MiniBluetoothBeacon;

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
            <span className="font-medium text-white">C3-Mini: Bluetooth Beacon</span>
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

              {/* Key Features */}
              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-6">
                {c.featuresTitle}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                {c.features.map((feature, idx) => (
                  <div
                    key={feature.title}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-5"
                  >
                    <div className="w-9 h-9 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-3 shrink-0">
                      <span className="text-sm font-bold text-primary">{idx + 1}</span>
                    </div>
                    <h3 className="text-sm font-bold text-[#0d2137] dark:text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>

              {/* Capabilities */}
              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-2">
                {c.capabilitiesTitle}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {c.capabilitiesDesc}
              </p>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 mb-12">
                <ul className="space-y-3">
                  {c.capabilities.map((item) => (
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

              {/* Solution Builder */}
              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-2">
                {c.solutionTitle}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {c.solutionDesc}
              </p>
              <div className="mb-6">
                <SolutionWidget solutionId="gcpeCqsEmow07IpngCi2" />
              </div>
              <div className="flex flex-wrap gap-3 mb-12">
                <Link
                  href="/install-for-free"
                  className="shadow-btn bg-primary hover:bg-primary-light inline-block rounded-full px-7 py-2.5 text-sm font-semibold text-white transition duration-300"
                >
                  {c.installBtn}
                </Link>
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
