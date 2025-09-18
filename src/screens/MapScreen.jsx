import { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import '../components/MapStyles.css'
import L from 'leaflet'

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})
const MapScreen = () => {
  const [selectedLandmark, setSelectedLandmark] = useState(null)
  const [showContributeForm, setShowContributeForm] = useState(false)

  const landmarks = [
    {
      id: 1,
      name: "Mysuru Palace",
      coords: [12.3052, 76.6552],
      story: "The magnificent Mysuru Palace, also known as Amba Vilas Palace, is a historical palace and a royal residence. It served as the official residence of the Wadiyar dynasty and the seat of the Kingdom of Mysore.",
      photos: [
        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      icon: "🏰"
    },
    {
      id: 2,
      name: "Chamundi Hills",
      coords: [12.2726, 76.6717],
      story: "Chamundi Hills, located at a height of 1,065 meters, is one of the most sacred places in Mysuru. The hill is crowned by the Sri Chamundeshwari Temple, dedicated to Goddess Chamundi.",
      photos: [
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      icon: "⛰️"
    },
    {
      id: 3,
      name: "Mysuru Zoo",
      coords: [12.3014, 76.6459],
      story: "Established in 1892, the Mysuru Zoo is one of the oldest and most popular zoos in India. It houses a wide variety of species and is known for its conservation efforts.",
      photos: [
        "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      icon: "🦁"
    },
    {
      id: 4,
      name: "Brindavan Gardens",
      coords: [12.4244, 76.5750],
      story: "The beautiful Brindavan Gardens are located below the Krishna Raja Sagara dam. Famous for its symmetric design and musical fountain, it attracts thousands of visitors daily.",
      photos: [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      icon: "🌸"
    },
    {
      id: 5,
      name: "St. Philomena's Cathedral",
      coords: [12.3098, 76.6613],
      story: "This Neo-Gothic cathedral is one of the largest churches in India. Built in 1956, it's inspired by the Cologne Cathedral in Germany and houses relics of St. Philomena.",
      photos: [
        "https://images.unsplash.com/photo-1520637836862-4d197d17c55a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      icon: "⛪"
    }
  ];

  const handleLandmarkClick = (landmark) => {
    setSelectedLandmark(landmark);
  };

  const closeModal = () => {
    setSelectedLandmark(null);
    setShowContributeForm(false);
  };

  const handleContribute = () => {
    setShowContributeForm(true);
  };

  return (
    <div className="bg-gray-50 pt-20">
      {/* Page Header */}
      <div className={`bg-white shadow-sm border-b border-gray-200 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className={`text-3xl md:text-4xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Interactive Map</h1>
            <p className={`text-gray-600 max-w-2xl mx-auto transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Explore Mysuru's landmarks and attractions. Click on any pin to learn more about the location and discover its stories.
            </p>
          </div>
        </div>
      </div>

      {/* Map Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Interactive Map */}
          <div className="lg:w-2/3">
            <div className={`rounded-2xl shadow-xl overflow-hidden transition-colors duration-300 ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <MapContainer
                center={[12.2958, 76.6394]}
                zoom={12}
                style={{ height: '500px', width: '100%', zIndex: 1 }}
                className="rounded-2xl"
                zoomControl={true}
              >
                <TileLayer
                  url={isDarkMode 
                    ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  }
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {landmarks.map((landmark) => (
                  <Marker
                    key={landmark.id}
                    position={landmark.coords}
                    eventHandlers={{
                      click: () => handleLandmarkClick(landmark),
                    }}
                  >
                    <Popup
                      closeButton={true}
                      autoClose={false}
                      className="custom-popup"
                      maxWidth={300}
                      minWidth={250}
                    >
                      <div className="p-3">
                        <div className="flex items-center mb-3">
                          <span className="text-2xl mr-2">{landmark.icon}</span>
                          <h3 className={`font-semibold text-lg transition-colors duration-300 ${
                            isDarkMode ? 'text-gray-100' : 'text-gray-800'
                          }`}>{landmark.name}</h3>
                        </div>
                        <p className={`text-gray-600 text-sm leading-relaxed mb-3 transition-colors duration-300 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>{landmark.story}</p>
                        <div className="grid grid-cols-2 gap-1 mb-3">
                          {landmark.photos.map((photo, index) => (
                            <img
                              key={index}
                              src={photo}
                              alt={`${landmark.name} ${index + 1}`}
                              className="w-full h-16 object-cover rounded"
                            />
                          ))}
                        </div>
                        <button
                          onClick={() => handleLandmarkClick(landmark)}
                          className="w-full bg-orange-600 hover:bg-orange-700 text-white py-1.5 rounded text-xs font-semibold transition-colors"
                        >
                          📸 Add My Photo/Story
                        </button>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>

          {/* Info Panel */}
          <div className="lg:w-1/3">
            <div className={`rounded-2xl shadow-xl p-6 relative z-10 transition-colors duration-300 ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              {selectedLandmark ? (
                <div>
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{selectedLandmark.icon}</span>
                    <h2 className={`text-xl font-bold transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-100' : 'text-gray-800'
                    }`}>{selectedLandmark.name}</h2>
                  </div>
                  <p className={`leading-relaxed mb-4 transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>{selectedLandmark.story}</p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {selectedLandmark.photos.map((photo, index) => (
                      <img
                        key={index}
                        src={photo}
                        alt={`${selectedLandmark.name} ${index + 1}`}
                        className="w-full h-20 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                  <button
                    onClick={handleContribute}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg font-semibold transition-colors text-sm"
                  >
                    📸 Add My Photo/Story
                  </button>
                </div>
              ) : (
                <div className={`text-center transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  <div className="text-4xl mb-4">🗺️</div>
                  <p className="mb-4">Click on any marker to explore Mysuru's landmarks and learn their stories!</p>
                  
                  {/* Map Legend */}
                  <div className={`rounded-lg p-4 transition-colors duration-300 ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                  }`}>
                    <h3 className={`font-semibold text-sm mb-3 transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-200' : 'text-gray-800'
                    }`}>Available Landmarks</h3>
                    <div className="space-y-2">
                      {landmarks.map((landmark) => (
                        <div key={landmark.id} className={`flex items-center text-xs transition-colors duration-300 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          <span className="mr-2 text-lg">{landmark.icon}</span>
                          <span>{landmark.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className={`mt-6 bg-orange-50 rounded-lg p-4 transition-colors duration-300 ${
          isDarkMode ? 'bg-gray-700' : 'bg-orange-50'
        }`}>
          <p className={`text-orange-800 text-center transition-colors duration-300 ${
            isDarkMode ? 'text-gray-200' : 'text-orange-800'
          }`}>
            <span className="font-semibold">💡 Tip:</span> Click on any marker on the map to learn more about it and see photos!
          </p>
        </div>
      </div>

      {/* Landmark Modal */}
      {selectedLandmark && !showContributeForm && (
        <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[9999] transition-colors duration-300 ${
          isDarkMode ? 'bg-gray-900' : 'bg-black'
        }`}>
          <div className={`bg-white rounded-2xl max-w-md w-full max-h-[80vh] overflow-y-auto transition-colors duration-300 ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className={`text-2xl font-bold transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-100' : 'text-gray-800'
                } flex items-center`}>
                  <span className="mr-2 text-3xl">{selectedLandmark.icon}</span>
                  {selectedLandmark.name}
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Story */}
              <div className="mb-6">
                <h3 className={`font-semibold text-gray-800 mb-2 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-800'
                }`}>Story</h3>
                <p className={`text-gray-600 leading-relaxed transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>{selectedLandmark.story}</p>
              </div>

              {/* Photos */}
              <div className="mb-6">
                <h3 className={`font-semibold text-gray-800 mb-3 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-800'
                }`}>Photos</h3>
                <div className="grid grid-cols-2 gap-2">
                  {selectedLandmark.photos.map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt={`${selectedLandmark.name} ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleContribute}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                📸 Add My Photo/Story
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contribution Form Modal */}
      {showContributeForm && (
        <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 transition-colors duration-300 ${
          isDarkMode ? 'bg-gray-900' : 'bg-black'
        }`}>
          <div className={`bg-white rounded-2xl max-w-md w-full transition-colors duration-300 ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className={`text-xl font-bold transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-100' : 'text-gray-800'
                }`}>Share Your Experience</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form className="space-y-4">
                <div>
                  <label className={`block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    Upload Photo
                  </label>
                  <div className={`border-2 border-dashed border-gray-300 rounded-lg p-6 text-center transition-colors duration-300 ${
                    isDarkMode ? 'border-gray-500' : 'border-gray-300'
                  }`}>
                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className={`mt-2 text-sm text-gray-600 transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>Click to upload or drag and drop</p>
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    Your Story/Caption
                  </label>
                  <textarea
                    className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors duration-300 ${
                      isDarkMode ? 'bg-gray-700' : 'bg-white'
                    }`}
                    rows="4"
                    placeholder="Share your experience at this landmark..."
                  ></textarea>
                </div>

                <div>
                  <label className={`block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors duration-300 ${
                      isDarkMode ? 'bg-gray-700' : 'bg-white'
                    }`}
                    placeholder="Enter your name"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Submit Contribution
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapScreen;