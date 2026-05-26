import React from "react";
import Head from "next/head";
import { useContext } from "react";
import { LanguageSwitchContext } from "../../../components/context/LanguageSwitch";
import Link from "next/link";
import PageTitle from "../../../components/PageTitle";

const Page = () => {
  const pageTitle = "Press Materials";
  const { state } = useContext(LanguageSwitchContext);
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="Carenuity ChipGlobe Electronics Embedded Systems"
        />
        <meta
          name="description"
          content={`We're Delivering Peace-in-Mind by Vital and Environmental Sensing and Care that you See what No Else will See.`}
        />
        <title>{pageTitle}</title>
      </Head>

      {/* <!-- PAGE TITLE
        ================================================== --> */}
      <PageTitle
        links={[{ path: "/", title: "" }]}
        pageTitle={pageTitle}
        pageUrl=""
      />

      <section className="pt-4">
        <div className="container">
          <div className="row">
            <h4>Press Materials</h4>
            <div className="col-lg-12 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/home-challenge/universities/press-materials-for-thws/press1.png"
                className=" wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: "visible",
                  animationDelay: "100ms",

                  animationName: "fadeIn",
                }}
              />
            </div>

            <div className="col-lg-12 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/home-challenge/universities/press-materials-for-thws/press2.png"
                className=" wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: "visible",
                  animationDelay: "100ms",

                  animationName: "fadeIn",
                }}
              />
            </div>
            <h5>Scan</h5>
            <div className="col-lg-4 mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/home-challenge/universities/press-materials-for-thws/code.png"
                className=" wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: "visible",
                  animationDelay: "100ms",

                  animationName: "fadeIn",
                }}
              />
            </div>

            <div className="row">
              <h4 className="mb-4">
                Retrospective: Students Home Challenge Projects 2024
              </h4>
              <div className="col-lg-4 mb-4">
                <h6>
                  <a
                    className="text-decoration-underline"
                    href="https://wokwi.com/projects/415254747927803905"
                  >
                    Positioning a cursor with confirmation
                  </a>
                </h6>
                <p>
                  Yannick&apos;s project involves creating a system to position
                  a cursor on a display and confirm its position. This likely
                  uses buttons or a joystick for input, allowing precise control
                  over the cursor&apos;s location, which can be useful for
                  various user interface applications.
                </p>
              </div>
              <div className="col-lg-4 mb-4">
                <h6>
                  <a
                    className="text-decoration-underline"
                    href="https://wokwi.com/projects/414878963606090753"
                  >
                    Simon Says Game with C3-Mini
                  </a>
                </h6>
                <p>
                  Felix&apos;s project is a recreation of the classic
                  &quot;Simon Says&quot; game using a C3-Mini micro-controller.
                  The game tests memory by requiring players to repeat
                  increasingly complex sequences of lights and sounds. This
                  project demonstrates the use of LEDs and sound modules to
                  create an engaging interactive game.
                </p>
              </div>
              <div className="col-lg-4 mb-4">
                <h6>
                  <a
                    className="text-decoration-underline"
                    href="https://wokwi.com/projects/414266527615099905"
                  >
                    C3-Mini THWS-Logo with OLED Display
                  </a>
                </h6>
                <p>
                  Ramazan&apos;s project displays the THWS (Technische
                  Hochschule Würzburg-Schweinfurt) logo on an OLED screen using
                  a C3-Mini microcontroller. This project showcases how to use
                  graphic displays to render images and logos, which can be
                  applied in various branding and information display systems.
                </p>
              </div>

              <div className="col-lg-4 mb-4">
                <h6>
                  <a
                    className="text-decoration-underline"
                    href="https://wokwi.com/projects/385987811439126529"
                  >
                    Compass on Display by Potentiometer
                  </a>
                </h6>
                <p>
                  Loris created a project where a potentiometer is used to
                  simulate a compass, displaying the direction on a screen. This
                  project is an excellent example of how analog inputs can be
                  used to control digital displays, simulating real-world
                  instruments.
                </p>
              </div>
              <div className="col-lg-4 mb-4">
                <h6>
                  <a
                    className="text-decoration-underline"
                    href="https://wokwi.com/projects/414344951640901633"
                  >
                    DHT22 Alarm for Temperatures above 25°C
                  </a>
                </h6>
                <p>
                  Luisa&apos;s project uses a DHT22 sensor to monitor
                  temperature and triggers an alarm if the temperature exceeds
                  25°C. This project is useful for creating environmental
                  monitoring systems that can alert users to potentially
                  hazardous conditions.
                </p>
              </div>
              <div className="col-lg-4 mb-4">
                <h6>
                  <a
                    className="text-decoration-underline"
                    href="https://wokwi.com/projects/416265055337216001"
                  >
                    Two LEDs with Button
                  </a>
                </h6>
                <p>
                  Maximilian&apos;s project involves controlling two LEDs with a
                  button, demonstrating basic input and output control with a
                  microcontroller. This simple yet fundamental project is great
                  for beginners learning about digital electronics and
                  microcontroller programming.
                </p>
              </div>
              <div className="col-lg-4 mb-4">
                <h6>
                  <a
                    className="text-decoration-underline"
                    href="https://wokwi.com/projects/414548843141306369"
                  >
                    DHT22-Uno-LiquidCrystal-Display
                  </a>
                </h6>
                <p>
                  Moritz&apos;s project displays temperature and humidity
                  readings from a DHT22 sensor on a LiquidCrystal display using
                  an Arduino Uno. This project is a practical application of
                  sensor data visualization, useful in weather stations and home
                  automation systems.
                </p>
              </div>
              <div className="col-lg-4 mb-4">
                <h6>
                  <a
                    className="text-decoration-underline"
                    href="https://wokwi.com/projects/414884367510161409"
                  >
                    Manual People Counter (Button)
                  </a>
                </h6>
                <p>
                  Johannes created a manual people counter using a button to
                  increment the count, which is displayed on a screen. This
                  project can be used in various settings such as events or
                  retail stores to keep track of the number of people entering
                  or exiting.
                </p>
              </div>
              <div className="col-lg-4 mb-4">
                <h6>
                  <a
                    className="text-decoration-underline"
                    href="https://wokwi.com/projects/416753739180109825"
                  >
                    Random dice generator
                  </a>
                </h6>
                <p>
                  Artur&apos;s project simulates a dice roll, generating random
                  numbers between 1 and 6, and displaying the result. This
                  project is a fun way to learn about random number generation
                  and can be used in games and simulations.
                </p>
              </div>
              <div className="col-lg-4 mb-4">
                <h6>
                  <a
                    className="text-decoration-underline"
                    href="https://wokwi.com/projects/414634191354576897"
                  >
                    Arduino Uno LCD with THWS letters for random numbers
                  </a>
                </h6>
                <p>
                  Anna-Lena&apos;s project displays random numbers on an LCD
                  screen, with the letters &quot;THWS&quot; likely incorporated
                  into the display. This project combines random number
                  generation with custom text display, useful for educational
                  tools and interactive displays.
                </p>
              </div>

              <div className="col-lg-4 mb-4">
                <h6>
                  <a
                    className="text-decoration-underline"
                    href="https://wokwi.com/projects/276825819240727048"
                  >
                    Arduino Calculator
                  </a>
                </h6>
                <p>
                  Daniel&apos;s project is a basic calculator implemented with
                  an Arduino, capable of performing simple arithmetic
                  operations. This project demonstrates how to create a
                  functional user interface for mathematical calculations using
                  a microcontroller.
                </p>
              </div>
              <div className="col-lg-4 mb-4">
                <h6>
                  <a
                    className="text-decoration-underline"
                    href="https://wokwi.com/projects/414548843141306369"
                  >
                    Arduino Uno Humidity & Temp. Monitoring Station
                  </a>
                </h6>
                <p>
                  Max&apos;s project monitors and displays humidity and
                  temperature using an Arduino Uno and appropriate sensors. This
                  project is ideal for creating a home weather station or
                  environmental monitoring system.
                </p>
              </div>
              <div className="col-lg-4 mb-4">
                <h6>
                  <a
                    className="text-decoration-underline"
                    href="https://wokwi.com/projects/414832473351403521"
                  >
                    Electronic lock: Find correct sequence to get green
                  </a>
                </h6>
                <p>
                  Jonas&apos;s project is an electronic lock that requires the
                  user to input the correct sequence to unlock, indicated by a
                  green light. This project is a practical example of security
                  systems and user input validation.
                </p>
              </div>
              <div className="col-lg-4 mb-4">
                <h6>
                  <a
                    className="text-decoration-underline"
                    href="https://wokwi.com/projects/321525495180034642"
                  >
                    NTP Time & Date UTC Server
                  </a>
                </h6>
                <p>
                  Fabienne&apos;s project involves setting up a Network Time
                  Protocol (NTP) server to provide accurate time and date
                  information in UTC. This project is useful for synchronizing
                  clocks and devices over a network.
                </p>
              </div>

              <div className="col-lg-4 mb-4">
                <h6>
                  <a
                    className="text-decoration-underline"
                    href="https://wokwi.com/projects/415070577191291905"
                  >
                    Red-LED-On-Off-Momentary-Switch
                  </a>
                </h6>
                <p>
                  Maximilian&apos;s project controls a red LED with a momentary
                  switch, demonstrating basic switch control. This project is a
                  simple yet effective way to learn about digital inputs and
                  outputs.
                </p>
              </div>

              <div className="col-lg-4 mb-4">
                <h6>
                  <a
                    className="text-decoration-underline"
                    href="https://wokwi.com/projects/415033768149590017"
                  >
                    Don&apos;t panic display
                  </a>
                </h6>
                <p>
                  Cagri&apos;s project likely displays a reassuring message,
                  &quot;Don&apos;t panic,&quot; on a screen, possibly as a
                  humorous or motivational tool. This project can be used to
                  create custom messages for various applications.
                </p>
              </div>

              <div className="col-lg-4 mb-4">
                <h6>
                  <a
                    className="text-decoration-underline"
                    href="https://wokwi.com/projects/415724474838705153"
                  >
                    Arduino Uno KFZ-Blinker with alarm button
                  </a>
                </h6>
                <p>
                  Leonardo&apos;s project simulates a car blinker (indicator)
                  system with an alarm button using an Arduino Uno. This project
                  is useful for learning about automotive electronics and
                  creating signaling systems.
                </p>
              </div>
              <div className="col-lg-4 mb-4">
                <h6>
                  <a
                    className="text-decoration-underline"
                    href="https://wokwi.com/projects/415195153863784449"
                  >
                    Arduino Uni Würfel (Dice)
                  </a>
                </h6>
                <p>
                  Tobias&apos;s project is another dice simulator, generating
                  random numbers and displaying them, likely on an LED or LCD
                  display. This project is great for games and learning about
                  random number generation.
                </p>
              </div>
              <div className="col-lg-4 mb-4">
                <h6>
                  <a
                    className="text-decoration-underline"
                    href="https://wokwi.com/projects/415083424361074689"
                  >
                    PIR-triggered Schranke with green LED
                  </a>
                </h6>
                <p>
                  Valentin&apos;s project uses a Passive Infrared (PIR) sensor
                  to trigger a barrier (Schranke) and light up a green LED when
                  motion is detected. This project is useful for creating
                  automated entry systems and motion detection.
                </p>
              </div>
              <div className="col-lg-4 mb-4">
                <h6>
                  <a
                    className="text-decoration-underline"
                    href="https://wokwi.com/projects/348849468083274322"
                  >
                    Pong Game
                  </a>
                </h6>
                <p>
                  Max&apos;s project is a recreation of the classic Pong game,
                  likely using an Arduino and a display to simulate the game.
                  This project is a fun way to learn about game development and
                  display control.
                </p>
              </div>
              <div className="col-lg-4 mb-4">
                <h6>
                  <a
                    className="text-decoration-underline"
                    href="https://wokwi.com/projects/414919215451341825"
                  >
                    Binary Display with 3 LEDs for Potentiometer
                  </a>
                </h6>
                <p>
                  Lukas&apos;s project uses a potentiometer to control a binary
                  display with three LEDs, demonstrating basic analog-to-digital
                  conversion. This project is useful for understanding binary
                  representation and analog input.
                </p>
              </div>
              <div className="col-lg-4 mb-4">
                <h6>
                  <a
                    className="text-decoration-underline"
                    href="https://wokwi.com/projects/414909175784172545"
                  >
                    Breathing LED
                  </a>
                </h6>
                <p>
                  Adrian&apos;s project involves an LED that gradually changes
                  brightness, simulating a &quot;breathing&quot; effect. This
                  project is great for learning about PWM (Pulse Width
                  Modulation) and creating visual effects.
                </p>
              </div>
              <div className="col-lg-4 mb-4">
                <h6>
                  <a
                    className="text-decoration-underline"
                    href="https://wokwi.com/projects/414906550842349569"
                  >
                    Pulsating RGB-LED
                  </a>
                </h6>
                <p>
                  Jan&apos;s project controls an RGB LED to create a pulsating
                  effect, changing colors smoothly. This project demonstrates
                  advanced LED control and color mixing.
                </p>
              </div>
              <div className="col-lg-4 mb-4">
                <h6>
                  <a
                    className="text-decoration-underline"
                    href="https://wokwi.com/projects/415874848444058625"
                  >
                    Traffic-Lights
                  </a>
                </h6>
                <p>
                  Markus&apos;s project simulates a traffic light system, likely
                  using LEDs to represent the red, yellow, and green lights.
                  This project is useful for learning about state machines and
                  timing control.
                </p>
              </div>
              <div className="col-lg-4 mb-4">
                <h6>
                  <a
                    className="text-decoration-underline"
                    href="https://wokwi.com/projects/414999952624074753"
                  >
                    DHT22_C3-Mini_0.96-OLED
                  </a>
                </h6>
                <p>
                  Jonas&apos;s project displays temperature and humidity
                  readings from a DHT22 sensor on a 0.96-inch OLED screen using
                  a C3-Mini microcontroller. This project is ideal for creating
                  compact and efficient environmental monitoring systems.
                </p>
              </div>

              <h4>
                {state === "en" && (
                  <>The interaction between makers and users</>
                )}
                {state === "de" && (
                  <>Die Wechselwirkung zwischen Makern und Nutzern</>
                )}
              </h4>

              <p>
                {state === "en" && (
                  <>
                    The interaction between makers and users is of great
                    importance. Users provide valuable feedback and new ideas
                    and use cases that enable makers to improve their products
                    and adapt them to new needs. As Carenuity, we support this
                    interaction by providing platforms and resources to
                    facilitate exchange between makers and users. The goal is to
                    work together to create innovative and user-friendly
                    devices.
                  </>
                )}
                {state === "de" && (
                  <>
                    Die Wechselwirkung zwischen Makern und Nutzern ist von
                    großer Bedeutung. Nutzer liefern wertvolles Feedback und
                    neue Ideen und Anwendungsfälle, die es Makern ermöglichen,
                    ihre Produkte zu verbessern und an neue Bedürfnisse
                    anzupassen. Als Carenuity unterstützen wir diese
                    Interaktion, indem wir Plattformen und Ressourcen
                    bereitstellen, um den Austausch zwischen Makern und Nutzern
                    zu erleichtern. Das Ziel ist es, gemeinsam innovative und
                    benutzerfreundliche Geräte zu schaffen.
                  </>
                )}
              </p>

              <h4>
                {state === "en" && (
                  <>
                    The role of the <strong>Solution Builders</strong> in the
                    development of innovative devices
                  </>
                )}
                {state === "de" && (
                  <>
                    Die Rolle des <strong>Solution Builders</strong> bei der
                    Entwicklung innovativer Geräte
                  </>
                )}
              </h4>

              <p>
                {state === "en" && (
                  <>
                    The developers on the Solution Builder Platform share their
                    solutions and are an essential component in this process.
                    They bring specialized expertise and experience to develop
                    tailored solutions that meet users&apos; specific needs.
                    Through their expertise, they help to further optimize the
                    interaction between makers and users and advance the
                    development of innovative products.
                  </>
                )}
                {state === "de" && (
                  <>
                    Die Entwickler auf der Solution Builder Platform teilen ihre
                    Lösungen und sind eine wesentliche Komponente in diesem
                    Prozess. Sie bringen spezialisierte Fachkenntnisse und
                    Erfahrung ein, um maßgeschneiderte Lösungen zu entwickeln,
                    die den spezifischen Anforderungen der Nutzer gerecht
                    werden. Durch ihre Expertise tragen sie dazu bei, die
                    Interaktion zwischen Makern und Nutzern weiter zu optimieren
                    und die Entwicklung innovativer Produkte voranzutreiben.
                  </>
                )}
              </p>

              <h4>
                {state === "en" && (
                  <>
                    This WhatsApp-Group &quot;THWS Solution Builder&quot; is
                    open for THWS staff & students to discuss and refine their
                    solutions:
                  </>
                )}
                {state === "de" && (
                  <>
                    Diese WhatsApp-Gruppe „THWS Solution Builder“ steht
                    THWS-Mitarbeitern und -Studenten offen, um ihre Lösungen zu
                    diskutieren und zu verfeinern:
                  </>
                )}
              </h4>
              <div className="mb-4" style={{ textAlign: "center" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/home-challenge/universities/press-materials-for-thws/whatsapp.jpeg"
                  className="mt-1-9 wow fadeInUp img-fluid"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: "visible",
                    animationDelay: "100ms",
                    animationName: "fadeIn",
                  }}
                />
              </div>

              <div style={{ textAlign: "center" }} className="mb-4">
                <a
                  href="https://www.thws.de/service/news-presse/pressemeldungen/thema/praxisnah-im-studium-bewegungsmelder-selbst-bauen/ "
                  target="blank"
                >
                  {" "}
                  <u>Würzburg-Schweinfurt University of Applied Sciences</u>
                </a>
              </div>

              <p style={{ textAlign: "center" }}>
                <Link
                  href={"/home-challenge/thws"}
                  className={"btn btn-lg btn-success rounded-pill"}
                >
                  <span className="small">Back to startpage</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
