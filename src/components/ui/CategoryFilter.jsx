import React from 'react';

const CategoryFilter = ({
  categories = [],
  activeCategory,
  setActiveCategory,
  className = '',
}) => {
  return (
    <div className={`flex flex-wrap gap-4 justify-center ${className}`}>
      {categories.map(category => (
        <button
          key={category.id}
          className={`px-4 py-2 rounded-md transition-all ${
            activeCategory === category.id 
              ? 'bg-gradient-to-r from-orange-400 to-red-500 text-white shadow-md' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => setActiveCategory(category.id)}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;