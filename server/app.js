const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./db')

dotenv.config()

connectDB()

const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({ status: 'server is running' })
})

module.exports = app