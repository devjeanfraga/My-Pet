const database = require('../models')
const Services = require('./Services')

class DiagnosesServices extends Services {
  constructor(){
    super('Diagnoses')
  }
}

module.exports = DiagnosesServices