import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Level 5 – Data & Machine Learning | Home Challenge | Carenuity",
  description:
    "Record sensor data, build database visualisations, and develop machine learning models to predict and analyse your smart home environment.",
};

const databases = [
  "ThingSpeak",
  "TimescaleDB",
  "InfluxData",
  "Adafruit IO",
  "Prometheus",
  "Google Firebase",
];

const deliverables = [
  {
    number: "01",
    title: "Select & Set Up a Database",
    desc: "Choose a database platform (e.g. ThingSpeak, InfluxData, or Google Firebase) and configure it to receive live sensor data from your commissioned device.",
  },
  {
    number: "02",
    title: "Visualise Sensor Data",
    desc: "Build a dashboard or visualisation showing your recorded sensor data over time. Include charts or graphs that highlight patterns and trends.",
  },
  {
    number: "03",
    title: "Train a Machine Learning Model",
    desc: "Use Edge Impulse or similar tools to develop a machine learning algorithm trained on your sensor data, capable of predictions or anomaly detection.",
  },
  {
    number: "04",
    title: "Submit Your Project",
    desc: "Send your database dashboard URL and ML model details to team@carenuity.com to receive your Level 5 reward.",
  },
];

const competencies = [
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
        />
      </svg>
    ),
    title: "Database Management",
    desc: "Select, configure, and manage cloud databases for industrial IoT data storage and retrieval.",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: "Data Visualisation",
    desc: "Build dashboards and charts to identify patterns and insights from recorded sensor data.",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Machine Learning",
    desc: "Train and implement ML models on real sensor data using Edge Impulse for predictions and anomaly detection.",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Critical Thinking",
    desc: "Analyse sensor data to draw meaningful conclusions and identify unique selling propositions for your IoT product.",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Entrepreneurial Thinking",
    desc: "Identify market opportunities and potential startup commercialisation paths for your data-driven IoT solution.",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
    title: "Adaptability & Resilience",
    desc: "Navigate the complexities of data pipelines and ML workflows, iterating through challenges with persistence.",
  },
];

export default function Level5Page() {
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
            <Link
              href="/"
              className="text-green-300/70 transition-colors hover:text-green-300"
            >
              Home
            </Link>
            <span className="text-green-300/40">/</span>
            <Link
              href="/home-challenge"
              className="text-green-300/70 transition-colors hover:text-green-300"
            >
              Home Challenge
            </Link>
            <span className="text-green-300/40">/</span>
            <span className="font-medium text-white">Level 5</span>
          </nav>

          <div className="max-w-3xl pb-16 pt-4">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span
                className="text-xs font-bold text-white px-3 py-1 rounded-full"
                style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
              >
                Level 05
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-yellow-300 uppercase tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-300 animate-pulse" />
                Advanced / AI
              </span>
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Data & Machine Learning
            </h1>
            <p className="text-lg leading-relaxed text-white/80 md:text-xl mb-8">
              Record sensor data, build database visualisations, and develop
              machine learning models to predict and analyse your environment —
              bridging IoT infrastructure with AI-powered insights.
            </p>

            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <svg
                className="w-5 h-5 text-yellow-300 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                />
              </svg>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-green-300">
                  Reward
                </p>
                <p className="text-sm font-semibold text-white">
                  ESP32-CAM + Optional 1-Year Free SQ-Cloud Access
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
                AI Algorithm Development
              </h2>
              <p className="text-body-color dark:text-gray-300 text-base leading-relaxed mb-6">
                In Level 5 you will commission your sensor device, log data to a
                cloud database, and build visualisations to reveal patterns in
                your environment. You will then use Edge Impulse to train a
                machine learning model on your data — and explore the
                entrepreneurial potential of your solution, including possible
                startup commercialisation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Tools Required", value: "Databases, Edge Impulse" },
                  { label: "Instructor", value: "Cynthia" },
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
                src="/images/home-challenge/level05.png"
                alt="Level 5 – Data & Machine Learning"
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
              Watch both tutorials to learn how to log sensor data to a cloud
              database and train a machine learning model with Edge Impulse.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                src: "https://www.youtube.com/embed/G6ccogmR_no",
                title: "Sensor Data Logging & Database Visualisation",
                desc: "Commission your sensor device, connect it to a cloud database, and build a dashboard to visualise your recorded data over time.",
              },
              {
                src: "https://www.youtube.com/embed/wBWTj-1XiRU",
                title: "Machine Learning with Edge Impulse",
                desc: "Upload your sensor data to Edge Impulse, train a machine learning model, and deploy it to your IoT device for real-time predictions.",
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

      {/* ── Database Platforms ── */}
      <section className="bg-white dark:bg-gray-950 py-16">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-700 mb-5">
              <span className="text-xs font-bold text-green-700 dark:text-green-400 uppercase tracking-wide">
                Supported Platforms
              </span>
            </div>
            <h2 className="text-3xl font-bold text-black dark:text-white mb-4 md:text-4xl">
              Choose Your Database
            </h2>
            <p className="text-body-color dark:text-gray-300 text-base leading-relaxed">
              Select from these industrial-grade database platforms to store and
              visualise your sensor data for machine learning model training.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {databases.map((db) => (
              <span
                key={db}
                className="px-5 py-2.5 rounded-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-700 text-sm font-semibold text-gray-800 dark:text-gray-200 shadow-sm"
              >
                {db}
              </span>
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
              Complete all four steps to unlock your Level 5 reward — an
              ESP32-CAM with optional free SQ-Cloud access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {deliverables.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-6 flex flex-col"
              >
                <span
                  className="text-3xl font-black mb-4"
                  style={{ color: "#174f2e" }}
                >
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
              Level 5 combines data engineering, machine learning, and
              entrepreneurial thinking — preparing you for the final level of
              the Carenuity Home Challenge.
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
          background:
            "linear-gradient(135deg, #0f3520 0%, #174f2e 55%, #1e6b3e 100%)",
        }}
      >
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Ready to Start Level 5?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Log your sensor data, build your ML model, and claim your ESP32-CAM
            plus optional free SQ-Cloud access.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/home-challenge/level-4"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-green-400/20 border border-green-300/40 text-white font-bold text-sm hover:bg-green-400/30 transition-all duration-300"
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Previous Level
            </Link>
            <a
              href="mailto:team@carenuity.com"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-black font-bold text-sm shadow-lg hover:scale-105 transition-all duration-300"
            >
              Submit Your Work
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <Link
              href="/home-challenge"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-all duration-300"
            >
              All Levels
            </Link>
            <Link
              href="/home-challenge/level-6"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-green-400/20 border border-green-300/40 text-white font-bold text-sm hover:bg-green-400/30 transition-all duration-300"
            >
              Next Level
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
