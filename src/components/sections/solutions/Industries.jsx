import React from 'react';
import Link from 'next/link';

const Industries = () => {
  const industries = [
    {
      industry: "Manufacturing",
      description: "Optimize production processes, improve quality control, and streamline supply chain operations.",
      icon: "🏭"
    },
    {
      industry: "Financial Services",
      description: "Enhance customer experience, improve compliance, and increase operational efficiency.",
      icon: "💹"
    },
    {
      industry: "Healthcare",
      description: "Improve patient care, streamline administrative tasks, and ensure regulatory compliance.",
      icon: "🏥"
    },
    {
      industry: "Retail",
      description: "Enhance customer experience, optimize inventory management, and streamline operations.",
      icon: "🛒"
    },
    {
      industry: "Energy & Utilities",
      description: "Improve asset reliability, optimize resource allocation, and enhance customer service.",
      icon: "⚡"
    },
    {
      industry: "Telecommunications",
      description: "Enhance network performance, improve customer service, and optimize operations.",
      icon: "📱"
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Industry-Specific Solutions</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our solutions are tailored to meet the unique challenges and requirements of various industries across Africa.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">{industry.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{industry.industry}</h3>
              <p className="text-gray-600">{industry.description}</p>
              <Link href="/contact" className="mt-4 inline-block text-orange-500 hover:text-red-500 transition-colors">
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;