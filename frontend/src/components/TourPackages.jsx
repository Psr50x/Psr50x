import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { tourPackages, contactInfo } from '../data/mockData';
import { ChevronLeft, ChevronRight, Clock, Phone, MessageCircle } from 'lucide-react';

const TourPackages = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerView >= tourPackages.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(tourPackages.length - itemsPerView, 0) : prev - 1
    );
  };

  return (
    <section id="tour-packages" className="py-20 bg-slate-50">\n      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-amber-600 text-sm tracking-widest uppercase mb-2">Explore with us</p>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">
            Top Selling Tours
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-4"></div>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white hover:bg-amber-600 text-slate-900 hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 group"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white hover:bg-amber-600 text-slate-900 hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 group"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Tours Grid */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {tourPackages.map((tour) => (
                <div 
                  key={tour.id}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div 
                      className="relative h-64 overflow-hidden cursor-pointer"
                      onClick={() => navigate(`/package/${tour.id}`)}
                    >
                      <img 
                        src={tour.image}
                        alt={tour.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 right-4 bg-amber-600 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                        {tour.price}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 
                        className="text-2xl font-serif text-slate-900 mb-2 cursor-pointer hover:text-amber-600 transition-colors"
                        onClick={() => navigate(`/package/${tour.id}`)}
                      >
                        {tour.title}
                      </h3>
                      <div className="flex items-center text-amber-600 mb-3">
                        <Clock className="h-4 w-4 mr-2" />
                        <span className="text-sm font-semibold">{tour.duration}</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                        {tour.description}
                      </p>
                      <button 
                        onClick={() => navigate(`/package/${tour.id}`)}
                        className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-md font-semibold transition-all duration-300 hover:shadow-lg mb-3"
                      >
                        View Details
                      </button>
                      <div className="flex gap-2">
                        <a 
                          href={`tel:${contactInfo.phone}`}
                          className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-1 text-sm"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Phone className="h-4 w-4" />
                          Call
                        </a>
                        <a 
                          href={`https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(contactInfo.whatsappMessage + ' - ' + tour.title)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-md font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-1 text-sm"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <MessageCircle className="h-4 w-4" />
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourPackages;
