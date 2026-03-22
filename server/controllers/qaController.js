// Q&A Controller — stub (Phase 6 implementation)
const asyncHandler = require('../middleware/asyncHandler')

// @desc    Generate Q&A from text
// @route   POST /api/qa/generate
exports.generateQA = asyncHandler(async (req, res) => {
  res.status(501).json({ success: false, message: 'Q&A Generator coming in Phase 6' })
})
