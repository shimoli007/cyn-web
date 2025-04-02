import React from 'react';
import Image from 'next/image';

const Story = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Cynea was founded with a clear vision: to provide African enterprises with world-class technology solutions that drive growth and efficiency. We recognized that many businesses across the continent were struggling to adopt digital transformation due to lack of tailored solutions for their unique challenges.
            </p>
            <p className="text-gray-600 mb-4">
              Our journey began with a small team of passionate technologists and has grown into a comprehensive technology partner serving SMEs and large enterprises across Africa. We combine global best practices with local expertise to deliver solutions that truly transform operations.
            </p>
            <p className="text-gray-600">
              Today, Cynea stands as a trusted technology partner, helping organizations navigate their digital transformation journey with confidence and achieve sustainable growth.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-8">
            <div className="relative">
              <Image 
                src="/images/team/team1.jpg" 
                alt="Cynea team" 
                width={600}
                height={400}
                className="rounded-md shadow-lg w-full"
              />
              {/* Removed the "Founded in 2019" orange box */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;