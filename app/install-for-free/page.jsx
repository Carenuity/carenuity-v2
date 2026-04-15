"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

const ecosystemImages = [
  "/images/install-for-free/ecosystem-cloudfree.png",
  "/images/install-for-free/ecosystem-homeassistant.png",
  "/images/install-for-free/ecosystem-iot-appstore.png",
  "/images/install-for-free/ecosystem-matter.png",
];

const ExternalIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

export default function InstallForFreePage() {
  const { t } = useLanguage();
  const c = t.installForFree;

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
            <Link href="/" className="text-green-300/70 transition-colors hover:text-green-300">
              {t.breadcrumb.home}
            </Link>
            <span className="text-green-300/40">/</span>
            <span className="font-medium text-white">{c.badge}</span>
          </nav>
          <div className="grid grid-cols-12 min-h-[400px] items-center">
            <div className="col-span-12 md:col-span-8 pb-16 pt-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
                <span className="text-xs font-semibold text-white tracking-wide uppercase">
                  {c.badge}
                </span>
              </div>
              <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                {c.heroTitle1}
                <br />
                <span className="text-green-300">{c.heroTitle2}</span>
              </h1>
              <p className="text-lg leading-relaxed text-white/80 md:text-xl max-w-2xl">
                {c.heroCta}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3 Cards (same layout as c3-mini-box-devices) ── */}
      <section className="bg-white dark:bg-gray-950 py-16">
        <div className="container">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl">
            {c.heroTitle1}{" "}
            <span className="text-primary dark:text-green-400">{c.heroTitle2}</span>
          </h2>
          <p className="text-body-color dark:text-green mb-10 text-base leading-relaxed max-w-3xl">
            {c.heroCta}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 0 — Micro-controller image */}
            <div className="rounded-2xl overflow-hidden shadow-two flex flex-col">
              <div className="relative w-full flex-1" style={{ minHeight: "220px" }}>
                <Image
                  src="/images/install-for-free/micro-controler.webp"
                  alt="Microcontroller"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Card 1 — SMA video */}
            <div className="rounded-2xl overflow-hidden shadow-two bg-black flex flex-col">
              <video
                src="/video/sma.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full object-cover"
                style={{ minHeight: "220px" }}
              />
              <div className="p-5 bg-white dark:bg-gray-900 flex-1">
                <h3 className="text-lg font-bold text-black dark:text-white mb-2">
                  {c.step1Title}
                </h3>
                <p className="text-body-color dark:text-gray-400 text-sm leading-relaxed">
                  {c.step1Desc}
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="rounded-2xl overflow-hidden shadow-two flex flex-col">
              <div className="relative w-full" style={{ minHeight: "220px" }}>
                <Image
                  src="/images/install-for-free/install-for-free.png"
                  alt="Install For Free"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 flex-1">
                <h3 className="text-lg font-bold text-black dark:text-white mb-2">
                  {c.step2Title}
                </h3>
                <p className="text-body-color dark:text-gray-400 text-sm leading-relaxed">
                  {c.step2Desc}
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="rounded-2xl overflow-hidden shadow-two flex flex-col">
              <div className="relative w-full" style={{ minHeight: "220px" }}>
                <Image
                  src="/images/install-for-free/install.png"
                  alt="Deploy your device"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 flex-1">
                <h3 className="text-lg font-bold text-black dark:text-white mb-2">
                  {c.step3Title}
                </h3>
                <p className="text-body-color dark:text-gray-400 text-sm leading-relaxed">
                  {c.step3Desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How to build your own device (12-col, no images) ── */}
      <section className="bg-green-bg dark:bg-gray-900 py-16">
        <div className="container">
          <h2 className="mb-12 text-3xl font-bold text-black dark:text-white md:text-4xl">
            {c.detailTitle}
          </h2>
          <div className="flex flex-col gap-10">
            {/* Step 1 */}
            <div className="grid grid-cols-12 gap-4 items-start">
              <div className="col-span-12">
                <div className="flex items-start gap-5">
                  <span
                    className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg"
                    style={{ backgroundColor: "#174f2e" }}
                  >
                    1
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                      {c.hwTitle}
                    </h3>
                    <p className="text-body-color dark:text-green text-base leading-relaxed mb-4 max-w-4xl">
                      {c.hwDesc}
                    </p>
                    <a
                      href="https://www.chipglobe.shop/en/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white font-semibold text-sm shadow-btn transition-all duration-300 hover:opacity-90"
                      style={{ backgroundColor: "#174f2e" }}
                    >
                      {c.hwLink} <ExternalIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-gray-200 dark:border-gray-700" />

            {/* Step 2 */}
            <div className="grid grid-cols-12 gap-4 items-start">
              <div className="col-span-12">
                <div className="flex items-start gap-5">
                  <span
                    className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg"
                    style={{ backgroundColor: "#174f2e" }}
                  >
                    2
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                      {c.swTitle}
                    </h3>
                    <p className="text-body-color dark:text-green text-base leading-relaxed mb-3 max-w-4xl">
                      {c.swDesc1}
                    </p>
                    <p className="text-body-color dark:text-green text-base leading-relaxed mb-4 max-w-4xl">
                      {c.swDesc2}
                    </p>
                    <Link
                      href="/c3-mini-box-devices"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white font-semibold text-sm shadow-btn transition-all duration-300 hover:opacity-90"
                      style={{ backgroundColor: "#174f2e" }}
                    >
                      {c.sensorLink}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-gray-200 dark:border-gray-700" />

            {/* Step 3 */}
            <div className="grid grid-cols-12 gap-4 items-start">
              <div className="col-span-12">
                <div className="flex items-start gap-5">
                  <span
                    className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg"
                    style={{ backgroundColor: "#174f2e" }}
                  >
                    3
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                      {c.housingTitle}
                    </h3>
                    <p className="text-body-color dark:text-green text-base leading-relaxed mb-3 max-w-4xl">
                      {c.housingDesc1}
                    </p>
                    <p className="text-body-color dark:text-green text-base leading-relaxed mb-4 max-w-4xl">
                      {c.housingDesc2}
                    </p>
                    <a
                      href="https://www.chipglobe.shop/c/zubehoer/3d-print-for-makers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary dark:text-green-400 hover:underline"
                    >
                      {c.housingLink}
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── S-M-A Components ── */}
      <section className="bg-white dark:bg-gray-950 py-16">
        <div className="container">
          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="col-span-12">
              <h2 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl">
                {c.smaTitle}
              </h2>
              <p className="text-body-color dark:text-green mb-8 text-base leading-relaxed">
                {c.smaDesc}
              </p>
            </div>
            <div className="col-span-12">
              <div className="flex gap-4 max-w-sm">
                {["S", "M", "A"].map((letter) => (
                  <div
                    key={letter}
                    className="flex-1 rounded-xl p-5 text-center shadow-two bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800"
                  >
                    <span
                      className="block text-4xl font-black mb-2"
                      style={{ color: "#174f2e" }}
                    >
                      {letter}
                    </span>
                    <span className="text-xs font-semibold text-body-color dark:text-gray-400 uppercase tracking-wide">
                      {letter === "S" ? "Sensor" : letter === "M" ? "Microcontroller" : "Actuator"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Four Ecosystems ── */}
      <section className="bg-green-bg dark:bg-gray-900 py-16">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="mb-3 text-3xl font-bold text-black dark:text-white md:text-4xl">
              {c.ecosystemTitle}
            </h2>
            <p className="text-body-color dark:text-green text-base">{c.ecosystemDesc}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.ecosystems.map((eco, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 shadow-two overflow-hidden flex flex-col hover:shadow-one hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-[160px] w-full">
                  <Image src={ecosystemImages[i]} alt={eco.title} fill className="object-cover" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-base font-bold text-black dark:text-white mb-2">{eco.title}</h3>
                  <p className="text-body-color dark:text-gray-400 text-sm leading-relaxed flex-1">{eco.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #0f3520 0%, #174f2e 55%, #1e6b3e 100%)" }}
      >
        <div className="container">
          <p className="text-center text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            {c.statsTitle}
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {c.stats.map((stat, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 text-center"
              >
                <span className="block text-4xl font-black text-green-300 mb-1">{stat.value}</span>
                <span className="text-sm font-semibold text-white/80 uppercase tracking-wide">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Green Modularity ── */}
      <section className="bg-white dark:bg-gray-950 py-16">
        <div className="container">
          {/* Title + intro — 12-col */}
          <div className="col-span-12 mb-10">
            <h2 className="mb-5 text-3xl font-bold text-black dark:text-white md:text-4xl">
              {c.greenTitle}
            </h2>
            <p className="text-body-color dark:text-green mb-4 text-base leading-relaxed max-w-4xl">
              {c.greenDesc1}
            </p>
            <p className="text-body-color dark:text-green text-base leading-relaxed max-w-4xl">
              {c.greenDesc2}
            </p>
          </div>

          {/* WEEE heading — 12-col */}
          <div className="col-span-12 mb-6">
            <h3 className="text-2xl font-bold text-black dark:text-white">{c.weeeTitle}</h3>
          </div>

          {/* WEEE content 8-col + QR 4-col */}
          <div className="grid grid-cols-12 gap-8 mb-8">
            <div className="col-span-12 lg:col-span-8 space-y-4">
              {[c.weeeDesc1, c.weeeDesc2, c.weeeDesc3].map((desc, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span
                    className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: "#174f2e" }}
                  >
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 16 13">
                      <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
                    </svg>
                  </span>
                  <p className="text-body-color dark:text-green text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <div className="col-span-12 lg:col-span-4">
              <div className="relative h-[240px] rounded-2xl overflow-hidden shadow-two">
                <Image
                  src="/images/install-for-free/qr-code.jpeg"
                  alt="WEEE QR Code on PCB"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* WEEE details + closing — 12-col */}
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <div className="rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-6 space-y-2 text-sm mb-6">
                <p className="text-black dark:text-white font-semibold">
                  {c.weeeNumber}{" "}
                  <span className="font-normal text-body-color dark:text-green">DE 53301452</span>
                </p>
                <p className="text-body-color dark:text-green">{c.weeeCompany}</p>
                <p className="text-body-color dark:text-green">{c.weeeContact}</p>
              </div>
              <p className="text-body-color dark:text-green text-sm leading-relaxed italic max-w-4xl">
                {c.greenClose}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-green-bg dark:bg-gray-900 py-12">
        <div className="container flex flex-wrap gap-4 items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-black dark:text-white mb-1">
              {t.nav.install}
            </h3>
            <p className="text-body-color dark:text-green text-sm max-w-md">
              {c.heroCta}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://solutions.carenuity.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-semibold text-sm shadow-btn transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: "#174f2e" }}
            >
              {c.swLink} <ExternalIcon />
            </a>
            <Link
              href="/sensor-boxes"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm shadow-btn transition-all duration-300 hover:opacity-90 border-2 text-black dark:text-white"
              style={{ borderColor: "#174f2e" }}
            >
              {t.sensorBoxes?.badge ?? "Sensor Boxes"}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
