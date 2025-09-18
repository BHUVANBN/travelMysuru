import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { logout } from '../services/api'
import { useDarkMode } from '../contexts/DarkModeContext'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showSearchAndCTA, setShowSearchAndCTA] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const location = useLocation()
  const [authed, setAuthed] = useState(!!localStorage.getItem('authToken'))
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  useEffect(() => {
    const update = () => setAuthed(!!localStorage.getItem('authToken'))
    window.addEventListener('storage', update)
    window.addEventListener('authchange', update)
    return () => {
      window.removeEventListener('storage', update)
      window.removeEventListener('authchange', update)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Set scrolled state for styling
      setScrolled(currentScrollY > 80);

      // Show/hide search and CTA based on scroll direction
      if (currentScrollY < 20) {
        // At the top, always show and ensure top bar is hidden
        setShowSearchAndCTA(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down, hide
        setShowSearchAndCTA(false);
      } else if (currentScrollY < lastScrollY - 10) {
        // Scrolling up with some threshold to prevent flickering
        setShowSearchAndCTA(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'Things to do', path: '/map' },
    { name: 'Events & Festivals', path: '/events' },
    { name: 'Plan your visit', path: '/itinerary' },
    { name: 'Where to stay', path: '/hotels-food' },
    { name: 'Travel info', path: '/safety' },
    { name: 'Sustainable travel', path: '/eco-travel' }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <>
      {/* Main Navigation */}
      <nav className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled ? 'top-2 py-4 px-4' : 'top-2 py-2 px-4'
      }`}>
        <div className={`transition-all duration-500 ease-out ${
          scrolled
            ? `max-w-7xl mx-auto ${isDarkMode ? 'bg-gray-800/80 border-gray-600/50' : 'bg-orange-50/80 border-white/50'} backdrop-blur-xl rounded-xl shadow-2xl ${isDarkMode ? 'shadow-gray-900/20' : 'shadow-orange-200/20'}`
            : `w-full ${isDarkMode ? 'bg-gray-800/70 border-gray-600/40' : 'bg-orange-50/70 border-white/40'} backdrop-blur-md shadow-sm rounded-lg`
        }`}>
          <div className="flex items-center justify-between px-8 py-6">

            {/* Logo Section - Left */}
            <Link to="/" className="flex items-center flex-shrink-0 group">
              <div className="flex flex-col">
                <div className={`text-3xl font-bold tracking-tight group-hover:text-orange-600 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Namma Mysuru
                </div>
                <div className={`text-sm font-medium tracking-wide uppercase ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                  Official Tourism Guide
                </div>
              </div>
            </Link>

            {/* Center Navigation - Desktop */}
            <div className="hidden xl:flex items-center justify-center flex-1 mx-12">
              <div className="flex items-center space-x-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative text-base font-medium px-3 py-2 rounded-lg transition-all duration-300 whitespace-nowrap group ${
                      isActive(item.path)
                        ? `text-orange-700 ${isDarkMode ? 'bg-gray-700/40' : 'bg-white/40'}`
                        : `${isDarkMode ? 'text-gray-200 hover:text-orange-400 hover:bg-gray-700/30' : 'text-gray-800 hover:text-orange-700 hover:bg-white/30'}`
                    }`}
                  >
                    {item.name}
                    {isActive(item.path) && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600 rounded-full"></div>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Section - Search, Dark Mode Toggle and CTA (Only when not scrolled) */}
            <div className={`hidden xl:flex items-center space-x-4 flex-shrink-0 transition-all duration-300 ease-out transform ${
              !scrolled ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0 pointer-events-none'
            }`}>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className={`h-4 w-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  className={`block w-48 pl-9 pr-3 py-2.5 rounded-full text-base transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                    isDarkMode 
                      ? 'border-gray-600/40 bg-gray-700/50 text-white placeholder-gray-400 focus:border-gray-500/60 focus:bg-gray-700/70' 
                      : 'border-white/40 bg-white/50 text-gray-900 placeholder-gray-500 focus:border-white/60 focus:bg-white/70'
                  } backdrop-blur-sm`}
                />
              </div>
              
              {/* Dark Mode Toggle Button */}
              <button
                onClick={toggleDarkMode}
                className={`p-2.5 rounded-full text-base font-medium transition-all duration-500 shadow-sm hover:shadow-lg transform hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400 border border-gray-600/20' 
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700 border border-white/20'
                }`}
                title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isDarkMode ? (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              <Link
                to="/contribute"
                className="px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-full text-base font-medium transition-all duration-500 shadow-sm hover:shadow-lg whitespace-nowrap transform hover:scale-105 border border-white/20"
              >
                Share your story
              </Link>
              {authed && (
                <button
                  onClick={logout}
                  className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-full text-base font-medium transition-all duration-500 shadow-sm hover:shadow-lg whitespace-nowrap transform hover:scale-105 border border-white/20"
                >
                  Logout
                </button>
              )}
            </div>

            {/* Tablet Navigation */}
            <div className="hidden lg:flex xl:hidden items-center justify-center flex-1 mx-8">
              <div className="flex items-center space-x-4">
                {navigationItems.slice(0, 5).map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative text-base font-medium px-2 py-2 rounded-lg transition-all duration-300 whitespace-nowrap ${
                      isActive(item.path)
                        ? `text-orange-700 ${isDarkMode ? 'bg-gray-700/40' : 'bg-white/40'}`
                        : `${isDarkMode ? 'text-gray-200 hover:text-orange-400 hover:bg-gray-700/30' : 'text-gray-800 hover:text-orange-700 hover:bg-white/30'}`
                    }`}
                  >
                    {item.name}
                    {isActive(item.path) && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600 rounded-full"></div>
                    )}
                  </Link>
                ))}

                {/* More Dropdown */}
                <div className="relative group">
                  <button className={`text-base font-medium py-2 px-2 flex items-center rounded-lg transition-all duration-300 ${
                    isDarkMode
                      ? 'text-gray-200 hover:text-orange-400 hover:bg-gray-700/40'
                      : 'text-gray-800 hover:text-orange-700 hover:bg-white/40'
                  }`}>
                    More
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`absolute right-0 mt-2 w-48 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 ${
                    isDarkMode
                      ? 'bg-gray-800/90 backdrop-blur-xl border border-gray-600/50'
                      : 'bg-orange-50/85 backdrop-blur-lg border border-white/40'
                  }`}>
                    <div className="py-2">
                      {navigationItems.slice(5).map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={`block px-4 py-3 text-base transition-all duration-200 rounded-lg mx-2 ${
                            isActive(item.path)
                              ? `text-orange-700 ${isDarkMode ? 'bg-gray-700/60' : 'bg-white/60'}`
                              : `${isDarkMode ? 'text-gray-200 hover:text-orange-400 hover:bg-gray-700/50' : 'text-gray-800 hover:text-orange-700 hover:bg-white/50'}`
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tablet Search, Dark Mode Toggle and CTA (Only when not scrolled) */}
            <div className={`hidden lg:flex xl:hidden items-center space-x-3 flex-shrink-0 transition-all duration-300 ease-out transform ${
              !scrolled ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0 pointer-events-none'
            }`}>
              <button className={`p-2 rounded-full transition-all duration-500 ${
                isDarkMode ? 'text-gray-300 hover:text-gray-100 hover:bg-gray-700/40' : 'text-gray-700 hover:text-gray-900 hover:bg-white/40'
              }`}>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              
              {/* Dark Mode Toggle Button for Tablet */}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-all duration-500 ${
                  isDarkMode 
                    ? 'text-yellow-400 hover:bg-gray-700/40' 
                    : 'text-gray-700 hover:bg-white/40'
                }`}
                title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isDarkMode ? (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              <Link
                to="/contribute"
                className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-full text-base font-medium transition-all duration-500 shadow-sm hover:shadow-md transform hover:scale-105 border border-white/20"
              >
                Share
              </Link>
              {authed && (
                <button
                  onClick={logout}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full text-base font-medium transition-all duration-500 shadow-sm hover:shadow-md transform hover:scale-105 border border-white/20"
                >
                  Logout
                </button>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300 ${
                isDarkMode
                  ? 'text-gray-300 hover:text-gray-100 hover:bg-gray-700/40'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-white/30'
              }`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className={`lg:hidden transition-all duration-500 ease-out ${
              isDarkMode
                ? 'bg-gray-800/90 backdrop-blur-xl border-t border-gray-600/30 rounded-b-xl'
                : 'bg-orange-50/80 backdrop-blur-md border-t border-white/30 rounded-b-lg'
            }`}>
              <div className="px-6 pt-4 pb-6 space-y-1">
                {/* Mobile Search - Only show when not scrolled */}
                <div className={`mb-4 transition-all duration-300 ease-out transform ${
                  !scrolled ? 'translate-y-0 opacity-100 max-h-20' : '-translate-y-4 opacity-0 max-h-0 overflow-hidden'
                }`}>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className={`h-4 w-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder="Search..."
                      className={`block w-full pl-9 pr-3 py-3 rounded-lg text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                        isDarkMode
                          ? 'border-gray-600/40 bg-gray-700/60 text-white placeholder-gray-400 focus:border-gray-500/60'
                          : 'border-white/40 bg-white/50 text-gray-900 placeholder-gray-500 focus:border-white/60'
                      } backdrop-blur-sm`}
                    />
                  </div>
                </div>

                {/* Mobile Navigation Items */}
                {navigationItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-3 text-lg font-medium transition-all duration-300 rounded-lg ${
                      isActive(item.path)
                        ? `text-orange-700 ${isDarkMode ? 'bg-gray-700/60' : 'bg-white/60'}`
                        : `${isDarkMode ? 'text-gray-200 hover:text-orange-400 hover:bg-gray-700/50' : 'text-gray-800 hover:text-orange-700 hover:bg-white/50'}`
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Mobile Dark Mode Toggle */}
                <div className="pt-2">
                  <button
                    onClick={toggleDarkMode}
                    className={`w-full flex items-center justify-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400 border border-gray-600/20' 
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-700 border border-white/20'
                    }`}
                  >
                    {isDarkMode ? (
                      <>
                        <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        Switch to Light Mode
                      </>
                    ) : (
                      <>
                        <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                        Switch to Dark Mode
                      </>
                    )}
                  </button>
                </div>

                {/* Mobile CTA - Only show when not scrolled */}
                <div className={`pt-4 border-t ${isDarkMode ? 'border-gray-600/30' : 'border-white/30'} transition-all duration-300 ease-out transform ${
                  !scrolled ? 'translate-y-0 opacity-100 max-h-20' : '-translate-y-4 opacity-0 max-h-0 overflow-hidden'
                }`}>
                  <Link
                    to="/contribute"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-center font-medium transition-all duration-500 transform hover:scale-[1.02] border border-white/20"
                  >
                    Share your story
                  </Link>
                </div>
                
                {/* Mobile Logout - Always show when authenticated */}
                {authed && (
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        logout()
                        setIsMenuOpen(false)
                      }}
                      className="w-full px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg text-base font-medium transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navigation