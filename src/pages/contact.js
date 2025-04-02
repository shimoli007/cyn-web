import React from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/sections/contact/HeroSection';
import ContactInfo from '../components/sections/contact/ContactInfo';
import FAQ from '../components/sections/contact/FAQ';

export default function Contact() {
  return (
    <Layout title="Contact Us - Cynea">
      <HeroSection />
      <ContactInfo />
      <FAQ />
    </Layout>
  );
}