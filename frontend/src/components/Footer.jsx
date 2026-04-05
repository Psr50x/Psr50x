import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl font-serif text-white mb-2">
                Get our latest updates
              </h3>
              <p className="text-white/90">
                Subscribe Our Newsletter
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-6 py-3 rounded-l-md w-full md:w-80 focus:outline-none text-gray-900"
              />
              <button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-r-md font-semibold transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About */}
            <div>
              <h3 className="text-2xl font-serif text-amber-400 mb-4">
                RajasthanTripPlanner
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Your premier luxury travel agency specializing in Rajasthan tours. 
                Discover the royal heritage of India with our bespoke travel experiences.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">Home</Link>
                </li>
                <li>
                  <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">Destinations</Link>
                </li>
                <li>
                  <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">Tour Packages</Link>
                </li>
                <li>
                  <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">About Us</Link>
                </li>
                <li>
                  <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Popular Destinations */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Popular Destinations</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">Jaipur</Link>
                </li>
                <li>
                  <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">Udaipur</Link>
                </li>
                <li>
                  <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">Jodhpur</Link>
                </li>
                <li>
                  <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">Jaisalmer</Link>
                </li>
                <li>
                  <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">Delhi & Agra</Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-400">
                  <MapPin className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                  <span>Jaipur, Rajasthan, India</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>+91 12345 67890</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>info@rajasthantripplanner.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 RajasthanTripPlanner. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
