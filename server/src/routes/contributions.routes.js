import { Router } from 'express'
import { body, validationResult, query } from 'express-validator'
import { upload } from '../utils/upload.js'
import Contribution from '../models/Contribution.js'
import { auth, requireRole, optionalAuth } from '../middleware/auth.js'

const router = Router()

// Create a contribution (image required). Auth optional; capture name/email.
router.post(
  '/',
  optionalAuth,
  upload.single('image'),
  [
    body('name').notEmpty(),
    body('email').isEmail(),
    body('location').notEmpty(),
    body('title').notEmpty(),
    body('description').notEmpty(),
    body('category').isIn(['photo', 'story']),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })
    if (!req.file) return res.status(400).json({ message: 'Image is required' })

    const imageUrl = `/uploads/${req.file.filename}`
    const userId = req.user?.id

    const contribution = await Contribution.create({
      user: userId,
      name: req.body.name,
      email: req.body.email,
      location: req.body.location,
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      imageUrl,
    })

    res.status(201).json(contribution)
  }
)

// Public: list contributions (default approved)
router.get(
  '/',
  [query('status').optional().isIn(['approved', 'pending', 'rejected'])],
  async (req, res) => {
    const status = req.query.status || 'approved'
    const items = await Contribution.find({ status }).sort({ createdAt: -1 })
    res.json(items)
  }
)

// Auth: list my contributions
router.get('/mine', auth, async (req, res) => {
  const items = await Contribution.find({ user: req.user.id }).sort({ createdAt: -1 })
  res.json(items)
})

// Admin: approve or reject
router.patch('/:id/status', auth, requireRole('admin'), [body('status').isIn(['approved', 'rejected'])], async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })
  const item = await Contribution.findById(req.params.id)
  if (!item) return res.status(404).json({ message: 'Not found' })
  item.status = req.body.status
  await item.save()
  res.json(item)
})

export default router
