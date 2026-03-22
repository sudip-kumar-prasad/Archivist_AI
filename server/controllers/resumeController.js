// Resume Controller — stub (Phase 7 implementation)
const asyncHandler = require('../middleware/asyncHandler')

// @desc    Analyze uploaded resume PDF
// @route   POST /api/resume/analyze
exports.analyzeResume = asyncHandler(async (req, res) => {
  res.status(501).json({ success: false, message: 'Resume Analyzer coming in Phase 7' })
})
