import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-orange-400 bg-gradient-to-r from-orange-400 to-red-500 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-6">About Cynea</h1>
            <p className="text-xl mb-8">
              We're on a mission to transform African enterprises with intelligent technology solutions that drive growth and efficiency.
            </p>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <p className="font-medium">
                Founded in 2023, we've helped businesses across Africa implement cutting-edge technology solutions that deliver real results.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 rounded p-4 text-center">
                  <p className="text-3xl font-bold">2+</p>
                  <p>Years Experience</p>
                </div>
                <div className="bg-white/20 rounded p-4 text-center">
                  <p className="text-3xl font-bold">50+</p>
                  <p>Clients Served</p>
                </div>
                <div className="bg-white/20 rounded p-4 text-center">
                  <p className="text-3xl font-bold">10+</p>
                  <p>Team Members</p>
                </div>
                <div className="bg-white/20 rounded p-4 text-center">
                  <p className="text-3xl font-bold">5+</p>
                  <p>Countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;