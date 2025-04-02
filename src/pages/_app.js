import React from 'react';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Cynea provides SaaS solutions including Asset Performance Management, ERP Systems, Enterprise Data Analytics, and Process Automation for businesses across Africa." />
        <meta name="keywords" content="SaaS, Africa, Enterprise, ERP, Analytics, Automation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;