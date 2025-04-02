import React from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/sections/about/HeroSection';
import Story from '../components/sections/about/Story';
import MissionValues from '../components/sections/about/MissionValues';
import WhyChooseUs from '../components/sections/about/WhyChooseUs';
import Team from '../components/sections/about/Team';

export default function About() {
  return (
    <Layout>
      <HeroSection />
      <Story />
      <MissionValues />
      <WhyChooseUs />
      <Team />
    </Layout>
  );
}