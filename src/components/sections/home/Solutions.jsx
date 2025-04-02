import React from 'react';
import { ArrowRight } from 'lucide-react';
import Card from '../../ui/Card';
import { solutions } from '../../../data/solutions';

const Solutions = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Our SaaS Solutions</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Comprehensive software solutions designed to optimize your business operations and drive growth.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              title={solution.title}
              content={solution.description}
              icon={solution.icon}
              link={`/solutions#${solution.slug}`}
              linkText="Learn more"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;