import { useState } from 'react';
import { Link } from 'react-router-dom';

const EventsScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const categories = ['All', 'Cultural', 'Social', 'Technical', 'Youth'];

  const events = [
    {
      id: 1,
      title: "Mysuru Dasara Festival",
      date: "October 15-24, 2024",
      location: "Mysuru Palace & City",
      description: "The grand 10-day festival celebrating the victory of good over evil with processions, cultural programs, and illuminations.",
      category: "Cultural",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "Free",
      featured: true
    },
    {
      id: 2,
      title: "Classical Music Concert",
      date: "October 20, 2024",
      location: "Palace Durbar Hall",
      description: "Renowned classical musicians perform during the Dasara festivities in the royal palace setting.",
      category: "Cultural",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹500"
    },
    {
      id: 3,
      title: "Yoga International Day",
      date: "June 21, 2024",
      location: "Chamundi Hills",
      description: "Mass yoga session at sunrise with international practitioners and local enthusiasts.",
      category: "Social",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "Free"
    },
    {
      id: 4,
      title: "Tech Innovation Summit",
      date: "November 15, 2024",
      location: "JSS Science & Technology University",
      description: "Annual technology conference featuring startups, innovations, and networking opportunities.",
      category: "Technical",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹1200"
    },
    {
      id: 5,
      title: "Youth Cultural Fest",
      date: "December 5-7, 2024",
      location: "University of Mysore",
      description: "Three-day cultural extravaganza featuring dance, music, drama, and art competitions.",
      category: "Youth",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹300"
    },
    {
      id: 6,
      title: "Heritage Walk",
      date: "Every Sunday",
      location: "Starting from Palace",
      description: "Guided walking tour through the historic areas of Mysuru, exploring architecture and stories.",
      category: "Cultural",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹200"
    },
    {
      id: 7,
      title: "Food Festival",
      date: "January 12-14, 2025",
      location: "Exhibition Grounds",
      description: "Celebrate Mysuru's culinary heritage with local delicacies, cooking competitions, and food stalls.",
      category: "Social",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹150"
    },
    {
      id: 8,
      title: "Startup Pitch Competition",
      date: "February 20, 2025",
      location: "CFTRI Auditorium",
      description: "Young entrepreneurs showcase their innovative ideas to investors and mentors.",
      category: "Youth",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "Free"
    }
  ];

  const filteredEvents = selectedCategory === 'All' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  const handleRegister = (event) => {
    setSelectedEvent(event);
    setShowRegistrationForm(true);
  };

  const closeModal = () => {
    setShowRegistrationForm(false);
    setSelectedEvent(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-[120px] md:pt-[100px]">
      {/* Header */}
      <div className="bg-white shadow-lg fixed top-0 left-0 right-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center">
          <Link to="/" className="text-orange-600 hover:text-orange-700 mr-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="text-2xl font-bold text-gray-800">Events & Festivals</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Category Filter */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-orange-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-orange-50 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Event */}
        {selectedCategory === 'All' && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">🌟 Featured Event</h2>
            {events.filter(event => event.featured).map((event) => (
              <div key={event.id} className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-6 text-white">
                <div className="flex flex-col md:flex-row items-center">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full md:w-48 h-32 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                    <p className="text-white text-opacity-90 mb-2">{event.description}</p>
                    <div className="flex items-center text-sm mb-3">
                      <span className="mr-4">📅 {event.date}</span>
                      <span className="mr-4">📍 {event.location}</span>
                      <span>💰 {event.price}</span>
                    </div>
                    <button
                      onClick={() => handleRegister(event)}
                      className="bg-white text-orange-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredEvents.filter(event => !event.featured).map((event) => (
            <div key={event.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    event.category === 'Cultural' ? 'bg-purple-100 text-purple-800' :
                    event.category === 'Social' ? 'bg-blue-100 text-blue-800' :
                    event.category === 'Technical' ? 'bg-green-100 text-green-800' :
                    'bg-pink-100 text-pink-800'
                  }`}>
                    {event.category}
                  </span>
                  <span className="text-sm font-semibold text-orange-600">{event.price}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-2">📅</span>
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-2">📍</span>
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <button
                  onClick={() => handleRegister(event)}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg font-semibold transition-colors"
                >
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎭</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No events found</h3>
            <p className="text-gray-500">Try selecting a different category</p>
          </div>
        )}
      </div>

      {/* Registration Modal */}
      {showRegistrationForm && selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">Event Registration</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mb-4 p-4 bg-orange-50 rounded-lg">
                <h3 className="font-semibold text-orange-800">{selectedEvent.title}</h3>
                <p className="text-sm text-orange-600">{selectedEvent.date} • {selectedEvent.location}</p>
                <p className="text-sm text-orange-600 font-semibold">Price: {selectedEvent.price}</p>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Tickets
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                    <option value="1">1 Ticket</option>
                    <option value="2">2 Tickets</option>
                    <option value="3">3 Tickets</option>
                    <option value="4">4 Tickets</option>
                    <option value="5">5+ Tickets</option>
                  </select>
                </div>

                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-colors"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsScreen;