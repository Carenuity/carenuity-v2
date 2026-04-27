import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Level 2 – PCB Design | Home Challenge | Carenuity",
  description:
    "Modify PCB designs using KiCAD and monitor microcontroller pins in real time via your smartphone with the GPIO Viewer app.",
};

const deliverables = [
  {
    number: "01",
    title: "KiCAD PCB Silkscreen Modification",
    desc: "Modify a PCB silkscreen using KiCAD by adding a custom logo, then export the Gerber data files from the Carenuity GitHub repository.",
  },
  {
    number: "02",
    title: "GPIO Viewer Screenshot",
    desc: "Install the GPIO Viewer App on a C3-Mini device and capture a screenshot demonstrating the live pin monitoring interface.",
  },
  {
    number: "03",
    title: "Email Submission",
    desc: "Send your Gerber files and GPIO Viewer screenshot to team@carenuity.com to receive your Level 2 reward.",
  },
];

const competencies = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    title: "PCB Design Fundamentals",
    desc: "Learn how to read, modify, and export professional PCB designs using KiCAD.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "GPIO Pin Monitoring",
    desc: "Monitor microcontroller GPIO pins in real time via the GPIO Viewer smartphone app.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "KiCAD Proficiency",
    desc: "Gain hands-on experience with KiCAD, the leading open-source PCB design tool.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: "Circuit Board Customisation",
    desc: "Customise silkscreen layers to personalise PCB designs with logos and labels.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Teamwork & Adaptability",
    desc: "Collaborate with peers and adapt to new hardware design tools and workflows.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Attention to Detail",
    desc: "Develop precision and creative expression through meticulous hardware design tasks.",
  },
];

