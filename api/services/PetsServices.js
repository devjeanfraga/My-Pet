const database = require('../models')
const Services = require('./Services')

class PetsServices extends Services {
  constructor () {
    super('Pets')
  }

}

module.exports = PetsServices