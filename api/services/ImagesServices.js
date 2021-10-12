
const db = require('../models')
const Services = require('./Services')

class ImagesServices extends Services {
  constructor () {

    super('Images')
    
  }

  async crieImagens (formImage = [] ) {
    return db[this.model].bulkCreate(formImage)
  }

}

module.exports = ImagesServices