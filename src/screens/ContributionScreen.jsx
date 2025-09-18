import { useState } from 'react'
import { Link } from 'react-router-dom'

const ContributionScreen = () => {
  const [activeTab, setActiveTab] = useState('upload')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    title: '',
    description: '',
    category: 'photo'
  })
  const [showSuccess, setShowSuccess] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowSuccess(true)
    setTimeout(() => {
      setShowSuccess(false)
      setFormData({
        name: '',
        email: '',
        location: '',
        title: '',
        description: '',
        category: 'photo'
      })
    }, 3000)
  }

  const userContributions = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mysuru Palace",
      title: "Sunset at the Palace",
      description: "Captured this beautiful sunset view from the palace gardens during my evening visit.",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "photo",
      date: "2 days ago",
      likes: 24
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Devaraja Market",
      title: "Local Street Food Experience",
      description: "Had the most amazing masala dosa and filter coffee at this small stall. The vendor was incredibly friendly and shared stories about the market's history.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "story",
      date: "5 days ago",
      likes: 18
    },
    {
      id: 3,
      name: "Sarah Johnson",
      location: "Chamundi Hills",
      title: "Sunrise Trek",
      description: "Early morning trek to Chamundi Hills was absolutely worth it! The view of the city waking up is breathtaking.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "photo",
      date: "1 week ago",
      likes: 31
    },
    {
      id: 4,
      name: "Anita Reddy",
      location: "Brindavan Gardens",
      title: "Musical Fountain Magic",
      description: "The musical fountain show at Brindavan Gardens is a must-see! The combination of lights, music, and water creates a magical atmosphere. Best viewed from the front rows.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "story",
      date: "1 week ago",
      likes: 27
    },
    {
      id: 5,
      name: "Michael Chen",
      location: "St. Philomena's Cathedral",
      title: "Gothic Architecture",
      description: "The intricate details of this neo-Gothic cathedral are stunning. A peaceful place for reflection in the heart of the city.",
      image: "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "photo",
      date: "2 weeks ago",
      likes: 15
    },
    {
      id: 6,
      name: "Lakshmi Devi",
      location: "Mysuru Silk Factory",
      title: "Traditional Silk Weaving",
      description: "Visited a traditional silk weaving unit and learned about the intricate process of making Mysuru silk sarees. The artisans' skill is incredible!",
      image: "https://images.unsplash.com/photo-1594736797933-d0a9ba7b7e47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "story",
      date: "2 weeks ago",
      likes: 22
    }
  ]

  const featuredContributions = userContributions.slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-50 pt-12">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center">
          <Link to="/" className="text-orange-600 hover:text-orange-700 mr-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="text-2xl font-bold text-gray-800">Community Contributions</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white mb-6">
          <div className="flex items-center space-x-4">
            <div className="text-4xl">📸</div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Share Your Mysuru Experience</h2>
              <p className="text-purple-100">Help fellow travelers discover hidden gems and create lasting memories</p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex bg-white rounded-lg p-1 mb-6 shadow-sm">
          <button
            onClick={() => setActiveTab('upload')}
            className={`flex-1 py-3 px-4 rounded-md font-semibold transition-colors ${
              activeTab === 'upload'
                ? 'bg-orange-600 text-white'
                : 'text-gray-600 hover:text-orange-600'
            }`}
          >
            📤 Share Content
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`flex-1 py-3 px-4 rounded-md font-semibold transition-colors ${
              activeTab === 'gallery'
                ? 'bg-orange-600 text-white'
                : 'text-gray-600 hover:text-orange-600'
            }`}
          >
            🖼️ Community Gallery
          </button>
        </div>

        {activeTab === 'upload' ? (
          /* Upload Form */
          <div className="bg-white rounded-2xl shadow-lg p-6">
            {showSuccess ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">Thank You!</h3>
                <p className="text-gray-600">Your contribution has been submitted successfully and will be reviewed before publishing.</p>
              </div>
            ) : (
              <>
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Share Your Story</h2>
                  <p className="text-gray-600">Upload photos and share experiences to help other travelers</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                      />
                    </div>
                  </div>

                  {/* Content Type */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Content Type *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <label className="cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          value="photo"
                          checked={formData.category === 'photo'}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className={`border-2 rounded-lg p-4 text-center transition-all ${
                          formData.category === 'photo'
                            ? 'border-orange-500 bg-orange-50'
                            : 'border-gray-200 hover:border-orange-300'
                        }`}>
                          <div className="text-3xl mb-2">📸</div>
                          <div className="font-semibold text-gray-800">Photo</div>
                          <div className="text-sm text-gray-600">Share your best shots</div>
                        </div>
                      </label>
                      <label className="cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          value="story"
                          checked={formData.category === 'story'}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className={`border-2 rounded-lg p-4 text-center transition-all ${
                          formData.category === 'story'
                            ? 'border-orange-500 bg-orange-50'
                            : 'border-gray-200 hover:border-orange-300'
                        }`}>
                          <div className="text-3xl mb-2">📝</div>
                          <div className="font-semibold text-gray-800">Story</div>
                          <div className="text-sm text-gray-600">Share your experience</div>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Location and Title */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Location *
                      </label>
                      <select
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                      >
                        <option value="">Select Location</option>
                        <option value="Mysuru Palace">Mysuru Palace</option>
                        <option value="Chamundi Hills">Chamundi Hills</option>
                        <option value="Brindavan Gardens">Brindavan Gardens</option>
                        <option value="St. Philomena's Cathedral">St. Philomena's Cathedral</option>
                        <option value="Devaraja Market">Devaraja Market</option>
                        <option value="Mysuru Zoo">Mysuru Zoo</option>
                        <option value="Jaganmohan Palace">Jaganmohan Palace</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Title *
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="Give your content a catchy title"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                      />
                    </div>
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Upload {formData.category === 'photo' ? 'Photo' : 'Image'} *
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-orange-400 transition-colors">
                      <div className="text-4xl mb-4">📁</div>
                      <p className="text-gray-600 mb-2">Drag and drop your file here, or click to browse</p>
                      <p className="text-sm text-gray-500">Supported formats: JPG, PNG, GIF (Max 5MB)</p>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        id="file-upload"
                      />
                      <label
                        htmlFor="file-upload"
                        className="mt-4 inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg cursor-pointer transition-colors"
                      >
                        Choose File
                      </label>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Description *
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder={formData.category === 'photo' 
                        ? "Describe when and how you captured this photo..." 
                        : "Share your experience, tips, or story about this place..."
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-lg font-semibold text-lg transition-colors"
                  >
                    🚀 Share My {formData.category === 'photo' ? 'Photo' : 'Story'}
                  </button>
                </form>
              </>
            )}
          </div>
        ) : (
          /* Community Gallery */
          <div className="space-y-6">
            {/* Featured Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-2xl mr-2">⭐</span>
                Featured Contributions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {featuredContributions.map((item) => (
                  <div key={item.id} className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg mb-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.category === 'photo' 
                            ? 'bg-blue-500 text-white' 
                            : 'bg-green-500 text-white'
                        }`}>
                          {item.category === 'photo' ? '📸' : '📝'}
                        </span>
                      </div>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{item.location}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>by {item.name}</span>
                      <span>❤️ {item.likes}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* All Contributions */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Contributions</h3>
              <div className="space-y-6">
                {userContributions.map((item) => (
                  <div key={item.id} className="flex space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-gray-800">{item.title}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.category === 'photo' 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {item.category === 'photo' ? '📸 Photo' : '📝 Story'}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-2 line-clamp-2">{item.description}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center space-x-4">
                          <span>📍 {item.location}</span>
                          <span>👤 {item.name}</span>
                          <span>🕒 {item.date}</span>
                        </div>
                        <span className="flex items-center space-x-1">
                          <span>❤️</span>
                          <span>{item.likes}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Guidelines */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-yellow-800 mb-3 flex items-center">
            <span className="text-2xl mr-2">📋</span>
            Contribution Guidelines
          </h3>
          <ul className="space-y-1 text-yellow-700 text-sm">
            <li>• Share original content that you own or have permission to use</li>
            <li>• Be respectful of local culture and traditions</li>
            <li>• Provide accurate information about locations and experiences</li>
            <li>• Keep content family-friendly and appropriate</li>
            <li>• All submissions are reviewed before being published</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ContributionScreen