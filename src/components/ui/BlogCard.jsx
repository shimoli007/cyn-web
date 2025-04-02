import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogCard = ({
  id,
  title,
  excerpt,
  category,
  date,
  author,
  image,
  featured = false,
  className = '',
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${className}`}>
      {/* Image */}
      <div className="h-48 relative">
        <Image 
          src={image || '/images/blog/placeholder.jpg'} 
          alt={title}
          fill
          className="object-cover"
        />
        {featured && (
          <div className="absolute top-2 right-2 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
            Featured
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-6">
        {/* Meta info */}
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-orange-500 font-medium">{category}</span>
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar className="w-4 h-4 mr-1" /> {date}
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        
        {/* Excerpt */}
        <p className="text-gray-600 mb-4">{excerpt}</p>
        
        {/* Author and read more */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <User className="w-4 h-4 text-gray-500 mr-1" />
            <span className="text-sm text-gray-500">{author}</span>
          </div>
          
          <Link 
            href={`/blog/${id}`} 
            className="text-orange-500 hover:text-red-500 transition-colors flex items-center text-sm"
          >
            Read more <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;