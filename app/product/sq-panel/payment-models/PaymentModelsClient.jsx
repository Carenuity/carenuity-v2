"use client";
import Link from "next/link";
import ProductSidebar from "../../../components/ProductSidebar";
import { useLanguage } from "../../../context/LanguageContext";

export default function PaymentModelsClient() {
  const { lang } = useLanguage();
  const en = lang === "en";

  const sections = [
    {
      en: { heading: "Purchase", body: "One-time payment: Pay the full price of the device in one go and it's yours immediately. This option is ideal for customers who want to pay the entire amount immediately and own the device without any further obligations. Installment payment: Pay off the price of the device in monthly installments. For a term of 1 year, the monthly rate is EUR 34.24. At for a term of 2 years, the monthly rate is EUR 17.55. With a term of 3 years, the monthly rate is EUR 11.99." },
      de: { heading: "Kauf", body: "Einmalzahlung: Zahle den vollen Preis des Geräts auf einmal und es gehört sofort dir. Diese Option ist ideal für Kunden, die den gesamten Betrag sofort begleichen möchten und das Gerät ohne weitere Verpflichtungen besitzen wollen. Ratenzahlung: Zahle den Preis des Geräts in monatlichen Raten ab. Bei einer Laufzeit von 1 Jahr beträgt die monatliche Rate 34,24 EUR. Bei einer Laufzeit von 2 Jahren beträgt die monatliche Rate 17,55 EUR. Bei einer Laufzeit von 3 Jahren beträgt die monatliche Rate 11,99 EUR." },
    },
    {
      en: { heading: "Rent", body: "Monthly Rental: Pay a monthly fee to use the device. The device remains the property of Carenuity. This option offers flexibility as you can return the device or exchange it for a newer model if necessary. For a term of 1 year, the monthly rent is EUR 34.24. With a term of 2 years, the monthly rent is EUR 17.55. With a term of 3 years, the monthly rent is EUR 11.99. MicroServices Processing: The management and billing of the monthly rent can be carried out efficiently via MicroServices, which enables quick adjustment and scaling." },
      de: { heading: "Miete", body: "Monatliche Miete: Zahle eine monatliche Gebühr für die Nutzung des Geräts. Das Gerät bleibt Eigentum von Carenuity. Diese Option bietet Flexibilität, da du das Gerät bei Bedarf zurückgeben oder gegen ein neueres Modell tauschen kannst. Bei einer Laufzeit von 1 Jahr beträgt die monatliche Miete 34,24 EUR. Bei einer Laufzeit von 2 Jahren beträgt die monatliche Miete 17,55 EUR. Bei einer Laufzeit von 3 Jahren beträgt die monatliche Miete 11,99 EUR. MicroServices Abwicklung: Die Verwaltung und Abrechnung der monatlichen Miete können effizient über MicroServices erfolgen, was eine schnelle Anpassung und Skalierung ermöglicht." },
    },
    {
      en: { heading: "Leasing", body: "Finance leasing: Pay monthly leasing installments and have the option of purchasing the device at a residual value at the end of the term. With a term of 1 year, the monthly leasing rate is EUR 34.24. With a term of 2 years the monthly leasing rate is EUR 17.55. With a term of 3 years, the monthly leasing rate is EUR 11.99. Operating lease: Pay monthly installments, but the device remains the property of Carenuity and is returned after the term. This option is ideal for customers who want regular access to the latest technologies without making a long-term commitment. MicroServices Processing: The processing of leasing installments and the management of contract conditions can be supported by MicroServices, which increases efficiency and adaptability." },
      de: { heading: "Leasing", body: "Finanzierungs-Leasing: Zahle monatliche Leasingraten und habe am Ende der Laufzeit die Möglichkeit, das Gerät zu einem Restwert zu kaufen. Bei einer Laufzeit von 1 Jahr beträgt die monatliche Leasingrate 34,24 EUR. Bei einer Laufzeit von 2 Jahren beträgt die monatliche Leasingrate 17,55 EUR. Bei einer Laufzeit von 3 Jahren beträgt die monatliche Leasingrate 11,99 EUR. Operating-Leasing: Zahle monatliche Raten, aber das Gerät bleibt Eigentum von Carenuity und wird nach der Laufzeit zurückgegeben. Diese Option ist ideal für Kunden, die regelmäßig auf neueste Technologien zugreifen möchten, ohne sich langfristig zu binden. MicroServices Abwicklung: Die Abwicklung der Leasingraten und die Verwaltung der Vertragsbedingungen können durch MicroServices unterstützt werden, was die Effizienz und Anpassungsfähigkeit erhöht." },
    },
    {
      en: { heading: "Hire Purchase", body: "Rent-to-own: A combination of renting and buying. Pay monthly installments and have the option to purchase the device at the end of the term at a reduced price. With a term of 1 year, the monthly rate is EUR 34.24. With a term of 2 years, the monthly rate is EUR 17.55. With a term of 3 years, the monthly rate is EUR 11.99. This option gives you the flexibility of renting with the option to ultimately own the unit." },
      de: { heading: "Mietkauf", body: "Mietkauf: Eine Kombination aus Miete und Kauf. Zahle monatliche Raten und habe am Ende der Laufzeit die Möglichkeit, das Gerät zu einem reduzierten Preis zu kaufen. Bei einer Laufzeit von 1 Jahr beträgt die monatliche Rate 34,24 EUR. Bei einer Laufzeit von 2 Jahren beträgt die monatliche Rate 17,55 EUR. Bei einer Laufzeit von 3 Jahren beträgt die monatliche Rate 11,99 EUR. Diese Option bietet dir die Flexibilität der Miete mit der Möglichkeit, das Gerät letztendlich zu besitzen." },
    },
  ];

  return (
    <main>
      <section className="relative overflow-hidden pt-[120px] md:pt-[100px] xl:pt-[140px]" style={{ background: "linear-gradient(135deg, #0f3520 0%, #174f2e 55%, #1e6b3e 100%)" }}>
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="container relative">
          <nav className="flex items-center gap-2 pt-6 pb-4 text-sm">
            <Link href="/" className="text-green-300/70 hover:text-green-300 transition-colors">{en ? "Home" : "Start"}</Link>
            <span className="text-green-300/40">/</span>
            <Link href="/products" className="text-green-300/70 hover:text-green-300 transition-colors">{en ? "Products" : "Produkte"}</Link>
            <span className="text-green-300/40">/</span>
            <span className="font-medium text-white">{en ? "Payment Models" : "Bezahlmodelle"}</span>
          </nav>
          <div className="pb-12 pt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
              <span className="text-xs font-semibold text-white tracking-wide uppercase">{en ? "Pricing & Payment" : "Preise & Zahlung"}</span>
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              {en ? "Carenuity Payment Models" : "Carenuity Bezahlmodelle"}
              <br /><span className="text-green-300">{en ? "Flexible Options for Every Need" : "Flexible Optionen für jeden Bedarf"}</span>
            </h1>
            <p className="text-lg leading-relaxed text-white/80 max-w-2xl">{en ? "Choose the payment model that works best for you." : "Wählen Sie das Bezahlmodell, das am besten zu Ihnen passt."}</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <ProductSidebar />
            <div className="flex-1 min-w-0 space-y-6">
              {sections.map((s) => (
                <div key={s.en.heading} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
                  <h2 className="text-xl font-bold text-[#0d2137] dark:text-white mb-3">{en ? s.en.heading : s.de.heading}</h2>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{en ? s.en.body : s.de.body}</p>
                </div>
              ))}

              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/product/sq-panel/launch-page" className="shadow-btn bg-primary hover:bg-primary-light rounded-full px-6 py-2.5 text-sm font-semibold text-white transition duration-300">
                  {en ? "Get the SQ-Panel now" : "SQ-Panel jetzt kaufen"}
                </Link>
                <Link href="/product/sq-panel/aqi-insights" className="rounded-full border border-primary px-6 py-2.5 text-sm font-semibold text-primary dark:text-green-400 hover:bg-primary/5 transition duration-300">
                  {en ? "Learn more on SQ-Panel" : "Mehr zum SQ-Panel"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
