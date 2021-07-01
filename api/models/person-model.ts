import mongoose from 'mongoose'
const Schema = mongoose.Schema

const personSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    position: {
      type: String,
      required: false,
    },
    company: {
      type: String,
      required: false,
    },
    bubbleLatitude: {
      type: Number,
      required: false,
    },
    bubbleLongtitude: {
      type: Number,
      required: false,
    },
  },
  { timestamps: true, collection: 'persons' }
)

export default mongoose.models.persons ??
  mongoose.model('persons', personSchema)
