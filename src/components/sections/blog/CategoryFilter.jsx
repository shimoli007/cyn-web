import React from 'react';
import CategoryFilter from '../../ui/CategoryFilter';

const BlogCategoryFilter = ({ activeCategory, setActiveCategory }) => {
  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'technology', label: 'Technology' },
    { id: 'business', label: 'Business' },
    { id: 'innovation', label: 'Innovation' },
    { id: 'industry', label: 'Industry Insights' }
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center mb-12">
      <CategoryFilter 
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
    </div>
  );
};

export default BlogCategoryFilter;