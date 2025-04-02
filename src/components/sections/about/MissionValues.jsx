import React from 'react';
import { CheckCircle } from 'lucide-react';

const MissionValues = () => {
  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, from product development to customer service."
    },
    {
      title: "Innovation",
      description: "We embrace new ideas and technologies to deliver cutting-edge solutions to our clients."
    },
    {
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical business practices."
    },
    {
      title: "Customer Focus",
      description: "We put our customers at the center of our business and are committed to their success."
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Our Mission & Values</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            At the core of everything we do is a commitment to excellence and innovation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              To accelerate the digital transformation of African enterprises by providing innovative, reliable, and scalable technology solutions that drive growth, efficiency, and competitive advantage.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading technology partner for businesses across Africa, recognized for our expertise, innovation, and commitment to customer success.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Core Values</h3>
            
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 mt-1">
                    <CheckCircle className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">{value.title}</h4>
                    <p className="text-gray-600 mt-1">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionValues;