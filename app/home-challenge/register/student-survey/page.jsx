import Link from "next/link";
import SurveyForm from "./SurveyForm";

export const metadata = {
  title: "Student Survey & Questionnaire — Carenuity Home Challenge",
  description:
    "Share your IoT interests and career goals with Carenuity. Help us understand how we can support students in the Home Challenge program.",
};

export default async function StudentSurveyPage({ searchParams }) {
  const { school } = await searchParams;

  return (
    <main>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden pt-[120px] md:pt-[100px] xl:pt-[140px] pb-16"
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
          <nav className="flex items-center gap-2 pt-6 pb-6 text-sm flex-wrap">
            <Link
              href="/"
              className="text-green-300/70 hover:text-green-300 transition-colors"
            >
              Home
            </Link>
            <span className="text-green-300/40">/</span>
            <Link
              href="/home-challenge"
              className="text-green-300/70 hover:text-green-300 transition-colors"
            >
              Home Challenge
            </Link>
            <span className="text-green-300/40">/</span>
            <span className="font-medium text-white">Student Survey</span>
          </nav>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-5">
              <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
              <span className="text-xs font-semibold text-white tracking-wide uppercase">
                Student Survey
              </span>
            </div>
            <h1 className="text-3xl font-bold text-white sm:text-4xl mb-3">
              Carenuity Student Survey &amp; Questionnaire
            </h1>
            {school && (
              <p className="text-green-200 text-sm font-semibold mb-3">
                {school}
              </p>
            )}
            <p className="text-white/80 text-lg leading-relaxed">
              Thank you for your interest in ChipGlobe and the IoT industry.
              This survey helps us understand your interests and provide you
              with the most relevant opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* ── Survey Form ── */}
      <section className="bg-green-bg dark:bg-gray-900 py-14">
        <div className="container">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-8 lg:col-start-3">
              <SurveyForm school={school ?? ""} />
            </div>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="bg-white dark:bg-gray-950 py-14">
        <div className="container">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-8 lg:col-start-3 text-center">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                About Carenuity
              </h2>
              <p className="text-body-color dark:text-gray-300 text-base leading-relaxed mb-6">
                Carenuity provides modular and highly customizable sensor
                solutions for monitoring vital signs and real estate air
                quality. Our flagship product, the SQ-Panel, delivers 24/7 vital
                and environmental sensing &amp; care.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                <span className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  ChipGlobe GmbH, Munich
                </span>
                <a
                  href="mailto:info@carenuity.com"
                  className="flex items-center gap-2 hover:text-primary dark:hover:text-green-400 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  info@carenuity.com
                </a>
                <a
                  href="tel:+498912224694040"
                  className="flex items-center gap-2 hover:text-primary dark:hover:text-green-400 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  (+49) 89-1222469-40
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
