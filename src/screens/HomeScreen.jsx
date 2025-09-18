import { Link } from 'react-router-dom'
import { useMemo } from 'react'
import mysorePalaceImage from '../assets/mysore-palace-imgx2.jpg.webp'

const HomeScreen = () => {
  const navigationButtons = useMemo(() => [
    {
      title: "Things to do",
      description: "Discover attractions, landmarks and hidden gems",
      path: "/map",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Events & Festivals",
      description: "Cultural celebrations and seasonal events",
      path: "/events",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Plan your visit",
      description: "Create personalized itineraries and routes",
      path: "/itinerary",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Where to stay",
      description: "Hotels, restaurants and local experiences",
      path: "/hotels-food",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Travel information",
      description: "Safety tips, transport and practical advice",
      path: "/safety",
      color: "from-red-500 to-red-600"
    },
    {
      title: "Sustainable travel",
      description: "Eco-friendly options and responsible tourism",
      path: "/eco-travel",
      color: "from-emerald-500 to-emerald-600"
    }
  ], [])

  return (
    <main className="bg-gradient-to-br from-orange-50 to-amber-50 pt-24" role="main" aria-label="Mysuru tourism homepage">
      {/* Hero Section */}
      <section className="relative" aria-labelledby="hero-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Title Section */}
          <div className="text-center mb-8 animate-fadeInUp">
            <h1 id="hero-title" className="text-5xl md:text-6xl lg:text-7xl font-royal font-bold text-orange-600 mb-4 animate-pulse-slow">
              Welcome to Mysuru
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto animate-fadeInUp font-royal-serif" style={{animationDelay: '0.2s'}}>
              Your Complete Guide to the City of Palaces - Discover the royal heritage, cultural richness, and hidden gems of Karnataka's cultural capital
            </p>
          </div>

          {/* Hero Image */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8 animate-scaleIn relative" style={{animationDelay: '0.3s'}}>
            {/* Decorative corner image */}
            <div className="absolute top-4 right-4 z-10">
              <svg className="w-8 h-8 text-orange-500 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div className="relative h-64 md:h-80 lg:h-96">
              <img
                src={mysorePalaceImage}
                alt="Mysuru Palace - The magnificent royal residence showcasing Indo-Saracenic architecture with intricate carvings and golden domes"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                {/* Clear background image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat flex items-center justify-center"
                  style={{
                    backgroundImage: `url(${mysorePalaceImage})`
                  }}
                >
                  {/* Subtle overlay for text readability */}
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>
                <div className="text-center px-4 animate-fadeInUp relative z-10" style={{animationDelay: '0.5s'}}>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-royal font-black mb-2 text-white" style={{
                    textShadow: '3px 3px 6px rgba(0,0,0,0.8), 0 0 20px rgba(255,255,255,0.3)',
                    filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.9))'
                  }}>Mysuru Palace</h2>
                  <p className="text-lg md:text-xl font-royal-serif font-bold text-yellow-200" style={{
                    textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 15px rgba(255,255,255,0.2)',
                    filter: 'drop-shadow(1px 1px 3px rgba(0,0,0,0.9))'
                  }}>The Crown Jewel of Karnataka</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8" aria-labelledby="explore-title">
        <div className="text-center mb-8 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
          <h2 id="explore-title" className="text-3xl md:text-4xl font-royal font-bold text-gray-800 mb-4">Explore Mysuru</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Choose from our comprehensive guides and tools to plan your perfect Mysuru experience</p>
        </div>
        
        <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" aria-label="Main navigation">
          {navigationButtons.map((button, index) => (
            <Link
              key={index}
              to={button.path}
              className={`bg-gradient-to-br ${button.color} text-white rounded-xl p-8 shadow-lg hover:shadow-xl focus:shadow-xl focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 transform hover:-translate-y-1 focus:-translate-y-1 transition-all duration-300 block group relative overflow-hidden animate-fadeInUp`}
              style={{animationDelay: `${0.6 + index * 0.1}s`}}
              aria-label={`Navigate to ${button.title} - ${button.description}`}
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-royal font-semibold mb-3 group-hover:text-white transition-colors">{button.title}</h3>
                <p className="text-white text-opacity-90 text-sm leading-relaxed mb-4">{button.description}</p>
                <div className="flex items-center text-sm font-medium">
                  <span className="mr-2">Explore</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </Link>
          ))}
        </nav>
      </section>

      {/* Quick Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8" aria-labelledby="stats-title">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 animate-fadeInUp" style={{animationDelay: '1.2s'}}>
          <h3 id="stats-title" className="text-2xl md:text-3xl font-royal font-semibold text-gray-800 mb-6 text-center">Mysuru at a Glance</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center" role="list" aria-label="Mysuru statistics">
            <div className="p-4 animate-fadeInUp" style={{animationDelay: '1.3s'}} role="listitem">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2 animate-pulse-slow" aria-label="15 plus">15+</div>
              <div className="text-sm md:text-base text-gray-600 font-medium">Major Attractions</div>
              <div className="text-xs text-gray-500 mt-1">Palaces, temples, gardens & more</div>
            </div>
            <div className="p-4 animate-fadeInUp" style={{animationDelay: '1.4s'}} role="listitem">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2 animate-pulse-slow" aria-label="10">10</div>
              <div className="text-sm md:text-base text-gray-600 font-medium">Days of Dasara</div>
              <div className="text-xs text-gray-500 mt-1">Grand festival celebration</div>
            </div>
            <div className="p-4 animate-fadeInUp" style={{animationDelay: '1.5s'}} role="listitem">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2 animate-pulse-slow" aria-label="600 plus">600+</div>
              <div className="text-sm md:text-base text-gray-600 font-medium">Years of History</div>
              <div className="text-xs text-gray-500 mt-1">Rich royal heritage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contribution Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12" aria-labelledby="contribute-title">
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl shadow-xl overflow-hidden relative animate-fadeInUp" style={{animationDelay: '1.6s'}}>
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative px-6 py-12 md:px-12 md:py-16">
            <div className="text-center text-white max-w-3xl mx-auto">
              <h3 id="contribute-title" className="text-3xl md:text-4xl font-royal font-bold mb-4 animate-fadeInUp" style={{animationDelay: '1.7s'}}>Share Your Mysuru Story</h3>
              <p className="text-white text-opacity-90 mb-8 text-lg leading-relaxed animate-fadeInUp" style={{animationDelay: '1.8s'}}>
                Help fellow travelers by sharing your photos, experiences, and hidden gems you've discovered in the City of Palaces
              </p>
              <Link
                to="/contribute"
                className="inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 transition-all duration-200 shadow-lg hover:shadow-xl focus:shadow-xl transform hover:-translate-y-0.5 focus:-translate-y-0.5 animate-fadeInUp"
                style={{animationDelay: '1.9s'}}
                aria-label="Share your Mysuru travel experiences and photos"
              >
                <span>Start Contributing</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomeScreen