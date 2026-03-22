// Chat Controller — stub (Phase 4 implementation)
const asyncHandler = require('../middleware/asyncHandler')

// @desc    Send message to AI chat assistant
// @route   POST /api/chat
exports.sendMessage = asyncHandler(async (req, res) => {
  res.status(501).json({ success: false, message: 'Chat feature coming in Phase 4' })
})

// @desc    Get conversation history
// @route   GET /api/chat/history
exports.getHistory = asyncHandler(async (req, res) => {
  res.status(501).json({ success: false, message: 'Chat history coming in Phase 4' })
})
