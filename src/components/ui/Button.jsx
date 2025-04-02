import React from 'react';
import Link from 'next/link';

const variants = {
  primary: 'bg-gradient-to-r from-orange-400 to-red-500 text-white hover:from-orange-500 hover:to-red-600 shadow-md',
  secondary: 'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-100',
  outline: 'bg-transparent border border-white text-white hover:bg-white hover:text-blue-900',
  text: 'text-orange-500 hover:text-red-500 bg-transparent p-0',
};

const sizes = {
  sm: 'py-1 px-3 text-sm',
  md: 'py-2 px-4',
  lg: 'py-3 px-6 text-lg',
};

const Button = ({
  variant = 'primary',
  size = 'md',
  href = null,
  className = '',
  children,
  icon = null,
  iconPosition = 'right',
  fullWidth = false,
  ...props
}) => {
  const baseStyles = 'rounded-md transition-all flex items-center justify-center';
  const variantStyle = variants[variant] || variants.primary;
  const sizeStyle = sizes[size] || sizes.md;
  const widthStyle = fullWidth ? 'w-full' : '';
  
  const buttonClasses = `${baseStyles} ${variantStyle} ${sizeStyle} ${widthStyle} ${className}`;
  
  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );
  
  if (href) {
    return (
      <Link href={href} className={buttonClasses} {...props}>
        {content}
      </Link>
    );
  }
  
  return (
    <button className={buttonClasses} {...props}>
      {content}
    </button>
  );
};

export default Button;