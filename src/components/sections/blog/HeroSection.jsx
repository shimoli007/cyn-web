import React from 'react';
import { Search } from 'lucide-react';

const HeroSection = ({ setSearchQuery }) => {
  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setSearchQuery(e.target.value);
    }
  };

  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Cynea Insights</h1>
        <p className="text-xl max-w-3xl mx-auto opacity-90">
          Stay updated with the latest trends and insights in enterprise technology
        </p>
        <div className="mt-8 max-w-xl mx-auto relative">
          <input 
            type="text" 
            placeholder="Search articles..." 
            className="w-full py-3 px-5 pr-12 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800"
            onKeyDown={handleSearch}
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-orange-500">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;