// Packages
const express = require('express')
const cors = require('cors')
require('dotenv').config()

// Server

const app = express()
const database = require('./database')

// Middleware

app.use(cors())

// Routes

app.use('/houses', require('./controllers/houses'))
app.use('/types', require('./controllers/types'))
app.use('/amenities', require('./controllers/amenities'))
app.use('/reviews', require('./controllers/reviews'))

// Start

app.listen(process.env.PORT, () => {
	console.log(`Ready on port ${process.env.PORT}`)
})

module.exports = app
