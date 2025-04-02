import React from 'react';
import Image from 'next/image';
import { Server, ArrowRight, CheckCircle } from 'lucide-react';

const AssetManagement = () => {
  const features = [
    "Real-time monitoring and analytics",
    "Predictive maintenance capabilities",
    "Risk-based asset management",
    "Performance optimization strategies",
    "Comprehensive reporting and dashboards"
  ];

  return (
    <section className="py-16 px-6" id="asset-performance">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center mr-4">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Asset Performance Management</h2>
            </div>
            
            <p className="text-gray-600 mb-8">
              Our Asset Performance Management solution helps organizations maximize the reliability and performance of their critical assets while minimizing operational costs and risks.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-1" />
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
            
            <button className="mt-8 bg-gradient-to-r from-orange-400 to-red-500 text-white py-3 px-6 rounded-md hover:from-orange-500 hover:to-red-600 transition-all flex items-center">
              Request Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
          
          <div>
            <Image 
              src="/images/solutions/asset-performance.jpg" 
              alt="Asset Performance Management" 
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full"
            />
            
            <div className="bg-blue-900 text-white p-4 rounded mt-6">
              <p className="text-2xl font-bold">Improve asset reliability by</p>
              <p className="text-4xl font-bold">35%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssetManagement;