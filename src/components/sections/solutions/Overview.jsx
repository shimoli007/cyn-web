import React from 'react';
import Card from '../../ui/Card';
import { Server, Database, BarChart3, Cog } from 'lucide-react';
import { solutions } from '../../../data/solutions';

const Overview = () => {
  const icons = {
    server: <Server className="w-8 h-8 text-white" />,
    database: <Database className="w-8 h-8 text-white" />,
    chart: <BarChart3 className="w-8 h-8 text-white" />,
    cog: <Cog className="w-8 h-8 text-white" />,
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Transformative Enterprise Solutions</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our suite of SaaS products addresses the most pressing challenges facing modern enterprises in Africa.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              title={solution.title}
              content={solution.description}
              icon={icons[solution.iconKey]}
              iconBg="bg-gradient-to-r from-orange-400 to-red-500"
              link={`#${solution.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;