const express =  require('express')
const routes = require('./routes')
const multer = require('multer')
const storage = require('./config/uploads')
const {NotFound, InvalidFields, DataNotProvided} =require('../api/errors')


const app = express()

routes(app)

const uploads = multer({storage})

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

app.listen(3838, () => console.log(' Api run !!!'))

module.exports= app