import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { caseStudies } from '../../../data/caseStudies'; // Adjust path if needed

const CaseStudiesGrid = ({ filter = 'all', setFilter }) => {
  // Simple exact matching filter
  const filteredStudies = filter === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.solution === filter);

  // Print debug info to console
  console.log("Filter:", filter);
  console.log("Available case studies:", caseStudies);
  console.log("Filtered studies:", filteredStudies);

  return (
    <>
      {filteredStudies && filteredStudies.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudies.map((caseStudy, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 relative">
                <Image 
                  src={caseStudy.image} 
                  alt={caseStudy.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {/* Industry badge - orange background */}
                  <span className="px-3 py-1 text-sm text-white font-medium bg-orange-500 rounded-full">
                    {caseStudy.industry}
                  </span>
                  
                  {/* Solution badge - gray background */}
                  <span className="px-3 py-1 text-sm text-gray-700 font-medium bg-gray-100 rounded-full">
                    {caseStudy.solution}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{caseStudy.title}</h3>
                <p className="text-gray-600 mb-4">{caseStudy.summary}</p>
                
                <Link href={`/case-studies/${caseStudy.id}`} className="inline-flex items-center text-orange-500 hover:text-red-500 transition-colors">
                  Read case study
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-700 text-xl mb-6">No case studies found for the selected filter.</p>
          <button
            className="px-6 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
            onClick={() => setFilter && typeof setFilter === 'function' ? setFilter('all') : null}
          >
            Show all case studies
          </button>
        </div>
      )}
    </>
  );
};

export default CaseStudiesGrid;