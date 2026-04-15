"use client";
import Image from "next/image";
import Link from "next/link";
import BudgetFriendlySection from "../components/BudgetFriendlySection";
import { useLanguage } from "../context/LanguageContext";

export default function SensorBoxesPage() {
  const { t } = useLanguage();
  const c = t.sensorBoxes;

  return (
    <main>
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-[120px] md:pt-[100px] xl:pt-[140px]"
        style={{ background: "linear-gradient(135deg, #0f3520 0%, #174f2e 55%, #1e6b3e 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="container relative">
          <nav className="flex items-center gap-2 pt-6 pb-4 text-sm">
            <Link href="/" className="text-green-300/70 transition-colors hover:text-green-300">
              {t.breadcrumb.home}
            </Link>
            <span className="text-green-300/40">/</span>
            <span className="font-medium text-white">{c.breadcrumb}</span>
          </nav>
          <div className="grid grid-cols-12 min-h-[440px] items-center">
            <div className="col-span-12 md:col-span-7 pb-16 pt-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
                <span className="text-xs font-semibold text-white tracking-wide uppercase">{c.badge}</span>
              </div>
              <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                {c.heroTitle1}
                <br />
                <span className="text-green-300">{c.heroTitle2}</span>
              </h1>
              <p className="text-lg leading-relaxed text-white/80 md:text-xl">{c.heroSub}</p>
            </div>
          </div>
        </div>
      </section>

      <BudgetFriendlySection activeHref="/sensor-boxes" />

      {/* ── What is a Sensor Box ── */}
      <section className="bg-white dark:bg-gray-950 py-16">
        <div className="container">
          <h2 className="mb-6 text-3xl font-bold text-black dark:text-white md:text-4xl">{c.whatTitle}</h2>
          <p className="text-body-color dark:text-green mb-4 text-base leading-relaxed max-w-4xl">{c.whatP1}</p>
          <p className="text-body-color dark:text-green mb-4 text-base leading-relaxed max-w-4xl">
            {c.whatP2.split("S-M-A").map((part, i, arr) =>
              i < arr.length - 1 ? (
                <span key={i}>
                  {part}
                  <strong className="text-black dark:text-white">S-M-A</strong>
                </span>
              ) : (
                part
              )
            )}
          </p>
          <p className="text-body-color dark:text-green mb-4 text-base leading-relaxed max-w-4xl">{c.whatP3}</p>
          <p className="text-body-color dark:text-green mb-4 text-base leading-relaxed max-w-4xl">{c.whatP4}</p>
          <p className="text-body-color dark:text-green mb-4 text-base leading-relaxed max-w-4xl">{c.whatP5}</p>
          <p className="text-body-color dark:text-green text-base leading-relaxed max-w-4xl">{c.whatP6}</p>
        </div>
      </section>

      {/* ── Healthcare Assisting Devices ── */}
      <section className="bg-green-bg dark:bg-gray-900 py-16">
        <div className="container">
          <h2 className="mb-8 text-2xl font-bold text-black dark:text-white md:text-3xl">{c.healthcareTitle}</h2>
          <div className="grid grid-cols-12 gap-6">
            {c.healthcareCards.map((card, i) => (
              <div key={i} className="col-span-12 md:col-span-6 rounded-2xl bg-white dark:bg-gray-950 shadow-two overflow-hidden hover:shadow-one hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-[220px] w-full overflow-hidden">
                  <Image
                    src={["/images/selection-boxes/c3-mini-selection-box-case.png", "/images/selection-boxes/bio-pulse-meter.jpeg"][i]}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-black dark:text-white mb-2">{card.title}</h3>
                  <p className="text-body-color dark:text-green text-sm leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Motion Detection Devices ── */}
      <section className="bg-white dark:bg-gray-950 py-16">
        <div className="container">
          <h2 className="mb-8 text-2xl font-bold text-black dark:text-white md:text-3xl">{c.motionTitle}</h2>
          <div className="grid grid-cols-12 gap-6">
            {c.motionCards.map((card, i) => (
              <div key={i} className="col-span-12 md:col-span-6 rounded-2xl bg-white dark:bg-gray-950 shadow-two overflow-hidden hover:shadow-one hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-800">
                <div className="relative h-[220px] w-full overflow-hidden">
                  <Image src="/images/selection-boxes/pir-c3-mini-0.66-oled.jpeg" alt={card.title} fill className="object-cover transition-transform duration-300 hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-black dark:text-white mb-2">{card.title}</h3>
                  <p className="text-body-color dark:text-green text-sm leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Weather Station Devices ── */}
      <section className="bg-white dark:bg-gray-950 py-16">
        <div className="container">
          <h2 className="mb-8 text-2xl font-bold text-black dark:text-white md:text-3xl">{c.weatherTitle}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="rounded-2xl bg-white dark:bg-gray-950 shadow-two overflow-hidden hover:shadow-one hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-800">
              <div className="relative h-[220px] w-full overflow-hidden">
                <Image src="/images/selection-boxes/envirosence.jpeg" alt={c.weatherCard.title} fill className="object-cover transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-black dark:text-white mb-2">{c.weatherCard.title}</h3>
                <p className="text-body-color dark:text-green text-sm leading-relaxed mb-4">{c.weatherCard.desc}</p>
                <Link href="/envirosense-680" className="inline-flex items-center gap-1 text-xs font-semibold text-primary dark:text-green-400 hover:underline">
                  {c.weatherCard.link}
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-two">
              <video src="/video/weather.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Buttons ── */}
      <section className="bg-green-bg dark:bg-gray-900 py-12">
        <div className="container">
          <div className="flex flex-wrap gap-4">
            <Link
              href="/install-for-free"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-semibold text-sm shadow-btn transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: "#174f2e" }}
            >
              {c.installBtn}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="https://www.chipglobe.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm shadow-btn transition-all duration-300 hover:opacity-90 border-2 text-black dark:text-white"
              style={{ borderColor: "#174f2e" }}
            >
              {c.buyBtn}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
