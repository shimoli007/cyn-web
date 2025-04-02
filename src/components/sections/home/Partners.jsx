import React from 'react';
import Image from 'next/image';
import { partners } from '../../../data/partners';

const Partners = () => {
  return (
    <section className="py-16 px-6" id="partners">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Our Partners</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Working with leading technology providers to deliver the best solutions.</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center hover:shadow-md transition-shadow">
              <Image 
                src={partner.logo} 
                alt={partner.name} 
                width={120} 
                height={60} 
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;