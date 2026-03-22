const express = require('express')
const router = express.Router()
const summarizeController = require('../controllers/summarizeController')
const upload = require('../middleware/upload')

// POST /api/summarize/text — summarize pasted text
router.post('/text', summarizeController.summarizeText)

// POST /api/summarize/file — upload PDF and summarize
router.post('/file', upload.single('file'), summarizeController.summarizeFile)

module.exports = router
