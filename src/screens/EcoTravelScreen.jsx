import { useState } from 'react'
import { Link } from 'react-router-dom'

const EcoTravelScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('transport')

  const ecoTransport = [
    {
      type: "City Bus",
      icon: "🚌",
      description: "KSRTC city buses connect all major attractions",
      benefits: ["Low carbon footprint", "Affordable", "Frequent service"],
      cost: "₹8-15 per ride",
      tips: "Use Chalo app for live bus tracking"
    },
    {
      type: "Bicycle Rental",
      icon: "🚲",
      description: "Explore the city at your own pace",
      benefits: ["Zero emissions", "Health benefits", "Traffic-free routes"],
      cost: "₹50-100 per day",
      tips: "Available near Mysuru Palace and major hotels"
    },
    {
      type: "Walking Tours",
      icon: "🚶‍♂️",
      description: "Guided heritage walks through old Mysuru",
      benefits: ["Carbon neutral", "Cultural immersion", "Exercise"],
      cost: "₹200-500 per person",
      tips: "Best in early morning or evening"
    },
    {
      type: "Electric Auto",
      icon: "⚡",
      description: "Eco-friendly three-wheelers for short distances",
      benefits: ["Electric powered", "Quiet operation", "Local support"],
      cost: "₹10-20 per km",
      tips: "Look for green-colored autos"
    }
  ]

  const ecoAccommodation = [
    {
      name: "Green Valley Resort",
      type: "Eco Resort",
      icon: "🌿",
      features: ["Solar power", "Rainwater harvesting", "Organic garden", "Waste management"],
      location: "Outskirts of Mysuru",
      rating: 4.5,
      description: "Sustainable resort with minimal environmental impact"
    },
    {
      name: "Heritage Homestays",
      type: "Traditional Homes",
      icon: "🏠",
      features: ["Local families", "Traditional architecture", "Home-cooked meals", "Cultural exchange"],
      location: "Various neighborhoods",
      rating: 4.3,
      description: "Stay with local families in traditional houses"
    },
    {
      name: "Eco-Friendly Hotels",
      type: "Green Hotels",
      icon: "🏨",
      features: ["Energy efficient", "Water conservation", "Local sourcing", "Minimal plastic"],
      location: "City center",
      rating: 4.2,
      description: "Hotels with certified green practices"
    }
  ]

  const sustainableActivities = [
    {
      activity: "Organic Farm Visits",
      icon: "🌱",
      description: "Visit organic farms around Mysuru and learn sustainable farming",
      impact: "Support local organic farmers",
      duration: "Half day",
      cost: "₹300-500"
    },
    {
      activity: "Waste-to-Art Workshops",
      icon: "♻️",
      description: "Create art from recycled materials with local artisans",
      impact: "Reduce waste, support artisans",
      duration: "2-3 hours",
      cost: "₹200-400"
    },
    {
      activity: "Tree Plantation Drives",
      icon: "🌳",
      description: "Join community tree planting initiatives",
      impact: "Carbon offset, environmental restoration",
      duration: "2-4 hours",
      cost: "Free-₹100"
    },
    {
      activity: "Traditional Craft Learning",
      icon: "🎨",
      description: "Learn silk weaving, sandalwood carving, or pottery",
      impact: "Preserve traditional skills",
      duration: "Half to full day",
      cost: "₹500-1500"
    },
    {
      activity: "Bird Watching",
      icon: "🦅",
      description: "Explore Ranganathittu Bird Sanctuary sustainably",
      impact: "Wildlife conservation awareness",
      duration: "3-4 hours",
      cost: "₹150-300"
    },
    {
      activity: "Yoga & Meditation",
      icon: "🧘‍♀️",
      description: "Practice yoga in natural settings",
      impact: "Mental wellness, minimal footprint",
      duration: "1-2 hours",
      cost: "₹200-600"
    }
  ]

  const ecoTips = [
    {
      category: "Reduce Plastic",
      icon: "🚫",
      tips: [
        "Carry reusable water bottles",
        "Use cloth bags for shopping",
        "Avoid single-use plastic items",
        "Choose restaurants that don't use plastic packaging"
      ]
    },
    {
      category: "Water Conservation",
      icon: "💧",
      tips: [
        "Take shorter showers",
        "Reuse towels in hotels",
        "Report water leaks",
        "Choose accommodations with water-saving practices"
      ]
    },
    {
      category: "Energy Saving",
      icon: "💡",
      tips: [
        "Turn off lights and AC when leaving rooms",
        "Use natural light during daytime",
        "Unplug electronics when not in use",
        "Choose energy-efficient accommodations"
      ]
    },
    {
      category: "Local Support",
      icon: "🤝",
      tips: [
        "Buy from local artisans and markets",
        "Eat at locally-owned restaurants",
        "Hire local guides",
        "Choose locally-sourced products"
      ]
    }
  ]

  const carbonOffset = [
    {
      activity: "Plant Trees",
      description: "Offset your travel carbon footprint by planting native trees",
      cost: "₹50 per tree",
      impact: "1 tree absorbs ~22kg CO2 annually",
      location: "Chamundi Hills area"
    },
    {
      activity: "Solar Project Support",
      description: "Contribute to rural solar electrification projects",
      cost: "₹500-2000",
      impact: "Powers rural homes with clean energy",
      location: "Villages around Mysuru"
    },
    {
      activity: "Waste Management",
      description: "Support waste segregation and recycling initiatives",
      cost: "₹200-500",
      impact: "Reduces landfill waste",
      location: "City-wide programs"
    }
  ]

  const renderContent = () => {
    switch (selectedCategory) {
      case 'transport':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ecoTransport.map((transport, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-3xl">{transport.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800">{transport.type}</h3>
                </div>
                <p className="text-gray-600 mb-4">{transport.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-green-700 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {transport.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-green-600">{transport.cost}</span>
                  <span className="text-sm text-gray-500">{transport.tips}</span>
                </div>
              </div>
            ))}
          </div>
        )

      case 'accommodation':
        return (
          <div className="space-y-6">
            {ecoAccommodation.map((place, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{place.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{place.name}</h3>
                      <p className="text-green-600 font-medium">{place.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center bg-green-100 px-2 py-1 rounded-full">
                    <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-medium text-green-800">{place.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{place.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {place.features.map((feature, i) => (
                    <span key={i} className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="text-sm text-gray-500">📍 {place.location}</div>
              </div>
            ))}
          </div>
        )

      case 'activities':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sustainableActivities.map((activity, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="text-3xl">{activity.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800">{activity.activity}</h3>
                </div>
                <p className="text-gray-600 mb-3">{activity.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Impact:</span>
                    <span className="text-green-600 font-medium">{activity.impact}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Duration:</span>
                    <span className="text-gray-700">{activity.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Cost:</span>
                    <span className="text-orange-600 font-semibold">{activity.cost}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )

      case 'tips':
        return (
          <div className="space-y-6">
            {ecoTips.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-2xl">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800">{category.category}</h3>
                </div>
                <ul className="space-y-2">
                  {category.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )

      case 'offset':
        return (
          <div className="space-y-6">
            {carbonOffset.map((offset, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{offset.activity}</h3>
                <p className="text-gray-600 mb-4">{offset.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Cost:</span>
                    <div className="font-semibold text-green-600">{offset.cost}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Impact:</span>
                    <div className="font-medium text-gray-700">{offset.impact}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Location:</span>
                    <div className="text-gray-700">{offset.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-12">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center">
          <Link to="/" className="text-orange-600 hover:text-orange-700 mr-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="text-2xl font-bold text-gray-800">Eco-Friendly Travel</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white mb-6">
          <div className="flex items-center space-x-4">
            <div className="text-4xl">🌍</div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Travel Responsibly in Mysuru</h2>
              <p className="text-green-100">Explore the Cultural Capital while protecting our environment</p>
            </div>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            { key: 'transport', label: 'Green Transport', icon: '🚌' },
            { key: 'accommodation', label: 'Eco Stays', icon: '🏠' },
            { key: 'activities', label: 'Sustainable Activities', icon: '🌱' },
            { key: 'tips', label: 'Eco Tips', icon: '💡' },
            { key: 'offset', label: 'Carbon Offset', icon: '🌳' }
          ].map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-colors ${
                selectedCategory === category.key
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-green-50 border border-gray-200'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        {renderContent()}

        {/* Environmental Impact */}
        <div className="mt-8 bg-blue-50 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
            <span className="text-2xl mr-2">📊</span>
            Your Environmental Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-white rounded-lg p-4">
              <div className="text-2xl font-bold text-green-600">-60%</div>
              <div className="text-sm text-gray-600">Carbon footprint with public transport</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600">-80%</div>
              <div className="text-sm text-gray-600">Plastic waste with reusable items</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-2xl font-bold text-orange-600">+100%</div>
              <div className="text-sm text-gray-600">Local community support</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white text-center">
          <h3 className="text-xl font-bold mb-2">🌟 Become a Responsible Traveler</h3>
          <p className="mb-4">Small actions create big impacts. Start your eco-friendly journey today!</p>
          <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Calculate My Carbon Footprint
          </button>
        </div>
      </div>
    </div>
  )
}

export default EcoTravelScreen