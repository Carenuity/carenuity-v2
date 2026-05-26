import React from 'react';
import Head from 'next/head';
import PageTitle from '../../components/PageTitle';

const Page = () => {
  const pageTitle = 'Nairobi Home Challenge';
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
            src="https://www.canva.com/design/DAGW1NlDwpw/EjOuorYweO_44m_LY-ZA_Q/view?embed"
            width="100%"
            height="600px"
          ></iframe>
          <a
            href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGW1NlDwpw&#x2F;EjOuorYweO_44m_LY-ZA_Q&#x2F;view?utm_content=DAGW1NlDwpw&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
            target="blank"
          >
            <u>Nairobi Home Challenge</u>
          </a>{' '}
          by carenuity
        </div>
      </section>
    </>
  );
};

export default Page;
