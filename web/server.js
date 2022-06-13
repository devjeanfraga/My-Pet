const path = require('path');

const express = require('express');
const app = express()

const port = process.env.PORT || 3000; 

app.use( express.static( path.resolve(__dirname, './app/dist')))
app.get("/", function (req, res) {
  res.sendFile(path.resolve(__dirname , "app/build", "index.html"));
   });
//
app.listen(port, (()=> console.log(`Front run on ${port} 🚀`)))
