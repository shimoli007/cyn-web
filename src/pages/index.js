import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/home/Hero';
import Solutions from '../components/sections/home/Solutions';
import CaseStudies from '../components/sections/home/CaseStudies';
import Partners from '../components/sections/home/Partners';
import Blog from '../components/sections/home/Blog';
import CTA from '../components/sections/home/CTA';

export default function Home() {
  return (
    <Layout title="Cynea - SaaS Solutions for African Enterprises">
      <Hero />
      <Solutions />
      <CaseStudies />
      <Partners />
      <Blog />
      <CTA />
    </Layout>
  );
}