import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import CaseStudyCard from '../../ui/CaseStudyCard';
import { caseStudies } from '../../../data/caseStudies';

const CaseStudies = () => {
  // Get the first 3 case studies to display
  const featuredCaseStudies = caseStudies.slice(0, 3);

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Success Stories</h2>
            <p className="text-gray-600 mt-4 max-w-2xl">See how we've helped organizations across Africa transform their operations.</p>
          </div>
          <Link href="/case-studies" className="text-orange-500 hover:text-red-500 transition-colors flex items-center">
            View all case studies <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {featuredCaseStudies.map((study) => (
            <CaseStudyCard 
              key={study.id}
              id={study.id}
              title={study.title}
              summary={study.summary}
              industry={study.industry}
              category={study.category}
              results={study.results}
              image={study.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;