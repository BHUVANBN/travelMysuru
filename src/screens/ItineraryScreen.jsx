import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItineraryScreen = () => {
  const [formData, setFormData] = useState({
    travelType: '',
    budget: '',
    duration: '2'
  })
  const [showItinerary, setShowItinerary] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const generateItinerary = (e) => {
    e.preventDefault()
    setShowItinerary(true)
  }

  const getItineraryData = () => {
    const { travelType, budget } = formData
    
    const baseItinerary = {
      day1: {
        title: "Day 1: Royal Heritage",
        activities: [
          { time: "9:00 AM", activity: "Visit Mysuru Palace", duration: "2 hours" },
          { time: "11:30 AM", activity: "Explore Jaganmohan Palace Art Gallery", duration: "1 hour" },
          { time: "1:00 PM", activity: "Lunch at traditional restaurant", duration: "1 hour" },
          { time: "3:00 PM", activity: "St. Philomena's Cathedral", duration: "45 minutes" },
          { time: "4:30 PM", activity: "Shopping at Devaraja Market", duration: "1.5 hours" },
          { time: "7:00 PM", activity: "Palace Illumination (Sunday only)", duration: "30 minutes" }
        ]
      },
      day2: {
        title: "Day 2: Nature & Culture",
        activities: [
          { time: "7:00 AM", activity: "Sunrise at Chamundi Hills", duration: "2 hours" },
          { time: "10:00 AM", activity: "Visit Chamundeshwari Temple", duration: "1 hour" },
          { time: "12:00 PM", activity: "Lunch break", duration: "1 hour" },
          { time: "2:00 PM", activity: "Mysuru Zoo", duration: "2 hours" },
          { time: "5:00 PM", activity: "Brindavan Gardens", duration: "2 hours" },
          { time: "7:30 PM", activity: "Musical Fountain Show", duration: "30 minutes" }
        ]
      }
    }

    // Customize based on travel type and budget
    if (travelType === 'family') {
      baseItinerary.day1.activities[1] = { time: "11:30 AM", activity: "Visit Mysuru Zoo (family-friendly)", duration: "2 hours" }
      baseItinerary.day2.activities[3] = { time: "2:00 PM", activity: "Rail Museum (kids will love it)", duration: "1.5 hours" }
    }

    if (travelType === 'solo') {
      baseItinerary.day1.activities.push({ time: "8:00 PM", activity: "Evening photography walk", duration: "1 hour" })
      baseItinerary.day2.activities[0] = { time: "6:00 AM", activity: "Solo meditation at Chamundi Hills", duration: "2 hours" }
    }

    if (budget === 'luxury') {
      baseItinerary.day1.activities[2] = { time: "1:00 PM", activity: "Fine dining at Lalitha Mahal Palace", duration: "1.5 hours" }
      baseItinerary.day2.activities[2] = { time: "12:00 PM", activity: "Lunch at heritage hotel", duration: "1 hour" }
    } else if (budget === 'budget') {
      baseItinerary.day1.activities[2] = { time: "1:00 PM", activity: "Local street food tour", duration: "1 hour" }
      baseItinerary.day2.activities[2] = { time: "12:00 PM", activity: "Lunch at local eatery", duration: "45 minutes" }
    }

    return baseItinerary
  }

  const getBudgetEstimate = () => {
    const { budget, travelType } = formData
    
    const estimates = {
      budget: {
        family: "₹2,500 - ₹4,000 per person",
        friends: "₹2,000 - ₹3,500 per person", 
        solo: "₹1,800 - ₹3,000 per person"
      },
      midrange: {
        family: "₹4,500 - ₹7,000 per person",
        friends: "₹4,000 - ₹6,500 per person",
        solo: "₹3,500 - ₹5,500 per person"
      },
      luxury: {
        family: "₹8,000 - ₹15,000 per person",
        friends: "₹7,500 - ₹12,000 per person",
        solo: "₹6,000 - ₹10,000 per person"
      }
    }

    return estimates[budget]?.[travelType] || "₹3,000 - ₹5,000 per person"
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
          <h1 className="text-2xl font-bold text-gray-800">Itinerary Generator</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {!showItinerary ? (
          /* Input Form */
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Plan Your Perfect Trip</h2>
              <p className="text-gray-600">Tell us about your preferences and we'll create a customized itinerary</p>
            </div>

            <form onSubmit={generateItinerary} className="space-y-6">
              {/* Travel Type */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  Travel Type
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { value: 'family', label: 'Family', icon: '👨‍👩‍👧‍👦', desc: 'Kid-friendly activities' },
                    { value: 'friends', label: 'Friends', icon: '👥', desc: 'Group adventures' },
                    { value: 'solo', label: 'Solo', icon: '🚶‍♂️', desc: 'Personal exploration' }
                  ].map((type) => (
                    <label key={type.value} className="cursor-pointer">
                      <input
                        type="radio"
                        name="travelType"
                        value={type.value}
                        onChange={handleInputChange}
                        className="sr-only"
                        required
                      />
                      <div className={`border-2 rounded-lg p-4 text-center transition-all ${
                        formData.travelType === type.value
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-200 hover:border-orange-300'
                      }`}>
                        <div className="text-3xl mb-2">{type.icon}</div>
                        <div className="font-semibold text-gray-800">{type.label}</div>
                        <div className="text-sm text-gray-600">{type.desc}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  Budget Range
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { value: 'budget', label: 'Budget', icon: '💰', desc: 'Economic options' },
                    { value: 'midrange', label: 'Mid-range', icon: '💳', desc: 'Comfortable experience' },
                    { value: 'luxury', label: 'Luxury', icon: '💎', desc: 'Premium experience' }
                  ].map((budget) => (
                    <label key={budget.value} className="cursor-pointer">
                      <input
                        type="radio"
                        name="budget"
                        value={budget.value}
                        onChange={handleInputChange}
                        className="sr-only"
                        required
                      />
                      <div className={`border-2 rounded-lg p-4 text-center transition-all ${
                        formData.budget === budget.value
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-200 hover:border-orange-300'
                      }`}>
                        <div className="text-3xl mb-2">{budget.icon}</div>
                        <div className="font-semibold text-gray-800">{budget.label}</div>
                        <div className="text-sm text-gray-600">{budget.desc}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Duration */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  Duration
                </label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="1">1 Day</option>
                  <option value="2">2 Days</option>
                  <option value="3">3 Days</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Generate My Itinerary 🗓️
              </button>
            </form>
          </div>
        ) : (
          /* Generated Itinerary */
          <div className="space-y-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">Your Personalized Itinerary</h2>
              <div className="flex flex-wrap gap-4 text-sm">
                <span>🧳 {formData.travelType.charAt(0).toUpperCase() + formData.travelType.slice(1)} Trip</span>
                <span>💰 {formData.budget.charAt(0).toUpperCase() + formData.budget.slice(1)} Budget</span>
                <span>📅 {formData.duration} Days</span>
              </div>
              <div className="mt-3 text-sm">
                <strong>Estimated Cost: {getBudgetEstimate()}</strong>
              </div>
            </div>

            {/* Itinerary Days */}
            {Object.entries(getItineraryData()).map(([day, dayData]) => (
              <div key={day} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-orange-100 px-6 py-4">
                  <h3 className="text-xl font-bold text-orange-800">{dayData.title}</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {dayData.activities.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-semibold text-gray-800">{activity.activity}</span>
                            <span className="text-sm text-gray-500">{activity.duration}</span>
                          </div>
                          <div className="text-sm text-orange-600">{activity.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Tips */}
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">💡 Pro Tips</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• Book palace tickets online to avoid queues</li>
                <li>• Carry water and wear comfortable shoes</li>
                <li>• Try local Mysuru Pak and filter coffee</li>
                <li>• Best time to visit: October to March</li>
                <li>• Download offline maps for navigation</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={() => setShowItinerary(false)}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 rounded-lg font-semibold transition-colors"
              >
                ← Modify Plan
              </button>
              <button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-colors">
                📱 Save Itinerary
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ItineraryScreen