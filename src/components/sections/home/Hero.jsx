import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import Button from '../../ui/Button';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-950 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">Transforming African Enterprises with Intelligent Solutions</h1>
          <p className="text-lg opacity-90">Empowering SMEs and large enterprises with cutting-edge SaaS products that drive growth and efficiency.</p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button 
              href="/solutions" 
              variant="primary" 
              size="lg"
              icon={<ChevronRight className="w-5 h-5" />}
              iconPosition="right"
            >
              Explore Solutions
            </Button>
            <Button 
              href="/case-studies" 
              variant="outline" 
              size="lg"
            >
              Case Studies
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <div className="bg-blue-800/30 backdrop-blur-sm rounded-lg p-8 relative z-10">
            <div className="grid grid-cols-2 gap-6">
              {[
                { title: "Asset Performance", icon: "server" },
                { title: "ERP Systems", icon: "database" },
                { title: "Data Analytics", icon: "chart-bar" },
                { title: "Process Automation", icon: "cog" }
              ].map((item, i) => (
                <div key={i} className="bg-blue-800/50 p-4 rounded-md backdrop-blur-sm shadow-lg flex flex-col items-center text-center space-y-2">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center shadow-md">
                    <Image src={`/icons/${item.icon}.svg`} alt={item.title} width={32} height={32} />
                  </div>
                  <p className="font-medium">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-red-500/20 rounded-lg blur-xl transform translate-x-4 translate-y-4"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;