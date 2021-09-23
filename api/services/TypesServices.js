const { sequelize } = require('../models')
const database = require('../models')
const Services = require('./Services')

class TypesServices extends Services {
  constructor () {
    super('Types')
  }

  async AtualizarTipo (infos, where = {}) {
    return sequelize.transaction(async transacao => {
      await super.atualizarRegistros( infos, { ...where },  {transaction: transacao} )
      return await super.pegarUm({...where})
    })
  }

}

module.exports = TypesServices