"use client";
import Link from "next/link";
import UniversitySidebar from "../UniversitySidebar";
import { useLanguage } from "../../../context/LanguageContext";

export default function GirlsDayPage() {
  const { t } = useLanguage();
  const c = t.homeChallengeUniversity.common;
  const p = t.homeChallengeUniversity.girlsDay;
  return (
    <main>
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
              {c.home}
            </Link>
            <span className="text-green-300/40">/</span>
            <Link
              href="/home-challenge"
              className="text-green-300/70 hover:text-green-300 transition-colors"
            >
              {c.homeChallenge}
            </Link>
            <span className="text-green-300/40">/</span>
            <span className="font-medium text-white">{p.crumb}</span>
          </nav>
          <div className="pb-12 pt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
              <span className="text-xs font-semibold text-white tracking-wide uppercase">
                {p.badge}
              </span>
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              {p.title}
              <br />
              <span className="text-green-300">{p.subtitle}</span>
            </h1>
            <p className="text-lg leading-relaxed text-white/80 max-w-2xl">
              {p.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <UniversitySidebar />
            <div className="flex-1 min-w-0">
              <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 mb-8">
                <img
                  src="/images/home-challenge/universities/girls-day/girls2.jpeg"
                  alt="Girls' Day 2026"
                  className="w-full object-cover"
                  style={{ maxHeight: "440px" }}
                />
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  <img
                    src="/images/home-challenge/universities/girls-day/girls-logo.jpeg"
                    alt="Girls' Day logo"
                    className="w-full object-contain rounded-xl"
                    style={{ maxHeight: "260px" }}
                  />
                  <p
                    className="md:col-span-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: p.excitedHtml }}
                  />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-4">
                {p.whatIsTitle}
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  <img
                    src="/images/home-challenge/universities/girls-day/girls.jpeg"
                    alt="Girls participating in STEM activities"
                    className="w-full object-cover rounded-xl"
                    style={{ maxHeight: "260px" }}
                  />
                  <p className="md:col-span-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {p.whatIsBody}
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-4">
                {p.importanceTitle}
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {p.importanceIntro}
              </p>
              <ul className="space-y-3 mb-6 list-disc pl-5">
                {p.importancePoints.map((pt) => (
                  <li
                    key={pt.title}
                    className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
                  >
                    <span className="font-bold text-[#0d2137] dark:text-white">
                      {pt.title}
                    </span>{" "}
                    {pt.body}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
                {p.importanceOutro}
              </p>

              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-4">
                {p.joinTitle}
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {p.joinP1}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {p.joinP2}
              </p>

              <h3 className="text-lg font-bold text-[#0d2137] dark:text-white mb-3">
                {p.slotsTitle}
              </h3>
              <ul className="space-y-2 mb-6 list-disc pl-5">
                {p.slots.map((s) => (
                  <li
                    key={s.name}
                    className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
                  >
                    <span className="font-bold text-[#0d2137] dark:text-white">
                      {s.name}
                    </span>{" "}
                    {s.desc}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
                {p.joinOutro}
              </p>

              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-4">
                {p.kitTitle}
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 mb-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
                  <img
                    src="/images/home-challenge/universities/girls-day/bluetooth-speaker.jpeg"
                    alt="Bluetooth speaker built during Girls' Day"
                    className="w-full object-contain rounded-xl bg-gray-50 dark:bg-gray-900 p-2"
                  />
                  <div className="md:col-span-3">
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                      {p.kitBody}
                    </p>
                    <h4 className="text-sm font-bold text-[#0d2137] dark:text-white mb-2">
                      {p.kitReadyTitle}
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                      {p.kitOrder}
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      <strong>{p.kitImportantLabel}</strong>{" "}
                      {p.kitImportantBody}
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="/home-challenge"
                  className="shadow-btn bg-primary hover:bg-primary-light rounded-full px-7 py-3 text-sm font-semibold text-white transition duration-300 inline-block"
                >
                  {p.learnMoreCta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
