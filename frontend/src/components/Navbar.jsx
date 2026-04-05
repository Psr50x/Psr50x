import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-serif text-amber-500">
              Rajasthan<span className="text-white">TripPlanner</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-amber-500 transition-colors font-medium">
              HOME
            </Link>
            <div className="relative group">
              <button className="text-white hover:text-amber-500 transition-colors font-medium flex items-center">
                DESTINATIONS <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="text-white hover:text-amber-500 transition-colors font-medium flex items-center">
                TOURS <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <Link to="/" className="text-white hover:text-amber-500 transition-colors font-medium">
              REVIEWS
            </Link>
            <Link to="/" className="text-white hover:text-amber-500 transition-colors font-medium">
              CONTACT
            </Link>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-md font-medium transition-all duration-300 hover:shadow-lg">
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
            <Link to="/" className="block text-white hover:text-amber-500 transition-colors py-2">
              HOME
            </Link>
            <Link to="/" className="block text-white hover:text-amber-500 transition-colors py-2">
              DESTINATIONS
            </Link>
            <Link to="/" className="block text-white hover:text-amber-500 transition-colors py-2">
              TOURS
            </Link>
            <Link to="/" className="block text-white hover:text-amber-500 transition-colors py-2">
              REVIEWS
            </Link>
            <Link to="/" className="block text-white hover:text-amber-500 transition-colors py-2">
              CONTACT
            </Link>
            <button className="w-full bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-md font-medium transition-colors mt-2">
              PLAN YOUR TRIP
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
