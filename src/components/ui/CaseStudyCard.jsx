import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const CaseStudyCard = ({
  id,
  title,
  summary,
  industry,
  category,
  results = [],
  image,
  className = '',
}) => {
  // Map category to display text
  const getCategoryText = (cat) => {
    const categories = {
      'erp': 'ERP Systems',
      'analytics': 'Data Analytics',
      'automation': 'Process Automation',
      'asset': 'Asset Performance'
    };
    return categories[cat] || cat;
  };

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${className}`}>
      {/* Image */}
      <div className="h-48 relative">
        <Image 
          src={image || '/images/case-studies/placeholder.jpg'} 
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="p-6">
        {/* Categories/Tags */}
        <div className="flex items-center mb-3">
          <span className="text-sm font-medium text-white bg-gradient-to-r from-orange-400 to-red-500 px-3 py-1 rounded-full">
            {industry}
          </span>
          {category && (
            <span className="ml-2 text-sm text-gray-500">
              {getCategoryText(category)}
            </span>
          )}
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        
        {/* Summary */}
        <p className="text-gray-600 mt-2">{summary}</p>
        
        {/* Results */}
        {results.length > 0 && (
          <div className="mt-4 bg-gray-50 p-3 rounded-md">
            <h4 className="font-semibold text-gray-700 mb-2">Key Results:</h4>
            <ul className="space-y-1">
              {results.map((result, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span className="text-gray-700">{result}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Link */}
        <Link 
          href={`/case-studies/${id}`} 
          className="mt-4 inline-block text-orange-500 hover:text-red-500 transition-colors flex items-center"
        >
          Read full case study <ArrowRight className="ml-1 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyCard;