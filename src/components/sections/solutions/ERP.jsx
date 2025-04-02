import React from 'react';
import Image from 'next/image';
import { Database, CheckCircle, ChevronRight } from 'lucide-react';
import Button from '../../ui/Button';

const ERP = () => {
  const features = [
    "Financial management and accounting",
    "Supply chain and inventory management",
    "Human resources and payroll",
    "Customer relationship management",
    "Customizable to specific industry needs"
  ];

  return (
    <section className="py-16 px-6" id="erp-systems">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative">
            <Image 
              src="/images/solutions/erp.jpg" 
              alt="ERP Systems" 
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full"
            />
            <div className="absolute -bottom-4 -right-4 bg-blue-900 text-white p-4 rounded-md shadow-lg">
              <p className="font-bold">Increase operational efficiency by</p>
              <p className="text-2xl font-bold">40%</p>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center shadow-md mr-4">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">ERP Systems</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              Our Enterprise Resource Planning (ERP) systems integrate core business processes and provide a single source of truth for your organization's data, enabling streamlined operations and better decision-making.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
            
            <Button 
              variant="primary"
              icon={<ChevronRight className="w-5 h-5" />}
              iconPosition="right"
              href="/contact"
            >
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ERP;