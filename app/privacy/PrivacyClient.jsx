"use client";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

const H2 = ({ children }) => (
  <h2 className="mt-10 mb-3 text-xl sm:text-2xl font-bold text-black dark:text-white">
    {children}
  </h2>
);
const H3 = ({ children }) => (
  <h3 className="mt-6 mb-2 text-base font-semibold text-black dark:text-white">
    {children}
  </h3>
);
const P = ({ children }) => (
  <p className="mb-4 leading-relaxed text-body-color dark:text-gray-300">{children}</p>
);
const UL = ({ children }) => (
  <ul className="mb-4 list-disc space-y-2 pl-6 text-body-color dark:text-gray-300">
    {children}
  </ul>
);

export default function PrivacyClient() {
  const { lang } = useLanguage();
  const de = lang === "de";

  return (
    <main>
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-[120px] md:pt-[100px] xl:pt-[150px]"
        style={{
          background:
            "linear-gradient(135deg, #0a2417 0%, #0f3520 45%, #1e6b3e 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="container relative">
          <nav className="flex items-center gap-2 pt-6 pb-4 text-sm">
            <Link href="/" className="text-green-300/70 hover:text-green-300 transition-colors">
              {de ? "Start" : "Home"}
            </Link>
            <span className="text-green-300/40">/</span>
            <span className="font-medium text-white">
              {de ? "Datenschutz" : "Privacy Policy"}
            </span>
          </nav>
          <div className="max-w-3xl pb-20 pt-4">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              <span className="text-xs font-semibold uppercase tracking-wide text-white">
                GDPR · DSGVO
              </span>
            </div>
            <h1 className="text-4xl font-bold leading-[1.1] text-white sm:text-5xl">
              {de ? "Datenschutzerklärung" : "Privacy Policy"}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
              {de
                ? "Wie wir Ihre personenbezogenen Daten erheben, verwenden und schützen — gemäß DSGVO und BDSG."
                : "How we collect, use and protect your personal data — in accordance with the GDPR and the German Federal Data Protection Act (BDSG)."}
            </p>
          </div>
        </div>
        <svg className="block w-full" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
          <path className="fill-gray-50 dark:fill-gray-900" d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </section>

      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-2xl bg-white dark:bg-gray-800 p-8 sm:p-12 shadow-sm border border-gray-100 dark:border-gray-700">
            {de ? (
              <>
                <H2>1. Allgemeine Hinweise</H2>
                <P>
                  Der Schutz Ihrer persönlichen Daten ist uns, der Chipglobe GmbH, ein wichtiges
                  Anliegen. Personenbezogene Daten sind alle Informationen, mit denen Sie persönlich
                  identifiziert werden können. Diese Datenschutzerklärung erläutert, welche Daten wir
                  erheben, wie wir sie verwenden und welche Rechte Sie gemäß der
                  Datenschutz-Grundverordnung (DSGVO) und dem Bundesdatenschutzgesetz (BDSG) haben.
                </P>

                <H2>2. Erhebung von Daten</H2>
                <P>
                  Wir erheben personenbezogene Daten, wenn Sie unsere Website besuchen,
                  Kontaktformulare nutzen oder eingebettete Inhalte aufrufen. Dies kann umfassen:
                </P>
                <UL>
                  <li>IP-Adresse, Browsertyp und Version, Betriebssystem</li>
                  <li>Datum und Uhrzeit des Zugriffs, aufgerufene Seiten</li>
                  <li>Formulardaten (Name, E-Mail-Adresse, Nachricht)</li>
                  <li>Cookies und Analyseinformationen</li>
                  <li>Interaktionen mit Google-Diensten (Maps, YouTube, reCAPTCHA)</li>
                </UL>

                <H2>3. Rechtsgrundlagen der Verarbeitung</H2>
                <UL>
                  <li>Art. 6 Abs. 1 lit. a DSGVO – Einwilligung: z. B. bei Analyse-Cookies oder Newsletter.</li>
                  <li>Art. 6 Abs. 1 lit. b DSGVO – Vertragserfüllung: z. B. zur Bearbeitung von Anfragen oder Bestellungen.</li>
                  <li>Art. 6 Abs. 1 lit. c DSGVO – Rechtliche Verpflichtung: z. B. gesetzliche Aufbewahrungs- oder Nachweispflichten.</li>
                  <li>Art. 6 Abs. 1 lit. f DSGVO – Berechtigtes Interesse: z. B. zur Aufrechterhaltung der Funktionalität, Sicherheit oder Optimierung unserer Website.</li>
                </UL>

                <H2>4. Auftragsverarbeiter und Dritte</H2>
                <P>Wir setzen sorgfältig ausgewählte Dienstleister nach Art. 28 DSGVO ein:</P>
                <UL>
                  <li>Webhosting und E-Mail-Dienste (innerhalb der EU)</li>
                  <li>Google Analytics und YouTube (Google LLC, USA)</li>
                  <li>Google Maps API, reCAPTCHA und Google Web Fonts</li>
                </UL>
                <P>
                  Datenübermittlungen in Drittländer (z. B. USA) erfolgen ausschließlich auf
                  Grundlage der EU-Standardvertragsklauseln oder vergleichbarer Garantien gemäß
                  Art. 46 DSGVO.
                </P>

                <H2>5. Speicherdauer und Löschung</H2>
                <P>
                  Personenbezogene Daten werden nur so lange gespeichert, wie dies zur Erfüllung des
                  jeweiligen Zwecks erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.
                  Danach werden die Daten gemäß Art. 17 DSGVO gelöscht oder anonymisiert.
                </P>

                <H2>6. Ihre Rechte</H2>
                <UL>
                  <li>Auskunft (Art. 15 DSGVO)</li>
                  <li>Berichtigung (Art. 16 DSGVO)</li>
                  <li>Löschung („Recht auf Vergessenwerden“, Art. 17 DSGVO)</li>
                  <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                  <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                  <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
                  <li>
                    Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO): Bayerisches Landesamt für
                    Datenschutzaufsicht (BayLDA), Promenade 18, 91522 Ansbach, Deutschland –{" "}
                    <a href="https://www.lda.bayern.de" target="_blank" rel="noreferrer" className="text-primary dark:text-green-400 hover:underline">
                      www.lda.bayern.de
                    </a>
                  </li>
                </UL>

                <H2>7. Cookies und Einwilligung</H2>
                <P>
                  Unsere Website verwendet Cookies, um grundlegende Funktionen bereitzustellen, die
                  Nutzung der Website zu analysieren und die Leistung zu verbessern. Nicht technisch
                  notwendige Cookies werden nur nach Ihrer Einwilligung gesetzt. Sie können Ihre
                  Zustimmung jederzeit über die Cookie-Einstellungen am Seitenende ändern oder
                  widerrufen.
                </P>

                <H2>8. Analysedienste und Drittanbieter</H2>
                <H3>Google Analytics</H3>
                <P>Zur Analyse des Nutzerverhaltens. IP-Anonymisierung ist aktiviert. Widerspruch über: Google Analytics Opt-out.</P>
                <H3>YouTube</H3>
                <P>Beim Abspielen eingebetteter YouTube-Videos werden Daten an Google LLC übermittelt. Loggen Sie sich vorab aus Ihrem YouTube-Konto aus, um eine Zuordnung zu vermeiden.</P>
                <H3>Google Maps</H3>
                <P>Beim Aufruf von Karten werden IP- und Standortdaten an Google übermittelt. Nutzung erfolgt auf Grundlage berechtigter Interessen zur Darstellung von Standorten.</P>
                <H3>Google reCAPTCHA</H3>
                <P>Dient der Vermeidung von Spam-Eingaben. Übermittelt IP- und Interaktionsdaten an Google zur Prüfung.</P>
                <H3>Google Web Fonts</H3>
                <P>Zur einheitlichen Darstellung von Schriftarten werden diese von Google-Servern geladen. Dabei kann Ihre IP-Adresse an Google übertragen werden.</P>

                <H2>9. Datensicherheit</H2>
                <P>Wir setzen technische und organisatorische Maßnahmen ein, um Ihre Daten vor Verlust, Manipulation und unbefugtem Zugriff zu schützen.</P>

                <H2>10. Aktualität</H2>
                <P>
                  Diese Datenschutzerklärung wird regelmäßig überprüft und angepasst. Die jeweils
                  aktuelle Version finden Sie unter www.chipglobe.com/de/datenschutz.
                </P>
              </>
            ) : (
              <>
                <H2>1. General Information</H2>
                <P>
                  We, the operators of this website, take the protection of your personal data very
                  seriously. Personal data refers to all information that identifies you as an
                  individual. This Privacy Policy explains what data we collect, how we use it, and
                  what rights you have under the GDPR and German Federal Data Protection Act (BDSG).
                </P>

                <H2>2. Data Collection</H2>
                <P>Data is collected when you visit our website, use contact forms, or access embedded content. This may include:</P>
                <UL>
                  <li>IP address, browser type and version, operating system</li>
                  <li>Date and time of access, visited pages</li>
                  <li>Form data (name, email, message)</li>
                  <li>Cookies and analytics data</li>
                  <li>Interactions with Google services (Maps, YouTube, reCAPTCHA)</li>
                </UL>

                <H2>3. Legal Bases for Processing</H2>
                <UL>
                  <li>Art. 6(1)(a) GDPR – Consent: e.g. for analytics or newsletter.</li>
                  <li>Art. 6(1)(b) GDPR – Contract performance: for handling requests or orders.</li>
                  <li>Art. 6(1)(c) GDPR – Legal obligation: for retention or reporting duties.</li>
                  <li>Art. 6(1)(f) GDPR – Legitimate interests: to maintain functionality, security, or optimize services.</li>
                </UL>

                <H2>4. Processors and Third Parties</H2>
                <P>We use selected service providers according to Art. 28 GDPR:</P>
                <UL>
                  <li>Web hosting and email services (EU)</li>
                  <li>Google Analytics and YouTube (Google LLC, USA)</li>
                  <li>Google Maps API, reCAPTCHA, Google Web Fonts</li>
                </UL>
                <P>Transfers to third countries (e.g., USA) occur only under EU Standard Contractual Clauses or comparable safeguards.</P>

                <H2>5. Data Retention and Deletion</H2>
                <P>Personal data is retained only as long as necessary for its intended purpose or as required by law. Afterward, it is deleted or anonymized in accordance with Art. 17 GDPR.</P>

                <H2>6. Your Rights</H2>
                <UL>
                  <li>Access (Art. 15 GDPR)</li>
                  <li>Rectification (Art. 16 GDPR)</li>
                  <li>Erasure (&quot;right to be forgotten&quot;, Art. 17 GDPR)</li>
                  <li>Restriction of processing (Art. 18 GDPR)</li>
                  <li>Data portability (Art. 20 GDPR)</li>
                  <li>Objection to processing (Art. 21 GDPR)</li>
                  <li>
                    Complaint to a supervisory authority (Art. 77 GDPR) – Bavarian State Office for
                    Data Protection Supervision (BayLDA), Promenade 18, 91522 Ansbach, Germany –{" "}
                    <a href="https://www.lda.bayern.de" target="_blank" rel="noreferrer" className="text-primary dark:text-green-400 hover:underline">
                      www.lda.bayern.de
                    </a>
                  </li>
                </UL>

                <H2>7. Cookies and Consent</H2>
                <P>Our website uses cookies for essential, analytical, and performance purposes. Non-essential cookies are only activated after your consent, which you can withdraw or change anytime.</P>

                <H2>8. Analytics and Services</H2>
                <H3>Google Analytics</H3>
                <P>Used to analyze user behavior; IP anonymization is active. Opt-out via: Google Analytics Opt-out.</P>
                <H3>YouTube</H3>
                <P>Embedded videos use YouTube iFrame. Data is handled by Google under its privacy policy. Log out of your YouTube account to prevent association.</P>
                <H3>Google Maps</H3>
                <P>When using Maps, IP and location data are transmitted to Google. Use is based on legitimate interests for location display.</P>
                <H3>Google reCAPTCHA</H3>
                <P>Used to prevent spam. Sends IP and interaction data to Google for verification.</P>
                <H3>Google Web Fonts</H3>
                <P>Ensures consistent font display; your IP may be sent to Google servers.</P>

                <H2>9. Data Security</H2>
                <P>We use technical and organizational measures to protect your data against loss, manipulation, or unauthorized access.</P>

                <H2>10. Updates</H2>
                <P>This Privacy Policy is reviewed regularly. The latest version is always available at www.chipglobe.com/privacy.</P>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
