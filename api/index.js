require('dotenv').config()
const express =  require('express')
const routes = require('./routes')
const multer = require('multer')
const storage = require('./config/uploads')
const path = require('path')
const cors = require('cors')
const {NotFound, InvalidFields, DataNotProvided} =require('../api/errors')


const app = express()

app.use(cors())
routes(app)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
//const uploads = multer({storage})

app.use((erro, req, res, next) =>{
  let status = 500
    if( erro instanceof NotFound) {
      status = 404
    }
    if (erro instanceof InvalidFields || DataNotProvided) {
      status = 400
    }

    return res.status(status).send({
      name: erro.name,
      message: erro.message,
      id: erro.idErr
    })
})

const port =  process.env.PORT || 3838;

app.listen(port, () => console.log(`API run on ${port}`))

module.exports = app