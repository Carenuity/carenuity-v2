import Link from "next/link";

export const metadata = {
  title: "Why Should I Involve My Students as a Professor — Carenuity Home Challenge",
  description:
    "Discover why professors should integrate the Carenuity Home Challenge into their curriculum — bridging IoT, AI, and industry experience.",
};

const reasons = [
  { title: "Enhanced Curriculum", desc: "Integrating the Home Challenge into your curriculum provides students with hands-on experience in building IoT devices. This practical approach enhances their learning and prepares them for real-world challenges." },
  { title: "Industry Connections", desc: "Collaborating with the semiconductor industry like Bosch, Renesas, Infineon, NXP or TI by utilizing their sensors & microcontrollers, or with other industries like the hospitality sector in Greece with players like Grecotel Hotels & Resorts, Sani/Ikos Group, and Mitsis Hotels opens up opportunities for research partnerships, internships, and job placements for your students." },
  { title: "Professional Development", desc: "Stay updated with the latest industry trends and technologies. Participating in the Home Challenge allows you to enhance your teaching and research capabilities, keeping you at the forefront of technological advancements." },
  { title: "Innovation and Adaptability", desc: "Encourage your students to innovate and adapt to new technologies. The Home Challenge fosters a mindset of creativity and problem-solving — essential skills in the rapidly evolving field of IoT." },
  { title: "Critical Evaluation of IoT Offerings", desc: "Equip your students with the ability to critically evaluate various IoT offerings. This skill helps them avoid vendor lock-in and ensures they choose the most cost-effective and suitable solutions for their needs." },
];

const howItWorks = [
  { title: "Planning and Promotion", desc: "Collaborate with us to design the Home Challenge, jointly identify a suited sponsor (e.g. semiconductor, hospitality, or any other related industry), set sponsor-specific objectives, and promote the event." },
  { title: "Execution", desc: "Students participate in the challenge, building AI-assisted IoT devices over six levels and solving real-world problems provided by the partner companies." },
  { title: "Evaluation and Awards", desc: "Joint evaluation by professors and industry representatives, with awards and potential internships or job offers for the best projects." },
  { title: "Post-Event Engagement", desc: "Share success stories and outcomes through press releases, social media, and academic publications." },
];

export default function ProfessorPage() {
  return (
    <main>
      <section
        className="relative overflow-hidden pt-[120px] md:pt-[100px] xl:pt-[140px]"
        style={{ background: "linear-gradient(135deg, #0f3520 0%, #174f2e 55%, #1e6b3e 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="container relative">
          <nav className="flex items-center gap-2 pt-6 pb-4 text-sm">
            <Link href="/" className="text-green-300/70 hover:text-green-300 transition-colors">Home</Link>
            <span className="text-green-300/40">/</span>
            <Link href="/home-challenge" className="text-green-300/70 hover:text-green-300 transition-colors">Home Challenge</Link>
            <span className="text-green-300/40">/</span>
            <span className="font-medium text-white">Become a Professor</span>
          </nav>
          <div className="pb-12 pt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
              <span className="text-xs font-semibold text-white tracking-wide uppercase">For Academia</span>
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Why Involve My Students as a Professor?
              <br /><span className="text-green-300">Bridge Academia & Industry</span>
            </h1>
            <p className="text-lg leading-relaxed text-white/80 max-w-2xl">
              Integrate cutting-edge IoT and ML/AI technology into your curriculum and shape future industry leaders.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container">

          <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-4">Why Should I Involve My Students as a Professor</h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            The Home Challenge offers a unique opportunity for professors to engage with cutting-edge IoT and ML/AI technology and contribute to the development of future industry leaders. Here are some compelling reasons to get involved:
          </p>

          <div className="space-y-4 mb-10">
            {reasons.map((r) => (
              <div key={r.title} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-5">
                <h3 className="text-sm font-bold text-[#0d2137] dark:text-white mb-2">{r.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-4">How It Works</h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            The Home Challenge is structured to provide maximum benefit to all participants. Here&apos;s how it works:
          </p>
          <ol className="space-y-3 mb-10 list-decimal pl-5">
            {howItWorks.map((item) => (
              <li key={item.title} className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                <span className="font-bold text-[#0d2137] dark:text-white">{item.title}:</span> {item.desc}
              </li>
            ))}
          </ol>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 text-center">
            <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-3">Get Involved</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6 max-w-xl mx-auto">
              Ready to contribute to the Home Challenge and make a difference in the future of IoT, ML/AI and the related industries? Contact us today to learn more about how you can get involved and support this exciting initiative.
            </p>
            <Link href="/contact" className="shadow-btn bg-primary hover:bg-primary-light rounded-full px-7 py-3 text-sm font-semibold text-white transition duration-300 inline-block">
              Contact Us
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
