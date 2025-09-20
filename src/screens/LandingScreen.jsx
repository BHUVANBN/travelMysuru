import { useEffect, useState, useRef } from 'react'
import HomeScreen from './HomeScreen'
import { api, setToken } from '../services/api'
import { useDarkMode } from '../contexts/DarkModeContext'

const isAuthed = () => {
  try { return !!localStorage.getItem('authToken') } catch { return false }
}

const LandingScreen = () => {
  const [authed, setAuthed] = useState(isAuthed())
  const [activeSection, setActiveSection] = useState('')
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [loginLoading, setLoginLoading] = useState(false)
  const bannerRef = useRef(null)
  const sectionsRef = useRef([])
  const { isDarkMode } = useDarkMode()
  const base = import.meta.env.BASE_URL || '/'

  useEffect(() => {
    const update = () => setAuthed(isAuthed())
    window.addEventListener('storage', update)
    window.addEventListener('authchange', update)
    return () => {
      window.removeEventListener('storage', update)
      window.removeEventListener('authchange', update)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      
      // Parallax effect for background elements
      const bgElements = document.querySelectorAll('.parallax-bg')
      bgElements.forEach((bg, index) => {
        if (index !== 0 && index !== 8) {
          bg.style.transform = `translateY(${scrollY * index / 2}px)`
        } else if (index === 0) {
          bg.style.transform = `translateY(${scrollY / 3}px)`
        }
      })

      // Banner title parallax effect
      const titleBanner = document.querySelector('.banner-title')
      if (titleBanner) {
        titleBanner.style.transform = `translateY(${scrollY * 4 / 2}px)`
      }

      // Animation trigger for sections
      const sections = document.querySelectorAll('.animation-section')
      sections.forEach(section => {
        if (section.offsetTop - scrollY < 550) {
          section.classList.add('active')
        } else {
          section.classList.remove('active')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoginError('')
    setLoginLoading(true)
    
    try {
      const res = await api.post('/api/auth/login', { email, password })
      setToken(res.token)
      localStorage.setItem('user', JSON.stringify(res.user))
      
      // Trigger auth change event
      window.dispatchEvent(new Event('authchange'))
      
      // Close modal and reset form
      setShowLoginModal(false)
      setEmail('')
      setPassword('')
      setAuthed(true)
    } catch (err) {
      setLoginError(err.message || 'Login failed')
    } finally {
      setLoginLoading(false)
    }
  }

  const openLoginModal = () => {
    setShowLoginModal(true)
    setLoginError('')
    setEmail('')
    setPassword('')
  }

  const closeLoginModal = () => {
    setShowLoginModal(false)
    setLoginError('')
    setEmail('')
    setPassword('')
  }

  if (authed) return <HomeScreen />

  return (
    <div className={`landing-page ${isDarkMode ? 'dark-mode' : ''}`}>  
      {/* Custom Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@300;400;500;600&display=swap');
        
        .landing-page {
          margin: 0;
          background-color: ${isDarkMode ? '#111827' : '#210002'};
          font-family: 'Poppins', sans-serif;
          font-size: 15px;
          transition: background-color 0.3s ease;
        }

        .dark-mode .intro-section {
          background-image: linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.8)), url('${base}About_BG.jpg');
        }

        .dark-mode .intro-section::before {
          background: rgba(17, 24, 39, 0.7);
        }

        .dark-mode .contact-section {
          background: ${isDarkMode ? '#374151' : '#fa9f1b'};
        }

        .dark-mode .modal-content {
          background: #374151;
          color: #f3f4f6;
        }

        .dark-mode .modal-title {
          color: #f3f4f6;
        }

        .dark-mode .form-label {
          color: #d1d5db;
        }

        .dark-mode .login-input {
          background-color: #4b5563;
          border-color: #6b7280;
          color: #f3f4f6;
        }

        .dark-mode .login-input:focus {
          border-color: #f97316;
          box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1);
        }

        .custom-navbar {
          position: absolute;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 1200px;
          padding: 15px 30px;
          box-sizing: border-box;
        }

        .navbar-main {
          display: flex;
          justify-content: center;
          gap: 45px;
          flex-grow: 1;
        }

        .nav-button {
          background: transparent;
          border: 2px solid #000;
          color: #000;
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          font-size: 14px;
          padding: 10px 25px;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-button:hover {
          background-color: #000;
          color: #fff;
          transform: translateY(-2px);
        }

        .sign-in-btn {
          background-color: #000;
          border: 2px solid #fff;
          color: #fff;
          margin-left: auto;
        }

        .sign-in-btn:hover {
          background: transparent;
          color: #000;
          border-color: #fff;
          transform: translateY(-2px);
        }

        .logo-text {
          display: flex;
          flex-direction: column;
        }

        .logo-title {
          font-family: 'Pacifico', cursive;
          font-size: 30px;
          font-weight: 400;
          color: #1f2937;
          transition: color 0.3s ease;
        }

        .logo-title:hover {
          color: #f97316;
        }

        .logo-subtitle {
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .banner {
          height: 100vh;
          position: relative;
          overflow: hidden;
        }

        .parallax-bg {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          background-size: auto 100%;
          background-position: center bottom;
          transition: 0.1s;
        }

        .bg-1 { background-image: url('${base}0.png'); }
        .bg-2 { background-image: url('${base}1.png'); }
        .bg-3 { background-image: url('${base}2.png'); }
        .bg-4 { background-image: url('${base}Travel_Mysuru.svg'); }
        .bg-5 { background-image: url('${base}4.png'); }
        .bg-6 { background-image: url('${base}5.png'); }
        .bg-7 { background-image: url('${base}6.png'); }
        .bg-8 { background-image: url('${base}7.png'); }
        .bg-9 { background-image: url('${base}8.svg'); }
        .bg-12 { background-image: url('${base}14.png'); }

        .intro-section {
          min-height: 50vh;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 50px 20px;
          background-image: url('${base}About_BG.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
        }

        .intro-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1;
        }

        .intro-section > * {
          position: relative;
          z-index: 2;
        }

        .intro-image {
          width: 130px;
          height: 130px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #fff;
        }

        .intro-text {
          width: 700px;
          max-width: 100%;
          text-align: center;
          line-height: 1.6;
          background: rgba(255, 255, 255, 0.1);
          padding: 15px;
          border-radius: 10px;
        }

        .subscribe-btn {
          background-color: #FD0003;
          padding: 10px 50px;
          border: 1px solid #591F1D;
          border-radius: 5px;
          color: #fff;
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .subscribe-btn:hover {
          background-color: #cc0002;
          transform: translateY(-2px);
        }

        .features-grid {
          margin-top: 50px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          text-align: center;
          color: #fff;
          padding: 0 20px;
        }

        .feature-card {
          background: rgba(255,255,255,0.1);
          border-radius: 10px;
          padding: 20px;
          transition: transform 0.3s ease;
          position: relative;
        }

        .feature-card:hover {
          transform: translateY(-5px);
        }

        .feature-image {
          width: 100%;
          aspect-ratio: 9/16;
          object-fit: cover;
          border-radius: 8px;
        }

        .feature-description {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: rgba(0, 0, 0, 0.8);
          color: #fff;
          padding: 10px 15px;
          opacity: 0;
          transition: opacity 0.3s ease;
          font-size: 14px;
          text-align: center;
          border-radius: 0 0 8px 8px;
        }

        .feature-card:hover .feature-description {
          opacity: 1;
        }

        .contact-section {
          min-height: 50vh;
          background: #fa9f1b;
          color: #1a1a1a;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 60px 30px;
          border-radius: 10px;
          margin: 40px 20px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .contact-content {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-start;
          width: 1000px;
          max-width: 100%;
          gap: 20px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
          background: rgba(255, 255, 255, 0.95);
          padding: 25px;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          flex: 1;
        }

        .form-input {
          width: 100%;
          padding: 12px 15px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background-color: #fff;
          color: #1a1a1a;
          font-family: 'Poppins', sans-serif;
          font-size: 1rem;
          box-sizing: border-box;
          transition: border-color 0.3s ease;
        }

        .form-input:focus {
          border-color: #ff6f61;
          outline: none;
        }

        .submit-btn {
          background-color: #ff6f61;
          padding: 12px 60px;
          border: none;
          border-radius: 5px;
          color: #fff;
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-btn:hover {
          background-color: #f4511e;
          transform: translateY(-2px);
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-top: 20px;
        }

        .social-link {
          color: #1a1a1a;
          font-size: 1.5rem;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          color: #ff6f61;
          transform: scale(1.2);
        }

        .animation-show {
          transform: translateY(50px);
          opacity: 0;
          transition: 0.7s;
        }

        .active .animation-show {
          transform: translateY(0);
          opacity: 1;
        }

        .animation-show:nth-child(2) { transition-delay: 0.3s; }
        .animation-show:nth-child(3) { transition-delay: 0.6s; }
        .animation-show:nth-child(4) { transition-delay: 0.9s; }

        /* Login Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 2000;
        }

        .modal-content {
          background: white;
          border-radius: 16px;
          padding: 32px;
          width: 100%;
          max-width: 400px;
          margin: 20px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .modal-title {
          font-size: 24px;
          font-weight: 700;
          color: #1f2937;
        }

        .close-button {
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #6b7280;
          padding: 4px;
          border-radius: 4px;
          transition: background-color 0.2s;
        }

        .close-button:hover {
          background-color: #f3f4f6;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .form-label {
          font-size: 14px;
          font-weight: 500;
          color: #374151;
        }

        .login-input {
          padding: 12px 16px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 16px;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .login-input:focus {
          outline: none;
          border-color: #f97316;
          box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1);
        }

        .login-button {
          background-color: #f97316;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .login-button:hover:not(:disabled) {
          background-color: #ea580c;
        }

        .login-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .error-message {
          color: #dc2626;
          font-size: 14px;
          margin-top: 8px;
        }

        @media screen and (max-width: 768px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
          
          .contact-content {
            flex-direction: column;
            align-items: center;
          }

          .modal-content {
            margin: 10px;
            padding: 24px;
          }

          .banner-title {
            font-size: 5rem;
            margin-top: 80px;
          }
        }

        @media screen and (max-width: 480px) {
          .custom-navbar {
            flex-direction: column;
            gap: 10px;
          }
          
          .navbar-main {
            flex-wrap: wrap;
            gap: 15px;
          }

          .banner-title {
            margin-top: 40px;
          }
        }
      `}</style>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="modal-overlay" onClick={closeLoginModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Welcome Back</h2>
              <button className="close-button" onClick={closeLoginModal}>×</button>
            </div>
            
            <form className="login-form" onSubmit={handleLogin}>
              <div className="form-group">
                <label className="form-label" htmlFor="modal-email">Email</label>
                <input
                  id="modal-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="login-input"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="modal-password">Password</label>
                <input
                  id="modal-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="login-input"
                  placeholder="Enter your password"
                  required
                />
              </div>
              
              {loginError && <div className="error-message">{loginError}</div>}
              
              <button
                type="submit"
                disabled={loginLoading}
                className="login-button"
              >
                {loginLoading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/*
      <nav className="custom-navbar">
        <a href="/" className="flex items-center text-decoration-none">
          <div className="logo-text">
            <div className="logo-title">Namma Mysuru</div>
            <div className="logo-subtitle">Official Tourism Guide</div>
          </div>
        </a>
        <div className="navbar-main">
          <button className="nav-button" onClick={() => scrollToSection('about')}>About</button>
          <button className="nav-button" onClick={() => scrollToSection('tour')}>Services</button>
          <button className="nav-button" onClick={() => scrollToSection('tour')}>Tour</button>
          <button className="nav-button" onClick={() => scrollToSection('contact')}>Contact</button>
        </div>
        <button className="nav-button sign-in-btn" onClick={openLoginModal}>Sign In</button>
      </nav>
        */}
      {/* Banner with Parallax Effect */}
      <div className="banner" ref={bannerRef}>
        <div className="parallax-bg bg-1"></div>
        <div className="parallax-bg bg-2"></div>
        <div className="parallax-bg bg-3"></div>
        <div className="parallax-bg bg-4"></div>
        <div className="parallax-bg bg-5"></div>
        <div className="parallax-bg bg-6"></div>
        <div className="parallax-bg bg-7"></div>
        <div className="parallax-bg bg-8"></div>
        <div className="parallax-bg bg-9"></div>
        <div className="parallax-bg bg-12"></div>
        <h1 className="banner-title animation-show text-6xl font-bold mb-6">Namma Mysuru</h1>
      </div>

      {/* About Section */}
      <div className="intro-section animation-section" id="about">
        <h2 className="animation-show text-4xl font-bold mb-6">Namma Mysuru</h2>
        <img src={`${base}image.png`} alt="Mysuru" className="animation-show intro-image mb-6" />
        <p className="animation-show intro-text mb-6">
          Welcome to Namma Mysuru<br/><br/>
          A digital gateway to the heart of the Royal City.<br/><br/>
          Mysuru is more than just a destination—it's an experience of heritage, culture, and modern living. With Namma Mysuru, we bring every detail of the city to your fingertips, creating a seamless journey for citizens and visitors alike.<br/><br/>
          Welcome to our travel world! We are passionate about creating unforgettable journeys that connect you with incredible destinations around the globe. Our expert team curates unique experiences that blend adventure, culture, and comfort, ensuring every trip becomes a cherished memory. From exotic beaches to mountain peaks, ancient cities to modern marvels, we bring you closer to the world's most amazing places.
        </p>
        <button className="animation-show subscribe-btn" onClick={openLoginModal}>Get Started</button>
      </div>

      {/* Features/Tour Section */}
      <div className="features-grid animation-section" id="tour">
        <div className="animation-show feature-card">
          <img src={`${base}map.jpg`} alt="Interactive Map" className="feature-image" />
          <div className="feature-description">
            <div>Explore Mysuru with an interactive map that highlights every landmark, road, and hidden gem. Tap to uncover history, stories, and user-shared experiences.</div>
          </div>
          <p className="mt-4 font-semibold">Interactive City Map</p>
        </div>
        
        <div className="animation-show feature-card">
          <img src={`${base}events.jpg`} alt="Events" className="feature-image" />
          <div className="feature-description">
            <div>Stay updated on Mysuru's vibrant festivals, cultural shows, and local events. Get dates, details, and even register directly within the app.</div>
          </div>
          <p className="mt-4 font-semibold">Events & Festivals Hub</p>
        </div>
        
        <div className="animation-show feature-card">
          <img src={`${base}planner.jpg`} alt="Itinerary Planner" className="feature-image" />
          <div className="feature-description">
            <div>Plan your trip in minutes! Choose your budget, travel style, and preferences to generate a personalized day-by-day itinerary.</div>
          </div>
          <p className="mt-4 font-semibold">Smart Itinerary Planner</p>
        </div>
        
        <div className="animation-show feature-card">
          <img src={`${base}hotel.jpg`} alt="Hotels & Dining" className="feature-image" />
          <div className="feature-description">
            <div>Find the perfect hotel, resort, or restaurant with detailed info, pricing, and filters for veg, non-veg, or budget-friendly dining.</div>
          </div>
          <p className="mt-4 font-semibold">Stay & Dine Guide</p>
        </div>
        
        <div className="animation-show feature-card">
          <img src={`${base}transport.jpg`} alt="Transport" className="feature-image" />
          <div className="feature-description">
            <div>Navigate the city with ease—find bus routes, metro info, auto-rickshaw guides, and even airport/train details in one place.</div>
          </div>
          <p className="mt-4 font-semibold">Transport & Connectivity</p>
        </div>
        
        <div className="animation-show feature-card">
          <img src={`${base}safety.jpg`} alt="Safety Info" className="feature-image" />
          <div className="feature-description">
            <div>Access essential details like emergency helplines, hospital and police station locations, and quick safety tips to travel worry-free.</div>
          </div>
          <p className="mt-4 font-semibold">Travel Info & Safety</p>
        </div>
        
        <div className="animation-show feature-card">
          <img src={`${base}community.jpg`} alt="Community" className="feature-image" />
          <div className="feature-description">
            <div>Share your travel stories, photos, and videos with the Mysuru community and get inspired by authentic experiences from others.</div>
          </div>
          <p className="mt-4 font-semibold">Community Gallery</p>
        </div>
        
        <div className="animation-show feature-card">
          <img src={`${base}eco_travel.jpg`} alt="Eco Travel" className="feature-image" />
          <div className="feature-description">
            <div>Choose eco-friendly travel with green transport, eco-stays, sustainable activities, and carbon offset tips to explore responsibly.</div>
          </div>
          <p className="mt-4 font-semibold">Sustainable Travel Options</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section animation-section" id="contact">
        <div className="contact-content">
          <div className="animation-show flex-1">
            <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
            <p className="text-lg leading-relaxed">
              Get in touch with us to plan your next adventure to Mysuru or beyond! Whether you have questions about our services or need help crafting the perfect itinerary, our team is here to assist you.
            </p>
          </div>
          <div className="animation-show flex-1">
            <form className="contact-form">
              <label htmlFor="name" className="font-medium text-gray-800">Your Name</label>
              <input type="text" id="name" placeholder="Enter your name" required className="form-input" />
              
              <label htmlFor="email" className="font-medium text-gray-800">Your Email</label>
              <input type="email" id="email" placeholder="Enter your email" required className="form-input" />
              
              <label htmlFor="message" className="font-medium text-gray-800">Your Message</label>
              <textarea id="message" placeholder="Enter your message" rows="5" required className="form-input resize-none"></textarea>
              
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
            
            <div className="social-links">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Follow us on Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Follow us on Twitter/X">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Follow us on Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Follow us on LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="animation-show mt-8 text-center">
          <p className="text-sm"> 2025 Travel World. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default LandingScreen
