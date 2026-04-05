import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">
            Unveiling Rajasthan's Splendors with Luxury and Elegance
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-serif text-slate-900 mb-6">
              Discover Rajasthan in Luxury
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Rajasthan, the "Land of Kings," is a realm of vibrant colors and captivating diversity. 
                As premier tour operators specializing in Rajasthan, we curate unparalleled experiences 
                that unveil the mesmerizing allure of this legendary region.
              </p>
              <p>
                Our expertise ensures you encounter the most extraordinary facets of Rajasthan, Delhi, 
                and Agra. From the iconic Taj Mahal to the majestic forts of Rajasthan, from vibrant 
                bazaars to serene desert landscapes - discover the wonders that await.
              </p>
              <p>
                The splendid palaces, forts, and monuments stand as testaments to the grandeur of past 
                dynasties, weaving together an awe-inspiring narrative of royal heritage. Experience the 
                warmth of Rajasthani hospitality, savor authentic cuisine, and immerse yourself in 
                timeless traditions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="h-64 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1651516725197-9ed18b572abe?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxSYWphc3RoYW4lMjBmb3J0fGVufDB8fHx8MTc3NTQwMTcxOHww&ixlib=rb-4.1.0&q=85"
                alt="Rajasthan Fort"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-64 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 mt-8">
              <img 
                src="https://images.pexels.com/photos/925069/pexels-photo-925069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Jaipur Palace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-64 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 -mt-8">
              <img 
                src="https://images.pexels.com/photos/570031/pexels-photo-570031.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Udaipur Lake"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-64 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1548013146-72479768bada?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwxfHxJbmRpYSUyMHRyYXZlbHxlbnwwfHx8fDE3NzU0MDE3MjJ8MA&ixlib=rb-4.1.0&q=85"
                alt="Taj Mahal"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
