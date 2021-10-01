const express = require('express')
const {urlencoded} = require('body-parser')

const clientsRoutes = require('./clientRoutes')
const petsRoutes = require('../routes/petsRoutes')

module.exports = app => {
  app.use(urlencoded({extended: true}))
  app.use(express.json())

  app.use(clientsRoutes)
  app.use(petsRoutes)
  /*
  
  app.use(diagnosesRoutes)
  app.use(sizesRoutes)
  app.use(typesRoutes)
  */
}