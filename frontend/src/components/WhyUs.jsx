import React from 'react';
import { whyUsFeatures } from '../data/mockData';
import { Settings, Award, Users, Shield } from 'lucide-react';

const iconMap = {
  Settings: Settings,
  Award: Award,
  Users: Users,
  Shield: Shield
};

const WhyUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-amber-600 text-sm tracking-widest uppercase mb-2">Why Us</p>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">
            Because We Care!
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyUsFeatures.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <div 
                key={index}
                className="group text-center p-6 rounded-lg hover:bg-gradient-to-br hover:from-amber-50 hover:to-orange-50 transition-all duration-300 hover:shadow-xl"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4 group-hover:bg-amber-600 transition-colors duration-300">
                  <Icon className="h-8 w-8 text-amber-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-12 text-center shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Reach out to our Local Experts
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Plan Your Bespoke Journey with Us. Fill in your details and one of our destination experts will get in touch with you.
          </p>
          <button className="bg-white hover:bg-gray-100 text-amber-600 px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300 hover:shadow-lg">
            Customize Your Trip
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
