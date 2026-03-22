const express = require('express')
const router = express.Router()
const resumeController = require('../controllers/resumeController')
const upload = require('../middleware/upload')

// POST /api/resume/analyze — upload resume PDF and analyze
router.post('/analyze', upload.single('resume'), resumeController.analyzeResume)

module.exports = router
