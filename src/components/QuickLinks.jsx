const QuickLinks = () => {
  const links = [
    {
      icon: "🏰",
      title: "Royal Heritage",
      description: "Explore palaces and monuments",
      href: "#attractions"
    },
    {
      icon: "🎭",
      title: "Festivals & Culture",
      description: "Experience Mysuru's traditions",
      href: "#events"
    },
    {
      icon: "🍛",
      title: "Local Cuisine",
      description: "Taste authentic Karnataka flavors",
      href: "#food-drink"
    },
    {
      icon: "🏨",
      title: "Stay Options",
      description: "Heritage hotels and modern stays",
      href: "#hotels"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-200 group"
            >
              <div className="text-4xl mb-4">{link.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                {link.title}
              </h3>
              <p className="text-gray-600">{link.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QuickLinks
