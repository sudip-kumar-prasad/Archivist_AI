const multer = require('multer')
const path = require('path')

const storage = multer.memoryStorage() // store in memory for processing

const fileFilter = (req, file, cb) => {
  const allowedTypes = ['.pdf', '.docx', '.txt']
  const ext = path.extname(file.originalname).toLowerCase()
  if (allowedTypes.includes(ext)) {
    cb(null, true)
  } else {
    cb(new Error(`File type not allowed. Accepted: ${allowedTypes.join(', ')}`), false)
  }
}

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
})

module.exports = upload
