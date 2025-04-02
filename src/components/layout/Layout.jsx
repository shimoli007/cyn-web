import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, title = 'Cynea - Enterprise SaaS Solutions for Africa' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Cynea provides SaaS solutions including Asset Performance Management, ERP Systems, Enterprise Data Analytics, and Process Automation for businesses across Africa." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        {/* Main content with padding for fixed navbar */}
        <main className="flex-grow pt-16">
          {children}
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Layout;