import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { tourPackages, contactInfo } from '../data/mockData';
import { Clock, MapPin, Users, Phone, MessageCircle, Calendar, ArrowLeft } from 'lucide-react';

const PackageDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const packageData = tourPackages.find(pkg => pkg.id === parseInt(id));

  if (!packageData) {
    // Redirect to contact if package not found
    navigate('/contact');
    return null;
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button 
          onClick={() => navigate('/')}
          className="flex items-center text-amber-600 hover:text-amber-700 mb-6 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div>
            <div className="rounded-lg overflow-hidden shadow-2xl h-96">
              <img 
                src={packageData.image}
                alt={packageData.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Details Section */}
          <div>
            <h1 className="text-4xl font-serif text-slate-900 mb-4">
              {packageData.title}
            </h1>
            
            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center text-amber-600">
                <Clock className="h-5 w-5 mr-2" />
                <span className="font-semibold">{packageData.duration}</span>
              </div>
              <div className="text-3xl font-bold text-amber-600">
                {packageData.price}
              </div>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {packageData.description}
            </p>

            {/* Package Highlights */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Package Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Comfortable accommodation in premium hotels</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Professional local guide throughout the tour</span>
                </li>
                <li className="flex items-start">
                  <Calendar className="h-5 w-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">All sightseeing and transfers included</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Visit to UNESCO World Heritage Sites</span>
                </li>
              </ul>
            </div>

            {/* Inclusions */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">What's Included</h3>
              <ul className="grid grid-cols-2 gap-3 text-gray-700">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span> Hotel Accommodation
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span> Daily Breakfast
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span> Private Transport
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span> Local Guide
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span> Entry Tickets
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span> Airport Transfers
                </li>
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`tel:${contactInfo.phone}`}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 rounded-md font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Call to Book
              </a>
              <a 
                href={`https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(contactInfo.whatsappMessage + ' - ' + packageData.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-md font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Enquiry
              </a>
            </div>
          </div>
        </div>

        {/* Detailed Itinerary */}
        <div className="mt-16">
          <h2 className="text-3xl font-serif text-slate-900 mb-8">Detailed Itinerary</h2>
          <div className="space-y-6">
            {getItinerary(packageData.id).map((day, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-amber-600 mb-2">
                  Day {day.day}: {day.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {day.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to get itinerary based on package
const getItinerary = (packageId) => {
  const itineraries = {
    1: [ // Golden Triangle
      { day: 1, title: 'Arrival in Delhi', description: 'Arrive at Delhi airport. Meet and greet by our representative. Transfer to hotel. Evening at leisure.' },
      { day: 2, title: 'Delhi Sightseeing', description: 'Full day sightseeing of Delhi including Red Fort, Jama Masjid, India Gate, Qutub Minar, and Lotus Temple.' },
      { day: 3, title: 'Delhi to Agra', description: 'Drive to Agra. Visit Taj Mahal at sunset, Agra Fort, and Mehtab Bagh.' },
      { day: 4, title: 'Agra to Jaipur', description: 'Drive to Jaipur via Fatehpur Sikri. Visit the magnificent abandoned Mughal city.' },
      { day: 5, title: 'Jaipur Sightseeing', description: 'Explore Amber Fort, City Palace, Jantar Mantar, Hawa Mahal, and local bazaars.' },
      { day: 6, title: 'Departure', description: 'Transfer to Jaipur airport for your onward journey.' }
    ],
    2: [ // Royal Rajasthan Heritage
      { day: 1, title: 'Arrival in Jaipur', description: 'Arrive and check into your heritage hotel.' },
      { day: 2, title: 'Jaipur Exploration', description: 'Visit Amber Fort, City Palace, and Hawa Mahal.' },
      { day: 3, title: 'Jaipur to Jodhpur', description: 'Drive to the Blue City, visit Mehrangarh Fort.' },
      { day: 4, title: 'Jodhpur Sightseeing', description: 'Explore Umaid Bhawan Palace and local markets.' },
      { day: 5, title: 'Jodhpur to Udaipur', description: 'Scenic drive through Aravalli hills.' },
      { day: 6, title: 'Udaipur - City of Lakes', description: 'Boat ride on Lake Pichola, visit City Palace.' },
      { day: 7, title: 'Udaipur Exploration', description: 'Visit Jagdish Temple, Saheliyon ki Bari.' },
      { day: 8, title: 'Udaipur to Pushkar', description: 'Drive to the sacred city of Pushkar.' },
      { day: 9, title: 'Pushkar to Jaipur', description: 'Visit Brahma Temple, return to Jaipur.' },
      { day: 10, title: 'Departure', description: 'Transfer to airport for departure.' }
    ],
    3: [ // Desert Safari
      { day: 1, title: 'Arrival in Jaisalmer', description: 'Welcome to the Golden City.' },
      { day: 2, title: 'Jaisalmer Fort', description: 'Explore the living fort and havelis.' },
      { day: 3, title: 'Desert Safari', description: 'Camel ride to Sam Sand Dunes, overnight camping.' },
      { day: 4, title: 'Desert Experience', description: 'Cultural programs, traditional Rajasthani cuisine.' },
      { day: 5, title: 'Jaisalmer to Jodhpur', description: 'Drive to Jodhpur, visit Mehrangarh Fort.' },
      { day: 6, title: 'Jodhpur Exploration', description: 'Clock Tower, local markets.' },
      { day: 7, title: 'Departure', description: 'Transfer to airport.' }
    ],
    4: [ // Spiritual Rajasthan
      { day: 1, title: 'Arrival in Jaipur', description: 'Arrive and visit Birla Temple.' },
      { day: 2, title: 'Jaipur Temples', description: 'Visit Govind Dev Ji Temple, Galta Ji.' },
      { day: 3, title: 'Jaipur to Pushkar', description: 'Drive to sacred Pushkar.' },
      { day: 4, title: 'Pushkar Rituals', description: 'Morning aarti at Pushkar Lake, Brahma Temple.' },
      { day: 5, title: 'Pushkar to Ajmer', description: 'Visit Ajmer Sharif Dargah.' },
      { day: 6, title: 'Ajmer to Udaipur', description: 'Drive to Udaipur, visit Jagdish Temple.' },
      { day: 7, title: 'Udaipur Temples', description: 'Eklingji, Nagda Temples.' },
      { day: 8, title: 'Departure', description: 'Transfer to airport.' }
    ],
    5: [ // Forts & Palaces
      { day: 1, title: 'Arrival in Delhi', description: 'Visit Red Fort, Humayun Tomb.' },
      { day: 2, title: 'Delhi to Agra', description: 'Visit Agra Fort, Taj Mahal.' },
      { day: 3, title: 'Agra to Jaipur', description: 'Fatehpur Sikri en route.' },
      { day: 4, title: 'Jaipur - Amber Fort', description: 'Elephant ride, fort exploration.' },
      { day: 5, title: 'Jaipur Palaces', description: 'City Palace, Hawa Mahal, Jal Mahal.' },
      { day: 6, title: 'Jaipur to Jodhpur', description: 'Drive to Jodhpur.' },
      { day: 7, title: 'Mehrangarh Fort', description: 'One of India\'s largest forts.' },
      { day: 8, title: 'Jodhpur to Udaipur', description: 'Ranakpur Jain Temple en route.' },
      { day: 9, title: 'Udaipur City Palace', description: 'Explore the grand palace complex.' },
      { day: 10, title: 'Lake Palace', description: 'Boat ride, palace viewing.' },
      { day: 11, title: 'Chittorgarh Fort', description: 'Day trip to historic Chittorgarh.' },
      { day: 12, title: 'Departure', description: 'Transfer to airport.' }
    ],
    6: [ // Lakes & Culture
      { day: 1, title: 'Arrival in Udaipur', description: 'City of Lakes welcome.' },
      { day: 2, title: 'Lake Pichola', description: 'Boat ride, City Palace visit.' },
      { day: 3, title: 'Udaipur Culture', description: 'Local markets, cultural show.' },
      { day: 4, title: 'Udaipur to Mount Abu', description: 'Drive to Rajasthan\'s only hill station.' },
      { day: 5, title: 'Mount Abu', description: 'Dilwara Temples, Nakki Lake.' },
      { day: 6, title: 'Mount Abu Exploration', description: 'Sunset Point, Guru Shikhar.' },
      { day: 7, title: 'Mount Abu to Udaipur', description: 'Return journey.' },
      { day: 8, title: 'Udaipur at Leisure', description: 'Shopping, relaxation.' },
      { day: 9, title: 'Departure', description: 'Transfer to airport.' }
    ]
  };

  return itineraries[packageId] || itineraries[1];
};

export default PackageDetail;
