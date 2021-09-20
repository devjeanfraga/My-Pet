const express =  require('express')
const routes = require('./routes')

const app = express()

routes(app)

app.listen(3838, () => console.log(' Api run !!!'))