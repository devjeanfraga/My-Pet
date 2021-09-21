const express = require('express')
const {urlencoded} = require('body-parser')

const peopleRoutes = require('./peopleRoutes')

module.exports = app => {
  app.use(urlencoded({extended: true}))
  app.use(express.json())

  app.use(peopleRoutes)
}