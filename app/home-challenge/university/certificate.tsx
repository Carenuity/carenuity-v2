import React, { useEffect, useState } from "react";
import Head from "next/head";
import PageTitle from "../../components/PageTitle";
import { NewsletterHostname } from "../../utils/constants";
import { useRouter } from "next/router";

export type CertificateResult = {
  id: number;
  name: string;
  isCertified: boolean;
};

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [certificate, setCertificate] = useState<CertificateResult>();
  const router = useRouter();
  const pageTitle = "Home Challenge Certificate";

  useEffect(() => {
    if (!window.document) {
      return;
    }

    const query = new URLSearchParams(document.location.search);
    const email = query.get("email");

    const controller = new AbortController();
    const timeId = setTimeout(async () => {
      if (!email) {
        return await router.replace("/home-challenge");
      }

      const url = `${NewsletterHostname}/v1/certificates/check`;
      setLoading(true);

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
          }),
          signal: controller.signal,
        });

        if (response.ok) {
          const responseData = await response.json();
          const data = responseData.data;
          setCertificate(data);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        return await router.replace("/home-challenge");
      }
    }, 0);

    return () => {
      clearTimeout(timeId);
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

      {loading && <div id="preloader"></div>}

      <section className="pt-4">
        <div className="container">
          {certificate?.isCertified && (
            <div
              className="col-md-8"
              style={{
                border: "3px solid #198754",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  border: "6px solid #198754",
                  padding: "50px",
                }}
              >
                <div className="mb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/logo/logo.png"
                    className=" wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: "visible",
                      animationDelay: "100ms",
                      height: "80px",
                      animationName: "fadeIn",
                    }}
                  />
                </div>
                <div className="mb-4">
                  <h2>Certificate of Achievement</h2>
                  <i>This certifies that:</i>
                </div>
                <h2>
                  <strong>{certificate?.name}</strong>
                  {/* <u>Student&apos;s Name</u> */}
                </h2>
                <p>
                  has successfully completed the Carenuity Home Challenge,
                  showcasing exceptional skills and knowledge in the fields of{" "}
                  <strong>Internet of Things (IoT)</strong> and{" "}
                  <strong>Artificial Intelligence (AI) </strong>.
                </p>

                <h4>Competencies Demonstrated:</h4>
                <ul style={{ listStyleType: "square", textAlign: "left" }}>
                  <li>
                    Comprehensive understanding of IoT communication protocols
                  </li>
                  <li>
                    Proficiency in designing and implementing IoT solutions
                  </li>
                  <li>Ability to collect and analyze data from IoT devices</li>
                  <li>Knowledge of best practices in IoT security</li>
                  <li>Application of AI techniques in IoT systems</li>
                  <li>
                    Integration of AI algorithms for data processing and
                    decision-making
                  </li>
                </ul>
                <p>
                  This certificate is an informal recognition of the
                  competencies gained through the Carenuity Home Challenge.
                </p>
                <hr style={{ border: "1px solid #198754" }} />
                <i>
                  ChipGlobe, with over 15 years of experience as a trusted
                  provider of talent, proudly acknowledges the dedication and
                  expertise demonstrated by the participants in this challenge.
                </i>
              </div>
            </div>
          )}

          {certificate !== undefined && !certificate.isCertified && (
            <div
              className="col-md-8"
              style={{
                border: "3px solid #198754",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <p>{certificate?.name}</p> has not yet completed the challenge!
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Page;

// Certificate of Achievement

// This certifies that

// [Student's Name]

// has successfully completed the Carenuity Home Challenge, showcasing exceptional skills
//and knowledge in the fields of Internet of Things (IoT) and Artificial Intelligence (AI).

// Competencies Demonstrated:

// Expertise in setting up and configuring IoT devices
//  - Comprehensive understanding of IoT communication protocols
//  - Proficiency in designing and implementing IoT solutions
//  - Ability to collect and analyze data from IoT devices
//  - Knowledge of best practices in IoT security
//  - Application of AI techniques in IoT systems
//  - Integration of AI algorithms for data processing and decision-making

// This certificate is an informal recognition of the competencies gained through
//  the Carenuity Home Challenge.

// ChipGlobe, with over 15 years of experience as a trusted provider of talent, proudly
//acknowledges the dedication and expertise demonstrated by the participants in this challenge.
