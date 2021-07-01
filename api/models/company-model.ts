import mongoose from 'mongoose'
const Schema = mongoose.Schema

const companySchema = new Schema(
  {
    linkedin_url: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    company_size: {
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
    headquarters_city: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    comparable: {
      type: String,
      required: false,
    },
  },
  { timestamps: true, collection: 'companies' }
)

export default mongoose.models.companies ??
  mongoose.model('companies', companySchema)
