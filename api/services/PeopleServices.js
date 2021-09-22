
const database = require('../models')
const Services =  require('./Services')

class People extends Services {
  constructor () {
    super('People')
    //this.pets = new Services('Pets')
  }
  
  async atualizarPeople (body, peopleId) {
    return database.sequelize.transaction(async transacao => {
      await super.atualizarRegistro(body, peopleId, {transaction: transacao})
      return await super.pegarUm(peopleId)
    })
  }
}

module.exports = People
