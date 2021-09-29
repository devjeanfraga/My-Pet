const express =  require('express')
const routes = require('./routes')
const multer = require('multer')
const storage = require('./config/uploads')

const app = express()

routes(app)

const uploads = multer({storage})

app.listen(3838, () => console.log(' Api run !!!'))

module.exports= app