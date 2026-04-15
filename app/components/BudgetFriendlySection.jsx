"use client";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

const icons = [
  <>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </>,
  <>
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.04Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.04Z" />
  </>,
  <>
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
    <path d="m3.3 7 8.7 5 8.7-5" />
    <path d="M12 22V12" />
  </>,
  <>
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
  </>,
];

const hrefs = ["/c3-mini", "/ai-assisted", "/sensor-boxes", "/selection-box"];

export default function BudgetFriendlySection({ activeHref }) {
  const { t } = useLanguage();
  const bf = t.budgetFriendly;

  return (
    <section className="bg-green-bg dark:bg-gray-900 py-16 lg:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-black dark:text-white leading-tight">
            {bf.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bf.cards.map((item, idx) => {
            const href = hrefs[idx];
            const isActive = href === activeHref;
            return (
              <Link
                key={href}
                href={href}
                className={`group flex flex-col rounded-2xl p-6 shadow-two transition-all duration-300 ${
                  isActive
                    ? "bg-primary cursor-default"
                    : "bg-white dark:bg-gray-950 hover:shadow-one hover:-translate-y-1"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center transition-all duration-300 ${
                    isActive ? "bg-white/20" : "group-hover:scale-110"
                  }`}
                  style={isActive ? {} : { backgroundColor: "#174f2e" }}
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    {icons[idx]}
                  </svg>
                </div>
                <h3
                  className={`font-bold mb-2 transition-colors flex-1 ${
                    isActive
                      ? "text-white"
                      : "text-black dark:text-white group-hover:text-primary"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed mb-3 ${
                    isActive
                      ? "text-white/80"
                      : "text-body-color dark:text-green"
                  }`}
                >
                  {item.desc}
                </p>
                <div
                  className={`mt-auto flex items-center gap-1 text-xs font-semibold ${
                    isActive
                      ? "text-white/70"
                      : "text-primary dark:text-green-400"
                  }`}
                >
                  {isActive ? bf.currentPage : bf.explore}
                  {!isActive && (
                    <svg
                      className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
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
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
