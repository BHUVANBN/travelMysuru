import mongoose from 'mongoose'

const contributionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, required: true },
    email: { type: String, required: true },
    location: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, enum: ['photo', 'story'], required: true },
    imageUrl: { type: String, required: true },
    status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
    likes: { type: Number, default: 0 },
  },
  { timestamps: true }
)

const Contribution = mongoose.model('Contribution', contributionSchema)
export default Contribution
