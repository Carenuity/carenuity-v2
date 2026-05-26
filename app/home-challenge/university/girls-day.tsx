import React from "react";
import Head from "next/head";
import PageTitle from "../../components/PageTitle";
import Link from "next/link";

const Page = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = " Girls Day";
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/home-challenge/universities/girls-day/girls2.jpeg"
            className="wow fadeInUp mb-6"
            data-wow-delay="100ms"
            alt="..."
            style={{
              visibility: "visible",
              // width: '420px',
              animationDelay: "100ms",
              animationName: "fadeIn",
            }}
          />
          {/* <h4 className=''>Girls Day</h4> */}
          <div
            className="e-card mb-6"
            style={{
              boxShadow: "3px 3px 15px 3px  hsla(0, 0%, 80%)",
              maxHeight: "1000px",
              padding: "20px",
            }}
          >
            <div className="row">
              <div className="col-lg-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/home-challenge/universities/girls-day/girls-logo.jpeg"
                  className="wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: "visible",
                    width: "420px",
                    animationDelay: "100ms",
                    animationName: "fadeIn",
                  }}
                />
              </div>
              <div className="col-lg-8">
                <p>
                  We are excited to share that<strong>Carenuity</strong> , in
                  proud partnership with the <strong>THWS Hochschule</strong>,
                  will be actively participating in Girls&apos; Day 2026! This
                  inspiring and nationally recognized event, scheduled for
                  <strong>April 23, 2026,</strong> is dedicated to empowering
                  young women by opening doors to careers in
                  <strong>
                    Science, Technology, Engineering, and Mathematics (STEM)
                  </strong>
                  . Through a variety of hands-on activities, workshops, and
                  engaging presentations, participants will have the unique
                  chance to gain valuable insights into innovative professions
                  that shape the future. Together, we aim to spark curiosity,
                  encourage ambition, and help the next generation of women
                  discover their potential in the world of STEM.
                </p>
                <p></p>
              </div>
            </div>
          </div>

          <div className=" mb-4">
            <h4>What is Girls&apos; Day?</h4>
            <div
              className="e-card mb-6"
              style={{
                boxShadow: "3px 3px 15px 3px  hsla(0, 0%, 80%)",
                maxHeight: "1000px",
                padding: "20px",
              }}
            >
              <div className="row">
                <div className="col-lg-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/home-challenge/universities/girls-day/girls.jpeg"
                    className="wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: "visible",
                      width: "420px",
                      animationDelay: "100ms",
                      animationName: "fadeIn",
                      paddingTop: "10px",
                    }}
                  />
                </div>
                <div className="col-lg-8">
                  <p>
                    Girls&apos; Day is an annual initiative designed to give
                    girls the opportunity to explore technical, scientific, IT,
                    and engineering professions. It allows them to participate
                    in hands-on workshops and real-world experiments, interact
                    with role models and professionals in STEM careers, and gain
                    confidence in their technical abilities. Most importantly,
                    it helps them discover academic and career paths they might
                    not have previously considered, opening doors to a future in
                    fields where women are often underrepresented.
                  </p>
                </div>
              </div>
            </div>

            <h4>Importance of Girls&apos; Day</h4>
            <p>
              In the context of Carenuity&apos;s collaboration with THWS
              Hochschule for Girls&apos; Day 2026, the event serves a key
              educational and empowerment purpose:
            </p>
            <ul>
              <li>
                <strong>Demystifying technology: </strong>
                By building something tangible like a Bluetooth speaker, girls
                see that technology is not intimidating but accessible and fun.
              </li>
              <li>
                <strong>Promoting gender equity:</strong>
                It directly addresses the gender gap in STEM by inspiring and
                equipping girls with the confidence and skills to explore these
                fields.
              </li>
              <li>
                <strong>Creating early engagement:</strong>
                Activities like stacking components using the Carenuity
                Triple-Adapter give a playful, intuitive entry into engineering
                principles.
              </li>
              <li>
                <strong>Encouraging future STEM careers: </strong>
                Girls&apos; Day plants the seed that they, too, can thrive as
                engineers, scientists, developers, or innovators.
              </li>
            </ul>
            <p>
              Girls&apos; Day is more than an event — it&apos;s a movement to
              reshape perceptions, build confidence, and empower the next
              generation of women in technology and science.
            </p>
          </div>

          <div className=" mb-6">
            <h4>Join us </h4>
            <p>
              Join us remotely for an exciting and educational day packed with
              inspiring activities and interactive, hands-on workshops. During
              this special Girls&apos; Day 2026 event, you&apos;ll have the
              unique opportunity to build your very own Bluetooth speaker in
              just a few minutes—no prior experience needed! <br />
              Using the innovative Carenuity Triple-Adapter, participants will
              explore how technology works by stacking electronic components
              into the S (Sensor), M (Microcontroller), and A (Actuator) slots.
              This fun and engaging activity is designed to spark curiosity,
              boost confidence, and show how easy and exciting it can be to get
              started with STEM. Whether you&apos;re a complete beginner or
              already curious about electronics, this experience promises to be
              both empowering and enjoyable.
              <br />
            </p>
            <h5> Components in the S, M, and A slots:</h5>
            <ul>
              <li>
                <strong>Slot S:</strong> Integrate high-precision sensors.
              </li>
              <li>
                <strong> Slot M:</strong> Add the microcontroller to process
                sensor data.
              </li>
              <li>
                <strong>Slot A:</strong> Connect the actuator to perform actions
                based on the data.
              </li>
            </ul>

            <p>
              This interactive experience is designed to empower and inspire the
              next generation of female leaders in technology and
              innovation.Don&apos;t miss out on this fantastic opportunity to
              learn, create, and connect with like-minded individuals.
              Let&apos;s shape the future together, one device at a time!
            </p>
          </div>
          <h4 className=" mb-4">Home-Challenge Kit for Girls Day 2026: </h4>
          <div
            className="e-card mb-6"
            style={{
              boxShadow: "3px 3px 15px 3px  hsla(0, 0%, 80%)",
              maxHeight: "2000px",
              padding: "20px",
            }}
          >
            <div className="row">
              <div className="col-lg-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/home-challenge/universities/girls-day/bluetooth-speaker.jpeg"
                  className="wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: "visible",
                    // width: '420px',
                    animationDelay: "100ms",
                    animationName: "fadeIn",
                  }}
                />
              </div>
              <div className="col-lg-9">
                <p>
                  This is the Bluetooth speaker that the participants will
                  proudly build themselves during Girls&apos; Day 2026.
                  It&apos;s more than just a gadget — it&apos;s a symbol of
                  creativity, hands-on learning, and the power of young women
                  stepping confidently into the world of technology.
                </p>
                <h6> Get ready for an unforgettable Girls&apos; Day 2026!</h6>
                <p>
                  To make the most of this incredible experience, be sure to
                  order your Home-Challenge Kit in advance. This specially
                  prepared kit includes everything you&apos;ll need to fully
                  participate in all planned activities — right from the comfort
                  of your home.
                </p>
                <p>
                  <strong>Important:</strong> Make sure you have access to a
                  soldering iron, as it will be essential for some of the tasks.
                  <br />
                  We look forward to seeing you participate and enjoy the
                  hands-on experience!
                </p>
              </div>
            </div>
          </div>
          <p style={{ textAlign: "center" }}>
            {!isMobile && (
              <Link
                href={"/home-challenge"}
                className={"btn btn-lg btn-success rounded-pill"}
              >
                <span className="small">Learn more on Home Challenge</span>
              </Link>
            )}

            {isMobile && (
              <a
                href={"/home-challenge"}
                className={"btn btn-lg btn-success rounded-pill"}
              >
                <span className="small">
                  Learn more on Home Challenge{" "}
                  {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                </span>
              </a>
            )}
          </p>
        </div>
      </section>
    </>
  );
};

export default Page;
