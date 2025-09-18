import mongoose from 'mongoose'

const listerProfileSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    businessName: { type: String, required: true },
    type: { type: String, enum: ['hotel', 'restaurant', 'guide', 'transport', 'activity', 'other'], required: true },
    description: String,
    phone: String,
    email: String,
    website: String,
    address: String,
    location: {
      lat: Number,
      lng: Number,
    },
  },
  { timestamps: true }
)

const ListerProfile = mongoose.model('ListerProfile', listerProfileSchema)
export default ListerProfile
