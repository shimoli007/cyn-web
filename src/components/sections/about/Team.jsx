import React from 'react';
import Image from 'next/image';

const Team = () => {
  // CEO data
  const ceo = {
    name: "Irene Otieno",
    position: "Strategic Data Specialist",
    image: "/images/team/member1.jpg", // Using your existing image
    bio: "Strategic data specialist with a proven record of turning complex research into actionable business intelligence. My background in analytical science and cross-industry expertise has equipped me to design solutions that address critical business challenges while opening new opportunities for growth."
  };

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Leadership</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Meet the visionary behind Cynea's mission and innovation.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3 h-64 relative">
              <Image 
                src={ceo.image} 
                alt={ceo.name} 
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3 p-8">
              <h3 className="text-2xl font-semibold text-gray-800">{ceo.name}</h3>
              <p className="text-orange-500 font-medium">{ceo.position}</p>
              <p className="text-gray-600 mt-4">{ceo.bio}</p>
              <div className="mt-6">
                <p className="text-gray-700 font-medium">"My vision is to democratize data intelligence, providing businesses with powerful analytical tools that were once accessible only to large corporations with extensive resources."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;