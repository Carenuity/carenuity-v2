"use client";
import Link from "next/link";
import UniversitySidebar from "../../UniversitySidebar";
import { useLanguage } from "../../../../context/LanguageContext";

const projects = [
  {
    href: "https://wokwi.com/projects/415254747927803905",
    title: "Positioning a cursor with confirmation",
    desc: "Yannick's project involves creating a system to position a cursor on a display and confirm its position. This likely uses buttons or a joystick for input, allowing precise control over the cursor's location.",
  },
  {
    href: "https://wokwi.com/projects/414878963606090753",
    title: "Simon Says Game with C3-Mini",
    desc: "Felix's project is a recreation of the classic Simon Says game using a C3-Mini micro-controller. The game tests memory by requiring players to repeat increasingly complex sequences of lights and sounds.",
  },
  {
    href: "https://wokwi.com/projects/414266527615099905",
    title: "C3-Mini THWS-Logo with OLED Display",
    desc: "Ramazan's project displays the THWS logo on an OLED screen using a C3-Mini microcontroller. This project showcases how to use graphic displays to render images and logos.",
  },
  {
    href: "https://wokwi.com/projects/385987811439126529",
    title: "Compass on Display by Potentiometer",
    desc: "Loris created a project where a potentiometer is used to simulate a compass, displaying the direction on a screen. An excellent example of how analog inputs can control digital displays.",
  },
  {
    href: "https://wokwi.com/projects/414344951640901633",
    title: "DHT22 Alarm for Temperatures above 25°C",
    desc: "Luisa's project uses a DHT22 sensor to monitor temperature and triggers an alarm if the temperature exceeds 25°C. Useful for environmental monitoring systems.",
  },
  {
    href: "https://wokwi.com/projects/416265055337216001",
    title: "Two LEDs with Button",
    desc: "Maximilian's project involves controlling two LEDs with a button, demonstrating basic input and output control with a microcontroller.",
  },
  {
    href: "https://wokwi.com/projects/414548843141306369",
    title: "DHT22-Uno-LiquidCrystal-Display",
    desc: "Moritz's project displays temperature and humidity readings from a DHT22 sensor on a LiquidCrystal display using an Arduino Uno.",
  },
  {
    href: "https://wokwi.com/projects/414884367510161409",
    title: "Manual People Counter (Button)",
    desc: "Johannes created a manual people counter using a button to increment the count, which is displayed on a screen. Useful for events or retail stores.",
  },
  {
    href: "https://wokwi.com/projects/416753739180109825",
    title: "Random dice generator",
    desc: "Artur's project simulates a dice roll, generating random numbers between 1 and 6, and displaying the result. A fun way to learn about random number generation.",
  },
  {
    href: "https://wokwi.com/projects/414634191354576897",
    title: "Arduino Uno LCD with THWS letters for random numbers",
    desc: "Anna-Lena's project displays random numbers on an LCD screen, with the letters 'THWS' incorporated into the display.",
  },
  {
    href: "https://wokwi.com/projects/276825819240727048",
    title: "Arduino Calculator",
    desc: "Daniel's project is a basic calculator implemented with an Arduino, capable of performing simple arithmetic operations.",
  },
  {
    href: "https://wokwi.com/projects/414548843141306369",
    title: "Arduino Uno Humidity & Temp. Monitoring Station",
    desc: "Max's project monitors and displays humidity and temperature using an Arduino Uno and appropriate sensors. Ideal for a home weather station.",
  },
  {
    href: "https://wokwi.com/projects/414832473351403521",
    title: "Electronic lock: Find correct sequence to get green",
    desc: "Jonas's project is an electronic lock that requires the user to input the correct sequence to unlock, indicated by a green light.",
  },
  {
    href: "https://wokwi.com/projects/321525495180034642",
    title: "NTP Time & Date UTC Server",
    desc: "Fabienne's project involves setting up an NTP server to provide accurate time and date information in UTC.",
  },
  {
    href: "https://wokwi.com/projects/415070577191291905",
    title: "Red-LED-On-Off-Momentary-Switch",
    desc: "Maximilian's project controls a red LED with a momentary switch, demonstrating basic switch control.",
  },
  {
    href: "https://wokwi.com/projects/415033768149590017",
    title: "Don't panic display",
    desc: "Cagri's project displays a reassuring message, 'Don't panic,' on a screen, possibly as a humorous or motivational tool.",
  },
  {
    href: "https://wokwi.com/projects/415724474838705153",
    title: "Arduino Uno KFZ-Blinker with alarm button",
    desc: "Leonardo's project simulates a car blinker (indicator) system with an alarm button using an Arduino Uno.",
  },
  {
    href: "https://wokwi.com/projects/415195153863784449",
    title: "Arduino Uni Würfel (Dice)",
    desc: "Tobias's project is another dice simulator, generating random numbers and displaying them on an LED or LCD display.",
  },
  {
    href: "https://wokwi.com/projects/415083424361074689",
    title: "PIR-triggered Schranke with green LED",
    desc: "Valentin's project uses a PIR sensor to trigger a barrier and light up a green LED when motion is detected.",
  },
  {
    href: "https://wokwi.com/projects/348849468083274322",
    title: "Pong Game",
    desc: "Max's project is a recreation of the classic Pong game, likely using an Arduino and a display to simulate the game.",
  },
  {
    href: "https://wokwi.com/projects/414919215451341825",
    title: "Binary Display with 3 LEDs for Potentiometer",
    desc: "Lukas's project uses a potentiometer to control a binary display with three LEDs, demonstrating basic analog-to-digital conversion.",
  },
  {
    href: "https://wokwi.com/projects/414909175784172545",
    title: "Breathing LED",
    desc: "Adrian's project involves an LED that gradually changes brightness, simulating a 'breathing' effect using PWM.",
  },
  {
    href: "https://wokwi.com/projects/414906550842349569",
    title: "Pulsating RGB-LED",
    desc: "Jan's project controls an RGB LED to create a pulsating effect, changing colors smoothly.",
  },
  {
    href: "https://wokwi.com/projects/415874848444058625",
    title: "Traffic-Lights",
    desc: "Markus's project simulates a traffic light system using LEDs to represent the red, yellow, and green lights.",
  },
  {
    href: "https://wokwi.com/projects/414999952624074753",
    title: "DHT22_C3-Mini_0.96-OLED",
    desc: "Jonas's project displays temperature and humidity readings from a DHT22 sensor on a 0.96-inch OLED screen using a C3-Mini microcontroller.",
  },
];

