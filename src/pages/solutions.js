import React from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/sections/solutions/HeroSection';
import Overview from '../components/sections/solutions/Overview';
import AssetManagement from '../components/sections/solutions/AssetManagement';
import ERP from '../components/sections/solutions/ERP';
import DataAnalytics from '../components/sections/solutions/DataAnalytics';
import ProcessAutomation from '../components/sections/solutions/ProcessAutomation';
import Industries from '../components/sections/solutions/Industries';
import CTA from '../components/sections/home/CTA';

export default function Solutions() {
  return (
    <Layout title="Solutions - Cynea">
      <HeroSection />
      <Overview />
      <AssetManagement />
      <ERP />
      <DataAnalytics />
      <ProcessAutomation />
      <Industries />
      <CTA />
    </Layout>
  );
}