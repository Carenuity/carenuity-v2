"use client";
import { createContext, useContext, useState } from "react";

export const translations = {
  en: {
    nav: {
      home: "HOME",
      product: "PRODUCT",
      benefits: "BENEFITS",
      resources: "RESOURCES",
      helpCenter: "Help Center",
      programs: "Programs/Guides/API Keys",
      blogs: "Blogs",
      team: "Team",
      about: "About Us",
      contact: "Contact Us",
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
      pageName: "About Us",
      pageDesc:
        "Carenuity provides modular and highly customizable sensor solutions for monitoring vital signs and real estate air quality.",
      badge: "Who We Are",
      heroHeadline: "Learn More About Us",
      heroSubline:
        "Discover our mission, our technology, and the innovation driving smarter, safer, and more connected care solutions.",
      introTitle: "About Us",
      heroTitle:
        "Carenuity provides modular and highly customizable sensor solutions designed to monitor vital signs and real estate air quality with precision and reliability. By combining advanced sensing technology with flexible system design, these solutions adapt seamlessly to different environments—whether in residential spaces, healthcare settings, or smart buildings. The focus is on delivering real-time insights that support healthier living, improved safety, and smarter decision-making.",
      heroDesc:
        "A premium and widely adopted solution is the SQ-Panel, built to deliver continuous peace of mind through 24/7 monitoring of both vital and environmental conditions. With its intelligent sensing capabilities and integrated care features, the SQ-Panel ensures that critical data is always available when it matters most, enabling a safer, more responsive, and connected living environment.",
      missionTitle: "Our Mission",
      missionDesc:
        "Our Mission is to provide all young and caregiving people with especially easy-to-use sensor-systems that allow them to monitor vital signs and indoor air quality parameters for their elderly family members.",
      visionTitle: "Our Vision",
      visionDesc:
        "Empower young and caregiving people with innovative and accessible technology solutions that enhance the safety, comfort, and well-being of elderly individuals, enabling them to age in place with dignity, privacy and independence.",
      overviewTitle: "What We Do",
      overviewDesc:
        "Carenuity is a smart home health-tech solution by ChipGlobe GmbH. Our core product, the SQ-Panel, captures CO₂, TVOC, temperature, humidity, air pressure, and presence detection. The system supports Matter compatibility with Alexa, Google Home, and Apple HomeKit integration.",
      overviewList: [
        "SQ-Panel Sensor Display",
        "SQ-Connector Matter",
        "SQ-Power Supply",
        "SQ-TableStand",
        "C3-Mini Sensor Kits",
        "Carenuity Home App (iOS/Android)",
        "Solution Builder (web-based)",
      ],
      educationTitle: "Educational Initiatives",
      educationDesc:
        "Carenuity supports student development through the Home Challenge initiative, teaching IoT sensor setup, data analysis, and custom solution building.",
      brandTitle: "Brand Presence",
      brandDesc: "Find us across the maker and developer ecosystem:",
      brands: [
        {
          name: "Hackster.io",
          desc: "Project integrations and maker community",
        },
        { name: "GitHub", desc: "Firmware and API code" },
        { name: "YouTube", desc: "Unboxing, setup and tutorial videos" },
        { name: "Thingiverse", desc: "3D-printable mounting designs" },
        {
          name: "Instagram",
          desc: "@carenuity · @diy_carenuity · @bts_carenuity",
        },
        { name: "LinkedIn", desc: "Company updates and professional network" },
      ],
      instagramTitle: "Our Instagram Channels",
      instagramChannels: [
        {
          handle: "@carenuity",
          label: "Premium Channel",
          target: "Professionals, caregivers, decision-makers",
          purpose: "Showcase SQ-Panel and reinforce premium positioning.",
        },
        {
          handle: "@diy_carenuity",
          label: "Maker Channel",
          target: "Makers, students, DIY users",
          purpose: "Foster innovation and build the maker community.",
        },
        {
          handle: "@bts_carenuity",
          label: "Insights Channel",
          target: "Non-technical users, caregivers",
          purpose: "Collect insights and improve storytelling.",
        },
      ],
      contactTitle: "Get In Touch",
      contactAddress:
        "Chipglobe GmbH, Cincinnatistr. 60, 81549 Munich, Germany",
      contactEmail: "info@carenuity.com",
      contactPhone: "(+49) 89-1222469-40",
      legalNote:
        "Carenuity™ is a registered EU wordmark (EUIPO #018596314) owned by Chipglobe GmbH.",
      brandVisibilityTitle: "Brand Visibility",
      brandVisibilityDesc:
        "Carenuity maintains a strong presence across the developer and maker ecosystem, ensuring maximum reach and community engagement.",
      sqPanelTitle: "Featured Product: Carenuity™ SQ-Panel",
      sqPanelDesc1:
        "The SQ-Panel is a stylish, wall-mounted sensor display that captures CO₂, TVOC, temperature, humidity, air pressure, and presence detection — all in one compact device.",
      sqPanelDesc2:
        "It supports Matter compatibility and integrates seamlessly with Alexa, Google Home, and Apple HomeKit. Managed via the Carenuity Home App on iOS and Android with real-time monitoring and push notifications.",
      sqPanelFeatures: [
        "CO₂ & TVOC Sensing",
        "Temperature & Humidity",
        "Air Pressure",
        "Presence Detection",
        "Matter Compatible",
        "iOS & Android App",
      ],
      solutionBuilderTitle: "Carenuity™ Solution Builder",
      solutionBuilderDesc:
        "The web-based Solution Builder allows users to configure, customize, and deploy sensor solutions without writing a single line of code. Select sensors, assign ecosystems, and generate ready-to-flash firmware instantly from your browser.",
      solutionBuilderFeatures: [
        "No code required",
        "Browser-based tool",
        "Supports all C3-Mini sensors",
        "Multi-ecosystem output",
        "Instant firmware generation",
      ],
      ipTitle: "Intellectual Property Note",
      ipDesc:
        "Carenuity™ is a registered EU wordmark (EUIPO #018596314) owned by Chipglobe GmbH. All product names, logos, and designs are protected intellectual property of Chipglobe GmbH. Unauthorized use is prohibited.",
      strategicTitle: "Strategic Benefits",
      strategicItems: [
        {
          title: "Modular & Scalable",
          desc: "Easily customize and expand your sensor network to fit any environment — from a single room to an entire building.",
        },
        {
          title: "Privacy-First Architecture",
          desc: "Data stays local by default. We never sell your data, and our system is designed with privacy-friendly principles from the ground up.",
        },
        {
          title: "Award-Winning Innovation",
          desc: "Recognized with the BSFZ Seal 2025 for Research & Development by the Federal Republic of Germany — certified innovation.",
        },
        {
          title: "Smart Home Compatible",
          desc: "Full Matter support enables seamless integration with Alexa, Google Home, and Apple HomeKit out of the box.",
        },
        {
          title: "Budget-Friendly Options",
          desc: "C3-Mini kits give makers, students, and DIY enthusiasts access to professional-grade sensing at an accessible price point.",
        },
        {
          title: "Educational Impact",
          desc: "The Home Challenge initiative empowers students to learn IoT, data analysis, and solution building hands-on.",
        },
      ],
    },
    benefits: {
      badge: "Why Carenuity",
      heroTitle: "Benefits",
      heroDesc:
        "Discover how Carenuity's modular sensor solutions bring measurable value to homes, healthcare settings, and smart buildings.",
      videoTitle: "See Carenuity in Action",
      videoDesc:
        "Watch how Carenuity sensor solutions work in real environments — from setup to live monitoring.",
      featuresTitle: "Key Features & Benefits",
      features: [
        {
          title: "Swappable Sensors",
          desc: "The C3-Mini devices are highly versatile — swap sensors in seconds to monitor temperature, humidity, air quality, CO₂, presence, and more. One hardware platform, endless configurations.",
        },
        {
          title: "Long Range Communication",
          desc: "Products feature 868 MHz frequency technology for extended coverage and stable connections across large spaces, floors, and outdoor areas.",
        },
        {
          title: "Instant Applications",
          desc: "Deploy ready-to-use applications in just three minutes using the Solution Builder. No code, no complexity — go from sensor to live data in record time.",
        },
        {
          title: "Privacy-First by Design",
          desc: "Data stays local by default. No third-party data selling. Built with privacy-friendly principles that comply with modern data protection standards.",
        },
        {
          title: "Matter & Smart Home Ready",
          desc: "Full Matter protocol support enables seamless integration with Alexa, Google Home, and Apple HomeKit right out of the box.",
        },
        {
          title: "Award-Winning Innovation",
          desc: "Recognized with the BSFZ Seal 2025 for Research & Development by the Federal Republic of Germany — a certified mark of innovation.",
        },
      ],
      useCasesTitle: "Where It Works",
      useCases: [
        {
          title: "Residential Homes",
          desc: "Monitor air quality, temperature, and presence to keep families safe and comfortable.",
        },
        {
          title: "Healthcare Settings",
          desc: "Track vital environmental parameters in care facilities to support patient well-being and staff efficiency.",
        },
        {
          title: "Smart Buildings",
          desc: "Deploy scalable sensor networks across offices, classrooms, and real estate to optimize indoor environments.",
        },
        {
          title: "Educational Programs",
          desc: "Empower students through the Home Challenge initiative to build and deploy their own sensor solutions.",
        },
      ],
      ctaTitle: "Ready to get started?",
      ctaDesc:
        "Install your first sensor solution for free and start monitoring what matters most.",
      ctaBtn: "Install For Free",
    },
    blog: {
      pageName: "Blog",
      pageDesc: "News, insights, and updates from the Carenuity team.",
      title: "Our Latest Articles",
      readMore: "Read More",
      posts: [
        {
          id: 1,
          title:
            "Using the BGT60LTR11 Radar Shield2Go with ESP32 for AI Applications",
          excerpt:
            "This guide will walk you through its features, setup, and integration with an ESP32 microcontroller, providing a solid foundation for AI development.",
          tag: "AI & IoT",
          date: "2024",
          readTime: "6 min read",
          href: "https://carenuity.com/blog/",
        },
        {
          id: 2,
          title: "Introducing the SQ Panel: Your Smart Home's New Best Friend",
          excerpt:
            "Are you ready to take your home monitoring to the next level? Chipglobe is excited to announce our latest innovation: the SQ Panel.",
          tag: "Product",
          date: "2024",
          readTime: "4 min read",
          href: "https://carenuity.com/blog/",
        },
        {
          id: 3,
          title: "Creating Your First YAML File in Home Assistant",
          excerpt:
            "A beginner-friendly guide to writing and managing YAML configuration files in Home Assistant for smarter home automation.",
          tag: "Home Assistant",
          date: "2024",
          readTime: "5 min read",
          href: "https://carenuity.com/blog/",
        },
        {
          id: 4,
          title:
            "Utilizing Google Sheets in Home Assistant: A Comprehensive Guide",
          excerpt:
            "Greetings, tech enthusiasts! Today, we're delving into the intricacies of incorporating Google Sheets into your Home Assistant setup.",
          tag: "Integration",
          date: "2024",
          readTime: "7 min read",
          href: "https://carenuity.com/blog/",
        },
        {
          id: 5,
          title: "Sensor Data Optimization for Enhanced AI Performance",
          excerpt:
            "Learn how to clean, normalize, and structure sensor data from Carenuity devices to maximize the accuracy of AI models and real-time inference.",
          tag: "AI",
          date: "2024",
          readTime: "5 min read",
          href: "https://carenuity.com/blog/",
        },
        {
          id: 6,
          title:
            "Revolutionizing Home Living: The Synergy of Home Automation and Embedded AI",
          excerpt:
            "Explore how combining smart home automation with embedded AI creates smarter, more responsive living environments that adapt to your needs.",
          tag: "Innovation",
          date: "2024",
          readTime: "6 min read",
          href: "https://carenuity.com/blog/",
        },
        {
          id: 7,
          title:
            "Beginner's Guide: Automating Lights with HLK-LD2410 and Home Assistant",
          excerpt:
            "Step-by-step instructions for setting up presence-based light automation using the HLK-LD2410 radar sensor with Home Assistant.",
          tag: "Tutorial",
          date: "2024",
          readTime: "5 min read",
          href: "https://carenuity.com/blog/",
        },
        {
          id: 8,
          title:
            "Detecting the Future: Exploring the Exciting Applications of Object Detection",
          excerpt:
            "From security cameras to smart retail, discover how object detection technology is transforming industries and everyday life.",
          tag: "Computer Vision",
          date: "2024",
          readTime: "6 min read",
          href: "https://carenuity.com/blog/",
        },
        {
          id: 9,
          title:
            "Turning Your ESP32-CAM into a Smart Object Detector with Edge Impulse",
          excerpt:
            "A hands-on walkthrough for building an on-device object detection system using the ESP32-CAM and Edge Impulse machine learning platform.",
          tag: "Edge AI",
          date: "2024",
          readTime: "8 min read",
          href: "https://carenuity.com/blog/",
        },
        {
          id: 10,
          title: "Welcome to ChipGlobe's Embedded AI Journal!",
          excerpt:
            "An introduction to ChipGlobe's blog — a space for embedded AI enthusiasts, makers, and developers to learn, share, and build together.",
          tag: "Community",
          date: "2024",
          readTime: "3 min read",
          href: "https://carenuity.com/blog/",
        },
      ],
    },
    contact: {
      pageName: "Contact",
      pageDesc: "Get in touch with us. We'd love to hear from you.",
      heroKicker: "We're here to help",
      heroTitle: "Get in touch",
      heroSubtitle:
        "Whether you have a question, need support, or want to explore how we can work together — reach out and we'll respond as soon as possible.",
      title: "Send us a message",
      subtitle:
        "Fill in the form and our team will get back to you within one business day.",
      namePlaceholder: "Enter your name",
      emailPlaceholder: "Enter your email",
      messagePlaceholder: "How can we help you?",
      submitBtn: "Send Message",
      sendingBtn: "Sending...",
      successMsg: "Message sent successfully! We'll be in touch soon.",
      errorMsg: "Something went wrong. Please try again or email us directly.",
      firstName: "First Name",
      firstNamePh: "Enter your first name",
      lastName: "Last Name",
      lastNamePh: "Enter your last name",
      phoneLabel: "Phone",
      phonePh: "Enter your phone number",
      company: "Company",
      companyPh: "Enter your company name",
      subject: "Subject",
      subjectPh: "What is this about?",
      country: "Country",
      countryPh: "Enter your country",
      street: "Street",
      streetPh: "Street, house number",
      zip: "ZIP / City",
      zipPh: "Zip code, City",
      phoneTitle: "Call us",
      phoneDesc:
        "Reach out to our team directly by phone during our business hours.",
      phone: "(+49) 89-1222469-40",
      emailTitle: "Email us",
      emailDesc:
        "Email our team — we're happy to assist you with any inquiries or support needs.",
      email: "info@carenuity.com",
      addressTitle: "Visit us",
      addressDesc: "You are welcome to stop by during business hours.",
      addressLine1: "Professor-Messerschmitt-Strasse 1a, 3rd floor",
      addressLine2: "85579 Neubiberg, Germany",
      hoursTitle: "Office hours",
      hours: "Mon – Fri · 9:00 – 17:00",
      socialTitle: "Follow us",
      mapTitle: "Find us here",
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
    budgetFriendly: {
      title: "Budget Friendly Not Only For Students",
      currentPage: "Current page",
      explore: "Explore",
      cards: [
        {
          title: "C3-Mini™ Applications",
          desc: "GPIO projects, WLED lighting, custom hardware builds and more.",
        },
        {
          title: "AI Assisted Solutions",
          desc: "Camera vision, radar sensing, and autonomous smart systems.",
        },
        {
          title: "All-for-One Sensor Boxes",
          desc: "Pre-assembled ready-to-use sensor boxes — plug in and measure.",
        },
        {
          title: "C3-Mini™ Sensor Selection Box",
          desc: "A curated starter kit with a variety of compatible sensors.",
        },
      ],
    },
    c3mini: {
      badge: "Budget Friendly IoT",
      heroTitle1: "C3-Mini™ Applications",
      heroTitle2: "Build Anything",
      heroSub:
        "A mini Wi-Fi & Bluetooth 5 (LE) board based on ESP32-C3FH4. Compatible with MicroPython, Arduino, CircuitPython, and ESP-IDF.",
      heroBtn: "C3-Mini™ Applications",
      whatTitle: "What is C3-Mini™?",
      whatP1:
        "The C3-Mini™ is a compact, powerful microcontroller board based on the ESP32-C3 chip with a RISC-V Single-Core CPU running at 160 MHz. It features Wi-Fi and Bluetooth LE 5.0, a Type-C USB connector, 4 MB of Flash, and 12 GPIO pins with ADC, I2C, SPI, and UART interfaces.",
      whatP2:
        "It shares the same footprint and pinout as the popular D1 Mini, making it compatible with the world's largest sensor and actuator shield portfolio. The default firmware is MicroPython, but it also supports Arduino, CircuitPython, and ESP-IDF.",
      whatTip:
        "Tip: To flash the C3-Mini, hold the BOOT button, click the RST button briefly while keeping BOOT pressed, then start WebFlashing.",
      specsTitle: "Technical Specifications",
      specHeaders: ["Specification", "Value"],
      specs: [
        ["Operating Voltage", "3.3V"],
        ["Digital I/O Pins", "12"],
        ["Clock Speed", "160 MHz"],
        ["Flash", "4 MB"],
        ["Size", "34.3 × 25.4 mm"],
        ["Weight", "2.6 g"],
      ],
      versionsTitle: "Versions",
      versions: [
        { label: "V2.2.1", desc: "Carenuity EU version" },
        { label: "V2.1.0", desc: "Lolin version" },
        { label: "V1.0.0", desc: "Original version" },
      ],
      hwFeaturesTitle: "Hardware Features",
      hwFeatures: [
        "ESP32-C3 Wi-Fi & Bluetooth LE with RISC-V Single-Core CPU",
        "Type-C USB connectivity",
        "1× WS2812B RGB LED on-board",
        "ADC, I2C, SPI, UART interfaces",
        "Compatible with LOLIN D1 Mini shields",
        "Supports MicroPython, Arduino, CircuitPython, ESP-IDF",
      ],
      buildTitle: "Build your own device within seconds:",
      standaloneApps: [
        {
          title: "WLED Lighting Control",
          desc: "Run WLED firmware to control addressable LED strips with effects, music reactivity, and smart home integration.",
          href: "https://chipglobe-dev.web.app/cloudfree/WLED/C3-Mini",
        },
        {
          title: "GPIO Viewer",
          desc: "Monitor all GPIO pins live in your browser — ideal for debugging hardware projects and sensor circuits.",
          href: "https://chipglobe-dev.web.app/cloudfree/GPIO/C3-Mini",
        },
        {
          title: "YouTube Counter",
          desc: "Display real-time YouTube channel statistics — subscribers and likes — on a small OLED screen.",
          href: "https://chipglobe-dev.web.app/cloudfree/YOUTUBE-METEER/C3-Mini",
        },
      ],
      sensorDevices: [
        {
          title: "Barometer",
          desc: "Measure atmospheric pressure and altitude.",
        },
        {
          title: "Hygrometer",
          desc: "Track relative humidity and temperature.",
        },
        { title: "Thermometer", desc: "Precise ambient temperature sensing." },
        { title: "Luxmeter", desc: "Measure ambient light intensity in lux." },
        {
          title: "IR Radiometer",
          desc: "Non-contact infrared temperature measurement.",
        },
        {
          title: "Motion Detector",
          desc: "PIR-based motion detection for automations.",
        },
        {
          title: "Presence Button",
          desc: "Capacitive or tactile user interaction input.",
        },
      ],
      tutorialsTitle: "Tutorials",
      tutorialsSub:
        "Get started with the C3-Mini™ using our step-by-step video tutorial covering MicroPython initialisation and WebFlashing.",
      tutorialsSubTitle: "Getting Started with C3-Mini™",
      tutorialsSubDesc:
        "Learn how to initialise your C3-Mini™ with MicroPython using WebFlashing — no special tools required.",
      tutorialsSteps: [
        "Flashing MicroPython via WebFlasher",
        "Arduino IDE setup and first sketch",
        "CircuitPython installation guide",
        "Using ESP-IDF for advanced development",
        "Compatible with LOLIN D1 Mini shields and accessories",
      ],
      d1Title: "What is the difference between the D1 and the C3-Mini™?",
      d1P1: "The two super popular boards — the D1 and C3-Mini™ — share the same footprint and pinout, making them a perfect fit for the world's largest sensor and actuator portfolio.",
      d1P2: "The C3-Mini™ is the successor to the ESP32-Mini, adding Bluetooth LE 5.0 and future-proofing your projects with support for the upcoming Matter standard.",
      docsTitle: "Documentation",
      docs: [
        {
          name: "C3-Mini Datasheet [PDF]",
          href: "/docs/datasheet.pdf",
        },
        {
          name: "Getting Started with MicroPython [PDF]",
          href: "https://www.wemos.cc/en/latest/tutorials/c3/get_started_with_micropython_c3.html",
        },
        {
          name: "Getting Started with Arduino [PDF]",
          href: "https://www.wemos.cc/en/latest/tutorials/c3/get_started_with_arduino_c3.html",
        },
        {
          name: "Getting Started with CircuitPython [PDF]",
          href: "https://www.wemos.cc/en/latest/tutorials/c3/get_started_with_circuitpython_c3.html",
        },
        // {
        //   name: "C3-Mini Pinout Reference [PDF]",
        //   href: "/docs/c3-mini/pinout-reference.pdf",
        // },
        {
          name: "ESP-IDF Setup Guide [PDF]",
          href: "https://documentation.espressif.com/esp32-c3_datasheet_en.pdf",
        },
      ],
      docsBtn: "Explore C3-Mini™ Applications →",
    },
    c3miniApps: {
      badge: "C3-Mini™ Applications",
      heroTitle1: "Build your own device",
      heroTitle2: "within seconds",
      heroSub:
        "The C3-Mini™ supports install-for-free applications for CloudFree, Home Assistant, IoT AppStore and Matter/ESPZero.",
      section1Title:
        "Applications for the plain C3-Mini™ — no Display or Sensor required",
      section1Pre:
        "Grab your plain C3-Mini and build your own device within 3 minutes, by installing the popular ",
      section1WledLink: "WLED-Application",
      section1Mid: ", the helpful ",
      section1GpioLink: "GPIO-Viewer",
      section1Post:
        ' or a plain "empty" ESPHome device for Home Assistant with no special features built-in. Ready to make it your own.',
      section2Title: "Applications for the C3-Mini™ with Display",
      section2Pre:
        "Grab your C3-Mini and build your own device within 3 minutes, by attaching a display ",
      section2BuyHere: "buy here",
      section2Mid:
        " to enable applications like a WiFi Signal Strength Meter, a Weather-Station or a ",
      section2YtLink: "YouTube-Counter",
      section2Post: " for Followers and Likes.",
      section3Title: "Applications for the C3-Mini™ with Sensor & Display",
      section3Desc:
        "Grab your C3-Mini and build your own device within 3 minutes, by free-installing various sensor applications like a Barometer, Hygrometer, Luxmeter or Motion Detector.",
      backBtn: "Back to C3-Mini Overview",
    },
    c3miniBoxDevices: {
      badge: "C3-Mini Sensor Box",
      heroTitle1: "C3-Mini Sensor Box",
      heroTitle2: "Devices",
      heroSub:
        "Get the box so that you can build all these C3-Mini Devices within 3 minutes.",
      breadcrumbBox: "C3-Mini Sensor Selection Box",
      breadcrumbCurrent: "C3-Mini Sensor Box Devices",
      introTitle:
        "Get the box so that you can build all these C3-Mini Devices within 3 minutes.",
      introDesc:
        "Select your S-M-A Triple, grab the available parts from your drawer or go shopping for getting more suited sensor boxes.",
      cards: [
        {
          title: "Step 1 — Select your S-M-A Triple",
          desc: "Choose a Sensor, place the C3-Mini in the middle of the Triple-Adapter, and add a Display or Buzzer as your Actuator.",
        },
        {
          title: "Step 2 — Install for Free",
          desc: "Use the Install-for-Free feature to flash your chosen application directly onto the C3-Mini — no coding required.",
        },
        {
          title: "Step 3 — Your Device is Ready",
          desc: "Within 3 minutes your sensor device is up and running — reporting live data to CloudFree, Home Assistant, IoT AppStore or Matter.",
        },
      ],
      appsTitle: "Applications",
      appsDesc:
        "Stack one of the seven sensor boards onto the Triple-Adapter, place the C3-Mini in the middle and add the display or buzzer on the right.",
      assemble: "See how to assemble",
      install: "How to install",
      installVideoTitle: "Installing the App on C3-Mini",
      devices: [
        {
          title: "Barometer",
          desc: "Measures atmospheric pressure. It can be equipped with a display to show pressure readings or a buzzer to signal significant changes, which may indicate weather shifts.",
        },
        {
          title: "Hygrometer",
          desc: "Monitors air humidity. It may use a display to show relative humidity or a buzzer to alert when humidity levels fall outside a desired range.",
        },
        {
          title: "IR Radiometer",
          desc: "Detects thermal radiation without contact. It can use a display to show surface temperatures or a buzzer to indicate abnormal thermal readings.",
        },
        {
          title: "Luxmeter",
          desc: "Measures light intensity. It may have a display showing lux values or a buzzer that activates when light levels are too high or too low.",
        },
        {
          title: "Thermometer",
          desc: "Measures temperature. It can feature a display for real-time temperature readings or a buzzer to notify when temperatures exceed or drop below set thresholds.",
        },
        {
          title: "Motion Detector",
          desc: "Senses movement. It may show motion status on a display or use a buzzer to audibly alert when movement is detected.",
        },
        {
          title: "Presence Button",
          desc: "Detects user presence through interaction. It can confirm activation via a display or provide feedback through a buzzer when pressed.",
        },
      ],
    },
    aiAssisted: {
      badge: "AI Assisted Solutions",
      heroTitle1: "AI-Assisted Devices",
      heroTitle2: "at your Fingertip",
      heroSub:
        "AI-assisted Carenuity devices combine cutting edge sensor technology with artificial intelligence to gather, process, and analyze data from their environment.",
      featuredTitle: "AI-assisted devices",
      featuredDesc:
        "These sensors detect various physical parameters including temperature, motion, and light, applying AI to make informed decisions based on gathered data.",
      radarTitle: "C3-Mini Radar Sensor",
      radarSubtitle: "Your Radar Occupancy Sensor for Smart Home",
      radarP1:
        "A radar sensor employs radio waves to detect stationary, approaching, departing or missing objects and measure their distance, speed, and other characteristics through area segmentation.",
      radarP2:
        "Unlike conventional PIR sensors that rely on heat signatures and struggle with subtle motion or presence detection, the Carenuity™ SQ-Panel features a highly precise 60 GHz radar sensor. This advanced sensing technology enables real-time detection of micro-movements, even through materials, making it suitable for modern presence automation. Whether designing intelligent HVAC or lighting control or building a Home Assistant setup, the Carenuity™ SQ-Panel provides accurate occupancy data via MQTT and seamlessly integrates into smart ecosystems.",
      readMore: "Read more",
      blogCards: [
        {
          title: "A Beginner's Guide to HLK-LD2410C 24GHz Radar Sensor",
          excerpt: "Explores the HLK-LD2410, a 24GHz Human Presence sensor.",
        },
        {
          title: "Discovering the LD2410C Radar Sensor",
          excerpt:
            "Covers detection capabilities through walls, fog, and darkness.",
        },
        {
          title:
            "Using the BGT60LTR11 Radar Shield2Go with ESP32 for AI Applications",
          excerpt: "Discusses the compact BGT60LTR11 Radar Shield2Go.",
        },
      ],
      espTitle: "C3-Mini Adapter with ESP32-Cam",
      espP1:
        "The ESP32-CAM is a compact, low-cost module that combines an ESP32-S microcontroller with an OV2640 camera. In object detection applications, it proves particularly valuable due to built-in Wi-Fi and Bluetooth capabilities, enabling wireless image transmission and processing.",
      espP2:
        "Leveraging libraries like OpenCV and machine learning models, the ESP32-CAM performs real-time object detection and identification. This makes it ideal for home automation, security systems, and IoT projects requiring visual data capture and analysis.",
      espBlogCard: {
        title:
          "Turning Your ESP32-CAM into a Smart Object Detector with Edge Impulse",
        excerpt:
          "Tutorial on creating object detection models on ESP32-CAM using Edge Impulse.",
      },
      autoCarTitle: "Autonomous Driving Car",
      autoCarP1:
        "In the world of automotive innovation, history often serves as a foundation for future advancements. The Autonomous Driving Infineon Car, built by ChipGlobe's Carenuity team, is a testament to this principle.",
      autoCarP2:
        "This vehicle embodies the latest autonomous driving technology while honoring the legendary Schaeffler FAG Model MF3, unveiled in June 2009. The shark-like design of the MF3, symbolizing speed and precision, has been reincarnated in 2025 in a 1:10 ratio model, showcasing the blend of past and present engineering achievements.",
      autoCarP3:
        "The Schaeffler FAG Model MF3 unveiling occurred at an evening event at Schaeffler's foyer, attended by Dr. Grunau, former representative of the FAG Schaeffler Group Industry management board, and Dipl.-Ing. Seubert, former chairman of the Unterfranken district association of the Verein Deutscher Ingenieure (VDI).",
      learnMore: "Learn more",
    },
    selectionBox: {
      badge: "Modular Sensor Kit",
      heroTitle1: "C3-Mini™",
      heroTitle2: "Sensor Selection Box",
      heroSub:
        "Seven featured sensors in one convenient box — everything you need to start building environmental and interactive IoT projects.",
      breadcrumb: "Sensor Selection Box",
      whatTitle: "What is the Sensor Selection Box?",
      whatP1:
        "The C3-Mini™ Sensor Selection Box is a modular starter kit designed for students, makers, and developers who want to explore a range of IoT sensor types without sourcing components individually.",
      whatP2:
        "Each box includes seven sensors compatible with the C3-Mini™ board, along with example code and documentation to get you started fast. Swap sensors in and out to build exactly the project you have in mind.",
      installBtn: "Install For Free (14 Devices)",
      sensorsTitle: "Build your own device within 3 minutes:",
      sensorsDesc:
        "The selection box includes one of each sensor below — a complete toolkit for environmental sensing and interaction projects.",
      sensors: [
        {
          title: "Barometer",
          desc: "Measure atmospheric pressure and altitude. Ideal for weather stations and altitude-aware applications.",
        },
        {
          title: "Hygrometer",
          desc: "Track relative humidity levels to monitor indoor comfort, condensation risk, and dew point.",
        },
        {
          title: "Thermometer",
          desc: "Precise temperature sensing for climate control, cold-chain monitoring, and environmental logging.",
        },
        {
          title: "Luxmeter",
          desc: "Measure ambient light intensity in lux to automate lighting or protect photosensitive environments.",
        },
        {
          title: "IR Radiometer",
          desc: "Detect infrared radiation for non-contact temperature measurement and remote sensing applications.",
        },
        {
          title: "Motion Detector",
          desc: "PIR-based motion detection to trigger alerts, automations, or energy-saving presence logic.",
        },
        {
          title: "Presence Button",
          desc: "A capacitive or tactile input for manual presence confirmation or user interaction in your projects.",
        },
      ],
    },
    sensorBoxes: {
      badge: "Single Sensor Box",
      heroTitle1: "Build your own device",
      heroTitle2: "within 3 minutes.",
      heroSub:
        "Single Sensor Boxes contain all you need to build your own device within 3 minutes. Build devices like a Barometer, Hygrometer, Luxmeter or a Motion Detector.",
      breadcrumb: "All-for-One Sensor Boxes",
      whatTitle: "What is a Sensor Box?",
      whatP1:
        "Each Single Sensor Box comes in an Acrylic Box, which includes a Triple-Adapter, three stackable boards (S-M-A), a 3D-printed enclosure and a USB Type-C cable to power it.",
      whatP2:
        "The three slots with letters S-M-A stand for Sensor, Microcontroller and Actuator, typically a display. Besides the sensor, the core part is the C3-Mini microcontroller.",
      whatP3:
        "The plastic casing, a 3D-printed enclosure, houses all the electronics. You can also print yourself enclosures in your preferred color and customized style. Find our free 3D-models on Thingiverse.",
      whatP4:
        "The Triple-Adapter makes it a breeze connecting the three boards — sensor, microcontroller and actuator — and you can even build new combinations of S-M-A by this base board, using the IoT Triple Selector of the Solution Builder.",
      whatP5:
        "All Sensor Boxes contain an actuator (display, buzzer or LED) to make the sensor measurements readable or to trigger acoustic or optical alarms.",
      whatP6:
        "The USB Type-C data cable finally allows to inject a certain software (install-for-free from a browser window) and later on powering your built device at any location, e.g. by a phone charger.",
      healthcareTitle: "Healthcare Assisting Devices",
      healthcareCards: [
        {
          title: "Air-Quality-Meter",
          desc: "Air Quality (VOCs, CO2 & Humidity)",
        },
        {
          title: "Bio-Pulse Meter",
          desc: "Monitor heart rate and biometric data with the C3-Mini™ powered pulse sensor.",
        },
      ],
      motionTitle: "Motion Detection Devices",
      motionCards: [
        {
          title: "Fridge Openings Counter",
          desc: "Track how many times your fridge is opened using a PIR motion sensor and OLED display.",
        },
      ],
      weatherTitle: "Weather Station Devices",
      weatherCard: {
        title: "EnviroSense 680",
        desc: "Advanced Environmental Monitoring Solution — temperature, humidity, pressure, and air quality in one device.",
        link: "Click here to learn more on EnviroSence 680",
      },
      installBtn: "Install For Free",
      buyBtn: "Buy C3-Mini Parts",
    },
    installForFree: {
      detailTitle: "How to build your own device",
      badge: "Install For Free",
      heroTitle1: "Build your own device within 3 minutes",
      heroTitle2: "to immediately sense what's going on.",
      heroCta:
        "Select your S-M-A Triple, grab the available parts from your drawer or go shopping for getting more suited sensor boxes.",
      step1Title: "Make Your Triple",
      step1Desc:
        "Make your S-M-A Triple by attaching the three basic components of any IoT solution — the Sensor, the Microcontroller and the Actuator — onto the black Triple-Adapter.",
      step2Title: "Install Software",
      step2Desc:
        "Inject an application from the Solution Builder website into your Triple using any browser on your laptop or PC. No extra PC-software installation is required.",
      step3Title: "Deploy",
      step3Desc:
        "House your Triple in a 3D-printed enclosure (optional) and place it in your apartment, powered by a phone charger. No PC required.",
      hwTitle: "Get Hardware",
      hwDesc:
        "As all these boards are super popular, we assume you have them at your hand. If not, check out our free offer below or refill your drawers.",
      hwLink: "Visit our Shop",
      swTitle: "Install Software",
      swDesc1:
        "For building your own device within 3 minutes, you can select from a wide range of sensors to build your own device — e.g. a Barometer, Hygrometer, Thermometer, Luxmeter, IR Radiometer, Motion Detector or a Presence Button.",
      swDesc2:
        "Simply use the Install-For-Free App directly from your browser to seamlessly transition between different types of devices. No software installation on your PC is required.",
      swLink: "Open Install-For-Free App",
      sensorLink: "Select Sensor",
      housingTitle: "Housing",
      housingDesc1:
        "Discover the joy of perfect customization and unlock your creative potential — e.g. by housing the electronics you have built, to give them to your beloved.",
      housingDesc2:
        "You can do this in various ways, e.g. by a handmade card paper enclosure or a 3D-print.",
      housingLink: "Browse 3D-Print Enclosures",
      smaTitle: "S-M-A Components",
      smaDesc:
        "For your orientation, we have simplified the stacking by labelling the slots S, M and A on the Triple-Adapter. This makes it as simple as possible to attach the three boards.",
      ecosystemTitle: "Four Ecosystem Options",
      ecosystemDesc:
        "Choose the smart home ecosystem that best fits your needs.",
      ecosystems: [
        {
          title: "Cloudfree",
          desc: "The most secure and simple device does not relate to the internet at all. You install it and it just works. Best if you do not need features beyond the major task of sensing something.",
        },
        {
          title: "Home Assistant",
          desc: "Home Assistant specifies in detail which actions are to be taken if a device senses a certain situation. HA is currently the world's most popular environment for smart home devices.",
        },
        {
          title: "IoT AppStore",
          desc: "If you have more devices which you want to jointly orchestrate with over-the-air updates, possibly at remote locations (e.g. at your parents' home), the IoT solution is your first choice.",
        },
        {
          title: "Matter",
          desc: "Matter allows you to integrate your sensor device with up to five of the most popular platforms at once — Amazon Alexa, Apple Home, Google Home, Samsung SmartThings, or Home Assistant.",
        },
      ],
      statsTitle: "Unlock your success with our smart modular approach today!",
      stats: [
        { value: "28", label: "Sensors" },
        { value: "5", label: "Microcontrollers" },
        { value: "12", label: "Actuators" },
        { value: "1500", label: "Solutions" },
      ],
      greenTitle: "Green Modularity",
      greenDesc1:
        "At the heart of our innovation lies Green Modularity — a groundbreaking concept that combines Sensors, Microcontrollers, and Actuators (S-, M- & A-boards) as distinct, replaceable parts following the systematic of any IoT product.",
      greenDesc2:
        "This approach promotes environmental sustainability by reducing electronic waste. By enabling individual component replacement rather than full device disposal, we extend the lifecycle of our products and support a circular economy.",
      weeeTitle: "WEEE Compliance",
      weeeDesc1:
        "As part of our commitment to sustainability, we fully comply with the Waste Electrical and Electronic Equipment (WEEE) Directive. This ensures the proper collection, recycling, and disposal of electronic products to minimize their environmental impact.",
      weeeDesc2:
        "Each of our products bears the crossed-out wheeled bin symbol, signaling that it must not be discarded with household waste but instead recycled responsibly.",
      weeeDesc3:
        "As space is limited on PCBs, we facilitate direct access to this Sustainability website with our WEEE details via the QR-code printed on all our PCBs.",
      weeeNumber: "WEEE Registration Number:",
      weeeCompany:
        "Carenuity acting as Chipglobe GmbH, Cincinnatistrasse 60, 81549 Munich, Germany",
      weeeContact: "info@chipglobe.com or (+49) 89-1222469-40",
      greenClose:
        "By integrating Green Modularity into our product designs and adhering to strict compliance protocols, we ensure that sustainability is not just a promise, but a practice. Join the movement toward a smarter, greener planet.",
    },
    c3MiniTriple: {
      badge: "C3-Mini Ecosystem",
      heroTitle: "C3-Mini™ Triple",
      heroHighlight: "Sensor · Microcontroller · Actuator",
      heroDesc:
        "Build your own sensing device within 3 minutes by stacking a Sensor, the C3-Mini, and an Actuator onto the Triple-Adapter. No soldering, no wiring — just stack and flash.",
      breadcrumbProducts: "Products",
      whatTitle: "What is a C3-Mini™ Triple?",
      whatP1:
        "The C3-Mini™ Triple is a modular hardware concept built around the Triple-Adapter — a base board with three labelled slots: S (Sensor), M (Microcontroller), and A (Actuator). Simply stack your chosen sensor on the left, the C3-Mini in the middle, and a display or buzzer on the right.",
      whatP2:
        "Once assembled, use the Install-for-Free app directly from your browser to flash your chosen application — no PC software required. Within 3 minutes your device is live and reporting data to CloudFree, Home Assistant, IoT AppStore, or Matter.",
      stepsTitle: "How It Works",
      steps: [
        {
          step: "01",
          title: "Select your S-M-A Triple",
          desc: "Choose a Sensor, place the C3-Mini in the middle of the Triple-Adapter, and add a Display or Buzzer as your Actuator.",
        },
        {
          step: "02",
          title: "Install for Free",
          desc: "Use the Install-for-Free feature to flash your chosen application directly onto the C3-Mini — no coding required.",
        },
        {
          step: "03",
          title: "Your Device is Ready",
          desc: "Within 3 minutes your sensor device is up and running — reporting live data to CloudFree, Home Assistant, IoT AppStore or Matter.",
        },
      ],
      devicesTitle: "Devices You Can Build",
      devicesDesc:
        "Stack one of the seven sensor boards onto the Triple-Adapter, place the C3-Mini in the middle, and add the display or buzzer on the right.",
      devices: [
        {
          title: "Barometer",
          desc: "Measures atmospheric pressure. Equipped with a display to show pressure readings or a buzzer to signal significant changes, which may indicate weather shifts.",
        },
        {
          title: "Hygrometer",
          desc: "Monitors air humidity. Uses a display to show relative humidity or a buzzer to alert when humidity levels fall outside a desired range.",
        },
        {
          title: "IR Radiometer",
          desc: "Detects thermal radiation without contact. Can use a display to show surface temperatures or a buzzer to indicate abnormal thermal readings.",
        },
        {
          title: "Luxmeter",
          desc: "Measures light intensity. May have a display showing lux values or a buzzer that activates when light levels are too high or too low.",
        },
        {
          title: "Thermometer",
          desc: "Measures temperature. Features a display for real-time readings or a buzzer to notify when temperatures exceed or drop below set thresholds.",
        },
        {
          title: "Motion Detector",
          desc: "Senses movement. Shows motion status on a display or uses a buzzer to audibly alert when movement is detected.",
        },
        {
          title: "Presence Button",
          desc: "Detects user presence through interaction. Confirms activation via a display or provides feedback through a buzzer when pressed.",
        },
      ],
      installBtn: "Install For Free",
      shopBtn: "Buy C3-Mini Parts",
      wishlistTitle: "Join the Wishlist",
      wishlistDesc: "Join the C3-Mini Triples wishlist for updates when ready.",
      wishlistNote:
        "Please check your spam folder for the subscription email should it be flagged as spam.",
      wishlistBtn: "Join Wishlist",
    },
    c3MiniBluetoothBeacon: {
      badge: "C3-Mini Ecosystem",
      heroTitle: "C3-Mini™",
      heroHighlight: "Bluetooth Beacon",
      heroDesc:
        "Transform the ESP32-C3 into a compact, low-power Bluetooth Low Energy beacon — ready for smart home, healthcare, retail, and industrial applications in minutes.",
      breadcrumbProducts: "Products",
      featuresTitle: "Key Features",
      features: [
        {
          title: "Compact Form Factor",
          desc: "Fits into tight enclosures and battery-powered setups with ease.",
        },
        {
          title: "BLE Advertising Support",
          desc: "Broadcasts iBeacon, Eddystone, and custom BLE frames out of the box.",
        },
        {
          title: "Low Power Operation",
          desc: "Optimised sleep cycles keep the beacon running for months on a single charge.",
        },
        {
          title: "Flexible Firmware",
          desc: "Supports Arduino, ESP-IDF, and MicroPython — choose the stack that suits you.",
        },
        {
          title: "OTA-Ready",
          desc: "Update firmware wirelessly without removing the device from its location.",
        },
        {
          title: "Integration Options",
          desc: "Connect peripherals via GPIO, I²C, SPI, and UART for extended sensing.",
        },
      ],
      capabilitiesTitle: "What It Can Do",
      capabilitiesDesc:
        "The C3-Mini beacon covers a wide range of wireless use cases without pairing or complex setup.",
      capabilities: [
        "Broadcast device ID and sensor data",
        "Enable indoor positioning and asset tracking",
        "Trigger automation events",
        "Support proximity marketing",
        "Transmit health and environmental data without pairing",
      ],
      solutionTitle: "Carenuity Standard Option",
      solutionDesc:
        "Get started instantly with a pre-configured BLE firmware, optimised power settings, and quick setup through the Solution Builder.",
      solutionBtn: "Open Solution Builder",
      installBtn: "Install For Free",
      wishlistTitle: "Join the Wishlist",
      wishlistDesc:
        "Stay up to date on new BLE firmware, enclosure options, and deployment guides for the C3-Mini Bluetooth Beacon.",
      wishlistNote:
        "Please check your spam folder for the subscription email should it be flagged as spam.",
      wishlistBtn: "Join Wishlist",
    },
    dingDongBar: {
      badge: "Motion Alert Device",
      heroTitle: "DingDongBar –",
      heroHighlight: "Motion Detection Alert Device",
      heroDesc:
        "A compact, smart alert device that automatically responds to human movement by producing a distinct sound. Uses a PIR sensor and buzzer for hands-free operation in doorways, offices, and security zones.",
      breadcrumbProducts: "Products",
      introTitle: "DingDongBar – Motion Detection Alert Device",
      cardP1:
        'The DingDongBar is a compact, smart alert device that automatically responds to human movement by producing a distinct sound. It uses a PIR (Passive Infrared) motion sensor to detect infrared radiation changes caused by motion, and a buzzer to instantly generate an audible "ding-dong" tone whenever movement is detected.',
      cardP2:
        "Designed for simplicity and reliability, the DingDongBar eliminates the need for physical interaction such as pressing a button. This makes it ideal for environments where hands-free operation is preferred — like doorways, reception areas, offices, or security-sensitive zones.",
      extendedDesc:
        "Because it's based on low-power electronics, the DingDongBar can run continuously for long periods on a small power supply or battery. It can also be easily integrated into IoT systems, door alert setups, or automation projects, making it useful in both educational prototypes and real-world applications.",
      assembleLink: "See how it is assembled",
      typicalUsesTitle: "Typical uses include:",
      typicalUses: [
        "Motion-activated door alerts in offices and shops",
        "Entry notification for home or garage doors",
        "Visitor detection in reception or waiting areas",
        "Automatic reminders for motion-based events (e.g., light or sound triggers)",
        "As an educational demo for learning about sensors, microcontrollers, and basic automation logic",
      ],
      pirDesc:
        'The PIR sensor continuously monitors its surroundings for changes in infrared radiation (heat). When a person or object moves within its detection range, the sensor\'s output pin goes HIGH. The microcontroller (e.g., Arduino, ESP32, etc.) receives this signal. The buzzer is then activated — producing a "ding-dong" or alert sound. After a few seconds, the buzzer stops automatically until new motion is detected.',
      featuresTitle: "Key Features",
      features: [
        {
          title: "Fully Automatic Activation",
          desc: "Activates instantly on motion — no buttons or manual interaction required.",
        },
        {
          title: "Day & Night Operation",
          desc: "The PIR sensor works reliably in both daylight and complete darkness.",
        },
        {
          title: "Compact & Low-Power Design",
          desc: "Minimal power draw and a small footprint make it easy to place anywhere.",
        },
        {
          title: "Extensible",
          desc: "Expand with LEDs, displays, or Wi-Fi notifications to suit your use case.",
        },
        {
          title: "Motion Alerts & Education",
          desc: "Ideal for motion alert projects as well as sensor education demonstrations.",
        },
      ],
      applicationsTitle: "Typical Applications",
      applications: [
        "Motion-activated door alerts in offices and shops",
        "Entry notifications for homes and garages",
        "Visitor detection in reception areas",
        "Automatic motion-triggered event reminders",
        "Sensor education demonstrations",
      ],
      componentsTitle: "Core Components",
      componentsSubtitle: "Typical Components:",
      componentsList: [
        {
          label: "PIR Sensor (e.g. HC-SR501)",
          desc: "Detects motion based on infrared heat changes",
        },
        {
          label: "Buzzer (Active or Piezo)",
          desc: "Emits a sound when triggered",
        },
        {
          label: "Microcontroller",
          desc: "Controls logic between PIR and buzzer",
        },
        {
          label: "Power Supply",
          desc: "Provides 3.3 V or 5 V depending on components",
        },
        { label: "Optional LED", desc: "Visual cue when motion is detected" },
      ],
      circuitTitle: "Example Circuit Logic:",
      circuitLines: [
        "PIR OUT → Microcontroller input (e.g., pin D2)",
        "Microcontroller output (e.g., pin D7) → Buzzer input",
        "VCC & GND → Common power lines",
      ],
      circuitDesc:
        'When motion is detected, the microcontroller briefly powers the buzzer, creating the "DingDong" sound.',
      comparisonTitle: "Product Comparison",
      comparisonHeaders: ["Feature", "PIR + Buzzer", "Button + OLED"],
      comparisonRows: [
        ["Activation", "Fully automatic", "Manual button press"],
        ["Feedback", "Audio alert (buzzer)", "Visual display (OLED)"],
        ["Complexity", "Simple, no interaction", "Requires user input"],
      ],
      solutionTitle: "Solution Builder",
      solutionDesc:
        "Flash the DingDongBar firmware directly from your browser — no software installation needed.",
      wishlistTitle: "Join the Wishlist",
      wishlistDesc:
        "Get notified about new enclosure options, firmware updates, and tutorials for the DingDongBar.",
      wishlistNote:
        "Please check your spam folder for the subscription email should it be flagged as spam.",
      wishlistBtn: "Join Wishlist",
    },
    dinoShrek: {
      badge: "Motion-Hunting Party Gadget",
      heroTitle: "DinoShrek –",
      heroHighlight: "The Motion-Hunting Party Gadget",
      heroDesc:
        "Inspired by the legendary T-Rex, DinoShrek reacts to even the tiniest human motion using advanced 24 GHz radar technology — flashing red LED eyes and roaring a primal Dino sound whenever movement is detected.",
      breadcrumbProducts: "Products",
      introTitle: "Meet DinoShrek – The Motion-Hunting Party Gadget",
      introP1:
        "Inspired by the legendary T-Rex, DinoShrek reacts to even the tiniest human motion. Using advanced 24 GHz radar technology, it detects movement with stunning precision – just like the dinosaur that could sense the faintest vibration in the air. When movement is detected, the C3-Mini onboard flashes its red LED eyes, and a primal Dino roar bursts from the built-in buzzer.",
      introP2:
        "Unleash it at your next party, place it on your desk, or guard your snack bowl – no movement escapes DinoShrek.",
      howTitle: "How It Works",
      howSteps: [
        {
          title: "Radar Detection (24 GHz)",
          desc: "The highly sensitive motion radar scans the environment for the smallest motion or body presence.",
        },
        {
          title: "Instant Reaction",
          desc: "When it senses movement, the Carenuity C3-Mini triggers an alert sequence.",
        },
        {
          title: "Visual & Audio Feedback",
          desc: "Red LEDs flash instantly while a powerful Dino roar echoes through the room.",
        },
        {
          title: "Plug, Play, Roar",
          desc: "Thanks to the Carenuity Triple-Adapter and Type-C USB power, DinoShrek works straight out of the box.",
        },
      ],
      modularTitle: "Carenuity Modular Design",
      modularP1:
        "DinoShrek is built on the Carenuity Modular Ecosystem, making it fully reconfigurable and expandable. Swap sensors, add sound effects, or integrate other Carenuity modules in seconds – no soldering, no programming, no tools required.",
      modularP2:
        "The Carenuity Solution Builder concept means you can build, test, and modify your radar creatures in under three minutes.",
      boxTitle: "Included in the Box",
      boxHeaders: ["Component", "Description"],
      boxItems: [
        {
          component: "24 GHz Radar Sensor",
          desc: "High-precision motion and presence detection – ultra-sensitive, even through materials",
        },
        {
          component: "Carenuity C3-Mini",
          desc: "Compact ESP32-C3 microcontroller with integrated red status LED",
        },
        {
          component: "Dino Buzzer",
          desc: "Preloaded with the authentic Dino roar sound",
        },
        {
          component: "Carenuity Triple-Adapter",
          desc: "Modular board system for fast, plug-in configuration",
        },
        {
          component: "3D-Printed Housing",
          desc: "Tailored for compact assembly and heat management",
        },
        {
          component: "Acrylic Display Box",
          desc: "Transparent case for instant setup and visual showcase",
        },
        {
          component: "USB Type-C Cable",
          desc: "Plug & Play power connection for immediate operation",
        },
        {
          component: "Quick-Start Guide",
          desc: "Simple setup and customization instructions",
        },
      ],
      useCasesTitle: "Use Cases",
      useCases: [
        "Party sensor and sound effect gadget",
        "Desk toy that guards your workspace",
        "Smart motion alert demo for STEM or university projects",
        "Radar showcase for makers and AI-sensor enthusiasts",
      ],
      whyTitle: "Why DinoShrek?",
      whyDesc:
        "Because sometimes, you don't detect movement – you feel it. DinoShrek combines fun, engineering, and radar technology in one modular, ready-to-use system. Built by Carenuity, optimized for innovation.",
      ctaTitle: "Get your DinoShrek now and let the hunt begin.",
      ctaDesc: "Available soon at chipglobe.com and carenuity.com",
      wishlistTitle: "Join the Wishlist",
      wishlistDesc: "Join DinoShrek wishlist for updates when ready.",
      wishlistNote:
        "Please check your spam folder for the subscription email should it be flagged as spam.",
      wishlistBtn: "Join Wishlist",
    },
    enviroSence680: {
      badge: "Environmental Monitoring",
      heroTitle: "EnviroSence 680 –",
      heroHighlight: "Advanced Environmental Monitoring Solution",
      heroDesc:
        "A versatile and compact device designed to monitor and display essential environmental data in real-time. Integrates the powerful BME680 sensor with the ESP-C3 mini microcontroller.",
      breadcrumbProducts: "Products",
      introTitle:
        "EnviroSence 680 – Advanced Environmental Monitoring Solution",
      introDesc:
        "EnviroSence 680 is a versatile and compact device designed to monitor and display essential environmental data in real-time. It integrates the powerful BME680 sensor with the ESP-C3 mini microcontroller, providing accurate measurements of temperature, humidity, pressure, altitude, gas concentration, and air quality index (AQI). The device features a vibrant TFT display, making data visualization clear and user-friendly.",
      lvglDesc:
        "To ensure a smooth user experience, the interface is developed using LVGL, a highly optimized graphical library tailored for embedded systems. EnviroSence 680's intuitive GUI presents all the environmental parameters at a glance, making it ideal for applications in smart homes, industrial monitoring, and precision agriculture.",
      featuresTitle: "Key Features",
      features: [
        {
          title: "Real-Time Monitoring",
          desc: "Continuously tracks and displays environmental data as it changes.",
        },
        {
          title: "Compact & Efficient Design",
          desc: "Small form factor with optimized power consumption for long-term deployment.",
        },
        {
          title: "Advanced Sensor Technology",
          desc: "Powered by the BME680 sensor for accurate air quality, temperature, humidity, and pressure readings.",
        },
        {
          title: "Interactive GUI",
          desc: "User-friendly graphical interface for clear data visualization.",
        },
        {
          title: "Portable and Flexible",
          desc: "Designed for use in a wide range of environments and applications.",
        },
      ],
      docsTitle: "Documentation",
      docsLinkLabel: "Schematic V2.0.1 (PDF)",
      wishlistTitle: "Join the Wishlist",
      wishlistDesc: "Join Envirosence 680 wishlist for updates when ready.",
      wishlistNote:
        "Please check your spam folder for the subscription email should it be flagged as spam.",
      wishlistBtn: "Join Wishlist",
    },
    esp32Audio: {
      badge: "Modular Audio Project",
      heroTitle: "ESP32 Audio",
      heroHighlight:
        "Modular Audio Project Based on the Carenuity Architecture",
      heroDesc:
        "A modular audio recording and playback system built on the Carenuity S-M-A principle, combining a microphone sensor, ESP32 microcontroller, and audio actuator into one cohesive ecosystem.",
      breadcrumbProducts: "Products",
      architectureTitle: "Architecture",
      introCardDesc:
        "This project provides a modular and user-friendly solution for building an ESP32-based audio recording and playback device. It integrates a high-quality microphone, wireless connectivity, SD-card storage, optional LED control, and a streamlined setup process without requiring programming skills.",
      refDesignTitle: "Reference Design",
      refDesignDesc:
        "For comparison and inspiration, the following ESP32 audio recorder project demonstrates a related architecture:",
      refDesignLinks: [
        {
          label: "Documentation",
          url: "https://docs.cirkitdesigner.com/project/published/e39a1639-a2e9-4fa3-92d3-89d96a50dac6/esp32-based-audio-recorder-and-playback-system",
        },
        {
          label: "Project view",
          url: "https://app.cirkitdesigner.com/project/e39a1639-a2e9-4fa3-92d3-89d96a50dac6",
        },
      ],
      requirementsTitle: "Your Requirements",
      requirementsDesc:
        "The system is designed to meet the following functional requirements: integrated microphone for audio capture, ESP32 microcontroller with Wi-Fi and Bluetooth, SD-card storage, physical control buttons, addressable LED support, and complete documentation.",
      conceptTitle: "Our Concept",
      conceptDesc:
        "The recommended solution is based on the Carenuity S-M-A principle, consisting of Sensor, Microcontroller, and Actuator modules. All blocks are implemented on Triple-Adapters and designed for quick assembly without any technical background. The system can be set up through the Carenuity Solution Builder, which performs all configuration steps automatically.",
      conceptSolutionBuilderLabel: "Solution Builder",
      modulesTitle: "Functional Modules",
      sensorBlock: {
        title: "Sensor Block (S)",
        desc: "MAX9814 electret microphone with integrated amplifier for clean audio capture, including a WS2812B LED output for optional LED strips.",
      },
      mcuBlock: {
        title: "Microcontroller Block (M)",
        desc: "ESP32-WROOM-32 module with Wi-Fi and Bluetooth connectivity, fully compatible with the Arduino IDE.",
      },
      actuatorBlock: {
        title: "Actuator Block (A)",
        desc: "MAX98357A digital-to-audio converter enabling direct speaker output for audio playback.",
      },
      storageTitle: "Storage Module",
      storageDesc: "Micro-SD expansion board for SPI-based audio file storage.",
      storageProductLabel: "Product link",
      advantagesTitle: "Advantages of the Carenuity System",
      advantages: [
        "All modules are fully compatible with the Carenuity ecosystem.",
        "Installation is completed within minutes through the Install-for-Free service.",
        "Firmware updates are provided over-the-air.",
        "Comprehensive documentation is included.",
        "The modules can be prepared free of charge, with an expected lead time of three to four weeks.",
      ],
      designTitle: "Design Options",
      designDesc:
        "A circular baseboard with a diameter of approximately six centimetres is available to host all building blocks. Square or rectangular layouts are also supported.",
      getStartedTitle: "Get Started",
      getStartedDesc:
        "If you are interested in this modular ESP32 audio solution, please let us know your preferred form factor. We will prepare the complete module set for you and provide all required setup instructions.",
      instagramLabel: "View on Instagram",
      wishlistTitle: "Join the Wishlist",
      wishlistDesc: "Join ESP32 Audio wishlist for updates when ready.",
      wishlistNote:
        "Please check your spam folder for the subscription email should it be flagged as spam.",
      wishlistBtn: "Join Wishlist",
    },
    freshCheck: {
      badge: "Smart Air Quality Monitor",
      heroTitle: "FreshCheck –",
      heroHighlight: "Smart Bathroom Air Quality Monitor",
      heroDesc:
        "Know immediately whether the bathroom air is fresh or still needs ventilation — a simple traffic-light signal powered by the C3-Mini and a high-precision VOC sensor.",
      breadcrumbProducts: "Products",
      introTitle: "Carenuity FreshCheck – Smart Bathroom Air Quality Monitor",
      problemTitle: "The Problem",
      problemDesc:
        "Nobody likes leaving a bathroom unsure if the air is still unpleasant for the next person. Traditional solutions rely on guesswork or waiting — not very efficient.",
      solutionTitle: "The Solution",
      solutionDesc:
        "Carenuity FreshCheck instantly measures the air quality in your bathroom and tells you if the air is fresh or if it still needs ventilation. Powered by our C3-Mini IoT controller and a high-precision VOC sensor, FreshCheck provides a simple traffic light signal:",
      signals: [
        { color: "Green", meaning: "Fresh air, all clear." },
        { color: "Orange", meaning: "Slight residual odor." },
        { color: "Red", meaning: "Ventilation recommended." },
      ],
      benefitsTitle: "Key Benefits",
      benefits: [
        {
          title: "Instant feedback",
          desc: "Know immediately if the bathroom is fresh.",
        },
        {
          title: "Easy setup",
          desc: "Ready in under 3 minutes using Carenuity's Solution Builder.",
        },
        {
          title: "Flexible form",
          desc: "Available as DIY Kit for tech enthusiasts or as a ready-to-use device for convenience.",
        },
        {
          title: "Smart Home integration",
          desc: "Connects via Wi-Fi, MQTT, or Matter to your existing ecosystem (Home Assistant, Google Home, Alexa, Apple Home).",
        },
        {
          title: "Modular & sustainable",
          desc: "Based on the Carenuity C3-Mini and sensor modules — easy to upgrade or repurpose.",
        },
      ],
      howTitle: "How It Works",
      howSteps: [
        "The device continuously learns the baseline of your room air.",
        "When air quality drops due to odors, the sensor detects increased VOC levels.",
        "The display or LED ring shows a clear traffic-light signal.",
        "Optionally, you receive a push notification in your Smart Home app.",
      ],
      forTitle: "Who It's For",
      forItems: [
        "Families wanting a more comfortable bathroom experience.",
        "Smart Home users looking to integrate bathroom air quality into their automation.",
        "Universities and students as a quick DIY showcase project.",
      ],
      getTitle: "Get Yours Today",
      getDesc: "Available now in two options:",
      getOptions: [
        { name: "DIY Kit", desc: "Build it yourself in minutes." },
        { name: "Ready-to-Use Device", desc: "Plug in and start monitoring." },
      ],
      wishlistTitle: "Join the Wishlist",
      wishlistDesc: "Join FreshCheck wishlist for updates when ready.",
      wishlistNote:
        "Please check your spam folder for the subscription email should it be flagged as spam.",
      wishlistBtn: "Join Wishlist",
    },
    fridgeBar: {
      badge: "Smart Fridge Monitor",
      heroTitle: "FridgeBar –",
      heroHighlight: "Protect Your Food, Assure Freshness",
      heroDesc:
        "Continuously monitors your fridge temperature and shows you at a glance whether your food is stored safely — with smart alerts when something goes wrong.",
      breadcrumbProducts: "Products",
      introTitle: "Carenuity FridgeBar — Protect Your Food, Assure Freshness",
      problemTitle: "The Problem",
      problemDesc:
        "Fridges are meant to keep food safe — but temperature fluctuations happen more often than expected.",
      problemPoints: [
        "Frequent door openings, poor sealing, or overloading can cause the temperature to rise.",
        "Kids (or adults in a hurry) may forget to close the fridge door completely, letting cold air escape.",
        "Even short periods above +4 °C can shorten food life, spoil dairy and meat, or waste energy.",
        "Without clear feedback, you only notice when it's already too late.",
      ],
      solutionTitle: "The Solution",
      solutionDesc:
        "Carenuity FridgeBar continuously monitors the fridge's internal temperature and shows you, at a glance, whether your food is stored safely.",
      signals: [
        { color: "Green", meaning: "Safe zone, fridge is working fine." },
        {
          color: "Orange",
          meaning: "Temperature slightly elevated — check door or load.",
        },
        {
          color: "Red",
          meaning:
            "Unsafe zone — food at risk, door might be left open or cooling system failing.",
        },
      ],
      alertsTitle: "Smart Alerts",
      alertsDesc: "Optional smart alerts notify you if:",
      alerts: [
        "The fridge door stays open too long.",
        "Temperature rises above safety thresholds.",
        "Power outage or failure occurs.",
      ],
      benefitsTitle: "Key Benefits",
      benefits: [
        {
          title: "Protect your family's food safety",
          desc: "Always know your fridge is keeping food fresh.",
        },
        {
          title: "Reduce waste",
          desc: "Prevent spoilage from unnoticed warm-ups or forgotten doors.",
        },
        {
          title: "Peace of mind",
          desc: "Get notified immediately when kids forget to close the fridge.",
        },
        {
          title: "Energy savings",
          desc: "Detect when cold air is escaping and act early.",
        },
        {
          title: "Simple setup",
          desc: "Ready in 3 minutes via Carenuity Solution Builder.",
        },
        {
          title: "Smart integration",
          desc: "Works with Matter, MQTT, Home Assistant, Google Home, Alexa, Apple Home.",
        },
      ],
      howTitle: "How It Works",
      howSteps: [
        "Place FridgeBar inside the fridge, connect via USB or battery pack.",
        "Configure using Carenuity Solution Builder.",
        "Device learns the baseline conditions.",
        "LED indicator shows safe/alert state.",
        "Optional: receive notifications if the fridge door is left open or if cooling fails.",
      ],
      forTitle: "Who It's For",
      forItems: [
        "Families with kids (door left open problem).",
        "Households storing sensitive food, insulin, or baby formula.",
        "Smart home users who want fridge alerts on their phone.",
        "Students/universities: simple but real-world IoT showcase.",
      ],
      getTitle: "Get Yours Today",
      getDesc: "Available now in two options:",
      getOptions: [
        {
          name: "DIY Kit",
          desc: "C3-Mini, sensor, LED ring, power cable, and quick-start guide.",
        },
        {
          name: "Ready-to-Use Device",
          desc: "Preassembled in sleek housing, plug & play.",
        },
      ],
      wishlistTitle: "Join the Wishlist",
      wishlistDesc: "Join FridgeBar wishlist for updates when ready.",
      wishlistNote:
        "Please check your spam folder for the subscription email should it be flagged as spam.",
      wishlistBtn: "Join Wishlist",
    },
    leafTemp: {
      badge: "Plant Physiology Sensing",
      heroTitle: "Leaf Temperature Measurement –",
      heroHighlight: "Precise Insights into Plant Physiology",
      heroDesc:
        "Leaf temperature is a key indicator of a plant's physiological state — providing valuable information about water stress, photosynthetic activity, transpiration, and environmental responses.",
      breadcrumbProducts: "Products",
      introTitle:
        "Leaf Temperature Measurement – Precise Insights into Plant Physiology",
      introDesc:
        "Leaf temperature is a key indicator of a plant's physiological state. It provides valuable information about water stress, photosynthetic activity, transpiration, and environmental responses. Accurate measurement helps to better understand plants, optimize irrigation, and detect diseases at an early stage.",
      whyTitle: "Why is leaf temperature important?",
      whyPoints: [
        "Detecting water stress: If plants cannot absorb enough water, leaf temperature rises due to reduced transpiration.",
        "Monitoring photosynthesis: Temperature changes affect the efficiency of photosynthesis.",
        "Early detection of diseases and stress: Deviations in temperature can indicate biotic or abiotic stress.",
        "Optimizing irrigation and fertilization: Data-driven decisions improve resource efficiency.",
      ],
      sensorsTitle: "Suitable Sensors for Leaf Temperature Measurement",
      sensor1Title: "C3-Mini with Connector Attachment",
      sensor1Points: [
        "Recommended for professional applications",
        "Compact, robust, and specifically designed for environmental and plant measurements",
        "Compatible with various loggers and gateways",
        "Ideal for long-term monitoring in the field or greenhouse",
      ],
      sensor2Title: "MLX90614 (NCIR – Non-Contact Infrared Sensor)",
      sensor2Points: [
        "Non-contact, measures infrared radiation from the leaf surface",
        "Cost-effective and easy to integrate into microcontroller systems",
      ],
      sensor2Limitations: [
        "Wide field of view (~35°) → potential environmental interference",
        "Sensitive to sunlight and wind",
        "Requires precise alignment and possibly shielding",
      ],
      sensor2LimitationsLabel: "Limitations:",
      guidelinesTitle: "Application Guidelines for Accurate Measurements",
      guidelines: [
        "Sensor positioning: As close as possible and perpendicular to the leaf surface",
        "Measurement timing: Preferably in the morning or under controlled conditions",
        "Shielding: Avoid direct sunlight",
        "Calibration: Consider leaf surface emissivity (typically ~0.98)",
        "Data integration: Can be combined with environmental parameters such as humidity, light, and soil moisture",
      ],
      wishlistTitle: "Join the Wishlist",
      wishlistDesc:
        "Join Leaf Temperature Measurement wishlist for updates when ready.",
      wishlistNote:
        "Please check your spam folder for the subscription email should it be flagged as spam.",
      wishlistBtn: "Join Wishlist",
    },
    magneticTrafficCounting: {
      badge: "Smart Traffic Detection",
      heroTitle: "Magnetic Traffic Counting —",
      heroHighlight: "Powered by Carenuity Triple-Adapter Ecosystem",
      heroDesc:
        "Magnetic sensing offers an efficient and unobtrusive way to detect vehicles in motion. Cars contain significant amounts of ferromagnetic material, which locally distorts the Earth's magnetic field.",
      breadcrumbProducts: "Products",
      introTitle:
        "Magnetic Traffic Counting — Powered by Carenuity Triple-Adapter Ecosystem",
      introP1:
        "Magnetic sensing offers an efficient and unobtrusive way to detect vehicles in motion. Cars contain significant amounts of ferromagnetic material, which locally distorts the Earth's magnetic field. A compact sensor module can measure these disturbances with microtesla sensitivity, enabling reliable traffic counting in real time. Fast response, long-term temperature stability and low power consumption make this approach ideal for outdoor deployments, even in remote locations.",
      introP2:
        "Carenuity provides a complete, modular hardware foundation to deploy such sensing systems rapidly. The system integrates Infineon magnetic sensors with Carenuity's plug-and-play Triple-Adapter architecture, enabling fast prototyping, fast field deployment and seamless integration into existing IoT platforms.",
      infineonTitle: "Infineon Sensors Integrated into Carenuity Modules",
      infineonP1:
        "Carenuity supports high-precision sensors from leading manufacturers, including magnetic sensors suitable for traffic detection. The Infineon TLV493D-A1B6 3D Hall sensor is particularly well suited. It measures changes in all three magnetic axes with ample dynamic range and is easy to integrate into low-power microcontroller systems.",
      infineonP2:
        "Carenuity's C3-Mini ecosystem is specifically designed for such integrations. Sensors can be plugged directly into the platform, swapped within minutes and combined with any C3-Mini microcontroller or actuator module. This modularity is a core feature of the Triple-Adapter system: Slot S for the sensor, Slot M for the microcontroller and Slot A for the actuator. Together, these S+M+A components build a complete IoT device.",
      tripleAdapterTitle: "The Carenuity Triple-Adapter Advantage",
      tripleAdapterDesc:
        "The Triple-Adapter is designed to make sensor systems fast to assemble, deploy and iterate. It provides universal interfaces for sensors, controllers, and actuators. Compatibility with ESP32 and ESP8266-based Carenuity microcontrollers enables efficient data processing and wireless communication with Home Assistant and Matter ecosystem integration.",
      buildTitle: "Build Your Traffic Counter in Under 3 Minutes",
      buildDesc:
        "The Solution Builder provides automated installation without programming. Devices configure via USB with an Install-for-Free button. Sensors can later be swapped in the field within minutes thanks to standardized module formatting and Quick Change features.",
      howTitle: "How Magnetic Traffic Counting Works",
      howDesc:
        "The module continuously measures ambient magnetic fields. Vehicle passages create sharp magnetic signature changes detectable at microtesla sensitivity levels. By combining the Infineon magnetic sensor with a C3-Mini controller and the Triple-Adapter architecture, Carenuity enables:",
      howPoints: [
        "Real-time detection",
        "Autonomous operation",
        "Wireless reporting",
        "OTA updates",
      ],
      whyTitle: "Why Carenuity for Traffic Counting",
      whyPoints: [
        "Modularity — swap sensors without replacing the full system",
        "Rapid deployment — operational in under 3 minutes",
        "Future-proofing — swappable sensors adapt to evolving requirements",
        "Scalability — from single pilots to full monitoring networks",
        "Ecosystem integration — works with municipalities, research institutions, and startups",
      ],
      startTitle: "Start Measuring Smarter",
      startDesc:
        "Carenuity supplies complete hardware stacks, installation services, and sensor modules for rapid deployment across pilot installations or full monitoring networks.",
      shopTitle: "Shop with us",
      shopProduct: "Sensor box Shield2Go Dual Adapter - Infineon Line",
      shopDesc:
        "The kit is intended solely for your evaluation purposes. By operating this kit, you agree to use this kit only for such an evaluation.",
      shopBtn: "Buy Now",
      installBtn: "Install for free",
      wishlistTitle: "Join the Wishlist",
      wishlistDesc:
        "Join the Magnetic Traffic Counting wishlist for updates when ready.",
      wishlistNote:
        "Please check your spam folder for the subscription email should it be flagged as spam.",
      wishlistBtn: "Join Wishlist",
    },
    plantBar: {
      badge: "Smart Plant Care",
      heroTitle: "PlantBar —",
      heroHighlight: "Never Thirsty Plants Again",
      heroDesc:
        "Imagine a world where your plants never suffer from thirst or neglect. The Carenuity Plant Bar is here to make that dream a reality.",
      breadcrumbProducts: "Products",
      sensorTitle: "Capacitive Soil Moisture Meter",
      sensorDesc:
        "The Capacitive Soil Moisture Meter is a reliable and durable sensor designed to measure soil moisture levels using capacitive sensing technology. Unlike traditional resistive sensors that rely on exposed metal probes, this meter detects changes in the soil's dielectric constant, making it more resistant to corrosion and ideal for long-term use in both indoor and outdoor environments. It provides accurate, consistent readings and is easily integrated with microcontrollers like Arduino or ESP32, making it a popular choice for smart gardening, irrigation systems, and agricultural monitoring. Its low power consumption and stable performance make it an efficient tool for maintaining optimal soil conditions in various applications.",
      featuresTitle: "Key Features",
      features: [
        {
          title: "Corrosion Resistant",
          desc: "Unlike traditional resistive sensors that rely on exposed metal probes, this meter detects changes in the soil's dielectric constant, making it more resistant to corrosion.",
        },
        {
          title: "Microcontroller Compatible",
          desc: "Integrates with microcontrollers like Arduino or ESP32 for seamless IoT connectivity.",
        },
        {
          title: "Low Power Consumption",
          desc: "Designed for energy-efficient operation, ideal for long-term outdoor and indoor deployments.",
        },
        {
          title: "Versatile Applications",
          desc: "Suitable for smart gardening, irrigation systems, and agricultural monitoring.",
        },
      ],
      plantBarTitle:
        "Never Thirsty Plants Again: Carenuity Plant Bar Revolutionizes Plant Care",
      plantBarP1:
        "Imagine a world where your plants never suffer from thirst or neglect. The Carenuity Plant Bar is here to make that dream a reality. This compact device, built on the advanced C3-Mini architecture, features a vibrant 0.96-inch OLED display that brings plant care into the digital age.",
      plantBarP2:
        "With the Carenuity Solution Builder, you can effortlessly install and update the latest applications, ensuring your device is always equipped with the newest features. But the magic doesn't stop there. This smart tool helps you monitor essential parameters like soil moisture, temperature, and humidity, making plant care easier and more efficient than ever before.",
      plantBarP3:
        "Gone are the days of guessing when to water your plants. The Carenuity Plant Bar provides real-time data, alerting you when your plants need attention. Whether you're a seasoned gardener or a novice plant enthusiast, this device is designed to simplify your life and ensure your plants thrive.",
      plantBarP4:
        "Plus, you can personalize your device with your own logo on the display, adding a unique touch to your plant care routine. Available in a variety of colors, the Carenuity Plant Bar not only performs exceptionally but also complements your style.",
      structureTitle: "Structure",
      shopTitle: "Shop with Us",
      shopProduct: "Capacitive Soil Moisture Sensor, V2.0",
      shopProductDesc:
        "The capacitive soil moisture sensor is a reliable and durable tool for measuring soil moisture. It operates at a voltage of 3.3 to 5.5V.",
      shopBtn: "Buy Now",
      wishlistTitle: "Join the Wishlist",
      wishlistDesc: "Join the PlantBar wishlist for updates when ready.",
      wishlistNote:
        "Please check your spam folder for the subscription email should it be flagged as spam.",
      wishlistBtn: "Join Wishlist",
    },
    aqiInsights: {
      badge: "Air Quality Index",
      heroTitle: "The Air You Breathe Shapes Your Health —",
      heroHighlight: "Stay Ahead of Pollution Risks",
      heroDesc:
        "Air may look clean, but harmful pollutants often linger undetected — especially indoors. The Air Quality Index (AQI) is a critical measure of what you're really breathing in.",
      breadcrumbProducts: "Products",
      introP1:
        "Air may look clean, but harmful pollutants often linger undetected—especially indoors. The Air Quality Index (AQI) is a critical measure of what you're really breathing in, tracking pollutants like particulate matter (PM2.5 and PM10), ozone, nitrogen dioxide, and more.",
      introP2:
        "When AQI levels rise, so do health risks. Short-term exposure to poor air quality can cause irritation of the eyes, nose, and throat, trigger asthma attacks, and reduce lung function.",
      introP3:
        "Long-term exposure has been linked to heart disease, respiratory illnesses, and even shortened life expectancy.",
      introP4:
        "Without active monitoring, poor air quality can silently affect your concentration, energy levels, and overall wellbeing.",
      introP5:
        "Vulnerable groups—such as children, seniors, and individuals with chronic conditions—face an even higher risk.",
      introP6:
        "That's why real-time AQI monitoring isn't just a feature—it's a frontline defense for your health.",
      applicationsTitle: "Available Applications",
      applications: [
        "Barometer",
        "Hygrometer",
        "Thermometer",
        "Motion Detector",
        "Luxmeter",
        "IR Radiometer",
        "Presence Button",
      ],
      wishlistTitle: "Join the Wishlist",
      wishlistDesc:
        "Stay informed about AQI Insights updates and new features.",
      wishlistNote:
        "Please check your spam folder for the subscription email should it be flagged as spam.",
      wishlistBtn: "Join Wishlist",
    },
    sensorArray: {
      badge: "IoT & Sensing Bundle",
      heroTitle: "Sensor Array Kit —",
      heroHighlight: "Perfect Bundle for IoT and Sensing Projects",
      heroDesc:
        "A comprehensive bundle of 10 complete units based on the Shield2Go Single Adapter and the DPS310 pressure sensor — ideal for developers integrating precise pressure sensing into IoT systems.",
      breadcrumbProducts: "Products",
      introTitle:
        "Sensor Array Kit — Perfect Bundle for IoT and Sensing Projects",
      introDesc:
        "The Sensor Array Kit is a comprehensive bundle containing 10 complete units based on our Shield2Go Single Adapter and the DPS310 pressure sensor from the Chipglobe Comfort Line. This set is ideal for developers and engineers looking to integrate reliable and precise pressure sensors into their IoT systems.",
      contentsTitle: "Kit Contents",
      contents: [
        {
          label: "10x 3D-Printed Enclosure",
          desc: "Durable and eco-friendly enclosures for the single adapters.",
        },
        {
          label: "10x Shield2Go Single Adapter Trust-X V2.0",
          desc: "Enables easy sensor integration.",
        },
        {
          label: "10x ESP32-WROOM-32D Modules",
          desc: "WiFi- and Bluetooth-enabled, perfect for IoT applications.",
        },
        {
          label: "10x DPS310 Pressure Sensor",
          desc: "High-precision barometric sensor from our Chipglobe Comfort Line.",
        },
        {
          label: "10x USB Cable",
          desc: "High-quality Chipglobe USB cables for power supply.",
        },
      ],
      devDesc:
        "This kit enables fast development and evaluation of IoT systems with a focus on precise pressure measurements.",
      shopProduct:
        "Sensor Array Kit - Complete Bundle with 10x Single Adapter and DPS310",
      shopProductDesc:
        "This kit enables fast development and evaluation of IoT systems with a focus on precise pressure measurements.",
      shopBtn: "Buy Now",
      installBtn: "Install for free",
      wishlistTitle: "Join the Wishlist",
      wishlistDesc: "Join the Sensor Array wishlist for updates when ready.",
      wishlistNote:
        "Please check your spam folder for the subscription email should it be flagged as spam.",
      wishlistBtn: "Join Wishlist",
    },
    c3MiniPiggyback: {
      badge: "C3-Mini Ecosystem",
      heroTitle: "Accelerating Prototyping with",
      heroHighlight: "Piggyback Sensors & the C3-Mini Ecosystem",
      heroDesc:
        "Mount any sensor directly onto the standardized C3-Mini pinout — no wiring needed. Integrate in under three minutes via Solution Builder.",
      breadcrumbProducts: "Products",
      sensorsTitle: "Piggyback Sensor Modules",
      applicationsLabel: "Applications",
      shopBtn: "Shop Now",
      wishlistTitle: "Join the Wishlist",
      wishlistDesc:
        "Join the C3-Mini Piggybacks wishlist for updates when ready.",
      wishlistNote:
        "Please check your spam folder for the subscription email should it be flagged as spam.",
      wishlistBtn: "Join Wishlist",
    },
    aquabar: {
      badge: "Smart Aquarium Monitoring",
      heroTitle: "Carenuity AquaBar",
      heroHighlight: "Protect Your Aquarium with Smart Temperature Monitoring",
      heroTagline: "Keep your aquarium life safe — even when you are away.",
      heroDesc:
        "AquaBar monitors water temperature continuously and alerts you instantly if conditions become unsafe.",
      breadcrumbProducts: "Products",
      problemTitle: "The Problem",
      problemItems: [
        "Aquariums are delicate ecosystems — even minor temperature shifts risk harming inhabitants",
        "Heater failures or unexpected temperature swings can occur without warning",
        "Issues typically emerge during owner absence, particularly vacation periods",
        "Detection delays often mean irreversible damage",
      ],
      solutionTitle: "The Solution",
      solutionDesc:
        "Carenuity AquaBar is a compact smart sensor that continuously tracks aquarium water temperature and alerts you immediately when something goes wrong.",
      statusGreen: "Temperature stable and safe",
      statusOrange: "Warning — outside ideal range",
      statusRed: "Danger — immediate action required",
      alertDesc:
        "Instant notifications on your phone if water temperature drifts or heater fails",
      benefitsTitle: "Key Benefits",
      benefits: [
        {
          title: "Protect aquatic life",
          desc: "Safeguard fish, corals, and plants from critical temperature swings",
        },
        {
          title: "Peace of mind on vacation",
          desc: "Always know your aquarium is safe, wherever you are",
        },
        {
          title: "Early failure detection",
          desc: "Recognize heater or chiller malfunctions before it's too late",
        },
        {
          title: "Simple setup",
          desc: "Works in 3 minutes with Carenuity Solution Builder",
        },
        {
          title: "Smart integration",
          desc: "Compatible with Matter, Home Assistant, Google Home, Alexa, Apple Home",
        },
      ],
      howTitle: "How It Works",
      howSteps: [
        "Place AquaBar sensor in the aquarium",
        "Connect via USB or battery pack",
        "Configure through Carenuity Solution Builder",
        "LED indicator shows safe/alert state at a glance",
        "Optional push notifications keep you informed while away",
      ],
      audienceTitle: "Who Is It For?",
      audienceItems: [
        "Aquarium owners who travel frequently",
        "Reef keepers and marine aquariums (high sensitivity)",
        "Freshwater tanks with delicate fish species",
        "Smart home enthusiasts who want real-time aquarium data",
      ],
      optionsTitle: "Product Options",
      diyTitle: "DIY Kit",
      diyItems: [
        "C3-Mini",
        "Waterproof sensor probe",
        "LED ring",
        "Power cable",
        "Quick-start guide",
      ],
      readyTitle: "Ready-to-Use Device",
      readyItems: ["Preassembled", "Sealed housing", "Plug & play"],
      wishlistTitle: "Join the Wishlist",
      wishlistDesc:
        "Join the AquaBar wishlist and be the first to know when it's ready.",
      wishlistNote:
        "Please check your spam folder for the subscription email should it be flagged as spam.",
      wishlistBtn: "Join Wishlist",
    },
    autonomousCar: {
      badge: "Intermediate-Level Project",
      heroQuestion: "Ever wondered how to build",
      heroHighlight: "your own self-driving car?",
      heroDesc:
        "Introducing Autonomous Driving Car V3 — an intermediate-level project by Carenuity that brings the future of autonomous tech to your fingertips. Built with Raspberry Pi 4, custom 3D-printed parts, and vision-based navigation with open-source C/C++ code.",
      getHardware: "Get your hardware",
      installFree: "Install for Free",
      breadcrumbProducts: "Products",
      whyTitle: "Why Participate",
      whyItems: [
        "Discover how AI powers autonomy",
        "Get hands-on with 3D-printed designs you can customize",
        "Join a community of innovators building the future",
      ],
      storyLabel: "The story behind the blueprint for your first own car",
      storyTitle: "Now Autonomously Driving: The Reincarnation of a Winner",
      storyP1:
        "The shark-like design of the MF3, a symbol of speed and precision, has been reincarnated in 2025 in a 1:10 ratio model. The Schaeffler FAG Model MF3 from 2009 — unveiled at Schaeffler's foyer event attended by Dr. Grunau and Dipl.-Ing. Seubert — is now displayed at THWS University in Schweinfurt.",
      storyP2:
        "The 2025 Infineon Car leverages advanced AI competencies to navigate home and office environments autonomously. The vehicle serves as a versatile platform for advanced sensors, enhancing safety in smart homes and offices.",
      storyP3:
        "Carenuity and Infineon commit to transferring their building knowledge to selected international universities.",
      storyP4:
        "Built by Eren Arslan Ramazan, a THWS University student who previously won the Carenuity Home Challenge for smart real estate sensors — creating a sophisticated barometer with a Bosch BMP180 / BME680 sensor.",
      versionsDesc: [
        "First presentation by Harald Lehmann at Infineon headquarters in Neubiberg, Germany (Pizza & Beer event).",
        "Improved version upgraded by Daniel Gernert.",
        "Latest autonomous iteration with advanced AI capabilities for real-time decisions and safe navigation.",
      ],
      projectsTitle: "Project Showcase",
      projectsItems: [
        {
          title: "Autonomous Driving Car",
          description:
            "This RC car is equipped with a camera, a Raspberry Pi, an XMC1100 Boot Kit and the DC Motor Control Shield with BTN8982TA.",
        },
        {
          title: "Autonomous Driving Car V2",
          description:
            "An improved iteration with refined hardware integration and enhanced navigation algorithms.",
        },
        {
          title: "Autonomous Driving Car V3",
          description:
            "The latest autonomous version with AI-powered real-time decision-making and simulator integration.",
        },
      ],
      learnMore: "Learn more",
      devRole: "Computer Science, 6th Semester · THWS University",
      devGoalsTitle: "Project Goals",
      devGoalsDesc:
        "The aim was to develop an optimized variant (V3) for the vehicle that can navigate autonomously and safely through different environments. The main objective was to create structured documentation on Hackster.io enabling students to replicate the vehicle and test AI algorithms in competitions.",
      devDescTitle: "Project Description",
      devDescP:
        "The vehicle uses advanced AI capabilities to make real-time decisions and navigate safely. Documentation includes simulator integration and app-based control.",
      devInspirationTitle: "Inspiration",
      devInspirationP:
        "Driven by an interest in modern autonomous technologies, the Schaeffler FAG Model MF3 displayed in the THWS building, and previous success in the Carenuity Home Challenge.",
      devCollabTitle: "Collaboration",
      devCollabP:
        "Solo development with ChipGlobe/Carenuity and Infineon support. Hardware provided by Infineon and ChipGlobe. Communication via messenger for problem-solving, with support from Prof. Heinz Endres.",
      devChallengesTitle: "Major Challenges",
      devChallengesP:
        "Primary obstacles included integrating the various hardware and software & AI systems and ensuring that the vehicle worked reliably and safely. Issues included outdated projects and libraries requiring extensive debugging. Real-time decision-making and precise navigation presented particular difficulties.",
      devAchievementTitle: "Key Achievement",
      devAchievementP:
        '"Other students around the world can now use my documentation to build their own vehicle quickly and easily so that they can test and improve their own AI algorithms."',
      devSkillsTitle: "Skills Acquired",
      skills: [
        "Embedded systems development",
        "C++ programming",
        "Advanced AI and real-time decision-making",
        "System integration and documentation",
      ],
      devRecommTitle: "Recommendations for Other Teams",
      recommendations: [
        "Connect with companies in the field",
        "Leverage expert advice and resources",
        "Communicate closely and utilize available support",
        "Remain flexible and learn from mistakes",
        "Pursue upskilling opportunities",
      ],
      devConclusionTitle: "Conclusion",
      devConclusionP:
        'Eren discovered Carenuity through the Home Challenge competition organized by Prof. Dr. Heinz Endres. "Such additional activities as part of the lectures are extremely valuable — they not only offer learning experiences, but also real opportunities for personal and professional development."',
      pubTitle: "Publications & Links",
      thwsLabel: "THWS press article on the Home Challenge",
      thwsSource: "thws.de · Press Archive",
      hacksterLabel: "Project documentation · Autonomous Driving Car V3",
      hacksterSource: "hackster.io · Eren Arslan Ramazan",
      projectCaption:
        "Eren meeting with Deogratius and David (robotics/mechatronics students) at THWS in Schweinfurt.",
      shopTitle: "Shop with us",
      shopProductName: "Autonomous Driving Car by Infineon & Carenuity",
      shopDesc:
        "The Autonomous Driving Car provides an innovative solution for self-driving vehicles. Equipped with a camera, a Raspberry Pi, and the XMC1100 Boot Kit, it allows control via smartphone, tablet, or laptop.",
    },
    homeChallengeUniversity: {
      sidebar: {
        header: "Home-Challenge",
        subheader: "Universities",
        all: "All",
        close: "Close",
        back: "Back to Home Challenge",
        guideBadge: "Guide",
        items: {
          c3Mini: {
            label: "C3 Mini Kisii Boxes",
            desc: "IoT & AI Sensor Kits Guide",
          },
          auth: { label: "AUTH", desc: "Aristotle Univ. of Thessaloniki" },
          oauth: { label: "Open AUTH", desc: "Open Edition" },
          duth: { label: "DUTH", desc: "Democritus Univ. of Thrace" },
          uop: { label: "UOP", desc: "University of Patras" },
          thws: { label: "THWS", desc: "Würzburg-Schweinfurt" },
          tum: { label: "TUM", desc: "Tech. Univ. of Munich" },
          tuk: { label: "TUK", desc: "Tech. Univ. of Kenya" },
          nairobi: { label: "Nairobi", desc: "Home Challenge Kenya" },
          girlsDay: { label: "Girls' Day", desc: "STEM Empowerment" },
          nightSessions: { label: "Night Sessions", desc: "Thursday Sessions" },
          certificate: { label: "Certificate", desc: "Verify Achievement" },
        },
      },
      common: {
        home: "Home",
        homeChallenge: "Home Challenge",
        universityPartner: "University Partner",
        byCarenuity: "by carenuity",
        pressMaterials: "Press Materials",
        backToStart: "Back to Start Page",
        press: "Press",
      },
      auth: {
        crumb: "AUTH",
        title: "AUTH Home Challenge",
        subtitle: "Aristotle University of Thessaloniki",
        linkText: "AUTH Home Challenge",
      },
      duth: {
        crumb: "DUTH",
        title: "DUTH Home Challenge",
        subtitle: "Democritus University of Thrace",
        linkText: "DUTH Home Challenge",
      },
      tuk: {
        crumb: "TUK",
        title: "TUK Home Challenge",
        subtitle: "Technical University of Kenya",
        linkText: "TUK Home Challenge",
      },
      tum: {
        crumb: "TUM",
        title: "TUM Home Challenge",
        subtitle: "Technical University of Munich",
        linkText: "TUM Home Challenge",
      },
      uop: {
        crumb: "UOP",
        title: "UOP Home Challenge",
        subtitle: "University of Patras",
        linkText: "UOP Home Challenge",
      },
      nairobi: {
        crumb: "Nairobi",
        title: "Nairobi Home Challenge",
        subtitle: "From Kenya to the World",
        locationBadge: "Location",
        linkText: "Nairobi Home Challenge",
      },
      nightSessions: {
        crumb: "Night Sessions",
        title: "Night Sessions",
        subtitle: "A Kind of Home Challenge",
        intro: "Thursday Night Sessions by Carenuity.",
        badge: "Thursday Sessions",
        linkText: "Thursday Night Sessions, a kind of Home Challenge",
      },
      thws: {
        crumb: "THWS",
        title: "THWS Home Challenge",
        subtitle: "Würzburg-Schweinfurt University",
        linkText: "THWS Home Challenge",
        register: "Register",
        registerDesc: "for the home challenge towards AI",
        scan: "Scan",
        scanDesc: "to join WhatsApp group",
      },
      thwsPress: {
        crumb: "Press Materials",
        title: "THWS Press Materials",
        subtitle: "Student Projects Showcase",
        badge: "Press & Projects",
        sectionPress: "Press Materials",
        sectionScan: "Scan",
        sectionRetrospective:
          "Retrospective: Student Home Challenge Projects 2024",
        sectionInteraction: "The Interaction Between Makers and Users",
        interactionBody:
          "The interaction between makers and users is of great importance. Users provide valuable feedback and new ideas and use cases that enable makers to improve their products and adapt them to new needs. As Carenuity, we support this interaction by providing platforms and resources to facilitate exchange between makers and users. The goal is to work together to create innovative and user-friendly devices.",
        sectionSolutionBuilders: "The Role of the Solution Builders",
        solutionBuildersBody:
          "The developers on the Solution Builder Platform share their solutions and are an essential component in this process. They bring specialized expertise and experience to develop tailored solutions that meet users' specific needs. Through their expertise, they help to further optimize the interaction between makers and users and advance the development of innovative products.",
        sectionWhatsapp: "THWS Solution Builder WhatsApp Group",
        whatsappBody:
          'This WhatsApp group "THWS Solution Builder" is open for THWS staff & students to discuss and refine their solutions:',
        thwsPressLink:
          "Würzburg-Schweinfurt University of Applied Sciences press release",
      },
      oauth: {
        crumb: "Open AUTH",
        title: "Open AUTH Home Challenge",
        subtitle: "Open University Edition",
        linkText: "Open AUTH Home Challenge",
      },
      oauthPress: {
        crumb: "Press Materials",
        title: "Press Materials",
        subtitle: "Open AUTH Home Challenge",
        badge: "Press",
      },
      assortmentPress: {
        crumb: "Press Materials",
        title: "Press Materials",
        subtitle: "C3-Mini Kisii Boxes",
        badge: "Press",
      },
      girlsDay: {
        crumb: "Girls' Day",
        title: "Girls' Day 2026",
        subtitle: "Empowering Young Women in STEM",
        intro: "In partnership with THWS Hochschule — April 23, 2026.",
        badge: "STEM Empowerment",
        excitedHtml:
          "We are excited to share that <strong>Carenuity</strong>, in proud partnership with the <strong>THWS Hochschule</strong>, will be actively participating in Girls’ Day 2026! This inspiring and nationally recognized event, scheduled for <strong>April 23, 2026,</strong> is dedicated to empowering young women by opening doors to careers in <strong>Science, Technology, Engineering, and Mathematics (STEM)</strong>. Through a variety of hands-on activities, workshops, and engaging presentations, participants will have the unique chance to gain valuable insights into innovative professions that shape the future.",
        whatIsTitle: "What is Girls’ Day?",
        whatIsBody:
          "Girls’ Day is an annual initiative designed to give girls the opportunity to explore technical, scientific, IT, and engineering professions. It allows them to participate in hands-on workshops and real-world experiments, interact with role models and professionals in STEM careers, and gain confidence in their technical abilities. Most importantly, it helps them discover academic and career paths they might not have previously considered, opening doors to a future in fields where women are often underrepresented.",
        importanceTitle: "Importance of Girls’ Day",
        importanceIntro:
          "In the context of Carenuity’s collaboration with THWS Hochschule for Girls’ Day 2026, the event serves a key educational and empowerment purpose:",
        importancePoints: [
          {
            title: "Demystifying technology:",
            body: "By building something tangible like a Bluetooth speaker, girls see that technology is not intimidating but accessible and fun.",
          },
          {
            title: "Promoting gender equity:",
            body: "It directly addresses the gender gap in STEM by inspiring and equipping girls with the confidence and skills to explore these fields.",
          },
          {
            title: "Creating early engagement:",
            body: "Activities like stacking components using the Carenuity Triple-Adapter give a playful, intuitive entry into engineering principles.",
          },
          {
            title: "Encouraging future STEM careers:",
            body: "Girls’ Day plants the seed that they, too, can thrive as engineers, scientists, developers, or innovators.",
          },
        ],
        importanceOutro:
          "Girls’ Day is more than an event — it’s a movement to reshape perceptions, build confidence, and empower the next generation of women in technology and science.",
        joinTitle: "Join us",
        joinP1:
          "Join us remotely for an exciting and educational day packed with inspiring activities and interactive, hands-on workshops. During this special Girls’ Day 2026 event, you’ll have the unique opportunity to build your very own Bluetooth speaker in just a few minutes — no prior experience needed!",
        joinP2:
          "Using the innovative Carenuity Triple-Adapter, participants will explore how technology works by stacking electronic components into the S (Sensor), M (Microcontroller), and A (Actuator) slots. This fun and engaging activity is designed to spark curiosity, boost confidence, and show how easy and exciting it can be to get started with STEM.",
        slotsTitle: "Components in the S, M, and A slots:",
        slots: [
          { name: "Slot S:", desc: "Integrate high-precision sensors." },
          {
            name: "Slot M:",
            desc: "Add the microcontroller to process sensor data.",
          },
          {
            name: "Slot A:",
            desc: "Connect the actuator to perform actions based on the data.",
          },
        ],
        joinOutro:
          "This interactive experience is designed to empower and inspire the next generation of female leaders in technology and innovation. Don’t miss out on this fantastic opportunity to learn, create, and connect with like-minded individuals. Let’s shape the future together, one device at a time!",
        kitTitle: "Home-Challenge Kit for Girls’ Day 2026",
        kitBody:
          "This is the Bluetooth speaker that the participants will proudly build themselves during Girls’ Day 2026. It’s more than just a gadget — it’s a symbol of creativity, hands-on learning, and the power of young women stepping confidently into the world of technology.",
        kitReadyTitle: "Get ready for an unforgettable Girls’ Day 2026!",
        kitOrder:
          "To make the most of this incredible experience, be sure to order your Home-Challenge Kit in advance. This specially prepared kit includes everything you’ll need to fully participate in all planned activities — right from the comfort of your home.",
        kitImportantLabel: "Important:",
        kitImportantBody:
          "Make sure you have access to a soldering iron, as it will be essential for some of the tasks. We look forward to seeing you participate and enjoy the hands-on experience!",
        learnMoreCta: "Learn more on Home Challenge",
      },
      certificate: {
        crumb: "Certificate",
        title: "Home Challenge Certificate",
        subtitle: "Verify Your Achievement",
        badge: "Certificate",
        loading: "Loading…",
        certHeading: "Certificate of Achievement",
        certifies: "This certifies that:",
        achievedIntro:
          "has successfully completed the Carenuity Home Challenge, showcasing exceptional skills and knowledge in the fields of",
        iot: "Internet of Things (IoT)",
        and: "and",
        ai: "Artificial Intelligence (AI)",
        competenciesTitle: "Competencies Demonstrated:",
        competencies: [
          "Comprehensive understanding of IoT communication protocols",
          "Proficiency in designing and implementing IoT solutions",
          "Ability to collect and analyze data from IoT devices",
          "Knowledge of best practices in IoT security",
          "Application of AI techniques in IoT systems",
          "Integration of AI algorithms for data processing and decision-making",
        ],
        informalNote:
          "This certificate is an informal recognition of the competencies gained through the Carenuity Home Challenge.",
        chipglobeNote:
          "ChipGlobe, with over 15 years of experience as a trusted provider of talent, proudly acknowledges the dedication and expertise demonstrated by the participants in this challenge.",
        notCompleted: "has not yet completed the challenge!",
      },
      c3Mini: {
        crumb: "IoT & AI Sensor Kits",
        title: "IoT & AI Sensor Kits",
        subtitle: "Bring Real Engineering to Your Campus",
        intro:
          "C3-Mini powered hardware for IoT, AI, and engineering programs.",
        badge: "For Universities",
        overviewTitle: "Overview",
        overviewBody:
          "These IoT & AI Sensor Kits enable students to build fully functional IoT systems within minutes. Designed for universities, innovation hubs, and engineering programs, they combine modular hardware with a browser-based software platform, eliminating traditional setup barriers.",
        solutionBuilderTitle: "Solution Builder",
        solutionBuilderBody:
          "The Solution Builder is a fully browser-based development environment that allows students to create, configure, and deploy IoT applications in under three minutes.",
        howItWorks: "How it works:",
        howItWorksList: [
          "Select a ready-to-use application (e.g. temperature monitor, motion detector)",
          "Connect the C3-Mini via USB-C",
          "Flash directly from the browser — no installation required",
          "Run instantly on real hardware",
        ],
        githubNote:
          "All projects are backed by transparent GitHub-hosted source code, enabling full customization and advanced development workflows.",
        exploreLink: "Explore Solution Builder →",
        threeMinutesTitle: "3 Minutes to Your First Device",
        steps: [
          {
            step: "1. Connect",
            desc: "Plug the C3-Mini into your computer via USB-C. No drivers or software installation required.",
          },
          {
            step: "2. Select",
            desc: "Open the Solution Builder in your browser and choose a ready-to-run application (e.g. temperature monitor).",
          },
          {
            step: "3. Flash",
            desc: "Flash the firmware directly from the browser to the device with one click.",
          },
          {
            step: "4. Run",
            desc: "Your IoT device is live instantly. Sensor data appears on the display or via serial/web output.",
          },
        ],
        boxesTitle: "The Boxes",
        box1Title: "Box 1 – Engineering Kit (15 Components)",
        box2Title: "Box 2 – Starter Kit (14 Components)",
        impactTitle: "Impact for Students",
        impactBody:
          "Students gain hands-on experience in IoT, electronics, and AI. They learn real-world engineering skills, build working prototypes, and develop solutions relevant to industry challenges.",
        bringTitle: "Bring This to Your University",
        bringBody:
          "Deploy a complete IoT & AI education ecosystem within weeks. Enable students to build real systems, reduce setup complexity, and accelerate innovation.",
        contactUs: "Contact Us",
        pressMaterial: "Press Material",
        kisiiOnepager: "Kisii OnePager",
        assortmentBoxCrumb: "Assortment Box",
      },
    },
    programsGuides: {
      shared: {
        news: "News:",
        step: "Step",
        applications: "Applications",
        completeGuide: "Complete guide",
        furtherReadingPre: "For further reading",
        furtherReadingLink: "see this conclusive guide",
        enjoyApps: "Enjoy more free Apps on Solution Builder",
      },
      sidebar: {
        kicker: "Programs",
        title: "AI Programs & Guides",
        universityGroup: "University Program for AI",
        guidesGroup: "Guides",
        openweather: "OpenWeather API Key",
        qweather: "Q-Weather API Key",
        spotify: "Spotify API Key",
        youtube: "YouTube API Key",
        adafruit: "Adafruit IO API Key",
        thingspeak: "ThingSpeak API Key",
      },
      landing: {
        pageName: "Programs",
        pageDesc:
          "University Programs for AI and step-by-step guides for the API keys used by our solutions.",
        uniTitle: "University Program for AI",
        uniDesc:
          "We cooperate with selected universities and hire AI-Experts and Interns across our subsidiaries.",
        guidesTitle: "Guides",
        guidesDesc:
          "Step-by-step instructions for obtaining the API keys used by our solutions.",
        kenyaDesc:
          "We are hiring AI-Experts and Interns from selected universities at our Kenya subsidiary.",
        greeceDesc:
          "ChipGlobe / Carenuity joined the HETiA Alliance, formerly the Semiconductor Alliance of Greece.",
        germanyDesc:
          "Cooperations with selected German universities on AI-assisted edge devices.",
      },
      kenya: {
        pageName: "University Program for AI — Kenya",
        pageDesc:
          "We are hiring AI-Experts and Interns from selected universities at our Kenya subsidiary.",
        region: "Kenya",
        heading:
          "We are hiring AI-Experts and Interns from selected universities at our Kenya subsidiary.",
        ksuNews:
          "News: The Kisii University recently specialized in their courses on the Raspberry Pi Pico W, with Wifi on board, from Infineon Technologies AG.",
        tukNews:
          "News: December 2023, an Intern from Nairobi will finish his remotely mentored internship on AI-assisted Edge Devices, with focus on Object Detection using Edge Impulse.",
        tukItalic:
          "TUK News November 2023, Cyntia participated at IEEE TUK SB INNOVATION WEEK & INDUSTRY SYMPOSIUM",
        tumNews:
          "News: Students from the University of Mombasa TUM and students from the Technical University of Munich (TUM) plan to cooperate on AI-assisted edge-devices.",
      },
      greece: {
        pageName: "University Program for AI — Greece",
        pageDesc:
          "ChipGlobe / Carenuity recently joined the HETiA Alliance, formerly known as Semiconductor Alliance of Greece.",
        region: "Greece",
        heading:
          "ChipGlobe / Carenuity recently joined the HETiA Alliance, formerly known as Semiconductor Alliance of Greece.",
        uopTitle: "Cooperation with RENESAS and UOP",
        uopNews:
          "News: Carenuity evaluates cooperations with the University of the Peloponnese and RENESAS, headquartered in Patras.",
        pastEventsTitle: "Past Events",
        pastEventsNews:
          "News: 19th-20th of October 2023, Carenuity participated on the HETiA Emerging Tech Conference on Edge Intelligence at the Aristotle University in Thessaloniki and met interested students for Internships, starting in March 2024.",
        oauthTitle: "Open AUTH Home Challenge (OAUTH)",
      },
      germany: {
        pageName: "University Program for AI — Germany",
        pageDesc:
          "Carenuity cooperates with selected German universities on AI-assisted edge devices.",
        region: "Germany",
      },
      openweather: {
        pageName: "Get OpenWeather API Key",
        pageDesc: "How to get the OpenWeatherMap API Key.",
        heading: "How to get the OpenWeatherMap API Key",
        thanksPre: "Thanks to",
        thanksPost:
          "& visit their pages for more projects with their wonderful Kits.",
      },
      qweather: {
        pageName: "Get Q-Weather API Key",
        pageDesc: "How to get the Q-Weather API Key.",
        heading: "How to get the Q-Weather API Key",
        intro:
          "Q-Weather provides weather forecasts through its WeatherAPI. Follow the steps below to register an account and obtain your private API key.",
        registerTitle: "Register for a Weather account",
        registerPre: "Register at",
        registerPost:
          ". Before registering, switch back to your own WiFi or mobile data — while connected to the weather clock hotspot you will not have internet access, so it is recommended to register from a computer.",
      },
      spotify: {
        pageName: "Get Spotify API Key",
        pageDesc: "How to get the Spotify API Key.",
        heading: "How to get the Spotify API Key",
        p1: "With this product you can remotely control your currently active Spotify player (smartphone, web player, dedicated device, etc) with a C3-Mini. After the initial authentication and authorization with the Spotify API the product will display the artwork from the currently playing song and will additionally display the title and the artist's name.",
        p2: "Since the Squared Triple Adapter with 2.8 Inch Display comes with a touch feature you also can pause the song, continue to play and jump to the next and previous song. And if that is not enough you are welcome to ask us for a software code modification on our WebFlashing platform, e.g. for controlling the volume or other features offered by the Spotify API.",
        p3: "In the below demo video you see the Squared Triple Adapter with 2.8 Inch Display on the left and for reference a Samsung Smartphone on the right. Note: The music is played by the smartphone, not the Squared Triple Adapter with 2.8 Inch Display, which acts as a remote for your phone.",
        morePre: "More page content on",
        moreLink: "How to get the Spotify API key",
      },
      youtube: {
        pageName: "Get YouTube API Key",
        pageDesc: "How to get the YouTube API Key.",
        heading: "How to get the YouTube API Key",
        introPre: "Navigate to",
        introLink: "Google Cloud Console",
        introPost: " to begin the journey.",
      },
      adafruit: {
        pageName: "Get Adafruit IO API Key",
        pageDesc: "How to get the Adafruit IO API Key.",
        heading: "How to get the Adafruit IO API Key",
        introPre: "Navigate to the",
        introLink: "Adafruit IO Portal",
        introPost:
          " to begin the journey. You will have to either sign in or sign up to proceed.",
      },
      thingspeak: {
        pageName: "Get ThingSpeak API Key",
        pageDesc: "How to get the ThingSpeak API Key.",
        heading: "How to get the ThingSpeak API Key",
        intro:
          "ThingSpeak provides API keys that let you read from or write to your channels. Here's how you get one:",
        stepByStep: "Step by step",
        li1: "Sign up / Log in at ThingSpeak.",
        li2: "Once logged in, go to Channels (top menu).",
        li3: "Click New Channel (if you don't have one).",
        li3a: "Give your channel a name and description.",
        li3b: "Create fields (up to 8 per channel) — these are your data fields.",
        li4: "After creating a channel:",
        li4a: "Go to your Channel Settings page.",
        li4b: "Look under API Keys.",
        li4b1: "You'll see Write API Key (for sending data).",
        li4b2: "You'll see Read API Key (for reading data).",
      },
    },
  },
  de: {
    nav: {
      home: "START",
      product: "PRODUKT",
      benefits: "VORTEILE",
      resources: "RESSOURCEN",
      helpCenter: "Hilfe-Center",
      programs: "Programme/Anleitungen/API-Schlüssel",
      blogs: "Blogs",
      team: "Team",
      about: "Über uns",
      contact: "Kontakt",
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
        "Carenuity bietet modulare und hochgradig anpassbare Sensorlösungen zur Überwachung von Vitalzeichen und Raumluftqualität.",
      badge: "Wer wir sind",
      heroHeadline: "Mehr über uns erfahren",
      heroSubline:
        "Entdecken Sie unsere Mission, unsere Technologie und die Innovation, die intelligentere, sicherere und vernetztere Pflegelösungen antreibt.",
      introTitle: "Über uns",
      heroTitle:
        "Carenuity bietet modulare und hochgradig anpassbare Sensorlösungen, die präzise und zuverlässig Vitalzeichen und Raumluftqualität überwachen. Durch die Kombination fortschrittlicher Sensortechnologie mit flexiblem Systemdesign passen sich diese Lösungen nahtlos an verschiedene Umgebungen an – ob in Wohnräumen, Gesundheitseinrichtungen oder Smart Buildings. Der Fokus liegt auf der Bereitstellung von Echtzeit-Erkenntnissen, die ein gesünderes Leben, mehr Sicherheit und klügere Entscheidungen unterstützen.",
      heroDesc:
        "Eine premium und weit verbreitete Lösung ist das SQ-Panel, das kontinuierlichen Seelenfrieden durch 24/7-Überwachung von vitalen und Umgebungsbedingungen bietet. Mit seinen intelligenten Sensorfähigkeiten und integrierten Pflegefunktionen stellt das SQ-Panel sicher, dass kritische Daten immer verfügbar sind, wenn es darauf ankommt.",
      missionTitle: "Unsere Mission",
      missionDesc:
        "Unsere Mission ist es, allen jungen Menschen und Pflegenden besonders einfach zu bedienende Sensorsysteme bereitzustellen, mit denen sie Vitalzeichen und Innenraumluftqualität für ihre älteren Familienmitglieder überwachen können.",
      visionTitle: "Unsere Vision",
      visionDesc:
        "Wir möchten junge Menschen und Pflegende mit innovativen und zugänglichen Technologielösungen stärken, die Sicherheit, Komfort und Wohlbefinden älterer Menschen verbessern und ihnen ein würdevolles, selbstbestimmtes Leben ermöglichen.",
      overviewTitle: "Was wir tun",
      overviewDesc:
        "Carenuity ist eine Smart-Home-Gesundheitstechnologielösung von ChipGlobe GmbH. Unser Kernprodukt, das SQ-Panel, erfasst CO₂, TVOC, Temperatur, Luftfeuchtigkeit, Luftdruck und Anwesenheit. Das System unterstützt Matter-Kompatibilität mit Alexa, Google Home und Apple HomeKit.",
      overviewList: [
        "SQ-Panel Sensor-Display",
        "SQ-Connector Matter",
        "SQ-Stromversorgung",
        "SQ-Tischständer",
        "C3-Mini Sensor-Kits",
        "Carenuity Home App (iOS/Android)",
        "Solution Builder (webbasiert)",
      ],
      educationTitle: "Bildungsinitiativen",
      educationDesc:
        "Carenuity unterstützt die Entwicklung von Studierenden durch die Home Challenge Initiative, die IoT-Sensor-Einrichtung, Datenanalyse und benutzerdefinierte Lösungserstellung lehrt.",
      brandTitle: "Markenpräsenz",
      brandDesc: "Finden Sie uns im gesamten Maker- und Entwickler-Ökosystem:",
      brands: [
        {
          name: "Hackster.io",
          desc: "Projektintegrationen und Maker-Community",
        },
        { name: "GitHub", desc: "Firmware und API-Code" },
        {
          name: "YouTube",
          desc: "Unboxing-, Einrichtungs- und Tutorial-Videos",
        },
        { name: "Thingiverse", desc: "3D-druckbare Montagedesigns" },
        {
          name: "Instagram",
          desc: "@carenuity · @diy_carenuity · @bts_carenuity",
        },
        {
          name: "LinkedIn",
          desc: "Unternehmensupdates und professionelles Netzwerk",
        },
      ],
      instagramTitle: "Unsere Instagram-Kanäle",
      instagramChannels: [
        {
          handle: "@carenuity",
          label: "Premium-Kanal",
          target: "Fachleute, Pflegende, Entscheidungsträger",
          purpose: "SQ-Panel präsentieren und Premium-Positionierung stärken.",
        },
        {
          handle: "@diy_carenuity",
          label: "Maker-Kanal",
          target: "Maker, Studierende, DIY-Nutzer",
          purpose: "Innovation fördern und die Maker-Community aufbauen.",
        },
        {
          handle: "@bts_carenuity",
          label: "Insights-Kanal",
          target: "Nicht-technische Nutzer, Pflegende",
          purpose: "Einblicke sammeln und Storytelling verbessern.",
        },
      ],
      contactTitle: "Kontakt aufnehmen",
      contactAddress:
        "Chipglobe GmbH, Cincinnatistr. 60, 81549 München, Deutschland",
      contactEmail: "info@carenuity.com",
      contactPhone: "(+49) 89-1222469-40",
      legalNote:
        "Carenuity™ ist eine eingetragene EU-Wortmarke (EUIPO #018596314) im Besitz von Chipglobe GmbH.",
      brandVisibilityTitle: "Markensichtbarkeit",
      brandVisibilityDesc:
        "Carenuity ist im Entwickler- und Maker-Ökosystem stark vertreten und sorgt für maximale Reichweite und Community-Engagement.",
      sqPanelTitle: "Hauptprodukt: Carenuity™ SQ-Panel",
      sqPanelDesc1:
        "Das SQ-Panel ist ein elegantes, wandmontiertes Sensordisplay, das CO₂, TVOC, Temperatur, Luftfeuchtigkeit, Luftdruck und Anwesenheit erfasst — alles in einem kompakten Gerät.",
      sqPanelDesc2:
        "Es unterstützt Matter-Kompatibilität und lässt sich nahtlos mit Alexa, Google Home und Apple HomeKit integrieren. Verwaltung über die Carenuity Home App auf iOS und Android mit Echtzeit-Überwachung und Push-Benachrichtigungen.",
      sqPanelFeatures: [
        "CO₂ & TVOC-Messung",
        "Temperatur & Luftfeuchtigkeit",
        "Luftdruck",
        "Anwesenheitserkennung",
        "Matter-kompatibel",
        "iOS & Android App",
      ],
      solutionBuilderTitle: "Carenuity™ Solution Builder",
      solutionBuilderDesc:
        "Der webbasierte Solution Builder ermöglicht es Nutzern, Sensorlösungen ohne eine einzige Zeile Code zu konfigurieren und bereitzustellen. Sensoren auswählen, Ökosysteme zuweisen und sofort fertige Firmware im Browser generieren.",
      solutionBuilderFeatures: [
        "Kein Code erforderlich",
        "Browserbasiertes Tool",
        "Unterstützt alle C3-Mini-Sensoren",
        "Multi-Ökosystem-Ausgabe",
        "Sofortige Firmware-Generierung",
      ],
      ipTitle: "Hinweis zum geistigen Eigentum",
      ipDesc:
        "Carenuity™ ist eine eingetragene EU-Wortmarke (EUIPO #018596314) im Besitz von Chipglobe GmbH. Alle Produktnamen, Logos und Designs sind geschütztes geistiges Eigentum der Chipglobe GmbH. Unbefugte Nutzung ist untersagt.",
      strategicTitle: "Strategische Vorteile",
      strategicItems: [
        {
          title: "Modular & Skalierbar",
          desc: "Passen Sie Ihr Sensornetzwerk einfach an jede Umgebung an — vom einzelnen Raum bis zum gesamten Gebäude.",
        },
        {
          title: "Datenschutz-Architektur",
          desc: "Daten bleiben standardmäßig lokal. Wir verkaufen Ihre Daten nie und unser System ist von Grund auf datenschutzfreundlich.",
        },
        {
          title: "Preisgekrönte Innovation",
          desc: "Ausgezeichnet mit dem BSFZ-Siegel 2025 für Forschung & Entwicklung — ein Zeichen zertifizierter Innovation.",
        },
        {
          title: "Smart-Home-kompatibel",
          desc: "Matter-Unterstützung ermöglicht nahtlose Integration mit Alexa, Google Home und Apple HomeKit.",
        },
        {
          title: "Budgetfreundliche Optionen",
          desc: "C3-Mini-Kits bieten Makern, Studierenden und DIY-Enthusiasten professionelle Sensortechnologie zu einem erschwinglichen Preis.",
        },
        {
          title: "Bildungsimpact",
          desc: "Die Home Challenge Initiative ermöglicht Studierenden praktisches Lernen von IoT, Datenanalyse und Lösungsentwicklung.",
        },
      ],
    },
    benefits: {
      badge: "Warum Carenuity",
      heroTitle: "Vorteile",
      heroDesc:
        "Entdecken Sie, wie Carenuity's modulare Sensorlösungen messbaren Mehrwert für Zuhause, Gesundheitseinrichtungen und Smart Buildings schaffen.",
      videoTitle: "Carenuity in Aktion erleben",
      videoDesc:
        "Sehen Sie, wie Carenuity-Sensorlösungen in realen Umgebungen funktionieren — von der Einrichtung bis zur Live-Überwachung.",
      featuresTitle: "Hauptfunktionen & Vorteile",
      features: [
        {
          title: "Austauschbare Sensoren",
          desc: "Die C3-Mini-Geräte sind äußerst vielseitig — tauschen Sie Sensoren in Sekunden aus, um Temperatur, Luftfeuchtigkeit, Luftqualität, CO₂, Anwesenheit und mehr zu überwachen.",
        },
        {
          title: "Weitreichende Kommunikation",
          desc: "Die 868-MHz-Frequenztechnologie sorgt für erweiterte Reichweite und stabile Verbindungen über große Räume, Stockwerke und Außenbereiche hinweg.",
        },
        {
          title: "Sofortige Anwendungen",
          desc: "Stellen Sie fertige Anwendungen in nur drei Minuten mit dem Solution Builder bereit. Kein Code, keine Komplexität.",
        },
        {
          title: "Datenschutz by Design",
          desc: "Daten bleiben standardmäßig lokal. Keine Weitergabe an Dritte. Datenschutzfreundlich nach modernen Standards.",
        },
        {
          title: "Matter & Smart Home bereit",
          desc: "Vollständige Matter-Protokollunterstützung für nahtlose Integration mit Alexa, Google Home und Apple HomeKit.",
        },
        {
          title: "Preisgekrönte Innovation",
          desc: "Ausgezeichnet mit dem BSFZ-Siegel 2025 für Forschung & Entwicklung — ein zertifiziertes Zeichen der Innovation.",
        },
      ],
      useCasesTitle: "Einsatzbereiche",
      useCases: [
        {
          title: "Privathaushalte",
          desc: "Überwachen Sie Luftqualität, Temperatur und Anwesenheit für Sicherheit und Komfort.",
        },
        {
          title: "Gesundheitseinrichtungen",
          desc: "Verfolgen Sie Umgebungsparameter in Pflegeeinrichtungen zur Unterstützung des Wohlbefindens.",
        },
        {
          title: "Smart Buildings",
          desc: "Skalierbare Sensornetzwerke für Büros, Schulen und Immobilien.",
        },
        {
          title: "Bildungsprogramme",
          desc: "Studierende bauen und deployen eigene Sensorlösungen durch die Home Challenge Initiative.",
        },
      ],
      ctaTitle: "Bereit loszulegen?",
      ctaDesc:
        "Installieren Sie Ihre erste Sensorlösung kostenlos und beginnen Sie mit der Überwachung.",
      ctaBtn: "Kostenlos installieren",
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
      heroKicker: "Wir sind für Sie da",
      heroTitle: "Kontaktieren Sie uns",
      heroSubtitle:
        "Ob Sie eine Frage haben, Unterstützung benötigen oder erfahren möchten, wie wir zusammenarbeiten können — melden Sie sich und wir antworten so schnell wie möglich.",
      title: "Senden Sie uns eine Nachricht",
      subtitle:
        "Füllen Sie das Formular aus und unser Team meldet sich innerhalb eines Werktages bei Ihnen.",
      namePlaceholder: "Ihren Namen eingeben",
      emailPlaceholder: "E-Mail eingeben",
      messagePlaceholder: "Wie können wir Ihnen helfen?",
      submitBtn: "Nachricht senden",
      sendingBtn: "Wird gesendet...",
      successMsg: "Nachricht erfolgreich gesendet! Wir melden uns in Kürze.",
      errorMsg: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt.",
      firstName: "Vorname",
      firstNamePh: "Ihren Vornamen eingeben",
      lastName: "Nachname",
      lastNamePh: "Ihren Nachnamen eingeben",
      phoneLabel: "Telefon",
      phonePh: "Ihre Telefonnummer eingeben",
      company: "Unternehmen",
      companyPh: "Ihr Unternehmen eingeben",
      subject: "Betreff",
      subjectPh: "Worum geht es?",
      country: "Land",
      countryPh: "Ihr Land eingeben",
      street: "Straße",
      streetPh: "Straße, Hausnummer",
      zip: "PLZ / Stadt",
      zipPh: "Postleitzahl, Stadt",
      phoneTitle: "Rufen Sie uns an",
      phoneDesc:
        "Erreichen Sie unser Team während unserer Geschäftszeiten direkt telefonisch.",
      phone: "(+49) 89-1222469-40",
      emailTitle: "Schreiben Sie uns",
      emailDesc:
        "Schreiben Sie unserem Team — wir helfen Ihnen gerne bei Fragen oder Support.",
      email: "info@carenuity.com",
      addressTitle: "Besuchen Sie uns",
      addressDesc: "Sie sind während der Geschäftszeiten herzlich willkommen.",
      addressLine1: "Professor-Messerschmitt-Strasse 1a, 3. Stock",
      addressLine2: "85579 Neubiberg, Deutschland",
      hoursTitle: "Öffnungszeiten",
      hours: "Mo – Fr · 9:00 – 17:00 Uhr",
      socialTitle: "Folgen Sie uns",
      mapTitle: "So finden Sie uns",
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
    budgetFriendly: {
      title: "Budgetfreundlich – nicht nur für Studenten",
      currentPage: "Aktuelle Seite",
      explore: "Entdecken",
      cards: [
        {
          title: "C3-Mini™ Anwendungen",
          desc: "GPIO-Projekte, WLED-Beleuchtung, individuelle Hardware-Projekte und mehr.",
        },
        {
          title: "KI-gestützte Lösungen",
          desc: "Kameravision, Radarsensoren und autonome Smart-Systeme.",
        },
        {
          title: "All-in-One-Sensorboxen",
          desc: "Vorinstallierte, einsatzbereite Sensorboxen – einstecken und messen.",
        },
        {
          title: "C3-Mini™ Sensor-Auswahlbox",
          desc: "Ein kuratiertes Starterpaket mit einer Auswahl kompatibler Sensoren.",
        },
      ],
    },
    c3mini: {
      badge: "Budgetfreundliches IoT",
      heroTitle1: "C3-Mini™ Anwendungen",
      heroTitle2: "Alles ist möglich",
      heroSub:
        "Ein kompaktes Wi-Fi- & Bluetooth-5-Board (LE) auf Basis des ESP32-C3FH4. Kompatibel mit MicroPython, Arduino, CircuitPython und ESP-IDF.",
      heroBtn: "C3-Mini™ Anwendungen",
      whatTitle: "Was ist der C3-Mini™?",
      whatP1:
        "Der C3-Mini™ ist ein kompaktes, leistungsstarkes Mikrocontroller-Board auf Basis des ESP32-C3-Chips mit einer RISC-V Single-Core-CPU mit 160 MHz. Er verfügt über Wi-Fi und Bluetooth LE 5.0, einen Type-C-USB-Anschluss, 4 MB Flash und 12 GPIO-Pins mit ADC-, I2C-, SPI- und UART-Schnittstellen.",
      whatP2:
        "Er hat denselben Formfaktor und dieselbe Pinbelegung wie der beliebte D1 Mini und ist damit kompatibel mit dem weltweit größten Sensor- und Aktor-Shield-Portfolio. Die Standardfirmware ist MicroPython, aber er unterstützt auch Arduino, CircuitPython und ESP-IDF.",
      whatTip:
        "Tipp: Zum Flashen des C3-Mini den BOOT-Taster halten, kurz den RST-Taster drücken (BOOT weiter halten) und dann WebFlashing starten.",
      specsTitle: "Technische Daten",
      specHeaders: ["Spezifikation", "Wert"],
      specs: [
        ["Betriebsspannung", "3,3 V"],
        ["Digitale I/O-Pins", "12"],
        ["Taktfrequenz", "160 MHz"],
        ["Flash", "4 MB"],
        ["Größe", "34,3 × 25,4 mm"],
        ["Gewicht", "2,6 g"],
      ],
      versionsTitle: "Versionen",
      versions: [
        { label: "V2.2.1", desc: "Carenuity EU-Version" },
        { label: "V2.1.0", desc: "Lolin-Version" },
        { label: "V1.0.0", desc: "Originalversion" },
      ],
      hwFeaturesTitle: "Hardware-Merkmale",
      hwFeatures: [
        "ESP32-C3 Wi-Fi & Bluetooth LE mit RISC-V Single-Core-CPU",
        "Type-C-USB-Anschluss",
        "1× WS2812B RGB-LED an Bord",
        "ADC-, I2C-, SPI-, UART-Schnittstellen",
        "Kompatibel mit LOLIN D1 Mini Shields",
        "Unterstützt MicroPython, Arduino, CircuitPython, ESP-IDF",
      ],
      buildTitle: "Eigenes Gerät in Sekunden bauen:",
      standaloneApps: [
        {
          title: "WLED Lichtsteuerung",
          desc: "WLED-Firmware für adressierbare LED-Streifen mit Effekten, Musikreaktivität und Smart-Home-Integration.",
          href: "https://chipglobe-dev.web.app/cloudfree/WLED/C3-Mini",
        },
        {
          title: "GPIO-Viewer",
          desc: "Alle GPIO-Pins live im Browser überwachen – ideal zum Debuggen von Hardware-Projekten und Sensorschaltungen.",
          href: "https://chipglobe-dev.web.app/cloudfree/GPIO/C3-Mini",
        },
        {
          title: "YouTube-Zähler",
          desc: "YouTube-Kanalstatistiken – Abonnenten und Likes – in Echtzeit auf einem kleinen OLED-Display anzeigen.",
          href: "https://chipglobe-dev.web.app/cloudfree/YOUTUBE-METEER/C3-Mini",
        },
      ],
      sensorDevices: [
        { title: "Barometer", desc: "Atmosphärischen Druck und Höhe messen." },
        {
          title: "Hygrometer",
          desc: "Relative Luftfeuchtigkeit und Temperatur erfassen.",
        },
        { title: "Thermometer", desc: "Präzise Umgebungstemperaturmessung." },
        { title: "Luxmeter", desc: "Umgebungslichtintensität in Lux messen." },
        {
          title: "IR-Radiometer",
          desc: "Berührungslose Infrarot-Temperaturmessung.",
        },
        {
          title: "Bewegungsmelder",
          desc: "PIR-basierte Bewegungserkennung für Automatisierungen.",
        },
        {
          title: "Anwesenheits-Taster",
          desc: "Kapazitive oder taktile Benutzereingabe.",
        },
      ],
      tutorialsTitle: "Tutorials",
      tutorialsSub:
        "Erste Schritte mit dem C3-Mini™ in unserem Schritt-für-Schritt-Video-Tutorial zur MicroPython-Initialisierung und zum WebFlashing.",
      tutorialsSubTitle: "Erste Schritte mit dem C3-Mini™",
      tutorialsSubDesc:
        "Lernen Sie, wie Sie den C3-Mini™ mit MicroPython über WebFlashing initialisieren – ohne spezielle Werkzeuge.",
      tutorialsSteps: [
        "MicroPython über WebFlasher flashen",
        "Arduino-IDE einrichten und erstes Sketch erstellen",
        "CircuitPython-Installationsanleitung",
        "ESP-IDF für fortgeschrittene Entwicklung nutzen",
        "Kompatibel mit LOLIN D1 Mini Shields und Zubehör",
      ],
      d1Title: "Was ist der Unterschied zwischen dem D1 und dem C3-Mini™?",
      d1P1: "Die beiden beliebten Boards – der D1 und der C3-Mini™ – haben denselben Formfaktor und dieselbe Pinbelegung und passen damit perfekt zum weltweit größten Sensor- und Aktorportfolio.",
      d1P2: "Der C3-Mini™ ist der Nachfolger des ESP32-Mini und bietet Bluetooth LE 5.0 sowie Unterstützung für den kommenden Matter-Standard.",
      docsTitle: "Dokumentation",
      docs: [
        {
          name: "C3-Mini Datenblatt V2.2.1 [PDF]",
          // TODO: missing file — source PDF and place at public/docs/c3-mini/datasheet-v2.2.1.pdf
          href: "/docs/c3-mini/datasheet-v2.2.1.pdf",
        },
        {
          name: "Erste Schritte mit MicroPython [PDF]",
          // TODO: missing file — source PDF and place at public/docs/c3-mini/getting-started-micropython.pdf
          href: "/docs/c3-mini/getting-started-micropython.pdf",
        },
        {
          name: "Erste Schritte mit Arduino [PDF]",
          // TODO: missing file — source PDF and place at public/docs/c3-mini/getting-started-arduino.pdf
          href: "/docs/c3-mini/getting-started-arduino.pdf",
        },
        {
          name: "Erste Schritte mit CircuitPython [PDF]",
          // TODO: missing file — source PDF and place at public/docs/c3-mini/getting-started-circuitpython.pdf
          href: "/docs/c3-mini/getting-started-circuitpython.pdf",
        },
        {
          name: "C3-Mini Pinout-Referenz [PDF]",
          // TODO: missing file — source PDF and place at public/docs/c3-mini/pinout-reference.pdf
          href: "/docs/c3-mini/pinout-reference.pdf",
        },
        {
          name: "ESP-IDF Setup-Anleitung [PDF]",
          // TODO: missing file — source PDF and place at public/docs/c3-mini/espidf-setup.pdf
          href: "/docs/c3-mini/espidf-setup.pdf",
        },
      ],
      docsBtn: "C3-Mini™ Anwendungen erkunden →",
    },
    c3miniApps: {
      badge: "C3-Mini™ Anwendungen",
      heroTitle1: "Eigenes Gerät bauen",
      heroTitle2: "in Sekunden",
      heroSub:
        "Der C3-Mini™ unterstützt kostenlose Install-Anwendungen für CloudFree, Home Assistant, IoT AppStore und Matter/ESPZero.",
      section1Title: "Anwendungen für den C3-Mini™ ohne Display oder Sensor",
      section1Pre:
        "Nehmen Sie Ihren C3-Mini und bauen Sie in 3 Minuten Ihr eigenes Gerät, indem Sie die beliebte ",
      section1WledLink: "WLED-Anwendung",
      section1Mid: ", den hilfreichen ",
      section1GpioLink: "GPIO-Viewer",
      section1Post:
        " oder ein leeres ESPHome-Gerät für Home Assistant ohne spezielle Funktionen installieren. Bereit für Ihre eigenen Projekte.",
      section2Title: "Anwendungen für den C3-Mini™ mit Display",
      section2Pre:
        "Nehmen Sie Ihren C3-Mini und bauen Sie in 3 Minuten Ihr eigenes Gerät, indem Sie ein Display ",
      section2BuyHere: "hier kaufen",
      section2Mid:
        " anschließen, um Anwendungen wie ein WLAN-Signalstärkemessgerät, eine Wetterstation oder einen ",
      section2YtLink: "YouTube-Zähler",
      section2Post: " für Follower und Likes zu aktivieren.",
      section3Title: "Anwendungen für den C3-Mini™ mit Sensor & Display",
      section3Desc:
        "Nehmen Sie Ihren C3-Mini und bauen Sie in 3 Minuten Ihr eigenes Gerät durch kostenlose Installation von Sensoranwendungen wie Barometer, Hygrometer, Luxmeter oder Bewegungsmelder.",
      backBtn: "Zurück zur C3-Mini-Übersicht",
    },
    c3miniBoxDevices: {
      badge: "C3-Mini Sensor Box",
      heroTitle1: "C3-Mini Sensor Box",
      heroTitle2: "Geräte",
      heroSub:
        "Holen Sie sich die Box, um alle diese C3-Mini-Geräte innerhalb von 3 Minuten zu bauen.",
      breadcrumbBox: "C3-Mini Sensor-Auswahlbox",
      breadcrumbCurrent: "C3-Mini Sensor Box Geräte",
      introTitle:
        "Holen Sie sich die Box, um alle diese C3-Mini-Geräte innerhalb von 3 Minuten zu bauen.",
      introDesc:
        "Wählen Sie Ihr S-M-A-Triple, nehmen Sie die verfügbaren Teile aus Ihrer Schublade oder kaufen Sie passendere Sensorboxen.",
      cards: [
        {
          title: "Schritt 1 — S-M-A-Triple auswählen",
          desc: "Wählen Sie einen Sensor, platzieren Sie den C3-Mini in der Mitte des Triple-Adapters und fügen Sie ein Display oder einen Summer als Aktor hinzu.",
        },
        {
          title: "Schritt 2 — Kostenlos installieren",
          desc: "Nutzen Sie die Install-for-Free-Funktion, um Ihre gewählte Anwendung direkt auf den C3-Mini zu flashen – kein Programmieren erforderlich.",
        },
        {
          title: "Schritt 3 — Ihr Gerät ist bereit",
          desc: "In 3 Minuten ist Ihr Sensorgerät einsatzbereit und überträgt Live-Daten an CloudFree, Home Assistant, IoT AppStore oder Matter.",
        },
      ],
      appsTitle: "Anwendungen",
      appsDesc:
        "Stapeln Sie eine der sieben Sensorplatinen auf den Triple-Adapter, platzieren Sie den C3-Mini in der Mitte und fügen Sie das Display oder den Summer rechts hinzu.",
      assemble: "Montagevideo ansehen",
      install: "Installationsanleitung",
      installVideoTitle: "App auf den C3-Mini installieren",
      devices: [
        {
          title: "Barometer",
          desc: "Misst den Luftdruck. Kann mit einem Display zur Anzeige der Druckwerte oder einem Summer zur Signalisierung erheblicher Änderungen ausgestattet werden.",
        },
        {
          title: "Hygrometer",
          desc: "Überwacht die Luftfeuchtigkeit. Kann ein Display zur Anzeige der relativen Feuchtigkeit oder einen Summer zur Warnung bei unerwünschten Feuchtigkeitswerten verwenden.",
        },
        {
          title: "IR-Radiometer",
          desc: "Erkennt Wärmestrahlung berührungslos. Kann ein Display für Oberflächentemperaturen oder einen Summer für abnorme Wärmewerte verwenden.",
        },
        {
          title: "Luxmeter",
          desc: "Misst die Lichtintensität. Kann ein Display mit Lux-Werten oder einen Summer bei zu hohen oder niedrigen Lichtwerten haben.",
        },
        {
          title: "Thermometer",
          desc: "Misst die Temperatur. Kann ein Display für Echtzeit-Temperaturwerte oder einen Summer bei Über- oder Unterschreitung von Schwellenwerten haben.",
        },
        {
          title: "Bewegungsmelder",
          desc: "Erkennt Bewegungen. Kann den Bewegungsstatus auf einem Display anzeigen oder einen Summer als akustischen Alarm verwenden.",
        },
        {
          title: "Anwesenheits-Taster",
          desc: "Erkennt die Benutzeranwesenheit durch Interaktion. Kann die Aktivierung über ein Display bestätigen oder durch einen Summer Feedback geben.",
        },
      ],
    },
    aiAssisted: {
      badge: "KI-gestützte Lösungen",
      heroTitle1: "KI-gestützte Geräte",
      heroTitle2: "immer griffbereit",
      heroSub:
        "KI-gestützte Carenuity-Geräte kombinieren modernste Sensortechnologie mit künstlicher Intelligenz, um Daten aus ihrer Umgebung zu erfassen, zu verarbeiten und zu analysieren.",
      featuredTitle: "KI-gestützte Geräte",
      featuredDesc:
        "Diese Sensoren erfassen verschiedene physikalische Parameter wie Temperatur, Bewegung und Licht und wenden KI an, um fundierte Entscheidungen auf Basis der erfassten Daten zu treffen.",
      radarTitle: "C3-Mini Radarsensor",
      radarSubtitle: "Ihr Radar-Anwesenheitssensor für das Smart Home",
      radarP1:
        "Ein Radarsensor nutzt Radiowellen, um stationäre, sich nähernde, entfernende oder fehlende Objekte zu erkennen und deren Entfernung, Geschwindigkeit und andere Merkmale durch Flächensegmentierung zu messen.",
      radarP2:
        "Im Gegensatz zu herkömmlichen PIR-Sensoren, die auf Wärmesignaturen basieren und bei subtilen Bewegungen Schwierigkeiten haben, verfügt das Carenuity™ SQ-Panel über einen hochpräzisen 60-GHz-Radarsensor. Diese Technologie ermöglicht die Echtzeit-Erkennung von Mikrobewegungen, auch durch Materialien hindurch, und eignet sich für moderne Anwesenheitsautomatisierung sowie HVAC- und Beleuchtungssteuerung.",
      readMore: "Weiterlesen",
      blogCards: [
        {
          title: "Einführung in den HLK-LD2410C 24-GHz-Radarsensor",
          excerpt:
            "Erkundet den HLK-LD2410, einen 24-GHz-Personenpräsenzsensor.",
        },
        {
          title: "Den LD2410C Radarsensor entdecken",
          excerpt:
            "Behandelt Erkennungsfähigkeiten durch Wände, Nebel und Dunkelheit.",
        },
        {
          title: "BGT60LTR11 Radar Shield2Go mit ESP32 für KI-Anwendungen",
          excerpt: "Behandelt das kompakte BGT60LTR11 Radar Shield2Go.",
        },
      ],
      espTitle: "C3-Mini Adapter mit ESP32-Cam",
      espP1:
        "Das ESP32-CAM ist ein kompaktes, kostengünstiges Modul, das einen ESP32-S-Mikrocontroller mit einer OV2640-Kamera kombiniert. Bei Objekterkennungsanwendungen erweist es sich durch integriertes Wi-Fi und Bluetooth als besonders wertvoll.",
      espP2:
        "Durch den Einsatz von Bibliotheken wie OpenCV und Machine-Learning-Modellen führt das ESP32-CAM Echtzeit-Objekterkennung und -identifikation durch. Dies macht es ideal für Heimautomatisierung, Sicherheitssysteme und IoT-Projekte mit visueller Datenerfassung.",
      espBlogCard: {
        title:
          "ESP32-CAM mit Edge Impulse in einen smarten Objektdetektor verwandeln",
        excerpt:
          "Tutorial zur Erstellung von Objekterkennungsmodellen auf dem ESP32-CAM mit Edge Impulse.",
      },
      autoCarTitle: "Autonomes Fahrzeug",
      autoCarP1:
        "In der Welt der automobilen Innovation dient die Geschichte oft als Grundlage für zukünftige Entwicklungen. Das Autonome Infineon-Fahrzeug, gebaut vom Carenuity-Team von ChipGlobe, ist ein Beweis für dieses Prinzip.",
      autoCarP2:
        "Dieses Fahrzeug verkörpert die neueste autonome Fahrtechnologie und ehrt den legendären Schaeffler FAG Model MF3 von 2009. Das haifischförmige Design des MF3, das Geschwindigkeit und Präzision symbolisiert, wurde 2025 im Maßstab 1:10 neu erschaffen.",
      autoCarP3:
        "Die Präsentation des Schaeffler FAG Model MF3 fand bei einer Abendveranstaltung im Foyer von Schaeffler statt, besucht von Dr. Grunau und Dipl.-Ing. Seubert.",
      learnMore: "Mehr erfahren",
    },
    selectionBox: {
      badge: "Modulares Sensorkit",
      heroTitle1: "C3-Mini™",
      heroTitle2: "Sensor-Auswahlbox",
      heroSub:
        "Sieben ausgewählte Sensoren in einer praktischen Box – alles, was Sie für den Einstieg in Umgebungs- und interaktive IoT-Projekte benötigen.",
      breadcrumb: "Sensor-Auswahlbox",
      whatTitle: "Was ist die Sensor-Auswahlbox?",
      whatP1:
        "Die C3-Mini™ Sensor-Auswahlbox ist ein modulares Starterpaket für Studenten, Maker und Entwickler, die eine Reihe von IoT-Sensortypen ausprobieren möchten, ohne Bauteile einzeln beschaffen zu müssen.",
      whatP2:
        "Jede Box enthält sieben mit dem C3-Mini™-Board kompatible Sensoren sowie Beispielcode und Dokumentation für einen schnellen Einstieg. Tauschen Sie Sensoren aus, um genau das Projekt zu bauen, das Sie im Sinn haben.",
      installBtn: "Kostenlos installieren (14 Geräte)",
      sensorsTitle: "Eigenes Gerät in 3 Minuten bauen:",
      sensorsDesc:
        "Die Auswahlbox enthält je einen der unten aufgeführten Sensoren – ein vollständiges Toolkit für Umgebungsmess- und Interaktionsprojekte.",
      sensors: [
        {
          title: "Barometer",
          desc: "Misst atmosphärischen Druck und Höhe. Ideal für Wetterstationen und höhenbewusste Anwendungen.",
        },
        {
          title: "Hygrometer",
          desc: "Überwacht die relative Luftfeuchtigkeit für Innenraumkomfort, Kondensationsrisiko und Taupunkt.",
        },
        {
          title: "Thermometer",
          desc: "Präzise Temperaturmessung für Klimasteuerung, Kühlketten-Überwachung und Umgebungsprotokollierung.",
        },
        {
          title: "Luxmeter",
          desc: "Misst die Umgebungslichtintensität in Lux zur Beleuchtungsautomatisierung oder zum Schutz lichtempfindlicher Umgebungen.",
        },
        {
          title: "IR-Radiometer",
          desc: "Erkennt Infrarotstrahlung für berührungslose Temperaturmessung und Fernerkundungsanwendungen.",
        },
        {
          title: "Bewegungsmelder",
          desc: "PIR-basierte Bewegungserkennung zur Auslösung von Alarmen, Automatisierungen oder energiesparender Anwesenheitslogik.",
        },
        {
          title: "Anwesenheits-Taster",
          desc: "Kapazitive oder taktile Eingabe zur manuellen Anwesenheitsbestätigung oder Benutzerinteraktion.",
        },
      ],
    },
    sensorBoxes: {
      badge: "Einzelne Sensorbox",
      heroTitle1: "Eigenes Gerät bauen",
      heroTitle2: "in 3 Minuten.",
      heroSub:
        "Einzelne Sensorboxen enthalten alles, was Sie benötigen, um in 3 Minuten Ihr eigenes Gerät zu bauen – Barometer, Hygrometer, Luxmeter oder Bewegungsmelder.",
      breadcrumb: "All-in-One-Sensorboxen",
      whatTitle: "Was ist eine Sensorbox?",
      whatP1:
        "Jede einzelne Sensorbox kommt in einer Acrylbox, die einen Triple-Adapter, drei stapelbare Platinen (S-M-A), ein 3D-gedrucktes Gehäuse und ein USB-Type-C-Kabel zur Stromversorgung enthält.",
      whatP2:
        "Die drei Steckplätze S-M-A stehen für Sensor, Mikrocontroller und Aktor, typischerweise ein Display. Der Kernbestandteil neben dem Sensor ist der C3-Mini-Mikrocontroller.",
      whatP3:
        "Das Kunststoffgehäuse, ein 3D-gedrucktes Gehäuse, beherbergt die gesamte Elektronik. Sie können auch selbst Gehäuse in Ihrer bevorzugten Farbe und in individuellem Stil drucken. Unsere kostenlosen 3D-Modelle finden Sie auf Thingiverse.",
      whatP4:
        "Der Triple-Adapter macht das Verbinden der drei Platinen – Sensor, Mikrocontroller und Aktor – zum Kinderspiel, und Sie können sogar neue S-M-A-Kombinationen mit dieser Basisplatine bauen.",
      whatP5:
        "Alle Sensorboxen enthalten einen Aktor (Display, Summer oder LED), um die Sensormessungen lesbar zu machen oder akustische bzw. optische Alarme auszulösen.",
      whatP6:
        "Das USB-Type-C-Datenkabel ermöglicht schließlich das Einspielen einer bestimmten Software (Install-for-Free über ein Browserfenster) und später die Stromversorgung des Geräts an einem beliebigen Ort.",
      healthcareTitle: "Medizinische Assistenzgeräte",
      healthcareCards: [
        {
          title: "Luftqualitätsmessgerät",
          desc: "Luftqualität (VOCs, CO₂ & Luftfeuchtigkeit)",
        },
        {
          title: "Bio-Puls-Messgerät",
          desc: "Herzfrequenz und biometrische Daten mit dem C3-Mini™-betriebenen Pulssensor überwachen.",
        },
      ],
      motionTitle: "Bewegungserkennungsgeräte",
      motionCards: [
        {
          title: "Kühlschrank-Öffnungszähler",
          desc: "Zählt mit PIR-Bewegungssensor und OLED-Display, wie oft der Kühlschrank geöffnet wird.",
        },
      ],
      weatherTitle: "Wetterstationsgeräte",
      weatherCard: {
        title: "EnviroSense 680",
        desc: "Fortschrittliche Umgebungsüberwachungslösung – Temperatur, Luftfeuchtigkeit, Druck und Luftqualität in einem Gerät.",
        link: "Hier klicken für mehr Infos zum EnviroSence 680",
      },
      installBtn: "Kostenlos installieren",
      buyBtn: "C3-Mini-Teile kaufen",
    },
    installForFree: {
      detailTitle: "So bauen Sie Ihr eigenes Gerät",
      badge: "Kostenlos installieren",
      heroTitle1: "Eigenes Gerät in 3 Minuten bauen",
      heroTitle2: "und sofort sehen, was passiert.",
      heroCta:
        "Wählen Sie Ihr S-M-A-Triple, nehmen Sie die verfügbaren Teile aus Ihrer Schublade oder kaufen Sie passendere Sensorboxen.",
      step1Title: "Ihr Triple zusammenstellen",
      step1Desc:
        "Stellen Sie Ihr S-M-A-Triple zusammen, indem Sie die drei Grundkomponenten jeder IoT-Lösung — Sensor, Mikrocontroller und Aktor — auf den schwarzen Triple-Adapter stecken.",
      step2Title: "Software installieren",
      step2Desc:
        "Laden Sie eine Anwendung vom Solution Builder in Ihr Triple — direkt über einen Browser auf Laptop oder PC. Keine zusätzliche PC-Software-Installation erforderlich.",
      step3Title: "In Betrieb nehmen",
      step3Desc:
        "Setzen Sie Ihr Triple in ein 3D-gedrucktes Gehäuse (optional) und platzieren Sie es in Ihrer Wohnung — mit einem Handyladegerät betrieben. Kein PC notwendig.",
      hwTitle: "Hardware besorgen",
      hwDesc:
        "Da alle diese Boards sehr beliebt sind, gehen wir davon aus, dass Sie sie bereits haben. Falls nicht, schauen Sie sich unser kostenloses Angebot unten an oder füllen Sie Ihre Schublade wieder auf.",
      hwLink: "Zum Shop",
      swTitle: "Software installieren",
      swDesc1:
        "Für den Bau Ihres eigenen Geräts in 3 Minuten können Sie aus einer breiten Auswahl an Sensoren wählen — z. B. Barometer, Hygrometer, Thermometer, Luxmeter, IR-Radiometer, Bewegungsmelder oder Anwesenheits-Taster.",
      swDesc2:
        "Verwenden Sie einfach die Install-For-Free-App direkt aus dem Browser, um nahtlos zwischen verschiedenen Gerätetypen zu wechseln. Keine Software-Installation auf dem PC erforderlich.",
      swLink: "Install-For-Free-App öffnen",
      sensorLink: "Sensor auswählen",
      housingTitle: "Gehäuse",
      housingDesc1:
        "Entdecken Sie die Freude an perfekter Individualisierung und entfalten Sie Ihr kreatives Potenzial — z. B. indem Sie die gebaute Elektronik in ein Gehäuse für Ihre Liebsten verpacken.",
      housingDesc2:
        "Sie können dies auf verschiedene Arten tun, z. B. mit einem handgemachten Kartongehäuse oder einem 3D-Druck.",
      housingLink: "3D-Druck-Gehäuse durchsuchen",
      smaTitle: "S-M-A Komponenten",
      smaDesc:
        "Zur Orientierung haben wir das Stapeln durch die Buchstaben S, M und A auf dem Triple-Adapter vereinfacht. Dies macht das Befestigen der drei Platinen so einfach wie möglich.",
      ecosystemTitle: "Vier Ökosystem-Optionen",
      ecosystemDesc:
        "Wählen Sie das Smart-Home-Ökosystem, das am besten zu Ihnen passt.",
      ecosystems: [
        {
          title: "Cloudfree",
          desc: "Das sicherste und einfachste Gerät hat keinerlei Internetverbindung. Sie installieren es und es funktioniert einfach. Ideal, wenn Sie keine Funktionen über die reine Messung hinaus benötigen.",
        },
        {
          title: "Home Assistant",
          desc: "Home Assistant legt genau fest, welche Aktionen ausgeführt werden sollen, wenn ein Gerät eine bestimmte Situation erkennt. HA ist derzeit die weltweit beliebteste Umgebung für Smart-Home-Geräte.",
        },
        {
          title: "IoT AppStore",
          desc: "Wenn Sie mehrere Geräte gemeinsam mit Over-the-Air-Updates steuern möchten, möglicherweise an entfernten Standorten (z. B. bei Ihren Eltern), ist die IoT-Lösung Ihre erste Wahl.",
        },
        {
          title: "Matter",
          desc: "Matter ermöglicht die Integration Ihres Sensorgeräts mit bis zu fünf der beliebtesten Plattformen gleichzeitig — Amazon Alexa, Apple Home, Google Home, Samsung SmartThings oder Home Assistant.",
        },
      ],
      statsTitle:
        "Erschließen Sie noch heute Ihre Möglichkeiten mit unserem modularen Ansatz!",
      stats: [
        { value: "28", label: "Sensoren" },
        { value: "5", label: "Mikrocontroller" },
        { value: "12", label: "Aktoren" },
        { value: "1500", label: "Lösungen" },
      ],
      greenTitle: "Green Modularity",
      greenDesc1:
        "Im Herzen unserer Innovation steht Green Modularity — ein bahnbrechendes Konzept, das Sensoren, Mikrocontroller und Aktoren (S-, M- & A-Platinen) als eigenständige, austauschbare Teile kombiniert und der Systematik jedes IoT-Produkts folgt.",
      greenDesc2:
        "Dieser Ansatz fördert Umweltverträglichkeit durch die Reduzierung von Elektronikschrott. Durch den Austausch einzelner Komponenten statt der Entsorgung ganzer Geräte verlängern wir die Produktlebensdauer und unterstützen die Kreislaufwirtschaft.",
      weeeTitle: "WEEE-Konformität",
      weeeDesc1:
        "Im Rahmen unseres Nachhaltigkeitsengagements erfüllen wir vollständig die WEEE-Richtlinie (Waste Electrical and Electronic Equipment). Diese stellt die ordnungsgemäße Sammlung, Verwertung und Entsorgung von Elektroprodukten sicher.",
      weeeDesc2:
        "Alle unsere Produkte tragen das Symbol der durchgestrichenen Mülltonne, das darauf hinweist, dass das Gerät nicht im Hausmüll entsorgt werden darf, sondern einer verantwortungsvollen Verwertung zugeführt werden muss.",
      weeeDesc3:
        "Da der Platz auf Leiterplatten (PCBs) begrenzt ist, ermöglichen wir den direkten Zugang zu dieser Nachhaltigkeitswebseite über einen QR-Code, der auf allen unseren PCBs aufgedruckt ist.",
      weeeNumber: "WEEE-Registrierungsnummer:",
      weeeCompany:
        "Carenuity handelnd als Chipglobe GmbH, Cincinnatistrasse 60, 81549 München, Deutschland",
      weeeContact: "info@chipglobe.com oder (+49) 89-1222469-40",
      greenClose:
        "Durch die Integration von Green Modularity in unsere Produktdesigns und die Einhaltung strenger Compliance-Protokolle stellen wir sicher, dass Nachhaltigkeit nicht nur ein Versprechen ist, sondern gelebte Praxis. Werden Sie Teil der Bewegung für einen intelligenteren, grüneren Planeten.",
    },
    c3MiniTriple: {
      badge: "C3-Mini Ökosystem",
      heroTitle: "C3-Mini™ Triple",
      heroHighlight: "Sensor · Mikrocontroller · Aktor",
      heroDesc:
        "Bauen Sie Ihr eigenes Sensorgerät in 3 Minuten, indem Sie einen Sensor, den C3-Mini und einen Aktor auf den Triple-Adapter stecken. Kein Löten, keine Verkabelung — einfach stapeln und flashen.",
      breadcrumbProducts: "Produkte",
      whatTitle: "Was ist ein C3-Mini™ Triple?",
      whatP1:
        "Das C3-Mini™ Triple ist ein modulares Hardware-Konzept, das auf dem Triple-Adapter basiert — einer Basisplatine mit drei beschrifteten Steckplätzen: S (Sensor), M (Mikrocontroller) und A (Aktor). Stecken Sie Ihren gewählten Sensor links, den C3-Mini in der Mitte und ein Display oder Summer rechts auf.",
      whatP2:
        "Nach der Montage verwenden Sie die Install-for-Free-App direkt aus Ihrem Browser, um Ihre gewählte Anwendung zu flashen — keine PC-Software erforderlich. In 3 Minuten ist Ihr Gerät live und meldet Daten an CloudFree, Home Assistant, IoT AppStore oder Matter.",
      stepsTitle: "So funktioniert es",
      steps: [
        {
          step: "01",
          title: "S-M-A Triple auswählen",
          desc: "Wählen Sie einen Sensor, platzieren Sie den C3-Mini in der Mitte des Triple-Adapters und fügen Sie ein Display oder Summer als Aktor hinzu.",
        },
        {
          step: "02",
          title: "Kostenlos installieren",
          desc: "Verwenden Sie die Install-for-Free-Funktion, um Ihre gewählte Anwendung direkt auf den C3-Mini zu flashen — kein Programmieren erforderlich.",
        },
        {
          step: "03",
          title: "Ihr Gerät ist bereit",
          desc: "In 3 Minuten ist Ihr Sensorgerät in Betrieb und meldet Live-Daten an CloudFree, Home Assistant, IoT AppStore oder Matter.",
        },
      ],
      devicesTitle: "Geräte, die Sie bauen können",
      devicesDesc:
        "Stapeln Sie eine der sieben Sensorplatinen auf den Triple-Adapter, den C3-Mini in die Mitte und das Display oder den Summer rechts.",
      devices: [
        {
          title: "Barometer",
          desc: "Misst den Luftdruck. Kann mit einem Display zur Anzeige der Druckwerte oder einem Summer zur Signalisierung erheblicher Änderungen ausgestattet werden.",
        },
        {
          title: "Hygrometer",
          desc: "Überwacht die Luftfeuchtigkeit. Kann ein Display zur Anzeige der relativen Feuchtigkeit oder einen Summer zur Warnung bei unerwünschten Werten verwenden.",
        },
        {
          title: "IR-Radiometer",
          desc: "Erkennt Wärmestrahlung berührungslos. Kann ein Display für Oberflächentemperaturen oder einen Summer für abnorme Wärmewerte verwenden.",
        },
        {
          title: "Luxmeter",
          desc: "Misst die Lichtintensität. Kann ein Display mit Lux-Werten oder einen Summer bei zu hohen oder niedrigen Lichtwerten haben.",
        },
        {
          title: "Thermometer",
          desc: "Misst die Temperatur. Kann ein Display für Echtzeit-Messwerte oder einen Summer bei Über- oder Unterschreitung von Schwellenwerten haben.",
        },
        {
          title: "Bewegungsmelder",
          desc: "Erkennt Bewegungen. Kann den Bewegungsstatus auf einem Display anzeigen oder einen Summer als akustischen Alarm verwenden.",
        },
        {
          title: "Anwesenheits-Taster",
          desc: "Erkennt die Benutzeranwesenheit durch Interaktion. Kann die Aktivierung über ein Display bestätigen oder durch einen Summer Feedback geben.",
        },
      ],
      installBtn: "Kostenlos installieren",
      shopBtn: "C3-Mini-Teile kaufen",
      wishlistTitle: "Zur Warteliste anmelden",
      wishlistDesc:
        "Tragen Sie sich in die C3-Mini-Triples-Warteliste ein und erfahren Sie als Erster von Updates.",
      wishlistNote:
        "Bitte prüfen Sie Ihren Spam-Ordner, falls die Bestätigungs-E-Mail dort landen sollte.",
      wishlistBtn: "Zur Warteliste",
    },
    c3MiniBluetoothBeacon: {
      badge: "C3-Mini Ökosystem",
      heroTitle: "C3-Mini™",
      heroHighlight: "Bluetooth Beacon",
      heroDesc:
        "Verwandeln Sie den ESP32-C3 in einen kompakten, energieeffizienten Bluetooth-Low-Energy-Beacon — bereit für Smart-Home-, Gesundheits-, Einzelhandels- und Industrieanwendungen in wenigen Minuten.",
      breadcrumbProducts: "Produkte",
      featuresTitle: "Wichtigste Merkmale",
      features: [
        {
          title: "Kompakte Bauform",
          desc: "Passt problemlos in enge Gehäuse und akkubetriebene Setups.",
        },
        {
          title: "BLE-Werbemodus",
          desc: "Sendet iBeacon-, Eddystone- und benutzerdefinierte BLE-Frames direkt ab Werk.",
        },
        {
          title: "Niedriger Stromverbrauch",
          desc: "Optimierte Schlafzyklen lassen den Beacon monatelang mit einer Ladung laufen.",
        },
        {
          title: "Flexible Firmware",
          desc: "Unterstützt Arduino, ESP-IDF und MicroPython — wählen Sie Ihren bevorzugten Stack.",
        },
        {
          title: "OTA-fähig",
          desc: "Firmware drahtlos aktualisieren, ohne das Gerät aus seiner Position zu entfernen.",
        },
        {
          title: "Integrationsmöglichkeiten",
          desc: "Periphere Geräte über GPIO, I²C, SPI und UART für erweiterte Sensorik anschließen.",
        },
      ],
      capabilitiesTitle: "Was er kann",
      capabilitiesDesc:
        "Der C3-Mini-Beacon deckt ein breites Spektrum an drahtlosen Anwendungsfällen ab — ohne Kopplung oder komplexe Einrichtung.",
      capabilities: [
        "Geräte-ID und Sensordaten übertragen",
        "Indoor-Positionierung und Asset-Tracking ermöglichen",
        "Automatisierungsereignisse auslösen",
        "Proximity-Marketing unterstützen",
        "Gesundheits- und Umweltdaten ohne Kopplung übermitteln",
      ],
      solutionTitle: "Carenuity Standardoption",
      solutionDesc:
        "Starten Sie sofort mit vorkonfigurierter BLE-Firmware, optimierten Energieeinstellungen und schneller Einrichtung über den Solution Builder.",
      solutionBtn: "Solution Builder öffnen",
      installBtn: "Kostenlos installieren",
      wishlistTitle: "Zur Warteliste anmelden",
      wishlistDesc:
        "Bleiben Sie über neue BLE-Firmware, Gehäuseoptionen und Installationsanleitungen für den C3-Mini Bluetooth Beacon auf dem Laufenden.",
      wishlistNote:
        "Bitte prüfen Sie Ihren Spam-Ordner, falls die Bestätigungs-E-Mail dort landen sollte.",
      wishlistBtn: "Zur Warteliste",
    },
    dingDongBar: {
      badge: "Bewegungsmelder",
      heroTitle: "DingDongBar –",
      heroHighlight: "Bewegungserkennung & Alarm",
      heroDesc:
        "Ein kompaktes, intelligentes Alarmgerät, das automatisch auf menschliche Bewegungen reagiert und einen deutlichen Ton erzeugt. Nutzt einen PIR-Sensor und Summer für den handfreien Betrieb an Türen, in Büros und Sicherheitsbereichen.",
      breadcrumbProducts: "Produkte",
      introTitle: "DingDongBar – Bewegungserkennungs-Alarmgerät",
      cardP1:
        "Die DingDongBar ist ein kompaktes, intelligentes Alarmgerät, das automatisch auf menschliche Bewegungen reagiert und einen deutlichen Ton erzeugt. Es verwendet einen PIR-Sensor (Passiv-Infrarot), um Infrarotstrahlung-Änderungen durch Bewegung zu erkennen, und einen Summer, um sofort einen hörbaren 'Ding-Dong'-Ton zu erzeugen, wenn eine Bewegung erkannt wird.",
      cardP2:
        "Ausgelegt für Einfachheit und Zuverlässigkeit, entfällt bei der DingDongBar die Notwendigkeit physischer Interaktion wie das Drücken eines Knopfes. Dies macht sie ideal für Umgebungen, in denen handfreier Betrieb bevorzugt wird — wie Türeingänge, Empfangsbereiche, Büros oder sicherheitssensible Zonen.",
      extendedDesc:
        "Da sie auf energiesparender Elektronik basiert, kann die DingDongBar über lange Zeiträume kontinuierlich mit einer kleinen Stromversorgung oder Batterie betrieben werden. Sie lässt sich auch einfach in IoT-Systeme, Türalarmanlagen oder Automatisierungsprojekte integrieren und ist sowohl für Bildungsprototypen als auch für reale Anwendungen nützlich.",
      assembleLink: "So wird es zusammengebaut",
      typicalUsesTitle: "Typische Einsatzbereiche:",
      typicalUses: [
        "Bewegungsaktivierte Türalarme in Büros und Geschäften",
        "Eingangsbenachrichtigung für Haus- oder Garagentüren",
        "Besuchererkennung in Empfangs- oder Wartebereichen",
        "Automatische Erinnerungen für bewegungsbasierte Ereignisse (z. B. Licht- oder Tonauslöser)",
        "Als Bildungsdemo zum Lernen über Sensoren, Mikrocontroller und grundlegende Automatisierungslogik",
      ],
      pirDesc:
        "Der PIR-Sensor überwacht kontinuierlich seine Umgebung auf Änderungen der Infrarotstrahlung (Wärme). Wenn sich eine Person oder ein Objekt in seinem Erkennungsbereich bewegt, geht der Ausgangspin des Sensors auf HIGH. Der Mikrocontroller (z. B. Arduino, ESP32 usw.) empfängt dieses Signal. Der Summer wird dann aktiviert — erzeugt einen 'Ding-Dong'- oder Alarmton. Nach einigen Sekunden stoppt der Summer automatisch, bis eine neue Bewegung erkannt wird.",
      featuresTitle: "Wichtigste Merkmale",
      features: [
        {
          title: "Vollautomatische Aktivierung",
          desc: "Aktiviert sich sofort bei Bewegung — kein Knopf, keine manuelle Bedienung nötig.",
        },
        {
          title: "Tag & Nacht",
          desc: "Der PIR-Sensor arbeitet zuverlässig bei Tageslicht und in vollständiger Dunkelheit.",
        },
        {
          title: "Kompakt & energiesparend",
          desc: "Minimaler Stromverbrauch und kleines Formfaktor ermöglichen die Platzierung überall.",
        },
        {
          title: "Erweiterbar",
          desc: "LEDs, Displays oder WLAN-Benachrichtigungen lassen sich einfach ergänzen.",
        },
        {
          title: "Bewegungsalarme & Bildung",
          desc: "Ideal für Bewegungsalarmprojekte und Sensor-Ausbildungsdemonstrationszwecke.",
        },
      ],
      applicationsTitle: "Typische Anwendungen",
      applications: [
        "Bewegungsaktivierte Türalarme in Büros und Geschäften",
        "Eingangsbenachrichtigungen für Zuhause und Garagen",
        "Besuchererkennung in Empfangsbereichen",
        "Automatische bewegungsgesteuerte Erinnerungen",
        "Demonstrationen für die Sensor-Ausbildung",
      ],
      componentsTitle: "Kernkomponenten",
      componentsSubtitle: "Typische Komponenten:",
      componentsList: [
        {
          label: "PIR-Sensor (z. B. HC-SR501)",
          desc: "Erkennt Bewegung anhand von Infrarotwärmeänderungen",
        },
        {
          label: "Summer (Aktiv oder Piezo)",
          desc: "Erzeugt einen Ton bei Auslösung",
        },
        {
          label: "Mikrocontroller",
          desc: "Steuert die Logik zwischen PIR und Summer",
        },
        {
          label: "Stromversorgung",
          desc: "Liefert 3,3 V oder 5 V je nach Komponenten",
        },
        {
          label: "Optionale LED",
          desc: "Visuelle Anzeige bei erkannter Bewegung",
        },
      ],
      circuitTitle: "Beispiel-Schaltungslogik:",
      circuitLines: [
        "PIR OUT → Mikrocontroller-Eingang (z. B. Pin D2)",
        "Mikrocontroller-Ausgang (z. B. Pin D7) → Summer-Eingang",
        "VCC & GND → Gemeinsame Stromleitungen",
      ],
      circuitDesc:
        "Wenn eine Bewegung erkannt wird, versorgt der Mikrocontroller kurzzeitig den Summer mit Strom und erzeugt so den 'DingDong'-Ton.",
      comparisonTitle: "Produktvergleich",
      comparisonHeaders: ["Merkmal", "PIR + Summer", "Taste + OLED"],
      comparisonRows: [
        ["Aktivierung", "Vollautomatisch", "Manueller Tastendruck"],
        [
          "Rückmeldung",
          "Akustischer Alarm (Summer)",
          "Visuelle Anzeige (OLED)",
        ],
        [
          "Komplexität",
          "Einfach, keine Interaktion",
          "Benutzereingabe erforderlich",
        ],
      ],
      solutionTitle: "Solution Builder",
      solutionDesc:
        "Flashen Sie die DingDongBar-Firmware direkt aus Ihrem Browser — keine Software-Installation erforderlich.",
      wishlistTitle: "Zur Warteliste anmelden",
      wishlistDesc:
        "Erhalten Sie Benachrichtigungen über neue Gehäuseoptionen, Firmware-Updates und Anleitungen für die DingDongBar.",
      wishlistNote:
        "Bitte prüfen Sie Ihren Spam-Ordner, falls die Bestätigungs-E-Mail dort landen sollte.",
      wishlistBtn: "Zur Warteliste",
    },
    dinoShrek: {
      badge: "Bewegungsjagd-Party-Gadget",
      heroTitle: "DinoShrek –",
      heroHighlight: "Das Bewegungsjagd-Party-Gadget",
      heroDesc:
        "Inspiriert vom legendären T-Rex reagiert DinoShrek auf die kleinste menschliche Bewegung mit modernster 24-GHz-Radartechnologie — rote LED-Augen blitzen auf und ein urweltliches Dino-Brüllen ertönt.",
      breadcrumbProducts: "Produkte",
      introTitle: "Begegne DinoShrek – Das Bewegungsjagd-Party-Gadget",
      introP1:
        "Inspiriert vom legendären T-Rex reagiert DinoShrek auf die kleinste menschliche Bewegung. Mit modernster 24-GHz-Radartechnologie erkennt er Bewegungen mit verblüffender Präzision – genau wie der Dinosaurier, der die schwächste Vibration in der Luft spüren konnte. Bei Bewegungserkennung blinken die roten LED-Augen des C3-Mini, und ein urweltliches Dino-Brüllen dringt aus dem eingebauten Summer.",
      introP2:
        "Lass ihn auf deiner nächsten Party los, stell ihn auf deinen Schreibtisch oder bewache damit deine Snack-Schüssel – keine Bewegung entgeht DinoShrek.",
      howTitle: "So funktioniert es",
      howSteps: [
        {
          title: "Radardetektion (24 GHz)",
          desc: "Das hochempfindliche Bewegungsradar scannt die Umgebung nach kleinsten Bewegungen oder Körperanwesenheit.",
        },
        {
          title: "Sofortige Reaktion",
          desc: "Sobald eine Bewegung erkannt wird, löst der Carenuity C3-Mini eine Alarmsequenz aus.",
        },
        {
          title: "Visuelles & akustisches Feedback",
          desc: "Rote LEDs blinken sofort auf, während ein kraftvolles Dino-Brüllen durch den Raum hallt.",
        },
        {
          title: "Einstecken, spielen, brüllen",
          desc: "Dank des Carenuity Triple-Adapters und USB-Typ-C-Stromversorgung funktioniert DinoShrek sofort nach dem Auspacken.",
        },
      ],
      modularTitle: "Carenuity Modulares Design",
      modularP1:
        "DinoShrek basiert auf dem Carenuity Modularen Ökosystem und ist vollständig rekonfigurierbar und erweiterbar. Tausche Sensoren aus, füge Soundeffekte hinzu oder integriere andere Carenuity-Module in Sekunden – kein Löten, kein Programmieren, keine Werkzeuge erforderlich.",
      modularP2:
        "Das Carenuity Solution Builder-Konzept bedeutet, dass du deine Radarkreaturen in unter drei Minuten bauen, testen und modifizieren kannst.",
      boxTitle: "Lieferumfang",
      boxHeaders: ["Komponente", "Beschreibung"],
      boxItems: [
        {
          component: "24-GHz-Radarsensor",
          desc: "Hochpräzise Bewegungs- und Anwesenheitserkennung – ultraempfindlich, sogar durch Materialien",
        },
        {
          component: "Carenuity C3-Mini",
          desc: "Kompakter ESP32-C3-Mikrocontroller mit integrierter roter Status-LED",
        },
        {
          component: "Dino-Summer",
          desc: "Vorgeladen mit dem authentischen Dino-Brüllton",
        },
        {
          component: "Carenuity Triple-Adapter",
          desc: "Modulares Platinensystem für schnelle Plug-in-Konfiguration",
        },
        {
          component: "3D-gedrucktes Gehäuse",
          desc: "Angepasst für kompakte Montage und Wärmemanagement",
        },
        {
          component: "Acryl-Displaybox",
          desc: "Transparentes Gehäuse für sofortige Einrichtung und visuelle Präsentation",
        },
        {
          component: "USB-Typ-C-Kabel",
          desc: "Plug-&-Play-Stromverbindung für sofortigen Betrieb",
        },
        {
          component: "Schnellstartanleitung",
          desc: "Einfache Einrichtungs- und Anpassungsanweisungen",
        },
      ],
      useCasesTitle: "Anwendungsfälle",
      useCases: [
        "Party-Sensor und Soundeffekt-Gadget",
        "Schreibtischspielzeug, das deinen Arbeitsplatz bewacht",
        "Smart-Motion-Alert-Demo für MINT- oder Universitätsprojekte",
        "Radar-Showcase für Maker und KI-Sensor-Enthusiasten",
      ],
      whyTitle: "Warum DinoShrek?",
      whyDesc:
        "Denn manchmal erkennt man keine Bewegung – man spürt sie. DinoShrek kombiniert Spaß, Technik und Radartechnologie in einem modularen, einsatzbereiten System. Entwickelt von Carenuity, optimiert für Innovation.",
      ctaTitle: "Hol dir jetzt deinen DinoShrek und lass die Jagd beginnen.",
      ctaDesc: "Demnächst erhältlich bei chipglobe.com und carenuity.com",
      wishlistTitle: "Zur Warteliste anmelden",
      wishlistDesc:
        "Trag dich in die DinoShrek-Warteliste ein und erfahre als Erster von Updates.",
      wishlistNote:
        "Bitte prüfen Sie Ihren Spam-Ordner, falls die Bestätigungs-E-Mail dort landen sollte.",
      wishlistBtn: "Zur Warteliste",
    },
    enviroSence680: {
      badge: "Umweltüberwachung",
      heroTitle: "EnviroSence 680 –",
      heroHighlight: "Erweiterte Umweltüberwachungslösung",
      heroDesc:
        "Ein vielseitiges und kompaktes Gerät zur Echtzeit-Überwachung und Anzeige wesentlicher Umweltdaten. Integriert den leistungsstarken BME680-Sensor mit dem ESP-C3-Mini-Mikrocontroller.",
      breadcrumbProducts: "Produkte",
      introTitle: "EnviroSence 680 – Erweiterte Umweltüberwachungslösung",
      introDesc:
        "EnviroSence 680 ist ein vielseitiges und kompaktes Gerät, das zur Echtzeit-Überwachung und Anzeige wesentlicher Umweltdaten entwickelt wurde. Es integriert den leistungsstarken BME680-Sensor mit dem ESP-C3-Mini-Mikrocontroller und liefert genaue Messungen von Temperatur, Luftfeuchtigkeit, Druck, Höhe, Gaskonzentration und Luftqualitätsindex (AQI). Das Gerät verfügt über ein lebhaftes TFT-Display, das die Datenvisualisierung klar und benutzerfreundlich gestaltet.",
      lvglDesc:
        "Um eine reibungslose Benutzererfahrung zu gewährleisten, wurde die Benutzeroberfläche mit LVGL entwickelt — einer hochoptimierten Grafikbibliothek für eingebettete Systeme. Die intuitive GUI des EnviroSence 680 präsentiert alle Umweltparameter auf einen Blick und macht es ideal für Anwendungen in Smart Homes, der industriellen Überwachung und der Präzisionslandwirtschaft.",
      featuresTitle: "Wichtigste Merkmale",
      features: [
        {
          title: "Echtzeit-Überwachung",
          desc: "Verfolgt und zeigt Umweltdaten kontinuierlich an, sobald sie sich ändern.",
        },
        {
          title: "Kompaktes & effizientes Design",
          desc: "Kleiner Formfaktor mit optimiertem Stromverbrauch für den Dauerbetrieb.",
        },
        {
          title: "Fortschrittliche Sensortechnologie",
          desc: "Angetrieben vom BME680-Sensor für genaue Luftqualitäts-, Temperatur-, Feuchtigkeits- und Druckwerte.",
        },
        {
          title: "Interaktive GUI",
          desc: "Benutzerfreundliche grafische Oberfläche für klare Datenvisualisierung.",
        },
        {
          title: "Tragbar und flexibel",
          desc: "Konzipiert für den Einsatz in einer Vielzahl von Umgebungen und Anwendungen.",
        },
      ],
      docsTitle: "Dokumentation",
      docsLinkLabel: "Schaltplan V2.0.1 (PDF)",
      wishlistTitle: "Zur Warteliste anmelden",
      wishlistDesc:
        "Trag dich in die EnviroSence-680-Warteliste ein und erfahre als Erster von Updates.",
      wishlistNote:
        "Bitte prüfen Sie Ihren Spam-Ordner, falls die Bestätigungs-E-Mail dort landen sollte.",
      wishlistBtn: "Zur Warteliste",
    },
    esp32Audio: {
      badge: "Modulares Audioprojekt",
      heroTitle: "ESP32 Audio",
      heroHighlight:
        "Modulares Audioprojekt auf Basis der Carenuity-Architektur",
      heroDesc:
        "Ein modulares Audio-Aufnahme- und Wiedergabesystem auf Basis des Carenuity S-M-A-Prinzips, das Mikrofon-Sensor, ESP32-Mikrocontroller und Audio-Aktor in einem kohärenten Ökosystem vereint.",
      breadcrumbProducts: "Produkte",
      architectureTitle: "Architektur",
      introCardDesc:
        "Dieses Projekt bietet eine modulare und benutzerfreundliche Lösung zum Aufbau eines ESP32-basierten Audio-Aufnahme- und Wiedergabegeräts. Es integriert ein hochwertiges Mikrofon, drahtlose Konnektivität, SD-Karten-Speicher, optionale LED-Steuerung und einen vereinfachten Einrichtungsprozess ohne Programmierkenntnisse.",
      refDesignTitle: "Referenzdesign",
      refDesignDesc:
        "Zum Vergleich und zur Inspiration zeigt das folgende ESP32-Audio-Recorder-Projekt eine verwandte Architektur:",
      refDesignLinks: [
        {
          label: "Dokumentation",
          url: "https://docs.cirkitdesigner.com/project/published/e39a1639-a2e9-4fa3-92d3-89d96a50dac6/esp32-based-audio-recorder-and-playback-system",
        },
        {
          label: "Projektansicht",
          url: "https://app.cirkitdesigner.com/project/e39a1639-a2e9-4fa3-92d3-89d96a50dac6",
        },
      ],
      requirementsTitle: "Ihre Anforderungen",
      requirementsDesc:
        "Das System ist darauf ausgelegt, folgende funktionale Anforderungen zu erfüllen: integriertes Mikrofon zur Audioaufnahme, ESP32-Mikrocontroller mit WLAN und Bluetooth, SD-Karten-Speicher, physische Steuertasten, adressierbare LED-Unterstützung und vollständige Dokumentation.",
      conceptTitle: "Unser Konzept",
      conceptDesc:
        "Die empfohlene Lösung basiert auf dem Carenuity S-M-A-Prinzip, bestehend aus Sensor-, Mikrocontroller- und Aktor-Modulen. Alle Blöcke sind auf Triple-Adaptern implementiert und für die schnelle Montage ohne technischen Hintergrund konzipiert. Das System kann über den Carenuity Solution Builder eingerichtet werden, der alle Konfigurationsschritte automatisch durchführt.",
      conceptSolutionBuilderLabel: "Solution Builder",
      modulesTitle: "Funktionsmodule",
      sensorBlock: {
        title: "Sensorblock (S)",
        desc: "MAX9814-Elektret-Mikrofon mit integriertem Verstärker für saubere Audioaufnahme, einschließlich WS2812B-LED-Ausgang für optionale LED-Streifen.",
      },
      mcuBlock: {
        title: "Mikrocontrollerblock (M)",
        desc: "ESP32-WROOM-32-Modul mit WLAN- und Bluetooth-Konnektivität, vollständig kompatibel mit der Arduino-IDE.",
      },
      actuatorBlock: {
        title: "Aktorblock (A)",
        desc: "MAX98357A Digital-Audio-Wandler mit direktem Lautsprecherausgang für die Audiowiedergabe.",
      },
      storageTitle: "Speichermodul",
      storageDesc:
        "Micro-SD-Erweiterungsplatine für SPI-basierte Audiodatenspeicherung.",
      storageProductLabel: "Produktlink",
      advantagesTitle: "Vorteile des Carenuity-Systems",
      advantages: [
        "Alle Module sind vollständig kompatibel mit dem Carenuity-Ökosystem.",
        "Die Installation wird innerhalb von Minuten über den Install-for-Free-Service abgeschlossen.",
        "Firmware-Updates werden drahtlos bereitgestellt.",
        "Vollständige Dokumentation ist enthalten.",
        "Die Module können kostenlos vorbereitet werden, mit einer erwarteten Lieferzeit von drei bis vier Wochen.",
      ],
      designTitle: "Designoptionen",
      designDesc:
        "Eine kreisförmige Basisplatine mit einem Durchmesser von etwa sechs Zentimetern steht zur Verfügung, um alle Bausteine aufzunehmen. Quadratische oder rechteckige Layouts werden ebenfalls unterstützt.",
      getStartedTitle: "Jetzt loslegen",
      getStartedDesc:
        "Wenn Sie an dieser modularen ESP32-Audiolösung interessiert sind, teilen Sie uns bitte Ihren bevorzugten Formfaktor mit. Wir bereiten das vollständige Modulset für Sie vor und stellen alle erforderlichen Einrichtungsanweisungen bereit.",
      instagramLabel: "Auf Instagram ansehen",
      wishlistTitle: "Zur Warteliste anmelden",
      wishlistDesc:
        "Trag dich in die ESP32-Audio-Warteliste ein und erfahre als Erster von Updates.",
      wishlistNote:
        "Bitte prüfen Sie Ihren Spam-Ordner, falls die Bestätigungs-E-Mail dort landen sollte.",
      wishlistBtn: "Zur Warteliste",
    },
    freshCheck: {
      badge: "Smarter Luftqualitätsmonitor",
      heroTitle: "FreshCheck –",
      heroHighlight: "Smarter Badezimmer-Luftqualitätsmonitor",
      heroDesc:
        "Wissen Sie sofort, ob die Badezimmerluft frisch oder noch belüftungsbedürftig ist — ein einfaches Ampelsignal, betrieben vom C3-Mini und einem hochpräzisen VOC-Sensor.",
      breadcrumbProducts: "Produkte",
      introTitle:
        "Carenuity FreshCheck – Smarter Badezimmer-Luftqualitätsmonitor",
      problemTitle: "Das Problem",
      problemDesc:
        "Niemand verlässt gerne ein Badezimmer, ohne zu wissen, ob die Luft für die nächste Person noch unangenehm ist. Herkömmliche Lösungen setzen auf Raten oder Warten — nicht sehr effizient.",
      solutionTitle: "Die Lösung",
      solutionDesc:
        "Carenuity FreshCheck misst sofort die Luftqualität in Ihrem Badezimmer und zeigt Ihnen, ob die Luft frisch ist oder noch belüftet werden muss. Betrieben von unserem C3-Mini IoT-Controller und einem hochpräzisen VOC-Sensor bietet FreshCheck ein einfaches Ampelsignal:",
      signals: [
        { color: "Grün", meaning: "Frische Luft, alles in Ordnung." },
        { color: "Orange", meaning: "Leichter Restgeruch." },
        { color: "Rot", meaning: "Lüftung empfohlen." },
      ],
      benefitsTitle: "Wichtigste Vorteile",
      benefits: [
        {
          title: "Sofortiges Feedback",
          desc: "Wissen Sie sofort, ob das Badezimmer frisch ist.",
        },
        {
          title: "Einfache Einrichtung",
          desc: "Bereit in unter 3 Minuten mit dem Carenuity Solution Builder.",
        },
        {
          title: "Flexible Form",
          desc: "Erhältlich als DIY-Kit für Technikbegeisterte oder als gebrauchsfertiges Gerät.",
        },
        {
          title: "Smart-Home-Integration",
          desc: "Verbindet sich über WLAN, MQTT oder Matter mit Ihrem Ökosystem (Home Assistant, Google Home, Alexa, Apple Home).",
        },
        {
          title: "Modular & nachhaltig",
          desc: "Basierend auf dem Carenuity C3-Mini und Sensormodulen — einfach zu erweitern oder umzurüsten.",
        },
      ],
      howTitle: "So funktioniert es",
      howSteps: [
        "Das Gerät lernt kontinuierlich die Basiswerte Ihrer Raumluft.",
        "Wenn die Luftqualität durch Gerüche sinkt, erkennt der Sensor erhöhte VOC-Werte.",
        "Das Display oder der LED-Ring zeigt ein klares Ampelsignal.",
        "Optional erhalten Sie eine Push-Benachrichtigung in Ihrer Smart-Home-App.",
      ],
      forTitle: "Für wen ist es geeignet?",
      forItems: [
        "Familien, die ein angenehmeres Badezimmererlebnis wünschen.",
        "Smart-Home-Nutzer, die Badezimmer-Luftqualität in ihre Automatisierung integrieren möchten.",
        "Universitäten und Studenten als schnelles DIY-Schaufensterprojekt.",
      ],
      getTitle: "Jetzt bestellen",
      getDesc: "Jetzt in zwei Optionen erhältlich:",
      getOptions: [
        { name: "DIY-Kit", desc: "Selbst in Minuten zusammenbauen." },
        {
          name: "Gebrauchsfertiges Gerät",
          desc: "Einstecken und mit der Überwachung beginnen.",
        },
      ],
      wishlistTitle: "Zur Warteliste anmelden",
      wishlistDesc:
        "Trag dich in die FreshCheck-Warteliste ein und erfahre als Erster von Updates.",
      wishlistNote:
        "Bitte prüfen Sie Ihren Spam-Ordner, falls die Bestätigungs-E-Mail dort landen sollte.",
      wishlistBtn: "Zur Warteliste",
    },
    fridgeBar: {
      badge: "Smarter Kühlschrankmonitor",
      heroTitle: "FridgeBar –",
      heroHighlight: "Schützen Sie Ihre Lebensmittel, sichern Sie Frische",
      heroDesc:
        "Überwacht kontinuierlich die Kühlschranktemperatur und zeigt Ihnen auf einen Blick, ob Ihre Lebensmittel sicher gelagert sind — mit smarten Benachrichtigungen bei Problemen.",
      breadcrumbProducts: "Produkte",
      introTitle:
        "Carenuity FridgeBar — Schützen Sie Ihre Lebensmittel, sichern Sie Frische",
      problemTitle: "Das Problem",
      problemDesc:
        "Kühlschränke sollen Lebensmittel sicher aufbewahren — aber Temperaturschwankungen treten häufiger auf als erwartet.",
      problemPoints: [
        "Häufiges Öffnen der Tür, schlechte Abdichtung oder Überfüllung können die Temperatur steigen lassen.",
        "Kinder (oder eilige Erwachsene) vergessen vielleicht, die Kühlschranktür vollständig zu schließen, sodass Kaltluft entweicht.",
        "Selbst kurze Zeiträume über +4 °C können die Lebensmittelhaltbarkeit verkürzen, Milchprodukte und Fleisch verderben oder Energie verschwenden.",
        "Ohne klares Feedback bemerkt man es erst, wenn es bereits zu spät ist.",
      ],
      solutionTitle: "Die Lösung",
      solutionDesc:
        "Carenuity FridgeBar überwacht kontinuierlich die Innentemperatur des Kühlschranks und zeigt Ihnen auf einen Blick, ob Ihre Lebensmittel sicher gelagert sind.",
      signals: [
        {
          color: "Grün",
          meaning: "Sicherheitszone, Kühlschrank funktioniert einwandfrei.",
        },
        {
          color: "Orange",
          meaning: "Temperatur leicht erhöht — Tür oder Beladung prüfen.",
        },
        {
          color: "Rot",
          meaning:
            "Unsichere Zone — Lebensmittel gefährdet, Tür möglicherweise offen oder Kühlsystem defekt.",
        },
      ],
      alertsTitle: "Smarte Benachrichtigungen",
      alertsDesc: "Optionale smarte Benachrichtigungen informieren Sie, wenn:",
      alerts: [
        "Die Kühlschranktür zu lange offen bleibt.",
        "Die Temperatur über Sicherheitsschwellenwerte steigt.",
        "Stromausfall oder Ausfall auftritt.",
      ],
      benefitsTitle: "Wichtigste Vorteile",
      benefits: [
        {
          title: "Lebensmittelsicherheit der Familie schützen",
          desc: "Wissen Sie jederzeit, dass Ihr Kühlschrank Lebensmittel frisch hält.",
        },
        {
          title: "Abfall reduzieren",
          desc: "Verderb durch unbemerkte Erwärmung oder vergessene Türen verhindern.",
        },
        {
          title: "Seelenfrieden",
          desc: "Sofort benachrichtigt werden, wenn Kinder vergessen, den Kühlschrank zu schließen.",
        },
        {
          title: "Energie sparen",
          desc: "Erkennen, wann Kaltluft entweicht, und frühzeitig handeln.",
        },
        {
          title: "Einfache Einrichtung",
          desc: "Bereit in 3 Minuten über den Carenuity Solution Builder.",
        },
        {
          title: "Smart-Integration",
          desc: "Funktioniert mit Matter, MQTT, Home Assistant, Google Home, Alexa, Apple Home.",
        },
      ],
      howTitle: "So funktioniert es",
      howSteps: [
        "FridgeBar im Kühlschrank platzieren, über USB oder Akkupack anschließen.",
        "Mit dem Carenuity Solution Builder konfigurieren.",
        "Das Gerät lernt die Basisbedingungen.",
        "LED-Anzeige zeigt sicheren/Alarmzustand.",
        "Optional: Benachrichtigungen erhalten, wenn die Kühlschranktür offen gelassen wird oder die Kühlung ausfällt.",
      ],
      forTitle: "Für wen ist es geeignet?",
      forItems: [
        "Familien mit Kindern (Problem: Tür offen gelassen).",
        "Haushalte mit empfindlichen Lebensmitteln, Insulin oder Babynahrung.",
        "Smart-Home-Nutzer, die Kühlschrankbenachrichtigungen auf ihrem Telefon möchten.",
        "Studenten/Universitäten: einfaches, aber realweltliches IoT-Schaufensterprojekt.",
      ],
      getTitle: "Jetzt bestellen",
      getDesc: "Jetzt in zwei Optionen erhältlich:",
      getOptions: [
        {
          name: "DIY-Kit",
          desc: "C3-Mini, Sensor, LED-Ring, Stromkabel und Schnellstartanleitung.",
        },
        {
          name: "Gebrauchsfertiges Gerät",
          desc: "Vormoniert in schlankem Gehäuse, Plug & Play.",
        },
      ],
      wishlistTitle: "Zur Warteliste anmelden",
      wishlistDesc:
        "Trag dich in die FridgeBar-Warteliste ein und erfahre als Erster von Updates.",
      wishlistNote:
        "Bitte prüfen Sie Ihren Spam-Ordner, falls die Bestätigungs-E-Mail dort landen sollte.",
      wishlistBtn: "Zur Warteliste",
    },
    leafTemp: {
      badge: "Pflanzenphysiologie-Sensing",
      heroTitle: "Blatttemperaturmessung –",
      heroHighlight: "Präzise Einblicke in die Pflanzenphysiologie",
      heroDesc:
        "Die Blatttemperatur ist ein wichtiger Indikator für den physiologischen Zustand einer Pflanze — sie liefert wertvolle Informationen über Wasserstress, Photosyntheseaktivität, Transpiration und Umweltreaktionen.",
      breadcrumbProducts: "Produkte",
      introTitle:
        "Blatttemperaturmessung – Präzise Einblicke in die Pflanzenphysiologie",
      introDesc:
        "Die Blatttemperatur ist ein wichtiger Indikator für den physiologischen Zustand einer Pflanze. Sie liefert wertvolle Informationen über Wasserstress, Photosyntheseaktivität, Transpiration und Umweltreaktionen. Präzise Messungen helfen dabei, Pflanzen besser zu verstehen, die Bewässerung zu optimieren und Krankheiten frühzeitig zu erkennen.",
      whyTitle: "Warum ist die Blatttemperatur wichtig?",
      whyPoints: [
        "Erkennung von Wasserstress: Wenn Pflanzen nicht genug Wasser aufnehmen können, steigt die Blatttemperatur aufgrund reduzierter Transpiration.",
        "Überwachung der Photosynthese: Temperaturänderungen beeinflussen die Effizienz der Photosynthese.",
        "Früherkennung von Krankheiten und Stress: Temperaturabweichungen können auf biotischen oder abiotischen Stress hinweisen.",
        "Optimierung von Bewässerung und Düngung: Datengestützte Entscheidungen verbessern die Ressourceneffizienz.",
      ],
      sensorsTitle: "Geeignete Sensoren für die Blatttemperaturmessung",
      sensor1Title: "C3-Mini mit Anschlussaufsatz",
      sensor1Points: [
        "Empfohlen für professionelle Anwendungen",
        "Kompakt, robust und speziell für Umwelt- und Pflanzenmessungen konzipiert",
        "Kompatibel mit verschiedenen Loggern und Gateways",
        "Ideal für die Langzeitüberwachung im Feld oder Gewächshaus",
      ],
      sensor2Title: "MLX90614 (NCIR – Berührungsloser Infrarotsensor)",
      sensor2Points: [
        "Berührungslos, misst Infrarotstrahlung von der Blattoberfläche",
        "Kostengünstig und einfach in Mikrocontroller-Systeme integrierbar",
      ],
      sensor2Limitations: [
        "Breites Sichtfeld (~35°) → potenzielle Umweltinterferenzen",
        "Empfindlich gegenüber Sonnenlicht und Wind",
        "Erfordert präzise Ausrichtung und möglicherweise Abschirmung",
      ],
      sensor2LimitationsLabel: "Einschränkungen:",
      guidelinesTitle: "Anwendungsrichtlinien für genaue Messungen",
      guidelines: [
        "Sensorpositionierung: So nah wie möglich und senkrecht zur Blattoberfläche",
        "Messzeitpunkt: Vorzugsweise morgens oder unter kontrollierten Bedingungen",
        "Abschirmung: Direkte Sonneneinstrahlung vermeiden",
        "Kalibrierung: Emissivität der Blattoberfläche berücksichtigen (typischerweise ~0,98)",
        "Datenintegration: Kann mit Umweltparametern wie Luftfeuchtigkeit, Licht und Bodenfeuchtigkeit kombiniert werden",
      ],
      wishlistTitle: "Zur Warteliste anmelden",
      wishlistDesc:
        "Trag dich in die Blatttemperatur-Warteliste ein und erfahre als Erster von Updates.",
      wishlistNote:
        "Bitte prüfen Sie Ihren Spam-Ordner, falls die Bestätigungs-E-Mail dort landen sollte.",
      wishlistBtn: "Zur Warteliste",
    },
    magneticTrafficCounting: {
      badge: "Smarte Verkehrsdetektion",
      heroTitle: "Magnetische Verkehrszählung —",
      heroHighlight: "Unterstützt vom Carenuity Triple-Adapter Ökosystem",
      heroDesc:
        "Magnetische Sensorik bietet eine effiziente und unauffällige Möglichkeit, Fahrzeuge in Bewegung zu erkennen. Autos enthalten erhebliche Mengen ferromagnetischen Materials, das das Erdmagnetfeld lokal verzerrt.",
      breadcrumbProducts: "Produkte",
      introTitle:
        "Magnetische Verkehrszählung — Unterstützt vom Carenuity Triple-Adapter Ökosystem",
      introP1:
        "Magnetische Sensorik bietet eine effiziente und unauffällige Möglichkeit, Fahrzeuge in Bewegung zu erkennen. Autos enthalten erhebliche Mengen ferromagnetischen Materials, das das Erdmagnetfeld lokal verzerrt. Ein kompaktes Sensormodul kann diese Störungen mit Mikrotesla-Empfindlichkeit messen und eine zuverlässige Verkehrszählung in Echtzeit ermöglichen. Schnelle Reaktionszeit, langfristige Temperaturstabilität und niedriger Stromverbrauch machen diesen Ansatz ideal für den Außeneinsatz, auch an abgelegenen Standorten.",
      introP2:
        "Carenuity bietet eine vollständige, modulare Hardware-Grundlage für den schnellen Einsatz solcher Sensorsysteme. Das System integriert Infineon-Magnetsensoren mit der Plug-and-Play Triple-Adapter-Architektur von Carenuity und ermöglicht schnelles Prototyping, schnellen Feldeinsatz und nahtlose Integration in bestehende IoT-Plattformen.",
      infineonTitle: "Infineon-Sensoren in Carenuity-Module integriert",
      infineonP1:
        "Carenuity unterstützt hochpräzise Sensoren von führenden Herstellern, darunter Magnetsensoren für die Verkehrsdetektion. Der Infineon TLV493D-A1B6 3D-Hall-Sensor ist besonders gut geeignet. Er misst Veränderungen auf allen drei magnetischen Achsen mit ausreichendem Dynamikbereich und lässt sich einfach in energiesparende Mikrocontroller-Systeme integrieren.",
      infineonP2:
        "Das C3-Mini-Ökosystem von Carenuity ist speziell für solche Integrationen konzipiert. Sensoren können direkt in die Plattform eingesteckt, innerhalb von Minuten getauscht und mit jedem C3-Mini-Mikrocontroller oder Aktormodul kombiniert werden. Diese Modularität ist ein Kernmerkmal des Triple-Adapter-Systems: Slot S für den Sensor, Slot M für den Mikrocontroller und Slot A für den Aktor. Gemeinsam bauen diese S+M+A-Komponenten ein vollständiges IoT-Gerät.",
      tripleAdapterTitle: "Der Carenuity Triple-Adapter Vorteil",
      tripleAdapterDesc:
        "Der Triple-Adapter ist darauf ausgelegt, Sensorsysteme schnell zu montieren, einzusetzen und zu iterieren. Er bietet universelle Schnittstellen für Sensoren, Controller und Aktoren. Die Kompatibilität mit ESP32- und ESP8266-basierten Carenuity-Mikrocontrollern ermöglicht eine effiziente Datenverarbeitung und drahtlose Kommunikation mit Home Assistant und Matter-Ökosystem-Integration.",
      buildTitle: "Bauen Sie Ihren Verkehrszähler in unter 3 Minuten",
      buildDesc:
        "Der Solution Builder bietet automatisierte Installation ohne Programmierung. Geräte werden per USB mit einem Install-for-Free-Button konfiguriert. Sensoren können später dank standardisierter Modulformatierung und Quick-Change-Funktionen innerhalb von Minuten im Feld getauscht werden.",
      howTitle: "So funktioniert die magnetische Verkehrszählung",
      howDesc:
        "Das Modul misst kontinuierlich Umgebungsmagnetfelder. Fahrzeugdurchfahrten erzeugen scharfe magnetische Signaturveränderungen, die auf Mikrotesla-Empfindlichkeitsniveau erkennbar sind. Durch die Kombination des Infineon-Magnetsensors mit einem C3-Mini-Controller und der Triple-Adapter-Architektur ermöglicht Carenuity:",
      howPoints: [
        "Echtzeiterkennung",
        "Autonomer Betrieb",
        "Drahtlose Berichterstattung",
        "OTA-Updates",
      ],
      whyTitle: "Warum Carenuity für die Verkehrszählung",
      whyPoints: [
        "Modularität — Sensoren tauschen ohne das gesamte System zu ersetzen",
        "Schnelle Bereitstellung — in unter 3 Minuten betriebsbereit",
        "Zukunftssicherheit — austauschbare Sensoren passen sich veränderten Anforderungen an",
        "Skalierbarkeit — von einzelnen Pilotprojekten bis hin zu vollständigen Überwachungsnetzwerken",
        "Ökosystem-Integration — geeignet für Kommunen, Forschungseinrichtungen und Startups",
      ],
      startTitle: "Smarter messen",
      startDesc:
        "Carenuity liefert komplette Hardware-Stacks, Installationsservices und Sensormodule für den schnellen Einsatz in Pilotinstallationen oder vollständigen Überwachungsnetzwerken.",
      shopTitle: "Jetzt kaufen",
      shopProduct: "Sensor Box Shield2Go Dual Adapter - Infineon Line",
      shopDesc:
        "Das Kit ist ausschließlich für Ihre Evaluierungszwecke vorgesehen. Durch den Betrieb dieses Kits erklären Sie sich damit einverstanden, dieses Kit nur für Evaluierungszwecke zu verwenden.",
      shopBtn: "Jetzt kaufen",
      installBtn: "Kostenlos installieren",
      wishlistTitle: "Zur Warteliste anmelden",
      wishlistDesc:
        "Trag dich in die Magnetische-Verkehrszählung-Warteliste ein und erfahre als Erster von Updates.",
      wishlistNote:
        "Bitte prüfen Sie Ihren Spam-Ordner, falls die Bestätigungs-E-Mail dort landen sollte.",
      wishlistBtn: "Zur Warteliste",
    },
    plantBar: {
      badge: "Smarte Pflanzenpflege",
      heroTitle: "PlantBar —",
      heroHighlight: "Nie wieder durstige Pflanzen",
      heroDesc:
        "Stellen Sie sich eine Welt vor, in der Ihre Pflanzen nie unter Durst oder Vernachlässigung leiden. Die Carenuity Plant Bar macht diesen Traum wahr.",
      breadcrumbProducts: "Produkte",
      sensorTitle: "Kapazitiver Bodenfeuchtigkeitsmesser",
      sensorDesc:
        "Der kapazitive Bodenfeuchtigkeitsmesser ist ein zuverlässiger und langlebiger Sensor zur Messung des Bodenfeuchtigkeitsgehalts mit kapazitiver Sensortechnologie. Anders als herkömmliche resistive Sensoren mit freiliegenden Metallsonden erkennt dieser Messer Veränderungen in der Dielektrizitätskonstante des Bodens, was ihn korrosionsbeständiger und ideal für den Langzeiteinsatz in Innen- und Außenbereichen macht. Er liefert genaue, konsistente Messwerte und lässt sich einfach in Mikrocontroller wie Arduino oder ESP32 integrieren — ideal für Smart Gardening, Bewässerungssysteme und landwirtschaftliches Monitoring. Niedriger Stromverbrauch und stabile Leistung machen ihn zu einem effizienten Werkzeug für optimale Bodenbedingungen in verschiedenen Anwendungen.",
      featuresTitle: "Wichtigste Merkmale",
      features: [
        {
          title: "Korrosionsbeständig",
          desc: "Anders als herkömmliche resistive Sensoren mit freiliegenden Metallsonden erkennt dieser Messer Veränderungen in der Dielektrizitätskonstante des Bodens und ist dadurch korrosionsbeständiger.",
        },
        {
          title: "Mikrocontroller-kompatibel",
          desc: "Integration mit Mikrocontrollern wie Arduino oder ESP32 für nahtlose IoT-Konnektivität.",
        },
        {
          title: "Niedriger Stromverbrauch",
          desc: "Konzipiert für energieeffizienten Betrieb, ideal für Langzeiteinsätze im Innen- und Außenbereich.",
        },
        {
          title: "Vielseitige Anwendungen",
          desc: "Geeignet für Smart Gardening, Bewässerungssysteme und landwirtschaftliches Monitoring.",
        },
      ],
      plantBarTitle:
        "Nie wieder durstige Pflanzen: Carenuity Plant Bar revolutioniert die Pflanzenpflege",
      plantBarP1:
        "Stellen Sie sich eine Welt vor, in der Ihre Pflanzen nie unter Durst oder Vernachlässigung leiden. Die Carenuity Plant Bar macht diesen Traum wahr. Dieses kompakte Gerät, aufgebaut auf der fortschrittlichen C3-Mini-Architektur, verfügt über ein lebhaftes 0,96-Zoll-OLED-Display, das die Pflanzenpflege ins digitale Zeitalter bringt.",
      plantBarP2:
        "Mit dem Carenuity Solution Builder können Sie mühelos die neuesten Anwendungen installieren und aktualisieren und sicherstellen, dass Ihr Gerät immer mit den neuesten Funktionen ausgestattet ist. Doch die Magie hört nicht dort auf. Dieses smarte Tool hilft Ihnen, wichtige Parameter wie Bodenfeuchtigkeit, Temperatur und Luftfeuchtigkeit zu überwachen, wodurch die Pflanzenpflege einfacher und effizienter wird.",
      plantBarP3:
        "Vorbei sind die Zeiten des Ratens, wann Sie Ihre Pflanzen gießen sollen. Die Carenuity Plant Bar liefert Echtzeit-Daten und warnt Sie, wenn Ihre Pflanzen Aufmerksamkeit benötigen. Ob erfahrener Gärtner oder Pflanzenliebhaber — dieses Gerät vereinfacht Ihren Alltag und sorgt dafür, dass Ihre Pflanzen gedeihen.",
      plantBarP4:
        "Außerdem können Sie Ihr Gerät mit Ihrem eigenen Logo auf dem Display personalisieren und Ihrer Pflanzenpflege eine persönliche Note verleihen. In verschiedenen Farben erhältlich, überzeugt die Carenuity Plant Bar nicht nur durch Leistung, sondern ergänzt auch Ihren persönlichen Stil.",
      structureTitle: "Struktur",
      shopTitle: "Jetzt kaufen",
      shopProduct: "Kapazitiver Bodenfeuchtigkeitssensor, V2.0",
      shopProductDesc:
        "Der kapazitive Bodenfeuchtigkeitssensor ist ein zuverlässiges und langlebiges Werkzeug zur Messung der Bodenfeuchtigkeit. Er arbeitet mit einer Spannung von 3,3 bis 5,5 V.",
      shopBtn: "Jetzt kaufen",
      wishlistTitle: "Zur Warteliste anmelden",
      wishlistDesc:
        "Trag dich in die PlantBar-Warteliste ein und erfahre als Erster von Updates.",
      wishlistNote:
        "Bitte prüfen Sie Ihren Spam-Ordner, falls die Bestätigungs-E-Mail dort landen sollte.",
      wishlistBtn: "Zur Warteliste",
    },
    aqiInsights: {
      badge: "Luftqualitätsindex",
      heroTitle: "Die Luft, die Sie atmen, beeinflusst Ihre Gesundheit —",
      heroHighlight: "Bleiben Sie Verschmutzungsrisiken einen Schritt voraus",
      heroDesc:
        "Luft kann sauber aussehen, doch schädliche Schadstoffe lauern oft unbemerkt — besonders in Innenräumen. Der Luftqualitätsindex (AQI) ist ein entscheidendes Maß für das, was Sie wirklich einatmen.",
      breadcrumbProducts: "Produkte",
      introP1:
        "Luft kann sauber aussehen, doch schädliche Schadstoffe lauern oft unbemerkt — besonders in Innenräumen. Der Luftqualitätsindex (AQI) ist ein entscheidendes Maß für das, was Sie tatsächlich einatmen, und verfolgt Schadstoffe wie Feinstaub (PM2,5 und PM10), Ozon, Stickstoffdioxid und mehr.",
      introP2:
        "Wenn der AQI-Wert steigt, steigen auch die Gesundheitsrisiken. Kurzfristige Exposition gegenüber schlechter Luftqualität kann Reizungen der Augen, Nase und Kehle verursachen, Asthmaanfälle auslösen und die Lungenfunktion einschränken.",
      introP3:
        "Langfristige Exposition wurde mit Herzerkrankungen, Atemwegserkrankungen und sogar einer verkürzten Lebenserwartung in Verbindung gebracht.",
      introP4:
        "Ohne aktive Überwachung kann schlechte Luftqualität Ihre Konzentration, Ihr Energieniveau und Ihr allgemeines Wohlbefinden unbemerkt beeinträchtigen.",
      introP5:
        "Besonders gefährdete Gruppen — wie Kinder, Senioren und Menschen mit chronischen Erkrankungen — sind einem noch höheren Risiko ausgesetzt.",
      introP6:
        "Deshalb ist die AQI-Überwachung in Echtzeit nicht nur ein Feature — sie ist eine erste Verteidigungslinie für Ihre Gesundheit.",
      applicationsTitle: "Verfügbare Anwendungen",
      applications: [
        "Barometer",
        "Hygrometer",
        "Thermometer",
        "Bewegungsmelder",
        "Luxmeter",
        "IR-Radiometer",
        "Präsenztaste",
      ],
      wishlistTitle: "Warteliste beitreten",
      wishlistDesc:
        "Bleiben Sie über AQI-Insights-Updates und neue Funktionen informiert.",
      wishlistNote:
        "Bitte prüfen Sie Ihren Spam-Ordner, falls die Bestätigungs-E-Mail dort landen sollte.",
      wishlistBtn: "Zur Warteliste",
    },
    sensorArray: {
      badge: "IoT & Sensing Bundle",
      heroTitle: "Sensor Array Kit —",
      heroHighlight: "Perfektes Bundle für IoT- und Sensing-Projekte",
      heroDesc:
        "Ein umfassendes Bundle mit 10 vollständigen Einheiten basierend auf dem Shield2Go Single Adapter und dem DPS310-Drucksensor — ideal für Entwickler, die präzise Drucksensorik in IoT-Systeme integrieren.",
      breadcrumbProducts: "Produkte",
      introTitle:
        "Sensor Array Kit — Perfektes Bundle für IoT- und Sensing-Projekte",
      introDesc:
        "Das Sensor Array Kit ist ein umfassendes Bundle mit 10 vollständigen Einheiten basierend auf unserem Shield2Go Single Adapter und dem DPS310-Drucksensor aus der Chipglobe Comfort Line. Dieses Set ist ideal für Entwickler und Ingenieure, die zuverlässige und präzise Drucksensoren in ihre IoT-Systeme integrieren möchten.",
      contentsTitle: "Kit-Inhalt",
      contents: [
        {
          label: "10x 3D-gedrucktes Gehäuse",
          desc: "Langlebige und umweltfreundliche Gehäuse für die Single Adapter.",
        },
        {
          label: "10x Shield2Go Single Adapter Trust-X V2.0",
          desc: "Ermöglicht einfache Sensorintegration.",
        },
        {
          label: "10x ESP32-WROOM-32D Module",
          desc: "WLAN- und Bluetooth-fähig, ideal für IoT-Anwendungen.",
        },
        {
          label: "10x DPS310 Drucksensor",
          desc: "Hochpräziser barometrischer Sensor aus unserer Chipglobe Comfort Line.",
        },
        {
          label: "10x USB-Kabel",
          desc: "Hochwertige Chipglobe USB-Kabel für die Stromversorgung.",
        },
      ],
      devDesc:
        "Dieses Kit ermöglicht schnelle Entwicklung und Evaluierung von IoT-Systemen mit Fokus auf präzise Druckmessungen.",
      shopProduct:
        "Sensor Array Kit - Komplettbundle mit 10x Single Adapter und DPS310",
      shopProductDesc:
        "Dieses Kit ermöglicht schnelle Entwicklung und Evaluierung von IoT-Systemen mit Fokus auf präzise Druckmessungen.",
      shopBtn: "Jetzt kaufen",
      installBtn: "Kostenlos installieren",
      wishlistTitle: "Zur Warteliste anmelden",
      wishlistDesc:
        "Trag dich in die Sensor-Array-Warteliste ein und erfahre als Erster von Updates.",
      wishlistNote:
        "Bitte prüfen Sie Ihren Spam-Ordner, falls die Bestätigungs-E-Mail dort landen sollte.",
      wishlistBtn: "Zur Warteliste",
    },
    c3MiniPiggyback: {
      badge: "C3-Mini Ökosystem",
      heroTitle: "Schnellere Prototypenentwicklung mit",
      heroHighlight: "Piggyback-Sensoren & dem C3-Mini Ökosystem",
      heroDesc:
        "Montieren Sie jeden Sensor direkt auf den standardisierten C3-Mini-Pinout — ohne Verkabelung. In unter drei Minuten über den Solution Builder integriert.",
      breadcrumbProducts: "Produkte",
      sensorsTitle: "Piggyback-Sensormodule",
      applicationsLabel: "Anwendungen",
      shopBtn: "Jetzt kaufen",
      wishlistTitle: "Zur Warteliste anmelden",
      wishlistDesc:
        "Tragen Sie sich in die C3-Mini-Piggybacks-Warteliste ein und erfahren Sie als Erster, wenn das Produkt verfügbar ist.",
      wishlistNote:
        "Bitte prüfen Sie Ihren Spam-Ordner, falls die Bestätigungs-E-Mail dort landen sollte.",
      wishlistBtn: "Zur Warteliste",
    },
    aquabar: {
      badge: "Smartes Aquarium-Monitoring",
      heroTitle: "Carenuity AquaBar",
      heroHighlight:
        "Schützen Sie Ihr Aquarium mit intelligentem Temperatur-Monitoring",
      heroTagline:
        "Halten Sie Ihr Aquarium-Leben sicher — auch wenn Sie nicht zu Hause sind.",
      heroDesc:
        "AquaBar überwacht die Wassertemperatur kontinuierlich und warnt Sie sofort, wenn die Bedingungen unsicher werden.",
      breadcrumbProducts: "Produkte",
      problemTitle: "Das Problem",
      problemItems: [
        "Aquarien sind empfindliche Ökosysteme — selbst kleine Temperaturschwankungen können Bewohner gefährden",
        "Heizungsausfälle oder unerwartete Temperaturschwankungen können ohne Vorwarnung auftreten",
        "Probleme entstehen typischerweise während der Abwesenheit des Besitzers, insbesondere im Urlaub",
        "Verzögerte Erkennung bedeutet oft irreversible Schäden",
      ],
      solutionTitle: "Die Lösung",
      solutionDesc:
        "Carenuity AquaBar ist ein kompakter Smart-Sensor, der die Aquariumwassertemperatur kontinuierlich überwacht und Sie sofort warnt, wenn etwas nicht stimmt.",
      statusGreen: "Temperatur stabil und sicher",
      statusOrange: "Warnung — außerhalb des idealen Bereichs",
      statusRed: "Gefahr — sofortiges Handeln erforderlich",
      alertDesc:
        "Sofortige Benachrichtigungen auf Ihrem Smartphone, wenn die Wassertemperatur abweicht oder die Heizung ausfällt",
      benefitsTitle: "Wichtigste Vorteile",
      benefits: [
        {
          title: "Wasserleben schützen",
          desc: "Schützen Sie Fische, Korallen und Pflanzen vor kritischen Temperaturschwankungen",
        },
        {
          title: "Sorglos im Urlaub",
          desc: "Wissen Sie immer, dass Ihr Aquarium sicher ist — egal wo Sie sind",
        },
        {
          title: "Frühzeitige Fehlererkennung",
          desc: "Erkennen Sie Heizungs- oder Kühlerausfälle bevor es zu spät ist",
        },
        {
          title: "Einfache Einrichtung",
          desc: "Einsatzbereit in 3 Minuten mit dem Carenuity Solution Builder",
        },
        {
          title: "Smart-Integration",
          desc: "Kompatibel mit Matter, Home Assistant, Google Home, Alexa, Apple Home",
        },
      ],
      howTitle: "So funktioniert es",
      howSteps: [
        "AquaBar-Sensor ins Aquarium platzieren",
        "Per USB oder Akkupack verbinden",
        "Über den Carenuity Solution Builder konfigurieren",
        "LED-Anzeige zeigt sicheren/Alarm-Zustand auf einen Blick",
        "Optionale Push-Benachrichtigungen halten Sie auch unterwegs informiert",
      ],
      audienceTitle: "Für wen ist es geeignet?",
      audienceItems: [
        "Aquariumbesitzer, die häufig verreisen",
        "Riff-Pfleger und Meerwasseraquarien (hohe Empfindlichkeit)",
        "Süßwasserbecken mit empfindlichen Fischarten",
        "Smart-Home-Enthusiasten mit Interesse an Echtzeit-Aquariumdaten",
      ],
      optionsTitle: "Produktoptionen",
      diyTitle: "DIY-Kit",
      diyItems: [
        "C3-Mini",
        "Wasserdichte Sensorsonde",
        "LED-Ring",
        "Netzkabel",
        "Schnellstartanleitung",
      ],
      readyTitle: "Gebrauchsfertiges Gerät",
      readyItems: ["Vorinstalliert", "Versiegeltes Gehäuse", "Plug & Play"],
      wishlistTitle: "Zur Warteliste anmelden",
      wishlistDesc:
        "Tragen Sie sich in die AquaBar-Warteliste ein und erfahren Sie als Erster, wenn das Produkt verfügbar ist.",
      wishlistNote:
        "Bitte prüfen Sie Ihren Spam-Ordner, falls die Bestätigungs-E-Mail dort landen sollte.",
      wishlistBtn: "Zur Warteliste",
    },
    autonomousCar: {
      badge: "Mittelschweres Projekt",
      heroQuestion: "Hast du dich schon einmal gefragt, wie man",
      heroHighlight: "ein selbstfahrendes Auto baut?",
      heroDesc:
        "Wir stellen vor: Autonomous Driving Car V3 — ein mittelschweres Projekt von Carenuity, das die Zukunft autonomer Technik in deine Hände legt. Gebaut mit Raspberry Pi 4, individuell 3D-gedruckten Teilen und kamerabasierter Navigation mit Open-Source C/C++-Code.",
      getHardware: "Hardware kaufen",
      installFree: "Kostenlos installieren",
      breadcrumbProducts: "Produkte",
      whyTitle: "Warum mitmachen?",
      whyItems: [
        "Entdecke, wie KI Autonomie ermöglicht",
        "Arbeite praktisch mit 3D-gedruckten Designs, die du anpassen kannst",
        "Tritt einer Gemeinschaft von Innovatoren bei, die die Zukunft gestalten",
      ],
      storyLabel:
        "Die Geschichte hinter dem Blueprint für dein erstes eigenes Auto",
      storyTitle: "Jetzt autonom fahrend: Die Wiedergeburt eines Gewinners",
      storyP1:
        "Das haifischähnliche Design des MF3, ein Symbol für Geschwindigkeit und Präzision, wurde 2025 in einem 1:10-Modell neu erschaffen. Das Schaeffler FAG Modell MF3 aus dem Jahr 2009 — präsentiert auf einer Foyer-Veranstaltung von Schaeffler in Anwesenheit von Dr. Grunau und Dipl.-Ing. Seubert — ist heute an der THWS Universität in Schweinfurt ausgestellt.",
      storyP2:
        "Das Infineon Auto 2025 nutzt fortgeschrittene KI-Kompetenzen, um sich autonom in Heim- und Büroumgebungen zu bewegen. Das Fahrzeug dient als vielseitige Plattform für fortschrittliche Sensoren und erhöht die Sicherheit in Smart Homes und Büros.",
      storyP3:
        "Carenuity und Infineon verpflichten sich, ihr Wissen an ausgewählte internationale Universitäten weiterzugeben.",
      storyP4:
        "Entwickelt von Eren Arslan Ramazan, einem THWS-Studenten, der zuvor den Carenuity Home Challenge für smarte Immobiliensensoren gewann — mit einem ausgeklügelten Barometer auf Basis des Bosch BMP180 / BME680.",
      versionsDesc: [
        "Erste Präsentation von Harald Lehmann am Infineon-Hauptsitz in Neubiberg, Deutschland (Pizza & Beer Event).",
        "Verbesserte Version, weiterentwickelt von Daniel Gernert.",
        "Neueste autonome Iteration mit fortschrittlicher KI für Echtzeit-Entscheidungen und sichere Navigation.",
      ],
      projectsTitle: "Projektpräsentation",
      projectsItems: [
        {
          title: "Autonomous Driving Car",
          description:
            "Dieses RC-Auto ist mit einer Kamera, einem Raspberry Pi, einem XMC1100 Boot Kit und dem DC Motor Control Shield mit BTN8982TA ausgestattet.",
        },
        {
          title: "Autonomous Driving Car V2",
          description:
            "Eine verbesserte Iteration mit verfeinerter Hardware-Integration und erweiterten Navigationsalgorithmen.",
        },
        {
          title: "Autonomous Driving Car V3",
          description:
            "Die neueste autonome Version mit KI-gestützter Echtzeit-Entscheidungsfindung und Simulator-Integration.",
        },
      ],
      learnMore: "Mehr erfahren",
      devRole: "Informatik, 6. Semester · THWS Universität",
      devGoalsTitle: "Projektziele",
      devGoalsDesc:
        "Ziel war es, eine optimierte Variante (V3) des Fahrzeugs zu entwickeln, das autonom und sicher durch verschiedene Umgebungen navigieren kann. Das Hauptziel war die Erstellung strukturierter Dokumentation auf Hackster.io, damit Studierende das Fahrzeug nachbauen und KI-Algorithmen in Wettbewerben testen können.",
      devDescTitle: "Projektbeschreibung",
      devDescP:
        "Das Fahrzeug nutzt fortschrittliche KI-Fähigkeiten für Echtzeit-Entscheidungen und sichere Navigation. Die Dokumentation umfasst Simulator-Integration und App-basierte Steuerung.",
      devInspirationTitle: "Inspiration",
      devInspirationP:
        "Getrieben von Interesse an modernen autonomen Technologien, dem im THWS-Gebäude ausgestellten Schaeffler FAG Modell MF3 und dem vorherigen Erfolg beim Carenuity Home Challenge.",
      devCollabTitle: "Zusammenarbeit",
      devCollabP:
        "Eigenständige Entwicklung mit Unterstützung von ChipGlobe/Carenuity und Infineon. Hardware bereitgestellt von Infineon und ChipGlobe. Kommunikation per Messenger zur Problemlösung, mit Unterstützung von Prof. Heinz Endres.",
      devChallengesTitle: "Wesentliche Herausforderungen",
      devChallengesP:
        "Die größten Hürden lagen in der Integration der verschiedenen Hardware-, Software- und KI-Systeme sowie darin, dass das Fahrzeug zuverlässig und sicher funktioniert. Veraltete Projekte und Bibliotheken erforderten aufwändiges Debugging. Besondere Schwierigkeiten bereiteten Echtzeit-Entscheidungen und präzise Navigation.",
      devAchievementTitle: "Wichtigste Errungenschaft",
      devAchievementP: `„Andere Studierende auf der ganzen Welt können meine Dokumentation jetzt nutzen, um ihr eigenes Fahrzeug schnell und einfach zu bauen, damit sie ihre eigenen KI-Algorithmen testen und verbessern können.“`,
      devSkillsTitle: "Erworbene Fähigkeiten",
      skills: [
        "Embedded-Systems-Entwicklung",
        "C++-Programmierung",
        "Fortgeschrittene KI und Echtzeit-Entscheidungsfindung",
        "Systemintegration und Dokumentation",
      ],
      devRecommTitle: "Empfehlungen für andere Teams",
      recommendations: [
        "Kontakt zu Unternehmen im Bereich aufbauen",
        "Expertenrat und Ressourcen nutzen",
        "Eng kommunizieren und verfügbare Unterstützung nutzen",
        "Flexibel bleiben und aus Fehlern lernen",
        "Weiterbildungsmöglichkeiten wahrnehmen",
      ],
      devConclusionTitle: "Fazit",
      devConclusionP: `Eren entdeckte Carenuity durch den Home Challenge-Wettbewerb, organisiert von Prof. Dr. Heinz Endres. „Solche zusätzlichen Aktivitäten im Rahmen von Lehrveranstaltungen sind äußerst wertvoll – sie bieten nicht nur Lernerfahrungen, sondern auch echte Möglichkeiten zur persönlichen und beruflichen Entwicklung."`,
      pubTitle: "Veröffentlichungen & Links",
      thwsLabel: "THWS-Presseartikel zum Home Challenge",
      thwsSource: "thws.de · Pressearchiv",
      hacksterLabel: "Projektdokumentation · Autonomous Driving Car V3",
      hacksterSource: "hackster.io · Eren Arslan Ramazan",
      projectCaption:
        "Eren trifft Deogratius und David (Robotik-/Mechatronikstudenten) an der THWS in Schweinfurt.",
      shopTitle: "Bei uns kaufen",
      shopProductName: "Autonomes Fahrauto von Infineon & Carenuity",
      shopDesc:
        "Das autonome Fahrauto bietet eine innovative Lösung für selbstfahrende Fahrzeuge. Ausgestattet mit einer Kamera, einem Raspberry Pi und dem XMC1100 Boot Kit ermöglicht es die Steuerung per Smartphone, Tablet oder Laptop.",
    },
    homeChallengeUniversity: {
      sidebar: {
        header: "Home-Challenge",
        subheader: "Universitäten",
        all: "Alle",
        close: "Schließen",
        back: "Zurück zur Home Challenge",
        guideBadge: "Anleitung",
        items: {
          c3Mini: {
            label: "C3 Mini Kisii Boxen",
            desc: "IoT- & KI-Sensor-Kits-Anleitung",
          },
          auth: { label: "AUTH", desc: "Aristoteles-Univ. Thessaloniki" },
          oauth: { label: "Open AUTH", desc: "Offene Ausgabe" },
          duth: { label: "DUTH", desc: "Demokrit-Univ. Thrakien" },
          uop: { label: "UOP", desc: "Universität Patras" },
          thws: { label: "THWS", desc: "Würzburg-Schweinfurt" },
          tum: { label: "TUM", desc: "Techn. Univ. München" },
          tuk: { label: "TUK", desc: "Techn. Univ. Kenia" },
          nairobi: { label: "Nairobi", desc: "Home Challenge Kenia" },
          girlsDay: { label: "Girls' Day", desc: "MINT-Förderung" },
          nightSessions: {
            label: "Night Sessions",
            desc: "Donnerstags-Sessions",
          },
          certificate: { label: "Zertifikat", desc: "Erfolg überprüfen" },
        },
      },
      common: {
        home: "Start",
        homeChallenge: "Home Challenge",
        universityPartner: "Hochschulpartner",
        byCarenuity: "von carenuity",
        pressMaterials: "Pressematerialien",
        backToStart: "Zurück zur Startseite",
        press: "Presse",
      },
      auth: {
        crumb: "AUTH",
        title: "AUTH Home Challenge",
        subtitle: "Aristoteles-Universität Thessaloniki",
        linkText: "AUTH Home Challenge",
      },
      duth: {
        crumb: "DUTH",
        title: "DUTH Home Challenge",
        subtitle: "Demokrit-Universität Thrakien",
        linkText: "DUTH Home Challenge",
      },
      tuk: {
        crumb: "TUK",
        title: "TUK Home Challenge",
        subtitle: "Technische Universität Kenia",
        linkText: "TUK Home Challenge",
      },
      tum: {
        crumb: "TUM",
        title: "TUM Home Challenge",
        subtitle: "Technische Universität München",
        linkText: "TUM Home Challenge",
      },
      uop: {
        crumb: "UOP",
        title: "UOP Home Challenge",
        subtitle: "Universität Patras",
        linkText: "UOP Home Challenge",
      },
      nairobi: {
        crumb: "Nairobi",
        title: "Nairobi Home Challenge",
        subtitle: "Von Kenia in die Welt",
        locationBadge: "Standort",
        linkText: "Nairobi Home Challenge",
      },
      nightSessions: {
        crumb: "Night Sessions",
        title: "Night Sessions",
        subtitle: "Eine Art Home Challenge",
        intro: "Donnerstag-Night-Sessions von Carenuity.",
        badge: "Donnerstags-Sessions",
        linkText: "Donnerstag-Night-Sessions, eine Art Home Challenge",
      },
      thws: {
        crumb: "THWS",
        title: "THWS Home Challenge",
        subtitle: "Universität Würzburg-Schweinfurt",
        linkText: "THWS Home Challenge",
        register: "Anmelden",
        registerDesc: "für die Home Challenge zur KI",
        scan: "Scannen",
        scanDesc: "um der WhatsApp-Gruppe beizutreten",
      },
      thwsPress: {
        crumb: "Pressematerialien",
        title: "THWS Pressematerialien",
        subtitle: "Studentische Projekte im Überblick",
        badge: "Presse & Projekte",
        sectionPress: "Pressematerialien",
        sectionScan: "Scannen",
        sectionRetrospective:
          "Rückblick: Studentische Home-Challenge-Projekte 2024",
        sectionInteraction: "Die Wechselwirkung zwischen Makern und Nutzern",
        interactionBody:
          "Die Wechselwirkung zwischen Makern und Nutzern ist von großer Bedeutung. Nutzer liefern wertvolles Feedback und neue Ideen und Anwendungsfälle, die es Makern ermöglichen, ihre Produkte zu verbessern und an neue Bedürfnisse anzupassen. Als Carenuity unterstützen wir diese Interaktion, indem wir Plattformen und Ressourcen bereitstellen, um den Austausch zwischen Makern und Nutzern zu erleichtern. Das Ziel ist es, gemeinsam innovative und benutzerfreundliche Geräte zu schaffen.",
        sectionSolutionBuilders: "Die Rolle der Solution Builder",
        solutionBuildersBody:
          "Die Entwickler auf der Solution Builder Platform teilen ihre Lösungen und sind eine wesentliche Komponente in diesem Prozess. Sie bringen spezialisierte Fachkenntnisse und Erfahrung ein, um maßgeschneiderte Lösungen zu entwickeln, die den spezifischen Anforderungen der Nutzer gerecht werden. Durch ihre Expertise tragen sie dazu bei, die Interaktion zwischen Makern und Nutzern weiter zu optimieren und die Entwicklung innovativer Produkte voranzutreiben.",
        sectionWhatsapp: "THWS Solution Builder WhatsApp-Gruppe",
        whatsappBody: `Diese WhatsApp-Gruppe „THWS Solution Builder" steht THWS-Mitarbeitern und -Studenten offen, um ihre Lösungen zu diskutieren und zu verfeinern:`,
        thwsPressLink: "Pressemitteilung der Hochschule Würzburg-Schweinfurt",
      },
      oauth: {
        crumb: "Open AUTH",
        title: "Open AUTH Home Challenge",
        subtitle: "Open-University-Ausgabe",
        linkText: "Open AUTH Home Challenge",
      },
      oauthPress: {
        crumb: "Pressematerialien",
        title: "Pressematerialien",
        subtitle: "Open AUTH Home Challenge",
        badge: "Presse",
      },
      assortmentPress: {
        crumb: "Pressematerialien",
        title: "Pressematerialien",
        subtitle: "C3-Mini Kisii Boxen",
        badge: "Presse",
      },
      girlsDay: {
        crumb: "Girls' Day",
        title: "Girls' Day 2026",
        subtitle: "Junge Frauen in MINT stärken",
        intro: "In Partnerschaft mit der THWS Hochschule — 23. April 2026.",
        badge: "MINT-Förderung",
        excitedHtml:
          "Wir freuen uns sehr, mitteilen zu können, dass <strong>Carenuity</strong> in stolzer Partnerschaft mit der <strong>THWS Hochschule</strong> aktiv am Girls’ Day 2026 teilnehmen wird! Diese inspirierende, bundesweit anerkannte Veranstaltung am <strong>23. April 2026</strong> hat das Ziel, junge Frauen zu stärken und ihnen Türen zu Berufen in <strong>Naturwissenschaften, Technik, Ingenieurwesen und Mathematik (MINT)</strong> zu öffnen. Mit zahlreichen praktischen Aktivitäten, Workshops und Vorträgen erhalten Teilnehmerinnen wertvolle Einblicke in zukunftsweisende Berufe.",
        whatIsTitle: "Was ist der Girls’ Day?",
        whatIsBody:
          "Der Girls’ Day ist eine jährliche Initiative, die Mädchen die Möglichkeit gibt, technische, naturwissenschaftliche, IT- und ingenieurwissenschaftliche Berufe zu entdecken. Sie können an praktischen Workshops und realen Experimenten teilnehmen, Vorbilder und Fachleute in MINT-Karrieren kennenlernen und Vertrauen in ihre technischen Fähigkeiten gewinnen. Vor allem hilft er ihnen, akademische und berufliche Wege zu entdecken, die sie vorher vielleicht nicht in Betracht gezogen haben.",
        importanceTitle: "Bedeutung des Girls’ Day",
        importanceIntro:
          "Im Rahmen der Zusammenarbeit von Carenuity mit der THWS Hochschule zum Girls’ Day 2026 erfüllt die Veranstaltung zentrale Bildungs- und Empowerment-Ziele:",
        importancePoints: [
          {
            title: "Technik entmystifizieren:",
            body: "Indem etwas Greifbares wie ein Bluetooth-Lautsprecher gebaut wird, erleben Mädchen, dass Technik nicht einschüchternd, sondern zugänglich und spaßig ist.",
          },
          {
            title: "Geschlechtergerechtigkeit fördern:",
            body: "Es adressiert direkt die Geschlechterlücke in MINT und stattet Mädchen mit Selbstvertrauen und Fähigkeiten aus, diese Felder zu erkunden.",
          },
          {
            title: "Früh einbinden:",
            body: "Aktivitäten wie das Stecken von Komponenten mit dem Carenuity Triple-Adapter bieten einen verspielten, intuitiven Einstieg in Ingenieurprinzipien.",
          },
          {
            title: "MINT-Karrieren fördern:",
            body: "Der Girls’ Day pflanzt das Saatkorn, dass auch sie als Ingenieurinnen, Wissenschaftlerinnen, Entwicklerinnen oder Innovatorinnen erfolgreich sein können.",
          },
        ],
        importanceOutro:
          "Der Girls’ Day ist mehr als eine Veranstaltung – er ist eine Bewegung, um Wahrnehmungen zu verändern, Selbstvertrauen zu stärken und die nächste Generation von Frauen in Technik und Wissenschaft zu fördern.",
        joinTitle: "Mach mit",
        joinP1:
          "Sei remote dabei – an einem spannenden und lehrreichen Tag voller inspirierender Aktivitäten und interaktiver, praktischer Workshops. Beim Girls’ Day 2026 hast du die einzigartige Möglichkeit, deinen eigenen Bluetooth-Lautsprecher in wenigen Minuten zu bauen – ganz ohne Vorkenntnisse!",
        joinP2:
          "Mit dem innovativen Carenuity Triple-Adapter entdecken die Teilnehmerinnen, wie Technik funktioniert, indem sie elektronische Komponenten in die Slots S (Sensor), M (Microcontroller) und A (Aktor) stecken. Diese spaßige Aktivität soll Neugier wecken, Selbstvertrauen stärken und zeigen, wie einfach und spannend der Einstieg in MINT sein kann.",
        slotsTitle: "Komponenten in den Slots S, M und A:",
        slots: [
          { name: "Slot S:", desc: "Hochpräzise Sensoren integrieren." },
          {
            name: "Slot M:",
            desc: "Microcontroller zur Verarbeitung der Sensordaten ergänzen.",
          },
          {
            name: "Slot A:",
            desc: "Aktor anschließen, um Aktionen basierend auf den Daten auszuführen.",
          },
        ],
        joinOutro:
          "Diese interaktive Erfahrung soll die nächste Generation weiblicher Führungskräfte in Technik und Innovation stärken und inspirieren. Verpasse nicht diese fantastische Gelegenheit, zu lernen, zu kreieren und dich mit Gleichgesinnten zu vernetzen. Lass uns die Zukunft gemeinsam gestalten – ein Gerät nach dem anderen!",
        kitTitle: "Home-Challenge-Kit für den Girls’ Day 2026",
        kitBody:
          "Das ist der Bluetooth-Lautsprecher, den die Teilnehmerinnen während des Girls’ Day 2026 stolz selbst bauen werden. Es ist mehr als ein Gadget – ein Symbol für Kreativität, praktisches Lernen und die Kraft junger Frauen, die selbstbewusst in die Welt der Technik treten.",
        kitReadyTitle:
          "Mach dich bereit für einen unvergesslichen Girls’ Day 2026!",
        kitOrder:
          "Um das Beste aus dieser Erfahrung herauszuholen, bestelle dein Home-Challenge-Kit rechtzeitig. Dieses Kit enthält alles, was du brauchst, um an allen Aktivitäten teilzunehmen – bequem von zuhause aus.",
        kitImportantLabel: "Wichtig:",
        kitImportantBody:
          "Stelle sicher, dass du Zugang zu einem Lötkolben hast – er ist für einige Aufgaben unverzichtbar. Wir freuen uns auf deine Teilnahme und einen spannenden Praxisteil!",
        learnMoreCta: "Mehr zur Home Challenge erfahren",
      },
      certificate: {
        crumb: "Zertifikat",
        title: "Home Challenge Zertifikat",
        subtitle: "Bestätige deine Leistung",
        badge: "Zertifikat",
        loading: "Wird geladen…",
        certHeading: "Leistungszertifikat",
        certifies: "Hiermit wird bestätigt, dass:",
        achievedIntro:
          "die Carenuity Home Challenge erfolgreich abgeschlossen hat und herausragende Fähigkeiten und Kenntnisse in den Bereichen",
        iot: "Internet der Dinge (IoT)",
        and: "und",
        ai: "Künstliche Intelligenz (KI)",
        competenciesTitle: "Nachgewiesene Kompetenzen:",
        competencies: [
          "Umfassendes Verständnis von IoT-Kommunikationsprotokollen",
          "Kompetenz im Entwurf und in der Umsetzung von IoT-Lösungen",
          "Fähigkeit, Daten von IoT-Geräten zu erfassen und auszuwerten",
          "Kenntnis bewährter Verfahren in der IoT-Sicherheit",
          "Anwendung von KI-Techniken in IoT-Systemen",
          "Integration von KI-Algorithmen zur Datenverarbeitung und Entscheidungsfindung",
        ],
        informalNote:
          "Dieses Zertifikat ist eine informelle Anerkennung der durch die Carenuity Home Challenge erworbenen Kompetenzen.",
        chipglobeNote:
          "ChipGlobe würdigt mit über 15 Jahren Erfahrung als vertrauenswürdiger Talente-Anbieter das Engagement und die Expertise der Teilnehmenden dieser Challenge.",
        notCompleted: "hat die Challenge noch nicht abgeschlossen!",
      },
      c3Mini: {
        crumb: "IoT- & KI-Sensor-Kits",
        title: "IoT- & KI-Sensor-Kits",
        subtitle: "Echtes Engineering an deine Hochschule bringen",
        intro: "C3-Mini-Hardware für IoT-, KI- und Engineering-Programme.",
        badge: "Für Hochschulen",
        overviewTitle: "Überblick",
        overviewBody:
          "Diese IoT- & KI-Sensor-Kits ermöglichen es Studierenden, in Minuten voll funktionsfähige IoT-Systeme zu bauen. Sie sind für Hochschulen, Innovation Hubs und Engineering-Programme konzipiert und verbinden modulare Hardware mit einer browserbasierten Software-Plattform – ohne klassische Einrichtungshürden.",
        solutionBuilderTitle: "Solution Builder",
        solutionBuilderBody:
          "Der Solution Builder ist eine vollständig browserbasierte Entwicklungsumgebung, mit der Studierende in unter drei Minuten IoT-Anwendungen erstellen, konfigurieren und ausrollen können.",
        howItWorks: "So funktioniert's:",
        howItWorksList: [
          "Wähle eine einsatzbereite Anwendung (z. B. Temperaturmonitor, Bewegungsmelder)",
          "Verbinde den C3-Mini per USB-C",
          "Flashe direkt aus dem Browser – keine Installation nötig",
          "Sofort lauffähig auf echter Hardware",
        ],
        githubNote:
          "Alle Projekte sind durch transparenten, auf GitHub gehosteten Quellcode abgesichert – das ermöglicht volle Anpassung und fortgeschrittene Workflows.",
        exploreLink: "Solution Builder erkunden →",
        threeMinutesTitle: "In 3 Minuten zum ersten Gerät",
        steps: [
          {
            step: "1. Verbinden",
            desc: "Verbinde den C3-Mini per USB-C mit deinem Rechner. Keine Treiber oder Software-Installation nötig.",
          },
          {
            step: "2. Auswählen",
            desc: "Öffne den Solution Builder im Browser und wähle eine sofort einsatzbereite Anwendung (z. B. Temperaturmonitor).",
          },
          {
            step: "3. Flashen",
            desc: "Flashe die Firmware mit einem Klick direkt aus dem Browser auf das Gerät.",
          },
          {
            step: "4. Ausführen",
            desc: "Dein IoT-Gerät ist sofort live. Sensordaten erscheinen auf dem Display oder per Serial/Web-Ausgabe.",
          },
        ],
        boxesTitle: "Die Boxen",
        box1Title: "Box 1 – Engineering-Kit (15 Komponenten)",
        box2Title: "Box 2 – Starter-Kit (14 Komponenten)",
        impactTitle: "Wirkung für Studierende",
        impactBody:
          "Studierende sammeln praktische Erfahrung in IoT, Elektronik und KI. Sie lernen echte Engineering-Fähigkeiten, bauen funktionsfähige Prototypen und entwickeln Lösungen für reale Industrie-Herausforderungen.",
        bringTitle: "Bring das an deine Hochschule",
        bringBody:
          "Setze in wenigen Wochen ein komplettes IoT- & KI-Bildungs-Ökosystem auf. Lass Studierende reale Systeme bauen, reduziere Einrichtungskomplexität und beschleunige Innovation.",
        contactUs: "Kontakt aufnehmen",
        pressMaterial: "Pressematerial",
        kisiiOnepager: "Kisii OnePager",
        assortmentBoxCrumb: "Assortment Box",
      },
    },
    programsGuides: {
      shared: {
        news: "Neuigkeiten:",
        step: "Schritt",
        applications: "Anwendungen",
        completeGuide: "Vollständige Anleitung",
        furtherReadingPre: "Zum Weiterlesen",
        furtherReadingLink: "siehe diese ausführliche Anleitung",
        enjoyApps: "Genießen Sie weitere kostenlose Apps im Solution Builder",
      },
      sidebar: {
        kicker: "Programme",
        title: "KI-Programme & Anleitungen",
        universityGroup: "Universitätsprogramm für KI",
        guidesGroup: "Anleitungen",
        openweather: "OpenWeather API-Schlüssel",
        qweather: "Q-Weather API-Schlüssel",
        spotify: "Spotify API-Schlüssel",
        youtube: "YouTube API-Schlüssel",
        adafruit: "Adafruit IO API-Schlüssel",
        thingspeak: "ThingSpeak API-Schlüssel",
      },
      landing: {
        pageName: "Programme",
        pageDesc:
          "Universitätsprogramme für KI und Schritt-für-Schritt-Anleitungen für die API-Schlüssel, die unsere Lösungen verwenden.",
        uniTitle: "Universitätsprogramm für KI",
        uniDesc:
          "Wir kooperieren mit ausgewählten Universitäten und stellen KI-Experten und Praktikanten in unseren Niederlassungen ein.",
        guidesTitle: "Anleitungen",
        guidesDesc:
          "Schritt-für-Schritt-Anleitungen zum Erhalt der API-Schlüssel, die unsere Lösungen verwenden.",
        kenyaDesc:
          "Wir stellen KI-Experten und Praktikanten von ausgewählten Universitäten in unserer Niederlassung in Kenya ein.",
        greeceDesc:
          "ChipGlobe / Carenuity ist der HETiA-Allianz beigetreten, ehemals Semiconductor Alliance of Greece.",
        germanyDesc:
          "Kooperationen mit ausgewählten deutschen Universitäten zu KI-gestützten Edge-Geräten.",
      },
      kenya: {
        pageName: "Universitätsprogramm für KI — Kenya",
        pageDesc:
          "Wir stellen KI-Experten und Praktikanten von ausgewählten Universitäten in unserer Niederlassung in Kenya ein.",
        region: "Kenya",
        heading:
          "Wir stellen KI-Experten und Praktikanten von ausgewählten Universitäten in unserer Niederlassung in Kenya ein.",
        ksuNews:
          "Neuigkeiten: Die Kisii University hat ihre Kurse kürzlich auf den Raspberry Pi Pico W mit integriertem WLAN von Infineon Technologies AG spezialisiert.",
        tukNews:
          "Neuigkeiten: Im Dezember 2023 schließt ein Praktikant aus Nairobi sein remote betreutes Praktikum zu KI-gestützten Edge-Geräten mit Schwerpunkt Objekterkennung mit Edge Impulse ab.",
        tukItalic:
          "TUK-News November 2023: Cyntia nahm an der IEEE TUK SB INNOVATION WEEK & INDUSTRY SYMPOSIUM teil",
        tumNews:
          "Neuigkeiten: Studierende der University of Mombasa TUM und Studierende der Technischen Universität München (TUM) planen eine Zusammenarbeit an KI-gestützten Edge-Geräten.",
      },
      greece: {
        pageName: "Universitätsprogramm für KI — Greece",
        pageDesc:
          "ChipGlobe / Carenuity ist kürzlich der HETiA-Allianz beigetreten, ehemals bekannt als Semiconductor Alliance of Greece.",
        region: "Greece",
        heading:
          "ChipGlobe / Carenuity ist kürzlich der HETiA-Allianz beigetreten, ehemals bekannt als Semiconductor Alliance of Greece.",
        uopTitle: "Zusammenarbeit mit RENESAS und UOP",
        uopNews:
          "Neuigkeiten: Carenuity prüft Kooperationen mit der Universität des Peloponnes und RENESAS mit Sitz in Patras.",
        pastEventsTitle: "Vergangene Veranstaltungen",
        pastEventsNews:
          "Neuigkeiten: Am 19.–20. Oktober 2023 nahm Carenuity an der HETiA Emerging Tech Conference zu Edge Intelligence an der Aristoteles-Universität in Thessaloniki teil und traf interessierte Studierende für Praktika ab März 2024.",
        oauthTitle: "Open AUTH Home Challenge (OAUTH)",
      },
      germany: {
        pageName: "Universitätsprogramm für KI — Germany",
        pageDesc:
          "Carenuity kooperiert mit ausgewählten deutschen Universitäten zu KI-gestützten Edge-Geräten.",
        region: "Germany",
      },
      openweather: {
        pageName: "OpenWeather API-Schlüssel erhalten",
        pageDesc: "So erhalten Sie den OpenWeatherMap API-Schlüssel.",
        heading: "So erhalten Sie den OpenWeatherMap API-Schlüssel",
        thanksPre: "Dank an",
        thanksPost:
          "& besuchen Sie deren Seiten für weitere Projekte mit ihren großartigen Kits.",
      },
      qweather: {
        pageName: "Q-Weather API-Schlüssel erhalten",
        pageDesc: "So erhalten Sie den Q-Weather API-Schlüssel.",
        heading: "So erhalten Sie den Q-Weather API-Schlüssel",
        intro:
          "Q-Weather bietet Wettervorhersagen über seine WeatherAPI. Folgen Sie den Schritten unten, um ein Konto zu registrieren und Ihren privaten API-Schlüssel zu erhalten.",
        registerTitle: "Für ein Wetter-Konto registrieren",
        registerPre: "Registrieren Sie sich unter",
        registerPost:
          ". Wechseln Sie vor der Registrierung zurück zu Ihrem eigenen WLAN oder mobilen Daten — solange Sie mit dem Hotspot der Wetteruhr verbunden sind, haben Sie keinen Internetzugang. Es wird daher empfohlen, die Registrierung an einem Computer durchzuführen.",
      },
      spotify: {
        pageName: "Spotify API-Schlüssel erhalten",
        pageDesc: "So erhalten Sie den Spotify API-Schlüssel.",
        heading: "So erhalten Sie den Spotify API-Schlüssel",
        p1: "Mit diesem Produkt können Sie Ihren aktuell aktiven Spotify-Player (Smartphone, Web-Player, dediziertes Gerät usw.) mit einem C3-Mini fernsteuern. Nach der ersten Authentifizierung und Autorisierung mit der Spotify-API zeigt das Produkt das Cover des aktuell wiedergegebenen Songs sowie den Titel und den Namen des Künstlers an.",
        p2: "Da der Squared Triple Adapter mit 2,8-Zoll-Display über eine Touch-Funktion verfügt, können Sie den Song auch pausieren, fortsetzen sowie zum nächsten und vorherigen Song springen. Und falls das nicht genügt, fragen Sie uns gerne nach einer Software-Code-Anpassung auf unserer WebFlashing-Plattform, z. B. zur Lautstärkeregelung oder für andere von der Spotify-API angebotene Funktionen.",
        p3: "Im Demovideo unten sehen Sie links den Squared Triple Adapter mit 2,8-Zoll-Display und zum Vergleich rechts ein Samsung-Smartphone. Hinweis: Die Musik wird vom Smartphone abgespielt, nicht vom Squared Triple Adapter mit 2,8-Zoll-Display, der als Fernbedienung für Ihr Telefon dient.",
        morePre: "Weitere Seiteninhalte unter",
        moreLink: "So erhalten Sie den Spotify API-Schlüssel",
      },
      youtube: {
        pageName: "YouTube API-Schlüssel erhalten",
        pageDesc: "So erhalten Sie den YouTube API-Schlüssel.",
        heading: "So erhalten Sie den YouTube API-Schlüssel",
        introPre: "Navigieren Sie zur",
        introLink: "Google Cloud Console",
        introPost: ", um zu beginnen.",
      },
      adafruit: {
        pageName: "Adafruit IO API-Schlüssel erhalten",
        pageDesc: "So erhalten Sie den Adafruit IO API-Schlüssel.",
        heading: "So erhalten Sie den Adafruit IO API-Schlüssel",
        introPre: "Navigieren Sie zum",
        introLink: "Adafruit IO Portal",
        introPost:
          ", um zu beginnen. Sie müssen sich entweder anmelden oder registrieren, um fortzufahren.",
      },
      thingspeak: {
        pageName: "ThingSpeak API-Schlüssel erhalten",
        pageDesc: "So erhalten Sie den ThingSpeak API-Schlüssel.",
        heading: "So erhalten Sie den ThingSpeak API-Schlüssel",
        intro:
          "ThingSpeak stellt API-Schlüssel bereit, mit denen Sie aus Ihren Kanälen lesen oder in sie schreiben können. So erhalten Sie einen:",
        stepByStep: "Schritt für Schritt",
        li1: "Registrieren Sie sich / melden Sie sich bei ThingSpeak an.",
        li2: "Gehen Sie nach der Anmeldung zu Channels (oberes Menü).",
        li3: "Klicken Sie auf New Channel (falls Sie noch keinen haben).",
        li3a: "Geben Sie Ihrem Kanal einen Namen und eine Beschreibung.",
        li3b: "Erstellen Sie Felder (bis zu 8 pro Kanal) — das sind Ihre Datenfelder.",
        li4: "Nach dem Erstellen eines Kanals:",
        li4a: "Gehen Sie zur Seite Channel Settings.",
        li4b: "Schauen Sie unter API Keys.",
        li4b1: "Sie sehen den Write API Key (zum Senden von Daten).",
        li4b2: "Sie sehen den Read API Key (zum Lesen von Daten).",
      },
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
