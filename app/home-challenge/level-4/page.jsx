import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Level 4 – 3D Design & Enclosures | Home Challenge | Carenuity",
  description:
    "Design custom 3D enclosures for your IoT device using TinkerCAD and automate smart home devices with Home Assistant.",
};

const learningOutcomes = [
  {
    number: "01",
    label: "Remember",
    title: "Design Custom Enclosures",
    desc: "Use TinkerCAD to design a 3D-printed housing tailored to your IoT sensor device dimensions.",
  },
  {
    number: "02",
    label: "Understand",
    title: "Integrate Electronics",
    desc: "Learn how to incorporate electronic components into enclosures, accounting for ports, ventilation, and cable routing.",
  },
  {
    number: "03",
    label: "Apply",
    title: "Automate with Home Assistant",
    desc: "Connect your device to Home Assistant to automate smart home actions based on sensor readings.",
  },
  {
    number: "04",
    label: "Analyse",
    title: "Combine Hardware & Software",
    desc: "Evaluate how your physical design interacts with the software automation layer for a complete smart home solution.",
  },
  {
    number: "05",
    label: "Evaluate",
    title: "3D-Print & Test",
    desc: "3D-print your enclosure design and physically test it with your assembled IoT device.",
  },
];

const competencies = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: "3D Modelling",
    desc: "Design professional IoT enclosures using TinkerCAD with precise measurements and component fit.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Home Automation",
    desc: "Set up and configure Home Assistant to automate smart home devices using your IoT sensor.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Creativity & Innovation",
    desc: "Apply creative thinking to design unique, functional, and visually appealing hardware enclosures.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Problem Solving",
    desc: "Troubleshoot design and assembly challenges through iterative prototyping and testing.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Time Management",
    desc: "Plan and execute a multi-step design and print workflow with attention to quality and deadlines.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: "Adaptability",
    desc: "Learn new tools (TinkerCAD, Home Assistant) and adapt your design through iterative improvement.",
  },
];

export default function Level4Page() {
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
            <span className="font-medium text-white">Level 4</span>
          </nav>

          <div className="max-w-3xl pb-16 pt-4">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span
                className="text-xs font-bold text-white px-3 py-1 rounded-full"
                style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
              >
                Level 04
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-yellow-300 uppercase tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-300 animate-pulse" />
                Advanced
              </span>
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              3D Design & Enclosures
            </h1>
            <p className="text-lg leading-relaxed text-white/80 md:text-xl mb-8">
              Create 3D models and custom enclosures for your IoT device using TinkerCAD,
              then automate your smart home with Home Assistant. Design a professional
              housing for your sensor solution.
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
                  25% Voucher for ChipGlobe.shop
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
                Design, Print & Automate
              </h2>
              <p className="text-body-color dark:text-gray-300 text-base leading-relaxed mb-6">
                Level 4 challenges you to design a professional enclosure for your IoT sensor
                device using TinkerCAD. Your design may be showcased on the Carenuity Solution
                Builder hero pages. You will also integrate your device with Home Assistant
                to automate smart home actions — combining physical design with software automation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Tools Required", value: "TinkerCAD, Home Assistant" },
                  { label: "Instructor", value: "Warren" },
                  { label: "Difficulty", value: "Advanced / AI-related" },
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
                src="/images/home-challenge/level4.png"
                alt="Level 4 – 3D Design & Enclosures"
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
              Watch both tutorials to learn 3D enclosure design with TinkerCAD and
              smart home automation with Home Assistant.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                src: "https://www.youtube.com/embed/u-zJg_VkpVA",
                title: "3D Enclosure Design with TinkerCAD",
                desc: "Learn how to design a custom 3D-printed enclosure for your IoT sensor device using TinkerCAD, from measurements to export.",
              },
              {
                src: "https://www.youtube.com/embed/Axb_8qcjv1s",
                title: "Smart Home Automation with Home Assistant",
                desc: "Set up Home Assistant to automate your smart home devices using live sensor data from your IoT solution.",
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

      {/* ── Learning Outcomes ── */}
      <section className="bg-white dark:bg-gray-950 py-16">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-700 mb-5">
              <span className="text-xs font-bold text-green-700 dark:text-green-400 uppercase tracking-wide">
                Learning Outcomes
              </span>
            </div>
            <h2 className="text-3xl font-bold text-black dark:text-white mb-4 md:text-4xl">
              What You Will Achieve
            </h2>
            <p className="text-body-color dark:text-gray-300 text-base leading-relaxed">
              Level 4 follows Bloom&apos;s Taxonomy — progressing from basic recall
              through to creating and evaluating a complete physical product.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {learningOutcomes.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 flex flex-col shadow-two"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-black" style={{ color: "#174f2e" }}>
                    {item.number}
                  </span>
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-white"
                    style={{ backgroundColor: "#174f2e" }}
                  >
                    {item.label}
                  </span>
                </div>
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
              Level 4 develops both technical design skills and the professional soft skills
              needed to bring an IoT product from concept to physical reality.
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
            Ready to Start Level 4?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Design your enclosure in TinkerCAD, automate with Home Assistant,
            and claim your 25% ChipGlobe.shop voucher.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/home-challenge/level-3"
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
              href="/home-challenge/level-5"
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
