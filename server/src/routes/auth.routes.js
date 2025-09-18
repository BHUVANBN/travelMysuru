import { Router } from 'express'
import { body, validationResult } from 'express-validator'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

const router = Router()

const signToken = (user) =>
  jwt.sign({ id: user._id, role: user.role, name: user.name, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  })

// Register
router.post(
  '/register',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 chars'),
    body('role').optional().isIn(['user', 'lister', 'admin']).withMessage('Invalid role'),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

    const { name, email, password, role = 'user' } = req.body
    const exists = await User.findOne({ email })
    if (exists) return res.status(400).json({ message: 'Email already registered' })

    const user = await User.create({ name, email, password, role })
    const token = signToken(user)
    res.status(201).json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } })
  }
)

// Login
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) return res.status(400).json({ message: 'Invalid credentials' })

    const match = await user.matchPassword(password)
    if (!match) return res.status(400).json({ message: 'Invalid credentials' })

    const token = signToken(user)
    res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } })
  }
)

export default router
