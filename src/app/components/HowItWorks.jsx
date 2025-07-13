import React from 'react';
import { Upload, Eye, Download, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: Upload,
      title: 'Upload',
      subtitle: 'a Selfie',
      description: 'Simply upload a selfie to get started with our advanced face recognition technology.'
    },
    {
      number: 2,
      icon: Eye,
      title: 'View',
      subtitle: 'Your Photos',
      description: 'Browse through all the photos where you appear, organized and grouped automatically.'
    },
    {
      number: 3,
      icon: Download,
      title: 'Download or',
      subtitle: 'Order Merchandise',
      description: 'Download your photos or order custom merchandise with your favorite memories.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 mt-5 lg:mt-[120px] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center lg:text-left mb-16">
          How It Works
        </h2>
        
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-8">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="flex-1 text-center group">
                <div className="relative mb-6">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:bg-blue-700 transition-colors duration-300">
                    {step.number}
                  </div>
                  <div className="bg-blue-50 rounded-2xl p-6 group-hover:bg-blue-100 transition-colors duration-300">
                    <step.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{step.title}</h3>
                <h4 className="text-lg text-blue-600 font-semibold mb-3">{step.subtitle}</h4>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block">
                  <ArrowRight className="h-8 w-8 text-gray-300" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;