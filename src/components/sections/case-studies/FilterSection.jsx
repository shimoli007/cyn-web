import React from 'react';
import { caseStudies } from '../../../data/caseStudies'; // Adjust path if needed

const FilterSection = ({ activeFilter, setActiveFilter }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      <button
        className={`px-4 py-2 rounded-md transition-colors ${
          activeFilter === 'all' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
        onClick={() => setActiveFilter('all')}
      >
        All Case Studies
      </button>
      
      <button
        className={`px-4 py-2 rounded-md transition-colors ${
          activeFilter === 'ERP Systems' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
        onClick={() => setActiveFilter('ERP Systems')}
      >
        ERP Systems
      </button>
      
      <button
        className={`px-4 py-2 rounded-md transition-colors ${
          activeFilter === 'Data Analytics' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
        onClick={() => setActiveFilter('Data Analytics')}
      >
        Data Analytics
      </button>
      
      <button
        className={`px-4 py-2 rounded-md transition-colors ${
          activeFilter === 'Asset Performance' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
        onClick={() => setActiveFilter('Asset Performance')}
      >
        Asset Performance
      </button>
      
      <button
        className={`px-4 py-2 rounded-md transition-colors ${
          activeFilter === 'Process Automation' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
        onClick={() => setActiveFilter('Process Automation')}
      >
        Process Automation
      </button>
    </div>
  );
};

export default FilterSection;