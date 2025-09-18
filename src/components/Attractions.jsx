const Attractions = () => {
  const attractions = [
    {
      id: 1,
      name: "Mysuru Palace",
      description: "Magnificent royal palace showcasing Indo-Saracenic architecture",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹70",
      rating: 4.8
    },
    {
      id: 2,
      name: "Chamundi Hill",
      description: "Sacred hill with ancient temple and panoramic city views",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "Free",
      rating: 4.7
    },
    {
      id: 3,
      name: "Brindavan Gardens",
      description: "Beautiful terraced gardens with musical fountain show",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹25",
      rating: 4.6
    },
    {
      id: 4,
      name: "St. Philomena's Cathedral",
      description: "Neo-Gothic cathedral inspired by Cologne Cathedral",
      image: "https://images.unsplash.com/photo-1520637836862-4d197d17c55a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "Free",
      rating: 4.5
    },
    {
      id: 5,
      name: "Mysuru Zoo",
      description: "One of India's oldest and most well-maintained zoos",
      image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹80",
      rating: 4.4
    },
    {
      id: 6,
      name: "Jaganmohan Palace",
      description: "Art gallery housing priceless paintings and artifacts",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹20",
      rating: 4.3
    }
  ]

  return (
    <section id="things-to-do" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Heritage & Attractions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore Mysuru's royal palaces, sacred temples, and cultural landmarks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction) => (
            <div
              key={attraction.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 flex items-center">
                  <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">{attraction.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {attraction.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {attraction.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-orange-600">
                    {attraction.price}
                  </span>
                  <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Attractions
