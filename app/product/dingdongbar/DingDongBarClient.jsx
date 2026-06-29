"use client";
import Image from "next/image";
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

export default function DingDongBarClient() {
  const { t } = useLanguage();
  const c = t.dingDongBar;

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
            <span className="font-medium text-white">DingDongBar</span>
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
              {/* Page intro heading */}
              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-4">
                {c.introTitle}
              </h2>

              {/* Product image */}
              <Image
                src="/images/products/dingdongbar/dingdongbar.jpeg"
                alt="DingDongBar Motion Detection Alert Device"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto rounded-2xl mb-6"
              />
              <div className="space-y-4 mb-10">
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {c.cardP1}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {c.cardP2}
                </p>
              </div>

              {/* Extended description */}
              <div className="mb-10 space-y-4">
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {c.extendedDesc}
                </p>
                <a
                  href="https://www.instagram.com/reels/DPvhCTIjXhl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary dark:text-green-400 hover:underline"
                >
                  {c.assembleLink}
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

                <div className="mt-6">
                  <p className="text-sm font-semibold text-[#0d2137] dark:text-white mb-3">
                    {c.typicalUsesTitle}
                  </p>
                  <ul className="space-y-2 mb-5">
                    {c.typicalUses.map((item) => (
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
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {c.pirDesc}
                  </p>
                </div>
              </div>

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
                      <span className="text-sm font-bold text-primary">
                        {idx + 1}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-[#0d2137] dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Typical Applications */}
              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-6">
                {c.applicationsTitle}
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 mb-12">
                <ul className="space-y-3">
                  {c.applications.map((item) => (
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

              {/* Core Components */}
              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-6">
                {c.componentsTitle}
              </h2>
              <div className="mb-12">
                <p className="text-sm font-semibold text-[#0d2137] dark:text-white mb-4">
                  {c.componentsSubtitle}
                </p>
                <ul className="space-y-3 mb-6">
                  {c.componentsList.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <span className="font-semibold text-[#0d2137] dark:text-white shrink-0">
                        {item.label}
                      </span>
                      <span className="text-gray-400 dark:text-gray-500">
                        —
                      </span>
                      <span>{item.desc}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm font-semibold text-[#0d2137] dark:text-white mb-3">
                  {c.circuitTitle}
                </p>
                <ul className="space-y-1 mb-4 text-sm text-gray-700 dark:text-gray-300 font-mono">
                  {c.circuitLines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {c.circuitDesc}
                </p>
              </div>

              {/* Product Comparison */}
              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-6">
                {c.comparisonTitle}
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-x-auto mb-12">
                <table className="w-full min-w-[480px] text-sm">
                  <thead>
                    <tr className="bg-primary/10 dark:bg-primary/20">
                      {c.comparisonHeaders.map((h) => (
                        <th
                          key={h}
                          className="px-5 py-3 text-left font-bold text-[#0d2137] dark:text-white"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {c.comparisonRows.map((row, idx) => (
                      <tr
                        key={row[0]}
                        className={
                          idx % 2 === 0 ? "bg-gray-50 dark:bg-gray-700/40" : ""
                        }
                      >
                        {row.map((cell, ci) => (
                          <td
                            key={ci}
                            className={`px-5 py-3 ${ci === 0 ? "font-semibold text-[#0d2137] dark:text-white" : "text-gray-600 dark:text-gray-300"}`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Solution Builder */}
              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-2">
                {c.solutionTitle}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {c.solutionDesc}
              </p>
              <div className="mb-12">
                <SolutionWidget solutionId="ce57xKxHhSJGVzb4P1Jk" />
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
