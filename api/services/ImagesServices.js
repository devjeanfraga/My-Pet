
const db = require('../models')
const Services = require('./Services')

class ImagesServices extends Services {
  constructor () {

    super('Images')
    
  }

  async crieImagens (formImage = [],   transacao = {}) {
    return db[this.model].bulkCreate(formImage, transacao)
  }

  async apagueImagens (tableName, where = {}) {
    return db[this.model].bulkDelete(tableName, where).then(()=>{console.log})
  }   
}

module.exports = ImagesServices