const express = require('express')
const {urlencoded} = require('body-parser')

const clientsRoutes = require('./clientRoutes')
const petsRoutes = require('../routes/petsRoutes')
const sexesRotes = require('./sexesRoutes')

module.exports = app => {
  app.use(urlencoded({extended: false}))
  app.use(express.json())

  app.use(clientsRoutes)
  app.use(petsRoutes)
  app.use(sexesRotes)
  /*
  
  app.use(diagnosesRoutes)
  app.use(sizesRoutes)
  app.use(typesRoutes)
  */
}