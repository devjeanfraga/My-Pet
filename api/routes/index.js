const express = require('express')
const {urlencoded} = require('body-parser')

module.exports = app => {
  app.use(urlencoded({extended: true}))
  app.use(express.json())
}