export default function Level2Page() {
  return (
    <main>
      {/* ── Hero ── */}
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
          <nav className="flex items-center gap-2 pt-6 pb-4 text-sm flex-wrap">
            <Link href="/" className="text-green-300/70 transition-colors hover:text-green-300">
              Home
            </Link>
            <span className="text-green-300/40">/</span>
            <Link href="/home-challenge" className="text-green-300/70 transition-colors hover:text-green-300">
              Home Challenge
            </Link>
            <span className="text-green-300/40">/</span>
            <span className="font-medium text-white">Level 2</span>
          </nav>

          <div className="max-w-3xl pb-16 pt-4">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span
                className="text-xs font-bold text-white px-3 py-1 rounded-full"
                style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
              >
                Level 02
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-green-300 uppercase tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
                Beginner
              </span>
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              PCB Design
            </h1>
            <p className="text-lg leading-relaxed text-white/80 md:text-xl mb-8">
              Modify PCB designs using KiCAD and monitor your microcontroller pins live
              on your smartphone via the GPIO Viewer app. Bridge hardware design and
              real-time data monitoring.
            </p>

            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <svg className="w-5 h-5 text-yellow-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-green-300">
                  Reward
                </p>
                <p className="text-sm font-semibold text-white">
                  0.66&Prime; or 0.96&Prime; OLED Display
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="bg-white dark:bg-gray-950 py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-700 mb-5">
                <span className="text-xs font-bold text-green-700 dark:text-green-400 uppercase tracking-wide">
                  Objective
                </span>
              </div>
              <h2 className="text-3xl font-bold text-black dark:text-white mb-4 md:text-4xl">
                PCB Design & GPIO Monitoring
              </h2>
              <p className="text-body-color dark:text-gray-300 text-base leading-relaxed mb-6">
                In Level 2 you will learn to modify professional PCB designs using KiCAD —
                adding a custom logo to the silkscreen layer and exporting Gerber files.
                You will also install the GPIO Viewer app on a C3-Mini to monitor
                microcontroller pins live from your smartphone.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Tools Required", value: "GPIO-Viewer, KiCAD" },
                  { label: "Instructor", value: "Timothy" },
                  { label: "Difficulty", value: "Beginner" },
                  { label: "Submission", value: "team@carenuity.com" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-gray-100 dark:border-gray-800 p-4 bg-gray-50 dark:bg-gray-900"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-wider text-green-700 dark:text-green-400 mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-two border border-gray-100 dark:border-gray-800">
              <Image
                src="/images/home-challenge/level2.png"
                alt="Level 2 – PCB Design"
                width={600}
                height={440}
                className="w-full h-[340px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Video Tutorial ── */}
      <section className="bg-green-bg dark:bg-gray-900 py-16">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-700 mb-5">
              <span className="text-xs font-bold text-green-700 dark:text-green-400 uppercase tracking-wide">
                Video Tutorial
              </span>
            </div>
            <h2 className="text-3xl font-bold text-black dark:text-white mb-4 md:text-4xl">
              GPIO Viewer in Action
            </h2>
            <p className="text-body-color dark:text-gray-300 text-base leading-relaxed">
              Watch how to revolutionise your ESP32 projects with live GPIO pin monitoring
              via the GPIO Viewer app.
            </p>
          </div>

          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 shadow-two">
            <div className="relative w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/UxkOosaNohU"
                title="Revolutionize Your ESP32 Projects with Live GPIO Pin Monitoring"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="p-6">
              <span
                className="text-xs font-bold text-white px-2 py-0.5 rounded-full mb-3 inline-block"
                style={{ backgroundColor: "#174f2e" }}
              >
                Video 1
              </span>
              <h3 className="text-base font-bold text-black dark:text-white mb-2">
                Revolutionise Your ESP32 Projects with Live GPIO Pin Monitoring
              </h3>
              <p className="text-body-color dark:text-gray-400 text-sm leading-relaxed">
                Learn how to install and use the GPIO Viewer app to monitor all microcontroller
                GPIO pins in real time from your smartphone — a key deliverable for Level 2.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Deliverables ── */}
      <section className="bg-white dark:bg-gray-950 py-16">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-700 mb-5">
              <span className="text-xs font-bold text-green-700 dark:text-green-400 uppercase tracking-wide">
                Deliverables
              </span>
            </div>
            <h2 className="text-3xl font-bold text-black dark:text-white mb-4 md:text-4xl">
              What You Need to Submit
            </h2>
            <p className="text-body-color dark:text-gray-300 text-base leading-relaxed">
              Complete these three deliverables to unlock your Level 2 reward —
              a 0.66&Prime; or 0.96&Prime; OLED Display.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {deliverables.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-6 flex flex-col"
              >
                <span className="text-3xl font-black mb-4" style={{ color: "#174f2e" }}>
                  {item.number}
                </span>
                <h3 className="text-base font-bold text-black dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-body-color dark:text-gray-400 text-sm leading-relaxed flex-1">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="mailto:team@carenuity.com"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm text-white shadow-lg hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: "#174f2e" }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Submit to team@carenuity.com
            </a>
          </div>
        </div>
      </section>

      {/* ── Competencies ── */}
      <section className="bg-green-bg dark:bg-gray-900 py-16">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-700 mb-5">
              <span className="text-xs font-bold text-green-700 dark:text-green-400 uppercase tracking-wide">
                Competencies
              </span>
            </div>
            <h2 className="text-3xl font-bold text-black dark:text-white mb-4 md:text-4xl">
              Skills You Will Develop
            </h2>
            <p className="text-body-color dark:text-gray-300 text-base leading-relaxed">
              Level 2 bridges hardware design and real-time monitoring — building skills
              that carry through to the advanced levels of the challenge.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {competencies.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 shadow-two p-6 flex items-start gap-4"
              >
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-white"
                  style={{ backgroundColor: "#174f2e" }}
                >
                  {item.icon}
                </span>
                <div>
                  <h3 className="text-sm font-bold text-black dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-body-color dark:text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-16"
        style={{
          background: "linear-gradient(135deg, #0f3520 0%, #174f2e 55%, #1e6b3e 100%)",
        }}
      >
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Ready to Start Level 2?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Modify your PCB, install GPIO Viewer, and submit your work to claim
            your OLED Display reward.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/home-challenge/level-1"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-green-400/20 border border-green-300/40 text-white font-bold text-sm hover:bg-green-400/30 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Previous Level
            </Link>
            <a
              href="mailto:team@carenuity.com"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-black font-bold text-sm shadow-lg hover:scale-105 transition-all duration-300"
            >
              Submit Your Work
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link
              href="/home-challenge"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-all duration-300"
            >
              All Levels
            </Link>
            <Link
              href="/home-challenge/level-3"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-green-400/20 border border-green-300/40 text-white font-bold text-sm hover:bg-green-400/30 transition-all duration-300"
            >
              Next Level
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
