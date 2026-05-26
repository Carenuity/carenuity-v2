import React from 'react';
import Head from 'next/head';
import PageTitle from '../../components/PageTitle';

const Page = () => {
  const pageTitle = 'DUTH Home Challenge';
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
            src="https://www.canva.com/design/DAGjkEgJhzY/d8Bi2l1NbRJrjlrJLuvLsA/view?embed"
            width="100%"
            height="600px"
          ></iframe>
          <a
            href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGjkEgJhzY&#x2F;d8Bi2l1NbRJrjlrJLuvLsA&#x2F;view?utm_content=DAGjkEgJhzY&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <u>Duch Home Challenge</u>
          </a>{' '}
          by carenuity
        </div>
      </section>
    </>
  );
};

export default Page;
