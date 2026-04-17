"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

const CheckIcon = () => (
  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 16 13">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

export default function AboutClient() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <main>
      {/* ── Hero ── */}
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
            <span className="font-medium text-white">{a.pageName}</span>
          </nav>
          <div className="pb-16 pt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
              <span className="text-xs font-semibold text-white tracking-wide uppercase">{a.badge}</span>
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              {a.heroHeadline}
            </h1>
            <p className="text-lg leading-relaxed text-white/80 md:text-xl">{a.heroSubline}</p>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="bg-white dark:bg-gray-950 py-16">
        <div className="container">
          <div className="grid grid-cols-12 gap-10 items-center">
            <div className="col-span-12 lg:col-span-7">
              <h2 className="mb-6 text-3xl font-bold text-black dark:text-white md:text-4xl">{a.introTitle}</h2>
              <p className="text-body-color dark:text-green text-base leading-relaxed mb-5">{a.heroTitle}</p>
              <p className="text-body-color dark:text-green text-base leading-relaxed">{a.heroDesc}</p>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <div className="relative h-[300px] w-full rounded-2xl overflow-hidden shadow-two">
                <Image
                  src="/images/about-us/children.png"
                  alt="Carenuity in daily life"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="bg-green-bg dark:bg-gray-900 py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="rounded-2xl bg-green-bg dark:bg-gray-900 border border-gray-300 dark:border-gray-800 p-8">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: "#174f2e" }}>
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-black dark:text-white mb-4">{a.missionTitle}</h2>
              <p className="text-body-color dark:text-green text-base leading-relaxed">{a.missionDesc}</p>
            </div>
            <div className="rounded-2xl bg-green-bg dark:bg-gray-900 border border-gray-300 dark:border-gray-800 p-8">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: "#174f2e" }}>
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-black dark:text-white mb-4">{a.visionTitle}</h2>
              <p className="text-body-color dark:text-green text-base leading-relaxed">{a.visionDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="bg-white dark:bg-gray-950 py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="mb-5 text-3xl font-bold text-black dark:text-white md:text-4xl">{a.overviewTitle}</h2>
              <p className="text-body-color dark:text-green text-base leading-relaxed mb-8">{a.overviewDesc}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {a.overviewList.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl bg-white dark:bg-gray-950 px-4 py-3 shadow-two">
                  <span className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: "#174f2e" }}>
                    <CheckIcon />
                  </span>
                  <span className="text-sm font-medium text-black dark:text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Brand Visibility ── */}
      <section className="bg-white dark:bg-gray-950 py-16">
        <div className="container">
          <h2 className="mb-3 text-3xl font-bold text-black dark:text-white md:text-4xl">{a.brandVisibilityTitle}</h2>
          <p className="text-body-color dark:text-green mb-10 text-base max-w-3xl">{a.brandVisibilityDesc}</p>
          <div className="rounded-2xl overflow-hidden shadow-two border border-gray-100 dark:border-gray-800">
            <Image
              src="/images/about-us/brand-visibility.png"
              alt="Brand Visibility Table"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ── Educational Initiatives ── */}
      <section className="bg-green-bg dark:bg-gray-900 py-16">
        <div className="container">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-8">
              <h2 className="mb-5 text-3xl font-bold text-black dark:text-white md:text-4xl">{a.educationTitle}</h2>
              <p className="text-body-color dark:text-green text-base leading-relaxed">{a.educationDesc}</p>
            </div>
            <div className="col-span-12 lg:col-span-4 flex justify-center lg:justify-end">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-two" style={{ backgroundColor: "#174f2e" }}>
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Brand Presence ── */}
      <section className="bg-white dark:bg-gray-950 py-16">
        <div className="container">
          <h2 className="mb-3 text-3xl font-bold text-black dark:text-white md:text-4xl">{a.brandTitle}</h2>
          <p className="text-body-color dark:text-green mb-10 text-base">{a.brandDesc}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {a.brands.map((brand) => (
              <div key={brand.name} className="flex items-start gap-4 rounded-2xl bg-green-bg dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-5 shadow-two">
                <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: "#174f2e" }}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m0 0l4.243-4.243a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5.656l-1.102 1.101" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-black dark:text-white text-sm mb-1">{brand.name}</p>
                  <p className="text-body-color dark:text-green text-xs leading-relaxed">{brand.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Product: SQ-Panel ── */}
      <section className="bg-green-bg dark:bg-gray-900 py-16">
        <div className="container">
          <div className="grid grid-cols-12 gap-10 items-center">
            <div className="col-span-12 lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 text-xs font-bold uppercase tracking-wider text-white" style={{ backgroundColor: "#174f2e" }}>
                Featured Product
              </div>
              <h2 className="mb-5 text-3xl font-bold text-black dark:text-white md:text-4xl">{a.sqPanelTitle}</h2>
              <p className="text-body-color dark:text-green text-base leading-relaxed mb-4">{a.sqPanelDesc1}</p>
              <p className="text-body-color dark:text-green text-base leading-relaxed mb-8">{a.sqPanelDesc2}</p>
              <div className="flex flex-wrap gap-2">
                {a.sqPanelFeatures.map((f) => (
                  <span key={f} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-700 text-xs font-semibold text-black dark:text-white shadow-two">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#174f2e" }}>
                      <CheckIcon />
                    </span>
                    {f}
                  </span>
                ))}
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <div className="relative h-[320px] w-full rounded-2xl overflow-hidden shadow-two bg-white dark:bg-gray-950">
                <Image
                  src="/images/sq-panel/sq-panel-frontview.png"
                  alt="Carenuity SQ-Panel"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Solution Builder ── */}
      <section className="bg-white dark:bg-gray-950 py-16">
        <div className="container">
          <div className="grid grid-cols-12 gap-10 items-start">
            <div className="col-span-12 lg:col-span-8">
              <h2 className="mb-5 text-3xl font-bold text-black dark:text-white md:text-4xl">{a.solutionBuilderTitle}</h2>
              <p className="text-body-color dark:text-green text-base leading-relaxed mb-8">{a.solutionBuilderDesc}</p>
              <div className="flex flex-col gap-3">
                {a.solutionBuilderFeatures.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <span className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: "#174f2e" }}>
                      <CheckIcon />
                    </span>
                    <span className="text-sm font-medium text-black dark:text-white">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <div className="rounded-2xl p-6 shadow-two border border-gray-100 dark:border-gray-800 bg-green-bg dark:bg-gray-900 text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#174f2e" }}>
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-sm font-bold text-black dark:text-white mb-2">Try It Now</p>
                <a
                  href="https://solutions.carenuity.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-white text-xs font-semibold transition-all hover:opacity-90"
                  style={{ backgroundColor: "#174f2e" }}
                >
                  Open Solution Builder
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Intellectual Property Note ── */}
      <section className="bg-green-bg dark:bg-gray-900 py-12">
        <div className="container">
          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 p-8 flex flex-col md:flex-row items-start gap-6 shadow-two">
            <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#174f2e" }}>
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-black dark:text-white mb-2">{a.ipTitle}</h3>
              <p className="text-body-color dark:text-green text-sm leading-relaxed">{a.ipDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Instagram Channels ── */}
      <section className="bg-white dark:bg-gray-950 py-16">
        <div className="container">
          <h2 className="mb-10 text-3xl font-bold text-black dark:text-white md:text-4xl">{a.instagramTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {a.instagramChannels.map((ch) => (
              <div key={ch.handle} className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-green-bg dark:bg-gray-900 p-6 shadow-two">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white shrink-0" style={{ backgroundColor: "#174f2e" }}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-black dark:text-white text-sm">{ch.handle}</p>
                    <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#174f2e" }}>{ch.label}</p>
                  </div>
                </div>
                <p className="text-xs text-body-color dark:text-green mb-1">
                  <span className="font-semibold text-black dark:text-white">Target: </span>{ch.target}
                </p>
                <p className="text-xs text-body-color dark:text-green">{ch.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Strategic Benefits ── */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #0f3520 0%, #174f2e 55%, #1e6b3e 100%)" }}
      >
        <div className="container">
          <h2 className="mb-10 text-3xl font-bold text-white md:text-4xl">{a.strategicTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {a.strategicItems.map((item, i) => (
              <div key={i} className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <span className="text-green-300 font-black text-lg">{i + 1}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
