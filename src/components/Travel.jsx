const Travel = () => {
  const transportOptions = [
    {
      id: 1,
      icon: "🚌",
      title: "City Buses",
      description: "Comprehensive bus network connecting all major attractions and areas",
      tips: ["KSRTC and private buses", "Affordable fares", "Regular services to nearby cities"]
    },
    {
      id: 2,
      icon: "🚗",
      title: "Auto Rickshaws",
      description: "Convenient three-wheelers for short distance travel within the city",
      tips: ["Use meter or negotiate fare", "Available throughout the city", "Quick for short trips"]
    },
    {
      id: 3,
      icon: "🚕",
      title: "Taxis & Cabs",
      description: "Comfortable private transportation with app-based booking",
      tips: ["Ola and Uber available", "Pre-paid taxi counters", "Airport connectivity"]
    },
    {
      id: 4,
      icon: "🚂",
      title: "Railway Station",
      description: "Well-connected railway junction linking major Indian cities",
      tips: ["Mysuru Junction station", "Daily trains to Bangalore", "Advance booking recommended"]
    }
  ]

  return (
    <section id="travel" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Getting Around Mysuru
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Navigate Mysuru easily with our comprehensive transport guide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {transportOptions.map((option) => (
            <div
              key={option.id}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start">
                <div className="text-4xl mr-6 flex-shrink-0">
                  {option.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {option.description}
                  </p>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                      Pro Tips:
                    </h4>
                    <ul className="space-y-1">
                      {option.tips.map((tip, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Travel Tips Section */}
        <div className="mt-16 bg-orange-600 rounded-lg p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Travel Tips for Mysuru
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Make the most of your visit with these helpful travel tips
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-2">Best Time</h4>
                <p className="text-3xl font-bold mb-2">Oct-Mar</p>
                <p className="opacity-90">Pleasant weather for sightseeing</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-2">Distance</h4>
                <p className="text-3xl font-bold mb-2">150km</p>
                <p className="opacity-90">From Bangalore (3 hours)</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-2">Languages</h4>
                <p className="text-3xl font-bold mb-2">3+</p>
                <p className="opacity-90">Kannada, Hindi, English</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Travel
