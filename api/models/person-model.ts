import mongoose from 'mongoose'
const Schema = mongoose.Schema

const personSchema = new Schema(
    {
        name: {
            type: String,
            required: false,
        },
    },
    { timestamps: true, collection: 'persons' }
)

export default mongoose.models.persons ?? mongoose.model('persons', personSchema)
