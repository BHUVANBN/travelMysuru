import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

import connectDB from './config/db.js'
import authRoutes from './routes/auth.routes.js'
import listersRoutes from './routes/listers.routes.js'
import listingsRoutes from './routes/listings.routes.js'
import contributionsRoutes from './routes/contributions.routes.js'
import publicRoutes from './routes/public.routes.js'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// Middleware
app.use(helmet())
const clientOrigin = process.env.CLIENT_ORIGIN
app.use(cors({
  origin: clientOrigin ? [clientOrigin] : true,
  credentials: true
}))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

// Static files for uploads
const uploadsPath = path.join(__dirname, '..', 'uploads')
app.use('/uploads', express.static(uploadsPath))

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/listers', listersRoutes)
app.use('/api/listings', listingsRoutes)
app.use('/api/contributions', contributionsRoutes)
app.use('/api/public', publicRoutes)

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' })
})

// Global error handler
app.use((err, req, res, next) => {
  console.error(err)
  res.status(err.status || 500).json({ message: err.message || 'Server error' })
})

const PORT = process.env.PORT || 5000

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  })
  .catch((err) => {
    console.error('Failed to connect to DB', err)
    process.exit(1)
  })
