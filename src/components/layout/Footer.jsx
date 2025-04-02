import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto py-12 px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <svg width="30" height="30" viewBox="0 0 100 100" className="mr-2">
                <rect width="100" height="100" fill="#0c2350" />
                <path d="M30,30 C35,20 45,15 55,20 C65,25 75,35 70,50 C65,65 50,75 35,65 C25,60 25,40 35,35" 
                      stroke="#FF8C00" strokeWidth="4" fill="none" />
                <path d="M50,50 L60,30 M50,50 L70,45 M50,50 L65,65" 
                      stroke="#FF5E62" strokeWidth="3" />
                <circle cx="60" cy="30" r="3" fill="#FF8C00" />
                <circle cx="70" cy="45" r="3" fill="#FF8C00" />
                <circle cx="65" cy="65" r="3" fill="#FF5E62" />
              </svg>
              <span className="text-xl font-bold">cynea</span>
            </div>
            <p className="text-gray-600">Transforming enterprises across Africa with innovative SaaS solutions.</p>
            <div className="mt-4 text-gray-600">
              <p>5 Merchant Square</p>
              <p>London, England W2 1AY</p>
              <p>+447469721021</p>
            </div>
          </div>
          
          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions#asset-performance" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Asset Performance Management
                </Link>
              </li>
              <li>
                <Link href="/solutions#erp-systems" className="text-gray-600 hover:text-orange-500 transition-colors">
                  ERP Systems
                </Link>
              </li>
              <li>
                <Link href="/solutions#data-analytics" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Enterprise Data Analytics
                </Link>
              </li>
              <li>
                <Link href="/solutions#process-automation" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Process Automation
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-orange-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/#partners" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              {['twitter', 'linkedin', 'facebook'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-orange-400 transition-colors">
                  <span className="text-gray-700">@</span>
                </a>
              ))}
            </div>
            <p className="text-gray-600">Subscribe to our newsletter</p>
            <div className="mt-2 flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="border border-gray-300 px-3 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500" 
              />
              <button className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-r-md hover:from-orange-500 hover:to-red-600 transition-all">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600">© {new Date().getFullYear()} Cynea. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-600 hover:text-orange-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-600 hover:text-orange-500 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;