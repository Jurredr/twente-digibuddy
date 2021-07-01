// Import express
import express from 'express'

// Import mongoose
import mongoose from 'mongoose'

// Import API routes
const companyRoutes = require('./routes/company-routes')
const personRoutes = require('./routes/person-routes')

// Create express instance
const app = express()

// Connect to database
require('dotenv').config()
const DB_URI = String(process.env.DB_URI)
mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('Connected to the database!'))
  .then(startListening)
  .catch((error) =>
    console.warn("\nCouldn't connect to the database! \n" + error)
  )

// Parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// Parse application/json
app.use(express.json())

// Implement API routes
app.use(companyRoutes)
app.use(personRoutes)

// Start standalone server if directly running
function startListening() {
  if (require.main === module) {
    const port = process.env.PORT || 3001
    app.listen(port, () => {
      console.log(`API server listening on port ${port}`)
    })
  }
}

// Export express app
module.exports = app
