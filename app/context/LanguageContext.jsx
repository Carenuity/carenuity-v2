"use client";
import { createContext, useContext, useState } from "react";

export const translations = {
  en: {
    nav: {
      home: "HOME",
      product: "PRODUCT",
      benefits: "BENEFITS",
      resources: "RESOURCES",
      install: "Install For Free",
      signin: "Sign In",
      signup: "Sign Up",
    },
    breadcrumb: { home: "Home" },
    hero: {
      line1: "Healthy, comfortable,",
      line2: "and connected",
      sub1: "Monitor air quality, presence, and more anytime,",
      sub2: "anywhere through the Carenuity app.",
    },
    home: {
      aboutTitle: "About us",
      aboutDesc:
        "Carenuity is an intelligent indoor monitoring solution designed to keep homes and loved ones safe, comfortable, and well-ventilated. Powered by advanced environmental sensors, the system tracks air quality, temperature, humidity, pressure, carbon dioxide (CO₂), TVOC levels, and presence in real time. Through the Carenuity mobile app, users can remotely monitor their space, receive insights, and stay connected from anywhere.",
      aboutBtn: "Learn More About Us",
      productsTitle: "Product Lines",
      productsDesc:
        "Flexible solutions designed for different needs — from premium, long-term systems to budget-friendly entry products.",
      whyTitle: "Why Carenuity",
      whyDesc:
        "Carenuity empowers you to monitor and improve your home environment, ensuring comfort, safety, and wellbeing for your loved ones with smart, easy-to-use IoT solutions.",
      awardTitle: "Award",
      awardDesc: "Awarded the BSFZ Seal 2025 for Research & Development",
      awardBody:
        "The red BSFZ Seal, awarded by the Federal Republic of Germany, certifies that Carenuity conducts its own research and development. The SQ-Panel is officially recognized as a result of innovative R&D. The BSFZ Seal is an official quality mark confirming that a product or project is based on research and development. It strengthens trust among customers, partners, and investors by signaling official recognition of innovation and credibility.",
      exploreSystem: "Explore SQ-System",
      exploreC3: "Explore C3-Mini Products",
      products: [
        {
          title: "SQ-System",
          paragraph:
            "A modular premium system for professional air quality monitoring. Designed for permanent installations, scalable environments and long-term use.",
          list: [
            "Modular & expandable",
            "Clean, discreet installation",
            "Privacy-friendly by design",
          ],
        },
        {
          title: "High-quality Design",
          paragraph:
            "Affordable entry solutions that are software-driven and flexible. Ideal for students, startups and developers who want to explore IoT.",
          list: [
            "Affordable entry solutions",
            "Software-driven & flexible",
            "Ideal for students, startups & developers",
          ],
        },
      ],
      whyItems: [
        {
          title: "Home & Families",
          paragraph: "Healthy indoor air for everyday living",
        },
        {
          title: "Offices & Businesses",
          paragraph: "Better air quality for productivity and wellbeing",
        },
        {
          title: "Care & Health",
          paragraph: "Reliable monitoring for sensitive environments",
        },
        {
          title: "Schools & Education",
          paragraph:
            "Modular solutions designed specifically for safe, smart, and well-ventilated learning environments.",
        },
        {
          title: "Home Challenge",
          paragraph:
            "Carenuity Home Challenge lets you build smart home devices and gain hands-on IoT skills.",
        },
      ],
    },
    testimonials: {
      title: "What Our Users Say",
      items: [
        {
          name: "Patrick",
          content:
            "I rely on the Carenuity SQ-Panel to track air quality and stay informed. The historical data is valuable for creating a safer living space.",
          star: 5,
        },
        {
          name: "Patricia",
          content:
            "The Carenuity SQ-Panel has made monitoring air quality simple and effective. The app's real-time alerts give me peace of mind about my family's health.",
          star: 5,
        },
      ],
    },
    sqSystem: {
      heading: "SQ-System",
      description:
        "The Carenuity SQ-System is a modular indoor monitoring solution made up of the SQ-Panel, SQ-Power, SQ-Connector, and SQ-Table Stand, designed to work together as one intelligent unit. At its core, the SQ-Panel houses advanced environmental sensors that continuously measure air quality, temperature, humidity, pressure, carbon dioxide (CO₂), TVOC levels, and presence. The SQ-Power ensures reliable energy supply, while the SQ-Connector enables seamless communication and integration with the Carenuity mobile app for real-time monitoring and commissioning.",
      videoTitle: "Videos showing SQ-Panel and SQ-Power",
      sqPanel: "SQ-Panel",
      sqPower: "SQ-Power",
      products: [
        {
          title: "SQ-Panel",
          paragraph:
            "The Carenuity SQ-Panel monitors air quality, temperature, humidity, pressure, CO₂, TVOC, and presence in real time, sending accurate indoor data to the Carenuity app for healthier, more comfortable spaces.",
          button: "Explore SQ-Panel",
        },
        {
          title: "SQ-Power",
          paragraph:
            "Carenuity SQ-Power is a compact in-wall power module that supplies stable 5 V DC to the SQ-Panel by fitting into a standard flush-mounted electrical box, enabling clean, cable-free installation.",
          button: "Explore SQ-Power",
        },
        {
          title: "SQ-TableStand",
          paragraph:
            "Carenuity SQ-Table Stand is a mobile table stand that lets the SQ-Panel operate anywhere without wall mounting. It provides a stable, rubber-base platform and USB-C power connection.",
          button: "Explore SQ-TableStand",
        },
        {
          title: "SQ-Connector",
          paragraph:
            "Carenuity SQ-Connector is the central gateway that links SQ-Panels to your local network and cloud, using reliable 868 MHz wireless communication and LAN connectivity.",
          button: "Explore SQ-Connector",
        },
      ],
    },
    about: {
      pageName: "About Page",
      pageDesc:
        "Learn about Carenuity and our mission to deliver intelligent indoor monitoring solutions for healthier living.",
      s1Title: "Crafted for Smart Homes, Health & Business.",
      s1Desc:
        "Carenuity was founded to make indoor air quality monitoring accessible and actionable for everyone — from families at home to professionals in demanding environments.",
      s1List: [
        "Premium quality sensors",
        "Tailwind CSS UI",
        "Use for lifetime",
        "Next.js powered",
        "Rich documentation",
        "Developer friendly",
      ],
      s2Items: [
        {
          title: "Advanced Sensing Technology",
          desc: "Our SQ-Panel uses cutting-edge sensors to measure CO₂, TVOC, temperature, humidity, pressure, and presence — all in one compact device.",
        },
        {
          title: "Privacy-first Architecture",
          desc: "Data stays local by default. We never sell your data, and our system is designed with privacy-friendly principles from the ground up.",
        },
        {
          title: "Award-winning Innovation",
          desc: "Recognized with the BSFZ Seal 2025 for Research & Development by the Federal Republic of Germany — a mark of certified innovation.",
        },
      ],
    },
    blog: {
      pageName: "Blog",
      pageDesc: "News, insights, and updates from the Carenuity team.",
      title: "Our Latest Articles",
      posts: [
        {
          id: 1,
          title: "Best UI components for modern websites",
          excerpt:
            "Discover the most impactful UI patterns for building clean, conversion-focused modern websites.",
          tag: "Design",
          date: "Jan 2025",
          readTime: "5 min read",
        },
        {
          id: 2,
          title: "9 simple ways to improve your design skills",
          excerpt:
            "Practical tips for designers of all skill levels to sharpen their craft and build stronger visual instincts.",
          tag: "Creative",
          date: "Feb 2025",
          readTime: "4 min read",
        },
        {
          id: 3,
          title: "Tips to quickly improve your coding speed",
          excerpt:
            "Boost your productivity with these battle-tested techniques for writing cleaner, faster code.",
          tag: "Development",
          date: "Mar 2025",
          readTime: "6 min read",
        },
      ],
    },
    contact: {
      pageName: "Contact",
      pageDesc: "Get in touch with us. We'd love to hear from you.",
      title: "Need Help? Open a Ticket",
      subtitle: "Our support team will get back to you ASAP via email.",
      namePlaceholder: "Enter your name",
      emailPlaceholder: "Enter your email",
      messagePlaceholder: "Enter your message",
      submitBtn: "Submit Ticket",
      newsletterTitle: "Don't miss a thing!",
      newsletterDesc:
        "Enter your email to get the latest news, feature updates and offers from Carenuity.",
      newsletterBtn: "Subscribe",
      yourName: "Your Name",
      yourEmail: "Your Email",
      yourMessage: "Your Message",
    },
    signin: {
      title: "Sign in to your account",
      subtitle: "Login to your account for a faster checkout.",
      google: "Sign in with Google",
      github: "Sign in with Github",
      or: "Or, sign in with your email",
      email: "Your Email",
      emailPh: "Enter your Email",
      password: "Your Password",
      passwordPh: "Enter your Password",
      remember: "Keep me signed in",
      forgot: "Forgot Password?",
      btn: "Sign in",
      noAccount: "Don't you have an account?",
      signupLink: "Sign up",
    },
    signup: {
      title: "Create your account",
      subtitle: "It's totally free and super easy",
      google: "Sign up with Google",
      github: "Sign up with Github",
      or: "Or, register with your email",
      name: "Full Name",
      namePh: "Enter your full name",
      email: "Work Email",
      emailPh: "Enter your Email",
      password: "Your Password",
      passwordPh: "Enter your Password",
      agree: "By creating account means you agree to the ",
      terms: "Terms and Conditions",
      and: ", and our ",
      privacy: "Privacy Policy",
      btn: "Sign up",
      hasAccount: "Already using Carenuity?",
      signinLink: "Sign in",
    },
    footer: {
      description:
        "Carenuity delivers modular sensor solutions for monitoring vital signs and indoor air quality. The SQ-Panel provides 24/7 vital and environmental sensing in one smart device.",
      contactTitle: "Contacts",
      city: "Munich",
      newsletterTitle: "Newsletter",
      newsletterText:
        "Subscribe to our newsletter to receive updates on the latest news!",
      subscribe: "Subscribe",
      payment: "Payment & Delivery",
      terms: "Terms & conditions",
      withdrawal: "Right of withdrawal",
      privacy: "Privacy Policy",
      legal: "Legal notice",
      copyright:
        "© 2026 ChipGlobe GmbH — ChipGlobe™ and Carenuity™ are Trademarks of ChipGlobe GmbH",
    },
  },
  de: {
    nav: {
      home: "START",
      product: "PRODUKT",
      benefits: "VORTEILE",
      resources: "RESSOURCEN",
      install: "Kostenlos installieren",
      signin: "Anmelden",
      signup: "Registrieren",
    },
    breadcrumb: { home: "Startseite" },
    hero: {
      line1: "Gesund, komfortabel,",
      line2: "und vernetzt",
      sub1: "Überwachen Sie Luftqualität, Anwesenheit und mehr jederzeit,",
      sub2: "überall über die Carenuity-App.",
    },
    home: {
      aboutTitle: "Über uns",
      aboutDesc:
        "Carenuity ist eine intelligente Innenraum-Überwachungslösung, die Häuser und Angehörige sicher, komfortabel und gut belüftet hält. Angetrieben von fortschrittlichen Umgebungssensoren verfolgt das System in Echtzeit Luftqualität, Temperatur, Luftfeuchtigkeit, Druck, CO₂, TVOC und Anwesenheit.",
      aboutBtn: "Mehr über uns erfahren",
      productsTitle: "Produktlinien",
      productsDesc:
        "Flexible Lösungen für verschiedene Anforderungen — von Premium-Langzeitsystemen bis hin zu budgetfreundlichen Einstiegsprodukten.",
      whyTitle: "Warum Carenuity",
      whyDesc:
        "Carenuity ermöglicht es Ihnen, Ihre Wohnumgebung zu überwachen und zu verbessern und dabei Komfort, Sicherheit und Wohlbefinden für Ihre Angehörigen zu gewährleisten.",
      awardTitle: "Auszeichnung",
      awardDesc:
        "Ausgezeichnet mit dem BSFZ-Siegel 2025 für Forschung & Entwicklung",
      awardBody:
        "Das rote BSFZ-Siegel, verliehen von der Bundesrepublik Deutschland, bescheinigt, dass Carenuity eigene Forschung und Entwicklung betreibt. Das SQ-Panel ist offiziell als Ergebnis innovativer F&E anerkannt.",
      exploreSystem: "SQ-System erkunden",
      exploreC3: "C3-Mini-Produkte erkunden",
      products: [
        {
          title: "SQ-System",
          paragraph:
            "Ein modulares Premium-System für professionelles Luftqualitätsmonitoring. Entwickelt für dauerhafte Installationen, skalierbare Umgebungen und langfristigen Einsatz.",
          list: [
            "Modular & erweiterbar",
            "Saubere, diskrete Installation",
            "Datenschutzfreundlich",
          ],
        },
        {
          title: "Hochwertige Designs",
          paragraph:
            "Erschwingliche Einstiegslösungen, die softwaregesteuert und flexibel sind. Ideal für Studenten, Startups und Entwickler.",
          list: [
            "Erschwingliche Einstiegslösungen",
            "Softwaregesteuert & flexibel",
            "Ideal für Studenten & Entwickler",
          ],
        },
      ],
      whyItems: [
        {
          title: "Zuhause & Familie",
          paragraph: "Gesunde Innenraumluft für den täglichen Alltag",
        },
        {
          title: "Büros & Unternehmen",
          paragraph: "Bessere Luftqualität für Produktivität und Wohlbefinden",
        },
        {
          title: "Pflege & Gesundheit",
          paragraph: "Zuverlässige Überwachung für sensible Umgebungen",
        },
        {
          title: "Schulen & Bildung",
          paragraph:
            "Modulare Lösungen für sichere, intelligente Lernumgebungen.",
        },
        {
          title: "Home Challenge",
          paragraph:
            "Die Carenuity Home Challenge ermöglicht es Ihnen, Smart-Home-Geräte zu bauen und IoT-Kenntnisse zu erwerben.",
        },
      ],
    },
    testimonials: {
      title: "Was unsere Nutzer sagen",
      items: [
        {
          name: "Patrick",
          content:
            "Ich verlasse mich auf das Carenuity SQ-Panel, um die Luftqualität zu verfolgen. Die historischen Daten sind wertvoll für eine sicherere Wohnumgebung.",
          star: 5,
        },
        {
          name: "Patricia",
          content:
            "Das Carenuity SQ-Panel hat die Überwachung der Luftqualität einfach und effektiv gemacht. Die Echtzeit-Benachrichtigungen der App geben mir Sicherheit.",
          star: 5,
        },
      ],
    },
    sqSystem: {
      heading: "SQ-System",
      description:
        "Das Carenuity SQ-System ist eine modulare Innenraumüberwachungslösung, bestehend aus SQ-Panel, SQ-Power, SQ-Connector und SQ-Table Stand. Das SQ-Panel beherbergt fortschrittliche Umgebungssensoren, die kontinuierlich Luftqualität, Temperatur, Luftfeuchtigkeit, Druck, CO₂, TVOC und Anwesenheit messen.",
      videoTitle: "Videos zum SQ-Panel und SQ-Power",
      sqPanel: "SQ-Panel",
      sqPower: "SQ-Power",
      products: [
        {
          title: "SQ-Panel",
          paragraph:
            "Das Carenuity SQ-Panel überwacht Luftqualität, Temperatur, Luftfeuchtigkeit, Druck, CO₂, TVOC und Anwesenheit in Echtzeit.",
          button: "SQ-Panel erkunden",
        },
        {
          title: "SQ-Power",
          paragraph:
            "Das Carenuity SQ-Power ist ein kompaktes Unterputz-Netzteilmodul, das dem SQ-Panel eine stabile 5-V-Gleichspannung liefert.",
          button: "SQ-Power erkunden",
        },
        {
          title: "SQ-TableStand",
          paragraph:
            "Der Carenuity SQ-Tischständer ist ein mobiler Tischständer, mit dem das SQ-Panel ohne Wandmontage überall betrieben werden kann.",
          button: "SQ-TableStand erkunden",
        },
        {
          title: "SQ-Connector",
          paragraph:
            "Der Carenuity SQ-Connector ist das zentrale Gateway, das SQ-Panels über 868-MHz-Drahtloskommunikation mit Ihrem Netzwerk und der Cloud verbindet.",
          button: "SQ-Connector erkunden",
        },
      ],
    },
    about: {
      pageName: "Über uns",
      pageDesc:
        "Erfahren Sie mehr über Carenuity und unsere Mission, intelligente Innenraum-Überwachungslösungen zu liefern.",
      s1Title: "Entwickelt für Smart Homes, Gesundheit & Unternehmen.",
      s1Desc:
        "Carenuity wurde gegründet, um die Überwachung der Innenraumluftqualität für alle zugänglich und umsetzbar zu machen.",
      s1List: [
        "Hochwertige Sensoren",
        "Tailwind CSS UI",
        "Lebenslang nutzbar",
        "Next.js-basiert",
        "Umfangreiche Dokumentation",
        "Entwicklerfreundlich",
      ],
      s2Items: [
        {
          title: "Fortschrittliche Sensortechnologie",
          desc: "Unser SQ-Panel verwendet Hochleistungssensoren zur Messung von CO₂, TVOC, Temperatur, Luftfeuchtigkeit, Druck und Anwesenheit.",
        },
        {
          title: "Datenschutz-Architektur",
          desc: "Daten bleiben standardmäßig lokal. Wir verkaufen Ihre Daten nie und unser System ist von Grund auf datenschutzfreundlich.",
        },
        {
          title: "Preisgekrönte Innovation",
          desc: "Ausgezeichnet mit dem BSFZ-Siegel 2025 für Forschung & Entwicklung — ein Zeichen zertifizierter Innovation.",
        },
      ],
    },
    blog: {
      pageName: "Blog",
      pageDesc: "Neuigkeiten, Einblicke und Updates vom Carenuity-Team.",
      title: "Unsere neuesten Artikel",
      posts: [
        {
          id: 1,
          title: "Beste UI-Komponenten für moderne Websites",
          excerpt:
            "Entdecken Sie die wirkungsvollsten UI-Muster für moderne Websites.",
          tag: "Design",
          date: "Jan 2025",
          readTime: "5 Min.",
        },
        {
          id: 2,
          title: "9 einfache Wege zur Verbesserung Ihrer Design-Fähigkeiten",
          excerpt: "Praktische Tipps für Designer aller Erfahrungsstufen.",
          tag: "Kreativ",
          date: "Feb 2025",
          readTime: "4 Min.",
        },
        {
          id: 3,
          title: "Tipps zur Verbesserung Ihrer Coding-Geschwindigkeit",
          excerpt:
            "Steigern Sie Ihre Produktivität mit diesen bewährten Techniken.",
          tag: "Entwicklung",
          date: "Mär 2025",
          readTime: "6 Min.",
        },
      ],
    },
    contact: {
      pageName: "Kontakt",
      pageDesc:
        "Nehmen Sie Kontakt mit uns auf. Wir freuen uns auf Ihre Nachricht.",
      title: "Hilfe benötigt? Ticket erstellen",
      subtitle: "Unser Support-Team meldet sich schnellstmöglich per E-Mail.",
      namePlaceholder: "Ihren Namen eingeben",
      emailPlaceholder: "E-Mail eingeben",
      messagePlaceholder: "Ihre Nachricht eingeben",
      submitBtn: "Ticket senden",
      newsletterTitle: "Nichts verpassen!",
      newsletterDesc:
        "Geben Sie Ihre E-Mail ein, um die neuesten Nachrichten und Angebote von Carenuity zu erhalten.",
      newsletterBtn: "Abonnieren",
      yourName: "Ihr Name",
      yourEmail: "Ihre E-Mail",
      yourMessage: "Ihre Nachricht",
    },
    signin: {
      title: "In Ihr Konto einloggen",
      subtitle: "Melden Sie sich für einen schnelleren Checkout an.",
      google: "Mit Google anmelden",
      github: "Mit Github anmelden",
      or: "Oder mit Ihrer E-Mail anmelden",
      email: "Ihre E-Mail",
      emailPh: "E-Mail eingeben",
      password: "Ihr Passwort",
      passwordPh: "Passwort eingeben",
      remember: "Angemeldet bleiben",
      forgot: "Passwort vergessen?",
      btn: "Anmelden",
      noAccount: "Noch kein Konto?",
      signupLink: "Registrieren",
    },
    signup: {
      title: "Konto erstellen",
      subtitle: "Völlig kostenlos und super einfach",
      google: "Mit Google registrieren",
      github: "Mit Github registrieren",
      or: "Oder mit Ihrer E-Mail registrieren",
      name: "Vollständiger Name",
      namePh: "Vollständigen Namen eingeben",
      email: "Geschäftliche E-Mail",
      emailPh: "E-Mail eingeben",
      password: "Ihr Passwort",
      passwordPh: "Passwort eingeben",
      agree: "Durch die Kontoerstellung stimmen Sie den ",
      terms: "Nutzungsbedingungen",
      and: " und unserer ",
      privacy: "Datenschutzrichtlinie",
      btn: "Registrieren",
      hasAccount: "Bereits bei Carenuity?",
      signinLink: "Anmelden",
    },
    footer: {
      description:
        "Carenuity liefert modulare Sensorlösungen zur Überwachung von Vitalzeichen und Innenraumluftqualität. Das SQ-Panel bietet 24/7 Erfassung in einem smarten Gerät.",
      contactTitle: "Kontakt",
      city: "München",
      newsletterTitle: "Newsletter",
      newsletterText:
        "Abonnieren Sie unseren Newsletter für die neuesten Nachrichten!",
      subscribe: "Abonnieren",
      payment: "Zahlung & Lieferung",
      terms: "AGB",
      withdrawal: "Widerrufsrecht",
      privacy: "Datenschutz",
      legal: "Impressum",
      copyright:
        "© 2026 ChipGlobe GmbH — ChipGlobe™ und Carenuity™ sind Marken der ChipGlobe GmbH",
    },
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
