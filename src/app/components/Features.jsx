import React from 'react';
import { Smile, Images, Sparkles, Shield } from 'lucide-react';
import { FaSmileWink } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { RiPhoneCameraFill } from "react-icons/ri";
import { TiCloudStorage } from "react-icons/ti";

const Features = () => {
  const features = [
    {
      icon: FaSmileWink,
      title: 'Face Detection',
      description: 'Advanced AI technology to identify faces in photos'
    },
    {
      icon: IoMdPhotos,
      title: 'Photo Grouping',
      description: 'Automatically organize photos by events and people'
    },
    {
      icon: RiPhoneCameraFill,
      title: 'AR Filters',
      description: 'Enhance your memories with augmented reality'
    },
    {
      icon: TiCloudStorage,
      title: 'Secure Cloud',
      description: 'Your memories are safe with enterprise-grade security'
    }
  ];

  return (
    <section className=" py-8 lg:py-16  w-full relative lg:absolute lg:bottom-[-197px] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-blue-50 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <feature.icon className="h-10 w-10  fill-blue-600 text-blue-50" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;