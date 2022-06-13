const path = require('path');

const express = require('express');
const app = express()

const port = process.env.PORT || 3000; 

app.use('/*', express.static( path.resolve(__dirname, './app/dist')))


app.listen(port, (()=> console.log(`Front run on ${port} 🚀`)))
