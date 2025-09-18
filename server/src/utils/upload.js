import multer from 'multer'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Place uploads under server/uploads (one level above src)
const uploadsDir = path.join(__dirname, '..', '..', 'uploads')
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true })
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadsDir),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname)
    const base = path.basename(file.originalname, ext).replace(/[^a-zA-Z0-9-_]/g, '')
    cb(null, `${Date.now()}-${base}${ext}`)
  },
})

const fileFilter = (_req, file, cb) => {
  const allowed = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']
  if (allowed.includes(file.mimetype)) return cb(null, true)
  cb(new Error('Only image files are allowed'))
}

export const upload = multer({ storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024 } })
