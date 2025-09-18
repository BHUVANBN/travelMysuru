const Footer = () => {
  const footerSections = [
    {
      title: "Visit Mysuru",
      links: [
        { name: "About us", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Tourism Board", href: "#" },
        { name: "Feedback", href: "#" }
      ]
    },
    {
      title: "Plan Your Visit",
      links: [
        { name: "Getting here", href: "#" },
        { name: "Getting around", href: "#" },
        { name: "Where to stay", href: "#" },
        { name: "Travel guides", href: "#" }
      ]
    },
    {
      title: "Experiences",
      links: [
        { name: "Festivals", href: "#" },
        { name: "Palace tours", href: "#" },
        { name: "Cultural shows", href: "#" },
        { name: "Yoga retreats", href: "#" }
      ]
    },
    {
      title: "Discover",
      links: [
        { name: "Heritage sites", href: "#" },
        { name: "Temples", href: "#" },
        { name: "Gardens", href: "#" },
        { name: "Local markets", href: "#" }
      ]
    }
  ]

  const socialLinks = [
    { name: "Facebook", icon: "📘", href: "#" },
    { name: "Twitter", icon: "🐦", href: "#" },
    { name: "Instagram", icon: "📷", href: "#" },
    { name: "YouTube", icon: "📺", href: "#" }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <img 
              className="h-8 w-auto mb-4" 
              src="https://via.placeholder.com/120x32/ffffff/ff6b35?text=Visit+Mysuru" 
              alt="Visit Mysuru" 
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Your official guide to Mysuru. Discover the royal heritage, cultural festivals, delicious cuisine and magnificent palaces of Karnataka's cultural capital.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-2xl hover:text-orange-400 transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-4 text-white">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="max-w-md mx-auto text-center lg:max-w-none lg:text-left">
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-4 text-sm">
              Get the latest news about Mysuru's festivals, attractions, and cultural events.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; 2024 Visit Mysuru. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Terms of Use
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
