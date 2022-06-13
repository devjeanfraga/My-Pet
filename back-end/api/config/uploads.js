const path = require('path')
const multer = require('multer')


  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '..','uploads'))
    },
  
    filename: function (req, file , cb) {
      const fileName = `${file.fieldname}-${Date.now()}-${path.extname(file.originalname)}`
      cb(null,fileName )
    }
  })

  module.exports = storage
