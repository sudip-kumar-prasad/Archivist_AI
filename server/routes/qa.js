const express = require('express')
const router = express.Router()
const qaController = require('../controllers/qaController')

// POST /api/qa/generate — generate Q&A from text
router.post('/generate', qaController.generateQA)

module.exports = router
