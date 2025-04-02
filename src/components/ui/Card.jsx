import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const Card = ({
  title,
  content,
  image,
  imageAlt = '',
  link = '',
  linkText = 'Learn more',
  className = '',
  badge = '',
  icon = null,
  iconBg = '',
  hoverEffect = true,
}) => {
  const cardClasses = `
    bg-white rounded-lg shadow-md overflow-hidden 
    ${hoverEffect ? 'hover:shadow-lg transition-shadow' : ''} 
    ${className}
  `;
  
  return (
    <div className={cardClasses}>
      {/* Card Image */}
      {image && (
        <div className="h-48 relative">
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      {/* Card Icon */}
      {icon && (
        <div className={`p-6 flex justify-center items-center ${iconBg || 'bg-gradient-to-r from-orange-400 to-red-500'}`}>
          {icon}
        </div>
      )}
      
      {/* Card Content */}
      <div className="p-6">
        {badge && (
          <span className="inline-block px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-orange-400 to-red-500 rounded-full mb-3">
            {badge}
          </span>
        )}
        
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        
        <div className="text-gray-600 mb-4">
          {typeof content === 'string' ? <p>{content}</p> : content}
        </div>
        
        {link && (
          <Link href={link} className="inline-flex items-center text-orange-500 hover:text-red-500 transition-colors">
            {linkText} <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;