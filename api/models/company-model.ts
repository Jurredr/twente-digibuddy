import mongoose from 'mongoose'
const Schema = mongoose.Schema

const companySchema = new Schema(
  {
    linkedinUrl: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    companySize: {
      type: String,
      required: false,
    },
    industry: {
      type: String,
      required: false,
    },
    about: {
      type: String,
      required: false,
    },
    website: {
      type: String,
      required: false,
    },
    founded: {
      type: String,
      required: false,
    },
    headquartersCity: {
      type: String,
      required: false,
    },
    address: {
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
  { timestamps: true, collection: 'companies' }
)

export default mongoose.models.companies ??
  mongoose.model('companies', companySchema)
