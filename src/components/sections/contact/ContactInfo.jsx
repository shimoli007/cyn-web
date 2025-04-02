import React from 'react';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import ContactForm from '../../ui/ContactForm';

const ContactInfo = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Office Location</h3>
            <p className="text-gray-600">5 Merchant Square</p>
            <p className="text-gray-600">London, England W2 1AY</p>
            <button className="mt-4 inline-flex items-center text-orange-500 hover:text-red-500 transition-colors">
              View on map
            </button>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Phone Number</h3>
            <p className="text-gray-600">+44 7469 721021</p>
            <p className="text-gray-600 mt-2">Monday - Friday, 9am - 5pm GMT</p>
            <a href="tel:+447469721021" className="mt-4 inline-flex items-center text-orange-500 hover:text-red-500 transition-colors">
              Call us
            </a>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Email Address</h3>
            <p className="text-gray-600">irene@cynea.africa</p>
            <p className="text-gray-600 mt-2">We'll respond within 24 hours</p>
            <a href="mailto:irene@cynea.africa" className="mt-4 inline-flex items-center text-orange-500 hover:text-red-500 transition-colors">
              Email us
            </a>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <ContactForm />
            
            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact us directly</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <MessageSquare className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">General Inquiries</h4>
                    <p className="text-gray-600">irene@cynea.africa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="h-full">
              <div className="bg-gray-200 h-96 rounded-lg shadow-md mb-6">
                {/* Map embed would go here */}
                <div className="w-full h-full flex items-center justify-center bg-blue-900/10">
                  <div className="text-center p-6">
                    <MapPin className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800">Cynea Headquarters</h3>
                    <p className="text-gray-600">5 Merchant Square, London, England W2 1AY</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Office Hours</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Clock className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Monday - Friday</h4>
                      <p className="text-gray-600">9:00 AM - 5:00 PM (GMT)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Clock className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Saturday - Sunday</h4>
                      <p className="text-gray-600">Closed</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 mt-6 pt-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Regional Office</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-800">Nairobi, Kenya</h4>
                      <p className="text-gray-600">Westside Towers, Westlands, Nairobi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;