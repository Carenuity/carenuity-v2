import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PageTitle from '../../../components/PageTitle';
// import styles from './level1.module.css';

const Page = () => {
  const pageTitle = 'THWS Home Challenge';
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
        links={[{ path: '/', title: '' }]}
        pageTitle={pageTitle}
        pageUrl=""
      />

      <section className="pt-4">
        <div className="container">
          <iframe
            loading="lazy"
            className="mb-4"
            src="https://www.canva.com/design/DAGTv8E29BE/vw2sd2l1Wp4OwFOmFTSw1A/view?embed"
            width="100%"
            height="600px"
          ></iframe>
          <div style={{ textAlign: 'center' }}>
            <a
              href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGTv8E29BE&#x2F;vw2sd2l1Wp4OwFOmFTSw1A&#x2F;view?utm_content=DAGTv8E29BE&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-6"
            >
              <u>THWS Home Challenge</u>
            </a>{' '}
            by carenuity
          </div>
          <div className="row">
            <div className="col-lg-3 mb-4"></div>
            <div className="col-lg-4 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/home-challenge/universities/press-materials-for-thws/register.jpeg"
                className="mt-1-9 wow fadeInUp img-fluid mb-3"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                }}
              />
              <p style={{ textAlign: 'center' }}>
                <Link
                  href={'/home-challenge/register/thws'}
                  className={'btn btn-sm btn-success rounded-pill'}
                >
                  <span className="small">Register </span>
                </Link>
                <p>for the home challenge towards AI</p>
              </p>
            </div>
            <div className="col-lg-2 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/home-challenge/universities/press-materials-for-thws/whatsapp2.jpeg"
                className="mt-1-9 wow fadeInUp img-fluid mb-2"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                }}
              />
              <p style={{ textAlign: 'center' }}>
                <strong>Scan</strong> to join whatsapp group
              </p>
            </div>
          </div>

          <p style={{ textAlign: 'center' }}>
            {/* {!isMobile && ( */}
            <Link
              href={'./thws/press'}
              className={'btn btn-lg btn-success rounded-pill'}
            >
              <span className="small">Press Materials</span>
            </Link>
            {/* )} */}

            {/* {isMobile && (
              <a
                href={'./thws/press'}
                className={'btn btn-lg btn-success rounded-pill'}
              >
                <span className="small">
                  Press Materials{' '}
                </span>
              </a>
            )} */}
          </p>
        </div>
      </section>
    </>
  );
};

export default Page;
