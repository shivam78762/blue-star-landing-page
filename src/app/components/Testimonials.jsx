'use client'
import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Henry D.',
      image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'Great way to relive amazing moments. The photo quality was fantastic and ordering a custom mug was a breeze.',
      rating: 5,
      role: 'Photographer'
    },
    {
      name: 'Katherine S.',
      image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'Absolutely love the experience! Found all my pictures easily and the t-shirt I ordered turned out perfectly.',
      rating: 5,
      role: 'Graphic Designer'
    },
    {
      name: 'Michael R.',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'The customization options are incredible. My canvas print looks amazing on my wall!',
      rating: 4,
      role: 'Art Director'
    },
    {
      name: 'Sarah L.',
      image: 'https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'Fast delivery and excellent customer service. My photo book is a cherished keepsake.',
      rating: 5,
      role: 'Teacher'
    },
    {
      name: 'James T.',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'The quality of the prints exceeded my expectations. Will definitely order again!',
      rating: 4,
      role: 'Marketing Manager'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Determine cards to show based on screen size
  const getCardsToShow = () => {
    if (typeof window === 'undefined') return 1; // Default for SSR
    if (window.innerWidth >= 1024) return 3; // lg: 3 cards
    if (window.innerWidth >= 768) return 2; // md: 2 cards
    return 1; // sm: 1 card
  };

  const [cardsToShow, setCardsToShow] = useState(getCardsToShow());

  // Update cards to show on resize
  useEffect(() => {
    const handleResize = () => {
      setCardsToShow(getCardsToShow());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= testimonials.length - cardsToShow ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [testimonials.length, cardsToShow]);

  // Manual navigation
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - cardsToShow : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= testimonials.length - cardsToShow ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight">
            Our Customers Love Us
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust us for their printing needs
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex py-10 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className={`flex-shrink-0 px-2 sm:px-3 lg:px-4 w-full sm:w-1/2 lg:w-1/3`}
                >
                  <div className="bg-white rounded-2xl p-5 sm:p-6 lg:p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full object-cover flex-shrink-0 border-2 border-indigo-200 shadow-sm"
                      />
                      <div className="flex-1">
                        <div className="flex items-center mb-2 sm:mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base lg:text-base italic">
                          "{testimonial.text}"
                        </p>
                        <div>
                          <p className="font-semibold text-gray-900 text-base sm:text-lg">{testimonial.name}</p>
                          <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-indigo-600 p-2 sm:p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors text-white hidden sm:block"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-indigo-600 p-2 sm:p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors text-white hidden sm:block"
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {[...Array(Math.ceil(testimonials.length - cardsToShow + 1))].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial set ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;