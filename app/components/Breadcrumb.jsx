"use client";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function Breadcrumb({ pageName, description }) {
  const { t } = useLanguage();
  return (
    <section
      className="relative z-10 overflow-hidden pt-28 pb-16 md:pt-36 lg:pt-44 lg:pb-24"
      style={{
        background:
          "linear-gradient(135deg, #0a2318 0%, #174f2e 50%, #0d3520 100%)",
      }}
    >
      <div className="container">
        <div className="flex flex-wrap items-center">
          <div className="w-full">
            <div className="max-w-[640px]">
              <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-[40px] leading-tight">
                {pageName}
              </h1>
              {description && (
                <p className="text-base text-white/70 leading-relaxed">
                  {description}
                </p>
              )}
              <nav className="mt-6 flex items-center gap-2 text-sm">
                <Link
                  href="/"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  {t.breadcrumb.home}
                </Link>
                <span className="text-white/40">/</span>
                <span className="text-white font-medium">{pageName}</span>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative shapes */}
      <div className="absolute right-0 top-0 z-[-1] opacity-20">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
          <circle cx="300" cy="100" r="200" fill="white" opacity="0.15" />
          <circle cx="350" cy="200" r="120" fill="white" opacity="0.1" />
        </svg>
      </div>
    </section>
  );
}
