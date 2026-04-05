import React from 'react';
import { destinations } from '../data/mockData';

const Destinations = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-amber-600 text-sm tracking-widest uppercase mb-2">Where Can We Take You?</p>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">
            Places You Have Always Wanted to Explore!
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-4"></div>
          <p className="text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed">
            Rajasthan is a land of diversity and royal heritage. From the golden deserts of Jaisalmer to 
            the serene lakes of Udaipur, from majestic forts to vibrant bazaars - there is something for everyone!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {destinations.map((destination) => (
            <div 
              key={destination.id}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-80">
                <img 
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-serif mb-1">{destination.name}</h3>
                  <p className="text-sm text-amber-400 mb-2">{destination.subtitle}</p>
                  <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {destination.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="text-amber-600 hover:text-amber-700 font-semibold text-lg border-2 border-amber-600 hover:border-amber-700 px-8 py-3 rounded-md transition-all duration-300 hover:bg-amber-50">
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
