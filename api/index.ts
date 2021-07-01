// Import express
import express from 'express'

// Import mongoose
import mongoose from 'mongoose'

import csv from 'csv'
import { readFileSync } from 'fs'
import { createCompany } from './controllers/company-controller'

// Import API routes
const companyRoutes = require('./routes/company-routes')
const personRoutes = require('./routes/person-routes')
const connectionRoutes = require('./routes/connection-routes')

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
app.use(connectionRoutes)

// Start standalone server if directly running
function startListening() {
  if (require.main === module) {
    const port = process.env.PORT || 3001
    app.listen(port, () => {
      console.log(`API server listening on port ${port}`)
    })
  }

  return

  // @ts-ignore
  const generateNumber = function (min, max) {
    const range = max - min
    return min + range * Math.random()
  }

  let i = 0
  csv
    // @ts-ignore
    .parse(readFileSync('./assets/datasets/companies_details.csv').toString())
    .pipe(
      // @ts-ignore
      csv.transform(function (record) {
        i++
        if (i === 1) return
        if (i > 50) return

        createCompany(
          record[0],
          record[1],
          record[2].replace(' employees', ''),
          record[3],
          'Our company provides various services that help you in the digital world of Twente.',
          record[5],
          record[6].replace('.0', ''),
          record[9],
          'Hengelosestraat 22',
          generateNumber(52.10603712615544, 52.30975249383111),
          generateNumber(6.744700622558593, 7.052454528808594)
        )
      })
    )
}

// Export express app
module.exports = app
