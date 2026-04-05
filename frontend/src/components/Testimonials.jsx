import React, { useState } from 'react';
import { testimonials } from '../data/mockData';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1637584498138-1f7122e48082?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxSYWphc3RoYW4lMjBwYWxhY2V8ZW58MHx8fHwxNzc1NDAxNzE0fDA&ixlib=rb-4.1.0&q=85')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm tracking-widest uppercase mb-2">Real stories, real smiles</p>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Hear From Our Happy Travellers
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-4"></div>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-white/10 hover:bg-amber-600 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-white/10 hover:bg-amber-600 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Testimonial Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20">
            <Quote className="h-12 w-12 text-amber-400 mb-6" />
            
            <div className="flex items-center justify-center mb-4">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
              ))}
            </div>

            <p className="text-white text-xl leading-relaxed mb-8 italic text-center">
              "{currentTestimonial.text}"
            </p>

            <div className="flex items-center justify-center space-x-4">
              <img 
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="w-16 h-16 rounded-full border-2 border-amber-400"
              />
              <div className="text-left">
                <h4 className="text-white font-semibold text-lg">
                  {currentTestimonial.name}
                </h4>
                <p className="text-amber-400 text-sm">
                  {currentTestimonial.country}
                </p>
                <p className="text-gray-300 text-sm">
                  {currentTestimonial.tourTitle}
                </p>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-amber-600' : 'w-2 bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
