import { Router } from 'express'
import { body, validationResult, query } from 'express-validator'
import ListerProfile from '../models/ListerProfile.js'
import { auth, requireRole } from '../middleware/auth.js'

const router = Router()

// Create or update lister profile (must be lister or admin)
router.post(
  '/profile',
  auth,
  requireRole('lister', 'admin'),
  [
    body('businessName').notEmpty().withMessage('Business name is required'),
    body('type').isIn(['hotel', 'restaurant', 'guide', 'transport', 'activity', 'other']).withMessage('Invalid type'),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

    const data = {
      user: req.user.id,
      businessName: req.body.businessName,
      type: req.body.type,
      description: req.body.description,
      phone: req.body.phone,
      email: req.body.email,
      website: req.body.website,
      address: req.body.address,
      location: req.body.location,
    }

    const existing = await ListerProfile.findOne({ user: req.user.id })
    if (existing) {
      Object.assign(existing, data)
      await existing.save()
      return res.json(existing)
    }

    const profile = await ListerProfile.create(data)
    res.status(201).json(profile)
  }
)

// Get current lister profile
router.get('/me', auth, requireRole('lister', 'admin'), async (req, res) => {
  const profile = await ListerProfile.findOne({ user: req.user.id })
  if (!profile) return res.status(404).json({ message: 'Profile not found' })
  res.json(profile)
})

// Public: list listers (optional filter by type)
router.get('/', [query('type').optional().isString()], async (req, res) => {
  const filter = {}
  if (req.query.type) filter.type = req.query.type
  const listers = await ListerProfile.find(filter).select('-email -phone')
  res.json(listers)
})

// Public: get a lister by id
router.get('/:id', async (req, res) => {
  const lister = await ListerProfile.findById(req.params.id)
  if (!lister) return res.status(404).json({ message: 'Lister not found' })
  res.json(lister)
})

export default router