export default function ThwsPressPage() {
  const { t } = useLanguage();
  const cm = t.homeChallengeUniversity.common;
  const tw = t.homeChallengeUniversity.thws;
  const p = t.homeChallengeUniversity.thwsPress;
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
              {cm.home}
            </Link>
            <span className="text-green-300/40">/</span>
            <Link
              href="/home-challenge"
              className="text-green-300/70 hover:text-green-300 transition-colors"
            >
              {cm.homeChallenge}
            </Link>
            <span className="text-green-300/40">/</span>
            <Link
              href="/home-challenge/university/thws"
              className="text-green-300/70 hover:text-green-300 transition-colors"
            >
              {tw.crumb}
            </Link>
            <span className="text-green-300/40">/</span>
            <span className="font-medium text-white">{p.crumb}</span>
          </nav>
          <div className="pb-12 pt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
              <span className="text-xs font-semibold text-white tracking-wide uppercase">
                {p.badge}
              </span>
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              {p.title}
              <br />
              <span className="text-green-300">{p.subtitle}</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <UniversitySidebar />
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-6">
                {p.sectionPress}
              </h2>
              <div className="space-y-6 mb-8">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                  <img
                    src="/images/home-challenge/universities/press-materials-for-thws/press1.png"
                    alt="Press 1"
                    className="w-full object-contain"
                  />
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                  <img
                    src="/images/home-challenge/universities/press-materials-for-thws/press2.png"
                    alt="Press 2"
                    className="w-full object-contain"
                  />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-4">
                {p.sectionScan}
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden p-4 mb-10 max-w-sm">
                <img
                  src="/images/home-challenge/universities/press-materials-for-thws/code.png"
                  alt="Scan code"
                  className="w-full object-contain"
                />
              </div>

              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-6">
                {p.sectionRetrospective}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {projects.map((p) => (
                  <div
                    key={p.title}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-5"
                  >
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="block text-sm font-bold text-primary hover:underline mb-2"
                    >
                      {p.title}
                    </a>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-4">
                {p.sectionInteraction}
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {p.interactionBody}
              </p>

              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-4">
                {p.sectionSolutionBuilders}
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {p.solutionBuildersBody}
              </p>

              <h2 className="text-2xl font-bold text-[#0d2137] dark:text-white mb-4">
                {p.sectionWhatsapp}
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {p.whatsappBody}
              </p>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden p-4 mb-8 max-w-md mx-auto">
                <img
                  src="/images/home-challenge/universities/press-materials-for-thws/whatsapp.jpeg"
                  alt="WhatsApp group"
                  className="w-full object-contain"
                />
              </div>

              <div className="text-center mb-6">
                <a
                  href="https://www.thws.de/service/news-presse/pressemeldungen/thema/praxisnah-im-studium-bewegungsmelder-selbst-bauen/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:underline text-sm"
                >
                  {p.thwsPressLink}
                </a>
              </div>

              <div className="text-center">
                <Link
                  href="/home-challenge/university/thws"
                  className="shadow-btn bg-primary hover:bg-primary-light rounded-full px-7 py-3 text-sm font-semibold text-white transition duration-300 inline-block"
                >
                  {cm.backToStart}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
