import mongoose from 'mongoose'

const listingSchema = new mongoose.Schema(
  {
    lister: { type: mongoose.Schema.Types.ObjectId, ref: 'ListerProfile', required: true },
    title: { type: String, required: true },
    description: String,
    category: { type: String, enum: ['hotel', 'restaurant', 'activity', 'transport', 'other'], required: true },
    images: [String],
    priceRange: String,
    address: String,
    location: {
      lat: Number,
      lng: Number,
    },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
)

const Listing = mongoose.model('Listing', listingSchema)
export default Listing
