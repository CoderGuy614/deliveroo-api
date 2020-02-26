// Packages
const express = require('express')
const cors = require('cors')
require('dotenv').config()

// Server

const app = express()
const database = require('./database')

// Middleware
//
app.use(cors())

// Routes

// app.use('/restaurants', require('./controllers/restaurants'))

// Start

app.listen(process.env.PORT, () => {
	console.log(`Ready on port ${process.env.PORT}`)
})

module.exports = app
