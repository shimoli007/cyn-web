import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const FeaturedCaseStudy = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">Featured Success Story</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          See how our comprehensive ERP solution transformed operations for a leading African manufacturer
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image 
              src="/images/case-studies/manufacturing.jpg" 
              alt="Manufacturing ERP Implementation"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <span className="px-3 py-1 text-sm text-white font-medium bg-orange-500 rounded-full inline-block mb-2">
              Manufacturing
            </span>
            <span className="px-3 py-1 text-sm text-gray-700 font-medium bg-gray-100 rounded-full inline-block ml-2 mb-2">
              ERP Implementation
            </span>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Pan-African Manufacturer Streamlines Operations with Cynea ERP
            </h3>
            
            <p className="text-gray-600 mb-6">
              A leading manufacturer with operations in 5 African countries was struggling with disconnected systems, inconsistent data, and inefficient processes. Learn how our comprehensive ERP solution transformed their operations.
            </p>
            
            <div className="mb-8">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white font-bold mr-3">
                  40%
                </div>
                <p className="text-gray-700">increase in operational efficiency</p>
              </div>
              
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white font-bold mr-3">
                  25%
                </div>
                <p className="text-gray-700">reduction in inventory costs</p>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white font-bold mr-3">
                  60%
                </div>
                <p className="text-gray-700">faster reporting and decision-making</p>
              </div>
            </div>
            
            <Link href="/case-studies/manufacturing" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-400 to-red-500 text-white font-medium rounded-md hover:from-orange-500 hover:to-red-600 transition-all">
              Read the full case study
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;