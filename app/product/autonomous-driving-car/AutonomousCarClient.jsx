"use client";
import Image from "next/image";
import Link from "next/link";
import ProductSidebar from "../../components/ProductSidebar";
import ImageSlider from "./ImageSlider";
import { useLanguage } from "../../context/LanguageContext";

const projectHrefs = [
  "https://www.hackster.io/Infineon_Team/autonomous-driving-car-5b3d03",
  "https://www.hackster.io/Infineon_Team/autonomous-driving-car-v2-8b5545",
  "https://www.hackster.io/ramazan-eren-arslan/autonomous-driving-car-v3-93deea",
];

const projectImages = [
  "/images/products/autonomous/autonomus1.png",
  "/images/products/autonomous/autonomus2.png",
  "/images/products/autonomous/autonomus3.png",
];

const versions = ["V1", "V2", "V3"];

export default function AutonomousCarClient() {
  const { t } = useLanguage();
  const c = t.autonomousCar;

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
            <span className="font-medium text-white">
              Autonomous Driving Car
            </span>
          </nav>

          <div className="grid grid-cols-12 min-h-[380px] items-center pb-12 pt-4">
            <div className="col-span-12 md:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
                <span className="text-xs font-semibold text-white tracking-wide uppercase">
                  {c.badge}
                </span>
              </div>
              <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                {c.heroQuestion}
                <br />
                <span className="text-green-300">{c.heroHighlight}</span>
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-white/80 max-w-xl">
                {c.heroDesc}
              </p>
              <a
                href="https://chipglobe.shop/en/p/autonomous-driving-car"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-white text-sm shadow-lg transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "rgba(255,255,255,0.15)",
                  border: "2px solid rgba(134,239,172,0.5)",
                }}
              >
                {c.getHardware}
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
              </a>
            </div>
            <div className="hidden md:col-span-5" />
          </div>
        </div>
      </section>

      {/* Main layout: sidebar + content */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <ProductSidebar />

            <div className="flex-1 min-w-0 space-y-14">
              {/* Why Participate */}
              <div>
                <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-5">
                  {c.whyTitle}
                </h2>
                <ul className="space-y-3">
                  {c.whyItems.map((item) => (
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

              {/* Historical Context */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-green-700 dark:text-green-400 mb-2">
                  {c.storyLabel}
                </p>
                <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-5">
                  {c.storyTitle}
                </h2>
                <div className="mb-7">
                  <ImageSlider />
                </div>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>{c.storyP1}</p>
                  <p>{c.storyP2}</p>
                  <p>{c.storyP3}</p>
                  <p>{c.storyP4}</p>
                </div>

                {/* Version history */}
                <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {versions.map((v, i) => (
                    <div
                      key={v}
                      className="rounded-2xl p-5 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm"
                    >
                      <div
                        className="inline-flex items-center justify-center w-10 h-10 rounded-xl text-white font-bold text-sm mb-3"
                        style={{ backgroundColor: "#174f2e" }}
                      >
                        {v}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {c.versionsDesc[i]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Showcase */}
              <div>
                <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-5">
                  {c.projectsTitle}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {c.projectsItems.map((p, i) => (
                    <div
                      key={p.title}
                      className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col"
                    >
                      <div className="relative aspect-[4/3] w-full">
                        <Image
                          src={projectImages[i]}
                          alt={p.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4 flex flex-col flex-1">
                        <h3 className="font-bold text-[#0d2137] dark:text-white text-sm mb-2">
                          {p.title}
                        </h3>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                          {p.description}
                        </p>
                        <a
                          href={projectHrefs[i]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#174f2e] dark:text-green-400 transition-colors hover:opacity-75"
                        >
                          {c.learnMore}
                          <svg
                            className="w-3.5 h-3.5"
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
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Developer Narrative */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-7 border border-gray-100 dark:border-gray-700 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0"
                    style={{ backgroundColor: "#174f2e" }}
                  >
                    E
                  </div>
                  <div>
                    <p className="font-bold text-[#0d2137] dark:text-white">
                      Eren Arslan Ramazan
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {c.devRole}
                    </p>
                  </div>
                </div>

                <div className="space-y-6 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {[
                    { title: c.devGoalsTitle, body: c.devGoalsDesc },
                    { title: c.devDescTitle, body: c.devDescP },
                    { title: c.devInspirationTitle, body: c.devInspirationP },
                    { title: c.devCollabTitle, body: c.devCollabP },
                    { title: c.devChallengesTitle, body: c.devChallengesP },
                    { title: c.devAchievementTitle, body: c.devAchievementP },
                  ].map(({ title, body }) => (
                    <div key={title}>
                      <h3 className="font-bold text-[#0d2137] dark:text-white mb-2">
                        {title}
                      </h3>
                      <p>{body}</p>
                    </div>
                  ))}

                  <div>
                    <h3 className="font-bold text-[#0d2137] dark:text-white mb-2">
                      {c.devSkillsTitle}
                    </h3>
                    <ul className="space-y-1.5">
                      {c.skills.map((s) => (
                        <li key={s} className="flex items-center gap-2">
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
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-[#0d2137] dark:text-white mb-2">
                      {c.devRecommTitle}
                    </h3>
                    <ul className="space-y-1.5">
                      {c.recommendations.map((r) => (
                        <li key={r} className="flex items-center gap-2">
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
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-[#0d2137] dark:text-white mb-2">
                      {c.devConclusionTitle}
                    </h3>
                    <p>{c.devConclusionP}</p>
                  </div>

                  {/* Publications */}
                  <div>
                    <h3 className="font-bold text-[#0d2137] dark:text-white mb-3">
                      {c.pubTitle}
                    </h3>
                    <div className="flex flex-col gap-3">
                      <a
                        href="https://www.thws.de/service/news-presse/pressearchiv/thema/praxisnah-im-studium-bewegungsmelder-selbst-bauen/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-green-600 dark:hover:border-green-500 transition-colors group"
                      >
                        <span
                          className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 text-white"
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
                              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v10a2 2 0 01-2 2z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 2v6h6"
                            />
                          </svg>
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-[#0d2137] dark:text-white group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors">
                            {c.thwsLabel}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                            {c.thwsSource}
                          </p>
                        </div>
                        <svg
                          className="w-4 h-4 text-gray-400 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>

                      <a
                        href="https://www.hackster.io/ramazan-eren-arslan/autonomous-driving-car-v3-93deea"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-green-600 dark:hover:border-green-500 transition-colors group"
                      >
                        <span
                          className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 text-white"
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
                              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                            />
                          </svg>
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-[#0d2137] dark:text-white group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors">
                            {c.hacksterLabel}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                            {c.hacksterSource}
                          </p>
                        </div>
                        <svg
                          className="w-4 h-4 text-gray-400 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project photo */}
              <div>
                <div className="relative w-full rounded-2xl overflow-hidden shadow-md aspect-[16/7]">
                  <Image
                    src="/images/products/autonomous/autonomus4.jpeg"
                    alt="Eren Arslan Ramazan with team at THWS Schweinfurt"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                  {c.projectCaption}
                </p>
              </div>

              {/* Shop with us */}
              <div>
                <h2 className="mb-8 text-3xl font-bold text-black dark:text-white md:text-4xl">
                  {c.shopTitle}
                </h2>
                <div className="shadow-two dark:shadow-three rounded-2xl bg-white dark:bg-gray-950">
                  <div className="grid grid-cols-12 items-center">
                    <div className="col-span-12 md:col-span-4">
                      <div className="relative h-[280px] w-full overflow-hidden rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
                        <Image
                          src="/images/products/autonomous/shopcar.png"
                          alt="Autonomous Driving Car"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="col-span-12 px-6 py-0 md:col-span-8 md:px-8 md:py-0">
                      <h3 className="mb-4 text-xl font-bold text-black dark:text-white md:text-2xl">
                        {c.shopProductName}
                      </h3>
                      <p className="text-body-color dark:text-gray-300 mb-6 text-base leading-relaxed">
                        {c.shopDesc}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <a
                          href="https://chipglobe.shop/en/p/autonomous-driving-car"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shadow-btn bg-primary hover:bg-primary-light inline-block rounded-full px-8 py-3 text-base font-semibold text-white transition duration-300"
                        >
                          {c.getHardware}
                        </a>
                        <span className="shadow-btn inline-block rounded-full border-2 border-primary px-8 py-3 text-base font-semibold text-primary dark:border-green-400 dark:text-green-400 cursor-default select-none">
                          {c.installFree}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
