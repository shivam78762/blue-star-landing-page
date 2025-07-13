'use client'

import React from 'react';
import { Star, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Star className="h-8 w-8 fill-current" />
            <span className="text-xl font-bold">BLUE STAR MEMORY</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-blue-200 transition-colors duration-200 font-medium">Home</a>
            <a href="#how-it-works" className="hover:text-blue-200 transition-colors duration-200 font-medium">How It Works</a>
            <a href="#gallery" className="hover:text-blue-200 transition-colors duration-200 font-medium">Browse Photos</a>
            <a href="#pricing" className="hover:text-blue-200 transition-colors duration-200 font-medium">Pricing</a>
            <a href="#support" className="hover:text-blue-200 transition-colors duration-200 font-medium">Support</a>
          </nav>
          
          <button className="md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;