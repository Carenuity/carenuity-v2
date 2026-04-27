import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Level 3 – Coding & AI Integration | Home Challenge | Carenuity",
  description:
    "Create your own app using ChatGPT-assisted Arduino coding with API integrations and publish it to the Carenuity Solution Builder platform.",
};

const deliverables = [
  {
    number: "01",
    title: "Arduino Code in Arduino IDE",
    desc: "Write or modify Arduino code in Arduino IDE — optionally using ChatGPT assistance. Integrate third-party API keys to extend your device's capabilities.",
  },
  {
    number: "02",
    title: "Merged Binary File",
    desc: "Generate a merged binary file from your Arduino project, ready for upload to the Carenuity Solution Builder platform.",
  },
  {
    number: "03",
    title: "Upload to Solution Builder",
    desc: "Upload your binary and project details to solutions.carenuity.com and submit the project URL to team@carenuity.com.",
  },
];

const competencies = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Arduino Coding",
    desc: "Write and modify Arduino sketches to control IoT hardware and integrate sensor data.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "API Integration",
    desc: "Connect to third-party APIs using your own API keys to extend your IoT solution.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "AI-Assisted Development",
    desc: "Use ChatGPT to accelerate coding, debug issues, and optimise your Arduino programs.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
    title: "Project Deployment",
    desc: "Package and publish your solution binary to the Carenuity Solution Builder marketplace.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Community Sharing",
    desc: "Share your project on Solution Builder and LinkedIn to build your developer profile.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Communication",
    desc: "Document and present your work clearly for community review and feedback.",
  },
];

export default function Level3Page() {
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
            <span className="font-medium text-white">Level 3</span>
          </nav>

          <div className="max-w-3xl pb-16 pt-4">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span
                className="text-xs font-bold text-white px-3 py-1 rounded-full"
                style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
              >
                Level 03
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-green-300 uppercase tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
                Beginner
              </span>
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Coding & AI Integration
            </h1>
            <p className="text-lg leading-relaxed text-white/80 md:text-xl mb-8">
              Create your own app using ChatGPT-assisted coding in Arduino IDE with your own
              API keys — then upload your binary to the Carenuity Solution Builder and share
              your work with the community.
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
                  DS18B20 Sensor or Oximeter Sensor
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
                API Usage & App Development
              </h2>
              <p className="text-body-color dark:text-gray-300 text-base leading-relaxed mb-6">
                In Level 3 you will use Arduino IDE — with optional ChatGPT assistance — to
                write code that integrates third-party APIs into your IoT device. Once complete,
                you will generate a merged binary and publish your solution to the Carenuity
                Solution Builder platform for the community to use.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Tools Required", value: "Arduino IDE, ChatGPT, API keys, Solution Builder" },
                  { label: "Instructor", value: "Paul" },
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
                src="/images/home-challenge/level3.png"
                alt="Level 3 – Coding & AI Integration"
                width={600}
                height={440}
                className="w-full h-[340px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Video Tutorials ── */}
      <section className="bg-green-bg dark:bg-gray-900 py-16">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-700 mb-5">
              <span className="text-xs font-bold text-green-700 dark:text-green-400 uppercase tracking-wide">
                Video Tutorials
              </span>
            </div>
            <h2 className="text-3xl font-bold text-black dark:text-white mb-4 md:text-4xl">
              Step-by-Step Guidance
            </h2>
            <p className="text-body-color dark:text-gray-300 text-base leading-relaxed">
              Watch both tutorials to understand Arduino coding with API integration
              and how to publish your project to the Solution Builder platform.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                src: "https://www.youtube.com/embed/Ngnzw_W662s",
                title: "Arduino IDE & ChatGPT-Assisted Coding",
                desc: "Learn how to write and optimise Arduino code using ChatGPT assistance and integrate third-party API keys into your IoT device.",
              },
              {
                src: "https://www.youtube.com/embed/YT0UzGVj38I",
                title: "Generating a Binary & Uploading to Solution Builder",
                desc: "Follow the steps to generate a merged binary from your Arduino project and publish it to the Carenuity Solution Builder marketplace.",
              },
            ].map((video, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 shadow-two flex flex-col"
              >
                <div className="relative w-full aspect-video">
                  <iframe
                    src={video.src}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span
                    className="text-xs font-bold text-white px-2 py-0.5 rounded-full mb-3 inline-block w-fit"
                    style={{ backgroundColor: "#174f2e" }}
                  >
                    Video {idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-black dark:text-white mb-2">
                    {video.title}
                  </h3>
                  <p className="text-body-color dark:text-gray-400 text-sm leading-relaxed flex-1">
                    {video.desc}
                  </p>
                </div>
              </div>
            ))}
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
              Complete all three steps to unlock your Level 3 reward —
              a DS18B20 or Oximeter Sensor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {deliverables.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 flex flex-col shadow-two"
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

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://solutions.carenuity.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm text-white shadow-lg hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: "#174f2e" }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Open Solution Builder
            </a>
            <a
              href="mailto:team@carenuity.com"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:scale-105 transition-all duration-300"
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
      <section className="bg-white dark:bg-gray-950 py-16">
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
              Level 3 takes you from hardware into software — combining coding, AI tools,
              and community publishing in one challenge.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {competencies.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 flex items-start gap-4"
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
            Ready to Start Level 3?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Write your Arduino code, integrate an API, publish to Solution Builder,
            and claim your sensor reward.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/home-challenge/level-2"
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
              href="/home-challenge/level-4"
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
