const db = require('../models')
const Services = require('./Services')

class PetsServices extends Services {
  constructor () {
    super('Pets')

  }

  async createPet () {
    return await super.crie()
  }

}

module.exports = PetsServices