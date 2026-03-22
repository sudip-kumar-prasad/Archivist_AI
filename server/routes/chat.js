const express = require('express')
const router = express.Router()
const chatController = require('../controllers/chatController')

// POST /api/chat — send a message to the AI assistant
router.post('/', chatController.sendMessage)

// GET /api/chat/history — get conversation history
router.get('/history', chatController.getHistory)

module.exports = router
