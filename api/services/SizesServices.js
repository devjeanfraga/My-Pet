const database = require('../models')
const Services = require('./Services')

class SizesServices extends Services {
  constructor () {
    super ('Sizes')
  }

  async atualizarSizes (infos, where = {} ) {
    return  database.sequelize.transaction(async transacao => {
      await super.atualizarRegistros(infos,{...where}, {transaction: transacao})
      return await super.pegarUm({...where})
    })
  }
}

module.exports = SizesServices 