import Image from "next/image";
import Link from "next/link";
import RegisterForm from "./RegisterForm";

const levels = [
  {
    number: "01",
    slug: "level-1",
    title: "Electronic Connections",
    desc: "Learn hardware fundamentals using soldering and WOKWI simulation. Master the basics of electronic connections for IoT devices.",
    img: "/images/home-challenge/level1.png",
    reward: "D1 or C3-Mini Microcontroller",
    rewardIcon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
  },
  {
    number: "02",
    slug: "level-2",
    title: "PCB Design",
    desc: "Modify PCB designs via KiCAD with live microcontroller monitoring on smartphones. Bridge hardware design and real-time data.",
    img: "/images/home-challenge/level2.png",
    reward: "OLED Display",
    rewardIcon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    number: "03",
    slug: "level-3",
    title: "Coding & AI Integration",
    desc: "Share with the community, write Arduino code, optimise with AI, and integrate external APIs into your smart home solution.",
    img: "/images/home-challenge/level3.png",
    reward: "Sensor Module",
    rewardIcon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    number: "04",
    slug: "level-4",
    title: "3D Design & Enclosures",
    desc: "Create 3D models and renderings for custom IoT device enclosures. Design a professional housing for your sensor solution.",
    img: "/images/home-challenge/level4.png",
    reward: "25% ChipGlobe.shop Voucher",
    rewardIcon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
  },
  {
    number: "05",
    slug: "level-5",
    title: "Data & Machine Learning",
    desc: "Record sensor data, build database visualisations, and develop machine learning models to predict and analyse your environment.",
    img: "/images/home-challenge/level05.png",
    reward: "ESP32-CAM + Optional Cloud Access",
    rewardIcon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: "06",
    slug: "level-6",
    title: "AI Model & Marketplace",
    desc: "Acquire data, train AI models via Edge Impulse, and promote your device on the marketplace. Keep 100% of your sales profit.",
    img: "/images/home-challenge/level06.png",
    reward: "Custom Website + 100% Sales Profit",
    rewardIcon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
];

export const metadata = {
  title: "Home Challenge — Carenuity",
  description:
    "The IoT Smart Home Challenge is a structured program designed to guide students through progressively complex tasks in IoT and smart home development.",
};

export default function HomeChallengePage() {
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
          <nav className="flex items-center gap-2 pt-6 pb-4 text-sm">
            <Link
              href="/"
              className="text-green-300/70 transition-colors hover:text-green-300"
            >
              Home
            </Link>
            <span className="text-green-300/40">/</span>
            <span className="font-medium text-white">Home Challenge</span>
          </nav>
          <div className="max-w-3xl pb-16 pt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
              <span className="text-xs font-semibold text-white tracking-wide uppercase">
                6 Levels · Free to Start
              </span>
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              IoT Smart Home Challenge
            </h1>
            <p className="text-lg leading-relaxed text-white/80 md:text-xl">
              A structured program designed to guide students through
              progressively complex tasks in IoT and smart home development —
              targeting beginners with basic electronics and programming knowledge.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/install-for-free"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-black font-bold text-sm shadow-lg hover:scale-105 transition-all duration-300"
              >
                Start for Free
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="#levels"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-all duration-300"
              >
                View All Levels
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Free Offer ── */}
      <section className="bg-white dark:bg-gray-950 py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-700 mb-5">
                <span className="text-xs font-bold text-green-700 dark:text-green-400 uppercase tracking-wide">
                  Free Offer
                </span>
              </div>
              <h2 className="text-3xl font-bold text-black dark:text-white mb-4 md:text-4xl">
                Start Your Smart Home Journey at No Cost
              </h2>
              <p className="text-body-color dark:text-gray-300 text-base leading-relaxed mb-6">
                Carenuity welcomes participants from Munich, Mombasa, Thessaloniki,
                Hamburg, Trieste, Nairobi, Wuerzburg, Belgrade, Patras, and Kisii
                with a free triple adapter offer. Get started immediately — no
                upfront investment required.
              </p>
              <ul className="space-y-3">
                {[
                  "Free triple adapter starter kit included",
                  "Step-by-step guides for all six levels",
                  "Access to the Carenuity community & support",
                  "Real hardware rewards at every level",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "#174f2e" }}
                    >
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-two border border-gray-100 dark:border-gray-800">
              <Image
                src="/images/home-challenge/free-offer1.jpeg"
                alt="Free triple adapter starter kit"
                width={600}
                height={440}
                className="w-full h-[340px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Challenge Levels ── */}
      <section id="levels" className="bg-green-bg dark:bg-gray-900 py-16">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-4 md:text-4xl">
              6 Levels of Smart Home Mastery
            </h2>
            <p className="text-body-color dark:text-gray-300 text-base leading-relaxed">
              Progress through six carefully designed challenge levels. Each level
              builds on the previous — from electronic basics to AI-powered smart
              home solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {levels.map((level) => (
              <Link
                key={level.number}
                href={`/home-challenge/${level.slug}`}
                className="rounded-2xl overflow-hidden bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 shadow-two hover:shadow-one hover:-translate-y-2 hover:border-green-400 dark:hover:border-green-500 transition-all duration-300 flex flex-col group cursor-pointer"
              >
                <div className="relative h-[200px] w-full shrink-0">
                  <Image
                    src={level.img}
                    alt={`Level ${level.number} – ${level.title}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span
                    className="absolute top-4 left-4 text-xs font-bold text-white px-3 py-1 rounded-full"
                    style={{ backgroundColor: "#174f2e" }}
                  >
                    Level {level.number}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-base font-bold text-black dark:text-white mb-2">
                    {level.title}
                  </h3>
                  <p className="text-body-color dark:text-gray-400 text-sm leading-relaxed flex-1 mb-4">
                    {level.desc}
                  </p>
                  {/* Reward badge */}
                  <div className="flex items-center justify-between gap-2 pt-3 border-t border-gray-100 dark:border-gray-800">
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-white"
                      style={{ backgroundColor: "#174f2e" }}
                    >
                      {level.rewardIcon}
                    </span>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-green-700 dark:text-green-400">
                        Reward
                      </p>
                      <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 leading-tight">
                        {level.reward}
                      </p>
                    </div>
                    <svg
                      className="w-4 h-4 text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 group-hover:translate-x-1 transition-all duration-300 shrink-0 ml-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certificate Section ── */}
      <section className="bg-white dark:bg-gray-950 py-16">
        <div className="container">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-700 mb-5">
                <span className="text-xs font-bold text-green-700 dark:text-green-400 uppercase tracking-wide">
                  Certificate of Completion
                </span>
              </div>
              <h2 className="text-3xl font-bold text-black dark:text-white mb-4 md:text-4xl">
                You Earn a Certificate
              </h2>
              <p className="text-body-color dark:text-gray-300 text-base leading-relaxed mb-4">
                Complete all six levels of the Carenuity Home Challenge and receive
                an official certificate of completion. Your certificate recognises
                real, hands-on expertise in IoT sensor setup, data analysis,
                machine learning, and smart home automation.
              </p>
              <p className="text-body-color dark:text-gray-300 text-base leading-relaxed">
                The Carenuity certificate is a credible proof of practical skills,
                valued across the maker and developer community, and a strong
                addition to any student portfolio or CV.
              </p>
            </div>
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
            Ready to Take the Challenge?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Join students and makers from Munich, Nairobi, Thessaloniki, and
            beyond who have already started their Carenuity Home Challenge journey.
          </p>
          <RegisterForm />
        </div>
      </section>
    </main>
  );
}
