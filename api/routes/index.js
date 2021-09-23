const express = require('express')
const {urlencoded} = require('body-parser')

const peopleRoutes = require('./peopleRoutes')
const petsRoutes = require('./petsRoutes')
const diagnosesRoutes = require('./diagnosesRoutes')
const sizesRoutes = require('./sizesRoutes')
const typesRoutes = require('./typesRoutes')

module.exports = app => {
  app.use(urlencoded({extended: true}))
  app.use(express.json())

  app.use(peopleRoutes)
  app.use(petsRoutes)
  app.use(diagnosesRoutes)
  app.use(sizesRoutes)
  app.use(typesRoutes)
}