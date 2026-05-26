"use client";
import Link from "next/link";
import UniversitySidebar from "../UniversitySidebar";
import { useLanguage } from "../../../context/LanguageContext";

export default function AuthPage() {
  const { t } = useLanguage();
  const c = t.homeChallengeUniversity.common;
  const p = t.homeChallengeUniversity.auth;
  return (
    <main>
      <section className="relative overflow-hidden pt-[120px] md:pt-[100px] xl:pt-[140px]" style={{ background: "linear-gradient(135deg, #0f3520 0%, #174f2e 55%, #1e6b3e 100%)" }}>
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="container relative">
          <nav className="flex items-center gap-2 pt-6 pb-4 text-sm">
            <Link href="/" className="text-green-300/70 hover:text-green-300 transition-colors">{c.home}</Link>
            <span className="text-green-300/40">/</span>
            <Link href="/home-challenge" className="text-green-300/70 hover:text-green-300 transition-colors">{c.homeChallenge}</Link>
            <span className="text-green-300/40">/</span>
            <span className="font-medium text-white">{p.crumb}</span>
          </nav>
          <div className="pb-12 pt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
              <span className="text-xs font-semibold text-white tracking-wide uppercase">{c.universityPartner}</span>
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              {p.title}
              <br /><span className="text-green-300">{p.subtitle}</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <UniversitySidebar />
            <div className="flex-1 min-w-0">
              <iframe loading="lazy" className="w-full rounded-2xl shadow-sm mb-4" src="https://www.canva.com/design/DAGUadWrTqo/r-UJ8uwZcsxaSUhpPWwFzQ/view?embed" style={{ height: "600px" }} />
              <p className="text-center text-sm text-gray-700 dark:text-gray-300">
                <a href="https://www.canva.com/design/DAGUadWrTqo/r-UJ8uwZcsxaSUhpPWwFzQ/view" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{p.linkText}</a> {c.byCarenuity}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
