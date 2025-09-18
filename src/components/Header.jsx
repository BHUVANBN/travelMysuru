import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              className="h-8 w-auto" 
              src="https://via.placeholder.com/120x32/ff6b35/ffffff?text=Visit+Mysuru" 
              alt="Visit Mysuru" 
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#things-to-do" className="text-gray-900 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Attractions
              </a>
              <a href="#where-to-stay" className="text-gray-900 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Stay
              </a>
              <a href="#food-drink" className="text-gray-900 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Food & Culture
              </a>
              <a href="#events" className="text-gray-900 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Festivals
              </a>
              <a href="#travel" className="text-gray-900 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Getting Around
              </a>
              <a href="#plan" className="text-gray-900 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Plan Visit
              </a>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search Mysuru..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
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
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#things-to-do" className="text-gray-900 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium">
                Things to do
              </a>
              <a href="#where-to-stay" className="text-gray-900 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium">
                Where to stay
              </a>
              <a href="#food-drink" className="text-gray-900 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium">
                Food & Drink
              </a>
              <a href="#events" className="text-gray-900 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium">
                What's on
              </a>
              <a href="#travel" className="text-gray-900 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium">
                Travel
              </a>
              <a href="#plan" className="text-gray-900 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium">
                Plan your visit
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
