import { useState } from 'react'
import { Link } from 'react-router-dom'

const HotelsFoodScreen = () => {
  const [activeTab, setActiveTab] = useState('hotels')
  const [selectedFilter, setSelectedFilter] = useState('all')

  const hotels = [
    {
      id: 1,
      name: "Lalitha Mahal Palace Hotel",
      category: "luxury",
      location: "Nazarbad, Mysuru",
      priceRange: "₹8,000 - ₹15,000",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      amenities: ["Heritage Property", "Spa", "Fine Dining", "Palace Views"],
      review: "Magnificent heritage palace hotel with royal ambiance"
    },
    {
      id: 2,
      name: "Radisson Blu Plaza Hotel",
      category: "luxury",
      location: "Nazarbad Main Road",
      priceRange: "₹6,000 - ₹12,000",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      amenities: ["Pool", "Gym", "Business Center", "Multiple Restaurants"],
      review: "Modern luxury hotel with excellent facilities"
    },
    {
      id: 3,
      name: "Royal Orchid Metropole",
      category: "mid",
      location: "Jhansi Lakshmibai Road",
      priceRange: "₹4,000 - ₹8,000",
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      amenities: ["Heritage Building", "Garden", "Restaurant", "WiFi"],
      review: "Charming heritage hotel with colonial architecture"
    },
    {
      id: 4,
      name: "Hotel Mayura Hoysala",
      category: "budget",
      location: "Jhansi Lakshmibai Road",
      priceRange: "₹2,000 - ₹4,000",
      rating: 4.0,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      amenities: ["Restaurant", "Room Service", "Parking", "AC"],
      review: "Government-run hotel offering good value for money"
    },
    {
      id: 5,
      name: "Treebo Trend Royale Residency",
      category: "mid",
      location: "Hunsur Road",
      priceRange: "₹3,000 - ₹6,000",
      rating: 4.2,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      amenities: ["Modern Rooms", "Breakfast", "WiFi", "24/7 Service"],
      review: "Contemporary hotel with reliable service"
    },
    {
      id: 6,
      name: "Zostel Mysuru",
      category: "budget",
      location: "Gokulam",
      priceRange: "₹800 - ₹2,500",
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      amenities: ["Hostel", "Common Areas", "Cafe", "Backpacker Friendly"],
      review: "Vibrant hostel perfect for young travelers and backpackers"
    }
  ]

  const restaurants = [
    {
      id: 1,
      name: "RRR Restaurant",
      category: "veg",
      location: "Gandhi Square",
      priceRange: "₹200 - ₹400",
      rating: 4.7,
      cuisine: "South Indian Thali",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      specialties: ["Mysuru Thali", "Filter Coffee", "Traditional Sweets"],
      review: "Authentic South Indian meals in traditional setting"
    },
    {
      id: 2,
      name: "Guru Sweet Mart",
      category: "local",
      location: "Sayyaji Rao Road",
      priceRange: "₹100 - ₹300",
      rating: 4.8,
      cuisine: "Sweets & Snacks",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      specialties: ["Mysuru Pak", "Ghee Roast", "Traditional Sweets"],
      review: "Famous for authentic Mysuru Pak and local delicacies"
    },
    {
      id: 3,
      name: "Depth N Green",
      category: "veg",
      location: "Gokulam",
      priceRange: "₹300 - ₹600",
      rating: 4.5,
      cuisine: "Multi-cuisine Vegetarian",
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      specialties: ["North Indian", "Chinese", "Continental"],
      review: "Upscale vegetarian restaurant with diverse menu"
    },
    {
      id: 4,
      name: "The Old House",
      category: "nonveg",
      location: "Nazarbad",
      priceRange: "₹400 - ₹800",
      rating: 4.4,
      cuisine: "Continental & Indian",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      specialties: ["Steaks", "Pasta", "Indian Curries"],
      review: "Cozy restaurant in heritage building with great ambiance"
    },
    {
      id: 5,
      name: "Devaraja Market Food Street",
      category: "local",
      location: "Devaraja Market",
      priceRange: "₹50 - ₹200",
      rating: 4.6,
      cuisine: "Street Food",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      specialties: ["Dosa", "Chaat", "Fresh Juices", "Local Snacks"],
      review: "Authentic street food experience in bustling market"
    },
    {
      id: 6,
      name: "Vinayaka Mylari",
      category: "veg",
      location: "Nazarbad",
      priceRange: "₹80 - ₹200",
      rating: 4.9,
      cuisine: "South Indian Breakfast",
      image: "https://images.unsplash.com/photo-1630383249896-424e482df921?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      specialties: ["Soft Dosa", "Idli", "Vada", "Chutney"],
      review: "Legendary breakfast spot famous for soft dosas"
    }
  ]

  const getFilteredData = () => {
    const data = activeTab === 'hotels' ? hotels : restaurants
    if (selectedFilter === 'all') return data
    return data.filter(item => item.category === selectedFilter)
  }

  const getFilterOptions = () => {
    if (activeTab === 'hotels') {
      return [
        { value: 'all', label: 'All Hotels' },
        { value: 'budget', label: 'Budget' },
        { value: 'mid', label: 'Mid-range' },
        { value: 'luxury', label: 'Luxury' }
      ]
    } else {
      return [
        { value: 'all', label: 'All Restaurants' },
        { value: 'veg', label: 'Vegetarian' },
        { value: 'nonveg', label: 'Non-Vegetarian' },
        { value: 'local', label: 'Local Food Streets' }
      ]
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center">
          <Link to="/" className="text-orange-600 hover:text-orange-700 mr-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="text-2xl font-bold text-gray-800">Hotels & Food</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Tab Navigation */}
        <div className="flex bg-white rounded-lg p-1 mb-6 shadow-sm">
          <button
            onClick={() => {
              setActiveTab('hotels')
              setSelectedFilter('all')
            }}
            className={`flex-1 py-3 px-4 rounded-md font-semibold transition-colors ${
              activeTab === 'hotels'
                ? 'bg-orange-600 text-white'
                : 'text-gray-600 hover:text-orange-600'
            }`}
          >
            🏨 Hotels
          </button>
          <button
            onClick={() => {
              setActiveTab('restaurants')
              setSelectedFilter('all')
            }}
            className={`flex-1 py-3 px-4 rounded-md font-semibold transition-colors ${
              activeTab === 'restaurants'
                ? 'bg-orange-600 text-white'
                : 'text-gray-600 hover:text-orange-600'
            }`}
          >
            🍽️ Restaurants
          </button>
        </div>

        {/* Filter Options */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {getFilterOptions().map((filter) => (
              <button
                key={filter.value}
                onClick={() => setSelectedFilter(filter.value)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedFilter === filter.value
                    ? 'bg-orange-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-orange-50 border border-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {getFilteredData().map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                  <div className="flex items-center bg-green-100 px-2 py-1 rounded-full">
                    <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-medium text-green-800">{item.rating}</span>
                  </div>
                </div>

                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {item.location}
                </div>

                {activeTab === 'restaurants' && (
                  <div className="text-sm text-orange-600 font-medium mb-2">
                    {item.cuisine}
                  </div>
                )}

                <p className="text-gray-600 text-sm mb-4">{item.review}</p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {(activeTab === 'hotels' ? item.amenities : item.specialties).map((feature, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-orange-600">
                    {item.priceRange}
                  </span>
                  <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                    {activeTab === 'hotels' ? 'Book Now' : 'View Menu'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {getFilteredData().length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">{activeTab === 'hotels' ? '🏨' : '🍽️'}</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No {activeTab} found</h3>
            <p className="text-gray-500">Try selecting a different filter</p>
          </div>
        )}

        {/* Quick Tips */}
        <div className="mt-8 bg-orange-50 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-orange-800 mb-3">
            💡 {activeTab === 'hotels' ? 'Booking Tips' : 'Dining Tips'}
          </h3>
          <ul className="space-y-2 text-orange-700">
            {activeTab === 'hotels' ? (
              <>
                <li>• Book in advance during Dasara festival (October)</li>
                <li>• Heritage hotels offer unique royal experience</li>
                <li>• Check for package deals including meals</li>
                <li>• Most hotels are within 5km of major attractions</li>
              </>
            ) : (
              <>
                <li>• Try authentic Mysuru Pak from Guru Sweet Mart</li>
                <li>• South Indian breakfast is best before 10 AM</li>
                <li>• Street food is safe and delicious in market areas</li>
                <li>• Most restaurants close by 10:30 PM</li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HotelsFoodScreen
