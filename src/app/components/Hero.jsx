'use client'
import React, { useState } from 'react';
import { Upload, Search } from 'lucide-react';
import Features from './Features';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className=" relative ">

      <div className=" bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 text-white py-20 mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" max-w-7xl text-left mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Find and Relive Your<br />
            <span className="text-blue-100">Memories Instantly</span>
          </h1>
          
          <div className="max-w-8xl mx-auto bg-white rounded-2xl shadow-2xl p-4 flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <div className="flex items-center bg-gray-50 rounded-xl px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors duration-200">
                <Upload className="h-5 w-5 text-gray-400 mr-3" />
                <span className="text-gray-600 font-medium">Upload Selfie to Find Your Memories</span>
              </div>
            </div>
            
            <div className="flex-1 relative">
              <div className="flex items-center bg-gray-50 rounded-xl">
                <Search className="h-5 w-5 text-gray-400 ml-4" />
                <input
                  type="text"
                  placeholder="Search by Date/Location"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 bg-transparent text-gray-700 placeholder-gray-500 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

        <Features/>
    </section>
  );
};

export default Hero;