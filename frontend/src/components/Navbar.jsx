import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { contactInfo } from '../data/mockData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const handlePlanTrip = () => {
    window.open(
      `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent('Hello! I would like to plan a Rajasthan tour. Please help me with the details.')}`,
      '_blank'
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-serif text-amber-500">
              Rajasthan<span className="text-white">TripPlan</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-amber-500 transition-colors font-medium">
              HOME
            </Link>
            <button 
              onClick={() => scrollToSection('tour-packages')}
              className="text-white hover:text-amber-500 transition-colors font-medium"
            >
              DESTINATIONS
            </button>
            <button 
              onClick={() => scrollToSection('tour-packages')}
              className="text-white hover:text-amber-500 transition-colors font-medium"
            >
              TOURS
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-white hover:text-amber-500 transition-colors font-medium"
            >
              REVIEWS
            </button>
            <Link to="/contact" className="text-white hover:text-amber-500 transition-colors font-medium">
              CONTACT
            </Link>
            <button 
              onClick={handlePlanTrip}
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-md font-medium transition-all duration-300 hover:shadow-lg"
            >
              PLAN YOUR TRIP
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-amber-500 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-slate-800">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <Link to="/" className="block text-white hover:text-amber-500 transition-colors py-2" onClick={() => setIsOpen(false)}>
              HOME
            </Link>
            <button 
              onClick={() => scrollToSection('tour-packages')}
              className="block w-full text-left text-white hover:text-amber-500 transition-colors py-2"
            >
              DESTINATIONS
            </button>
            <button 
              onClick={() => scrollToSection('tour-packages')}
              className="block w-full text-left text-white hover:text-amber-500 transition-colors py-2"
            >
              TOURS
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left text-white hover:text-amber-500 transition-colors py-2"
            >
              REVIEWS
            </button>
            <Link to="/contact" className="block text-white hover:text-amber-500 transition-colors py-2" onClick={() => setIsOpen(false)}>
              CONTACT
            </Link>
            <button 
              onClick={() => { handlePlanTrip(); setIsOpen(false); }}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-md font-medium transition-colors mt-2"
            >
              PLAN YOUR TRIP
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
