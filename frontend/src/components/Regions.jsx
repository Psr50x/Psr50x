import React from 'react';
import { regions } from '../data/mockData';

const Regions = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">
            Introducing Rajasthan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore Rajasthan with RajasthanTripPlanner
          </p>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-4"></div>
        </div>

        <div className="space-y-16">
          {regions.map((region, index) => (
            <div 
              key={region.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl group">
                  <img 
                    src={region.image}
                    alt={region.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="text-sm tracking-widest text-amber-600 uppercase mb-2">
                  {region.name}
                </h3>
                <h4 className="text-3xl font-serif text-slate-900 mb-4">
                  {region.title}
                </h4>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {region.description}
                </p>
                <button className="text-amber-600 hover:text-amber-700 font-semibold flex items-center group transition-colors">
                  Learn More 
                  <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Regions;
