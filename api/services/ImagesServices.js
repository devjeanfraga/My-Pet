
const db = require('../models')
const Services = require('./Services')

class ImagesServices extends Services {
  constructor () {

    super('Images')
    
  }

  async crieImagens (formImage = [] ) {
    return db[this.model].bulkCreate(formImage)
  }

  async atualizarImagens (tableName, newValues = {}, condition = {}, transacao = {}) {
    return db[this.model].bulkUpdate( tableName, newValues, condition, transacao )
  }  
}

module.exports = ImagesServices