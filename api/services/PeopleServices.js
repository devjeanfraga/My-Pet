
const database = require('../models')
const Services =  require('./Services')
const InvalidFields =  require('../errors/InvalidFields')



class People extends Services {
  constructor () {
    super('People')

  }


  async atualizarPeople (body, peopleId) {
    return database.sequelize.transaction(async transacao => {
      await super.atualizarRegistro(body, peopleId, {transaction: transacao})
      return await super.pegarUm(peopleId)
    })
  }
}

module.exports = People
