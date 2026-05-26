import React from "react";
import Head from "next/head";
import PageTitle from "../../../components/PageTitle";

const Page = () => {
  const pageTitle = "IoT & AI Sensor Kits";

  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="Carenuity ChipGlobe Electronics Embedded Systems"
        />
        <meta
          name="description"
          content="IoT & AI Sensor Kits for universities — bring real engineering, IoT & AI to your campus with C3-Mini powered hardware."
        />
        <title>{pageTitle}</title>
      </Head>

      {/* PAGE TITLE / BANNER */}
      <PageTitle
        links={[{ path: "/", title: "" }]}
        pageTitle={pageTitle}
        pageUrl=""
      />

      {/* Hero sub-header */}
      {/* <section className="pt-4 pb-2">
        <div className="container">
          <p className="lead fw-bold">
            Bring Real Engineering, IoT &amp; AI to Your University
          </p>
          <Link
            href="#cta"
            className="btn btn-success rounded-pill px-4 py-2 mt-2"
          >
            Bring to Your University
          </Link>
        </div>
      </section> */}

      {/* Overview */}
      <section className="pt-4 pb-2">
        <div className="container">
          <h2 className="text-success mb-3">Overview</h2>
          <p>
            These IoT &amp; AI Sensor Kits enable students to build fully
            functional IoT systems within minutes. Designed for universities,
            innovation hubs, and engineering programs, they combine modular
            hardware with a browser-based software platform, eliminating
            traditional setup barriers.
          </p>
        </div>
      </section>

      {/* Solution Builder */}
      <section className="pt-4 pb-2">
        <div className="container">
          <h2 className="text-success mb-3">Solution Builder</h2>
          <p>
            The Solution Builder is a fully browser-based development
            environment that allows students to create, configure, and deploy
            IoT applications in under three minutes.
          </p>
          <div
            className="e-card h-100 p-4 mb-6"
            style={{ boxShadow: "3px 3px 15px 3px hsla(0,0%,80%)" }}
          >
            <div className="row">
              <div className="col-lg-8">
                <p>
                  <strong>How it works:</strong>
                </p>
                <ul>
                  <li>
                    Select a ready-to-use application (e.g. temperature monitor,
                    motion detector)
                  </li>
                  <li>Connect the C3-Mini via USB-C</li>
                  <li>
                    Flash directly from the browser – no installation required
                  </li>
                  <li>Run instantly on real hardware</li>
                </ul>
                <p>
                  All projects are backed by transparent GitHub-hosted source
                  code, enabling full customization and advanced development
                  workflows.
                </p>
                <p>
                  <a
                    href="https://carenuity.netlify.app/solution-builder"
                    target="_blank"
                    rel="noreferrer"
                    className="text-success"
                  >
                    <u>Explore Solution Builder</u>
                  </a>
                </p>
              </div>
              <div className="col-lg-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/home-challenge/universities/c3-mini-kisii-boxes/image003.png"
                  alt="Box 1 image 1"
                  className="img-fluid rounded mb-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Minutes Steps */}
      <section className="pt-4 pb-2">
        <div className="container">
          <h2 className="text-success mb-4">3 Minutes to Your First Device</h2>
          <div className="row g-4">
            {[
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
            ].map(({ step, desc }) => (
              <div key={step} className="col-sm-6 col-lg-3">
                <div
                  className="e-card h-100 p-4"
                  style={{ boxShadow: "3px 3px 15px 3px hsla(0,0%,80%)" }}
                >
                  <h5 className=" mb-2">{step}</h5>
                  <p className="mb-0">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Boxes */}
      <section className="pt-4 pb-2" id="boxes">
        <div className="container">
          <h2 className="text-success mb-4">The Boxes</h2>
          <div className=" g-4">
            {/* Box 1 */}

            <div
              className="e-card h-100 p-4 mb-6"
              style={{ boxShadow: "3px 3px 15px 3px hsla(0,0%,80%)" }}
            >
              <h5 className=" mb-3">Box 1 – Engineering Kit (15 Components)</h5>
              <div className="row g-4">
                <div className="col-lg-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/home-challenge/universities/c3-mini-kisii-boxes/modular-c3-mini-ai-product-dev-box-1-top-side.png"
                    alt="Box 1 image 1"
                    className="img-fluid rounded mb-2"
                  />
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/home-challenge/universities/c3-mini-kisii-boxes/modular-c3-mini-ai-product-dev-box-1-bottom-side.png"
                    alt="Box 1 image 2"
                    className="img-fluid rounded mb-3"
                  />
                </div>
                <hr />
                <div className="col-lg-4">
                  <ul>
                    <li>
                      <a
                        href="https://www.chipglobe.shop/search?q=2404111-1"
                        target="_blank"
                        rel="noreferrer"
                        className="text-success"
                      >
                        ESP32 Microcontroller
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.chipglobe.shop/search?q=2411115-1"
                        target="_blank"
                        rel="noreferrer"
                        className="text-success"
                      >
                        Triple Adapter
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.chipglobe.shop/search?q=230199-1"
                        target="_blank"
                        rel="noreferrer"
                        className="text-success"
                      >
                        DHT22 Sensor
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.chipglobe.shop/search?q=19017-1"
                        target="_blank"
                        rel="noreferrer"
                        className="text-success"
                      >
                        PIR Motion Sensor
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.chipglobe.shop/search?q=light+sensor+LDR"
                        target="_blank"
                        rel="noreferrer"
                        className="text-success"
                      >
                        Light Sensor
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <ul>
                    <li>
                      <a
                        href="https://www.chipglobe.shop/search?q=MQ-2"
                        target="_blank"
                        rel="noreferrer"
                        className="text-success"
                      >
                        MQ-2 Gas Sensor
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.chipglobe.shop/search?q=relay+module"
                        target="_blank"
                        rel="noreferrer"
                        className="text-success"
                      >
                        Relay Module
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.chipglobe.shop/search?q=2301100-1"
                        target="_blank"
                        rel="noreferrer"
                        className="text-success"
                      >
                        RGB Smart Bulb
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.chipglobe.shop/search?q=2510200-1"
                        target="_blank"
                        rel="noreferrer"
                        className="text-success"
                      >
                        SG90 Servo Motor
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.chipglobe.shop/search?q=230195-1"
                        target="_blank"
                        rel="noreferrer"
                        className="text-success"
                      >
                        ESP32-CAM
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <ul>
                    <li>
                      <a
                        href="https://www.chipglobe.shop/search?q=2501123-1"
                        target="_blank"
                        rel="noreferrer"
                        className="text-success"
                      >
                        Breadboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.chipglobe.shop/search?q=2510197-1"
                        target="_blank"
                        rel="noreferrer"
                        className="text-success"
                      >
                        Jumper Wires
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.chipglobe.shop/search?q=2411116-1"
                        target="_blank"
                        rel="noreferrer"
                        className="text-success"
                      >
                        OLED Display
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.chipglobe.shop/search?q=230198-1"
                        target="_blank"
                        rel="noreferrer"
                        className="text-success"
                      >
                        Buzzer
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.chipglobe.shop/search?q=SG90+connector+pcb"
                        target="_blank"
                        rel="noreferrer"
                        className="text-success"
                      >
                        SG90 Connector PCB
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Box 2 */}

            <div
              className="e-card h-100 mb-6 p-4"
              style={{ boxShadow: "3px 3px 15px 3px hsla(0,0%,80%)" }}
            >
              <h5 className=" mb-3">Box 2 – Starter Kit (14 Components)</h5>

              <div className="row g-4">
                <div className="col-lg-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/home-challenge/universities/c3-mini-kisii-boxes/modular-c3-mini-ai-product-dev-box-2-top-side.png"
                    alt="Box 2 image 1"
                    className="img-fluid rounded mb-2"
                  />
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/home-challenge/universities/c3-mini-kisii-boxes/modular-c3-mini-ai-product-dev-box-2-bottom-side.png"
                    alt="Box 2 image 2"
                    className="img-fluid rounded mb-3"
                  />
                </div>
                <hr />
                <div className="col-lg-4">
                  <ul>
                    <li>
                      <a
                        href="https://www.chipglobe.shop/search?q=2404111-1"
                        target="_blank"
                        rel="noreferrer"
                        className="text-success"
                      >
                        ESP32 Microcontroller
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.chipglobe.shop/search?q=2411115-1"
                        target="_blank"
                        rel="noreferrer"
                        className="text-success"
                      >
                        Triple Adapter
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.chipglobe.shop/search?q=230199-1"
                        target="_blank"
                        rel="noreferrer"
                        className="text-success"
                      >
                        DHT22 Sensor
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.chipglobe.shop/search?q=19017-1"
                        target="_blank"
                        rel="noreferrer"
                        className="text-success"
                      >
                        PIR Motion Sensor
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.chipglobe.shop/search?q=light+sensor+LDR"
                        target="_blank"
                        rel="noreferrer"
                        className="text-success"
                      >
                        Light Sensor
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <ul>
                    <li>
                      <a
                        href="https://www.chipglobe.shop/search?q=MQ-2"
                        target="_blank"
                        rel="noreferrer"
                        className="text-success"
                      >
                        MQ-2 Gas Sensor
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.chipglobe.shop/search?q=2301100-1"
                        target="_blank"
                        rel="noreferrer"
                        className="text-success"
                      >
                        RGB Smart Bulb
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.chipglobe.shop/search?q=2510200-1"
                        target="_blank"
                        rel="noreferrer"
                        className="text-success"
                      >
                        SG90 Servo Motor
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.chipglobe.shop/search?q=230195-1"
                        target="_blank"
                        rel="noreferrer"
                        className="text-success"
                      >
                        ESP32-CAM
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.chipglobe.shop/search?q=2501125-1"
                        target="_blank"
                        rel="noreferrer"
                        className="text-success"
                      >
                        Micro-USB Cable
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <ul>
                    <li>
                      <a
                        href="https://www.chipglobe.shop/search?q=2501123-1"
                        target="_blank"
                        rel="noreferrer"
                        className="text-success"
                      >
                        Breadboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.chipglobe.shop/search?q=2510197-1"
                        target="_blank"
                        rel="noreferrer"
                        className="text-success"
                      >
                        Jumper Wires
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.chipglobe.shop/search?q=230198-1"
                        target="_blank"
                        rel="noreferrer"
                        className="text-success"
                      >
                        Buzzer
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.chipglobe.shop/search?q=2411116-1"
                        target="_blank"
                        rel="noreferrer"
                        className="text-success"
                      >
                        OLED Display
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact for Students */}
      <section className="pt-4 pb-2">
        <div className="container">
          <h2 className="text-success mb-3">Impact for Students</h2>
          <p>
            Students gain hands-on experience in IoT, electronics, and AI. They
            learn real-world engineering skills, build working prototypes, and
            develop solutions relevant to industry challenges.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-4 pb-5" id="cta">
        <div className="container">
          <h2 className="text-success mb-3">Bring This to Your University</h2>
          <p>
            Deploy a complete IoT &amp; AI education ecosystem within weeks.
            Enable students to build real systems, reduce setup complexity, and
            accelerate innovation.
          </p>

          <div className="row">
            <div className="col-lg-4">
              <a
                href="mailto:timothy.mwala@chipglobe.com"
                className="btn btn-success rounded-pill px-4 py-2"
              >
                Contact Us
              </a>
            </div>
            <div className="col-lg-4">
              <a
                href="\product\assortment-box\press"
                className="btn btn-success rounded-pill px-4 py-2"
              >
                Press Material
              </a>
            </div>
            <div className="col-lg-4">
              <a
                href="\product\assortment-box\kisii-onepager"
                className="btn btn-success rounded-pill px-4 py-2"
              >
                Kisii OnePager
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
