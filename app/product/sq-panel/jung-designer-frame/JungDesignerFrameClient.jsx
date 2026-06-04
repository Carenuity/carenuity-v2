"use client";
import Link from "next/link";
import ProductSidebar from "../../../components/ProductSidebar";
import { useLanguage } from "../../../context/LanguageContext";

export default function JungDesignerFrameClient() {
  const { lang } = useLanguage();
  const en = lang === "en";

  const variants = en
    ? [
        "Single Frame Black: For a bold, technical look with depth and character.",
        "Single Frame White: For a bright, minimalist appearance that blends effortlessly into any space.",
        "Double Frame Black: Ideal for combining the SQ-Panel with other JUNG modules - in sleek graphite black.",
        "Double Frame White: For harmonious integration in bright interiors with added functionality.",
      ]
    : [
        "Einzelrahmen Schwarz: Für ein markantes, technisches Erscheinungsbild mit Tiefe und Charakter.",
        "Einzelrahmen Weiß: Für einen hellen, minimalistischen Look, der sich dezent in jede Umgebung einfügt.",
        "Doppelrahmen Schwarz: Ideal zur Kombination des SQ-Panels mit weiteren JUNG Modulen - in edlem Graphitschwarz.",
        "Doppelrahmen Weiß: Für harmonische Integration in helle Räume mit zusätzlicher Funktionalität.",
      ];

  const enShopItems = [
    {
      src: "/images/products/sq-panel/jung/single.jpeg",
      title:
        "Single frame, vertical and horizontal mounting, Duroplast, LS-DESIGN, alpine white",
      href: "https://www.jung-group.com/de-AT/p/Rahmen-1fach-alpinweiss/LSD-981-WW",
      btn: "Buy Now",
    },
    {
      src: "/images/products/sq-panel/jung/double.jpeg",
      title:
        "Double frame, vertical and horizontal mounting, Duroplast, LS-DESIGN, alpine white",
      href: "https://www.jung-group.com/de-AT/p/Rahmen-2fach-alpinweiss/LSD-982-WW",
      btn: "Buy Now",
    },
  ];
  const deShopItems = [
    {
      src: "/images/products/sq-panel/jung/single.jpeg",
      title:
        "Rahmen 1fach, senkrechte und waagerechte Montage, Duroplast, LS-DESIGN, alpinweiß",
      href: "https://www.jung-group.com/de-AT/p/Rahmen-1fach-alpinweiss/LSD-981-WW",
      btn: "Jetzt kaufen",
    },
    {
      src: "/images/products/sq-panel/jung/double.jpeg",
      title:
        "Rahmen 2fach, senkrechte und waagerechte Montage, Duroplast, LS-DESIGN, alpinweiß",
      href: "https://www.jung-group.com/de-AT/p/Rahmen-2fach-alpinweiss/LSD-982-WW",
      btn: "Jetzt kaufen",
    },
  ];
  const shopItems = en ? enShopItems : deShopItems;

  const enDocs = [
    {
      href: "/docs/de-lsd981ww-adp.pdf",
      label: "Product data sheet with price 1-gang [PDF]",
    },
    {
      href: "/docs/de-lsd981ww-ad.pdf",
      label: "Article data sheet 1-gang [PDF]",
    },
    {
      href: "/docs/de-lsd982ww-adp.pdf",
      label: "Product data sheet with price 2-gang [PDF]",
    },
    {
      href: "/docs/de-lsd982ww-ad.pdf",
      label: "Article data sheet 2-gang [PDF]",
    },
  ];
  const deDocs = [
    {
      href: "/docs/de-lsd981ww-adp.pdf",
      label: "Artikeldatenblatt mit Preis 1fach [PDF]",
    },
    {
      href: "/docs/de-lsd981ww-ad.pdf",
      label: "Artikeldatenblatt 1fach [PDF]",
    },
    {
      href: "/docs/de-lsd982ww-adp.pdf",
      label: "Artikeldatenblatt mit Preis 2fach [PDF]",
    },
    {
      href: "/docs/de-lsd982ww-ad.pdf",
      label: "Artikeldatenblatt 2fach [PDF]",
    },
  ];

  return (
    <main>
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
              {en ? "Home" : "Start"}
            </Link>
            <span className="text-green-300/40">/</span>
            <Link
              href="/products"
              className="text-green-300/70 hover:text-green-300 transition-colors"
            >
              {en ? "Products" : "Produkte"}
            </Link>
            <span className="text-green-300/40">/</span>
            <span className="font-medium text-white">Jung Designer Frame</span>
          </nav>
          <div className="pb-12 pt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
              <span className="text-xs font-semibold text-white tracking-wide uppercase">
                {en ? "Design Accessories" : "Design Zubehör"}
              </span>
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              JUNG LS 990 Designer Frame
              <br />
              <span className="text-green-300">
                {en ? "for the SQ-Panel" : "für das SQ-Panel"}
              </span>
            </h1>
            <p className="text-lg leading-relaxed text-white/80 max-w-2xl">
              {en
                ? "Single and Double Frames in Black or White"
                : "Einzel- und Doppelrahmen in Schwarz oder Weiß"}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <ProductSidebar />
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-4">
                {en ? "JUNG Designer Frame" : "JUNG Designerrahmen"}
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {en
                  ? "Give your SQ-Panel the perfect frame - with the iconic JUNG LS 990 design. Whether in elegant black or classic white, as a single or double frame, these premium design frames combine timeless aesthetics with functional precision and integrate seamlessly into modern living and working environments."
                  : "Verleihen Sie Ihrem SQ-Panel den perfekten Rahmen - mit dem ikonischen JUNG LS 990 Design. Ob in elegantem Schwarz oder klassischem Weiß, als Einzel- oder Doppelrahmen: Diese hochwertigen Designrahmen verbinden zeitlose Ästhetik mit funktionaler Präzision."}
              </p>

              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-4">
                {en ? "Design Meets Function" : "Design trifft Funktion"}
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {en
                  ? "The LS 990 series by JUNG stands for clean lines, subtle elegance, and top-tier craftsmanship. Inspired by Bauhaus principles, these frames provide a stylish enclosure for the SQ-Panel - and, in the case of double frames, also for additional components such as light switches or sockets."
                  : "Die LS 990 Serie von JUNG steht für klare Linien, dezente Eleganz und höchste Verarbeitungsqualität. Inspiriert vom Bauhaus-Stil, bieten die Rahmen eine stilvolle Einfassung für das SQ-Panel."}
              </p>

              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-4">
                {en
                  ? "Four Variants — Maximum Design Flexibility"
                  : "Vier Varianten – für maximale Gestaltungsfreiheit"}
              </h2>
              <div className="space-y-2 mb-8">
                {variants.map((v) => (
                  <div
                    key={v}
                    className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                      <svg
                        className="w-3 h-3 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    {v}
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-4">
                {en
                  ? "Information for frame 1-gang, alpine white LSD 981 WW"
                  : "Informationen für Rahmen 1fach, alpinweiß LSD 981 WW"}
              </h2>
              <img
                src={
                  en
                    ? "/images/products/sq-panel/jung/slide2.png"
                    : "/images/products/sq-panel/jung/slide1.png"
                }
                alt="JUNG Frame 1-gang"
                className="w-full rounded-2xl mb-8"
              />

              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-4">
                {en
                  ? "Information for frame 2-gang, alpine white LSD 982 WW"
                  : "Informationen für Rahmen 2fach, alpinweiß LSD 982 WW"}
              </h2>
              <img
                src={
                  en
                    ? "/images/products/sq-panel/jung/slide4.png"
                    : "/images/products/sq-panel/jung/slide3.png"
                }
                alt="JUNG Frame 2-gang"
                className="w-full rounded-2xl mb-8"
              />

              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-4">
                Documentation
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-5 mb-8">
                <ul className="space-y-3">
                  {(en ? enDocs : deDocs).map((doc) => (
                    <li key={doc.href}>
                      <a
                        href={doc.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm text-primary dark:text-green-400 hover:underline"
                      >
                        <svg
                          className="w-4 h-4 text-primary dark:text-green-400 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {doc.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-4">
                {en ? "Shop with us" : "Kaufen Sie bei uns ein"}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {shopItems.map((item) => (
                  <div
                    key={item.href}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden"
                  >
                    <img
                      src={item.src}
                      alt="JUNG Frame"
                      className="w-full object-contain p-4 bg-gray-50 dark:bg-gray-900"
                      style={{ maxHeight: "240px" }}
                    />
                    <div className="p-4">
                      <p className="text-sm font-semibold text-[#0d2137] dark:text-white mb-3">
                        {item.title}
                      </p>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="shadow-btn bg-primary hover:bg-primary-light rounded-full px-5 py-2 text-xs font-semibold text-white transition duration-300 inline-block"
                      >
                        {item.btn}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
