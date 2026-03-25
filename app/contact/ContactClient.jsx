"use client";
import Breadcrumb from "../components/Breadcrumb";
import { useLanguage } from "../context/LanguageContext";

export default function ContactClient() {
  const { t } = useLanguage();
  const c = t.contact;

  return (
    <main>
      <Breadcrumb pageName={c.pageName} description={c.pageDesc} />

      <section className="py-16 lg:py-24 bg-white dark:bg-gray-dark">
        <div className="container">
          <div className="-mx-4 flex flex-wrap gap-y-10">
            {/* Form */}
            <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
              <div className="shadow-two dark:shadow-three rounded-2xl bg-white dark:bg-gray-950 p-8 sm:p-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-2">
                  {c.title}
                </h2>
                <p className="text-body-color dark:text-green mb-10">
                  {c.subtitle}
                </p>
                <form>
                  <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-6">
                        <label className="text-dark dark:text-white text-sm font-medium mb-2 block">
                          {c.yourName}
                        </label>
                        <input
                          type="text"
                          placeholder={c.namePlaceholder}
                          className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-5 py-3 text-body-color dark:text-body-color-dark text-sm outline-none focus:border-primary dark:focus:border-primary transition-colors"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-6">
                        <label className="text-dark dark:text-white text-sm font-medium mb-2 block">
                          {c.yourEmail}
                        </label>
                        <input
                          type="email"
                          placeholder={c.emailPlaceholder}
                          className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-5 py-3 text-body-color dark:text-body-color-dark text-sm outline-none focus:border-primary dark:focus:border-primary transition-colors"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="mb-6">
                        <label className="text-dark dark:text-white text-sm font-medium mb-2 block">
                          {c.yourMessage}
                        </label>
                        <textarea
                          rows={6}
                          placeholder={c.messagePlaceholder}
                          className="w-full resize-none rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-5 py-3 text-body-color dark:text-body-color-dark text-sm outline-none focus:border-primary dark:focus:border-primary transition-colors"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <button
                        type="submit"
                        className="px-9 py-4 rounded-xl text-white font-semibold text-sm shadow-submit transition-all duration-300 hover:opacity-90 hover:scale-105"
                        style={{ backgroundColor: "#174f2e" }}
                      >
                        {c.submitBtn}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Newsletter sidebar */}
            <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
              <div
                className="rounded-2xl relative overflow-hidden p-8 sm:p-10 text-white"
                style={{
                  background:
                    "linear-gradient(135deg, #0a2318 0%, #174f2e 60%, #1e6b3e 100%)",
                }}
              >
                {/* Decorative */}
                <div className="absolute top-0 right-0 opacity-10">
                  <svg
                    width="200"
                    height="200"
                    viewBox="0 0 200 200"
                    fill="none"
                  >
                    <circle cx="160" cy="40" r="120" fill="white" />
                  </svg>
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                    <svg
                      className="w-6 h-6 text-green-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    {c.newsletterTitle}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-7">
                    {c.newsletterDesc}
                  </p>
                  <form>
                    <div className="mb-3">
                      <input
                        type="text"
                        placeholder={c.namePlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/50 transition-colors"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="email"
                        placeholder={c.emailPlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/50 transition-colors"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-white font-bold text-sm transition-all duration-300 hover:bg-white/90"
                      style={{ color: "#174f2e" }}
                    >
                      {c.newsletterBtn}
                    </button>
                  </form>
                  <p className="text-white/40 text-xs mt-5 text-center">
                    No spam, unsubscribe anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
