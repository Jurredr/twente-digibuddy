import mongoose from 'mongoose'
const Schema = mongoose.Schema

const companyConnections = new Schema(
  {
    company1: {
      type: String,
      required: true,
      unique: true,
    },
    company2: {
      type: String,
      required: true,
      unique: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, collection: 'company_connections' }
)

export default mongoose.models.company_connections ??
  mongoose.model('company_connections', companyConnections)
