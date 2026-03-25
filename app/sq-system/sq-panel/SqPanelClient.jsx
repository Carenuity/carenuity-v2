"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

const YT_IDS = {
  operating: "3f__UixQJa0",
  video1: "gFsb_utAGrg",
  video2: "3f__UixQJa0",
  video3: "dW8N7CkfXO8",
  video4: "b_ILJvUFYYY",
};

const caseStudyImages = [
  "/images/sq-panel/case-study/case-study1.png",
  "/images/sq-panel/case-study/case-study2.png",
  "/images/sq-panel/case-study/case-study3.png",
  "/images/sq-panel/case-study/case-study4.png",
  "/images/sq-panel/case-study/case-study5.png",
  "/images/sq-panel/case-study/case-study6.png",
  "/images/sq-panel/case-study/case-study7.png",
  "/images/sq-panel/case-study/case-study8.png",
  "/images/sq-panel/case-study/case-study9.png",
  "/images/sq-panel/case-study/case-study5.png",
  "/images/sq-panel/case-study/case-study5.png",
  "/images/sq-panel/case-study/case-study5.png",
];

const en = {
  hero: {
    headline: "See your air. Feel the difference.",
    subline:
      "SQ-Panel displays real-time air quality and presence data to keep your space healthy and comfortable.",
  },
  whatIs: {
    heading: "What is SQ-Panel?",
    p1: "The SQ-Panel is an intelligent display unit equipped with built-in environmental sensors that continuously measure the conditions of your indoor space. It measures factors such as air quality and human presence, giving you a clear, data-driven picture of what's happening in your environment at every moment.",
    p2: "When displaying data, the SQ-Panel actively helps protect your wellbeing. When it detects changes that may affect comfort or safety, it provides timely warnings and visual feedback, allowing you to take action quickly and maintain a safe and healthy indoor environment.",
  },
  components: {
    heading: "What components does it consist of?",
    intro:
      "The starter set of the SQ-Panel consists of the display with built-in sensors for measuring air quality and presence, a connector for a local gateway that is meant to keep the internet connected (e.g. Fritz.Box) and an app (Apple or Android) to put the SQ-Panel into operation so that you can monitor the sensor values and define their threshold values.",
    items: [
      { label: "SQ-Panel", image: "/images/sq-panel/sq-panel-sideview.png" },
      { label: "SQ-Connector", image: "/images/sq-panel/connection.png" },
      { label: "Mobile app", image: "/images/sq-panel/mobile.png" },
    ],
  },
  operating: {
    heading: "Operating SQ-Panel",
    p1: "To get started with the SQ-Panel, first connect the SQ-Connector (gateway) to your home network using an Ethernet cable plugged into your router. Power the SQ-Connector with its USB power cable — this gateway creates a secure link between your local network and the Carenuity cloud, allowing your SQ-Panel to communicate over the internet.",
    p2: "Once the SQ-Connector is online, the SQ-Panel can send its sensor data like air quality, temperature, humidity, CO₂, TVOC, and presence through the gateway. Next, download and install the Carenuity Home app on your iOS or Android device. Use the app to create your account and add the SQ-Connector by following the in-app setup process.",
  },
  caseStudy: {
    heading: "Case study for SQ-Panel",
    cases: [
      {
        title: "Home office",
        desc: "Monitor CO₂ and air quality to maintain focus and productivity throughout the workday.",
      },
      {
        title: "Bedroom",
        desc: "Ensure optimal sleep conditions by tracking temperature, humidity, and air quality levels.",
      },
      {
        title: "Children's room",
        desc: "Keep children safe with continuous monitoring of air quality and environmental conditions.",
      },
      {
        title: "Large offices",
        desc: "Scale monitoring across open office spaces to ensure employee comfort and wellbeing.",
      },
      {
        title: "Vacation Home",
        desc: "Monitor your vacation home remotely and receive instant alerts about environmental changes.",
      },
      {
        title: "Kitchen and cooking",
        desc: "Track TVOC and CO₂ during cooking to ensure proper ventilation and healthy air quality.",
      },
      {
        title: "Relaxation in the front garden",
        desc: "Extend environmental awareness to semi-outdoor relaxation spaces for full comfort.",
      },
      {
        title: "Garage",
        desc: "Monitor air quality and presence in the garage to detect dangerous gas buildup early.",
      },
      {
        title: "Garden shed",
        desc: "Track temperature and humidity in your garden shed to protect stored tools and equipment.",
      },
      {
        title: "Guest comfort and indoor air quality:",
        desc: "The SQ-Panel monitors indoor air parameters such as temperature, humidity, CO2 and VOC. If your room is too warm or too stuffy, you can take timely action to improve the comfort of your guests.",
      },
      {
        title: "Energy efficiency and guest presence:",
        desc: "When guests leave the room, the device detects their absence. Users can now switch off the light or turn down the heating to save energy until guests return. The device provides information and ensures comfort.",
      },
      {
        title: "Security and notifications:",
        desc: "The SQ-Panel can notify you of all expected and unexpected events. For example, if a window is left open or if cooking is taking place in a room, you will receive a notification.",
      },
    ],
  },
  videos: {
    heading: "SQ-Panel videos",
    items: [
      { title: "Presenting the SQ-Panel", ytId: YT_IDS.video1 },
      { title: "Operating the display (demonstration)", ytId: YT_IDS.video2 },
      { title: "Learn about VOC", ytId: YT_IDS.video3 },
      { title: "Technology used.", ytId: YT_IDS.video4 },
    ],
  },
  shop: {
    heading: "Shop with us",
    productName: "Carenuity SQ-Panel – Your Intelligent Air Quality Display",
    desc: "The Carenuity SQ-Panel is an intelligent, remarkable air quality display for precise and continuous real-time monitoring of indoor climate.",
    buyNow: "Buy Now",
    evaluateAtHome: "Evaluate at Home",
  },
  award: {
    heading: "Award",
    sub: "Awarded the BSFZ Seal 2025 for Research & Development",
    desc: "The red BSFZ Seal, awarded by the Federal Republic of Germany, certifies that Carenuity conducts its own research and development. The SQ-Panel is officially recognized as a result of Innovative R&D. The BSFZ Seal is the German Certification Office for Research Grant Eligibility and is a quality mark of excellence. It demonstrates commitment to pioneering technology and sustained innovation in hardware development. It strengthens trust among customers, partners, and investors by signaling official recognition of innovation and credibility.",
  },
  docs: {
    heading: "Documentation",
    files: [
      {
        name: "Datasheet_SQ-Panel_V1.1.3 [PDF]",
        href: "/docs/datasheet/Datasheet_SQ-Panel_V1.1.3.pdf",
      },
      {
        name: "Datasheet_SQ-Power_V1.1.3 [PDF]",
        href: "/docs/datasheet/Datasheet_SQ-Power_V1.1.3.pdf",
      },
      {
        name: "Datasheet_SQ-Connector_V1.1.3 [PDF]",
        href: "/docs/datasheet/Datasheet_SQ-Connector_V1.1.3.pdf",
      },
      {
        name: "Declaration-of-Conformity V1.3.0 [PDF]",
        href: "/docs/declaration-of-conformity.pdf",
      },
      { name: "Leaflet V1.0.0 [PDF]", href: "/docs/leaflet/leaflet.pdf" },
      {
        name: "Manual-for-Commissioning V1.1.0 [PDF]",
        href: "/docs/Commissioning-en.pdf",
      },
      {
        name: "SQ-Panel User Guide [PDF]",
        href: "/docs/sq-panel-user-guide.pdf",
      },
    ],
    explore: "Explore SQ-Panel Technicalities →",
    exploreHref: "/sq-system/sq-panel/technicalities",
  },
};

