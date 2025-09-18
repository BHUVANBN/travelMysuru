import { Router } from 'express'

const router = Router()

// Static curated data for now (can be moved to DB later)
const events = [
  { id: 1, title: 'Mysuru Dasara Festival', date: 'October 15-24, 2025', location: 'Mysuru Palace & City', description: 'Grand 10-day festival', category: 'Cultural', image: '', price: 'Free', featured: true },
]

const places = [
  { id: 1, name: 'Mysuru Palace', coords: [12.3052, 76.6552], description: 'Royal residence' },
]

const hotels = [
  { id: 1, name: 'Lalitha Mahal Palace Hotel', category: 'luxury', location: 'Nazarbad', priceRange: '₹8,000 - ₹15,000', rating: 4.8 },
]

const restaurants = [
  { id: 1, name: 'RRR Restaurant', category: 'veg', location: 'Gandhi Square', priceRange: '₹200 - ₹400', rating: 4.7, cuisine: 'South Indian Thali' },
]

router.get('/events', (_req, res) => res.json(events))
router.get('/places', (_req, res) => res.json(places))
router.get('/hotels', (_req, res) => res.json(hotels))
router.get('/restaurants', (_req, res) => res.json(restaurants))

export default router
