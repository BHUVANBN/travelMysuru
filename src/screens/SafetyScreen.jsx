import { useState } from 'react'
import { Link } from 'react-router-dom'

const SafetyScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('emergency')

  const emergencyContacts = [
    {
      service: "Police",
      number: "100",
      local: "0821-2418339",
      icon: "🚔",
      description: "For any criminal activity or law enforcement needs"
    },
    {
      service: "Fire Department",
      number: "101",
      local: "0821-2425777",
      icon: "🚒",
      description: "Fire emergencies and rescue operations"
    },
    {
      service: "Ambulance",
      number: "108",
      local: "0821-2548444",
      icon: "🚑",
      description: "Medical emergencies and ambulance services"
    },
    {
      service: "Tourist Helpline",
      number: "1363",
      local: "0821-2423652",
      icon: "ℹ️",
      description: "Tourist assistance and information"
    },
    {
      service: "Women Helpline",
      number: "181",
      local: "0821-2414567",
      icon: "👩",
      description: "Support for women in distress"
    },
    {
      service: "Child Helpline",
      number: "1098",
      local: "0821-2513636",
      icon: "👶",
      description: "Child protection and assistance"
    }
  ]

  const hospitals = [
    {
      name: "JSS Hospital",
      address: "JSS Medical College Campus, SS Nagara",
      phone: "0821-2548000",
      type: "Multi-specialty",
      emergency: "24/7",
      icon: "🏥"
    },
    {
      name: "Apollo BGS Hospital",
      address: "Adichunchanagiri Road, Kuvempunagar",
      phone: "0821-2566666",
      type: "Multi-specialty",
      emergency: "24/7",
      icon: "🏥"
    },
    {
      name: "Columbia Asia Hospital",
      address: "Mysuru-Bangalore Highway, Siddique Nagar",
      phone: "0821-3989999",
      type: "Multi-specialty",
      emergency: "24/7",
      icon: "🏥"
    },
    {
      name: "Vikram Hospital",
      address: "No. 2, Chamaraja Double Road",
      phone: "0821-4252525",
      type: "Multi-specialty",
      emergency: "24/7",
      icon: "🏥"
    },
    {
      name: "K.R. Hospital",
      address: "Sayyaji Rao Road, Fort Mohalla",
      phone: "0821-2520300",
      type: "Government Hospital",
      emergency: "24/7",
      icon: "🏥"
    }
  ]

  const safetyTips = [
    {
      category: "General Safety",
      icon: "🛡️",
      tips: [
        "Keep copies of important documents (passport, ID, hotel booking)",
        "Share your itinerary with family/friends",
        "Keep emergency contacts saved in your phone",
        "Carry sufficient cash as some places don't accept cards",
        "Stay hydrated and carry water bottles"
      ]
    },
    {
      category: "Transportation",
      icon: "🚗",
      tips: [
        "Use official taxi services or ride-sharing apps",
        "Negotiate auto-rickshaw fares beforehand",
        "Avoid traveling alone late at night",
        "Keep your phone charged for navigation",
        "Wear helmets when using two-wheelers"
      ]
    },
    {
      category: "Health & Medical",
      icon: "💊",
      tips: [
        "Carry basic first-aid kit and personal medications",
        "Drink bottled or filtered water",
        "Eat at clean, busy restaurants",
        "Use mosquito repellent, especially in evenings",
        "Get travel insurance before your trip"
      ]
    },
    {
      category: "Personal Security",
      icon: "🔒",
      tips: [
        "Don't display expensive jewelry or electronics",
        "Be cautious of overly friendly strangers",
        "Keep valuables in hotel safe",
        "Avoid isolated areas, especially after dark",
        "Trust your instincts if something feels wrong"
      ]
    },
    {
      category: "Cultural Sensitivity",
      icon: "🙏",
      tips: [
        "Dress modestly when visiting temples",
        "Remove shoes before entering religious places",
        "Ask permission before photographing people",
        "Respect local customs and traditions",
        "Learn basic Kannada phrases for better interaction"
      ]
    }
  ]

  const policeStations = [
    {
      name: "City Police Station",
      address: "Sayyaji Rao Road, Mysuru",
      phone: "0821-2421339",
      area: "City Center"
    },
    {
      name: "Devaraja Police Station",
      address: "Devaraja Mohalla, Mysuru",
      phone: "0821-2422456",
      area: "Market Area"
    },
    {
      name: "Lashkar Police Station",
      address: "Lashkar Mohalla, Mysuru",
      phone: "0821-2423789",
      area: "Palace Area"
    },
    {
      name: "Nazarbad Police Station",
      address: "Nazarbad Main Road, Mysuru",
      phone: "0821-2515678",
      area: "Nazarbad"
    }
  ]

  const renderContent = () => {
    switch (selectedCategory) {
      case 'emergency':
        return (
          <div className="space-y-4">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-red-500">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{contact.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{contact.service}</h3>
                      <p className="text-gray-600 text-sm">{contact.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-red-600">{contact.number}</div>
                    <div className="text-sm text-gray-500">Local: {contact.local}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )

      case 'hospitals':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hospitals.map((hospital, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{hospital.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{hospital.name}</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {hospital.address}
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {hospital.phone}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                          {hospital.type}
                        </span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                          {hospital.emergency}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )

      case 'police':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {policeStations.map((station, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">🚔</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{station.name}</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {station.address}
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {station.phone}
                      </div>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                        {station.area}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )

      case 'tips':
        return (
          <div className="space-y-6">
            {safetyTips.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-2xl">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800">{category.category}</h3>
                </div>
                <ul className="space-y-2">
                  {category.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center">
          <Link to="/" className="text-orange-600 hover:text-orange-700 mr-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="text-2xl font-bold text-gray-800">Emergency & Safety</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Emergency Banner */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-6 text-white mb-6">
          <div className="flex items-center space-x-4">
            <div className="text-4xl">🚨</div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Emergency? Call Immediately</h2>
              <div className="flex flex-wrap gap-4 text-lg">
                <span>Police: 100</span>
                <span>Fire: 101</span>
                <span>Ambulance: 108</span>
              </div>
            </div>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            { key: 'emergency', label: 'Emergency Contacts', icon: '📞' },
            { key: 'hospitals', label: 'Hospitals', icon: '🏥' },
            { key: 'police', label: 'Police Stations', icon: '🚔' },
            { key: 'tips', label: 'Safety Tips', icon: '💡' }
          ].map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-colors ${
                selectedCategory === category.key
                  ? 'bg-orange-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-orange-50 border border-gray-200'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        {renderContent()}

        {/* Important Information */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
          <div className="flex items-start space-x-3">
            <div className="text-2xl">⚠️</div>
            <div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Information</h3>
              <ul className="space-y-1 text-yellow-700">
                <li>• Save these numbers in your phone before traveling</li>
                <li>• Keep your hotel address and contact details handy</li>
                <li>• Inform someone about your whereabouts when exploring</li>
                <li>• Carry identification documents at all times</li>
                <li>• Download offline maps for navigation without internet</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="tel:100"
            className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-xl text-center font-semibold transition-colors"
          >
            📞 Call Police (100)
          </a>
          <a
            href="tel:108"
            className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-xl text-center font-semibold transition-colors"
          >
            🚑 Call Ambulance (108)
          </a>
          <a
            href="tel:1363"
            className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-xl text-center font-semibold transition-colors"
          >
            ℹ️ Tourist Helpline (1363)
          </a>
        </div>
      </div>
    </div>
  )
}

export default SafetyScreen