const de = {
  hero: {
    headline: "Sehen Sie Ihre Luft. Spüren Sie den Unterschied.",
    subline:
      "Das SQ-Panel zeigt Echtzeit-Luftqualität und Anwesenheitsdaten an, damit Ihr Raum gesund und komfortabel bleibt.",
  },
  whatIs: {
    heading: "Was ist das SQ-Panel?",
    p1: "Das SQ-Panel ist eine intelligente Anzeigeeinheit mit integrierten Umgebungssensoren, die kontinuierlich die Bedingungen in Ihrem Innenraum messen. Es erfasst Faktoren wie Luftqualität und die Anwesenheit von Personen und vermittelt Ihnen ein klares, datengestütztes Bild Ihrer Umgebung.",
    p2: "Bei der Darstellung von Daten schützt das SQ-Panel aktiv Ihr Wohlbefinden. Wenn es Veränderungen erkennt, die Komfort oder Sicherheit beeinflussen könnten, gibt es zeitnahe Warnungen und visuelles Feedback.",
  },
  components: {
    heading: "Woraus besteht es?",
    intro:
      "Das Starter-Set des SQ-Panels besteht aus dem Display mit integrierten Sensoren zur Messung von Luftqualität und Anwesenheit, einem Connector für ein lokales Gateway sowie einer App (Apple oder Android), um das SQ-Panel in Betrieb zu nehmen.",
    items: [
      { label: "SQ-Panel", image: "/images/sq-panel/sq-panel-sideview.png" },
      { label: "SQ-Connector", image: "/images/sq-panel/connection.png" },
      { label: "Mobile App", image: "/images/sq-panel/mobile.png" },
    ],
  },
  operating: {
    heading: "SQ-Panel bedienen",
    p1: "Verbinden Sie zunächst den SQ-Connector (Gateway) über ein Ethernet-Kabel mit Ihrem Heimnetzwerk. Versorgen Sie den SQ-Connector mit dem USB-Netzkabel — dieses Gateway stellt eine sichere Verbindung zwischen Ihrem lokalen Netzwerk und der Carenuity-Cloud her.",
    p2: "Sobald der SQ-Connector online ist, kann das SQ-Panel seine Sensordaten wie Luftqualität, Temperatur, Luftfeuchtigkeit, CO₂, TVOC und Anwesenheit übertragen. Laden Sie anschließend die Carenuity Home-App herunter und richten Sie das System ein.",
  },
  caseStudy: {
    heading: "Fallstudien für das SQ-Panel",
    cases: [
      {
        title: "Heimarbeit",
        desc: "CO₂ und Luftqualität überwachen für Konzentration und Produktivität.",
      },
      {
        title: "Schlafzimmer",
        desc: "Optimale Schlafbedingungen durch Temperatur-, Feuchtigkeits- und Luftqualitätsüberwachung.",
      },
      {
        title: "Kinderzimmer",
        desc: "Kinder durch kontinuierliche Überwachung von Luftqualität und Umgebung schützen.",
      },
      {
        title: "Großraumbüros",
        desc: "Überwachung in großen Büroflächen für Komfort und Wohlbefinden der Mitarbeitenden.",
      },
      {
        title: "Ferienhaus",
        desc: "Ferienhaus aus der Ferne überwachen und Benachrichtigungen erhalten.",
      },
      {
        title: "Küche und Kochen",
        desc: "TVOC und CO₂ beim Kochen verfolgen für gute Belüftung und Luftqualität.",
      },
      {
        title: "Entspannung im Vorgarten",
        desc: "Umgebungsbewusstsein auf Außenbereiche ausweiten.",
      },
      {
        title: "Garage",
        desc: "Luftqualität und Anwesenheit in der Garage überwachen.",
      },
      {
        title: "Gartenhaus",
        desc: "Temperatur und Luftfeuchtigkeit im Gartenhaus verfolgen.",
      },
      {
        title: "Gastkomfort und Innenraumluftqualität:",
        desc: "Das SQ-Panel überwacht Innenluftparameter wie Temperatur, Luftfeuchtigkeit, CO2 und VOC. Wenn Ihr Zimmer zu warm oder zu stickig ist, können Sie rechtzeitig Maßnahmen ergreifen, um den Komfort Ihrer Gäste zu verbessern.",
      },
      {
        title: "Energieeffizienz und Anwesenheit der Gäste:",
        desc: "Wenn Gäste das Zimmer verlassen, erkennt das Gerät ihre Abwesenheit. Benutzer können nun das Licht ausschalten oder die Heizung herunterregeln, um Energie zu sparen, bis die Gäste zurückkehren. Das Gerät liefert Informationen und sorgt für Komfort.",
      },
      {
        title: "Sicherheit und Benachrichtigungen:",
        desc: "Das SQ-Panel kann Sie über alle erwarteten und unerwarteten Ereignisse informieren. Wenn zum Beispiel ein Fenster offen gelassen wird oder in einem Zimmer gekocht wird, erhalten Sie eine Benachrichtigung.",
      },
    ],
  },
  videos: {
    heading: "SQ-Panel Videos",
    items: [
      { title: "Das SQ-Panel vorstellen", ytId: YT_IDS.video1 },
      { title: "Display bedienen (Demonstration)", ytId: YT_IDS.video2 },
      { title: "Über VOC erfahren", ytId: YT_IDS.video3 },
      { title: "Verwendete Technologie", ytId: YT_IDS.video4 },
    ],
  },
  shop: {
    heading: "Bei uns einkaufen",
    productName: "Carenuity SQ-Panel – Ihr intelligentes Luftqualitätsdisplay",
    desc: "Das Carenuity SQ-Panel ist ein intelligentes Luftqualitätsdisplay für präzise und kontinuierliche Echtzeit-Überwachung des Innenraumklimas.",
    buyNow: "Jetzt kaufen",
    evaluateAtHome: "Zu Hause testen",
  },
  award: {
    heading: "Auszeichnung",
    sub: "Ausgezeichnet mit dem BSFZ-Siegel 2025 für Forschung & Entwicklung",
    desc: "Das rote BSFZ-Siegel, vergeben von der Bundesrepublik Deutschland, bestätigt, dass Carenuity eigene Forschung und Entwicklung betreibt. Das SQ-Panel ist offiziell als Ergebnis innovativer F&E anerkannt. Es stärkt das Vertrauen bei Kunden, Partnern und Investoren.",
  },
  docs: {
    heading: "Dokumentation",
    files: [
      {
        name: "Datasheet_SQ-Panel_V1.1.3 [PDF]",
        href: "/docs/datasheet/Datasheet_SQ-Panel_V1.1.3_de.pdf",
      },
      {
        name: "Datasheet_SQ-Power_V1.1.3 [PDF]",
        href: "/docs/datasheet/Datasheet_SQ-Power_V1.1.3_de.pdf",
      },
      {
        name: "Datasheet_SQ-Connector_V1.1.3 [PDF]",
        href: "/docs/datasheet/Datasheet_SQ-Connector_V1.1.3_de.pdf",
      },
      {
        name: "Konformitätserklärung V1.3.0 [PDF]",
        href: "/docs/declaration-de.pdf",
      },
      { name: "Flugblatt V1.0.0 [PDF]", href: "/docs/leaflet/leaflet_de.pdf" },
      {
        name: "Inbetriebnahme-Handbuch V1.1.0 [PDF]",
        href: "/docs/Commissioning-de.pdf",
      },
      {
        name: "SQ-Panel Benutzerhandbuch [PDF]",
        href: "/docs/sq-panel-user-guide.pdf",
      },
    ],
    explore: "SQ-Panel Technikdetails erkunden →",
    exploreHref: "/sq-system/sq-panel/technicalities",
  },
};

