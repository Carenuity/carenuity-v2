"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

const featureIcons = [
  // Swappable Sensors
  <svg
    key="0"
    className="w-6 h-6 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    />
  </svg>,
  // Long Range
  <svg
    key="1"
    className="w-6 h-6 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
    />
  </svg>,
  // Instant Apps
  <svg
    key="2"
    className="w-6 h-6 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>,
  // Privacy
  <svg
    key="3"
    className="w-6 h-6 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>,
  // Matter
  <svg
    key="4"
    className="w-6 h-6 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>,
  // Award
  <svg
    key="5"
    className="w-6 h-6 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    />
  </svg>,
];

const useCaseImages = [
  "/images/home/living-room.png",
  "/images/home/hospital-room.png",
  "/images/home/office.png",
  "/images/home/class-room.png",
];

export default function BenefitsPage() {
  const { t } = useLanguage();
  const b = t.benefits;

  return (
    <main>
      {/* ── Hero ── */}
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
              className="text-green-300/70 transition-colors hover:text-green-300"
            >
              {t.breadcrumb.home}
            </Link>
            <span className="text-green-300/40">/</span>
            <span className="font-medium text-white">{b.heroTitle}</span>
          </nav>
          <div className="max-w-3xl pb-16 pt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
              <span className="text-xs font-semibold text-white tracking-wide uppercase">
                {b.badge}
              </span>
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              {b.heroTitle}
            </h1>
            <p className="text-lg leading-relaxed text-white/80 md:text-xl">
              {b.heroDesc}
            </p>
          </div>
        </div>
      </section>

      {/* ── Video ── */}
      <section className="bg-white dark:bg-gray-950 py-16">
        <div className="container">
          <h2 className="mb-3 text-3xl font-bold text-black dark:text-white md:text-4xl">
            {b.videoTitle}
          </h2>
          <p className="text-body-color dark:text-green text-base leading-relaxed mb-8 max-w-3xl">
            {b.videoDesc}
          </p>
          <div className="rounded-2xl overflow-hidden shadow-two aspect-video w-full">
            <iframe
              src="https://www.youtube.com/embed/i3pwQ2BWTO8"
              title="Carenuity Benefits"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* ── Key Features ── */}
      <section className="bg-green-bg dark:bg-gray-900 py-16">
        <div className="container">
          <h2 className="mb-10 text-3xl font-bold text-black dark:text-white md:text-4xl">
            {b.featuresTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {b.features.map((feature, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 p-6 shadow-two hover:shadow-one hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: "#174f2e" }}
                >
                  {featureIcons[i]}
                </div>
                <h3 className="text-lg font-bold text-black dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-body-color dark:text-green text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="bg-white dark:bg-gray-950 py-16">
        <div className="container">
          <h2 className="mb-10 text-3xl font-bold text-black dark:text-white md:text-4xl">
            {b.useCasesTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {b.useCases.map((uc, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden shadow-two border border-gray-200 dark:border-gray-800 hover:shadow-one hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-[180px] w-full shrink-0">
                  <Image
                    src={useCaseImages[i]}
                    alt={uc.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <h3 className="absolute bottom-3 left-4 right-4 text-white font-bold text-sm">
                    {uc.title}
                  </h3>
                </div>
                <div className="p-5 bg-gray-50 dark:bg-gray-900 flex-1 flex items-start">
                  <p className="text-body-color dark:text-green text-sm leading-relaxed">
                    {uc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-16"
        style={{
          background:
            "linear-gradient(135deg, #0f3520 0%, #174f2e 55%, #1e6b3e 100%)",
        }}
      >
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            {b.ctaTitle}
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            {b.ctaDesc}
          </p>
          <Link
            href="/install-for-free"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-sm shadow-lg transition-all duration-300 hover:scale-105 bg-white text-black"
          >
            {b.ctaBtn}
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
