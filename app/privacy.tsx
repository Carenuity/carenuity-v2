import Head from 'next/head';
import PageTitle from '../components/PageTitle';
import { LanguageSwitchContext } from '../components/context/LanguageSwitch';
import Translatable from '../components/Translatable';
import { useContext } from 'react';

// const PrivacyPolicy = dynamic(() => import('../components/dynamic/Privacy'), {
//   ssr: false,
//   loading: () => <PageSpinner />,
// });

const Privacy = () => {
  const pageTitle = 'Privacy ';
  const { state } = useContext(LanguageSwitchContext);
  return (
    <>
      <Translatable />
      <Head>
        <meta
          name="keywords"
          content="Carenuity ChipGlobe Electronics Embedded Systems Privacy Policy"
        />
        <meta name="description" content="Real Estate Electronics Matter" />
      </Head>
      <title>{pageTitle}</title>
      <PageTitle
        links={[{ path: '/', title: 'Home' }]}
        pageTitle="Privacy Policy"
        pageUrl="/privacy"
      />

      {/* <PrivacyPolicy /> */}

      <section className="pt-4">
        <div className="container">
          <div className="row">
            {state === 'en' && (
              <>
                <div className="col-lg-8">
                  <h4>1. General Information</h4>
                  <p>
                    We, the operators of this website, take the protection of
                    your personal data very seriously. Personal data refers to
                    all information that identifies you as an individual. This
                    Privacy Policy explains what data we collect, how we use it,
                    and what rights you have under the GDPR and German Federal
                    Data Protection Act (BDSG).
                  </p>

                  <h4>2. Data Collection</h4>
                  <p>
                    Data is collected when you visit our website, use contact
                    forms, or access embedded content. This may include:
                  </p>
                  <ul>
                    <li>
                      IP address, browser type and version, operating system
                    </li>
                    <li>Date and time of access, visited pages</li>
                    <li>Form data (name, email, message)</li>
                    <li>Cookies and analytics data</li>
                    <li>
                      Interactions with Google services (Maps, YouTube,
                      reCAPTCHA)
                    </li>
                  </ul>

                  <h4>3. Legal Bases for Processing</h4>
                  <ul>
                    <li>
                      Art. 6(1)(a) GDPR – Consent: e.g. for analytics or
                      newsletter.
                    </li>
                    <li>
                      Art. 6(1)(b) GDPR – Contract performance: for handling
                      requests or orders.
                    </li>
                    <li>
                      Art. 6(1)(c) GDPR – Legal obligation: for retention or
                      reporting duties.
                    </li>
                    <li>
                      Art. 6(1)(f) GDPR – Legitimate interests: to maintain
                      functionality, security, or optimize services.
                    </li>
                  </ul>

                  <h4>4. Processors and Third Parties</h4>
                  <p>
                    We use selected service providers according to Art. 28 GDPR:
                  </p>
                  <ul>
                    <li>Web hosting and email services (EU)</li>
                    <li>Google Analytics and YouTube (Google LLC, USA)</li>
                    <li>Google Maps API, reCAPTCHA, Google Web Fonts</li>
                  </ul>
                  <p>
                    Transfers to third countries (e.g., USA) occur only under EU
                    Standard Contractual Clauses or comparable safeguards.
                  </p>

                  <h4>5. Data Retention and Deletion</h4>
                  <p>
                    Personal data is retained only as long as necessary for its
                    intended purpose or as required by law. Afterward, it is
                    deleted or anonymized in accordance with Art. 17 GDPR.
                  </p>

                  <h4>6. Your Rights</h4>
                  <ul>
                    <li>Access (Art. 15 GDPR)</li>
                    <li>Rectification (Art. 16 GDPR)</li>
                    <li>
                      Erasure (&quot;right to be forgotten&quot;, Art. 17 GDPR)
                    </li>
                    <li>Restriction of processing (Art. 18 GDPR)</li>
                    <li>Data portability (Art. 20 GDPR)</li>
                    <li>Objection to processing (Art. 21 GDPR)</li>
                    <li>
                      Complaint to a supervisory authority (Art. 77 GDPR) –
                      Bavarian State Office for Data Protection Supervision
                      (BayLDA), Promenade 18, 91522 Ansbach, Germany –
                      www.lda.bayern.de
                    </li>
                  </ul>

                  <h4>7. Cookies and Consent</h4>
                  <p>
                    Our website uses cookies for essential, analytical, and
                    performance purposes. Non-essential cookies are only
                    activated after your consent, which you can withdraw or
                    change anytime.
                  </p>

                  <h4>8. Analytics and Services</h4>
                  <h5>Google Analytics</h5>
                  <p>
                    Used to analyze user behavior; IP anonymization is active.
                    Opt-out via: Google Analytics Opt-out.
                  </p>

                  <h5>YouTube</h5>
                  <p>
                    Embedded videos use YouTube iFrame. Data is handled by
                    Google under its privacy policy. Log out of your YouTube
                    account to prevent association.
                  </p>

                  <h5>Google Maps</h5>
                  <p>
                    When using Maps, IP and location data are transmitted to
                    Google. Use is based on legitimate interests for location
                    display.
                  </p>

                  <h5>Google reCAPTCHA</h5>
                  <p>
                    Used to prevent spam. Sends IP and interaction data to
                    Google for verification.
                  </p>

                  <h5>Google Web Fonts</h5>
                  <p>
                    Ensures consistent font display; your IP may be sent to
                    Google servers.
                  </p>

                  <h4>9. Data Security</h4>
                  <p>
                    We use technical and organizational measures to protect your
                    data against loss, manipulation, or unauthorized access.
                  </p>

                  <h4>10. Updates</h4>
                  <p>
                    This Privacy Policy is reviewed regularly. The latest
                    version is always available at www.chipglobe.com/privacy.
                  </p>
                </div>
              </>
            )}
            {state === 'de' && (
              <>
                <div className="col-lg-8">
                  <h4>1. Allgemeine Hinweise</h4>
                  <p>
                    Der Schutz Ihrer persönlichen Daten ist uns, der Chipglobe
                    GmbH, ein wichtiges Anliegen. Personenbezogene Daten sind
                    alle Informationen, mit denen Sie persönlich identifiziert
                    werden können. Diese Datenschutzerklärung erläutert, welche
                    Daten wir erheben, wie wir sie verwenden und welche Rechte
                    Sie gemäß der Datenschutz-Grundverordnung (DSGVO) und dem
                    Bundesdatenschutzgesetz (BDSG) haben.
                  </p>

                  <h4>2. Erhebung von Daten</h4>
                  <p>
                    Wir erheben personenbezogene Daten, wenn Sie unsere Website
                    besuchen, Kontaktformulare nutzen oder eingebettete Inhalte
                    aufrufen. Dies kann umfassen:
                  </p>
                  <ul>
                    <li>IP-Adresse, Browsertyp und Version, Betriebssystem</li>
                    <li>Datum und Uhrzeit des Zugriffs, aufgerufene Seiten</li>
                    <li>Formulardaten (Name, E-Mail-Adresse, Nachricht)</li>
                    <li>Cookies und Analyseinformationen</li>
                    <li>
                      Interaktionen mit Google-Diensten (Maps, YouTube,
                      reCAPTCHA)
                    </li>
                  </ul>

                  <h4>3. Rechtsgrundlagen der Verarbeitung</h4>
                  <ul>
                    <li>
                      Art. 6 Abs. 1 lit. a DSGVO – Einwilligung: z. B. bei
                      Analyse-Cookies oder Newsletter.
                    </li>
                    <li>
                      Art. 6 Abs. 1 lit. b DSGVO – Vertragserfüllung: z. B. zur
                      Bearbeitung von Anfragen oder Bestellungen.
                    </li>
                    <li>
                      Art. 6 Abs. 1 lit. c DSGVO – Rechtliche Verpflichtung: z.
                      B. gesetzliche Aufbewahrungs- oder Nachweispflichten.
                    </li>
                    <li>
                      Art. 6 Abs. 1 lit. f DSGVO – Berechtigtes Interesse: z. B.
                      zur Aufrechterhaltung der Funktionalität, Sicherheit oder
                      Optimierung unserer Website.
                    </li>
                  </ul>

                  <h4>4. Auftragsverarbeiter und Dritte</h4>
                  <p>
                    Wir setzen sorgfältig ausgewählte Dienstleister nach Art. 28
                    DSGVO ein:
                  </p>
                  <ul>
                    <li>Webhosting und E-Mail-Dienste (innerhalb der EU)</li>
                    <li>Google Analytics und YouTube (Google LLC, USA)</li>
                    <li>Google Maps API, reCAPTCHA und Google Web Fonts</li>
                  </ul>
                  <p>
                    Datenübermittlungen in Drittländer (z. B. USA) erfolgen
                    ausschließlich auf Grundlage der EU-Standardvertragsklauseln
                    oder vergleichbarer Garantien gemäß Art. 46 DSGVO.
                  </p>

                  <h4>5. Speicherdauer und Löschung</h4>
                  <p>
                    Personenbezogene Daten werden nur so lange gespeichert, wie
                    dies zur Erfüllung des jeweiligen Zwecks erforderlich ist
                    oder gesetzliche Aufbewahrungsfristen bestehen. Danach
                    werden die Daten gemäß Art. 17 DSGVO gelöscht oder
                    anonymisiert.
                  </p>

                  <h4>6. Ihre Rechte</h4>
                  <ul>
                    <li>Auskunft (Art. 15 DSGVO)</li>
                    <li>Berichtigung (Art. 16 DSGVO)</li>
                    <li>
                      Löschung („Recht auf Vergessenwerden“, Art. 17 DSGVO)
                    </li>
                    <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                    <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                    <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
                    <li>
                      Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO):
                      Bayerisches Landesamt für Datenschutzaufsicht (BayLDA),
                      Promenade 18, 91522 Ansbach, Deutschland –
                      www.lda.bayern.de
                    </li>
                  </ul>

                  <h4>7. Cookies und Einwilligung</h4>
                  <p>
                    Unsere Website verwendet Cookies, um grundlegende Funktionen
                    bereitzustellen, die Nutzung der Website zu analysieren und
                    die Leistung zu verbessern. Nicht technisch notwendige
                    Cookies werden nur nach Ihrer Einwilligung gesetzt. Sie
                    können Ihre Zustimmung jederzeit über die
                    Cookie-Einstellungen am Seitenende ändern oder widerrufen.
                  </p>

                  <h4>8. Analysedienste und Drittanbieter</h4>
                  <h5>Google Analytics</h5>
                  <p>
                    Zur Analyse des Nutzerverhaltens. IP-Anonymisierung ist
                    aktiviert. Widerspruch über: Google Analytics Opt-out
                  </p>

                  <h5>YouTube</h5>
                  <p>
                    Beim Abspielen eingebetteter YouTube-Videos werden Daten an
                    Google LLC übermittelt. Loggen Sie sich vorab aus Ihrem
                    YouTube-Konto aus, um eine Zuordnung zu vermeiden.
                  </p>

                  <h5>Google Maps</h5>
                  <p>
                    Beim Aufruf von Karten werden IP- und Standortdaten an
                    Google übermittelt. Nutzung erfolgt auf Grundlage
                    berechtigter Interessen zur Darstellung von Standorten.
                  </p>

                  <h5>Google reCAPTCHA</h5>
                  <p>
                    Dient der Vermeidung von Spam-Eingaben. Übermittelt IP- und
                    Interaktionsdaten an Google zur Prüfung.
                  </p>

                  <h5>Google Web Fonts</h5>
                  <p>
                    Zur einheitlichen Darstellung von Schriftarten werden diese
                    von Google-Servern geladen. Dabei kann Ihre IP-Adresse an
                    Google übertragen werden.
                  </p>

                  <h4>9. Datensicherheit</h4>
                  <p>
                    Wir setzen technische und organisatorische Maßnahmen ein, um
                    Ihre Daten vor Verlust, Manipulation und unbefugtem Zugriff
                    zu schützen.
                  </p>

                  <h4>10. Aktualität</h4>
                  <p>
                    Diese Datenschutzerklärung wird regelmäßig überprüft und
                    angepasst. Die jeweils aktuelle Version finden Sie unter
                    www.chipglobe.com/de/datenschutz.
                  </p>
                </div>
              </>
            )}

            <div
              className="col-lg-4"
              style={{
                height: '135vh',
                backgroundColor: '#036437ff',
                color: '#ffffff',
                paddingTop: '20px',
              }}
            >
              {state === 'en' && (
                <>
                  <h3 className="h5 text-white">
                    <strong>
                      Information pursuant to Section 5 of the German Telemedia
                      Act (TMG):
                    </strong>
                  </h3>
                  <address>
                    <p>
                      CHIPGLOBE GmbH <br />
                      Cincinnatistrasse 60 <br />
                      81549 Munich, Germany <br />
                    </p>
                    <div>
                      Tel.:{' '}
                      <a
                        href="tel:+4989122246900"
                        className="text-white text-primary-hover"
                      >
                        <strong>+49 89 1222 469 00</strong>
                      </a>
                    </div>
                    <div>
                      Fax:{' '}
                      <a
                        href="tel:+4989122246969"
                        className="text-white text-primary-hover"
                      >
                        <strong>+49 89 1222 469 69</strong>
                      </a>
                    </div>
                    <div>
                      Email:{' '}
                      <a
                        href="mailto:info@chipglobe.com"
                        className="text-white text-primary-hover"
                      >
                        <strong>info@chipglobe.com</strong>
                      </a>
                    </div>
                  </address>
                  <div>
                    <p>
                      Commercial register: District Court of Munich
                      <br />
                      Commercial register number: HRB 209414
                      <br />
                      VAT Identification Number pursuant to Section 27a of the
                      German Value Added Tax Act: DE293062415
                      <br />
                      Registered under WEEE reg. no.: DE 53301452
                    </p>
                    {/* <p>
          Munich Commercial Register: <strong>HRB 209414</strong>
        </p>
        <p>
          VAT ID number pursuant to Section 27a of the German VAT Act (UStG):{' '}
          <strong>DE293062415</strong>
        </p> */}
                  </div>
                  <p>
                    <span>
                      <strong>
                        CEO / person responsible pursuant to the German Press
                        Act
                      </strong>
                      <br />
                      Volker Frisch
                    </span>
                    <br />
                    <span>
                      Phone:{' '}
                      <a
                        href="tel:+4989122246901"
                        className="text-white text-primary-hover"
                      >
                        +49 89 1222 469 01
                      </a>
                    </span>
                    <br />
                    <span>
                      Email:{' '}
                      <a
                        href="mailto:volker.frisch@chipglobe.com"
                        className="text-white text-primary-hover"
                      >
                        volker.frisch@chipglobe.com
                      </a>
                    </span>
                  </p>
                  <p>
                    <strong>
                      Responsible for content pursuant to Section 55 para. 2 of
                      the German Interstate Broadcasting Treaty (RStV):
                    </strong>{' '}
                    <br />
                    Volker Frisch
                  </p>
                </>
              )}

              {state === 'de' && (
                <>
                  <h3 className="h5 text-white">
                    <strong>Angaben gemäß § 5 TMG:</strong>
                  </h3>
                  <address>
                    <p>
                      CHIPGLOBE GmbH <br />
                      Cincinnatistr. 60 <br />
                      81549 München <br />
                    </p>
                    <div>
                      <div>
                        Tel.:{' '}
                        <a
                          href="tel:+4989122246900"
                          className="text-white text-primary-hover"
                        >
                          <strong>+49 89 1222 469 00</strong>
                        </a>
                      </div>
                      <div>
                        Fax:{' '}
                        <a
                          href="tel:+4989122246969"
                          className="text-white text-primary-hover"
                        >
                          <strong>+49 89 1222 469 69</strong>
                        </a>
                      </div>
                      <div>
                        Email:{' '}
                        <a
                          href="mailto:info@chipglobe.com"
                          className="text-white text-primary-hover"
                        >
                          <strong>info@chipglobe.com</strong>
                        </a>
                      </div>
                    </div>
                  </address>
                  <div>
                    <p>
                      Handelsregister: Amtsgericht München
                      <br />
                      Handelsregisternummer: HRB 209414
                      <br />
                      Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:
                      DE293062415
                      <br />
                      Registriert unter WEEE-Reg.-Nr.: DE 53301452
                    </p>
                    {/* <p>
          Handelsregister München: <strong>HRB 209414</strong>
        </p>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:{' '}
          <strong>DE293062415</strong>
        </p> */}
                  </div>
                  <p>
                    <span>
                      <strong>Geschäftsführung / V.i.S.d.P.</strong>
                      <br />
                      Volker Frisch
                    </span>
                    <br />
                    <span>
                      Telefon:{' '}
                      <a
                        href="tel:+4989122246901"
                        className="text-white text-primary-hover"
                      >
                        +49 89 1222 469 01
                      </a>
                    </span>
                    <br />
                    <span>
                      Email:{' '}
                      <a
                        href="mailto:volker.frisch@chipglobe.com"
                        className="text-white text-primary-hover"
                      >
                        volker.frisch@chipglobe.com
                      </a>
                    </span>
                  </p>
                  <p>
                    <strong>
                      Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
                    </strong>{' '}
                    <br />
                    Volker Frisch
                  </p>
                </>
              )}
            </div>

            {/* <div className="col-lg-8">
              {state === 'en' && (
                <>
                  <h4>1. Data Protection Overview</h4>

                  <h6>General Information</h6>
                  <p>
                    This Privacy Policy explains how Chipglobe GmbH (“we”, “us”,
                    “our”) collects, uses, and protects your personal data when
                    you visit our website or use our mobile app. Personal data
                    refers to any information relating to an identified or
                    identifiable natural person.
                  </p>

                  <h6>Who is responsible for data processing?</h6>
                  <p>
                    The data controller responsible for processing your personal
                    data is:
                  </p>
                  <p>
                    Chipglobe GmbH
                    <br />
                    Cincinnatistr. 60
                    <br />
                    81549 Munich, Germany
                    <br />
                    Phone: +49 89 1222 469 00
                    <br />
                    E-mail:{' '}
                    <a href="mailto:datenschutz@chipglobe.com">
                      datenschutz@chipglobe.com
                    </a>
                  </p>

                  <h6>How do we collect your data?</h6>
                  <ul>
                    <li>
                      <strong>Data you provide:</strong> Information you enter
                      in a contact form, when registering for an account,
                      submitting inquiries, or using the app.
                    </li>
                    <li>
                      <strong>Data collected automatically:</strong> Technical
                      information such as IP address, device type, operating
                      system, browser or app version, and access time is
                      automatically collected when you visit our website or use
                      our app.
                    </li>
                  </ul>

                  <h6>What do we use your data for?</h6>
                  <ul>
                    <li>To ensure proper operation of our website and app.</li>
                    <li>
                      To provide and improve our services and user experience.
                    </li>
                    <li>
                      To communicate with you (e.g., support, inquiries, or
                      contractual matters).
                    </li>
                    <li>To comply with legal obligations.</li>
                  </ul>

                  <h6>Your rights regarding your data</h6>
                  <ul>
                    <li>Access, rectify, or erase your personal data.</li>
                    <li>Restrict or object to data processing.</li>
                    <li>Withdraw your consent at any time.</li>
                    <li>Request data portability.</li>
                    <li>Lodge a complaint with a supervisory authority.</li>
                  </ul>

                  <h4>2. General Information and Legal Basis</h4>

                  <h6>Data Protection Commitment</h6>
                  <p>
                    We take the protection of your personal data very seriously.
                    We treat your information confidentially and in accordance
                    with applicable data protection laws, including the EU
                    General Data Protection Regulation (GDPR) and the German
                    Federal Data Protection Act (BDSG).
                  </p>

                  <h6>Legal Basis for Processing</h6>
                  <p>
                    Data processing is carried out in accordance with Article
                    6(1) GDPR:
                  </p>
                  <ul>
                    <li>(a) with your consent,</li>
                    <li>
                      (b) for the performance of a contract or pre-contractual
                      measures,
                    </li>
                    <li>(c) to comply with legal obligations,</li>
                    <li>
                      (d) for legitimate interests such as service improvement
                      and IT security.
                    </li>
                  </ul>

                  <h6>Withdrawal of Consent</h6>
                  <p>
                    You may withdraw any consent you have given at any time by
                    sending us an informal email. The lawfulness of processing
                    prior to withdrawal remains unaffected.
                  </p>

                  <h6>Right to Lodge a Complaint</h6>
                  <p>
                    If you believe that your data has been processed unlawfully,
                    you have the right to file a complaint with the competent
                    data protection authority. A list of supervisory authorities
                    is available at:
                    <br />
                    <a
                      href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html
                    </a>
                  </p>

                  <h6>Data Portability</h6>
                  <p>
                    You have the right to receive the personal data you have
                    provided in a machine-readable format or to have it
                    transmitted to another controller, where technically
                    feasible.
                  </p>

                  <h6>Encryption and Security</h6>
                  <p>
                    Our website and app use modern encryption (TLS 1.3) and
                    additional security measures to protect data transmissions.
                    We also perform regular security assessments to prevent
                    unauthorized access or data loss.
                  </p>

                  <h4>3. Data Collection on Our Website and App</h4>

                  <h6>Cookies and Local Storage</h6>
                  <p>
                    We use cookies and similar technologies (e.g., local
                    storage) to store session data, preferences, and login
                    information. Upon your first visit or app launch, you can
                    select which categories of cookies to allow (necessary,
                    functional, analytics, marketing).
                  </p>

                  <h6>Server Log Files</h6>
                  <p>
                    Each access to our website or app automatically generates
                    log data, including:
                  </p>
                  <ul>
                    <li>Device type and operating system</li>
                    <li>Browser type or app version</li>
                    <li>Referrer URL</li>
                    <li>Hostname of the accessing device</li>
                    <li>Server request time</li>
                    <li>Anonymized IP address</li>
                  </ul>
                  <p>
                    These data are required for the technical operation, system
                    security, and error diagnosis of our services.
                  </p>

                  <h6>Contact and Support Forms</h6>
                  <p>
                    When you contact us via form, email, or through the app, we
                    process your data to handle your request. Processing is
                    based on your consent (Art. 6(1)(a) GDPR) or, if related to
                    a contract, Art. 6(1)(b) GDPR.
                  </p>

                  <h4>4. Analytics and Tracking Technologies</h4>

                  <h6>Google Analytics 4</h6>
                  <p>
                    We use Google Analytics 4 with IP anonymization to analyze
                    usage and improve performance. Data may be transferred to
                    Google LLC in the United States under the EU-US Data Privacy
                    Framework. You can opt out using the browser add-on:
                    <br />
                    <a
                      href="https://tools.google.com/dlpage/gaoptout?hl=en"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://tools.google.com/dlpage/gaoptout?hl=en
                    </a>
                  </p>

                  <h6>Firebase Analytics (Mobile App)</h6>
                  <p>
                    Our mobile app uses Firebase Analytics (Google LLC) to
                    collect anonymous statistics on app usage, crashes, and
                    performance to enhance user experience. These data do not
                    identify you personally.
                  </p>

                  <h4>5. Plugins and External Services</h4>

                  <h6>YouTube</h6>
                  <p>
                    Our website and app may embed YouTube content. Provider:
                    YouTube LLC, 901 Cherry Ave., San Bruno, CA 94066, USA. Data
                    transmission to YouTube occurs only after you consent to it
                    (Art. 6(1)(a) GDPR).
                  </p>

                  <h6>Google Maps / Apple Maps</h6>
                  <p>
                    For location features in our app, we use mapping services
                    such as Google Maps or Apple Maps. Your IP address and
                    device location are transmitted only if you have granted
                    permission.
                  </p>

                  <h6>Push Notifications (App)</h6>
                  <p>
                    If you enable push notifications, we store an anonymous
                    device token to send relevant updates. You can disable
                    notifications at any time in your app settings.
                  </p>

                  <h4>6. Data Retention</h4>
                  <p>
                    We retain personal data only as long as necessary to fulfill
                    the purposes described above or as required by law. Once the
                    purpose ceases or retention periods expire, data are deleted
                    or anonymized.
                  </p>

                  <h4>7. Updates to This Privacy Policy</h4>
                  <p>
                    We may update this Privacy Policy to reflect legal changes
                    or improvements in our services. Any significant updates
                    will be communicated through our app or on our website.
                  </p>

                  <h4>8. Contact for Data Protection Matters</h4>
                  <p>
                    If you have questions or concerns about data protection,
                    please contact us:
                  </p>
                  <p>
                    Chipglobe GmbH
                    <br />
                    Attn: Data Protection Officer
                    <br />
                    Cincinnatistr. 60, 81549 Munich, Germany
                    <br />
                    E-mail:{' '}
                    <a href="mailto:datenschutz@chipglobe.com">
                      datenschutz@chipglobe.com
                    </a>
                    <br />
                    Phone: +49 89 1222 469 00
                  </p>
                </>
              )}
              {state === 'de' && (
                <>
                  <div>
                    <h4>1. Datenschutz auf einen Blick</h4>

                    <h6>Allgemeine Hinweise</h6>
                    <p>
                      Diese Datenschutzerklärung informiert Sie darüber, wie die
                      Chipglobe GmbH („wir“, „uns“, „unser“) Ihre
                      personenbezogenen Daten verarbeitet, wenn Sie unsere
                      Website besuchen oder unsere mobile App verwenden.
                      Personenbezogene Daten sind alle Informationen, die sich
                      auf eine identifizierte oder identifizierbare natürliche
                      Person beziehen.
                    </p>

                    <h6>Verantwortlicher für die Datenverarbeitung</h6>
                    <p>
                      Chipglobe GmbH
                      <br />
                      Cincinnatistr. 60
                      <br />
                      81549 München, Deutschland
                      <br />
                      Telefon: +49 89 1222 469 00
                      <br />
                      E-Mail:{' '}
                      <a href="mailto:datenschutz@chipglobe.com">
                        datenschutz@chipglobe.com
                      </a>
                    </p>

                    <h4>
                      2. Erhebung und Verarbeitung personenbezogener Daten
                    </h4>

                    <h6>Wie erfassen wir Ihre Daten?</h6>
                    <ul>
                      <li>
                        <strong>Von Ihnen bereitgestellte Daten:</strong> z. B.
                        beim Ausfüllen von Formularen, bei der Registrierung,
                        bei Supportanfragen oder bei der Nutzung der App.
                      </li>
                      <li>
                        <strong>Automatisch erfasste Daten:</strong> Technische
                        Informationen wie IP-Adresse, Gerätetyp, Betriebssystem,
                        Browser- bzw. App-Version, Zugriffszeit oder
                        Absturzdaten.
                      </li>
                    </ul>

                    <h6>Zweck der Datenverarbeitung</h6>
                    <ul>
                      <li>
                        Gewährleistung des technischen Betriebs unserer Website
                        und App
                      </li>
                      <li>
                        Verbesserung unserer Dienste und Benutzerfreundlichkeit
                      </li>
                      <li>
                        Kommunikation mit Ihnen (z. B. Support,
                        Vertragsabwicklung, Anfragen)
                      </li>
                      <li>Erfüllung gesetzlicher Verpflichtungen</li>
                    </ul>

                    <h6>Ihre Rechte</h6>
                    <ul>
                      <li>Auskunft, Berichtigung oder Löschung Ihrer Daten</li>
                      <li>Einschränkung oder Widerspruch der Verarbeitung</li>
                      <li>Widerruf Ihrer Einwilligung</li>
                      <li>Datenübertragbarkeit</li>
                      <li>Beschwerde bei einer Aufsichtsbehörde</li>
                    </ul>

                    <h4>3. Rechtliche Grundlagen und Datensicherheit</h4>

                    <h6>Rechtsgrundlage der Verarbeitung</h6>
                    <p>Die Verarbeitung erfolgt nach Art. 6 Abs. 1 DSGVO:</p>
                    <ul>
                      <li>(a) mit Ihrer Einwilligung</li>
                      <li>
                        (b) zur Vertragserfüllung oder vorvertraglichen
                        Maßnahmen
                      </li>
                      <li>(c) zur Erfüllung rechtlicher Verpflichtungen</li>
                      <li>
                        (d) aufgrund berechtigter Interessen (z. B. Verbesserung
                        des Services, IT-Sicherheit)
                      </li>
                    </ul>

                    <h6>Widerruf der Einwilligung</h6>
                    <p>
                      Sie können eine erteilte Einwilligung jederzeit
                      widerrufen. Die Rechtmäßigkeit der bis zum Widerruf
                      erfolgten Verarbeitung bleibt unberührt.
                    </p>

                    <h6>Beschwerderecht bei der Aufsichtsbehörde</h6>
                    <p>
                      Im Falle datenschutzrechtlicher Verstöße steht Ihnen ein
                      Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                      Eine Übersicht finden Sie hier:
                      <br />
                      <a
                        href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html
                      </a>
                    </p>

                    <h6>Datenübertragbarkeit</h6>
                    <p>
                      Sie haben das Recht, Daten, die Sie uns bereitgestellt
                      haben, in einem maschinenlesbaren Format zu erhalten oder
                      an Dritte übertragen zu lassen.
                    </p>

                    <h6>Verschlüsselung und Sicherheit</h6>
                    <p>
                      Unsere Website und App verwenden TLS 1.3-Verschlüsselung
                      und moderne Sicherheitsmechanismen. Wir führen regelmäßige
                      Sicherheitsüberprüfungen durch, um Daten vor unbefugtem
                      Zugriff oder Verlust zu schützen.
                    </p>

                    <h4>4. Datenerfassung auf Website und App</h4>

                    <h6>Cookies und Local Storage</h6>
                    <p>
                      Wir verwenden Cookies und ähnliche Technologien (z. B.
                      Local Storage), um Sitzungsdaten, Einstellungen und
                      Anmeldungen zu speichern. Beim ersten Besuch oder Start
                      der App können Sie festlegen, welche Kategorien
                      (notwendig, funktional, Analyse, Marketing) Sie zulassen
                      möchten.
                    </p>

                    <h6>Server-Log-Dateien</h6>
                    <p>
                      Bei jedem Zugriff werden automatisch folgende Daten
                      erfasst:
                    </p>
                    <ul>
                      <li>Gerätetyp, Betriebssystem und Browser/App-Version</li>
                      <li>Referrer-URL</li>
                      <li>Hostname des zugreifenden Geräts</li>
                      <li>Zeitpunkt der Serveranfrage</li>
                      <li>Anonymisierte IP-Adresse</li>
                    </ul>
                    <p>
                      Diese Daten dienen ausschließlich der technischen
                      Bereitstellung, Systemsicherheit und Fehleranalyse.
                    </p>

                    <h6>Kontaktformulare und Supportanfragen</h6>
                    <p>
                      Wenn Sie uns per Formular, E-Mail oder App kontaktieren,
                      verarbeiten wir Ihre Angaben zur Bearbeitung Ihrer
                      Anfrage. Rechtsgrundlage: Ihre Einwilligung (Art. 6 Abs. 1
                      lit. a DSGVO) oder bei vertraglichem Bezug Art. 6 Abs. 1
                      lit. b DSGVO.
                    </p>

                    <h4>5. Analyse- und Tracking-Technologien</h4>

                    <h6>Google Analytics 4</h6>
                    <p>
                      Unsere Website nutzt Google Analytics 4 mit
                      IP-Anonymisierung zur Analyse und Verbesserung der
                      Nutzung. Datenübertragung an Google LLC (USA) erfolgt im
                      Rahmen des EU-US Data Privacy Framework.
                      <br />
                      Opt-out:{' '}
                      <a
                        href="https://tools.google.com/dlpage/gaoptout?hl=de"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://tools.google.com/dlpage/gaoptout?hl=de
                      </a>
                    </p>

                    <h6>Firebase Analytics (App)</h6>
                    <p>
                      Unsere App verwendet Firebase Analytics (Google LLC) zur
                      anonymisierten Nutzungsanalyse, Fehlerdiagnose und
                      Leistungsoptimierung. Personenbezogene Identifizierung
                      erfolgt nicht.
                    </p>

                    <h4>6. Externe Dienste und Plugins</h4>

                    <h6>YouTube</h6>
                    <p>
                      Unsere Website und App können Inhalte von YouTube
                      einbetten. Anbieter: YouTube LLC, 901 Cherry Ave., San
                      Bruno, CA 94066, USA. Eine Datenübertragung an YouTube
                      erfolgt erst nach Ihrer Zustimmung (Art. 6 Abs. 1 lit. a
                      DSGVO).
                    </p>

                    <h6>Google Maps / Apple Maps</h6>
                    <p>
                      Für Standortfunktionen unserer App nutzen wir
                      Kartendienste wie Google Maps oder Apple Maps. IP-Adresse
                      und Standortdaten werden nur bei erteilter Zustimmung
                      übertragen.
                    </p>

                    <h6>Push-Benachrichtigungen (App)</h6>
                    <p>
                      Wenn Sie Push-Nachrichten aktivieren, speichern wir ein
                      anonymes Geräte-Token, um Ihnen relevante Mitteilungen zu
                      senden. Sie können Benachrichtigungen jederzeit in den
                      App-Einstellungen deaktivieren.
                    </p>

                    <h4>7. Speicher- und Löschfristen</h4>
                    <p>
                      Wir speichern personenbezogene Daten nur so lange, wie es
                      für den jeweiligen Zweck erforderlich ist oder gesetzliche
                      Aufbewahrungsfristen bestehen. Nach Wegfall des Zwecks
                      oder Ablauf der Frist werden die Daten gelöscht oder
                      anonymisiert.
                    </p>

                    <h4>8. Änderungen dieser Datenschutzerklärung</h4>
                    <p>
                      Diese Datenschutzerklärung kann bei rechtlichen Änderungen
                      oder technischen Anpassungen aktualisiert werden. Über
                      wesentliche Änderungen informieren wir Sie auf unserer
                      Website oder innerhalb der App.
                    </p>

                    <h4>9. Kontakt Datenschutz</h4>
                    <p>
                      Chipglobe GmbH
                      <br />
                      Datenschutzbeauftragter
                      <br />
                      Cincinnatistr. 60
                      <br />
                      81549 München, Deutschland
                      <br />
                      E-Mail:{' '}
                      <a href="mailto:datenschutz@chipglobe.com">
                        datenschutz@chipglobe.com
                      </a>
                      <br />
                      Telefon: +49 89 1222 469 00
                    </p>
                  </div>
                </>
              )}
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Privacy;
