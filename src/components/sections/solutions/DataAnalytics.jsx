import React from 'react';
import Image from 'next/image';
import { BarChart3, CheckCircle, ChevronRight } from 'lucide-react';
import Button from '../../ui/Button';

const DataAnalytics = () => {
  const features = [
    "Comprehensive data collection and integration",
    "Advanced analytics and machine learning capabilities",
    "Customizable dashboards and reporting",
    "Predictive analytics for forecasting",
    "Industry-specific analytics solutions"
  ];

  return (
    <section className="bg-gray-50 py-16 px-6" id="data-analytics">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center shadow-md mr-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Enterprise Data Analytics</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              Our Enterprise Data Analytics solution enables organizations to collect, process, analyze, and visualize data from multiple sources, providing actionable insights for strategic decision-making.
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
          
          <div className="relative">
            <Image 
              src="/images/solutions/data-analytics.jpg" 
              alt="Enterprise Data Analytics" 
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full"
            />
            <div className="absolute -bottom-4 -left-4 bg-blue-900 text-white p-4 rounded-md shadow-lg">
              <p className="font-bold">Make decisions faster by</p>
              <p className="text-2xl font-bold">65%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataAnalytics;