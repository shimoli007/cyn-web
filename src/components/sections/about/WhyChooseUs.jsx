import React from 'react';
import { Users, BookOpen, Award } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Expert Team",
      description: "Our team consists of experienced professionals with deep industry knowledge."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-orange-500" />,
      title: "Local Knowledge",
      description: "We understand the unique challenges and opportunities in the African market."
    },
    {
      icon: <Award className="w-8 h-8 text-orange-500" />,
      title: "Proven Results",
      description: "Our solutions have delivered measurable improvements for our clients."
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Why Choose Cynea</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We combine global expertise with local knowledge to deliver solutions that work for African enterprises.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;