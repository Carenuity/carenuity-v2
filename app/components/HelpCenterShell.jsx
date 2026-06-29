"use client";
import Link from "next/link";
import { useState } from "react";
import HelpCenterSidebar from "./HelpCenterSidebar";
import { useLanguage } from "../context/LanguageContext";

export default function HelpCenterShell({ title, subtitle, badge, children }) {
  const { lang } = useLanguage();
  const de = lang === "de";

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
              {de ? "Startseite" : "Home"}
            </Link>
            <span className="text-green-300/40">/</span>
            <Link
              href="/help-center"
              className="text-green-300/70 hover:text-green-300 transition-colors"
            >
              {de ? "Hilfe-Center" : "Help Center"}
            </Link>
            <span className="text-green-300/40">/</span>
            <span className="font-medium text-white">{title}</span>
          </nav>

          <div className="pb-12 pt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="text-base leading-none">🛟</span>
              <span className="text-xs font-semibold text-white tracking-wide uppercase">
                {badge ?? (de ? "Hilfe-Center" : "Help Center")}
              </span>
            </div>
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 text-lg leading-relaxed text-white/80">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Main layout */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <HelpCenterSidebar />
            <div className="flex-1 min-w-0">{children}</div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- Content primitives ---------- */

export function HcCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 shadow-sm p-6 md:p-8 ${className}`}
    >
      {children}
    </div>
  );
}

export function HcH2({ children }) {
  return (
    <h2 className="text-xl md:text-2xl font-bold text-black dark:text-white mt-10 mb-3 first:mt-0">
      {children}
    </h2>
  );
}

export function HcH3({ children }) {
  return (
    <h3 className="text-base font-bold text-primary dark:text-green-400 mt-6 mb-2 uppercase tracking-wide">
      {children}
    </h3>
  );
}

export function HcP({ children }) {
  return (
    <p className="text-body-color dark:text-green text-base leading-relaxed mb-4">
      {children}
    </p>
  );
}

export function HcUL({ children, nested = false }) {
  return (
    <ul
      className={
        nested
          ? "list-[circle] pl-6 mt-2 space-y-1 text-body-color dark:text-green text-[15px] leading-relaxed"
          : "list-disc pl-6 space-y-2 text-body-color dark:text-green text-base leading-relaxed mb-4"
      }
    >
      {children}
    </ul>
  );
}

export function HcOL({ children }) {
  return (
    <ol className="list-decimal pl-6 space-y-2 text-body-color dark:text-green text-base leading-relaxed mb-4">
      {children}
    </ol>
  );
}

export function HcLink({ href, children }) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  if (external) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
        className="text-primary dark:text-green-400 font-semibold hover:underline"
      >
        {children}
      </a>
    );
  }
  return (
    <Link
      href={href}
      className="text-primary dark:text-green-400 font-semibold hover:underline"
    >
      {children}
    </Link>
  );
}

/* ---------- FAQ accordion ---------- */

export function FaqAccordion({ items }) {
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <FaqItem key={i} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-sm md:text-base font-semibold text-black dark:text-white">
          {question}
        </span>
        <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-green-bg dark:bg-gray-800 text-primary dark:text-green-400">
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-45" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 5v14M5 12h14"
            />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5 -mt-1">
          <p
            className="text-body-color dark:text-green text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        </div>
      )}
    </div>
  );
}
