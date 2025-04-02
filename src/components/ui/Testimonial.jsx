import React from 'react';
import Image from 'next/image';

const Testimonial = ({
  quote,
  author,
  position,
  company,
  image = null,
  className = '',
}) => {
  return (
    <div className={`bg-gray-50 p-8 rounded-lg ${className}`}>
      <div className="text-4xl text-orange-400 mb-4">"</div>
      
      <p className="text-gray-700 text-lg italic mb-6">
        {quote}
      </p>
      
      <div className="flex items-center">
        <div className="w-12 h-12 relative rounded-full mr-4 bg-gray-300 overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={author}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-blue-900 text-white text-xl">
              {author.charAt(0)}
            </div>
          )}
        </div>
        
        <div>
          <p className="font-semibold text-gray-800">{author}</p>
          <p className="text-gray-600">{position}</p>
          <p className="text-orange-500">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;