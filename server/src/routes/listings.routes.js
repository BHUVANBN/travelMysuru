import { Router } from 'express'
import { body, validationResult, query } from 'express-validator'
import Listing from '../models/Listing.js'
import ListerProfile from '../models/ListerProfile.js'
import { auth, requireRole } from '../middleware/auth.js'

const router = Router()

// Create listing (lister only)
router.post(
  '/',
  auth,
  requireRole('lister', 'admin'),
  [
    body('title').notEmpty(),
    body('category').isIn(['hotel', 'restaurant', 'activity', 'transport', 'other']),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

    const lister = await ListerProfile.findOne({ user: req.user.id })
    if (!lister) return res.status(400).json({ message: 'Create lister profile first' })

    const listing = await Listing.create({ ...req.body, lister: lister._id })
    res.status(201).json(listing)
  }
)

// Update listing (owner or admin)
router.put(
  '/:id',
  auth,
  requireRole('lister', 'admin'),
  async (req, res) => {
    const listing = await Listing.findById(req.params.id)
    if (!listing) return res.status(404).json({ message: 'Listing not found' })

    if (req.user.role !== 'admin') {
      const lister = await ListerProfile.findOne({ user: req.user.id })
      if (!lister || listing.lister.toString() !== lister._id.toString()) {
        return res.status(403).json({ message: 'Forbidden' })
      }
    }

    Object.assign(listing, req.body)
    await listing.save()
    res.json(listing)
  }
)

// Public: list listings with optional filters
router.get(
  '/',
  [
    query('category').optional().isString(),
    query('q').optional().isString(),
  ],
  async (req, res) => {
    const filter = { isActive: true }
    if (req.query.category) filter.category = req.query.category
    if (req.query.q) filter.title = { $regex: req.query.q, $options: 'i' }

    const listings = await Listing.find(filter).populate('lister', 'businessName type')
    res.json(listings)
  }
)

// Public: get listing by id
router.get('/:id', async (req, res) => {
  const listing = await Listing.findById(req.params.id).populate('lister', 'businessName type')
  if (!listing) return res.status(404).json({ message: 'Listing not found' })
  res.json(listing)
})

export default router
