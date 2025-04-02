import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  // Check if the current route matches the link
  const isActive = (path) => router.pathname === path;

  // Handle scroll event to change navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logo.svg"
            alt="Cynea Logo"
            width={40}
            height={40}
            priority
            className="mr-2"
          />
          <span className="text-xl font-bold text-gray-800">cynea</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className={`${isActive('/') 
            ? 'text-orange-500 font-medium' 
            : 'text-gray-800 hover:text-orange-500 transition-colors'}`}>
            Home
          </Link>
          <Link href="/about" className={`${isActive('/about') 
            ? 'text-orange-500 font-medium' 
            : 'text-gray-800 hover:text-orange-500 transition-colors'}`}>
            About
          </Link>
          <Link href="/solutions" className={`${isActive('/solutions') 
            ? 'text-orange-500 font-medium' 
            : 'text-gray-800 hover:text-orange-500 transition-colors'}`}>
            Solutions
          </Link>
          <Link href="/case-studies" className={`${isActive('/case-studies') 
            ? 'text-orange-500 font-medium' 
            : 'text-gray-800 hover:text-orange-500 transition-colors'}`}>
            Case Studies
          </Link>
          <Link href="/blog" className={`${isActive('/blog') 
            ? 'text-orange-500 font-medium' 
            : 'text-gray-800 hover:text-orange-500 transition-colors'}`}>
            Blog
          </Link>
        </div>

        {/* Contact Button */}
        <Link href="/contact" className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-md hover:from-orange-500 hover:to-red-600 transition-all shadow-md hidden md:block">
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-800" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-6 py-4 shadow-md">
          <div className="flex flex-col space-y-4">
            <Link href="/" 
              className={`${isActive('/') ? 'text-orange-500 font-medium' : 'text-gray-800'}`}
              onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/about" 
              className={`${isActive('/about') ? 'text-orange-500 font-medium' : 'text-gray-800'}`}
              onClick={toggleMenu}>
              About
            </Link>
            <Link href="/solutions" 
              className={`${isActive('/solutions') ? 'text-orange-500 font-medium' : 'text-gray-800'}`}
              onClick={toggleMenu}>
              Solutions
            </Link>
            <Link href="/case-studies" 
              className={`${isActive('/case-studies') ? 'text-orange-500 font-medium' : 'text-gray-800'}`}
              onClick={toggleMenu}>
              Case Studies
            </Link>
            <Link href="/blog" 
              className={`${isActive('/blog') ? 'text-orange-500 font-medium' : 'text-gray-800'}`}
              onClick={toggleMenu}>
              Blog
            </Link>
            <Link href="/contact" 
              className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-md w-full text-center"
              onClick={toggleMenu}>
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;