function YtThumbnail({ ytId, title }) {
  const href = `https://youtu.be/${ytId}`;
  const thumb = `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full overflow-hidden rounded-2xl bg-gray-900"
      style={{ aspectRatio: "16/9" }}
      aria-label={title}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={thumb}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/50">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-200 group-hover:scale-110">
          <svg
            className="ml-1 h-6 w-6 text-primary"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </a>
  );
}

export default function SqPanelClient() {
  const { lang } = useLanguage();
  const t = lang === "de" ? de : en;

  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-dark pt-[120px] md:pt-[100px] xl:pt-[140px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/sq-panel/hero2.png')" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 40%, transparent 55%)",
          }}
        />
        <div className="container relative">
          <nav className="flex items-center gap-2 pt-6 pb-4 text-sm">
            <Link
              href="/"
              className="text-gray-400 transition-colors hover:text-white"
            >
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <Link
              href="/sq-system"
              className="text-gray-400 transition-colors hover:text-white"
            >
              SQ-System
            </Link>
            <span className="text-gray-500">/</span>
            <span className="font-medium text-white">SQ-Panel</span>
          </nav>
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-6 pb-16 pt-4">
              <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                {t.hero.headline}
              </h1>
              <p className="text-lg leading-relaxed text-white/80 md:text-xl">
                {t.hero.subline}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What is SQ-Panel? ── */}
      <section className="bg-white py-16 dark:bg-gray-950">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-black dark:text-white md:text-4xl">
                {t.whatIs.heading}
              </h2>
              <p className="text-body-color dark:text-green mb-4 text-base leading-relaxed">
                {t.whatIs.p1}
              </p>
              <p className="text-body-color dark:text-green text-base leading-relaxed">
                {t.whatIs.p2}
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative h-[280px] w-[280px] md:h-[340px] md:w-[340px]">
                <Image
                  src="/images/sq-panel/sq-panel.png"
                  alt="SQ-Panel device"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Components ── */}
      <section className="bg-green-bg py-16 dark:bg-gray-900">
        <div className="container">
          <div className="grid grid-cols-12 gap-8">
            <h2 className="col-span-12 mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl">
              {t.components.heading}
            </h2>
            <p className="text-body-color dark:text-green col-span-12 mb-2 text-base leading-relaxed">
              {t.components.intro}
            </p>
            {t.components.items.map((item, i) => (
              <div
                key={i}
                className="shadow-two dark:shadow-three col-span-12 flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-gray-950 md:col-span-4"
              >
                <div className="relative h-[220px] w-full">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="pb-5 pt-4 text-center text-lg font-bold text-black dark:text-white">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Operating SQ-Panel ── */}
      <section className="bg-white py-16 dark:bg-gray-950">
        <div className="container">
          <h2 className="mb-8 text-3xl font-bold text-black dark:text-white md:text-4xl">
            {t.operating.heading}
          </h2>
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
            <div>
              <p className="text-body-color dark:text-green mb-4 text-base leading-relaxed">
                {t.operating.p1}
              </p>
              <p className="text-body-color dark:text-green text-base leading-relaxed">
                {t.operating.p2}
              </p>
            </div>
            <YtThumbnail ytId={YT_IDS.operating} title={t.operating.heading} />
          </div>
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section className="bg-green-bg py-16 dark:bg-gray-900">
        <div className="container">
          <h2 className="mb-10 text-3xl font-bold text-black dark:text-white md:text-4xl">
            {t.caseStudy.heading}
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.caseStudy.cases.map((c, i) => (
              <div
                key={i}
                className="shadow-two hover:shadow-one dark:shadow-three dark:hover:shadow-gray-dark flex flex-col overflow-hidden rounded-2xl bg-white duration-300 dark:bg-gray-950"
              >
                <div className="relative h-[180px] w-full overflow-hidden">
                  <Image
                    src={caseStudyImages[i]}
                    alt={c.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="mb-2 text-base font-bold text-black dark:text-white">
                    {c.title}
                  </h3>
                  <p className="text-body-color dark:text-green text-sm leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Videos ── */}
      <section className="bg-white py-16 dark:bg-gray-950">
        <div className="container">
          <h2 className="mb-10 text-3xl font-bold text-black dark:text-white md:text-4xl">
            {t.videos.heading}
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.videos.items.map((v, i) => (
              <div key={i} className="flex flex-col gap-3">
                <YtThumbnail ytId={v.ytId} title={v.title} />
                <p className="text-sm font-semibold leading-snug text-black dark:text-white">
                  {v.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Shop with us ── */}
      <section className="bg-green-bg py-16 dark:bg-gray-900">
        <div className="container">
          <h2 className="mb-8 text-3xl font-bold text-black dark:text-white md:text-4xl">
            {t.shop.heading}
          </h2>
          <div className="shadow-two dark:shadow-three rounded-2xl bg-white dark:bg-gray-950">
            <div className="grid grid-cols-12 items-center">
              {/* Image — 4 cols, flush to card edges */}
              <div className="col-span-12 md:col-span-4">
                <div className="relative h-[280px] w-full overflow-hidden rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
                  <Image
                    src="/images/sq-panel/sq-panel-frontview.png"
                    alt="SQ-Panel"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Text — 8 cols */}
              <div className="col-span-12 p-6 md:col-span-8 md:p-8">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white md:text-2xl">
                  {t.shop.productName}
                </h3>
                <p className="text-body-color dark:text-green mb-6 text-base leading-relaxed">
                  {t.shop.desc}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="shadow-btn bg-primary hover:bg-primary-light inline-block rounded-full px-8 py-3 text-base font-semibold text-white transition duration-300"
                  >
                    {t.shop.buyNow}
                  </Link>
                  <Link
                    href="/contact"
                    className="shadow-btn inline-block rounded-full border-2 border-primary px-8 py-3 text-base font-semibold text-primary transition duration-300 hover:bg-primary hover:text-white dark:border-green dark:text-green dark:hover:bg-primary dark:hover:text-white"
                  >
                    {t.shop.evaluateAtHome}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Award ── */}
      <section className="bg-white py-16 dark:bg-gray-950">
        <div className="container">
          <h2 className="mb-2 text-3xl font-bold text-black dark:text-white md:text-4xl">
            {t.award.heading}
          </h2>
          <p className="text-body-color dark:text-green mb-8 text-base font-medium">
            {t.award.sub}
          </p>
          <div className="shadow-two dark:shadow-three rounded-2xl bg-white dark:bg-gray-950">
            <div className="grid grid-cols-12 items-center">
              {/* Seal image — 4 cols */}
              <div className="col-span-12 md:col-span-4">
                <div className="flex h-[200px] items-center justify-center p-6">
                  <div className="relative h-[160px] w-[160px]">
                    <Image
                      src="/images/sq-panel/bsfz-siegel.png"
                      alt="BSFZ Seal 2025"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              {/* Description — 8 cols */}
              <div className="col-span-12 p-6 md:col-span-8 md:pl-0 md:pr-8 md:py-8">
                <p className="text-body-color dark:text-green text-base leading-relaxed">
                  {t.award.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Documentation ── */}
      <section className="bg-green-bg py-16 dark:bg-gray-900">
        <div className="container">
          <h2 className="mb-8 text-3xl font-bold text-black dark:text-white md:text-4xl">
            {t.docs.heading}
          </h2>
          <ul className="mb-8 space-y-3">
            {t.docs.files.map((f, i) => (
              <li key={i}>
                <a
                  href={f.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline dark:text-green"
                >
                  <svg
                    className="h-4 w-4 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  {f.name}
                </a>
              </li>
            ))}
          </ul>
          <Link
            href={t.docs.exploreHref}
            className="shadow-btn bg-primary hover:bg-primary-light inline-block rounded-full px-8 py-3 text-base font-semibold text-white transition duration-300"
          >
            {t.docs.explore}
          </Link>
        </div>
      </section>
    </main>
  );
}
