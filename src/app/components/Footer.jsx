import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap gap-8 mb-8 md:mb-0">
            <div>
              <h4 className="font-semibold mb-4 text-gray-300">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">How It Works</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Gallery</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-gray-300">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">FAQs</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Blue Star Memory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;