import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import ResponsiveFooter from './components/ResponsiveFooter'
import MapScreen from './screens/MapScreen'
import EventsScreen from './screens/EventsScreen'
import ItineraryScreen from './screens/ItineraryScreen'
import HotelsFoodScreen from './screens/HotelsFoodScreen'
import SafetyScreen from './screens/SafetyScreen'
import EcoTravelScreen from './screens/EcoTravelScreen'
import ContributionScreen from './screens/ContributionScreen'
import ProtectedRoute from './components/ProtectedRoute'
import GuestRoute from './components/GuestRoute'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import LandingScreen from './screens/LandingScreen'  // add this import

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Show navbar for guests too */}
        <Navigation />
        <main className="flex-1">
          <Routes>
            {/* Public landing at '/' shows blank page for guests, Home after login */}
            <Route path="/" element={<LandingScreen />} />

            {/* Guest-only routes */}
            <Route element={<GuestRoute />}>
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
            </Route>

            {/* Protected routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/map" element={<MapScreen />} />
              <Route path="/events" element={<EventsScreen />} />
              <Route path="/itinerary" element={<ItineraryScreen />} />
              <Route path="/hotels-food" element={<HotelsFoodScreen />} />
              <Route path="/safety" element={<SafetyScreen />} />
              <Route path="/eco-travel" element={<EcoTravelScreen />} />
              <Route path="/contribute" element={<ContributionScreen />} />
            </Route>
          </Routes>
        </main>
        {/* Show footer for guests too */}
        <ResponsiveFooter />
      </div>
    </Router>
  )
}

export default App