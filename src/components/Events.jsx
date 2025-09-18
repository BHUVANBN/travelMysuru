const Events = () => {
  const events = [
    {
      id: 1,
      title: "Mysuru Dasara",
      description: "Grand 10-day festival celebrating victory of good over evil",
      location: "Mysuru Palace",
      date: "15",
      month: "OCT",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Classical Music Festival",
      description: "Renowned musicians perform at the palace during Dasara",
      location: "Palace Grounds",
      date: "20",
      month: "OCT",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Yoga Festival",
      description: "International yoga practitioners gather in the yoga capital",
      location: "Various Venues",
      date: "21",
      month: "JUN",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Palace Illumination",
      description: "Spectacular lighting of Mysuru Palace every Sunday",
      location: "Mysuru Palace",
      date: "Every",
      month: "SUN",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ]

  return (
    <section id="events" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Festivals & Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience Mysuru's rich cultural heritage through vibrant festivals and celebrations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex"
            >
              <div className="flex-shrink-0">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-32 h-full object-cover"
                />
              </div>
              
              <div className="flex-1 p-6 flex items-center">
                <div className="flex-shrink-0 mr-6">
                  <div className="bg-orange-600 text-white rounded-lg p-3 text-center min-w-[60px]">
                    <div className="text-2xl font-bold">{event.date}</div>
                    <div className="text-sm">{event.month}</div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {event.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            View All Events
          </button>
        </div>
      </div>
    </section>
  )
}

export default Events
