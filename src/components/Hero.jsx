import { useDarkMode } from '../contexts/DarkModeContext'

const Hero = () => {
  const { isDarkMode } = useDarkMode()
  
  return (
    <section className={`relative h-screen flex items-center justify-center transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-900'}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Mysuru Palace"
        />
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-black opacity-50' : 'bg-black opacity-40'} transition-opacity duration-300`}></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 mt-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to Mysuru
          </h1>
          <p className={`text-xl md:text-2xl mb-8 leading-relaxed ${isDarkMode ? 'text-gray-100' : 'text-gray-200'} transition-colors duration-300`}>
            Discover the City of Palaces - explore magnificent heritage, vibrant culture, delicious cuisine and royal grandeur of Karnataka's cultural capital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
              Plan Your Visit
            </button>
            <button className={`bg-transparent border-2 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-lg ${
              isDarkMode 
                ? 'border-gray-300 hover:bg-gray-300 hover:text-gray-900' 
                : 'border-white hover:bg-white hover:text-gray-900'
            }`}>
              Explore Heritage
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero