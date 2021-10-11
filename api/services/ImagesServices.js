
const db = require('../models')
const Services = require('./Services')

class ImagesServices extends Services {
  constructor () {

    super('Images')
    
  }

  async crieImagens (formImage = [], where = {},  transacao = {}) {
    return db[this.model].bulkCreate(formImage, {where: where } ,transacao)
  }

}

module.exports = ImagesServices