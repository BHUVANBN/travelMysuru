const FoodDrink = () => {
  const categories = [
    {
      id: 1,
      title: "Traditional South Indian",
      description: "Authentic Karnataka cuisine",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Mysuru Pak & Sweets",
      description: "Famous local delicacies",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Royal Cuisine",
      description: "Palace-style dining experiences",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ]

  const restaurants = [
    {
      id: 1,
      name: "RRR Restaurant",
      cuisine: "South Indian Thali",
      rating: 4.8,
      price: "₹₹",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      name: "Guru Sweet Mart",
      cuisine: "Mysuru Pak & Sweets",
      rating: 4.7,
      price: "₹",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      name: "Lalitha Mahal Palace",
      cuisine: "Royal Dining",
      rating: 4.6,
      price: "₹₹₹₹",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ]

  return (
    <section id="food-drink" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Food & Culture
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Savor the authentic flavors of Karnataka - from royal cuisine to famous Mysuru Pak
          </p>
        </div>

        {/* Food Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center text-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-200">
                    {category.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Restaurants */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Featured Restaurants
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {restaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-semibold text-gray-900">
                      {restaurant.name}
                    </h4>
                    <span className="text-lg font-bold text-orange-600">
                      {restaurant.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">
                    {restaurant.cuisine}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm font-medium text-gray-700">
                        {restaurant.rating}
                      </span>
                    </div>
                    <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm">
                      View Menu
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FoodDrink
