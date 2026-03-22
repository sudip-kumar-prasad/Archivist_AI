// Summarize Controller — stub (Phase 5 implementation)
const asyncHandler = require('../middleware/asyncHandler')

// @desc    Summarize pasted text
// @route   POST /api/summarize/text
exports.summarizeText = asyncHandler(async (req, res) => {
  res.status(501).json({ success: false, message: 'Summarizer coming in Phase 5' })
})

// @desc    Summarize uploaded PDF
// @route   POST /api/summarize/file
exports.summarizeFile = asyncHandler(async (req, res) => {
  res.status(501).json({ success: false, message: 'PDF Summarizer coming in Phase 5' })
})
