import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { contactInfo } from '../data/mockData';

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1637584498138-1f7122e48082?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxSYWphc3RoYW4lMjBwYWxhY2V8ZW58MHx8fHwxNzc1NDAxNzE0fDA&ixlib=rb-4.1.0&q=85')`
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
        <div className="max-w-4xl">
          <p className="text-amber-400 text-sm md:text-base tracking-widest uppercase mb-4 animate-fade-in">
            Where History, Spice, and Elegance Merge
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 animate-fade-in-up">
            BOOK YOUR <span className="text-amber-400">RAJASTHAN</span> TOUR
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Discover the Royal Heritage of Rajasthan, Delhi & Agra with our Luxury Travel Experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a 
              href={`tel:${contactInfo.phone}`}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              Call for Enquiry
            </a>
            <a 
              href={`https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Enquiry
            </a>
          </div>
        </div>

        {/* Search Bar */}
        <div className="absolute bottom-8 left-0 right-0 max-w-4xl mx-auto px-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <select className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500">
                  <option>Duration</option>
                  <option>1-7 Days</option>
                  <option>8-15 Days</option>
                  <option>16+ Days</option>
                </select>
              </div>
              <div className="relative">
                <select className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500">
                  <option>Experiences</option>
                  <option>Heritage & Culture</option>
                  <option>Desert Safari</option>
                  <option>Spiritual</option>
                  <option>Adventure</option>
                </select>
              </div>
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:shadow-lg">
                SEARCH
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
