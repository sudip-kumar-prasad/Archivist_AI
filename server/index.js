require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const connectDB = require('./config/db')

// Route imports (stubs — will be implemented in later phases)
const chatRoutes    = require('./routes/chat')
const summarizeRoutes = require('./routes/summarize')
const qaRoutes      = require('./routes/qa')
const resumeRoutes  = require('./routes/resume')

const errorHandler  = require('./middleware/errorHandler')
const rateLimiter   = require('./middleware/rateLimiter')

// ─── Connect to MongoDB ───────────────────────────────────────
connectDB()

const app = express()

// ─── Security & Parsing Middleware ───────────────────────────
app.use(helmet())
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
}))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

// ─── Rate Limiting ────────────────────────────────────────────
app.use('/api', rateLimiter)

// ─── Health Check ─────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Archivist AI server is running 🚀' })
})

// ─── API Routes ───────────────────────────────────────────────
app.use('/api/chat',    chatRoutes)
app.use('/api/summarize', summarizeRoutes)
app.use('/api/qa',      qaRoutes)
app.use('/api/resume',  resumeRoutes)

// ─── Global Error Handler ─────────────────────────────────────
app.use(errorHandler)

// ─── Start Server ─────────────────────────────────────────────
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`🚀 Archivist AI server running on port ${PORT}`)
})

module.exports = app
